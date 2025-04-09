import { createContext, useContext } from "react";

export const AuthContext = createContext({
	user: null,
	logout: () => {},
});

export const useAuth = () => useContext(AuthContext);
