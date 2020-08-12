(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ImageTool"] = factory();
	else
		root["ImageTool"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2!./src/index.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".cdx-attaches--with-file {\\n    display: flex;\\n    padding: 13px 20px;\\n    border: 1px solid #e6e9eb;\\n    border-radius: 3px;\\n    background: #fff;\\n  }\\n\\n    .cdx-attaches--with-file .cdx-attaches__file-info {\\n      flex-grow: 8;\\n      max-width: calc(100% - 80px);\\n    }\\n\\n    .cdx-attaches--with-file .cdx-attaches__download-button {\\n      display: flex;\\n      align-items: center;\\n    }\\n\\n    .cdx-attaches--with-file .cdx-attaches__download-button svg {\\n        fill: #7b7e89;\\n      }\\n\\n    .cdx-attaches--with-file .cdx-attaches__file-icon {\\n      margin-right: 20px;\\n      position: relative;\\n    }\\n\\n    .cdx-attaches--with-file .cdx-attaches__file-icon::before {\\n        position: absolute;\\n        bottom: 7px;\\n        left: 8.5px;\\n        font-size: 8px;\\n        font-weight: 900;\\n        text-transform: uppercase;\\n        background: #fff;\\n        line-height: 150%;\\n        content: attr(data-extension);\\n      }\\n\\n    .cdx-attaches--with-file .cdx-attaches__file-icon svg {\\n        fill: currentColor;\\n      }\\n\\n    .cdx-attaches--with-file .cdx-attaches__size {\\n      color: #7b7e89;\\n    }\\n\\n    .cdx-attaches--with-file .cdx-attaches__size::after {\\n        content: attr(data-size);\\n        margin-left: 0.2em;\\n      }\\n\\n    .cdx-attaches--with-file .cdx-attaches__title {\\n      white-space: nowrap;\\n      text-overflow: ellipsis;\\n      overflow: hidden;\\n      outline: none;\\n      max-width: 90%;\\n    }\\n  .cdx-attaches--loading .cdx-attaches__title,\\n    .cdx-attaches--loading .cdx-attaches__file-icon,\\n    .cdx-attaches--loading .cdx-attaches__size,\\n    .cdx-attaches--loading .cdx-attaches__download-button,\\n    .cdx-attaches--loading .cdx-attaches__button {\\n      opacity: 0;\\n      font-size: 0;\\n    }\\n  .cdx-attaches__button {\\n    display: flex;\\n    align-items: center;\\n    justify-content: center;\\n  }\\n  .cdx-attaches__button svg {\\n      height: 14px;\\n      margin-top: 0;\\n      margin-right: 8px;\\n    }\\n  .cdx-attaches__button:hover {\\n      color: #393f52;\\n    }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack://ImageTool/./src/index.css?./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??ref--5-2");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://ImageTool/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ImageTool/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/postcss-loader/src??ref--5-2!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src/index.js?!./src/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://ImageTool/./src/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AttachesTool; });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./src/index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _uploader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uploader */ \"./src/uploader.js\");\n/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./svg/toolbox.svg */ \"./src/svg/toolbox.svg\");\n/* harmony import */ var _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _svg_standard_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg/standard.svg */ \"./src/svg/standard.svg\");\n/* harmony import */ var _svg_standard_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_svg_standard_svg__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _svg_custom_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./svg/custom.svg */ \"./src/svg/custom.svg\");\n/* harmony import */ var _svg_custom_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_svg_custom_svg__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _svg_arrow_download_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./svg/arrow-download.svg */ \"./src/svg/arrow-download.svg\");\n/* harmony import */ var _svg_arrow_download_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_svg_arrow_download_svg__WEBPACK_IMPORTED_MODULE_5__);\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\n\n\n\nvar LOADER_TIMEOUT = 500;\n/**\n * @typedef {object} AttachesToolData\n * @description Attaches Tool's output data format\n * @property {AttachesFileData} file - object containing information about the file\n * @property {string} title - file's title\n */\n\n/**\n * @typedef {object} AttachesFileData\n * @description Attaches Tool's file format\n * @property {string} [url] - file's upload url\n * @property {string} [size] - file's size\n * @property {string} [extension] - file's extension\n * @property {string} [name] - file's name\n */\n\n/**\n * @typedef {object} FileData\n * @description Attaches Tool's response from backend\n * @property {string} url - file's url\n * @property {string} name - file's name with extension\n * @property {string} extension - file's extension\n */\n\n/**\n * @typedef {object} UploadResponseFormat\n * @description This format expected from backend on file upload\n * @property {number} success  - 1 for successful uploading, 0 for failure\n * @property {FileData} file - backend response with uploaded file data.\n */\n\n/**\n * @typedef {object} AttachesToolConfig\n * @description Config supported by Tool\n * @property {string} endpoint - file upload url\n * @property {string} field - field name for uploaded file\n * @property {string} types - available mime-types\n * @property {string} placeholder\n * @property {string} errorMessage\n */\n\n/**\n * @class AttachesTool\n * @classdesc AttachesTool for Editor.js 2.0\n *\n * @property {API} api - Editor.js API\n * @property {AttachesToolData} data\n * @property {AttachesToolConfig} config\n */\n\nvar AttachesTool = /*#__PURE__*/function () {\n  /**\n   * @param {AttachesToolData} data\n   * @param {Object} config\n   * @param {API} api\n   */\n  function AttachesTool(_ref) {\n    var _this = this;\n\n    var data = _ref.data,\n        config = _ref.config,\n        api = _ref.api;\n\n    _classCallCheck(this, AttachesTool);\n\n    this.api = api;\n    this.nodes = {\n      wrapper: null,\n      button: null,\n      title: null\n    };\n    this._data = {\n      file: {},\n      title: ''\n    };\n    this.config = {\n      endpoint: config.endpoint || '',\n      field: config.field || 'file',\n      types: config.types || '*',\n      buttonText: config.buttonText || 'Select file to upload',\n      errorMessage: config.errorMessage || 'File upload failed'\n    };\n    this.data = data;\n    /**\n     * Module for files uploading\n     */\n\n    this.uploader = new _uploader__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({\n      config: this.config,\n      onUpload: function onUpload(response) {\n        return _this.onUpload(response);\n      },\n      onError: function onError(error) {\n        return _this.uploadingFailed(error);\n      }\n    });\n    this.enableFileUpload = this.enableFileUpload.bind(this);\n  }\n  /**\n   * Get Tool toolbox settings\n   * icon - Tool icon's SVG\n   * title - title to show in toolbox\n   */\n\n\n  _createClass(AttachesTool, [{\n    key: \"save\",\n\n    /**\n     * Return Block data\n     * @param {HTMLElement} toolsContent\n     * @return {AttachesToolData}\n     */\n    value: function save(toolsContent) {\n      /**\n       * If file was uploaded\n       */\n      if (this.pluginHasData()) {\n        var title = toolsContent.querySelector(\".\".concat(this.CSS.title)).innerHTML;\n        Object.assign(this.data, {\n          title: title\n        });\n      }\n\n      return this.data;\n    }\n    /**\n     * Renders Block content\n     * @return {HTMLDivElement}\n     */\n\n  }, {\n    key: \"render\",\n    value: function render() {\n      var holder = this.make('div', this.CSS.baseClass);\n      this.nodes.wrapper = this.make('div', this.CSS.wrapper);\n\n      if (this.pluginHasData()) {\n        this.showFileData();\n      } else {\n        this.prepareUploadButton();\n      }\n\n      holder.appendChild(this.nodes.wrapper);\n      return holder;\n    }\n    /**\n     * Prepares button for file uploading\n     */\n\n  }, {\n    key: \"prepareUploadButton\",\n    value: function prepareUploadButton() {\n      this.nodes.button = this.make('div', [this.CSS.apiButton, this.CSS.button]);\n      this.nodes.button.innerHTML = \"\".concat(_svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_2___default.a, \" \").concat(this.config.buttonText);\n      this.nodes.button.addEventListener('click', this.enableFileUpload);\n      this.nodes.wrapper.appendChild(this.nodes.button);\n    }\n    /**\n     * Fires after clicks on the Toolbox AttachesTool Icon\n     * Initiates click on the Select File button\n     * @public\n     */\n\n  }, {\n    key: \"appendCallback\",\n    value: function appendCallback() {\n      this.nodes.button.click();\n    }\n    /**\n     * Checks if any of Tool's fields have data\n     * @return {boolean}\n     */\n\n  }, {\n    key: \"pluginHasData\",\n    value: function pluginHasData() {\n      return this.data.title !== '' || Object.values(this.data.file).some(function (item) {\n        return item !== undefined;\n      });\n    }\n    /**\n     * Allow to upload files on button click\n     */\n\n  }, {\n    key: \"enableFileUpload\",\n    value: function enableFileUpload() {\n      var _this2 = this;\n\n      this.uploader.uploadSelectedFile({\n        onPreview: function onPreview() {\n          _this2.nodes.wrapper.classList.add(_this2.CSS.wrapperLoading, _this2.CSS.loader);\n        }\n      });\n    }\n    /**\n     * File uploading callback\n     * @param {UploadResponseFormat} response\n     */\n\n  }, {\n    key: \"onUpload\",\n    value: function onUpload(response) {\n      var body = response.body;\n\n      if (body.success && body.file) {\n        var _body$file = body.file,\n            url = _body$file.url,\n            name = _body$file.name,\n            size = _body$file.size;\n        this.data = {\n          file: {\n            url: url,\n            extension: name.split('.').pop(),\n            name: name,\n            size: size\n          },\n          title: name\n        };\n        this.nodes.button.remove();\n        this.showFileData();\n        this.moveCaretToEnd(this.nodes.title);\n        this.nodes.title.focus();\n        this.removeLoader();\n      } else {\n        this.uploadingFailed(this.config.errorMessage);\n      }\n    }\n    /**\n     * Handles uploaded file's extension and appends corresponding icon\n     */\n\n  }, {\n    key: \"appendFileIcon\",\n    value: function appendFileIcon() {\n      var extension = this.data.file.extension || '';\n      var extensionColor = this.EXTENSIONS[extension];\n      var fileIcon = this.make('div', this.CSS.fileIcon, {\n        innerHTML: extensionColor ? _svg_custom_svg__WEBPACK_IMPORTED_MODULE_4___default.a : _svg_standard_svg__WEBPACK_IMPORTED_MODULE_3___default.a\n      });\n\n      if (extensionColor) {\n        fileIcon.style.color = extensionColor;\n        fileIcon.setAttribute('data-extension', extension);\n      }\n\n      this.nodes.wrapper.appendChild(fileIcon);\n    }\n    /**\n     * Removes tool's loader\n     */\n\n  }, {\n    key: \"removeLoader\",\n    value: function removeLoader() {\n      var _this3 = this;\n\n      setTimeout(function () {\n        return _this3.nodes.wrapper.classList.remove(_this3.CSS.wrapperLoading, _this3.CSS.loader);\n      }, LOADER_TIMEOUT);\n    }\n    /**\n     * If upload is successful, show info about the file\n     */\n\n  }, {\n    key: \"showFileData\",\n    value: function showFileData() {\n      this.nodes.wrapper.classList.add(this.CSS.wrapperWithFile);\n      var _this$data = this.data,\n          _this$data$file = _this$data.file,\n          size = _this$data$file.size,\n          url = _this$data$file.url,\n          title = _this$data.title;\n      this.appendFileIcon();\n      var fileInfo = this.make('div', this.CSS.fileInfo);\n\n      if (title) {\n        this.nodes.title = this.make('div', this.CSS.title, {\n          contentEditable: true\n        });\n        this.nodes.title.textContent = title;\n        fileInfo.appendChild(this.nodes.title);\n      }\n\n      if (size) {\n        var sizePrefix;\n        var formattedSize;\n        var fileSize = this.make('div', this.CSS.size);\n\n        if (Math.log10(+size) >= 6) {\n          sizePrefix = 'MiB';\n          formattedSize = size / Math.pow(2, 20);\n        } else {\n          sizePrefix = 'KiB';\n          formattedSize = size / Math.pow(2, 10);\n        }\n\n        fileSize.textContent = formattedSize.toFixed(1);\n        fileSize.setAttribute('data-size', sizePrefix);\n        fileInfo.appendChild(fileSize);\n      }\n\n      this.nodes.wrapper.appendChild(fileInfo);\n      var downloadIcon = this.make('a', this.CSS.downloadButton, {\n        innerHTML: _svg_arrow_download_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n        href: url,\n        target: '_blank',\n        rel: 'nofollow noindex noreferrer'\n      });\n      this.nodes.wrapper.appendChild(downloadIcon);\n    }\n    /**\n     * If file uploading failed, remove loader and show notification\n     * @param {string} errorMessage -  error message\n     */\n\n  }, {\n    key: \"uploadingFailed\",\n    value: function uploadingFailed(errorMessage) {\n      this.api.notifier.show({\n        message: errorMessage,\n        style: 'error'\n      });\n      this.removeLoader();\n    }\n    /**\n     * Return Attaches Tool's data\n     * @return {AttachesToolData}\n     */\n\n  }, {\n    key: \"moveCaretToEnd\",\n\n    /**\n     * Moves caret to the end of contentEditable element\n     * @param {HTMLElement} element - contentEditable element\n     */\n    value: function moveCaretToEnd(element) {\n      var range = document.createRange();\n      var selection = window.getSelection();\n      range.selectNodeContents(element);\n      range.collapse(false);\n      selection.removeAllRanges();\n      selection.addRange(range);\n    }\n    /**\n     * Helper method for elements creation\n     * @param tagName\n     * @param classNames\n     * @param attributes\n     * @return {HTMLElement}\n     */\n\n  }, {\n    key: \"make\",\n    value: function make(tagName) {\n      var classNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;\n      var attributes = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n      var el = document.createElement(tagName);\n\n      if (Array.isArray(classNames)) {\n        var _el$classList;\n\n        (_el$classList = el.classList).add.apply(_el$classList, _toConsumableArray(classNames));\n      } else if (classNames) {\n        el.classList.add(classNames);\n      }\n\n      for (var attrName in attributes) {\n        el[attrName] = attributes[attrName];\n      }\n\n      return el;\n    }\n  }, {\n    key: \"CSS\",\n\n    /**\n     * Tool's CSS classes\n     */\n    get: function get() {\n      return {\n        baseClass: this.api.styles.block,\n        apiButton: this.api.styles.button,\n        loader: this.api.styles.loader,\n\n        /**\n         * Tool's classes\n         */\n        wrapper: 'cdx-attaches',\n        wrapperWithFile: 'cdx-attaches--with-file',\n        wrapperLoading: 'cdx-attaches--loading',\n        button: 'cdx-attaches__button',\n        title: 'cdx-attaches__title',\n        size: 'cdx-attaches__size',\n        downloadButton: 'cdx-attaches__download-button',\n        fileInfo: 'cdx-attaches__file-info',\n        fileIcon: 'cdx-attaches__file-icon'\n      };\n    }\n    /**\n     * Possible files' extension colors\n     */\n\n  }, {\n    key: \"EXTENSIONS\",\n    get: function get() {\n      return {\n        doc: '#3e74da',\n        docx: '#3e74da',\n        odt: '#3e74da',\n        pdf: '#d47373',\n        rtf: '#656ecd',\n        tex: '#5a5a5b',\n        txt: '#5a5a5b',\n        pptx: '#e07066',\n        ppt: '#e07066',\n        mp3: '#eab456',\n        mp4: '#f676a6',\n        xls: '#3f9e64',\n        html: '#2988f0',\n        htm: '#2988f0',\n        png: '#f676a6',\n        jpg: '#f67676',\n        jpeg: '#f67676',\n        gif: '#f6af76',\n        zip: '#4f566f',\n        rar: '#4f566f',\n        exe: '#e26f6f',\n        svg: '#bf5252',\n        key: '#e07066',\n        sketch: '#df821c',\n        ai: '#df821c',\n        psd: '#388ae5',\n        dmg: '#e26f6f',\n        json: '#2988f0',\n        csv: '#3f9e64'\n      };\n    }\n  }, {\n    key: \"data\",\n    get: function get() {\n      return this._data;\n    }\n    /**\n     * Stores all Tool's data\n     * @param {AttachesToolData} data\n     */\n    ,\n    set: function set(_ref2) {\n      var file = _ref2.file,\n          title = _ref2.title;\n      this._data = Object.assign({}, {\n        file: {\n          url: file && file.url || this._data.file.url,\n          name: file && file.name || this._data.file.name,\n          extension: file && file.extension || this._data.file.extension,\n          size: file && file.size || this._data.file.size\n        },\n        title: title || this._data.title\n      });\n    }\n  }], [{\n    key: \"toolbox\",\n    get: function get() {\n      return {\n        icon: _svg_toolbox_svg__WEBPACK_IMPORTED_MODULE_2___default.a,\n        title: 'Attaches'\n      };\n    }\n  }]);\n\n  return AttachesTool;\n}();\n\n\n\n//# sourceURL=webpack://ImageTool/./src/index.js?");

/***/ }),

