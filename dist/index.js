"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "GoogleLogin", {
  enumerable: true,
  get: function () {
    return _GoogleLogin.default;
  }
});
Object.defineProperty(exports, "Login20Auth", {
  enumerable: true,
  get: function () {
    return _Login20Auth.default;
  }
});
Object.defineProperty(exports, "MicrosoftLogin", {
  enumerable: true,
  get: function () {
    return _MicrosoftLogin.default;
  }
});
Object.defineProperty(exports, "PincodeLoginClearButton", {
  enumerable: true,
  get: function () {
    return _PincodeLogin.PincodeLoginClearButton;
  }
});
Object.defineProperty(exports, "PincodeLoginEmailInput", {
  enumerable: true,
  get: function () {
    return _PincodeLogin.PincodeLoginEmailInput;
  }
});
Object.defineProperty(exports, "PincodeLoginForm", {
  enumerable: true,
  get: function () {
    return _PincodeLogin.PincodeLoginForm;
  }
});
Object.defineProperty(exports, "PincodeLoginPinInput", {
  enumerable: true,
  get: function () {
    return _PincodeLogin.PincodeLoginPinInput;
  }
});
Object.defineProperty(exports, "PincodeLoginResendButton", {
  enumerable: true,
  get: function () {
    return _PincodeLogin.PincodeLoginResendButton;
  }
});
Object.defineProperty(exports, "useAuth", {
  enumerable: true,
  get: function () {
    return _authContext.useAuth;
  }
});
Object.defineProperty(exports, "usePincode", {
  enumerable: true,
  get: function () {
    return _PincodeLogin.usePincode;
  }
});
var _Login20Auth = _interopRequireDefault(require("./Login20Auth.js"));
var _authContext = require("./authContext.js");
var _GoogleLogin = _interopRequireDefault(require("./GoogleLogin.js"));
var _MicrosoftLogin = _interopRequireDefault(require("./MicrosoftLogin.js"));
var _PincodeLogin = require("./PincodeLogin.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }