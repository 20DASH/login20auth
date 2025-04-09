"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAuth = exports.AuthContext = void 0;
var _react = require("react");
var AuthContext = exports.AuthContext = /*#__PURE__*/(0, _react.createContext)({
  user: null,
  logout: function logout() {}
});
var useAuth = exports.useAuth = function useAuth() {
  return (0, _react.useContext)(AuthContext);
};