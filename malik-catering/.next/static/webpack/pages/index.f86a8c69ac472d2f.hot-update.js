/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navbar.js */ \"./components/navbar.js\");\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_navbar_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Hero.js */ \"./components/Hero.js\");\n/* harmony import */ var _components_Div_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Div.jsx */ \"./components/Div.jsx\");\n/* harmony import */ var _components_Especial_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Especial.jsx */ \"./components/Especial.jsx\");\n/* harmony import */ var _components_DEST_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/DEST.js */ \"./components/DEST.js\");\n/* harmony import */ var _components_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Footer.jsx */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_Product__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/Product */ \"./components/Product.jsx\");\n/* harmony import */ var _components_CheckoutCard_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/components/CheckoutCard.jsx */ \"./components/CheckoutCard.jsx\");\n\n\n\n\n\n\n\n\n\nvar __N_SSP = true;\nfunction Home(param) {\n    let { featuredProduct  } = param;\n    console.log(featuredProduct);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full bg-neutral-800\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_components_navbar_js__WEBPACK_IMPORTED_MODULE_1___default()), {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Div_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Hero_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Div_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Especial_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_DEST_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                product: featuredProduct\n            }, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Div_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Footer_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CheckoutCard_jsx__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/sufa/Desktop/milik-catering/malik-catering/pages/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUNBO0FBQ0Y7QUFDVTtBQUNUO0FBQ0s7QUFHRjtBQUdjOztBQUsxQyxTQUFTUSxLQUFLLEtBQW1CO1FBQW5CLEVBQUVDLGdCQUFlLEVBQUUsR0FBbkI7SUFDM0JDLFFBQVFDLElBQUlGO0lBQ1oscUJBQ0UsOERBQUNHO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDYiw4REFBR0E7Ozs7OzBCQUNKLDhEQUFDRSwyREFBR0E7Ozs7OzBCQUNKLDhEQUFDRCwyREFBSUE7Ozs7OzBCQUNMLDhEQUFDQywyREFBR0E7Ozs7OzBCQUNKLDhEQUFDQyxnRUFBUUE7Ozs7OzBCQUNULDhEQUFDQywyREFBSUE7Z0JBQUNVLFNBQVNMOzs7Ozs7MEJBQ2YsOERBQUNQLDJEQUFHQTs7Ozs7MEJBQ0osOERBQUNHLDhEQUFNQTs7Ozs7MEJBQ1AsOERBQUNFLG9FQUFZQTs7Ozs7Ozs7Ozs7QUFHbkI7S0Fmd0JDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL25hdmJhci5qcydcbmltcG9ydCBIZXJvIGZyb20gJy4uL2NvbXBvbmVudHMvSGVyby5qcyc7XG5pbXBvcnQgRGl2IGZyb20gJy4uL2NvbXBvbmVudHMvRGl2LmpzeCdcbmltcG9ydCBFc3BlY2lhbCBmcm9tICcuLi9jb21wb25lbnRzL0VzcGVjaWFsLmpzeCdcbmltcG9ydCBERVNUIGZyb20gJy4uL2NvbXBvbmVudHMvREVTVC5qcydcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXIuanN4J1xuXG5cbmltcG9ydCBQUk9EVUNUIGZyb20gJ0AvY29tcG9uZW50cy9Qcm9kdWN0JztcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tICdAL21vZGVscy9Qcm9kdWN0LmpzJztcbmltcG9ydCB7IG1vbmdvb3NlQ29ubmVjdCB9IGZyb20gJ0AvbGliL21vbmdvb3NlLmpzJztcbmltcG9ydCBDaGVja291dENhcmQgZnJvbSAnQC9jb21wb25lbnRzL0NoZWNrb3V0Q2FyZC5qc3gnO1xuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgZmVhdHVyZWRQcm9kdWN0IH0pIHtcbiAgY29uc29sZS5sb2coZmVhdHVyZWRQcm9kdWN0KVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgYmctbmV1dHJhbC04MDAnPlxuICAgICAgPE5hdi8+XG4gICAgICA8RGl2IC8+XG4gICAgICA8SGVybyAvPlxuICAgICAgPERpdiAvPlxuICAgICAgPEVzcGVjaWFsIC8+XG4gICAgICA8REVTVCBwcm9kdWN0PXtmZWF0dXJlZFByb2R1Y3R9IC8+XG4gICAgICA8RGl2IC8+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgICA8Q2hlY2tvdXRDYXJkIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgZmVhdHVyZWRQcm9kdWN0c0lkcyA9IFtcbiAgICAnNjRiZjQwZmIwNzE4MjYzNzUzZDVjZDk1JyxcbiAgICAnNjRjZWQwMTQxNDJkOGZhMzY2MDQ3NTA1JyxcbiAgICAnNjRjZWQwNGUxNDJkOGZhMzY2MDQ3NTBkJyxcbiAgICAnNjRjZWQwODYxNDJkOGZhMzY2MDQ3NTE0JyxcbiAgICAnNjRjZWQwYWQxNDJkOGZhMzY2MDQ3NTFiJyxcbiAgXTtcblxuICBhd2FpdCBtb25nb29zZUNvbm5lY3QoKTtcblxuXG4gIGNvbnN0IGZlYXR1cmVkUHJvZHVjdCA9IGF3YWl0IFByb21pc2UuYWxsKFxuICAgIGZlYXR1cmVkUHJvZHVjdHNJZHMubWFwKGFzeW5jIChwcm9kdWN0SWQpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9kdWN0LmZpbmRCeUlkKHByb2R1Y3RJZCk7XG4gICAgfSlcbiAgKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBmZWF0dXJlZFByb2R1Y3Q6IGZlYXR1cmVkUHJvZHVjdC5tYXAoKHByb2R1Y3QpID0+XG4gICAgICAgIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpXG4gICAgICApLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiTmF2IiwiSGVybyIsIkRpdiIsIkVzcGVjaWFsIiwiREVTVCIsIkZvb3RlciIsIlBST0RVQ1QiLCJDaGVja291dENhcmQiLCJIb21lIiwiZmVhdHVyZWRQcm9kdWN0IiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsInByb2R1Y3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});