/***/ "./src/svg/arrow-download.svg":
/*!************************************!*\
  !*** ./src/svg/arrow-download.svg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"17pt\\\" height=\\\"17pt\\\" viewBox=\\\"0 0 17 17\\\"><path d=\\\"M9.457 8.945V2.848A.959.959 0 0 0 8.5 1.89a.959.959 0 0 0-.957.957v6.097L4.488 5.891a.952.952 0 0 0-1.351 0 .952.952 0 0 0 0 1.351l4.687 4.688a.955.955 0 0 0 1.352 0l4.687-4.688a.952.952 0 0 0 0-1.351.952.952 0 0 0-1.351 0zM3.59 14.937h9.82a.953.953 0 0 0 .953-.957.952.952 0 0 0-.953-.953H3.59a.952.952 0 0 0-.953.953c0 .532.425.957.953.957zm0 0\\\" fill-rule=\\\"evenodd\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageTool/./src/svg/arrow-download.svg?");

/***/ }),

/***/ "./src/svg/custom.svg":
/*!****************************!*\
  !*** ./src/svg/custom.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"32\\\" height=\\\"40\\\"><path d=\\\"M17 0l15 14V3v34a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h20-6zm0 2H3a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14H17V2zm2 10h7.926L19 4.602V12z\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageTool/./src/svg/custom.svg?");

/***/ }),

