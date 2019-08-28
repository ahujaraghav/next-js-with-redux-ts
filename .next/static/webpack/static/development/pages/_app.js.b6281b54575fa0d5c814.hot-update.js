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
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ "./node_modules/redux-persist/lib/storage/index.js");
/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _reducers_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers/user */ "./src/redux/reducers/user.ts");
/* harmony import */ var _utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/helpers/customCookieStorage */ "./src/utils/helpers/customCookieStorage.ts");
/* harmony import */ var _reducers_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers/data */ "./src/redux/reducers/data.ts");






function initializeStore(req, res) {
  // pass to server
  var persistCookieConfig = {
    key: 'root',
    storage: Object(_utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(req, res)
  };
  var persistCookieConfig1 = {
    key: 'root1',
    storage: Object(_utils_helpers_customCookieStorage__WEBPACK_IMPORTED_MODULE_4__["default"])(req, res) // used in client local storage

  };
  var localStorageConfig = {
    key: 'local',
    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2___default.a
  };
  var rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
    user: Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistCookieConfig, _reducers_user__WEBPACK_IMPORTED_MODULE_3__["default"]),
    dataLocal: Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(localStorageConfig, _reducers_data__WEBPACK_IMPORTED_MODULE_5__["default"]),
    dataCookie: Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistReducer"])(persistCookieConfig1, _reducers_data__WEBPACK_IMPORTED_MODULE_5__["default"]) // data: dataReducer

  });
  var store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])( // combineReducers<StoreState>({ user: userReducer })
  rootReducer);
  var persistor = Object(redux_persist__WEBPACK_IMPORTED_MODULE_1__["persistStore"])(store, {});
  return {
    store: store,
    persistor: persistor
  };
}

/***/ })

})
//# sourceMappingURL=_app.js.b6281b54575fa0d5c814.hot-update.js.map