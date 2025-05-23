import { createContext, useContext } from "react";

export function parseToken(token) {
	var base64Url = token.split(".")[1];
	var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
	var jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split("")
			.map(function (c) {
				return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join("")
	);

	return JSON.parse(jsonPayload);
}

export const AuthContext = createContext({
	token: null,
	logout: () => {},
	saveToken: () => {},
	savePic: () => {},
	profilePic: null,
	projectSlug: null,
	API: {},
});

export const useAuth = () => useContext(AuthContext);
