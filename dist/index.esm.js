function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var AUTH_URL = "https://iihlq3icve.execute-api.us-east-1.amazonaws.com/v1"; //url de dev

export function loginGoogle(_x, _x2) {
  return _loginGoogle.apply(this, arguments);
}
function _loginGoogle() {
  _loginGoogle = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(tokenGoogle, projectSlug) {
    var response, errorData, data;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch(AUTH_URL + "/google-login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: tokenGoogle,
              project_slug: projectSlug
            })
          });
        case 3:
          response = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          _context.next = 7;
          return response.json();
        case 7:
          errorData = _context.sent;
          return _context.abrupt("return", {
            error: errorData
          });
        case 9:
          _context.next = 11;
          return response.json();
        case 11:
          data = _context.sent;
          return _context.abrupt("return", data);
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", {
            error: "Um erro inesperado ocorreu. Tente novamente"
          });
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return _loginGoogle.apply(this, arguments);
}
export function loginMicrosoft(_x3, _x4) {
  return _loginMicrosoft.apply(this, arguments);
}
function _loginMicrosoft() {
  _loginMicrosoft = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(msToken, projectSlug) {
    var response;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch(AUTH_URL + "/ms-login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              token: msToken,
              project_slug: projectSlug
            })
          });
        case 2:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 5;
            break;
          }
          throw new Error("MsToken error");
        case 5:
          _context2.next = 7;
          return response.json();
        case 7:
          return _context2.abrupt("return", _context2.sent);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _loginMicrosoft.apply(this, arguments);
}
export function microsoftProfilePicture(_x5) {
  return _microsoftProfilePicture.apply(this, arguments);
}
function _microsoftProfilePicture() {
  _microsoftProfilePicture = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(accessToken) {
    var response, blob, url;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return fetch("https://graph.microsoft.com/v1.0/me/photo/$value", {
            headers: {
              Authorization: "Bearer ".concat(accessToken)
            }
          });
        case 2:
          response = _context3.sent;
          if (!response.ok) {
            _context3.next = 11;
            break;
          }
          _context3.next = 6;
          return response.blob();
        case 6:
          blob = _context3.sent;
          url = URL.createObjectURL(blob);
          return _context3.abrupt("return", url);
        case 11:
          console.error("Erro ao obter a imagem de perfil:", response.statusText);
          return _context3.abrupt("return", null);
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _microsoftProfilePicture.apply(this, arguments);
}
export function loginEmail(_x6, _x7) {
  return _loginEmail.apply(this, arguments);
}
function _loginEmail() {
  _loginEmail = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(email, projectSlug) {
    var response;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return fetch(AUTH_URL + "/pincode-send", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              project_slug: projectSlug
            })
          });
        case 2:
          response = _context4.sent;
          if (response.ok) {
            _context4.next = 5;
            break;
          }
          throw new Error("Email error");
        case 5:
          _context4.next = 7;
          return response.json();
        case 7:
          return _context4.abrupt("return", _context4.sent);
        case 8:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return _loginEmail.apply(this, arguments);
}
export function loginPincode(_x8, _x9, _x10) {
  return _loginPincode.apply(this, arguments);
}
function _loginPincode() {
  _loginPincode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(pin, email, projectSlug) {
    var response, errorData, data;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return fetch(AUTH_URL + "/pincode-validate", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              email: email,
              project_slug: projectSlug,
              pincode: pin
            })
          });
        case 3:
          response = _context5.sent;
          if (response.ok) {
            _context5.next = 10;
            break;
          }
          _context5.next = 7;
          return response.json();
        case 7:
          errorData = _context5.sent;
          console.error("Error:", errorData);
          return _context5.abrupt("return", errorData);
        case 10:
          _context5.next = 12;
          return response.json();
        case 12:
          data = _context5.sent;
          return _context5.abrupt("return", data);
        case 16:
          _context5.prev = 16;
          _context5.t0 = _context5["catch"](0);
          console.error("Network or other error:", _context5.t0);
          return _context5.abrupt("return", {
            error: "Um erro inesperado ocorreu. Tente novamente"
          });
        case 20:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 16]]);
  }));
  return _loginPincode.apply(this, arguments);
}
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
"use client";

