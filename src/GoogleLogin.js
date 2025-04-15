// GoogleLogin.js
import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { loginGoogle } from "./API.js";
import { useAuth } from "./authContext.js";

const InnerComponent = ({ onClick, children, ...buttonProps }) => {
	const { saveToken, savePic, projectSlug, onStartLogin, onError } =
		useAuth();

	const handleGLogin = useGoogleLogin({
		onSuccess: (response) => {
			onStartLogin(); // tell Login20Auth login has started

			loginGoogle(response.access_token, projectSlug)
				.then((backendRes) => {
					saveToken(backendRes.token);
					savePic(backendRes.pic);
				})
				.catch((err) => {
					console.error("Login failed", err);
					onError(err);
				});
		},
		onError: (err) => {
			console.error("OAuth error", err);
			onError(err);
		},
		onNonOAuthError: (err) => {
			console.error("Non-OAuth error", err);
			onError(err);
		},
	});

	return (
		<button
			type="button"
			onClick={(e) => {
				onClick && onClick(e);
				onStartLogin();
				handleGLogin();
			}}
			{...buttonProps}
		>
			{children}
		</button>
	);
};

const GoogleLogin = ({ clientID, children, ...buttonProps }) => {
	return (
		<GoogleOAuthProvider clientId={clientID}>
			<InnerComponent {...buttonProps}>{children}</InnerComponent>
		</GoogleOAuthProvider>
	);
};

export default GoogleLogin;
