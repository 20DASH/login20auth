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