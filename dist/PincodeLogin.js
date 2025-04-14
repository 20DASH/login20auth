function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["children"],
  _excluded2 = ["onChange"],
  _excluded3 = ["onChange"],
  _excluded4 = ["onClick", "children"],
  _excluded5 = ["onClick", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
import React, { createContext, useContext, useState } from "react";
import { loginEmail, loginPincode } from "./API";
import { useAuth } from "./authContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
var PincodeContext = /*#__PURE__*/createContext();
export var usePincode = function usePincode() {
  return useContext(PincodeContext);
};
export var PincodeLoginForm = function PincodeLoginForm(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var _useAuth = useAuth(),
    saveToken = _useAuth.saveToken,
    projectSlug = _useAuth.projectSlug,
    onStartLogin = _useAuth.onStartLogin,
    onError = _useAuth.onError;
  var _useState = useState(""),
    _useState2 = _slicedToArray(_useState, 2),
    emailValue = _useState2[0],
    setEmailValue = _useState2[1];
  var _useState3 = useState(""),
    _useState4 = _slicedToArray(_useState3, 2),
    pinValue = _useState4[0],
    setPinValue = _useState4[1];
  var _useState5 = useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    emailSent = _useState6[0],
    setEmailSent = _useState6[1];
  var sendEmail = function sendEmail() {
    if (emailValue) {
      setEmailSent(true);
      loginEmail(emailValue, projectSlug).then(function (r) {
        return saveToken(r.token);
      })["catch"](function (e) {
        setEmailSent(false);
        onError(e);
      });
    } else {
      if (onError) {
        onError("Empty email");
      }
    }
  };
  return /*#__PURE__*/_jsx(PincodeContext.Provider, {
    value: {
      emailValue: emailValue,
      setEmailValue: setEmailValue,
      pinValue: pinValue,
      setPinValue: setPinValue,
      emailSent: emailSent,
      setEmailSent: setEmailSent,
      sendEmail: sendEmail
    },
    children: /*#__PURE__*/_jsx("form", _objectSpread(_objectSpread({
      onSubmit: function onSubmit(e) {
        e.preventDefault();
        if (emailSent) {
          if (pinValue) {
            loginPincode(pinValue, emailValue, projectSlug).then(function (r) {
              return saveToken(r.token);
            })["catch"](onError);
          } else {
            onError("Empty PIN");
          }
        } else {
          sendEmail();
        }
      }
    }, props), {}, {
      children: children
    }))
  });
};
export var PincodeLoginEmailInput = function PincodeLoginEmailInput(_ref2) {
  var _ref2$onChange = _ref2.onChange,
    _onChange = _ref2$onChange === void 0 ? function () {} : _ref2$onChange,
    props = _objectWithoutProperties(_ref2, _excluded2);
  var _usePincode = usePincode(),
    emailValue = _usePincode.emailValue,
    setEmailValue = _usePincode.setEmailValue;
  return /*#__PURE__*/_jsx("input", _objectSpread({
    type: "email",
    placeholder: "email",
    value: emailValue,
    onChange: function onChange(e) {
      setEmailValue(e.target.value);
      _onChange(e);
    }
  }, props));
};
export var PincodeLoginPinInput = function PincodeLoginPinInput(_ref3) {
  var _ref3$onChange = _ref3.onChange,
    _onChange2 = _ref3$onChange === void 0 ? function () {} : _ref3$onChange,
    props = _objectWithoutProperties(_ref3, _excluded3);
  var _usePincode2 = usePincode(),
    pinValue = _usePincode2.pinValue,
    setPinValue = _usePincode2.setPinValue;
  return /*#__PURE__*/_jsx("input", _objectSpread({
    type: "text",
    placeholder: "pin",
    value: pinValue,
    onChange: function onChange(e) {
      setPinValue(e.target.value);
      _onChange2(e);
    }
  }, props));
};
export var PincodeLoginClearButton = function PincodeLoginClearButton(_ref4) {
  var _ref4$onClick = _ref4.onClick,
    _onClick = _ref4$onClick === void 0 ? function () {} : _ref4$onClick,
    children = _ref4.children,
    props = _objectWithoutProperties(_ref4, _excluded4);
  var _usePincode3 = usePincode(),
    setEmailSent = _usePincode3.setEmailSent,
    setEmailValue = _usePincode3.setEmailValue;
  return /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
    onClick: function onClick(e) {
      setEmailValue("");
      setEmailSent(false);
      _onClick(e);
    }
  }, props), {}, {
    children: children
  }));
};
export var PincodeLoginResendButton = function PincodeLoginResendButton(_ref5) {
  var _ref5$onClick = _ref5.onClick,
    _onClick2 = _ref5$onClick === void 0 ? function () {} : _ref5$onClick,
    children = _ref5.children,
    props = _objectWithoutProperties(_ref5, _excluded5);
  var _usePincode4 = usePincode(),
    sendEmail = _usePincode4.sendEmail;
  return /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({
    onClick: function onClick(e) {
      sendEmail();
      _onClick2(e);
    }
  }, props), {}, {
    children: children
  }));
};