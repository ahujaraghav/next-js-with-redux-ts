webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./src/redux/config/index.ts":
/*!***********************************!*\
  !*** ./src/redux/config/index.ts ***!
  \***********************************/
/*! exports provided: initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../reducers */ "./src/redux/reducers/index.ts");



function initializeStore(req, res) {
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])( // combineReducers<StoreState>({ user: userReducer })
  _reducers__WEBPACK_IMPORTED_MODULE_2__["default"]);
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistStore"])(store, {});
  return {
    store: store,
    persistor: persistor
  };
}

/***/ }),

/***/ "./src/redux/reducers/index.ts":
/*!*************************************!*\
  !*** ./src/redux/reducers/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var _utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/helpers/customCookieStorage */ "./src/utils/helpers/customCookieStorage.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data */ "./src/redux/reducers/data.ts");
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./src/redux/reducers/user.ts");






// pass to server
var persistCookieConfig = function persistCookieConfig(key) {
  return {
    key: key,
    storage: Object(_utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_2__["default"])(req, res)
  };
}; // used in client local storage


var persistLocalConfig = function persistLocalConfig(key) {
  return {
    key: key,
    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_0___default.a
  };
};

var rootReducer = combineReducers({
  user: Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistCookieConfig('user'), _reducers_user__WEBPACK_IMPORTED_MODULE_4__["default"]),
  dataCookie: Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistCookieConfig('data'), _data__WEBPACK_IMPORTED_MODULE_3__["default"]),
  dataLocal: Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistLocalConfig('data-local'), _data__WEBPACK_IMPORTED_MODULE_3__["default"]),
  data: _data__WEBPACK_IMPORTED_MODULE_3__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ })

})
//# sourceMappingURL=_app.js.323cecaca314a5aa3c9a.hot-update.js.map