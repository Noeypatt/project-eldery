webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/chart/piechart.js":
/*!**************************************!*\
  !*** ./components/chart/piechart.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);





var _jsxFileName = "C:\\Users\\Noeypatt\\Documents\\elderly-nextjs\\components\\chart\\piechart.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;


var PieChart =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(PieChart, _React$Component);

  function PieChart() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, PieChart);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(PieChart).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(PieChart, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "warp-chart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 10
        },
        __self: this
      });
    }
  }]);

  return PieChart;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (PieChart);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_nav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/nav */ "./components/nav.js");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/base.scss */ "./styles/base.scss");
/* harmony import */ var _styles_base_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_styles_base_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _config_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../config/api */ "./config/api.js");
/* harmony import */ var _components_layout_bg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/layout/bg */ "./components/layout/bg.js");
/* harmony import */ var _components_chart_chart__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/chart/chart */ "./components/chart/chart.js");
/* harmony import */ var _components_chart_barchart__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/chart/barchart */ "./components/chart/barchart.js");
/* harmony import */ var _components_chart_piechart__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/chart/piechart */ "./components/chart/piechart.js");








var _jsxFileName = "C:\\Users\\Noeypatt\\Documents\\elderly-nextjs\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;









var Home =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(Home, _React$Component);

  function Home(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Home);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__["default"])(Home).call(this, props));
    _this.state = {
      activeImg: false,
      icon: [{
        text: "หน่วยงานที่เกี่ยวข้อง",
        pic: "/static/bank.svg",
        href: "/",
        name: "icon1",
        pichover: "/static/bankhover.svg"
      }, {
        text: "หน่วยงานดูแลผู้สูงอายุ",
        pic: "/static/department.svg",
        href: "/department",
        name: "icon2",
        pichover: "/static/departmenthover.svg"
      }, {
        text: "เอกสารที่จำเป็น",
        pic: "/static/contract.svg",
        href: "/document",
        name: "icon3",
        pichover: "/static/docmenthover.svg"
      }, {
        text: "กิจกรรม",
        pic: "/static/active.svg",
        href: "/active",
        name: "icon4",
        pichover: "/static/activehover.svg"
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_4__["default"])(Home, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.userOauth = JSON.parse(localStorage.getItem("myOauth"));
                _context.t0 = localStorage;
                _context.t1 = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default.a;
                _context.next = 5;
                return _config_api__WEBPACK_IMPORTED_MODULE_11__["default"].postSheetValues();

              case 5:
                _context.t2 = _context.sent;
                _context.t3 = (0, _context.t1)(_context.t2);

                _context.t0.setItem.call(_context.t0, "myOauth", _context.t3);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "warp",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx(_components_nav__WEBPACK_IMPORTED_MODULE_9__["default"], {
        name: "main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx(_components_layout_bg__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }), __jsx("div", {
        className: "warp-menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        },
        __self: this
      }, __jsx("div", {
        className: "menu",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "warp-icon",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      }, this.state.icon.map(function (item, index) {
        return __jsx("a", {
          href: item.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 47
          },
          __self: this
        }, __jsx("div", {
          className: "icon",
          key: index,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 48
          },
          __self: this
        }, __jsx("div", {
          className: "icon-img",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 49
          },
          __self: this
        }, __jsx("img", {
          key: index,
          src: item.pic,
          alt: item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }), __jsx("img", {
          className: "hover",
          src: item.pichover,
          alt: item.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        })), __jsx("h6", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          },
          __self: this
        }, item.text)));
      })))), __jsx("div", {
        className: "warp-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        },
        __self: this
      }, __jsx("div", {
        className: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, __jsx(_components_chart_chart__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx(_components_chart_barchart__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx(_components_chart_piechart__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        },
        __self: this
      }))));
    }
  }]);

  return Home;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

})
//# sourceMappingURL=index.js.4c9da5cb1be8148ba874.hot-update.js.map