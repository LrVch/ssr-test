/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./build/asset-manifest.json":
/*!***********************************!*\
  !*** ./build/asset-manifest.json ***!
  \***********************************/
/*! exports provided: files, default */
/***/ (function(module) {

eval("module.exports = {\"files\":{\"main.css\":\"/static/css/main.935b1b1c.chunk.css\",\"main.js\":\"/static/js/main.a54b3db5.chunk.js\",\"main.js.map\":\"/static/js/main.a54b3db5.chunk.js.map\",\"myNamedChunk.js\":\"/static/js/myNamedChunk.1e3823b3.chunk.js\",\"myNamedChunk.js.map\":\"/static/js/myNamedChunk.1e3823b3.chunk.js.map\",\"pageAnother.js\":\"/static/js/pageAnother.a4cbf114.chunk.js\",\"pageAnother.js.map\":\"/static/js/pageAnother.a4cbf114.chunk.js.map\",\"pageDefault.js\":\"/static/js/pageDefault.507eda95.chunk.js\",\"pageDefault.js.map\":\"/static/js/pageDefault.507eda95.chunk.js.map\",\"runtime~main.js\":\"/static/js/runtime~main.ed610e99.js\",\"runtime~main.js.map\":\"/static/js/runtime~main.ed610e99.js.map\",\"static/js/5.01c62df4.chunk.js\":\"/static/js/5.01c62df4.chunk.js\",\"static/js/5.01c62df4.chunk.js.map\":\"/static/js/5.01c62df4.chunk.js.map\",\"index.html\":\"/index.html\",\"precache-manifest.d1337e377310b19b642b794579de3103.js\":\"/precache-manifest.d1337e377310b19b642b794579de3103.js\",\"service-worker.js\":\"/service-worker.js\",\"static/css/main.935b1b1c.chunk.css.map\":\"/static/css/main.935b1b1c.chunk.css.map\",\"static/media/logo.svg\":\"/static/media/logo.5d5d9eef.svg\"}};\n\n//# sourceURL=webpack:///./build/asset-manifest.json?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\n\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \"{\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      // eslint-disable-next-line prefer-destructuring\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = modules[_i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = \"(\".concat(item[2], \") and (\").concat(mediaQuery, \")\");\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./server/controllers/index.js":
/*!*************************************!*\
  !*** ./server/controllers/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _middleware_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../middleware/renderer */ \"./server/middleware/renderer.js\");\n/* harmony import */ var _src_store_configureStore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/store/configureStore */ \"./src/store/configureStore.js\");\n/* harmony import */ var _src_store_appReducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../src/store/appReducer */ \"./src/store/appReducer.js\");\n\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst actionIndex = (req, res, next) => {\n  const store = Object(_src_store_configureStore__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  store.dispatch(Object(_src_store_appReducer__WEBPACK_IMPORTED_MODULE_3__[\"setAsyncMessage\"])(\"Hi, I'm from server!\")).then(() => {\n    Object(_middleware_renderer__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(store)(req, res, next);\n  });\n}; // root (/) should always serve our server rendered page\n\n\nrouter.use('^/$', actionIndex); // other static resources should just be served as they are\n\nrouter.use(express__WEBPACK_IMPORTED_MODULE_0___default.a.static(path.resolve(__dirname, '..', '..', 'build'), {\n  maxAge: '30d'\n})); // any other route should be handled by react-router, so serve the index page\n\nrouter.use('*', actionIndex);\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n/* WEBPACK VAR INJECTION */}.call(this, \"server\\\\controllers\"))\n\n//# sourceURL=webpack:///./server/controllers/index.js?");

/***/ }),

/***/ "./server/index.js":
/*!*************************!*\
  !*** ./server/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _controllers_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controllers/index */ \"./server/controllers/index.js\");\n\n\n\nconst PORT = 3004; // const { REACT_APP_SERVER_RENDER, NODE_ENV } = process.env\n// console.log(NODE_ENV)\n// console.log(REACT_APP_SERVER_RENDER)\n// initialize the application and create the routes\n\nconst app = express__WEBPACK_IMPORTED_MODULE_1___default()();\napp.use(_controllers_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"]); // start the app\n\nreact_loadable__WEBPACK_IMPORTED_MODULE_0___default.a.preloadAll().then(() => {\n  app.listen(PORT, error => {\n    if (error) {\n      return console.log('something bad happened', error);\n    }\n\n    console.log(\"listening on \" + PORT + \"...\");\n  });\n});\n\n//# sourceURL=webpack:///./server/index.js?");

/***/ }),

