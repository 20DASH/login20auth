import React, { createContext, useContext, useState } from "react";
import { loginEmail, loginPincode } from "./API";
import { useAuth } from "./authContext.js";

const PincodeContext = createContext();

export const usePincode = () => useContext(PincodeContext);

export const PincodeLoginForm = ({ onSubmit, children, ...props }) => {
	const { saveToken, projectSlug, onStartLogin, onError } = useAuth();

	const [emailValue, setEmailValue] = useState("");
	const [pinValue, setPinValue] = useState("");
	const [emailSent, setEmailSent] = useState(false);

	const sendEmail = () => {
		if (emailValue) {
			setEmailSent(true);
			loginEmail(emailValue, projectSlug)
				.then((r) => saveToken(r.token))
				.catch((e) => {
					setEmailSent(false);
					onError(e);
				});
		} else {
			if (onError) {
				onError("Empty email");
			}
		}
	};

	return (
		<PincodeContext.Provider
			value={{
				emailValue,
				setEmailValue,
				pinValue,
				setPinValue,
				emailSent,
				setEmailSent,
				sendEmail,
			}}
		>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					if (emailSent) {
						if (pinValue) {
							loginPincode(pinValue, emailValue, projectSlug)
								.then((r) => saveToken(r.token))
								.catch(onError);
						} else {
							onError("Empty PIN");
						}
					} else {
						sendEmail();
					}
					onSubmit && onSubmit("Sumbitedd");
				}}
				{...props}
			>
				{children}
			</form>
		</PincodeContext.Provider>
	);
};

export const PincodeLoginEmailInput = ({ onChange = () => {}, ...props }) => {
	const { emailValue, setEmailValue } = usePincode();

	return (
		<input
			type="email"
			placeholder="email"
			value={emailValue}
			onChange={(e) => {
				setEmailValue(e.target.value);
				onChange(e);
			}}
			{...props}
		/>
	);
};

export const PincodeLoginPinInput = ({ onChange = () => {}, ...props }) => {
	const { pinValue, setPinValue } = usePincode();

	return (
		<input
			type="text"
			placeholder="pin"
			value={pinValue}
			onChange={(e) => {
				setPinValue(e.target.value);
				onChange(e);
			}}
			{...props}
		/>
	);
};

export const PincodeLoginClearButton = ({
	onClick = () => {},
	children,
	...props
}) => {
	const { setEmailSent, setEmailValue } = usePincode();

	return (
		<button
			onClick={(e) => {
				setEmailValue("");
				setEmailSent(false);
				onClick(e);
			}}
			{...props}
		>
			{children}
		</button>
	);
};

export const PincodeLoginResendButton = ({
	onClick = () => {},
	children,
	...props
}) => {
	const { sendEmail } = usePincode();

	return (
		<button
			onClick={(e) => {
				sendEmail();
				onClick(e);
			}}
			{...props}
		>
			{children}
		</button>
	);
};