/***/ "./src/svg/standard.svg":
/*!******************************!*\
  !*** ./src/svg/standard.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg xmlns=\\\"http://www.w3.org/2000/svg\\\" width=\\\"32\\\" height=\\\"40\\\"><g fill=\\\"#A8ACB8\\\" fill-rule=\\\"evenodd\\\"><path fill-rule=\\\"nonzero\\\" d=\\\"M17 0l15 14V3v34a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3h20-6zm0 2H3a1 1 0 0 0-1 1v34a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1V14H17V2zm2 10h7.926L19 4.602V12z\\\"></path><path d=\\\"M7 22h18v2H7zm0 4h18v2H7zm0 4h18v2H7z\\\"></path></g></svg>\"\n\n//# sourceURL=webpack://ImageTool/./src/svg/standard.svg?");

/***/ }),

/***/ "./src/svg/toolbox.svg":
/*!*****************************!*\
  !*** ./src/svg/toolbox.svg ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<svg width=\\\"12\\\" height=\\\"14\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\"><path d=\\\"M4.109 2.08H2.942a.862.862 0 0 0-.862.862v8.116c0 .476.386.862.862.862h5.529a.862.862 0 0 0 .862-.862V7.695H4.11V2.08zm1.905.497v3.29h3.312l-3.312-3.29zM2.942 0h2.74c.326.02.566.076.719.165.153.09.484.413.992.973l3.21 3.346c.347.413.557.683.631.811.111.193.179.446.179.579v5.184A2.942 2.942 0 0 1 8.471 14H2.942A2.942 2.942 0 0 1 0 11.058V2.942A2.942 2.942 0 0 1 2.942 0z\\\" fill-rule=\\\"nonzero\\\"></path></svg>\"\n\n//# sourceURL=webpack://ImageTool/./src/svg/toolbox.svg?");

/***/ }),

