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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HomeAnimation\": function() { return /* binding */ HomeAnimation; },\n/* harmony export */   \"HomeButton\": function() { return /* binding */ HomeButton; },\n/* harmony export */   \"HomeLogo\": function() { return /* binding */ HomeLogo; },\n/* harmony export */   \"HomeScreen\": function() { return /* binding */ HomeScreen; },\n/* harmony export */   \"HomeSection\": function() { return /* binding */ HomeSection; },\n/* harmony export */   \"HomeTitle\": function() { return /* binding */ HomeTitle; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/Button */ \"./src/components/Button/index.jsx\");\n/* harmony import */ var _components_Image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Image */ \"./src/components/Image/index.jsx\");\n/* harmony import */ var _styles_themes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../styles/themes */ \"./src/styles/themes.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    from {\\n    transform: rotate(0deg);\\n    }\\n\\n    to {\\n        transform: rotate(360deg);\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    to {\\n        background-position: 200% center;\\n    }\\n\"\n    ]);\n    _templateObject1 = function _templateObject1() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject2() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;    \\n\"\n    ]);\n    _templateObject2 = function _templateObject2() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject3() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    animation: \",\n        \" 5s linear infinite;\\n    margin-bottom: 2rem;\\n\"\n    ]);\n    _templateObject3 = function _templateObject3() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject4() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    color: \",\n        \";\\n    font-size: 20px;\\n    text-align: center;\\n    line-height: 50px;\\n    font-weight: 400;\\n    font-family: \",\n        \";\\n    margin-bottom: 2rem;\\n\\n\\n    span {\\n        color: \",\n        \";\\n        font-size: 60px;\\n        font-weight: bold;\\n        text-transform: uppercase;\\n\\n        background: linear-gradient(to right, #840032 20%, #A70040 40%, #EC005A 60%, #840032 80%);\\n        background-size: 200% auto;\\n        background-clip: text;\\n        -webkit-background-clip: text;\\n        -webkit-text-fill-color: transparent;\\n\\n        animation: \",\n        \" 5s linear infinite;\\n    }\\n\"\n    ]);\n    _templateObject4 = function _templateObject4() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject5() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    background-color: \",\n        \";\\n    width: 150px;\\n    height: 45px;\\n\"\n    ]);\n    _templateObject5 = function _templateObject5() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject6() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 100%;\\n    height: \",\n        \";\\n    justify-content: \",\n        \";\\n\"\n    ]);\n    _templateObject6 = function _templateObject6() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject7() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    from { \\n        opacity: 0;\\n        transform: translateY(100px);\\n    }\\n    to {\\n        opacity: 1;\\n        transform: translateY(0px);\\n    }\\n\"\n    ]);\n    _templateObject7 = function _templateObject7() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject8() {\n    var data = _taggedTemplateLiteral([\n        \"\\n    animation: \",\n        \" 1s linear;\\n    width: 100%;\\n\"\n    ]);\n    _templateObject8 = function _templateObject8() {\n        return data;\n    };\n    return data;\n}\n\n\n\n\n\nvar rotate = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject());\nvar shine = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject1());\nvar HomeScreen = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Home__HomeScreen\",\n    componentId: \"sc-6055fc07-0\"\n})(_templateObject2());\nvar HomeLogo = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_Image__WEBPACK_IMPORTED_MODULE_1__[\"default\"]).withConfig({\n    displayName: \"Home__HomeLogo\",\n    componentId: \"sc-6055fc07-1\"\n})(_templateObject3(), rotate);\nvar HomeTitle = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1.withConfig({\n    displayName: \"Home__HomeTitle\",\n    componentId: \"sc-6055fc07-2\"\n})(_templateObject4(), _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.light, _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fonts.inter, _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.red, shine);\nvar HomeButton = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(_components_Button__WEBPACK_IMPORTED_MODULE_0__[\"default\"]).withConfig({\n    displayName: \"Home__HomeButton\",\n    componentId: \"sc-6055fc07-3\"\n})(_templateObject5(), _styles_themes__WEBPACK_IMPORTED_MODULE_2__[\"default\"].theme_1.colors.red);\nvar HomeSection = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].section.withConfig({\n    displayName: \"Home__HomeSection\",\n    componentId: \"sc-6055fc07-4\"\n})(_templateObject6(), function(props) {\n    return props.height || \"30vh\";\n}, function(props) {\n    return props.justifyContent || \"center\";\n});\nvar enter = (0,styled_components__WEBPACK_IMPORTED_MODULE_3__.keyframes)(_templateObject7());\nvar HomeAnimation = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n    displayName: \"Home__HomeAnimation\",\n    componentId: \"sc-6055fc07-5\"\n})(_templateObject8(), enter);\n\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyZWVucy9Ib21lL3N0eWxlcy9Ib21lLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNPO0FBQ0U7QUFDRjtBQUNGO0FBRTVDLElBQU1LLE1BQU0sR0FBR0osNERBQVMsbUJBUXZCO0FBRUQsSUFBTUssS0FBSyxHQUFHTCw0REFBUyxvQkFJdEI7QUFFRCxJQUFNTSxVQUFVLEdBQUdQLHdFQUFVOzs7c0JBSTVCO0FBRUQsSUFBTVMsUUFBUSxHQUFHVCw2REFBTSxDQUFDRyx5REFBSyxDQUFDOzs7dUJBQ2JFLE1BQU0sQ0FFdEI7QUFFRCxJQUFNSyxTQUFTLEdBQUdWLHVFQUFTOzs7dUJBQ2RJLDJFQUEyQixFQUtyQkEsa0VBQWtCLEVBS3BCQSx5RUFBeUIsRUFXckJFLEtBQUssQ0FFekI7QUFFRCxJQUFNWSxVQUFVLEdBQUdsQiw2REFBTSxDQUFDRSwwREFBTSxDQUFDOzs7dUJBQ1RFLHlFQUF5QixDQUdoRDtBQUVELElBQU1lLFdBQVcsR0FBR25CLDRFQUFjOzs7dUJBS3BCcUIsU0FBQUEsS0FBSztXQUFJQSxLQUFLLENBQUNDLE1BQU0sSUFBSSxNQUFNO0NBQUEsRUFDdEJELFNBQUFBLEtBQUs7V0FBSUEsS0FBSyxDQUFDRSxjQUFjLElBQUksUUFBUTtDQUFBLENBQy9EO0FBRUQsSUFBTUMsS0FBSyxHQUFHdkIsNERBQVMsb0JBU3RCO0FBRUQsSUFBTXdCLGFBQWEsR0FBR3pCLHdFQUFVOzs7dUJBQ2Z3QixLQUFLLENBRXJCO0FBR2tGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zY3JlZW5zL0hvbWUvc3R5bGVzL0hvbWUuanM/NjRhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvQnV0dG9uJztcclxuaW1wb3J0IEltYWdlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvSW1hZ2UnO1xyXG5pbXBvcnQgdGhlbWVzIGZyb20gJy4uLy4uLy4uL3N0eWxlcy90aGVtZXMnO1xyXG5cclxuY29uc3Qgcm90YXRlID0ga2V5ZnJhbWVzYFxyXG4gICAgZnJvbSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgIH1cclxuXHJcbiAgICB0byB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgIH1cclxuYFxyXG5cclxuY29uc3Qgc2hpbmUgPSBrZXlmcmFtZXNgXHJcbiAgICB0byB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMjAwJSBjZW50ZXI7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVTY3JlZW4gPSBzdHlsZWQuZGl2YFxyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAgICBcclxuYFxyXG5cclxuY29uc3QgSG9tZUxvZ28gPSBzdHlsZWQoSW1hZ2UpYFxyXG4gICAgYW5pbWF0aW9uOiAke3JvdGF0ZX0gNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuYFxyXG5cclxuY29uc3QgSG9tZVRpdGxlID0gc3R5bGVkLmgxYFxyXG4gICAgY29sb3I6ICR7dGhlbWVzLnRoZW1lXzEuY29sb3JzLmxpZ2h0fTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lcy5mb250cy5pbnRlcn07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG5cclxuXHJcbiAgICBzcGFuIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZXMudGhlbWVfMS5jb2xvcnMucmVkfTtcclxuICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjODQwMDMyIDIwJSwgI0E3MDA0MCA0MCUsICNFQzAwNUEgNjAlLCAjODQwMDMyIDgwJSk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuXHJcbiAgICAgICAgYW5pbWF0aW9uOiAke3NoaW5lfSA1cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICB9XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVCdXR0b24gPSBzdHlsZWQoQnV0dG9uKWBcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICR7dGhlbWVzLnRoZW1lXzEuY29sb3JzLnJlZH07XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbmBcclxuXHJcbmNvbnN0IEhvbWVTZWN0aW9uID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogJHtwcm9wcyA9PiBwcm9wcy5oZWlnaHQgfHwgJzMwdmgnfTtcclxuICAgIGp1c3RpZnktY29udGVudDogJHtwcm9wcyA9PiBwcm9wcy5qdXN0aWZ5Q29udGVudCB8fCAnY2VudGVyJ307XHJcbmBcclxuXHJcbmNvbnN0IGVudGVyID0ga2V5ZnJhbWVzYFxyXG4gICAgZnJvbSB7IFxyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcclxuICAgIH1cclxuICAgIHRvIHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xyXG4gICAgfVxyXG5gXHJcblxyXG5jb25zdCBIb21lQW5pbWF0aW9uID0gc3R5bGVkLmRpdmBcclxuICAgIGFuaW1hdGlvbjogJHtlbnRlcn0gMXMgbGluZWFyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcblxyXG5leHBvcnQgeyBIb21lU2NyZWVuLCBIb21lTG9nbywgSG9tZVRpdGxlLCBIb21lQnV0dG9uLCBIb21lU2VjdGlvbiwgSG9tZUFuaW1hdGlvbiB9OyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJrZXlmcmFtZXMiLCJCdXR0b24iLCJJbWFnZSIsInRoZW1lcyIsInJvdGF0ZSIsInNoaW5lIiwiSG9tZVNjcmVlbiIsImRpdiIsIkhvbWVMb2dvIiwiSG9tZVRpdGxlIiwiaDEiLCJ0aGVtZV8xIiwiY29sb3JzIiwibGlnaHQiLCJmb250cyIsImludGVyIiwicmVkIiwiSG9tZUJ1dHRvbiIsIkhvbWVTZWN0aW9uIiwic2VjdGlvbiIsInByb3BzIiwiaGVpZ2h0IiwianVzdGlmeUNvbnRlbnQiLCJlbnRlciIsIkhvbWVBbmltYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/screens/Home/styles/Home.js\n");

/***/ })

});