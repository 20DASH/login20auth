"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _msalBrowser = require("@azure/msal-browser");
var _msalReact = require("@azure/msal-react");
var _API = require("./API");
var _authContext = require("./authContext.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
// GoogleLogin.js

const MicrosoftLogin = _ref => {
  let {
    clientID,
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
  const msalConfig = {
    auth: {
      clientId: clientID,
      // This is the ONLY mandatory field that you need to supply.
      authority: "https://login.microsoftonline.com/common/",
      // Replace the placeholder with your tenant subdomain
      redirectUri: "/",
      // Points to window.location.origin. You must register this URI on Microsoft Entra admin center/App Registration.
      postLogoutRedirectUri: "/",
      // Indicates the page to navigate after logout.
      navigateToLoginRequestUrl: false // If "true", will navigate back to the original request location before processing the auth code response.
    },
    cache: {
      cacheLocation: "sessionStorage",
      // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
      storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
    system: {
      loggerOptions: {
        loggerCallback: (level, message, containsPii) => {
          if (containsPii) {
            return;
          }
          switch (level) {
            case _msalBrowser.LogLevel.Error:
              onError(message);
              return;
            case _msalBrowser.LogLevel.Warning:
              console.warn(message);
              return;
            default:
              return;
          }
        }
      }
    }
  };
  const [msalInstance] = (0, _react.useState)(new _msalBrowser.PublicClientApplication(msalConfig));
  const onLoginSuccess = (0, _react.useCallback)(async account => {
    try {
      const token = await (0, _API.loginMicrosoft)(account.idToken, projectSlug);
      saveToken(token.token);
      const tokenResponse = await msalInstance.acquireTokenSilent({
        scopes: ["User.Read"],
        account: account
      });
      const profilePic = await (0, _API.microsoftProfilePicture)(tokenResponse.accessToken);
      savePic(profilePic);
    } catch (error) {
      onError(error);
    } finally {
      sessionStorage.clear();
    }
  }, [_API.loginMicrosoft, _API.microsoftProfilePicture, msalInstance]);
  (0, _react.useEffect)(() => {
    // Handle login success events
    msalInstance.addEventCallback(event => {
      if (event.eventType === _msalBrowser.EventType.LOGIN_SUCCESS && event.payload?.account) {
        const account = event.payload.account;
        msalInstance.setActiveAccount(account);
        onLoginSuccess(account);
      }
    });
  }, [msalInstance, onLoginSuccess]);
  const handleClick = () => {
    if (onStartLogin) onStartLogin();
    msalInstance.loginPopup({
      scopes: ["openid", "profile", "email", "User.Read", "offline_access"]
    }).catch(error => {
      console.log(error);
      onError(error);
    });
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_msalReact.MsalProvider, {
    instance: msalInstance,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
      ...buttonProps,
      onClick: handleClick,
      children: children
    })
  });
};
var _default = exports.default = MicrosoftLogin;