/***/ "./server/middleware/renderer.js":
/*!***************************************!*\
  !*** ./server/middleware/renderer.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router */ \"react-router\");\n/* harmony import */ var react_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-helmet */ \"react-helmet\");\n/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/App */ \"./src/App.js\");\n/* harmony import */ var _build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../build/asset-manifest.json */ \"./build/asset-manifest.json\");\nvar _build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./../../build/asset-manifest.json */ \"./build/asset-manifest.json\", 1);\n\n\n\n\n\n // import { getBundles } from 'react-loadable/webpack';\n// import stats from './../../build/react-loadable.json';\n// import our main App component\n\n // import the manifest generated with the create-react-app build\n\n // function to extract js assets from the manifest\n\nconst extractAssets = (assets, chunks) => Object.keys(assets).filter(asset => chunks.indexOf(asset.replace('.js', '')) > -1).map(k => assets[k]);\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (store => (req, res, next) => {\n  // get the html file created with the create-react-app build\n  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');\n  fs.readFile(filePath, 'utf8', (err, htmlData) => {\n    if (err) {\n      console.error('err', err);\n      return res.status(404).end();\n    }\n\n    const modules = [];\n    const routerContext = {}; // render the app as a string\n\n    const html = react_dom_server__WEBPACK_IMPORTED_MODULE_1___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_loadable__WEBPACK_IMPORTED_MODULE_2___default.a.Capture, {\n      report: m => modules.push(m)\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__[\"Provider\"], {\n      store: store\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router__WEBPACK_IMPORTED_MODULE_4__[\"StaticRouter\"], {\n      location: req.baseUrl,\n      context: routerContext\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src_App__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null))))); // console.log(modules);\n    // console.log(manifest)\n    // get the stringified state\n\n    const reduxState = JSON.stringify(store.getState()); // let bundles = getBundles(stats, modules);\n    // console.log(bundles);\n    // map required assets to script tags\n\n    const extraChunks = extractAssets(_build_asset_manifest_json__WEBPACK_IMPORTED_MODULE_7__.files, modules).map(c => \"<script type=\\\"text/javascript\\\" src=\\\"\".concat(c, \"\\\"></script>\")); // const extraChunks = bundles.map(bundle => {\n    //     return `<script src=\"/dist/${bundle.file}\"></script>`\n    // }).join('\\n')\n    // console.log(extraChunks)\n    // get HTML headers\n\n    const helmet = react_helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"].renderStatic(); // now inject the rendered app into our html and send it to the client\n\n    return res.send(htmlData // write the React app\n    .replace('<div id=\"root\"></div>', \"<div id=\\\"root\\\">\".concat(html, \"</div>\")) // write the string version of our state\n    .replace('__REDUX_STATE__={}', \"__REDUX_STATE__=\".concat(reduxState)) // append the extra js assets\n    .replace('</body>', extraChunks + '</body>') // write the HTML header tags\n    .replace('<title></title>', helmet.title.toString() + helmet.meta.toString()));\n  });\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"server\\\\middleware\"))\n\n//# sourceURL=webpack:///./server/middleware/renderer.js?");

