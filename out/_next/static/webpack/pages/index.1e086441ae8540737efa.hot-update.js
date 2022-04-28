self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__N_SSG": function() { return /* binding */ __N_SSG; },
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prismic-reactjs */ "./node_modules/prismic-reactjs/dist/prismic-reactjs.js");
/* harmony import */ var prismic_reactjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prismic_reactjs__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);

var _jsxFileName = "C:\\Users\\moham\\Desktop\\prismic test\\prismic\\pages\\index.js";



var __N_SSG = true;
function Home(_ref) {
  var _this = this;

  var images = _ref.images;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("link", {
        rel: "stylesheet",
        href: "..assets/styles.css"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "logo text-center"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "parent",
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "photos",
          children: images.results.map(function (image, index) {
            return image.data.images_group.map(function (pic, index) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
                src: pic.image.url,
                className: "images"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 26
              }, _this);
            });
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 15
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 27,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsImltYWdlcyIsInJlc3VsdHMiLCJtYXAiLCJpbWFnZSIsImluZGV4IiwiZGF0YSIsImltYWdlc19ncm91cCIsInBpYyIsInVybCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7O0FBc0JlLFNBQVNBLElBQVQsT0FBMEI7QUFBQTs7QUFBQSxNQUFWQyxNQUFVLFFBQVZBLE1BQVU7QUFDdkMsc0JBQ0U7QUFBQSw0QkFDRSw4REFBQyxrREFBRDtBQUFBLDZCQUNFO0FBQU0sV0FBRyxFQUFDLFlBQVY7QUFBdUIsWUFBSSxFQUFDO0FBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFLLGVBQVMsRUFBQyxFQUFmO0FBQUEsNkJBQ007QUFBSyxpQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUROO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRixlQVNNO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLFFBQWY7QUFBQSwrQkFDRTtBQUFLLG1CQUFTLEVBQUMsUUFBZjtBQUFBLG9CQUNHQSxNQUFNLENBQUNDLE9BQVAsQ0FBZUMsR0FBZixDQUFtQixVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxtQkFHakJELEtBQUssQ0FBQ0UsSUFBTixDQUFXQyxZQUFYLENBQXdCSixHQUF4QixDQUE0QixVQUFDSyxHQUFELEVBQU1ILEtBQU47QUFBQSxrQ0FDdEI7QUFBSyxtQkFBRyxFQUFFRyxHQUFHLENBQUNKLEtBQUosQ0FBVUssR0FBcEI7QUFBeUIseUJBQVMsRUFBQztBQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURzQjtBQUFBLGFBQTVCLENBSGlCO0FBQUEsV0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFUTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQTJCRDtLQTVCdUJULEkiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWUwODY0NDFhZTg1NDA3MzdlZmEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCB7IFJpY2hUZXh0IH0gZnJvbSBcInByaXNtaWMtcmVhY3Rqc1wiO1xuaW1wb3J0IFByaXNtaWMgZnJvbSBcInByaXNtaWMtamF2YXNjcmlwdFwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uL3ByaXNtaWMtY29uZmlndXJhdGlvblwiO1xuXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpXG57XG4gIFxuICBjb25zdCBpbWFnZXMgPSBhd2FpdCBDbGllbnQoKS5xdWVyeShcbiAgICBQcmlzbWljLlByZWRpY2F0ZXMuYXQoXCJkb2N1bWVudC50eXBlXCIsXCJpbWFnZXNcIilcbiAgKTtcbiAgICBjb25zb2xlLmxvZyhcImJsb2cgcGFnZVwiLGltYWdlcy5yZXN1bHRzKVxuICAgIFxuICAgIFxuICAgIFxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBpbWFnZXM6IGltYWdlc1xuICAgICAgXG4gICAgfSxcbiAgfTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBpbWFnZXMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLi5hc3NldHMvc3R5bGVzLmNzc1wiLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ28gdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFyZW50XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGhvdG9zXCI+XG4gICAgICAgICAgICAgICAge2ltYWdlcy5yZXN1bHRzLm1hcCgoaW1hZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIChpbWFnZS5kYXRhLmltYWdlc19ncm91cC5tYXAoKHBpYywgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17cGljLmltYWdlLnVybH0gY2xhc3NOYW1lPVwiaW1hZ2VzXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICApKSlcbiAgICAgICAgICAgICAgICApKX0gXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgXG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=