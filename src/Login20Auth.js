"use client";

import React, { useEffect, useState } from "react";
import { AuthContext } from "./authContext.js";

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
			const dataAtual = new Date();
			dataAtual.setDate(dataAtual.getDate() + 29);
			localStorage.setItem("expDate", dataAtual);
		} else {
			localStorage.removeItem("token");
			localStorage.removeItem("expDate");
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