/***/ "./src/uploader.js":
/*!*************************!*\
  !*** ./src/uploader.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Uploader; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n/**\n * Module for file uploading.\n */\nvar Uploader = /*#__PURE__*/function () {\n  /**\n   * @param {Object} config\n   * @param {function} onUpload - callback for successful file upload\n   * @param {function} onError - callback for uploading errors\n   */\n  function Uploader(_ref) {\n    var config = _ref.config,\n        onUpload = _ref.onUpload,\n        onError = _ref.onError;\n\n    _classCallCheck(this, Uploader);\n\n    this.config = config;\n    this.onUpload = onUpload;\n    this.onError = onError;\n  }\n  /**\n   * Handle clicks on the upload file button\n   * @fires ajax.transport()\n   * @param {function} onPreview - callback fired when preview is ready\n   */\n\n\n  _createClass(Uploader, [{\n    key: \"uploadSelectedFile\",\n    value: function uploadSelectedFile(_ref2) {\n      var _this = this;\n\n      var onPreview = _ref2.onPreview;\n      var reader = new FileReader();\n\n      reader.onload = function () {\n        onPreview();\n      };\n\n      var upload = null;\n\n      if (this.config.uploader && typeof this.config.uploader === 'function') {\n        upload = this.config.uploader.uploader();\n\n        if (!isPromise(upload)) {\n          console.warn('Custom uploader method uploadByFile should return a Promise');\n        }\n      }\n\n      upload.then(function (response) {\n        _this.onUpload(response);\n      })[\"catch\"](function (error) {\n        var message = error && error.message ? error.message : _this.config.errorMessage;\n\n        _this.onError(message);\n      }); // ajax.transport({\n      //   url: this.config.endpoint,\n      //   accept: this.config.types,\n      //   beforeSend: () => onPreview(),\n      //   fieldName: this.config.field\n      // }).then((response) => {\n      //   this.onUpload(response);\n      // }).catch((error) => {\n      //   const message = (error && error.message) ? error.message : this.config.errorMessage;\n      //   this.onError(message);\n      // });\n    }\n  }]);\n\n  return Uploader;\n}();\n/**\n * Check if passed object is a Promise\n *\n * @param  {*}  object - object to check\n * @returns {boolean}\n */\n\n\n\n\nfunction isPromise(object) {\n  return Promise.resolve(object) === object;\n}\n\n//# sourceURL=webpack://ImageTool/./src/uploader.js?");

/***/ })

/******/ })["default"];
});