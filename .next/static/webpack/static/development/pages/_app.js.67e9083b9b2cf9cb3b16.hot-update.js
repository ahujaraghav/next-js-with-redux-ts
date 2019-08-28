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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist */ "./node_modules/redux-persist/es/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../reducers/user */ "./src/redux/reducers/user.ts");
/* harmony import */ var _utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/helpers/customCookieStorage */ "./src/utils/helpers/customCookieStorage.ts");
/* harmony import */ var _reducers_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../reducers/data */ "./src/redux/reducers/data.ts");







function initializeStore(req, res) {
  // pass to server
  var persistCookieConfig = {
    key: 'root',
    storage: Object(_utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_5__["default"])(req, res) // used in client local storage

  };
  var persistLocalConfig = {
    key: 'local',
    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_3___default.a
  };
  var cookieConfigReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistCookieConfig, Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    user: _reducers_user__WEBPACK_IMPORTED_MODULE_4__["default"],
    dataCookie: _reducers_data__WEBPACK_IMPORTED_MODULE_6__["default"]
  }));
  var localConfigReducer = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistReducer"])(persistLocalConfig, Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])({
    dataLocal: _reducers_data__WEBPACK_IMPORTED_MODULE_6__["default"]
  }));
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_1__["createStore"])( // combineReducers<StoreState>({ user: userReducer })
  Object(redux__WEBPACK_IMPORTED_MODULE_1__["combineReducers"])(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, cookieConfigReducer, localConfigReducer)));
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_2__["persistStore"])(store, {});
  return {
    store: store,
    persistor: persistor
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.67e9083b9b2cf9cb3b16.hot-update.js.map