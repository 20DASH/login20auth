"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.usePincode = exports.PincodeLoginResendButton = exports.PincodeLoginPinInput = exports.PincodeLoginForm = exports.PincodeLoginEmailInput = exports.PincodeLoginClearButton = void 0;
var _react = _interopRequireWildcard(require("react"));
var _API = require("./API");
var _authContext = require("./authContext.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
const PincodeContext = /*#__PURE__*/(0, _react.createContext)();
const usePincode = () => (0, _react.useContext)(PincodeContext);
exports.usePincode = usePincode;
const PincodeLoginForm = _ref => {
  let {
    children,
    ...props
  } = _ref;
  const {
    saveToken,
    projectSlug,
    onStartLogin,
    onError
  } = (0, _authContext.useAuth)();
  const [emailValue, setEmailValue] = (0, _react.useState)("");
  const [pinValue, setPinValue] = (0, _react.useState)("");
  const [emailSent, setEmailSent] = (0, _react.useState)(false);
  const sendEmail = () => {
    if (emailValue) {
      setEmailSent(true);
      (0, _API.loginEmail)(emailValue, projectSlug).then(r => saveToken(r.token)).catch(e => {
        setEmailSent(false);
        onError(e);
      });
    } else {
      if (onError) {
        onError("Empty email");
      }
    }
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(PincodeContext.Provider, {
    value: {
      emailValue,
      setEmailValue,
      pinValue,
      setPinValue,
      emailSent,
      setEmailSent,
      sendEmail
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("form", {
      onSubmit: e => {
        e.preventDefault();
        if (emailSent) {
          if (pinValue) {
            (0, _API.loginPincode)(pinValue, emailValue, projectSlug).then(r => saveToken(r.token)).catch(onError);
          } else {
            onError("Empty PIN");
          }
        } else {
          sendEmail();
        }
      },
      ...props,
      children: children
    })
  });
};
exports.PincodeLoginForm = PincodeLoginForm;
const PincodeLoginEmailInput = _ref2 => {
  let {
    onChange = () => {},
    ...props
  } = _ref2;
  const {
    emailValue,
    setEmailValue
  } = usePincode();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "email",
    placeholder: "email",
    value: emailValue,
    onChange: e => {
      setEmailValue(e.target.value);
      onChange(e);
    },
    ...props
  });
};
exports.PincodeLoginEmailInput = PincodeLoginEmailInput;
const PincodeLoginPinInput = _ref3 => {
  let {
    onChange = () => {},
    ...props
  } = _ref3;
  const {
    pinValue,
    setPinValue
  } = usePincode();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("input", {
    type: "text",
    placeholder: "pin",
    value: pinValue,
    onChange: e => {
      setPinValue(e.target.value);
      onChange(e);
    },
    ...props
  });
};
exports.PincodeLoginPinInput = PincodeLoginPinInput;
const PincodeLoginClearButton = _ref4 => {
  let {
    onClick = () => {},
    children,
    ...props
  } = _ref4;
  const {
    setEmailSent,
    setEmailValue
  } = usePincode();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    onClick: e => {
      setEmailValue("");
      setEmailSent(false);
      onClick(e);
    },
    ...props,
    children: children
  });
};
exports.PincodeLoginClearButton = PincodeLoginClearButton;
const PincodeLoginResendButton = _ref5 => {
  let {
    onClick = () => {},
    children,
    ...props
  } = _ref5;
  const {
    sendEmail
  } = usePincode();
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    onClick: e => {
      sendEmail();
      onClick(e);
    },
    ...props,
    children: children
  });
};
exports.PincodeLoginResendButton = PincodeLoginResendButton;