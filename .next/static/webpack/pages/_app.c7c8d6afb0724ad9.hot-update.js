"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/styles/GlobalStyles.js":
/*!************************************!*\
  !*** ./src/styles/GlobalStyles.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GlobalStyles\": function() { return /* binding */ GlobalStyles; }\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _themes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./themes */ \"./src/styles/themes.js\");\nfunction _taggedTemplateLiteral(strings, raw) {\n    if (!raw) {\n        raw = strings.slice(0);\n    }\n    return Object.freeze(Object.defineProperties(strings, {\n        raw: {\n            value: Object.freeze(raw)\n        }\n    }));\n}\nfunction _templateObject() {\n    var data = _taggedTemplateLiteral([\n        \"\\n\\n    *, html {\\n        color: \",\n        \";\\n        font-family: \",\n        \";\\n    }\\n\\n    body {\\n        line-height: 1;\\n        background: \",\n        \";\\n        scroll-behavior: ;\\n    }\\n\\n    p {\\n        font-size: 18px !important;\\n\\n        @media screen and (max-width: 575px) {\\n            font-size: 16px !important;\\n        }\\n    }\\n\\n    html, body, div, span, applet, object, iframe,\\n    h1, h2, h3, h4, h5, h6, p, blockquote, pre,\\n    a, abbr, acronym, address, big, cite, code,\\n    del, dfn, em, img, ins, kbd, q, s, samp,\\n    small, strike, strong, sub, sup, tt, var,\\n    b, u, i, center,\\n    dl, dt, dd, ol, ul, li,\\n    fieldset, form, label, legend,\\n    table, caption, tbody, tfoot, thead, tr, th, td,\\n    article, aside, canvas, details, embed, \\n    figure, figcaption, footer, header, hgroup, \\n    menu, nav, output, ruby, section, summary,\\n    time, mark, audio, video {\\n        margin: 0;\\n        padding: 0;\\n        border: 0;\\n        font-size: 100%;\\n        vertical-align: baseline;\\n        text-decoration: none;\\n    }\\n\\n    article, aside, details, figcaption, figure, \\n    footer, header, hgroup, menu, nav, section {\\n        display: block;\\n    }\\n   \\n    ol, ul {\\n        list-style: none;\\n    }\\n    blockquote, q {\\n        quotes: none;\\n    }\\n    blockquote:before, blockquote:after,\\n    q:before, q:after {\\n        content: '';\\n        content: none;\\n    }\\n    table {\\n        border-collapse: collapse;\\n        border-spacing: 0;\\n    }\\n\"\n    ]);\n    _templateObject = function _templateObject() {\n        return data;\n    };\n    return data;\n}\n\n\nvar GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle)(_templateObject(), _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme_1.colors.light, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].fonts.poppins, _themes__WEBPACK_IMPORTED_MODULE_0__[\"default\"].theme_1.colors.dark);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0dsb2JhbFN0eWxlcy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN4QjtBQUV2QixJQUFNRSxZQUFZLEdBQUdGLG9FQUFpQixvQkFHNUJDLG9FQUEyQixFQUNyQkEsNkRBQW9CLEVBS3JCQSxtRUFBMEIsQ0FxRC9DIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9zdHlsZXMvR2xvYmFsU3R5bGVzLmpzPzU3NzYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHRoZW1lcyBmcm9tIFwiLi90aGVtZXNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuXHJcbiAgICAqLCBodG1sIHtcclxuICAgICAgICBjb2xvcjogJHt0aGVtZXMudGhlbWVfMS5jb2xvcnMubGlnaHR9O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAke3RoZW1lcy5mb250cy5wb3BwaW5zfTtcclxuICAgIH1cclxuXHJcbiAgICBib2R5IHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lcy50aGVtZV8xLmNvbG9ycy5kYXJrfTtcclxuICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE4cHggIWltcG9ydGFudDtcclxuXHJcbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTc1cHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcclxuICAgIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcclxuICAgIGEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcclxuICAgIGRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcclxuICAgIHNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXHJcbiAgICBiLCB1LCBpLCBjZW50ZXIsXHJcbiAgICBkbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxyXG4gICAgZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXHJcbiAgICB0YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcclxuICAgIGFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcclxuICAgIGZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgXHJcbiAgICBtZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcclxuICAgIHRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIGFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxyXG4gICAgZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuICAgXHJcbiAgICBvbCwgdWwge1xyXG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBibG9ja3F1b3RlLCBxIHtcclxuICAgICAgICBxdW90ZXM6IG5vbmU7XHJcbiAgICB9XHJcbiAgICBibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcclxuICAgIHE6YmVmb3JlLCBxOmFmdGVyIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICBjb250ZW50OiBub25lO1xyXG4gICAgfVxyXG4gICAgdGFibGUge1xyXG4gICAgICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICAgICAgYm9yZGVyLXNwYWNpbmc6IDA7XHJcbiAgICB9XHJcbmBcclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbImNyZWF0ZUdsb2JhbFN0eWxlIiwidGhlbWVzIiwiR2xvYmFsU3R5bGVzIiwidGhlbWVfMSIsImNvbG9ycyIsImxpZ2h0IiwiZm9udHMiLCJwb3BwaW5zIiwiZGFyayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/GlobalStyles.js\n");

/***/ })

});