function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
import React, { useEffect, useState } from "react";
import { AuthContext, parseToken } from "./authContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Login20Auth(_ref) {
  var children = _ref.children,
    content = _ref.content,
    projectSlug = _ref.projectSlug,
    _ref$onError = _ref.onError,
    onError = _ref$onError === void 0 ? function () {} : _ref$onError,
    _ref$onStartLogin = _ref.onStartLogin,
    onStartLogin = _ref$onStartLogin === void 0 ? function () {} : _ref$onStartLogin;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    token = _useState2[0],
    setToken = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    profilePic = _useState4[0],
    setProfilePic = _useState4[1];
  var saveToken = function saveToken(newToken) {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("profilePic");
      setProfilePic(null);
    }
    setToken(newToken);
  };
  var savePic = function savePic(pic) {
    if (pic) {
      setProfilePic(pic);
      localStorage.setItem("profilePic", pic);
    }
  };
  var logout = function logout() {
    saveToken(null);
  };
  useEffect(function () {
    setToken(localStorage.getItem("token"));
    setProfilePic(localStorage.getItem("profilePic"));
  }, []);
  useEffect(function () {
    if (token) {
      try {
        var tokenExpDate = parseToken(token).exp;
        if (!tokenExpDate) throw Error();
        if (Date.now() / 1000 > tokenExpDate) {
          onError("expired token");
          setToken(null);
        }
      } catch (error) {
        onError("invalid token");
        setToken(null);
      }
    }
  }, [token]);
  var contextValue = {
    token: token,
    logout: logout,
    saveToken: saveToken,
    savePic: savePic,
    profilePic: profilePic,
    projectSlug: projectSlug,
    onStartLogin: onStartLogin,
    onError: onError
  };
  return /*#__PURE__*/_jsx(AuthContext.Provider, {
    value: contextValue,
    children: token ? content : children
  });
}
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var _excluded = ["clientID", "children"];
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _objectWithoutProperties(e, t) { if (null == e) return {}; var o, r, i = _objectWithoutPropertiesLoose(e, t); if (Object.getOwnPropertySymbols) { var n = Object.getOwnPropertySymbols(e); for (r = 0; r < n.length; r++) o = n[r], -1 === t.indexOf(o) && {}.propertyIsEnumerable.call(e, o) && (i[o] = e[o]); } return i; }
function _objectWithoutPropertiesLoose(r, e) { if (null == r) return {}; var t = {}; for (var n in r) if ({}.hasOwnProperty.call(r, n)) { if (-1 !== e.indexOf(n)) continue; t[n] = r[n]; } return t; }
// GoogleLogin.js
import React, { useState, useCallback, useEffect } from "react";
import { PublicClientApplication, EventType, LogLevel } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import { loginMicrosoft, microsoftProfilePicture } from "./API";
import { useAuth } from "./authContext.js";
import { jsx as _jsx } from "react/jsx-runtime";
var MicrosoftLogin = function MicrosoftLogin(_ref) {
  var clientID = _ref.clientID,
    children = _ref.children,
    buttonProps = _objectWithoutProperties(_ref, _excluded);
  var _useAuth = useAuth(),
    saveToken = _useAuth.saveToken,
    savePic = _useAuth.savePic,
    projectSlug = _useAuth.projectSlug,
    onStartLogin = _useAuth.onStartLogin,
    onError = _useAuth.onError;
  var msalConfig = {
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
        loggerCallback: function loggerCallback(level, message, containsPii) {
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
        }
      }
    }
  };
  var _useState = useState(new PublicClientApplication(msalConfig)),
    _useState2 = _slicedToArray(_useState, 1),
    msalInstance = _useState2[0];
  var onLoginSuccess = useCallback(/*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(account) {
      var token, tokenResponse, profilePic;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return loginMicrosoft(account.idToken, projectSlug);
          case 3:
            token = _context.sent;
            saveToken(token.token);
            _context.next = 7;
            return msalInstance.acquireTokenSilent({
              scopes: ["User.Read"],
              account: account
            });
          case 7:
            tokenResponse = _context.sent;
            _context.next = 10;
            return microsoftProfilePicture(tokenResponse.accessToken);
          case 10:
            profilePic = _context.sent;
            savePic(profilePic);
            _context.next = 17;
            break;
          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            onError(_context.t0);
          case 17:
            _context.prev = 17;
            sessionStorage.clear();
            return _context.finish(17);
          case 20:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 14, 17, 20]]);
    }));
    return function (_x) {
      return _ref2.apply(this, arguments);
    };
  }(), [loginMicrosoft, microsoftProfilePicture, msalInstance]);
  useEffect(function () {
    // Handle login success events
    msalInstance.addEventCallback(function (event) {
      var _event$payload;
      if (event.eventType === EventType.LOGIN_SUCCESS && (_event$payload = event.payload) !== null && _event$payload !== void 0 && _event$payload.account) {
        var account = event.payload.account;
        msalInstance.setActiveAccount(account);
        onLoginSuccess(account);
      }
    });
  }, [msalInstance, onLoginSuccess]);
  var handleClick = function handleClick() {
    if (onStartLogin) onStartLogin();
    msalInstance.loginPopup({
      scopes: ["openid", "profile", "email", "User.Read", "offline_access"]
    })["catch"](function (error) {
      console.log(error);
      onError(error);
    });
  };
  return /*#__PURE__*/_jsx(MsalProvider, {
    instance: msalInstance,
    children: /*#__PURE__*/_jsx("button", _objectSpread(_objectSpread({}, buttonProps), {}, {
      onClick: handleClick,
      children: children
    }))
  });
};
export default MicrosoftLogin;
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
import { createContext, useContext } from "react";
export function parseToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(window.atob(base64).split("").map(function (c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
  return JSON.parse(jsonPayload);
}
export var AuthContext = /*#__PURE__*/createContext({
  token: null,
  logout: function logout() {},
  saveToken: function saveToken() {},
  savePic: function savePic() {},
  profilePic: null,
  projectSlug: null,
  onStartLogin: function onStartLogin() {},
  onError: function onError() {}
});
export var useAuth = function useAuth() {
  return useContext(AuthContext);
};
export { default as Login20Auth } from "./Login20Auth.js";
export { useAuth } from "./authContext.js";
export { default as GoogleLogin } from "./GoogleLogin.js";
export { default as MicrosoftLogin } from "./MicrosoftLogin.js";
export { PincodeLoginForm, PincodeLoginEmailInput, PincodeLoginPinInput, PincodeLoginResendButton, PincodeLoginClearButton, usePincode } from "./PincodeLogin.js";
