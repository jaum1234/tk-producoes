"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/screens/Home/styles/Home.js":
/*!*****************************************!*\
  !*** ./src/screens/Home/styles/Home.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeButton\": function() { return /* binding */ HomeButton; },\n/* harmony export */   \"HomeLogo\": function() { return /* binding */ HomeLogo; },\n/* harmony export */   \"HomeScreen\": function() { return /* binding */ HomeScreen; },\n/* harmony export */   \"HomeTitle\": function() { return /* binding */ HomeTitle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Button */ \"./src/components/Button/index.jsx\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Image */ \"./src/components/Image/index.jsx\");\n/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/themes */ \"./src/styles/themes.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    from {\\n    transform: rotate(0deg);\\n    }\\n\\n    to {\\n        transform: rotate(360deg);\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    50% {\\n        background-position: 200% auto;\\n    }\\n    100% {\\n        background-position: 200% center;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 90vh;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    animation: \",\n        \" 5s linear infinite;\\n    margin-bottom: 2rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    color: \",\n        \";\\n    font-size: 20px;\\n    text-align: center;\\n    line-height: 50px;\\n    font-weight: 400;\\n    font-family: \",\n        \";\\n    margin-bottom: 2rem;\\n\\n\\n    span {\\n        color: \",\n        \";\\n        font-size: 60px;\\n        font-weight: bold;\\n        text-transform: uppercase;\\n\\n        background: linear-gradient(to right, #FFF 20%, #FF0 40%, #FF0 60%, #FFF 80%);\\n        background-size: 200% auto;\\n        background-clip: text;\\n        -webkit-background-clip: text;\\n        -webkit-text-fill-color: transparent;\\n\\n        animation: \",\n        \" 5s linear infinite;\\n    }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    background-color: \",\n        \";\\n    width: 150px;\\n    height: 45px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar rotate = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nvar shine = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nvar HomeScreen = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Home__HomeScreen\",\n    componentId: \"sc-c8cdafa9-0\"\n})(_templateObject2());\nvar HomeLogo = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n    displayName: \"Home__HomeLogo\",\n    componentId: \"sc-c8cdafa9-1\"\n})(_templateObject3(), rotate);\nvar HomeTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"Home__HomeTitle\",\n    componentId: \"sc-c8cdafa9-2\"\n})(_templateObject4(), _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.light, _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fonts.inter, _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.red, shine);\nvar HomeButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).withConfig({\n    displayName: \"Home__HomeButton\",\n    componentId: \"sc-c8cdafa9-3\"\n})(_templateObject5(), _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.red);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9Ib21lL3N0eWxlcy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7QUFDTztBQUNFO0FBQ0Y7QUFDRjtBQUU1QyxJQUFNSyxNQUFNLEdBQUdKLDREQUFTLG1CQVF2QjtBQUVELElBQU1LLEtBQUssR0FBR0wsNERBQVMsb0JBT3RCO0FBRUQsSUFBTU0sVUFBVSxHQUFHUCx3RUFBVTs7O3NCQU01QjtBQUVELElBQU1TLFFBQVEsR0FBR1QsNkRBQU0sQ0FBQ0cseURBQUssQ0FBQzs7O3VCQUNiRSxNQUFNLENBRXRCO0FBRUQsSUFBTUssU0FBUyxHQUFHVix1RUFBUzs7O3VCQUNkSSwyRUFBMkIsRUFLckJBLGtFQUFrQixFQUtwQkEseUVBQXlCLEVBV3JCRSxLQUFLLENBRXpCO0FBRUQsSUFBTVksVUFBVSxHQUFHbEIsNkRBQU0sQ0FBQ0UsMERBQU0sQ0FBQzs7O3VCQUNURSx5RUFBeUIsQ0FHaEQ7QUFHc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9zdHlsZXMvSG9tZS5qcz82NGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9JbWFnZSc7XHJcbmltcG9ydCB0aGVtZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcyc7XHJcblxyXG5jb25zdCByb3RhdGUgPSBrZXlmcmFtZXNgXHJcbiAgICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBzaGluZSA9IGtleWZyYW1lc2BcclxuICAgIDUwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBhdXRvO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVTY3JlZW4gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDkwdmg7XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVMb2dvID0gc3R5bGVkKEltYWdlKWBcclxuICAgIGFuaW1hdGlvbjogJHtyb3RhdGV9IDVzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVUaXRsZSA9IHN0eWxlZC5oMWBcclxuICAgIGNvbG9yOiAke3RoZW1lcy50aGVtZV8xLmNvbG9ycy5saWdodH07XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LWZhbWlseTogJHt0aGVtZXMuZm9udHMuaW50ZXJ9O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuXHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6ICR7dGhlbWVzLnRoZW1lXzEuY29sb3JzLnJlZH07XHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0ZGRiAyMCUsICNGRjAgNDAlLCAjRkYwIDYwJSwgI0ZGRiA4MCUpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJSBhdXRvO1xyXG4gICAgICAgIGJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcblxyXG4gICAgICAgIGFuaW1hdGlvbjogJHtzaGluZX0gNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBIb21lQnV0dG9uID0gc3R5bGVkKEJ1dHRvbilgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3RoZW1lcy50aGVtZV8xLmNvbG9ycy5yZWR9O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG5gXHJcblxyXG5cclxuZXhwb3J0IHsgSG9tZVNjcmVlbiwgSG9tZUxvZ28sIEhvbWVUaXRsZSwgSG9tZUJ1dHRvbiB9OyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrZXlmcmFtZXMiLCJCdXR0b24iLCJJbWFnZSIsInRoZW1lcyIsInJvdGF0ZSIsInNoaW5lIiwiSG9tZVNjcmVlbiIsImRpdiIsIkhvbWVMb2dvIiwiSG9tZVRpdGxlIiwiaDEiLCJ0aGVtZV8xIiwiY29sb3JzIiwibGlnaHQiLCJmb250cyIsImludGVyIiwicmVkIiwiSG9tZUJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/screens/Home/styles/Home.js\n");

/***/ })

});