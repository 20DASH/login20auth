"use strict";
"use client";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Login20Auth;
var _react = _interopRequireWildcard(require("react"));
var _authContext = require("./authContext.js");
var _jsxRuntime = require("react/jsx-runtime");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function Login20Auth(_ref) {
  let {
    children,
    content,
    projectSlug,
    onError = () => {},
    onStartLogin = () => {}
  } = _ref;
  const [token, setToken] = (0, _react.useState)(null);
  const [profilePic, setProfilePic] = (0, _react.useState)(null);
  const saveToken = newToken => {
    if (newToken) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("profilePic");
      setProfilePic(null);
    }
    setToken(newToken);
  };
  const savePic = pic => {
    if (pic) {
      setProfilePic(pic);
      localStorage.setItem("profilePic", pic);
    }
  };
  const logout = () => {
    saveToken(null);
  };
  (0, _react.useEffect)(() => {
    setToken(localStorage.getItem("token"));
    setProfilePic(localStorage.getItem("profilePic"));
  }, []);
  (0, _react.useEffect)(() => {
    if (token) {
      try {
        let tokenExpDate = (0, _authContext.parseToken)(token).exp;
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
  const contextValue = {
    token,
    logout,
    saveToken,
    savePic,
    profilePic,
    projectSlug,
    onStartLogin,
    onError
  };
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_authContext.AuthContext.Provider, {
    value: contextValue,
    children: token ? content : children
  });
}