/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-objectfit-picture-pointerevents-postmessage-sizes-srcset-touchevents-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
! function(e, t, n) {
  function r(e, t) {
    return typeof e === t
  }

  function o() {
    var e, t, n, o, i, s, a;
    for (var u in C)
      if (C.hasOwnProperty(u)) {
        if (e = [], t = C[u], t.name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length))
          for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());
        for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) s = e[i], a = s.split("."), 1 === a.length ? Modernizr[a[0]] = o : (!Modernizr[a[0]] || Modernizr[a[0]] instanceof Boolean || (Modernizr[a[0]] = new Boolean(Modernizr[a[0]])), Modernizr[a[0]][a[1]] = o), b.push((o ? "" : "no-") + a.join("-"))
      }
  }

  function i(e) {
    var t = T.className,
      n = Modernizr._config.classPrefix || "";
    if (E && (t = t.baseVal), Modernizr._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");
      t = t.replace(r, "$1" + n + "js$2")
    }
    Modernizr._config.enableClasses && (t += " " + n + e.join(" " + n), E ? T.className.baseVal = t : T.className = t)
  }

  function s(e, t) {
    if ("object" == typeof e)
      for (var n in e) z(e, n) && s(n, e[n]);
    else {
      e = e.toLowerCase();
      var r = e.split("."),
        o = Modernizr[r[0]];
      if (2 == r.length && (o = o[r[1]]), "undefined" != typeof o) return Modernizr;
      t = "function" == typeof t ? t() : t, 1 == r.length ? Modernizr[r[0]] = t : (!Modernizr[r[0]] || Modernizr[r[0]] instanceof Boolean || (Modernizr[r[0]] = new Boolean(Modernizr[r[0]])), Modernizr[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), Modernizr._trigger(e, t)
    }
    return Modernizr
  }

  function a() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : E ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments)
  }

  function u() {
    var e = t.body;
    return e || (e = a(E ? "svg" : "body"), e.fake = !0), e
  }

  function l(e, n, r, o) {
    var i, s, l, f, c = "modernizr",
      d = a("div"),
      p = u();
    if (parseInt(r, 10))
      for (; r--;) l = a("div"), l.id = o ? o[r] : c + (r + 1), d.appendChild(l);
    return i = a("style"), i.type = "text/css", i.id = "s" + c, (p.fake ? p : d).appendChild(i), p.appendChild(d), i.styleSheet ? i.styleSheet.cssText = e : i.appendChild(t.createTextNode(e)), d.id = c, p.fake && (p.style.background = "", p.style.overflow = "hidden", f = T.style.overflow, T.style.overflow = "hidden", T.appendChild(p)), s = n(d, e), p.fake ? (p.parentNode.removeChild(p), T.style.overflow = f, T.offsetHeight) : d.parentNode.removeChild(d), !!s
  }

  function f(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function c(e) {
    return e.replace(/([a-z])-([a-z])/g, function(e, t, n) {
      return t + n.toUpperCase()
    }).replace(/^-/, "")
  }

  function d(e, t) {
    return function() {
      return e.apply(t, arguments)
    }
  }

  function p(e, t, n) {
    var o;
    for (var i in e)
      if (e[i] in t) return n === !1 ? e[i] : (o = t[e[i]], r(o, "function") ? d(o, n || t) : o);
    return !1
  }

  function m(e) {
    return e.replace(/([A-Z])/g, function(e, t) {
      return "-" + t.toLowerCase()
    }).replace(/^ms-/, "-ms-")
  }

  function v(t, n, r) {
    var o;
    if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);
      var i = e.console;
      if (null !== o) r && (o = o.getPropertyValue(r));
      else if (i) {
        var s = i.error ? "error" : "log";
        i[s].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate")
      }
    } else o = !n && t.currentStyle && t.currentStyle[r];
    return o
  }

  function h(t, r) {
    var o = t.length;
    if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;)
        if (e.CSS.supports(m(t[o]), r)) return !0;
      return !1
    }
    if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + m(t[o]) + ":" + r + ")");
      return i = i.join(" or "), l("@supports (" + i + ") { #modernizr { position: absolute; } }", function(e) {
        return "absolute" == v(e, null, "position")
      })
    }
    return n
  }

  function A(e, t, o, i) {
    function s() {
      l && (delete M.style, delete M.modElem)
    }
    if (i = r(i, "undefined") ? !1 : i, !r(o, "undefined")) {
      var u = h(e, o);
      if (!r(u, "undefined")) return u
    }
    for (var l, d, p, m, v, A = ["modernizr", "tspan", "samp"]; !M.style && A.length;) l = !0, M.modElem = a(A.shift()), M.style = M.modElem.style;
    for (p = e.length, d = 0; p > d; d++)
      if (m = e[d], v = M.style[m], f(m, "-") && (m = c(m)), M.style[m] !== n) {
        if (i || r(o, "undefined")) return s(), "pfx" == t ? m : !0;
        try {
          M.style[m] = o
        } catch (g) {}
        if (M.style[m] != v) return s(), "pfx" == t ? m : !0
      } return s(), !1
  }

  function g(e, t, n, o, i) {
    var s = e.charAt(0).toUpperCase() + e.slice(1),
      a = (e + " " + R.join(s + " ") + s).split(" ");
    return r(t, "string") || r(t, "undefined") ? A(a, t, o, i) : (a = (e + " " + k.join(s + " ") + s).split(" "), p(a, t, n))
  }

  function y(e, t, r) {
    return g(e, n, n, t, r)
  }
  var b = [],
    C = [],
    w = {
      _version: "3.5.0",
      _config: {
        classPrefix: "",
        enableClasses: !0,
        enableJSClass: !0,
        usePrefixes: !0
      },
      _q: [],
      on: function(e, t) {
        var n = this;
        setTimeout(function() {
          t(n[e])
        }, 0)
      },
      addTest: function(e, t, n) {
        C.push({
          name: e,
          fn: t,
          options: n
        })
      },
      addAsyncTest: function(e) {
        C.push({
          name: null,
          fn: e
        })
      }
    },
    Modernizr = function() {};
  Modernizr.prototype = w, Modernizr = new Modernizr, Modernizr.addTest("customelements", "customElements" in e), Modernizr.addTest("history", function() {
    var t = navigator.userAgent;
    return -1 === t.indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone") || "file:" === location.protocol ? e.history && "pushState" in e.history : !1
  }), Modernizr.addTest("postmessage", "postMessage" in e);
  var x = !1;
  try {
    x = "WebSocket" in e && 2 === e.WebSocket.CLOSING
  } catch (S) {}
  Modernizr.addTest("websockets", x), Modernizr.addTest("picture", "HTMLPictureElement" in e), Modernizr.addTest("webworkers", "Worker" in e);
  var _ = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];
  w._prefixes = _;
  var T = t.documentElement,
    E = "svg" === T.nodeName.toLowerCase(),
    P = "Moz O ms Webkit",
    k = w._config.usePrefixes ? P.toLowerCase().split(" ") : [];
  w._domPrefixes = k;
  var z;
  ! function() {
    var e = {}.hasOwnProperty;
    z = r(e, "undefined") || r(e.call, "undefined") ? function(e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(t, n) {
      return e.call(t, n)
    }
  }(), w._l = {}, w.on = function(e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), Modernizr.hasOwnProperty(e) && setTimeout(function() {
      Modernizr._trigger(e, Modernizr[e])
    }, 0)
  }, w._trigger = function(e, t) {
    if (this._l[e]) {
      var n = this._l[e];
      setTimeout(function() {
        var e, r;
        for (e = 0; e < n.length; e++)(r = n[e])(t)
      }, 0), delete this._l[e]
    }
  }, Modernizr._q.push(function() {
    w.addTest = s
  });
  var O = function() {
    function e(e, t) {
      var o;
      return e ? (t && "string" != typeof t || (t = a(t || "div")), e = "on" + e, o = e in t, !o && r && (t.setAttribute || (t = a("div")), t.setAttribute(e, ""), o = "function" == typeof t[e], t[e] !== n && (t[e] = n), t.removeAttribute(e)), o) : !1
    }
    var r = !("onblur" in t.documentElement);
    return e
  }();
  w.hasEvent = O, Modernizr.addTest("pointerevents", function() {
    var e = !1,
      t = k.length;
    for (e = Modernizr.hasEvent("pointerdown"); t-- && !e;) O(k[t] + "pointerdown") && (e = !0);
    return e
  });
  var B = function(e, t) {
    var n = !1,
      r = a("div"),
      o = r.style;
    if (e in o) {
      var i = k.length;
      for (o[e] = t, n = o[e]; i-- && !n;) o[e] = "-" + k[i] + "-" + t, n = o[e]
    }
    return "" === n && (n = !1), n
  };
  w.prefixedCSSValue = B, Modernizr.addTest("webgl", function() {
    var t = a("canvas"),
      n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";
    return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e
  }), Modernizr.addAsyncTest(function() {
    var e, t, n, r = a("img"),
      o = "sizes" in r;
    !o && "srcset" in r ? (t = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==", e = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==", n = function() {
      s("sizes", 2 == r.width)
    }, r.onload = n, r.onerror = n, r.setAttribute("sizes", "9px"), r.srcset = e + " 1w," + t + " 8w", r.src = e) : s("sizes", o)
  }), Modernizr.addTest("srcset", "srcset" in a("img"));
  var j = function() {
    var t = e.matchMedia || e.msMatchMedia;
    return t ? function(e) {
      var n = t(e);
      return n && n.matches || !1
    } : function(t) {
      var n = !1;
      return l("@media " + t + " { #modernizr { position: absolute; } }", function(t) {
        n = "absolute" == (e.getComputedStyle ? e.getComputedStyle(t, null) : t.currentStyle).position
      }), n
    }
  }();
  w.mq = j;
  var L = w.testStyles = l;
  Modernizr.addTest("touchevents", function() {
    var n;
    if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;
    else {
      var r = ["@media (", _.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");
      L(r, function(e) {
        n = 9 === e.offsetTop
      })
    }
    return n
  });
  var R = w._config.usePrefixes ? P.split(" ") : [];
  w._cssomPrefixes = R;
  var N = {
    elem: a("modernizr")
  };
  Modernizr._q.push(function() {
    delete N.elem
  });
  var M = {
    style: N.elem.style
  };
  Modernizr._q.unshift(function() {
    delete M.style
  });
  w.testProp = function(e, t, r) {
    return A([e], n, t, r)
  };
  w.testAllProps = g, w.testAllProps = y, Modernizr.addTest("cssanimations", y("animationName", "a", !0)),
    function() {
      Modernizr.addTest("csscolumns", function() {
        var e = !1,
          t = y("columnCount");
        try {
          e = !!t, e && (e = new Boolean(e))
        } catch (n) {}
        return e
      });
      for (var e, t, n = ["Width", "Span", "Fill", "Gap", "Rule", "RuleColor", "RuleStyle", "RuleWidth", "BreakBefore", "BreakAfter", "BreakInside"], r = 0; r < n.length; r++) e = n[r].toLowerCase(), t = y("column" + n[r]), ("breakbefore" === e || "breakafter" === e || "breakinside" == e) && (t = t || y(n[r])), Modernizr.addTest("csscolumns." + e, t)
    }(), Modernizr.addTest("flexbox", y("flexBasis", "1px", !0));
  var W = function(t) {
    var r, o = _.length,
      i = e.CSSRule;
    if ("undefined" == typeof i) return n;
    if (!t) return !1;
    if (t = t.replace(/^@/, ""), r = t.replace(/-/g, "_").toUpperCase() + "_RULE", r in i) return "@" + t;
    for (var s = 0; o > s; s++) {
      var a = _[s],
        u = a.toUpperCase() + "_" + r;
      if (u in i) return "@-" + a.toLowerCase() + "-" + t
    }
    return !1
  };
  w.atRule = W;
  var q = w.prefixed = function(e, t, n) {
    return 0 === e.indexOf("@") ? W(e) : (-1 != e.indexOf("-") && (e = c(e)), t ? g(e, t, n) : g(e, "pfx"))
  };
  Modernizr.addTest("objectfit", !!q("objectFit"), {
    aliases: ["object-fit"]
  }), o(), i(b), delete w.addTest, delete w.addAsyncTest;
  for (var I = 0; I < Modernizr._q.length; I++) Modernizr._q[I]();
  e.Modernizr = Modernizr
}(window, document);
