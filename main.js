/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! file:///C:/Users/Michael/OneDrive/Documents/CODE/TheOdinProject/PROJECTS/restaurant-page/dist/e02cfbdbade5c9127a28.jpg */ "./dist/e02cfbdbade5c9127a28.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@400;700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GENERAL */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    max-height: 100vh;\r\n    font-size: 16px;\r\n    font-family: 'Edu SA Beginner', cursive;\r\n}\r\n\r\n:root {\r\n    --red: #F20544;\r\n    --brown: #A68C6D;\r\n    --green: #267302;\r\n    --dark-green: #0A4001;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    max-height: 900px;\r\n    border-radius: 75px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: var(--dark-green);\r\n}\r\n\r\nsection {\r\n    height: max(900px, 100%);\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin: 50px 25px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5rem;\r\n    border: 2px solid var(--red);\r\n    padding: 10px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    list-style: none;\r\n    justify-content: space-around;\r\n    width: 700px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.nav-item:hover {\r\n    cursor: pointer;\r\n    border-bottom: 2px solid var(--green);\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid var(--dark-green);\r\n    color: var(--dark-green);\r\n}\r\n\r\n/* HOMEPAGE */\r\n\r\n.home {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 15px;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n}\r\n\r\n.text-container > * {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.text-container h1 {\r\n    font-size: 5rem;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.text-container h2 {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.text-container p {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.popout-text {\r\n    color: var(--green);\r\n}\r\n\r\n/* squiggly line */\r\n.holder {\r\n    /* Clip edges, as some of the lines don't terminate nicely. */\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 200px;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .ellipse {\r\n    position: absolute;\r\n    background: radial-gradient(ellipse, transparent, transparent 7px, var(--red) 7px, var(--red) 10px, transparent 11px);\r\n    background-size: 36px 40px;\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n  \r\n  .ellipse2 {\r\n    top: 20px;\r\n    left: 18px;\r\n    background-position: 0px -20px;\r\n  }\r\n\r\n  .unsplash {\r\n    font-size: .8rem;\r\n  }\r\n\r\n.img-container {\r\n    margin: auto;\r\n}\r\n\r\n.btn {\r\n    width: 150px;\r\n    height: 40px;\r\n    background-color: var(--red);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n.btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 5px;\r\n    left: -5px;\r\n    right: 5px;\r\n    bottom: -5px;\r\n    border: 1px solid var(--green);\r\n    display: block;\r\n    z-index: -1;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menu {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-position-x: 0%, 0%;\r\n    background-position-y: 0%, 0%;\r\n    background-repeat: repeat, repeat;\r\n    background-size: auto, auto;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.menu .description {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menu .category {\r\n    color:var(--red)\r\n}\r\n\r\n.menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, min(500px, 100%));\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.menu-card {\r\n    background-color: #fff;\r\n    border-radius: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.menu-item {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 2px solid var(--brown);\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n.item-name {\r\n    font-weight: 700;\r\n}\r\n\r\n.item-description {\r\n    margin-top: 5px;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin-top: 40px;\r\n    margin-right: 75px;\r\n    margin-bottom: 100px;\r\n    min-height: 100px;\r\n}\r\n\r\nfooter a{\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n\r\nfooter a:first-child {\r\n    margin-left: 75px;\r\n}\r\n\r\nhr {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-top: 1px solid var(--green);\r\n    border-bottom: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    align-self: center;\r\n}\r\n\r\n\r\n@media screen and (max-width: 800px) {\r\n    .text-container{\r\n        padding: 0\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .home {\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@400;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');\r\n\r\n\r\n/* GENERAL */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    max-height: 100vh;\r\n    font-size: 16px;\r\n    font-family: 'Edu SA Beginner', cursive;\r\n}\r\n\r\n:root {\r\n    --red: #F20544;\r\n    --brown: #A68C6D;\r\n    --green: #267302;\r\n    --dark-green: #0A4001;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    max-height: 900px;\r\n    border-radius: 75px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: var(--dark-green);\r\n}\r\n\r\nsection {\r\n    height: max(900px, 100%);\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin: 50px 25px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5rem;\r\n    border: 2px solid var(--red);\r\n    padding: 10px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    list-style: none;\r\n    justify-content: space-around;\r\n    width: 700px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.nav-item:hover {\r\n    cursor: pointer;\r\n    border-bottom: 2px solid var(--green);\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid var(--dark-green);\r\n    color: var(--dark-green);\r\n}\r\n\r\n/* HOMEPAGE */\r\n\r\n.home {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 15px;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n}\r\n\r\n.text-container > * {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.text-container h1 {\r\n    font-size: 5rem;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.text-container h2 {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.text-container p {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n.popout-text {\r\n    color: var(--green);\r\n}\r\n\r\n/* squiggly line */\r\n.holder {\r\n    /* Clip edges, as some of the lines don't terminate nicely. */\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 200px;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n  .ellipse {\r\n    position: absolute;\r\n    background: radial-gradient(ellipse, transparent, transparent 7px, var(--red) 7px, var(--red) 10px, transparent 11px);\r\n    background-size: 36px 40px;\r\n    width: 200px;\r\n    height: 20px;\r\n  }\r\n  \r\n  .ellipse2 {\r\n    top: 20px;\r\n    left: 18px;\r\n    background-position: 0px -20px;\r\n  }\r\n\r\n  .unsplash {\r\n    font-size: .8rem;\r\n  }\r\n\r\n.img-container {\r\n    margin: auto;\r\n}\r\n\r\n.btn {\r\n    width: 150px;\r\n    height: 40px;\r\n    background-color: var(--red);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n.btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 5px;\r\n    left: -5px;\r\n    right: 5px;\r\n    bottom: -5px;\r\n    border: 1px solid var(--green);\r\n    display: block;\r\n    z-index: -1;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menu {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(file:///C:/Users/Michael/OneDrive/Documents/CODE/TheOdinProject/PROJECTS/restaurant-page/dist/e02cfbdbade5c9127a28.jpg);\r\n    background-position-x: 0%, 0%;\r\n    background-position-y: 0%, 0%;\r\n    background-repeat: repeat, repeat;\r\n    background-size: auto, auto;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.menu .description {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menu .category {\r\n    color:var(--red)\r\n}\r\n\r\n.menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, min(500px, 100%));\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.menu-card {\r\n    background-color: #fff;\r\n    border-radius: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.menu-item {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 2px solid var(--brown);\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n.item-name {\r\n    font-weight: 700;\r\n}\r\n\r\n.item-description {\r\n    margin-top: 5px;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin-top: 40px;\r\n    margin-right: 75px;\r\n    margin-bottom: 100px;\r\n    min-height: 100px;\r\n}\r\n\r\nfooter a{\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n\r\nfooter a:first-child {\r\n    margin-left: 75px;\r\n}\r\n\r\nhr {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-top: 1px solid var(--green);\r\n    border-bottom: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    align-self: center;\r\n}\r\n\r\n\r\n@media screen and (max-width: 800px) {\r\n    .text-container{\r\n        padding: 0\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .home {\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
function createFooter(){
    const footer = document.createElement('footer')

    const github = document.createElement('a')
    github.href = 'https://github.com/Selt0'
    github.textContent = 'Github'
    github.target = '_blank'

    footer.appendChild(github)

    const instagram = document.createElement('a')
    instagram.href = '#'
    instagram.textContent = 'Instagram'
    footer.appendChild(instagram)

    const twitter = document.createElement('a')
    twitter.href = 'https://twitter.com/MMocomochi'
    twitter.textContent = 'Twitter'
    twitter.target = '_blank'
    footer.appendChild(twitter)

    const hr = document.createElement('hr')
    footer.appendChild(hr)
    return footer
}



