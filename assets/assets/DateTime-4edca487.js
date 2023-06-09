import { r as reactExports, a as reactDomExports, s as styled, b as jsxs, j as jsx } from "./PageViewer-d914b069.js";
import { r as require$$0 } from "./moment-feb1c730.js";
var reactDatetime_cjsExports = {};
var reactDatetime_cjs = {
  get exports() {
    return reactDatetime_cjsExports;
  },
  set exports(v) {
    reactDatetime_cjsExports = v;
  }
};
(function(module) {
  module.exports = function(e) {
    var t = {};
    function n(r) {
      if (t[r])
        return t[r].exports;
      var o = t[r] = { i: r, l: false, exports: {} };
      return e[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
    }
    return n.m = e, n.c = t, n.d = function(e2, t2, r) {
      n.o(e2, t2) || Object.defineProperty(e2, t2, { enumerable: true, get: r });
    }, n.r = function(e2) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e2, "__esModule", { value: true });
    }, n.t = function(e2, t2) {
      if (1 & t2 && (e2 = n(e2)), 8 & t2)
        return e2;
      if (4 & t2 && "object" == typeof e2 && e2 && e2.__esModule)
        return e2;
      var r = /* @__PURE__ */ Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: e2 }), 2 & t2 && "string" != typeof e2)
        for (var o in e2)
          n.d(r, o, function(t3) {
            return e2[t3];
          }.bind(null, o));
      return r;
    }, n.n = function(e2) {
      var t2 = e2 && e2.__esModule ? function() {
        return e2.default;
      } : function() {
        return e2;
      };
      return n.d(t2, "a", t2), t2;
    }, n.o = function(e2, t2) {
      return Object.prototype.hasOwnProperty.call(e2, t2);
    }, n.p = "", n(n.s = 4);
  }([function(e, t) {
    e.exports = reactExports;
  }, function(e, t) {
    e.exports = require$$0;
  }, function(e, t) {
    e.exports = reactDomExports;
  }, function(e, t, n) {
    e.exports = n(5)();
  }, function(e, t, n) {
    e.exports = n(7);
  }, function(e, t, n) {
    var r = n(6);
    function o() {
    }
    function i() {
    }
    i.resetWarningCache = o, e.exports = function() {
      function e2(e3, t3, n3, o2, i2, a) {
        if (a !== r) {
          var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
          throw s.name = "Invariant Violation", s;
        }
      }
      function t2() {
        return e2;
      }
      e2.isRequired = e2;
      var n2 = { array: e2, bigint: e2, bool: e2, func: e2, number: e2, object: e2, string: e2, symbol: e2, any: e2, arrayOf: t2, element: e2, elementType: e2, instanceOf: t2, node: e2, objectOf: t2, oneOf: t2, oneOfType: t2, shape: t2, exact: t2, checkPropTypes: i, resetWarningCache: o };
      return n2.PropTypes = n2, n2;
    };
  }, function(e, t, n) {
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  }, function(e, t, n) {
    n.r(t);
    var r = n(3), o = n.n(r), i = n(1), a = n.n(i), s = n(0), c = n.n(s);
    function u() {
      return (u = Object.assign ? Object.assign.bind() : function(e2) {
        for (var t2 = 1; t2 < arguments.length; t2++) {
          var n2 = arguments[t2];
          for (var r2 in n2)
            Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
        }
        return e2;
      }).apply(this, arguments);
    }
    function l(e2) {
      var t2 = e2.onClickPrev, n2 = e2.onClickSwitch, r2 = e2.onClickNext, o2 = e2.switchContent, i2 = e2.switchColSpan, a2 = e2.switchProps;
      return c.a.createElement("tr", null, c.a.createElement("th", { className: "rdtPrev", onClick: t2 }, c.a.createElement("span", null, "‹")), c.a.createElement("th", u({ className: "rdtSwitch", colSpan: i2, onClick: n2 }, a2), o2), c.a.createElement("th", { className: "rdtNext", onClick: r2 }, c.a.createElement("span", null, "›")));
    }
    function p(e2) {
      return (p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
      })(e2);
    }
    function f(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function d(e2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var r2 = t2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function h(e2, t2) {
      return (h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
        return e3.__proto__ = t3, e3;
      })(e2, t2);
    }
    function y(e2) {
      var t2 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e3) {
          return false;
        }
      }();
      return function() {
        var n2, r2 = b(e2);
        if (t2) {
          var o2 = b(this).constructor;
          n2 = Reflect.construct(r2, arguments, o2);
        } else
          n2 = r2.apply(this, arguments);
        return m(this, n2);
      };
    }
    function m(e2, t2) {
      if (t2 && ("object" === p(t2) || "function" == typeof t2))
        return t2;
      if (void 0 !== t2)
        throw new TypeError("Derived constructors may only return object or undefined");
      return v(e2);
    }
    function v(e2) {
      if (void 0 === e2)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function b(e2) {
      return (b = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
        return e3.__proto__ || Object.getPrototypeOf(e3);
      })(e2);
    }
    function O(e2, t2, n2) {
      return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
    }
    var g = function(e2) {
      !function(e3, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && h(e3, t3);
      }(i2, e2);
      var t2, n2, o2 = y(i2);
      function i2() {
        var e3;
        f(this, i2);
        for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
          n3[r2] = arguments[r2];
        return O(v(e3 = o2.call.apply(o2, [this].concat(n3))), "_setDate", function(t4) {
          e3.props.updateDate(t4);
        }), e3;
      }
      return t2 = i2, (n2 = [{ key: "render", value: function() {
        return c.a.createElement("div", { className: "rdtDays" }, c.a.createElement("table", null, c.a.createElement("thead", null, this.renderNavigation(), this.renderDayHeaders()), c.a.createElement("tbody", null, this.renderDays()), this.renderFooter()));
      } }, { key: "renderNavigation", value: function() {
        var e3 = this, t3 = this.props.viewDate, n3 = t3.localeData();
        return c.a.createElement(l, { onClickPrev: function() {
          return e3.props.navigate(-1, "months");
        }, onClickSwitch: function() {
          return e3.props.showView("months");
        }, onClickNext: function() {
          return e3.props.navigate(1, "months");
        }, switchContent: n3.months(t3) + " " + t3.year(), switchColSpan: 5, switchProps: { "data-value": this.props.viewDate.month() } });
      } }, { key: "renderDayHeaders", value: function() {
        var e3 = function(e4) {
          var t3 = e4.firstDayOfWeek(), n3 = [], r2 = 0;
          return e4._weekdaysMin.forEach(function(e5) {
            n3[(7 + r2++ - t3) % 7] = e5;
          }), n3;
        }(this.props.viewDate.localeData()).map(function(e4, t3) {
          return c.a.createElement("th", { key: e4 + t3, className: "dow" }, e4);
        });
        return c.a.createElement("tr", null, e3);
      } }, { key: "renderDays", value: function() {
        var e3 = this.props.viewDate, t3 = e3.clone().startOf("month"), n3 = e3.clone().endOf("month"), r2 = [[], [], [], [], [], []], o3 = e3.clone().subtract(1, "months");
        o3.date(o3.daysInMonth()).startOf("week");
        for (var i3 = o3.clone().add(42, "d"), a2 = 0; o3.isBefore(i3); )
          w(r2, a2++).push(this.renderDay(o3, t3, n3)), o3.add(1, "d");
        return r2.map(function(e4, t4) {
          return c.a.createElement("tr", { key: "".concat(i3.month(), "_").concat(t4) }, e4);
        });
      } }, { key: "renderDay", value: function(e3, t3, n3) {
        var r2 = this.props.selectedDate, o3 = { key: e3.format("M_D"), "data-value": e3.date(), "data-month": e3.month(), "data-year": e3.year() }, i3 = "rdtDay";
        return e3.isBefore(t3) ? i3 += " rdtOld" : e3.isAfter(n3) && (i3 += " rdtNew"), r2 && e3.isSame(r2, "day") && (i3 += " rdtActive"), e3.isSame(this.props.moment(), "day") && (i3 += " rdtToday"), this.props.isValidDate(e3) ? o3.onClick = this._setDate : i3 += " rdtDisabled", o3.className = i3, this.props.renderDay(o3, e3.clone(), r2 && r2.clone());
      } }, { key: "renderFooter", value: function() {
        var e3 = this;
        if (this.props.timeFormat) {
          var t3 = this.props.viewDate;
          return c.a.createElement("tfoot", null, c.a.createElement("tr", null, c.a.createElement("td", { onClick: function() {
            return e3.props.showView("time");
          }, colSpan: 7, className: "rdtTimeToggle" }, t3.format(this.props.timeFormat))));
        }
      } }]) && d(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), i2;
    }(c.a.Component);
    function w(e2, t2) {
      return e2[Math.floor(t2 / 7)];
    }
    function D(e2) {
      return (D = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
      })(e2);
    }
    function k(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function C(e2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var r2 = t2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function P(e2, t2) {
      return (P = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
        return e3.__proto__ = t3, e3;
      })(e2, t2);
    }
    function _(e2) {
      var t2 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e3) {
          return false;
        }
      }();
      return function() {
        var n2, r2 = S(e2);
        if (t2) {
          var o2 = S(this).constructor;
          n2 = Reflect.construct(r2, arguments, o2);
        } else
          n2 = r2.apply(this, arguments);
        return E(this, n2);
      };
    }
    function E(e2, t2) {
      if (t2 && ("object" === D(t2) || "function" == typeof t2))
        return t2;
      if (void 0 !== t2)
        throw new TypeError("Derived constructors may only return object or undefined");
      return j(e2);
    }
    function j(e2) {
      if (void 0 === e2)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function S(e2) {
      return (S = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
        return e3.__proto__ || Object.getPrototypeOf(e3);
      })(e2);
    }
    function V(e2, t2, n2) {
      return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
    }
    O(g, "defaultProps", { isValidDate: function() {
      return true;
    }, renderDay: function(e2, t2) {
      return c.a.createElement("td", e2, t2.date());
    } });
    var T = function(e2) {
      !function(e3, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && P(e3, t3);
      }(i2, e2);
      var t2, n2, o2 = _(i2);
      function i2() {
        var e3;
        k(this, i2);
        for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
          n3[r2] = arguments[r2];
        return V(j(e3 = o2.call.apply(o2, [this].concat(n3))), "_updateSelectedMonth", function(t4) {
          e3.props.updateDate(t4);
        }), e3;
      }
      return t2 = i2, (n2 = [{ key: "render", value: function() {
        return c.a.createElement("div", { className: "rdtMonths" }, c.a.createElement("table", null, c.a.createElement("thead", null, this.renderNavigation())), c.a.createElement("table", null, c.a.createElement("tbody", null, this.renderMonths())));
      } }, { key: "renderNavigation", value: function() {
        var e3 = this, t3 = this.props.viewDate.year();
        return c.a.createElement(l, { onClickPrev: function() {
          return e3.props.navigate(-1, "years");
        }, onClickSwitch: function() {
          return e3.props.showView("years");
        }, onClickNext: function() {
          return e3.props.navigate(1, "years");
        }, switchContent: t3, switchColSpan: "2" });
      } }, { key: "renderMonths", value: function() {
        for (var e3 = [[], [], []], t3 = 0; t3 < 12; t3++)
          N(e3, t3).push(this.renderMonth(t3));
        return e3.map(function(e4, t4) {
          return c.a.createElement("tr", { key: t4 }, e4);
        });
      } }, { key: "renderMonth", value: function(e3) {
        var t3, n3 = this.props.selectedDate, r2 = "rdtMonth";
        this.isDisabledMonth(e3) ? r2 += " rdtDisabled" : t3 = this._updateSelectedMonth, n3 && n3.year() === this.props.viewDate.year() && n3.month() === e3 && (r2 += " rdtActive");
        var o3 = { key: e3, className: r2, "data-value": e3, onClick: t3 };
        return this.props.renderMonth ? this.props.renderMonth(o3, e3, this.props.viewDate.year(), this.props.selectedDate && this.props.selectedDate.clone()) : c.a.createElement("td", o3, this.getMonthText(e3));
      } }, { key: "isDisabledMonth", value: function(e3) {
        var t3 = this.props.isValidDate;
        if (!t3)
          return false;
        for (var n3 = this.props.viewDate.clone().set({ month: e3 }), r2 = n3.endOf("month").date() + 1; r2-- > 1; )
          if (t3(n3.date(r2)))
            return false;
        return true;
      } }, { key: "getMonthText", value: function(e3) {
        var t3, n3 = this.props.viewDate, r2 = n3.localeData().monthsShort(n3.month(e3));
        return (t3 = r2.substring(0, 3)).charAt(0).toUpperCase() + t3.slice(1);
      } }]) && C(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), i2;
    }(c.a.Component);
    function N(e2, t2) {
      return t2 < 4 ? e2[0] : t2 < 8 ? e2[1] : e2[2];
    }
    function x(e2) {
      return (x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
      })(e2);
    }
    function F(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function I(e2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var r2 = t2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function R(e2, t2) {
      return (R = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
        return e3.__proto__ = t3, e3;
      })(e2, t2);
    }
    function M(e2) {
      var t2 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e3) {
          return false;
        }
      }();
      return function() {
        var n2, r2 = B(e2);
        if (t2) {
          var o2 = B(this).constructor;
          n2 = Reflect.construct(r2, arguments, o2);
        } else
          n2 = r2.apply(this, arguments);
        return Y(this, n2);
      };
    }
    function Y(e2, t2) {
      if (t2 && ("object" === x(t2) || "function" == typeof t2))
        return t2;
      if (void 0 !== t2)
        throw new TypeError("Derived constructors may only return object or undefined");
      return L(e2);
    }
    function L(e2) {
      if (void 0 === e2)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function B(e2) {
      return (B = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
        return e3.__proto__ || Object.getPrototypeOf(e3);
      })(e2);
    }
    function A(e2, t2, n2) {
      return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
    }
    var H = function(e2) {
      !function(e3, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && R(e3, t3);
      }(i2, e2);
      var t2, n2, o2 = M(i2);
      function i2() {
        var e3;
        F(this, i2);
        for (var t3 = arguments.length, n3 = new Array(t3), r2 = 0; r2 < t3; r2++)
          n3[r2] = arguments[r2];
        return A(L(e3 = o2.call.apply(o2, [this].concat(n3))), "disabledYearsCache", {}), A(L(e3), "_updateSelectedYear", function(t4) {
          e3.props.updateDate(t4);
        }), e3;
      }
      return t2 = i2, (n2 = [{ key: "render", value: function() {
        return c.a.createElement("div", { className: "rdtYears" }, c.a.createElement("table", null, c.a.createElement("thead", null, this.renderNavigation())), c.a.createElement("table", null, c.a.createElement("tbody", null, this.renderYears())));
      } }, { key: "renderNavigation", value: function() {
        var e3 = this, t3 = this.getViewYear();
        return c.a.createElement(l, { onClickPrev: function() {
          return e3.props.navigate(-10, "years");
        }, onClickSwitch: function() {
          return e3.props.showView("years");
        }, onClickNext: function() {
          return e3.props.navigate(10, "years");
        }, switchContent: "".concat(t3, "-").concat(t3 + 9) });
      } }, { key: "renderYears", value: function() {
        for (var e3 = this.getViewYear(), t3 = [[], [], []], n3 = e3 - 1; n3 < e3 + 11; n3++)
          U(t3, n3 - e3).push(this.renderYear(n3));
        return t3.map(function(e4, t4) {
          return c.a.createElement("tr", { key: t4 }, e4);
        });
      } }, { key: "renderYear", value: function(e3) {
        var t3, n3 = this.getSelectedYear(), r2 = "rdtYear";
        this.isDisabledYear(e3) ? r2 += " rdtDisabled" : t3 = this._updateSelectedYear, n3 === e3 && (r2 += " rdtActive");
        var o3 = { key: e3, className: r2, "data-value": e3, onClick: t3 };
        return this.props.renderYear(o3, e3, this.props.selectedDate && this.props.selectedDate.clone());
      } }, { key: "getViewYear", value: function() {
        return 10 * parseInt(this.props.viewDate.year() / 10, 10);
      } }, { key: "getSelectedYear", value: function() {
        return this.props.selectedDate && this.props.selectedDate.year();
      } }, { key: "isDisabledYear", value: function(e3) {
        var t3 = this.disabledYearsCache;
        if (void 0 !== t3[e3])
          return t3[e3];
        var n3 = this.props.isValidDate;
        if (!n3)
          return false;
        for (var r2 = this.props.viewDate.clone().set({ year: e3 }), o3 = r2.endOf("year").dayOfYear() + 1; o3-- > 1; )
          if (n3(r2.dayOfYear(o3)))
            return t3[e3] = false, false;
        return t3[e3] = true, true;
      } }]) && I(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), i2;
    }(c.a.Component);
    function U(e2, t2) {
      return t2 < 3 ? e2[0] : t2 < 7 ? e2[1] : e2[2];
    }
    function Z(e2) {
      return (Z = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
      })(e2);
    }
    function W(e2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var r2 = t2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function z(e2, t2) {
      return (z = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
        return e3.__proto__ = t3, e3;
      })(e2, t2);
    }
    function q(e2) {
      var t2 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e3) {
          return false;
        }
      }();
      return function() {
        var n2, r2 = X(e2);
        if (t2) {
          var o2 = X(this).constructor;
          n2 = Reflect.construct(r2, arguments, o2);
        } else
          n2 = r2.apply(this, arguments);
        return K(this, n2);
      };
    }
    function K(e2, t2) {
      if (t2 && ("object" === Z(t2) || "function" == typeof t2))
        return t2;
      if (void 0 !== t2)
        throw new TypeError("Derived constructors may only return object or undefined");
      return function(e3) {
        if (void 0 === e3)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e3;
      }(e2);
    }
    function X(e2) {
      return (X = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
        return e3.__proto__ || Object.getPrototypeOf(e3);
      })(e2);
    }
    function G(e2, t2) {
      var n2 = Object.keys(e2);
      if (Object.getOwnPropertySymbols) {
        var r2 = Object.getOwnPropertySymbols(e2);
        t2 && (r2 = r2.filter(function(t3) {
          return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
        })), n2.push.apply(n2, r2);
      }
      return n2;
    }
    function J(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = null != arguments[t2] ? arguments[t2] : {};
        t2 % 2 ? G(Object(n2), true).forEach(function(t3) {
          Q(e2, t3, n2[t3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : G(Object(n2)).forEach(function(t3) {
          Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
        });
      }
      return e2;
    }
    function Q(e2, t2, n2) {
      return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
    }
    A(H, "defaultProps", { renderYear: function(e2, t2) {
      return c.a.createElement("td", e2, t2);
    } });
    var $ = { hours: { min: 0, max: 23, step: 1 }, minutes: { min: 0, max: 59, step: 1 }, seconds: { min: 0, max: 59, step: 1 }, milliseconds: { min: 0, max: 999, step: 1 } };
    var ee = function(e2) {
      !function(e3, t3) {
        if ("function" != typeof t3 && null !== t3)
          throw new TypeError("Super expression must either be null or a function");
        e3.prototype = Object.create(t3 && t3.prototype, { constructor: { value: e3, writable: true, configurable: true } }), Object.defineProperty(e3, "prototype", { writable: false }), t3 && z(e3, t3);
      }(i2, e2);
      var t2, n2, o2 = q(i2);
      function i2(e3) {
        var t3, n3, r2;
        return function(e4, t4) {
          if (!(e4 instanceof t4))
            throw new TypeError("Cannot call a class as a function");
        }(this, i2), (t3 = o2.call(this, e3)).constraints = (n3 = e3.timeConstraints, r2 = {}, Object.keys($).forEach(function(e4) {
          r2[e4] = J(J({}, $[e4]), n3[e4] || {});
        }), r2), t3.state = t3.getTimeParts(e3.selectedDate || e3.viewDate), t3;
      }
      return t2 = i2, (n2 = [{ key: "render", value: function() {
        var e3 = this, t3 = [], n3 = this.state;
        return this.getCounters().forEach(function(r2, o3) {
          o3 && "ampm" !== r2 && t3.push(c.a.createElement("div", { key: "sep".concat(o3), className: "rdtCounterSeparator" }, ":")), t3.push(e3.renderCounter(r2, n3[r2]));
        }), c.a.createElement("div", { className: "rdtTime" }, c.a.createElement("table", null, this.renderHeader(), c.a.createElement("tbody", null, c.a.createElement("tr", null, c.a.createElement("td", null, c.a.createElement("div", { className: "rdtCounters" }, t3))))));
      } }, { key: "renderCounter", value: function(e3, t3) {
        var n3 = this;
        return "hours" === e3 && this.isAMPM() && 0 == (t3 = (t3 - 1) % 12 + 1) && (t3 = 12), "ampm" === e3 && (t3 = -1 !== this.props.timeFormat.indexOf(" A") ? this.props.viewDate.format("A") : this.props.viewDate.format("a")), c.a.createElement("div", { key: e3, className: "rdtCounter" }, c.a.createElement("span", { className: "rdtBtn", onMouseDown: function(t4) {
          return n3.onStartClicking(t4, "increase", e3);
        } }, "▲"), c.a.createElement("div", { className: "rdtCount" }, t3), c.a.createElement("span", { className: "rdtBtn", onMouseDown: function(t4) {
          return n3.onStartClicking(t4, "decrease", e3);
        } }, "▼"));
      } }, { key: "renderHeader", value: function() {
        var e3 = this;
        if (this.props.dateFormat) {
          var t3 = this.props.selectedDate || this.props.viewDate;
          return c.a.createElement("thead", null, c.a.createElement("tr", null, c.a.createElement("td", { className: "rdtSwitch", colSpan: "4", onClick: function() {
            return e3.props.showView("days");
          } }, t3.format(this.props.dateFormat))));
        }
      } }, { key: "onStartClicking", value: function(e3, t3, n3) {
        var r2 = this;
        if (!e3 || !e3.button || 0 === e3.button) {
          if ("ampm" === n3)
            return this.toggleDayPart();
          var o3 = {}, i3 = document.body;
          o3[n3] = this[t3](n3), this.setState(o3), this.timer = setTimeout(function() {
            r2.increaseTimer = setInterval(function() {
              o3[n3] = r2[t3](n3), r2.setState(o3);
            }, 70);
          }, 500), this.mouseUpListener = function() {
            clearTimeout(r2.timer), clearInterval(r2.increaseTimer), r2.props.setTime(n3, parseInt(r2.state[n3], 10)), i3.removeEventListener("mouseup", r2.mouseUpListener), i3.removeEventListener("touchend", r2.mouseUpListener);
          }, i3.addEventListener("mouseup", this.mouseUpListener), i3.addEventListener("touchend", this.mouseUpListener);
        }
      } }, { key: "toggleDayPart", value: function() {
        var e3 = parseInt(this.state.hours, 10);
        e3 >= 12 ? e3 -= 12 : e3 += 12, this.props.setTime("hours", e3);
      } }, { key: "increase", value: function(e3) {
        var t3 = this.constraints[e3], n3 = parseInt(this.state[e3], 10) + t3.step;
        return n3 > t3.max && (n3 = t3.min + (n3 - (t3.max + 1))), te(e3, n3);
      } }, { key: "decrease", value: function(e3) {
        var t3 = this.constraints[e3], n3 = parseInt(this.state[e3], 10) - t3.step;
        return n3 < t3.min && (n3 = t3.max + 1 - (t3.min - n3)), te(e3, n3);
      } }, { key: "getCounters", value: function() {
        var e3 = [], t3 = this.props.timeFormat;
        return -1 !== t3.toLowerCase().indexOf("h") && (e3.push("hours"), -1 !== t3.indexOf("m") && (e3.push("minutes"), -1 !== t3.indexOf("s") && (e3.push("seconds"), -1 !== t3.indexOf("S") && e3.push("milliseconds")))), this.isAMPM() && e3.push("ampm"), e3;
      } }, { key: "isAMPM", value: function() {
        return -1 !== this.props.timeFormat.toLowerCase().indexOf(" a");
      } }, { key: "getTimeParts", value: function(e3) {
        var t3 = e3.hours();
        return { hours: te("hours", t3), minutes: te("minutes", e3.minutes()), seconds: te("seconds", e3.seconds()), milliseconds: te("milliseconds", e3.milliseconds()), ampm: t3 < 12 ? "am" : "pm" };
      } }, { key: "componentDidUpdate", value: function(e3) {
        this.props.selectedDate ? this.props.selectedDate !== e3.selectedDate && this.setState(this.getTimeParts(this.props.selectedDate)) : e3.viewDate !== this.props.viewDate && this.setState(this.getTimeParts(this.props.viewDate));
      } }]) && W(t2.prototype, n2), Object.defineProperty(t2, "prototype", { writable: false }), i2;
    }(c.a.Component);
    function te(e2, t2) {
      for (var n2 = { hours: 1, minutes: 2, seconds: 2, milliseconds: 3 }, r2 = t2 + ""; r2.length < n2[e2]; )
        r2 = "0" + r2;
      return r2;
    }
    var ne = n(2);
    function re(e2, t2) {
      return (re = Object.setPrototypeOf || function(e3, t3) {
        return e3.__proto__ = t3, e3;
      })(e2, t2);
    }
    function oe(e2) {
      if (void 0 === e2)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function ie(e2, t2, n2) {
      return e2 === t2 || (e2.correspondingElement ? e2.correspondingElement.classList.contains(n2) : e2.classList.contains(n2));
    }
    var ae, se, ce = (void 0 === ae && (ae = 0), function() {
      return ++ae;
    }), ue = {}, le = {}, pe = ["touchstart", "touchmove"];
    function fe(e2, t2) {
      var n2 = null;
      return -1 !== pe.indexOf(t2) && se && (n2 = { passive: !e2.props.preventDefault }), n2;
    }
    var de = function(e2, t2) {
      var n2, r2, o2 = e2.displayName || e2.name || "Component";
      return r2 = n2 = function(n3) {
        var r3, i2;
        function a2(e3) {
          var r4;
          return (r4 = n3.call(this, e3) || this).__outsideClickHandler = function(e4) {
            if ("function" != typeof r4.__clickOutsideHandlerProp) {
              var t3 = r4.getInstance();
              if ("function" != typeof t3.props.handleClickOutside) {
                if ("function" != typeof t3.handleClickOutside)
                  throw new Error("WrappedComponent: " + o2 + " lacks a handleClickOutside(event) function for processing outside click events.");
                t3.handleClickOutside(e4);
              } else
                t3.props.handleClickOutside(e4);
            } else
              r4.__clickOutsideHandlerProp(e4);
          }, r4.__getComponentNode = function() {
            var e4 = r4.getInstance();
            return t2 && "function" == typeof t2.setClickOutsideRef ? t2.setClickOutsideRef()(e4) : "function" == typeof e4.setClickOutsideRef ? e4.setClickOutsideRef() : Object(ne.findDOMNode)(e4);
          }, r4.enableOnClickOutside = function() {
            if ("undefined" != typeof document && !le[r4._uid]) {
              void 0 === se && (se = function() {
                if ("undefined" != typeof window && "function" == typeof window.addEventListener) {
                  var e5 = false, t3 = Object.defineProperty({}, "passive", { get: function() {
                    e5 = true;
                  } }), n4 = function() {
                  };
                  return window.addEventListener("testPassiveEventSupport", n4, t3), window.removeEventListener("testPassiveEventSupport", n4, t3), e5;
                }
              }()), le[r4._uid] = true;
              var e4 = r4.props.eventTypes;
              e4.forEach || (e4 = [e4]), ue[r4._uid] = function(e5) {
                var t3;
                null !== r4.componentNode && (r4.props.preventDefault && e5.preventDefault(), r4.props.stopPropagation && e5.stopPropagation(), r4.props.excludeScrollbar && (t3 = e5, document.documentElement.clientWidth <= t3.clientX || document.documentElement.clientHeight <= t3.clientY) || function(e6, t4, n4) {
                  if (e6 === t4)
                    return true;
                  for (; e6.parentNode || e6.host; ) {
                    if (e6.parentNode && ie(e6, t4, n4))
                      return true;
                    e6 = e6.parentNode || e6.host;
                  }
                  return e6;
                }(e5.composed && e5.composedPath && e5.composedPath().shift() || e5.target, r4.componentNode, r4.props.outsideClickIgnoreClass) === document && r4.__outsideClickHandler(e5));
              }, e4.forEach(function(e5) {
                document.addEventListener(e5, ue[r4._uid], fe(oe(r4), e5));
              });
            }
          }, r4.disableOnClickOutside = function() {
            delete le[r4._uid];
            var e4 = ue[r4._uid];
            if (e4 && "undefined" != typeof document) {
              var t3 = r4.props.eventTypes;
              t3.forEach || (t3 = [t3]), t3.forEach(function(t4) {
                return document.removeEventListener(t4, e4, fe(oe(r4), t4));
              }), delete ue[r4._uid];
            }
          }, r4.getRef = function(e4) {
            return r4.instanceRef = e4;
          }, r4._uid = ce(), r4;
        }
        i2 = n3, (r3 = a2).prototype = Object.create(i2.prototype), r3.prototype.constructor = r3, re(r3, i2);
        var c2 = a2.prototype;
        return c2.getInstance = function() {
          if (e2.prototype && !e2.prototype.isReactComponent)
            return this;
          var t3 = this.instanceRef;
          return t3.getInstance ? t3.getInstance() : t3;
        }, c2.componentDidMount = function() {
          if ("undefined" != typeof document && document.createElement) {
            var e3 = this.getInstance();
            if (t2 && "function" == typeof t2.handleClickOutside && (this.__clickOutsideHandlerProp = t2.handleClickOutside(e3), "function" != typeof this.__clickOutsideHandlerProp))
              throw new Error("WrappedComponent: " + o2 + " lacks a function for processing outside click events specified by the handleClickOutside config option.");
            this.componentNode = this.__getComponentNode(), this.props.disableOnClickOutside || this.enableOnClickOutside();
          }
        }, c2.componentDidUpdate = function() {
          this.componentNode = this.__getComponentNode();
        }, c2.componentWillUnmount = function() {
          this.disableOnClickOutside();
        }, c2.render = function() {
          var t3 = this.props;
          t3.excludeScrollbar;
          var n4 = function(e3, t4) {
            if (null == e3)
              return {};
            var n5, r4, o3 = {}, i3 = Object.keys(e3);
            for (r4 = 0; r4 < i3.length; r4++)
              n5 = i3[r4], t4.indexOf(n5) >= 0 || (o3[n5] = e3[n5]);
            return o3;
          }(t3, ["excludeScrollbar"]);
          return e2.prototype && e2.prototype.isReactComponent ? n4.ref = this.getRef : n4.wrappedRef = this.getRef, n4.disableOnClickOutside = this.disableOnClickOutside, n4.enableOnClickOutside = this.enableOnClickOutside, Object(s.createElement)(e2, n4);
        }, a2;
      }(s.Component), n2.displayName = "OnClickOutside(" + o2 + ")", n2.defaultProps = { eventTypes: ["mousedown", "touchstart"], excludeScrollbar: t2 && t2.excludeScrollbar || false, outsideClickIgnoreClass: "ignore-react-onclickoutside", preventDefault: false, stopPropagation: false }, n2.getClass = function() {
        return e2.getClass ? e2.getClass() : e2;
      }, r2;
    };
    function he(e2) {
      return (he = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
        return typeof e3;
      } : function(e3) {
        return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
      })(e2);
    }
    function ye(e2, t2) {
      var n2 = Object.keys(e2);
      if (Object.getOwnPropertySymbols) {
        var r2 = Object.getOwnPropertySymbols(e2);
        t2 && (r2 = r2.filter(function(t3) {
          return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
        })), n2.push.apply(n2, r2);
      }
      return n2;
    }
    function me(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = null != arguments[t2] ? arguments[t2] : {};
        t2 % 2 ? ye(Object(n2), true).forEach(function(t3) {
          _e(e2, t3, n2[t3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ye(Object(n2)).forEach(function(t3) {
          Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
        });
      }
      return e2;
    }
    function ve(e2, t2) {
      if (!(e2 instanceof t2))
        throw new TypeError("Cannot call a class as a function");
    }
    function be(e2, t2) {
      for (var n2 = 0; n2 < t2.length; n2++) {
        var r2 = t2[n2];
        r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, r2.key, r2);
      }
    }
    function Oe(e2, t2, n2) {
      return t2 && be(e2.prototype, t2), n2 && be(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
    }
    function ge(e2, t2) {
      if ("function" != typeof t2 && null !== t2)
        throw new TypeError("Super expression must either be null or a function");
      e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && we(e2, t2);
    }
    function we(e2, t2) {
      return (we = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
        return e3.__proto__ = t3, e3;
      })(e2, t2);
    }
    function De(e2) {
      var t2 = function() {
        if ("undefined" == typeof Reflect || !Reflect.construct)
          return false;
        if (Reflect.construct.sham)
          return false;
        if ("function" == typeof Proxy)
          return true;
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          })), true;
        } catch (e3) {
          return false;
        }
      }();
      return function() {
        var n2, r2 = Pe(e2);
        if (t2) {
          var o2 = Pe(this).constructor;
          n2 = Reflect.construct(r2, arguments, o2);
        } else
          n2 = r2.apply(this, arguments);
        return ke(this, n2);
      };
    }
    function ke(e2, t2) {
      if (t2 && ("object" === he(t2) || "function" == typeof t2))
        return t2;
      if (void 0 !== t2)
        throw new TypeError("Derived constructors may only return object or undefined");
      return Ce(e2);
    }
    function Ce(e2) {
      if (void 0 === e2)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return e2;
    }
    function Pe(e2) {
      return (Pe = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
        return e3.__proto__ || Object.getPrototypeOf(e3);
      })(e2);
    }
    function _e(e2, t2, n2) {
      return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
    }
    n.d(t, "default", function() {
      return Fe;
    });
    var Ee = "years", je = "months", Se = "days", Ve = "time", Te = o.a, Ne = function() {
    }, xe = Te.oneOfType([Te.instanceOf(a.a), Te.instanceOf(Date), Te.string]), Fe = function(e2) {
      ge(n2, e2);
      var t2 = De(n2);
      function n2(e3) {
        var r2;
        return ve(this, n2), _e(Ce(r2 = t2.call(this, e3)), "_renderCalendar", function() {
          var e4 = r2.props, t3 = r2.state, n3 = { viewDate: t3.viewDate.clone(), selectedDate: r2.getSelectedDate(), isValidDate: e4.isValidDate, updateDate: r2._updateDate, navigate: r2._viewNavigate, moment: a.a, showView: r2._showView };
          switch (t3.currentView) {
            case Ee:
              return n3.renderYear = e4.renderYear, c.a.createElement(H, n3);
            case je:
              return n3.renderMonth = e4.renderMonth, c.a.createElement(T, n3);
            case Se:
              return n3.renderDay = e4.renderDay, n3.timeFormat = r2.getFormat("time"), c.a.createElement(g, n3);
            default:
              return n3.dateFormat = r2.getFormat("date"), n3.timeFormat = r2.getFormat("time"), n3.timeConstraints = e4.timeConstraints, n3.setTime = r2._setTime, c.a.createElement(ee, n3);
          }
        }), _e(Ce(r2), "_showView", function(e4, t3) {
          var n3 = (t3 || r2.state.viewDate).clone(), o2 = r2.props.onBeforeNavigate(e4, r2.state.currentView, n3);
          o2 && r2.state.currentView !== o2 && (r2.props.onNavigate(o2), r2.setState({ currentView: o2 }));
        }), _e(Ce(r2), "viewToMethod", { days: "date", months: "month", years: "year" }), _e(Ce(r2), "nextView", { days: "time", months: "days", years: "months" }), _e(Ce(r2), "_updateDate", function(e4) {
          var t3 = r2.state.currentView, n3 = r2.getUpdateOn(r2.getFormat("date")), o2 = r2.state.viewDate.clone();
          o2[r2.viewToMethod[t3]](parseInt(e4.target.getAttribute("data-value"), 10)), "days" === t3 && (o2.month(parseInt(e4.target.getAttribute("data-month"), 10)), o2.year(parseInt(e4.target.getAttribute("data-year"), 10)));
          var i2 = { viewDate: o2 };
          t3 === n3 ? (i2.selectedDate = o2.clone(), i2.inputValue = o2.format(r2.getFormat("datetime")), void 0 === r2.props.open && r2.props.input && r2.props.closeOnSelect && r2._closeCalendar(), r2.props.onChange(o2.clone())) : r2._showView(r2.nextView[t3], o2), r2.setState(i2);
        }), _e(Ce(r2), "_viewNavigate", function(e4, t3) {
          var n3 = r2.state.viewDate.clone();
          n3.add(e4, t3), e4 > 0 ? r2.props.onNavigateForward(e4, t3) : r2.props.onNavigateBack(-e4, t3), r2.setState({ viewDate: n3 });
        }), _e(Ce(r2), "_setTime", function(e4, t3) {
          var n3 = (r2.getSelectedDate() || r2.state.viewDate).clone();
          n3[e4](t3), r2.props.value || r2.setState({ selectedDate: n3, viewDate: n3.clone(), inputValue: n3.format(r2.getFormat("datetime")) }), r2.props.onChange(n3);
        }), _e(Ce(r2), "_openCalendar", function() {
          r2.isOpen() || r2.setState({ open: true }, r2.props.onOpen);
        }), _e(Ce(r2), "_closeCalendar", function() {
          r2.isOpen() && r2.setState({ open: false }, function() {
            r2.props.onClose(r2.state.selectedDate || r2.state.inputValue);
          });
        }), _e(Ce(r2), "_handleClickOutside", function() {
          var e4 = r2.props;
          e4.input && r2.state.open && void 0 === e4.open && e4.closeOnClickOutside && r2._closeCalendar();
        }), _e(Ce(r2), "_onInputFocus", function(e4) {
          r2.callHandler(r2.props.inputProps.onFocus, e4) && r2._openCalendar();
        }), _e(Ce(r2), "_onInputChange", function(e4) {
          if (r2.callHandler(r2.props.inputProps.onChange, e4)) {
            var t3 = e4.target ? e4.target.value : e4, n3 = r2.localMoment(t3, r2.getFormat("datetime")), o2 = { inputValue: t3 };
            n3.isValid() ? (o2.selectedDate = n3, o2.viewDate = n3.clone().startOf("month")) : o2.selectedDate = null, r2.setState(o2, function() {
              r2.props.onChange(n3.isValid() ? n3 : r2.state.inputValue);
            });
          }
        }), _e(Ce(r2), "_onInputKeyDown", function(e4) {
          r2.callHandler(r2.props.inputProps.onKeyDown, e4) && 9 === e4.which && r2.props.closeOnTab && r2._closeCalendar();
        }), _e(Ce(r2), "_onInputClick", function(e4) {
          r2.callHandler(r2.props.inputProps.onClick, e4) && r2._openCalendar();
        }), r2.state = r2.getInitialState(), r2;
      }
      return Oe(n2, [{ key: "render", value: function() {
        return c.a.createElement(Re, { className: this.getClassName(), onClickOut: this._handleClickOutside }, this.renderInput(), c.a.createElement("div", { className: "rdtPicker" }, this.renderView()));
      } }, { key: "renderInput", value: function() {
        if (this.props.input) {
          var e3 = me(me({ type: "text", className: "form-control", value: this.getInputValue() }, this.props.inputProps), {}, { onFocus: this._onInputFocus, onChange: this._onInputChange, onKeyDown: this._onInputKeyDown, onClick: this._onInputClick });
          return this.props.renderInput ? c.a.createElement("div", null, this.props.renderInput(e3, this._openCalendar, this._closeCalendar)) : c.a.createElement("input", e3);
        }
      } }, { key: "renderView", value: function() {
        return this.props.renderView(this.state.currentView, this._renderCalendar);
      } }, { key: "getInitialState", value: function() {
        var e3 = this.props, t3 = this.getFormat("datetime"), n3 = this.parseDate(e3.value || e3.initialValue, t3);
        return this.checkTZ(), { open: !e3.input, currentView: e3.initialViewMode || this.getInitialView(), viewDate: this.getInitialViewDate(n3), selectedDate: n3 && n3.isValid() ? n3 : void 0, inputValue: this.getInitialInputValue(n3) };
      } }, { key: "getInitialViewDate", value: function(e3) {
        var t3, n3 = this.props.initialViewDate;
        if (n3) {
          if ((t3 = this.parseDate(n3, this.getFormat("datetime"))) && t3.isValid())
            return t3;
          Ie('The initialViewDated given "' + n3 + '" is not valid. Using current date instead.');
        } else if (e3 && e3.isValid())
          return e3.clone();
        return this.getInitialDate();
      } }, { key: "getInitialDate", value: function() {
        var e3 = this.localMoment();
        return e3.hour(0).minute(0).second(0).millisecond(0), e3;
      } }, { key: "getInitialView", value: function() {
        var e3 = this.getFormat("date");
        return e3 ? this.getUpdateOn(e3) : Ve;
      } }, { key: "parseDate", value: function(e3, t3) {
        var n3;
        return e3 && "string" == typeof e3 ? n3 = this.localMoment(e3, t3) : e3 && (n3 = this.localMoment(e3)), n3 && !n3.isValid() && (n3 = null), n3;
      } }, { key: "getClassName", value: function() {
        var e3 = "rdt", t3 = this.props, n3 = t3.className;
        return Array.isArray(n3) ? e3 += " " + n3.join(" ") : n3 && (e3 += " " + n3), t3.input || (e3 += " rdtStatic"), this.isOpen() && (e3 += " rdtOpen"), e3;
      } }, { key: "isOpen", value: function() {
        return !this.props.input || (void 0 === this.props.open ? this.state.open : this.props.open);
      } }, { key: "getUpdateOn", value: function(e3) {
        return this.props.updateOnView ? this.props.updateOnView : e3.match(/[lLD]/) ? Se : -1 !== e3.indexOf("M") ? je : -1 !== e3.indexOf("Y") ? Ee : Se;
      } }, { key: "getLocaleData", value: function() {
        var e3 = this.props;
        return this.localMoment(e3.value || e3.defaultValue || /* @__PURE__ */ new Date()).localeData();
      } }, { key: "getDateFormat", value: function() {
        var e3 = this.getLocaleData(), t3 = this.props.dateFormat;
        return true === t3 ? e3.longDateFormat("L") : t3 || "";
      } }, { key: "getTimeFormat", value: function() {
        var e3 = this.getLocaleData(), t3 = this.props.timeFormat;
        return true === t3 ? e3.longDateFormat("LT") : t3 || "";
      } }, { key: "getFormat", value: function(e3) {
        if ("date" === e3)
          return this.getDateFormat();
        if ("time" === e3)
          return this.getTimeFormat();
        var t3 = this.getDateFormat(), n3 = this.getTimeFormat();
        return t3 && n3 ? t3 + " " + n3 : t3 || n3;
      } }, { key: "updateTime", value: function(e3, t3, n3, r2) {
        var o2 = {}, i2 = r2 ? "selectedDate" : "viewDate";
        o2[i2] = this.state[i2].clone()[e3](t3, n3), this.setState(o2);
      } }, { key: "localMoment", value: function(e3, t3, n3) {
        var r2 = null;
        return r2 = (n3 = n3 || this.props).utc ? a.a.utc(e3, t3, n3.strictParsing) : n3.displayTimeZone ? a.a.tz(e3, t3, n3.displayTimeZone) : a()(e3, t3, n3.strictParsing), n3.locale && r2.locale(n3.locale), r2;
      } }, { key: "checkTZ", value: function() {
        var e3 = this.props.displayTimeZone;
        !e3 || this.tzWarning || a.a.tz || (this.tzWarning = true, Ie('displayTimeZone prop with value "' + e3 + '" is used but moment.js timezone is not loaded.', "error"));
      } }, { key: "componentDidUpdate", value: function(e3) {
        if (e3 !== this.props) {
          var t3 = false, n3 = this.props;
          ["locale", "utc", "displayZone", "dateFormat", "timeFormat"].forEach(function(r2) {
            e3[r2] !== n3[r2] && (t3 = true);
          }), t3 && this.regenerateDates(), n3.value && n3.value !== e3.value && this.setViewDate(n3.value), this.checkTZ();
        }
      } }, { key: "regenerateDates", value: function() {
        var e3 = this.props, t3 = this.state.viewDate.clone(), n3 = this.state.selectedDate && this.state.selectedDate.clone();
        e3.locale && (t3.locale(e3.locale), n3 && n3.locale(e3.locale)), e3.utc ? (t3.utc(), n3 && n3.utc()) : e3.displayTimeZone ? (t3.tz(e3.displayTimeZone), n3 && n3.tz(e3.displayTimeZone)) : (t3.locale(), n3 && n3.locale());
        var r2 = { viewDate: t3, selectedDate: n3 };
        n3 && n3.isValid() && (r2.inputValue = n3.format(this.getFormat("datetime"))), this.setState(r2);
      } }, { key: "getSelectedDate", value: function() {
        if (void 0 === this.props.value)
          return this.state.selectedDate;
        var e3 = this.parseDate(this.props.value, this.getFormat("datetime"));
        return !(!e3 || !e3.isValid()) && e3;
      } }, { key: "getInitialInputValue", value: function(e3) {
        var t3 = this.props;
        return t3.inputProps.value ? t3.inputProps.value : e3 && e3.isValid() ? e3.format(this.getFormat("datetime")) : t3.value && "string" == typeof t3.value ? t3.value : t3.initialValue && "string" == typeof t3.initialValue ? t3.initialValue : "";
      } }, { key: "getInputValue", value: function() {
        var e3 = this.getSelectedDate();
        return e3 ? e3.format(this.getFormat("datetime")) : this.state.inputValue;
      } }, { key: "setViewDate", value: function(e3) {
        var t3, n3 = function() {
          return Ie("Invalid date passed to the `setViewDate` method: " + e3);
        };
        return e3 && (t3 = "string" == typeof e3 ? this.localMoment(e3, this.getFormat("datetime")) : this.localMoment(e3)) && t3.isValid() ? void this.setState({ viewDate: t3 }) : n3();
      } }, { key: "navigate", value: function(e3) {
        this._showView(e3);
      } }, { key: "callHandler", value: function(e3, t3) {
        return !e3 || false !== e3(t3);
      } }]), n2;
    }(c.a.Component);
    function Ie(e2, t2) {
      var n2 = "undefined" != typeof window && window.console;
      n2 && (t2 || (t2 = "warn"), n2[t2]("***react-datetime:" + e2));
    }
    _e(Fe, "propTypes", { value: xe, initialValue: xe, initialViewDate: xe, initialViewMode: Te.oneOf([Ee, je, Se, Ve]), onOpen: Te.func, onClose: Te.func, onChange: Te.func, onNavigate: Te.func, onBeforeNavigate: Te.func, onNavigateBack: Te.func, onNavigateForward: Te.func, updateOnView: Te.string, locale: Te.string, utc: Te.bool, displayTimeZone: Te.string, input: Te.bool, dateFormat: Te.oneOfType([Te.string, Te.bool]), timeFormat: Te.oneOfType([Te.string, Te.bool]), inputProps: Te.object, timeConstraints: Te.object, isValidDate: Te.func, open: Te.bool, strictParsing: Te.bool, closeOnSelect: Te.bool, closeOnTab: Te.bool, renderView: Te.func, renderInput: Te.func, renderDay: Te.func, renderMonth: Te.func, renderYear: Te.func }), _e(Fe, "defaultProps", { onOpen: Ne, onClose: Ne, onCalendarOpen: Ne, onCalendarClose: Ne, onChange: Ne, onNavigate: Ne, onBeforeNavigate: function(e2) {
      return e2;
    }, onNavigateBack: Ne, onNavigateForward: Ne, dateFormat: true, timeFormat: true, utc: false, className: "", input: true, inputProps: {}, timeConstraints: {}, isValidDate: function() {
      return true;
    }, strictParsing: true, closeOnSelect: false, closeOnTab: true, closeOnClickOutside: true, renderView: function(e2, t2) {
      return t2();
    } }), _e(Fe, "moment", a.a);
    var Re = de(function(e2) {
      ge(n2, e2);
      var t2 = De(n2);
      function n2() {
        var e3;
        ve(this, n2);
        for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++)
          o2[i2] = arguments[i2];
        return _e(Ce(e3 = t2.call.apply(t2, [this].concat(o2))), "container", c.a.createRef()), e3;
      }
      return Oe(n2, [{ key: "render", value: function() {
        return c.a.createElement("div", { className: this.props.className, ref: this.container }, this.props.children);
      } }, { key: "handleClickOutside", value: function(e3) {
        this.props.onClickOut(e3);
      } }, { key: "setClickOutsideRef", value: function() {
        return this.container.current;
      } }]), n2;
    }(c.a.Component));
  }]);
})(reactDatetime_cjs);
const Datetime = reactDatetime_cjsExports.default;
const reactDatetime = "";
const DateTime$1 = "";
const CssWrapper = styled.div`
  .rdtPicker {
    margin-left: ${(props) => props.offset ? props.offset : "-50px"};
  }
`;
const Label = styled.div`
  font-size: 14px;
  width: fit-content;
  display: ${(props) => props.vertical ? "block" : "inline"};
  // margin: 4px;
`;
function DateTime(props) {
  const [value, setValue] = reactExports.useState(props.value);
  const [lastValid, setLastValid] = reactExports.useState(props.value);
  const inputRef = reactExports.useRef(null);
  const [cursorStart, setCursorStart] = reactExports.useState(0);
  const [cursorEnd, setCursorEnd] = reactExports.useState(0);
  let effectiveWidth = props.width;
  if (props.width == "menu" || !props.width) {
    effectiveWidth = "calc(var(--menuWidth) - 14px)";
  }
  let borderColor = props.alert ? "2px solid var(--mainRed)" : "var(--mainBorder)";
  borderColor = props.disabled ? "2px solid var(--mainGray)" : borderColor;
  let cursorStyle = props.disabled ? "not-allowed" : "auto";
  var containerWidth = effectiveWidth;
  var inputWidth = effectiveWidth;
  if (props.label) {
    inputWidth = "100%";
  }
  reactExports.useEffect(() => {
    setLastValid(props.value);
    setValue(props.value);
  }, [props]);
  reactExports.useEffect(() => {
    inputRef.current.selectionStart = cursorStart;
    inputRef.current.selectionEnd = cursorEnd;
  });
  let placeholder = "";
  if (props.datePicker !== false) {
    placeholder = "mm/dd/yyyy";
  }
  if (props.timePicker !== false && props.precision === "seconds") {
    placeholder += " hh:mm:ss";
  } else if (props.timePicker !== false) {
    placeholder += " hh:mm";
  }
  placeholder = props.placeholder ? props.placeholder : placeholder;
  let inputProps = {
    // disabled: props.disabled === true ? true : false,
    placeholder
  };
  const renderInput = (propsRI, openCalendar, closeCalendar) => {
    return /* @__PURE__ */ jsxs("div", { style: { width: containerWidth }, children: [
      props.label ? /* @__PURE__ */ jsx(Label, { id: "checkbox-label", vertical: props.vertical, children: props.label }) : null,
      /* @__PURE__ */ jsx(
        "input",
        {
          ...propsRI,
          style: {
            border: borderColor,
            cursor: cursorStyle,
            width: inputWidth,
            color: "var(--canvastext)",
            backgroundColor: "var(--canvas)",
            ...props.style
          },
          ref: inputRef,
          "aria-labelledby": "checkbox-label",
          "aria-haspopup": "true",
          "data-test": props.dataTest,
          onChange: (e) => {
            setCursorStart(e.target.selectionStart);
            setCursorEnd(e.target.selectionEnd);
            propsRI.onChange(e);
          },
          onClick: (e) => {
            propsRI.onClick(e);
          },
          onKeyDown: (e) => {
            if (props.onKeyDown) {
              props.onKeyDown(e);
            }
            if (e.key === "Enter") {
              closeCalendar();
              e.target.blur();
            }
          }
        }
      )
    ] });
  };
  if (props.disabled) {
    return /* @__PURE__ */ jsxs("div", { style: { width: containerWidth }, children: [
      props.label ? /* @__PURE__ */ jsx(Label, { id: "checkbox-label", vertical: props.vertical, children: props.label }) : null,
      /* @__PURE__ */ jsx(
        "input",
        {
          ref: inputRef,
          onClick: props.disabledOnClick,
          value: props.disabledText,
          readOnly: true,
          "data-test": props.dataTest,
          style: {
            cursor: "not-allowed",
            //cs color: 'var(--canvastext)',
            color: "var(--canvastext)",
            backgroundColor: "var(--canvas)",
            height: "18px",
            width: inputWidth,
            border: "2px solid var(--mainGray)",
            borderRadius: "var(--mainBorderRadius)",
            ...props.style
          }
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx(CssWrapper, { offset: props.offset, children: /* @__PURE__ */ jsx(
    Datetime,
    {
      renderInput,
      value,
      dateFormat: props.datePicker === false ? false : true,
      timeFormat: props.precision === "seconds" && props.timePicker !== false ? "hh:mm:ss a" : props.timePicker === false ? false : true,
      inputProps,
      onChange: (dateObjectOrString) => {
        setValue(dateObjectOrString);
        if (props.onChange) {
          props.onChange({
            valid: typeof dateObjectOrString !== "string",
            value: dateObjectOrString
          });
        }
      },
      onClose: (_) => {
        let valid = typeof value !== "string";
        if (valid) {
          setLastValid(value);
        } else {
          setValue(lastValid);
        }
        if (props.onBlur) {
          props.onBlur({
            valid,
            value
          });
        }
      }
    }
  ) });
}
export {
  DateTime as D
};
