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
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
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

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(34);


/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_blog_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_left_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);





var About = function About(_ref) {
  var result = _ref.result;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_blog_layout__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_left_menu__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-page"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__title"
  }, "\u5173\u4E8E\u6211"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__content"
  }, "\u6211\u53EB\u6797\u5411\u4E1C\uFF0C\u662F\u4E00\u540D\u8F6C\u884C\u7684\u7A0B\u5E8F\u5458\u3002\u5728\u6210\u4E3A\u7A0B\u5E8F\u5458\u4E4B\u524D\uFF0C\u6211\u6446\u8FC7\u5730\u644A\uFF0C\u53D1\u8FC7\u4F20\u5355\uFF0C\u751A\u81F3\u517B\u8FC7\u732A\u3002\u6700\u540E\u4E00\u4EFD\u975E\u7A0B\u5E8F\u5458\u5DE5\u4F5C\u662F\u624B\u5DE5\u827A\u4EBA\uFF0C\u6446\u5730\u644A\u5356\u624B\u5DE5\u827A\u54C1\u3002\u540E\u6765\u81EA\u5B66\u6210\u4E3A\u7A0B\u5E8F\u5458--\u524D\u7AEF\u5DE5\u7A0B\u5E08\u3002\u5230\u73B0\u5728\uFF082018\uFF09\u5DF2\u5DE5\u4F5C\u4E09\u5E74\u6709\u4F59\uFF0C\u76EE\u524D\u4F9B\u804C\u4E8E360\u524D\u7AEF\u56E2\u961F--\u5947\u821E\u56E2\u3002")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__title"
  }, "\u5173\u4E8E\u5185\u5BB9"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u6B64\u535A\u5BA2\u662F\u7531\u6211\u7EAF\u624B\u5DE5\u6253\u9020\u800C\u6210\uFF1A\u540E\u7AEF\u300Cnode+thinkjs\u300D\uFF0C\u7BA1\u7406\u7AEF\u300Creact+antd\u300D\uFF0C\u524D\u7AEF\u300Cnextjs\u300D\u3002 \u535A\u5BA2\u6E90\u7801\uFF1A", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/eastling/blog"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank"
  }, "https://github.com/eastling/blog"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u7248\u6743\u58F0\u660E: \u300C\u7F72\u540D-\u975E\u5546\u4E1A\u6027\u4F7F\u7528-\u7981\u6B62\u6F14\u7ECE 3.0 \u56FD\u9645\u300D", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank"
  }, "CC BY-NC-ND 3.0"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "\u82E5\u975E\u7279\u6B8A\u8BF4\u660E\uFF0C\u6B64\u535A\u5BA2\u6587\u7AE0\u7686\u4E3A\u539F\u521B"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__title"
  }, "\u8054\u7CFB\u6211"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "about-item__content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Github: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "https://github.com/eastling"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    target: "_blank"
  }, "eastling"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Email: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "mailto: donaldlxd@gmail.com"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", null, "donaldlxd@gmail.com")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

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

/***/ })

/******/ });