// GoogleLogin.js
import React, { useState, useCallback, useEffect } from "react";
import {
	PublicClientApplication,
	EventType,
	LogLevel,
} from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";

import { useAuth } from "./authContext.js";

const MicrosoftLogin = ({
	clientID,
	children,
	onClick = (e) => {},
	onStartLogin = () => {},
	onError = (message) => {},
	...buttonProps
}) => {
	const { saveToken, savePic, projectSlug, API } = useAuth();

	const msalConfig = {
		auth: {
			clientId: clientID, // This is the ONLY mandatory field that you need to supply.
			authority: "https://login.microsoftonline.com/common/", // Replace the placeholder with your tenant subdomain
			redirectUri: "/", // Points to window.location.origin. You must register this URI on Microsoft Entra admin center/App Registration.
			postLogoutRedirectUri: "/", // Indicates the page to navigate after logout.
			navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
		},
		cache: {
			cacheLocation: "sessionStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
			storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
		},
		system: {
			loggerOptions: {
				loggerCallback: (level, message, containsPii) => {
					if (containsPii) {
						return;
					}
					switch (level) {
						case LogLevel.Error:
							onError(message);
							return;
						case LogLevel.Warning:
							console.warn(message);
							return;
						default:
							return;
					}
				},
			},
		},
	};
	const [msalInstance] = useState(new PublicClientApplication(msalConfig));

	const onLoginSuccess = useCallback(
		async (account) => {
			try {
				console.log("token da microsoft: ", account.idToken);
				console.log("projectSlug: ", projectSlug);

				const token = await API.loginMicrosoft(
					account.idToken,
					projectSlug
				);
				console.log("token recebido da nossa API: ", token);
				saveToken(token.token);

				const tokenResponse = await msalInstance.acquireTokenSilent({
					scopes: ["User.Read"],
					account: account,
				});
				const profilePic = await API.microsoftProfilePicture(
					tokenResponse.accessToken
				);
				savePic(profilePic);
			} catch (error) {
				onError(error);
			}
		},
		[API, msalInstance]
	);

	useEffect(() => {
		// Handle login success events
		msalInstance.addEventCallback((event) => {
			if (
				event.eventType === EventType.LOGIN_SUCCESS &&
				event.payload?.account
			) {
				const account = event.payload.account;
				msalInstance.setActiveAccount(account);
				onLoginSuccess(account);
			}
		});
	}, [msalInstance, onLoginSuccess]);

	const handleMsLogin = () => {
		sessionStorage.clear();
		msalInstance
			.loginPopup({
				scopes: [
					"openid",
					"profile",
					"email",
					"User.Read",
					"offline_access",
				],
			})
			.catch((error) => {
				console.log(error);
				onError(error);
			});
	};

	return (
		<MsalProvider instance={msalInstance}>
			<button
				type="button"
				onClick={(e) => {
					onClick(e);
					onStartLogin();
					handleMsLogin();
				}}
				{...buttonProps}
			>
				{children}
			</button>
		</MsalProvider>
	);
};

export default MicrosoftLogin;