/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHeader": () => (/* binding */ createHeader)
/* harmony export */ });
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav */ "./src/nav.js");


function createHeader(){
    const header = document.createElement('header')
    const logo = document.createElement('span')

    logo.classList.add('logo', 'popout-text')
    logo.textContent = 'Pho Delicious'

    header.appendChild(logo)
    header.appendChild((0,_nav__WEBPACK_IMPORTED_MODULE_0__.createNav)())
    return header
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHomepage": () => (/* binding */ createHomepage)
/* harmony export */ });
/* harmony import */ var _images_die_griechen_Y11iTVE2DFA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/die-griechen-Y11iTVE2DFA-unsplash.jpg */ "./src/images/die-griechen-Y11iTVE2DFA-unsplash.jpg");


function createHomepage(){
    const section = document.createElement('section')
    section.classList.add('home')

    section.appendChild(createTextContainer())
    section.appendChild(createImgContainer())

    return section
}

function createTextContainer(){
    const textContainer = document.createElement('div')
    textContainer.classList.add('text-container')

    const h1 = document.createElement('h1')
    h1.classList.add('popout-text')
    h1.textContent = 'Phở'
    textContainer.appendChild(h1)

    const squigglyLineContainer = document.createElement('div')
    squigglyLineContainer.classList.add('holder')
    textContainer.appendChild(squigglyLineContainer)

    const squigglyLine1 = document.createElement('div')
    squigglyLine1.classList.add('ellipse')
    squigglyLineContainer.appendChild(squigglyLine1)

    const squigglyLine2 = document.createElement('div')
    squigglyLine2.classList.add('ellipse', 'ellipse2')
    squigglyLineContainer.appendChild(squigglyLine2)

    const h2 = document.createElement('h2')
    h2.innerHTML = 'A Bowl of Love From <span class="popout-text">Pho Delicious</span> For You'
    textContainer.appendChild(h2)

    const p = document.createElement('p')
    p.textContent = "Phở or pho is a Vietnamese soup dish consisting of broth, rice noodles, herbs, and meat. Pho is a popular food in Vietnam where it is served in households, street stalls and restaurants countrywide. Pho is considered Vietnam's national dish"
    textContainer.appendChild(p)

    const buttonContainer = document.createElement('div')
    textContainer.appendChild(buttonContainer)

    const button = document.createElement('button')
    button.classList.add('btn')
    button.textContent = 'Order Now'
    buttonContainer.appendChild(button)

    return textContainer
}

function createImgContainer(){
    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')

    const img = new Image()
    img.src = _images_die_griechen_Y11iTVE2DFA_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__
    imgContainer.appendChild(img)

    const unsplashCredit = document.createElement('div')
    unsplashCredit.classList.add('unsplash')
    unsplashCredit.innerHTML =  "Photo by <a href=\"https://unsplash.com/@diegriechen?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">DIE GRIECHEN</a> on <a href=\"https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText\">Unsplash</a>"
    imgContainer.appendChild(unsplashCredit)
    
    return imgContainer
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/header.js");
/* harmony import */ var _nav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav */ "./src/nav.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _story__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./story */ "./src/story.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer */ "./src/footer.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./style.css */ "./src/style.css");








const contentContainer = document.querySelector('#content')


function initialPageLoad(){
    contentContainer.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__.createHeader)())
    
    // set home as active
    document.querySelector('.nav-item').classList.add('active')

    contentContainer.appendChild((0,_home__WEBPACK_IMPORTED_MODULE_2__.createHomepage)())
    contentContainer.appendChild((0,_footer__WEBPACK_IMPORTED_MODULE_5__.createFooter)())
}

