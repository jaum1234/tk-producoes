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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeButton\": function() { return /* binding */ HomeButton; },\n/* harmony export */   \"HomeLogo\": function() { return /* binding */ HomeLogo; },\n/* harmony export */   \"HomeScreen\": function() { return /* binding */ HomeScreen; },\n/* harmony export */   \"HomeTitle\": function() { return /* binding */ HomeTitle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Button */ \"./src/components/Button/index.jsx\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Image */ \"./src/components/Image/index.jsx\");\n/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/themes */ \"./src/styles/themes.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    from {\\n    transform: rotate(0deg);\\n    }\\n\\n    to {\\n        transform: rotate(360deg);\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: center;\\n    align-items: center;\\n    height: 90vh;\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    animation: \",\n        \" 5s linear infinite;\\n    margin-bottom: 2rem;\\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    color: \",\n        \";\\n    font-size: 20px;\\n    text-align: center;\\n    line-height: 50px;\\n    font-weight: 400;\\n    font-family: \",\n        \";\\n    margin-bottom: 2rem;\\n\\n\\n    span {\\n        color: \",\n        \";\\n        font-size: 60px;\\n        font-weight: bold;\\n        text-transform: uppercase;\\n\\n        background: linear-gradient(to right, #FFF 20%, #FF0 40%, #FF0 60%, #FFF 80%);\\n        text-fill\\n        background-clip: text;\\n        -webkit-background-clip: text;\\n        -webkit-text-fill-color: transparent;\\n\\n    }\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    background-color: \",\n        \";\\n    width: 150px;\\n    height: 45px;\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar rotate = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nvar HomeScreen = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Home__HomeScreen\",\n    componentId: \"sc-dd04171b-0\"\n})(_templateObject1());\nvar HomeLogo = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n    displayName: \"Home__HomeLogo\",\n    componentId: \"sc-dd04171b-1\"\n})(_templateObject2(), rotate);\nvar HomeTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"Home__HomeTitle\",\n    componentId: \"sc-dd04171b-2\"\n})(_templateObject3(), _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.light, _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fonts.inter, _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.red);\nvar HomeButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).withConfig({\n    displayName: \"Home__HomeButton\",\n    componentId: \"sc-dd04171b-3\"\n})(_templateObject4(), _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.red);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9Ib21lL3N0eWxlcy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNPO0FBQ0U7QUFDRjtBQUNGO0FBRTVDLElBQU1LLE1BQU0sR0FBR0osNERBQVMsbUJBUXZCO0FBRUQsSUFBTUssVUFBVSxHQUFHTix3RUFBVTs7O3NCQU01QjtBQUVELElBQU1RLFFBQVEsR0FBR1IsNkRBQU0sQ0FBQ0cseURBQUssQ0FBQzs7O3VCQUNiRSxNQUFNLENBRXRCO0FBRUQsSUFBTUksU0FBUyxHQUFHVCx1RUFBUzs7O3VCQUNkSSwyRUFBMkIsRUFLckJBLGtFQUFrQixFQUtwQkEseUVBQXlCLENBWXpDO0FBRUQsSUFBTWEsVUFBVSxHQUFHakIsNkRBQU0sQ0FBQ0UsMERBQU0sQ0FBQzs7O3VCQUNURSx5RUFBeUIsQ0FHaEQ7QUFHc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NjcmVlbnMvSG9tZS9zdHlsZXMvSG9tZS5qcz82NGEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9CdXR0b24nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9JbWFnZSc7XHJcbmltcG9ydCB0aGVtZXMgZnJvbSAnLi4vLi4vLi4vc3R5bGVzL3RoZW1lcyc7XHJcblxyXG5jb25zdCByb3RhdGUgPSBrZXlmcmFtZXNgXHJcbiAgICBmcm9tIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBIb21lU2NyZWVuID0gc3R5bGVkLmRpdmBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA5MHZoO1xyXG5gXHJcblxyXG5jb25zdCBIb21lTG9nbyA9IHN0eWxlZChJbWFnZSlgXHJcbiAgICBhbmltYXRpb246ICR7cm90YXRlfSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5gXHJcblxyXG5jb25zdCBIb21lVGl0bGUgPSBzdHlsZWQuaDFgXHJcbiAgICBjb2xvcjogJHt0aGVtZXMudGhlbWVfMS5jb2xvcnMubGlnaHR9O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICR7dGhlbWVzLmZvbnRzLmludGVyfTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcblxyXG5cclxuICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAke3RoZW1lcy50aGVtZV8xLmNvbG9ycy5yZWR9O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGRkYgMjAlLCAjRkYwIDQwJSwgI0ZGMCA2MCUsICNGRkYgODAlKTtcclxuICAgICAgICB0ZXh0LWZpbGxcclxuICAgICAgICBiYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgICAgICAgLXdlYmtpdC10ZXh0LWZpbGwtY29sb3I6IHRyYW5zcGFyZW50O1xyXG5cclxuICAgIH1cclxuYFxyXG5cclxuY29uc3QgSG9tZUJ1dHRvbiA9IHN0eWxlZChCdXR0b24pYFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGVtZXMudGhlbWVfMS5jb2xvcnMucmVkfTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuYFxyXG5cclxuXHJcbmV4cG9ydCB7IEhvbWVTY3JlZW4sIEhvbWVMb2dvLCBIb21lVGl0bGUsIEhvbWVCdXR0b24gfTsiXSwibmFtZXMiOlsic3R5bGVkIiwia2V5ZnJhbWVzIiwiQnV0dG9uIiwiSW1hZ2UiLCJ0aGVtZXMiLCJyb3RhdGUiLCJIb21lU2NyZWVuIiwiZGl2IiwiSG9tZUxvZ28iLCJIb21lVGl0bGUiLCJoMSIsInRoZW1lXzEiLCJjb2xvcnMiLCJsaWdodCIsImZvbnRzIiwiaW50ZXIiLCJyZWQiLCJIb21lQnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/screens/Home/styles/Home.js\n");

/***/ })

});