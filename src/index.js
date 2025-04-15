export { default as Provider20Auth } from "./Provider20Auth.js";
export { useAuth, parseToken } from "./authContext.js";
export { default as GoogleLogin } from "./GoogleLogin.js";
export { default as MicrosoftLogin } from "./MicrosoftLogin.js";
export { default as LoginWall } from "./LoginWall.js";

export { useOrg, OrgProvider } from "./Org.js";

import {
	PincodeLoginForm,
	PincodeLoginEmailInput,
	PincodeLoginPinInput,
	PincodeLoginResendButton,
	PincodeLoginClearButton,
	usePincode,
} from "./PincodeLogin.js";

export const Pincode = {
	Form: PincodeLoginForm,
	EmailInput: PincodeLoginEmailInput,
	PinInput: PincodeLoginPinInput,
	ResendButton: PincodeLoginResendButton,
	ClearButton: PincodeLoginClearButton,
	usePincode,
};
