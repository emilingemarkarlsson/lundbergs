function documentReadyFunctions(a) {
  "use strict";
  if ($("span.hidden-email", a).activateEmailLinks({
      salt: "NO_HAM"
    }), $("a:external", a).attr("rel", "external"), $(".exp-section", a).collapsableSection({
      headingSelector: "h2:first",
      contentSelector: ".exp-section-content",
      contentIdBase: "exp-section-",
      collapsedClass: "collapsed",
      expandedClass: "expanded"
    }), $("select:not([multiple])", a).netrCustomSelect(), $(".open-in-dialog", a).each(function() {
      var a = $(this);
      a.netrdialog({
        closeText: netr.string.translate("dialog.close"),
        errorMessage: netr.string.translate("dialog.errorMessage"),
        hijackForms: !0,
        onlyDesktop: a.data("dialog-only-desktop") === !0,
        extraClass: !!a.data("dialog-extra-class") && a.data("dialog-extra-class"),
        callback: function(a) {
          documentReadyFunctions(a)
        }
      })
    }), $(".tabbed-module", a).each(function() {
      var a = $(this);
      a.netrtabbedmodule({
        moduleSelector: ".tab-content",
        addToHistory: 0 === a.parents(".dialog").length,
        headingSelector: ".tab-heading",
        contentSelector: ".tab-content",
        activeSelector: ".tab-active",
        selectedClass: "tab-selected"
      })
    }), "function" == typeof $.fn.instaList && "function" == typeof $.fn.instaPost && ($(".insta-list", a).instaList(), $(".insta-post", a).instaPost()), $(".map", a).each(function() {
      var a = $(this);
      $.netrGoogleMap.loadAPI().then(function() {
        a.netrGoogleMap({
          vcards: a.next().find(".vcard")
        })
      })
    }), $(".has-datepicker", a).each(function() {
      var a = $(this);
      a.datepicker(netr.string.translate("datepicker"))
    }), Modernizr.touch || $(".title-tooltip", a).tooltip({
      position: {
        my: "bottom-15",
        at: "top"
      },
      show: 200,
      hide: 200
    }), $(".rating", a).each(function() {
      var a = $(this);
      a.find(".rating-tool").length || a.find("input").netrRatingTool()
    }), $('a[href*="//www.youtube.com"]', a).youtubethumb(), $("table", a).tablefunctions(), $("[data-toggles]", a).elementToggler(a), $("a[data-transfer-dialog]").click(function(a) {
      a.preventDefault(), a.stopPropagation();
      var b = $(this),
        c = new netr.URI(b.attr("href")),
        d = b.data("transfer-dialog"),
        e = $.netrdialog();
      e.openTransferDialog(c, d)
    }), "pt-br" === $("html").attr("lang").toLowerCase()) {
    var b = new netr.URI(window.location.href);
    "www.sandvik" !== b.domain.slice(0, 11) && "sandvik" !== b.domain.slice(0, 7) || $("a").each(function() {
      var a = $(this),
        b = new netr.URI(a.attr("href"));
      "undefined" != typeof b.path && (b.path.toLowerCase().indexOf("sandvik.com/en/") > -1 || "/en/" === b.path.substr(0, 4).toLowerCase()) && a.click(function(a) {
        a.preventDefault(), a.stopPropagation();
        var c = $.netrdialog();
        c.openTransferDialog(b, "global Sandvik")
      })
    })
  }
  $(window).on("load resize orientationchange open.netrdialog", function() {
    $("table", a).each(function() {
      var a = $(this);
      a.is(":visible") && a.tablescroll()
    })
  });
  var c = $(".application-search form");
  c.instantsearch({
    inputSelector: "input[type=search]:first",
    searchResultsUrl: c.attr("data-instant-search-url"),
    hijackSubmit: !0
  }), $("[data-popover-trigger]", a).popoverTrigger()
}! function(a, b) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
    if (!a.document) throw new Error("jQuery requires a window with a document");
    return b(a)
  } : b(a)
}("undefined" != typeof window ? window : this, function(a, b) {
  function c(a) {
    var b = a.length,
      c = ea.type(a);
    return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
  }

  function d(a, b, c) {
    if (ea.isFunction(b)) return ea.grep(a, function(a, d) {
      return !!b.call(a, d, a) !== c
    });
    if (b.nodeType) return ea.grep(a, function(a) {
      return a === b !== c
    });
    if ("string" == typeof b) {
      if (ma.test(b)) return ea.filter(b, a, c);
      b = ea.filter(b, a)
    }
    return ea.grep(a, function(a) {
      return ea.inArray(a, b) >= 0 !== c
    })
  }

  function e(a, b) {
    do a = a[b]; while (a && 1 !== a.nodeType);
    return a
  }

  function f(a) {
    var b = ua[a] = {};
    return ea.each(a.match(ta) || [], function(a, c) {
      b[c] = !0
    }), b
  }

  function g() {
    oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
  }

  function h() {
    (oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
  }

  function i(a, b, c) {
    if (void 0 === c && 1 === a.nodeType) {
      var d = "data-" + b.replace(za, "-$1").toLowerCase();
      if (c = a.getAttribute(d), "string" == typeof c) {
        try {
          c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c)
        } catch (a) {}
        ea.data(a, b, c)
      } else c = void 0
    }
    return c
  }

  function j(a) {
    var b;
    for (b in a)
      if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
    return !0
  }

  function k(a, b, c, d) {
    if (ea.acceptData(a)) {
      var e, f, g = ea.expando,
        h = a.nodeType,
        i = h ? ea.cache : a,
        j = h ? a[g] : a[g] && g;
      if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g), i[j] || (i[j] = h ? {} : {
        toJSON: ea.noop
      }), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
    }
  }

  function l(a, b, c) {
    if (ea.acceptData(a)) {
      var d, e, f = a.nodeType,
        g = f ? ea.cache : a,
        h = f ? a[ea.expando] : ea.expando;
      if (g[h]) {
        if (b && (d = c ? g[h] : g[h].data)) {
          ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
          for (; e--;) delete d[b[e]];
          if (c ? !j(d) : !ea.isEmptyObject(d)) return
        }(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
      }
    }
  }

  function m() {
    return !0
  }

  function n() {
    return !1
  }

  function o() {
    try {
      return oa.activeElement
    } catch (a) {}
  }

  function p(a) {
    var b = Ka.split("|"),
      c = a.createDocumentFragment();
    if (c.createElement)
      for (; b.length;) c.createElement(b.pop());
    return c
  }

  function q(a, b) {
    var c, d, e = 0,
      f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
    if (!f)
      for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
    return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
  }

  function r(a) {
    Ea.test(a.type) && (a.defaultChecked = a.checked)
  }

  function s(a, b) {
    return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
  }

  function t(a) {
    return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
  }

  function u(a) {
    var b = Va.exec(a.type);
    return b ? a.type = b[1] : a.removeAttribute("type"), a
  }

  function v(a, b) {
    for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
  }

  function w(a, b) {
    if (1 === b.nodeType && ea.hasData(a)) {
      var c, d, e, f = ea._data(a),
        g = ea._data(b, f),
        h = f.events;
      if (h) {
        delete g.handle, g.events = {};
        for (c in h)
          for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
      }
      g.data && (g.data = ea.extend({}, g.data))
    }
  }

  function x(a, b) {
    var c, d, e;
    if (1 === b.nodeType) {
      if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
        e = ea._data(b);
        for (d in e.events) ea.removeEvent(b, d, e.handle);
        b.removeAttribute(ea.expando)
      }
      "script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
    }
  }

  function y(b, c) {
    var d, e = ea(c.createElement(b)).appendTo(c.body),
      f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
    return e.detach(), f
  }

  function z(a) {
    var b = oa,
      c = _a[a];
    return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
  }

  function A(a, b) {
    return {
      get: function() {
        var c = a();
        if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
      }
    }
  }

  function B(a, b) {
    if (b in a) return b;
    for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
      if (b = mb[e] + c, b in a) return b;
    return d
  }

  function C(a, b) {
    for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
    for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
    return a
  }

  function D(a, b, c) {
    var d = ib.exec(b);
    return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
  }

  function E(a, b, c, d, e) {
    for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
    return g
  }

  function F(a, b, c) {
    var d = !0,
      e = "width" === b ? a.offsetWidth : a.offsetHeight,
      f = ab(a),
      g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
    if (0 >= e || null == e) {
      if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
      d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
    }
    return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
  }

  function G(a, b, c, d, e) {
    return new G.prototype.init(a, b, c, d, e)
  }

  function H() {
    return setTimeout(function() {
      nb = void 0
    }), nb = ea.now()
  }

  function I(a, b) {
    var c, d = {
        height: a
      },
      e = 0;
    for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
    return b && (d.opacity = d.width = a), d
  }

  function J(a, b, c) {
    for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
      if (d = e[f].call(c, b, a)) return d
  }

  function K(a, b, c) {
    var d, e, f, g, h, i, j, k, l = this,
      m = {},
      n = a.style,
      o = a.nodeType && Ca(a),
      p = ea._data(a, "fxshow");
    c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() {
      h.unqueued || i()
    }), h.unqueued++, l.always(function() {
      l.always(function() {
        h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
      })
    })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function() {
      n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
    }));
    for (d in b)
      if (e = b[d], pb.exec(e)) {
        if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
          if ("show" !== e || !p || void 0 === p[d]) continue;
          o = !0
        }
        m[d] = p && p[d] || ea.style(a, d)
      } else j = void 0;
    if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
    else {
      p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function() {
        ea(a).hide()
      }), l.done(function() {
        var b;
        ea._removeData(a, "fxshow");
        for (b in m) ea.style(a, b, m[b])
      });
      for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
    }
  }

  function L(a, b) {
    var c, d, e, f, g;
    for (c in a)
      if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
        f = g.expand(f), delete a[d];
        for (c in f) c in a || (a[c] = f[c], b[c] = e)
      } else b[d] = e
  }

  function M(a, b, c) {
    var d, e, f = 0,
      g = sb.length,
      h = ea.Deferred().always(function() {
        delete i.elem
      }),
      i = function() {
        if (e) return !1;
        for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
        return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
      },
      j = h.promise({
        elem: a,
        props: ea.extend({}, b),
        opts: ea.extend(!0, {
          specialEasing: {}
        }, c),
        originalProperties: b,
        originalOptions: c,
        startTime: nb || H(),
        duration: c.duration,
        tweens: [],
        createTween: function(b, c) {
          var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
          return j.tweens.push(d), d
        },
        stop: function(b) {
          var c = 0,
            d = b ? j.tweens.length : 0;
          if (e) return this;
          for (e = !0; d > c; c++) j.tweens[c].run(1);
          return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
        }
      }),
      k = j.props;
    for (L(k, j.opts.specialEasing); g > f; f++)
      if (d = sb[f].call(j, a, k, j.opts)) return d;
    return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
      elem: a,
      anim: j,
      queue: j.opts.queue
    })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
  }

  function N(a) {
    return function(b, c) {
      "string" != typeof b && (c = b, b = "*");
      var d, e = 0,
        f = b.toLowerCase().match(ta) || [];
      if (ea.isFunction(c))
        for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
    }
  }

  function O(a, b, c, d) {
    function e(h) {
      var i;
      return f[h] = !0, ea.each(a[h] || [], function(a, h) {
        var j = h(b, c, d);
        return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
      }), i
    }
    var f = {},
      g = a === Rb;
    return e(b.dataTypes[0]) || !f["*"] && e("*")
  }

  function P(a, b) {
    var c, d, e = ea.ajaxSettings.flatOptions || {};
    for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
    return c && ea.extend(!0, a, c), a
  }

  function Q(a, b, c) {
    for (var d, e, f, g, h = a.contents, i = a.dataTypes;
      "*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
    if (e)
      for (g in h)
        if (h[g] && h[g].test(e)) {
          i.unshift(g);
          break
        }
    if (i[0] in c) f = i[0];
    else {
      for (g in c) {
        if (!i[0] || a.converters[g + " " + i[0]]) {
          f = g;
          break
        }
        d || (d = g)
      }
      f = f || d
    }
    return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
  }

  function R(a, b, c, d) {
    var e, f, g, h, i, j = {},
      k = a.dataTypes.slice();
    if (k[1])
      for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
    for (f = k.shift(); f;)
      if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
        if ("*" === f) f = i;
        else if ("*" !== i && i !== f) {
      if (g = j[i + " " + f] || j["* " + f], !g)
        for (e in j)
          if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
            g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
            break
          }
      if (g !== !0)
        if (g && a.throws) b = g(b);
        else try {
          b = g(b)
        } catch (a) {
          return {
            state: "parsererror",
            error: g ? a : "No conversion from " + i + " to " + f
          }
        }
    }
    return {
      state: "success",
      data: b
    }
  }

  function S(a, b, c, d) {
    var e;
    if (ea.isArray(b)) ea.each(b, function(b, e) {
      c || Ub.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
    });
    else if (c || "object" !== ea.type(b)) d(a, b);
    else
      for (e in b) S(a + "[" + e + "]", b[e], c, d)
  }

  function T() {
    try {
      return new a.XMLHttpRequest
    } catch (a) {}
  }

  function U() {
    try {
      return new a.ActiveXObject("Microsoft.XMLHTTP")
    } catch (a) {}
  }

  function V(a) {
    return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
  }
  var W = [],
    X = W.slice,
    Y = W.concat,
    Z = W.push,
    $ = W.indexOf,
    _ = {},
    aa = _.toString,
    ba = _.hasOwnProperty,
    ca = {},
    da = "1.11.1",
    ea = function(a, b) {
      return new ea.fn.init(a, b)
    },
    fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    ga = /^-ms-/,
    ha = /-([\da-z])/gi,
    ia = function(a, b) {
      return b.toUpperCase()
    };
  ea.fn = ea.prototype = {
    jquery: da,
    constructor: ea,
    selector: "",
    length: 0,
    toArray: function() {
      return X.call(this)
    },
    get: function(a) {
      return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
    },
    pushStack: function(a) {
      var b = ea.merge(this.constructor(), a);
      return b.prevObject = this, b.context = this.context, b
    },
    each: function(a, b) {
      return ea.each(this, a, b)
    },
    map: function(a) {
      return this.pushStack(ea.map(this, function(b, c) {
        return a.call(b, c, b)
      }))
    },
    slice: function() {
      return this.pushStack(X.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(a) {
      var b = this.length,
        c = +a + (0 > a ? b : 0);
      return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: Z,
    sort: W.sort,
    splice: W.splice
  }, ea.extend = ea.fn.extend = function() {
    var a, b, c, d, e, f, g = arguments[0] || {},
      h = 1,
      i = arguments.length,
      j = !1;
    for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
      if (null != (e = arguments[h]))
        for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
    return g
  }, ea.extend({
    expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(a) {
      throw new Error(a)
    },
    noop: function() {},
    isFunction: function(a) {
      return "function" === ea.type(a)
    },
    isArray: Array.isArray || function(a) {
      return "array" === ea.type(a)
    },
    isWindow: function(a) {
      return null != a && a == a.window
    },
    isNumeric: function(a) {
      return !ea.isArray(a) && a - parseFloat(a) >= 0
    },
    isEmptyObject: function(a) {
      var b;
      for (b in a) return !1;
      return !0
    },
    isPlainObject: function(a) {
      var b;
      if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
      try {
        if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
      } catch (a) {
        return !1
      }
      if (ca.ownLast)
        for (b in a) return ba.call(a, b);
      for (b in a);
      return void 0 === b || ba.call(a, b)
    },
    type: function(a) {
      return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
    },
    globalEval: function(b) {
      b && ea.trim(b) && (a.execScript || function(b) {
        a.eval.call(a, b)
      })(b)
    },
    camelCase: function(a) {
      return a.replace(ga, "ms-").replace(ha, ia)
    },
    nodeName: function(a, b) {
      return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
    },
    each: function(a, b, d) {
      var e, f = 0,
        g = a.length,
        h = c(a);
      if (d) {
        if (h)
          for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
        else
          for (f in a)
            if (e = b.apply(a[f], d), e === !1) break
      } else if (h)
        for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
      else
        for (f in a)
          if (e = b.call(a[f], f, a[f]), e === !1) break;
      return a
    },
    trim: function(a) {
      return null == a ? "" : (a + "").replace(fa, "")
    },
    makeArray: function(a, b) {
      var d = b || [];
      return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
    },
    inArray: function(a, b, c) {
      var d;
      if (b) {
        if ($) return $.call(b, a, c);
        for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
          if (c in b && b[c] === a) return c
      }
      return -1
    },
    merge: function(a, b) {
      for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
      if (c !== c)
        for (; void 0 !== b[d];) a[e++] = b[d++];
      return a.length = e, a
    },
    grep: function(a, b, c) {
      for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
      return e
    },
    map: function(a, b, d) {
      var e, f = 0,
        g = a.length,
        h = c(a),
        i = [];
      if (h)
        for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
      else
        for (f in a) e = b(a[f], f, d), null != e && i.push(e);
      return Y.apply([], i)
    },
    guid: 1,
    proxy: function(a, b) {
      var c, d, e;
      return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function() {
        return a.apply(b || this, c.concat(X.call(arguments)))
      }, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
    },
    now: function() {
      return +new Date
    },
    support: ca
  }), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
    _["[object " + b + "]"] = b.toLowerCase()
  });
  var ja = function(a) {
    function b(a, b, c, d) {
      var e, f, g, h, i, j, l, n, o, p;
      if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], !a || "string" != typeof a) return c;
      if (1 !== (h = b.nodeType) && 9 !== h) return [];
      if (I && !d) {
        if (e = sa.exec(a))
          if (g = e[1]) {
            if (9 === h) {
              if (f = b.getElementById(g), !f || !f.parentNode) return c;
              if (f.id === g) return c.push(f), c
            } else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
          } else {
            if (e[2]) return _.apply(c, b.getElementsByTagName(a)), c;
            if ((g = e[3]) && v.getElementsByClassName && b.getElementsByClassName) return _.apply(c, b.getElementsByClassName(g)), c
          }
        if (v.qsa && (!J || !J.test(a))) {
          if (n = l = N, o = b, p = 9 === h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
            for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
            o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
          }
          if (p) try {
            return _.apply(c, o.querySelectorAll(p)), c
          } catch (a) {} finally {
            l || b.removeAttribute("id")
          }
        }
      }
      return B(a.replace(ia, "$1"), b, c, d)
    }

    function c() {
      function a(c, d) {
        return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
      }
      var b = [];
      return a
    }

    function d(a) {
      return a[N] = !0, a
    }

    function e(a) {
      var b = G.createElement("div");
      try {
        return !!a(b)
      } catch (a) {
        return !1
      } finally {
        b.parentNode && b.parentNode.removeChild(b), b = null
      }
    }

    function f(a, b) {
      for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
    }

    function g(a, b) {
      var c = b && a,
        d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || W) - (~a.sourceIndex || W);
      if (d) return d;
      if (c)
        for (; c = c.nextSibling;)
          if (c === b) return -1;
      return a ? 1 : -1
    }

    function h(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return "input" === c && b.type === a
      }
    }

    function i(a) {
      return function(b) {
        var c = b.nodeName.toLowerCase();
        return ("input" === c || "button" === c) && b.type === a
      }
    }

    function j(a) {
      return d(function(b) {
        return b = +b, d(function(c, d) {
          for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
        })
      })
    }

    function k(a) {
      return a && typeof a.getElementsByTagName !== V && a
    }

    function l() {}

    function m(a) {
      for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
      return d
    }

    function n(a, b, c) {
      var d = b.dir,
        e = c && "parentNode" === d,
        f = Q++;
      return b.first ? function(b, c, f) {
        for (; b = b[d];)
          if (1 === b.nodeType || e) return a(b, c, f)
      } : function(b, c, g) {
        var h, i, j = [P, f];
        if (g) {
          for (; b = b[d];)
            if ((1 === b.nodeType || e) && a(b, c, g)) return !0
        } else
          for (; b = b[d];)
            if (1 === b.nodeType || e) {
              if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
              if (i[d] = j, j[2] = a(b, c, g)) return !0
            }
      }
    }

    function o(a) {
      return a.length > 1 ? function(b, c, d) {
        for (var e = a.length; e--;)
          if (!a[e](b, c, d)) return !1;
        return !0
      } : a[0]
    }

    function p(a, c, d) {
      for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
      return d
    }

    function q(a, b, c, d, e) {
      for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
      return g
    }

    function r(a, b, c, e, f, g) {
      return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function(d, g, h, i) {
        var j, k, l, m = [],
          n = [],
          o = g.length,
          r = d || p(b || "*", h.nodeType ? [h] : h, []),
          s = !a || !d && b ? r : q(r, m, a, h, i),
          t = c ? f || (d ? a : o || e) ? [] : g : s;
        if (c && c(s, t, h, i), e)
          for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
        if (d) {
          if (f || a) {
            if (f) {
              for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
              f(null, t = [], j, i)
            }
            for (k = t.length; k--;)(l = t[k]) && (j = f ? ba.call(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
          }
        } else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : _.apply(g, t)
      })
    }

    function s(a) {
      for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function(a) {
          return a === b
        }, g, !0), j = n(function(a) {
          return ba.call(b, a) > -1
        }, g, !0), k = [function(a, c, d) {
          return !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d))
        }]; e > h; h++)
        if (c = w.relative[a[h].type]) k = [n(o(k), c)];
        else {
          if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
            for (d = ++h; e > d && !w.relative[a[d].type]; d++);
            return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
              value: " " === a[h - 2].type ? "*" : ""
            })).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
          }
          k.push(c)
        }
      return o(k)
    }

    function t(a, c) {
      var e = c.length > 0,
        f = a.length > 0,
        g = function(d, g, h, i, j) {
          var k, l, m, n = 0,
            o = "0",
            p = d && [],
            r = [],
            s = C,
            t = d || f && w.find.TAG("*", j),
            u = P += null == s ? 1 : Math.random() || .1,
            v = t.length;
          for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
            if (f && k) {
              for (l = 0; m = a[l++];)
                if (m(k, g, h)) {
                  i.push(k);
                  break
                }
              j && (P = u)
            }
            e && ((k = !m && k) && n--, d && p.push(k))
          }
          if (n += o, e && o !== n) {
            for (l = 0; m = c[l++];) m(p, r, g, h);
            if (d) {
              if (n > 0)
                for (; o--;) p[o] || r[o] || (r[o] = Z.call(i));
              r = q(r)
            }
            _.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
          }
          return j && (P = u, C = s), p
        };
      return e ? d(g) : g
    }
    var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + -new Date,
      O = a.document,
      P = 0,
      Q = 0,
      R = c(),
      S = c(),
      T = c(),
      U = function(a, b) {
        return a === b && (E = !0), 0
      },
      V = "undefined",
      W = 1 << 31,
      X = {}.hasOwnProperty,
      Y = [],
      Z = Y.pop,
      $ = Y.push,
      _ = Y.push,
      aa = Y.slice,
      ba = Y.indexOf || function(a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (this[b] === a) return b;
        return -1
      },
      ca = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      da = "[\\x20\\t\\r\\n\\f]",
      ea = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      fa = ea.replace("w", "w#"),
      ga = "\\[" + da + "*(" + ea + ")(?:" + da + "*([*^$|!~]?=)" + da + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + fa + "))|)" + da + "*\\]",
      ha = ":(" + ea + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ga + ")*)|.*)\\)|)",
      ia = new RegExp("^" + da + "+|((?:^|[^\\\\])(?:\\\\.)*)" + da + "+$", "g"),
      ja = new RegExp("^" + da + "*," + da + "*"),
      ka = new RegExp("^" + da + "*([>+~]|" + da + ")" + da + "*"),
      la = new RegExp("=" + da + "*([^\\]'\"]*?)" + da + "*\\]", "g"),
      ma = new RegExp(ha),
      na = new RegExp("^" + fa + "$"),
      oa = {
        ID: new RegExp("^#(" + ea + ")"),
        CLASS: new RegExp("^\\.(" + ea + ")"),
        TAG: new RegExp("^(" + ea.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + ga),
        PSEUDO: new RegExp("^" + ha),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + da + "*(even|odd|(([+-]|)(\\d*)n|)" + da + "*(?:([+-]|)" + da + "*(\\d+)|))" + da + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + ca + ")$", "i"),
        needsContext: new RegExp("^" + da + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + da + "*((?:-\\d)?\\d*)" + da + "*\\)|)(?=[^-]|$)", "i")
      },
      pa = /^(?:input|select|textarea|button)$/i,
      qa = /^h\d$/i,
      ra = /^[^{]+\{\s*\[native \w/,
      sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ta = /[+~]/,
      ua = /'|\\/g,
      va = new RegExp("\\\\([\\da-f]{1,6}" + da + "?|(" + da + ")|.)", "ig"),
      wa = function(a, b, c) {
        var d = "0x" + b - 65536;
        return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
      };
    try {
      _.apply(Y = aa.call(O.childNodes), O.childNodes), Y[O.childNodes.length].nodeType
    } catch (a) {
      _ = {
        apply: Y.length ? function(a, b) {
          $.apply(a, aa.call(b))
        } : function(a, b) {
          for (var c = a.length, d = 0; a[c++] = b[d++];);
          a.length = c - 1
        }
      }
    }
    v = b.support = {}, y = b.isXML = function(a) {
      var b = a && (a.ownerDocument || a).documentElement;
      return !!b && "HTML" !== b.nodeName
    }, F = b.setDocument = function(a) {
      var b, c = a ? a.ownerDocument || a : O,
        d = c.defaultView;
      return c !== G && 9 === c.nodeType && c.documentElement ? (G = c, H = c.documentElement, I = !y(c), d && d !== d.top && (d.addEventListener ? d.addEventListener("unload", function() {
        F()
      }, !1) : d.attachEvent && d.attachEvent("onunload", function() {
        F()
      })), v.attributes = e(function(a) {
        return a.className = "i", !a.getAttribute("className")
      }), v.getElementsByTagName = e(function(a) {
        return a.appendChild(c.createComment("")), !a.getElementsByTagName("*").length
      }), v.getElementsByClassName = ra.test(c.getElementsByClassName) && e(function(a) {
        return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length
      }), v.getById = e(function(a) {
        return H.appendChild(a).id = N, !c.getElementsByName || !c.getElementsByName(N).length
      }), v.getById ? (w.find.ID = function(a, b) {
        if (typeof b.getElementById !== V && I) {
          var c = b.getElementById(a);
          return c && c.parentNode ? [c] : []
        }
      }, w.filter.ID = function(a) {
        var b = a.replace(va, wa);
        return function(a) {
          return a.getAttribute("id") === b
        }
      }) : (delete w.find.ID, w.filter.ID = function(a) {
        var b = a.replace(va, wa);
        return function(a) {
          var c = typeof a.getAttributeNode !== V && a.getAttributeNode("id");
          return c && c.value === b
        }
      }), w.find.TAG = v.getElementsByTagName ? function(a, b) {
        return typeof b.getElementsByTagName !== V ? b.getElementsByTagName(a) : void 0
      } : function(a, b) {
        var c, d = [],
          e = 0,
          f = b.getElementsByTagName(a);
        if ("*" === a) {
          for (; c = f[e++];) 1 === c.nodeType && d.push(c);
          return d
        }
        return f
      }, w.find.CLASS = v.getElementsByClassName && function(a, b) {
        return typeof b.getElementsByClassName !== V && I ? b.getElementsByClassName(a) : void 0
      }, K = [], J = [], (v.qsa = ra.test(c.querySelectorAll)) && (e(function(a) {
        a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && J.push("[*^$]=" + da + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + da + "*(?:value|" + ca + ")"), a.querySelectorAll(":checked").length || J.push(":checked")
      }), e(function(a) {
        var b = c.createElement("input");
        b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + da + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
      })), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function(a) {
        v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ha)
      }), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function(a, b) {
        var c = 9 === a.nodeType ? a.documentElement : a,
          d = b && b.parentNode;
        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
      } : function(a, b) {
        if (b)
          for (; b = b.parentNode;)
            if (b === a) return !0;
        return !1
      }, U = b ? function(a, b) {
        if (a === b) return E = !0, 0;
        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !v.sortDetached && b.compareDocumentPosition(a) === d ? a === c || a.ownerDocument === O && M(O, a) ? -1 : b === c || b.ownerDocument === O && M(O, b) ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0 : 4 & d ? -1 : 1)
      } : function(a, b) {
        if (a === b) return E = !0, 0;
        var d, e = 0,
          f = a.parentNode,
          h = b.parentNode,
          i = [a],
          j = [b];
        if (!f || !h) return a === c ? -1 : b === c ? 1 : f ? -1 : h ? 1 : D ? ba.call(D, a) - ba.call(D, b) : 0;
        if (f === h) return g(a, b);
        for (d = a; d = d.parentNode;) i.unshift(d);
        for (d = b; d = d.parentNode;) j.unshift(d);
        for (; i[e] === j[e];) e++;
        return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
      }, c) : G
    }, b.matches = function(a, c) {
      return b(a, null, null, c)
    }, b.matchesSelector = function(a, c) {
      if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
        var d = L.call(a, c);
        if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
      } catch (a) {}
      return b(c, G, null, [a]).length > 0
    }, b.contains = function(a, b) {
      return (a.ownerDocument || a) !== G && F(a), M(a, b)
    }, b.attr = function(a, b) {
      (a.ownerDocument || a) !== G && F(a);
      var c = w.attrHandle[b.toLowerCase()],
        d = c && X.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
      return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }, b.error = function(a) {
      throw new Error("Syntax error, unrecognized expression: " + a)
    }, b.uniqueSort = function(a) {
      var b, c = [],
        d = 0,
        e = 0;
      if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
        for (; b = a[e++];) b === a[e] && (d = c.push(e));
        for (; d--;) a.splice(c[d], 1)
      }
      return D = null, a
    }, x = b.getText = function(a) {
      var b, c = "",
        d = 0,
        e = a.nodeType;
      if (e) {
        if (1 === e || 9 === e || 11 === e) {
          if ("string" == typeof a.textContent) return a.textContent;
          for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
        } else if (3 === e || 4 === e) return a.nodeValue
      } else
        for (; b = a[d++];) c += x(b);
      return c
    }, w = b.selectors = {
      cacheLength: 50,
      createPseudo: d,
      match: oa,
      attrHandle: {},
      find: {},
      relative: {
        ">": {
          dir: "parentNode",
          first: !0
        },
        " ": {
          dir: "parentNode"
        },
        "+": {
          dir: "previousSibling",
          first: !0
        },
        "~": {
          dir: "previousSibling"
        }
      },
      preFilter: {
        ATTR: function(a) {
          return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
        },
        CHILD: function(a) {
          return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
        },
        PSEUDO: function(a) {
          var b, c = !a[6] && a[2];
          return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
        }
      },
      filter: {
        TAG: function(a) {
          var b = a.replace(va, wa).toLowerCase();
          return "*" === a ? function() {
            return !0
          } : function(a) {
            return a.nodeName && a.nodeName.toLowerCase() === b
          }
        },
        CLASS: function(a) {
          var b = R[a + " "];
          return b || (b = new RegExp("(^|" + da + ")" + a + "(" + da + "|$)")) && R(a, function(a) {
            return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== V && a.getAttribute("class") || "")
          })
        },
        ATTR: function(a, c, d) {
          return function(e) {
            var f = b.attr(e, a);
            return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
          }
        },
        CHILD: function(a, b, c, d, e) {
          var f = "nth" !== a.slice(0, 3),
            g = "last" !== a.slice(-4),
            h = "of-type" === b;
          return 1 === d && 0 === e ? function(a) {
            return !!a.parentNode
          } : function(b, c, i) {
            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
              q = b.parentNode,
              r = h && b.nodeName.toLowerCase(),
              s = !i && !h;
            if (q) {
              if (f) {
                for (; p;) {
                  for (l = b; l = l[p];)
                    if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                  o = p = "only" === a && !o && "nextSibling"
                }
                return !0
              }
              if (o = [g ? q.firstChild : q.lastChild], g && s) {
                for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
                  if (1 === l.nodeType && ++m && l === b) {
                    k[a] = [P, n, m];
                    break
                  }
              } else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
              else
                for (;
                  (l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
              return m -= e, m === d || m % d === 0 && m / d >= 0
            }
          }
        },
        PSEUDO: function(a, c) {
          var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
          return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function(a, b) {
            for (var d, e = f(a, c), g = e.length; g--;) d = ba.call(a, e[g]), a[d] = !(b[d] = e[g])
          }) : function(a) {
            return f(a, 0, e)
          }) : f
        }
      },
      pseudos: {
        not: d(function(a) {
          var b = [],
            c = [],
            e = A(a.replace(ia, "$1"));
          return e[N] ? d(function(a, b, c, d) {
            for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
          }) : function(a, d, f) {
            return b[0] = a, e(b, null, f, c), !c.pop()
          }
        }),
        has: d(function(a) {
          return function(c) {
            return b(a, c).length > 0
          }
        }),
        contains: d(function(a) {
          return function(b) {
            return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
          }
        }),
        lang: d(function(a) {
          return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
            function(b) {
              var c;
              do
                if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
              return !1
            }
        }),
        target: function(b) {
          var c = a.location && a.location.hash;
          return c && c.slice(1) === b.id
        },
        root: function(a) {
          return a === H
        },
        focus: function(a) {
          return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
        },
        enabled: function(a) {
          return a.disabled === !1
        },
        disabled: function(a) {
          return a.disabled === !0
        },
        checked: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && !!a.checked || "option" === b && !!a.selected
        },
        selected: function(a) {
          return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
        },
        empty: function(a) {
          for (a = a.firstChild; a; a = a.nextSibling)
            if (a.nodeType < 6) return !1;
          return !0
        },
        parent: function(a) {
          return !w.pseudos.empty(a)
        },
        header: function(a) {
          return qa.test(a.nodeName)
        },
        input: function(a) {
          return pa.test(a.nodeName)
        },
        button: function(a) {
          var b = a.nodeName.toLowerCase();
          return "input" === b && "button" === a.type || "button" === b
        },
        text: function(a) {
          var b;
          return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
        },
        first: j(function() {
          return [0]
        }),
        last: j(function(a, b) {
          return [b - 1]
        }),
        eq: j(function(a, b, c) {
          return [0 > c ? c + b : c]
        }),
        even: j(function(a, b) {
          for (var c = 0; b > c; c += 2) a.push(c);
          return a
        }),
        odd: j(function(a, b) {
          for (var c = 1; b > c; c += 2) a.push(c);
          return a
        }),
        lt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
          return a
        }),
        gt: j(function(a, b, c) {
          for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
          return a
        })
      }
    }, w.pseudos.nth = w.pseudos.eq;
    for (u in {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) w.pseudos[u] = h(u);
    for (u in {
        submit: !0,
        reset: !0
      }) w.pseudos[u] = i(u);
    return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function(a, c) {
      var d, e, f, g, h, i, j, k = S[a + " "];
      if (k) return c ? 0 : k.slice(0);
      for (h = a, i = [], j = w.preFilter; h;) {
        (!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
          value: d,
          type: e[0].replace(ia, " ")
        }), h = h.slice(d.length));
        for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
          value: d,
          type: g,
          matches: e
        }), h = h.slice(d.length));
        if (!d) break
      }
      return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
    }, A = b.compile = function(a, b) {
      var c, d = [],
        e = [],
        f = T[a + " "];
      if (!f) {
        for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
        f = T(a, t(e, d)), f.selector = a
      }
      return f
    }, B = b.select = function(a, b, c, d) {
      var e, f, g, h, i, j = "function" == typeof a && a,
        l = !d && z(a = j.selector || a);
      if (c = c || [], 1 === l.length) {
        if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
          if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
          j && (b = b.parentNode), a = a.slice(f.shift().value.length)
        }
        for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
          if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
            if (f.splice(e, 1), a = d.length && m(f), !a) return _.apply(c, d), c;
            break
          }
      }
      return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
    }, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function(a) {
      return 1 & a.compareDocumentPosition(G.createElement("div"))
    }), e(function(a) {
      return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
    }) || f("type|href|height|width", function(a, b, c) {
      return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
    }), v.attributes && e(function(a) {
      return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
    }) || f("value", function(a, b, c) {
      return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
    }), e(function(a) {
      return null == a.getAttribute("disabled")
    }) || f(ca, function(a, b, c) {
      var d;
      return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
    }), b
  }(a);
  ea.find = ja, ea.expr = ja.selectors, ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
  var ka = ea.expr.match.needsContext,
    la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    ma = /^.[^:#\[\.,]*$/;
  ea.filter = function(a, b, c) {
    var d = b[0];
    return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function(a) {
      return 1 === a.nodeType
    }))
  }, ea.fn.extend({
    find: function(a) {
      var b, c = [],
        d = this,
        e = d.length;
      if ("string" != typeof a) return this.pushStack(ea(a).filter(function() {
        for (b = 0; e > b; b++)
          if (ea.contains(d[b], this)) return !0
      }));
      for (b = 0; e > b; b++) ea.find(a, d[b], c);
      return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
    },
    filter: function(a) {
      return this.pushStack(d(this, a || [], !1))
    },
    not: function(a) {
      return this.pushStack(d(this, a || [], !0))
    },
    is: function(a) {
      return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
    }
  });
  var na, oa = a.document,
    pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    qa = ea.fn.init = function(a, b) {
      var c, d;
      if (!a) return this;
      if ("string" == typeof a) {
        if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
        if (c[1]) {
          if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
            for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
          return this
        }
        if (d = oa.getElementById(c[2]), d && d.parentNode) {
          if (d.id !== c[2]) return na.find(a);
          this.length = 1, this[0] = d
        }
        return this.context = oa, this.selector = a, this
      }
      return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
    };
  qa.prototype = ea.fn, na = ea(oa);
  var ra = /^(?:parents|prev(?:Until|All))/,
    sa = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };
  ea.extend({
    dir: function(a, b, c) {
      for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
      return d
    },
    sibling: function(a, b) {
      for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
      return c
    }
  }), ea.fn.extend({
    has: function(a) {
      var b, c = ea(a, this),
        d = c.length;
      return this.filter(function() {
        for (b = 0; d > b; b++)
          if (ea.contains(this, c[b])) return !0
      })
    },
    closest: function(a, b) {
      for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
        for (c = this[d]; c && c !== b; c = c.parentNode)
          if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
            f.push(c);
            break
          }
      return this.pushStack(f.length > 1 ? ea.unique(f) : f)
    },
    index: function(a) {
      return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(a, b) {
      return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
    },
    addBack: function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }
  }), ea.each({
    parent: function(a) {
      var b = a.parentNode;
      return b && 11 !== b.nodeType ? b : null
    },
    parents: function(a) {
      return ea.dir(a, "parentNode")
    },
    parentsUntil: function(a, b, c) {
      return ea.dir(a, "parentNode", c)
    },
    next: function(a) {
      return e(a, "nextSibling")
    },
    prev: function(a) {
      return e(a, "previousSibling")
    },
    nextAll: function(a) {
      return ea.dir(a, "nextSibling")
    },
    prevAll: function(a) {
      return ea.dir(a, "previousSibling")
    },
    nextUntil: function(a, b, c) {
      return ea.dir(a, "nextSibling", c)
    },
    prevUntil: function(a, b, c) {
      return ea.dir(a, "previousSibling", c)
    },
    siblings: function(a) {
      return ea.sibling((a.parentNode || {}).firstChild, a)
    },
    children: function(a) {
      return ea.sibling(a.firstChild)
    },
    contents: function(a) {
      return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
    }
  }, function(a, b) {
    ea.fn[a] = function(c, d) {
      var e = ea.map(this, b, c);
      return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
    }
  });
  var ta = /\S+/g,
    ua = {};
  ea.Callbacks = function(a) {
    a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
    var b, c, d, e, g, h, i = [],
      j = !a.once && [],
      k = function(f) {
        for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
          if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
            c = !1;
            break
          }
        b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
      },
      l = {
        add: function() {
          if (i) {
            var d = i.length;
            ! function b(c) {
              ea.each(c, function(c, d) {
                var e = ea.type(d);
                "function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
              })
            }(arguments), b ? e = i.length : c && (h = d, k(c))
          }
          return this
        },
        remove: function() {
          return i && ea.each(arguments, function(a, c) {
            for (var d;
              (d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
          }), this
        },
        has: function(a) {
          return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
        },
        empty: function() {
          return i = [], e = 0, this
        },
        disable: function() {
          return i = j = c = void 0, this
        },
        disabled: function() {
          return !i
        },
        lock: function() {
          return j = void 0, c || l.disable(), this
        },
        locked: function() {
          return !j
        },
        fireWith: function(a, c) {
          return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
        },
        fire: function() {
          return l.fireWith(this, arguments), this
        },
        fired: function() {
          return !!d
        }
      };
    return l
  }, ea.extend({
    Deferred: function(a) {
      var b = [
          ["resolve", "done", ea.Callbacks("once memory"), "resolved"],
          ["reject", "fail", ea.Callbacks("once memory"), "rejected"],
          ["notify", "progress", ea.Callbacks("memory")]
        ],
        c = "pending",
        d = {
          state: function() {
            return c
          },
          always: function() {
            return e.done(arguments).fail(arguments), this
          },
          then: function() {
            var a = arguments;
            return ea.Deferred(function(c) {
              ea.each(b, function(b, f) {
                var g = ea.isFunction(a[b]) && a[b];
                e[f[1]](function() {
                  var a = g && g.apply(this, arguments);
                  a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                })
              }), a = null
            }).promise()
          },
          promise: function(a) {
            return null != a ? ea.extend(a, d) : d
          }
        },
        e = {};
      return d.pipe = d.then, ea.each(b, function(a, f) {
        var g = f[2],
          h = f[3];
        d[f[1]] = g.add, h && g.add(function() {
          c = h
        }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() {
          return e[f[0] + "With"](this === e ? d : this, arguments), this
        }, e[f[0] + "With"] = g.fireWith
      }), d.promise(e), a && a.call(e, e), e
    },
    when: function(a) {
      var b, c, d, e = 0,
        f = X.call(arguments),
        g = f.length,
        h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
        i = 1 === h ? a : ea.Deferred(),
        j = function(a, c, d) {
          return function(e) {
            c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
          }
        };
      if (g > 1)
        for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
      return h || i.resolveWith(d, f), i.promise()
    }
  });
  var va;
  ea.fn.ready = function(a) {
    return ea.ready.promise().done(a), this
  }, ea.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(a) {
      a ? ea.readyWait++ : ea.ready(!0)
    },
    ready: function(a) {
      if (a === !0 ? !--ea.readyWait : !ea.isReady) {
        if (!oa.body) return setTimeout(ea.ready);
        ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
      }
    }
  }), ea.ready.promise = function(b) {
    if (!va)
      if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
      else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
    else {
      oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
      var c = !1;
      try {
        c = null == a.frameElement && oa.documentElement
      } catch (a) {}
      c && c.doScroll && ! function a() {
        if (!ea.isReady) {
          try {
            c.doScroll("left")
          } catch (b) {
            return setTimeout(a, 50)
          }
          g(), ea.ready()
        }
      }()
    }
    return va.promise(b)
  };
  var wa, xa = "undefined";
  for (wa in ea(ca)) break;
  ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function() {
      var a, b, c, d;
      c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }),
    function() {
      var a = oa.createElement("div");
      if (null == ca.deleteExpando) {
        ca.deleteExpando = !0;
        try {
          delete a.test
        } catch (a) {
          ca.deleteExpando = !1
        }
      }
      a = null
    }(), ea.acceptData = function(a) {
      var b = ea.noData[(a.nodeName + " ").toLowerCase()],
        c = +a.nodeType || 1;
      return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
    };
  var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    za = /([A-Z])/g;
  ea.extend({
    cache: {},
    noData: {
      "applet ": !0,
      "embed ": !0,
      "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
    },
    hasData: function(a) {
      return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
    },
    data: function(a, b, c) {
      return k(a, b, c)
    },
    removeData: function(a, b) {
      return l(a, b)
    },
    _data: function(a, b, c) {
      return k(a, b, c, !0)
    },
    _removeData: function(a, b) {
      return l(a, b, !0)
    }
  }), ea.fn.extend({
    data: function(a, b) {
      var c, d, e, f = this[0],
        g = f && f.attributes;
      if (void 0 === a) {
        if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
          for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
          ea._data(f, "parsedAttrs", !0)
        }
        return e
      }
      return "object" == typeof a ? this.each(function() {
        ea.data(this, a)
      }) : arguments.length > 1 ? this.each(function() {
        ea.data(this, a, b)
      }) : f ? i(f, a, ea.data(f, a)) : void 0
    },
    removeData: function(a) {
      return this.each(function() {
        ea.removeData(this, a)
      })
    }
  }), ea.extend({
    queue: function(a, b, c) {
      var d;
      return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
    },
    dequeue: function(a, b) {
      b = b || "fx";
      var c = ea.queue(a, b),
        d = c.length,
        e = c.shift(),
        f = ea._queueHooks(a, b),
        g = function() {
          ea.dequeue(a, b)
        };
      "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
    },
    _queueHooks: function(a, b) {
      var c = b + "queueHooks";
      return ea._data(a, c) || ea._data(a, c, {
        empty: ea.Callbacks("once memory").add(function() {
          ea._removeData(a, b + "queue"), ea._removeData(a, c)
        })
      })
    }
  }), ea.fn.extend({
    queue: function(a, b) {
      var c = 2;
      return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function() {
        var c = ea.queue(this, a, b);
        ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
      })
    },
    dequeue: function(a) {
      return this.each(function() {
        ea.dequeue(this, a)
      })
    },
    clearQueue: function(a) {
      return this.queue(a || "fx", [])
    },
    promise: function(a, b) {
      var c, d = 1,
        e = ea.Deferred(),
        f = this,
        g = this.length,
        h = function() {
          --d || e.resolveWith(f, [f])
        };
      for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
      return h(), e.promise(b)
    }
  });
  var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Ba = ["Top", "Right", "Bottom", "Left"],
    Ca = function(a, b) {
      return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
    },
    Da = ea.access = function(a, b, c, d, e, f, g) {
      var h = 0,
        i = a.length,
        j = null == c;
      if ("object" === ea.type(c)) {
        e = !0;
        for (h in c) ea.access(a, b, h, c[h], !0, f, g)
      } else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) {
          return j.call(ea(a), c)
        })), b))
        for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
      return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    },
    Ea = /^(?:checkbox|radio)$/i;
  ! function() {
    var a = oa.createElement("input"),
      b = oa.createElement("div"),
      c = oa.createDocumentFragment();
    if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() {
        ca.noCloneEvent = !1
      }), b.cloneNode(!0).click()), null == ca.deleteExpando) {
      ca.deleteExpando = !0;
      try {
        delete b.test
      } catch (a) {
        ca.deleteExpando = !1
      }
    }
  }(),
  function() {
    var b, c, d = oa.createElement("div");
    for (b in {
        submit: !0,
        change: !0,
        focusin: !0
      }) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
    d = null
  }();
  var Fa = /^(?:input|select|textarea)$/i,
    Ga = /^key/,
    Ha = /^(?:mouse|pointer|contextmenu)|click/,
    Ia = /^(?:focusinfocus|focusoutblur)$/,
    Ja = /^([^.]*)(?:\.(.+)|)$/;
  ea.event = {
    global: {},
    add: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
      if (q) {
        for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function(a) {
            return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
          }, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
          type: n,
          origType: p,
          data: d,
          handler: c,
          guid: c.guid,
          selector: e,
          needsContext: e && ea.expr.match.needsContext.test(e),
          namespace: o.join(".")
        }, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
        a = null
      }
    },
    remove: function(a, b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
      if (q && (k = q.events)) {
        for (b = (b || "").match(ta) || [""], j = b.length; j--;)
          if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
            for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
            i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
          } else
            for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
        ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
      }
    },
    trigger: function(b, c, d, e) {
      var f, g, h, i, j, k, l, m = [d || oa],
        n = ba.call(b, "type") ? b.type : b,
        o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
      if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
        if (!e && !j.noBubble && !ea.isWindow(d)) {
          for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
          k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
        }
        for (l = 0;
          (h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
        if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
          k = d[g], k && (d[g] = null), ea.event.triggered = n;
          try {
            d[n]()
          } catch (a) {}
          ea.event.triggered = void 0, k && (d[g] = k)
        }
        return b.result
      }
    },
    dispatch: function(a) {
      a = ea.event.fix(a);
      var b, c, d, e, f, g = [],
        h = X.call(arguments),
        i = (ea._data(this, "events") || {})[a.type] || [],
        j = ea.event.special[a.type] || {};
      if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
        for (g = ea.event.handlers.call(this, a, i), b = 0;
          (e = g[b++]) && !a.isPropagationStopped();)
          for (a.currentTarget = e.elem, f = 0;
            (d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
        return j.postDispatch && j.postDispatch.call(this, a), a.result
      }
    },
    handlers: function(a, b) {
      var c, d, e, f, g = [],
        h = b.delegateCount,
        i = a.target;
      if (h && i.nodeType && (!a.button || "click" !== a.type))
        for (; i != this; i = i.parentNode || this)
          if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
            for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
            e.length && g.push({
              elem: i,
              handlers: e
            })
          }
      return h < b.length && g.push({
        elem: this,
        handlers: b.slice(h)
      }), g
    },
    fix: function(a) {
      if (a[ea.expando]) return a;
      var b, c, d, e = a.type,
        f = a,
        g = this.fixHooks[e];
      for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
      return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(a, b) {
        return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(a, b) {
        var c, d, e, f = b.button,
          g = b.fromElement;
        return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
      }
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          if (this !== o() && this.focus) try {
            return this.focus(), !1
          } catch (a) {}
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === o() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
        },
        _default: function(a) {
          return ea.nodeName(a.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(a) {
          void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
        }
      }
    },
    simulate: function(a, b, c, d) {
      var e = ea.extend(new ea.Event, c, {
        type: a,
        isSimulated: !0,
        originalEvent: {}
      });
      d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
    }
  }, ea.removeEvent = oa.removeEventListener ? function(a, b, c) {
    a.removeEventListener && a.removeEventListener(b, c, !1)
  } : function(a, b, c) {
    var d = "on" + b;
    a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
  }, ea.Event = function(a, b) {
    return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
  }, ea.Event.prototype = {
    isDefaultPrevented: n,
    isPropagationStopped: n,
    isImmediatePropagationStopped: n,
    preventDefault: function() {
      var a = this.originalEvent;
      this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
    },
    stopPropagation: function() {
      var a = this.originalEvent;
      this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
    },
    stopImmediatePropagation: function() {
      var a = this.originalEvent;
      this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
    }
  }, ea.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(a, b) {
    ea.event.special[a] = {
      delegateType: b,
      bindType: b,
      handle: function(a) {
        var c, d = this,
          e = a.relatedTarget,
          f = a.handleObj;
        return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
      }
    }
  }), ca.submitBubbles || (ea.event.special.submit = {
    setup: function() {
      return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function(a) {
        var b = a.target,
          c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
        c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function(a) {
          a._submit_bubble = !0
        }), ea._data(c, "submitBubbles", !0))
      })
    },
    postDispatch: function(a) {
      a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
    },
    teardown: function() {
      return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
    }
  }), ca.changeBubbles || (ea.event.special.change = {
    setup: function() {
      return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function(a) {
        "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
      }), ea.event.add(this, "click._change", function(a) {
        this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
      })), !1) : void ea.event.add(this, "beforeactivate._change", function(a) {
        var b = a.target;
        Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function(a) {
          !this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
        }), ea._data(b, "changeBubbles", !0))
      })
    },
    handle: function(a) {
      var b = a.target;
      return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
    },
    teardown: function() {
      return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
    }
  }), ca.focusinBubbles || ea.each({
    focus: "focusin",
    blur: "focusout"
  }, function(a, b) {
    var c = function(a) {
      ea.event.simulate(b, a.target, ea.event.fix(a), !0)
    };
    ea.event.special[b] = {
      setup: function() {
        var d = this.ownerDocument || this,
          e = ea._data(d, b);
        e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
      },
      teardown: function() {
        var d = this.ownerDocument || this,
          e = ea._data(d, b) - 1;
        e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
      }
    }
  }), ea.fn.extend({
    on: function(a, b, c, d, e) {
      var f, g;
      if ("object" == typeof a) {
        "string" != typeof b && (c = c || b, b = void 0);
        for (f in a) this.on(f, b, c, a[f], e);
        return this
      }
      if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
      else if (!d) return this;
      return 1 === e && (g = d, d = function(a) {
        return ea().off(a), g.apply(this, arguments)
      }, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function() {
        ea.event.add(this, a, d, c, b)
      })
    },
    one: function(a, b, c, d) {
      return this.on(a, b, c, d, 1)
    },
    off: function(a, b, c) {
      var d, e;
      if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
      if ("object" == typeof a) {
        for (e in a) this.off(e, b, a[e]);
        return this
      }
      return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function() {
        ea.event.remove(this, a, c, b)
      })
    },
    trigger: function(a, b) {
      return this.each(function() {
        ea.event.trigger(a, b, this)
      })
    },
    triggerHandler: function(a, b) {
      var c = this[0];
      return c ? ea.event.trigger(a, b, c, !0) : void 0
    }
  });
  var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    La = / jQuery\d+="(?:null|\d+)"/g,
    Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
    Na = /^\s+/,
    Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Pa = /<([\w:]+)/,
    Qa = /<tbody/i,
    Ra = /<|&#?\w+;/,
    Sa = /<(?:script|style|link)/i,
    Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ua = /^$|\/(?:java|ecma)script/i,
    Va = /^true\/(.*)/,
    Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    Xa = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      legend: [1, "<fieldset>", "</fieldset>"],
      area: [1, "<map>", "</map>"],
      param: [1, "<object>", "</object>"],
      thead: [1, "<table>", "</table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    Ya = p(oa),
    Za = Ya.appendChild(oa.createElement("div"));
  Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
    clone: function(a, b, c) {
      var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
      if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
        for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
      if (b)
        if (c)
          for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
        else w(a, f);
      return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
    },
    buildFragment: function(a, b, c, d) {
      for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
        if (f = a[o], f || 0 === f)
          if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
          else if (Ra.test(f)) {
        for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
        if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
          for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
        for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
        h = m.lastChild
      } else n.push(b.createTextNode(f));
      for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
        if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
          for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
      return h = null, m
    },
    cleanData: function(a, b) {
      for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
        if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
          if (f.events)
            for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
          i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
        }
    }
  }), ea.fn.extend({
    text: function(a) {
      return Da(this, function(a) {
        return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
      }, null, a, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = s(this, a);
          b.appendChild(a)
        }
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(a) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var b = s(this, a);
          b.insertBefore(a, b.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(a) {
        this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
      })
    },
    remove: function(a, b) {
      for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
      return this
    },
    empty: function() {
      for (var a, b = 0; null != (a = this[b]); b++) {
        for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
        a.options && ea.nodeName(a, "select") && (a.options.length = 0)
      }
      return this
    },
    clone: function(a, b) {
      return a = null != a && a, b = null == b ? a : b, this.map(function() {
        return ea.clone(this, a, b)
      })
    },
    html: function(a) {
      return Da(this, function(a) {
        var b = this[0] || {},
          c = 0,
          d = this.length;
        if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
        if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
          a = a.replace(Oa, "<$1></$2>");
          try {
            for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
            b = 0
          } catch (a) {}
        }
        b && this.empty().append(a)
      }, null, a, arguments.length)
    },
    replaceWith: function() {
      var a = arguments[0];
      return this.domManip(arguments, function(b) {
        a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
      }), a && (a.length || a.nodeType) ? this : this.remove()
    },
    detach: function(a) {
      return this.remove(a, !0)
    },
    domManip: function(a, b) {
      a = Y.apply([], a);
      var c, d, e, f, g, h, i = 0,
        j = this.length,
        k = this,
        l = j - 1,
        m = a[0],
        n = ea.isFunction(m);
      if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function(c) {
        var d = k.eq(c);
        n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
      });
      if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
        for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
        if (e)
          for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
        h = c = null
      }
      return this
    }
  }), ea.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(a, b) {
    ea.fn[a] = function(a) {
      for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
      return this.pushStack(e)
    }
  });
  var $a, _a = {};
  ! function() {
    var a;
    ca.shrinkWrapBlocks = function() {
      if (null != a) return a;
      a = !1;
      var b, c, d;
      return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
    }
  }();
  var ab, bb, cb = /^margin/,
    db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
    eb = /^(top|right|bottom|left)$/;
  a.getComputedStyle ? (ab = function(a) {
    return a.ownerDocument.defaultView.getComputedStyle(a, null)
  }, bb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
  }) : oa.documentElement.currentStyle && (ab = function(a) {
    return a.currentStyle
  }, bb = function(a, b, c) {
    var d, e, f, g, h = a.style;
    return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
  }), ! function() {
    function b() {
      var b, c, d, e;
      c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
        width: "4px"
      }).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
    }
    var c, d, e, f, g, h, i;
    c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
      reliableHiddenOffsets: function() {
        return null == h && b(), h
      },
      boxSizingReliable: function() {
        return null == g && b(), g
      },
      pixelPosition: function() {
        return null == f && b(), f
      },
      reliableMarginRight: function() {
        return null == i && b(), i
      }
    }))
  }(), ea.swap = function(a, b, c, d) {
    var e, f, g = {};
    for (f in b) g[f] = a.style[f], a.style[f] = b[f];
    e = c.apply(a, d || []);
    for (f in b) a.style[f] = g[f];
    return e
  };
  var fb = /alpha\([^)]*\)/i,
    gb = /opacity\s*=\s*([^)]*)/,
    hb = /^(none|table(?!-c[ea]).+)/,
    ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
    jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
    kb = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    lb = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    mb = ["Webkit", "O", "Moz", "ms"];
  ea.extend({
    cssHooks: {
      opacity: {
        get: function(a, b) {
          if (b) {
            var c = bb(a, "opacity");
            return "" === c ? "1" : c
          }
        }
      }
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0
    },
    cssProps: {
      float: ca.cssFloat ? "cssFloat" : "styleFloat"
    },
    style: function(a, b, c, d) {
      if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
        var e, f, g, h = ea.camelCase(b),
          i = a.style;
        if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
        if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
          i[b] = c
        } catch (a) {}
      }
    },
    css: function(a, b, c, d) {
      var e, f, g, h = ea.camelCase(b);
      return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
    }
  }), ea.each(["height", "width"], function(a, b) {
    ea.cssHooks[b] = {
      get: function(a, c, d) {
        return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function() {
          return F(a, b, d)
        }) : F(a, b, d) : void 0
      },
      set: function(a, c, d) {
        var e = d && ab(a);
        return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
      }
    }
  }), ca.opacity || (ea.cssHooks.opacity = {
    get: function(a, b) {
      return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
    },
    set: function(a, b) {
      var c = a.style,
        d = a.currentStyle,
        e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
        f = d && d.filter || c.filter || "";
      c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
    }
  }), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function(a, b) {
    return b ? ea.swap(a, {
      display: "inline-block"
    }, bb, [a, "marginRight"]) : void 0
  }), ea.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(a, b) {
    ea.cssHooks[a + b] = {
      expand: function(c) {
        for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
        return e
      }
    }, cb.test(a) || (ea.cssHooks[a + b].set = D)
  }), ea.fn.extend({
    css: function(a, b) {
      return Da(this, function(a, b, c) {
        var d, e, f = {},
          g = 0;
        if (ea.isArray(b)) {
          for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
          return f
        }
        return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
      }, a, b, arguments.length > 1)
    },
    show: function() {
      return C(this, !0)
    },
    hide: function() {
      return C(this)
    },
    toggle: function(a) {
      return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
        Ca(this) ? ea(this).show() : ea(this).hide()
      })
    }
  }), ea.Tween = G, G.prototype = {
    constructor: G,
    init: function(a, b, c, d, e, f) {
      this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
    },
    cur: function() {
      var a = G.propHooks[this.prop];
      return a && a.get ? a.get(this) : G.propHooks._default.get(this)
    },
    run: function(a) {
      var b, c = G.propHooks[this.prop];
      return this.pos = b = this.options.duration ? ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
    }
  }, G.prototype.init.prototype = G.prototype, G.propHooks = {
    _default: {
      get: function(a) {
        var b;
        return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
      },
      set: function(a) {
        ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
      }
    }
  }, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
    set: function(a) {
      a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
    }
  }, ea.easing = {
    linear: function(a) {
      return a
    },
    swing: function(a) {
      return .5 - Math.cos(a * Math.PI) / 2
    }
  }, ea.fx = G.prototype.init, ea.fx.step = {};
  var nb, ob, pb = /^(?:toggle|show|hide)$/,
    qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
    rb = /queueHooks$/,
    sb = [K],
    tb = {
      "*": [function(a, b) {
        var c = this.createTween(a, b),
          d = c.cur(),
          e = qb.exec(b),
          f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
          g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
          h = 1,
          i = 20;
        if (g && g[3] !== f) {
          f = f || g[3], e = e || [], g = +d || 1;
          do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
        }
        return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
      }]
    };
  ea.Animation = ea.extend(M, {
      tweener: function(a, b) {
        ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
        for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
      },
      prefilter: function(a, b) {
        b ? sb.unshift(a) : sb.push(a)
      }
    }), ea.speed = function(a, b, c) {
      var d = a && "object" == typeof a ? ea.extend({}, a) : {
        complete: c || !c && b || ea.isFunction(a) && a,
        duration: a,
        easing: c && b || b && !ea.isFunction(b) && b
      };
      return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() {
        ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
      }, d
    }, ea.fn.extend({
      fadeTo: function(a, b, c, d) {
        return this.filter(Ca).css("opacity", 0).show().end().animate({
          opacity: b
        }, a, c, d)
      },
      animate: function(a, b, c, d) {
        var e = ea.isEmptyObject(a),
          f = ea.speed(b, c, d),
          g = function() {
            var b = M(this, ea.extend({}, a), f);
            (e || ea._data(this, "finish")) && b.stop(!0)
          };
        return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
      },
      stop: function(a, b, c) {
        var d = function(a) {
          var b = a.stop;
          delete a.stop, b(c)
        };
        return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
          var b = !0,
            e = null != a && a + "queueHooks",
            f = ea.timers,
            g = ea._data(this);
          if (e) g[e] && g[e].stop && d(g[e]);
          else
            for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
          for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
          (b || !c) && ea.dequeue(this, a)
        })
      },
      finish: function(a) {
        return a !== !1 && (a = a || "fx"), this.each(function() {
          var b, c = ea._data(this),
            d = c[a + "queue"],
            e = c[a + "queueHooks"],
            f = ea.timers,
            g = d ? d.length : 0;
          for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
          for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
          delete c.finish
        })
      }
    }), ea.each(["toggle", "show", "hide"], function(a, b) {
      var c = ea.fn[b];
      ea.fn[b] = function(a, d, e) {
        return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
      }
    }), ea.each({
      slideDown: I("show"),
      slideUp: I("hide"),
      slideToggle: I("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(a, b) {
      ea.fn[a] = function(a, c, d) {
        return this.animate(b, a, c, d)
      }
    }), ea.timers = [], ea.fx.tick = function() {
      var a, b = ea.timers,
        c = 0;
      for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
      b.length || ea.fx.stop(), nb = void 0
    }, ea.fx.timer = function(a) {
      ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
    }, ea.fx.interval = 13, ea.fx.start = function() {
      ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
    }, ea.fx.stop = function() {
      clearInterval(ob), ob = null
    }, ea.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, ea.fn.delay = function(a, b) {
      return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
        var d = setTimeout(b, a);
        c.stop = function() {
          clearTimeout(d)
        }
      })
    },
    function() {
      var a, b, c, d, e;
      b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
    }();
  var ub = /\r/g;
  ea.fn.extend({
    val: function(a) {
      var b, c, d, e = this[0];
      return arguments.length ? (d = ea.isFunction(a), this.each(function(c) {
        var e;
        1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function(a) {
          return null == a ? "" : a + ""
        })), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
      })) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
    }
  }), ea.extend({
    valHooks: {
      option: {
        get: function(a) {
          var b = ea.find.attr(a, "value");
          return null != b ? b : ea.trim(ea.text(a))
        }
      },
      select: {
        get: function(a) {
          for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
            if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
              if (b = ea(c).val(), f) return b;
              g.push(b)
            }
          return g
        },
        set: function(a, b) {
          for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
            if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
              d.selected = c = !0
            } catch (a) {
              d.scrollHeight
            } else d.selected = !1;
          return c || (a.selectedIndex = -1), e
        }
      }
    }
  }), ea.each(["radio", "checkbox"], function() {
    ea.valHooks[this] = {
      set: function(a, b) {
        return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
      }
    }, ca.checkOn || (ea.valHooks[this].get = function(a) {
      return null === a.getAttribute("value") ? "on" : a.value
    })
  });
  var vb, wb, xb = ea.expr.attrHandle,
    yb = /^(?:checked|selected)$/i,
    zb = ca.getSetAttribute,
    Ab = ca.input;
  ea.fn.extend({
    attr: function(a, b) {
      return Da(this, ea.attr, a, b, arguments.length > 1)
    },
    removeAttr: function(a) {
      return this.each(function() {
        ea.removeAttr(this, a)
      })
    }
  }), ea.extend({
    attr: function(a, b, c) {
      var d, e, f = a.nodeType;
      if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b))
    },
    removeAttr: function(a, b) {
      var c, d, e = 0,
        f = b && b.match(ta);
      if (f && 1 === a.nodeType)
        for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
    },
    attrHooks: {
      type: {
        set: function(a, b) {
          if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
            var c = a.value;
            return a.setAttribute("type", b), c && (a.value = c), b
          }
        }
      }
    }
  }), wb = {
    set: function(a, b, c) {
      return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
    }
  }, ea.each(ea.expr.match.bool.source.match(/\w+/g), function(a, b) {
    var c = xb[b] || ea.find.attr;
    xb[b] = Ab && zb || !yb.test(b) ? function(a, b, d) {
      var e, f;
      return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
    } : function(a, b, c) {
      return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
    }
  }), Ab && zb || (ea.attrHooks.value = {
    set: function(a, b, c) {
      return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
    }
  }), zb || (vb = {
    set: function(a, b, c) {
      var d = a.getAttributeNode(c);
      return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
    }
  }, xb.id = xb.name = xb.coords = function(a, b, c) {
    var d;
    return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
  }, ea.valHooks.button = {
    get: function(a, b) {
      var c = a.getAttributeNode(b);
      return c && c.specified ? c.value : void 0
    },
    set: vb.set
  }, ea.attrHooks.contenteditable = {
    set: function(a, b, c) {
      vb.set(a, "" !== b && b, c)
    }
  }, ea.each(["width", "height"], function(a, b) {
    ea.attrHooks[b] = {
      set: function(a, c) {
        return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
      }
    }
  })), ca.style || (ea.attrHooks.style = {
    get: function(a) {
      return a.style.cssText || void 0
    },
    set: function(a, b) {
      return a.style.cssText = b + ""
    }
  });
  var Bb = /^(?:input|select|textarea|button|object)$/i,
    Cb = /^(?:a|area)$/i;
  ea.fn.extend({
    prop: function(a, b) {
      return Da(this, ea.prop, a, b, arguments.length > 1)
    },
    removeProp: function(a) {
      return a = ea.propFix[a] || a, this.each(function() {
        try {
          this[a] = void 0, delete this[a]
        } catch (a) {}
      })
    }
  }), ea.extend({
    propFix: {
      for: "htmlFor",
      class: "className"
    },
    prop: function(a, b, c) {
      var d, e, f, g = a.nodeType;
      if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
    },
    propHooks: {
      tabIndex: {
        get: function(a) {
          var b = ea.find.attr(a, "tabindex");
          return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
        }
      }
    }
  }), ca.hrefNormalized || ea.each(["href", "src"], function(a, b) {
    ea.propHooks[b] = {
      get: function(a) {
        return a.getAttribute(b, 4)
      }
    }
  }), ca.optSelected || (ea.propHooks.selected = {
    get: function(a) {
      var b = a.parentNode;
      return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
    }
  }), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ea.propFix[this.toLowerCase()] = this
  }), ca.enctype || (ea.propFix.enctype = "encoding");
  var Db = /[\t\r\n\f]/g;
  ea.fn.extend({
    addClass: function(a) {
      var b, c, d, e, f, g, h = 0,
        i = this.length,
        j = "string" == typeof a && a;
      if (ea.isFunction(a)) return this.each(function(b) {
        ea(this).addClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(ta) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
            for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
            g = ea.trim(d), c.className !== g && (c.className = g)
          }
      return this
    },
    removeClass: function(a) {
      var b, c, d, e, f, g, h = 0,
        i = this.length,
        j = 0 === arguments.length || "string" == typeof a && a;
      if (ea.isFunction(a)) return this.each(function(b) {
        ea(this).removeClass(a.call(this, b, this.className))
      });
      if (j)
        for (b = (a || "").match(ta) || []; i > h; h++)
          if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
            for (f = 0; e = b[f++];)
              for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
            g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
          }
      return this
    },
    toggleClass: function(a, b) {
      var c = typeof a;
      return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function(c) {
        ea(this).toggleClass(a.call(this, c, this.className, b), b)
      } : function() {
        if ("string" === c)
          for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
        else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
      })
    },
    hasClass: function(a) {
      for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
        if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
      return !1
    }
  }), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
    ea.fn[b] = function(a, c) {
      return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
    }
  }), ea.fn.extend({
    hover: function(a, b) {
      return this.mouseenter(a).mouseleave(b || a)
    },
    bind: function(a, b, c) {
      return this.on(a, null, b, c)
    },
    unbind: function(a, b) {
      return this.off(a, null, b)
    },
    delegate: function(a, b, c, d) {
      return this.on(b, a, c, d)
    },
    undelegate: function(a, b, c) {
      return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
    }
  });
  var Eb = ea.now(),
    Fb = /\?/,
    Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
  ea.parseJSON = function(b) {
    if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
    var c, d = null,
      e = ea.trim(b + "");
    return e && !ea.trim(e.replace(Gb, function(a, b, e, f) {
      return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
    })) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
  }, ea.parseXML = function(b) {
    var c, d;
    if (!b || "string" != typeof b) return null;
    try {
      a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
    } catch (a) {
      c = void 0
    }
    return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
  };
  var Hb, Ib, Jb = /#.*$/,
    Kb = /([?&])_=[^&]*/,
    Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Nb = /^(?:GET|HEAD)$/,
    Ob = /^\/\//,
    Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    Qb = {},
    Rb = {},
    Sb = "*/".concat("*");
  try {
    Ib = location.href
  } catch (a) {
    Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
  }
  Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: Ib,
      type: "GET",
      isLocal: Mb.test(Hb[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": Sb,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": ea.parseJSON,
        "text xml": ea.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(a, b) {
      return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
    },
    ajaxPrefilter: N(Qb),
    ajaxTransport: N(Rb),
    ajax: function(a, b) {
      function c(a, b, c, d) {
        var e, k, r, s, u, w = b;
        2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
      }
      "object" == typeof a && (b = a, a = void 0), b = b || {};
      var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
        m = l.context || l,
        n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
        o = ea.Deferred(),
        p = ea.Callbacks("once memory"),
        q = l.statusCode || {},
        r = {},
        s = {},
        t = 0,
        u = "canceled",
        v = {
          readyState: 0,
          getResponseHeader: function(a) {
            var b;
            if (2 === t) {
              if (!k)
                for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
              b = k[a.toLowerCase()]
            }
            return null == b ? null : b
          },
          getAllResponseHeaders: function() {
            return 2 === t ? g : null
          },
          setRequestHeader: function(a, b) {
            var c = a.toLowerCase();
            return t || (a = s[c] = s[c] || a, r[a] = b), this
          },
          overrideMimeType: function(a) {
            return t || (l.mimeType = a), this
          },
          statusCode: function(a) {
            var b;
            if (a)
              if (2 > t)
                for (b in a) q[b] = [q[b], a[b]];
              else v.always(a[v.status]);
            return this
          },
          abort: function(a) {
            var b = a || u;
            return j && j.abort(b), c(0, b), this
          }
        };
      if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
      i = l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
      for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
      if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
      u = "abort";
      for (e in {
          success: 1,
          error: 1,
          complete: 1
        }) v[e](l[e]);
      if (j = O(Rb, l, b, v)) {
        v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function() {
          v.abort("timeout")
        }, l.timeout));
        try {
          t = 1, j.send(r, c)
        } catch (a) {
          if (!(2 > t)) throw a;
          c(-1, a)
        }
      } else c(-1, "No Transport");
      return v
    },
    getJSON: function(a, b, c) {
      return ea.get(a, b, c, "json")
    },
    getScript: function(a, b) {
      return ea.get(a, void 0, b, "script")
    }
  }), ea.each(["get", "post"], function(a, b) {
    ea[b] = function(a, c, d, e) {
      return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
        url: a,
        type: b,
        dataType: e,
        data: c,
        success: d
      })
    }
  }), ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
    ea.fn[b] = function(a) {
      return this.on(b, a)
    }
  }), ea._evalUrl = function(a) {
    return ea.ajax({
      url: a,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    })
  }, ea.fn.extend({
    wrapAll: function(a) {
      if (ea.isFunction(a)) return this.each(function(b) {
        ea(this).wrapAll(a.call(this, b))
      });
      if (this[0]) {
        var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
        this[0].parentNode && b.insertBefore(this[0]), b.map(function() {
          for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
          return a
        }).append(this)
      }
      return this
    },
    wrapInner: function(a) {
      return this.each(ea.isFunction(a) ? function(b) {
        ea(this).wrapInner(a.call(this, b))
      } : function() {
        var b = ea(this),
          c = b.contents();
        c.length ? c.wrapAll(a) : b.append(a)
      })
    },
    wrap: function(a) {
      var b = ea.isFunction(a);
      return this.each(function(c) {
        ea(this).wrapAll(b ? a.call(this, c) : a)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
      }).end()
    }
  }), ea.expr.filters.hidden = function(a) {
    return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
  }, ea.expr.filters.visible = function(a) {
    return !ea.expr.filters.hidden(a)
  };
  var Tb = /%20/g,
    Ub = /\[\]$/,
    Vb = /\r?\n/g,
    Wb = /^(?:submit|button|image|reset|file)$/i,
    Xb = /^(?:input|select|textarea|keygen)/i;
  ea.param = function(a, b) {
    var c, d = [],
      e = function(a, b) {
        b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
      };
    if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function() {
      e(this.name, this.value)
    });
    else
      for (c in a) S(c, a[c], b, e);
    return d.join("&").replace(Tb, "+")
  }, ea.fn.extend({
    serialize: function() {
      return ea.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var a = ea.prop(this, "elements");
        return a ? ea.makeArray(a) : this
      }).filter(function() {
        var a = this.type;
        return this.name && !ea(this).is(":disabled") && Xb.test(this.nodeName) && !Wb.test(a) && (this.checked || !Ea.test(a))
      }).map(function(a, b) {
        var c = ea(this).val();
        return null == c ? null : ea.isArray(c) ? ea.map(c, function(a) {
          return {
            name: b.name,
            value: a.replace(Vb, "\r\n")
          }
        }) : {
          name: b.name,
          value: c.replace(Vb, "\r\n")
        }
      }).get()
    }
  }), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() {
    return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
  } : T;
  var Yb = 0,
    Zb = {},
    $b = ea.ajaxSettings.xhr();
  a.ActiveXObject && ea(a).on("unload", function() {
    for (var a in Zb) Zb[a](void 0, !0)
  }), ca.cors = !!$b && "withCredentials" in $b, $b = ca.ajax = !!$b, $b && ea.ajaxTransport(function(a) {
    if (!a.crossDomain || ca.cors) {
      var b;
      return {
        send: function(c, d) {
          var e, f = a.xhr(),
            g = ++Yb;
          if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
            for (e in a.xhrFields) f[e] = a.xhrFields[e];
          a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
          for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
          f.send(a.hasContent && a.data || null), b = function(c, e) {
            var h, i, j;
            if (b && (e || 4 === f.readyState))
              if (delete Zb[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
              else {
                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                try {
                  i = f.statusText
                } catch (a) {
                  i = ""
                }
                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
              }
            j && d(h, i, j, f.getAllResponseHeaders())
          }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Zb[g] = b : b()
        },
        abort: function() {
          b && b(void 0, !0)
        }
      }
    }
  }), ea.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(a) {
        return ea.globalEval(a), a
      }
    }
  }), ea.ajaxPrefilter("script", function(a) {
    void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
  }), ea.ajaxTransport("script", function(a) {
    if (a.crossDomain) {
      var b, c = oa.head || ea("head")[0] || oa.documentElement;
      return {
        send: function(d, e) {
          b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
            (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
          }, c.insertBefore(b, c.firstChild)
        },
        abort: function() {
          b && b.onload(void 0, !0)
        }
      }
    }
  });
  var _b = [],
    ac = /(=)\?(?=&|$)|\?\?/;
  ea.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var a = _b.pop() || ea.expando + "_" + Eb++;
      return this[a] = !0, a
    }
  }), ea.ajaxPrefilter("json jsonp", function(b, c, d) {
    var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
    return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() {
      return g || ea.error(e + " was not called"), g[0]
    }, b.dataTypes[0] = "json", f = a[e], a[e] = function() {
      g = arguments
    }, d.always(function() {
      a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
    }), "script") : void 0
  }), ea.parseHTML = function(a, b, c) {
    if (!a || "string" != typeof a) return null;
    "boolean" == typeof b && (c = b, b = !1), b = b || oa;
    var d = la.exec(a),
      e = !c && [];
    return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
  };
  var bc = ea.fn.load;
  ea.fn.load = function(a, b, c) {
    if ("string" != typeof a && bc) return bc.apply(this, arguments);
    var d, e, f, g = this,
      h = a.indexOf(" ");
    return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
      url: a,
      type: f,
      dataType: "html",
      data: b
    }).done(function(a) {
      e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a);
    }).complete(c && function(a, b) {
      g.each(c, e || [a.responseText, b, a])
    }), this
  }, ea.expr.filters.animated = function(a) {
    return ea.grep(ea.timers, function(b) {
      return a === b.elem
    }).length
  };
  var cc = a.document.documentElement;
  ea.offset = {
    setOffset: function(a, b, c) {
      var d, e, f, g, h, i, j, k = ea.css(a, "position"),
        l = ea(a),
        m = {};
      "static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
    }
  }, ea.fn.extend({
    offset: function(a) {
      if (arguments.length) return void 0 === a ? this : this.each(function(b) {
        ea.offset.setOffset(this, a, b)
      });
      var b, c, d = {
          top: 0,
          left: 0
        },
        e = this[0],
        f = e && e.ownerDocument;
      return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
        top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
        left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
      }) : d) : void 0
    },
    position: function() {
      if (this[0]) {
        var a, b, c = {
            top: 0,
            left: 0
          },
          d = this[0];
        return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
          top: b.top - c.top - ea.css(d, "marginTop", !0),
          left: b.left - c.left - ea.css(d, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var a = this.offsetParent || cc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
        return a || cc
      })
    }
  }), ea.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(a, b) {
    var c = /Y/.test(b);
    ea.fn[a] = function(d) {
      return Da(this, function(a, d, e) {
        var f = V(a);
        return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
      }, a, d, arguments.length, null)
    }
  }), ea.each(["top", "left"], function(a, b) {
    ea.cssHooks[b] = A(ca.pixelPosition, function(a, c) {
      return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
    })
  }), ea.each({
    Height: "height",
    Width: "width"
  }, function(a, b) {
    ea.each({
      padding: "inner" + a,
      content: b,
      "": "outer" + a
    }, function(c, d) {
      ea.fn[d] = function(d, e) {
        var f = arguments.length && (c || "boolean" != typeof d),
          g = c || (d === !0 || e === !0 ? "margin" : "border");
        return Da(this, function(b, c, d) {
          var e;
          return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
        }, b, f ? d : void 0, f, null)
      }
    })
  }), ea.fn.size = function() {
    return this.length
  }, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ea
  });
  var dc = a.jQuery,
    ec = a.$;
  return ea.noConflict = function(b) {
    return a.$ === ea && (a.$ = ec), b && a.jQuery === ea && (a.jQuery = dc), ea
  }, typeof b === xa && (a.jQuery = a.$ = ea), ea
}), window.Modernizr = function(a, b, c) {
    function d(a) {
      s.cssText = a
    }

    function e(a, b) {
      return typeof a === b
    }

    function f(a, b) {
      return !!~("" + a).indexOf(b)
    }

    function g(a, b) {
      for (var d in a) {
        var e = a[d];
        if (!f(e, "-") && s[e] !== c) return "pfx" != b || e
      }
      return !1
    }

    function h(a, b, d) {
      for (var f in a) {
        var g = b[a[f]];
        if (g !== c) return d === !1 ? a[f] : e(g, "function") ? g.bind(d || b) : g
      }
      return !1
    }

    function i(a, b, c) {
      var d = a.charAt(0).toUpperCase() + a.slice(1),
        f = (a + " " + w.join(d + " ") + d).split(" ");
      return e(b, "string") || e(b, "undefined") ? g(f, b) : (f = (a + " " + x.join(d + " ") + d).split(" "), h(f, b, c))
    }
    var j, k, l, m = "2.8.3",
      n = {},
      o = !0,
      p = b.documentElement,
      q = "modernizr",
      r = b.createElement(q),
      s = r.style,
      t = ":)",
      u = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      v = "Webkit Moz O ms",
      w = v.split(" "),
      x = v.toLowerCase().split(" "),
      y = {
        svg: "http://www.w3.org/2000/svg"
      },
      z = {},
      A = [],
      B = A.slice,
      C = function(a, c, d, e) {
        var f, g, h, i, j = b.createElement("div"),
          k = b.body,
          l = k || b.createElement("body");
        if (parseInt(d, 10))
          for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : q + (d + 1), j.appendChild(h);
        return f = ["&#173;", '<style id="s', q, '">', a, "</style>"].join(""), j.id = q, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = p.style.overflow, p.style.overflow = "hidden", p.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), p.style.overflow = i), !!g
      },
      D = {}.hasOwnProperty;
    l = e(D, "undefined") || e(D.call, "undefined") ? function(a, b) {
      return b in a && e(a.constructor.prototype[b], "undefined")
    } : function(a, b) {
      return D.call(a, b)
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
      var b = this;
      if ("function" != typeof b) throw new TypeError;
      var c = B.call(arguments, 1),
        d = function() {
          if (this instanceof d) {
            var e = function() {};
            e.prototype = b.prototype;
            var f = new e,
              g = b.apply(f, c.concat(B.call(arguments)));
            return Object(g) === g ? g : f
          }
          return b.apply(a, c.concat(B.call(arguments)))
        };
      return d
    }), z.touch = function() {
      var c;
      return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : C(["@media (", u.join("touch-enabled),("), q, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
        c = 9 === a.offsetTop
      }), c
    }, z.backgroundsize = function() {
      return i("backgroundSize")
    }, z.cssanimations = function() {
      return i("animationName")
    }, z.csscolumns = function() {
      return i("columnCount")
    }, z.csstransforms = function() {
      return !!i("transform")
    }, z.generatedcontent = function() {
      var a;
      return C(["#", q, "{font:0/0 a}#", q, ':after{content:"', t, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
        a = b.offsetHeight >= 3
      }), a
    }, z.svg = function() {
      return !!b.createElementNS && !!b.createElementNS(y.svg, "svg").createSVGRect
    };
    for (var E in z) l(z, E) && (k = E.toLowerCase(), n[k] = z[E](), A.push((n[k] ? "" : "no-") + k));
    return n.addTest = function(a, b) {
        if ("object" == typeof a)
          for (var d in a) l(a, d) && n.addTest(d, a[d]);
        else {
          if (a = a.toLowerCase(), n[a] !== c) return n;
          b = "function" == typeof b ? b() : b, "undefined" != typeof o && o && (p.className += " " + (b ? "" : "no-") + a), n[a] = b
        }
        return n
      }, d(""), r = j = null,
      function(a, b) {
        function c(a, b) {
          var c = a.createElement("p"),
            d = a.getElementsByTagName("head")[0] || a.documentElement;
          return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
        }

        function d() {
          var a = s.elements;
          return "string" == typeof a ? a.split(" ") : a
        }

        function e(a) {
          var b = r[a[p]];
          return b || (b = {}, q++, a[p] = q, r[q] = b), b
        }

        function f(a, c, d) {
          if (c || (c = b), k) return c.createElement(a);
          d || (d = e(c));
          var f;
          return f = d.cache[a] ? d.cache[a].cloneNode() : o.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || n.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
        }

        function g(a, c) {
          if (a || (a = b), k) return a.createDocumentFragment();
          c = c || e(a);
          for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++) f.createElement(h[g]);
          return f
        }

        function h(a, b) {
          b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
            return s.shivMethods ? f(c, a, b) : b.createElem(c)
          }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
            return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
          }) + ");return n}")(s, b.frag)
        }

        function i(a) {
          a || (a = b);
          var d = e(a);
          return s.shivCSS && !j && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || h(a, d), a
        }
        var j, k, l = "3.7.0",
          m = a.html5 || {},
          n = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
          o = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
          p = "_html5shiv",
          q = 0,
          r = {};
        ! function() {
          try {
            var a = b.createElement("a");
            a.innerHTML = "<xyz></xyz>", j = "hidden" in a, k = 1 == a.childNodes.length || function() {
              b.createElement("a");
              var a = b.createDocumentFragment();
              return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
            }()
          } catch (a) {
            j = !0, k = !0
          }
        }();
        var s = {
          elements: m.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
          version: l,
          shivCSS: m.shivCSS !== !1,
          supportsUnknownElements: k,
          shivMethods: m.shivMethods !== !1,
          type: "default",
          shivDocument: i,
          createElement: f,
          createDocumentFragment: g
        };
        a.html5 = s, i(b)
      }(this, b), n._version = m, n._prefixes = u, n._domPrefixes = x, n._cssomPrefixes = w, n.testProp = function(a) {
        return g([a])
      }, n.testAllProps = i, n.testStyles = C, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (o ? " js " + A.join(" ") : ""), n
  }(this, this.document),
  function(a, b, c) {
    function d(a) {
      return "[object Function]" == q.call(a)
    }

    function e(a) {
      return "string" == typeof a
    }

    function f() {}

    function g(a) {
      return !a || "loaded" == a || "complete" == a || "uninitialized" == a
    }

    function h() {
      var a = r.shift();
      s = 1, a ? a.t ? o(function() {
        ("c" == a.t ? m.injectCss : m.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
      }, 0) : (a(), h()) : s = 0
    }

    function i(a, c, d, e, f, i, j) {
      function k(b) {
        if (!n && g(l.readyState) && (t.r = n = 1, !s && h(), l.onload = l.onreadystatechange = null, b)) {
          "img" != a && o(function() {
            v.removeChild(l)
          }, 50);
          for (var d in A[c]) A[c].hasOwnProperty(d) && A[c][d].onload()
        }
      }
      var j = j || m.errorTimeout,
        l = b.createElement(a),
        n = 0,
        q = 0,
        t = {
          t: d,
          s: c,
          e: f,
          a: i,
          x: j
        };
      1 === A[c] && (q = 1, A[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
        k.call(this, q)
      }, r.splice(e, 0, t), "img" != a && (q || 2 === A[c] ? (v.insertBefore(l, u ? null : p), o(k, j)) : A[c].push(l))
    }

    function j(a, b, c, d, f) {
      return s = 0, b = b || "j", e(a) ? i("c" == b ? x : w, a, b, this.i++, c, d, f) : (r.splice(this.i++, 0, a), 1 == r.length && h()), this
    }

    function k() {
      var a = m;
      return a.loader = {
        load: j,
        i: 0
      }, a
    }
    var l, m, n = b.documentElement,
      o = a.setTimeout,
      p = b.getElementsByTagName("script")[0],
      q = {}.toString,
      r = [],
      s = 0,
      t = "MozAppearance" in n.style,
      u = t && !!b.createRange().compareNode,
      v = u ? n : p.parentNode,
      n = a.opera && "[object Opera]" == q.call(a.opera),
      n = !!b.attachEvent && !n,
      w = t ? "object" : n ? "script" : "img",
      x = n ? "script" : w,
      y = Array.isArray || function(a) {
        return "[object Array]" == q.call(a)
      },
      z = [],
      A = {},
      B = {
        timeout: function(a, b) {
          return b.length && (a.timeout = b[0]), a
        }
      };
    m = function(a) {
      function b(a) {
        var b, c, d, a = a.split("!"),
          e = z.length,
          f = a.pop(),
          g = a.length,
          f = {
            url: f,
            origUrl: f,
            prefixes: a
          };
        for (c = 0; c < g; c++) d = a[c].split("="), (b = B[d.shift()]) && (f = b(f, d));
        for (c = 0; c < e; c++) f = z[c](f);
        return f
      }

      function g(a, e, f, g, h) {
        var i = b(a),
          j = i.autoCallback;
        i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (A[i.url] ? i.noexec = !0 : A[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
          k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), A[i.url] = 2
        })))
      }

      function h(a, b) {
        function c(a, c) {
          if (a) {
            if (e(a)) c || (l = function() {
              var a = [].slice.call(arguments);
              m.apply(this, a), n()
            }), g(a, l, b, 0, j);
            else if (Object(a) === a)
              for (i in h = function() {
                  var b, c = 0;
                  for (b in a) a.hasOwnProperty(b) && c++;
                  return c
                }(), a) a.hasOwnProperty(i) && (!c && !--h && (d(l) ? l = function() {
                var a = [].slice.call(arguments);
                m.apply(this, a), n()
              } : l[i] = function(a) {
                return function() {
                  var b = [].slice.call(arguments);
                  a && a.apply(this, b), n()
                }
              }(m[i])), g(a[i], l, b, i, j))
          } else !c && n()
        }
        var h, i, j = !!a.test,
          k = a.load || a.both,
          l = a.callback || f,
          m = l,
          n = a.complete || f;
        c(j ? a.yep : a.nope, !!k), k && c(k)
      }
      var i, j, l = this.yepnope.loader;
      if (e(a)) g(a, 0, l, 0);
      else if (y(a))
        for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : y(j) ? m(j) : Object(j) === j && h(j, l);
      else Object(a) === a && h(a, l)
    }, m.addPrefix = function(a, b) {
      B[a] = b
    }, m.addFilter = function(a) {
      z.push(a)
    }, m.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", l = function() {
      b.removeEventListener("DOMContentLoaded", l, 0), b.readyState = "complete"
    }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
      var k, l, n = b.createElement("script"),
        e = e || m.errorTimeout;
      n.src = a;
      for (l in d) n.setAttribute(l, d[l]);
      c = j ? h : c || f, n.onreadystatechange = n.onload = function() {
        !k && g(n.readyState) && (k = 1, c(), n.onload = n.onreadystatechange = null)
      }, o(function() {
        k || (k = 1, c(1))
      }, e), i ? n.onload() : p.parentNode.insertBefore(n, p)
    }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
      var j, e = b.createElement("link"),
        c = i ? h : c || f;
      e.href = a, e.rel = "stylesheet", e.type = "text/css";
      for (j in d) e.setAttribute(j, d[j]);
      g || (p.parentNode.insertBefore(e, p), o(c, 0))
    }
  }(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
  }, window.matchMedia = window.matchMedia || function(a, b) {
    var c = a.documentElement,
      d = c.firstElementChild || c.firstChild,
      e = a.createElement("body"),
      f = a.createElement("div");
    f.id = "mq-test-1", f.style.cssText = "position:absolute;top:-100em", e.style.background = "none", e.appendChild(f);
    var g, h = function(a) {
        return f.innerHTML = '&shy;<style media="' + a + '"> #mq-test-1 { width: 42px; }</style>', c.insertBefore(e, d), bool = 42 === f.offsetWidth, c.removeChild(e), {
          matches: bool,
          media: a
        }
      },
      i = function() {
        var b, d = c.body,
          e = !1;
        return f.style.cssText = "position:absolute;font-size:1em;width:1em", d || (d = e = a.createElement("body"), d.style.background = "none"), d.appendChild(f), c.insertBefore(d, c.firstChild), e ? c.removeChild(d) : d.removeChild(f), b = g = parseFloat(f.offsetWidth)
      },
      j = h("(min-width: 0px)").matches;
    return function(b) {
      if (j) return h(b);
      var c = b.match(/\(min\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
        d = b.match(/\(max\-width:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/) && parseFloat(RegExp.$1) + (RegExp.$2 || ""),
        e = null === c,
        f = null === d,
        k = a.body.offsetWidth,
        l = "em";
      return c && (c = parseFloat(c) * (c.indexOf(l) > -1 ? g || i() : 1)), d && (d = parseFloat(d) * (d.indexOf(l) > -1 ? g || i() : 1)), bool = (!e || !f) && (e || k >= c) && (f || k <= d), {
        matches: bool,
        media: b
      }
    }
  }(document), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeInQuad",
    swing: function(a, b, c, d, e) {
      return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
    },
    easeInQuad: function(a, b, c, d, e) {
      return d * (b /= e) * b + c
    },
    easeOutQuad: function(a, b, c, d, e) {
      return -d * (b /= e) * (b - 2) + c
    },
    easeInOutQuad: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
    },
    easeInCubic: function(a, b, c, d, e) {
      return d * (b /= e) * b * b + c
    },
    easeOutCubic: function(a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b + 1) + c
    },
    easeInOutCubic: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
    },
    easeInQuart: function(a, b, c, d, e) {
      return d * (b /= e) * b * b * b + c
    },
    easeOutQuart: function(a, b, c, d, e) {
      return -d * ((b = b / e - 1) * b * b * b - 1) + c
    },
    easeInOutQuart: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
    },
    easeInQuint: function(a, b, c, d, e) {
      return d * (b /= e) * b * b * b * b + c
    },
    easeOutQuint: function(a, b, c, d, e) {
      return d * ((b = b / e - 1) * b * b * b * b + 1) + c
    },
    easeInOutQuint: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
    },
    easeInSine: function(a, b, c, d, e) {
      return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
    },
    easeOutSine: function(a, b, c, d, e) {
      return d * Math.sin(b / e * (Math.PI / 2)) + c
    },
    easeInOutSine: function(a, b, c, d, e) {
      return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
    },
    easeInExpo: function(a, b, c, d, e) {
      return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
    },
    easeOutExpo: function(a, b, c, d, e) {
      return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
    },
    easeInOutExpo: function(a, b, c, d, e) {
      return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
    },
    easeInCirc: function(a, b, c, d, e) {
      return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
    },
    easeOutCirc: function(a, b, c, d, e) {
      return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
    },
    easeInOutCirc: function(a, b, c, d, e) {
      return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
    },
    easeInElastic: function(a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (1 == (b /= e)) return c + d;
      if (g || (g = .3 * e), h < Math.abs(d)) {
        h = d;
        var f = g / 4
      } else var f = g / (2 * Math.PI) * Math.asin(d / h);
      return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
    },
    easeOutElastic: function(a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (1 == (b /= e)) return c + d;
      if (g || (g = .3 * e), h < Math.abs(d)) {
        h = d;
        var f = g / 4
      } else var f = g / (2 * Math.PI) * Math.asin(d / h);
      return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
    },
    easeInOutElastic: function(a, b, c, d, e) {
      var f = 1.70158,
        g = 0,
        h = d;
      if (0 == b) return c;
      if (2 == (b /= e / 2)) return c + d;
      if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
        h = d;
        var f = g / 4
      } else var f = g / (2 * Math.PI) * Math.asin(d / h);
      return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
    },
    easeInBack: function(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
    },
    easeOutBack: function(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
    },
    easeInOutBack: function(a, b, c, d, e, f) {
      return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
    },
    easeInBounce: function(a, b, c, d, e) {
      return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
    },
    easeOutBounce: function(a, b, c, d, e) {
      return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
    },
    easeInOutBounce: function(a, b, c, d, e) {
      return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
    }
  }),
  function(a) {
    "use strict";

    function b(a) {
      a.condition() || ("function" == typeof a.exit && a.exit(), a.is_active = !1)
    }

    function c(a) {
      a.condition() && ("function" == typeof a.first_enter && (a.first_enter(), delete a.first_enter), "function" == typeof a.enter && a.enter(), a.is_active = !0)
    }

    function d(a) {
      a.is_active ? b(a) : c(a)
    }

    function e() {
      var d = a.grep(f, function(a) {
          return a.is_active
        }),
        e = a.grep(f, function(a) {
          return !a.is_active
        });
      a.each(d, function(a, c) {
        b(c)
      }), a.each(e, function(a, b) {
        c(b)
      })
    }
    var f = [];
    a.breakpoint = function(b, c) {
      c = a.extend(!0, {}, a.breakpoint.defaults, c), f.push(b), 1 === f.length && a(window).on("resize orientationchange", function() {
        e()
      }), d(b)
    }, a.breakpoint.breakpoints = f, a.breakpoint.defaults = {}
  }(jQuery),
  function(a) {
    function b(a) {
      var b = [],
        c = {
          multiplier: 0,
          offset: 0
        };
      return "even" === a ? a = "2n" : "odd" === a ? a = "2n+1" : /^\d*$/.test(a) && (a = "0n+" + a), b = g.exec(a), null !== b && (c.multiplier = b[1] - 0, c.offset = b[2] - 0), c
    }

    function c(b, c) {
      var d, e, f = [],
        g = 0,
        h = [];
      return a.each(b, function(a, b) {
        var c = 0,
          i = 0,
          j = b.rowSpan || 1,
          k = b.colSpan || 1;
        for (b.parentNode !== d && (d = b.parentNode, d.parentNode !== e && (e = d.parentNode, f = []), g = 0, void 0 === f[d.rowIndex] && (f[d.rowIndex] = [])), c = 0; c < f[d.rowIndex].length + 1; c += 1)
          if (void 0 === f[d.rowIndex][c]) {
            g = c;
            break
          }
        for (h[a] = g, c = d.rowIndex; c < d.rowIndex + j; c += 1)
          for (void 0 === f[c] && (f[c] = []), i = g; i < g + k; i += 1) f[c][i] = !0
      }), h
    }

    function d(a, b, c) {
      var d = e[c] - (f.offset - 1);
      return 0 === f.multiplier ? 0 === d : d % f.multiplier === 0 && d / f.multiplier >= 0
    }
    var e, f, g = /([\+\-]?\d*)[nN]([\+\-]?\d*)/,
      h = jQuery.expr.filter.PSEUDO;
    a.extend(jQuery.fn, {
      nthCol: function(g) {
        return f = b(g), e = c(this), a(this).filter(function(a) {
          return d(this, void 0, a)
        })
      }
    }), a.extend(jQuery.expr.match, {
      COLUMN: new RegExp(":nth-col\\((even|odd|[\\dnN\\+\\-]*)\\)(?![\\^\\[]*\\])(?![\\^\\(]*\\))")
    }), a.extend(jQuery.expr.leftMatch, {
      COLUMN: new RegExp("(^(?:.|\\r|\\n)*?):nth-col\\((even|odd|[\\dnN\\+\\-]*)\\)(?![\\^\\[]*\\])(?![\\^\\(]*\\))")
    }), a.extend(jQuery.expr.preFilter, {
      COLUMN: function(a, d) {
        return f = b(a[1]), e = c(d), a
      }
    }), a.extend(jQuery.expr.filter, {
      PSEUDO: function(a, b, c, d) {
        var e = b ? b[1] : "";
        if ("nth-col" !== e) return h(a, b, c, d)
      }
    }), a.extend(jQuery.expr.filter, {
      COLUMN: d
    })
  }(jQuery),
  function(a) {
    a.fn.detachWithPlaceholder = function() {
      return this.each(function() {
        var b = a(this);
        if (!b.data("detached-placeholder")) {
          var c = a("<span>", {
            css: {
              position: "absolute",
              top: -99999,
              left: -99999
            }
          }).insertAfter(b);
          b.detach(), b.data("detached-placeholder", c)
        }
      })
    }, a.fn.attachToPlaceholder = function() {
      return this.each(function() {
        var b = a(this),
          c = b.data("detached-placeholder");
        c && (c.replaceWith(b), b.removeData("detached-placeholder"), delete c)
      })
    }
  }(jQuery),
  function(a) {
    a.flexslider = function(b, c) {
      var d = a(b),
        e = a.extend({}, a.flexslider.defaults, c),
        f = e.namespace,
        g = "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch,
        h = g ? "touchend" : "click",
        i = "vertical" === e.direction,
        j = e.reverse,
        k = 0 < e.itemWidth,
        l = "fade" === e.animation,
        m = "" !== e.asNavFor,
        n = {};
      a.data(b, "flexslider", d), n = {
        init: function() {
          d.animating = !1, d.currentSlide = e.startAt, d.animatingTo = d.currentSlide, d.atEnd = 0 === d.currentSlide || d.currentSlide === d.last, d.containerSelector = e.selector.substr(0, e.selector.search(" ")), d.slides = a(e.selector, d), d.container = a(d.containerSelector, d), d.count = d.slides.length, d.syncExists = 0 < a(e.sync).length, "slide" === e.animation && (e.animation = "swing"), d.prop = i ? "top" : "marginLeft", d.args = {}, d.manualPause = !1;
          var b, c = d;
          if ((b = !e.video) && (b = !l) && (b = e.useCSS)) a: {
            b = document.createElement("div");
            var f, h = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
            for (f in h)
              if (void 0 !== b.style[h[f]]) {
                d.pfx = h[f].replace("Perspective", "").toLowerCase(), d.prop = "-" + d.pfx + "-transform", b = !0;
                break a
              }
            b = !1
          }
          c.transitions = b, "" !== e.controlsContainer && (d.controlsContainer = 0 < a(e.controlsContainer).length && a(e.controlsContainer)), "" !== e.manualControls && (d.manualControls = 0 < a(e.manualControls).length && a(e.manualControls)), e.randomize && (d.slides.sort(function() {
            return Math.round(Math.random()) - .5
          }), d.container.empty().append(d.slides)), d.doMath(), m && n.asNav.setup(), d.setup("init"), e.controlNav && n.controlNav.setup(), e.directionNav && n.directionNav.setup(), e.keyboard && (1 === a(d.containerSelector).length || e.multipleKeyboard) && a(document).bind("keyup", function(a) {
            a = a.keyCode, d.animating || 39 !== a && 37 !== a || (a = 39 === a ? d.getTarget("next") : 37 === a && d.getTarget("prev"), d.flexAnimate(a, e.pauseOnAction))
          }), e.mousewheel && d.bind("mousewheel", function(a, b) {
            a.preventDefault();
            var c = 0 > b ? d.getTarget("next") : d.getTarget("prev");
            d.flexAnimate(c, e.pauseOnAction)
          }), e.pausePlay && n.pausePlay.setup(), e.slideshow && (e.pauseOnHover && d.hover(function() {
            !d.manualPlay && !d.manualPause && d.pause()
          }, function() {
            !d.manualPause && !d.manualPlay && d.play()
          }), 0 < e.initDelay ? setTimeout(d.play, e.initDelay) : d.play()), g && e.touch && n.touch(), (!l || l && e.smoothHeight) && a(window).bind("resize focus", n.resize), setTimeout(function() {
            e.start(d)
          }, 200)
        },
        asNav: {
          setup: function() {
            d.asNav = !0, d.animatingTo = Math.floor(d.currentSlide / d.move), d.currentItem = d.currentSlide, d.slides.removeClass(f + "active-slide").eq(d.currentItem).addClass(f + "active-slide"), d.slides.click(function(b) {
              b.preventDefault(), b = a(this);
              var c = b.index();
              !a(e.asNavFor).data("flexslider").animating && !b.hasClass("active") && (d.direction = d.currentItem < c ? "next" : "prev", d.flexAnimate(c, e.pauseOnAction, !1, !0, !0))
            })
          }
        },
        controlNav: {
          setup: function() {
            d.manualControls ? n.controlNav.setupManual() : n.controlNav.setupPaging()
          },
          setupPaging: function() {
            var b, c = 1;
            if (d.controlNavScaffold = a('<ol class="' + f + "control-nav " + f + ("thumbnails" === e.controlNav ? "control-thumbs" : "control-paging") + '"></ol>'), 1 < d.pagingCount)
              for (var i = 0; i < d.pagingCount; i++) b = "thumbnails" === e.controlNav ? '<img src="' + d.slides.eq(i).attr("data-thumb") + '"/>' : "<a>" + c + "</a>", d.controlNavScaffold.append("<li>" + b + "</li>"), c++;
            d.controlsContainer ? a(d.controlsContainer).append(d.controlNavScaffold) : d.append(d.controlNavScaffold), n.controlNav.set(), n.controlNav.active(), d.controlNavScaffold.delegate("a, img", h, function(b) {
              b.preventDefault(), b = a(this);
              var c = d.controlNav.index(b);
              b.hasClass(f + "active") || (d.direction = c > d.currentSlide ? "next" : "prev", d.flexAnimate(c, e.pauseOnAction))
            }), g && d.controlNavScaffold.delegate("a", "click touchstart", function(a) {
              a.preventDefault()
            })
          },
          setupManual: function() {
            d.controlNav = d.manualControls, n.controlNav.active(), d.controlNav.on(h, function(b) {
              b.preventDefault(), b = a(this);
              var c = d.controlNav.index(b);
              b.hasClass(f + "active") || (c > d.currentSlide ? d.direction = "next" : d.direction = "prev", d.flexAnimate(c, e.pauseOnAction))
            }), g && d.controlNav.on("click touchstart", function(a) {
              a.preventDefault()
            })
          },
          set: function() {
            d.controlNav = a("." + f + "control-nav li " + ("thumbnails" === e.controlNav ? "img" : "a"), d.controlsContainer ? d.controlsContainer : d)
          },
          active: function() {
            d.controlNav.removeClass(f + "active").eq(d.animatingTo).addClass(f + "active")
          },
          update: function(b, c) {
            1 < d.pagingCount && "add" === b ? d.controlNavScaffold.append(a("<li><a>" + d.count + "</a></li>")) : 1 === d.pagingCount ? d.controlNavScaffold.find("li").remove() : d.controlNav.eq(c).closest("li").remove(), n.controlNav.set(), 1 < d.pagingCount && d.pagingCount !== d.controlNav.length ? d.update(c, b) : n.controlNav.active()
          }
        },
        directionNav: {
          setup: function() {
            var b = a('<ul class="' + f + 'direction-nav"><li><a class="' + f + 'prev" href="#">' + e.prevText + '</a></li><li><a class="' + f + 'next" href="#">' + e.nextText + "</a></li></ul>");
            d.controlsContainer ? (a(d.controlsContainer).append(b), d.directionNav = a("." + f + "direction-nav li a", d.controlsContainer)) : (d.append(b), d.directionNav = a("." + f + "direction-nav li a", d)), n.directionNav.update(), d.directionNav.bind(h, function(b) {
              b.preventDefault(), b = a(this).hasClass(f + "next") ? d.getTarget("next") : d.getTarget("prev"), d.flexAnimate(b, e.pauseOnAction)
            }), g && d.directionNav.bind("click touchstart", function(a) {
              a.preventDefault()
            })
          },
          update: function() {
            var a = f + "disabled";
            1 === d.pagingCount ? d.directionNav.addClass(a) : e.animationLoop ? d.directionNav.removeClass(a) : 0 === d.animatingTo ? d.directionNav.removeClass(a).filter("." + f + "prev").addClass(a) : d.animatingTo === d.last ? d.directionNav.removeClass(a).filter("." + f + "next").addClass(a) : d.directionNav.removeClass(a)
          }
        },
        pausePlay: {
          setup: function() {
            var b = a('<div class="' + f + 'pauseplay"><a></a></div>');
            d.controlsContainer ? (d.controlsContainer.append(b), d.pausePlay = a("." + f + "pauseplay a", d.controlsContainer)) : (d.append(b), d.pausePlay = a("." + f + "pauseplay a", d)), n.pausePlay.update(e.slideshow ? f + "pause" : f + "play"), d.pausePlay.bind(h, function(b) {
              b.preventDefault(), a(this).hasClass(f + "pause") ? (d.manualPause = !0, d.manualPlay = !1, d.pause()) : (d.manualPause = !1, d.manualPlay = !0, d.play())
            }), g && d.pausePlay.bind("click touchstart", function(a) {
              a.preventDefault()
            })
          },
          update: function(a) {
            "play" === a ? d.pausePlay.removeClass(f + "pause").addClass(f + "play").text(e.playText) : d.pausePlay.removeClass(f + "play").addClass(f + "pause").text(e.pauseText)
          }
        },
        touch: function() {
          function a(a) {
            n = i ? f - a.touches[0].pageY : f - a.touches[0].pageX, p = i ? Math.abs(n) < Math.abs(a.touches[0].pageX - g) : Math.abs(n) < Math.abs(a.touches[0].pageY - g), (!p || 500 < Number(new Date) - o) && (a.preventDefault(), !l && d.transitions && (e.animationLoop || (n /= 0 === d.currentSlide && 0 > n || d.currentSlide === d.last && 0 < n ? Math.abs(n) / m + 2 : 1), d.setProps(h + n, "setTouch")))
          }

          function c() {
            if (b.removeEventListener("touchmove", a, !1), d.animatingTo === d.currentSlide && !p && null !== n) {
              var i = j ? -n : n,
                k = 0 < i ? d.getTarget("next") : d.getTarget("prev");
              d.canAdvance(k) && (550 > Number(new Date) - o && 50 < Math.abs(i) || Math.abs(i) > m / 2) ? d.flexAnimate(k, e.pauseOnAction) : l || d.flexAnimate(d.currentSlide, e.pauseOnAction, !0)
            }
            b.removeEventListener("touchend", c, !1), h = n = g = f = null
          }
          var f, g, h, m, n, o, p = !1;
          b.addEventListener("touchstart", function(l) {
            d.animating ? l.preventDefault() : 1 === l.touches.length && (d.pause(), m = i ? d.h : d.w, o = Number(new Date), h = k && j && d.animatingTo === d.last ? 0 : k && j ? d.limit - (d.itemW + e.itemMargin) * d.move * d.animatingTo : k && d.currentSlide === d.last ? d.limit : k ? (d.itemW + e.itemMargin) * d.move * d.currentSlide : j ? (d.last - d.currentSlide + d.cloneOffset) * m : (d.currentSlide + d.cloneOffset) * m, f = i ? l.touches[0].pageY : l.touches[0].pageX, g = i ? l.touches[0].pageX : l.touches[0].pageY, b.addEventListener("touchmove", a, !1), b.addEventListener("touchend", c, !1))
          }, !1)
        },
        resize: function() {
          !d.animating && d.is(":visible") && (k || d.doMath(), l ? n.smoothHeight() : k ? (d.slides.width(d.computedW), d.update(d.pagingCount), d.setProps()) : i ? (d.viewport.height(d.h), d.setProps(d.h, "setTotal")) : (e.smoothHeight && n.smoothHeight(), d.newSlides.width(d.computedW), d.setProps(d.computedW, "setTotal")))
        },
        smoothHeight: function(a) {
          if (!i || l) {
            var b = l ? d : d.viewport;
            a ? b.animate({
              height: d.slides.eq(d.animatingTo).height()
            }, a) : b.height(d.slides.eq(d.animatingTo).height())
          }
        },
        sync: function(b) {
          var c = a(e.sync).data("flexslider"),
            f = d.animatingTo;
          switch (b) {
            case "animate":
              c.flexAnimate(f, e.pauseOnAction, !1, !0);
              break;
            case "play":
              !c.playing && !c.asNav && c.play();
              break;
            case "pause":
              c.pause()
          }
        }
      }, d.flexAnimate = function(b, c, h, o, p) {
        if (m && 1 === d.pagingCount && (d.direction = d.currentItem < b ? "next" : "prev"), !d.animating && (d.canAdvance(b, p) || h) && d.is(":visible")) {
          if (m && o) {
            if (h = a(e.asNavFor).data("flexslider"), d.atEnd = 0 === b || b === d.count - 1, h.flexAnimate(b, !0, !1, !0, p), d.direction = d.currentItem < b ? "next" : "prev", h.direction = d.direction, Math.ceil((b + 1) / d.visible) - 1 === d.currentSlide || 0 === b) return d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), !1;
            d.currentItem = b, d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), b = Math.floor(b / d.visible)
          }
          if (d.animating = !0, d.animatingTo = b, e.before(d), c && d.pause(), d.syncExists && !p && n.sync("animate"), e.controlNav && n.controlNav.active(), k || d.slides.removeClass(f + "active-slide").eq(b).addClass(f + "active-slide"), d.atEnd = 0 === b || b === d.last, e.directionNav && n.directionNav.update(), b === d.last && (e.end(d), e.animationLoop || d.pause()), l) g ? (d.slides.eq(d.currentSlide).css({
            opacity: 0,
            zIndex: 1
          }), d.slides.eq(b).css({
            opacity: 1,
            zIndex: 2
          }), d.slides.unbind("webkitTransitionEnd transitionend"), d.slides.eq(d.currentSlide).bind("webkitTransitionEnd transitionend", function() {
            e.after(d)
          }), d.animating = !1, d.currentSlide = d.animatingTo) : (d.slides.eq(d.currentSlide).fadeOut(e.animationSpeed, e.easing), d.slides.eq(b).fadeIn(e.animationSpeed, e.easing, d.wrapup));
          else {
            var q = i ? d.slides.filter(":first").height() : d.computedW;
            k ? (b = e.itemWidth > d.w ? 2 * e.itemMargin : e.itemMargin, b = (d.itemW + b) * d.move * d.animatingTo, b = b > d.limit && 1 !== d.visible ? d.limit : b) : b = 0 === d.currentSlide && b === d.count - 1 && e.animationLoop && "next" !== d.direction ? j ? (d.count + d.cloneOffset) * q : 0 : d.currentSlide === d.last && 0 === b && e.animationLoop && "prev" !== d.direction ? j ? 0 : (d.count + 1) * q : j ? (d.count - 1 - b + d.cloneOffset) * q : (b + d.cloneOffset) * q, d.setProps(b, "", e.animationSpeed), d.transitions ? (e.animationLoop && d.atEnd || (d.animating = !1, d.currentSlide = d.animatingTo), d.container.unbind("webkitTransitionEnd transitionend"), d.container.bind("webkitTransitionEnd transitionend", function() {
              d.wrapup(q)
            })) : d.container.animate(d.args, e.animationSpeed, e.easing, function() {
              d.wrapup(q)
            })
          }
          e.smoothHeight && n.smoothHeight(e.animationSpeed)
        }
      }, d.wrapup = function(a) {
        !l && !k && (0 === d.currentSlide && d.animatingTo === d.last && e.animationLoop ? d.setProps(a, "jumpEnd") : d.currentSlide === d.last && 0 === d.animatingTo && e.animationLoop && d.setProps(a, "jumpStart")), d.animating = !1, d.currentSlide = d.animatingTo, e.after(d)
      }, d.animateSlides = function() {
        d.animating || d.flexAnimate(d.getTarget("next"))
      }, d.pause = function() {
        clearInterval(d.animatedSlides), d.playing = !1, e.pausePlay && n.pausePlay.update("play"), d.syncExists && n.sync("pause")
      }, d.play = function() {
        d.animatedSlides = setInterval(d.animateSlides, e.slideshowSpeed), d.playing = !0, e.pausePlay && n.pausePlay.update("pause"), d.syncExists && n.sync("play")
      }, d.canAdvance = function(a, b) {
        var c = m ? d.pagingCount - 1 : d.last;
        return !!b || (!(!m || d.currentItem !== d.count - 1 || 0 !== a || "prev" !== d.direction) || (!m || 0 !== d.currentItem || a !== d.pagingCount - 1 || "next" === d.direction) && (!(a === d.currentSlide && !m) && (!!e.animationLoop || (!d.atEnd || 0 !== d.currentSlide || a !== c || "next" === d.direction) && (!d.atEnd || d.currentSlide !== c || 0 !== a || "next" !== d.direction))))
      }, d.getTarget = function(a) {
        return d.direction = a, "next" === a ? d.currentSlide === d.last ? 0 : d.currentSlide + 1 : 0 === d.currentSlide ? d.last : d.currentSlide - 1
      }, d.setProps = function(a, b, c) {
        var f, g = a ? a : (d.itemW + e.itemMargin) * d.move * d.animatingTo;
        f = -1 * function() {
          if (k) return "setTouch" === b ? a : j && d.animatingTo === d.last ? 0 : j ? d.limit - (d.itemW + e.itemMargin) * d.move * d.animatingTo : d.animatingTo === d.last ? d.limit : g;
          switch (b) {
            case "setTotal":
              return j ? (d.count - 1 - d.currentSlide + d.cloneOffset) * a : (d.currentSlide + d.cloneOffset) * a;
            case "setTouch":
              return a;
            case "jumpEnd":
              return j ? a : d.count * a;
            case "jumpStart":
              return j ? d.count * a : a;
            default:
              return a
          }
        }() + "px", d.transitions && (f = i ? "translate3d(0," + f + ",0)" : "translate3d(" + f + ",0,0)", c = void 0 !== c ? c / 1e3 + "s" : "0s", d.container.css("-" + d.pfx + "-transition-duration", c)), d.args[d.prop] = f, (d.transitions || void 0 === c) && d.container.css(d.args)
      }, d.setup = function(b) {
        if (l) d.slides.css({
          width: "100%",
          float: "left",
          marginRight: "-100%",
          position: "relative"
        }), "init" === b && (g ? d.slides.css({
          opacity: 0,
          display: "block",
          webkitTransition: "opacity " + e.animationSpeed / 1e3 + "s ease",
          zIndex: 1
        }).eq(d.currentSlide).css({
          opacity: 1,
          zIndex: 2
        }) : d.slides.eq(d.currentSlide).fadeIn(e.animationSpeed, e.easing)), e.smoothHeight && n.smoothHeight();
        else {
          var c, h;
          "init" === b && (d.viewport = a('<div class="' + f + 'viewport"></div>').css({
            overflow: "hidden",
            position: "relative"
          }).appendTo(d).append(d.container), d.cloneCount = 0, d.cloneOffset = 0, j && (h = a.makeArray(d.slides).reverse(), d.slides = a(h), d.container.empty().append(d.slides))), e.animationLoop && !k && (d.cloneCount = 2, d.cloneOffset = 1, "init" !== b && d.container.find(".clone").remove(), d.container.append(d.slides.first().clone().addClass("clone")).prepend(d.slides.last().clone().addClass("clone"))), d.newSlides = a(e.selector, d), c = j ? d.count - 1 - d.currentSlide + d.cloneOffset : d.currentSlide + d.cloneOffset, i && !k ? (d.container.height(200 * (d.count + d.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function() {
            d.newSlides.css({
              display: "block"
            }), d.doMath(), d.viewport.height(d.h), d.setProps(c * d.h, "init")
          }, "init" === b ? 100 : 0)) : (d.container.width(200 * (d.count + d.cloneCount) + "%"), d.setProps(c * d.computedW, "init"), setTimeout(function() {
            d.doMath(), d.newSlides.css({
              width: d.computedW,
              float: "left",
              display: "block"
            }), e.smoothHeight && n.smoothHeight()
          }, "init" === b ? 100 : 0))
        }
        k || d.slides.removeClass(f + "active-slide").eq(d.currentSlide).addClass(f + "active-slide")
      }, d.doMath = function() {
        var a = d.slides.first(),
          b = e.itemMargin,
          c = e.minItems,
          f = e.maxItems;
        d.w = d.width(), d.h = a.height(), d.boxPadding = a.outerWidth() - a.width(), k ? (d.itemT = e.itemWidth + b, d.minW = c ? c * d.itemT : d.w, d.maxW = f ? f * d.itemT : d.w, d.itemW = d.minW > d.w ? (d.w - b * c) / c : d.maxW < d.w ? (d.w - b * f) / f : e.itemWidth > d.w ? d.w : e.itemWidth, d.visible = Math.floor(d.w / (d.itemW + b)), d.move = 0 < e.move && e.move < d.visible ? e.move : d.visible, d.pagingCount = Math.ceil((d.count - d.visible) / d.move + 1), d.last = d.pagingCount - 1, d.limit = 1 === d.pagingCount ? 0 : e.itemWidth > d.w ? (d.itemW + 2 * b) * d.count - d.w - b : (d.itemW + b) * d.count - d.w - b) : (d.itemW = d.w, d.pagingCount = d.count, d.last = d.count - 1), d.computedW = d.itemW - d.boxPadding
      }, d.update = function(a, b) {
        d.doMath(), k || (a < d.currentSlide ? d.currentSlide += 1 : a <= d.currentSlide && 0 !== a && (d.currentSlide -= 1), d.animatingTo = d.currentSlide), e.controlNav && !d.manualControls && ("add" === b && !k || d.pagingCount > d.controlNav.length ? n.controlNav.update("add") : ("remove" === b && !k || d.pagingCount < d.controlNav.length) && (k && d.currentSlide > d.last && (d.currentSlide -= 1, d.animatingTo -= 1), n.controlNav.update("remove", d.last))), e.directionNav && n.directionNav.update()
      }, d.addSlide = function(b, c) {
        var f = a(b);
        d.count += 1, d.last = d.count - 1, i && j ? void 0 !== c ? d.slides.eq(d.count - c).after(f) : d.container.prepend(f) : void 0 !== c ? d.slides.eq(c).before(f) : d.container.append(f), d.update(c, "add"), d.slides = a(e.selector + ":not(.clone)", d), d.setup(), e.added(d)
      }, d.removeSlide = function(b) {
        var c = isNaN(b) ? d.slides.index(a(b)) : b;
        d.count -= 1, d.last = d.count - 1, isNaN(b) ? a(b, d.slides).remove() : i && j ? d.slides.eq(d.last).remove() : d.slides.eq(b).remove(), d.doMath(), d.update(c, "remove"), d.slides = a(e.selector + ":not(.clone)", d), d.setup(), e.removed(d)
      }, n.init()
    }, a.flexslider.defaults = {
      namespace: "flex-",
      selector: ".slides > li",
      animation: "fade",
      easing: "swing",
      direction: "horizontal",
      reverse: !1,
      animationLoop: !0,
      smoothHeight: !1,
      startAt: 0,
      slideshow: !0,
      slideshowSpeed: 7e3,
      animationSpeed: 600,
      initDelay: 0,
      randomize: !1,
      pauseOnAction: !0,
      pauseOnHover: !1,
      useCSS: !0,
      touch: !0,
      video: !1,
      controlNav: !0,
      directionNav: !0,
      prevText: "Previous",
      nextText: "Next",
      keyboard: !0,
      multipleKeyboard: !1,
      mousewheel: !1,
      pausePlay: !1,
      pauseText: "Pause",
      playText: "Play",
      controlsContainer: "",
      manualControls: "",
      sync: "",
      asNavFor: "",
      itemWidth: 0,
      itemMargin: 0,
      minItems: 0,
      maxItems: 0,
      move: 0,
      start: function() {},
      before: function() {},
      after: function() {},
      end: function() {},
      added: function() {},
      removed: function() {}
    }, a.fn.flexslider = function(b) {
      if (void 0 === b && (b = {}), "object" == typeof b) return this.each(function() {
        var c = a(this),
          d = c.find(b.selector ? b.selector : ".slides > li");
        1 === d.length ? (d.fadeIn(400), b.start && b.start(c)) : void 0 == c.data("flexslider") && new a.flexslider(this, b)
      });
      var c = a(this).data("flexslider");
      switch (b) {
        case "play":
          c.play();
          break;
        case "pause":
          c.pause();
          break;
        case "next":
          c.flexAnimate(c.getTarget("next"), !0);
          break;
        case "prev":
        case "previous":
          c.flexAnimate(c.getTarget("prev"), !0);
          break;
        default:
          "number" == typeof b && c.flexAnimate(b, !0)
      }
    }
  }(jQuery),
  function(a) {
    "function" == typeof define && define.amd ? define(["jquery"], a) : a(jQuery)
  }(function(a) {
    function b(b, d) {
      var e, f, g, h = b.nodeName.toLowerCase();
      return "area" === h ? (e = b.parentNode, f = e.name, !(!b.href || !f || "map" !== e.nodeName.toLowerCase()) && (g = a("img[usemap='#" + f + "']")[0], !!g && c(g))) : (/input|select|textarea|button|object/.test(h) ? !b.disabled : "a" === h ? b.href || d : d) && c(b)
    }

    function c(b) {
      return a.expr.filters.visible(b) && !a(b).parents().addBack().filter(function() {
        return "hidden" === a.css(this, "visibility")
      }).length
    }

    function d(a) {
      for (var b, c; a.length && a[0] !== document;) {
        if (b = a.css("position"), ("absolute" === b || "relative" === b || "fixed" === b) && (c = parseInt(a.css("zIndex"), 10), !isNaN(c) && 0 !== c)) return c;
        a = a.parent()
      }
      return 0
    }

    function e() {
      this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
        closeText: "Done",
        prevText: "Prev",
        nextText: "Next",
        currentText: "Today",
        monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        weekHeader: "Wk",
        dateFormat: "mm/dd/yy",
        firstDay: 0,
        isRTL: !1,
        showMonthAfterYear: !1,
        yearSuffix: ""
      }, this._defaults = {
        showOn: "focus",
        showAnim: "fadeIn",
        showOptions: {},
        defaultDate: null,
        appendText: "",
        buttonText: "...",
        buttonImage: "",
        buttonImageOnly: !1,
        hideIfNoPrevNext: !1,
        navigationAsDateFormat: !1,
        gotoCurrent: !1,
        changeMonth: !1,
        changeYear: !1,
        yearRange: "c-10:c+10",
        showOtherMonths: !1,
        selectOtherMonths: !1,
        showWeek: !1,
        calculateWeek: this.iso8601Week,
        shortYearCutoff: "+10",
        minDate: null,
        maxDate: null,
        duration: "fast",
        beforeShowDay: null,
        beforeShow: null,
        onSelect: null,
        onChangeMonthYear: null,
        onClose: null,
        numberOfMonths: 1,
        showCurrentAtPos: 0,
        stepMonths: 1,
        stepBigMonths: 12,
        altField: "",
        altFormat: "",
        constrainInput: !0,
        showButtonPanel: !1,
        autoSize: !1,
        disabled: !1
      }, a.extend(this._defaults, this.regional[""]), this.regional.en = a.extend(!0, {}, this.regional[""]), this.regional["en-US"] = a.extend(!0, {}, this.regional.en), this.dpDiv = f(a("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function f(b) {
      var c = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
      return b.delegate(c, "mouseout", function() {
        a(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).removeClass("ui-datepicker-next-hover")
      }).delegate(c, "mouseover", g)
    }

    function g() {
      a.datepicker._isDisabledDatepicker(k.inline ? k.dpDiv.parent()[0] : k.input[0]) || (a(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), a(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && a(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && a(this).addClass("ui-datepicker-next-hover"))
    }

    function h(b, c) {
      a.extend(b, c);
      for (var d in c) null == c[d] && (b[d] = c[d]);
      return b
    }
    a.ui = a.ui || {}, a.extend(a.ui, {
      version: "1.11.2",
      keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
      }
    }), a.fn.extend({
      scrollParent: function(b) {
        var c = this.css("position"),
          d = "absolute" === c,
          e = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
          f = this.parents().filter(function() {
            var b = a(this);
            return (!d || "static" !== b.css("position")) && e.test(b.css("overflow") + b.css("overflow-y") + b.css("overflow-x"))
          }).eq(0);
        return "fixed" !== c && f.length ? f : a(this[0].ownerDocument || document)
      },
      uniqueId: function() {
        var a = 0;
        return function() {
          return this.each(function() {
            this.id || (this.id = "ui-id-" + ++a)
          })
        }
      }(),
      removeUniqueId: function() {
        return this.each(function() {
          /^ui-id-\d+$/.test(this.id) && a(this).removeAttr("id")
        })
      }
    }), a.extend(a.expr[":"], {
      data: a.expr.createPseudo ? a.expr.createPseudo(function(b) {
        return function(c) {
          return !!a.data(c, b)
        }
      }) : function(b, c, d) {
        return !!a.data(b, d[3])
      },
      focusable: function(c) {
        return b(c, !isNaN(a.attr(c, "tabindex")))
      },
      tabbable: function(c) {
        var d = a.attr(c, "tabindex"),
          e = isNaN(d);
        return (e || d >= 0) && b(c, !e)
      }
    }), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(b, c) {
      function d(b, c, d, f) {
        return a.each(e, function() {
          c -= parseFloat(a.css(b, "padding" + this)) || 0, d && (c -= parseFloat(a.css(b, "border" + this + "Width")) || 0), f && (c -= parseFloat(a.css(b, "margin" + this)) || 0)
        }), c
      }
      var e = "Width" === c ? ["Left", "Right"] : ["Top", "Bottom"],
        f = c.toLowerCase(),
        g = {
          innerWidth: a.fn.innerWidth,
          innerHeight: a.fn.innerHeight,
          outerWidth: a.fn.outerWidth,
          outerHeight: a.fn.outerHeight
        };
      a.fn["inner" + c] = function(b) {
        return void 0 === b ? g["inner" + c].call(this) : this.each(function() {
          a(this).css(f, d(this, b) + "px")
        })
      }, a.fn["outer" + c] = function(b, e) {
        return "number" != typeof b ? g["outer" + c].call(this, b) : this.each(function() {
          a(this).css(f, d(this, b, !0, e) + "px")
        })
      }
    }), a.fn.addBack || (a.fn.addBack = function(a) {
      return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
    }), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = function(b) {
      return function(c) {
        return arguments.length ? b.call(this, a.camelCase(c)) : b.call(this)
      }
    }(a.fn.removeData)), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.fn.extend({
      focus: function(b) {
        return function(c, d) {
          return "number" == typeof c ? this.each(function() {
            var b = this;
            setTimeout(function() {
              a(b).focus(), d && d.call(b)
            }, c)
          }) : b.apply(this, arguments)
        }
      }(a.fn.focus),
      disableSelection: function() {
        var a = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
        return function() {
          return this.bind(a + ".ui-disableSelection", function(a) {
            a.preventDefault()
          })
        }
      }(),
      enableSelection: function() {
        return this.unbind(".ui-disableSelection")
      },
      zIndex: function(b) {
        if (void 0 !== b) return this.css("zIndex", b);
        if (this.length)
          for (var c, d, e = a(this[0]); e.length && e[0] !== document;) {
            if (c = e.css("position"), ("absolute" === c || "relative" === c || "fixed" === c) && (d = parseInt(e.css("zIndex"), 10), !isNaN(d) && 0 !== d)) return d;
            e = e.parent()
          }
        return 0
      }
    }), a.ui.plugin = {
      add: function(b, c, d) {
        var e, f = a.ui[b].prototype;
        for (e in d) f.plugins[e] = f.plugins[e] || [], f.plugins[e].push([c, d[e]])
      },
      call: function(a, b, c, d) {
        var e, f = a.plugins[b];
        if (f && (d || a.element[0].parentNode && 11 !== a.element[0].parentNode.nodeType))
          for (e = 0; f.length > e; e++) a.options[f[e][0]] && f[e][1].apply(a.element, c)
      }
    };
    var i = 0,
      j = Array.prototype.slice;
    a.cleanData = function(b) {
        return function(c) {
          var d, e, f;
          for (f = 0; null != (e = c[f]); f++) try {
            d = a._data(e, "events"), d && d.remove && a(e).triggerHandler("remove")
          } catch (a) {}
          b(c)
        }
      }(a.cleanData), a.widget = function(b, c, d) {
        var e, f, g, h, i = {},
          j = b.split(".")[0];
        return b = b.split(".")[1], e = j + "-" + b, d || (d = c, c = a.Widget), a.expr[":"][e.toLowerCase()] = function(b) {
          return !!a.data(b, e)
        }, a[j] = a[j] || {}, f = a[j][b], g = a[j][b] = function(a, b) {
          return this._createWidget ? void(arguments.length && this._createWidget(a, b)) : new g(a, b)
        }, a.extend(g, f, {
          version: d.version,
          _proto: a.extend({}, d),
          _childConstructors: []
        }), h = new c, h.options = a.widget.extend({}, h.options), a.each(d, function(b, d) {
          return a.isFunction(d) ? void(i[b] = function() {
            var a = function() {
                return c.prototype[b].apply(this, arguments)
              },
              e = function(a) {
                return c.prototype[b].apply(this, a)
              };
            return function() {
              var b, c = this._super,
                f = this._superApply;
              return this._super = a, this._superApply = e, b = d.apply(this, arguments), this._super = c, this._superApply = f, b
            }
          }()) : void(i[b] = d)
        }), g.prototype = a.widget.extend(h, {
          widgetEventPrefix: f ? h.widgetEventPrefix || b : b
        }, i, {
          constructor: g,
          namespace: j,
          widgetName: b,
          widgetFullName: e
        }), f ? (a.each(f._childConstructors, function(b, c) {
          var d = c.prototype;
          a.widget(d.namespace + "." + d.widgetName, g, c._proto)
        }), delete f._childConstructors) : c._childConstructors.push(g), a.widget.bridge(b, g), g
      }, a.widget.extend = function(b) {
        for (var c, d, e = j.call(arguments, 1), f = 0, g = e.length; g > f; f++)
          for (c in e[f]) d = e[f][c], e[f].hasOwnProperty(c) && void 0 !== d && (b[c] = a.isPlainObject(d) ? a.isPlainObject(b[c]) ? a.widget.extend({}, b[c], d) : a.widget.extend({}, d) : d);
        return b
      }, a.widget.bridge = function(b, c) {
        var d = c.prototype.widgetFullName || b;
        a.fn[b] = function(e) {
          var f = "string" == typeof e,
            g = j.call(arguments, 1),
            h = this;
          return e = !f && g.length ? a.widget.extend.apply(null, [e].concat(g)) : e, f ? this.each(function() {
            var c, f = a.data(this, d);
            return "instance" === e ? (h = f, !1) : f ? a.isFunction(f[e]) && "_" !== e.charAt(0) ? (c = f[e].apply(f, g), c !== f && void 0 !== c ? (h = c && c.jquery ? h.pushStack(c.get()) : c, !1) : void 0) : a.error("no such method '" + e + "' for " + b + " widget instance") : a.error("cannot call methods on " + b + " prior to initialization; attempted to call method '" + e + "'")
          }) : this.each(function() {
            var b = a.data(this, d);
            b ? (b.option(e || {}), b._init && b._init()) : a.data(this, d, new c(e, this))
          }), h
        }
      }, a.Widget = function() {}, a.Widget._childConstructors = [], a.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
          disabled: !1,
          create: null
        },
        _createWidget: function(b, c) {
          c = a(c || this.defaultElement || this)[0], this.element = a(c), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = a(), this.hoverable = a(), this.focusable = a(), c !== this && (a.data(c, this.widgetFullName, this), this._on(!0, this.element, {
            remove: function(a) {
              a.target === c && this.destroy()
            }
          }), this.document = a(c.style ? c.ownerDocument : c.document || c), this.window = a(this.document[0].defaultView || this.document[0].parentWindow)), this.options = a.widget.extend({}, this.options, this._getCreateOptions(), b), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: a.noop,
        _getCreateEventData: a.noop,
        _create: a.noop,
        _init: a.noop,
        destroy: function() {
          this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(a.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: a.noop,
        widget: function() {
          return this.element
        },
        option: function(b, c) {
          var d, e, f, g = b;
          if (0 === arguments.length) return a.widget.extend({}, this.options);
          if ("string" == typeof b)
            if (g = {}, d = b.split("."), b = d.shift(), d.length) {
              for (e = g[b] = a.widget.extend({}, this.options[b]), f = 0; d.length - 1 > f; f++) e[d[f]] = e[d[f]] || {}, e = e[d[f]];
              if (b = d.pop(), 1 === arguments.length) return void 0 === e[b] ? null : e[b];
              e[b] = c
            } else {
              if (1 === arguments.length) return void 0 === this.options[b] ? null : this.options[b];
              g[b] = c
            }
          return this._setOptions(g), this
        },
        _setOptions: function(a) {
          var b;
          for (b in a) this._setOption(b, a[b]);
          return this
        },
        _setOption: function(a, b) {
          return this.options[a] = b, "disabled" === a && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!b), b && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
          return this._setOptions({
            disabled: !1
          })
        },
        disable: function() {
          return this._setOptions({
            disabled: !0
          })
        },
        _on: function(b, c, d) {
          var e, f = this;
          "boolean" != typeof b && (d = c, c = b, b = !1), d ? (c = e = a(c), this.bindings = this.bindings.add(c)) : (d = c, c = this.element, e = this.widget()), a.each(d, function(d, g) {
            function h() {
              return b || f.options.disabled !== !0 && !a(this).hasClass("ui-state-disabled") ? ("string" == typeof g ? f[g] : g).apply(f, arguments) : void 0
            }
            "string" != typeof g && (h.guid = g.guid = g.guid || h.guid || a.guid++);
            var i = d.match(/^([\w:-]*)\s*(.*)$/),
              j = i[1] + f.eventNamespace,
              k = i[2];
            k ? e.delegate(k, j, h) : c.bind(j, h)
          })
        },
        _off: function(b, c) {
          c = (c || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, b.unbind(c).undelegate(c), this.bindings = a(this.bindings.not(b).get()), this.focusable = a(this.focusable.not(b).get()), this.hoverable = a(this.hoverable.not(b).get())
        },
        _delay: function(a, b) {
          function c() {
            return ("string" == typeof a ? d[a] : a).apply(d, arguments)
          }
          var d = this;
          return setTimeout(c, b || 0)
        },
        _hoverable: function(b) {
          this.hoverable = this.hoverable.add(b), this._on(b, {
            mouseenter: function(b) {
              a(b.currentTarget).addClass("ui-state-hover")
            },
            mouseleave: function(b) {
              a(b.currentTarget).removeClass("ui-state-hover")
            }
          })
        },
        _focusable: function(b) {
          this.focusable = this.focusable.add(b), this._on(b, {
            focusin: function(b) {
              a(b.currentTarget).addClass("ui-state-focus")
            },
            focusout: function(b) {
              a(b.currentTarget).removeClass("ui-state-focus")
            }
          })
        },
        _trigger: function(b, c, d) {
          var e, f, g = this.options[b];
          if (d = d || {}, c = a.Event(c), c.type = (b === this.widgetEventPrefix ? b : this.widgetEventPrefix + b).toLowerCase(), c.target = this.element[0], f = c.originalEvent)
            for (e in f) e in c || (c[e] = f[e]);
          return this.element.trigger(c, d), !(a.isFunction(g) && g.apply(this.element[0], [c].concat(d)) === !1 || c.isDefaultPrevented())
        }
      }, a.each({
        show: "fadeIn",
        hide: "fadeOut"
      }, function(b, c) {
        a.Widget.prototype["_" + b] = function(d, e, f) {
          "string" == typeof e && (e = {
            effect: e
          });
          var g, h = e ? e === !0 || "number" == typeof e ? c : e.effect || c : b;
          e = e || {}, "number" == typeof e && (e = {
            duration: e
          }), g = !a.isEmptyObject(e), e.complete = f, e.delay && d.delay(e.delay), g && a.effects && a.effects.effect[h] ? d[b](e) : h !== b && d[h] ? d[h](e.duration, e.easing, f) : d.queue(function(c) {
            a(this)[b](), f && f.call(d[0]), c()
          })
        }
      }), a.widget,
      function() {
        function b(a, b, c) {
          return [parseFloat(a[0]) * (n.test(a[0]) ? b / 100 : 1), parseFloat(a[1]) * (n.test(a[1]) ? c / 100 : 1)]
        }

        function c(b, c) {
          return parseInt(a.css(b, c), 10) || 0
        }

        function d(b) {
          var c = b[0];
          return 9 === c.nodeType ? {
            width: b.width(),
            height: b.height(),
            offset: {
              top: 0,
              left: 0
            }
          } : a.isWindow(c) ? {
            width: b.width(),
            height: b.height(),
            offset: {
              top: b.scrollTop(),
              left: b.scrollLeft()
            }
          } : c.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
              top: c.pageY,
              left: c.pageX
            }
          } : {
            width: b.outerWidth(),
            height: b.outerHeight(),
            offset: b.offset()
          }
        }
        a.ui = a.ui || {};
        var e, f, g = Math.max,
          h = Math.abs,
          i = Math.round,
          j = /left|center|right/,
          k = /top|center|bottom/,
          l = /[\+\-]\d+(\.[\d]+)?%?/,
          m = /^\w+/,
          n = /%$/,
          o = a.fn.position;
        a.position = {
            scrollbarWidth: function() {
              if (void 0 !== e) return e;
              var b, c, d = a("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                f = d.children()[0];
              return a("body").append(d), b = f.offsetWidth, d.css("overflow", "scroll"), c = f.offsetWidth, b === c && (c = d[0].clientWidth), d.remove(), e = b - c
            },
            getScrollInfo: function(b) {
              var c = b.isWindow || b.isDocument ? "" : b.element.css("overflow-x"),
                d = b.isWindow || b.isDocument ? "" : b.element.css("overflow-y"),
                e = "scroll" === c || "auto" === c && b.width < b.element[0].scrollWidth,
                f = "scroll" === d || "auto" === d && b.height < b.element[0].scrollHeight;
              return {
                width: f ? a.position.scrollbarWidth() : 0,
                height: e ? a.position.scrollbarWidth() : 0
              }
            },
            getWithinInfo: function(b) {
              var c = a(b || window),
                d = a.isWindow(c[0]),
                e = !!c[0] && 9 === c[0].nodeType;
              return {
                element: c,
                isWindow: d,
                isDocument: e,
                offset: c.offset() || {
                  left: 0,
                  top: 0
                },
                scrollLeft: c.scrollLeft(),
                scrollTop: c.scrollTop(),
                width: d || e ? c.width() : c.outerWidth(),
                height: d || e ? c.height() : c.outerHeight()
              }
            }
          }, a.fn.position = function(e) {
            if (!e || !e.of) return o.apply(this, arguments);
            e = a.extend({}, e);
            var n, p, q, r, s, t, u = a(e.of),
              v = a.position.getWithinInfo(e.within),
              w = a.position.getScrollInfo(v),
              x = (e.collision || "flip").split(" "),
              y = {};
            return t = d(u), u[0].preventDefault && (e.at = "left top"), p = t.width, q = t.height, r = t.offset, s = a.extend({}, r), a.each(["my", "at"], function() {
              var a, b, c = (e[this] || "").split(" ");
              1 === c.length && (c = j.test(c[0]) ? c.concat(["center"]) : k.test(c[0]) ? ["center"].concat(c) : ["center", "center"]), c[0] = j.test(c[0]) ? c[0] : "center", c[1] = k.test(c[1]) ? c[1] : "center", a = l.exec(c[0]), b = l.exec(c[1]), y[this] = [a ? a[0] : 0, b ? b[0] : 0], e[this] = [m.exec(c[0])[0], m.exec(c[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === e.at[0] ? s.left += p : "center" === e.at[0] && (s.left += p / 2), "bottom" === e.at[1] ? s.top += q : "center" === e.at[1] && (s.top += q / 2), n = b(y.at, p, q), s.left += n[0], s.top += n[1], this.each(function() {
              var d, j, k = a(this),
                l = k.outerWidth(),
                m = k.outerHeight(),
                o = c(this, "marginLeft"),
                t = c(this, "marginTop"),
                z = l + o + c(this, "marginRight") + w.width,
                A = m + t + c(this, "marginBottom") + w.height,
                B = a.extend({}, s),
                C = b(y.my, k.outerWidth(), k.outerHeight());
              "right" === e.my[0] ? B.left -= l : "center" === e.my[0] && (B.left -= l / 2), "bottom" === e.my[1] ? B.top -= m : "center" === e.my[1] && (B.top -= m / 2), B.left += C[0], B.top += C[1], f || (B.left = i(B.left), B.top = i(B.top)), d = {
                marginLeft: o,
                marginTop: t
              }, a.each(["left", "top"], function(b, c) {
                a.ui.position[x[b]] && a.ui.position[x[b]][c](B, {
                  targetWidth: p,
                  targetHeight: q,
                  elemWidth: l,
                  elemHeight: m,
                  collisionPosition: d,
                  collisionWidth: z,
                  collisionHeight: A,
                  offset: [n[0] + C[0], n[1] + C[1]],
                  my: e.my,
                  at: e.at,
                  within: v,
                  elem: k
                })
              }), e.using && (j = function(a) {
                var b = r.left - B.left,
                  c = b + p - l,
                  d = r.top - B.top,
                  f = d + q - m,
                  i = {
                    target: {
                      element: u,
                      left: r.left,
                      top: r.top,
                      width: p,
                      height: q
                    },
                    element: {
                      element: k,
                      left: B.left,
                      top: B.top,
                      width: l,
                      height: m
                    },
                    horizontal: 0 > c ? "left" : b > 0 ? "right" : "center",
                    vertical: 0 > f ? "top" : d > 0 ? "bottom" : "middle"
                  };
                l > p && p > h(b + c) && (i.horizontal = "center"), m > q && q > h(d + f) && (i.vertical = "middle"), i.important = g(h(b), h(c)) > g(h(d), h(f)) ? "horizontal" : "vertical", e.using.call(this, a, i)
              }), k.offset(a.extend(B, {
                using: j
              }))
            })
          }, a.ui.position = {
            fit: {
              left: function(a, b) {
                var c, d = b.within,
                  e = d.isWindow ? d.scrollLeft : d.offset.left,
                  f = d.width,
                  h = a.left - b.collisionPosition.marginLeft,
                  i = e - h,
                  j = h + b.collisionWidth - f - e;
                b.collisionWidth > f ? i > 0 && 0 >= j ? (c = a.left + i + b.collisionWidth - f - e, a.left += i - c) : a.left = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionWidth : e : i > 0 ? a.left += i : j > 0 ? a.left -= j : a.left = g(a.left - h, a.left)
              },
              top: function(a, b) {
                var c, d = b.within,
                  e = d.isWindow ? d.scrollTop : d.offset.top,
                  f = b.within.height,
                  h = a.top - b.collisionPosition.marginTop,
                  i = e - h,
                  j = h + b.collisionHeight - f - e;
                b.collisionHeight > f ? i > 0 && 0 >= j ? (c = a.top + i + b.collisionHeight - f - e, a.top += i - c) : a.top = j > 0 && 0 >= i ? e : i > j ? e + f - b.collisionHeight : e : i > 0 ? a.top += i : j > 0 ? a.top -= j : a.top = g(a.top - h, a.top)
              }
            },
            flip: {
              left: function(a, b) {
                var c, d, e = b.within,
                  f = e.offset.left + e.scrollLeft,
                  g = e.width,
                  i = e.isWindow ? e.scrollLeft : e.offset.left,
                  j = a.left - b.collisionPosition.marginLeft,
                  k = j - i,
                  l = j + b.collisionWidth - g - i,
                  m = "left" === b.my[0] ? -b.elemWidth : "right" === b.my[0] ? b.elemWidth : 0,
                  n = "left" === b.at[0] ? b.targetWidth : "right" === b.at[0] ? -b.targetWidth : 0,
                  o = -2 * b.offset[0];
                0 > k ? (c = a.left + m + n + o + b.collisionWidth - g - f, (0 > c || h(k) > c) && (a.left += m + n + o)) : l > 0 && (d = a.left - b.collisionPosition.marginLeft + m + n + o - i, (d > 0 || l > h(d)) && (a.left += m + n + o))
              },
              top: function(a, b) {
                var c, d, e = b.within,
                  f = e.offset.top + e.scrollTop,
                  g = e.height,
                  i = e.isWindow ? e.scrollTop : e.offset.top,
                  j = a.top - b.collisionPosition.marginTop,
                  k = j - i,
                  l = j + b.collisionHeight - g - i,
                  m = "top" === b.my[1],
                  n = m ? -b.elemHeight : "bottom" === b.my[1] ? b.elemHeight : 0,
                  o = "top" === b.at[1] ? b.targetHeight : "bottom" === b.at[1] ? -b.targetHeight : 0,
                  p = -2 * b.offset[1];
                0 > k ? (d = a.top + n + o + p + b.collisionHeight - g - f, a.top + n + o + p > k && (0 > d || h(k) > d) && (a.top += n + o + p)) : l > 0 && (c = a.top - b.collisionPosition.marginTop + n + o + p - i, a.top + n + o + p > l && (c > 0 || l > h(c)) && (a.top += n + o + p))
              }
            },
            flipfit: {
              left: function() {
                a.ui.position.flip.left.apply(this, arguments), a.ui.position.fit.left.apply(this, arguments)
              },
              top: function() {
                a.ui.position.flip.top.apply(this, arguments), a.ui.position.fit.top.apply(this, arguments)
              }
            }
          },
          function() {
            var b, c, d, e, g, h = document.getElementsByTagName("body")[0],
              i = document.createElement("div");
            b = document.createElement(h ? "div" : "body"), d = {
              visibility: "hidden",
              width: 0,
              height: 0,
              border: 0,
              margin: 0,
              background: "none"
            }, h && a.extend(d, {
              position: "absolute",
              left: "-1000px",
              top: "-1000px"
            });
            for (g in d) b.style[g] = d[g];
            b.appendChild(i), c = h || document.documentElement, c.insertBefore(b, c.firstChild), i.style.cssText = "position: absolute; left: 10.7432222px;", e = a(i).offset().left, f = e > 10 && 11 > e, b.innerHTML = "", c.removeChild(b)
          }()
      }(), a.ui.position, a.widget("ui.menu", {
        version: "1.11.2",
        defaultElement: "<ul>",
        delay: 300,
        options: {
          icons: {
            submenu: "ui-icon-carat-1-e"
          },
          items: "> *",
          menus: "ul",
          position: {
            my: "left-1 top",
            at: "right top"
          },
          role: "menu",
          blur: null,
          focus: null,
          select: null
        },
        _create: function() {
          this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
            role: this.options.role,
            tabIndex: 0
          }), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
            "mousedown .ui-menu-item": function(a) {
              a.preventDefault()
            },
            "click .ui-menu-item": function(b) {
              var c = a(b.target);
              !this.mouseHandled && c.not(".ui-state-disabled").length && (this.select(b), b.isPropagationStopped() || (this.mouseHandled = !0), c.has(".ui-menu").length ? this.expand(b) : !this.element.is(":focus") && a(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
            },
            "mouseenter .ui-menu-item": function(b) {
              if (!this.previousFilter) {
                var c = a(b.currentTarget);
                c.siblings(".ui-state-active").removeClass("ui-state-active"), this.focus(b, c)
              }
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function(a, b) {
              var c = this.active || this.element.find(this.options.items).eq(0);
              b || this.focus(a, c)
            },
            blur: function(b) {
              this._delay(function() {
                a.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(b)
              })
            },
            keydown: "_keydown"
          }), this.refresh(), this._on(this.document, {
            click: function(a) {
              this._closeOnDocumentClick(a) && this.collapseAll(a), this.mouseHandled = !1
            }
          })
        },
        _destroy: function() {
          this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
            var b = a(this);
            b.data("ui-menu-submenu-carat") && b.remove()
          }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
        },
        _keydown: function(b) {
          var c, d, e, f, g = !0;
          switch (b.keyCode) {
            case a.ui.keyCode.PAGE_UP:
              this.previousPage(b);
              break;
            case a.ui.keyCode.PAGE_DOWN:
              this.nextPage(b);
              break;
            case a.ui.keyCode.HOME:
              this._move("first", "first", b);
              break;
            case a.ui.keyCode.END:
              this._move("last", "last", b);
              break;
            case a.ui.keyCode.UP:
              this.previous(b);
              break;
            case a.ui.keyCode.DOWN:
              this.next(b);
              break;
            case a.ui.keyCode.LEFT:
              this.collapse(b);
              break;
            case a.ui.keyCode.RIGHT:
              this.active && !this.active.is(".ui-state-disabled") && this.expand(b);
              break;
            case a.ui.keyCode.ENTER:
            case a.ui.keyCode.SPACE:
              this._activate(b);
              break;
            case a.ui.keyCode.ESCAPE:
              this.collapse(b);
              break;
            default:
              g = !1, d = this.previousFilter || "", e = String.fromCharCode(b.keyCode), f = !1, clearTimeout(this.filterTimer), e === d ? f = !0 : e = d + e, c = this._filterMenuItems(e), c = f && -1 !== c.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : c, c.length || (e = String.fromCharCode(b.keyCode), c = this._filterMenuItems(e)), c.length ? (this.focus(b, c), this.previousFilter = e, this.filterTimer = this._delay(function() {
                delete this.previousFilter
              }, 1e3)) : delete this.previousFilter
          }
          g && b.preventDefault()
        },
        _activate: function(a) {
          this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(a) : this.select(a))
        },
        refresh: function() {
          var b, c, d = this,
            e = this.options.icons.submenu,
            f = this.element.find(this.options.menus);
          this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), f.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
            role: this.options.role,
            "aria-hidden": "true",
            "aria-expanded": "false"
          }).each(function() {
            var b = a(this),
              c = b.parent(),
              d = a("<span>").addClass("ui-menu-icon ui-icon " + e).data("ui-menu-submenu-carat", !0);
            c.attr("aria-haspopup", "true").prepend(d), b.attr("aria-labelledby", c.attr("id"))
          }), b = f.add(this.element), c = b.find(this.options.items), c.not(".ui-menu-item").each(function() {
            var b = a(this);
            d._isDivider(b) && b.addClass("ui-widget-content ui-menu-divider")
          }), c.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
            tabIndex: -1,
            role: this._itemRole()
          }), c.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !a.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() {
          return {
            menu: "menuitem",
            listbox: "option"
          }[this.options.role]
        },
        _setOption: function(a, b) {
          "icons" === a && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(b.submenu), "disabled" === a && this.element.toggleClass("ui-state-disabled", !!b).attr("aria-disabled", b), this._super(a, b)
        },
        focus: function(a, b) {
          var c, d;
          this.blur(a, a && "focus" === a.type), this._scrollIntoView(b), this.active = b.first(), d = this.active.addClass("ui-state-focus").removeClass("ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", d.attr("id")), this.active.parent().closest(".ui-menu-item").addClass("ui-state-active"), a && "keydown" === a.type ? this._close() : this.timer = this._delay(function() {
            this._close()
          }, this.delay), c = b.children(".ui-menu"), c.length && a && /^mouse/.test(a.type) && this._startOpening(c), this.activeMenu = b.parent(), this._trigger("focus", a, {
            item: b
          })
        },
        _scrollIntoView: function(b) {
          var c, d, e, f, g, h;
          this._hasScroll() && (c = parseFloat(a.css(this.activeMenu[0], "borderTopWidth")) || 0, d = parseFloat(a.css(this.activeMenu[0], "paddingTop")) || 0, e = b.offset().top - this.activeMenu.offset().top - c - d, f = this.activeMenu.scrollTop(), g = this.activeMenu.height(), h = b.outerHeight(), 0 > e ? this.activeMenu.scrollTop(f + e) : e + h > g && this.activeMenu.scrollTop(f + e - g + h))
        },
        blur: function(a, b) {
          b || clearTimeout(this.timer), this.active && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", a, {
            item: this.active
          }))
        },
        _startOpening: function(a) {
          clearTimeout(this.timer), "true" === a.attr("aria-hidden") && (this.timer = this._delay(function() {
            this._close(), this._open(a)
          }, this.delay))
        },
        _open: function(b) {
          var c = a.extend({ of: this.active
          }, this.options.position);
          clearTimeout(this.timer), this.element.find(".ui-menu").not(b.parents(".ui-menu")).hide().attr("aria-hidden", "true"), b.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(c)
        },
        collapseAll: function(b, c) {
          clearTimeout(this.timer), this.timer = this._delay(function() {
            var d = c ? this.element : a(b && b.target).closest(this.element.find(".ui-menu"));
            d.length || (d = this.element), this._close(d), this.blur(b), this.activeMenu = d
          }, this.delay)
        },
        _close: function(a) {
          a || (a = this.active ? this.active.parent() : this.element), a.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
        },
        _closeOnDocumentClick: function(b) {
          return !a(b.target).closest(".ui-menu").length
        },
        _isDivider: function(a) {
          return !/[^\-\u2014\u2013\s]/.test(a.text())
        },
        collapse: function(a) {
          var b = this.active && this.active.parent().closest(".ui-menu-item", this.element);
          b && b.length && (this._close(), this.focus(a, b))
        },
        expand: function(a) {
          var b = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
          b && b.length && (this._open(b.parent()), this._delay(function() {
            this.focus(a, b)
          }))
        },
        next: function(a) {
          this._move("next", "first", a)
        },
        previous: function(a) {
          this._move("prev", "last", a)
        },
        isFirstItem: function() {
          return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function() {
          return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function(a, b, c) {
          var d;
          this.active && (d = "first" === a || "last" === a ? this.active["first" === a ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[a + "All"](".ui-menu-item").eq(0)), d && d.length && this.active || (d = this.activeMenu.find(this.options.items)[b]()), this.focus(c, d)
        },
        nextPage: function(b) {
          var c, d, e;
          return this.active ? void(this.isLastItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
            return c = a(this), 0 > c.offset().top - d - e
          }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(b);
        },
        previousPage: function(b) {
          var c, d, e;
          return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (d = this.active.offset().top, e = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
            return c = a(this), c.offset().top - d + e > 0
          }), this.focus(b, c)) : this.focus(b, this.activeMenu.find(this.options.items).first()))) : void this.next(b)
        },
        _hasScroll: function() {
          return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function(b) {
          this.active = this.active || a(b.target).closest(".ui-menu-item");
          var c = {
            item: this.active
          };
          this.active.has(".ui-menu").length || this.collapseAll(b, !0), this._trigger("select", b, c)
        },
        _filterMenuItems: function(b) {
          var c = b.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
            d = RegExp("^" + c, "i");
          return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
            return d.test(a.trim(a(this).text()))
          })
        }
      }), a.widget("ui.autocomplete", {
        version: "1.11.2",
        defaultElement: "<input>",
        options: {
          appendTo: null,
          autoFocus: !1,
          delay: 300,
          minLength: 1,
          position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
          },
          source: null,
          change: null,
          close: null,
          focus: null,
          open: null,
          response: null,
          search: null,
          select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function() {
          var b, c, d, e = this.element[0].nodeName.toLowerCase(),
            f = "textarea" === e,
            g = "input" === e;
          this.isMultiLine = !!f || !g && this.element.prop("isContentEditable"), this.valueMethod = this.element[f || g ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
            keydown: function(e) {
              if (this.element.prop("readOnly")) return b = !0, d = !0, void(c = !0);
              b = !1, d = !1, c = !1;
              var f = a.ui.keyCode;
              switch (e.keyCode) {
                case f.PAGE_UP:
                  b = !0, this._move("previousPage", e);
                  break;
                case f.PAGE_DOWN:
                  b = !0, this._move("nextPage", e);
                  break;
                case f.UP:
                  b = !0, this._keyEvent("previous", e);
                  break;
                case f.DOWN:
                  b = !0, this._keyEvent("next", e);
                  break;
                case f.ENTER:
                  this.menu.active && (b = !0, e.preventDefault(), this.menu.select(e));
                  break;
                case f.TAB:
                  this.menu.active && this.menu.select(e);
                  break;
                case f.ESCAPE:
                  this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(e), e.preventDefault());
                  break;
                default:
                  c = !0, this._searchTimeout(e)
              }
            },
            keypress: function(d) {
              if (b) return b = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && d.preventDefault());
              if (!c) {
                var e = a.ui.keyCode;
                switch (d.keyCode) {
                  case e.PAGE_UP:
                    this._move("previousPage", d);
                    break;
                  case e.PAGE_DOWN:
                    this._move("nextPage", d);
                    break;
                  case e.UP:
                    this._keyEvent("previous", d);
                    break;
                  case e.DOWN:
                    this._keyEvent("next", d)
                }
              }
            },
            input: function(a) {
              return d ? (d = !1, void a.preventDefault()) : void this._searchTimeout(a)
            },
            focus: function() {
              this.selectedItem = null, this.previous = this._value()
            },
            blur: function(a) {
              return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(a), void this._change(a))
            }
          }), this._initSource(), this.menu = a("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
            role: null
          }).hide().menu("instance"), this._on(this.menu.element, {
            mousedown: function(b) {
              b.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                delete this.cancelBlur
              });
              var c = this.menu.element[0];
              a(b.target).closest(".ui-menu-item").length || this._delay(function() {
                var b = this;
                this.document.one("mousedown", function(d) {
                  d.target === b.element[0] || d.target === c || a.contains(c, d.target) || b.close()
                })
              })
            },
            menufocus: function(b, c) {
              var d, e;
              return this.isNewMenu && (this.isNewMenu = !1, b.originalEvent && /^mouse/.test(b.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() {
                a(b.target).trigger(b.originalEvent)
              })) : (e = c.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", b, {
                item: e
              }) && b.originalEvent && /^key/.test(b.originalEvent.type) && this._value(e.value), d = c.item.attr("aria-label") || e.value, void(d && a.trim(d).length && (this.liveRegion.children().hide(), a("<div>").text(d).appendTo(this.liveRegion))))
            },
            menuselect: function(a, b) {
              var c = b.item.data("ui-autocomplete-item"),
                d = this.previous;
              this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = d, this._delay(function() {
                this.previous = d, this.selectedItem = c
              })), !1 !== this._trigger("select", a, {
                item: c
              }) && this._value(c.value), this.term = this._value(), this.close(a), this.selectedItem = c
            }
          }), this.liveRegion = a("<span>", {
            role: "status",
            "aria-live": "assertive",
            "aria-relevant": "additions"
          }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body), this._on(this.window, {
            beforeunload: function() {
              this.element.removeAttr("autocomplete")
            }
          })
        },
        _destroy: function() {
          clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function(a, b) {
          this._super(a, b), "source" === a && this._initSource(), "appendTo" === a && this.menu.element.appendTo(this._appendTo()), "disabled" === a && b && this.xhr && this.xhr.abort()
        },
        _appendTo: function() {
          var b = this.options.appendTo;
          return b && (b = b.jquery || b.nodeType ? a(b) : this.document.find(b).eq(0)), b && b[0] || (b = this.element.closest(".ui-front")), b.length || (b = this.document[0].body), b
        },
        _initSource: function() {
          var b, c, d = this;
          a.isArray(this.options.source) ? (b = this.options.source, this.source = function(c, d) {
            d(a.ui.autocomplete.filter(b, c.term))
          }) : "string" == typeof this.options.source ? (c = this.options.source, this.source = function(b, e) {
            d.xhr && d.xhr.abort(), d.xhr = a.ajax({
              url: c,
              data: b,
              dataType: "json",
              success: function(a) {
                e(a)
              },
              error: function() {
                e([])
              }
            })
          }) : this.source = this.options.source
        },
        _searchTimeout: function(a) {
          clearTimeout(this.searching), this.searching = this._delay(function() {
            var b = this.term === this._value(),
              c = this.menu.element.is(":visible"),
              d = a.altKey || a.ctrlKey || a.metaKey || a.shiftKey;
            (!b || b && !c && !d) && (this.selectedItem = null, this.search(null, a))
          }, this.options.delay)
        },
        search: function(a, b) {
          return a = null != a ? a : this._value(), this.term = this._value(), a.length < this.options.minLength ? this.close(b) : this._trigger("search", b) !== !1 ? this._search(a) : void 0
        },
        _search: function(a) {
          this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
            term: a
          }, this._response())
        },
        _response: function() {
          var b = ++this.requestIndex;
          return a.proxy(function(a) {
            b === this.requestIndex && this.__response(a), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
          }, this)
        },
        __response: function(a) {
          a && (a = this._normalize(a)), this._trigger("response", null, {
            content: a
          }), !this.options.disabled && a && a.length && !this.cancelSearch ? (this._suggest(a), this._trigger("open")) : this._close()
        },
        close: function(a) {
          this.cancelSearch = !0, this._close(a)
        },
        _close: function(a) {
          this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", a))
        },
        _change: function(a) {
          this.previous !== this._value() && this._trigger("change", a, {
            item: this.selectedItem
          })
        },
        _normalize: function(b) {
          return b.length && b[0].label && b[0].value ? b : a.map(b, function(b) {
            return "string" == typeof b ? {
              label: b,
              value: b
            } : a.extend({}, b, {
              label: b.label || b.value,
              value: b.value || b.label
            })
          })
        },
        _suggest: function(b) {
          var c = this.menu.element.empty();
          this._renderMenu(c, b), this.isNewMenu = !0, this.menu.refresh(), c.show(), this._resizeMenu(), c.position(a.extend({ of: this.element
          }, this.options.position)), this.options.autoFocus && this.menu.next()
        },
        _resizeMenu: function() {
          var a = this.menu.element;
          a.outerWidth(Math.max(a.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(b, c) {
          var d = this;
          a.each(c, function(a, c) {
            d._renderItemData(b, c)
          })
        },
        _renderItemData: function(a, b) {
          return this._renderItem(a, b).data("ui-autocomplete-item", b)
        },
        _renderItem: function(b, c) {
          return a("<li>").text(c.label).appendTo(b)
        },
        _move: function(a, b) {
          return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(a) || this.menu.isLastItem() && /^next/.test(a) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[a](b) : void this.search(null, b)
        },
        widget: function() {
          return this.menu.element
        },
        _value: function() {
          return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function(a, b) {
          (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(a, b), b.preventDefault())
        }
      }), a.extend(a.ui.autocomplete, {
        escapeRegex: function(a) {
          return a.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        },
        filter: function(b, c) {
          var d = RegExp(a.ui.autocomplete.escapeRegex(c), "i");
          return a.grep(b, function(a) {
            return d.test(a.label || a.value || a)
          })
        }
      }), a.widget("ui.autocomplete", a.ui.autocomplete, {
        options: {
          messages: {
            noResults: "No search results.",
            results: function(a) {
              return a + (a > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
            }
          }
        },
        __response: function(b) {
          var c;
          this._superApply(arguments), this.options.disabled || this.cancelSearch || (c = b && b.length ? this.options.messages.results(b.length) : this.options.messages.noResults, this.liveRegion.children().hide(), a("<div>").text(c).appendTo(this.liveRegion))
        }
      }), a.ui.autocomplete, a.extend(a.ui, {
        datepicker: {
          version: "1.11.2"
        }
      });
    var k;
    a.extend(e.prototype, {
      markerClassName: "hasDatepicker",
      maxRows: 4,
      _widgetDatepicker: function() {
        return this.dpDiv
      },
      setDefaults: function(a) {
        return h(this._defaults, a || {}), this
      },
      _attachDatepicker: function(b, c) {
        var d, e, f;
        d = b.nodeName.toLowerCase(), e = "div" === d || "span" === d, b.id || (this.uuid += 1, b.id = "dp" + this.uuid), f = this._newInst(a(b), e), f.settings = a.extend({}, c || {}), "input" === d ? this._connectDatepicker(b, f) : e && this._inlineDatepicker(b, f)
      },
      _newInst: function(b, c) {
        var d = b[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
        return {
          id: d,
          input: b,
          selectedDay: 0,
          selectedMonth: 0,
          selectedYear: 0,
          drawMonth: 0,
          drawYear: 0,
          inline: c,
          dpDiv: c ? f(a("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
        }
      },
      _connectDatepicker: function(b, c) {
        var d = a(b);
        c.append = a([]), c.trigger = a([]), d.hasClass(this.markerClassName) || (this._attachments(d, c), d.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(c), a.data(b, "datepicker", c), c.settings.disabled && this._disableDatepicker(b))
      },
      _attachments: function(b, c) {
        var d, e, f, g = this._get(c, "appendText"),
          h = this._get(c, "isRTL");
        c.append && c.append.remove(), g && (c.append = a("<span class='" + this._appendClass + "'>" + g + "</span>"), b[h ? "before" : "after"](c.append)), b.unbind("focus", this._showDatepicker), c.trigger && c.trigger.remove(), d = this._get(c, "showOn"), ("focus" === d || "both" === d) && b.focus(this._showDatepicker), ("button" === d || "both" === d) && (e = this._get(c, "buttonText"), f = this._get(c, "buttonImage"), c.trigger = a(this._get(c, "buttonImageOnly") ? a("<img/>").addClass(this._triggerClass).attr({
          src: f,
          alt: e,
          title: e
        }) : a("<button type='button'></button>").addClass(this._triggerClass).html(f ? a("<img/>").attr({
          src: f,
          alt: e,
          title: e
        }) : e)), b[h ? "before" : "after"](c.trigger), c.trigger.click(function() {
          return a.datepicker._datepickerShowing && a.datepicker._lastInput === b[0] ? a.datepicker._hideDatepicker() : a.datepicker._datepickerShowing && a.datepicker._lastInput !== b[0] ? (a.datepicker._hideDatepicker(), a.datepicker._showDatepicker(b[0])) : a.datepicker._showDatepicker(b[0]), !1
        }))
      },
      _autoSize: function(a) {
        if (this._get(a, "autoSize") && !a.inline) {
          var b, c, d, e, f = new Date(2009, 11, 20),
            g = this._get(a, "dateFormat");
          g.match(/[DM]/) && (b = function(a) {
            for (c = 0, d = 0, e = 0; a.length > e; e++) a[e].length > c && (c = a[e].length, d = e);
            return d
          }, f.setMonth(b(this._get(a, g.match(/MM/) ? "monthNames" : "monthNamesShort"))), f.setDate(b(this._get(a, g.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - f.getDay())), a.input.attr("size", this._formatDate(a, f).length)
        }
      },
      _inlineDatepicker: function(b, c) {
        var d = a(b);
        d.hasClass(this.markerClassName) || (d.addClass(this.markerClassName).append(c.dpDiv), a.data(b, "datepicker", c), this._setDate(c, this._getDefaultDate(c), !0), this._updateDatepicker(c), this._updateAlternate(c), c.settings.disabled && this._disableDatepicker(b), c.dpDiv.css("display", "block"))
      },
      _dialogDatepicker: function(b, c, d, e, f) {
        var g, i, j, k, l, m = this._dialogInst;
        return m || (this.uuid += 1, g = "dp" + this.uuid, this._dialogInput = a("<input type='text' id='" + g + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), a("body").append(this._dialogInput), m = this._dialogInst = this._newInst(this._dialogInput, !1), m.settings = {}, a.data(this._dialogInput[0], "datepicker", m)), h(m.settings, e || {}), c = c && c.constructor === Date ? this._formatDate(m, c) : c, this._dialogInput.val(c), this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null, this._pos || (i = document.documentElement.clientWidth, j = document.documentElement.clientHeight, k = document.documentElement.scrollLeft || document.body.scrollLeft, l = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [i / 2 - 100 + k, j / 2 - 150 + l]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), m.settings.onSelect = d, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), a.blockUI && a.blockUI(this.dpDiv), a.data(this._dialogInput[0], "datepicker", m), this
      },
      _destroyDatepicker: function(b) {
        var c, d = a(b),
          e = a.data(b, "datepicker");
        d.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), a.removeData(b, "datepicker"), "input" === c ? (e.append.remove(), e.trigger.remove(), d.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : ("div" === c || "span" === c) && d.removeClass(this.markerClassName).empty())
      },
      _enableDatepicker: function(b) {
        var c, d, e = a(b),
          f = a.data(b, "datepicker");
        e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !1, f.trigger.filter("button").each(function() {
          this.disabled = !1
        }).end().filter("img").css({
          opacity: "1.0",
          cursor: ""
        })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().removeClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
          return a === b ? null : a
        }))
      },
      _disableDatepicker: function(b) {
        var c, d, e = a(b),
          f = a.data(b, "datepicker");
        e.hasClass(this.markerClassName) && (c = b.nodeName.toLowerCase(), "input" === c ? (b.disabled = !0, f.trigger.filter("button").each(function() {
          this.disabled = !0
        }).end().filter("img").css({
          opacity: "0.5",
          cursor: "default"
        })) : ("div" === c || "span" === c) && (d = e.children("." + this._inlineClass), d.children().addClass("ui-state-disabled"), d.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = a.map(this._disabledInputs, function(a) {
          return a === b ? null : a
        }), this._disabledInputs[this._disabledInputs.length] = b)
      },
      _isDisabledDatepicker: function(a) {
        if (!a) return !1;
        for (var b = 0; this._disabledInputs.length > b; b++)
          if (this._disabledInputs[b] === a) return !0;
        return !1
      },
      _getInst: function(b) {
        try {
          return a.data(b, "datepicker")
        } catch (a) {
          throw "Missing instance data for this datepicker"
        }
      },
      _optionDatepicker: function(b, c, d) {
        var e, f, g, i, j = this._getInst(b);
        return 2 === arguments.length && "string" == typeof c ? "defaults" === c ? a.extend({}, a.datepicker._defaults) : j ? "all" === c ? a.extend({}, j.settings) : this._get(j, c) : null : (e = c || {}, "string" == typeof c && (e = {}, e[c] = d), void(j && (this._curInst === j && this._hideDatepicker(), f = this._getDateDatepicker(b, !0), g = this._getMinMaxDate(j, "min"), i = this._getMinMaxDate(j, "max"), h(j.settings, e), null !== g && void 0 !== e.dateFormat && void 0 === e.minDate && (j.settings.minDate = this._formatDate(j, g)), null !== i && void 0 !== e.dateFormat && void 0 === e.maxDate && (j.settings.maxDate = this._formatDate(j, i)), "disabled" in e && (e.disabled ? this._disableDatepicker(b) : this._enableDatepicker(b)), this._attachments(a(b), j), this._autoSize(j), this._setDate(j, f), this._updateAlternate(j), this._updateDatepicker(j))))
      },
      _changeDatepicker: function(a, b, c) {
        this._optionDatepicker(a, b, c)
      },
      _refreshDatepicker: function(a) {
        var b = this._getInst(a);
        b && this._updateDatepicker(b)
      },
      _setDateDatepicker: function(a, b) {
        var c = this._getInst(a);
        c && (this._setDate(c, b), this._updateDatepicker(c), this._updateAlternate(c))
      },
      _getDateDatepicker: function(a, b) {
        var c = this._getInst(a);
        return c && !c.inline && this._setDateFromField(c, b), c ? this._getDate(c) : null
      },
      _doKeyDown: function(b) {
        var c, d, e, f = a.datepicker._getInst(b.target),
          g = !0,
          h = f.dpDiv.is(".ui-datepicker-rtl");
        if (f._keyEvent = !0, a.datepicker._datepickerShowing) switch (b.keyCode) {
          case 9:
            a.datepicker._hideDatepicker(), g = !1;
            break;
          case 13:
            return e = a("td." + a.datepicker._dayOverClass + ":not(." + a.datepicker._currentClass + ")", f.dpDiv), e[0] && a.datepicker._selectDay(b.target, f.selectedMonth, f.selectedYear, e[0]), c = a.datepicker._get(f, "onSelect"), c ? (d = a.datepicker._formatDate(f), c.apply(f.input ? f.input[0] : null, [d, f])) : a.datepicker._hideDatepicker(), !1;
          case 27:
            a.datepicker._hideDatepicker();
            break;
          case 33:
            a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
            break;
          case 34:
            a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
            break;
          case 35:
            (b.ctrlKey || b.metaKey) && a.datepicker._clearDate(b.target), g = b.ctrlKey || b.metaKey;
            break;
          case 36:
            (b.ctrlKey || b.metaKey) && a.datepicker._gotoToday(b.target), g = b.ctrlKey || b.metaKey;
            break;
          case 37:
            (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? 1 : -1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? -a.datepicker._get(f, "stepBigMonths") : -a.datepicker._get(f, "stepMonths"), "M");
            break;
          case 38:
            (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, -7, "D"), g = b.ctrlKey || b.metaKey;
            break;
          case 39:
            (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, h ? -1 : 1, "D"), g = b.ctrlKey || b.metaKey, b.originalEvent.altKey && a.datepicker._adjustDate(b.target, b.ctrlKey ? +a.datepicker._get(f, "stepBigMonths") : +a.datepicker._get(f, "stepMonths"), "M");
            break;
          case 40:
            (b.ctrlKey || b.metaKey) && a.datepicker._adjustDate(b.target, 7, "D"), g = b.ctrlKey || b.metaKey;
            break;
          default:
            g = !1
        } else 36 === b.keyCode && b.ctrlKey ? a.datepicker._showDatepicker(this) : g = !1;
        g && (b.preventDefault(), b.stopPropagation())
      },
      _doKeyPress: function(b) {
        var c, d, e = a.datepicker._getInst(b.target);
        return a.datepicker._get(e, "constrainInput") ? (c = a.datepicker._possibleChars(a.datepicker._get(e, "dateFormat")), d = String.fromCharCode(null == b.charCode ? b.keyCode : b.charCode), b.ctrlKey || b.metaKey || " " > d || !c || c.indexOf(d) > -1) : void 0
      },
      _doKeyUp: function(b) {
        var c, d = a.datepicker._getInst(b.target);
        if (d.input.val() !== d.lastVal) try {
          c = a.datepicker.parseDate(a.datepicker._get(d, "dateFormat"), d.input ? d.input.val() : null, a.datepicker._getFormatConfig(d)), c && (a.datepicker._setDateFromField(d), a.datepicker._updateAlternate(d), a.datepicker._updateDatepicker(d))
        } catch (a) {}
        return !0
      },
      _showDatepicker: function(b) {
        if (b = b.target || b, "input" !== b.nodeName.toLowerCase() && (b = a("input", b.parentNode)[0]), !a.datepicker._isDisabledDatepicker(b) && a.datepicker._lastInput !== b) {
          var c, e, f, g, i, j, k;
          c = a.datepicker._getInst(b), a.datepicker._curInst && a.datepicker._curInst !== c && (a.datepicker._curInst.dpDiv.stop(!0, !0), c && a.datepicker._datepickerShowing && a.datepicker._hideDatepicker(a.datepicker._curInst.input[0])), e = a.datepicker._get(c, "beforeShow"), f = e ? e.apply(b, [b, c]) : {}, f !== !1 && (h(c.settings, f), c.lastVal = null, a.datepicker._lastInput = b, a.datepicker._setDateFromField(c), a.datepicker._inDialog && (b.value = ""), a.datepicker._pos || (a.datepicker._pos = a.datepicker._findPos(b), a.datepicker._pos[1] += b.offsetHeight), g = !1, a(b).parents().each(function() {
            return g |= "fixed" === a(this).css("position"), !g
          }), i = {
            left: a.datepicker._pos[0],
            top: a.datepicker._pos[1]
          }, a.datepicker._pos = null, c.dpDiv.empty(), c.dpDiv.css({
            position: "absolute",
            display: "block",
            top: "-1000px"
          }), a.datepicker._updateDatepicker(c), i = a.datepicker._checkOffset(c, i, g), c.dpDiv.css({
            position: a.datepicker._inDialog && a.blockUI ? "static" : g ? "fixed" : "absolute",
            display: "none",
            left: i.left + "px",
            top: i.top + "px"
          }), c.inline || (j = a.datepicker._get(c, "showAnim"), k = a.datepicker._get(c, "duration"), c.dpDiv.css("z-index", d(a(b)) + 1), a.datepicker._datepickerShowing = !0, a.effects && a.effects.effect[j] ? c.dpDiv.show(j, a.datepicker._get(c, "showOptions"), k) : c.dpDiv[j || "show"](j ? k : null), a.datepicker._shouldFocusInput(c) && c.input.focus(), a.datepicker._curInst = c))
        }
      },
      _updateDatepicker: function(b) {
        this.maxRows = 4, k = b, b.dpDiv.empty().append(this._generateHTML(b)), this._attachHandlers(b);
        var c, d = this._getNumberOfMonths(b),
          e = d[1],
          f = 17,
          h = b.dpDiv.find("." + this._dayOverClass + " a");
        h.length > 0 && g.apply(h.get(0)), b.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), e > 1 && b.dpDiv.addClass("ui-datepicker-multi-" + e).css("width", f * e + "em"), b.dpDiv[(1 !== d[0] || 1 !== d[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), b.dpDiv[(this._get(b, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), b === a.datepicker._curInst && a.datepicker._datepickerShowing && a.datepicker._shouldFocusInput(b) && b.input.focus(), b.yearshtml && (c = b.yearshtml, setTimeout(function() {
          c === b.yearshtml && b.yearshtml && b.dpDiv.find("select.ui-datepicker-year:first").replaceWith(b.yearshtml), c = b.yearshtml = null
        }, 0))
      },
      _shouldFocusInput: function(a) {
        return a.input && a.input.is(":visible") && !a.input.is(":disabled") && !a.input.is(":focus")
      },
      _checkOffset: function(b, c, d) {
        var e = b.dpDiv.outerWidth(),
          f = b.dpDiv.outerHeight(),
          g = b.input ? b.input.outerWidth() : 0,
          h = b.input ? b.input.outerHeight() : 0,
          i = document.documentElement.clientWidth + (d ? 0 : a(document).scrollLeft()),
          j = document.documentElement.clientHeight + (d ? 0 : a(document).scrollTop());
        return c.left -= this._get(b, "isRTL") ? e - g : 0, c.left -= d && c.left === b.input.offset().left ? a(document).scrollLeft() : 0, c.top -= d && c.top === b.input.offset().top + h ? a(document).scrollTop() : 0, c.left -= Math.min(c.left, c.left + e > i && i > e ? Math.abs(c.left + e - i) : 0), c.top -= Math.min(c.top, c.top + f > j && j > f ? Math.abs(f + h) : 0), c
      },
      _findPos: function(b) {
        for (var c, d = this._getInst(b), e = this._get(d, "isRTL"); b && ("hidden" === b.type || 1 !== b.nodeType || a.expr.filters.hidden(b));) b = b[e ? "previousSibling" : "nextSibling"];
        return c = a(b).offset(), [c.left, c.top]
      },
      _hideDatepicker: function(b) {
        var c, d, e, f, g = this._curInst;
        !g || b && g !== a.data(b, "datepicker") || this._datepickerShowing && (c = this._get(g, "showAnim"), d = this._get(g, "duration"), e = function() {
          a.datepicker._tidyDialog(g)
        }, a.effects && (a.effects.effect[c] || a.effects[c]) ? g.dpDiv.hide(c, a.datepicker._get(g, "showOptions"), d, e) : g.dpDiv["slideDown" === c ? "slideUp" : "fadeIn" === c ? "fadeOut" : "hide"](c ? d : null, e), c || e(), this._datepickerShowing = !1, f = this._get(g, "onClose"), f && f.apply(g.input ? g.input[0] : null, [g.input ? g.input.val() : "", g]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
          position: "absolute",
          left: "0",
          top: "-100px"
        }), a.blockUI && (a.unblockUI(), a("body").append(this.dpDiv))), this._inDialog = !1)
      },
      _tidyDialog: function(a) {
        a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
      },
      _checkExternalClick: function(b) {
        if (a.datepicker._curInst) {
          var c = a(b.target),
            d = a.datepicker._getInst(c[0]);
          (c[0].id !== a.datepicker._mainDivId && 0 === c.parents("#" + a.datepicker._mainDivId).length && !c.hasClass(a.datepicker.markerClassName) && !c.closest("." + a.datepicker._triggerClass).length && a.datepicker._datepickerShowing && (!a.datepicker._inDialog || !a.blockUI) || c.hasClass(a.datepicker.markerClassName) && a.datepicker._curInst !== d) && a.datepicker._hideDatepicker()
        }
      },
      _adjustDate: function(b, c, d) {
        var e = a(b),
          f = this._getInst(e[0]);
        this._isDisabledDatepicker(e[0]) || (this._adjustInstDate(f, c + ("M" === d ? this._get(f, "showCurrentAtPos") : 0), d), this._updateDatepicker(f))
      },
      _gotoToday: function(b) {
        var c, d = a(b),
          e = this._getInst(d[0]);
        this._get(e, "gotoCurrent") && e.currentDay ? (e.selectedDay = e.currentDay, e.drawMonth = e.selectedMonth = e.currentMonth, e.drawYear = e.selectedYear = e.currentYear) : (c = new Date, e.selectedDay = c.getDate(), e.drawMonth = e.selectedMonth = c.getMonth(), e.drawYear = e.selectedYear = c.getFullYear()), this._notifyChange(e), this._adjustDate(d)
      },
      _selectMonthYear: function(b, c, d) {
        var e = a(b),
          f = this._getInst(e[0]);
        f["selected" + ("M" === d ? "Month" : "Year")] = f["draw" + ("M" === d ? "Month" : "Year")] = parseInt(c.options[c.selectedIndex].value, 10), this._notifyChange(f), this._adjustDate(e)
      },
      _selectDay: function(b, c, d, e) {
        var f, g = a(b);
        a(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(g[0]) || (f = this._getInst(g[0]), f.selectedDay = f.currentDay = a("a", e).html(), f.selectedMonth = f.currentMonth = c, f.selectedYear = f.currentYear = d, this._selectDate(b, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
      },
      _clearDate: function(b) {
        var c = a(b);
        this._selectDate(c, "")
      },
      _selectDate: function(b, c) {
        var d, e = a(b),
          f = this._getInst(e[0]);
        c = null != c ? c : this._formatDate(f), f.input && f.input.val(c), this._updateAlternate(f), d = this._get(f, "onSelect"), d ? d.apply(f.input ? f.input[0] : null, [c, f]) : f.input && f.input.trigger("change"), f.inline ? this._updateDatepicker(f) : (this._hideDatepicker(), this._lastInput = f.input[0], "object" != typeof f.input[0] && f.input.focus(), this._lastInput = null)
      },
      _updateAlternate: function(b) {
        var c, d, e, f = this._get(b, "altField");
        f && (c = this._get(b, "altFormat") || this._get(b, "dateFormat"), d = this._getDate(b), e = this.formatDate(c, d, this._getFormatConfig(b)), a(f).each(function() {
          a(this).val(e)
        }))
      },
      noWeekends: function(a) {
        var b = a.getDay();
        return [b > 0 && 6 > b, ""]
      },
      iso8601Week: function(a) {
        var b, c = new Date(a.getTime());
        return c.setDate(c.getDate() + 4 - (c.getDay() || 7)), b = c.getTime(), c.setMonth(0), c.setDate(1), Math.floor(Math.round((b - c) / 864e5) / 7) + 1
      },
      parseDate: function(b, c, d) {
        if (null == b || null == c) throw "Invalid arguments";
        if (c = "object" == typeof c ? "" + c : c + "", "" === c) return null;
        var e, f, g, h, i = 0,
          j = (d ? d.shortYearCutoff : null) || this._defaults.shortYearCutoff,
          k = "string" != typeof j ? j : (new Date).getFullYear() % 100 + parseInt(j, 10),
          l = (d ? d.dayNamesShort : null) || this._defaults.dayNamesShort,
          m = (d ? d.dayNames : null) || this._defaults.dayNames,
          n = (d ? d.monthNamesShort : null) || this._defaults.monthNamesShort,
          o = (d ? d.monthNames : null) || this._defaults.monthNames,
          p = -1,
          q = -1,
          r = -1,
          s = -1,
          t = !1,
          u = function(a) {
            var c = b.length > e + 1 && b.charAt(e + 1) === a;
            return c && e++, c
          },
          v = function(a) {
            var b = u(a),
              d = "@" === a ? 14 : "!" === a ? 20 : "y" === a && b ? 4 : "o" === a ? 3 : 2,
              e = "y" === a ? d : 1,
              f = RegExp("^\\d{" + e + "," + d + "}"),
              g = c.substring(i).match(f);
            if (!g) throw "Missing number at position " + i;
            return i += g[0].length, parseInt(g[0], 10)
          },
          w = function(b, d, e) {
            var f = -1,
              g = a.map(u(b) ? e : d, function(a, b) {
                return [
                  [b, a]
                ]
              }).sort(function(a, b) {
                return -(a[1].length - b[1].length)
              });
            if (a.each(g, function(a, b) {
                var d = b[1];
                return c.substr(i, d.length).toLowerCase() === d.toLowerCase() ? (f = b[0], i += d.length, !1) : void 0
              }), -1 !== f) return f + 1;
            throw "Unknown name at position " + i
          },
          x = function() {
            if (c.charAt(i) !== b.charAt(e)) throw "Unexpected literal at position " + i;
            i++
          };
        for (e = 0; b.length > e; e++)
          if (t) "'" !== b.charAt(e) || u("'") ? x() : t = !1;
          else switch (b.charAt(e)) {
            case "d":
              r = v("d");
              break;
            case "D":
              w("D", l, m);
              break;
            case "o":
              s = v("o");
              break;
            case "m":
              q = v("m");
              break;
            case "M":
              q = w("M", n, o);
              break;
            case "y":
              p = v("y");
              break;
            case "@":
              h = new Date(v("@")), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
              break;
            case "!":
              h = new Date((v("!") - this._ticksTo1970) / 1e4), p = h.getFullYear(), q = h.getMonth() + 1, r = h.getDate();
              break;
            case "'":
              u("'") ? x() : t = !0;
              break;
            default:
              x()
          }
        if (c.length > i && (g = c.substr(i), !/^\s+/.test(g))) throw "Extra/unparsed characters found in date: " + g;
        if (-1 === p ? p = (new Date).getFullYear() : 100 > p && (p += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (k >= p ? 0 : -100)), s > -1)
          for (q = 1, r = s; f = this._getDaysInMonth(p, q - 1), !(f >= r);) q++, r -= f;
        if (h = this._daylightSavingAdjust(new Date(p, q - 1, r)), h.getFullYear() !== p || h.getMonth() + 1 !== q || h.getDate() !== r) throw "Invalid date";
        return h
      },
      ATOM: "yy-mm-dd",
      COOKIE: "D, dd M yy",
      ISO_8601: "yy-mm-dd",
      RFC_822: "D, d M y",
      RFC_850: "DD, dd-M-y",
      RFC_1036: "D, d M y",
      RFC_1123: "D, d M yy",
      RFC_2822: "D, d M yy",
      RSS: "D, d M y",
      TICKS: "!",
      TIMESTAMP: "@",
      W3C: "yy-mm-dd",
      _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
      formatDate: function(a, b, c) {
        if (!b) return "";
        var d, e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort,
          f = (c ? c.dayNames : null) || this._defaults.dayNames,
          g = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort,
          h = (c ? c.monthNames : null) || this._defaults.monthNames,
          i = function(b) {
            var c = a.length > d + 1 && a.charAt(d + 1) === b;
            return c && d++, c
          },
          j = function(a, b, c) {
            var d = "" + b;
            if (i(a))
              for (; c > d.length;) d = "0" + d;
            return d
          },
          k = function(a, b, c, d) {
            return i(a) ? d[b] : c[b]
          },
          l = "",
          m = !1;
        if (b)
          for (d = 0; a.length > d; d++)
            if (m) "'" !== a.charAt(d) || i("'") ? l += a.charAt(d) : m = !1;
            else switch (a.charAt(d)) {
              case "d":
                l += j("d", b.getDate(), 2);
                break;
              case "D":
                l += k("D", b.getDay(), e, f);
                break;
              case "o":
                l += j("o", Math.round((new Date(b.getFullYear(), b.getMonth(), b.getDate()).getTime() - new Date(b.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                break;
              case "m":
                l += j("m", b.getMonth() + 1, 2);
                break;
              case "M":
                l += k("M", b.getMonth(), g, h);
                break;
              case "y":
                l += i("y") ? b.getFullYear() : (10 > b.getYear() % 100 ? "0" : "") + b.getYear() % 100;
                break;
              case "@":
                l += b.getTime();
                break;
              case "!":
                l += 1e4 * b.getTime() + this._ticksTo1970;
                break;
              case "'":
                i("'") ? l += "'" : m = !0;
                break;
              default:
                l += a.charAt(d)
            }
        return l
      },
      _possibleChars: function(a) {
        var b, c = "",
          d = !1,
          e = function(c) {
            var d = a.length > b + 1 && a.charAt(b + 1) === c;
            return d && b++, d
          };
        for (b = 0; a.length > b; b++)
          if (d) "'" !== a.charAt(b) || e("'") ? c += a.charAt(b) : d = !1;
          else switch (a.charAt(b)) {
            case "d":
            case "m":
            case "y":
            case "@":
              c += "0123456789";
              break;
            case "D":
            case "M":
              return null;
            case "'":
              e("'") ? c += "'" : d = !0;
              break;
            default:
              c += a.charAt(b)
          }
        return c
      },
      _get: function(a, b) {
        return void 0 !== a.settings[b] ? a.settings[b] : this._defaults[b]
      },
      _setDateFromField: function(a, b) {
        if (a.input.val() !== a.lastVal) {
          var c = this._get(a, "dateFormat"),
            d = a.lastVal = a.input ? a.input.val() : null,
            e = this._getDefaultDate(a),
            f = e,
            g = this._getFormatConfig(a);
          try {
            f = this.parseDate(c, d, g) || e
          } catch (a) {
            d = b ? "" : d
          }
          a.selectedDay = f.getDate(), a.drawMonth = a.selectedMonth = f.getMonth(), a.drawYear = a.selectedYear = f.getFullYear(), a.currentDay = d ? f.getDate() : 0, a.currentMonth = d ? f.getMonth() : 0, a.currentYear = d ? f.getFullYear() : 0, this._adjustInstDate(a)
        }
      },
      _getDefaultDate: function(a) {
        return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
      },
      _determineDate: function(b, c, d) {
        var e = function(a) {
            var b = new Date;
            return b.setDate(b.getDate() + a), b
          },
          f = function(c) {
            try {
              return a.datepicker.parseDate(a.datepicker._get(b, "dateFormat"), c, a.datepicker._getFormatConfig(b))
            } catch (a) {}
            for (var d = (c.toLowerCase().match(/^c/) ? a.datepicker._getDate(b) : null) || new Date, e = d.getFullYear(), f = d.getMonth(), g = d.getDate(), h = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, i = h.exec(c); i;) {
              switch (i[2] || "d") {
                case "d":
                case "D":
                  g += parseInt(i[1], 10);
                  break;
                case "w":
                case "W":
                  g += 7 * parseInt(i[1], 10);
                  break;
                case "m":
                case "M":
                  f += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f));
                  break;
                case "y":
                case "Y":
                  e += parseInt(i[1], 10), g = Math.min(g, a.datepicker._getDaysInMonth(e, f))
              }
              i = h.exec(c)
            }
            return new Date(e, f, g)
          },
          g = null == c || "" === c ? d : "string" == typeof c ? f(c) : "number" == typeof c ? isNaN(c) ? d : e(c) : new Date(c.getTime());
        return g = g && "Invalid Date" == "" + g ? d : g, g && (g.setHours(0), g.setMinutes(0), g.setSeconds(0), g.setMilliseconds(0)), this._daylightSavingAdjust(g)
      },
      _daylightSavingAdjust: function(a) {
        return a ? (a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0), a) : null
      },
      _setDate: function(a, b, c) {
        var d = !b,
          e = a.selectedMonth,
          f = a.selectedYear,
          g = this._restrictMinMax(a, this._determineDate(a, b, new Date));
        a.selectedDay = a.currentDay = g.getDate(), a.drawMonth = a.selectedMonth = a.currentMonth = g.getMonth(), a.drawYear = a.selectedYear = a.currentYear = g.getFullYear(), e === a.selectedMonth && f === a.selectedYear || c || this._notifyChange(a), this._adjustInstDate(a), a.input && a.input.val(d ? "" : this._formatDate(a))
      },
      _getDate: function(a) {
        var b = !a.currentYear || a.input && "" === a.input.val() ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        return b
      },
      _attachHandlers: function(b) {
        var c = this._get(b, "stepMonths"),
          d = "#" + b.id.replace(/\\\\/g, "\\");
        b.dpDiv.find("[data-handler]").map(function() {
          var b = {
            prev: function() {
              a.datepicker._adjustDate(d, -c, "M")
            },
            next: function() {
              a.datepicker._adjustDate(d, +c, "M")
            },
            hide: function() {
              a.datepicker._hideDatepicker()
            },
            today: function() {
              a.datepicker._gotoToday(d)
            },
            selectDay: function() {
              return a.datepicker._selectDay(d, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
            },
            selectMonth: function() {
              return a.datepicker._selectMonthYear(d, this, "M"), !1
            },
            selectYear: function() {
              return a.datepicker._selectMonthYear(d, this, "Y"), !1
            }
          };
          a(this).bind(this.getAttribute("data-event"), b[this.getAttribute("data-handler")])
        })
      },
      _generateHTML: function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O = new Date,
          P = this._daylightSavingAdjust(new Date(O.getFullYear(), O.getMonth(), O.getDate())),
          Q = this._get(a, "isRTL"),
          R = this._get(a, "showButtonPanel"),
          S = this._get(a, "hideIfNoPrevNext"),
          T = this._get(a, "navigationAsDateFormat"),
          U = this._getNumberOfMonths(a),
          V = this._get(a, "showCurrentAtPos"),
          W = this._get(a, "stepMonths"),
          X = 1 !== U[0] || 1 !== U[1],
          Y = this._daylightSavingAdjust(a.currentDay ? new Date(a.currentYear, a.currentMonth, a.currentDay) : new Date(9999, 9, 9)),
          Z = this._getMinMaxDate(a, "min"),
          $ = this._getMinMaxDate(a, "max"),
          _ = a.drawMonth - V,
          aa = a.drawYear;
        if (0 > _ && (_ += 12, aa--), $)
          for (b = this._daylightSavingAdjust(new Date($.getFullYear(), $.getMonth() - U[0] * U[1] + 1, $.getDate())), b = Z && Z > b ? Z : b; this._daylightSavingAdjust(new Date(aa, _, 1)) > b;) _--, 0 > _ && (_ = 11, aa--);
        for (a.drawMonth = _, a.drawYear = aa, c = this._get(a, "prevText"), c = T ? this.formatDate(c, this._daylightSavingAdjust(new Date(aa, _ - W, 1)), this._getFormatConfig(a)) : c, d = this._canAdjustMonth(a, -1, aa, _) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>" : S ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + c + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "e" : "w") + "'>" + c + "</span></a>", e = this._get(a, "nextText"), e = T ? this.formatDate(e, this._daylightSavingAdjust(new Date(aa, _ + W, 1)), this._getFormatConfig(a)) : e, f = this._canAdjustMonth(a, 1, aa, _) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>" : S ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + e + "'><span class='ui-icon ui-icon-circle-triangle-" + (Q ? "w" : "e") + "'>" + e + "</span></a>", g = this._get(a, "currentText"), h = this._get(a, "gotoCurrent") && a.currentDay ? Y : P, g = T ? this.formatDate(g, h, this._getFormatConfig(a)) : g, i = a.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(a, "closeText") + "</button>", j = R ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (Q ? i : "") + (this._isInRange(a, h) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + g + "</button>" : "") + (Q ? "" : i) + "</div>" : "", k = parseInt(this._get(a, "firstDay"), 10), k = isNaN(k) ? 0 : k, l = this._get(a, "showWeek"), m = this._get(a, "dayNames"), n = this._get(a, "dayNamesMin"), o = this._get(a, "monthNames"), p = this._get(a, "monthNamesShort"), q = this._get(a, "beforeShowDay"), r = this._get(a, "showOtherMonths"), s = this._get(a, "selectOtherMonths"), t = this._getDefaultDate(a), u = "", w = 0; U[0] > w; w++) {
          for (x = "", this.maxRows = 4, y = 0; U[1] > y; y++) {
            if (z = this._daylightSavingAdjust(new Date(aa, _, a.selectedDay)), A = " ui-corner-all", B = "", X) {
              if (B += "<div class='ui-datepicker-group", U[1] > 1) switch (y) {
                case 0:
                  B += " ui-datepicker-group-first", A = " ui-corner-" + (Q ? "right" : "left");
                  break;
                case U[1] - 1:
                  B += " ui-datepicker-group-last", A = " ui-corner-" + (Q ? "left" : "right");
                  break;
                default:
                  B += " ui-datepicker-group-middle", A = ""
              }
              B += "'>"
            }
            for (B += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + A + "'>" + (/all|left/.test(A) && 0 === w ? Q ? f : d : "") + (/all|right/.test(A) && 0 === w ? Q ? d : f : "") + this._generateMonthYearHeader(a, _, aa, Z, $, w > 0 || y > 0, o, p) + "</div><table class='ui-datepicker-calendar'><thead><tr>", C = l ? "<th class='ui-datepicker-week-col'>" + this._get(a, "weekHeader") + "</th>" : "", v = 0; 7 > v; v++) D = (v + k) % 7, C += "<th scope='col'" + ((v + k + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + m[D] + "'>" + n[D] + "</span></th>";
            for (B += C + "</tr></thead><tbody>", E = this._getDaysInMonth(aa, _), aa === a.selectedYear && _ === a.selectedMonth && (a.selectedDay = Math.min(a.selectedDay, E)), F = (this._getFirstDayOfMonth(aa, _) - k + 7) % 7, G = Math.ceil((F + E) / 7), H = X && this.maxRows > G ? this.maxRows : G, this.maxRows = H, I = this._daylightSavingAdjust(new Date(aa, _, 1 - F)), J = 0; H > J; J++) {
              for (B += "<tr>", K = l ? "<td class='ui-datepicker-week-col'>" + this._get(a, "calculateWeek")(I) + "</td>" : "", v = 0; 7 > v; v++) L = q ? q.apply(a.input ? a.input[0] : null, [I]) : [!0, ""], M = I.getMonth() !== _, N = M && !s || !L[0] || Z && Z > I || $ && I > $, K += "<td class='" + ((v + k + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (M ? " ui-datepicker-other-month" : "") + (I.getTime() === z.getTime() && _ === a.selectedMonth && a._keyEvent || t.getTime() === I.getTime() && t.getTime() === z.getTime() ? " " + this._dayOverClass : "") + (N ? " " + this._unselectableClass + " ui-state-disabled" : "") + (M && !r ? "" : " " + L[1] + (I.getTime() === Y.getTime() ? " " + this._currentClass : "") + (I.getTime() === P.getTime() ? " ui-datepicker-today" : "")) + "'" + (M && !r || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (N ? "" : " data-handler='selectDay' data-event='click' data-month='" + I.getMonth() + "' data-year='" + I.getFullYear() + "'") + ">" + (M && !r ? "&#xa0;" : N ? "<span class='ui-state-default'>" + I.getDate() + "</span>" : "<a class='ui-state-default" + (I.getTime() === P.getTime() ? " ui-state-highlight" : "") + (I.getTime() === Y.getTime() ? " ui-state-active" : "") + (M ? " ui-priority-secondary" : "") + "' href='#'>" + I.getDate() + "</a>") + "</td>", I.setDate(I.getDate() + 1), I = this._daylightSavingAdjust(I);
              B += K + "</tr>"
            }
            _++, _ > 11 && (_ = 0, aa++), B += "</tbody></table>" + (X ? "</div>" + (U[0] > 0 && y === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += B
          }
          u += x
        }
        return u += j, a._keyEvent = !1, u
      },
      _generateMonthYearHeader: function(a, b, c, d, e, f, g, h) {
        var i, j, k, l, m, n, o, p, q = this._get(a, "changeMonth"),
          r = this._get(a, "changeYear"),
          s = this._get(a, "showMonthAfterYear"),
          t = "<div class='ui-datepicker-title'>",
          u = "";
        if (f || !q) u += "<span class='ui-datepicker-month'>" + g[b] + "</span>";
        else {
          for (i = d && d.getFullYear() === c, j = e && e.getFullYear() === c, u += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", k = 0; 12 > k; k++)(!i || k >= d.getMonth()) && (!j || e.getMonth() >= k) && (u += "<option value='" + k + "'" + (k === b ? " selected='selected'" : "") + ">" + h[k] + "</option>");
          u += "</select>"
        }
        if (s || (t += u + (!f && q && r ? "" : "&#xa0;")), !a.yearshtml)
          if (a.yearshtml = "", f || !r) t += "<span class='ui-datepicker-year'>" + c + "</span>";
          else {
            for (l = this._get(a, "yearRange").split(":"), m = (new Date).getFullYear(), n = function(a) {
                var b = a.match(/c[+\-].*/) ? c + parseInt(a.substring(1), 10) : a.match(/[+\-].*/) ? m + parseInt(a, 10) : parseInt(a, 10);
                return isNaN(b) ? m : b
              }, o = n(l[0]), p = Math.max(o, n(l[1] || "")), o = d ? Math.max(o, d.getFullYear()) : o, p = e ? Math.min(p, e.getFullYear()) : p, a.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; p >= o; o++) a.yearshtml += "<option value='" + o + "'" + (o === c ? " selected='selected'" : "") + ">" + o + "</option>";
            a.yearshtml += "</select>", t += a.yearshtml, a.yearshtml = null
          }
        return t += this._get(a, "yearSuffix"), s && (t += (!f && q && r ? "" : "&#xa0;") + u), t += "</div>"
      },
      _adjustInstDate: function(a, b, c) {
        var d = a.drawYear + ("Y" === c ? b : 0),
          e = a.drawMonth + ("M" === c ? b : 0),
          f = Math.min(a.selectedDay, this._getDaysInMonth(d, e)) + ("D" === c ? b : 0),
          g = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(d, e, f)));
        a.selectedDay = g.getDate(), a.drawMonth = a.selectedMonth = g.getMonth(), a.drawYear = a.selectedYear = g.getFullYear(), ("M" === c || "Y" === c) && this._notifyChange(a)
      },
      _restrictMinMax: function(a, b) {
        var c = this._getMinMaxDate(a, "min"),
          d = this._getMinMaxDate(a, "max"),
          e = c && c > b ? c : b;
        return d && e > d ? d : e
      },
      _notifyChange: function(a) {
        var b = this._get(a, "onChangeMonthYear");
        b && b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
      },
      _getNumberOfMonths: function(a) {
        var b = this._get(a, "numberOfMonths");
        return null == b ? [1, 1] : "number" == typeof b ? [1, b] : b
      },
      _getMinMaxDate: function(a, b) {
        return this._determineDate(a, this._get(a, b + "Date"), null)
      },
      _getDaysInMonth: function(a, b) {
        return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
      },
      _getFirstDayOfMonth: function(a, b) {
        return new Date(a, b, 1).getDay()
      },
      _canAdjustMonth: function(a, b, c, d) {
        var e = this._getNumberOfMonths(a),
          f = this._daylightSavingAdjust(new Date(c, d + (0 > b ? b : e[0] * e[1]), 1));
        return 0 > b && f.setDate(this._getDaysInMonth(f.getFullYear(), f.getMonth())), this._isInRange(a, f)
      },
      _isInRange: function(a, b) {
        var c, d, e = this._getMinMaxDate(a, "min"),
          f = this._getMinMaxDate(a, "max"),
          g = null,
          h = null,
          i = this._get(a, "yearRange");
        return i && (c = i.split(":"), d = (new Date).getFullYear(), g = parseInt(c[0], 10), h = parseInt(c[1], 10), c[0].match(/[+\-].*/) && (g += d), c[1].match(/[+\-].*/) && (h += d)), (!e || b.getTime() >= e.getTime()) && (!f || b.getTime() <= f.getTime()) && (!g || b.getFullYear() >= g) && (!h || h >= b.getFullYear())
      },
      _getFormatConfig: function(a) {
        var b = this._get(a, "shortYearCutoff");
        return b = "string" != typeof b ? b : (new Date).getFullYear() % 100 + parseInt(b, 10), {
          shortYearCutoff: b,
          dayNamesShort: this._get(a, "dayNamesShort"),
          dayNames: this._get(a, "dayNames"),
          monthNamesShort: this._get(a, "monthNamesShort"),
          monthNames: this._get(a, "monthNames")
        }
      },
      _formatDate: function(a, b, c, d) {
        b || (a.currentDay = a.selectedDay, a.currentMonth = a.selectedMonth, a.currentYear = a.selectedYear);
        var e = b ? "object" == typeof b ? b : this._daylightSavingAdjust(new Date(d, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
        return this.formatDate(this._get(a, "dateFormat"), e, this._getFormatConfig(a))
      }
    }), a.fn.datepicker = function(b) {
      if (!this.length) return this;
      a.datepicker.initialized || (a(document).mousedown(a.datepicker._checkExternalClick), a.datepicker.initialized = !0), 0 === a("#" + a.datepicker._mainDivId).length && a("body").append(a.datepicker.dpDiv);
      var c = Array.prototype.slice.call(arguments, 1);
      return "string" != typeof b || "isDisabled" !== b && "getDate" !== b && "widget" !== b ? "option" === b && 2 === arguments.length && "string" == typeof arguments[1] ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c)) : this.each(function() {
        "string" == typeof b ? a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this].concat(c)) : a.datepicker._attachDatepicker(this, b)
      }) : a.datepicker["_" + b + "Datepicker"].apply(a.datepicker, [this[0]].concat(c))
    }, a.datepicker = new e, a.datepicker.initialized = !1, a.datepicker.uuid = (new Date).getTime(), a.datepicker.version = "1.11.2", a.datepicker, a.widget("ui.tooltip", {
      version: "1.11.2",
      options: {
        content: function() {
          var b = a(this).attr("title") || "";
          return a("<a>").text(b).html()
        },
        hide: !0,
        items: "[title]:not([disabled])",
        position: {
          my: "left top+15",
          at: "left bottom",
          collision: "flipfit flip"
        },
        show: !0,
        tooltipClass: null,
        track: !1,
        close: null,
        open: null
      },
      _addDescribedBy: function(b, c) {
        var d = (b.attr("aria-describedby") || "").split(/\s+/);
        d.push(c), b.data("ui-tooltip-id", c).attr("aria-describedby", a.trim(d.join(" ")))
      },
      _removeDescribedBy: function(b) {
        var c = b.data("ui-tooltip-id"),
          d = (b.attr("aria-describedby") || "").split(/\s+/),
          e = a.inArray(c, d); - 1 !== e && d.splice(e, 1), b.removeData("ui-tooltip-id"), d = a.trim(d.join(" ")), d ? b.attr("aria-describedby", d) : b.removeAttr("aria-describedby")
      },
      _create: function() {
        this._on({
          mouseover: "open",
          focusin: "open"
        }), this.tooltips = {}, this.parents = {}, this.options.disabled && this._disable(), this.liveRegion = a("<div>").attr({
          role: "log",
          "aria-live": "assertive",
          "aria-relevant": "additions"
        }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
      },
      _setOption: function(b, c) {
        var d = this;
        return "disabled" === b ? (this[c ? "_disable" : "_enable"](), void(this.options[b] = c)) : (this._super(b, c), void("content" === b && a.each(this.tooltips, function(a, b) {
          d._updateContent(b.element)
        })))
      },
      _disable: function() {
        var b = this;
        a.each(this.tooltips, function(c, d) {
          var e = a.Event("blur");
          e.target = e.currentTarget = d.element[0], b.close(e, !0)
        }), this.element.find(this.options.items).addBack().each(function() {
          var b = a(this);
          b.is("[title]") && b.data("ui-tooltip-title", b.attr("title")).removeAttr("title")
        })
      },
      _enable: function() {
        this.element.find(this.options.items).addBack().each(function() {
          var b = a(this);
          b.data("ui-tooltip-title") && b.attr("title", b.data("ui-tooltip-title"))
        })
      },
      open: function(b) {
        var c = this,
          d = a(b ? b.target : this.element).closest(this.options.items);
        d.length && !d.data("ui-tooltip-id") && (d.attr("title") && d.data("ui-tooltip-title", d.attr("title")), d.data("ui-tooltip-open", !0), b && "mouseover" === b.type && d.parents().each(function() {
          var b, d = a(this);
          d.data("ui-tooltip-open") && (b = a.Event("blur"), b.target = b.currentTarget = this, c.close(b, !0)), d.attr("title") && (d.uniqueId(), c.parents[this.id] = {
            element: this,
            title: d.attr("title")
          }, d.attr("title", ""))
        }), this._updateContent(d, b))
      },
      _updateContent: function(a, b) {
        var c, d = this.options.content,
          e = this,
          f = b ? b.type : null;
        return "string" == typeof d ? this._open(b, a, d) : (c = d.call(a[0], function(c) {
          a.data("ui-tooltip-open") && e._delay(function() {
            b && (b.type = f), this._open(b, a, c)
          })
        }), void(c && this._open(b, a, c)))
      },
      _open: function(b, c, d) {
        function e(a) {
          k.of = a, g.is(":hidden") || g.position(k)
        }
        var f, g, h, i, j, k = a.extend({}, this.options.position);
        if (d) {
          if (f = this._find(c)) return void f.tooltip.find(".ui-tooltip-content").html(d);
          c.is("[title]") && (b && "mouseover" === b.type ? c.attr("title", "") : c.removeAttr("title")), f = this._tooltip(c), g = f.tooltip, this._addDescribedBy(c, g.attr("id")), g.find(".ui-tooltip-content").html(d), this.liveRegion.children().hide(), d.clone ? (j = d.clone(), j.removeAttr("id").find("[id]").removeAttr("id")) : j = d, a("<div>").html(j).appendTo(this.liveRegion), this.options.track && b && /^mouse/.test(b.type) ? (this._on(this.document, {
            mousemove: e
          }), e(b)) : g.position(a.extend({ of: c
          }, this.options.position)), g.hide(), this._show(g, this.options.show), this.options.show && this.options.show.delay && (i = this.delayedShow = setInterval(function() {
            g.is(":visible") && (e(k.of), clearInterval(i))
          }, a.fx.interval)), this._trigger("open", b, {
            tooltip: g
          }), h = {
            keyup: function(b) {
              if (b.keyCode === a.ui.keyCode.ESCAPE) {
                var d = a.Event(b);
                d.currentTarget = c[0], this.close(d, !0)
              }
            }
          }, c[0] !== this.element[0] && (h.remove = function() {
            this._removeTooltip(g)
          }), b && "mouseover" !== b.type || (h.mouseleave = "close"), b && "focusin" !== b.type || (h.focusout = "close"), this._on(!0, c, h)
        }
      },
      close: function(b) {
        var c, d = this,
          e = a(b ? b.currentTarget : this.element),
          f = this._find(e);
        f && (c = f.tooltip, f.closing || (clearInterval(this.delayedShow), e.data("ui-tooltip-title") && !e.attr("title") && e.attr("title", e.data("ui-tooltip-title")), this._removeDescribedBy(e), f.hiding = !0, c.stop(!0), this._hide(c, this.options.hide, function() {
          d._removeTooltip(a(this))
        }), e.removeData("ui-tooltip-open"), this._off(e, "mouseleave focusout keyup"), e[0] !== this.element[0] && this._off(e, "remove"), this._off(this.document, "mousemove"), b && "mouseleave" === b.type && a.each(this.parents, function(b, c) {
          a(c.element).attr("title", c.title), delete d.parents[b]
        }), f.closing = !0, this._trigger("close", b, {
          tooltip: c
        }), f.hiding || (f.closing = !1)))
      },
      _tooltip: function(b) {
        var c = a("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
          d = c.uniqueId().attr("id");
        return a("<div>").addClass("ui-tooltip-content").appendTo(c), c.appendTo(this.document[0].body), this.tooltips[d] = {
          element: b,
          tooltip: c
        }
      },
      _find: function(a) {
        var b = a.data("ui-tooltip-id");
        return b ? this.tooltips[b] : null
      },
      _removeTooltip: function(a) {
        a.remove(), delete this.tooltips[a.attr("id")]
      },
      _destroy: function() {
        var b = this;
        a.each(this.tooltips, function(c, d) {
          var e = a.Event("blur"),
            f = d.element;
          e.target = e.currentTarget = f[0], b.close(e, !0), a("#" + c).remove(), f.data("ui-tooltip-title") && (f.attr("title") || f.attr("title", f.data("ui-tooltip-title")), f.removeData("ui-tooltip-title"))
        }), this.liveRegion.remove()
      }
    })
  }),
  function(a, b, c) {
    function d(a, b) {
      var c = (a[0] || 0) - (b[0] || 0);
      return c > 0 || !c && a.length > 0 && d(a.slice(1), b.slice(1))
    }

    function e(a) {
      if (typeof a != h) return a;
      var b = [],
        c = "";
      for (var d in a) c = typeof a[d] == h ? e(a[d]) : [d, i ? encodeURI(a[d]) : a[d]].join("="), b.push(c);
      return b.join("&")
    }

    function f(a) {
      var b = [];
      for (var c in a) a[c] && b.push([c, '="', a[c], '"'].join(""));
      return b.join(" ")
    }

    function g(a) {
      var b = [];
      for (var c in a) b.push(['<param name="', c, '" value="', e(a[c]), '" />'].join(""));
      return b.join("")
    }
    var h = "object",
      i = !0;
    try {
      var j = c.description || function() {
        return new c("ShockwaveFlash.ShockwaveFlash").GetVariable("$version")
      }()
    } catch (a) {
      j = "Unavailable"
    }
    var k = j.match(/\d+/g) || [0];
    a[b] = {
      available: k[0] > 0,
      activeX: c && !c.name,
      version: {
        original: j,
        array: k,
        string: k.join("."),
        major: parseInt(k[0], 10) || 0,
        minor: parseInt(k[1], 10) || 0,
        release: parseInt(k[2], 10) || 0
      },
      hasVersion: function(a) {
        return a = /string|number/.test(typeof a) ? a.toString().split(".") : /object/.test(typeof a) ? [a.major, a.minor] : a || [0, 0], d(k, a)
      },
      encodeParams: !0,
      expressInstall: "expressInstall.swf",
      expressInstallIsActive: !1,
      create: function(a) {
        if (!a.swf || this.expressInstallIsActive || !this.available && !a.hasVersionFail) return !1;
        if (!this.hasVersion(a.hasVersion || 1)) {
          if (this.expressInstallIsActive = !0, "function" == typeof a.hasVersionFail && !a.hasVersionFail.apply(a)) return !1;
          a = {
            swf: a.expressInstall || this.expressInstall,
            height: 137,
            width: 214,
            flashvars: {
              MMredirectURL: location.href,
              MMplayerType: this.activeX ? "ActiveX" : "PlugIn",
              MMdoctitle: document.title.slice(0, 47) + " - Flash Player Installation"
            }
          }
        }
        attrs = {
          data: a.swf,
          type: "application/x-shockwave-flash",
          id: a.id || "flash_" + Math.floor(999999999 * Math.random()),
          width: a.width || 320,
          height: a.height || 180,
          style: a.style || ""
        }, i = "undefined" != typeof a.useEncode ? a.useEncode : this.encodeParams, a.movie = a.swf, a.wmode = a.wmode || "opaque", delete a.fallback, delete a.hasVersion, delete a.hasVersionFail, delete a.height, delete a.id, delete a.swf, delete a.useEncode, delete a.width;
        var b = document.createElement("div");
        return b.innerHTML = ["<object ", f(attrs), ">", g(a), "</object>"].join(""), b.firstChild
      }
    }, a.fn[b] = function(c) {
      var d = this.find(h).andSelf().filter(h);
      return /string|object/.test(typeof c) && this.each(function() {
        var d, e = a(this);
        c = typeof c == h ? c : {
          swf: c
        }, c.fallback = this, (d = a[b].create(c)) && (e.children().remove(), e.html(d))
      }), "function" == typeof c && d.each(function() {
        var d = this;
        d.jsInteractionTimeoutMs = d.jsInteractionTimeoutMs || 0, d.jsInteractionTimeoutMs < 660 && (d.clientWidth || d.clientHeight ? c.call(d) : setTimeout(function() {
          a(d)[b](c)
        }, d.jsInteractionTimeoutMs + 66))
      }), d
    }
  }(jQuery, "flash", navigator.plugins["Shockwave Flash"] || window.ActiveXObject),
  function(a) {
    "use strict";
    a.fn.tablefunctions = function(b) {
      return b = a.extend({}, a.fn.tablefunctions.defaults, b), a(this).each(function() {
        var b = a(this),
          c = b.children("thead").first();
        if (!b.is(".table-narrow") && b.parents(".article-inner").length) {
          var d = a("<div>", {
            class: "article-table"
          });
          b.before(d), d.append(b)
        }
        0 === c.length && (c = a("<thead>"), b.find("tr").each(function(b, d) {
          return 0 === a(d).children(":not(th)").length && void c.append(d)
        }), b.prepend(c)), c.children().length > 0 && (b.is('[data-columnpicker="false"]') || b.columnpicker(), c.stickytableheaders())
      })
    }, a.fn.tablefunctions.defaults = {}, a.fn.tablescroll = function(b) {
      b = a.extend({}, a.fn.tablescroll.defaults, b);
      var c = this;
      return window.matchMedia && window.matchMedia(b.mediaquery).matches || a(".dialog").length ? c.each(function() {
        var b = a(this);
        b.outerWidth() > b.parent().outerWidth() && !b.is('[data-tablescroll="false"]') ? b.hasClass("scrollable") || (b.wrap('<div class="scrollable-table"><div class="inner"></div></div>').addClass("scrollable"), b.parent().on("scroll", function() {
          var b = a(this),
            c = b.parent();
          b.scrollLeft() + 1 >= b.find("table").outerWidth() - b.outerWidth() ? c.addClass("no-shadow-right") : c.removeClass("no-shadow-right"), b.scrollLeft() > 0 ? c.addClass("shadow-left") : c.removeClass("shadow-left")
        })) : b.hasClass("scrollable") && b.removeClass("scrollable").unwrap().unwrap()
      }) : c.each(function() {
        var b = a(this);
        if ((b.outerWidth() > b.parent().outerWidth() || b.is(".table-dialog")) && b.is(":visible")) {
          var c = ".table-notes, .footnotes, .footnote",
            d = b.parent().is(".article-table") ? b.parent().next(c) : b.next(c),
            e = b.parent().is(".article-table") ? b.parent().prev() : b.prev(),
            f = e.is("h1, h2, h3, h4, h5, h6"),
            g = function() {
              var a = b.find("caption");
              return a.length ? a.children("p").length ? a.children("p").html() : a.html() : netr.string.translate("tables.showTable")
            }(),
            h = a("<p>"),
            i = a("<button>", {
              type: "button",
              class: "button button-style-2 hidden-on-print",
              html: '<span class="icon icon-table"></span><span>' + g + "</span>",
              click: function(c) {
                c.stopPropagation();
                var g = a.netrdialog({
                  extraClass: "dialog-table text"
                });
                b.removeClass("hidden-on-screen").detachWithPlaceholder(), g.setContent(b), d.length && g.contentElement.append(d.removeClass("hidden-on-screen").detachWithPlaceholder()), f && g.contentElement.prepend(a("<h2>", {
                  html: e.text(),
                  class: "article-heading-h2"
                })), g.dialogElement.on("close.netrdialog", function() {
                  b.addClass("hidden-on-screen").attachToPlaceholder(), d.addClass("hidden-on-screen").attachToPlaceholder()
                }), g.open(), g.position(), documentReadyFunctions(g.contentElement)
              }
            });
          a(".sticky-header").detach(), b.addClass("hidden-on-screen").before(h.append(i)), d.length && d.addClass("hidden-on-screen")
        }
      }), this
    }, a.fn.tablescroll.defaults = {
      mediaquery: "screen and (max-width:900px)"
    }, a.fn.tablepaging = function() {
      return a(this).each(function() {
        var b = a(this);
        if (b.find("tr").length > 13) {
          var c, d, e, f, g, h, i = 11,
            j = 0,
            k = i,
            l = function() {
              h.hide().slice(j, k).show(), n(), m()
            },
            m = function() {
              0 === j ? (d.attr("aria-disabled", !0), d.attr("disabled", !0)) : (d.attr("aria-disabled", !1), d.removeAttr("disabled")), k >= h.length ? (e.attr("aria-disabled", !0), e.attr("disabled", !0)) : (e.attr("aria-disabled", !1), e.removeAttr("disabled"))
            },
            n = function() {
              var a = j + 1,
                c = Math.min(k, h.length);
              a === c ? f.text(netr.string.supplant("Viewing row {first_row} of {total_rows}", {
                first_row: a,
                total_rows: b.find("tbody tr").length
              })) : f.text(netr.string.supplant("Viewing rows {first_row}-{last_row} of {total_rows}", {
                first_row: a,
                last_row: c,
                total_rows: b.find("tbody tr").length
              }))
            };
          a.breakpoint(function() {
            return {
              condition: function() {
                return window.matchMedia("screen and (max-width:700px)").matches && !netr.forceDesktopLayout
              },
              first_enter: function() {
                g = b.find("tbody"), h = g.children(), c = a('<div class="table-paging ↓">'), d = a("<button>", {
                  class: "up",
                  html: "<span>Up</span>",
                  click: function() {
                    j -= i, k -= i, l()
                  }
                }), e = a("<button>", {
                  class: "down",
                  html: "<span>Down</span>",
                  click: function() {
                    j += i, k += i, l()
                  }
                }), f = a('<p class="paging-summary">');
                var m = 0;
                b.find("thead tr:first > th").each(function() {
                  var b = a(this).attr("colspan");
                  m += b ? parseInt(b, 10) : 1
                });
                for (var n = i - h.length % i, o = 0; o < n; o++) g.append('<tr><td colspan="' + m + '">&nbsp;</td></tr>');
                h = g.children(), c.append(f, a('<div class="buttons">').append(d, e))
              },
              enter: function() {
                var a = b.closest(".scrollable-table");
                l(), c.insertAfter(a.length ? a : b)
              },
              exit: function() {
                c.detach(), h.show()
              }
            }
          }())
        }
      })
    }, a.fn.columnpicker = function() {
      return a(this).each(function() {
        function c() {
          var b = {
            active: a.grep(i, function(a) {
              return a.visible
            }).length,
            total: i.length
          };
          h.text(netr.string.supplant("Columns: {active} of {total}", b)), e.text(netr.string.supplant("{active} of {total} columns selected.", b))
        }
        var d, e, f, g, h, i, j = a(this),
          k = j.children("thead"),
          l = j.find("td,th"),
          m = 1;
        a.breakpoint(function() {
          return {
            condition: function() {
              return window.matchMedia("screen and (max-width:700px)").matches && !netr.forceDesktopLayout
            },
            first_enter: function() {
              i = [], k.find("tr:first-child > th").each(function() {
                var c = a(this),
                  d = parseInt(c.attr("colspan"), 10) || 1,
                  e = new b;
                i.push(e);
                var f = m + d;
                for (m; m < f; m++) e.cells = e.cells.add(l.nthCol(m))
              });
              var j = a.netrdialog({
                extraClass: "columpicker-dialog"
              });
              j.close(), j.dialogElement.on("load.netrdialog", function() {
                documentReadyFunctions(j.contentElement)
              }), d = a('<div class="column-picker-list article" tabindex="0">'), d.append("<h1>Choose columns</h1>"), e = a("<p>").appendTo(d), f = a("<ul>").appendTo(d), a.each(i, function(b, d) {
                var e = a("<input>", {
                    type: "checkbox",
                    checked: !0,
                    change: function() {
                      d.toggle(), c()
                    }
                  }).generateRandomId(),
                  g = a("<label>", {
                    for: e.attr("id")
                  }).append(a("<b>", {
                    html: d.getMainHeaderText()
                  }), a("<span>", {
                    html: " " + d.getSubHeaderText()
                  }));
                f.append(a('<li class="column-picker-checkbox checkbox">').append(e, g))
              }), d.append(a("<button>", {
                class: "popup-close-button",
                html: "<span>OK</span>",
                click: function() {
                  j.close()
                }
              })), g = a("<button>", {
                class: "column-picker-button",
                click: function(a) {
                  a.stopPropagation(), j.open()
                }
              }), h = a("<span>").appendTo(g), j.setContent(d)
            },
            enter: function() {
              var a = j.closest(".scrollable-table");
              c(), g.insertBefore(a.length ? a : j)
            },
            exit: function() {
              g.detach(), a.each(i, function(a, b) {
                b.show()
              })
            }
          }
        }())
      })
    }, a.fn.stickytableheaders = function() {
      return this.each(function() {
        function b() {
          var b = a(document).scrollTop(),
            c = i.closest("table"),
            d = c.height();
          b > i.offset().top && b < i.offset().top + d - i.height() && d > a(window).height() ? (i.offsetParent().append(f), f.prev().is(".sticky-header") && f.prev().remove(), f.css({
            left: i.offset().left,
            width: c.width()
          }), (c.is(".tight") || c.is(".tight-2")) && f.addClass("sticky-header-tight")) : f.detach()
        }

        function c() {
          b(), "undefined" != typeof h && clearTimeout(h), h = setTimeout(function() {
            d()
          }, 200)
        }

        function d() {
          g.empty(), j.each(function(b) {
            g.append(e(a(this), b, j))
          }), k && l.each(function(b) {
            g.append(e(a(this), b, l))
          })
        }

        function e(b, c, d) {
          var e = a('<li class="th" />').attr("style", b.attr("style")).html(b.html()).width(d.eq(c).outerWidth()).height(d.eq(c).outerHeight());
          return "" !== b.attr("align") && e.css("text-align", b.attr("align")), 0 === c && e.css("clear", "left"), e
        }
        var f, g, h, i = a(this),
          j = i.find("th, td"),
          k = i.next().find("tr:first th").length > 1 ? i.next().find("tr:first") : void 0,
          l = k ? k.find("th, td") : void 0;
        a.breakpoint(function() {
          return {
            condition: function() {
              return window.matchMedia("only screen and (min-width:701px)").matches || netr.forceDesktopLayout
            },
            first_enter: function() {
              f = a('<div class="sticky-header" aria-hidden="true">'), g = a("<ul>"), d(), f.append(g), a(b)
            },
            enter: function() {
              a(window).on("scroll", b), a(window).on("resize", c)
            },
            exit: function() {
              a(window).off("scroll", b)
            }
          }
        }())
      })
    };
    var b = function() {
      this.cells = a(), this.visible = !0
    };
    b.prototype = {
      getMainHeaderText: function() {
        var b = this.cells.first(),
          c = b.html();
        c = c.replace(/<br *\/*>/, " ");
        var d = a("<span>", {
          html: c
        }).text();
        return d || (d = b.find("img").attr("alt")), d
      },
      getSubHeaderText: function() {
        return a.map(this.cells.filter("thead th").slice(1), function(b) {
          b = a(b);
          var c = b.text();
          return c || (c = b.find("img").attr("alt")), c
        }).join(", ")
      },
      show: function() {
        this.cells.show(), this.visible = !0
      },
      hide: function() {
        this.cells.hide(), this.visible = !1
      },
      toggle: function() {
        this.visible ? this.hide() : this.show()
      }
    }
  }(jQuery), ! function(a, b) {
    "undefined" != typeof module && module.exports ? module.exports.browser = b() : "function" == typeof define ? define(b) : this[a] = b()
  }("bowser", function() {
    function a(a) {
      function c(b) {
        var c = a.match(b);
        return c && c.length > 1 && c[1] || ""
      }
      var d, e = c(/(ipod|iphone|ipad)/i).toLowerCase(),
        f = /like android/i.test(a),
        g = !f && /android/i.test(a),
        h = c(/version\/(\d+(\.\d+)?)/i),
        i = /tablet/i.test(a),
        j = !i && /[^-]mobi/i.test(a);
      /opera|opr/i.test(a) ? d = {
        name: "Opera",
        opera: b,
        version: h || c(/(?:opera|opr)[\s\/](\d+(\.\d+)?)/i)
      } : /windows phone/i.test(a) ? d = {
        name: "Windows Phone",
        windowsphone: b,
        msie: b,
        version: c(/iemobile\/(\d+(\.\d+)?)/i)
      } : /msie|trident/i.test(a) ? d = {
        name: "Internet Explorer",
        msie: b,
        version: c(/(?:msie |rv:)(\d+(\.\d+)?)/i)
      } : /chrome|crios|crmo/i.test(a) ? d = {
        name: "Chrome",
        chrome: b,
        version: c(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)
      } : e ? (d = {
        name: "iphone" == e ? "iPhone" : "ipad" == e ? "iPad" : "iPod"
      }, h && (d.version = h)) : /sailfish/i.test(a) ? d = {
        name: "Sailfish",
        sailfish: b,
        version: c(/sailfish\s?browser\/(\d+(\.\d+)?)/i)
      } : /seamonkey\//i.test(a) ? d = {
        name: "SeaMonkey",
        seamonkey: b,
        version: c(/seamonkey\/(\d+(\.\d+)?)/i)
      } : /firefox|iceweasel/i.test(a) ? (d = {
        name: "Firefox",
        firefox: b,
        version: c(/(?:firefox|iceweasel)[ \/](\d+(\.\d+)?)/i)
      }, /\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(a) && (d.firefoxos = b)) : /silk/i.test(a) ? d = {
        name: "Amazon Silk",
        silk: b,
        version: c(/silk\/(\d+(\.\d+)?)/i)
      } : g ? d = {
        name: "Android",
        version: h
      } : /phantom/i.test(a) ? d = {
        name: "PhantomJS",
        phantom: b,
        version: c(/phantomjs\/(\d+(\.\d+)?)/i)
      } : /blackberry|\bbb\d+/i.test(a) || /rim\stablet/i.test(a) ? d = {
        name: "BlackBerry",
        blackberry: b,
        version: h || c(/blackberry[\d]+\/(\d+(\.\d+)?)/i)
      } : /(web|hpw)os/i.test(a) ? (d = {
        name: "WebOS",
        webos: b,
        version: h || c(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)
      }, /touchpad\//i.test(a) && (d.touchpad = b)) : d = /bada/i.test(a) ? {
        name: "Bada",
        bada: b,
        version: c(/dolfin\/(\d+(\.\d+)?)/i)
      } : /tizen/i.test(a) ? {
        name: "Tizen",
        tizen: b,
        version: c(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i) || h
      } : /safari/i.test(a) ? {
        name: "Safari",
        safari: b,
        version: h
      } : {}, /(apple)?webkit/i.test(a) ? (d.name = d.name || "Webkit", d.webkit = b, !d.version && h && (d.version = h)) : !d.opera && /gecko\//i.test(a) && (d.name = d.name || "Gecko", d.gecko = b, d.version = d.version || c(/gecko\/(\d+(\.\d+)?)/i)), g || d.silk ? d.android = b : e && (d[e] = b, d.ios = b);
      var k = "";
      e ? (k = c(/os (\d+([_\s]\d+)*) like mac os x/i), k = k.replace(/[_\s]/g, ".")) : g ? k = c(/android[ \/-](\d+(\.\d+)*)/i) : d.windowsphone ? k = c(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i) : d.webos ? k = c(/(?:web|hpw)os\/(\d+(\.\d+)*)/i) : d.blackberry ? k = c(/rim\stablet\sos\s(\d+(\.\d+)*)/i) : d.bada ? k = c(/bada\/(\d+(\.\d+)*)/i) : d.tizen && (k = c(/tizen[\/\s](\d+(\.\d+)*)/i)), k && (d.osversion = k);
      var l = k.split(".")[0];
      return i || "ipad" == e || g && (3 == l || 4 == l && !j) || d.silk ? d.tablet = b : (j || "iphone" == e || "ipod" == e || g || d.blackberry || d.webos || d.bada) && (d.mobile = b), d.msie && d.version >= 10 || d.chrome && d.version >= 20 || d.firefox && d.version >= 20 || d.safari && d.version >= 6 || d.opera && d.version >= 10 || d.ios && d.osversion && d.osversion.split(".")[0] >= 6 ? d.a = b : d.msie && d.version < 10 || d.chrome && d.version < 20 || d.firefox && d.version < 20 || d.safari && d.version < 6 || d.opera && d.version < 10 || d.ios && d.osversion && d.osversion.split(".")[0] < 6 ? d.c = b : d.x = b, d
    }
    var b = !0,
      c = a("undefined" != typeof navigator ? navigator.userAgent : "");
    return c._detect = a, c
  }),
  function(a, b, c) {
    "use strict";

    function d(a, b) {
      b && b.onError && b.onError(a) === !1 || (this.name = "JsRender Error", this.message = a || "JsRender error")
    }

    function e(a, b) {
      var c;
      a = a || {};
      for (c in b) a[c] = b[c];
      return a
    }

    function f(a, b, c) {
      return ca.rTag && !arguments.length || (F = a ? a.charAt(0) : F, G = a ? a.charAt(1) : G, H = b ? b.charAt(0) : H, I = b ? b.charAt(1) : I, J = c || J, a = "\\" + F + "(\\" + J + ")?\\" + G, b = "\\" + H + "\\" + I, C = "(?:(?:(\\w+(?=[\\/\\s\\" + H + "]))|(?:(\\w+)?(:)|(>)|!--((?:[^-]|-(?!-))*)--|(\\*)))\\s*((?:[^\\" + H + "]|\\" + H + "(?!\\" + I + "))*?)", ca.rTag = C + ")", C = new RegExp(a + C + "(\\/)?|(?:\\/(\\w+)))" + b, "g"), D = new RegExp("<.*>|([^\\\\]|^)[{}]|" + a + ".*" + b)), [F, G, H, I, J]
    }

    function g(a, b) {
      b || (b = a, a = c);
      var d, e, f, g, h = this,
        i = !b || "root" === b;
      if (a) {
        if (g = h.type === b ? h : c, !g)
          if (d = h.views, h._.useKey) {
            for (e in d)
              if (g = d[e].get(a, b)) break
          } else
            for (e = 0, f = d.length; !g && e < f; e++) g = d[e].get(a, b)
      } else if (i)
        for (; h.parent.parent;) g = h = h.parent;
      else
        for (; h && !g;) g = h.type === b ? h : c, h = h.parent;
      return g
    }

    function h() {
      var a = this.get("item");
      return a ? a.index : c
    }

    function i(a) {
      var b, d = this,
        f = (d.ctx || {})[a];
      return f = f === c ? d.getRsc("helpers", a) : f, f && "function" == typeof f && (b = function() {
        return f.apply(d, arguments)
      }, e(b, f)), b || f
    }

    function j(a, b, d) {
      var e, f, g, h = +d === d && d,
        i = b.linkCtx;
      return h && (d = (h = b.tmpl.bnds[h - 1])(b.data, b, $)), g = d.args[0], (a || h) && (f = i && i.tag || {
        _: {
          inline: !i
        },
        tagName: a + ":",
        flow: !0,
        _is: "tag"
      }, f._.bnd = h, i && (i.tag = f, f.linkCtx = i, d.ctx = y(d.ctx, i.view.ctx)), f.tagCtx = d, d.view = b, f.ctx = d.ctx || {}, delete d.ctx, b._.tag = f, a = "true" !== a && a, a && ((e = b.getRsc("converters", a)) || t("Unknown converter: {{" + a + ":")) && (f.depends = e.depends, g = e.apply(f, d.args)), g = h && b._.onRender ? b._.onRender(g, b, h) : g, b._.tag = c), g
    }

    function k(a, b) {
      var d, e = this,
        f = $[a];
      for (d = f && f[b]; d === c && e;) f = e.tmpl[a], d = f && f[b], e = e.parent;
      return d
    }

    function l(a, b, d, f) {
      var g, h, i, j, k, l, m, n, o, p, q, r, u, v, w = "",
        x = +f === f && f,
        z = b.linkCtx || 0,
        A = b.ctx,
        B = d || b.tmpl,
        C = b._;
      for ("tag" === a._is && (h = a, a = h.tagName), x && (f = (r = B.bnds[x - 1])(b.data, b, $)), m = f.length, h = h || z.tag, l = 0; l < m; l++) o = f[l], q = o.tmpl, q = o.content = q && B.tmpls[q - 1], d = o.props.tmpl, l || d && h || (u = b.getRsc("tags", a) || t("Unknown tag: {{" + a + "}}")), d = d || (h ? h._def : u).template || q, d = "" + d === d ? b.getRsc("templates", d) || _(d) : d, e(o, {
        tmpl: d,
        render: s,
        index: l,
        view: b,
        ctx: y(o.ctx, A)
      }), h || (u._ctr ? (h = new u._ctr, v = !!h.init, h.attr = h.attr || u.attr || c) : h = {
        render: u.render
      }, h._ = {
        inline: !z
      }, z && (z.attr = h.attr = z.attr || h.attr, z.tag = h, h.linkCtx = z), (h._.bnd = r || z) && (h._.arrVws = {}), h.tagName = a, h.parent = k = A && A.tag, h._is = "tag", h._def = u), C.tag = h, o.tag = h, h.tagCtxs = f, h.flow || (p = o.ctx = o.ctx || {}, i = h.parents = p.parentTags = A && y(p.parentTags, A.parentTags) || {}, k && (i[k.tagName] = k), p.tag = h), h.rendering = {};
      for (l = 0; l < m; l++) o = h.tagCtx = f[l], h.ctx = o.ctx, !l && v && (h.init(o, z, h.ctx), v = c), (g = h.render) && (n = g.apply(h, o.args)), w += n !== c ? n : o.tmpl ? o.render() : "";
      return delete h.rendering, h.tagCtx = h.tagCtxs[0], h.ctx = h.tagCtx.ctx, h._.inline && (j = h.attr) && "html" !== j && (w = "text" === j ? aa.html(w) : ""), w = x && b._.onRender ? b._.onRender(w, b, x) : w
    }

    function m(a, b, d, e, f, j, l, m) {
      var n, o, p, q = "array" === b,
        r = {
          key: 0,
          useKey: q ? 0 : 1,
          id: "" + V++,
          onRender: m,
          bnds: {}
        },
        s = {
          data: e,
          tmpl: f,
          content: l,
          views: q ? [] : {},
          parent: d,
          ctx: a,
          type: b,
          get: g,
          getIndex: h,
          getRsc: k,
          hlp: i,
          _: r,
          _is: "view"
        };
      return d && (n = d.views, o = d._, o.useKey ? (n[r.key = "_" + o.useKey++] = s, p = o.tag, r.bnd = q && (!p || !!p._.bnd && p)) : n.splice(r.key = s.index = j !== c ? j : n.length, 0, s), s.ctx = a || d.ctx), s
    }

    function n(a) {
      var b, c, d, e, f;
      for (b in Z)
        if (e = Z[b], (f = e.compile) && (c = a[b + "s"]))
          for (d in c) c[d] = f(d, c[d], a, b, e)
    }

    function o(a, b, c) {
      var d, e;
      return "function" == typeof b ? b = {
        depends: b.depends,
        render: b
      } : ((e = b.template) && (b.template = "" + e === e ? _[e] || _(e) : e), b.init !== !1 && (d = b._ctr = function(a) {}, (d.prototype = b).constructor = d)), c && (b._parentTmpl = c), b
    }

    function p(d, e, f, g, h, i) {
      function j(c) {
        if ("" + c === c || c.nodeType > 0) {
          try {
            l = c.nodeType > 0 ? c : !D.test(c) && b && b(a.document).find(c)[0]
          } catch (a) {}
          return l && (c = l.getAttribute(X),
            d = d || c, c = _[c], c || (d = d || "_" + U++, l.setAttribute(X, d), c = _[d] = p(d, l.innerHTML, f, g, h, i))), c
        }
      }
      var k, l;
      if (e = e || "", k = j(e), i = i || (e.markup ? e : {}), i.tmplName = d, f && (i._parentTmpl = f), !k && e.markup && (k = j(e.markup)) && (!k.fn || k.debug === e.debug && k.allowCode === e.allowCode || (k = k.markup)), k !== c) return d && !f && (Y[d] = function() {
        return e.render.apply(e, arguments)
      }), k.fn || e.fn ? k.fn && (e = d && d !== k.tmplName ? y(i, k) : k) : (e = q(k, i), v(k, e)), n(i), e
    }

    function q(a, b) {
      var c, d = da.wrapMap || {},
        f = e({
          markup: a,
          tmpls: [],
          links: {},
          tags: {},
          bnds: [],
          _is: "template",
          render: s
        }, b);
      return b.htmlTag || (c = R.exec(a), f.htmlTag = c ? c[1].toLowerCase() : ""), c = d[f.htmlTag], c && c !== d.div && (f.markup = A.trim(f.markup), f._elCnt = !0), f
    }

    function r(a, b) {
      function d(f, g, h) {
        var i, j, k, l;
        if (f && "" + f !== f && !f.nodeType && !f.markup) {
          for (k in f) d(k, f[k], g);
          return $
        }
        return g === c && (g = f, f = c), f && "" + f !== f && (h = g, g = f, f = c), l = h ? h[e] = h[e] || {} : d, j = b.compile, (i = ca.onBeforeStoreItem) && (j = i(l, f, g, j) || j), f ? null === g ? delete l[f] : l[f] = j ? g = j(f, g, h, a, b) : g : g = j(c, g), g && (g._is = a), (i = ca.onStoreItem) && i(l, f, g, j), g
      }
      var e = a + "s";
      $[e] = d, Z[a] = b
    }

    function s(a, b, d, e, f, g) {
      var h, i, j, k, l, n, o, p, q, r, s, u, v, w = this,
        x = !w.attr || "html" === w.attr,
        z = "";
      if (e === !0 && (o = !0, e = 0), w.tag ? (p = w, w = w.tag, r = w._, u = w.tagName, v = p.tmpl, b = y(b, w.ctx), q = p.content, p.props.link === !1 && (b = b || {}, b.link = !1), d = d || p.view, a = a === c ? d : a) : v = w.jquery && (w[0] || t('Unknown template: "' + w.selector + '"')) || w, v && (!d && a && "view" === a._is && (d = a), d && (q = q || d.content, g = g || d._.onRender, a === d && (a = d.data, f = !0), b = y(b, d.ctx)), d && d.data !== c || ((b = b || {}).root = a), v.fn || (v = _[v] || _(v)), v)) {
        if (g = (b && b.link) !== !1 && x && g, s = g, g === !0 && (s = c, g = d._.onRender), A.isArray(a) && !f)
          for (k = o ? d : e !== c && d || m(b, "array", d, a, v, e, q, g), h = 0, i = a.length; h < i; h++) j = a[h], l = m(b, "item", k, j, v, (e || 0) + h, q, g), n = v.fn(j, l, $), z += k._.onRender ? k._.onRender(n, l) : n;
        else k = o ? d : m(b, u || "data", d, a, v, e, q, g), r && !w.flow && (k.tag = w), z += v.fn(a, k, $);
        return s ? s(z, k) : z
      }
      return ""
    }

    function t(a) {
      throw new $.sub.Error(a)
    }

    function u(a) {
      t("Syntax error\n" + a)
    }

    function v(a, b, c, d) {
      function e(b) {
        b -= k, b && m.push(a.substr(k, b).replace(M, "\\n"))
      }

      function f(b) {
        b && u('Unmatched or missing tag: "{{/' + b + '}}" in template:\n' + a)
      }

      function g(g, j, o, p, q, r, s, t, v, w, y, z) {
        r && (q = ":", p = "html"), w = w || c;
        var A, B, C = j && [],
          D = "",
          E = "",
          F = "",
          G = !w && !q && !s;
        o = o || q, e(z), k = z + g.length, t ? i && m.push(["*", "\n" + v.replace(N, "$1") + "\n"]) : o ? ("else" === o && (Q.test(v) && u('for "{{else if expr}}" use "{{else expr}}"'), C = n[6], n[7] = a.substring(n[7], z), n = l.pop(), m = n[3], G = !0), v && (v = v.replace(M, " "), D = x(v, C, b).replace(P, function(a, b, c) {
          return b ? F += c + "," : E += c + ",", ""
        })), E = E.slice(0, -1), D = D.slice(0, -1), A = E && E.indexOf("noerror:true") + 1 && E || "", h = [o, p || !!d || "", D, G && [], 'params:"' + v + '",props:{' + E + "}" + (F ? ",ctx:{" + F.slice(0, -1) + "}" : ""), A, C || 0], m.push(h), G && (l.push(n), n = h, n[7] = k)) : y && (B = n[0], f(y !== B && "else" !== B && y), n[7] = a.substring(n[7], z), n = l.pop()), f(!n && y), m = n[3]
      }
      var h, i = b && b.allowCode,
        j = [],
        k = 0,
        l = [],
        m = j,
        n = [, , , j];
      return a = a.replace(O, "\\$1"), f(l[0] && l[0][3].pop()[0]), a.replace(C, g), e(a.length), (k = j[j.length - 1]) && f("" + k !== k && +k[7] === k[7] && k[0]), w(j, c ? a : b, c)
    }

    function w(a, c, d) {
      var e, f, g, h, i, j, k, l, m, n, o, p, r, s, t, v, x, y, z, A, B, C, D, E, F, G, H, I = 0,
        J = "",
        K = "",
        L = {},
        N = a.length;
      for ("" + c === c ? (v = d ? 'data-link="' + c.replace(M, " ").slice(1, -1) + '"' : c, c = 0) : (v = c.tmplName || "unnamed", (z = c.allowCode) && (L.allowCode = !0), c.debug && (L.debug = !0), p = c.bnds, t = c.tmpls), e = 0; e < N; e++)
        if (f = a[e], "" + f === f) J += '\nret+="' + f + '";';
        else if (g = f[0], "*" === g) J += "" + f[1];
      else {
        if (h = f[1], i = f[2], A = f[3], j = f[4], K = f[5], B = f[7], (E = "else" === g) || (I = 0, p && (r = f[6]) && (I = p.push(r))), (F = ":" === g) ? (h && (g = "html" === h ? ">" : h + g), K && (G = "prm" + e, K = "try{var " + G + "=[" + i + "][0];}catch(e){" + G + '="";}\n', i = G)) : (A && (x = q(B, L), x.tmplName = v + "/" + g, w(A, x), t.push(x)), E || (y = g, D = J, J = "", s = e), C = a[e + 1], C = C && "else" === C[0]), j += ",args:[" + i + "]}", F && r || h && ">" !== g) {
          if (H = new Function("data,view,j,u", " // " + v + " " + I + " " + g + "\n" + K + "return {" + j + ";"), H.paths = r, H._ctxs = g, d) return H;
          o = 1
        }
        if (J += F ? "\n" + (r ? "" : K) + (d ? "return " : "ret+=") + (o ? (o = 0, n = !0, 'c("' + h + '",view,' + (r ? (p[I - 1] = H, I) : "{" + j) + ");") : ">" === g ? (l = !0, "h(" + i + ");") : (m = !0, "(v=" + i + ")!=" + (d ? "=" : "") + 'u?v:"";')) : (k = !0, "{tmpl:" + (A ? t.length : "0") + "," + j + ","), y && !C) {
          if (J = "[" + J.slice(0, -1) + "]", (d || r) && (J = new Function("data,view,j,u", " // " + v + " " + I + " " + y + "\nreturn " + J + ";"), r && ((p[I - 1] = J).paths = r), J._ctxs = g, d)) return J;
          J = D + '\nret+=t("' + y + '",view,this,' + (I || J) + ");", r = 0, y = 0
        }
      }
      J = "// " + v + "\nvar j=j||" + (b ? "jQuery." : "js") + "views" + (m ? ",v" : "") + (k ? ",t=j._tag" : "") + (n ? ",c=j._cnvt" : "") + (l ? ",h=j.converters.html" : "") + (d ? ";\n" : ',ret="";\n') + (da.tryCatch ? "try{\n" : "") + (L.debug ? "debugger;" : "") + J + (d ? "\n" : "\nreturn ret;\n") + (da.tryCatch ? "\n}catch(e){return j._err(e);}" : "");
      try {
        J = new Function("data,view,j,u", J)
      } catch (a) {
        u("Compiled template code:\n\n" + J, a)
      }
      return c && (c.fn = J), J
    }

    function x(a, b, c) {
      function d(d, m, n, o, p, q, r, s, t, w, y, z, A, B, C, D, E, J, L) {
        function M(a, c, d, e, g, h, i) {
          if (c && (b && !f && b.push(o), "." !== c)) {
            var j = (d ? 'view.hlp("' + d + '")' : e ? "view" : "data") + (i ? (g ? "." + g : d ? "" : e ? "" : "." + c) + (h || "") : (i = d ? "" : e ? g || "" : c, ""));
            return j += i ? "." + i : "", "view.data" === j.slice(0, 9) ? j.slice(5) : j
          }
          return a
        }
        var N;
        return p = p || "", n = n || m || y, o = o || s, t = t || D || "", q ? void u(a) : (b && C && (N = i[j], L.length - 2 > J - N && (N = L.slice(N, J + 1), C = G + ":" + N + H, C = g[C] = g[C] || v(F + C + I, c, !0), C.paths || x(N, C.paths = [], c), b.push({
          _jsvOb: C
        }))), l ? (l = !z, l ? d : '"') : k ? (k = !A, k ? d : '"') : (n ? (j++, i[j] = J++, n) : "") + (E ? j ? "" : e ? (e = f = !1, "\b") : "," : r ? (j && u(a), e = o, f = "~" === o.charAt(0), "\b" + o + ":") : o ? o.split("^").join(".").replace(K, M) + (t ? (h[++j] = !0, "." !== o.charAt(0) && (i[j] = J), t) : p) : p ? p : B ? (h[j--] = !1, B + (t ? (h[++j] = !0, t) : "")) : w ? (h[j] || u(a), ",") : m ? "" : (l = z, k = A, '"')))
      }
      var e, f, g = c.links,
        h = {},
        i = {
          0: -1
        },
        j = 0,
        k = !1,
        l = !1;
      return (a + " ").replace(L, d)
    }

    function y(a, b) {
      return a && a !== b ? b ? e(e({}, b), a) : a : b && e({}, b)
    }

    function z(a) {
      return W[a] || (W[a] = "&#" + a.charCodeAt(0) + ";")
    }
    if (!(b && b.views || a.jsviews)) {
      var A, B, C, D, E = "v1.0pre",
        F = "{",
        G = "{",
        H = "}",
        I = "}",
        J = "^",
        K = /^(?:null|true|false|\d[\d.]*|([\w$]+|\.|~([\w$]+)|#(view|([\w$]+))?)([\w$.^]*?)(?:[.[^]([\w$]+)\]?)?)$/g,
        L = /(\()(?=\s*\()|(?:([([])\s*)?(?:([#~]?[\w$.^]+)?\s*((\+\+|--)|\+|-|&&|\|\||===|!==|==|!=|<=|>=|[<>%*!:?\/]|(=))\s*|([#~]?[\w$.^]+)([([])?)|(,\s*)|(\(?)\\?(?:(')|("))|(?:\s*(([)\]])(?=\s*\.|\s*\^)|[)\]])([([]?))|(\s+)/g,
        M = /\s*\n/g,
        N = /\\(['"])/g,
        O = /\\?(['"\\])/g,
        P = /\x08(~)?([^\x08]+)\x08/g,
        Q = /^if\s/,
        R = /<(\w+)[>\s]/,
        S = /[\x00`><"'&]/g,
        T = S,
        U = 0,
        V = 0,
        W = {
          "&": "&amp;",
          "<": "&lt;",
          ">": "&gt;",
          "\0": "&#0;",
          "'": "&#39;",
          '"': "&#34;",
          "`": "&#96;"
        },
        X = "data-jsv-tmpl",
        Y = ([].slice, {}),
        Z = {
          template: {
            compile: p
          },
          tag: {
            compile: o
          },
          helper: {},
          converter: {}
        },
        $ = {
          jsviews: E,
          render: Y,
          settings: {
            delimiters: f,
            debugMode: !0,
            tryCatch: !0
          },
          sub: {
            View: m,
            Error: d,
            tmplFn: v,
            parse: x,
            extend: e,
            error: t,
            syntaxError: u
          },
          _cnvt: j,
          _tag: l,
          _err: function(a) {
            return da.debugMode ? "Error: " + (a.message || a) + ". " : ""
          }
        };
      (d.prototype = new Error).constructor = d, h.depends = function() {
        return [this.get("item"), "index"]
      };
      for (B in Z) r(B, Z[B]);
      var _ = $.templates,
        aa = $.converters,
        ba = ($.helpers, $.tags),
        ca = $.sub,
        da = $.settings;
      b ? (A = b, A.fn.render = s) : (A = a.jsviews = {}, A.isArray = Array && Array.isArray || function(a) {
        return "[object Array]" === Object.prototype.toString.call(a)
      }), A.render = Y, A.views = $, A.templates = _ = $.templates, ba({
        else: function() {},
        if: {
          render: function(a) {
            var b = this,
              c = b.rendering.done || !a && (arguments.length || !b.tagCtx.index) ? "" : (b.rendering.done = !0, b.selected = b.tagCtx.index, b.tagCtx.render());
            return c
          },
          onUpdate: function(a, b, c) {
            var d, e, f;
            for (d = 0;
              (e = this.tagCtxs[d]) && e.args.length; d++)
              if (e = e.args[0], f = !e != !c[d].args[0], e || f) return f;
            return !1
          },
          flow: !0
        },
        for: {
          render: function(a) {
            var b = this,
              d = b.tagCtx,
              e = !arguments.length,
              f = "",
              g = e || 0;
            return b.rendering.done || (e ? f = c : a !== c && (f += d.render(a), g += A.isArray(a) ? a.length : 1), (b.rendering.done = g) && (b.selected = d.index)), f
          },
          onUpdate: function(a, b, c) {},
          onArrayChange: function(a, b) {
            var c, d = this,
              e = b.change;
            if (this.tagCtxs[1] && ("insert" === e && a.target.length === b.items.length || "remove" === e && !a.target.length || "refresh" === e && !b.oldItems.length != !a.target.length)) this.refresh();
            else
              for (c in d._.arrVws) c = d._.arrVws[c], c.data === a.target && c._.onArrayChange.apply(c, arguments);
            a.done = !0
          },
          flow: !0
        },
        include: {
          flow: !0
        },
        "*": {
          render: function(a) {
            return a
          },
          flow: !0
        }
      }), aa({
        html: function(a) {
          return a != c ? String(a).replace(T, z) : ""
        },
        attr: function(a) {
          return a != c ? String(a).replace(S, z) : null === a ? null : ""
        },
        url: function(a) {
          return a != c ? encodeURI(String(a)) : null === a ? null : ""
        }
      }), f()
    }
  }(this, this.jQuery),
  function(a) {
    function b(a, b) {
      return function(c) {
        return i(a.call(this, c), b)
      }
    }

    function c(a, b) {
      return function(c) {
        return this.lang().ordinal(a.call(this, c), b)
      }
    }

    function d() {}

    function e(a) {
      u(a), g(this, a)
    }

    function f(a) {
      var b = o(a),
        c = b.year || 0,
        d = b.month || 0,
        e = b.week || 0,
        f = b.day || 0,
        g = b.hour || 0,
        h = b.minute || 0,
        i = b.second || 0,
        j = b.millisecond || 0;
      this._input = a, this._milliseconds = +j + 1e3 * i + 6e4 * h + 36e5 * g, this._days = +f + 7 * e, this._months = +d + 12 * c, this._data = {}, this._bubble()
    }

    function g(a, b) {
      for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c]);
      return b.hasOwnProperty("toString") && (a.toString = b.toString), b.hasOwnProperty("valueOf") && (a.valueOf = b.valueOf), a
    }

    function h(a) {
      return 0 > a ? Math.ceil(a) : Math.floor(a)
    }

    function i(a, b) {
      for (var c = a + ""; c.length < b;) c = "0" + c;
      return c
    }

    function j(a, b, c, d) {
      var e, f, g = b._milliseconds,
        h = b._days,
        i = b._months;
      g && a._d.setTime(+a._d + g * c), (h || i) && (e = a.minute(), f = a.hour()), h && a.date(a.date() + h * c), i && a.month(a.month() + i * c), g && !d && ba.updateOffset(a), (h || i) && (a.minute(e), a.hour(f))
    }

    function k(a) {
      return "[object Array]" === Object.prototype.toString.call(a)
    }

    function l(a) {
      return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date
    }

    function m(a, b, c) {
      var d, e = Math.min(a.length, b.length),
        f = Math.abs(a.length - b.length),
        g = 0;
      for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && q(a[d]) !== q(b[d])) && g++;
      return g + f
    }

    function n(a) {
      if (a) {
        var b = a.toLowerCase().replace(/(.)s$/, "$1");
        a = Ka[a] || La[b] || b
      }
      return a
    }

    function o(a) {
      var b, c, d = {};
      for (c in a) a.hasOwnProperty(c) && (b = n(c), b && (d[b] = a[c]));
      return d
    }

    function p(b) {
      var c, d;
      if (0 === b.indexOf("week")) c = 7, d = "day";
      else {
        if (0 !== b.indexOf("month")) return;
        c = 12, d = "month"
      }
      ba[b] = function(e, f) {
        var g, h, i = ba.fn._lang[b],
          j = [];
        if ("number" == typeof e && (f = e, e = a), h = function(a) {
            var b = ba().utc().set(d, a);
            return i.call(ba.fn._lang, b, e || "")
          }, null != f) return h(f);
        for (g = 0; c > g; g++) j.push(h(g));
        return j
      }
    }

    function q(a) {
      var b = +a,
        c = 0;
      return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c
    }

    function r(a, b) {
      return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
    }

    function s(a) {
      return t(a) ? 366 : 365
    }

    function t(a) {
      return 0 === a % 4 && 0 !== a % 100 || 0 === a % 400
    }

    function u(a) {
      var b;
      a._a && -2 === a._pf.overflow && (b = a._a[ga] < 0 || a._a[ga] > 11 ? ga : a._a[ha] < 1 || a._a[ha] > r(a._a[fa], a._a[ga]) ? ha : a._a[ia] < 0 || a._a[ia] > 23 ? ia : a._a[ja] < 0 || a._a[ja] > 59 ? ja : a._a[ka] < 0 || a._a[ka] > 59 ? ka : a._a[la] < 0 || a._a[la] > 999 ? la : -1, a._pf._overflowDayOfYear && (fa > b || b > ha) && (b = ha), a._pf.overflow = b)
    }

    function v(a) {
      a._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1
      }
    }

    function w(a) {
      return null == a._isValid && (a._isValid = !isNaN(a._d.getTime()) && a._pf.overflow < 0 && !a._pf.empty && !a._pf.invalidMonth && !a._pf.nullInput && !a._pf.invalidFormat && !a._pf.userInvalidated, a._strict && (a._isValid = a._isValid && 0 === a._pf.charsLeftOver && 0 === a._pf.unusedTokens.length)), a._isValid
    }

    function x(a) {
      return a ? a.toLowerCase().replace("_", "-") : a
    }

    function y(a, b) {
      return b.abbr = a, ma[a] || (ma[a] = new d), ma[a].set(b), ma[a]
    }

    function z(a) {
      delete ma[a]
    }

    function A(a) {
      var b, c, d, e, f = 0,
        g = function(a) {
          if (!ma[a] && na) try {
            require("./lang/" + a)
          } catch (a) {}
          return ma[a]
        };
      if (!a) return ba.fn._lang;
      if (!k(a)) {
        if (c = g(a)) return c;
        a = [a]
      }
      for (; f < a.length;) {
        for (e = x(a[f]).split("-"), b = e.length, d = x(a[f + 1]), d = d ? d.split("-") : null; b > 0;) {
          if (c = g(e.slice(0, b).join("-"))) return c;
          if (d && d.length >= b && m(e, d, !0) >= b - 1) break;
          b--
        }
        f++
      }
      return ba.fn._lang
    }

    function B(a) {
      return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
    }

    function C(a) {
      var b, c, d = a.match(ra);
      for (b = 0, c = d.length; c > b; b++) d[b] = Pa[d[b]] ? Pa[d[b]] : B(d[b]);
      return function(e) {
        var f = "";
        for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
        return f
      }
    }

    function D(a, b) {
      return a.isValid() ? (b = E(b, a.lang()), Ma[b] || (Ma[b] = C(b)), Ma[b](a)) : a.lang().invalidDate()
    }

    function E(a, b) {
      function c(a) {
        return b.longDateFormat(a) || a
      }
      var d = 5;
      for (sa.lastIndex = 0; d >= 0 && sa.test(a);) a = a.replace(sa, c), sa.lastIndex = 0, d -= 1;
      return a
    }

    function F(a, b) {
      var c;
      switch (a) {
        case "DDDD":
          return va;
        case "YYYY":
        case "GGGG":
        case "gggg":
          return wa;
        case "YYYYY":
        case "GGGGG":
        case "ggggg":
          return xa;
        case "S":
        case "SS":
        case "SSS":
        case "DDD":
          return ua;
        case "MMM":
        case "MMMM":
        case "dd":
        case "ddd":
        case "dddd":
          return za;
        case "a":
        case "A":
          return A(b._l)._meridiemParse;
        case "X":
          return Ca;
        case "Z":
        case "ZZ":
          return Aa;
        case "T":
          return Ba;
        case "SSSS":
          return ya;
        case "MM":
        case "DD":
        case "YY":
        case "GG":
        case "gg":
        case "HH":
        case "hh":
        case "mm":
        case "ss":
        case "M":
        case "D":
        case "d":
        case "H":
        case "h":
        case "m":
        case "s":
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "e":
        case "E":
          return ta;
        default:
          return c = new RegExp(N(M(a.replace("\\", "")), "i"))
      }
    }

    function G(a) {
      var b = (Aa.exec(a) || [])[0],
        c = (b + "").match(Ha) || ["-", 0, 0],
        d = +(60 * c[1]) + q(c[2]);
      return "+" === c[0] ? -d : d
    }

    function H(a, b, c) {
      var d, e = c._a;
      switch (a) {
        case "M":
        case "MM":
          null != b && (e[ga] = q(b) - 1);
          break;
        case "MMM":
        case "MMMM":
          d = A(c._l).monthsParse(b), null != d ? e[ga] = d : c._pf.invalidMonth = b;
          break;
        case "D":
        case "DD":
          null != b && (e[ha] = q(b));
          break;
        case "DDD":
        case "DDDD":
          null != b && (c._dayOfYear = q(b));
          break;
        case "YY":
          e[fa] = q(b) + (q(b) > 68 ? 1900 : 2e3);
          break;
        case "YYYY":
        case "YYYYY":
          e[fa] = q(b);
          break;
        case "a":
        case "A":
          c._isPm = A(c._l).isPM(b);
          break;
        case "H":
        case "HH":
        case "h":
        case "hh":
          e[ia] = q(b);
          break;
        case "m":
        case "mm":
          e[ja] = q(b);
          break;
        case "s":
        case "ss":
          e[ka] = q(b);
          break;
        case "S":
        case "SS":
        case "SSS":
        case "SSSS":
          e[la] = q(1e3 * ("0." + b));
          break;
        case "X":
          c._d = new Date(1e3 * parseFloat(b));
          break;
        case "Z":
        case "ZZ":
          c._useUTC = !0, c._tzm = G(b);
          break;
        case "w":
        case "ww":
        case "W":
        case "WW":
        case "d":
        case "dd":
        case "ddd":
        case "dddd":
        case "e":
        case "E":
          a = a.substr(0, 1);
        case "gg":
        case "gggg":
        case "GG":
        case "GGGG":
        case "GGGGG":
          a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = b)
      }
    }

    function I(a) {
      var b, c, d, e, f, g, h, i, j, k, l = [];
      if (!a._d) {
        for (d = K(a), a._w && null == a._a[ha] && null == a._a[ga] && (f = function(b) {
            return b ? b.length < 3 ? parseInt(b, 10) > 68 ? "19" + b : "20" + b : b : null == a._a[fa] ? ba().weekYear() : a._a[fa]
          }, g = a._w, null != g.GG || null != g.W || null != g.E ? h = X(f(g.GG), g.W || 1, g.E, 4, 1) : (i = A(a._l), j = null != g.d ? T(g.d, i) : null != g.e ? parseInt(g.e, 10) + i._week.dow : 0, k = parseInt(g.w, 10) || 1, null != g.d && j < i._week.dow && k++, h = X(f(g.gg), k, j, i._week.doy, i._week.dow)), a._a[fa] = h.year, a._dayOfYear = h.dayOfYear), a._dayOfYear && (e = null == a._a[fa] ? d[fa] : a._a[fa], a._dayOfYear > s(e) && (a._pf._overflowDayOfYear = !0), c = S(e, 0, a._dayOfYear), a._a[ga] = c.getUTCMonth(), a._a[ha] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = l[b] = d[b];
        for (; 7 > b; b++) a._a[b] = l[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
        l[ia] += q((a._tzm || 0) / 60), l[ja] += q((a._tzm || 0) % 60), a._d = (a._useUTC ? S : R).apply(null, l)
      }
    }

    function J(a) {
      var b;
      a._d || (b = o(a._i), a._a = [b.year, b.month, b.day, b.hour, b.minute, b.second, b.millisecond], I(a))
    }

    function K(a) {
      var b = new Date;
      return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()]
    }

    function L(a) {
      a._a = [], a._pf.empty = !0;
      var b, c, d, e, f, g = A(a._l),
        h = "" + a._i,
        i = h.length,
        j = 0;
      for (d = E(a._f, g).match(ra) || [], b = 0; b < d.length; b++) e = d[b], c = (F(e, a).exec(h) || [])[0], c && (f = h.substr(0, h.indexOf(c)), f.length > 0 && a._pf.unusedInput.push(f), h = h.slice(h.indexOf(c) + c.length), j += c.length), Pa[e] ? (c ? a._pf.empty = !1 : a._pf.unusedTokens.push(e), H(e, c, a)) : a._strict && !c && a._pf.unusedTokens.push(e);
      a._pf.charsLeftOver = i - j, h.length > 0 && a._pf.unusedInput.push(h), a._isPm && a._a[ia] < 12 && (a._a[ia] += 12), a._isPm === !1 && 12 === a._a[ia] && (a._a[ia] = 0), I(a), u(a)
    }

    function M(a) {
      return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
        return b || c || d || e
      })
    }

    function N(a) {
      return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function O(a) {
      var b, c, d, e, f;
      if (0 === a._f.length) return a._pf.invalidFormat = !0, void(a._d = new Date(NaN));
      for (e = 0; e < a._f.length; e++) f = 0, b = g({}, a), v(b), b._f = a._f[e], L(b), w(b) && (f += b._pf.charsLeftOver, f += 10 * b._pf.unusedTokens.length, b._pf.score = f, (null == d || d > f) && (d = f, c = b));
      g(a, c || b)
    }

    function P(a) {
      var b, c = a._i,
        d = Da.exec(c);
      if (d) {
        for (a._pf.iso = !0, b = 4; b > 0; b--)
          if (d[b]) {
            a._f = Fa[b - 1] + (d[6] || " ");
            break
          }
        for (b = 0; 4 > b; b++)
          if (Ga[b][1].exec(c)) {
            a._f += Ga[b][0];
            break
          }
        Aa.exec(c) && (a._f += "Z"), L(a)
      } else a._d = new Date(c)
    }

    function Q(b) {
      var c = b._i,
        d = oa.exec(c);
      c === a ? b._d = new Date : d ? b._d = new Date(+d[1]) : "string" == typeof c ? P(b) : k(c) ? (b._a = c.slice(0), I(b)) : l(c) ? b._d = new Date(+c) : "object" == typeof c ? J(b) : b._d = new Date(c)
    }

    function R(a, b, c, d, e, f, g) {
      var h = new Date(a, b, c, d, e, f, g);
      return 1970 > a && h.setFullYear(a), h
    }

    function S(a) {
      var b = new Date(Date.UTC.apply(null, arguments));
      return 1970 > a && b.setUTCFullYear(a), b
    }

    function T(a, b) {
      if ("string" == typeof a)
        if (isNaN(a)) {
          if (a = b.weekdaysParse(a), "number" != typeof a) return null
        } else a = parseInt(a, 10);
      return a
    }

    function U(a, b, c, d, e) {
      return e.relativeTime(b || 1, !!c, a, d)
    }

    function V(a, b, c) {
      var d = ea(Math.abs(a) / 1e3),
        e = ea(d / 60),
        f = ea(e / 60),
        g = ea(f / 24),
        h = ea(g / 365),
        i = 45 > d && ["s", d] || 1 === e && ["m"] || 45 > e && ["mm", e] || 1 === f && ["h"] || 22 > f && ["hh", f] || 1 === g && ["d"] || 25 >= g && ["dd", g] || 45 >= g && ["M"] || 345 > g && ["MM", ea(g / 30)] || 1 === h && ["y"] || ["yy", h];
      return i[2] = b, i[3] = a > 0, i[4] = c, U.apply({}, i)
    }

    function W(a, b, c) {
      var d, e = c - b,
        f = c - a.day();
      return f > e && (f -= 7), e - 7 > f && (f += 7), d = ba(a).add("d", f), {
        week: Math.ceil(d.dayOfYear() / 7),
        year: d.year()
      }
    }

    function X(a, b, c, d, e) {
      var f, g, h = new Date(Date.UTC(a, 0)).getUTCDay();
      return c = null != c ? c : e, f = e - h + (h > d ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, {
        year: g > 0 ? a : a - 1,
        dayOfYear: g > 0 ? g : s(a - 1) + g
      }
    }

    function Y(a) {
      var b = a._i,
        c = a._f;
      return "undefined" == typeof a._pf && v(a), null === b ? ba.invalid({
        nullInput: !0
      }) : ("string" == typeof b && (a._i = b = A().preparse(b)), ba.isMoment(b) ? (a = g({}, b), a._d = new Date(+b._d)) : c ? k(c) ? O(a) : L(a) : Q(a), new e(a))
    }

    function Z(a, b) {
      ba.fn[a] = ba.fn[a + "s"] = function(a) {
        var c = this._isUTC ? "UTC" : "";
        return null != a ? (this._d["set" + c + b](a), ba.updateOffset(this), this) : this._d["get" + c + b]()
      }
    }

    function $(a) {
      ba.duration.fn[a] = function() {
        return this._data[a]
      }
    }

    function _(a, b) {
      ba.duration.fn["as" + a] = function() {
        return +this / b
      }
    }

    function aa(a) {
      var b = !1,
        c = ba;
      "undefined" == typeof ender && (this.moment = a ? function() {
        return !b && console && console.warn && (b = !0, console.warn("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.")), c.apply(null, arguments)
      } : ba)
    }
    for (var ba, ca, da = "2.4.0", ea = Math.round, fa = 0, ga = 1, ha = 2, ia = 3, ja = 4, ka = 5, la = 6, ma = {}, na = "undefined" != typeof module && module.exports, oa = /^\/?Date\((\-?\d+)/i, pa = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, qa = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, ra = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g, sa = /(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g, ta = /\d\d?/, ua = /\d{1,3}/, va = /\d{3}/, wa = /\d{1,4}/, xa = /[+\-]?\d{1,6}/, ya = /\d+/, za = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Aa = /Z|[\+\-]\d\d:?\d\d/i, Ba = /T/i, Ca = /[\+\-]?\d+(\.\d{1,3})?/, Da = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d:?\d\d|Z)?)?$/, Ea = "YYYY-MM-DDTHH:mm:ssZ", Fa = ["YYYY-MM-DD", "GGGG-[W]WW", "GGGG-[W]WW-E", "YYYY-DDD"], Ga = [
        ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d{1,3}/],
        ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
        ["HH:mm", /(T| )\d\d:\d\d/],
        ["HH", /(T| )\d\d/]
      ], Ha = /([\+\-]|\d\d)/gi, Ia = "Date|Hours|Minutes|Seconds|Milliseconds".split("|"), Ja = {
        Milliseconds: 1,
        Seconds: 1e3,
        Minutes: 6e4,
        Hours: 36e5,
        Days: 864e5,
        Months: 2592e6,
        Years: 31536e6
      }, Ka = {
        ms: "millisecond",
        s: "second",
        m: "minute",
        h: "hour",
        d: "day",
        D: "date",
        w: "week",
        W: "isoWeek",
        M: "month",
        y: "year",
        DDD: "dayOfYear",
        e: "weekday",
        E: "isoWeekday",
        gg: "weekYear",
        GG: "isoWeekYear"
      }, La = {
        dayofyear: "dayOfYear",
        isoweekday: "isoWeekday",
        isoweek: "isoWeek",
        weekyear: "weekYear",
        isoweekyear: "isoWeekYear"
      }, Ma = {}, Na = "DDD w W M D d".split(" "), Oa = "M D H h m s w W".split(" "), Pa = {
        M: function() {
          return this.month() + 1
        },
        MMM: function(a) {
          return this.lang().monthsShort(this, a)
        },
        MMMM: function(a) {
          return this.lang().months(this, a)
        },
        D: function() {
          return this.date()
        },
        DDD: function() {
          return this.dayOfYear()
        },
        d: function() {
          return this.day()
        },
        dd: function(a) {
          return this.lang().weekdaysMin(this, a)
        },
        ddd: function(a) {
          return this.lang().weekdaysShort(this, a)
        },
        dddd: function(a) {
          return this.lang().weekdays(this, a)
        },
        w: function() {
          return this.week()
        },
        W: function() {
          return this.isoWeek()
        },
        YY: function() {
          return i(this.year() % 100, 2)
        },
        YYYY: function() {
          return i(this.year(), 4)
        },
        YYYYY: function() {
          return i(this.year(), 5)
        },
        gg: function() {
          return i(this.weekYear() % 100, 2)
        },
        gggg: function() {
          return this.weekYear()
        },
        ggggg: function() {
          return i(this.weekYear(), 5)
        },
        GG: function() {
          return i(this.isoWeekYear() % 100, 2)
        },
        GGGG: function() {
          return this.isoWeekYear()
        },
        GGGGG: function() {
          return i(this.isoWeekYear(), 5)
        },
        e: function() {
          return this.weekday()
        },
        E: function() {
          return this.isoWeekday()
        },
        a: function() {
          return this.lang().meridiem(this.hours(), this.minutes(), !0)
        },
        A: function() {
          return this.lang().meridiem(this.hours(), this.minutes(), !1)
        },
        H: function() {
          return this.hours()
        },
        h: function() {
          return this.hours() % 12 || 12
        },
        m: function() {
          return this.minutes()
        },
        s: function() {
          return this.seconds()
        },
        S: function() {
          return q(this.milliseconds() / 100)
        },
        SS: function() {
          return i(q(this.milliseconds() / 10), 2)
        },
        SSS: function() {
          return i(this.milliseconds(), 3)
        },
        SSSS: function() {
          return i(this.milliseconds(), 3)
        },
        Z: function() {
          var a = -this.zone(),
            b = "+";
          return 0 > a && (a = -a, b = "-"), b + i(q(a / 60), 2) + ":" + i(q(a) % 60, 2)
        },
        ZZ: function() {
          var a = -this.zone(),
            b = "+";
          return 0 > a && (a = -a, b = "-"), b + i(q(10 * a / 6), 4)
        },
        z: function() {
          return this.zoneAbbr()
        },
        zz: function() {
          return this.zoneName()
        },
        X: function() {
          return this.unix()
        }
      }, Qa = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"]; Na.length;) ca = Na.pop(), Pa[ca + "o"] = c(Pa[ca], ca);
    for (; Oa.length;) ca = Oa.pop(), Pa[ca + ca] = b(Pa[ca], 2);
    for (Pa.DDDD = b(Pa.DDD, 3), g(d.prototype, {
        set: function(a) {
          var b, c;
          for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b
        },
        _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        months: function(a) {
          return this._months[a.month()]
        },
        _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        monthsShort: function(a) {
          return this._monthsShort[a.month()]
        },
        monthsParse: function(a) {
          var b, c, d;
          for (this._monthsParse || (this._monthsParse = []), b = 0; 12 > b; b++)
            if (this._monthsParse[b] || (c = ba.utc([2e3, b]), d = "^" + this.months(c, "") + "|^" + this.monthsShort(c, ""), this._monthsParse[b] = new RegExp(d.replace(".", ""), "i")), this._monthsParse[b].test(a)) return b
        },
        _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        weekdays: function(a) {
          return this._weekdays[a.day()]
        },
        _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        weekdaysShort: function(a) {
          return this._weekdaysShort[a.day()]
        },
        _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
        weekdaysMin: function(a) {
          return this._weekdaysMin[a.day()]
        },
        weekdaysParse: function(a) {
          var b, c, d;
          for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++)
            if (this._weekdaysParse[b] || (c = ba([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b
        },
        _longDateFormat: {
          LT: "h:mm A",
          L: "MM/DD/YYYY",
          LL: "MMMM D YYYY",
          LLL: "MMMM D YYYY LT",
          LLLL: "dddd, MMMM D YYYY LT"
        },
        longDateFormat: function(a) {
          var b = this._longDateFormat[a];
          return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function(a) {
            return a.slice(1)
          }), this._longDateFormat[a] = b), b
        },
        isPM: function(a) {
          return "p" === (a + "").toLowerCase().charAt(0)
        },
        _meridiemParse: /[ap]\.?m?\.?/i,
        meridiem: function(a, b, c) {
          return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
        },
        _calendar: {
          sameDay: "[Today at] LT",
          nextDay: "[Tomorrow at] LT",
          nextWeek: "dddd [at] LT",
          lastDay: "[Yesterday at] LT",
          lastWeek: "[Last] dddd [at] LT",
          sameElse: "L"
        },
        calendar: function(a, b) {
          var c = this._calendar[a];
          return "function" == typeof c ? c.apply(b) : c
        },
        _relativeTime: {
          future: "in %s",
          past: "%s ago",
          s: "a few seconds",
          m: "a minute",
          mm: "%d minutes",
          h: "an hour",
          hh: "%d hours",
          d: "a day",
          dd: "%d days",
          M: "a month",
          MM: "%d months",
          y: "a year",
          yy: "%d years"
        },
        relativeTime: function(a, b, c, d) {
          var e = this._relativeTime[c];
          return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a)
        },
        pastFuture: function(a, b) {
          var c = this._relativeTime[a > 0 ? "future" : "past"];
          return "function" == typeof c ? c(b) : c.replace(/%s/i, b)
        },
        ordinal: function(a) {
          return this._ordinal.replace("%d", a)
        },
        _ordinal: "%d",
        preparse: function(a) {
          return a
        },
        postformat: function(a) {
          return a
        },
        week: function(a) {
          return W(a, this._week.dow, this._week.doy).week
        },
        _week: {
          dow: 0,
          doy: 6
        },
        _invalidDate: "Invalid date",
        invalidDate: function() {
          return this._invalidDate
        }
      }), ba = function(b, c, d, e) {
        return "boolean" == typeof d && (e = d, d = a), Y({
          _i: b,
          _f: c,
          _l: d,
          _strict: e,
          _isUTC: !1
        })
      }, ba.utc = function(b, c, d, e) {
        var f;
        return "boolean" == typeof d && (e = d, d = a), f = Y({
          _useUTC: !0,
          _isUTC: !0,
          _l: d,
          _i: b,
          _f: c,
          _strict: e
        }).utc()
      }, ba.unix = function(a) {
        return ba(1e3 * a)
      }, ba.duration = function(a, b) {
        var c, d, e, g = ba.isDuration(a),
          h = "number" == typeof a,
          i = g ? a._input : h ? {} : a,
          j = null;
        return h ? b ? i[b] = a : i.milliseconds = a : (j = pa.exec(a)) ? (c = "-" === j[1] ? -1 : 1, i = {
          y: 0,
          d: q(j[ha]) * c,
          h: q(j[ia]) * c,
          m: q(j[ja]) * c,
          s: q(j[ka]) * c,
          ms: q(j[la]) * c
        }) : (j = qa.exec(a)) && (c = "-" === j[1] ? -1 : 1, e = function(a) {
          var b = a && parseFloat(a.replace(",", "."));
          return (isNaN(b) ? 0 : b) * c
        }, i = {
          y: e(j[2]),
          M: e(j[3]),
          d: e(j[4]),
          h: e(j[5]),
          m: e(j[6]),
          s: e(j[7]),
          w: e(j[8])
        }), d = new f(i), g && a.hasOwnProperty("_lang") && (d._lang = a._lang), d
      }, ba.version = da, ba.defaultFormat = Ea, ba.updateOffset = function() {}, ba.lang = function(a, b) {
        var c;
        return a ? (b ? y(x(a), b) : null === b ? (z(a), a = "en") : ma[a] || A(a), c = ba.duration.fn._lang = ba.fn._lang = A(a), c._abbr) : ba.fn._lang._abbr
      }, ba.langData = function(a) {
        return a && a._lang && a._lang._abbr && (a = a._lang._abbr), A(a)
      }, ba.isMoment = function(a) {
        return a instanceof e
      }, ba.isDuration = function(a) {
        return a instanceof f
      }, ca = Qa.length - 1; ca >= 0; --ca) p(Qa[ca]);
    for (ba.normalizeUnits = function(a) {
        return n(a)
      }, ba.invalid = function(a) {
        var b = ba.utc(NaN);
        return null != a ? g(b._pf, a) : b._pf.userInvalidated = !0, b
      }, ba.parseZone = function(a) {
        return ba(a).parseZone()
      }, g(ba.fn = e.prototype, {
        clone: function() {
          return ba(this)
        },
        valueOf: function() {
          return +this._d + 6e4 * (this._offset || 0)
        },
        unix: function() {
          return Math.floor(+this / 1e3)
        },
        toString: function() {
          return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        },
        toDate: function() {
          return this._offset ? new Date(+this) : this._d
        },
        toISOString: function() {
          return D(ba(this).utc(), "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        },
        toArray: function() {
          var a = this;
          return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()]
        },
        isValid: function() {
          return w(this)
        },
        isDSTShifted: function() {
          return !!this._a && (this.isValid() && m(this._a, (this._isUTC ? ba.utc(this._a) : ba(this._a)).toArray()) > 0)
        },
        parsingFlags: function() {
          return g({}, this._pf)
        },
        invalidAt: function() {
          return this._pf.overflow
        },
        utc: function() {
          return this.zone(0)
        },
        local: function() {
          return this.zone(0), this._isUTC = !1, this
        },
        format: function(a) {
          var b = D(this, a || ba.defaultFormat);
          return this.lang().postformat(b)
        },
        add: function(a, b) {
          var c;
          return c = "string" == typeof a ? ba.duration(+b, a) : ba.duration(a, b), j(this, c, 1), this
        },
        subtract: function(a, b) {
          var c;
          return c = "string" == typeof a ? ba.duration(+b, a) : ba.duration(a, b), j(this, c, -1), this
        },
        diff: function(a, b, c) {
          var d, e, f = this._isUTC ? ba(a).zone(this._offset || 0) : ba(a).local(),
            g = 6e4 * (this.zone() - f.zone());
          return b = n(b), "year" === b || "month" === b ? (d = 432e5 * (this.daysInMonth() + f.daysInMonth()), e = 12 * (this.year() - f.year()) + (this.month() - f.month()), e += (this - ba(this).startOf("month") - (f - ba(f).startOf("month"))) / d, e -= 6e4 * (this.zone() - ba(this).startOf("month").zone() - (f.zone() - ba(f).startOf("month").zone())) / d, "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : h(e)
        },
        from: function(a, b) {
          return ba.duration(this.diff(a)).lang(this.lang()._abbr).humanize(!b)
        },
        fromNow: function(a) {
          return this.from(ba(), a)
        },
        calendar: function() {
          var a = this.diff(ba().zone(this.zone()).startOf("day"), "days", !0),
            b = -6 > a ? "sameElse" : -1 > a ? "lastWeek" : 0 > a ? "lastDay" : 1 > a ? "sameDay" : 2 > a ? "nextDay" : 7 > a ? "nextWeek" : "sameElse";
          return this.format(this.lang().calendar(b, this))
        },
        isLeapYear: function() {
          return t(this.year())
        },
        isDST: function() {
          return this.zone() < this.clone().month(0).zone() || this.zone() < this.clone().month(5).zone()
        },
        day: function(a) {
          var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
          return null != a ? (a = T(a, this.lang()), this.add({
            d: a - b
          })) : b
        },
        month: function(a) {
          var b, c = this._isUTC ? "UTC" : "";
          return null != a ? "string" == typeof a && (a = this.lang().monthsParse(a), "number" != typeof a) ? this : (b = this.date(), this.date(1), this._d["set" + c + "Month"](a), this.date(Math.min(b, this.daysInMonth())), ba.updateOffset(this), this) : this._d["get" + c + "Month"]()
        },
        startOf: function(a) {
          switch (a = n(a)) {
            case "year":
              this.month(0);
            case "month":
              this.date(1);
            case "week":
            case "isoWeek":
            case "day":
              this.hours(0);
            case "hour":
              this.minutes(0);
            case "minute":
              this.seconds(0);
            case "second":
              this.milliseconds(0)
          }
          return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), this
        },
        endOf: function(a) {
          return a = n(a), this.startOf(a).add("isoWeek" === a ? "week" : a, 1).subtract("ms", 1)
        },
        isAfter: function(a, b) {
          return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) > +ba(a).startOf(b)
        },
        isBefore: function(a, b) {
          return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) < +ba(a).startOf(b)
        },
        isSame: function(a, b) {
          return b = "undefined" != typeof b ? b : "millisecond", +this.clone().startOf(b) === +ba(a).startOf(b)
        },
        min: function(a) {
          return a = ba.apply(null, arguments), this > a ? this : a
        },
        max: function(a) {
          return a = ba.apply(null, arguments), a > this ? this : a
        },
        zone: function(a) {
          var b = this._offset || 0;
          return null == a ? this._isUTC ? b : this._d.getTimezoneOffset() : ("string" == typeof a && (a = G(a)), Math.abs(a) < 16 && (a = 60 * a), this._offset = a, this._isUTC = !0, b !== a && j(this, ba.duration(b - a, "m"), 1, !0), this)
        },
        zoneAbbr: function() {
          return this._isUTC ? "UTC" : ""
        },
        zoneName: function() {
          return this._isUTC ? "Coordinated Universal Time" : ""
        },
        parseZone: function() {
          return "string" == typeof this._i && this.zone(this._i), this
        },
        hasAlignedHourOffset: function(a) {
          return a = a ? ba(a).zone() : 0, 0 === (this.zone() - a) % 60
        },
        daysInMonth: function() {
          return r(this.year(), this.month())
        },
        dayOfYear: function(a) {
          var b = ea((ba(this).startOf("day") - ba(this).startOf("year")) / 864e5) + 1;
          return null == a ? b : this.add("d", a - b)
        },
        weekYear: function(a) {
          var b = W(this, this.lang()._week.dow, this.lang()._week.doy).year;
          return null == a ? b : this.add("y", a - b)
        },
        isoWeekYear: function(a) {
          var b = W(this, 1, 4).year;
          return null == a ? b : this.add("y", a - b)
        },
        week: function(a) {
          var b = this.lang().week(this);
          return null == a ? b : this.add("d", 7 * (a - b))
        },
        isoWeek: function(a) {
          var b = W(this, 1, 4).week;
          return null == a ? b : this.add("d", 7 * (a - b))
        },
        weekday: function(a) {
          var b = (this.day() + 7 - this.lang()._week.dow) % 7;
          return null == a ? b : this.add("d", a - b)
        },
        isoWeekday: function(a) {
          return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7)
        },
        get: function(a) {
          return a = n(a), this[a]()
        },
        set: function(a, b) {
          return a = n(a), "function" == typeof this[a] && this[a](b), this
        },
        lang: function(b) {
          return b === a ? this._lang : (this._lang = A(b), this)
        }
      }), ca = 0; ca < Ia.length; ca++) Z(Ia[ca].toLowerCase().replace(/s$/, ""), Ia[ca]);
    Z("year", "FullYear"), ba.fn.days = ba.fn.day, ba.fn.months = ba.fn.month, ba.fn.weeks = ba.fn.week, ba.fn.isoWeeks = ba.fn.isoWeek, ba.fn.toJSON = ba.fn.toISOString, g(ba.duration.fn = f.prototype, {
      _bubble: function() {
        var a, b, c, d, e = this._milliseconds,
          f = this._days,
          g = this._months,
          i = this._data;
        i.milliseconds = e % 1e3, a = h(e / 1e3), i.seconds = a % 60, b = h(a / 60), i.minutes = b % 60, c = h(b / 60), i.hours = c % 24, f += h(c / 24), i.days = f % 30, g += h(f / 30), i.months = g % 12, d = h(g / 12), i.years = d
      },
      weeks: function() {
        return h(this.days() / 7)
      },
      valueOf: function() {
        return this._milliseconds + 864e5 * this._days + 2592e6 * (this._months % 12) + 31536e6 * q(this._months / 12)
      },
      humanize: function(a) {
        var b = +this,
          c = V(b, !a, this.lang());
        return a && (c = this.lang().pastFuture(b, c)), this.lang().postformat(c)
      },
      add: function(a, b) {
        var c = ba.duration(a, b);
        return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this
      },
      subtract: function(a, b) {
        var c = ba.duration(a, b);
        return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this
      },
      get: function(a) {
        return a = n(a), this[a.toLowerCase() + "s"]()
      },
      as: function(a) {
        return a = n(a), this["as" + a.charAt(0).toUpperCase() + a.slice(1) + "s"]();
      },
      lang: ba.fn.lang,
      toIsoString: function() {
        var a = Math.abs(this.years()),
          b = Math.abs(this.months()),
          c = Math.abs(this.days()),
          d = Math.abs(this.hours()),
          e = Math.abs(this.minutes()),
          f = Math.abs(this.seconds() + this.milliseconds() / 1e3);
        return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D"
      }
    });
    for (ca in Ja) Ja.hasOwnProperty(ca) && (_(ca, Ja[ca]), $(ca.toLowerCase()));
    _("Weeks", 6048e5), ba.duration.fn.asMonths = function() {
        return (+this - 31536e6 * this.years()) / 2592e6 + 12 * this.years()
      }, ba.lang("en", {
        ordinal: function(a) {
          var b = a % 10,
            c = 1 === q(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
          return a + c
        }
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ar-ma", {
          months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
          weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: {
            dow: 6,
            doy: 12
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ar", {
          months: "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
          monthsShort: "يناير/ كانون الثاني_فبراير/ شباط_مارس/ آذار_أبريل/ نيسان_مايو/ أيار_يونيو/ حزيران_يوليو/ تموز_أغسطس/ آب_سبتمبر/ أيلول_أكتوبر/ تشرين الأول_نوفمبر/ تشرين الثاني_ديسمبر/ كانون الأول".split("_"),
          weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysShort: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
          weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[اليوم على الساعة] LT",
            nextDay: "[غدا على الساعة] LT",
            nextWeek: "dddd [على الساعة] LT",
            lastDay: "[أمس على الساعة] LT",
            lastWeek: "dddd [على الساعة] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "في %s",
            past: "منذ %s",
            s: "ثوان",
            m: "دقيقة",
            mm: "%d دقائق",
            h: "ساعة",
            hh: "%d ساعات",
            d: "يوم",
            dd: "%d أيام",
            M: "شهر",
            MM: "%d أشهر",
            y: "سنة",
            yy: "%d سنوات"
          },
          week: {
            dow: 6,
            doy: 12
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("bg", {
          months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
          monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
          weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
          weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "D.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Днес в] LT",
            nextDay: "[Утре в] LT",
            nextWeek: "dddd [в] LT",
            lastDay: "[Вчера в] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[В изминалата] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[В изминалия] dddd [в] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "след %s",
            past: "преди %s",
            s: "няколко секунди",
            m: "минута",
            mm: "%d минути",
            h: "час",
            hh: "%d часа",
            d: "ден",
            dd: "%d дни",
            M: "месец",
            MM: "%d месеца",
            y: "година",
            yy: "%d години"
          },
          ordinal: function(a) {
            var b = a % 10,
              c = a % 100;
            return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(b) {
        function c(a, b, c) {
          var d = {
            mm: "munutenn",
            MM: "miz",
            dd: "devezh"
          };
          return a + " " + f(d[c], a)
        }

        function d(a) {
          switch (e(a)) {
            case 1:
            case 3:
            case 4:
            case 5:
            case 9:
              return a + " bloaz";
            default:
              return a + " vloaz"
          }
        }

        function e(a) {
          return a > 9 ? e(a % 10) : a
        }

        function f(a, b) {
          return 2 === b ? g(a) : a
        }

        function g(b) {
          var c = {
            m: "v",
            b: "v",
            d: "z"
          };
          return c[b.charAt(0)] === a ? b : c[b.charAt(0)] + b.substring(1)
        }
        return b.lang("br", {
          months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
          monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
          weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
          weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
          longDateFormat: {
            LT: "h[e]mm A",
            L: "DD/MM/YYYY",
            LL: "D [a viz] MMMM YYYY",
            LLL: "D [a viz] MMMM YYYY LT",
            LLLL: "dddd, D [a viz] MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Hiziv da] LT",
            nextDay: "[Warc'hoazh da] LT",
            nextWeek: "dddd [da] LT",
            lastDay: "[Dec'h da] LT",
            lastWeek: "dddd [paset da] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "a-benn %s",
            past: "%s 'zo",
            s: "un nebeud segondennoù",
            m: "ur vunutenn",
            mm: c,
            h: "un eur",
            hh: "%d eur",
            d: "un devezh",
            dd: c,
            M: "ur miz",
            MM: c,
            y: "ur bloaz",
            yy: d
          },
          ordinal: function(a) {
            var b = 1 === a ? "añ" : "vet";
            return a + b
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c) {
          var d = a + " ";
          switch (c) {
            case "m":
              return b ? "jedna minuta" : "jedne minute";
            case "mm":
              return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
            case "h":
              return b ? "jedan sat" : "jednog sata";
            case "hh":
              return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
            case "dd":
              return d += 1 === a ? "dan" : "dana";
            case "MM":
              return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
            case "yy":
              return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
          }
        }
        return a.lang("bs", {
          months: "januar_februar_mart_april_maj_juni_juli_avgust_septembar_oktobar_novembar_decembar".split("_"),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT"
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: "dan",
            dd: b,
            M: "mjesec",
            MM: b,
            y: "godinu",
            yy: b
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ca", {
          months: "Gener_Febrer_Març_Abril_Maig_Juny_Juliol_Agost_Setembre_Octubre_Novembre_Desembre".split("_"),
          monthsShort: "Gen._Febr._Mar._Abr._Mai._Jun._Jul._Ag._Set._Oct._Nov._Des.".split("_"),
          weekdays: "Diumenge_Dilluns_Dimarts_Dimecres_Dijous_Divendres_Dissabte".split("_"),
          weekdaysShort: "Dg._Dl._Dt._Dc._Dj._Dv._Ds.".split("_"),
          weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: function() {
              return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextDay: function() {
              return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            nextWeek: function() {
              return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastDay: function() {
              return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            lastWeek: function() {
              return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "en %s",
            past: "fa %s",
            s: "uns segons",
            m: "un minut",
            mm: "%d minuts",
            h: "una hora",
            hh: "%d hores",
            d: "un dia",
            dd: "%d dies",
            M: "un mes",
            MM: "%d mesos",
            y: "un any",
            yy: "%d anys"
          },
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a) {
          return a > 1 && 5 > a && 1 !== ~~(a / 10)
        }

        function c(a, c, d, e) {
          var f = a + " ";
          switch (d) {
            case "s":
              return c || e ? "pár vteřin" : "pár vteřinami";
            case "m":
              return c ? "minuta" : e ? "minutu" : "minutou";
            case "mm":
              return c || e ? f + (b(a) ? "minuty" : "minut") : f + "minutami";
            case "h":
              return c ? "hodina" : e ? "hodinu" : "hodinou";
            case "hh":
              return c || e ? f + (b(a) ? "hodiny" : "hodin") : f + "hodinami";
            case "d":
              return c || e ? "den" : "dnem";
            case "dd":
              return c || e ? f + (b(a) ? "dny" : "dní") : f + "dny";
            case "M":
              return c || e ? "měsíc" : "měsícem";
            case "MM":
              return c || e ? f + (b(a) ? "měsíce" : "měsíců") : f + "měsíci";
            case "y":
              return c || e ? "rok" : "rokem";
            case "yy":
              return c || e ? f + (b(a) ? "roky" : "let") : f + "lety"
          }
        }
        var d = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
          e = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");
        return a.lang("cs", {
          months: d,
          monthsShort: e,
          monthsParse: function(a, b) {
            var c, d = [];
            for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d
          }(d, e),
          weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
          weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
          weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[dnes v] LT",
            nextDay: "[zítra v] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[v neděli v] LT";
                case 1:
                case 2:
                  return "[v] dddd [v] LT";
                case 3:
                  return "[ve středu v] LT";
                case 4:
                  return "[ve čtvrtek v] LT";
                case 5:
                  return "[v pátek v] LT";
                case 6:
                  return "[v sobotu v] LT"
              }
            },
            lastDay: "[včera v] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[minulou neděli v] LT";
                case 1:
                case 2:
                  return "[minulé] dddd [v] LT";
                case 3:
                  return "[minulou středu v] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [v] LT";
                case 6:
                  return "[minulou sobotu v] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "před %s",
            s: c,
            m: c,
            mm: c,
            h: c,
            hh: c,
            d: c,
            dd: c,
            M: c,
            MM: c,
            y: c,
            yy: c
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("cv", {
          months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"),
          monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"),
          weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"),
          weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"),
          weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD-MM-YYYY",
            LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]",
            LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT",
            LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT"
          },
          calendar: {
            sameDay: "[Паян] LT [сехетре]",
            nextDay: "[Ыран] LT [сехетре]",
            lastDay: "[Ĕнер] LT [сехетре]",
            nextWeek: "[Çитес] dddd LT [сехетре]",
            lastWeek: "[Иртнĕ] dddd LT [сехетре]",
            sameElse: "L"
          },
          relativeTime: {
            future: function(a) {
              var b = /сехет$/i.exec(a) ? "рен" : /çул$/i.exec(a) ? "тан" : "ран";
              return a + b
            },
            past: "%s каялла",
            s: "пĕр-ик çеккунт",
            m: "пĕр минут",
            mm: "%d минут",
            h: "пĕр сехет",
            hh: "%d сехет",
            d: "пĕр кун",
            dd: "%d кун",
            M: "пĕр уйăх",
            MM: "%d уйăх",
            y: "пĕр çул",
            yy: "%d çул"
          },
          ordinal: "%d-мĕш",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("cy", {
          months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
          monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
          weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
          weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
          weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Heddiw am] LT",
            nextDay: "[Yfory am] LT",
            nextWeek: "dddd [am] LT",
            lastDay: "[Ddoe am] LT",
            lastWeek: "dddd [diwethaf am] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "mewn %s",
            past: "%s yn &#244;l",
            s: "ychydig eiliadau",
            m: "munud",
            mm: "%d munud",
            h: "awr",
            hh: "%d awr",
            d: "diwrnod",
            dd: "%d diwrnod",
            M: "mis",
            MM: "%d mis",
            y: "blwyddyn",
            yy: "%d flynedd"
          },
          ordinal: function(a) {
            var b = a,
              c = "",
              d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
            return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("da", {
          months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
          weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D. MMMM, YYYY LT"
          },
          calendar: {
            sameDay: "[I dag kl.] LT",
            nextDay: "[I morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[I går kl.] LT",
            lastWeek: "[sidste] dddd [kl] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "%s siden",
            s: "få sekunder",
            m: "et minut",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dage",
            M: "en måned",
            MM: "%d måneder",
            y: "et år",
            yy: "%d år"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c) {
          var d = {
            m: ["eine Minute", "einer Minute"],
            h: ["eine Stunde", "einer Stunde"],
            d: ["ein Tag", "einem Tag"],
            dd: [a + " Tage", a + " Tagen"],
            M: ["ein Monat", "einem Monat"],
            MM: [a + " Monate", a + " Monaten"],
            y: ["ein Jahr", "einem Jahr"],
            yy: [a + " Jahre", a + " Jahren"]
          };
          return b ? d[c][0] : d[c][1]
        }
        return a.lang("de", {
          months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
          monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
          weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
          weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
          weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "H:mm [Uhr]",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Heute um] LT",
            sameElse: "L",
            nextDay: "[Morgen um] LT",
            nextWeek: "dddd [um] LT",
            lastDay: "[Gestern um] LT",
            lastWeek: "[letzten] dddd [um] LT"
          },
          relativeTime: {
            future: "in %s",
            past: "vor %s",
            s: "ein paar Sekunden",
            m: b,
            mm: "%d Minuten",
            h: b,
            hh: "%d Stunden",
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("el", {
          monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
          monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
          months: function(a, b) {
            return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
          },
          monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
          weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
          weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
          weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
          meridiem: function(a, b, c) {
            return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ"
          },
          longDateFormat: {
            LT: "h:mm A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendarEl: {
            sameDay: "[Σήμερα {}] LT",
            nextDay: "[Αύριο {}] LT",
            nextWeek: "dddd [{}] LT",
            lastDay: "[Χθες {}] LT",
            lastWeek: "[την προηγούμενη] dddd [{}] LT",
            sameElse: "L"
          },
          calendar: function(a, b) {
            var c = this._calendarEl[a],
              d = b && b.hours();
            return c.replace("{}", 1 === d % 12 ? "στη" : "στις")
          },
          relativeTime: {
            future: "σε %s",
            past: "%s πριν",
            s: "δευτερόλεπτα",
            m: "ένα λεπτό",
            mm: "%d λεπτά",
            h: "μία ώρα",
            hh: "%d ώρες",
            d: "μία μέρα",
            dd: "%d μέρες",
            M: "ένας μήνας",
            MM: "%d μήνες",
            y: "ένας χρόνος",
            yy: "%d χρόνια"
          },
          ordinal: function(a) {
            return a + "η"
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("en-au", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          ordinal: function(a) {
            var b = a % 10,
              c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("en-ca", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            L: "YYYY-MM-DD",
            LL: "D MMMM, YYYY",
            LLL: "D MMMM, YYYY LT",
            LLLL: "dddd, D MMMM, YYYY LT"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          ordinal: function(a) {
            var b = a % 10,
              c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("en-gb", {
          months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
          weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
          weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
          weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
          },
          ordinal: function(a) {
            var b = a % 10,
              c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return a + c
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("eo", {
          months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
          weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"),
          weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"),
          weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "D[-an de] MMMM, YYYY",
            LLL: "D[-an de] MMMM, YYYY LT",
            LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT"
          },
          meridiem: function(a, b, c) {
            return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
          },
          calendar: {
            sameDay: "[Hodiaŭ je] LT",
            nextDay: "[Morgaŭ je] LT",
            nextWeek: "dddd [je] LT",
            lastDay: "[Hieraŭ je] LT",
            lastWeek: "[pasinta] dddd [je] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "je %s",
            past: "antaŭ %s",
            s: "sekundoj",
            m: "minuto",
            mm: "%d minutoj",
            h: "horo",
            hh: "%d horoj",
            d: "tago",
            dd: "%d tagoj",
            M: "monato",
            MM: "%d monatoj",
            y: "jaro",
            yy: "%d jaroj"
          },
          ordinal: "%da",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("es", {
          months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
          monthsShort: "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
          weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
          weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
          weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
          },
          calendar: {
            sameDay: function() {
              return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextDay: function() {
              return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            nextWeek: function() {
              return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastDay: function() {
              return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            lastWeek: function() {
              return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "en %s",
            past: "hace %s",
            s: "unos segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "una hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un año",
            yy: "%d años"
          },
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c, d) {
          return d || b ? "paari sekundi" : "paar sekundit"
        }
        return a.lang("et", {
          months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
          monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
          weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
          weekdaysShort: "P_E_T_K_N_R_L".split("_"),
          weekdaysMin: "P_E_T_K_N_R_L".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Täna,] LT",
            nextDay: "[Homme,] LT",
            nextWeek: "[Järgmine] dddd LT",
            lastDay: "[Eile,] LT",
            lastWeek: "[Eelmine] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s pärast",
            past: "%s tagasi",
            s: b,
            m: "minut",
            mm: "%d minutit",
            h: "tund",
            hh: "%d tundi",
            d: "päev",
            dd: "%d päeva",
            M: "kuu",
            MM: "%d kuud",
            y: "aasta",
            yy: "%d aastat"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("eu", {
          months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
          monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
          weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
          weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
          weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "YYYY[ko] MMMM[ren] D[a]",
            LLL: "YYYY[ko] MMMM[ren] D[a] LT",
            LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT",
            l: "YYYY-M-D",
            ll: "YYYY[ko] MMM D[a]",
            lll: "YYYY[ko] MMM D[a] LT",
            llll: "ddd, YYYY[ko] MMM D[a] LT"
          },
          calendar: {
            sameDay: "[gaur] LT[etan]",
            nextDay: "[bihar] LT[etan]",
            nextWeek: "dddd LT[etan]",
            lastDay: "[atzo] LT[etan]",
            lastWeek: "[aurreko] dddd LT[etan]",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s barru",
            past: "duela %s",
            s: "segundo batzuk",
            m: "minutu bat",
            mm: "%d minutu",
            h: "ordu bat",
            hh: "%d ordu",
            d: "egun bat",
            dd: "%d egun",
            M: "hilabete bat",
            MM: "%d hilabete",
            y: "urte bat",
            yy: "%d urte"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        var b = {
            1: "۱",
            2: "۲",
            3: "۳",
            4: "۴",
            5: "۵",
            6: "۶",
            7: "۷",
            8: "۸",
            9: "۹",
            0: "۰"
          },
          c = {
            "۱": "1",
            "۲": "2",
            "۳": "3",
            "۴": "4",
            "۵": "5",
            "۶": "6",
            "۷": "7",
            "۸": "8",
            "۹": "9",
            "۰": "0"
          };
        return a.lang("fa", {
          months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
          monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
          weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
          weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          meridiem: function(a) {
            return 12 > a ? "قبل از ظهر" : "بعد از ظهر"
          },
          calendar: {
            sameDay: "[امروز ساعت] LT",
            nextDay: "[فردا ساعت] LT",
            nextWeek: "dddd [ساعت] LT",
            lastDay: "[دیروز ساعت] LT",
            lastWeek: "dddd [پیش] [ساعت] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "در %s",
            past: "%s پیش",
            s: "چندین ثانیه",
            m: "یک دقیقه",
            mm: "%d دقیقه",
            h: "یک ساعت",
            hh: "%d ساعت",
            d: "یک روز",
            dd: "%d روز",
            M: "یک ماه",
            MM: "%d ماه",
            y: "یک سال",
            yy: "%d سال"
          },
          preparse: function(a) {
            return a.replace(/[۰-۹]/g, function(a) {
              return c[a]
            }).replace(/،/g, ",")
          },
          postformat: function(a) {
            return a.replace(/\d/g, function(a) {
              return b[a]
            }).replace(/,/g, "،")
          },
          ordinal: "%dم",
          week: {
            dow: 6,
            doy: 12
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, d, e) {
          var f = "";
          switch (d) {
            case "s":
              return e ? "muutaman sekunnin" : "muutama sekunti";
            case "m":
              return e ? "minuutin" : "minuutti";
            case "mm":
              f = e ? "minuutin" : "minuuttia";
              break;
            case "h":
              return e ? "tunnin" : "tunti";
            case "hh":
              f = e ? "tunnin" : "tuntia";
              break;
            case "d":
              return e ? "päivän" : "päivä";
            case "dd":
              f = e ? "päivän" : "päivää";
              break;
            case "M":
              return e ? "kuukauden" : "kuukausi";
            case "MM":
              f = e ? "kuukauden" : "kuukautta";
              break;
            case "y":
              return e ? "vuoden" : "vuosi";
            case "yy":
              f = e ? "vuoden" : "vuotta"
          }
          return f = c(a, e) + " " + f
        }

        function c(a, b) {
          return 10 > a ? b ? e[a] : d[a] : a
        }
        var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
          e = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]];
        return a.lang("fi", {
          months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
          monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
          weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
          weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
          weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            L: "DD.MM.YYYY",
            LL: "Do MMMM[ta] YYYY",
            LLL: "Do MMMM[ta] YYYY, [klo] LT",
            LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT",
            l: "D.M.YYYY",
            ll: "Do MMM YYYY",
            lll: "Do MMM YYYY, [klo] LT",
            llll: "ddd, Do MMM YYYY, [klo] LT"
          },
          calendar: {
            sameDay: "[tänään] [klo] LT",
            nextDay: "[huomenna] [klo] LT",
            nextWeek: "dddd [klo] LT",
            lastDay: "[eilen] [klo] LT",
            lastWeek: "[viime] dddd[na] [klo] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s päästä",
            past: "%s sitten",
            s: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("fo", {
          months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
          weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
          weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D. MMMM, YYYY LT"
          },
          calendar: {
            sameDay: "[Í dag kl.] LT",
            nextDay: "[Í morgin kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[Í gjár kl.] LT",
            lastWeek: "[síðstu] dddd [kl] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "um %s",
            past: "%s síðani",
            s: "fá sekund",
            m: "ein minutt",
            mm: "%d minuttir",
            h: "ein tími",
            hh: "%d tímar",
            d: "ein dagur",
            dd: "%d dagar",
            M: "ein mánaði",
            MM: "%d mánaðir",
            y: "eitt ár",
            yy: "%d ár"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("fr-ca", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          ordinal: function(a) {
            return a + (1 === a ? "er" : "")
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("fr", {
          months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
          monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
          weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
          weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
          weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Aujourd'hui à] LT",
            nextDay: "[Demain à] LT",
            nextWeek: "dddd [à] LT",
            lastDay: "[Hier à] LT",
            lastWeek: "dddd [dernier à] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dans %s",
            past: "il y a %s",
            s: "quelques secondes",
            m: "une minute",
            mm: "%d minutes",
            h: "une heure",
            hh: "%d heures",
            d: "un jour",
            dd: "%d jours",
            M: "un mois",
            MM: "%d mois",
            y: "un an",
            yy: "%d ans"
          },
          ordinal: function(a) {
            return a + (1 === a ? "er" : "")
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("gl", {
          months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
          monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
          weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"),
          weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"),
          weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: function() {
              return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            },
            nextDay: function() {
              return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
            },
            nextWeek: function() {
              return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
            },
            lastDay: function() {
              return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
            },
            lastWeek: function() {
              return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: function(a) {
              return "uns segundos" === a ? "nuns segundos" : "en " + a
            },
            past: "hai %s",
            s: "uns segundos",
            m: "un minuto",
            mm: "%d minutos",
            h: "unha hora",
            hh: "%d horas",
            d: "un día",
            dd: "%d días",
            M: "un mes",
            MM: "%d meses",
            y: "un ano",
            yy: "%d anos"
          },
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("he", {
          months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
          monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
          weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
          weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
          weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D [ב]MMMM YYYY",
            LLL: "D [ב]MMMM YYYY LT",
            LLLL: "dddd, D [ב]MMMM YYYY LT",
            l: "D/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY LT",
            llll: "ddd, D MMM YYYY LT"
          },
          calendar: {
            sameDay: "[היום ב־]LT",
            nextDay: "[מחר ב־]LT",
            nextWeek: "dddd [בשעה] LT",
            lastDay: "[אתמול ב־]LT",
            lastWeek: "[ביום] dddd [האחרון בשעה] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "בעוד %s",
            past: "לפני %s",
            s: "מספר שניות",
            m: "דקה",
            mm: "%d דקות",
            h: "שעה",
            hh: function(a) {
              return 2 === a ? "שעתיים" : a + " שעות"
            },
            d: "יום",
            dd: function(a) {
              return 2 === a ? "יומיים" : a + " ימים"
            },
            M: "חודש",
            MM: function(a) {
              return 2 === a ? "חודשיים" : a + " חודשים"
            },
            y: "שנה",
            yy: function(a) {
              return 2 === a ? "שנתיים" : a + " שנים"
            }
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        var b = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          c = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };
        return a.lang("hi", {
          months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
          monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
          weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[कल] LT",
            nextWeek: "dddd, LT",
            lastDay: "[कल] LT",
            lastWeek: "[पिछले] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s में",
            past: "%s पहले",
            s: "कुछ ही क्षण",
            m: "एक मिनट",
            mm: "%d मिनट",
            h: "एक घंटा",
            hh: "%d घंटे",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महीने",
            MM: "%d महीने",
            y: "एक वर्ष",
            yy: "%d वर्ष"
          },
          preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
              return c[a]
            })
          },
          postformat: function(a) {
            return a.replace(/\d/g, function(a) {
              return b[a];
            })
          },
          meridiem: function(a) {
            return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात"
          },
          week: {
            dow: 0,
            doy: 6
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c) {
          var d = a + " ";
          switch (c) {
            case "m":
              return b ? "jedna minuta" : "jedne minute";
            case "mm":
              return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
            case "h":
              return b ? "jedan sat" : "jednog sata";
            case "hh":
              return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
            case "dd":
              return d += 1 === a ? "dan" : "dana";
            case "MM":
              return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
            case "yy":
              return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
          }
        }
        return a.lang("hr", {
          months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
          monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
          weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
          weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
          weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[danas u] LT",
            nextDay: "[sutra u] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[u] [nedjelju] [u] LT";
                case 3:
                  return "[u] [srijedu] [u] LT";
                case 6:
                  return "[u] [subotu] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[u] dddd [u] LT"
              }
            },
            lastDay: "[jučer u] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                  return "[prošlu] dddd [u] LT";
                case 6:
                  return "[prošle] [subote] [u] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prošli] dddd [u] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "prije %s",
            s: "par sekundi",
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: "dan",
            dd: b,
            M: "mjesec",
            MM: b,
            y: "godinu",
            yy: b
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c, d) {
          var e = a;
          switch (c) {
            case "s":
              return d || b ? "néhány másodperc" : "néhány másodperce";
            case "m":
              return "egy" + (d || b ? " perc" : " perce");
            case "mm":
              return e + (d || b ? " perc" : " perce");
            case "h":
              return "egy" + (d || b ? " óra" : " órája");
            case "hh":
              return e + (d || b ? " óra" : " órája");
            case "d":
              return "egy" + (d || b ? " nap" : " napja");
            case "dd":
              return e + (d || b ? " nap" : " napja");
            case "M":
              return "egy" + (d || b ? " hónap" : " hónapja");
            case "MM":
              return e + (d || b ? " hónap" : " hónapja");
            case "y":
              return "egy" + (d || b ? " év" : " éve");
            case "yy":
              return e + (d || b ? " év" : " éve")
          }
          return ""
        }

        function c(a) {
          return (a ? "" : "[múlt] ") + "[" + d[this.day()] + "] LT[-kor]"
        }
        var d = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");
        return a.lang("hu", {
          months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
          monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
          weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
          weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
          weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "YYYY.MM.DD.",
            LL: "YYYY. MMMM D.",
            LLL: "YYYY. MMMM D., LT",
            LLLL: "YYYY. MMMM D., dddd LT"
          },
          calendar: {
            sameDay: "[ma] LT[-kor]",
            nextDay: "[holnap] LT[-kor]",
            nextWeek: function() {
              return c.call(this, !0)
            },
            lastDay: "[tegnap] LT[-kor]",
            lastWeek: function() {
              return c.call(this, !1)
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "%s múlva",
            past: "%s",
            s: b,
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: b,
            dd: b,
            M: b,
            MM: b,
            y: b,
            yy: b
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("id", {
          months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
          monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
          weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
          weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
          weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] LT",
            LLLL: "dddd, D MMMM YYYY [pukul] LT"
          },
          meridiem: function(a) {
            return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Besok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kemarin pukul] LT",
            lastWeek: "dddd [lalu pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lalu",
            s: "beberapa detik",
            m: "semenit",
            mm: "%d menit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a) {
          return 11 === a % 100 || 1 !== a % 10
        }

        function c(a, c, d, e) {
          var f = a + " ";
          switch (d) {
            case "s":
              return c || e ? "nokkrar sekúndur" : "nokkrum sekúndum";
            case "m":
              return c ? "mínúta" : "mínútu";
            case "mm":
              return b(a) ? f + (c || e ? "mínútur" : "mínútum") : c ? f + "mínúta" : f + "mínútu";
            case "hh":
              return b(a) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund";
            case "d":
              return c ? "dagur" : e ? "dag" : "degi";
            case "dd":
              return b(a) ? c ? f + "dagar" : f + (e ? "daga" : "dögum") : c ? f + "dagur" : f + (e ? "dag" : "degi");
            case "M":
              return c ? "mánuður" : e ? "mánuð" : "mánuði";
            case "MM":
              return b(a) ? c ? f + "mánuðir" : f + (e ? "mánuði" : "mánuðum") : c ? f + "mánuður" : f + (e ? "mánuð" : "mánuði");
            case "y":
              return c || e ? "ár" : "ári";
            case "yy":
              return b(a) ? f + (c || e ? "ár" : "árum") : f + (c || e ? "ár" : "ári")
          }
        }
        return a.lang("is", {
          months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
          weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
          weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
          weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] LT",
            LLLL: "dddd, D. MMMM YYYY [kl.] LT"
          },
          calendar: {
            sameDay: "[í dag kl.] LT",
            nextDay: "[á morgun kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[í gær kl.] LT",
            lastWeek: "[síðasta] dddd [kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "eftir %s",
            past: "fyrir %s síðan",
            s: c,
            m: c,
            mm: c,
            h: "klukkustund",
            hh: c,
            d: c,
            dd: c,
            M: c,
            MM: c,
            y: c,
            yy: c
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("it", {
          months: "Gennaio_Febbraio_Marzo_Aprile_Maggio_Giugno_Luglio_Agosto_Settembre_Ottobre_Novembre_Dicembre".split("_"),
          monthsShort: "Gen_Feb_Mar_Apr_Mag_Giu_Lug_Ago_Set_Ott_Nov_Dic".split("_"),
          weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"),
          weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
          weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Oggi alle] LT",
            nextDay: "[Domani alle] LT",
            nextWeek: "dddd [alle] LT",
            lastDay: "[Ieri alle] LT",
            lastWeek: "[lo scorso] dddd [alle] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: function(a) {
              return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a
            },
            past: "%s fa",
            s: "secondi",
            m: "un minuto",
            mm: "%d minuti",
            h: "un'ora",
            hh: "%d ore",
            d: "un giorno",
            dd: "%d giorni",
            M: "un mese",
            MM: "%d mesi",
            y: "un anno",
            yy: "%d anni"
          },
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ja", {
          months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
          weekdaysShort: "日_月_火_水_木_金_土".split("_"),
          weekdaysMin: "日_月_火_水_木_金_土".split("_"),
          longDateFormat: {
            LT: "Ah時m分",
            L: "YYYY/MM/DD",
            LL: "YYYY年M月D日",
            LLL: "YYYY年M月D日LT",
            LLLL: "YYYY年M月D日LT dddd"
          },
          meridiem: function(a) {
            return 12 > a ? "午前" : "午後"
          },
          calendar: {
            sameDay: "[今日] LT",
            nextDay: "[明日] LT",
            nextWeek: "[来週]dddd LT",
            lastDay: "[昨日] LT",
            lastWeek: "[前週]dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s後",
            past: "%s前",
            s: "数秒",
            m: "1分",
            mm: "%d分",
            h: "1時間",
            hh: "%d時間",
            d: "1日",
            dd: "%d日",
            M: "1ヶ月",
            MM: "%dヶ月",
            y: "1年",
            yy: "%d年"
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b) {
          var c = {
              nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
              accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
            },
            d = /D[oD] *MMMM?/.test(b) ? "accusative" : "nominative";
          return c[d][a.month()]
        }

        function c(a, b) {
          var c = {
              nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
              accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_")
            },
            d = /(წინა|შემდეგ)/.test(b) ? "accusative" : "nominative";
          return c[d][a.day()]
        }
        return a.lang("ka", {
          months: b,
          monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
          weekdays: c,
          weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
          weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
          longDateFormat: {
            LT: "h:mm A",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[დღეს] LT[-ზე]",
            nextDay: "[ხვალ] LT[-ზე]",
            lastDay: "[გუშინ] LT[-ზე]",
            nextWeek: "[შემდეგ] dddd LT[-ზე]",
            lastWeek: "[წინა] dddd LT-ზე",
            sameElse: "L"
          },
          relativeTime: {
            future: function(a) {
              return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში"
            },
            past: function(a) {
              return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0
            },
            s: "რამდენიმე წამი",
            m: "წუთი",
            mm: "%d წუთი",
            h: "საათი",
            hh: "%d საათი",
            d: "დღე",
            dd: "%d დღე",
            M: "თვე",
            MM: "%d თვე",
            y: "წელი",
            yy: "%d წელი"
          },
          ordinal: function(a) {
            return 0 === a ? a : 1 === a ? a + "-ლი" : 20 > a || 100 >= a && 0 === a % 20 || 0 === a % 100 ? "მე-" + a : a + "-ე"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ko", {
          months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
          weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
          weekdaysShort: "일_월_화_수_목_금_토".split("_"),
          weekdaysMin: "일_월_화_수_목_금_토".split("_"),
          longDateFormat: {
            LT: "A h시 mm분",
            L: "YYYY.MM.DD",
            LL: "YYYY년 MMMM D일",
            LLL: "YYYY년 MMMM D일 LT",
            LLLL: "YYYY년 MMMM D일 dddd LT"
          },
          meridiem: function(a) {
            return 12 > a ? "오전" : "오후"
          },
          calendar: {
            sameDay: "오늘 LT",
            nextDay: "내일 LT",
            nextWeek: "dddd LT",
            lastDay: "어제 LT",
            lastWeek: "지난주 dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s 후",
            past: "%s 전",
            s: "몇초",
            ss: "%d초",
            m: "일분",
            mm: "%d분",
            h: "한시간",
            hh: "%d시간",
            d: "하루",
            dd: "%d일",
            M: "한달",
            MM: "%d달",
            y: "일년",
            yy: "%d년"
          },
          ordinal: "%d일"
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c, d) {
          return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes"
        }

        function c(a, b, c, d) {
          return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
        }

        function d(a) {
          return 0 === a % 10 || a > 10 && 20 > a
        }

        function e(a) {
          return h[a].split("_")
        }

        function f(a, b, f, g) {
          var h = a + " ";
          return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2])
        }

        function g(a, b) {
          var c = -1 === b.indexOf("dddd LT"),
            d = i[a.weekday()];
          return c ? d : d.substring(0, d.length - 2) + "į"
        }
        var h = {
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus"
          },
          i = "pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis_sekmadienis".split("_");
        return a.lang("lt", {
          months: "sausio_vasario_kovo_balandžio_gegužės_biržėlio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
          monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
          weekdays: g,
          weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
          weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "YYYY [m.] MMMM D [d.]",
            LLL: "YYYY [m.] MMMM D [d.], LT [val.]",
            LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]",
            l: "YYYY-MM-DD",
            ll: "YYYY [m.] MMMM D [d.]",
            lll: "YYYY [m.] MMMM D [d.], LT [val.]",
            llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]"
          },
          calendar: {
            sameDay: "[Šiandien] LT",
            nextDay: "[Rytoj] LT",
            nextWeek: "dddd LT",
            lastDay: "[Vakar] LT",
            lastWeek: "[Praėjusį] dddd LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "po %s",
            past: "prieš %s",
            s: b,
            m: c,
            mm: f,
            h: c,
            hh: f,
            d: c,
            dd: f,
            M: c,
            MM: f,
            y: c,
            yy: f
          },
          ordinal: function(a) {
            return a + "-oji"
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c) {
          var d = a.split("_");
          return c ? 1 === b % 10 && 11 !== b ? d[2] : d[3] : 1 === b % 10 && 11 !== b ? d[0] : d[1]
        }

        function c(a, c, e) {
          return a + " " + b(d[e], a, c)
        }
        var d = {
          mm: "minūti_minūtes_minūte_minūtes",
          hh: "stundu_stundas_stunda_stundas",
          dd: "dienu_dienas_diena_dienas",
          MM: "mēnesi_mēnešus_mēnesis_mēneši",
          yy: "gadu_gadus_gads_gadi"
        };
        return a.lang("lv", {
          months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
          weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
          weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
          weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "YYYY. [gada] D. MMMM",
            LLL: "YYYY. [gada] D. MMMM, LT",
            LLLL: "YYYY. [gada] D. MMMM, dddd, LT"
          },
          calendar: {
            sameDay: "[Šodien pulksten] LT",
            nextDay: "[Rīt pulksten] LT",
            nextWeek: "dddd [pulksten] LT",
            lastDay: "[Vakar pulksten] LT",
            lastWeek: "[Pagājušā] dddd [pulksten] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s vēlāk",
            past: "%s agrāk",
            s: "dažas sekundes",
            m: "minūti",
            mm: c,
            h: "stundu",
            hh: c,
            d: "dienu",
            dd: c,
            M: "mēnesi",
            MM: c,
            y: "gadu",
            yy: c
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ml", {
          months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
          monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
          weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
          weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
          weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
          longDateFormat: {
            LT: "A h:mm -നു",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
            sameDay: "[ഇന്ന്] LT",
            nextDay: "[നാളെ] LT",
            nextWeek: "dddd, LT",
            lastDay: "[ഇന്നലെ] LT",
            lastWeek: "[കഴിഞ്ഞ] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s കഴിഞ്ഞ്",
            past: "%s മുൻപ്",
            s: "അൽപ നിമിഷങ്ങൾ",
            m: "ഒരു മിനിറ്റ്",
            mm: "%d മിനിറ്റ്",
            h: "ഒരു മണിക്കൂർ",
            hh: "%d മണിക്കൂർ",
            d: "ഒരു ദിവസം",
            dd: "%d ദിവസം",
            M: "ഒരു മാസം",
            MM: "%d മാസം",
            y: "ഒരു വർഷം",
            yy: "%d വർഷം"
          },
          meridiem: function(a) {
            return 4 > a ? "രാത്രി" : 12 > a ? "രാവിലെ" : 17 > a ? "ഉച്ച കഴിഞ്ഞ്" : 20 > a ? "വൈകുന്നേരം" : "രാത്രി"
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        var b = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          c = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };
        return a.lang("mr", {
          months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
          monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
          weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
          weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
          weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
          longDateFormat: {
            LT: "A h:mm वाजता",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[उद्या] LT",
            nextWeek: "dddd, LT",
            lastDay: "[काल] LT",
            lastWeek: "[मागील] dddd, LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s नंतर",
            past: "%s पूर्वी",
            s: "सेकंद",
            m: "एक मिनिट",
            mm: "%d मिनिटे",
            h: "एक तास",
            hh: "%d तास",
            d: "एक दिवस",
            dd: "%d दिवस",
            M: "एक महिना",
            MM: "%d महिने",
            y: "एक वर्ष",
            yy: "%d वर्षे"
          },
          preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
              return c[a]
            })
          },
          postformat: function(a) {
            return a.replace(/\d/g, function(a) {
              return b[a]
            })
          },
          meridiem: function(a) {
            return 4 > a ? "रात्री" : 10 > a ? "सकाळी" : 17 > a ? "दुपारी" : 20 > a ? "सायंकाळी" : "रात्री"
          },
          week: {
            dow: 0,
            doy: 6
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ms-my", {
          months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
          monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
          weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
          weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
          weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
          longDateFormat: {
            LT: "HH.mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY [pukul] LT",
            LLLL: "dddd, D MMMM YYYY [pukul] LT"
          },
          meridiem: function(a) {
            return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
          },
          calendar: {
            sameDay: "[Hari ini pukul] LT",
            nextDay: "[Esok pukul] LT",
            nextWeek: "dddd [pukul] LT",
            lastDay: "[Kelmarin pukul] LT",
            lastWeek: "dddd [lepas pukul] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dalam %s",
            past: "%s yang lepas",
            s: "beberapa saat",
            m: "seminit",
            mm: "%d minit",
            h: "sejam",
            hh: "%d jam",
            d: "sehari",
            dd: "%d hari",
            M: "sebulan",
            MM: "%d bulan",
            y: "setahun",
            yy: "%d tahun"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("nb", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
          weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
          weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
          weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "H.mm",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY [kl.] LT",
            LLLL: "dddd D. MMMM YYYY [kl.] LT"
          },
          calendar: {
            sameDay: "[i dag kl.] LT",
            nextDay: "[i morgen kl.] LT",
            nextWeek: "dddd [kl.] LT",
            lastDay: "[i går kl.] LT",
            lastWeek: "[forrige] dddd [kl.] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "for %s siden",
            s: "noen sekunder",
            m: "ett minutt",
            mm: "%d minutter",
            h: "en time",
            hh: "%d timer",
            d: "en dag",
            dd: "%d dager",
            M: "en måned",
            MM: "%d måneder",
            y: "ett år",
            yy: "%d år"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        var b = {
            1: "१",
            2: "२",
            3: "३",
            4: "४",
            5: "५",
            6: "६",
            7: "७",
            8: "८",
            9: "९",
            0: "०"
          },
          c = {
            "१": "1",
            "२": "2",
            "३": "3",
            "४": "4",
            "५": "5",
            "६": "6",
            "७": "7",
            "८": "8",
            "९": "9",
            "०": "0"
          };
        return a.lang("ne", {
          months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
          monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
          weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
          weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
          weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"),
          longDateFormat: {
            LT: "Aको h:mm बजे",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY, LT",
            LLLL: "dddd, D MMMM YYYY, LT"
          },
          preparse: function(a) {
            return a.replace(/[१२३४५६७८९०]/g, function(a) {
              return c[a]
            })
          },
          postformat: function(a) {
            return a.replace(/\d/g, function(a) {
              return b[a]
            })
          },
          meridiem: function(a) {
            return 3 > a ? "राती" : 10 > a ? "बिहान" : 15 > a ? "दिउँसो" : 18 > a ? "बेलुका" : 20 > a ? "साँझ" : "राती"
          },
          calendar: {
            sameDay: "[आज] LT",
            nextDay: "[भोली] LT",
            nextWeek: "[आउँदो] dddd[,] LT",
            lastDay: "[हिजो] LT",
            lastWeek: "[गएको] dddd[,] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%sमा",
            past: "%s अगाडी",
            s: "केही समय",
            m: "एक मिनेट",
            mm: "%d मिनेट",
            h: "एक घण्टा",
            hh: "%d घण्टा",
            d: "एक दिन",
            dd: "%d दिन",
            M: "एक महिना",
            MM: "%d महिना",
            y: "एक बर्ष",
            yy: "%d बर्ष"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
          c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_");
        return a.lang("nl", {
          months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
          monthsShort: function(a, d) {
            return /-MMM-/.test(d) ? c[a.month()] : b[a.month()]
          },
          weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
          weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
          weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD-MM-YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[vandaag om] LT",
            nextDay: "[morgen om] LT",
            nextWeek: "dddd [om] LT",
            lastDay: "[gisteren om] LT",
            lastWeek: "[afgelopen] dddd [om] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "over %s",
            past: "%s geleden",
            s: "een paar seconden",
            m: "één minuut",
            mm: "%d minuten",
            h: "één uur",
            hh: "%d uur",
            d: "één dag",
            dd: "%d dagen",
            M: "één maand",
            MM: "%d maanden",
            y: "één jaar",
            yy: "%d jaar"
          },
          ordinal: function(a) {
            return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("nn", {
          months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
          monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
          weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
          weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
          weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[I dag klokka] LT",
            nextDay: "[I morgon klokka] LT",
            nextWeek: "dddd [klokka] LT",
            lastDay: "[I går klokka] LT",
            lastWeek: "[Føregående] dddd [klokka] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "for %s siden",
            s: "noen sekund",
            m: "ett minutt",
            mm: "%d minutt",
            h: "en time",
            hh: "%d timar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a) {
          return 5 > a % 10 && a % 10 > 1 && 1 !== ~~(a / 10)
        }

        function c(a, c, d) {
          var e = a + " ";
          switch (d) {
            case "m":
              return c ? "minuta" : "minutę";
            case "mm":
              return e + (b(a) ? "minuty" : "minut");
            case "h":
              return c ? "godzina" : "godzinę";
            case "hh":
              return e + (b(a) ? "godziny" : "godzin");
            case "MM":
              return e + (b(a) ? "miesiące" : "miesięcy");
            case "yy":
              return e + (b(a) ? "lata" : "lat")
          }
        }
        var d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
          e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");
        return a.lang("pl", {
          months: function(a, b) {
            return /D MMMM/.test(b) ? e[a.month()] : d[a.month()]
          },
          monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
          weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
          weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"),
          weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Dziś o] LT",
            nextDay: "[Jutro o] LT",
            nextWeek: "[W] dddd [o] LT",
            lastDay: "[Wczoraj o] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[W zeszłą niedzielę o] LT";
                case 3:
                  return "[W zeszłą środę o] LT";
                case 6:
                  return "[W zeszłą sobotę o] LT";
                default:
                  return "[W zeszły] dddd [o] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "%s temu",
            s: "kilka sekund",
            m: c,
            mm: c,
            h: c,
            hh: c,
            d: "1 dzień",
            dd: "%d dni",
            M: "miesiąc",
            MM: c,
            y: "rok",
            yy: c
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("pt-br", {
          months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
          weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          ordinal: "%dº"
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("pt", {
          months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
          monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
          weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
          weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
          weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D [de] MMMM [de] YYYY",
            LLL: "D [de] MMMM [de] YYYY LT",
            LLLL: "dddd, D [de] MMMM [de] YYYY LT"
          },
          calendar: {
            sameDay: "[Hoje às] LT",
            nextDay: "[Amanhã às] LT",
            nextWeek: "dddd [às] LT",
            lastDay: "[Ontem às] LT",
            lastWeek: function() {
              return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "em %s",
            past: "%s atrás",
            s: "segundos",
            m: "um minuto",
            mm: "%d minutos",
            h: "uma hora",
            hh: "%d horas",
            d: "um dia",
            dd: "%d dias",
            M: "um mês",
            MM: "%d meses",
            y: "um ano",
            yy: "%d anos"
          },
          ordinal: "%dº",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("ro", {
          months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
          monthsShort: "Ian_Feb_Mar_Apr_Mai_Iun_Iul_Aug_Sep_Oct_Noi_Dec".split("_"),
          weekdays: "Duminică_Luni_Marţi_Miercuri_Joi_Vineri_Sâmbătă".split("_"),
          weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
          weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY H:mm",
            LLLL: "dddd, D MMMM YYYY H:mm"
          },
          calendar: {
            sameDay: "[azi la] LT",
            nextDay: "[mâine la] LT",
            nextWeek: "dddd [la] LT",
            lastDay: "[ieri la] LT",
            lastWeek: "[fosta] dddd [la] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "peste %s",
            past: "%s în urmă",
            s: "câteva secunde",
            m: "un minut",
            mm: "%d minute",
            h: "o oră",
            hh: "%d ore",
            d: "o zi",
            dd: "%d zile",
            M: "o lună",
            MM: "%d luni",
            y: "un an",
            yy: "%d ani"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b) {
          var c = a.split("_");
          return 1 === b % 10 && 11 !== b % 100 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }

        function c(a, c, d) {
          var e = {
            mm: "минута_минуты_минут",
            hh: "час_часа_часов",
            dd: "день_дня_дней",
            MM: "месяц_месяца_месяцев",
            yy: "год_года_лет"
          };
          return "m" === d ? c ? "минута" : "минуту" : a + " " + b(e[d], +a)
        }

        function d(a, b) {
          var c = {
              nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
              accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_")
            },
            d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
          return c[d][a.month()]
        }

        function e(a, b) {
          var c = {
              nominative: "янв_фев_мар_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
              accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_")
            },
            d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative";
          return c[d][a.month()]
        }

        function f(a, b) {
          var c = {
              nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
              accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_")
            },
            d = /\[ ?[Вв] ?(?:прошлую|следующую)? ?\] ?dddd/.test(b) ? "accusative" : "nominative";
          return c[d][a.day()]
        }
        return a.lang("ru", {
          months: d,
          monthsShort: e,
          weekdays: f,
          weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
          monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i],
          longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY г.",
            LLL: "D MMMM YYYY г., LT",
            LLLL: "dddd, D MMMM YYYY г., LT"
          },
          calendar: {
            sameDay: "[Сегодня в] LT",
            nextDay: "[Завтра в] LT",
            lastDay: "[Вчера в] LT",
            nextWeek: function() {
              return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"
            },
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[В прошлое] dddd [в] LT";
                case 1:
                case 2:
                case 4:
                  return "[В прошлый] dddd [в] LT";
                case 3:
                case 5:
                case 6:
                  return "[В прошлую] dddd [в] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "через %s",
            past: "%s назад",
            s: "несколько секунд",
            m: c,
            mm: c,
            h: "час",
            hh: c,
            d: "день",
            dd: c,
            M: "месяц",
            MM: c,
            y: "год",
            yy: c
          },
          meridiem: function(a) {
            return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера"
          },
          ordinal: function(a, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
                return a + "-й";
              case "D":
                return a + "-го";
              case "w":
              case "W":
                return a + "-я";
              default:
                return a
            }
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a) {
          return a > 1 && 5 > a
        }

        function c(a, c, d, e) {
          var f = a + " ";
          switch (d) {
            case "s":
              return c || e ? "pár sekúnd" : "pár sekundami";
            case "m":
              return c ? "minúta" : e ? "minútu" : "minútou";
            case "mm":
              return c || e ? f + (b(a) ? "minúty" : "minút") : f + "minútami";
            case "h":
              return c ? "hodina" : e ? "hodinu" : "hodinou";
            case "hh":
              return c || e ? f + (b(a) ? "hodiny" : "hodín") : f + "hodinami";
            case "d":
              return c || e ? "deň" : "dňom";
            case "dd":
              return c || e ? f + (b(a) ? "dni" : "dní") : f + "dňami";
            case "M":
              return c || e ? "mesiac" : "mesiacom";
            case "MM":
              return c || e ? f + (b(a) ? "mesiace" : "mesiacov") : f + "mesiacmi";
            case "y":
              return c || e ? "rok" : "rokom";
            case "yy":
              return c || e ? f + (b(a) ? "roky" : "rokov") : f + "rokmi"
          }
        }
        var d = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
          e = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
        return a.lang("sk", {
          months: d,
          monthsShort: e,
          monthsParse: function(a, b) {
            var c, d = [];
            for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
            return d
          }(d, e),
          weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
          weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
          weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD.MM.YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[dnes o] LT",
            nextDay: "[zajtra o] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[v nedeľu o] LT";
                case 1:
                case 2:
                  return "[v] dddd [o] LT";
                case 3:
                  return "[v stredu o] LT";
                case 4:
                  return "[vo štvrtok o] LT";
                case 5:
                  return "[v piatok o] LT";
                case 6:
                  return "[v sobotu o] LT"
              }
            },
            lastDay: "[včera o] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[minulú nedeľu o] LT";
                case 1:
                case 2:
                  return "[minulý] dddd [o] LT";
                case 3:
                  return "[minulú stredu o] LT";
                case 4:
                case 5:
                  return "[minulý] dddd [o] LT";
                case 6:
                  return "[minulú sobotu o] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "za %s",
            past: "pred %s",
            s: c,
            m: c,
            mm: c,
            h: c,
            hh: c,
            d: c,
            dd: c,
            M: c,
            MM: c,
            y: c,
            yy: c
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b, c) {
          var d = a + " ";
          switch (c) {
            case "m":
              return b ? "ena minuta" : "eno minuto";
            case "mm":
              return d += 1 === a ? "minuta" : 2 === a ? "minuti" : 3 === a || 4 === a ? "minute" : "minut";
            case "h":
              return b ? "ena ura" : "eno uro";
            case "hh":
              return d += 1 === a ? "ura" : 2 === a ? "uri" : 3 === a || 4 === a ? "ure" : "ur";
            case "dd":
              return d += 1 === a ? "dan" : "dni";
            case "MM":
              return d += 1 === a ? "mesec" : 2 === a ? "meseca" : 3 === a || 4 === a ? "mesece" : "mesecev";
            case "yy":
              return d += 1 === a ? "leto" : 2 === a ? "leti" : 3 === a || 4 === a ? "leta" : "let"
          }
        }
        return a.lang("sl", {
          months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
          monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
          weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
          weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
          weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
          longDateFormat: {
            LT: "H:mm",
            L: "DD. MM. YYYY",
            LL: "D. MMMM YYYY",
            LLL: "D. MMMM YYYY LT",
            LLLL: "dddd, D. MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[danes ob] LT",
            nextDay: "[jutri ob] LT",
            nextWeek: function() {
              switch (this.day()) {
                case 0:
                  return "[v] [nedeljo] [ob] LT";
                case 3:
                  return "[v] [sredo] [ob] LT";
                case 6:
                  return "[v] [soboto] [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[v] dddd [ob] LT"
              }
            },
            lastDay: "[včeraj ob] LT",
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 6:
                  return "[prejšnja] dddd [ob] LT";
                case 1:
                case 2:
                case 4:
                case 5:
                  return "[prejšnji] dddd [ob] LT"
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "čez %s",
            past: "%s nazaj",
            s: "nekaj sekund",
            m: b,
            mm: b,
            h: b,
            hh: b,
            d: "en dan",
            dd: b,
            M: "en mesec",
            MM: b,
            y: "eno leto",
            yy: b
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("sq", {
          months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
          monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
          weekdays: "E Diel_E Hënë_E Marte_E Mërkure_E Enjte_E Premte_E Shtunë".split("_"),
          weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
          weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Sot në] LT",
            nextDay: "[Neser në] LT",
            nextWeek: "dddd [në] LT",
            lastDay: "[Dje në] LT",
            lastWeek: "dddd [e kaluar në] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "në %s",
            past: "%s me parë",
            s: "disa seconda",
            m: "një minut",
            mm: "%d minutea",
            h: "një orë",
            hh: "%d orë",
            d: "një ditë",
            dd: "%d ditë",
            M: "një muaj",
            MM: "%d muaj",
            y: "një vit",
            yy: "%d vite"
          },
          ordinal: "%d.",
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("sv", {
          months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
          monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
          weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
          weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
          weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "YYYY-MM-DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[Idag] LT",
            nextDay: "[Imorgon] LT",
            lastDay: "[Igår] LT",
            nextWeek: "dddd LT",
            lastWeek: "[Förra] dddd[en] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "om %s",
            past: "för %s sedan",
            s: "några sekunder",
            m: "en minut",
            mm: "%d minuter",
            h: "en timme",
            hh: "%d timmar",
            d: "en dag",
            dd: "%d dagar",
            M: "en månad",
            MM: "%d månader",
            y: "ett år",
            yy: "%d år"
          },
          ordinal: function(a) {
            var b = a % 10,
              c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
            return a + c
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("th", {
          months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
          monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"),
          weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
          weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
          weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
          longDateFormat: {
            LT: "H นาฬิกา m นาที",
            L: "YYYY/MM/DD",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY เวลา LT",
            LLLL: "วันddddที่ D MMMM YYYY เวลา LT"
          },
          meridiem: function(a) {
            return 12 > a ? "ก่อนเที่ยง" : "หลังเที่ยง"
          },
          calendar: {
            sameDay: "[วันนี้ เวลา] LT",
            nextDay: "[พรุ่งนี้ เวลา] LT",
            nextWeek: "dddd[หน้า เวลา] LT",
            lastDay: "[เมื่อวานนี้ เวลา] LT",
            lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "อีก %s",
            past: "%sที่แล้ว",
            s: "ไม่กี่วินาที",
            m: "1 นาที",
            mm: "%d นาที",
            h: "1 ชั่วโมง",
            hh: "%d ชั่วโมง",
            d: "1 วัน",
            dd: "%d วัน",
            M: "1 เดือน",
            MM: "%d เดือน",
            y: "1 ปี",
            yy: "%d ปี"
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("tl-ph", {
          months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
          monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
          weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
          weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
          weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "MM/D/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY LT",
            LLLL: "dddd, MMMM DD, YYYY LT"
          },
          calendar: {
            sameDay: "[Ngayon sa] LT",
            nextDay: "[Bukas sa] LT",
            nextWeek: "dddd [sa] LT",
            lastDay: "[Kahapon sa] LT",
            lastWeek: "dddd [huling linggo] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "sa loob ng %s",
            past: "%s ang nakalipas",
            s: "ilang segundo",
            m: "isang minuto",
            mm: "%d minuto",
            h: "isang oras",
            hh: "%d oras",
            d: "isang araw",
            dd: "%d araw",
            M: "isang buwan",
            MM: "%d buwan",
            y: "isang taon",
            yy: "%d taon"
          },
          ordinal: function(a) {
            return a
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        var b = {
          1: "'inci",
          5: "'inci",
          8: "'inci",
          70: "'inci",
          80: "'inci",
          2: "'nci",
          7: "'nci",
          20: "'nci",
          50: "'nci",
          3: "'üncü",
          4: "'üncü",
          100: "'üncü",
          6: "'ncı",
          9: "'uncu",
          10: "'uncu",
          30: "'uncu",
          60: "'ıncı",
          90: "'ıncı"
        };
        return a.lang("tr", {
          months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
          monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
          weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
          weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
          weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd, D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[bugün saat] LT",
            nextDay: "[yarın saat] LT",
            nextWeek: "[haftaya] dddd [saat] LT",
            lastDay: "[dün] LT",
            lastWeek: "[geçen hafta] dddd [saat] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s sonra",
            past: "%s önce",
            s: "birkaç saniye",
            m: "bir dakika",
            mm: "%d dakika",
            h: "bir saat",
            hh: "%d saat",
            d: "bir gün",
            dd: "%d gün",
            M: "bir ay",
            MM: "%d ay",
            y: "bir yıl",
            yy: "%d yıl"
          },
          ordinal: function(a) {
            if (0 === a) return a + "'ıncı";
            var c = a % 10,
              d = a % 100 - c,
              e = a >= 100 ? 100 : null;
            return a + (b[c] || b[d] || b[e])
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("tzm-la", {
          months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
          monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
          weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[asdkh g] LT",
            nextDay: "[aska g] LT",
            nextWeek: "dddd [g] LT",
            lastDay: "[assant g] LT",
            lastWeek: "dddd [g] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "dadkh s yan %s",
            past: "yan %s",
            s: "imik",
            m: "minuḍ",
            mm: "%d minuḍ",
            h: "saɛa",
            hh: "%d tassaɛin",
            d: "ass",
            dd: "%d ossan",
            M: "ayowr",
            MM: "%d iyyirn",
            y: "asgas",
            yy: "%d isgasn"
          },
          week: {
            dow: 6,
            doy: 12
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("tzm", {
          months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
          monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
          weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "dddd D MMMM YYYY LT"
          },
          calendar: {
            sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
            nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
            nextWeek: "dddd [ⴴ] LT",
            lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
            lastWeek: "dddd [ⴴ] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
            past: "ⵢⴰⵏ %s",
            s: "ⵉⵎⵉⴽ",
            m: "ⵎⵉⵏⵓⴺ",
            mm: "%d ⵎⵉⵏⵓⴺ",
            h: "ⵙⴰⵄⴰ",
            hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
            d: "ⴰⵙⵙ",
            dd: "%d oⵙⵙⴰⵏ",
            M: "ⴰⵢoⵓⵔ",
            MM: "%d ⵉⵢⵢⵉⵔⵏ",
            y: "ⴰⵙⴳⴰⵙ",
            yy: "%d ⵉⵙⴳⴰⵙⵏ"
          },
          week: {
            dow: 6,
            doy: 12
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        function b(a, b) {
          var c = a.split("_");
          return 1 === b % 10 && 11 !== b % 100 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
        }

        function c(a, c, d) {
          var e = {
            mm: "хвилина_хвилини_хвилин",
            hh: "година_години_годин",
            dd: "день_дні_днів",
            MM: "місяць_місяці_місяців",
            yy: "рік_роки_років"
          };
          return "m" === d ? c ? "хвилина" : "хвилину" : "h" === d ? c ? "година" : "годину" : a + " " + b(e[d], +a)
        }

        function d(a, b) {
          var c = {
              nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"),
              accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_")
            },
            d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative";
          return c[d][a.month()]
        }

        function e(a, b) {
          var c = {
              nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
              accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
              genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
            },
            d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative";
          return c[d][a.day()]
        }

        function f(a) {
          return function() {
            return a + "о" + (11 === this.hours() ? "б" : "") + "] LT"
          }
        }
        return a.lang("uk", {
          months: d,
          monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
          weekdays: e,
          weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD.MM.YYYY",
            LL: "D MMMM YYYY р.",
            LLL: "D MMMM YYYY р., LT",
            LLLL: "dddd, D MMMM YYYY р., LT"
          },
          calendar: {
            sameDay: f("[Сьогодні "),
            nextDay: f("[Завтра "),
            lastDay: f("[Вчора "),
            nextWeek: f("[У] dddd ["),
            lastWeek: function() {
              switch (this.day()) {
                case 0:
                case 3:
                case 5:
                case 6:
                  return f("[Минулої] dddd [").call(this);
                case 1:
                case 2:
                case 4:
                  return f("[Минулого] dddd [").call(this)
              }
            },
            sameElse: "L"
          },
          relativeTime: {
            future: "за %s",
            past: "%s тому",
            s: "декілька секунд",
            m: c,
            mm: c,
            h: "годину",
            hh: c,
            d: "день",
            dd: c,
            M: "місяць",
            MM: c,
            y: "рік",
            yy: c
          },
          meridiem: function(a) {
            return 4 > a ? "ночі" : 12 > a ? "ранку" : 17 > a ? "дня" : "вечора"
          },
          ordinal: function(a, b) {
            switch (b) {
              case "M":
              case "d":
              case "DDD":
              case "w":
              case "W":
                return a + "-й";
              case "D":
                return a + "-го";
              default:
                return a
            }
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("uz", {
          months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
          monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
          weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
          weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
          weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM YYYY",
            LLL: "D MMMM YYYY LT",
            LLLL: "D MMMM YYYY, dddd LT"
          },
          calendar: {
            sameDay: "[Бугун соат] LT [да]",
            nextDay: "[Эртага] LT [да]",
            nextWeek: "dddd [куни соат] LT [да]",
            lastDay: "[Кеча соат] LT [да]",
            lastWeek: "[Утган] dddd [куни соат] LT [да]",
            sameElse: "L"
          },
          relativeTime: {
            future: "Якин %s ичида",
            past: "Бир неча %s олдин",
            s: "фурсат",
            m: "бир дакика",
            mm: "%d дакика",
            h: "бир соат",
            hh: "%d соат",
            d: "бир кун",
            dd: "%d кун",
            M: "бир ой",
            MM: "%d ой",
            y: "бир йил",
            yy: "%d йил"
          },
          week: {
            dow: 1,
            doy: 7
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("vn", {
          months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
          monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
          weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
          weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
          longDateFormat: {
            LT: "HH:mm",
            L: "DD/MM/YYYY",
            LL: "D MMMM [năm] YYYY",
            LLL: "D MMMM [năm] YYYY LT",
            LLLL: "dddd, D MMMM [năm] YYYY LT",
            l: "DD/M/YYYY",
            ll: "D MMM YYYY",
            lll: "D MMM YYYY LT",
            llll: "ddd, D MMM YYYY LT"
          },
          calendar: {
            sameDay: "[Hôm nay lúc] LT",
            nextDay: "[Ngày mai lúc] LT",
            nextWeek: "dddd [tuần tới lúc] LT",
            lastDay: "[Hôm qua lúc] LT",
            lastWeek: "dddd [tuần rồi lúc] LT",
            sameElse: "L"
          },
          relativeTime: {
            future: "%s tới",
            past: "%s trước",
            s: "vài giây",
            m: "một phút",
            mm: "%d phút",
            h: "một giờ",
            hh: "%d giờ",
            d: "một ngày",
            dd: "%d ngày",
            M: "một tháng",
            MM: "%d tháng",
            y: "một năm",
            yy: "%d năm"
          },
          ordinal: function(a) {
            return a
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("zh-cn", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "Ah点mm",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日LT",
            LLLL: "YYYY年MMMD日ddddLT",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日LT",
            llll: "YYYY年MMMD日ddddLT"
          },
          meridiem: function(a, b) {
            var c = 100 * a + b;
            return 600 > c ? "凌晨" : 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上"
          },
          calendar: {
            sameDay: function() {
              return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT"
            },
            nextDay: function() {
              return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT"
            },
            lastDay: function() {
              return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT"
            },
            nextWeek: function() {
              var b, c;
              return b = a().startOf("week"), c = this.unix() - b.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm"
            },
            lastWeek: function() {
              var b, c;
              return b = a().startOf("week"), c = this.unix() < b.unix() ? "[上]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm"
            },
            sameElse: "L"
          },
          ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";
              case "M":
                return a + "月";
              case "w":
              case "W":
                return a + "周";
              default:
                return a
            }
          },
          relativeTime: {
            future: "%s内",
            past: "%s前",
            s: "几秒",
            m: "1分钟",
            mm: "%d分钟",
            h: "1小时",
            hh: "%d小时",
            d: "1天",
            dd: "%d天",
            M: "1个月",
            MM: "%d个月",
            y: "1年",
            yy: "%d年"
          },
          week: {
            dow: 1,
            doy: 4
          }
        })
      }),
      function(a) {
        a(ba)
      }(function(a) {
        return a.lang("zh-tw", {
          months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
          monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
          weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
          weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
          weekdaysMin: "日_一_二_三_四_五_六".split("_"),
          longDateFormat: {
            LT: "Ah點mm",
            L: "YYYY年MMMD日",
            LL: "YYYY年MMMD日",
            LLL: "YYYY年MMMD日LT",
            LLLL: "YYYY年MMMD日ddddLT",
            l: "YYYY年MMMD日",
            ll: "YYYY年MMMD日",
            lll: "YYYY年MMMD日LT",
            llll: "YYYY年MMMD日ddddLT"
          },
          meridiem: function(a, b) {
            var c = 100 * a + b;
            return 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上"
          },
          calendar: {
            sameDay: "[今天]LT",
            nextDay: "[明天]LT",
            nextWeek: "[下]ddddLT",
            lastDay: "[昨天]LT",
            lastWeek: "[上]ddddLT",
            sameElse: "L"
          },
          ordinal: function(a, b) {
            switch (b) {
              case "d":
              case "D":
              case "DDD":
                return a + "日";
              case "M":
                return a + "月";
              case "w":
              case "W":
                return a + "週";
              default:
                return a
            }
          },
          relativeTime: {
            future: "%s內",
            past: "%s前",
            s: "幾秒",
            m: "一分鐘",
            mm: "%d分鐘",
            h: "一小時",
            hh: "%d小時",
            d: "一天",
            dd: "%d天",
            M: "一個月",
            MM: "%d個月",
            y: "一年",
            yy: "%d年"
          }
        })
      }), ba.lang("en"), na ? (module.exports = ba, aa(!0)) : "function" == typeof define && define.amd ? define("moment", function(b, c, d) {
        return d.config().noGlobal !== !0 && aa(d.config().noGlobal === a), ba
      }) : aa()
  }.call(this),
  function(a, b) {
    function c(a) {
      return !!("" === a || a && a.charCodeAt && a.substr)
    }

    function d(a) {
      return l ? l(a) : "[object Array]" === m.call(a)
    }

    function e(a) {
      return "[object Object]" === m.call(a)
    }

    function f(a, b) {
      var c, a = a || {},
        b = b || {};
      for (c in b) b.hasOwnProperty(c) && null == a[c] && (a[c] = b[c]);
      return a
    }

    function g(a, b, c) {
      var d, e, f = [];
      if (!a) return f;
      if (k && a.map === k) return a.map(b, c);
      for (d = 0, e = a.length; d < e; d++) f[d] = b.call(c, a[d], d, a);
      return f
    }

    function h(a, b) {
      return a = Math.round(Math.abs(a)), isNaN(a) ? b : a
    }

    function i(a) {
      var b = j.settings.currency.format;
      return "function" == typeof a && (a = a()), c(a) && a.match("%v") ? {
        pos: a,
        neg: a.replace("-", "").replace("%v", "-%v"),
        zero: a
      } : a && a.pos && a.pos.match("%v") ? a : c(b) ? j.settings.currency.format = {
        pos: b,
        neg: b.replace("%v", "-%v"),
        zero: b
      } : b
    }
    var j = {
        version: "0.3.2",
        settings: {
          currency: {
            symbol: "$",
            format: "%s%v",
            decimal: ".",
            thousand: ",",
            precision: 2,
            grouping: 3
          },
          number: {
            precision: 0,
            grouping: 3,
            thousand: ",",
            decimal: "."
          }
        }
      },
      k = Array.prototype.map,
      l = Array.isArray,
      m = Object.prototype.toString,
      n = j.unformat = j.parse = function(a, b) {
        if (d(a)) return g(a, function(a) {
          return n(a, b)
        });
        if (a = a || 0, "number" == typeof a) return a;
        var b = b || ".",
          c = RegExp("[^0-9-" + b + "]", ["g"]),
          c = parseFloat(("" + a).replace(/\((.*)\)/, "-$1").replace(c, "").replace(b, "."));
        return isNaN(c) ? 0 : c
      },
      o = j.toFixed = function(a, b) {
        var b = h(b, j.settings.number.precision),
          c = Math.pow(10, b);
        return (Math.round(j.unformat(a) * c) / c).toFixed(b)
      },
      p = j.formatNumber = function(a, b, c, i) {
        if (d(a)) return g(a, function(a) {
          return p(a, b, c, i)
        });
        var a = n(a),
          k = f(e(b) ? b : {
            precision: b,
            thousand: c,
            decimal: i
          }, j.settings.number),
          l = h(k.precision),
          m = 0 > a ? "-" : "",
          q = parseInt(o(Math.abs(a || 0), l), 10) + "",
          r = 3 < q.length ? q.length % 3 : 0;
        return m + (r ? q.substr(0, r) + k.thousand : "") + q.substr(r).replace(/(\d{3})(?=\d)/g, "$1" + k.thousand) + (l ? k.decimal + o(Math.abs(a), l).split(".")[1] : "")
      },
      q = j.formatMoney = function(a, b, c, k, l, m) {
        if (d(a)) return g(a, function(a) {
          return q(a, b, c, k, l, m)
        });
        var a = n(a),
          o = f(e(b) ? b : {
            symbol: b,
            precision: c,
            thousand: k,
            decimal: l,
            format: m
          }, j.settings.currency),
          r = i(o.format);
        return (0 < a ? r.pos : 0 > a ? r.neg : r.zero).replace("%s", o.symbol).replace("%v", p(Math.abs(a), h(o.precision), o.thousand, o.decimal))
      };
    j.formatColumn = function(a, b, k, l, m, o) {
      if (!a) return [];
      var q = f(e(b) ? b : {
          symbol: b,
          precision: k,
          thousand: l,
          decimal: m,
          format: o
        }, j.settings.currency),
        r = i(q.format),
        s = r.pos.indexOf("%s") < r.pos.indexOf("%v"),
        t = 0,
        a = g(a, function(a) {
          return d(a) ? j.formatColumn(a, q) : (a = n(a), a = (0 < a ? r.pos : 0 > a ? r.neg : r.zero).replace("%s", q.symbol).replace("%v", p(Math.abs(a), h(q.precision), q.thousand, q.decimal)), a.length > t && (t = a.length), a)
        });
      return g(a, function(a) {
        return c(a) && a.length < t ? s ? a.replace(q.symbol, q.symbol + Array(t - a.length + 1).join(" ")) : Array(t - a.length + 1).join(" ") + a : a
      })
    }, "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports.accounting = j) : "function" == typeof define && define.amd ? define([], function() {
      return j
    }) : (j.noConflict = function(c) {
      return function() {
        return a.accounting = c, j.noConflict = b, j
      }
    }(a.accounting), a.accounting = j)
  }(this), jQuery.fn.extend({
    number_format: function(a, b) {
      var c = {
          numberOfDecimals: 2,
          decimalSeparator: ",",
          thousandSeparator: ".",
          symbol: ""
        },
        d = jQuery.extend(c, b),
        e = a,
        f = d.numberOfDecimals,
        g = d.decimalSeparator,
        h = d.thousandSeparator,
        j = d.symbol,
        k = "",
        l = e.toString(),
        m = l.indexOf("e");
      if (m > -1 && (k = l.substring(m), e = parseFloat(l.substring(0, m))), null != f) {
        var n = Math.pow(10, f);
        e = Math.round(e * n) / n
      }
      var o = e < 0 ? "-" : "",
        p = (e > 0 ? Math.floor(e) : Math.abs(Math.ceil(e))).toString(),
        q = e.toString().substring(p.length + o.length);
      if (g = null != g ? g : ".", q = null != f && f > 0 || q.length > 1 ? g + q.substring(1) : "", null != f && f > 0)
        for (i = q.length - 1, z = f; i < z; ++i) q += "0";
      if (h = h != g || 0 == q.length ? h : null, null != h && "" != h)
        for (i = p.length - 3; i > 0; i -= 3) p = p.substring(0, i) + h + p.substring(i);
      return "" == d.symbol ? o + p + q + k : j + " " + o + p + q + k
    }
  }), $(function() {
    "use strict";
    $.support.cors = !0, cision.websolution && (cision.websolution.cisionHandler = $("html").data("cision-url"), cision.uilanguage = ("en" === $("html").attr("lang"), $("html").attr("lang")), $("#cision-insiders-listing").length && cision.websolution.insiders.render({
      accessKey: "0C9AD8114C9E427D8709F3AD693D62EC",
      uiLanguage: cision.uilanguage,
      startDate: moment().subtract("years", 1).format("YYYY-MM-DD")
    }), $("#cision-insider-details").length && cision.websolution.insiders.renderDetails({
      accessKey: "0C9AD8114C9E427D8709F3AD693D62EC",
      uiLanguage: cision.uilanguage,
      insiderName: queryObj().insiderName,
      startDate: moment().subtract("years", 1).format("YYYY-MM-DD")
    }), $("#estimate-annual").length && cision.websolution.estimate.annual.render({
      accessKey: "ADB9BA0873B04695B2D964FC95D89A12",
      uiLanguage: cision.uilanguage,
      periodStart: (moment().year() - 2).toString(),
      periodEnd: moment().year() + 1
    }), $("#estimate-quarterly").length && cision.websolution.estimate.quarterly.render({
      accessKey: "ADB9BA0873B04695B2D964FC95D89A12",
      uiLanguage: cision.uilanguage,
      periodStart: (moment().year() - 1).toString() + "-Q3",
      periodEnd: moment().year() + 1 + "-Q4"
    }), $("#target-estimate-historical").length && cision.websolution.estimate.historical.render({
      accessKey: "ADB9BA0873B04695B2D964FC95D89A12",
      uiLanguage: cision.uilanguage,
      chartTitle: "SALES, MSEK",
      valuePrefix: "",
      valueSuffix: " MSEK",
      dateFormatTooltip: "llll"
    }), $("#template-share-information").length && cision.websolution.estimate.recommendations.renderTicker({
      accesskeyTicker: "F2E063DEE79D46FA9114B158607A909B",
      uiLanguage: cision.uilanguage,
      dateFormat: "llll"
    }), $("#template-recommendations-history-table").length && cision.websolution.estimate.recommendations.renderHistory({
      accesskey: "ADB9BA0873B04695B2D964FC95D89A12",
      uiLanguage: cision.uilanguage,
      startDate: moment().subtract("months", 6).format("YYYY-MM-DD")
    }), $("#tplCurrentRecommendationDistribution").length && cision.websolution.estimate.recommendations.renderCurrent({
      accesskey: "ADB9BA0873B04695B2D964FC95D89A12",
      uiLanguage: cision.uilanguage,
      dateFormat: "llll"
    }), $("#target-estimate-historical .historical-tab").on("click", function(a) {
      a.preventDefault();
      var b = $(this).attr("id"),
        c = "",
        d = "",
        e = "";
      switch (b) {
        case "SALES":
          e = "SALES, MSEK", d = " MT";
          break;
        case "EBIT":
          e = "EBIT, MSEK", d = " MSEK";
          break;
        case "DPS":
          e = "DPS, SEK", d = " SEK";
          break;
        case "EPS":
          e = "EPS, SEK", d = " SEK"
      }
      cision.websolution.estimate.historical.render({
        field: b,
        chartTitle: e,
        valuePrefix: c,
        valueSuffix: d
      }), $("#target-estimate-historical .historical-tab").removeClass("active"), $(this).addClass("active")
    }))
  });
var cision = cision || {};
cision.websolution = cision.websolution || {}, cision.websolution.smallticker = function(a) {
  function b(b, c) {
    for (var d, e = b.Instruments[0], f = "2010-02-01T00:00:00.000000Z", g = 0; g < e.Quotes.length; g++) {
      var h = e.Quotes[0];
      h.QuoteTime >= f && (d = h), f = h.QuoteTime
    }
    var i = a.extend({}, d);
    i.TickerName = e.TickerName, i.TickerSymbol = e.TickerSymbol, i.Delta > 0 ? i.ArrowImageurl = c.tickerImagePlus : i.Delta < 0 ? i.ArrowImageurl = c.tickerImageMinus : i.ArrowImageurl = c.tickerImageUnchanged;
    var j = moment(i.QuoteTime);
    i.lastDate = j.format("YYYY-MM-DD"), i.lastTime = j.format("HH:mm Z");
    var k = a.extend({}, i),
      l = a("#ticker-small").render(k);
    a("#cision-target").addClass("rendered").html(l)
  }
  var c = function(c) {
    var d = {
      isTest: !1,
      accesskey: "",
      serviceEndpoint: "",
      uiLanguage: "en",
      tickerImageMinus: "/gui/i/delta-down.png",
      tickerImagePlus: "/gui/i/delta-up.png",
      tickerImageUnchanged: "/gui/i/delta-unchanged.png"
    };
    c && a.extend(d, c), d.accessKey && (d.isTest ? d.serviceEndpoint = "http://publish.test.ne.cision.com/papi/Ticker/" : d.serviceEndpoint = "http://publish.ne.cision.com/papi/Ticker/", a.ajax({
      url: cision.websolution.cisionHandler + "?url=" + d.serviceEndpoint + d.accessKey,
      type: "GET",
      dataType: "json",
      data: {
        startDate: "2012-01-02"
      }
    }).done(function(a) {
      b(a, d)
    }).fail(function(a, b, c) {}).always(function() {}))
  };
  return {
    render: c
  }
}(jQuery);
var cision = cision || {};
cision.websolution = cision.websolution || {}, cision.websolution.insiders = function(a) {
  function b(a) {
    var b = a;
    return b = b.split(", "), b[1] && (b = b[0].charAt(0).toUpperCase() + b[0].substr(1).toLowerCase() + " " + b[1].charAt(0).toUpperCase() + b[1].substr(1).toLowerCase()), b
  }
  var c = {
      accesskey: "",
      serviceEndpoint: "http://publish.ne.cision.com/papi/InsiderTrade/",
      uiLanguage: "en",
      startDate: moment().subtract("years", 1).format("YYYY-MM-DD"),
      endDate: moment().format("YYYY-MM-DD"),
      dateFormat: "D MMM YYYY"
    },
    d = function(d) {
      d && a.extend(c, d), c.accessKey && a.ajax({
        url: cision.websolution.cisionHandler,
        type: "GET",
        dataType: "json",
        data: {
          url: c.serviceEndpoint + c.accessKey,
          startDate: c.startDate,
          endDate: c.endDate
        }
      }).done(function(d) {
        a.each(d.Transactions, function(a, e) {
          e.TransactionDateFormatted = moment(e.TransactionDate).format(c.dateFormat), e.DetailsLink = d.DetailsLink + e.InsiderName, e.DetailsLink2 = c.serviceEndpoint + c.accessKey + "/Details?insiderName=" + e.InsiderName + "&startDate=" + c.startDate + "&endDate=" + c.endDate, e.InsiderNameConverted = b(e.InsiderName).toString()
        });
        var e = a.extend(d),
          f = a("#cision-insiders-listing").render(e);
        a("#cision-insiders-target").html(f), a("table", a("#cision-insiders-target")).tablefunctions().tablescroll()
      }).fail(function() {}).always(function() {})
    },
    e = function(d) {
      d && a.extend(c, d), c.accessKey && a.ajax({
        url: cision.websolution.cisionHandler,
        type: "GET",
        dataType: "json",
        data: {
          url: c.serviceEndpoint + c.accessKey + "/Details",
          insiderName: d.insiderName,
          startDate: c.startDate,
          endDate: c.endDate
        }
      }).done(function(d) {
        a.each(d.Transactions, function(a, d) {
          d.TransactionDateFormatted = moment(d.TransactionDate).format(c.dateFormat), d.InsiderNameConverted = b(d.InsiderName).toString()
        });
        var e = a.extend(d),
          f = a("#cision-insider-details").render(e);
        a("#target-details").html(f)
      }).fail(function() {}).always(function() {})
    };
  return {
    render: d,
    renderDetails: e,
    settings: c
  }
}(jQuery);
var cision = cision || {};
cision.websolution = cision.websolution || {}, cision.websolution.estimate = cision.websolution.estimate || {}, cision.websolution.estimate.annual = function(a) {
  function b(b) {
    var d = {};
    a.each(b, function(a, b) {
      "actual" == b.Type.toLowerCase() && (d[b.Period] = b.Type)
    }), c.periodStart = c.periodStart.toString(), c.periodEnd = c.periodEnd.toString();
    var e = {};
    a.each(b, function(a, b) {
      if (b.Period < c.periodStart || b.Period > c.periodEnd) return !0;
      var f = "estimate" == b.Type.toLowerCase();
      if (c.hideEstimateIfActualExists && f && d.hasOwnProperty(b.Period)) return !0;
      var g = b.Period + "-" + b.Type.toLowerCase(),
        h = b.Period + (f ? c.suffixEstimate : c.suffixActual);
      return e.hasOwnProperty(g) || (e[g] = {
        Name: g,
        Header: h,
        Period: b.Period,
        IsEstimate: f
      }), "DPS" !== b.Field && "EPS" !== b.Field || (b.Average = b.Average.toFixed(2)), "EBIT" !== b.Field && "Sales" !== b.Field || (b.Average = accounting.formatNumber(b.Average, 0, ",")), e[g][b.Field] = b.Average, f && (e[g][b.Field + "_Count"] = b.Count || 0), !0
    });
    var f = a.map(e, function(a) {
      return a
    });
    return f
  }
  var c = {
      accesskey: "",
      serviceEndpoint: "http://publish.ne.cision.com/papi/Estimate/",
      uiLanguage: "en",
      suffixEstimate: " FC",
      suffixActual: "",
      fields: {
        sales: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        volumes: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        ebit: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        ebitda: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        eps: {
          th_sep: ",",
          dec_sep: ".",
          precision: 2
        },
        dps: {
          th_sep: ",",
          dec_sep: ".",
          precision: 2
        }
      },
      periodStart: "0000",
      periodEnd: "9999",
      hideEstimateIfActualExists: !0
    },
    d = function(d) {
      d && a.extend(c, d), c.accessKey && a.ajax({
        url: cision.websolution.cisionHandler + "?url=" + c.serviceEndpoint + c.accessKey,
        type: "GET",
        dataType: "json"
      }).done(function(c) {
        var d = b(c.AnnualKeyFigures),
          e = a.extend({
            PeriodList: d
          }),
          f = a("#estimate-annual").render(e);
        a("#target-estimate-annual").html(f), a("table", a("#target-estimate-annual")).tablefunctions().tablescroll()
      }).fail(function() {}).always(function() {})
    };
  return {
    render: d
  }
}(jQuery);
var cision = cision || {};
cision.websolution = cision.websolution || {}, cision.websolution.estimate = cision.websolution.estimate || {}, cision.websolution.estimate.quarterly = function(a) {
  function b(b) {
    var d = {};
    a.each(b, function(a, b) {
      "actual" == b.Type.toLowerCase() && (d[b.Period] = b.Type)
    }), c.periodStart = c.periodStart.toString(), c.periodEnd = c.periodEnd.toString();
    var e = {};
    a.each(b, function(a, b) {
      if (b.Period < c.periodStart || b.Period > c.periodEnd) return !0;
      var f = "estimate" == b.Type.toLowerCase();
      if (c.hideEstimateIfActualExists && f && d.hasOwnProperty(b.Period)) return !0;
      var g = b.Period + "-" + b.Type.toLowerCase(),
        h = b.Period + (f ? c.suffixEstimate : c.suffixActual);
      return e.hasOwnProperty(g) || (e[g] = {
        Name: g,
        Header: h,
        Period: b.Period,
        IsEstimate: f
      }), "EPS" === b.Field && (b.Average = b.Average.toFixed(2)), "EBIT" !== b.Field && "Sales" !== b.Field || (b.Average = accounting.formatNumber(b.Average, 0, ",")), e[g][b.Field] = b.Average, f && (e[g][b.Field + "_Count"] = b.Count || 0), !0
    });
    var f = a.map(e, function(a) {
      return a
    });
    return f
  }
  var c = {
      accesskey: "",
      serviceEndpoint: "http://publish.ne.cision.com/papi/Estimate/",
      uiLanguage: "en",
      suffixEstimate: " FC",
      suffixActual: "",
      fields: {
        sales: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        volumes: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        ebit: {
          th_sep: ",",
          dec_sep: ".",
          precision: 0
        },
        eps: {
          th_sep: ",",
          dec_sep: ".",
          precision: 2
        },
        dps: {
          th_sep: ",",
          dec_sep: ".",
          precision: 2
        }
      },
      hideEstimateIfActualExists: !0,
      periodStart: "0000-Q1",
      periodEnd: "9999-Q4"
    },
    d = function(d) {
      d && a.extend(c, d), c.accessKey && a.ajax({
        url: cision.websolution.cisionHandler + "?url=" + c.serviceEndpoint + c.accessKey + "/Quarterly",
        type: "GET",
        dataType: "json"
      }).done(function(c) {
        var d = b(c.QuarterlyKeyFigures),
          e = {
            PeriodList: d
          },
          f = a("#estimate-quarterly").render(e);
        a("#target-estimate-quarterly").html(f), a("table", a("#target-estimate-quarterly")).tablefunctions().tablescroll()
      }).fail(function() {}).always(function() {})
    };
  return {
    render: d
  }
}(jQuery);
var cision = cision || {};
cision.websolution = cision.websolution || {}, cision.websolution.estimate = cision.websolution.estimate || {}, cision.websolution.estimate.historical = function(a) {
  function b(b) {
    var c = b.HistoricalKeyFigures,
      d = {};
    return a.each(c, function(a, b) {
      if (b.Period < g.periodStart || b.Period > g.periodEnd) return !0;
      var c = "estimate" == b.Type.toLowerCase(),
        e = b.Period + "_y" + (c ? "" : "_actual");
      return d.hasOwnProperty(e) || (d[e] = {
        id: e,
        name: b.Period,
        type: "line",
        data: []
      }), d[e].data.push([moment(b.Date).valueOf(), b.Average]), !0
    }), a.map(d, function(a) {
      return a
    })
  }

  function c(a) {
    var b = {
        labels: {
          formatter: function() {
            return moment(this.value).format(g.dateFormat)
          }
        },
        tickPixelInterval: 150
      },
      c = {
        labels: {
          formatter: function() {
            return d(this.value.toString())
          }
        },
        title: {
          text: "",
          margin: 0
        }
      },
      f = {
        formatter: function() {
          var a;
          return a = "line" === this.series.type ? g.tooltipHeaderEstimate : g.tooltipHeaderReal, '<span style="text-align:center;font-size:130%;"> ' + a + this.series.name + "</span><br/>" + g.tooltipDateLabel + moment(this.x).format(g.dateFormatTooltip) + "<br/>" + g.tooltipAmountLabel + g.valuePrefix + d(this.y) + g.valueSuffix
        }
      },
      h = {
        line: {
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 3
            }
          },
          marker: {
            enabled: !1,
            states: {
              hover: {
                enabled: !0,
                symbol: "circle",
                radius: 4,
                lineWidth: 1
              }
            }
          }
        }
      },
      i = {
        enabled: !0,
        borderColor: "#DBDBDB",
        margin: 20,
        labelFormatter: function() {
          var a;
          return a = "line" === this.type ? g.tooltipHeaderEstimate : g.tooltipHeaderReal, a + this.name
        }
      };
    return e = new Highcharts.Chart({
      chart: {
        renderTo: "historicalDataContainer",
        defaultSeriesType: "line"
      },
      series: a,
      colors: ["#008000", "#0078C3", "#A1C211", "#000080", "#FFFF00", "#FF80FF"],
      xAxis: b,
      yAxis: c,
      tooltip: f,
      plotOptions: h,
      legend: i,
      credits: {
        enabled: !1
      },
      title: {
        text: g.chartTitle,
        margin: 30
      }
    })
  }

  function d(b) {
    var c;
    switch (g.uiLanguage.toUpperCase()) {
      case "EN":
        c = a().number_format(b, {
          numberOfDecimals: 2,
          decimalSeparator: ".",
          thousandSeparator: ","
        });
        break;
      case "SV":
        c = a().number_format(b, {
          numberOfDecimals: 2,
          decimalSeparator: ",",
          thousandSeparator: " "
        });
        break;
      default:
        c = a().number_format(b, {
          numberOfDecimals: 2,
          decimalSeparator: ",",
          thousandSeparator: " "
        })
    }
    return c
  }
  var e, f, g = {
      accesskey: "",
      serviceEndpoint: "http://publish.ne.cision.com/papi/Estimate/",
      uiLanguage: "en",
      periodStart: "0000",
      periodEnd: "9999",
      field: "SALES",
      chartTitle: "SALES, MSEK",
      valuePrefix: "",
      valueSuffix: " SEK",
      dateFormatTooltip: "Do MMMM YYYY",
      dateFormat: "D MMM YYYY",
      unit: "",
      quantum: "",
      tooltipHeaderEstimate: "Estimate - ",
      tooltipHeaderReal: "Actual - ",
      tooltipDateLabel: "",
      tooltipAmountLabel: ""
    },
    h = function(c) {
      c && a.extend(g, c), g.accessKey && a.ajax({
        url: cision.websolution.cisionHandler,
        type: "GET",
        dataType: "json",
        data: {
          url: g.serviceEndpoint + g.accessKey + "/Historical",
          field: g.field
        }
      }).done(function(c) {
        f = b(c), a("#target-estimate-historical").trigger("chart.create")
      }).fail(function() {}).always(function() {})
    };
  return a("#target-estimate-historical").bind("chart.create", function() {
    c(f)
  }), {
    render: h
  }
}(jQuery);
var cision = cision || {};
cision.websolution = cision.websolution || {}, cision.websolution.estimate = cision.websolution.estimate || {}, cision.websolution.estimate.recommendations = function(a) {
    function b(b) {
      var d = {},
        e = {},
        f = b.BuyRecomendations.concat(b.HoldRecomendations, b.SellRecomendations);
      return a.each(f, function(a, b) {
        if (b.Date < c.startDate || b.Date > c.endDate) return !0;
        var f = b.Date.substr(0, 7);
        b.key = b.Aspect + b.Type;
        var g = "";
        switch (b.key) {
          case "BuyStrong":
            g = "StrongBuy";
            break;
          case "BuyNeutral":
            g = "Buy";
            break;
          case "HoldNeutral":
            g = "Hold";
            break;
          case "SellNeutral":
            g = "Sell";
            break;
          case "SellStrong":
            g = "StrongSell"
        }
        d.hasOwnProperty(f) || (d[f] = {
          Date: b.Date,
          Month: f,
          MonthName: moment(b.Date).format("MMM"),
          StrongBuy: 0,
          Buy: 0,
          Hold: 0,
          Sell: 0,
          StrongSell: 0,
          Mean: 0
        }), d[f][g] = b.Count;
        var h = d[f];
        h.TotalCount = h.StrongBuy + h.Buy + h.Hold + h.Sell + h.StrongSell;
        var i = h.StrongBuy / h.TotalCount * 5 + h.Buy / h.TotalCount * 4 + h.Hold / h.TotalCount * 3 + h.Sell / h.TotalCount * 2 + h.StrongSell / h.TotalCount * 1;
        return d[f].Mean = i.toFixed(4), e.hasOwnProperty(f) || (e[f] = []), e[f].push(b), !0
      }), d
    }
    var c = {
        accesskey: "",
        accesskeyTicker: "",
        serviceEndpoint: "http://publish.ne.cision.com/papi/Estimate/",
        uiLanguage: "en",
        startDate: "1900-01-01",
        endDate: "2050-12-31",
        field: "SALES",
        chartTitle: "SALES, MSEK",
        valuePrefix: "",
        valueSuffix: " SEK",
        dateFormatTooltip: "Do MMMM YYYY",
        dateFormat: "D MMM YYYY",
        unit: "",
        quantum: "",
        tooltipHeaderEstimate: "Estimate - ",
        tooltipHeaderReal: "Actual - ",
        tooltipDateLabel: "",
        tooltipAmountLabel: ""
      },
      d = function(d) {
        return d && a.extend(c, d), c.accesskey ? void a.ajax({
          url: cision.websolution.cisionHandler,
          type: "GET",
          dataType: "json",
          data: {
            url: c.serviceEndpoint + c.accesskey + "/RecommendationsHistorical",
            startDate: c.startDate,
            field: c.field
          }
        }).done(function(c) {
          var d = b(c);
          d.Months = a.map(d, function(a, b) {
            return a.Month = b, a
          });
          var e = a.extend({}, d),
            f = a("#template-recommendations-history-table").render(e);
          a("#historic-recommendation").html(f), a("table", a("#historic-recommendation")).tablefunctions().tablescroll()
        }).fail(function() {}).always(function() {}) : void alert("You must provider your Estimates access key.")
      },
      e = function(b) {
        b && a.extend(c, b), c.accesskey && a.ajax({
          url: cision.websolution.cisionHandler,
          type: "GET",
          dataType: "json",
          data: {
            url: c.serviceEndpoint + c.accesskey + "/Recommendations"
          }
        }).done(function(b) {
          for (var d = "2000-01-01", e = 0; e < b.Recomendations.length; e++) {
            var f = b.Recomendations[e];
            f.Date >= d && (b.LastDate = f.Date, b.LastDateFormatted = moment(f.Date).format(c.dateFormat)), d = f.Date
          }
          b.StrongBuyDistribution = Math.round(100 * b.StrongBuy / b.TotalCount), b.BuyDistribution = Math.round(100 * b.Buy / b.TotalCount), b.HoldDistribution = Math.round(100 * b.Hold / b.TotalCount), b.SellDistribution = Math.round(100 * b.Sell / b.TotalCount), b.StrongSellDistribution = Math.round(100 * b.StrongSell / b.TotalCount), b.Mean = b.StrongBuy / b.TotalCount * 5 + b.Buy / b.TotalCount * 4 + b.Hold / b.TotalCount * 3 + b.Sell / b.TotalCount * 2 + b.StrongSell / b.TotalCount * 1, b.MeanDistribution = Math.round(100 * b.Mean / 5), b.MeanDistribution = b.MeanDistribution > 99 ? 99 : b.MeanDistribution, b.MeanDistribution = b.MeanDistribution < 1 ? 1 : b.MeanDistribution;
          var g = a.extend({}, b),
            h = a("#tplCurrentRecommendationDistribution").render(g);
          a("#current-recommendation-distribution").html(h)
        }).fail(function() {})
      },
      f = function(b) {
        b && a.extend(c, b), c.accesskeyTicker && a.ajax({
          url: cision.websolution.cisionHandler,
          type: "GET",
          dataType: "json",
          data: {
            url: c.serviceEndpoint.replace("Estimate", "Ticker") + c.accesskeyTicker
          }
        }).done(function(b) {
          var d = b.Instruments[0];
          d.LatestQuote = {};
          for (var e = "2000-01-01", f = 0; f < d.Quotes.length; f++) {
            var g = d.Quotes[f];
            g.QuoteTime >= e && (g.QuoteTimeFormatted = moment(g.QuoteTime).format(c.dateFormat), d.LatestQuote = g), e = g.QuoteTime;
          }
          var h = a.extend({}, d),
            i = a("#template-share-information").render(h);
          a("#share-information").html(i)
        }).fail(function() {})
      };
    return {
      renderCurrent: e,
      renderHistory: d,
      renderTicker: f
    }
  }(jQuery),
  function(a, b) {
    var c = a.document,
      d = c.documentElement,
      e = "overthrow-enabled",
      f = "ontouchmove" in c,
      g = "WebkitOverflowScrolling" in d.style || "msOverflowStyle" in d.style || !f && a.screen.width > 800 || function() {
        var b = a.navigator.userAgent,
          c = b.match(/AppleWebKit\/([0-9]+)/),
          d = c && c[1],
          e = c && d >= 534;
        return b.match(/Android ([0-9]+)/) && RegExp.$1 >= 3 && e || b.match(/ Version\/([0-9]+)/) && RegExp.$1 >= 0 && a.blackberry && e || b.indexOf("PlayBook") > -1 && e && !b.indexOf("Android 2") === -1 || b.match(/Firefox\/([0-9]+)/) && RegExp.$1 >= 4 || b.match(/wOSBrowser\/([0-9]+)/) && RegExp.$1 >= 233 && e || b.match(/NokiaBrowser\/([0-9\.]+)/) && 7.3 === parseFloat(RegExp.$1) && c && d >= 533
      }();
    a.overthrow = {}, a.overthrow.enabledClassName = e, a.overthrow.addClass = function() {
      d.className.indexOf(a.overthrow.enabledClassName) === -1 && (d.className += " " + a.overthrow.enabledClassName)
    }, a.overthrow.removeClass = function() {
      d.className = d.className.replace(a.overthrow.enabledClassName, "")
    }, a.overthrow.set = function() {
      g && a.overthrow.addClass()
    }, a.overthrow.canBeFilledWithPoly = f, a.overthrow.forget = function() {
      a.overthrow.removeClass()
    }, a.overthrow.support = g ? "native" : "none"
  }(this),
  function(a, b) {
    a.overthrow.set()
  }(this),
  function(a, b, c) {
    if (b !== c) {
      b.scrollIndicatorClassName = "overthrow";
      var d = a.document,
        e = d.documentElement,
        f = "native" === b.support,
        g = b.canBeFilledWithPoly,
        h = (b.configure, b.set),
        i = b.forget,
        j = b.scrollIndicatorClassName;
      b.closest = function(a, c) {
        return !c && a.className && a.className.indexOf(j) > -1 && a || b.closest(a.parentNode)
      };
      var k = !1;
      b.set = function() {
        if (h(), !k && !f && g) {
          a.overthrow.addClass(), k = !0, b.support = "polyfilled", b.forget = function() {
            i(), k = !1, d.removeEventListener && d.removeEventListener("touchstart", u, !1)
          };
          var j, l, m, n, o = [],
            p = [],
            q = function() {
              o = [], l = null
            },
            r = function() {
              p = [], m = null
            },
            s = function(a) {
              n = j.querySelectorAll("textarea, input");
              for (var b = 0, c = n.length; b < c; b++) n[b].style.pointerEvents = a
            },
            t = function(a, b) {
              if (d.createEvent) {
                var e, f = (!b || b === c) && j.parentNode || j.touchchild || j;
                f !== j && (e = d.createEvent("HTMLEvents"), e.initEvent("touchend", !0, !0), j.dispatchEvent(e), f.touchchild = j, j = f, f.dispatchEvent(a))
              }
            },
            u = function(a) {
              if (b.intercept && b.intercept(), q(), r(), j = b.closest(a.target), j && j !== e && !(a.touches.length > 1)) {
                s("none");
                var c = a,
                  d = j.scrollTop,
                  f = j.scrollLeft,
                  g = j.offsetHeight,
                  h = j.offsetWidth,
                  i = a.touches[0].pageY,
                  k = a.touches[0].pageX,
                  n = j.scrollHeight,
                  u = j.scrollWidth,
                  v = function(a) {
                    var b = d + i - a.touches[0].pageY,
                      e = f + k - a.touches[0].pageX,
                      s = b >= (o.length ? o[0] : 0),
                      v = e >= (p.length ? p[0] : 0);
                    b > 0 && b < n - g || e > 0 && e < u - h ? a.preventDefault() : t(c), l && s !== l && q(), m && v !== m && r(), l = s, m = v, j.scrollTop = b, j.scrollLeft = e, o.unshift(b), p.unshift(e), o.length > 3 && o.pop(), p.length > 3 && p.pop()
                  },
                  w = function(a) {
                    s("auto"), setTimeout(function() {
                      s("none")
                    }, 450), j.removeEventListener("touchmove", v, !1), j.removeEventListener("touchend", w, !1)
                  };
                j.addEventListener("touchmove", v, !1), j.addEventListener("touchend", w, !1)
              }
            };
          d.addEventListener("touchstart", u, !1)
        }
      }
    }
  }(this, this.overthrow),
  function(a, b, c) {
    if (b !== c) {
      b.easing = function(a, b, c, d) {
        return c * ((a = a / d - 1) * a * a + 1) + b
      }, b.tossing = !1;
      var d;
      b.toss = function(a, e) {
        b.intercept();
        var f, g, h = 0,
          i = a.scrollLeft,
          j = a.scrollTop,
          k = {
            top: "+0",
            left: "+0",
            duration: 50,
            easing: b.easing,
            finished: function() {}
          },
          l = !1;
        if (e)
          for (var m in k) e[m] !== c && (k[m] = e[m]);
        return "string" == typeof k.left ? (k.left = parseFloat(k.left), f = k.left + i) : (f = k.left, k.left = k.left - i), "string" == typeof k.top ? (k.top = parseFloat(k.top), g = k.top + j) : (g = k.top, k.top = k.top - j), b.tossing = !0, d = setInterval(function() {
          h++ < k.duration ? (a.scrollLeft = k.easing(h, i, k.left, k.duration), a.scrollTop = k.easing(h, j, k.top, k.duration)) : (f !== a.scrollLeft ? a.scrollLeft = f : (l && k.finished(), l = !0), g !== a.scrollTop ? a.scrollTop = g : (l && k.finished(), l = !0), b.intercept())
        }, 1), {
          top: g,
          left: f,
          duration: b.duration,
          easing: b.easing
        }
      }, b.intercept = function() {
        clearInterval(d), b.tossing = !1
      }
    }
  }(this, this.overthrow),
  function(a) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
  }(function(a) {
    "use strict";

    function b() {
      var a = document.createElement("input");
      return a.setAttribute("type", "range"), "text" !== a.type
    }

    function c(a, b) {
      var c = Array.prototype.slice.call(arguments, 2);
      return setTimeout(function() {
        return a.apply(null, c)
      }, b)
    }

    function d(a, b) {
      return b = b || 100,
        function() {
          if (!a.debouncing) {
            var c = Array.prototype.slice.apply(arguments);
            a.lastReturnVal = a.apply(window, c), a.debouncing = !0
          }
          return clearTimeout(a.debounceTimeout), a.debounceTimeout = setTimeout(function() {
            a.debouncing = !1
          }, b), a.lastReturnVal
        }
    }

    function e(a) {
      return a && (0 === a.offsetWidth || 0 === a.offsetHeight || a.open === !1)
    }

    function f(a) {
      for (var b = [], c = a.parentNode; e(c);) b.push(c), c = c.parentNode;
      return b
    }

    function g(a, b) {
      function c(a) {
        "undefined" != typeof a.open && (a.open = !a.open)
      }
      var d = f(a),
        e = d.length,
        g = [],
        h = a[b];
      if (e) {
        for (var i = 0; i < e; i++) g[i] = d[i].style.cssText, d[i].style.setProperty ? d[i].style.setProperty("display", "block", "important") : d[i].style.cssText += ";display: block !important", d[i].style.height = "0", d[i].style.overflow = "hidden", d[i].style.visibility = "hidden", c(d[i]);
        h = a[b];
        for (var j = 0; j < e; j++) d[j].style.cssText = g[j], c(d[j])
      }
      return h
    }

    function h(a, b) {
      var c = parseFloat(a);
      return Number.isNaN(c) ? b : c
    }

    function i(a) {
      return a.charAt(0).toUpperCase() + a.substr(1)
    }

    function j(b, e) {
      if (this.$window = a(window), this.$document = a(document), this.$element = a(b), this.options = a.extend({}, n, e), this.polyfill = this.options.polyfill, this.orientation = this.$element[0].getAttribute("data-orientation") || this.options.orientation, this.onInit = this.options.onInit, this.onSlide = this.options.onSlide, this.onSlideEnd = this.options.onSlideEnd, this.DIMENSION = o.orientation[this.orientation].dimension, this.DIRECTION = o.orientation[this.orientation].direction, this.DIRECTION_STYLE = o.orientation[this.orientation].directionStyle, this.COORDINATE = o.orientation[this.orientation].coordinate, this.polyfill && m) return !1;
      this.identifier = "js-" + k + "-" + l++, this.startEvent = this.options.startEvent.join("." + this.identifier + " ") + "." + this.identifier, this.moveEvent = this.options.moveEvent.join("." + this.identifier + " ") + "." + this.identifier, this.endEvent = this.options.endEvent.join("." + this.identifier + " ") + "." + this.identifier, this.toFixed = (this.step + "").replace(".", "").length - 1, this.$fill = a('<div class="' + this.options.fillClass + '" />'), this.$handle = a('<div class="' + this.options.handleClass + '" />'), this.$range = a('<div class="' + this.options.rangeClass + " " + this.options[this.orientation + "Class"] + '" id="' + this.identifier + '" />').insertAfter(this.$element).prepend(this.$fill, this.$handle), this.$element.css({
        position: "absolute",
        width: "1px",
        height: "1px",
        overflow: "hidden",
        opacity: "0"
      }), this.handleDown = a.proxy(this.handleDown, this), this.handleMove = a.proxy(this.handleMove, this), this.handleEnd = a.proxy(this.handleEnd, this), this.init();
      var f = this;
      this.$window.on("resize." + this.identifier, d(function() {
        c(function() {
          f.update(!1, !1)
        }, 300)
      }, 20)), this.$document.on(this.startEvent, "#" + this.identifier + ":not(." + this.options.disabledClass + ")", this.handleDown), this.$element.on("change." + this.identifier, function(a, b) {
        if (!b || b.origin !== f.identifier) {
          var c = a.target.value,
            d = f.getPositionFromValue(c);
          f.setPosition(d)
        }
      })
    }
    Number.isNaN = Number.isNaN || function(a) {
      return "number" == typeof a && a !== a
    };
    var k = "rangeslider",
      l = 0,
      m = b(),
      n = {
        polyfill: !0,
        orientation: "horizontal",
        rangeClass: "rangeslider",
        disabledClass: "rangeslider--disabled",
        horizontalClass: "rangeslider--horizontal",
        verticalClass: "rangeslider--vertical",
        fillClass: "rangeslider__fill",
        handleClass: "rangeslider__handle",
        startEvent: ["mousedown", "touchstart", "pointerdown"],
        moveEvent: ["mousemove", "touchmove", "pointermove"],
        endEvent: ["mouseup", "touchend", "pointerup"]
      },
      o = {
        orientation: {
          horizontal: {
            dimension: "width",
            direction: "left",
            directionStyle: "left",
            coordinate: "x"
          },
          vertical: {
            dimension: "height",
            direction: "top",
            directionStyle: "bottom",
            coordinate: "y"
          }
        }
      };
    return j.prototype.init = function() {
      this.update(!0, !1), this.onInit && "function" == typeof this.onInit && this.onInit()
    }, j.prototype.update = function(a, b) {
      a = a || !1, a && (this.min = h(this.$element[0].getAttribute("min"), 0), this.max = h(this.$element[0].getAttribute("max"), 100), this.value = h(this.$element[0].value, Math.round(this.min + (this.max - this.min) / 2)), this.step = h(this.$element[0].getAttribute("step"), 1)), this.handleDimension = g(this.$handle[0], "offset" + i(this.DIMENSION)), this.rangeDimension = g(this.$range[0], "offset" + i(this.DIMENSION)), this.maxHandlePos = this.rangeDimension - this.handleDimension, this.grabPos = this.handleDimension / 2, this.position = this.getPositionFromValue(this.value), this.$element[0].disabled ? this.$range.addClass(this.options.disabledClass) : this.$range.removeClass(this.options.disabledClass), this.setPosition(this.position, b)
    }, j.prototype.handleDown = function(a) {
      if (this.$document.on(this.moveEvent, this.handleMove), this.$document.on(this.endEvent, this.handleEnd), !((" " + a.target.className + " ").replace(/[\n\t]/g, " ").indexOf(this.options.handleClass) > -1)) {
        var b = this.getRelativePosition(a),
          c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
          d = this.getPositionFromNode(this.$handle[0]) - c,
          e = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
        this.setPosition(e), b >= d && b < d + this.handleDimension && (this.grabPos = b - d)
      }
    }, j.prototype.handleMove = function(a) {
      a.preventDefault();
      var b = this.getRelativePosition(a),
        c = "vertical" === this.orientation ? this.maxHandlePos - (b - this.grabPos) : b - this.grabPos;
      this.setPosition(c)
    }, j.prototype.handleEnd = function(a) {
      a.preventDefault(), this.$document.off(this.moveEvent, this.handleMove), this.$document.off(this.endEvent, this.handleEnd), this.$element.trigger("change", {
        origin: this.identifier
      }), this.onSlideEnd && "function" == typeof this.onSlideEnd && this.onSlideEnd(this.position, this.value)
    }, j.prototype.cap = function(a, b, c) {
      return a < b ? b : a > c ? c : a
    }, j.prototype.setPosition = function(a, b) {
      var c, d;
      void 0 === b && (b = !0), c = this.getValueFromPosition(this.cap(a, 0, this.maxHandlePos)), d = this.getPositionFromValue(c), this.$fill[0].style[this.DIMENSION] = d + this.grabPos + "px", this.$handle[0].style[this.DIRECTION_STYLE] = d + "px", this.setValue(c), this.position = d, this.value = c, b && this.onSlide && "function" == typeof this.onSlide && this.onSlide(d, c)
    }, j.prototype.getPositionFromNode = function(a) {
      for (var b = 0; null !== a;) b += a.offsetLeft, a = a.offsetParent;
      return b
    }, j.prototype.getRelativePosition = function(a) {
      var b = i(this.COORDINATE),
        c = this.$range[0].getBoundingClientRect()[this.DIRECTION],
        d = 0;
      return "undefined" != typeof a["page" + b] ? d = a["client" + b] : "undefined" != typeof a.originalEvent["client" + b] ? d = a.originalEvent["client" + b] : a.originalEvent.touches && a.originalEvent.touches[0] && "undefined" != typeof a.originalEvent.touches[0]["client" + b] ? d = a.originalEvent.touches[0]["client" + b] : a.currentPoint && "undefined" != typeof a.currentPoint[this.COORDINATE] && (d = a.currentPoint[this.COORDINATE]), d - c
    }, j.prototype.getPositionFromValue = function(a) {
      var b, c;
      return b = (a - this.min) / (this.max - this.min), c = Number.isNaN(b) ? 0 : b * this.maxHandlePos
    }, j.prototype.getValueFromPosition = function(a) {
      var b, c;
      return b = a / (this.maxHandlePos || 1), c = this.step * Math.round(b * (this.max - this.min) / this.step) + this.min, Number(c.toFixed(this.toFixed))
    }, j.prototype.setValue = function(a) {
      a === this.value && "" !== this.$element[0].value || this.$element.val(a).trigger("input", {
        origin: this.identifier
      })
    }, j.prototype.destroy = function() {
      this.$document.off("." + this.identifier), this.$window.off("." + this.identifier), this.$element.off("." + this.identifier).removeAttr("style").removeData("plugin_" + k), this.$range && this.$range.length && this.$range[0].parentNode.removeChild(this.$range[0])
    }, a.fn[k] = function(b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function() {
        var d = a(this),
          e = d.data("plugin_" + k);
        e || d.data("plugin_" + k, e = new j(this, b)), "string" == typeof b && e[b].apply(e, c)
      })
    }, "rangeslider.js is available in jQuery context e.g $(selector).rangeslider(options);"
  }), ! function(a, b) {
    "function" == typeof define && define.amd ? define([], function() {
      return a.svg4everybody = b()
    }) : "object" == typeof module && module.exports ? module.exports = b() : a.svg4everybody = b()
  }(this, function() {
    function a(a, b, c) {
      if (c) {
        var d = document.createDocumentFragment(),
          e = !b.hasAttribute("viewBox") && c.getAttribute("viewBox");
        e && b.setAttribute("viewBox", e);
        for (var f = c.cloneNode(!0); f.childNodes.length;) d.appendChild(f.firstChild);
        a.appendChild(d)
      }
    }

    function b(b) {
      b.onreadystatechange = function() {
        if (4 === b.readyState) {
          var c = b._cachedDocument;
          c || (c = b._cachedDocument = document.implementation.createHTMLDocument(""), c.body.innerHTML = b.responseText, b._cachedTarget = {}), b._embeds.splice(0).map(function(d) {
            var e = b._cachedTarget[d.id];
            e || (e = b._cachedTarget[d.id] = c.getElementById(d.id)), a(d.parent, d.svg, e)
          })
        }
      }, b.onreadystatechange()
    }

    function c(c) {
      function e() {
        for (var c = 0; c < o.length;) {
          var h = o[c],
            i = h.parentNode,
            j = d(i);
          if (j) {
            var k = h.getAttribute("xlink:href") || h.getAttribute("href");
            if (f)
              if (!g.validate || g.validate(k, j, h)) {
                i.removeChild(h);
                var l = k.split("#"),
                  q = l.shift(),
                  r = l.join("#");
                if (q.length) {
                  var s = m[q];
                  s || (s = m[q] = new XMLHttpRequest, s.open("GET", q), s.send(), s._embeds = []), s._embeds.push({
                    parent: i,
                    svg: j,
                    id: r
                  }), b(s)
                } else a(i, j, document.getElementById(r))
              } else ++c, ++p
          } else ++c
        }(!o.length || o.length - p > 0) && n(e, 67)
      }
      var f, g = Object(c),
        h = /\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,
        i = /\bAppleWebKit\/(\d+)\b/,
        j = /\bEdge\/12\.(\d+)\b/,
        k = /\bEdge\/.(\d+)\b/,
        l = window.top !== window.self;
      f = "polyfill" in g ? g.polyfill : h.test(navigator.userAgent) || (navigator.userAgent.match(j) || [])[1] < 10547 || (navigator.userAgent.match(i) || [])[1] < 537 || k.test(navigator.userAgent) && l;
      var m = {},
        n = window.requestAnimationFrame || setTimeout,
        o = document.getElementsByTagName("use"),
        p = 0;
      f && e()
    }

    function d(a) {
      for (var b = a;
        "svg" !== b.nodeName.toLowerCase() && (b = b.parentNode););
      return b
    }
    return c
  }),
  function(a) {
    "use strict";
    a.getFragment = function(b) {
      "string" == typeof b && (b = {
        url: b
      });
      var c = new netr.URI(b.url);
      if (!c.fragment) throw new Error("Url passed to $.getFragment is missing fragment.");
      var d = "#" + c.fragment,
        e = b.success;
      return b.success = function(b, c, f) {
        b = a(a.trim(b));
        var g;
        b = b.filter(function() {
          return 3 !== this.nodeType
        }), g = b.length ? 1 === b.length ? b.is(d) ? b : a(d, b) : b.find("*").andSelf().filter(d) : a(), e(g, c, f)
      }, c.fragment = "", b.url = c.getAbsolute(), a.ajax(b)
    }, a.expr[":"].external = function(b) {
      return a(b).isExternal()
    }, a.extend(a.fn, {
      closestAttribute: function(a) {
        return this.closest("[" + a + "]").attr(a)
      },
      isExternal: function() {
        var a, b;
        if (this.is("a") && (a = new netr.URI(this.attr("href")), b = new netr.URI(document.location.toString()), "mailto:" !== a.scheme))
          if (a.getSecondLevelDomain() && b.getSecondLevelDomain()) {
            if (a.getSecondLevelDomain() !== b.getSecondLevelDomain()) return !0
          } else if (a.domain && a.domain !== b.domain) return !0;
        return !1
      },
      activateEmailLinks: function(b) {
        return b = a.extend({}, {
          textSelector: ".email-text:first",
          addressSelector: ".email-address:first",
          salt: "INGEN_SPAM_"
        }, b || {}), this.each(function() {
          var c = this.find(b.textSelector),
            d = this.find(b.addressSelector);
          if (d.length) {
            var e = d.text().replace(b.salt, ""),
              f = c.length ? c.text() : e;
            f = f.replace(b.salt, ""), a(this).replaceWith('<a href="mailto:' + e + '">' + f + "</a>")
          }
        })
      },
      getHighestHeight: function() {
        var b = 0;
        return this.each(function() {
          var c, d = a(this);
          d.css("min-height", 0), c = d.outerHeight(), c > b && (b = c)
        }), b
      },
      justify: function() {
        var b = this.getHighestHeight();
        return this.each(function() {
          var c = a(this);
          "border-box" === c.css("box-sizing") ? c.css("min-height", b) : c.css("min-height", c.height() + b - c.outerHeight())
        }), this
      },
      centerInViewport: function() {
        return this.each(function() {
          var b = a(this);
          b.css({
            left: a(window).width() / 2 - b.width() / 2
          })
        })
      },
      getLabel: function(b) {
        if (b = b || a("body"), this.is("input, select, textarea") && this.attr("id")) return a("label[for=" + this.attr("id") + "]", b)
      },
      generateRandomId: function(b) {
        return b = b !== !1, this.each(function() {
          var c, d = a(this);
          if (b || !d.attr("id")) {
            do c = Math.random().toString().replace(/\D/, ""); while (a("#" + c).length);
            d.attr("id", c)
          }
        })
      }
    })
  }(jQuery), netr = {},
  function() {
    "use strict";
    netr.array = {
      first: function(a, b) {
        var c, d = 0,
          e = a.length;
        if (e)
          do {
            var f = a[d];
            b(f, d, a) && (c = f), d++
          } while ("undefined" == typeof c && d < e);
        return c || null
      }
    }
  }(),
  function() {
    "use strict";
    netr.string = {
      format: function(a) {
        var b = arguments;
        return a.replace(/{(\d+)}/g, function(a, c) {
          return b[parseInt(c, 10) + 1]
        })
      },
      capitalize: function(a) {
        return a.substring(0, 1).toUpperCase() + a.substring(1).toLowerCase()
      },
      isOneOf: function(a) {
        var b = $.makeArray(arguments);
        return b.shift(), $.inArray(a.toString(), b) > -1
      },
      stripHash: function(a) {
        return a.replace(/#.+$/, "")
      },
      supplant: function(a, b) {
        return a.replace(/{([^{}]*)}/g, function(a, c) {
          var d = b[c];
          return "string" == typeof d || "number" == typeof d ? d : a
        })
      },
      trim: function(a) {
        return a.replace(/^\s+/, "").replace(/\s+$/, "")
      }
    };
    var a = {};
    netr.string.addTranslations = function(b, c) {
      a[b] || (a[b] = {}), a[b] = $.extend(!0, a[b], c)
    }, netr.string.translate = function(b) {
      function c() {
        d = "[" + b + "]", "undefined" != typeof console && console.warn && console.warn("Missing translation for: [" + b + "]")
      }
      var d = a[$("html").attr("lang")],
        e = b.split("."),
        f = 0;
      try {
        for (; e[f];) d = d[e[f]], f++
      } catch (a) {
        c()
      }
      return d || c(), d
    }
  }(),
  function() {
    "use strict";
    netr.URI = function(a) {
      a && "string" == typeof a && this.set(a)
    }, netr.URI.prototype = {
      scheme: "",
      domain: "",
      port: "",
      path: "",
      query: "",
      fragment: "",
      clone: function() {
        var a = new netr.URI;
        return a.scheme = this.scheme, a.domain = this.domain, a.port = this.port, a.path = this.path, a.query = this.query, a.fragment = this.fragment, a
      },
      set: function(a) {
        var b;
        if (/^#/.test(a)) this.fragment = a.replace(/^#/, "");
        else if (/^.+:\/\//.test(a)) {
          b = /^(.+?:\/\/)?([^#?\/]+)?(\/*[^?#]+)?([^#]+)?(.*)$/.exec(a);
          var c = /([^:]+):*([^:]*)/.exec(b[2]);
          this.scheme = b[1].replace("://", ""), this.domain = c ? c[1] : "", this.port = c ? c[2] : "", this.path = b[3], this.query = b[4] ? netr.URI.parseQuery(b[4]) : {}, this.fragment = b[5].replace(/^#/, "")
        } else b = /^([^?#]+)?([^#]+)?(.*)$/.exec(a), this.path = b[1] || "", this.query = b[2] ? netr.URI.parseQuery(b[2]) : {}, this.fragment = b[3].replace(/^#/, "");
        return this
      },
      setQuery: function(a) {
        return this.query = a, this
      },
      updateQuery: function(a) {
        for (var b in a) a.hasOwnProperty(b) && (this.query[b] = a[b]);
        return this
      },
      getAbsolute: function(a) {
        a = new netr.URI(a || document.location.href);
        var b = this.clone();
        return b.scheme = b.scheme || a.scheme, b.domain = b.domain || a.domain, b.port = b.port || a.port, b.path ? /^\//.test(b.path) || (/\..+$/.test(a.path) ? b.path = (a.path || "").replace(/\/[^\/]*$/, "") + "/" + b.path : b.path = (a.path || "").replace("//+$/", "") + "/" + b.path) : b.path = a.path, b.toString()
      },
      getRelativeToRoot: function() {
        var a = this.clone();
        return a.scheme = "", a.domain = "", a.port = "", a.toString()
      },
      getSecondLevelDomain: function() {
        var a = this.domain.match(/\w+\.\w+$/);
        return a ? a[0] : null
      },
      toString: function() {
        return [this.scheme ? this.scheme + "://" : "", this.domain, this.port ? ":" + this.port : "", this.path, netr.URI.objectToQueryString(this.query), this.fragment ? "#" + this.fragment : ""].join("")
      }
    }, netr.URI.parseQuery = function(a) {
      function b(a) {
        var b, d;
        a = a.split("="), a.length > 1 ? (b = a[0], d = a[1].split(","), 1 === d.length && (d = d[0])) : (b = a[0], d = ""), b in c ? (c[b] instanceof Array || (c[b] = [c[b]]), c[b] = c[b].concat(d)) : c[b] = d
      }
      var c = {};
      if (a = a.replace(/^\?/, ""), a.length)
        for (var d = a.split("&"), e = 0, f = d.length; e < f; e++) b(d[e]);
      return c
    }, netr.URI.objectToQueryString = function(a) {
      function b(a) {
        var c, d, e = "";
        for (var f in a)
          if (a.hasOwnProperty(f)) {
            if (e += "&" + encodeURIComponent(f), a[f] instanceof Array) {
              c = [].concat(a[f]);
              for (var g = 0, h = a[f].length; g < h; g++) c[g] = encodeURIComponent(c[g]);
              d = c.join(",")
            } else d = a[f].toString ? encodeURIComponent(a[f].toString()) : encodeURIComponent(b(a[f]));
            "" !== d && (e += "=" + d)
          }
        return e
      }
      var c;
      return c = b(a).replace(/^&/, ""), c ? "?" + c : ""
    }
  }(),
  function() {
    "use strict";
    var a, b = $("[data-collapsable]"),
      c = [];
    $.breakpoint(function() {
      return {
        condition: function() {
          return window.matchMedia && window.matchMedia("only screen and (max-width: 900px)").matches
        },
        enter: function() {
          b.each(function(b) {
            a = $(this), a.hasClass("exp-section") || (c[b] = a.html(), a.addClass("exp-section"), a.data("init-collapsed") && a.addClass("collapsed"), a.wrapInner('<div class="exp-section-content" />'), a.find("[data-collapsable-heading]").insertBefore(a.find(".exp-section-content")), "undefined" != typeof a.collapsableSection && a.collapsableSection({
              headingSelector: "[data-collapsable-heading]",
              contentSelector: ".exp-section-content",
              contentIdBase: "collapsable-section-",
              collapsedClass: "collapsed",
              expandedClass: "expanded"
            }))
          })
        },
        exit: function() {
          b.each(function(b) {
            a = $(this), a.hasClass("exp-section") && a.html(c[b]).removeClass("exp-section collapsed")
          })
        }
      }
    }())
  }(),
  function(a) {
    "use strict";
    a.fn.elementToggler = function(b) {
      return this.each(function() {
        var c = a(this),
          d = c.data("toggles"),
          e = a("#" + d, b);
        c.attr({
          "aria-controls": d
        }), e.attr({
          "aria-expanded": c.prop("checked")
        }), c.is('[type="checkbox"], [type="radio"]') ? (c.prop("checked") ? e.show() : e.hide(), c.on("change", function(a) {
          a.preventDefault(), e.attr("aria-expanded", c.prop("checked")), e.slideToggle(162)
        })) : ("true" !== e.attr("aria-expanded") && e.hide(), c.on("click", function(a) {
          a.preventDefault(), e.attr("aria-expanded", "true" !== e.attr("aria-expanded")), e.slideToggle(162)
        }))
      })
    }
  }(jQuery),
  function() {
    "use strict";
    $.breakpoint(function() {
      return {
        condition: function() {
          return window.matchMedia && window.matchMedia("only screen and (min-width: 701px)").matches
        },
        enter: function() {
          function a() {
            $.each(b, function(a, b) {
              $('[data-equal-height-group="' + b + '"]').justify()
            })
          }
          var b = [],
            c = $("[data-equal-height-group]");
          c.each(function() {
            var a = $(this).data("equal-height-group");
            $.inArray(a, b) === -1 && b.push(a)
          }), a(), $(window).on("resize.justifyGroups", a)
        },
        exit: function() {
          $(window).off("resize.justifyGroups"), setTimeout(function() {
            $("[data-equal-height-group]").css("min-height", "0")
          }, 50)
        }
      }
    }())
  }(),
  function(a) {
    "use strict";
    a.fn.smartclick = function(b) {
      var c = a(this);
      b.ctrlKey || b.metaKey || 2 === b.which ? window.open(c.attr("href"), "") : window.location = c.attr("href")
    }
  }(jQuery),
  function(a) {
    "use strict";
    var b = function(b) {
      function c(b, c) {
        b.attr("aria-expanded", "false").off("focusout").attachToPlaceholder().removeClass("popover-left-align").removeClass("popover-right-align").removeClass("popover-full-width"), a(document).off("click.popover").off("touchstart.popover").off("keyup.popover"), c.focus(), e.detach(), c.removeClass("active")
      }
      var d = [],
        e = a("<a>", {
          href: "#",
          "aria-hidden": "true",
          focus: function(a) {
            null === a.relatedTarget && (a.preventDefault(), c(d.popover, d.button))
          }
        });
      b.each(function() {
        var b = a(this),
          f = a("#" + b.data("popover-trigger")),
          g = !0,
          h = a("<button>", {
            class: "link",
            type: "button",
            html: "<span>" + b.html() + "</span>",
            click: function(i) {
              if (i.preventDefault(), i.stopPropagation(), a('.popover[aria-expanded="true"]').each(function() {
                  var b = a(this);
                  c(b, a('[data-popover-trigger="' + b.attr("id") + '"]'))
                }), d.popover = f, d.button = h, g) {
                g = !1, f.detachWithPlaceholder(), a("body").append(f, e), h.addClass("active");
                var j = b.offset().top + b.height() + 5;
                f.is(".popover-above") && (j = b.offset().top - f.outerHeight(!0) - 5), f.attr("aria-expanded", "true").css("top", j).css("left", b.offset().left + b.outerWidth() / 2).attr("tabindex", "-1").focus().on("focusout", function(b) {
                  null !== b.relatedTarget ? 0 !== a(b.relatedTarget).length && a(b.relatedTarget).parents(".popover").length || (b.preventDefault(), a("#body").is(".lt-ie9") || a(b.relatedTarget).is(".open-in-dialog") || c(f, h), setTimeout(function() {
                    g = !0
                  }, 100)) : setTimeout(function() {
                    g = !0
                  }, 100)
                }), a(document).on("touchstart.popover click.popover", function(b) {
                  a(b.target).is(".popover") || 0 !== a(b.target).parents(".popover").length || (c(f, h), setTimeout(function() {
                    g = !0
                  }, 100))
                }), a(document).on("keyup.popover", function(a) {
                  27 === a.keyCode && (c(f, h), setTimeout(function() {
                    g = !0
                  }, 100))
                });
                var k = 28;
                f.offset().left < 0 ? f.addClass("popover-left-align").css("left", b.offset().left + b.outerWidth() / 2 - k) : f.offset().left + f.outerWidth() > a(window).outerWidth() && f.addClass("popover-right-align").css("left", "auto").css("right", a(window).outerWidth() - (b.offset().left + b.outerWidth() / 2 + k)), window.matchMedia("only screen and (max-width:400px)").matches && f.addClass("popover-full-width")
              }
            }
          });
        b.html(h), f.attr("aria-expanded", "false"), f.is("[data-init-expanded]") && setTimeout(function() {
          h.click()
        }, 1e3)
      })
    };
    a.fn.popoverTrigger = function() {
      return this.each(function() {
        new b(a(this))
      })
    }
  }(jQuery),
  function(a) {
    "use strict";
    var b, c = [],
      d = 1,
      e = function(e) {
        var f = this;
        this.options = a.extend({
          extraClass: "",
          showDialogTitle: !0,
          closeText: "",
          onlyDesktop: !1
        }, e || {}), !b && this.isDialog() && (b = a("<div>", {
          id: "dialogs"
        }).appendTo("#body")), this.dialogElement = a("<div>", {
          class: "dialog",
          id: "dialog-" + d,
          role: "dialog"
        }), this.dialogElement.addClass(this.options.extraClass), this.contentElement = a("<div>", {
          class: "dialog-content",
          "aria-live": "assertive"
        }).appendTo(this.dialogElement), this.closeElement = a("<button>", {
          type: "button",
          class: "dialog-close",
          "aria-label": this.options.closeText,
          html: this.options.closeText,
          click: function(a) {
            a.preventDefault(), f.close()
          }
        }).prependTo(this.dialogElement), c.push(this)
      };
    e.prototype = {
      dispose: function() {
        var b = this;
        this.dialogElement.remove(), a.each(c, function(a, d) {
          if (d === b) return c.splice(a, 1), !1
        })
      },
      setContent: function(a) {
        this.contentElement.empty().append(a), this.isDialog() && this.position(), this.dialogElement.trigger("load.netrdialog", this)
      },
      setTitle: function(b) {
        this.options.showDialogTitle ? (this.dialogElement.attr("aria-labelledby", "dialog-title-" + (d - 1)), a('<div class="dialog-title"><h1 id="dialog-title-' + (d - 1) + '">' + b + "</h1></div>").prependTo(this.contentElement)) : this.dialogElement.attr("aria-label", b)
      },
      open: function(d) {
        var e = this;
        if (d) d.after(this.dialogElement);
        else {
          if (b.find(this.dialogElement).length) return;
          b.appendTo("#body"), this.dialogElement.appendTo(b), this.position(), this.dialogElement.attr("tabindex", "-1").focus().removeAttr("tabindex"), a(document).on("focus.netrdialog", "*", function(b) {
            a.contains(e.dialogElement.get(0), b.target) || (b.stopPropagation(), e.dialogElement.find("input, select, textarea, button, object, a, [tabindex]").filter(function() {
              var b = a(this);
              return !b.is(":disabled") && "-1" !== b.attr("tabindex")
            }).eq(0).focus())
          }), a(document).on("keydown.netrdialog", function(b) {
            27 === b.keyCode && a.each(c, function() {
              this.close()
            })
          }), a(document).bind("click.netrdialog touchend.netrdialog", function(a) {
            jQuery.contains(e.dialogElement.get(0), a.target) || e.dialogElement.get(0) === a.target || (a.preventDefault(), e.close())
          }), this.dialogElement.trigger("open.netrdialog", this);
          var f = !0;
          a(window).on("resize", function() {
            f && (b.css("height", a(document).height()), f = !1, setTimeout(function() {
              f = !0
            }, 50))
          })
        }
        this.position()
      },
      close: function() {
        a(document).off("focus.netrdialog", "*").off("keydown.netrdialog click.netrdialog touchend.netrdialog");
        var c = a.Event("close.netrdialog");
        this.dialogElement.trigger(c), !c.isDefaultPrevented() && this.dialogElement && b && (this.dialogElement.detach(), b.detach())
      },
      position: function() {
        b.css("height", a(document).height()), d++, this.dialogElement.css({
          top: Math.max(a(document).scrollTop() + 20, a(document).scrollTop() + a(window).height() / 2 - this.dialogElement.height() / 2),
          left: a(window).width() / 2 - this.dialogElement.outerWidth() / 2,
          zIndex: d
        })
      },
      isDialog: function() {
        try {
          return !(window.matchMedia("only screen and (max-width:900px)").matches && this.options.onlyDesktop)
        } catch (a) {
          return !0
        }
      },
      openTransferDialog: function(b) {
        this.dialogElement.addClass("dialog-transfer"), this.setContent(netr.string.translate("transfer.youAreBeingTransfered")), this.open(), a("html").unbind("click.netrdialog touchend.netrdialog"), setTimeout(function() {
          document.location = b.toString()
        }, 2e3)
      }
    }, a.netrdialog = function(a) {
      return new e(a)
    }, a.fn.netrdialog = function(b, c) {
      if ("string" == typeof b) switch (b) {
        case "getdialog":
          return this.data("netrdialog");
        case "setcontent":
          var d = c;
          return this.data("netrdialog").setContent(d);
        case "settitle":
          return this.data("netrdialog").setTitle(c);
        case "open":
          this.data("netrdialog").open();
          break;
        case "close":
          this.data("netrdialog").close()
      } else {
        c = a.extend({
          persistent: !1,
          hijackForms: !1,
          extraClass: "",
          closeText: "Stäng",
          errorMessage: "<p>Ett fel har tyvärr uppstått. Var vänlig försök igen.</p>",
          showDialogTitle: !0,
          onlyDesktop: !1
        }, a.isPlainObject(b) ? b : a.isPlainObject(c) ? c : {});
        var f = function(b, d) {
            d.preventDefault();
            var f = b.data("netrdialog");
            if (f || (b.data("netrdialog", f = new e({
                extraClass: c.extraClass,
                closeText: c.closeText,
                onlyDesktop: c.onlyDesktop
              })), f.dialogElement.bind({
                "close.netrdialog": function(d) {
                  b.trigger(d, f), d.isDefaultPrevented() || (b.focus(), c.persistent ? a(document).off("click.netrdialog touchend.netrdialog") : (f.dispose(), b.data("netrdialog", f = null)))
                },
                "open.netrdialog": function(a) {
                  b.trigger(a, f)
                },
                "load.netrdialog": function(d) {
                  if (c.hijackForms) {
                    var e = f.contentElement.find("form");
                    e.each(function() {
                      var b, d = a(this);
                      d.on("click", "[type=submit]", function() {
                        b = a(this)
                      }), d.submit(function(e) {
                        e.preventDefault();
                        var g = d.serialize();
                        b && b.length && (g += "&" + b.attr("name") + "=" + encodeURIComponent(b.val())), a.getFragment({
                          url: d.attr("action"),
                          type: d.attr("method") || "post",
                          data: g,
                          async: !1,
                          success: function(b) {
                            b.length && (f.setContent(b), "function" == typeof c.callback && c.callback(a(b)))
                          },
                          error: function() {
                            f.setContent(a(c.errorMessage))
                          }
                        })
                      })
                    })
                  }
                  b.trigger(d, f)
                }
              })), !f.contentElement.children().length || !c.persistent) {
              b.attr("href").match(/^#/) ? f.setContent(a(b.attr("href")).clone()) : a.getFragment({
                url: b.attr("href"),
                async: !1,
                success: function(b) {
                  b.length && (f.setContent(b), "function" == typeof c.callback && c.callback(a(b)))
                },
                error: function() {
                  f.setContent(a(c.errorMessage))
                }
              });
              var g = b.data("dialog-title");
              g && f.setTitle(g)
            }
            setTimeout(function() {
              f.isDialog() ? f.open() : b.after(f.contentElement).trigger("open.netrdialog").attr("data-dialog-only-desktop", "open").unbind("click").click(function(b) {
                b.preventDefault(), a(this).next(".dialog-content").toggleClass("collapsed")
              })
            }, 100)
          },
          g = this;
        (!c.onlyDesktop || c.onlyDesktop && window.matchMedia("screen and (max-width:900px)").matches) && g.click(function(b) {
          f(a(this), b)
        }), a.breakpoint(function() {
          return {
            condition: function() {
              return !netr.forceDesktopLayout && window.matchMedia("screen and (min-width:901px)").matches && c.onlyDesktop
            },
            enter: function() {
              g.attr("data-dialog-only-desktop", "true").next(".dialog-content").detach(), a(g).data("netrdialog", !1), g.click(function(b) {
                f(a(g), b)
              })
            }
          }
        }())
      }
      return c.open && this.click(), this
    }
  }(jQuery), $(function() {
    "use strict"
  }), $(function() {
    "use strict";
    if (window.print) {
      var a = $("<li>", {
          class: "page-action-print"
        }),
        b = $("<button>", {
          class: "link",
          type: "button",
          html: netr.string.translate("article.print_this_page"),
          click: function() {
            window.print()
          }
        });
      a.append(b), $(".page-actions-share ul").append(a)
    }! function() {
      function a() {
        e.slideUp(162), c.removeClass("expanded")
      }

      function b() {
        e.slideDown(162), c.addClass("expanded"), e.find("textarea").focus()
      }
      var c = $(".send-feedback"),
        d = c.find(".send-feedback-link"),
        e = $(".send-feedback-form"),
        f = !!$(".send-feedback-form").length;
      d.on("click", function(g) {
        g.preventDefault(), f ? c.is(".expanded") ? a() : b() : $.ajax({
          url: netr.string.stripHash(d.attr("href")),
          async: !1,
          method: "get",
          success: function(a) {
            c.append(a), e = $(".send-feedback-form"), e.hide(), $(".rating .rating-tool").length || e.find(".rating input").netrRatingTool(), b(), f = !0
          }
        })
      }), f && d.click()
    }()
  }), $(function() {
    "use strict";
    var a = $("[data-toggle-loading-message]"),
      b = a.parents("form");
    $(document).on("submit", b, function() {
      a.addClass("loading"), a.find("span").text(a.data("toggle-loading-message"))
    }), $(".button").each(function() {
      var a = $(this);
      a.find("span").length || a.wrapInner("<span />")
    })
  }), $(function() {
    "use strict";
    var a = $(".cookie-message"),
      b = a.find(".cookie-message-close");
    b.on("click", function(b) {
      b.preventDefault(), $.ajax({
        url: $(this).attr("href")
      }), a.addClass("accepted")
    })
  }), $(function() {
    "use strict";
    $(".carousel").each(function() {
      var a = $(this);
      if (a.find(".slide").length > 1) {
        var b = $("<ol>", {
          class: "carousel-nav"
        });
        a.find(".slide").each(function(a) {
          var c = $(this),
            d = $("<li>"),
            e = $("<button>", {
              type: "button",
              class: "link",
              html: "<span>" + c.find("h2, h3").text() + "</span>"
            }),
            f = $("<img />", {
              src: c.data("thumb"),
              alt: "Slide " + (a + 1),
              width: "82",
              height: "51"
            });
          e.append(f), d.append(e), b.append(d)
        }), a.append(b)
      }
      a.flexslider({
        manualControls: a.find(".carousel-nav button"),
        controlNav: !0,
        slideshow: !1,
        directionNav: !1,
        animationSpeed: 350
      })
    })
  }),
  function() {
    "use strict";
    var a = {
      init: function() {
        var a = this;
        this.slides_wrapper = $(".carousel-big-slides"), this.slides = this.slides_wrapper.find(".carousel-big-slide"), this.navigation = $("<ul>", {
          class: "carousel-big-slides-nav"
        }), this.slides.not(":first").hide(), this.slides.length > 1 && (this.slides_wrapper.addClass("carousel-big-slides-initiated"), this.slides.each(function(b) {
          var c = $(this),
            d = $("<li>"),
            e = $("<button>", {
              type: "button",
              class: "link title-tooltip",
              title: c.find("h2, h3").text(),
              html: '<span class="structural">Slide ' + (b + 1) + "</span>",
              click: function(c) {
                c.preventDefault(), a.changeSlide(!1, b)
              }
            }),
            f = $("<img />", {
              src: c.data("thumb"),
              alt: "",
              width: "66",
              height: "41"
            });
          0 === b && d.addClass("active"), e.append(f), d.append(e), a.navigation.append(d)
        }), window.matchMedia("only screen and (max-width:700px)").matches ? this.navigation.prependTo(this.slides_wrapper.parent()) : this.slides.first().find(".carousel-big-slide-content").append(this.navigation)), this.slides.length > 1 && (this.checkHeight(), this.handleSwipe()), this.do_resize = !0, $(window).on("resize.bigcarousel", function() {
          if (a.do_resize) {
            var b = a.slides.filter(":visible"),
              c = b.find(".carousel-big-slide-content");
            c.css("min-height", "0").css("min-height", b.height() - a.getPadding(c)), a.slides_wrapper.css("min-height", b.height()), window.matchMedia("only screen and (max-width:700px)").matches ? a.navigation.prependTo(a.slides_wrapper.parent()) : b.find(".carousel-big-slide-content").append(a.navigation), a.do_resize = !1, setTimeout(function() {
              a.do_resize = !0
            }, 100)
          }
        })
      },
      changeSlide: function(a, b) {
        var c = this,
          d = this.slides.filter(":visible"),
          e = this.navigation.find(".active");
        this.hideSlide(d), e.removeClass("active"), setTimeout(function() {
          "undefined" != typeof b || a ? a ? d.prev().is(".carousel-big-slide") ? (c.showSlide(d.prev()), e.prev().addClass("active")) : (c.showSlide(c.slides.last()), c.navigation.find("li").last().addClass("active")) : (c.showSlide(c.slides.eq(b)), c.navigation.find("li").eq(b).addClass("active")) : d.next().is(".carousel-big-slide") ? (c.showSlide(d.next()), e.next().addClass("active")) : (c.showSlide(c.slides.eq(0)), c.navigation.find("li").first().addClass("active"))
        }, 700)
      },
      hideSlide: function(a) {
        a.animate({
          opacity: 0
        }, 300, function() {
          a.hide()
        })
      },
      showSlide: function(a) {
        var b = a.find(".carousel-big-slide-content");
        a.css("opacity", "0").css("display", "block").animate({
          opacity: 1
        }), this.slides_wrapper.animate({
          minHeight: a.outerHeight()
        }, 300, "easeInOutQuad"), b.css("min-height", "0").css("min-height", a.outerHeight() - this.getPadding(b)), window.matchMedia("only screen and (max-width:700px)").matches || this.navigation.appendTo(a.find(".carousel-big-slide-content"))
      },
      checkHeight: function() {
        var a = this,
          b = this.slides_wrapper.find(".carousel-big-image").first();
        b.on("load", function() {
          a.setHeight(), clearInterval(c)
        });
        var c = setInterval(function() {
          b.outerHeight() > 10 && (a.setHeight(), clearInterval(c))
        }, 50)
      },
      setHeight: function() {
        var a = this.slides.filter(":visible"),
          b = a.find(".carousel-big-slide-content");
        this.slides_wrapper.css("min-height", a.height()), b.css("min-height", a.height() - this.getPadding(b))
      },
      handleSwipe: function() {
        var a = this,
          b = null,
          c = null;
        this.slides_wrapper.on("touchstart.bigcarousel", function(a) {
          b = a.originalEvent.touches[0].clientX, c = a.originalEvent.touches[0].clientY
        }), this.slides_wrapper.on("touchmove.bigcarousel", function(d) {
          if (b && c) {
            var e = d.originalEvent.touches[0].clientX,
              f = d.originalEvent.touches[0].clientY,
              g = b - e,
              h = c - f;
            Math.abs(g) > Math.abs(h) && (g > 0 ? a.changeSlide(!1) : a.changeSlide(!0))
          }
        })
      },
      getPadding: function(a) {
        return parseInt(a.css("padding-top"), 10) + parseInt(a.css("padding-bottom"), 10)
      }
    };
    $(function() {
      $(".carousel-big").length && a.init()
    })
  }(),
  function(a) {
    "use strict";
    a.fn.collapsableSection = function(b) {
      var c = {
        headingSelector: ".collapsable-section-heading",
        contentSelector: ".collapsable-section-content",
        contentIdBase: "collapsable-section-",
        collapsedClass: "collapsed",
        expandedClass: "expanded"
      };
      b && a.extend(c, b), this.each(function(b) {
        var d = a(this),
          e = d.find(c.headingSelector),
          f = d.find(c.contentSelector);
        if (e.length && f.length) {
          var g = function() {
            d.hasClass(c.collapsedClass) ? (d.removeClass(c.collapsedClass).addClass(c.expandedClass), h.attr({
              "aria-expanded": "true"
            }), a("table", f).tablescroll(), f.attr("aria-hidden", "false")) : (d.removeClass(c.expandedClass).addClass(c.collapsedClass), h.attr({
              "aria-expanded": "false"
            }), f.attr("aria-hidden", "true"))
          };
          f.attr("id") || f.attr("id", c.contentIdBase + b), d.hasClass(c.collapsedClass) ? f.attr("aria-hidden", "true") : f.attr("aria-hidden", "false");
          var h = a("<button>", {
            type: "button",
            "aria-expanded": function() {
              return d.hasClass(c.collapsedClass) ? "false" : "true"
            },
            "aria-controls": f.attr("id"),
            html: e.html(),
            click: g,
            keydown: function(a) {
              32 === a.keyCode && (a.preventDefault(), g())
            }
          });
          e.html(h)
        }
      })
    }, a("html").on("click", "a", function(b) {
      if (a(this).parents(".exp-section").length) {
        var c, d = a(this);
        "#" === d.attr("href").charAt(0) && (b.preventDefault(), c = a(d.attr("href")).parents(".exp-section"), d.parents(".exp-section").find("h2 button").click(), setTimeout(function() {
          c.is(".expanded") || c.find("h2 button").click()
        }, 350))
      }
    })
  }(jQuery), $(function() {
    "use strict";
    $(".file-list.collapsable").each(function() {
      var a = $(this),
        b = a.find(".folder");
      b.each(function() {
        var a = $(this),
          b = $("<button>", {
            type: "button",
            class: "button link",
            html: "<span>" + a.text() + "</span>",
            click: function(b) {
              b.preventDefault(), a.parent().is(".closed") ? a.parent().removeClass("closed").addClass("open") : a.parent().removeClass("open").addClass("closed")
            }
          });
        a.empty().append(b)
      })
    })
  }), $(function() {
    "use strict";
    $(document).on("change", "form[data-autosubmit]", function(a) {
      var b = $(a.target);
      b.is(":radio") && b.closest("form").find(":submit").trigger("click")
    })
  }), $(function() {
    "use strict";
    var a = $(".footer"),
      b = a.find(".copyright");
    $.breakpoint(function() {
      return {
        condition: function() {
          return window.matchMedia("only screen and (max-width:900px)").matches
        },
        enter: function() {
          b.detachWithPlaceholder().appendTo(a.find("> div"))
        },
        exit: function() {
          b.attachToPlaceholder()
        }
      }
    }())
  }), $(function() {
    "use strict";
    var a, b, c, d, e, f, g = $(".header > div"),
      h = g.find(".language"),
      i = g.find(".search"),
      j = g.find(".search-field"),
      k = g.find(".nav-main"),
      l = $(".nav-sub > ul"),
      m = $(".extra-header"),
      n = m.find(".extra-header-nav ul"),
      o = $(".header-cart-account"),
      p = $("html");
    if ($(".header-micro").length && (k = g.find(".header-micro-nav")), o.length) {
      var q;
      $(window).on("scroll", function() {
        if (f && f.length && f.is(":visible")) {
          var a = $(window).scrollTop(),
            b = o.outerHeight();
          q || (q = f.offset().top - a), 0 === a ? f.removeAttr("style") : a < b ? f.css("top", q - a) : a > b && f.css("top", q - b)
        }
      })
    }
    $.breakpoint(function() {
      return {
        condition: function() {
          return window.matchMedia("only screen and (max-width:900px)").matches
        },
        first_enter: function() {
          e = $("<div>", {
            id: "menu-wrapper",
            class: "menu-wrapper",
            "aria-expanded": "false"
          }), o.length && e.addClass("menu-wrapper-cart"), f = $("<button>", {
            type: "button",
            class: "menu-toggler button button-small button-style-2 button-color-2",
            html: "<span>" + ("Meny") + "</span>",
            "aria-controls": e.attr("id"),
            "aria-pressed": "false",
            click: function(a) {
              a.preventDefault(), e.is('[aria-expanded="true"]') ? (f.attr("aria-pressed", "false"), e.attr("aria-expanded", "false"), $("body").removeClass("menu-active")) : (e.attr("aria-expanded", "true").attr("tabindex", "-1").focus(), f.attr("aria-pressed", "true"), $("body").addClass("menu-active"), Modernizr.touch && "none" !== overthrow.support || $(window).scrollTop(0))
            }
          }), e.on("click", "[data-has-children]", function(a) {
            a.stopPropagation();
            var b = $(this);
            if (0 === b.children("ul").length) {
              b.addClass("is-loading");
              var c = new netr.URI(b.closest(".nav-main").attr("data-fetch-children-url"));
              c.query.navigationfor = b.attr("data-page-id"), $.get(c.toString(), function(a) {
                a.length ? b.append(a) : (b.removeAttr("data-has-children"), b.removeAttr("data-expanded")), b.removeClass("is-loading")
              })
            }
            b.is("[data-expanded]") ? b.removeAttr("data-expanded") : b.attr("data-expanded", "")
          })
        },
        enter: function() {
          a = k.clone(), k.hide(), h.detachWithPlaceholder(), a.is(".header-micro-nav") && a.removeClass("header-micro-nav").addClass("nav-main"), m.length && (d = $("<li>", {
            "data-expanded": "",
            "data-has-children": ""
          }), n = n.clone(), c = m.find("h1 a").clone(), d.append(c, n), a.find("> ul").append(d)), e.append(h, a), i.length ? i.before(f) : g.find(".logo").after(f);
          var j = e.find("li[data-selected]:first");
          if (b = l.clone(), l.hide(), j.length && !m.length) {
            var o = j.data("page-id"),
              p = b.find("li:first");
            "undefined" != typeof o && o === p.data("page-id") ? (b = b.find("li:first"), j.replaceWith(b)) : (j.removeAttr("data-selected").attr("data-expanded", ""), b.appendTo(j))
          } else j.length && m.length ? n.find("[data-selected]").replaceWith(b) : b.appendTo(a);
          e.attr("aria-expanded", "false").appendTo("body")
        },
        exit: function() {
          k.show(), l.show(), a.remove(), b.remove(), d && d.hide(), h.attachToPlaceholder(), f.detach(), e.detach(), $(window).off("scroll.stickymenu"), p.css("padding-top", "0").removeClass("sticky-menu").removeClass("sticky-menu-animation-end").removeClass("sticky-menu-hide")
        }
      }
    }()), j.on("keyup", function() {
      j.val().length > 0 ? i.addClass("has-text") : i.removeClass("has-text")
    }), window.matchMedia("only screen and (max-width:380px)").matches && j.length && j.removeAttr("placeholder")
  }),
  function(a) {
    "use strict";
    a(".header + div > .hero-layout-2").length && a(".header").addClass("header-borderless")
  }(jQuery), $(function() {
    "use strict";
    var a = $(".listing-header-jobs form");
    a.find("button").addClass("structural"), a.find("select").on("change", function() {
      a.find('[type="submit"]').click()
    })
  }),
  function(a) {
    "use strict";
    var b = function(b, c) {
      this.options = a.extend(!0, {}, {
        zoom: 1,
        center: new google.maps.LatLng(20, 10),
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.HYBRID],
          style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        googleMapOptions: {
          scrollwheel: !1,
          streetViewControl: !1,
          mapTypeControl: !1
        },
        iconset: "default",
        iconsets: {
          default: {
            marker: new google.maps.MarkerImage("../../../i/pin.png", new google.maps.Size(64, 60), new google.maps.Point(0, 0), new google.maps.Point(32, 60))
          }
        }
      }, c || {}), this.container = b, this.markers = [], this.infoWindows = [], this.mapContainer = a('<div class="googlemap-container">'), this.container.empty().append(this.mapContainer), this.googlemap = new google.maps.Map(this.mapContainer[0], this.options.googleMapOptions), this.options.vcards && this.parseVCards({
        vcards: this.options.vcards
      })
    };
    b.prototype = {
      addMarker: function(b) {
        var c = this;
        b = a.extend({
          latlng: "",
          info: "",
          iconset: !1,
          zoomTo: !1
        }, b || {});
        var d = {
          map: this.googlemap,
          position: b.latlng,
          zIndex: Math.abs(1e5 - Math.floor(1e4 * b.latlng.lat()))
        };
        b.iconset && (d.icon = this.options.iconsets[b.iconset].marker, d.shadow = this.options.iconsets[b.iconset].shadow);
        var e = new google.maps.Marker(d);
        return b.info && google.maps.event.addListener(e, "click", function() {
          c.showInfoWindow(e, b.info)
        }), this.markers.push(e), b.zoomTo !== !1 && this.zoomToMarker({
          marker: e
        }), e
      },
      fitAroundMarkers: function(b) {
        var c = this;
        b = a.extend({
          zoomLevel: 13
        }, b || {});
        var d = new google.maps.LatLngBounds;
        a.each(this.markers, function(a, b) {
          d.extend(b.getPosition())
        }), google.maps.event.addListenerOnce(this.googlemap, "zoom_changed", function() {
          c.googlemap.getZoom() > b.zoomLevel && c.googlemap.setZoom(b.zoomLevel)
        }), this.googlemap.fitBounds(d)
      },
      zoomToMarker: function(b) {
        b = a.extend({
          marker: "",
          zoomLevel: 13
        }, b || {}), this.googlemap.setCenter(b.marker.getPosition()), this.googlemap.setZoom(b.zoomLevel)
      },
      showInfoWindow: function(b, c) {
        var d = this;
        b.infoWindow || (b.infoWindow = new google.maps.InfoWindow({
          content: c.clone()[0],
          maxWidth: 350
        }), d.infoWindows.push(b.infoWindow)), d.options.multipleInfoWindows || a.each(d.infoWindows, function(a, b) {
          b.close()
        }), b.infoWindow.open(this.googlemap, b)
      },
      parseVCards: function(b) {
        var c = this;
        b = a.extend({
          vcards: null,
          zoomLevel: 5
        }, b || {}), b.vcards && (b.vcards.each(function() {
          function b() {
            c.addMarker({
              latlng: e,
              info: f,
              iconset: c.options.iconset,
              iconsets: c.options.iconsets
            })
          }
          var d, e, f = a(this);
          f.find(".geo").length ? (e = new google.maps.LatLng(f.find(".geo .latitude:first").text(), f.find(".geo .longitude:first").text()), b()) : (d = new google.maps.Geocoder, d.geocode({
            address: f.find(".adr:first").text().replace(/\s+/g, " ")
          }, function(a, d) {
            d === google.maps.GeocoderStatus.OK && (e = a[0].geometry.location, b(), c.fitAroundMarkers())
          }))
        }), this.fitAroundMarkers())
      }
    }, a.fn.netrGoogleMap = function(c) {
      var d = {
        init: function(c) {
          var d = a(this);
          d.data("googlemap", new b(d, c || {}))
        },
        getMap: function() {
          return this.data("googlemap")
        },
        parseVCards: function(a) {
          return this.data("googlemap") && this.data("googlemap").parseVCards(a), this
        },
        addMarker: function(a) {
          if (this.data("googlemap")) return this.data("googlemap").addMarker(a)
        },
        zoomToMarker: function(a) {
          if (this.data("googlemap")) return this.data("googlemap").zoomToMarker(a)
        },
        fitAroundMarkers: function() {
          if (this.data("googlemap")) return this.data("googlemap").fitAroundMarkers()
        }
      };
      if (d[c]) return d[c].apply(this, Array.prototype.slice.call(arguments, 1));
      if ("object" != typeof c && c) throw new Error("Method " + c + " does not exist on netrGoogleMap");
      return d.init.call(this, c)
    }, a.netrGoogleMap = {
      loadAPI: function() {
        if (!a.netrGoogleMap.deferred) {
          a.netrGoogleMap.deferred = a.Deferred(), window.asyncGoogleMapsCallback = function() {
            try {
              delete window.asyncGoogleMapsCallback
            } catch (a) {}
            a.netrGoogleMap.deferred.resolve()
          };
          var b = new netr.URI("https://maps.googleapis.com/maps/api/js?key=AIzaSyAxFnanZjym8uZ_SvH5U3MWHNDB9s9tanw&v=3&sensor=false&callback=window.asyncGoogleMapsCallback");
          b.query.lang = a("html").attr("lang"), a.getScript(b.toString())
        }
        return a.netrGoogleMap.deferred
      },
      defaultOptions: {
        vcards: null,
        iconsets: {},
        multipleInfoWindows: !1
      }
    }
  }(jQuery),
  function(a) {
    "use strict";
    a.fn.netrAutocomplete = function(b) {
      var c = {
        suggestionsUrl: "/temp/querycompletion.json",
        maxSuggestions: 3,
        autocompletePlaceholderClass: "autocomplete-placeholder",
        autocompleteActiveClass: "autocomplete-active"
      };
      b && a.extend(c, b), this.each(function() {
        var b = a(this),
          d = a("<div>", {
            class: c.autocompletePlaceholderClass
          }).insertAfter(b);
        b.autocomplete({
          source: function(b, d) {
            a.ajax({
              url: c.suggestionsUrl,
              data: {
                q: b.term
              },
              dataType: "json",
              success: function(b) {
                b || (b = "");
                var e = a.map(b.slice(0, c.maxSuggestions), function(a) {
                  return {
                    label: a.suggestionHighlighted,
                    value: a.suggestion
                  }
                });
                d(e)
              }
            })
          },
          delay: 200,
          minLength: 2,
          appendTo: d,
          position: {
            my: "left top",
            at: "left top",
            of: d
          },
          open: function() {
            b.addClass(c.autocompleteActiveClass)
          },
          close: function() {
            b.removeClass(c.autocompleteActiveClass)
          }
        }).data("ui-autocomplete")._renderItem = function(b, c) {
          return a("<li></li>").data("item.autocomplete", c).append('<a><span class="suggestion">' + c.label + "</a>").appendTo(b)
        }
      })
    }, a("form[data-querycompletion-url]").each(function() {
      var b = a(this),
        c = a(this).find('input[type="search"]');
      c.netrAutocomplete({
        suggestionsUrl: b.data("querycompletion-url")
      })
    })
  }(jQuery),
  function(a) {
    "use strict";
    a.fn.netrCustomSelect = function(b) {
      var c = {
        replacedClass: "replaced",
        customSelectClass: "custom-select",
        activeClass: "active",
        wrapperElement: '<div class="custom-select-container" />'
      };
      b && a.extend(c, b), this.each(function() {
        var b = a(this);
        b.addClass(c.replacedClass), b.wrap(c.wrapperElement);
        var d = function() {
          var b = a("option:selected", this).text();
          e.find("span span").text(b)
        };
        b.change(d), b.keyup(d);
        var e = a('<span class="' + c.customSelectClass + '" aria-hidden="true"><span><span>' + a("option:selected", this).text() + "</span></span></span>");
        b.after(e), b.bind({
          mouseenter: function() {
            e.addClass(c.activeClass)
          },
          mouseleave: function() {
            e.removeClass(c.activeClass)
          },
          focus: function() {
            e.addClass(c.activeClass)
          },
          blur: function() {
            e.removeClass(c.activeClass)
          }
        })
      })
    }
  }(jQuery),
  function(a) {
    "use strict";
    var b = function(b, c) {
      var d = this;
      this.options = a.extend({
        min: parseFloat(b.attr("min"), 10) || 0,
        max: parseFloat(b.attr("max"), 10) || 10,
        step: parseFloat(b.attr("step"), 10) || 1,
        value: parseFloat(b.val(), 10) || 5,
        valuetextFormat: "{value} stjärnor"
      }, c || {}), this.rangeElement = b.hide(), this.activeRating = this.options.value, this.container = a("<span>", {
        class: "rating-tool",
        tabindex: 0,
        role: "range",
        "aria-labelledby": b.getLabel().generateRandomId(!1).attr("id"),
        "aria-valuemax": this.options.max,
        "aria-valuemin": this.options.min,
        "aria-valuenow": this.activeRating,
        "aria-valuetext": netr.string.supplant(this.options.valuetextFormat, {
          value: this.activeRating
        }),
        mouseover: function(b) {
          var c = a(b.target);
          c.is(".step") && d.preview(parseFloat(c.attr("data-step-value"), 10))
        },
        mouseleave: function() {
          d.set(d.activeRating)
        },
        click: function(b) {
          var c = a(b.target);
          c.is(".step") && d.set(parseFloat(c.attr("data-step-value"), 10))
        },
        keydown: function(a) {
          switch (a.keyCode) {
            case 38:
            case 39:
            case 107:
              a.preventDefault(), d.increase(d.options.step);
              break;
            case 37:
            case 40:
            case 109:
              a.preventDefault(), d.decrease(d.options.step);
              break;
            case 33:
              a.preventDefault(), d.set(d.options.max);
              break;
            case 34:
              a.preventDefault(), d.set(d.options.min)
          }
        }
      }), this.meter = a('<span class="meter"></span>').appendTo(this.container), a.breakpoint(function() {
        return {
          condition: function() {
            try {
              return window.matchMedia("only screen and (max-width:900px) and (min-width: 700px)").matches
            } catch (a) {
              return !1
            }
          },
          enter: function() {
            d.preview(d.activeRating)
          },
          exit: function() {
            d.preview(d.activeRating)
          }
        }
      }());
      for (var e = this.options.min, f = this.options.max; e <= f; e += this.options.step) this.container.append(a("<span>", {
        class: "step",
        "data-step-value": e,
        html: a("<span>", {
          class: "structural",
          html: "Give rating " + e
        })
      }));
      this.container.css("visibility", "hidden").appendTo("body"), this.set(this.activeRating), this.container.css("visibility", "visible").insertAfter(this.rangeElement)
    };
    b.prototype = {
      increase: function(a) {
        var b = this.activeRating + a;
        b <= this.options.max && this.set(b)
      },
      decrease: function(a) {
        var b = this.activeRating - a;
        b >= this.options.min && this.set(b)
      },
      preview: function(a) {
        this.meter.css({
          width: this.container.width() * (a / this.options.max)
        })
      },
      set: function(a) {
        this.preview(a), this.rangeElement.val(a), this.container.attr("aria-valuenow", a), this.container.attr("aria-valuetext", netr.string.supplant(this.options.valuetextFormat, {
          value: this.activeRating
        })), this.activeRating = a
      }
    }, a.fn.netrRatingTool = function(c) {
      return this.each(function() {
        new b(a(this), c)
      })
    }
  }(jQuery), $(function() {
    "use strict";
    $(".search-result").each(function() {
      var a = $(this),
        b = a.find("img");
      b && $.breakpoint(function() {
        return {
          condition: function() {
            return window.matchMedia("only screen and (max-width:700px)").matches
          },
          enter: function() {
            a.is(".office") && (b = a.find(".expandable-map")), a.is(".search-result-image") && b.detachWithPlaceholder().insertBefore(a.find("p:first"))
          },
          exit: function() {
            b.attachToPlaceholder()
          }
        }
      }())
    }), $(".search-results").each(function() {
      var a = $(this),
        b = a.find(".search-other-websites"),
        c = b.find(".search-other-websites-heading");
      if (b.length) {
        var d = $("<button>", {
          class: "link search-other-websites-toggler",
          type: "button",
          html: "<span>" + c.text() + "</span>",
          click: function() {
            b.slideToggle(200), d.toggleClass("expanded")
          }
        });
        c.addClass("structural"), b.hide(), b.prev().append(". ").append(d)
      }
    })
  }), $(function() {
    "use strict";
    $("#ticker-small").length && cision.websolution.smallticker.render({
      accessKey: "F2E063DEE79D46FA9114B158607A909B",
      uiLanguage: cision.uilanguage
    })
  }), $(function() {
    "use strict";
    $(document).on("click", ".tweet-image", function(a) {
      a.preventDefault();
      var b = $(this),
        c = $.netrdialog({
          extraClass: "dialog-image"
        });
      c.setContent('<img src="' + b.attr("href") + '" alt="" />'), c.open()
    })
  }),
  function(a) {
    "use strict";
    var b = function(b, c) {
      var d, e, f = this;
      this.activeModule = null, this.options = a.extend({}, {
        moduleSelector: ".m",
        headingSelector: ".m-h",
        contentSelector: ".m-c",
        activeSelector: ".active",
        selectedClass: "sel",
        addToHistory: !0,
        tabNavigationContainerClass: "tab-navigation",
        tabNavigationClass: "tabs cf",
        enabledTabpanelsClass: "active"
      }, c || {}), this.el = b, this.navigation = a('<ul class="' + f.options.tabNavigationClass + '" role="tablist">'), this.ignoreHashChange = !1, e = this.el.find(this.options.moduleSelector);
      var g = new netr.URI(document.location.toString()).fragment;
      this.modules = a.map(e, function(b, c) {
        var h = {
          module: a(b),
          id: a(b).attr("id") || "tabpanel-" + c
        };
        return (g.length && h.id === g || !g.length && h.module.is(f.options.activeSelector) || 0 === c) && (d = h), h.module.attr({
          id: "",
          role: "tabpanel",
          "aria-labelledby": "tabnav-" + c
        }), h.tab = a("<li>", {
          class: 0 === c ? "first" : c === e.length - 1 ? "last" : "",
          role: "presentation"
        }).append(a("<a>", {
          href: "#" + (h.module.attr("id") || ""),
          role: "tab",
          id: "tabnav-" + c,
          tabindex: "-1",
          html: "<span>" + h.module.find(f.options.headingSelector).hide().text() + "</span>",
          click: function(b) {
            b.preventDefault(), f.ignoreHashChange = !0, f.showItem(h, f.options.addToHistory, !0), a("table", a(".tab-content")).tablescroll(), a("#target-estimate-historical").trigger("chart.create")
          },
          keydown: function(b) {
            switch (b.which) {
              case 37:
                a(this).parent().prev().length > 0 ? a(this).parent().prev().find(">a").click() : a(f.navigation).find("li:last>a").click();
                break;
              case 39:
                a(this).parent().next().length > 0 ? a(this).parent().next().find(">a").click() : a(f.navigation).find("li:first>a").click()
            }
          }
        })).appendTo(f.navigation), h
      }), this.el.prepend(a('<div class="' + f.options.tabNavigationContainerClass + '">').append(this.navigation)), this.el.addClass(f.options.enabledTabpanelsClass), d && this.showItem(d, !1, !1), f.options.addToHistory && a(window).bind("hashchange", function() {
        if (!f.ignoreHashChange) {
          var b = new netr.URI(document.location.toString()).fragment;
          b.length ? a.each(f.modules, function(a, c) {
            c.id === b && f.showItem(c, f.options.addToHistory, !0)
          }) : f.showItem(f.modules[0], !1, !0), f.ignoreHashChange = !1
        }
      }), a(window).on("load resize", function() {
        f.navigation.outerHeight() > 1.5 * f.navigation.find("a:first").outerHeight() ? f.el.addClass("multi-row") : f.el.removeClass("multi-row")
      })
    };
    b.prototype = {
      showItem: function(b, c, d) {
        var e = this,
          f = new netr.URI(document.location.toString());
        a.each(this.modules, function() {
          b === this ? (this.tab.addClass(e.options.selectedClass).find("a").attr({
            "aria-selected": "true",
            tabindex: "0"
          }), d === !0 && this.tab.find("a").focus(), this.module.removeClass("hidden-tab").attr("aria-hidden", "false"), c !== !1 && (f.fragment = this.id, document.location = f.toString()), this.tab.trigger("show_module.netrtabbedmodule", this), e.activeModule = this, e.ignoreHashChange = !1) : (this.tab.removeClass(e.options.selectedClass).find("a").attr({
            "aria-selected": "false",
            tabindex: "-1"
          }), this.module.addClass("hidden-tab").attr("aria-hidden", "true"), this.tab.trigger("hide_module.netrtabbedmodule", this))
        })
      }
    }, a.fn.netrtabbedmodule = function(c) {
      return this.each(function() {
        new b(a(this), c)
      })
    }
  }(jQuery), $(function() {
    "use strict";
    $(".office").each(function() {
      var a = $(this),
        b = a.find(".office-map");
      b && $.breakpoint(function() {
        return {
          condition: function() {
            return window.matchMedia("only screen and (max-width:700px)").matches
          },
          enter: function() {
            b.detachWithPlaceholder().insertBefore(a.find("dl:first"))
          },
          exit: function() {
            b.attachToPlaceholder()
          }
        }
      }())
    })
  }), $(function() {
    "use strict";
    $(".world-map ul a").on("mouseenter", function() {
      $('.continent[data-continent="' + $(this).data("continent") + '"]').attr("class", "continent hover")
    }).on("mouseleave", function() {
      $('.continent[data-continent="' + $(this).data("continent") + '"]').attr("class", "continent")
    }), Modernizr.svg || $(".world-map").append('<img src="/gui/i/world-map.png" />')
  }), $(function() {
    "use strict";

    function a(a) {
      var b;
      b || (b = $.netrdialog({
        extraClass: "dialog-map"
      }), b.dialogElement.on("open.netrdialog", function() {
        var c = $("<div>", {
          class: "map map-large"
        });
        b.setContent(c), $.netrGoogleMap.loadAPI().then(function() {
          c.netrGoogleMap({
            vcards: a.find(".vcard"),
            zoomLevel: 11
          })
        })
      })), b.open()
    }
    $(".expandable-map").each(function() {
      var b = $(this);
      b.append($("<button>", {
        class: "link map-expand title-tooltip",
        title: netr.string.translate("salesOffices.viewLargerMapTitle"),
        type: "button",
        html: netr.string.translate("salesOffices.viewLargerMap"),
        click: function(c) {
          c.preventDefault(), c.stopPropagation(), a(b)
        }
      })), b.click(function(c) {
        c.stopPropagation(), a(b)
      })
    }), $(".expandable-map-text").each(function() {
      var b = $(this);
      b.find("a").click(function(c) {
        c.preventDefault(), c.stopPropagation(), a(b)
      })
    })
  }),
  function(a) {
    "use strict";
    var b = {
        FOUR_TO_THREE: .75,
        SIXTEEN_TO_NINE: 9 / 16
      },
      c = !0;
    a.fn.youtubethumb = function() {
      return this.each(function(d) {
        var e, f, g, h = a(this),
          i = h.find("img"),
          j = h.parent().width(),
          k = new netr.URI(h.attr("href")).query.v,
          l = "player-" + d,
          m = !0,
          n = a("<div>").addClass("video-container").append(a("<div>").attr("id", l));
        if (k) {
          i.length || (h.addClass("youtube-thumb"), e = new netr.URI("http://gdata.youtube.com/feeds/api/videos/"), e.path = e.path + k, e.query = {
            v: 2,
            alt: "jsonc"
          }, a.getJSON(e.toString() + "&callback=?", function(c) {
            var d = c;
            g = "widescreen" === d.data.aspectRatio ? b.SIXTEEN_TO_NINE : b.FOUR_TO_THREE, h.attr("title", d.data.title), f = a("<div>", {
              css: {
                "text-align": "center",
                overflow: "hidden",
                height: Math.round(j * g)
              }
            }), i = a("<img>", {
              width: j,
              height: Math.round(j * b.FOUR_TO_THREE),
              src: d.data.thumbnail.hqDefault,
              alt: 'Play "' + d.data.title + '"'
            }), g === b.SIXTEEN_TO_NINE ? (f.css("height", Math.round(j * b.SIXTEEN_TO_NINE)), i.css("margin-top", -Math.round((j * b.FOUR_TO_THREE - j * b.SIXTEEN_TO_NINE) / 2))) : f.css("height", Math.round(j * b.FOUR_TO_THREE)), h.empty().append(f.append(i, '<span class="play-overlay"></span>'))
          }));
          var o = function() {
            var b, d;
            h.is(".youtube-thumb-dialog") && window.matchMedia("only screen and (min-width:701px)").matches && (d = a.netrdialog({
              extraClass: "dialog-video"
            })), window.onYouTubeIframeAPIReady = function() {
              b = new YT.Player(l, {
                videoId: k,
                playerVars: {
                  rel: 0
                },
                events: {
                  onReady: e,
                  onStateChange: f
                }
              })
            };
            var e = function() {
                Modernizr.touch || b.playVideo();
                var a = setInterval(function() {
                    var c = b.getCurrentTime() / b.getDuration();
                    if (c > .5) {
                      try {
                        window.dataLayer.push({
                          eventCategory: "Video",
                          eventAction: "Reached middle of video",
                          eventLabel: b.A.videoData.title
                        })
                      } catch (a) {}
                      clearInterval(a)
                    }
                  }, 1e3),
                  c = setInterval(function() {
                    var a = b.getCurrentTime() / b.getDuration();
                    if (a > .9) {
                      try {
                        window.dataLayer.push({
                          eventCategory: "Video",
                          eventAction: "Reached end of video",
                          eventLabel: b.A.videoData.title
                        })
                      } catch (a) {}
                      clearInterval(c)
                    }
                  }, 1e3)
              },
              f = function(a) {
                if (a.data === YT.PlayerState.PLAYING && m) {
                  try {
                    window.dataLayer.push({
                      eventCategory: "Video",
                      eventAction: "Video started",
                      eventLabel: a.target.A.videoData.title
                    })
                  } catch (a) {}
                  m = !1
                }
              };
            if (h.is(".youtube-thumb-dialog") && window.matchMedia("only screen and (min-width:701px)").matches ? (d.open(), d.setContent(n), setTimeout(function() {
                d.dialogElement.css("top", Math.max(a(document).scrollTop() + 20, a(document).scrollTop() + a(window).height() / 2 - d.dialogElement.height() / 2))
              }, 100)) : h.hide().after(n), c) {
              var g = document.createElement("script");
              g.src = "https://www.youtube.com/iframe_api";
              var i = document.getElementsByTagName("script")[0];
              i.parentNode.insertBefore(g, i), c = !1
            } else window.onYouTubeIframeAPIReady();
            d && d.position()
          };
          h.click(function(a) {
            a.preventDefault(), a.stopPropagation(), o()
          })
        }
      })
    }
  }(jQuery),
  function(a) {
    "use strict";
    a.fn.instaList = function() {
      return this.each(function() {
        var b = a(this).find(".insta-list__topics-form");
        b.find("button").addClass("structural"), b.find("select").on("change", function() {
          b.find('[type="submit"]').click()
        })
      })
    }
  }(jQuery),
  function(a) {
    "use strict";
    a.fn.instaPost = function() {
      return this.each(function() {
        var b = a(this).find("video.insta-post__media-object");
        b.on("click", function() {
          var a = this;
          a.paused ? a.play() : a.pause()
        })
      })
    }
  }(jQuery), $(function() {
    "use strict";
    $(".teaser").each(function() {
      var a = $(this);
      1 === a.find("a").length && a.addClass("teaser-clickable"), a.on("mouseup", function(b) {
        a.is(".teaser-clickable") && 3 !== b.which && ($(b.target).is("a") || 0 !== $(b.target).parents("a").length || (a.find(".open-in-dialog, .around-the-globe-link, .youtube-thumb").length ? a.find("a").click() : a.find("a").smartclick(b)))
      })
    }), $.breakpoint(function() {
      var a = $(".teaser-floated-image:not(.teaser-floated-image-square) .teaser-content .date-category");
      return {
        condition: function() {
          return window.matchMedia("only screen and (max-width:400px)").matches
        },
        enter: function() {
          var b = $(".teaser-floated-image img").length,
            c = 0;
          $(".teaser-floated-image img").each(function() {
            var a = $(this),
              b = 1.2;
            a.width() > 0 && "undefined" != typeof a.attr("width") && 0 !== a.attr("width").length ? parseInt(a.attr("width"), 10) / parseInt(a.attr("height"), 10) < b && c++ : a.width() / a.height() < b && c++
          }), c > b / 2 && $(".teaser-floated-image").addClass("teaser-floated-image-square"), a.each(function() {
            var a = $(this);
            a.parents(".teaser").find(".teaser-heading").after(a)
          })
        },
        exit: function() {
          $(".teaser-floated-image-square").removeClass("teaser-floated-image-square"), a.each(function() {
            var a = $(this);
            a.parents(".teaser").find(".teaser-content").prepend(a)
          })
        }
      }
    }())
  }), $(function() {
    "use strict";
    var a = $(".filters");
    $.breakpoint(function() {
      var b;
      return {
        condition: function() {
          return window.matchMedia("only screen and (max-width:900px)").matches
        },
        first_enter: function() {
          b = $(".on-page-search")
        },
        enter: function() {
          b.length && (b.after(a.detachWithPlaceholder()), a.addClass("filters-after-form"))
        },
        exit: function() {
          a.attachToPlaceholder(), a.removeClass("filters-after-form")
        }
      }
    }())
  }), $(function() {
    "use strict";

    function a(a, c) {
      var d = new netr.URI(a.attr("href")).query.v,
        e = $("<div>", {
          id: "video-container"
        }),
        f = document.createElement("script");
      f.src = "https://www.youtube.com/iframe_api";
      var g = document.getElementsByTagName("script")[0];
      g.parentNode.insertBefore(f, g), window.onYouTubeIframeAPIReady = function() {
        c.append(e), b = new YT.Player("video-container", {
          videoId: d,
          events: {
            onReady: h
          },
          width: c.width(),
          height: parseInt(c.width() / 16 * 9, 10)
        })
      };
      var h = function() {
        b.playVideo()
      }
    }
    var b, c = 15,
      d = function() {
        $("html, body").animate({
          scrollTop: $("#content-primary").offset().top - 30
        }, 750, "easeInOutQuad")
      };
    $(".section-intro-image").each(function() {
      var a, b = $(this),
        e = b.find(".section-intro-image-image"),
        f = function() {
          return !!$("#content-primary").length && (window.matchMedia("only screen and (min-width:701px)").matches && $("#content-primary").offset().top > $(window).height() + $(window).scrollTop() - c)
        };
      !a && f() && (a = $("<div />"), a.addClass("arrow").attr("aria-hidden", "true").click(d), b.append(a)), $(window).on("scroll", function() {
        var c = $(window).scrollTop();
        window.matchMedia("only screen and (min-width:701px)").matches ? c < .285714 * b.height() * 4 && e.css("top", parseInt(.25 * c, 10) * -1) : e.css("top", 0), a && !f() && a.addClass("hide").unbind("click")
      })
    }), $(".section-intro-play").each(function() {
      var c, d;
      $(this).on("click", function(e) {
        e.preventDefault();
        var f = $(this),
          g = $(".section-intro-image"),
          h = g.find("img");
        g.css("min-height", g.find("img").outerHeight()).addClass("theater-mode"), setTimeout(function() {
          h.detachWithPlaceholder(), $.ajax({
            url: f.attr("href"),
            success: function(e) {
              var f = $(e);
              console.log(c), c || (c = $("<div>", {
                class: "group-inner"
              })), d || (d = $("<button>", {
                type: "button",
                class: "link section-intro-image-close",
                html: "<span>" + netr.string.translate("sectionIntroImage.close") + "</span>",
                click: function(a) {
                  a.preventDefault(), "undefined" != typeof window.YT ? (b.stopVideo(), c.hide()) : c.remove(), g.removeClass("theater-mode").css("min-height", "0"), h.attachToPlaceholder()
                }
              }));
              var i = f.find('a[href*="//www.youtube.com"]');
              i.length ? "undefined" == typeof window.YT ? a(i, c) : (c.fadeIn(), b.playVideo()) : c.append(f), c.prepend(d), g.append(c).css("min-height", "0")
            }
          })
        }, 500)
      })
    })
  }), $(function() {
    "use strict";
    var a = $('.breadcrumbs[role="navigation"]');
    $.breakpoint(function() {
      return {
        condition: function() {
          return window.matchMedia("only screen and (max-width:500px)").matches
        },
        enter: function() {
          a.detachWithPlaceholder(), $(".footer").before(a), a.show()
        },
        exit: function() {
          a.attachToPlaceholder()
        }
      }
    }())
  }), $(function() {
    "use strict";
    $(".teaser a").each(function() {
      "#story" === $(this).attr("href").slice(-6) && $(this).addClass("around-the-globe-link")
    }), $(document).on("click", ".around-the-globe-teaser a, .around-the-globe-link", function(a) {
      a.preventDefault(), a.stopPropagation();
      var b = $(this);
      $.getFragment({
        url: b.attr("href"),
        async: !1,
        success: function(a) {
          if (a.length) {
            var b = $.netrdialog({
              extraClass: "dialog-dark"
            });
            b.setContent(a), b.open(), b.dialogElement.parent().addClass("darker")
          }
        }
      })
    }), $(document).on("click", ".around-the-globe-story-nav a", function(a) {
      a.preventDefault(), a.stopPropagation();
      var b = $(this),
        c = $(".around-the-globe-story");
      b.addClass("loading"), $.getFragment({
        url: b.attr("href"),
        async: !1,
        success: function(a) {
          b.removeClass("loading"), c.find(".around-the-globe-story-nav").replaceWith(a.find(".around-the-globe-story-nav")), a.length && (c.find("h1").addClass("fade-out"), c.find(".around-the-globe-story-text").addClass("fade-out"), c.find(".around-the-globe-story-image img").addClass("slide-out"), c.find(".around-the-globe-story-image-inner").append(a.find(".around-the-globe-story-image img")), c.find(".around-the-globe-story-number").addClass("fade-out"), setTimeout(function() {
            c.find("h1").html(a.find("h1").html()).removeClass("fade-out"), c.find(".around-the-globe-story-text").html(a.find(".around-the-globe-story-text").html()).removeClass("fade-out"),
              c.find(".around-the-globe-story-number").html(a.find(".around-the-globe-story-number").html()).removeClass("fade-out")
          }, 500), setTimeout(function() {
            c.find("img.slide-out").remove()
          }, 1e3)), $(window).scrollTop() > c.offset().top && $("html, body").animate({
            scrollTop: c.offset().top - 20
          }, 500)
        }
      })
    })
  }), $(function() {
    "use strict";
    var a = cision.websolution.insiders;
    $("#insiders-date-start").val(moment(a.settings.startDate).format("DD/MM/YYYY")).datepicker("setDate", moment(a.settings.startDate).toDate()), $("#insiders-date-end").val(moment(a.settings.endDate).format("DD/MM/YYYY")).datepicker("setDate", moment(a.settings.endDate).toDate()), $(".insiders form").submit(function(b) {
      b.preventDefault();
      var c = moment($("#insiders-date-start").val(), "DD-MM-YYYY").format("YYYY-MM-DD"),
        d = moment($("#insiders-date-end").val(), "DD-MM-YYYY").format("YYYY-MM-DD");
      c && a.render({
        accessKey: "0C9AD8114C9E427D8709F3AD693D62EC",
        uiLanguage: cision.uilanguage,
        startDate: c,
        endDate: d || null
      })
    })
  }), $(function() {
    "use strict";
    var a = $(".extra-header-startpage");
    if (a.length) {
      var b, c = $(".extra-header-blockquote"),
        d = $("#main .group-inner");
      $.breakpoint(function() {
        return {
          condition: function() {
            return window.matchMedia("only screen and (max-width:900px)").matches
          },
          first_enter: function() {
            b = $("<div>", {
              id: "blockquote-wrapper",
              class: "blockquote-wrapper",
              "aria-expanded": "false"
            })
          },
          enter: function() {
            c.detachWithPlaceholder(), b.append(c), d.append(b)
          },
          exit: function() {
            c.attachToPlaceholder(), b.detach()
          }
        }
      }())
    }
  }),
  function(a) {
    "use strict";
    var b = function(b, c) {
      var d, e = this;
      this.options = a.extend({
        inputSelector: "#searchtext",
        submitButtonSelector: 'button[type="submit"]',
        searchResultsUrl: "/templates/searchinstant.aspx",
        closeButtonHTML: '<span class="structural">Avbryt sökning</span>',
        hijackSubmit: !1,
        showOverlay: !0,
        timeout: 300,
        hideSubmitButton: !1,
        partial: !0,
        includeSelects: !1
      }, c || {}), this.isActive = !1, this.wrapper = b, this.input = this.wrapper.find(this.options.inputSelector), this.submitButton = this.wrapper.find(this.options.submitButtonSelector), this.options.partial && (this.searchresultsBox = a('<div class="search-results-popup" tabindex="0">'), this.searchresults = a('<div class="search-results-container">').appendTo(this.searchresultsBox), this.searchresultsclose = a("<a>", {
        href: "#",
        class: "search-results-popup-close",
        html: this.options.closeButtonHTML
      }).appendTo(this.searchresultsBox), this.searchresultsOverlay = a('<div class="search-results-overlay">'), this.searchresults.keydown(function(b) {
        var c, d = a(b.target).closest("a");
        27 === b.keyCode ? e.escape() : 40 === b.keyCode ? (b.stopPropagation(), b.preventDefault(), c = d.closest("li").next("li").find("a:first"), c.length && c.focus()) : 38 === b.keyCode ? (b.stopPropagation(), b.preventDefault(), c = d.closest("li").prev("li").find("a:first"), c.length ? c.focus() : e.input.focus()) : e.input.focus()
      }), this.searchresultsclose.click(function(a) {
        a.preventDefault(), e.escape(), e.reset()
      })), this.input.attr("autocomplete", "off"), this.input.val() && this.options.partial && this.getSearchResults(), this.options.hideSubmitButton && this.submitButton.addClass("structural"), e.options.partial ? this.input.bind({
        focus: function() {
          !e.isActive && e.options.partial && (!e.input.val() || e.input.is(".placeholder") && e.input.val() === e.input.attr("placeholder") || (e.showSearchResults(), e.showSearchResultsOverlay(), e.input.autocomplete("close")), e.isActive = !0)
        },
        keyup: function(a) {
          27 === a.keyCode ? e.escape() : 40 === a.keyCode ? (a.stopPropagation(), a.preventDefault(), e.searchresults.find("li a:first").focus()) : e.input.val().length >= 3 ? (clearTimeout(d), d = setTimeout(function() {
            e.showSearchResults(), e.getSearchResults()
          }, e.options.timeout)) : (e.hideSearchResultsOverlay(), e.hideSearchResults())
        }
      }) : this.input.unbind("keyup").bind({
        keyup: function(a) {
          e.input.val().length >= 3 && 27 !== a.keyCode && 40 !== a.keyCode && (clearTimeout(d), d = setTimeout(function() {
            e.getSearchResults()
          }, e.options.timeout))
        }
      }), this.options.includeSelects && this.wrapper.find("select").each(function() {
        a(this).bind("change", function() {
          e.getSearchResults()
        })
      }), this.input.closest("form").submit(function(a) {
        e.options.hijackSubmit && (a.preventDefault(), e.showSearchResults(), e.getSearchResults(), e.searchresultsBox.focus()), e.input.val(e.input.val())
      }), a.breakpoint(function() {
        return {
          condition: function() {
            return window.matchMedia("screen and (max-width:699px)").matches && !netr.forceDesktopLayout
          },
          enter: function() {
            e.submitButton.removeClass("button button-style-2 button-color-2 button-big").addClass("search-submit")
          },
          exit: function() {
            e.submitButton.addClass("button button-style-2 button-color-2 button-big").removeClass("search-submit")
          }
        }
      }())
    };
    b.prototype = {
      escape: function() {
        this.hideSearchResultsOverlay(), this.hideSearchResults(), this.input.blur(), this.isActive = !1
      },
      reset: function() {
        this.hideSearchResults(), this.input.val(""), this.input.focus()
      },
      showSearchResults: function() {
        this.showSearchResultsOverlay(), this.input.attr("data-instant-search-active", ""), this.searchresultsBox.insertAfter(this.input)
      },
      hideSearchResults: function() {
        this.input.removeAttr("data-instant-search-active"), this.hideSearchResultsOverlay(), this.searchresultsBox.detach()
      },
      showSearchResultsOverlay: function() {
        var b;
        this.options.showOverlay && (b = a("#content-2"), this.searchresultsOverlay.height(b.height())), this.searchresultsOverlay.appendTo(b)
      },
      hideSearchResultsOverlay: function() {
        this.searchresultsOverlay.detach()
      },
      getSearchResults: function(b) {
        var c = this,
          d = c.wrapper.serialize();
        b && (d.q = b), c.options.partial ? a.get(netr.string.stripHash(this.options.searchResultsUrl), d, function(a) {
          c.searchresultsclose.detach(), c.searchresults.html(a), c.searchresults.prepend(c.searchresultsclose)
        }) : a.getFragment({
          url: c.wrapper.attr("action"),
          type: c.wrapper.attr("method") || "post",
          data: d,
          async: !1,
          success: function(b) {
            a(".material-datasheet-search > .row:first").html(a(b).find(".material-datasheet-search > .row:first").html()), a(".datasheets-listing").html(a(b).find(".datasheets-listing").html()), a(".paging").html(a(b).find(".paging").html()), documentReadyFunctions(a("#content"))
          }
        })
      }
    }, a.fn.instantsearch = function(a) {
      new b(this, a)
    }
  }(jQuery), $(function() {
    "use strict";
    $(".illustration-list__link-text").each(function() {
      for (var a = $(this), b = a.text().split(" "), c = "", d = 0; d < b.length; d++) d + 1 !== b.length && 1 !== b.length ? c += b[d] + " " : (c += '<span class="illustration-list__text-icon-wrapper">', c += b[d], c += '<span class="illustration-list__arrow"></span></span>');
      a.html(c)
    })
  }),
  function() {
    "use strict";

    function a(a, c, d, e, f, g, h, i, j) {
      var k = null,
        l = function(m) {
          null === k && (k = m);
          var n = m - k,
            o = Math.min(n / i, 1);
          a.clearRect(c, 0, a.canvas.width, .92 * a.canvas.height), b(a, c, d, e, f, g, h, 0, o), o < 1 ? window.requestAnimationFrame(l) : j && j()
        };
      window.requestAnimationFrame(l)
    }

    function b(a, b, d, e, f, g, h, i, j) {
      if (a.beginPath(), 0 === i && 1 === j) a.moveTo(b, d), a.quadraticCurveTo(e, f, g, h);
      else if (i !== j) {
        var k = i * i,
          l = 1 - i,
          m = l * l,
          n = 2 * i * l,
          o = m * b + n * e + k * g,
          p = m * d + n * f + k * h;
        k = j * j, l = 1 - j, m = l * l, n = 2 * j * l;
        var q = m * b + n * e + k * g,
          r = m * d + n * f + k * h,
          s = c(c(b, e, i), c(e, g, i), j),
          t = c(c(d, f, i), c(f, h, i), j);
        a.moveTo(o, p), a.quadraticCurveTo(s, t, q, r)
      }
      a.stroke(), a.closePath()
    }

    function c(a, b, c) {
      return (1 - c) * a + c * b
    }
    if (document.querySelector(".maturity-curve")) {
      var d = document.querySelector(".maturity-curve"),
        e = document.getElementById("maturity-curve-canvas"),
        f = e.getContext("2d"),
        g = e.parentElement.clientWidth - 2 * parseInt(window.getComputedStyle(e.parentElement, null).getPropertyValue("padding-left"), 10);
      e.setAttribute("width", g), e.setAttribute("height", .44 * g), f.strokeStyle = "black", f.lineWidth = 2, f.save(), f.beginPath(), f.moveTo(0, e.clientHeight - 12), f.lineTo(e.clientWidth - 1, e.clientHeight - 12), f.stroke(), f.restore(), f.save(), f.beginPath(), f.moveTo(e.clientWidth - 11, e.clientHeight - 22), f.lineTo(e.clientWidth - 1, e.clientHeight - 12), f.lineTo(e.clientWidth - 11, e.clientHeight - 2), f.stroke(), f.restore(), f.strokeStyle = "#09f", a(f, 0, .9 * e.clientHeight, .38 * e.clientWidth, .9 * e.clientHeight, .6 * e.clientWidth, .45 * e.clientHeight, 1e3, function() {
        a(f, .6 * e.clientWidth, .45 * e.clientHeight, .8 * e.clientWidth, 1, e.clientWidth, 1, 1e3, function() {
          d.setAttribute("class", d.getAttribute("class") + " has-complete-curve")
        })
      })
    }
  }(),
  function() {
    "use strict";

    function a() {
      if (window.matchMedia && !window.matchMedia("screen and (max-width:1200px)").matches) {
        var e, f = c.offset().top,
          g = c.height(),
          h = $(window).outerHeight(),
          i = $(window).scrollTop(),
          j = b.outerHeight();
        i + h / 2 > f + g - j / 2 && (e = i + h / 2 - f - j / 2, e < g / 2 ? parseInt(b.css("top")) !== g / 2 && b.css("top", g / 2) : parseInt(b.css("top")) !== e && b.css("top", e)), parseInt(b.css("top")) > g - j / 2 ? (e = parseInt(b.css("top")) - g / 2 - 70, parseInt(d.css("top")) !== e && d.css("top", e)) : 0 !== parseInt(d.css("top")) && d.css("top", 0), $(".parallax-areas__fact").each(function() {
          var a = $(this);
          a.offset().top > a.parents(".parallax-areas__area").offset().top + 50 ? a.addClass("parallax-areas__fact--show") : a.removeClass("parallax-areas__fact--show")
        })
      }
      requestAnimationFrame(a)
    }
    var b = $(".parallax-areas__group--first .parallax-areas__image"),
      c = b.closest(".parallax-areas__area"),
      d = b.closest(".parallax-areas").find(".parallax-areas__group--second .parallax-areas__image");
    0 !== b.length && requestAnimationFrame(a)
  }(), $(function() {
    "use strict";
    $(".like").each(function() {
      function a() {
        var a;
        try {
          a = d.text().match(/\d+/)[0]
        } catch (a) {}
        return !!a && a
      }
      var b = $(this),
        c = $("<button>", {
          type: "button",
          html: b.html(),
          class: b.attr("class") + " link"
        }),
        d = c.find(".like__text");
      if ($.each(b.prop("attributes"), function() {
          this.name.match(/^data\-/i) && c.attr(this.name, this.value)
        }), c.on("click", function() {
          $.ajax({
            url: c.is(".like--liked") ? c.data("unlike-url") : c.data("like-url"),
            data: "id=" + c.data("like-id"),
            success: function() {
              var b = a();
              c.toggleClass("like--liked"), b ? c.is(".like--liked") ? d.html(netr.string.translate("like.youAndOthersLike").replace("{0}", b)) : parseInt(b, 10) > 1 ? d.html(netr.string.translate("like.othersLike").replace("{0}", b)) : 1 === parseInt(b, 10) && d.html(netr.string.translate("like.oneOtherLike")) : c.is(".like--liked") ? d.html(netr.string.translate("like.youLike")) : d.html(netr.string.translate("like.noLikes")), localStorage && (c.is(".like--liked") ? localStorage.setItem("like" + c.data("like-id"), !0) : localStorage.removeItem("like" + c.data("like-id")))
            }
          })
        }), b.replaceWith(c), localStorage && localStorage.getItem("like" + c.data("like-id"))) {
        c.addClass("like--liked");
        var e = a();
        e && e <= 1 ? d.html(netr.string.translate("like.youLike")) : d.html(netr.string.translate("like.youAndOthersLike").replace("{0}", e - 1))
      }
    })
  }),
  function() {
    "use strict";
    $(function() {
      documentReadyFunctions($("html"))
    }), $(window).load(function() {
      $("span.caption").each(function() {
        var a = $(this),
          b = a.children("img");
        a.not(".fullwidth, .fullwidth-dec").has("img").css("width", b.outerWidth())
      })
    }), Modernizr.svg || $(function() {
      var a, b, c;
      $('img[src$=".svg"]').each(function() {
        a = $(this), b = a.attr("src"), c = b.split("/").pop(), a.attr("src", b.replace(c, "png/" + c.replace(".svg", ".png")))
      })
    }), Modernizr.csscolumns || $('ul[class^="cols-"], ol[class^="cols-"]').each(function() {
      for (var a = $(this), b = parseInt(a.attr("class").charAt(a.attr("class").length - 1), 10), c = $('<div class="grid" />'), d = a.find("li").length, e = 0; e < b; e++) {
        var f = 12 / b,
          g = $('<div data-column-span="' + f + '" />'),
          h = Math.ceil(d / b),
          i = a.find("li").filter(function(a) {
            return a < h
          });
        e !== b - 1 ? i.each(function() {
          var a = $(this);
          g.append(a.html()), a.remove()
        }) : a.find("li").each(function() {
          g.append($(this).html())
        }), c.append(g)
      }
      a.replaceWith(c)
    });
    var a = [{
      name: "Sandvik Coromant",
      test: function(a) {
        return /^(www\.)?sandvik\.coromant\.com$/.test(a.domain)
      }
    }, {
      name: "Sandvik Coromant",
      test: function(a) {
        return /^(www\.)?coromant\.sandvik\.com$/.test(a.domain)
      }
    }, {
      name: "Sandvik Materials Technology",
      test: function(a) {
        return /^(www\.)?smt\.sandvik\.(com|info)$/.test(a.domain)
      }
    }, {
      name: "Sandvik Process Systems",
      test: function(a) {
        return /^(www\.)?processsystems\.sandvik\.com$/.test(a.domain)
      }
    }, {
      name: "Sandvik Construction",
      test: function(a) {
        return /^(www\.)?construction\.sandvik\.com$/.test(a.domain)
      }
    }, {
      name: "Sandvik Mining",
      test: function(a) {
        return /^(www\.)?mining\.sandvik\.com$/.test(a.domain)
      }
    }, {
      name: "Sandvik Mining and Construction",
      test: function(a) {
        return /^(www\.)?miningandconstruction\.sandvik\.com$/.test(a.domain)
      }
    }, {
      name: "Kanthal",
      test: function(a) {
        return /^(www\.)?kanthal\.com$/.test(a.domain)
      }
    }, {
      name: "TDM Systems",
      test: function(a) {
        return /^(www\.)?ospreymetals\.co\.uk$/.test(a.domain)
      }
    }, {
      name: "Sandvik Hyperion",
      test: function(a) {
        return /^(www\.)?hyperion\.sandvik\.com$/.test(a.domain)
      }
    }];
    $(document).on("click", function(b) {
      var c = $(b.target).closest("a"),
        d = new netr.URI(c.attr("href")),
        e = new netr.URI(window.location.href);
      if ("mailto" !== d.scheme.slice(0, 6)) {
        var f = netr.array.first(a, function(a) {
          return a.test(d) && !a.test(e)
        });
        if (f) {
          var g = "Transfering to other Sandvik Site",
            h = "Transfering to " + f.name,
            i = d.toString();
          try {
            ga && ga("send", "event", g, h, i)
          } catch (a) {}
          b.preventDefault();
          var j = $.netrdialog();
          j.openTransferDialog(d, f.name)
        }
      }
    }), svg4everybody()
  }(), $(function() {
    "use strict";

    function a(a) {
      var b = new netr.URI(a),
        c = b.path.split("/"),
        d = c[c.length - 2];
      return d
    }
    var b = $("html").attr("lang");
    if (($("body").is("#four-oh-four") || $("#search-result").length) && window.dataLayer) {
      var c, d = $("html").attr("data-pageview-url");
      if (c = "" !== d ? new netr.URI(d) : new netr.URI(document.location.toString()), c.scheme = "", c.domain = "", c.port = "", $("body").is("#four-oh-four")) {
        var e = new netr.URI("/" + b + "/404");
        e.query = {
          page: document.location.pathname + document.location.search,
          from: document.referrer
        }, c = e.toString()
      } else $("#search-result").length && 0 === $("#search-result .item").length && (c.query.spec_cat = "No hits");
      window.dataLayer.push({
        event: "pageview",
        eventData: c.toString()
      })
    }
    $("body").on("click", "a", function(a) {
        if (window.dataLayer) {
          var b = $(a.target);
          b.is("a") || (b = b.parents("a"));
          var c = b.attr("href") || "",
            d = /\.(7z|aac|arc|arj|asf|avi|bin|csv|docx?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|png|pptx?|qtm?|ra(m|r)?|tar|tgz|txt|wav|wma|wmv|wpd|xlsx?|xml|z|zip)$/;
          if (!b.isExternal() && c.match(d)) {
            a.preventDefault();
            var e = new netr.URI(c);
            e.scheme = "", e.domain = "", e.port = "", e.path = "/" + $("html").attr("lang") + e.path, window.dataLayer.push({
              event: "virtualPageview",
              eventData: e.toString()
            }), setTimeout(function() {
              document.location = c
            }, 100)
          }
        }
      }),
      function() {
        var a = "";
        $(".open-email-dialog").on("open.netrdialog", function(b, c) {
          if (window.dataLayer) {
            var d = "Contact us",
              e = "Open e-mail dialogue",
              f = $(this).text();
            c.dialogElement.find("#topic").change(function() {
              a = $(this).val()
            }).change(), window.dataLayer.push({
              event: "emailOpenEvent",
              eventCategory: d,
              eventAction: e,
              eventLabel: f
            })
          }
        }), $(".open-email-dialog").on("load.netrdialog", function() {
          if (window.dataLayer) {
            var b = $(this);
            if (b.netrdialog("getdialog").contentElement.find(".confirmation-message").length) {
              var c = "Contact us",
                d = "Sent e-mail dialogue",
                e = a;
              window.dataLayer.push({
                event: "emailSendEvent",
                eventCategory: c,
                eventAction: d,
                eventLabel: e
              })
            }
          }
        }), $(".open-in-dialog").on("load.netrdialog", function() {
          a = ""
        })
      }(), $("body").on("click", ".page-action-print button", function() {
        if (window.dataLayer) {
          var a = "Print",
            b = "Open print dialogue",
            c = "Not set";
          window.dataLayer.push({
            event: "printEvent",
            eventCategory: a,
            eventAction: b,
            eventLabel: c
          })
        }
      }), $("body").on("click", 'a[href="http://itunes.apple.com/se/app/sandvik-150/id496516582?mt=8&ls=1"]', function() {
        if (window.dataLayer) {
          var a = $(this),
            b = "Journey App",
            c = "Not set";
          window.dataLayer.push({
            event: "journeyAppEvent",
            eventCategory: b,
            eventAction: "View in App Store",
            eventLabel: c
          }), setTimeout(function() {
            document.location = a.attr("href")
          }, 200)
        }
      }), $(".apply").bind({
        "open.netrdialog": function() {
          if (window.dataLayer) {
            var c = a(document.location.toString()),
              d = "/" + b + "/vp_language_chooser_" + c;
            window.dataLayer.push({
              event: "virtualPageview",
              eventData: d
            })
          }
        }
      }), $("body").on("click", ".dialog-content .language-list a", function(c) {
        if (window.dataLayer) {
          c.preventDefault();
          var d = a(document.location.toString()),
            e = $(this),
            f = "/" + b + "/vp_login_" + e.text() + "_" + d;
          window.dataLayer.push({
            event: "virtualPageview",
            eventData: f
          }), setTimeout(function() {
            document.location = e.attr("href")
          }, 100)
        }
      }), $("body").on("click", ".slide-content a", function(a) {
        if (window.dataLayer) {
          a.preventDefault();
          var b = $(this),
            c = "Carousel",
            d = "Click on button",
            e = $(this).closest("li").find("h2").text();
          window.dataLayer.push({
            event: "carouselEvent",
            eventCategory: c,
            eventAction: d,
            eventLabel: e
          }), setTimeout(function() {
            document.location = b.attr("href")
          }, 100)
        }
      })
  });
