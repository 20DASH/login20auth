"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _google = require("@react-oauth/google");
var _API = require("./API");
var _authContext = require("./authContext.js");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// GoogleLogin.js

const InnerComponent = _ref => {
  let {
    children,
    ...buttonProps
  } = _ref;
  const {
    saveToken,
    savePic,
    projectSlug,
    onStartLogin,
    onError
  } = (0, _authContext.useAuth)();
  const handleGLogin = (0, _google.useGoogleLogin)({
    onSuccess: response => {
      onStartLogin(); // tell Login20Auth login has started

      (0, _API.loginGoogle)(response.access_token, projectSlug).then(backendRes => {
        saveToken(backendRes.token);
        savePic(backendRes.pic);
      }).catch(err => {
        console.error("Login failed", err);
        onError(err);
      });
    },
    onError: err => {
      console.error("OAuth error", err);
      onError(err);
    },
    onNonOAuthError: err => {
      console.error("Non-OAuth error", err);
      onError(err);
    }
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    ...buttonProps,
    onClick: () => {
      onStartLogin(); // optionally call again here before Google popup
      handleGLogin();
    },
    children: children
  });
};
const GoogleLogin = _ref2 => {
  let {
    clientID,
    children,
    ...buttonProps
  } = _ref2;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_google.GoogleOAuthProvider, {
    clientId: clientID,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(InnerComponent, {
      ...buttonProps,
      children: children
    })
  });
};
var _default = exports.default = GoogleLogin;