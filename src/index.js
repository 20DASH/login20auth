export { default as Login20Auth } from "./Login20Auth.js";
export { useAuth } from "./authContext.js";
export { default as GoogleLogin } from "./GoogleLogin.js";
export { default as MicrosoftLogin } from "./MicrosoftLogin.js";

import PincodeLoginForm from "./PincodeLoginForm.js";
import PincodeLoginEmailInput from "./PincodeLoginEmailInput.js";
import PincodeLoginPinInput from "./PincodeLoginPinInput.js";
import PincodeLoginResendButton from "./PincodeLoginResendButton.js";
import PincodeLoginClearButton from "./PincodeLoginClearButton.js";
import { usePincode } from "./PincodeLogin.js";

export const Pincode = {
	Form: PincodeLoginForm,
	EmailInput: PincodeLoginEmailInput,
	PinInput: PincodeLoginPinInput,
	ResendButton: PincodeLoginResendButton,
	ClearButton: PincodeLoginClearButton,
	usePincode,
};
