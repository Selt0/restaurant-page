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
___CSS_LOADER_EXPORT___.push([module.id, "/* GENERAL */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    max-height: 100vh;\r\n    font-size: 18px;\r\n    font-family: 'Edu SA Beginner', cursive;\r\n}\r\n\r\n:root {\r\n    --red: #F20544;\r\n    --brown: #A68C6D;\r\n    --green: #267302;\r\n    --dark-green: #0A4001;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    max-height: 900px;\r\n    border-radius: 75px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: var(--dark-green);\r\n}\r\n\r\nsection {\r\n    height: max(900px, 100%);\r\n}\r\n\r\n.popout-text {\r\n    color: var(--green);\r\n    font-size: 1.2em;\r\n}\r\n\r\n.unsplash {\r\n    font-size: .8rem;\r\n  }\r\n\r\n.img-container {\r\n    margin: auto;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin: 50px 25px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5rem;\r\n    border: 2px solid var(--red);\r\n    padding: 10px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    list-style: none;\r\n    justify-content: space-around;\r\n    width: 700px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.nav-item:hover {\r\n    cursor: pointer;\r\n    border-bottom: 2px solid var(--green);\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid var(--dark-green);\r\n    color: var(--dark-green);\r\n}\r\n\r\n/* HOMEPAGE */\r\n\r\n.home {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 15px;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n}\r\n\r\n.text-container > * {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.text-container h1 {\r\n    font-size: 5rem;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.text-container h2 {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.text-container p {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n\r\n/* squiggly line */\r\n.holder {\r\n    /* Clip edges, as some of the lines don't terminate nicely. */\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 200px;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n.ellipse {\r\n    position: absolute;\r\n    background: radial-gradient(ellipse, transparent, transparent 7px, var(--red) 7px, var(--red) 10px, transparent 11px);\r\n    background-size: 36px 40px;\r\n    width: 200px;\r\n    height: 20px;\r\n}\r\n\r\n.ellipse2 {\r\n    top: 20px;\r\n    left: 18px;\r\n    background-position: 0px -20px;\r\n  }\r\n\r\n\r\n.btn {\r\n    width: 150px;\r\n    height: 40px;\r\n    background-color: var(--red);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n.btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 5px;\r\n    left: -5px;\r\n    right: 5px;\r\n    bottom: -5px;\r\n    border: 1px solid var(--green);\r\n    display: block;\r\n    z-index: -1;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menu {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    background-position-x: 0%, 0%;\r\n    background-position-y: 0%, 0%;\r\n    background-repeat: repeat, repeat;\r\n    background-size: auto, auto;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.menu .description {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menu .category {\r\n    color:var(--red)\r\n}\r\n\r\n.menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, min(500px, 100%));\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.menu-card {\r\n    background-color: #fff;\r\n    border-radius: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.menu-item {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 2px solid var(--brown);\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n.item-name {\r\n    font-weight: 700;\r\n}\r\n\r\n.item-description {\r\n    margin-top: 5px;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* STORY */\r\n.story {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.story p {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin-top: 40px;\r\n    margin-right: 75px;\r\n    margin-bottom: 75px;\r\n    min-height: 75px;\r\n}\r\n\r\nfooter a{\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n\r\nfooter a:first-child {\r\n    margin-left: 75px;\r\n}\r\n\r\nhr {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-top: 1px solid var(--green);\r\n    border-bottom: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    align-self: center;\r\n}\r\n\r\n\r\n@media screen and (max-width: 800px) {\r\n    .text-container{\r\n        padding: 0\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .home {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .story, .home {\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n    }\r\n\r\n    .menu {\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Edu+SA+Beginner:wght@400;700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@400;700&display=swap');\r\n\r\n\r\n/* GENERAL */\r\n\r\n* {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nbody {\r\n    max-height: 100vh;\r\n    font-size: 18px;\r\n    font-family: 'Edu SA Beginner', cursive;\r\n}\r\n\r\n:root {\r\n    --red: #F20544;\r\n    --brown: #A68C6D;\r\n    --green: #267302;\r\n    --dark-green: #0A4001;\r\n}\r\n\r\nimg {\r\n    width: 100%;\r\n    max-height: 900px;\r\n    border-radius: 75px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: var(--dark-green);\r\n}\r\n\r\nsection {\r\n    height: max(900px, 100%);\r\n}\r\n\r\n.popout-text {\r\n    color: var(--green);\r\n    font-size: 1.2em;\r\n}\r\n\r\n.unsplash {\r\n    font-size: .8rem;\r\n  }\r\n\r\n.img-container {\r\n    margin: auto;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin: 50px 25px;\r\n    font-size: 1.2rem;\r\n}\r\n\r\n.logo {\r\n    font-size: 1.5rem;\r\n    border: 2px solid var(--red);\r\n    padding: 10px;\r\n    font-weight: 700;\r\n}\r\n\r\nnav {\r\n    display: flex;\r\n    list-style: none;\r\n    justify-content: space-around;\r\n    width: 700px;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.nav-item:hover {\r\n    cursor: pointer;\r\n    border-bottom: 2px solid var(--green);\r\n}\r\n\r\n.active {\r\n    border-bottom: 2px solid var(--dark-green);\r\n    color: var(--dark-green);\r\n}\r\n\r\n/* HOMEPAGE */\r\n\r\n.home {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));\r\n    gap: 15px;\r\n    margin-left: 75px;\r\n    margin-right: 75px;\r\n}\r\n\r\n.text-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    padding-right: 100px;\r\n    padding-left: 100px;\r\n}\r\n\r\n.text-container > * {\r\n    margin-top: 25px;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n.text-container h1 {\r\n    font-size: 5rem;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.text-container h2 {\r\n    font-size: 3.5rem;\r\n}\r\n\r\n.text-container p {\r\n    font-size: 1.5rem;\r\n    line-height: 1.5;\r\n}\r\n\r\n\r\n\r\n/* squiggly line */\r\n.holder {\r\n    /* Clip edges, as some of the lines don't terminate nicely. */\r\n    overflow: hidden;\r\n    position: relative;\r\n    width: 200px;\r\n    height: 50px;\r\n    margin-top: 10px;\r\n  }\r\n  \r\n.ellipse {\r\n    position: absolute;\r\n    background: radial-gradient(ellipse, transparent, transparent 7px, var(--red) 7px, var(--red) 10px, transparent 11px);\r\n    background-size: 36px 40px;\r\n    width: 200px;\r\n    height: 20px;\r\n}\r\n\r\n.ellipse2 {\r\n    top: 20px;\r\n    left: 18px;\r\n    background-position: 0px -20px;\r\n  }\r\n\r\n\r\n.btn {\r\n    width: 150px;\r\n    height: 40px;\r\n    background-color: var(--red);\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 5px;\r\n    position: relative;\r\n}\r\n\r\n.btn:hover {\r\n    cursor: pointer;\r\n}\r\n.btn::before {\r\n    content: '';\r\n    position: absolute;\r\n    top: 5px;\r\n    left: -5px;\r\n    right: 5px;\r\n    bottom: -5px;\r\n    border: 1px solid var(--green);\r\n    display: block;\r\n    z-index: -1;\r\n    border-radius: 5px;\r\n}\r\n\r\n/* MENU */\r\n\r\n.menu {\r\n    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(file:///C:/Users/Michael/OneDrive/Documents/CODE/TheOdinProject/PROJECTS/restaurant-page/dist/e02cfbdbade5c9127a28.jpg);\r\n    background-position-x: 0%, 0%;\r\n    background-position-y: 0%, 0%;\r\n    background-repeat: repeat, repeat;\r\n    background-size: auto, auto;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n    padding-top: 50px;\r\n    padding-bottom: 50px;\r\n}\r\n\r\n.menu .description {\r\n    max-width: 500px;\r\n    margin: 0 auto;\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 15px;\r\n}\r\n\r\n.menu .category {\r\n    color:var(--red)\r\n}\r\n\r\n.menu-container {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, min(500px, 100%));\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 25px;\r\n    margin-top: 50px;\r\n}\r\n\r\n.menu-card {\r\n    background-color: #fff;\r\n    border-radius: 15px;\r\n    padding: 15px;\r\n}\r\n\r\n.menu-item {\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n    border-bottom: 2px solid var(--brown);\r\n    font-family: 'Roboto Condensed', sans-serif;\r\n}\r\n\r\n.item-name {\r\n    font-weight: 700;\r\n}\r\n\r\n.item-description {\r\n    margin-top: 5px;\r\n    line-height: 1.5;\r\n}\r\n\r\n/* STORY */\r\n.story {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.story p {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-around;\r\n    margin-top: 40px;\r\n    margin-right: 75px;\r\n    margin-bottom: 75px;\r\n    min-height: 75px;\r\n}\r\n\r\nfooter a{\r\n    margin-left: 25px;\r\n    margin-right: 25px;\r\n}\r\n\r\nfooter a:first-child {\r\n    margin-left: 75px;\r\n}\r\n\r\nhr {\r\n    display: inline-block;\r\n    width: 100%;\r\n    border-top: 1px solid var(--green);\r\n    border-bottom: none;\r\n    border-left: none;\r\n    border-right: none;\r\n    align-self: center;\r\n}\r\n\r\n\r\n@media screen and (max-width: 800px) {\r\n    .text-container{\r\n        padding: 0\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 650px) {\r\n    .home {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .story, .home {\r\n        margin-left: 20px;\r\n        margin-right: 20px;\r\n    }\r\n\r\n    .menu {\r\n        padding-left: 20px;\r\n        padding-right: 20px;\r\n    }\r\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _images_liza_pooor_dtOw5wFKHdQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/liza-pooor-dtOw5wFKHdQ-unsplash.jpg */ "./src/images/liza-pooor-dtOw5wFKHdQ-unsplash.jpg");


function createStory(){
    const section = document.createElement('section')
    section.classList.add('story')

    const h1 = document.createElement('h1')
    h1.textContent = 'About Pho Delicious'
    section.appendChild(h1)

    const para1 = document.createElement('p')
    para1.innerHTML = "At <span class='popout-text'>Pho Delicious</span>, our passion is simple: to make a healthy Vietnamese phở noodle soup offering the same robust flavors and aromas of traditional phở. That's why we've revolutionized the way phở is made; using top-grade meats to create a healthier soup broth that's lower in calories and cholesterol. Our signature broth is paired with fresh locally sourced produce, high quality ingredients and spices to produce the perfect bowl of phở. <span class='popout-text'>Pho Delicious</span> is the Health Conscious Choice™"
    section.appendChild(para1)

    const imgContainer = document.createElement('div')
    imgContainer.classList.add('img-container')
    section.appendChild(imgContainer)

    const img = new Image()
    img.src = _images_liza_pooor_dtOw5wFKHdQ_unsplash_jpg__WEBPACK_IMPORTED_MODULE_0__
    imgContainer.appendChild(img)

    const unsplashCredit = document.createElement('div')
    unsplashCredit.classList.add('unsplash')
    unsplashCredit.innerHTML = 'Photo by <a href="https://unsplash.com/@pooorliza?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Liza Pooor</a> on <a href="https://unsplash.com/?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'
    imgContainer.appendChild(unsplashCredit)


    const para2 = document.createElement('p')
    para2.innerHTML = '<span class="popout-text">Pho Delicious</span> was founded with a simple goal; to craft a healthy bowl of phở using Vietnamese flavors and spices. Established in 1983 in Minnesota, <span class="popout-text">Pho Delicious</span> has rapidly grown to be the leader in the Vietnamese food, fast casual industry.'
    section.appendChild(para2)

    const para3 = document.createElement('p')
    para3.textContent = "After the fall of Saigon in 1975, an influx of Vietnamese refugees arrived in the United States with little to their name. From humble beginnings with less than 400sq ft of space, Mr.Chef had a vision for the brand:"
    section.appendChild(para3)

    const para4 = document.createElement('p')
    para4.textContent = '“I wanted to create a way for Vietnamese refugees to assimilate into their new environment while having the opportunity to elevate their status to become entrepreneurs and being a part of the American Dream.”'
    section.appendChild(para4)

    const para5 = document.createElement('p')
    para5.innerHTML = 'In 1985 <span class="popout-text">Pho Delicious</span> expanded its brand by opening its flagship store in Minneapolis, a popular hangout spot for the Vietnamese community which still stands strong today. Shortly there after <span class="popout-text">Pho Delicious</span> pioneered the first Vietnamese franchise in the United States by expanding the brand locally and internationally.'
    section.appendChild(para5)

    const para6 = document.createElement('p')
    para6.innerHTML = 'Now with over three decades of experience and a global reach, <span class="popout-text">Pho Delicious</span> has become a household name serving millions of bowls annually worldwide.'
    section.appendChild(para6)

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

/***/ }),

/***/ "./src/images/liza-pooor-dtOw5wFKHdQ-unsplash.jpg":
/*!********************************************************!*\
  !*** ./src/images/liza-pooor-dtOw5wFKHdQ-unsplash.jpg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34e38aeb17f7a6b9fc0b.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFNBQVMsWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEs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eEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaURBQVM7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBUztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsR2dDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0NBQWtDLDRDQUFRO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCK0Q7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtUUFBbVE7QUFDblE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHdFQUFJO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNHQUFzRztBQUN0RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNsREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7OztVRUFBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudUl0ZW1zLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9uYXYuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3J5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJmaWxlOi8vL0M6L1VzZXJzL01pY2hhZWwvT25lRHJpdmUvRG9jdW1lbnRzL0NPREUvVGhlT2RpblByb2plY3QvUFJPSkVDVFMvcmVzdGF1cmFudC1wYWdlL2Rpc3QvZTAyY2ZiZGJhZGU1YzkxMjdhMjguanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1FZHUrU0ErQmVnaW5uZXI6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytDb25kZW5zZWQ6d2dodEA0MDA7NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHRU5FUkFMICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRWR1IFNBIEJlZ2lubmVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXJlZDogI0YyMDU0NDtcXHJcXG4gICAgLS1icm93bjogI0E2OEM2RDtcXHJcXG4gICAgLS1ncmVlbjogIzI2NzMwMjtcXHJcXG4gICAgLS1kYXJrLWdyZWVuOiAjMEE0MDAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogOTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogbWF4KDkwMHB4LCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcG91dC10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuc3BsYXNoIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIEhPTUVQQUdFICovXFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciA+ICoge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBzcXVpZ2dseSBsaW5lICovXFxyXFxuLmhvbGRlciB7XFxyXFxuICAgIC8qIENsaXAgZWRnZXMsIGFzIHNvbWUgb2YgdGhlIGxpbmVzIGRvbid0IHRlcm1pbmF0ZSBuaWNlbHkuICovXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4uZWxsaXBzZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCA3cHgsIHZhcigtLXJlZCkgN3B4LCB2YXIoLS1yZWQpIDEwcHgsIHRyYW5zcGFyZW50IDExcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggNDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lbGxpcHNlMiB7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG4gICAgbGVmdDogMThweDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yMHB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idG46OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICBsZWZ0OiAtNXB4O1xcclxcbiAgICByaWdodDogNXB4O1xcclxcbiAgICBib3R0b206IC01cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1FTlUgKi9cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogMCUsIDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlLCAwJTtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdCwgcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGF1dG8sIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXHJcXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXHJcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgcGFkZGluZzogMjBweDtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUgLmNhdGVnb3J5IHtcXHJcXG4gICAgY29sb3I6dmFyKC0tcmVkKVxcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWluKDUwMHB4LCAxMDAlKSk7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBnYXA6IDI1cHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWNhcmQge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbiAgICBwYWRkaW5nOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudS1pdGVtIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxNXB4O1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tYnJvd24pO1xcclxcbiAgICBmb250LWZhbWlseTogJ1JvYm90byBDb25kZW5zZWQnLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1uYW1lIHtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLml0ZW0tZGVzY3JpcHRpb24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxufVxcclxcblxcclxcbi8qIFNUT1JZICovXFxyXFxuLnN0b3J5IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIG1heC13aWR0aDogNzAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uc3RvcnkgcCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIEZPT1RFUiAqL1xcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcclxcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDc1cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhe1xcclxcbiAgICBtYXJnaW4tbGVmdDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgYTpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ncmVlbik7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7XFxyXFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcclxcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcXHJcXG4gICAgLnRleHQtY29udGFpbmVye1xcclxcbiAgICAgICAgcGFkZGluZzogMFxcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XFxyXFxuICAgIC5ob21lIHtcXHJcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIC5zdG9yeSwgLmhvbWUge1xcclxcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLm1lbnUge1xcclxcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcclxcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUlBLFlBQVk7O0FBRVo7SUFDSSxTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gs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O0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQSxXQUFXOztBQUVYO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtBQUN0Qjs7O0FBR0E7SUFDSTtRQUNJO0lBQ0o7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RWR1K1NBK0JlZ2lubmVyOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOndnaHRANDAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG5cXHJcXG4vKiBHRU5FUkFMICovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgICBmb250LXNpemU6IDE4cHg7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnRWR1IFNBIEJlZ2lubmVyJywgY3Vyc2l2ZTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAtLXJlZDogI0YyMDU0NDtcXHJcXG4gICAgLS1icm93bjogI0E2OEM2RDtcXHJcXG4gICAgLS1ncmVlbjogIzI2NzMwMjtcXHJcXG4gICAgLS1kYXJrLWdyZWVuOiAjMEE0MDAxO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogOTAwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyZWVuKTtcXHJcXG59XFxyXFxuXFxyXFxuc2VjdGlvbiB7XFxyXFxuICAgIGhlaWdodDogbWF4KDkwMHB4LCAxMDAlKTtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcG91dC10ZXh0IHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWdyZWVuKTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnVuc3BsYXNoIHtcXHJcXG4gICAgZm9udC1zaXplOiAuOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogSEVBREVSICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbjogNTBweCAyNXB4O1xcclxcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28ge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcmVkKTtcXHJcXG4gICAgcGFkZGluZzogMTBweDtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxubmF2IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIHdpZHRoOiA3MDBweDtcXHJcXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1pdGVtOmhvdmVyIHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tZ3JlZW4pO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWRhcmstZ3JlZW4pO1xcclxcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmVlbik7XFxyXFxufVxcclxcblxcclxcbi8qIEhPTUVQQUdFICovXFxyXFxuXFxyXFxuLmhvbWUge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDUwMHB4LCAxZnIpKTtcXHJcXG4gICAgZ2FwOiAxNXB4O1xcclxcbiAgICBtYXJnaW4tbGVmdDogNzVweDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA3NXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgcGFkZGluZy1yaWdodDogMTAwcHg7XFxyXFxuICAgIHBhZGRpbmctbGVmdDogMTAwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciA+ICoge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgaDEge1xcclxcbiAgICBmb250LXNpemU6IDVyZW07XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XFxyXFxufVxcclxcblxcclxcbi50ZXh0LWNvbnRhaW5lciBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMy41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udGV4dC1jb250YWluZXIgcCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKiBzcXVpZ2dseSBsaW5lICovXFxyXFxuLmhvbGRlciB7XFxyXFxuICAgIC8qIENsaXAgZWRnZXMsIGFzIHNvbWUgb2YgdGhlIGxpbmVzIGRvbid0IHRlcm1pbmF0ZSBuaWNlbHkuICovXFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDUwcHg7XFxyXFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4uZWxsaXBzZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGVsbGlwc2UsIHRyYW5zcGFyZW50LCB0cmFuc3BhcmVudCA3cHgsIHZhcigtLXJlZCkgN3B4LCB2YXIoLS1yZWQpIDEwcHgsIHRyYW5zcGFyZW50IDExcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDM2cHggNDBweDtcXHJcXG4gICAgd2lkdGg6IDIwMHB4O1xcclxcbiAgICBoZWlnaHQ6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5lbGxpcHNlMiB7XFxyXFxuICAgIHRvcDogMjBweDtcXHJcXG4gICAgbGVmdDogMThweDtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMHB4IC0yMHB4O1xcclxcbiAgfVxcclxcblxcclxcblxcclxcbi5idG4ge1xcclxcbiAgICB3aWR0aDogMTUwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcmVkKTtcXHJcXG4gICAgY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlcjogbm9uZTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5idG46aG92ZXIge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcbi5idG46OmJlZm9yZSB7XFxyXFxuICAgIGNvbnRlbnQ6ICcnO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogNXB4O1xcclxcbiAgICBsZWZ0OiAtNXB4O1xcclxcbiAgICByaWdodDogNXB4O1xcclxcbiAgICBib3R0b206IC01cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHotaW5kZXg6IC0xO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxufVxcclxcblxcclxcbi8qIE1FTlUgKi9cXHJcXG5cXHJcXG4ubWVudSB7XFxyXFxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChyZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMC41KSksIHVybChmaWxlOi8vL0M6L1VzZXJzL01pY2hhZWwvT25lRHJpdmUvRG9jdW1lbnRzL0NPREUvVGhlT2RpblByb2plY3QvUFJPSkVDVFMvcmVzdGF1cmFudC1wYWdlL2Rpc3QvZTAyY2ZiZGJhZGU1YzkxMjdhMjguanBnKTtcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiAwJSwgMCU7XFxyXFxuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogMCUsIDAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LCByZXBlYXQ7XFxyXFxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0bywgYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xcclxcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcclxcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcclxcbiAgICBwYWRkaW5nLXRvcDogNTBweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51IC5kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxyXFxuICAgIG1hcmdpbjogMCBhdXRvO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubWVudSAuY2F0ZWdvcnkge1xcclxcbiAgICBjb2xvcjp2YXIoLS1yZWQpXFxyXFxufVxcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW4oNTAwcHgsIDEwMCUpKTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogMjVweDtcXHJcXG4gICAgbWFyZ2luLXRvcDogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1lbnUtY2FyZCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxuICAgIHBhZGRpbmc6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tZW51LWl0ZW0ge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXHJcXG4gICAgcGFkZGluZy1ib3R0b206IDE1cHg7XFxyXFxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1icm93bik7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiAnUm9ib3RvIENvbmRlbnNlZCcsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbi5pdGVtLW5hbWUge1xcclxcbiAgICBmb250LXdlaWdodDogNzAwO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDVweDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU1RPUlkgKi9cXHJcXG4uc3Rvcnkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgbWF4LXdpZHRoOiA3MDBweDtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5zdG9yeSBwIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxyXFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogNzVweDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNzVweDtcXHJcXG4gICAgbWluLWhlaWdodDogNzVweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGF7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xcclxcbiAgICBtYXJnaW4tcmlnaHQ6IDI1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciBhOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDc1cHg7XFxyXFxufVxcclxcblxcclxcbmhyIHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWdyZWVuKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxyXFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXHJcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xcclxcbiAgICAudGV4dC1jb250YWluZXJ7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcXHJcXG4gICAgLmhvbWUge1xcclxcbiAgICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgLnN0b3J5LCAuaG9tZSB7XFxyXFxuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcXHJcXG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAubWVudSB7XFxyXFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxyXFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cblxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJmdW5jdGlvbiBjcmVhdGVGb290ZXIoKXtcclxuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpXHJcblxyXG4gICAgY29uc3QgZ2l0aHViID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICBnaXRodWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vU2VsdDAnXHJcbiAgICBnaXRodWIudGV4dENvbnRlbnQgPSAnR2l0aHViJ1xyXG4gICAgZ2l0aHViLnRhcmdldCA9ICdfYmxhbmsnXHJcblxyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdGh1YilcclxuXHJcbiAgICBjb25zdCBpbnN0YWdyYW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJylcclxuICAgIGluc3RhZ3JhbS5ocmVmID0gJyMnXHJcbiAgICBpbnN0YWdyYW0udGV4dENvbnRlbnQgPSAnSW5zdGFncmFtJ1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGluc3RhZ3JhbSlcclxuXHJcbiAgICBjb25zdCB0d2l0dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpXHJcbiAgICB0d2l0dGVyLmhyZWYgPSAnaHR0cHM6Ly90d2l0dGVyLmNvbS9NTW9jb21vY2hpJ1xyXG4gICAgdHdpdHRlci50ZXh0Q29udGVudCA9ICdUd2l0dGVyJ1xyXG4gICAgdHdpdHRlci50YXJnZXQgPSAnX2JsYW5rJ1xyXG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKHR3aXR0ZXIpXHJcblxyXG4gICAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpXHJcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoaHIpXHJcbiAgICByZXR1cm4gZm9vdGVyXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUZvb3RlciB9IiwiaW1wb3J0IHtjcmVhdGVOYXZ9IGZyb20gJy4vbmF2J1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCl7XHJcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKVxyXG4gICAgY29uc3QgbG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG5cclxuICAgIGxvZ28uY2xhc3NMaXN0LmFkZCgnbG9nbycsICdwb3BvdXQtdGV4dCcpXHJcbiAgICBsb2dvLnRleHRDb250ZW50ID0gJ1BobyBEZWxpY2lvdXMnXHJcblxyXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2KCkpXHJcbiAgICByZXR1cm4gaGVhZGVyXHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZUhlYWRlciB9IiwiaW1wb3J0IHBob0Jvd2wgZnJvbSAnLi9pbWFnZXMvZGllLWdyaWVjaGVuLVkxMWlUVkUyREZBLXVuc3BsYXNoLmpwZydcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUhvbWVwYWdlKCl7XHJcbiAgICBjb25zdCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VjdGlvbicpXHJcbiAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2hvbWUnKVxyXG5cclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoY3JlYXRlVGV4dENvbnRhaW5lcigpKVxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChjcmVhdGVJbWdDb250YWluZXIoKSlcclxuXHJcbiAgICByZXR1cm4gc2VjdGlvblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUZXh0Q29udGFpbmVyKCl7XHJcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRleHRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGV4dC1jb250YWluZXInKVxyXG5cclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgaDEuY2xhc3NMaXN0LmFkZCgncG9wb3V0LXRleHQnKVxyXG4gICAgaDEudGV4dENvbnRlbnQgPSAnUGjhu58nXHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxKVxyXG5cclxuICAgIGNvbnN0IHNxdWlnZ2x5TGluZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBzcXVpZ2dseUxpbmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaG9sZGVyJylcclxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoc3F1aWdnbHlMaW5lQ29udGFpbmVyKVxyXG5cclxuICAgIGNvbnN0IHNxdWlnZ2x5TGluZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc3F1aWdnbHlMaW5lMS5jbGFzc0xpc3QuYWRkKCdlbGxpcHNlJylcclxuICAgIHNxdWlnZ2x5TGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVpZ2dseUxpbmUxKVxyXG5cclxuICAgIGNvbnN0IHNxdWlnZ2x5TGluZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgc3F1aWdnbHlMaW5lMi5jbGFzc0xpc3QuYWRkKCdlbGxpcHNlJywgJ2VsbGlwc2UyJylcclxuICAgIHNxdWlnZ2x5TGluZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzcXVpZ2dseUxpbmUyKVxyXG5cclxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxyXG4gICAgaDIuaW5uZXJIVE1MID0gJ0EgQm93bCBvZiBMb3ZlIEZyb20gPHNwYW4gY2xhc3M9XCJwb3BvdXQtdGV4dFwiPlBobyBEZWxpY2lvdXM8L3NwYW4+IEZvciBZb3UnXHJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgyKVxyXG5cclxuICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHAudGV4dENvbnRlbnQgPSBcIlBo4bufIG9yIHBobyBpcyBhIFZpZXRuYW1lc2Ugc291cCBkaXNoIGNvbnNpc3Rpbmcgb2YgYnJvdGgsIHJpY2Ugbm9vZGxlcywgaGVyYnMsIGFuZCBtZWF0LiBQaG8gaXMgYSBwb3B1bGFyIGZvb2QgaW4gVmlldG5hbSB3aGVyZSBpdCBpcyBzZXJ2ZWQgaW4gaG91c2Vob2xkcywgc3RyZWV0IHN0YWxscyBhbmQgcmVzdGF1cmFudHMgY291bnRyeXdpZGUuIFBobyBpcyBjb25zaWRlcmVkIFZpZXRuYW0ncyBuYXRpb25hbCBkaXNoXCJcclxuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQocClcclxuXHJcbiAgICBjb25zdCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpXHJcblxyXG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcclxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdidG4nKVxyXG4gICAgYnV0dG9uLnRleHRDb250ZW50ID0gJ09yZGVyIE5vdydcclxuICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pXHJcblxyXG4gICAgcmV0dXJuIHRleHRDb250YWluZXJcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW1nQ29udGFpbmVyKCl7XHJcbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgaW1nQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2ltZy1jb250YWluZXInKVxyXG5cclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWcuc3JjID0gcGhvQm93bFxyXG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZylcclxuXHJcbiAgICBjb25zdCB1bnNwbGFzaENyZWRpdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB1bnNwbGFzaENyZWRpdC5jbGFzc0xpc3QuYWRkKCd1bnNwbGFzaCcpXHJcbiAgICB1bnNwbGFzaENyZWRpdC5pbm5lckhUTUwgPSAgXCJQaG90byBieSA8YSBocmVmPVxcXCJodHRwczovL3Vuc3BsYXNoLmNvbS9AZGllZ3JpZWNoZW4/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XFxcIj5ESUUgR1JJRUNIRU48L2E+IG9uIDxhIGhyZWY9XFxcImh0dHBzOi8vdW5zcGxhc2guY29tLz91dG1fc291cmNlPXVuc3BsYXNoJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9Y3JlZGl0Q29weVRleHRcXFwiPlVuc3BsYXNoPC9hPlwiXHJcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQodW5zcGxhc2hDcmVkaXQpXHJcbiAgICBcclxuICAgIHJldHVybiBpbWdDb250YWluZXJcclxufVxyXG5cclxuZXhwb3J0IHtjcmVhdGVIb21lcGFnZX0iLCJpbXBvcnQgeyBjcmVhdGVIZWFkZXIgfSBmcm9tICcuL2hlYWRlcidcclxuaW1wb3J0IHsgc2V0TmF2QWN0aXZlSXRlbSB9IGZyb20gJy4vbmF2J1xyXG5pbXBvcnQgeyBjcmVhdGVIb21lcGFnZSB9IGZyb20gJy4vaG9tZSdcclxuaW1wb3J0IHsgY3JlYXRlTWVudSB9IGZyb20gJy4vbWVudSdcclxuaW1wb3J0IHsgY3JlYXRlU3RvcnkgfSBmcm9tICcuL3N0b3J5J1xyXG5pbXBvcnQgeyBjcmVhdGVGb290ZXIgfSBmcm9tICcuL2Zvb3RlcidcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpXHJcblxyXG5cclxuZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCl7XHJcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUhlYWRlcigpKVxyXG4gICAgXHJcbiAgICAvLyBzZXQgaG9tZSBhcyBhY3RpdmVcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uYXYtaXRlbScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcblxyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVIb21lcGFnZSgpKVxyXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBhZ2UoZSl7XHJcbiAgICAvLyBkbyBub3RoaW5nIHVubGVzcyB1c2VyIGNsaWNrcyBkaXJlY3RseSBvbiBuYXYgaXRlbVxyXG4gICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtJykpIHJldHVyblxyXG4gICAgLy8gZG8gbm90aGluZyBpZiB1c2VyIGNsaWNrcyBvbiBuYXYgaXRlbSBzaG93aW5nIGN1cnJlbnQgcGFnZVxyXG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVyblxyXG5cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NlY3Rpb24nKS5yZW1vdmUoKVxyXG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9vdGVyJylcclxuICAgIHNldE5hdkFjdGl2ZUl0ZW0oZS50YXJnZXQpXHJcblxyXG4gICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09PSAnTWVudScpe1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZU1lbnUoKSwgZm9vdGVyKVxyXG4gICAgfSBlbHNlIGlmIChlLnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0hvbWUnKXtcclxuICAgICAgICBjb250ZW50Q29udGFpbmVyLmluc2VydEJlZm9yZShjcmVhdGVIb21lcGFnZSgpLCBmb290ZXIpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnRlbnRDb250YWluZXIuaW5zZXJ0QmVmb3JlKGNyZWF0ZVN0b3J5KCksIGZvb3RlcilcclxuICAgIH1cclxufVxyXG5cclxuaW5pdGlhbFBhZ2VMb2FkKClcclxuXHJcbmV4cG9ydCB7IGxvYWRQYWdlIH0iLCJpbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tIFwiLi9tZW51SXRlbXNcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU1lbnUoKXtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnbWVudScpXHJcblxyXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nKVxyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcclxuXHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJylcclxuICAgIGgxLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5JylcclxuICAgIGgxLnRleHRDb250ZW50ID0gJ01lbnUnXHJcbiAgICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChoMSlcclxuXHJcbiAgICBjb25zdCBkZXNjcmlwdGlvblBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIGRlc2NyaXB0aW9uUGFyYS5pbm5lckhUTUwgPSAnT3VyIG1lbnUgaW5jbHVkZXMgYSB3aWRlLXZhcmlldHkgb2YgVmlldG5hbWVzZSBhbmQgQXNpYW4gZGlzaGVzLiBQbGVhc2UgdGFrZSBhIGxvb2sgYW5kIGdpdmUgdXMgYSB2aXNpdCBhdCA8c3BhbiBjbGFzcz1cInBvcG91dC10ZXh0XCI+UGhvIERlbGljaW91czwvc3Bhbj4uJ1xyXG4gICAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25QYXJhKVxyXG5cclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocG9wdWxhdGVNZW51KCkpXHJcblxyXG4gICAgcmV0dXJuIHNlY3Rpb25cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHBvcHVsYXRlTWVudSgpe1xyXG4gICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtY29udGFpbmVyJylcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNhdGVnb3J5IGluIG1lbnVJdGVtcyl7XHJcbiAgICAgICAgY29uc3QgbWVudUNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgICAgIG1lbnVDYXJkLmNsYXNzTGlzdC5hZGQoJ21lbnUtY2FyZCcpXHJcbiAgICAgICAgbWVudUNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51Q2FyZClcclxuXHJcbiAgICAgICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXHJcbiAgICAgICAgaDIudGV4dENvbnRlbnQgPSBjYXRlZ29yeVxyXG4gICAgICAgIGgyLmNsYXNzTGlzdC5hZGQoJ2NhdGVnb3J5JylcclxuICAgICAgICBtZW51Q2FyZC5hcHBlbmRDaGlsZChoMilcclxuXHJcbiAgICAgICAgbWVudUl0ZW1zW2NhdGVnb3J5XS5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51SXRlbUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICAgICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpXHJcbiAgICAgICAgICAgIG1lbnVDYXJkLmFwcGVuZENoaWxkKG1lbnVJdGVtQ29udGFpbmVyKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICBuYW1lLmNsYXNzTGlzdC5hZGQoJ2l0ZW0tbmFtZScpXHJcbiAgICAgICAgICAgIG5hbWUudGV4dENvbnRlbnQgPSBpdGVtLm5hbWVcclxuICAgICAgICAgICAgbWVudUl0ZW1Db250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSlcclxuXHJcbiAgICAgICAgICAgIGlmIChpdGVtLmRlc2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnaXRlbS1kZXNjcmlwdGlvbicpXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIG1lbnVJdGVtQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbWVudUNvbnRhaW5lclxyXG59XHJcbmV4cG9ydCB7IGNyZWF0ZU1lbnUgfSIsImNvbnN0IG1lbnVJdGVtcyA9IHtcclxuICAgICdBcHBldGl6ZXJzJzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0FQUEVUSVpFUiBTQU1QTEVSIC8gS2hhaSBW4buLIMSQ4bq3YyBCaeG7h3QnLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJygyKSBTcHJpbmcgUm9sbHMsICgyKSBFZ2cgUm9sbHMsICgyKSBTaHJpbXAgU2F1c2FnZSBXcmFwLCBhbmQgKDQpIFNocmltcCBXcmFwJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVkVHRVRBUklBTiBTUFJJTkcgUk9MTFMgKDIpIC8gR+G7j2kgQ3Xhu5FuIENoYXknLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1JpY2UgcGFwZXIgZnJlc2hseSB3cmFwcGVkIGFyb3VuZCBUb2Z1LCBpY2ViZXJnIGxldHR1Y2UsIGJhc2lsLCBiZWFuc3Byb3V0cyBhbmQgdmVybWljZWxsaSBzZXJ2ZWQgd2l0aCBob3VzZSBzcGVjaWFsIHBlYW51dCBzYXVjZSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0VEQU1BTUUnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGUklFRCBPUiBTVEVBTUVEIERVTVBMSU5HICg1KScsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQW4gaXJyZXNpc3RpYmxlIGR1bXBsaW5ncyBmaWxsZWQgd2l0aCBncm91bmQgcG9yayBhbmQgdmVnZXRhYmxlcyBzZXJ2ZWQgd2l0aCBzcGVjaWFsIGR1bXBsaW5nIHNhdWNlLidcclxuICAgICAgICB9XHJcbiAgICBdLFxyXG4gICAgJ1BI4bueJzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0tPQkUgQkVFRiBQaOG7nycsXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdGSUxFVCBNSUdOT04gUGjhu58nXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU0hSSU1QIFBITyAvIFBo4bufIFTDtG0nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdQSOG7niBTUEVDSUFMIC8gxJDhurdjIEJp4buHdCcsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQSBoZWFydHkgY29tYmluYXRpb24gb2YgZXllLXJvdW5kIHN0ZWFrLCB3ZWxsLWRvbmUgZmxhbmssIHRyaXBlLCBiZWVmIG1lYXRiYWxscywgd2VsbC1kb25lIGJyaXNrZXQsIGFuZCBzb2Z0IHRlbmRvbi4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdFWUUgUk9VTkQgU1RFQUsgUEhPIC8gUGjhu58gVMOhaSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1ZFR0VUQUJMRSBQSE8gLyBQaOG7nyBSYXUgQ+G6o2knLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJypWZWdldGFibGUgYnJvdGggYXZhaWxhYmxlIHVwb24gcmVxdWVzdCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICBuYW1lOiAnU0VBRk9PRCBQSE8vIFBo4bufIEjhuqNpIFbhu4snLFxyXG4gICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQ29tYmluYXRpb24gb2Ygc2hyaW1wLCBjYWxhbWFyaSwgaW1pLiBjcmFiIG1lYXQgLCBhbmQgZmlzaCBwYXN0ZSBiYWxscy4nIFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnWU9VUiBDUkVBVElPTiAvIFBo4bufIE5oxrAgw50nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ1BpY2sgdXAgdG8gdGhyZWUgdG9wcGluZ3M6IEV5ZSByb3VuZCBzdGVhaywgd2VsbC1kb25lIGJyaXNrZXQsIHdlbGwtZG9uZSBmbGFuaywgc29mdCB0ZW5kb24sIHRyaXBlLCBvciBiZWVmIG1lYXRiYWxscy4nXHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxuICAgICdWRVJNSUNFTExJIG9yIEFOR0VMIEhBSVIgLyBCw7puIC9Cw6FuaCBI4buPaSc6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdWRVJNSUNFTExJIENPTUJJTkFUSU9OJyxcclxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdDb21iaW5hdGlvbiBvZiBTSU1QTFkgUEjhu54gZWdnIHJvbGwsIGdyaWxsZWQgcG9yaywgZ3JpbGxlZCBzaHJpbXAsIHBvcmsgc2F1c2FnZSwgYW5kIHNocmltcCBzYXVzYWdlIHdyYXAuJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR1JJTExFRCBQT1JLIC8gVGjhu4t0IE7GsOG7m25nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR1JJTExFRCBDSElDS0VOIC8gR8OgIE7GsOG7m25nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR1JJTExFRCBCRUVGIC8gQsOyIE7GsOG7m25nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnR1JJTExFRCBTSFJJTVAgLyBUw7RtIE7GsOG7m25nJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnU0FVVMOJRUQgQkVFRiBBTkQgT05JT05TIC8gQsO6biBCw7IgWMOgbydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1lPVVIgQ1JFQVRJT04nLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Nob29zZSB1cCB0byB0aHJlZSBpdGVtczogR3JpbGxlZCBQb3JrLCBHcmlsbGVkIENoaWNrZW4sIEdyaWxsZWQgQmVlZiwgR3JpbGxlZCBTaHJpbXAgLCBDaGFyYnJvaWxlZCBQb3JrIFNhdXNhZ2UsIG9yIFNJTVBMWSBQSOG7niBFZ2cgUm9sbC4nXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdTQVVUw4lFRCBUT0ZVJ1xyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbiAgICAnRHJpbmtzJzpbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAnVklFVE5BTUVTRSBFU1BSRVNTTyAoc2VydmVkIEhvdCBvciBJY2VkKSAvQ8OgIFBow6ogxJBlbi/EkGVuIMSQw6EnXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdWSUVUTkFNRVNFIEVTUFJFU1NPIHdpdGggQ09OREVOU0VEIE1JTEsgQ8OgIFBow6ogU+G7r2EvU+G7r2EgxJDDoSAoc2VydmVkIEhvdCBvciBJY2VkKSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0NPQ09OVVQgSlVJQ0UgLyBOxrDhu5tjIEThu6thIFTGsMahaSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ1NBTFRZIFBMVU0gU09EQSAvIFNvZGEgWMOtIE114buZaSdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogJ0xZQ0hFRSBEUklOSyAvIE7GsOG7m2MgVHLDoWkgVuG6o2knXHJcbiAgICAgICAgfSxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUSEFJIFRFQSAvIFRyw6AgVGjDoWknXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG59XHJcblxyXG5leHBvcnQgeyBtZW51SXRlbXMgfSIsImltcG9ydCB7bG9hZFBhZ2V9IGZyb20gJy4vaW5kZXgnXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOYXYoKXtcclxuICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ25hdicpXHJcbiAgICBjb25zdCBuYXZJdGVtcyA9IFsnSG9tZScsICdNZW51JywgJ091ciBTdG9yeSddXHJcblxyXG4gICAgbmF2SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKVxyXG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ25hdi1pdGVtJylcclxuICAgICAgICBlbC50ZXh0Q29udGVudCA9IGl0ZW1cclxuICAgICAgICBuYXYuYXBwZW5kQ2hpbGQoZWwpXHJcbiAgICB9KVxyXG5cclxuICAgIG5hdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGxvYWRQYWdlKVxyXG4gICAgXHJcbiAgICByZXR1cm4gbmF2XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldE5hdkFjdGl2ZUl0ZW0obmV3QWN0aXZlKXtcclxuICAgIGNvbnN0IG9sZEFjdGl2ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKVxyXG4gICAgb2xkQWN0aXZlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcblxyXG4gICAgbmV3QWN0aXZlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpXHJcbn1cclxuXHJcblxyXG5leHBvcnQgeyBjcmVhdGVOYXYsIHNldE5hdkFjdGl2ZUl0ZW0gfSIsImltcG9ydCBjaGVmIGZyb20gJy4vaW1hZ2VzL2xpemEtcG9vb3ItZHRPdzV3RktIZFEtdW5zcGxhc2guanBnJ1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RvcnkoKXtcclxuICAgIGNvbnN0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWN0aW9uJylcclxuICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnc3RvcnknKVxyXG5cclxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKVxyXG4gICAgaDEudGV4dENvbnRlbnQgPSAnQWJvdXQgUGhvIERlbGljaW91cydcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQoaDEpXHJcblxyXG4gICAgY29uc3QgcGFyYTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmExLmlubmVySFRNTCA9IFwiQXQgPHNwYW4gY2xhc3M9J3BvcG91dC10ZXh0Jz5QaG8gRGVsaWNpb3VzPC9zcGFuPiwgb3VyIHBhc3Npb24gaXMgc2ltcGxlOiB0byBtYWtlIGEgaGVhbHRoeSBWaWV0bmFtZXNlIHBo4bufIG5vb2RsZSBzb3VwIG9mZmVyaW5nIHRoZSBzYW1lIHJvYnVzdCBmbGF2b3JzIGFuZCBhcm9tYXMgb2YgdHJhZGl0aW9uYWwgcGjhu58uIFRoYXQncyB3aHkgd2UndmUgcmV2b2x1dGlvbml6ZWQgdGhlIHdheSBwaOG7nyBpcyBtYWRlOyB1c2luZyB0b3AtZ3JhZGUgbWVhdHMgdG8gY3JlYXRlIGEgaGVhbHRoaWVyIHNvdXAgYnJvdGggdGhhdCdzIGxvd2VyIGluIGNhbG9yaWVzIGFuZCBjaG9sZXN0ZXJvbC4gT3VyIHNpZ25hdHVyZSBicm90aCBpcyBwYWlyZWQgd2l0aCBmcmVzaCBsb2NhbGx5IHNvdXJjZWQgcHJvZHVjZSwgaGlnaCBxdWFsaXR5IGluZ3JlZGllbnRzIGFuZCBzcGljZXMgdG8gcHJvZHVjZSB0aGUgcGVyZmVjdCBib3dsIG9mIHBo4bufLiA8c3BhbiBjbGFzcz0ncG9wb3V0LXRleHQnPlBobyBEZWxpY2lvdXM8L3NwYW4+IGlzIHRoZSBIZWFsdGggQ29uc2Npb3VzIENob2ljZeKEolwiXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmExKVxyXG5cclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBpbWdDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW1nLWNvbnRhaW5lcicpXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcilcclxuXHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKVxyXG4gICAgaW1nLnNyYyA9IGNoZWZcclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpXHJcblxyXG4gICAgY29uc3QgdW5zcGxhc2hDcmVkaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgdW5zcGxhc2hDcmVkaXQuY2xhc3NMaXN0LmFkZCgndW5zcGxhc2gnKVxyXG4gICAgdW5zcGxhc2hDcmVkaXQuaW5uZXJIVE1MID0gJ1Bob3RvIGJ5IDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9AcG9vb3JsaXphP3V0bV9zb3VyY2U9dW5zcGxhc2gmdXRtX21lZGl1bT1yZWZlcnJhbCZ1dG1fY29udGVudD1jcmVkaXRDb3B5VGV4dFwiPkxpemEgUG9vb3I8L2E+IG9uIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS8/dXRtX3NvdXJjZT11bnNwbGFzaCZ1dG1fbWVkaXVtPXJlZmVycmFsJnV0bV9jb250ZW50PWNyZWRpdENvcHlUZXh0XCI+VW5zcGxhc2g8L2E+J1xyXG4gICAgaW1nQ29udGFpbmVyLmFwcGVuZENoaWxkKHVuc3BsYXNoQ3JlZGl0KVxyXG5cclxuXHJcbiAgICBjb25zdCBwYXJhMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKVxyXG4gICAgcGFyYTIuaW5uZXJIVE1MID0gJzxzcGFuIGNsYXNzPVwicG9wb3V0LXRleHRcIj5QaG8gRGVsaWNpb3VzPC9zcGFuPiB3YXMgZm91bmRlZCB3aXRoIGEgc2ltcGxlIGdvYWw7IHRvIGNyYWZ0IGEgaGVhbHRoeSBib3dsIG9mIHBoxqHMiSB1c2luZyBWaWV0bmFtZXNlIGZsYXZvcnMgYW5kIHNwaWNlcy4gRXN0YWJsaXNoZWQgaW4gMTk4MyBpbiBNaW5uZXNvdGEsIDxzcGFuIGNsYXNzPVwicG9wb3V0LXRleHRcIj5QaG8gRGVsaWNpb3VzPC9zcGFuPiBoYXMgcmFwaWRseSBncm93biB0byBiZSB0aGUgbGVhZGVyIGluIHRoZSBWaWV0bmFtZXNlIGZvb2QsIGZhc3QgY2FzdWFsIGluZHVzdHJ5LidcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYTIpXHJcblxyXG4gICAgY29uc3QgcGFyYTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmEzLnRleHRDb250ZW50ID0gXCJBZnRlciB0aGUgZmFsbCBvZiBTYWlnb24gaW4gMTk3NSwgYW4gaW5mbHV4IG9mIFZpZXRuYW1lc2UgcmVmdWdlZXMgYXJyaXZlZCBpbiB0aGUgVW5pdGVkIFN0YXRlcyB3aXRoIGxpdHRsZSB0byB0aGVpciBuYW1lLiBGcm9tIGh1bWJsZSBiZWdpbm5pbmdzIHdpdGggbGVzcyB0aGFuIDQwMHNxIGZ0IG9mIHNwYWNlLCBNci5DaGVmIGhhZCBhIHZpc2lvbiBmb3IgdGhlIGJyYW5kOlwiXHJcbiAgICBzZWN0aW9uLmFwcGVuZENoaWxkKHBhcmEzKVxyXG5cclxuICAgIGNvbnN0IHBhcmE0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpXHJcbiAgICBwYXJhNC50ZXh0Q29udGVudCA9ICfigJxJIHdhbnRlZCB0byBjcmVhdGUgYSB3YXkgZm9yIFZpZXRuYW1lc2UgcmVmdWdlZXMgdG8gYXNzaW1pbGF0ZSBpbnRvIHRoZWlyIG5ldyBlbnZpcm9ubWVudCB3aGlsZSBoYXZpbmcgdGhlIG9wcG9ydHVuaXR5IHRvIGVsZXZhdGUgdGhlaXIgc3RhdHVzIHRvIGJlY29tZSBlbnRyZXByZW5ldXJzIGFuZCBiZWluZyBhIHBhcnQgb2YgdGhlIEFtZXJpY2FuIERyZWFtLuKAnSdcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYTQpXHJcblxyXG4gICAgY29uc3QgcGFyYTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmE1LmlubmVySFRNTCA9ICdJbiAxOTg1IDxzcGFuIGNsYXNzPVwicG9wb3V0LXRleHRcIj5QaG8gRGVsaWNpb3VzPC9zcGFuPiBleHBhbmRlZCBpdHMgYnJhbmQgYnkgb3BlbmluZyBpdHMgZmxhZ3NoaXAgc3RvcmUgaW4gTWlubmVhcG9saXMsIGEgcG9wdWxhciBoYW5nb3V0IHNwb3QgZm9yIHRoZSBWaWV0bmFtZXNlIGNvbW11bml0eSB3aGljaCBzdGlsbCBzdGFuZHMgc3Ryb25nIHRvZGF5LiBTaG9ydGx5IHRoZXJlIGFmdGVyIDxzcGFuIGNsYXNzPVwicG9wb3V0LXRleHRcIj5QaG8gRGVsaWNpb3VzPC9zcGFuPiBwaW9uZWVyZWQgdGhlIGZpcnN0IFZpZXRuYW1lc2UgZnJhbmNoaXNlIGluIHRoZSBVbml0ZWQgU3RhdGVzIGJ5IGV4cGFuZGluZyB0aGUgYnJhbmQgbG9jYWxseSBhbmQgaW50ZXJuYXRpb25hbGx5LidcclxuICAgIHNlY3Rpb24uYXBwZW5kQ2hpbGQocGFyYTUpXHJcblxyXG4gICAgY29uc3QgcGFyYTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJylcclxuICAgIHBhcmE2LmlubmVySFRNTCA9ICdOb3cgd2l0aCBvdmVyIHRocmVlIGRlY2FkZXMgb2YgZXhwZXJpZW5jZSBhbmQgYSBnbG9iYWwgcmVhY2gsIDxzcGFuIGNsYXNzPVwicG9wb3V0LXRleHRcIj5QaG8gRGVsaWNpb3VzPC9zcGFuPiBoYXMgYmVjb21lIGEgaG91c2Vob2xkIG5hbWUgc2VydmluZyBtaWxsaW9ucyBvZiBib3dscyBhbm51YWxseSB3b3JsZHdpZGUuJ1xyXG4gICAgc2VjdGlvbi5hcHBlbmRDaGlsZChwYXJhNilcclxuXHJcbiAgICByZXR1cm4gc2VjdGlvblxyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVTdG9yeSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9