function loadPage(e){
    // do nothing unless user clicks directly on nav item
    if (!e.target.classList.contains('nav-item')) return
    // do nothing if user clicks on nav item showing current page
    if (e.target.classList.contains('active')) return

    document.querySelector('section').remove()
    const footer = document.querySelector('footer')
    ;(0,_nav__WEBPACK_IMPORTED_MODULE_1__.setNavActiveItem)(e.target)

    if (e.target.textContent === 'Menu'){
        contentContainer.insertBefore((0,_menu__WEBPACK_IMPORTED_MODULE_3__.createMenu)(), footer)
    } else if (e.target.textContent === 'Home'){
        contentContainer.insertBefore((0,_home__WEBPACK_IMPORTED_MODULE_2__.createHomepage)(), footer)
    } else {
        contentContainer.insertBefore((0,_story__WEBPACK_IMPORTED_MODULE_4__.createStory)(), footer)
    }
}

initialPageLoad()



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createMenu": () => (/* binding */ createMenu)
/* harmony export */ });
/* harmony import */ var _menuItems__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menuItems */ "./src/menuItems.js");


function createMenu(){
    const section = document.createElement('section')
    section.classList.add('menu')

    const description = document.createElement('div')
    description.classList.add('description')
    section.appendChild(description)

    const h1 = document.createElement('h1')
    h1.classList.add('category')
    h1.textContent = 'Menu'
    description.appendChild(h1)

    const descriptionPara = document.createElement('p')
    descriptionPara.innerHTML = 'Our menu includes a wide-variety of Vietnamese and Asian dishes. Please take a look and give us a visit at <span class="popout-text">Pho Delicious</span>.'
    description.appendChild(descriptionPara)

    section.appendChild(populateMenu())

    return section
}


function populateMenu(){
    const menuContainer = document.createElement('div')
    menuContainer.classList.add('menu-container')

    for (const category in _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems){
        const menuCard = document.createElement('div')
        menuCard.classList.add('menu-card')
        menuContainer.appendChild(menuCard)

        const h2 = document.createElement('h2')
        h2.textContent = category
        h2.classList.add('category')
        menuCard.appendChild(h2)

        _menuItems__WEBPACK_IMPORTED_MODULE_0__.menuItems[category].forEach(item => {
            const menuItemContainer = document.createElement('div')
            menuItemContainer.classList.add('menu-item')
            menuCard.appendChild(menuItemContainer)

            const name = document.createElement('p')
            name.classList.add('item-name')
            name.textContent = item.name
            menuItemContainer.appendChild(name)

            if (item.description) {
                const description = document.createElement('p')
                description.classList.add('item-description')
                description.textContent = item.description
                menuItemContainer.appendChild(description)
            }
        })
    }

    return menuContainer
}


/***/ }),

/***/ "./src/menuItems.js":
/*!**************************!*\
  !*** ./src/menuItems.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuItems": () => (/* binding */ menuItems)
/* harmony export */ });
const menuItems = {
    'Appetizers': [
        {
            name: 'APPETIZER SAMPLER / Khai Vị Đặc Biệt',
            description: '(2) Spring Rolls, (2) Egg Rolls, (2) Shrimp Sausage Wrap, and (4) Shrimp Wrap'
        },
        {
            name: 'VEGETARIAN SPRING ROLLS (2) / Gỏi Cuốn Chay',
            description: 'Rice paper freshly wrapped around Tofu, iceberg lettuce, basil, beansprouts and vermicelli served with house special peanut sauce'
        },
        {
            name: 'EDAMAME'
        },
        {
            name: 'FRIED OR STEAMED DUMPLING (5)',
            description: 'An irresistible dumplings filled with ground pork and vegetables served with special dumpling sauce.'
        }
    ],
    'PHỞ': [
        {
            name: 'KOBE BEEF Phở',
        },
        {
            name: 'FILET MIGNON Phở'
        },

        {
            name: 'SHRIMP PHO / Phở Tôm'
        },
        {
            name: 'PHỞ SPECIAL / Đặc Biệt',
            description: 'A hearty combination of eye-round steak, well-done flank, tripe, beef meatballs, well-done brisket, and soft tendon.'
        },
        {
            name: 'EYE ROUND STEAK PHO / Phở Tái'
        },
        {
            name: 'VEGETABLE PHO / Phở Rau Cải',
            description: '*Vegetable broth available upon request'
        },
        {
           name: 'SEAFOOD PHO/ Phở Hải Vị',
           description: 'Combination of shrimp, calamari, imi. crab meat , and fish paste balls.' 
        },
        {
            name: 'YOUR CREATION / Phở Như Ý',
            description: 'Pick up to three toppings: Eye round steak, well-done brisket, well-done flank, soft tendon, tripe, or beef meatballs.'
        }
    ],
    'VERMICELLI or ANGEL HAIR / Bún /Bánh Hỏi': [
        {
            name: 'VERMICELLI COMBINATION',
            description: 'Combination of SIMPLY PHỞ egg roll, grilled pork, grilled shrimp, pork sausage, and shrimp sausage wrap.'
        },
        {
            name: 'GRILLED PORK / Thịt Nướng'
        },
        {
            name: 'GRILLED CHICKEN / Gà Nướng'
        },
        {
            name: 'GRILLED BEEF / Bò Nướng'
        },
        {
            name: 'GRILLED SHRIMP / Tôm Nướng'
        },
        {
            name: 'SAUTÉED BEEF AND ONIONS / Bún Bò Xào'
        },
        {
            name: 'YOUR CREATION',
            description: 'Choose up to three items: Grilled Pork, Grilled Chicken, Grilled Beef, Grilled Shrimp , Charbroiled Pork Sausage, or SIMPLY PHỞ Egg Roll.'
        },
        {
            name: 'SAUTÉED TOFU'
        }
    ],
    'Drinks':[
        {
            name: 'VIETNAMESE ESPRESSO (served Hot or Iced) /Cà Phê Đen/Đen Đá'
        },
        {
            name: 'VIETNAMESE ESPRESSO with CONDENSED MILK Cà Phê Sữa/Sữa Đá (served Hot or Iced)'
        },
        {
            name: 'COCONUT JUICE / Nước Dừa Tươi'
        },
        {
            name: 'SALTY PLUM SODA / Soda Xí Muội'
        },
        {
            name: 'LYCHEE DRINK / Nước Trái Vải'
        },
        {
            name: 'THAI TEA / Trà Thái'
        }
    ]
}