/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \".App {\\n  text-align: center;\\n}\\n\\n.App-logo {\\n  animation: App-logo-spin infinite 20s linear;\\n  height: 80px;\\n}\\n\\n.App-header {\\n  background-color: #222;\\n  height: 150px;\\n  padding: 20px;\\n  color: white;\\n}\\n\\n.App-title {\\n  font-size: 1.5em;\\n}\\n\\n.App-intro {\\n  font-size: large;\\n}\\n\\n@keyframes App-logo-spin {\\n  from { transform: rotate(0deg); }\\n  to { transform: rotate(360deg); }\\n}\\n\", \"\"]);\n\n\n//# sourceURL=webpack:///./src/App.css?");

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loadable */ \"react-loadable\");\n/* harmony import */ var react_loadable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_loadable__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_router_dom__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _store_appReducer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./store/appReducer */ \"./src/store/appReducer.js\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo.svg */ \"./src/logo.svg\");\n/* harmony import */ var _logo_svg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_logo_svg__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_6__);\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }\n\n\n\n\n\n\n\n\nconst AsyncComponent = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./components/SomeComponent */ \"./src/components/SomeComponent.js\"))),\n  modules: ['./components/SomeComponent'],\n  webpack: () => [/*require.resolve*/(/*! ./components/SomeComponent */ \"./src/components/SomeComponent.js\")],\n  loading: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading...\"),\n  modules: ['myNamedChunk']\n});\nconst AsyncPageDefault = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./components/PageDefault */ \"./src/components/PageDefault.js\"))),\n  modules: ['./components/PageDefault'],\n  webpack: () => [/*require.resolve*/(/*! ./components/PageDefault */ \"./src/components/PageDefault.js\")],\n  loading: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading page...\"),\n  modules: ['pageDefault']\n});\nconst AsyncPageAnother = react_loadable__WEBPACK_IMPORTED_MODULE_1___default()({\n  loader: () => Promise.resolve().then(() => _interopRequireWildcard(__webpack_require__(/*! ./components/PageAnother */ \"./src/components/PageAnother.js\"))),\n  modules: ['./components/PageAnother'],\n  webpack: () => [/*require.resolve*/(/*! ./components/PageAnother */ \"./src/components/PageAnother.js\")],\n  loading: () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"loading another page...\"),\n  modules: ['pageAnother']\n});\n\nclass App extends react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"] {\n  componentDidMount() {\n    if (!this.props.message) {\n      this.props.updateMessage(\"Hi, I'm from client!\");\n    }\n  }\n\n  render() {\n    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"App\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"header\", {\n      className: \"App-header\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n      src: _logo_svg__WEBPACK_IMPORTED_MODULE_5___default.a,\n      className: \"App-logo\",\n      alt: \"logo\"\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h1\", {\n      className: \"App-title\"\n    }, \"Welcome to React\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n      className: \"App-intro\"\n    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Part 1: Async component\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Part 1: Async component\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AsyncComponent, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Part 2: Redux store\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Redux: \", this.props.message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"hr\", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h2\", null, \"Part 3: React router\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"nav\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n      to: \"/\",\n      exact: true,\n      activeClassName: \"active\"\n    }, \"Home\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"NavLink\"], {\n      to: \"/another\",\n      activeClassName: \"active\"\n    }, \"Another page\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Switch\"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n      path: \"/\",\n      exact: true,\n      component: AsyncPageDefault\n    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__[\"Route\"], {\n      path: \"/another\",\n      component: AsyncPageAnother\n    }))));\n  }\n\n}\n\nconst mapStateToProps = state => ({\n  message: state.app.message\n});\n\nconst mapStateToDispatch = dispatch => ({\n  updateMessage: messageText => dispatch(Object(_store_appReducer__WEBPACK_IMPORTED_MODULE_4__[\"setMessage\"])(messageText))\n});\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__[\"connect\"])(mapStateToProps, mapStateToDispatch)(App));\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/components/PageAnother.js":
/*!***************************************!*\
  !*** ./src/components/PageAnother.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is for another page.\"));\n\n//# sourceURL=webpack:///./src/components/PageAnother.js?");

/***/ }),

/***/ "./src/components/PageDefault.js":
/*!***************************************!*\
  !*** ./src/components/PageDefault.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, \"This is for the main page.\"));\n\n//# sourceURL=webpack:///./src/components/PageDefault.js?");

/***/ }),

/***/ "./src/components/SomeComponent.js":
/*!*****************************************!*\
  !*** ./src/components/SomeComponent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (() => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"Hi, I'm async.\"));\n\n//# sourceURL=webpack:///./src/components/SomeComponent.js?");

/***/ }),

/***/ "./src/logo.svg":
/*!**********************!*\
  !*** ./src/logo.svg ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/media/logo.5d5d9eef.svg\";\n\n//# sourceURL=webpack:///./src/logo.svg?");

/***/ }),

/***/ "./src/store/appReducer.js":
/*!*********************************!*\
  !*** ./src/store/appReducer.js ***!
  \*********************************/
/*! exports provided: appReducer, setMessage, setAsyncMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appReducer\", function() { return appReducer; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMessage\", function() { return setMessage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setAsyncMessage\", function() { return setAsyncMessage; });\nconst initialState = {\n  message: null\n};\nconst appReducer = (state = initialState, action) => {\n  switch (action.type) {\n    case 'SET_MESSAGE':\n      return { ...state,\n        message: action.message\n      };\n\n    default:\n      return state;\n  }\n};\nconst setMessage = message => ({\n  type: 'SET_MESSAGE',\n  message\n});\nconst setAsyncMessage = messageText => dispatch => new Promise((resolve, reject) => {\n  setTimeout(() => resolve(), 2000);\n}).then(() => dispatch(setMessage(messageText)));\n\n//# sourceURL=webpack:///./src/store/appReducer.js?");

/***/ }),

/***/ "./src/store/configureStore.js":
/*!*************************************!*\
  !*** ./src/store/configureStore.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return configureStore; });\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _appReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./appReducer */ \"./src/store/appReducer.js\");\n\n\n // if you're also using redux-thunk, add it as a middleware\n\nconst createStoreWithMiddleware = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"compose\"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1___default.a))(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"]);\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n  app: _appReducer__WEBPACK_IMPORTED_MODULE_2__[\"appReducer\"]\n});\nfunction configureStore(initialState = {}) {\n  return createStoreWithMiddleware(rootReducer, initialState);\n}\n;\n\n//# sourceURL=webpack:///./src/store/configureStore.js?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-helmet":
/*!*******************************!*\
  !*** external "react-helmet" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-helmet\");\n\n//# sourceURL=webpack:///external_%22react-helmet%22?");

/***/ }),

/***/ "react-loadable":
/*!*********************************!*\
  !*** external "react-loadable" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-loadable\");\n\n//# sourceURL=webpack:///external_%22react-loadable%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ })

/******/ });