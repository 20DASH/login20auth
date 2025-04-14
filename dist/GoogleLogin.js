function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children"],
  _excluded2 = ["clientID", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
// GoogleLogin.js
import React from "react";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import { loginGoogle } from "./API";
import { useAuth } from "./authContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
var InnerComponent = function InnerComponent(_ref) {
  var children = _ref.children,
    buttonProps = _objectWithoutProperties(_ref, _excluded);
  var _useAuth = useAuth(),
    saveToken = _useAuth.saveToken,
    savePic = _useAuth.savePic,
    projectSlug = _useAuth.projectSlug,
    onStartLogin = _useAuth.onStartLogin,
    _onError = _useAuth.onError;
  var handleGLogin = useGoogleLogin({
    onSuccess: function onSuccess(response) {
      onStartLogin(); // tell Login20Auth login has started

      loginGoogle(response.access_token, projectSlug).then(function (backendRes) {
        saveToken(backendRes.token);
        savePic(backendRes.pic);
      })["catch"](function (err) {
        console.error("Login failed", err);
        _onError(err);
      });
    },
    onError: function onError(err) {
      console.error("OAuth error", err);
      _onError(err);
    },
    onNonOAuthError: function onNonOAuthError(err) {
      console.error("Non-OAuth error", err);
      _onError(err);
    }
  });
  return /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({}, buttonProps), {}, {
    onClick: function onClick() {
      onStartLogin(); // optionally call again here before Google popup
      handleGLogin();
    },
    children: children
  }));
};
var GoogleLogin = function GoogleLogin(_ref2) {
  var clientID = _ref2.clientID,
    children = _ref2.children,
    buttonProps = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_jsx(GoogleOAuthProvider, {
    clientId: clientID,
    children: /*#__PURE__*/_jsx(InnerComponent, _objectSpread(_objectSpread({}, buttonProps), {}, {
      children: children
    }))
  });
};
export default GoogleLogin;