/***/ }),

/***/ "./src/nav.js":
/*!********************!*\
  !*** ./src/nav.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNav": () => (/* binding */ createNav),
/* harmony export */   "setNavActiveItem": () => (/* binding */ setNavActiveItem)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


function createNav(){
    const nav = document.createElement('nav')
    const navItems = ['Home', 'Menu', 'Our Story']

    navItems.forEach(item => {
        const el = document.createElement('a')
        el.classList.add('nav-item')
        el.textContent = item
        nav.appendChild(el)
    })

    nav.addEventListener('click', _index__WEBPACK_IMPORTED_MODULE_0__.loadPage)
    
    return nav
}

function setNavActiveItem(newActive){
    const oldActive = document.querySelector('.active')
    oldActive.classList.toggle('active')

    newActive.classList.toggle('active')
}




/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createStory": () => (/* binding */ createStory)
/* harmony export */ });
function createStory(){
    const section = document.createElement('section')

    return section
}



/***/ }),

/***/ "./dist/e02cfbdbade5c9127a28.jpg":
/*!***************************************!*\
  !*** ./dist/e02cfbdbade5c9127a28.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e02cfbdbade5c9127a28.jpg";

/***/ }),

/***/ "./src/images/die-griechen-Y11iTVE2DFA-unsplash.jpg":
/*!**********************************************************!*\
  !*** ./src/images/die-griechen-Y11iTVE2DFA-unsplash.jpg ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "94f8074b40740ca57bea.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9B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QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2dDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLDRDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDTEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3J5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmaWxlOi8vL0M6L1VzZXJzL01pY2hhZWwvT25lRHJpdmUvRG9jdW1lbnRzL0NPREUvVGhlT2RpblByb2plY3QvUFJPSkVDVFMvcmVzdGF1cmFudC1wYWdlL2Rpc3QvZTAyY2ZiZGJhZGU1YzkxMjdhMjguanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FZHUrU0ErQmVnaW5uZXI6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHRU5FUkFMICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRWR1IFNBIEJlZ2lubmVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXJlZDogI0YyMDU0NDtcXHJcXG4gICAgLS1icm93bjogI0E2OEM2RDtcXHJcXG4gICAgLS1ncmVlbjogIzI2NzMwMjtcXHJcXG4gICAgLS1kYXJrLWdyZWVuOiAjMEE0MDAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogOTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogbWF4KDkwMHB4LCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIEhPTUVQQUdFICovXFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciA+ICoge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wb3V0LXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzcXVpZ2dseSBsaW5lICovXFxyXFxuLmhvbGRlciB7XFxyXFxuICAgIC8qIENsaXAgZWRnZXMsIGFzIHNvbWUgb2YgdGhlIGxpbmVzIGRvbid0IHRlcm1pbmF0ZSBuaWNlbHkuICovXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lbGxpcHNlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50IDdweCwgdmFyKC0tcmVkKSA3cHgsIHZhcigtLXJlZCkgMTBweCwgdHJhbnNwYXJlbnQgMTFweCk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCA0MHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVsbGlwc2UyIHtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAxOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudW5zcGxhc2gge1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYnRuOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgbGVmdDogLTVweDtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgYm90dG9tOiAtNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlLCAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJSwgMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQsIHJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvLCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxyXFxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5jYXRlZ29yeSB7XFxyXFxuICAgIGNvbG9yOnZhcigtLXJlZClcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbig1MDBweCwgMTAwJSkpO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jYXJkIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG4gICAgcGFkZGluZzogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtaXRlbSB7XFxyXFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWJyb3duKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8gQ29uZGVuc2VkJywgc2Fucy1zZXJpZjtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tbmFtZSB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLWRlc2NyaXB0aW9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcXHJcXG4gICAgbWluLWhlaWdodDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhe1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYTpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLnRleHQtY29udGFpbmVye1xcclxcbiAgICAgICAgcGFkZGluZzogMFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAgIC5ob21lIHtcXHJcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQSxZQUFZOztBQUVaO0lBQ0ksU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBLFdBQVc7O0FBRVg7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLDRCQUE0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QUFrQjtRQUNsQixhQUFhO1FBQ2Isc0JBQXNCO0lBQzFCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RWR1K1NBK0JlZ2lubmVyOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG4vKiBHRU5FUkFMICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRWR1IFNBIEJlZ2lubmVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXJlZDogI0YyMDU0NDtcXHJcXG4gICAgLS1icm93bjogI0E2OEM2RDtcXHJcXG4gICAgLS1ncmVlbjogIzI2NzMwMjtcXHJcXG4gICAgLS1kYXJrLWdyZWVuOiAjMEE0MDAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogOTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogbWF4KDkwMHB4LCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIEhPTUVQQUdFICovXFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciA+ICoge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wb3V0LXRleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBzcXVpZ2dseSBsaW5lICovXFxyXFxuLmhvbGRlciB7XFxyXFxuICAgIC8qIENsaXAgZWRnZXMsIGFzIHNvbWUgb2YgdGhlIGxpbmVzIGRvbid0IHRlcm1pbmF0ZSBuaWNlbHkuICovXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5lbGxpcHNlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoZWxsaXBzZSwgdHJhbnNwYXJlbnQsIHRyYW5zcGFyZW50IDdweCwgdmFyKC0tcmVkKSA3cHgsIHZhcigtLXJlZCkgMTBweCwgdHJhbnNwYXJlbnQgMTFweCk7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogMzZweCA0MHB4O1xcclxcbiAgICB3aWR0aDogMjAwcHg7XFxyXFxuICAgIGhlaWdodDogMjBweDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmVsbGlwc2UyIHtcXHJcXG4gICAgdG9wOiAyMHB4O1xcclxcbiAgICBsZWZ0OiAxOHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggLTIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAudW5zcGxhc2gge1xcclxcbiAgICBmb250LXNpemU6IC44cmVtO1xcclxcbiAgfVxcclxcblxcclxcbi5pbWctY29udGFpbmVyIHtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gICAgd2lkdGg6IDE1MHB4O1xcclxcbiAgICBoZWlnaHQ6IDQwcHg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXJlZCk7XFxyXFxuICAgIGNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXI6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uYnRuOjpiZWZvcmUge1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB0b3A6IDVweDtcXHJcXG4gICAgbGVmdDogLTVweDtcXHJcXG4gICAgcmlnaHQ6IDVweDtcXHJcXG4gICAgYm90dG9tOiAtNXB4O1xcclxcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB6LWluZGV4OiAtMTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNRU5VICovXFxyXFxuXFxyXFxuLm1lbnUge1xcclxcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDAuNSkpLCB1cmwoZmlsZTovLy9DOi9Vc2Vycy9NaWNoYWVsL09uZURyaXZlL0RvY3VtZW50cy9DT0RFL1RoZU9kaW5Qcm9qZWN0L1BST0pFQ1RTL3Jlc3RhdXJhbnQtcGFnZS9kaXN0L2UwMmNmYmRiYWRlNWM5MTI3YTI4LmpwZyk7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMCUsIDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlLCAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdCwgcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8sIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmNhdGVnb3J5IHtcXHJcXG4gICAgY29sb3I6dmFyKC0tcmVkKVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWluKDUwMHB4LCAxMDAlKSk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAudGV4dC1jb250YWluZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICAgLmhvbWUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gY3JlYXRlRm9vdGVyKCl7XHJcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKVxyXG5cclxuICAgIGNvbnN0IGdpdGh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgZ2l0aHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL1NlbHQwJ1xyXG4gICAgZ2l0aHViLnRleHRDb250ZW50ID0gJ0dpdGh1YidcclxuICAgIGdpdGh1Yi50YXJnZXQgPSAnX2JsYW5rJ1xyXG5cclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRodWIpXHJcblxyXG4gICAgY29uc3QgaW5zdGFncmFtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBpbnN0YWdyYW0uaHJlZiA9ICcjJ1xyXG4gICAgaW5zdGFncmFtLnRleHRDb250ZW50ID0gJ0luc3RhZ3JhbSdcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChpbnN0YWdyYW0pXHJcblxyXG4gICAgY29uc3QgdHdpdHRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgdHdpdHRlci5ocmVmID0gJ2h0dHBzOi8vdHdpdHRlci5jb20vTU1vY29tb2NoaSdcclxuICAgIHR3aXR0ZXIudGV4dENvbnRlbnQgPSAnVHdpdHRlcidcclxuICAgIHR3aXR0ZXIudGFyZ2V0ID0gJ19ibGFuaydcclxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZCh0d2l0dGVyKVxyXG5cclxuICAgIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKVxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGhyKVxyXG4gICAgcmV0dXJuIGZvb3RlclxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfSIsImltcG9ydCB7Y3JlYXRlTmF2fSBmcm9tICcuL25hdidcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhlYWRlcigpe1xyXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJylcclxuICAgIGNvbnN0IGxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuXHJcbiAgICBsb2dvLmNsYXNzTGlzdC5hZGQoJ2xvZ28nLCAncG9wb3V0LXRleHQnKVxyXG4gICAgbG9nby50ZXh0Q29udGVudCA9ICdQaG8gRGVsaWNpb3VzJ1xyXG5cclxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvKVxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGNyZWF0ZU5hdigpKVxyXG4gICAgcmV0dXJuIGhlYWRlclxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVIZWFkZXIgfSIsImltcG9ydCBwaG9Cb3dsIGZyb20gJy4vaW1hZ2VzL2RpZS1ncmllY2hlbi1ZMTFpVFZFMkRGQS11bnNwbGFzaC5qcGcnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIb21lcGFnZSgpe1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG4gICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdob21lJylcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGNyZWF0ZVRleHRDb250YWluZXIoKSlcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlSW1nQ29udGFpbmVyKCkpXHJcblxyXG4gICAgcmV0dXJuIHNlY3Rpb25cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGV4dENvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0ZXh0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RleHQtY29udGFpbmVyJylcclxuXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ3BvcG91dC10ZXh0JylcclxuICAgIGgxLnRleHRDb250ZW50ID0gJ1Bo4bufJ1xyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMSlcclxuXHJcbiAgICBjb25zdCBzcXVpZ2dseUxpbmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc3F1aWdnbHlMaW5lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2hvbGRlcicpXHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHNxdWlnZ2x5TGluZUNvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCBzcXVpZ2dseUxpbmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHNxdWlnZ2x5TGluZTEuY2xhc3NMaXN0LmFkZCgnZWxsaXBzZScpXHJcbiAgICBzcXVpZ2dseUxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1aWdnbHlMaW5lMSlcclxuXHJcbiAgICBjb25zdCBzcXVpZ2dseUxpbmUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHNxdWlnZ2x5TGluZTIuY2xhc3NMaXN0LmFkZCgnZWxsaXBzZScsICdlbGxpcHNlMicpXHJcbiAgICBzcXVpZ2dseUxpbmVDb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1aWdnbHlMaW5lMilcclxuXHJcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcclxuICAgIGgyLmlubmVySFRNTCA9ICdBIEJvd2wgb2YgTG92ZSBGcm9tIDxzcGFuIGNsYXNzPVwicG9wb3V0LXRleHRcIj5QaG8gRGVsaWNpb3VzPC9zcGFuPiBGb3IgWW91J1xyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMilcclxuXHJcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwLnRleHRDb250ZW50ID0gXCJQaOG7nyBvciBwaG8gaXMgYSBWaWV0bmFtZXNlIHNvdXAgZGlzaCBjb25zaXN0aW5nIG9mIGJyb3RoLCByaWNlIG5vb2RsZXMsIGhlcmJzLCBhbmQgbWVhdC4gUGhvIGlzIGEgcG9wdWxhciBmb29kIGluIFZpZXRuYW0gd2hlcmUgaXQgaXMgc2VydmVkIGluIGhvdXNlaG9sZHMsIHN0cmVldCBzdGFsbHMgYW5kIHJlc3RhdXJhbnRzIGNvdW50cnl3aWRlLiBQaG8gaXMgY29uc2lkZXJlZCBWaWV0bmFtJ3MgbmF0aW9uYWwgZGlzaFwiXHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKHApXHJcblxyXG4gICAgY29uc3QgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXHJcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYnRuJylcclxuICAgIGJ1dHRvbi50ZXh0Q29udGVudCA9ICdPcmRlciBOb3cnXHJcbiAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKVxyXG5cclxuICAgIHJldHVybiB0ZXh0Q29udGFpbmVyXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUltZ0NvbnRhaW5lcigpe1xyXG4gICAgY29uc3QgaW1nQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGltZ0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbWctY29udGFpbmVyJylcclxuXHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1nLnNyYyA9IHBob0Jvd2xcclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXHJcblxyXG4gICAgY29uc3QgdW5zcGxhc2hDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdW5zcGxhc2hDcmVkaXQuY2xhc3NMaXN0LmFkZCgndW5zcGxhc2gnKVxyXG4gICAgdW5zcGxhc2hDcmVkaXQuaW5uZXJIVE1MID0gIFwiUGhvdG8gYnkgPGEgaHJlZj1cXFwiaHR0cHM6Ly91bnNwbGFzaC5jb20vQGRpZWdyaWVjaGVuP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFxcXCI+RElFIEdSSUVDSEVOPC9hPiBvbiA8YSBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XFxcIj5VbnNwbGFzaDwvYT5cIlxyXG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVuc3BsYXNoQ3JlZGl0KVxyXG4gICAgXHJcbiAgICByZXR1cm4gaW1nQ29udGFpbmVyXHJcbn1cclxuXHJcbmV4cG9ydCB7Y3JlYXRlSG9tZXBhZ2V9IiwiaW1wb3J0IHsgY3JlYXRlSGVhZGVyIH0gZnJvbSAnLi9oZWFkZXInXHJcbmltcG9ydCB7IHNldE5hdkFjdGl2ZUl0ZW0gfSBmcm9tICcuL25hdidcclxuaW1wb3J0IHsgY3JlYXRlSG9tZXBhZ2UgfSBmcm9tICcuL2hvbWUnXHJcbmltcG9ydCB7IGNyZWF0ZU1lbnUgfSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCB7IGNyZWF0ZVN0b3J5IH0gZnJvbSAnLi9zdG9yeSdcclxuaW1wb3J0IHsgY3JlYXRlRm9vdGVyIH0gZnJvbSAnLi9mb290ZXInXHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnXHJcblxyXG5jb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKVxyXG5cclxuXHJcbmZ1bmN0aW9uIGluaXRpYWxQYWdlTG9hZCgpe1xyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIZWFkZXIoKSlcclxuICAgIFxyXG4gICAgLy8gc2V0IGhvbWUgYXMgYWN0aXZlXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmF2LWl0ZW0nKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG5cclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlSG9tZXBhZ2UoKSlcclxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRm9vdGVyKCkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQYWdlKGUpe1xyXG4gICAgLy8gZG8gbm90aGluZyB1bmxlc3MgdXNlciBjbGlja3MgZGlyZWN0bHkgb24gbmF2IGl0ZW1cclxuICAgIGlmICghZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCduYXYtaXRlbScpKSByZXR1cm5cclxuICAgIC8vIGRvIG5vdGhpbmcgaWYgdXNlciBjbGlja3Mgb24gbmF2IGl0ZW0gc2hvd2luZyBjdXJyZW50IHBhZ2VcclxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm5cclxuXHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWN0aW9uJykucmVtb3ZlKClcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXHJcbiAgICBzZXROYXZBY3RpdmVJdGVtKGUudGFyZ2V0KVxyXG5cclxuICAgIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ01lbnUnKXtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVNZW51KCksIGZvb3RlcilcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQudGV4dENvbnRlbnQgPT09ICdIb21lJyl7XHJcbiAgICAgICAgY29udGVudENvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3JlYXRlSG9tZXBhZ2UoKSwgZm9vdGVyKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVTdG9yeSgpLCBmb290ZXIpXHJcbiAgICB9XHJcbn1cclxuXHJcbmluaXRpYWxQYWdlTG9hZCgpXHJcblxyXG5leHBvcnQgeyBsb2FkUGFnZSB9IiwiaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSBcIi4vbWVudUl0ZW1zXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVNZW51KCl7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ21lbnUnKVxyXG5cclxuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXHJcblxyXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpXHJcbiAgICBoMS5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpXHJcbiAgICBoMS50ZXh0Q29udGVudCA9ICdNZW51J1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoaDEpXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb25QYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBkZXNjcmlwdGlvblBhcmEuaW5uZXJIVE1MID0gJ091ciBtZW51IGluY2x1ZGVzIGEgd2lkZS12YXJpZXR5IG9mIFZpZXRuYW1lc2UgYW5kIEFzaWFuIGRpc2hlcy4gUGxlYXNlIHRha2UgYSBsb29rIGFuZCBnaXZlIHVzIGEgdmlzaXQgYXQgPHNwYW4gY2xhc3M9XCJwb3BvdXQtdGV4dFwiPlBobyBEZWxpY2lvdXM8L3NwYW4+LidcclxuICAgIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uUGFyYSlcclxuXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBvcHVsYXRlTWVudSgpKVxyXG5cclxuICAgIHJldHVybiBzZWN0aW9uXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBwb3B1bGF0ZU1lbnUoKXtcclxuICAgIGNvbnN0IG1lbnVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgbWVudUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbnRhaW5lcicpXHJcblxyXG4gICAgZm9yIChjb25zdCBjYXRlZ29yeSBpbiBtZW51SXRlbXMpe1xyXG4gICAgICAgIGNvbnN0IG1lbnVDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgICAgICBtZW51Q2FyZC5jbGFzc0xpc3QuYWRkKCdtZW51LWNhcmQnKVxyXG4gICAgICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUNhcmQpXHJcblxyXG4gICAgICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgICAgIGgyLnRleHRDb250ZW50ID0gY2F0ZWdvcnlcclxuICAgICAgICBoMi5jbGFzc0xpc3QuYWRkKCdjYXRlZ29yeScpXHJcbiAgICAgICAgbWVudUNhcmQuYXBwZW5kQ2hpbGQoaDIpXHJcblxyXG4gICAgICAgIG1lbnVJdGVtc1tjYXRlZ29yeV0uZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKVxyXG4gICAgICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChtZW51SXRlbUNvbnRhaW5lcilcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgbmFtZS5jbGFzc0xpc3QuYWRkKCdpdGVtLW5hbWUnKVxyXG4gICAgICAgICAgICBuYW1lLnRleHRDb250ZW50ID0gaXRlbS5uYW1lXHJcbiAgICAgICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpXHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS5kZXNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tZGVzY3JpcHRpb24nKVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICBtZW51SXRlbUNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG1lbnVDb250YWluZXJcclxufVxyXG5leHBvcnQgeyBjcmVhdGVNZW51IH0iLCJjb25zdCBtZW51SXRlbXMgPSB7XHJcbiAgICAnQXBwZXRpemVycyc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdBUFBFVElaRVIgU0FNUExFUiAvIEtoYWkgVuG7iyDEkOG6t2MgQmnhu4d0JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcoMikgU3ByaW5nIFJvbGxzLCAoMikgRWdnIFJvbGxzLCAoMikgU2hyaW1wIFNhdXNhZ2UgV3JhcCwgYW5kICg0KSBTaHJpbXAgV3JhcCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ZFR0VUQVJJQU4gU1BSSU5HIFJPTExTICgyKSAvIEfhu49pIEN14buRbiBDaGF5JyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdSaWNlIHBhcGVyIGZyZXNobHkgd3JhcHBlZCBhcm91bmQgVG9mdSwgaWNlYmVyZyBsZXR0dWNlLCBiYXNpbCwgYmVhbnNwcm91dHMgYW5kIHZlcm1pY2VsbGkgc2VydmVkIHdpdGggaG91c2Ugc3BlY2lhbCBwZWFudXQgc2F1Y2UnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFREFNQU1FJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRlJJRUQgT1IgU1RFQU1FRCBEVU1QTElORyAoNSknLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FuIGlycmVzaXN0aWJsZSBkdW1wbGluZ3MgZmlsbGVkIHdpdGggZ3JvdW5kIHBvcmsgYW5kIHZlZ2V0YWJsZXMgc2VydmVkIHdpdGggc3BlY2lhbCBkdW1wbGluZyBzYXVjZS4nXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgICdQSOG7nic6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdLT0JFIEJFRUYgUGjhu58nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRklMRVQgTUlHTk9OIFBo4bufJ1xyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1NIUklNUCBQSE8gLyBQaOG7nyBUw7RtJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnUEjhu54gU1BFQ0lBTCAvIMSQ4bq3YyBCaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0EgaGVhcnR5IGNvbWJpbmF0aW9uIG9mIGV5ZS1yb3VuZCBzdGVhaywgd2VsbC1kb25lIGZsYW5rLCB0cmlwZSwgYmVlZiBtZWF0YmFsbHMsIHdlbGwtZG9uZSBicmlza2V0LCBhbmQgc29mdCB0ZW5kb24uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnRVlFIFJPVU5EIFNURUFLIFBITyAvIFBo4bufIFTDoWknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdWRUdFVEFCTEUgUEhPIC8gUGjhu58gUmF1IEPhuqNpJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICcqVmVnZXRhYmxlIGJyb3RoIGF2YWlsYWJsZSB1cG9uIHJlcXVlc3QnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgbmFtZTogJ1NFQUZPT0QgUEhPLyBQaOG7nyBI4bqjaSBW4buLJyxcclxuICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0NvbWJpbmF0aW9uIG9mIHNocmltcCwgY2FsYW1hcmksIGltaS4gY3JhYiBtZWF0ICwgYW5kIGZpc2ggcGFzdGUgYmFsbHMuJyBcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1lPVVIgQ1JFQVRJT04gLyBQaOG7nyBOaMawIMOdJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdQaWNrIHVwIHRvIHRocmVlIHRvcHBpbmdzOiBFeWUgcm91bmQgc3RlYWssIHdlbGwtZG9uZSBicmlza2V0LCB3ZWxsLWRvbmUgZmxhbmssIHNvZnQgdGVuZG9uLCB0cmlwZSwgb3IgYmVlZiBtZWF0YmFsbHMuJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnVkVSTUlDRUxMSSBvciBBTkdFTCBIQUlSIC8gQsO6biAvQsOhbmggSOG7j2knOiBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVkVSTUlDRUxMSSBDT01CSU5BVElPTicsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tYmluYXRpb24gb2YgU0lNUExZIFBI4bueIGVnZyByb2xsLCBncmlsbGVkIHBvcmssIGdyaWxsZWQgc2hyaW1wLCBwb3JrIHNhdXNhZ2UsIGFuZCBzaHJpbXAgc2F1c2FnZSB3cmFwLidcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0dSSUxMRUQgUE9SSyAvIFRo4buLdCBOxrDhu5tuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0dSSUxMRUQgQ0hJQ0tFTiAvIEfDoCBOxrDhu5tuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0dSSUxMRUQgQkVFRiAvIELDsiBOxrDhu5tuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0dSSUxMRUQgU0hSSU1QIC8gVMO0bSBOxrDhu5tuZydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1NBVVTDiUVEIEJFRUYgQU5EIE9OSU9OUyAvIELDum4gQsOyIFjDoG8nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdZT1VSIENSRUFUSU9OJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDaG9vc2UgdXAgdG8gdGhyZWUgaXRlbXM6IEdyaWxsZWQgUG9yaywgR3JpbGxlZCBDaGlja2VuLCBHcmlsbGVkIEJlZWYsIEdyaWxsZWQgU2hyaW1wICwgQ2hhcmJyb2lsZWQgUG9yayBTYXVzYWdlLCBvciBTSU1QTFkgUEjhu54gRWdnIFJvbGwuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU0FVVMOJRUQgVE9GVSdcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ0RyaW5rcyc6W1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ZJRVROQU1FU0UgRVNQUkVTU08gKHNlcnZlZCBIb3Qgb3IgSWNlZCkgL0PDoCBQaMOqIMSQZW4vxJBlbiDEkMOhJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVklFVE5BTUVTRSBFU1BSRVNTTyB3aXRoIENPTkRFTlNFRCBNSUxLIEPDoCBQaMOqIFPhu69hL1Phu69hIMSQw6EgKHNlcnZlZCBIb3Qgb3IgSWNlZCknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdDT0NPTlVUIEpVSUNFIC8gTsaw4bubYyBE4burYSBUxrDGoWknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTQUxUWSBQTFVNIFNPREEgLyBTb2RhIFjDrSBNdeG7mWknXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdMWUNIRUUgRFJJTksgLyBOxrDhu5tjIFRyw6FpIFbhuqNpJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVEhBSSBURUEgLyBUcsOgIFRow6FpJ1xyXG4gICAgICAgIH1cclxuICAgIF1cclxufVxyXG5cclxuZXhwb3J0IHsgbWVudUl0ZW1zIH0iLCJpbXBvcnQge2xvYWRQYWdlfSBmcm9tICcuL2luZGV4J1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlTmF2KCl7XHJcbiAgICBjb25zdCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKVxyXG4gICAgY29uc3QgbmF2SXRlbXMgPSBbJ0hvbWUnLCAnTWVudScsICdPdXIgU3RvcnknXVxyXG5cclxuICAgIG5hdkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCduYXYtaXRlbScpXHJcbiAgICAgICAgZWwudGV4dENvbnRlbnQgPSBpdGVtXHJcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKGVsKVxyXG4gICAgfSlcclxuXHJcbiAgICBuYXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsb2FkUGFnZSlcclxuICAgIFxyXG4gICAgcmV0dXJuIG5hdlxyXG59XHJcblxyXG5mdW5jdGlvbiBzZXROYXZBY3RpdmVJdGVtKG5ld0FjdGl2ZSl7XHJcbiAgICBjb25zdCBvbGRBY3RpdmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJylcclxuICAgIG9sZEFjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG5cclxuICAgIG5ld0FjdGl2ZS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKVxyXG59XHJcblxyXG5cclxuZXhwb3J0IHsgY3JlYXRlTmF2LCBzZXROYXZBY3RpdmVJdGVtIH0iLCJmdW5jdGlvbiBjcmVhdGVTdG9yeSgpe1xyXG4gICAgY29uc3Qgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlY3Rpb24nKVxyXG5cclxuICAgIHJldHVybiBzZWN0aW9uXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVN0b3J5IH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=