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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ 12:
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_blog_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(12);
/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _components_left_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);








var Essay = function Essay(_ref) {
  var result = _ref.result;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_blog_layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_left_menu__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "blog-list"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "blog-list__inner"
  }, result.map(function (r, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "blog-list__item",
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
      href: {
        pathname: '/blog/essay/detail',
        query: {
          name: "".concat(r.url_name),
          id: "".concat(r.id)
        }
      }
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", null, r.title)));
  })))));
};

Essay.getInitialProps =
/*#__PURE__*/
_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(_lib_axios__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])({
            url: 'article/list',
            method: 'post',
            data: {
              category: 'essay'
            }
          });

        case 2:
          res = _context.sent;
          return _context.abrupt("return", {
            result: res.data.data.article_list
          });

        case 4:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Essay);

/***/ }),

/***/ 5:
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

/***/ 6:
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

/***/ })

/******/ });