"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AuthContext = void 0;
exports.parseToken = parseToken;
exports.useAuth = void 0;
var _react = require("react");
function parseToken(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(window.atob(base64).split("").map(function (c) {
    return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
  }).join(""));
  return JSON.parse(jsonPayload);
}
const AuthContext = exports.AuthContext = /*#__PURE__*/(0, _react.createContext)({
  token: null,
  logout: () => {},
  saveToken: () => {},
  savePic: () => {},
  profilePic: null,
  projectSlug: null,
  onStartLogin: () => {},
  onError: () => {}
});
const useAuth = () => (0, _react.useContext)(AuthContext);
exports.useAuth = useAuth;