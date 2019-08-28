webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/reducers/user.ts":
/*!************************************!*\
  !*** ./src/redux/reducers/user.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/types */ "./src/redux/config/types.ts");

var initialState = {
  isAuthenticated: false,
  role: 'undefined'
};

var userReducer = function userReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var payload = action.payload;

  switch (action.type) {
    case _config_types__WEBPACK_IMPORTED_MODULE_0__["default"].LOGIN_USER:
      {
        return {
          isAuthenticated: true,
          role: payload.role
        };
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (userReducer);

/***/ })

})
//# sourceMappingURL=_app.js.6b46e9808b9eca20daa7.hot-update.js.map