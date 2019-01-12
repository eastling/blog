module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 35);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


var leftTopData = [{
  url: '/blog/tech',
  icon: 'icon-code',
  name: '技术'
}, {
  url: '/blog/essay',
  icon: 'icon-book',
  name: '随笔'
}, {
  url: '/blog/card',
  icon: 'icon-card',
  name: '卡片'
}];
var leftBottomData = [{
  url: '/',
  icon: 'icon-home',
  name: '首页'
}, {
  url: '/blog',
  icon: 'icon-dashboard',
  name: '主页'
}, {
  url: '/blog/about',
  icon: 'icon-about',
  name: '关于'
}];

var LeftMenu = function LeftMenu() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-menu"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-menu__top"
  }, leftTopData.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: i,
      href: d.url
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-menu__icon-box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-pic"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon iconfont ".concat(d.icon)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-text"
    }, d.name)));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-menu__bottom"
  }, leftBottomData.map(function (d, i) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      key: i,
      href: d.url
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "left-menu__icon-box"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-pic"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      className: "icon iconfont ".concat(d.icon)
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "icon-text"
    }, d.name)));
  })));
};

/* harmony default export */ __webpack_exports__["a"] = (LeftMenu);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./lib/config.js
var port = parseInt(process.env.PORT, 10) || 20162;
var env = "production";
var dev = "production" !== 'production';
var api_prefix = dev ? 'http://api.linxd.cc/' : 'http://api.linxiangdong.com/';

// CONCATENATED MODULE: ./lib/axios.js


external_axios_default.a.defaults.baseURL = api_prefix;
external_axios_default.a.defaults.timeout = 5000; // http请求拦截器

external_axios_default.a.interceptors.request.use(function (config) {
  // console.log(22, config)
  return config;
}, function (error) {
  message.error('请求服务器超时');
  return error;
}); // http响应拦截器
// axios.interceptors.response.use(data => {
//   if (!data || typeof data.data !== 'object') {
//     message.error('服务器响应格式错误')
//     return false
//   }
//   const result = data.data
//   if (result.errno !== 0) {
//     message.error(result.errmsg)
//     errAction[result.errno]()
//     return false // 错误码统一返回false，在这里统一处理，页面不对其处理
//   }
//   return result
// }, error => {
//   console.log('error', error)
//   message.error('服务器响应错误')
//   return Promise.reject(error)
// })

/* harmony default export */ var axios = __webpack_exports__["a"] = (external_axios_default.a);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/classCallCheck");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/createClass");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/getPrototypeOf");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/inherits");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content-container"
  }, children));
});

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-highlight");

/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(11);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_blog_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);
/* harmony import */ var _components_left_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(13);
/* harmony import */ var react_markdown__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_markdown__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(14);
/* harmony import */ var react_highlight__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_highlight__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6);















var CodeBlock = function CodeBlock(_ref) {
  var value = _ref.value,
      language = _ref.language;
  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_highlight__WEBPACK_IMPORTED_MODULE_12___default.a, {
    innerHTML: true
  }, "<pre><code class=".concat(language, ">").concat(value, "</code></pre>"));
};

var CardPage =
/*#__PURE__*/
function (_React$Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(CardPage, _React$Component);

  function CardPage() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, CardPage);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(CardPage)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      showModal: false,
      model: {}
    };
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(CardPage, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var result = this.props.result;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_blog_layout__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_left_menu__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-page"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-page__tip"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "\u5361\u7247\u8BF4\u660E\uFF1A"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "1.\u8FD9\u91CC\u662F\u6211\u6280\u672F\u5361\u7247\u5B58\u653E\u5904"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "2.\u6BCF\u5F20\u5361\u7247\u662F\u4E00\u4E2A\u77E5\u8BC6\u70B9\uFF0C\u503C\u5F97\u8BB0\u5F55\u5374\u8FD8\u4E0D\u591F\u5F62\u6210\u6587\u7AE0"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", null, "3.\u5361\u7247\u662F\u672A\u6765\u6587\u7AE0\u7684\u7D20\u6750\uFF0C\u8981\u6EE1\u8DB3\uFF1A\u5185\u5BB9\u8981\u591F\u5C0F\uFF0C\u53EA\u56DE\u7B54\u4E00\u4E2A\u95EE\u9898\uFF1B\u8981\u5199\u660E\u53C2\u8003\u6765\u6E90\uFF0C\u4FBF\u4E8E\u56DE\u6EAF\u548C\u6269\u5C55")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-list"
      }, result.map(function (item, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          className: "card-item",
          onClick: function onClick() {
            _this2.setState({
              showModal: true,
              model: item
            });
          }
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: "card-item__title"
        }, item.title));
      })), this.state.showModal && react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-overlay"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-model"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-model__close-box"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("i", {
        className: "icon iconfont icon-close",
        onClick: function onClick() {
          return _this2.setState({
            showModal: false
          });
        }
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-model__header"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", null, this.state.model.title)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: "card-model__content"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_markdown__WEBPACK_IMPORTED_MODULE_11___default.a, {
        source: this.state.model.content,
        renderers: {
          code: CodeBlock
        }
      })))))));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var result;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_lib_axios__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"])({
                  url: 'article/list',
                  method: 'post',
                  data: {
                    category: 'card'
                  }
                });

              case 2:
                result = _context.sent;
                return _context.abrupt("return", {
                  result: result.data.data.article_list
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return CardPage;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CardPage);

/***/ })
/******/ ]);