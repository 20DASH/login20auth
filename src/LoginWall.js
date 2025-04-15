import { useAuth } from "./authContext.js";

const LoginWall = ({ login, children }) => {
	const { token } = useAuth();
	return token ? children : login;
};

export default LoginWall;
