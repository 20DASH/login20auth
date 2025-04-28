import React, { createContext, useContext, useState } from "react";
import { useAuth } from "./authContext.js";

const PincodeContext = createContext();

const usePincode = () => useContext(PincodeContext);

const PincodeLoginForm = ({
	onSubmit,
	children,
	onStartLogin = () => {},
	onError = () => {},
	...props
}) => {
	const { saveToken, projectSlug, API } = useAuth();

	const [email, setEmailValue] = useState("");
	const [pinValue, setPinValue] = useState("");
	const [emailSent, setEmailSent] = useState(false);

	const sendEmail = () => {
		if (email) {
			onStartLogin();
			setEmailSent(true);
			API.loginEmail(email, projectSlug)
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
				email,
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
							API.loginPincode(pinValue, email, projectSlug)
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

const PincodeLoginEmailInput = ({ onChange = () => {}, ...props }) => {
	const { email, setEmailValue } = usePincode();

	return (
		<input
			type="email"
			placeholder="email"
			value={email}
			onChange={(e) => {
				setEmailValue(e.target.value);
				onChange(e);
			}}
			{...props}
		/>
	);
};

const PincodeLoginPinInput = ({ onChange = () => {}, ...props }) => {
	const { pinValue, setPinValue } = usePincode();

	return (
		<input
			type="text"
			placeholder="pin"
			autoComplete="off"
			value={pinValue}
			onChange={(e) => {
				setPinValue(e.target.value);
				onChange(e);
			}}
			{...props}
		/>
	);
};

const PincodeLoginClearButton = ({
	onClick = (e) => {},
	children,
	...props
}) => {
	const { setEmailSent, setEmailValue } = usePincode();

	return (
		<button
			type="button"
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

const PincodeLoginResendButton = ({
	onClick = (e) => {},
	children,
	...props
}) => {
	const { sendEmail } = usePincode();

	return (
		<button
			type="button"
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

const Pincode = {
	Form: PincodeLoginForm,
	EmailInput: PincodeLoginEmailInput,
	PinInput: PincodeLoginPinInput,
	ResendButton: PincodeLoginResendButton,
	ClearButton: PincodeLoginClearButton,
	usePincode,
};

export default Pincode;
