module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/asyncToGenerator");

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(55);


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

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(3);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "@babel/runtime/helpers/asyncToGenerator"
var asyncToGenerator_ = __webpack_require__(4);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator_);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(20);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./lib/axios.js + 1 modules
var axios = __webpack_require__(6);

// CONCATENATED MODULE: ./components/dashboard-item/index.js





var dashboard_item_dashboardData = [{
  url: '/blog/tech',
  imgUrl: '/static/img/tech.png',
  imgTitle: '随便截取的图片',
  name: '技术',
  content: '「技术」是我记录WEB端开发的文章，目前主要在于前端，共有xx篇文章。'
}, {
  url: '/blog/essay',
  imgUrl: '/static/img/essay_eb.jpg',
  imgTitle: 'E·B 怀特在写作',
  name: '随笔',
  content: '「随笔」是我记录除「技术」之外其他文章，主要是生活经历和思考，共有xx篇文章。'
}, {
  url: '/blog/card',
  imgUrl: '/static/img/nbkf_card.jpg',
  imgTitle: '纳博科夫的卡片',
  name: '卡片',
  content: '「卡片」是我记录信息的第一步，这些信息值得记录，却还不够形成文章。以技术细节为主。共有xx张卡片。'
}];

var dashboard_item_DashboardItem = function DashboardItem(_ref) {
  var result = _ref.result;
  console.log(111, result);
  return external_react_default.a.createElement(external_react_default.a.Fragment, null, dashboard_item_dashboardData.map(function (d, i) {
    return external_react_default.a.createElement(link_default.a, {
      key: i,
      href: d.url
    }, external_react_default.a.createElement("div", {
      className: "blog-main__item"
    }, external_react_default.a.createElement("div", {
      className: "left-pic"
    }, external_react_default.a.createElement("img", {
      title: d.imgTitle,
      src: d.imgUrl
    })), external_react_default.a.createElement("div", {
      className: "right-info"
    }, external_react_default.a.createElement("div", {
      className: "right-info__title"
    }, d.name), external_react_default.a.createElement("div", {
      className: "right-info__text"
    }, d.content))));
  }));
};

dashboard_item_DashboardItem.getInitialProps =
/*#__PURE__*/
asyncToGenerator_default()(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var res;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(axios["a" /* default */])({
            url: 'article/count'
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
/* harmony default export */ var dashboard_item = (dashboard_item_DashboardItem);
// EXTERNAL MODULE: ./components/left-menu/index.js
var left_menu = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/blog/index.js









var blog_Blog = function Blog(_ref) {
  var result = _ref.result;
  var dashboardData = [{
    url: '/blog/tech',
    imgUrl: '/static/img/tech.png',
    imgTitle: '随便截取的图片',
    name: '技术',
    content: '「技术」是我记录WEB端开发的文章，目前主要在于前端，共有xx篇文章。'
  }, {
    url: '/blog/essay',
    imgUrl: '/static/img/essay_eb.jpg',
    imgTitle: 'E·B 怀特在写作',
    name: '随笔',
    content: '「随笔」是我记录除「技术」之外其他文章，主要是生活经历和思考，共有xx篇文章。'
  }, {
    url: '/blog/card',
    imgUrl: '/static/img/nbkf_card.jpg',
    imgTitle: '纳博科夫的卡片',
    name: '卡片',
    content: '「卡片」是我记录信息的第一步，这些信息值得记录，却还不够形成文章。以技术细节为主。共有xx张卡片。'
  }];
  return external_react_default.a.createElement("div", {
    className: "jsx-3274098692" + " " + "blog-wrap"
  }, external_react_default.a.createElement(left_menu["a" /* default */], null), external_react_default.a.createElement("div", {
    className: "jsx-3274098692" + " " + "blog-main"
  }, dashboardData.map(function (d, i) {
    return external_react_default.a.createElement(link_default.a, {
      key: i,
      href: d.url
    }, external_react_default.a.createElement("div", {
      className: "jsx-3274098692" + " " + "blog-main__item"
    }, external_react_default.a.createElement("div", {
      className: "jsx-3274098692" + " " + "left-pic"
    }, external_react_default.a.createElement("img", {
      title: d.imgTitle,
      src: d.imgUrl,
      className: "jsx-3274098692"
    })), external_react_default.a.createElement("div", {
      className: "jsx-3274098692" + " " + "right-info"
    }, external_react_default.a.createElement("div", {
      className: "jsx-3274098692" + " " + "right-info__title"
    }, d.name), external_react_default.a.createElement("div", {
      className: "jsx-3274098692" + " " + "right-info__text"
    }, d.content))));
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "3274098692",
    css: [".blog-main.jsx-3274098692{width:800px;margin:50px auto;}"]
  }));
};

blog_Blog.getInitialProps =
/*#__PURE__*/
asyncToGenerator_default()(
/*#__PURE__*/
regenerator_default.a.mark(function _callee() {
  var res;
  return regenerator_default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(axios["a" /* default */])({
            url: 'category/count'
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
/* harmony default export */ var blog = __webpack_exports__["default"] = (blog_Blog);

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