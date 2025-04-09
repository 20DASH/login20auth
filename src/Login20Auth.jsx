"use client";

import { useState, ReactNode } from "react";
import { AuthContext } from "./authContext.jsx";

export default function Login20Auth({ children }) {
	const [user, setUser] = useState(null);
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		// Add real authentication logic here
		if (username && password) {
			setUser(username); // You might want to hash, verify, etc.
		}
	};

	const logout = () => {
		setUser(null);
		setUsername("");
		setPassword("");
	};

	if (!user) {
		return (
			<div>
				<h2>Login</h2>
				<input
					placeholder="Username"
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button onClick={handleLogin}>Log In</button>
			</div>
		);
	}

	return (
		<AuthContext.Provider value={{ user, logout }}>
			{children}
		</AuthContext.Provider>
	);
}
