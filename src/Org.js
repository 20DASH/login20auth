import { useEffect } from "react";
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

export const useOrg = () => useContext(AuthContext);

export function OrgProvider({ onError = (e) => console.log(e), children }) {
	const { token, saveToken, logout } = useAuth();

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

	return (
		<OrgContext.Provider
			value={{
				orgList: orgList,
				currentOrgID: currentOrgID,
				isAdmin: isAdmin,
				createOrg: async (name) => {
					try {
						const resultado = await api.CreateOrganization(
							name,
							token,
							projectSlug
						);
						if (resultado) this.switch(resultado.org_id);
					} catch (e) {
						onError({ cause: "createOrg", error: e });
					}
				},
				switchOrg: async (orgID) => {
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
				},
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
				deleteOrg: async () => {
					try {
						const nextOrgID = orgList.find(
							(i) => i.id != currentOrgID
						)?.id;
						if (nextOrgID) {
							const oldToken = token;
							await this.SwitchOrganization(nextOrgID);
							await api.DeleteOrganization(oldToken, projectSlug);
						} else {
							await api.DeleteOrganization(token, projectSlug);
							logout();
						}
					} catch (e) {
						onError({ cause: "deleteOrg", error: e });
					}
				},
				leaveOrg: async () => {
					try {
						const nextOrgID = orgList.find(
							(i) => i.id != currentOrgID
						)?.id;
						if (nextOrgID) {
							const oldToken = token;
							await this.SwitchOrganization(nextOrgID);
							await api.LeaveOrganization(oldToken, projectSlug);
						} else {
							await api.LeaveOrganization(token, projectSlug);
							logout();
						}
					} catch (e) {
						onError({ cause: "leaveOrg", error: e });
					}
				},
			}}
		>
			{children}
		</OrgContext.Provider>
	);
}
