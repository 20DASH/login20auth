import React from "react";
import { useAuth } from "./authContext";

const LoginWall = ({ login, children }) => {
	const { token } = useAuth();
	return token ? children : login;
};

export default LoginWall;
