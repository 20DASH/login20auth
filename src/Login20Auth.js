"use client";

import React, { useEffect, useState } from "react";
import { AuthContext, parseToken } from "./authContext.js";

export default function Login20Auth({
	children,
	content,
	projectSlug,
	onError = () => {},
	onStartLogin = () => {},
}) {
	const [token, setToken] = useState(null);
	const [profilePic, setProfilePic] = useState(null);

	const saveToken = (newToken) => {
		if (newToken) {
			localStorage.setItem("token", newToken);
		} else {
			localStorage.removeItem("token");
			localStorage.removeItem("profilePic");
			setProfilePic(null);
		}
		setToken(newToken);
	};

	const savePic = (pic) => {
		if (pic) {
			setProfilePic(pic);
			localStorage.setItem("profilePic", pic);
		}
	};

	const logout = () => {
		saveToken(null);
	};

	useEffect(() => {
		setToken(localStorage.getItem("token"));
		setProfilePic(localStorage.getItem("profilePic"));
	}, []);

	useEffect(() => {
		if (token) {
			try {
				let tokenExpDate = parseToken(token).exp;
				if (!tokenExpDate) throw Error();
				if (Date.now() / 1000 > tokenExpDate) {
					onError("expired token");
					setToken(null);
				}
			} catch (error) {
				onError("invalid token");
				setToken(null);
			}
		}
	}, [token]);

	const contextValue = {
		token,
		logout,
		saveToken,
		savePic,
		profilePic,
		projectSlug,
		onStartLogin,
		onError,
	};

	return (
		<AuthContext.Provider value={contextValue}>
			{token ? content : children}
		</AuthContext.Provider>
	);
}
