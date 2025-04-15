import { useEffect, createContext, useContext, useState } from "react";
import * as api from "./API.js";
import { parseToken, useAuth } from "./authContext.js";

const OrgContext = createContext({
	orgList: [],
	currentOrgID: null,
	isAdmin: false,
	createOrg: async () => {},
	switchOrg: async () => {},
	orgMembers: async () => {},
	addOrUpdateOrgMember: async () => {},
	deleteOrgMember: async () => {},
	deleteOrg: async () => {},
	leaveOrg: async () => {},
});

export const useOrg = () => useContext(OrgContext);

export function OrgProvider({ onError = (e) => console.log(e), children }) {
	const { token, saveToken, logout, projectSlug } = useAuth();

	const [orgList, setOrgList] = useState([]);
	const [currentOrgID, setCurrentOrgID] = useState(null);
	const [isAdmin, setIsAdmin] = useState(false);

	useEffect(() => {
		if (token) {
			const parsedToken = parseToken(token);
			setOrgList(parsedToken.user_organizations);

			setCurrentOrgID(parsedToken.org_id);
			setIsAdmin(parsedToken.role === "admin");
		} else {
			setOrgList([]);
			setIsAdmin(false);
		}
	}, [token]);

	const switchOrg = async (orgID) => {
		try {
			const response = await api.SwitchOrganization(
				orgID,
				token,
				projectSlug
			);
			saveToken(response.token);
		} catch (e) {
			onError({ cause: "switchOrg", error: e });
		}
	};

	const createOrg = async (name) => {
		try {
			const resultado = await api.CreateOrganization(
				name,
				token,
				projectSlug
			);
			if (resultado.error) throw resultado.error;
			await switchOrg(resultado.org_id);
		} catch (e) {
			onError({ cause: "createOrg", error: e });
		}
	};

	const deleteOrg = async () => {
		try {
			const nextOrgID = orgList.find((i) => i.id !== currentOrgID)?.id;
			if (nextOrgID) {
				const oldToken = token;
				await switchOrg(nextOrgID);
				await api.DeleteOrganization(oldToken, projectSlug);
				await switchOrg(nextOrgID);
			} else {
				await api.DeleteOrganization(token, projectSlug);
				logout();
			}
		} catch (e) {
			onError({ cause: "deleteOrg", error: e });
		}
	};

	const leaveOrg = async () => {
		try {
			const nextOrgID = orgList.find((i) => i.id !== currentOrgID)?.id;
			if (nextOrgID) {
				const oldToken = token;
				await switchOrg(nextOrgID);
				await api.LeaveOrganization(oldToken, projectSlug);
				await switchOrg(nextOrgID);
			} else {
				await api.LeaveOrganization(token, projectSlug);
				logout();
			}
		} catch (e) {
			onError({ cause: "leaveOrg", error: e });
		}
	};

	return (
		<OrgContext.Provider
			value={{
				orgList,
				currentOrgID,
				isAdmin,
				createOrg,
				switchOrg,
				orgMembers: async () => {
					try {
						return await api.ListOrganizationMembers(
							token,
							projectSlug
						);
					} catch (e) {
						onError({ cause: "orgMembers", error: e });
					}
				},
				addOrUpdateOrgMember: async (email, role) => {
					try {
						return api.AddOrganizationMember(
							token,
							email,
							role,
							projectSlug
						);
					} catch (e) {
						onError({ cause: "addOrUpdateOrgMember", error: e });
					}
				},
				deleteOrgMember: async (email) => {
					try {
						return await api.DeleteOrganizationMember(
							token,
							email,
							projectSlug
						);
					} catch (e) {
						onError({ cause: "deleteOrgMember", error: e });
					}
				},
				deleteOrg,
				leaveOrg,
			}}
		>
			{children}
		</OrgContext.Provider>
	);
}
