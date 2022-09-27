/*!
 * jodit - Jodit is awesome and usefully wysiwyg editor with filebrowser
 * Author: Chupurnov <chupurnov@gmail.com> (https://xdsoft.net/)
 * Version: v3.20.4
 * Url: https://xdsoft.net/jodit/
 * License(s): MIT
 */
	
"use strict";
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(self, function() {
return (self["webpackChunkjodit"] = self["webpackChunkjodit"] || []).push([[652],{

/***/ 86757:
/***/ (function(module) {


!function (e, t) {  true ? module.exports = t() : 0; }("undefined" != typeof self ? self : this, function () {
    return function (e) { var t = {}; function r(i) { if (t[i])
        return t[i].exports; var o = t[i] = { i: i, l: !1, exports: {} }; return e[i].call(o.exports, o, o.exports, r), o.l = !0, o.exports; } return r.m = e, r.c = t, r.d = function (e, t, i) { r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: i }); }, r.r = function (e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }); }, r.t = function (e, t) { if (1 & t && (e = r(e)), 8 & t)
        return e; if (4 & t && "object" == typeof e && e && e.__esModule)
        return e; var i = Object.create(null); if (r.r(i), Object.defineProperty(i, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
        for (var o in e)
            r.d(i, o, function (t) { return e[t]; }.bind(null, o)); return i; }, r.n = function (e) { var t = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return r.d(t, "a", t), t; }, r.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, r.p = "", r(r.s = 1); }([function (e, t, r) {
            "use strict";
            var i = r(3);
            function o(e) { return !0 === i(e) && "[object Object]" === Object.prototype.toString.call(e); }
            e.exports = function (e) { var t, r; return !1 !== o(e) && "function" == typeof (t = e.constructor) && !1 !== o(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf"); };
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.VERSION = t.PALETTE_MATERIAL_CHROME = t.PALETTE_MATERIAL_500 = t.COLOR_NAMES = t.getLuminance = t.intToRgb = t.rgbToInt = t.rgbToHsv = t.rgbToHsl = t.hslToRgb = t.rgbToHex = t.parseColor = t.parseColorToHsla = t.parseColorToHsl = t.parseColorToRgba = t.parseColorToRgb = t.from = t.createPicker = void 0;
            var i = function () { function e(e, t) { for (var r = 0; r < t.length; r++) {
                var i = t[r];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
            } } return function (t, r, i) { return r && e(t.prototype, r), i && e(t, i), t; }; }(), o = function (e, t) { if (Array.isArray(e))
                return e; if (Symbol.iterator in Object(e))
                return function (e, t) { var r = [], i = !0, o = !1, n = void 0; try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0)
                        ;
                }
                catch (e) {
                    o = !0, n = e;
                }
                finally {
                    try {
                        !i && a.return && a.return();
                    }
                    finally {
                        if (o)
                            throw n;
                    }
                } return r; }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }, n = r(2), s = l(r(0)), a = l(r(4));
            function l(e) { return e && e.__esModule ? e : { default: e }; }
            function c(e, t) { if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function"); }
            function u(e) { if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r;
            } return Array.from(e); }
            var h = "undefined" != typeof window && window.navigator.userAgent.indexOf("Edge") > -1, p = "undefined" != typeof window && window.navigator.userAgent.indexOf("rv:") > -1, d = { id: null, attachTo: "body", showHSL: !0, showRGB: !0, showHEX: !0, showAlpha: !1, color: "#ff0000", palette: null, paletteEditable: !1, useAlphaInPalette: "auto", slBarSize: [232, 150], hueBarSize: [150, 11], alphaBarSize: [150, 11] }, f = "COLOR", g = "RGBA_USER", b = "HSLA_USER";
            function v(e, t, r) { return e ? e instanceof HTMLElement ? e : e instanceof NodeList ? e[0] : "string" == typeof e ? document.querySelector(e) : e.jquery ? e.get(0) : r ? t : null : t; }
            function m(e) { var t = e.getContext("2d"), r = +e.width, i = +e.height, s = t.createLinearGradient(1, 1, 1, i - 1); return s.addColorStop(0, "white"), s.addColorStop(1, "black"), { setHue: function (e) { var o = t.createLinearGradient(1, 0, r - 1, 0); o.addColorStop(0, "hsla(" + e + ", 100%, 50%, 0)"), o.addColorStop(1, "hsla(" + e + ", 100%, 50%, 1)"), t.fillStyle = s, t.fillRect(0, 0, r, i), t.fillStyle = o, t.globalCompositeOperation = "multiply", t.fillRect(0, 0, r, i), t.globalCompositeOperation = "source-over"; }, grabColor: function (e, r) { return t.getImageData(e, r, 1, 1).data; }, findColor: function (e, t, s) { var a = (0, n.rgbToHsv)(e, t, s), l = o(a, 3), c = l[1], u = l[2]; return [c * r, i - u * i]; } }; }
            function A(e, t, r) { return null === e ? t : /^\s*$/.test(e) ? r : !!/true|yes|1/i.test(e) || !/false|no|0/i.test(e) && t; }
            function y(e, t, r) { if (null === e)
                return t; if (/^\s*$/.test(e))
                return r; var i = e.split(",").map(Number); return 2 === i.length && i[0] && i[1] ? i : t; }
            var k = function () { function e(t, r) { if (c(this, e), r ? (t = v(t), this.options = Object.assign({}, d, r)) : t && (0, s.default)(t) ? (this.options = Object.assign({}, d, t), t = v(this.options.attachTo)) : (this.options = Object.assign({}, d), t = v((0, n.nvl)(t, this.options.attachTo))), !t)
                throw new Error("Container not found: " + this.options.attachTo); !function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "acp-"; if (t.hasAttribute(r + "show-hsl") && (e.showHSL = A(t.getAttribute(r + "show-hsl"), d.showHSL, !0)), t.hasAttribute(r + "show-rgb") && (e.showRGB = A(t.getAttribute(r + "show-rgb"), d.showRGB, !0)), t.hasAttribute(r + "show-hex") && (e.showHEX = A(t.getAttribute(r + "show-hex"), d.showHEX, !0)), t.hasAttribute(r + "show-alpha") && (e.showAlpha = A(t.getAttribute(r + "show-alpha"), d.showAlpha, !0)), t.hasAttribute(r + "palette-editable") && (e.paletteEditable = A(t.getAttribute(r + "palette-editable"), d.paletteEditable, !0)), t.hasAttribute(r + "sl-bar-size") && (e.slBarSize = y(t.getAttribute(r + "sl-bar-size"), d.slBarSize, [232, 150])), t.hasAttribute(r + "hue-bar-size") && (e.hueBarSize = y(t.getAttribute(r + "hue-bar-size"), d.hueBarSize, [150, 11]), e.alphaBarSize = e.hueBarSize), t.hasAttribute(r + "palette")) {
                var i = t.getAttribute(r + "palette");
                switch (i) {
                    case "PALETTE_MATERIAL_500":
                        e.palette = n.PALETTE_MATERIAL_500;
                        break;
                    case "PALETTE_MATERIAL_CHROME":
                    case "":
                        e.palette = n.PALETTE_MATERIAL_CHROME;
                        break;
                    default: e.palette = i.split(/[;|]/);
                }
            } t.hasAttribute(r + "color") && (e.color = t.getAttribute(r + "color")); }(this.options, t), this.H = 0, this.S = 0, this.L = 0, this.R = 0, this.G = 0, this.B = 0, this.A = 1, this.palette = {}, this.element = document.createElement("div"), this.options.id && (this.element.id = this.options.id), this.element.className = "a-color-picker", this.element.innerHTML = a.default, t.appendChild(this.element); var i = this.element.querySelector(".a-color-picker-h"); this.setupHueCanvas(i), this.hueBarHelper = m(i), this.huePointer = this.element.querySelector(".a-color-picker-h+.a-color-picker-dot"); var o = this.element.querySelector(".a-color-picker-sl"); this.setupSlCanvas(o), this.slBarHelper = m(o), this.slPointer = this.element.querySelector(".a-color-picker-sl+.a-color-picker-dot"), this.preview = this.element.querySelector(".a-color-picker-preview"), this.setupClipboard(this.preview.querySelector(".a-color-picker-clipbaord")), this.options.showHSL ? (this.setupInput(this.inputH = this.element.querySelector(".a-color-picker-hsl>input[nameref=H]")), this.setupInput(this.inputS = this.element.querySelector(".a-color-picker-hsl>input[nameref=S]")), this.setupInput(this.inputL = this.element.querySelector(".a-color-picker-hsl>input[nameref=L]"))) : this.element.querySelector(".a-color-picker-hsl").remove(), this.options.showRGB ? (this.setupInput(this.inputR = this.element.querySelector(".a-color-picker-rgb>input[nameref=R]")), this.setupInput(this.inputG = this.element.querySelector(".a-color-picker-rgb>input[nameref=G]")), this.setupInput(this.inputB = this.element.querySelector(".a-color-picker-rgb>input[nameref=B]"))) : this.element.querySelector(".a-color-picker-rgb").remove(), this.options.showHEX ? this.setupInput(this.inputRGBHEX = this.element.querySelector("input[nameref=RGBHEX]")) : this.element.querySelector(".a-color-picker-rgbhex").remove(), this.options.paletteEditable || this.options.palette && this.options.palette.length > 0 ? this.setPalette(this.paletteRow = this.element.querySelector(".a-color-picker-palette")) : (this.paletteRow = this.element.querySelector(".a-color-picker-palette"), this.paletteRow.remove()), this.options.showAlpha ? (this.setupAlphaCanvas(this.element.querySelector(".a-color-picker-a")), this.alphaPointer = this.element.querySelector(".a-color-picker-a+.a-color-picker-dot")) : this.element.querySelector(".a-color-picker-alpha").remove(), this.element.style.width = this.options.slBarSize[0] + "px", this.onValueChanged(f, this.options.color); } return i(e, [{ key: "setupHueCanvas", value: function (e) { var t = this; e.width = this.options.hueBarSize[0], e.height = this.options.hueBarSize[1]; for (var r = e.getContext("2d"), i = r.createLinearGradient(0, 0, this.options.hueBarSize[0], 0), o = 0; o <= 1; o += 1 / 360)
                        i.addColorStop(o, "hsl(" + 360 * o + ", 100%, 50%)"); r.fillStyle = i, r.fillRect(0, 0, this.options.hueBarSize[0], this.options.hueBarSize[1]); var s = function (r) { var i = (0, n.limit)(r.clientX - e.getBoundingClientRect().left, 0, t.options.hueBarSize[0]), o = Math.round(360 * i / t.options.hueBarSize[0]); t.huePointer.style.left = i - 7 + "px", t.onValueChanged("H", o); }, a = function e() { document.removeEventListener("mousemove", s), document.removeEventListener("mouseup", e); }; e.addEventListener("mousedown", function (e) { s(e), document.addEventListener("mousemove", s), document.addEventListener("mouseup", a); }); } }, { key: "setupSlCanvas", value: function (e) { var t = this; e.width = this.options.slBarSize[0], e.height = this.options.slBarSize[1]; var r = function (r) { var i = (0, n.limit)(r.clientX - e.getBoundingClientRect().left, 0, t.options.slBarSize[0] - 1), o = (0, n.limit)(r.clientY - e.getBoundingClientRect().top, 0, t.options.slBarSize[1] - 1), s = t.slBarHelper.grabColor(i, o); t.slPointer.style.left = i - 7 + "px", t.slPointer.style.top = o - 7 + "px", t.onValueChanged("RGB", s); }, i = function e() { document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", e); }; e.addEventListener("mousedown", function (e) { r(e), document.addEventListener("mousemove", r), document.addEventListener("mouseup", i); }); } }, { key: "setupAlphaCanvas", value: function (e) { var t = this; e.width = this.options.alphaBarSize[0], e.height = this.options.alphaBarSize[1]; var r = e.getContext("2d"), i = r.createLinearGradient(0, 0, e.width - 1, 0); i.addColorStop(0, "hsla(0, 0%, 50%, 0)"), i.addColorStop(1, "hsla(0, 0%, 50%, 1)"), r.fillStyle = i, r.fillRect(0, 0, this.options.alphaBarSize[0], this.options.alphaBarSize[1]); var o = function (r) { var i = (0, n.limit)(r.clientX - e.getBoundingClientRect().left, 0, t.options.alphaBarSize[0]), o = +(i / t.options.alphaBarSize[0]).toFixed(2); t.alphaPointer.style.left = i - 7 + "px", t.onValueChanged("ALPHA", o); }, s = function e() { document.removeEventListener("mousemove", o), document.removeEventListener("mouseup", e); }; e.addEventListener("mousedown", function (e) { o(e), document.addEventListener("mousemove", o), document.addEventListener("mouseup", s); }); } }, { key: "setupInput", value: function (e) { var t = this, r = +e.min, i = +e.max, o = e.getAttribute("nameref"); e.hasAttribute("select-on-focus") && e.addEventListener("focus", function () { e.select(); }), "text" === e.type ? e.addEventListener("change", function () { t.onValueChanged(o, e.value); }) : ((h || p) && e.addEventListener("keydown", function (s) { "Up" === s.key ? (e.value = (0, n.limit)(+e.value + 1, r, i), t.onValueChanged(o, e.value), s.returnValue = !1) : "Down" === s.key && (e.value = (0, n.limit)(+e.value - 1, r, i), t.onValueChanged(o, e.value), s.returnValue = !1); }), e.addEventListener("change", function () { var s = +e.value; t.onValueChanged(o, (0, n.limit)(s, r, i)); })); } }, { key: "setupClipboard", value: function (e) { var t = this; e.title = "click to copy", e.addEventListener("click", function () { e.value = (0, n.parseColor)([t.R, t.G, t.B, t.A], "hexcss4"), e.select(), document.execCommand("copy"); }); } }, { key: "setPalette", value: function (e) { var t = this, r = "auto" === this.options.useAlphaInPalette ? this.options.showAlpha : this.options.useAlphaInPalette, i = null; switch (this.options.palette) {
                        case "PALETTE_MATERIAL_500":
                            i = n.PALETTE_MATERIAL_500;
                            break;
                        case "PALETTE_MATERIAL_CHROME":
                            i = n.PALETTE_MATERIAL_CHROME;
                            break;
                        default: i = (0, n.ensureArray)(this.options.palette);
                    } if (this.options.paletteEditable || i.length > 0) {
                        var o = function (r, i, o) { var n = e.querySelector('.a-color-picker-palette-color[data-color="' + r + '"]') || document.createElement("div"); n.className = "a-color-picker-palette-color", n.style.backgroundColor = r, n.setAttribute("data-color", r), n.title = r, e.insertBefore(n, i), t.palette[r] = !0, o && t.onPaletteColorAdd(r); }, s = function (r, i) { r ? (e.removeChild(r), t.palette[r.getAttribute("data-color")] = !1, i && t.onPaletteColorRemove(r.getAttribute("data-color"))) : (e.querySelectorAll(".a-color-picker-palette-color[data-color]").forEach(function (t) { e.removeChild(t); }), Object.keys(t.palette).forEach(function (e) { t.palette[e] = !1; }), i && t.onPaletteColorRemove()); };
                        if (i.map(function (e) { return (0, n.parseColor)(e, r ? "rgbcss4" : "hex"); }).filter(function (e) { return !!e; }).forEach(function (e) { return o(e); }), this.options.paletteEditable) {
                            var a = document.createElement("div");
                            a.className = "a-color-picker-palette-color a-color-picker-palette-add", a.innerHTML = "+", e.appendChild(a), e.addEventListener("click", function (e) { /a-color-picker-palette-add/.test(e.target.className) ? e.shiftKey ? s(null, !0) : o(r ? (0, n.parseColor)([t.R, t.G, t.B, t.A], "rgbcss4") : (0, n.rgbToHex)(t.R, t.G, t.B), e.target, !0) : /a-color-picker-palette-color/.test(e.target.className) && (e.shiftKey ? s(e.target, !0) : t.onValueChanged(f, e.target.getAttribute("data-color"))); });
                        }
                        else
                            e.addEventListener("click", function (e) { /a-color-picker-palette-color/.test(e.target.className) && t.onValueChanged(f, e.target.getAttribute("data-color")); });
                    }
                    else
                        e.style.display = "none"; } }, { key: "updatePalette", value: function (e) { this.paletteRow.innerHTML = "", this.palette = {}, this.paletteRow.parentElement || this.element.appendChild(this.paletteRow), this.options.palette = e, this.setPalette(this.paletteRow); } }, { key: "onValueChanged", value: function (e, t) { var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { silent: !1 }; switch (e) {
                        case "H":
                            this.H = t;
                            var i = (0, n.hslToRgb)(this.H, this.S, this.L), s = o(i, 3);
                            this.R = s[0], this.G = s[1], this.B = s[2], this.slBarHelper.setHue(t), this.updatePointerH(this.H), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "S":
                            this.S = t;
                            var a = (0, n.hslToRgb)(this.H, this.S, this.L), l = o(a, 3);
                            this.R = l[0], this.G = l[1], this.B = l[2], this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "L":
                            this.L = t;
                            var c = (0, n.hslToRgb)(this.H, this.S, this.L), u = o(c, 3);
                            this.R = u[0], this.G = u[1], this.B = u[2], this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "R":
                            this.R = t;
                            var h = (0, n.rgbToHsl)(this.R, this.G, this.B), p = o(h, 3);
                            this.H = p[0], this.S = p[1], this.L = p[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "G":
                            this.G = t;
                            var d = (0, n.rgbToHsl)(this.R, this.G, this.B), v = o(d, 3);
                            this.H = v[0], this.S = v[1], this.L = v[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "B":
                            this.B = t;
                            var m = (0, n.rgbToHsl)(this.R, this.G, this.B), A = o(m, 3);
                            this.H = A[0], this.S = A[1], this.L = A[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case "RGB":
                            var y = o(t, 3);
                            this.R = y[0], this.G = y[1], this.B = y[2];
                            var k = (0, n.rgbToHsl)(this.R, this.G, this.B), F = o(k, 3);
                            this.H = F[0], this.S = F[1], this.L = F[2], this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B);
                            break;
                        case g:
                            var E = o(t, 4);
                            this.R = E[0], this.G = E[1], this.B = E[2], this.A = E[3];
                            var H = (0, n.rgbToHsl)(this.R, this.G, this.B), B = o(H, 3);
                            this.H = B[0], this.S = B[1], this.L = B[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case b:
                            var R = o(t, 4);
                            this.H = R[0], this.S = R[1], this.L = R[2], this.A = R[3];
                            var C = (0, n.hslToRgb)(this.H, this.S, this.L), S = o(C, 3);
                            this.R = S[0], this.G = S[1], this.B = S[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case "RGBHEX":
                            var L = (0, n.cssColorToRgb)(t) || [this.R, this.G, this.B], w = o(L, 3);
                            this.R = w[0], this.G = w[1], this.B = w[2];
                            var T = (0, n.rgbToHsl)(this.R, this.G, this.B), x = o(T, 3);
                            this.H = x[0], this.S = x[1], this.L = x[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B);
                            break;
                        case f:
                            var G = (0, n.parseColor)(t, "rgba") || [0, 0, 0, 1], I = o(G, 4);
                            this.R = I[0], this.G = I[1], this.B = I[2], this.A = I[3];
                            var P = (0, n.rgbToHsl)(this.R, this.G, this.B), D = o(P, 3);
                            this.H = D[0], this.S = D[1], this.L = D[2], this.slBarHelper.setHue(this.H), this.updatePointerH(this.H), this.updatePointerSL(this.H, this.S, this.L), this.updateInputHSL(this.H, this.S, this.L), this.updateInputRGB(this.R, this.G, this.B), this.updateInputRGBHEX(this.R, this.G, this.B), this.updatePointerA(this.A);
                            break;
                        case "ALPHA": this.A = t;
                    } 1 === this.A ? this.preview.style.backgroundColor = "rgb(" + this.R + "," + this.G + "," + this.B + ")" : this.preview.style.backgroundColor = "rgba(" + this.R + "," + this.G + "," + this.B + "," + this.A + ")", r && r.silent || this.onchange && this.onchange(this.preview.style.backgroundColor); } }, { key: "onPaletteColorAdd", value: function (e) { this.oncoloradd && this.oncoloradd(e); } }, { key: "onPaletteColorRemove", value: function (e) { this.oncolorremove && this.oncolorremove(e); } }, { key: "updateInputHSL", value: function (e, t, r) { this.options.showHSL && (this.inputH.value = e, this.inputS.value = t, this.inputL.value = r); } }, { key: "updateInputRGB", value: function (e, t, r) { this.options.showRGB && (this.inputR.value = e, this.inputG.value = t, this.inputB.value = r); } }, { key: "updateInputRGBHEX", value: function (e, t, r) { this.options.showHEX && (this.inputRGBHEX.value = (0, n.rgbToHex)(e, t, r)); } }, { key: "updatePointerH", value: function (e) { var t = this.options.hueBarSize[0] * e / 360; this.huePointer.style.left = t - 7 + "px"; } }, { key: "updatePointerSL", value: function (e, t, r) { var i = (0, n.hslToRgb)(e, t, r), s = o(i, 3), a = s[0], l = s[1], c = s[2], u = this.slBarHelper.findColor(a, l, c), h = o(u, 2), p = h[0], d = h[1]; p >= 0 && (this.slPointer.style.left = p - 7 + "px", this.slPointer.style.top = d - 7 + "px"); } }, { key: "updatePointerA", value: function (e) { if (this.options.showAlpha) {
                        var t = this.options.alphaBarSize[0] * e;
                        this.alphaPointer.style.left = t - 7 + "px";
                    } } }]), e; }(), F = function () { function e(t) { c(this, e), this.name = t, this.listeners = []; } return i(e, [{ key: "on", value: function (e) { e && this.listeners.push(e); } }, { key: "off", value: function (e) { this.listeners = e ? this.listeners.filter(function (t) { return t !== e; }) : []; } }, { key: "emit", value: function (e, t) { for (var r = this.listeners.slice(0), i = 0; i < r.length; i++)
                        r[i].apply(t, e); } }]), e; }();
            function E(e, t) { var r = new k(e, t), i = { change: new F("change"), coloradd: new F("coloradd"), colorremove: new F("colorremove") }, s = !0, a = {}, l = { get element() { return r.element; }, get rgb() { return [r.R, r.G, r.B]; }, set rgb(e) { var t = o(e, 3), i = t[0], s = t[1], a = t[2], l = [(0, n.limit)(i, 0, 255), (0, n.limit)(s, 0, 255), (0, n.limit)(a, 0, 255)]; i = l[0], s = l[1], a = l[2], r.onValueChanged(g, [i, s, a, 1]); }, get hsl() { return [r.H, r.S, r.L]; }, set hsl(e) { var t = o(e, 3), i = t[0], s = t[1], a = t[2], l = [(0, n.limit)(i, 0, 360), (0, n.limit)(s, 0, 100), (0, n.limit)(a, 0, 100)]; i = l[0], s = l[1], a = l[2], r.onValueChanged(b, [i, s, a, 1]); }, get rgbhex() { return this.all.hex; }, get rgba() { return [r.R, r.G, r.B, r.A]; }, set rgba(e) { var t = o(e, 4), i = t[0], s = t[1], a = t[2], l = t[3], c = [(0, n.limit)(i, 0, 255), (0, n.limit)(s, 0, 255), (0, n.limit)(a, 0, 255), (0, n.limit)(l, 0, 1)]; i = c[0], s = c[1], a = c[2], l = c[3], r.onValueChanged(g, [i, s, a, l]); }, get hsla() { return [r.H, r.S, r.L, r.A]; }, set hsla(e) { var t = o(e, 4), i = t[0], s = t[1], a = t[2], l = t[3], c = [(0, n.limit)(i, 0, 360), (0, n.limit)(s, 0, 100), (0, n.limit)(a, 0, 100), (0, n.limit)(l, 0, 1)]; i = c[0], s = c[1], a = c[2], l = c[3], r.onValueChanged(b, [i, s, a, l]); }, get color() { return this.all.toString(); }, set color(e) { r.onValueChanged(f, e); }, setColor: function (e) { var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; r.onValueChanged(f, e, { silent: t }); }, get all() { if (s) {
                    var e = [r.R, r.G, r.B, r.A], t = r.A < 1 ? "rgba(" + r.R + "," + r.G + "," + r.B + "," + r.A + ")" : n.rgbToHex.apply(void 0, e);
                    (a = (0, n.parseColor)(e, a)).toString = function () { return t; }, s = !1;
                } return Object.assign({}, a); }, get onchange() { return i.change && i.change.listeners[0]; }, set onchange(e) { this.off("change").on("change", e); }, get oncoloradd() { return i.coloradd && i.coloradd.listeners[0]; }, set oncoloradd(e) { this.off("coloradd").on("coloradd", e); }, get oncolorremove() { return i.colorremove && i.colorremove.listeners[0]; }, set oncolorremove(e) { this.off("colorremove").on("colorremove", e); }, get palette() { return Object.keys(r.palette).filter(function (e) { return r.palette[e]; }); }, set palette(e) { r.updatePalette(e); }, show: function () { r.element.classList.remove("hidden"); }, hide: function () { r.element.classList.add("hidden"); }, toggle: function () { r.element.classList.toggle("hidden"); }, on: function (e, t) { return e && i[e] && i[e].on(t), this; }, off: function (e, t) { return e && i[e] && i[e].off(t), this; }, destroy: function () { i.change.off(), i.coloradd.off(), i.colorremove.off(), r.element.remove(), i = null, r = null; } }; return r.onchange = function () { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]; s = !0, i.change.emit([l].concat(t), l); }, r.oncoloradd = function () { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]; i.coloradd.emit([l].concat(t), l); }, r.oncolorremove = function () { for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r]; i.colorremove.emit([l].concat(t), l); }, r.element.ctrl = l, l; }
            if ("undefined" != typeof window && !document.querySelector('head>style[data-source="a-color-picker"]')) {
                var H = r(5).toString(), B = document.createElement("style");
                B.setAttribute("type", "text/css"), B.setAttribute("data-source", "a-color-picker"), B.innerHTML = H, document.querySelector("head").appendChild(B);
            }
            t.createPicker = E, t.from = function (e, t) { var r = function (e) { return e ? Array.isArray(e) ? e : e instanceof HTMLElement ? [e] : e instanceof NodeList ? [].concat(u(e)) : "string" == typeof e ? [].concat(u(document.querySelectorAll(e))) : e.jquery ? e.get() : [] : []; }(e).map(function (e, r) { var i = E(e, t); return i.index = r, i; }); return r.on = function (e, t) { return r.forEach(function (r) { return r.on(e, t); }), this; }, r.off = function (e) { return r.forEach(function (t) { return t.off(e); }), this; }, r; }, t.parseColorToRgb = n.parseColorToRgb, t.parseColorToRgba = n.parseColorToRgba, t.parseColorToHsl = n.parseColorToHsl, t.parseColorToHsla = n.parseColorToHsla, t.parseColor = n.parseColor, t.rgbToHex = n.rgbToHex, t.hslToRgb = n.hslToRgb, t.rgbToHsl = n.rgbToHsl, t.rgbToHsv = n.rgbToHsv, t.rgbToInt = n.rgbToInt, t.intToRgb = n.intToRgb, t.getLuminance = n.getLuminance, t.COLOR_NAMES = n.COLOR_NAMES, t.PALETTE_MATERIAL_500 = n.PALETTE_MATERIAL_500, t.PALETTE_MATERIAL_CHROME = n.PALETTE_MATERIAL_CHROME, t.VERSION = "1.2.1";
        }, function (e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 }), t.nvl = t.ensureArray = t.limit = t.getLuminance = t.parseColor = t.parseColorToHsla = t.parseColorToHsl = t.cssHslaToHsla = t.cssHslToHsl = t.parseColorToRgba = t.parseColorToRgb = t.cssRgbaToRgba = t.cssRgbToRgb = t.cssColorToRgba = t.cssColorToRgb = t.intToRgb = t.rgbToInt = t.rgbToHsv = t.rgbToHsl = t.hslToRgb = t.rgbToHex = t.PALETTE_MATERIAL_CHROME = t.PALETTE_MATERIAL_500 = t.COLOR_NAMES = void 0;
            var i = function (e, t) { if (Array.isArray(e))
                return e; if (Symbol.iterator in Object(e))
                return function (e, t) { var r = [], i = !0, o = !1, n = void 0; try {
                    for (var s, a = e[Symbol.iterator](); !(i = (s = a.next()).done) && (r.push(s.value), !t || r.length !== t); i = !0)
                        ;
                }
                catch (e) {
                    o = !0, n = e;
                }
                finally {
                    try {
                        !i && a.return && a.return();
                    }
                    finally {
                        if (o)
                            throw n;
                    }
                } return r; }(e, t); throw new TypeError("Invalid attempt to destructure non-iterable instance"); }, o = function (e) { return e && e.__esModule ? e : { default: e }; }(r(0));
            function n(e) { if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++)
                    r[t] = e[t];
                return r;
            } return Array.from(e); }
            var s = { aliceblue: "#F0F8FF", antiquewhite: "#FAEBD7", aqua: "#00FFFF", aquamarine: "#7FFFD4", azure: "#F0FFFF", beige: "#F5F5DC", bisque: "#FFE4C4", black: "#000000", blanchedalmond: "#FFEBCD", blue: "#0000FF", blueviolet: "#8A2BE2", brown: "#A52A2A", burlywood: "#DEB887", cadetblue: "#5F9EA0", chartreuse: "#7FFF00", chocolate: "#D2691E", coral: "#FF7F50", cornflowerblue: "#6495ED", cornsilk: "#FFF8DC", crimson: "#DC143C", cyan: "#00FFFF", darkblue: "#00008B", darkcyan: "#008B8B", darkgoldenrod: "#B8860B", darkgray: "#A9A9A9", darkgrey: "#A9A9A9", darkgreen: "#006400", darkkhaki: "#BDB76B", darkmagenta: "#8B008B", darkolivegreen: "#556B2F", darkorange: "#FF8C00", darkorchid: "#9932CC", darkred: "#8B0000", darksalmon: "#E9967A", darkseagreen: "#8FBC8F", darkslateblue: "#483D8B", darkslategray: "#2F4F4F", darkslategrey: "#2F4F4F", darkturquoise: "#00CED1", darkviolet: "#9400D3", deeppink: "#FF1493", deepskyblue: "#00BFFF", dimgray: "#696969", dimgrey: "#696969", dodgerblue: "#1E90FF", firebrick: "#B22222", floralwhite: "#FFFAF0", forestgreen: "#228B22", fuchsia: "#FF00FF", gainsboro: "#DCDCDC", ghostwhite: "#F8F8FF", gold: "#FFD700", goldenrod: "#DAA520", gray: "#808080", grey: "#808080", green: "#008000", greenyellow: "#ADFF2F", honeydew: "#F0FFF0", hotpink: "#FF69B4", "indianred ": "#CD5C5C", "indigo ": "#4B0082", ivory: "#FFFFF0", khaki: "#F0E68C", lavender: "#E6E6FA", lavenderblush: "#FFF0F5", lawngreen: "#7CFC00", lemonchiffon: "#FFFACD", lightblue: "#ADD8E6", lightcoral: "#F08080", lightcyan: "#E0FFFF", lightgoldenrodyellow: "#FAFAD2", lightgray: "#D3D3D3", lightgrey: "#D3D3D3", lightgreen: "#90EE90", lightpink: "#FFB6C1", lightsalmon: "#FFA07A", lightseagreen: "#20B2AA", lightskyblue: "#87CEFA", lightslategray: "#778899", lightslategrey: "#778899", lightsteelblue: "#B0C4DE", lightyellow: "#FFFFE0", lime: "#00FF00", limegreen: "#32CD32", linen: "#FAF0E6", magenta: "#FF00FF", maroon: "#800000", mediumaquamarine: "#66CDAA", mediumblue: "#0000CD", mediumorchid: "#BA55D3", mediumpurple: "#9370DB", mediumseagreen: "#3CB371", mediumslateblue: "#7B68EE", mediumspringgreen: "#00FA9A", mediumturquoise: "#48D1CC", mediumvioletred: "#C71585", midnightblue: "#191970", mintcream: "#F5FFFA", mistyrose: "#FFE4E1", moccasin: "#FFE4B5", navajowhite: "#FFDEAD", navy: "#000080", oldlace: "#FDF5E6", olive: "#808000", olivedrab: "#6B8E23", orange: "#FFA500", orangered: "#FF4500", orchid: "#DA70D6", palegoldenrod: "#EEE8AA", palegreen: "#98FB98", paleturquoise: "#AFEEEE", palevioletred: "#DB7093", papayawhip: "#FFEFD5", peachpuff: "#FFDAB9", peru: "#CD853F", pink: "#FFC0CB", plum: "#DDA0DD", powderblue: "#B0E0E6", purple: "#800080", rebeccapurple: "#663399", red: "#FF0000", rosybrown: "#BC8F8F", royalblue: "#4169E1", saddlebrown: "#8B4513", salmon: "#FA8072", sandybrown: "#F4A460", seagreen: "#2E8B57", seashell: "#FFF5EE", sienna: "#A0522D", silver: "#C0C0C0", skyblue: "#87CEEB", slateblue: "#6A5ACD", slategray: "#708090", slategrey: "#708090", snow: "#FFFAFA", springgreen: "#00FF7F", steelblue: "#4682B4", tan: "#D2B48C", teal: "#008080", thistle: "#D8BFD8", tomato: "#FF6347", turquoise: "#40E0D0", violet: "#EE82EE", wheat: "#F5DEB3", white: "#FFFFFF", whitesmoke: "#F5F5F5", yellow: "#FFFF00", yellowgreen: "#9ACD32" };
            function a(e, t, r) { return e = +e, isNaN(e) ? t : e < t ? t : e > r ? r : e; }
            function l(e, t) { return null == e ? t : e; }
            function c(e, t, r) { var i = [a(e, 0, 255), a(t, 0, 255), a(r, 0, 255)]; return "#" + ("000000" + ((e = i[0]) << 16 | (t = i[1]) << 8 | (r = i[2])).toString(16)).slice(-6); }
            function u(e, t, r) { var i = void 0, o = void 0, n = void 0, s = [a(e, 0, 360) / 360, a(t, 0, 100) / 100, a(r, 0, 100) / 100]; if (e = s[0], r = s[2], 0 == (t = s[1]))
                i = o = n = r;
            else {
                var l = function (e, t, r) { return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e; }, c = r < .5 ? r * (1 + t) : r + t - r * t, u = 2 * r - c;
                i = l(u, c, e + 1 / 3), o = l(u, c, e), n = l(u, c, e - 1 / 3);
            } return [255 * i, 255 * o, 255 * n].map(Math.round); }
            function h(e, t, r) { var i = [a(e, 0, 255) / 255, a(t, 0, 255) / 255, a(r, 0, 255) / 255]; e = i[0], t = i[1], r = i[2]; var o = Math.max(e, t, r), n = Math.min(e, t, r), s = void 0, l = void 0, c = (o + n) / 2; if (o == n)
                s = l = 0;
            else {
                var u = o - n;
                switch (l = c > .5 ? u / (2 - o - n) : u / (o + n), o) {
                    case e:
                        s = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        s = (r - e) / u + 2;
                        break;
                    case r: s = (e - t) / u + 4;
                }
                s /= 6;
            } return [360 * s, 100 * l, 100 * c].map(Math.round); }
            function p(e, t, r) { return e << 16 | t << 8 | r; }
            function d(e) { if (e) {
                var t = s[e.toString().toLowerCase()], r = /^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F]))|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})))\s*$/i.exec(t || e) || [], o = i(r, 10), n = o[3], a = o[4], l = o[5], c = o[7], u = o[8], h = o[9];
                if (void 0 !== n)
                    return [parseInt(n + n, 16), parseInt(a + a, 16), parseInt(l + l, 16)];
                if (void 0 !== c)
                    return [parseInt(c, 16), parseInt(u, 16), parseInt(h, 16)];
            } }
            function f(e) { if (e) {
                var t = s[e.toString().toLowerCase()], r = /^\s*#?((([0-9A-F])([0-9A-F])([0-9A-F])([0-9A-F])?)|(([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})([0-9A-F]{2})?))\s*$/i.exec(t || e) || [], o = i(r, 12), n = o[3], a = o[4], l = o[5], c = o[6], u = o[8], h = o[9], p = o[10], d = o[11];
                if (void 0 !== n)
                    return [parseInt(n + n, 16), parseInt(a + a, 16), parseInt(l + l, 16), c ? +(parseInt(c + c, 16) / 255).toFixed(2) : 1];
                if (void 0 !== u)
                    return [parseInt(u, 16), parseInt(h, 16), parseInt(p, 16), d ? +(parseInt(d, 16) / 255).toFixed(2) : 1];
            } }
            function g(e) { if (e) {
                var t = /^rgb\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e) || [], r = i(t, 4), o = r[0], n = r[1], s = r[2], l = r[3];
                return o ? [a(n, 0, 255), a(s, 0, 255), a(l, 0, 255)] : void 0;
            } }
            function b(e) { if (e) {
                var t = /^rgba?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e) || [], r = i(t, 6), o = r[0], n = r[1], s = r[2], c = r[3], u = r[5];
                return o ? [a(n, 0, 255), a(s, 0, 255), a(c, 0, 255), a(l(u, 1), 0, 1)] : void 0;
            } }
            function v(e) { if (Array.isArray(e))
                return [a(e[0], 0, 255), a(e[1], 0, 255), a(e[2], 0, 255), a(l(e[3], 1), 0, 1)]; var t = f(e) || b(e); return t && 3 === t.length && t.push(1), t; }
            function m(e) { if (e) {
                var t = /^hsl\((\d+)[\s,](\d+)[\s,](\d+)\)/i.exec(e) || [], r = i(t, 4), o = r[0], n = r[1], s = r[2], l = r[3];
                return o ? [a(n, 0, 360), a(s, 0, 100), a(l, 0, 100)] : void 0;
            } }
            function A(e) { if (e) {
                var t = /^hsla?\((\d+)\s*[\s,]\s*(\d+)\s*[\s,]\s*(\d+)(\s*[\s,]\s*(\d*(.\d+)?))?\)/i.exec(e) || [], r = i(t, 6), o = r[0], n = r[1], s = r[2], c = r[3], u = r[5];
                return o ? [a(n, 0, 255), a(s, 0, 255), a(c, 0, 255), a(l(u, 1), 0, 1)] : void 0;
            } }
            function y(e) { if (Array.isArray(e))
                return [a(e[0], 0, 360), a(e[1], 0, 100), a(e[2], 0, 100), a(l(e[3], 1), 0, 1)]; var t = A(e); return t && 3 === t.length && t.push(1), t; }
            function k(e, t) { switch (t) {
                case "rgb":
                default: return e.slice(0, 3);
                case "rgbcss": return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ")";
                case "rgbcss4": return "rgb(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
                case "rgba": return e;
                case "rgbacss": return "rgba(" + e[0] + ", " + e[1] + ", " + e[2] + ", " + e[3] + ")";
                case "hsl": return h.apply(void 0, n(e));
                case "hslcss": return "hsl(" + (e = h.apply(void 0, n(e)))[0] + ", " + e[1] + ", " + e[2] + ")";
                case "hslcss4":
                    var r = h.apply(void 0, n(e));
                    return "hsl(" + r[0] + ", " + r[1] + ", " + r[2] + ", " + e[3] + ")";
                case "hsla": return [].concat(n(h.apply(void 0, n(e))), [e[3]]);
                case "hslacss":
                    var i = h.apply(void 0, n(e));
                    return "hsla(" + i[0] + ", " + i[1] + ", " + i[2] + ", " + e[3] + ")";
                case "hex": return c.apply(void 0, n(e));
                case "hexcss4": return c.apply(void 0, n(e)) + ("00" + parseInt(255 * e[3]).toString(16)).slice(-2);
                case "int": return p.apply(void 0, n(e));
            } }
            t.COLOR_NAMES = s, t.PALETTE_MATERIAL_500 = ["#F44336", "#E91E63", "#E91E63", "#9C27B0", "#9C27B0", "#673AB7", "#673AB7", "#3F51B5", "#3F51B5", "#2196F3", "#2196F3", "#03A9F4", "#03A9F4", "#00BCD4", "#00BCD4", "#009688", "#009688", "#4CAF50", "#4CAF50", "#8BC34A", "#8BC34A", "#CDDC39", "#CDDC39", "#FFEB3B", "#FFEB3B", "#FFC107", "#FFC107", "#FF9800", "#FF9800", "#FF5722", "#FF5722", "#795548", "#795548", "#9E9E9E", "#9E9E9E", "#607D8B", "#607D8B"], t.PALETTE_MATERIAL_CHROME = ["#f44336", "#e91e63", "#9c27b0", "#673ab7", "#3f51b5", "#2196f3", "#03a9f4", "#00bcd4", "#009688", "#4caf50", "#8bc34a", "#cddc39", "#ffeb3b", "#ffc107", "#ff9800", "#ff5722", "#795548", "#9e9e9e", "#607d8b"], t.rgbToHex = c, t.hslToRgb = u, t.rgbToHsl = h, t.rgbToHsv = function (e, t, r) { var i = [a(e, 0, 255) / 255, a(t, 0, 255) / 255, a(r, 0, 255) / 255]; e = i[0], t = i[1], r = i[2]; var o, n = Math.max(e, t, r), s = Math.min(e, t, r), l = void 0, c = n, u = n - s; if (o = 0 === n ? 0 : u / n, n == s)
                l = 0;
            else {
                switch (n) {
                    case e:
                        l = (t - r) / u + (t < r ? 6 : 0);
                        break;
                    case t:
                        l = (r - e) / u + 2;
                        break;
                    case r: l = (e - t) / u + 4;
                }
                l /= 6;
            } return [l, o, c]; }, t.rgbToInt = p, t.intToRgb = function (e) { return [e >> 16 & 255, e >> 8 & 255, 255 & e]; }, t.cssColorToRgb = d, t.cssColorToRgba = f, t.cssRgbToRgb = g, t.cssRgbaToRgba = b, t.parseColorToRgb = function (e) { return Array.isArray(e) ? e = [a(e[0], 0, 255), a(e[1], 0, 255), a(e[2], 0, 255)] : d(e) || g(e); }, t.parseColorToRgba = v, t.cssHslToHsl = m, t.cssHslaToHsla = A, t.parseColorToHsl = function (e) { return Array.isArray(e) ? e = [a(e[0], 0, 360), a(e[1], 0, 100), a(e[2], 0, 100)] : m(e); }, t.parseColorToHsla = y, t.parseColor = function (e, t) { if (t = t || "rgb", null != e) {
                var r = void 0;
                if ((r = v(e)) || (r = y(e)) && (r = [].concat(n(u.apply(void 0, n(r))), [r[3]])))
                    return (0, o.default)(t) ? ["rgb", "rgbcss", "rgbcss4", "rgba", "rgbacss", "hsl", "hslcss", "hslcss4", "hsla", "hslacss", "hex", "hexcss4", "int"].reduce(function (e, t) { return e[t] = k(r, t), e; }, t || {}) : k(r, t.toString().toLowerCase());
            } }, t.getLuminance = function (e, t, r) { return .2126 * (e = (e /= 255) < .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)) + .7152 * (t = (t /= 255) < .03928 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)) + .0722 * ((r /= 255) < .03928 ? r / 12.92 : Math.pow((r + .055) / 1.055, 2.4)); }, t.limit = a, t.ensureArray = function (e) { return e ? Array.from(e) : []; }, t.nvl = l;
        }, function (e, t, r) {
            "use strict";
            e.exports = function (e) { return null != e && "object" == typeof e && !1 === Array.isArray(e); };
        }, function (e, t) { e.exports = '<div class="a-color-picker-row a-color-picker-stack a-color-picker-row-top"> <canvas class="a-color-picker-sl a-color-picker-transparent"></canvas> <div class=a-color-picker-dot></div> </div> <div class=a-color-picker-row> <div class="a-color-picker-stack a-color-picker-transparent a-color-picker-circle"> <div class=a-color-picker-preview> <input class=a-color-picker-clipbaord type=text> </div> </div> <div class=a-color-picker-column> <div class="a-color-picker-cell a-color-picker-stack"> <canvas class=a-color-picker-h></canvas> <div class=a-color-picker-dot></div> </div> <div class="a-color-picker-cell a-color-picker-alpha a-color-picker-stack" show-on-alpha> <canvas class="a-color-picker-a a-color-picker-transparent"></canvas> <div class=a-color-picker-dot></div> </div> </div> </div> <div class="a-color-picker-row a-color-picker-hsl" show-on-hsl> <label>H</label> <input nameref=H type=number maxlength=3 min=0 max=360 value=0> <label>S</label> <input nameref=S type=number maxlength=3 min=0 max=100 value=0> <label>L</label> <input nameref=L type=number maxlength=3 min=0 max=100 value=0> </div> <div class="a-color-picker-row a-color-picker-rgb" show-on-rgb> <label>R</label> <input nameref=R type=number maxlength=3 min=0 max=255 value=0> <label>G</label> <input nameref=G type=number maxlength=3 min=0 max=255 value=0> <label>B</label> <input nameref=B type=number maxlength=3 min=0 max=255 value=0> </div> <div class="a-color-picker-row a-color-picker-rgbhex a-color-picker-single-input" show-on-single-input> <label>HEX</label> <input nameref=RGBHEX type=text select-on-focus> </div> <div class="a-color-picker-row a-color-picker-palette"></div>'; }, function (e, t, r) { var i = r(6); e.exports = "string" == typeof i ? i : i.toString(); }, function (e, t, r) { (e.exports = r(7)(!1)).push([e.i, "/*!\n * a-color-picker\n * https://github.com/narsenico/a-color-picker\n *\n * Copyright (c) 2017-2018, Gianfranco Caldi.\n * Released under the MIT License.\n */.a-color-picker{background-color:#fff;padding:0;display:inline-flex;flex-direction:column;user-select:none;width:232px;font:400 10px Helvetica,Arial,sans-serif;border-radius:3px;box-shadow:0 0 0 1px rgba(0,0,0,.05),0 2px 4px rgba(0,0,0,.25)}.a-color-picker,.a-color-picker-row,.a-color-picker input{box-sizing:border-box}.a-color-picker-row{padding:15px;display:flex;flex-direction:row;align-items:center;justify-content:space-between;user-select:none}.a-color-picker-row-top{padding:0}.a-color-picker-row:not(:first-child){border-top:1px solid #f5f5f5}.a-color-picker-column{display:flex;flex-direction:column}.a-color-picker-cell{flex:1 1 auto;margin-bottom:4px}.a-color-picker-cell:last-child{margin-bottom:0}.a-color-picker-stack{position:relative}.a-color-picker-dot{position:absolute;width:14px;height:14px;top:0;left:0;background:#fff;pointer-events:none;border-radius:50px;z-index:1000;box-shadow:0 1px 2px rgba(0,0,0,.75)}.a-color-picker-a,.a-color-picker-h,.a-color-picker-sl{cursor:cell}.a-color-picker-a+.a-color-picker-dot,.a-color-picker-h+.a-color-picker-dot{top:-2px}.a-color-picker-a,.a-color-picker-h{border-radius:2px}.a-color-picker-preview{box-sizing:border-box;width:30px;height:30px;user-select:none;border-radius:15px}.a-color-picker-circle{border-radius:50px;border:1px solid #eee}.a-color-picker-hsl,.a-color-picker-rgb,.a-color-picker-single-input{justify-content:space-evenly}.a-color-picker-hsl>label,.a-color-picker-rgb>label,.a-color-picker-single-input>label{padding:0 8px;flex:0 0 auto;color:#969696}.a-color-picker-hsl>input,.a-color-picker-rgb>input,.a-color-picker-single-input>input{text-align:center;padding:2px 0;width:0;flex:1 1 auto;border:1px solid #e0e0e0;line-height:20px}.a-color-picker-hsl>input::-webkit-inner-spin-button,.a-color-picker-rgb>input::-webkit-inner-spin-button,.a-color-picker-single-input>input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.a-color-picker-hsl>input:focus,.a-color-picker-rgb>input:focus,.a-color-picker-single-input>input:focus{border-color:#04a9f4;outline:none}.a-color-picker-transparent{background-image:linear-gradient(-45deg,#cdcdcd 25%,transparent 0),linear-gradient(45deg,#cdcdcd 25%,transparent 0),linear-gradient(-45deg,transparent 75%,#cdcdcd 0),linear-gradient(45deg,transparent 75%,#cdcdcd 0);background-size:11px 11px;background-position:0 0,0 -5.5px,-5.5px 5.5px,5.5px 0}.a-color-picker-sl{border-radius:3px 3px 0 0}.a-color-picker.hide-alpha [show-on-alpha],.a-color-picker.hide-hsl [show-on-hsl],.a-color-picker.hide-rgb [show-on-rgb],.a-color-picker.hide-single-input [show-on-single-input]{display:none}.a-color-picker-clipbaord{width:100%;height:100%;opacity:0;cursor:pointer}.a-color-picker-palette{flex-flow:wrap;flex-direction:row;justify-content:flex-start;padding:10px}.a-color-picker-palette-color{width:15px;height:15px;flex:0 1 15px;margin:3px;box-sizing:border-box;cursor:pointer;border-radius:3px;box-shadow:inset 0 0 0 1px rgba(0,0,0,.1)}.a-color-picker-palette-add{text-align:center;line-height:13px;color:#607d8b}.a-color-picker.hidden{display:none}", ""]); }, function (e, t) { e.exports = function (e) { var t = []; return t.toString = function () { return this.map(function (t) { var r = function (e, t) { var r = e[1] || "", i = e[3]; if (!i)
            return r; if (t && "function" == typeof btoa) {
            var o = function (e) { return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */"; }(i), n = i.sources.map(function (e) { return "/*# sourceURL=" + i.sourceRoot + e + " */"; });
            return [r].concat(n).concat([o]).join("\n");
        } return [r].join("\n"); }(t, e); return t[2] ? "@media " + t[2] + "{" + r + "}" : r; }).join(""); }, t.i = function (e, r) { "string" == typeof e && (e = [[null, e, ""]]); for (var i = {}, o = 0; o < this.length; o++) {
            var n = this[o][0];
            "number" == typeof n && (i[n] = !0);
        } for (o = 0; o < e.length; o++) {
            var s = e[o];
            "number" == typeof s[0] && i[s[0]] || (r && !s[2] ? s[2] = r : r && (s[2] = "(" + s[2] + ") and (" + r + ")"), t.push(s));
        } }, t; }; }]);
});


/***/ }),

/***/ 11804:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "colorPicker": function() { return /* binding */ colorPicker; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(20255);
/* harmony import */ var jodit_core_plugin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91729);
/* harmony import */ var jodit_modules__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81165);
/* harmony import */ var _ui_input_color_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4255);
/* harmony import */ var jodit_core_decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11169);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33594);
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */






class colorPicker extends jodit_core_plugin__WEBPACK_IMPORTED_MODULE_0__/* .Plugin */ .Sy {
    constructor() {
        super(...arguments);
        this.requires = ['license'];
        this.hasStyle = !_index__WEBPACK_IMPORTED_MODULE_4__.Jodit.fatMode;
    }
    afterInit(jodit) {
        jodit.e.on('afterGenerateColorPicker', this.onAfterGenerateColorPicker);
    }
    onAfterGenerateColorPicker(ignore, extra, callback, color) {
        jodit_modules__WEBPACK_IMPORTED_MODULE_1__.Dom.detach(extra);
        const ci = new _ui_input_color_input__WEBPACK_IMPORTED_MODULE_2__/* .ColorInput */ .T(this.j, {
            value: color || '#000',
            onChange: callback
        });
        extra.appendChild(ci.container);
    }
    beforeDestruct(jodit) {
        jodit.e.off('afterGenerateColorPicker', this.onAfterGenerateColorPicker);
    }
}
(0,tslib__WEBPACK_IMPORTED_MODULE_5__/* .__decorate */ .gn)([
    jodit_core_decorators__WEBPACK_IMPORTED_MODULE_3__.autobind
], colorPicker.prototype, "onAfterGenerateColorPicker", null);
_index__WEBPACK_IMPORTED_MODULE_4__.Jodit.plugins.add('color-picker', colorPicker);


/***/ }),

/***/ 4255:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": function() { return /* binding */ ColorInput; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(20255);
/* harmony import */ var jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41685);
/* harmony import */ var jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11169);
/* harmony import */ var jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(52607);
/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86757);
/* harmony import */ var a_color_picker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(a_color_picker__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jodit_modules__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(81165);
/* harmony import */ var jodit_core_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10063);
/*!
 * Jodit Editor PRO (https://xdsoft.net/jodit/)
 * See LICENSE.md in the project root for license information.
 * Copyright (c) 2013-2022 Valeriy Chupurnov. All rights reserved. https://xdsoft.net/jodit/pro/
 */









let ColorInput = class ColorInput extends jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .UIInput */ .u3 {
    constructor(jodit, options) {
        super(jodit, options);
        const popup = new jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .Popup */ .GI(jodit), parse = (c) => a_color_picker__WEBPACK_IMPORTED_MODULE_3__.parseColor(c, 'hex');
        this.popup = popup;
        this.trigger = (0,jodit_core_ui__WEBPACK_IMPORTED_MODULE_0__/* .Button */ .zx)(this.j, 'ok');
        const wrapper = this.getElm('wrapper');
        (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.assert)(wrapper != null, 'wrapper element does not exist');
        wrapper.appendChild(this.trigger.container);
        this.trigger.container.classList.add(this.getFullElName('trigger'));
        this.trigger.onAction(() => {
            var _a, _b;
            (_b = (_a = this.state).onChange) === null || _b === void 0 ? void 0 : _b.call(_a, this.value);
            popup.close();
        });
        popup.setMod('padding', false).setMod('max-height', false);
        const pickerElement = this.j.create.div(this.getFullElName('picker'));
        const picker = a_color_picker__WEBPACK_IMPORTED_MODULE_3__.createPicker(pickerElement, {
            paletteEditable: true,
            showAlpha: true,
            palette: 'PALETTE_MATERIAL_CHROME'
        }).on('change', (picker, color) => {
            if (!this.isFocused) {
                this.value = a_color_picker__WEBPACK_IMPORTED_MODULE_3__.parseColor(color || '', 'hex');
            }
        });
        this.j.e.on(this, 'change', () => {
            if (parse(this.value) !== picker.color) {
                picker.color = this.value;
            }
        });
        popup.setContent(pickerElement);
        this.j.e.on(this.nativeInput, 'click', () => {
            popup.parentElement = this;
            if (this.jodit instanceof jodit_modules__WEBPACK_IMPORTED_MODULE_4__.Dialog) {
                popup.setZIndex(this.jodit.getZIndex() + 1);
            }
            popup.open(() => (0,jodit_core_helpers__WEBPACK_IMPORTED_MODULE_2__.position)(this.container));
        });
        this.onChangeValue();
        this.onChangeSelfValue();
    }
    className() {
        return 'ColorInput';
    }
    afterSetMode(name, value) {
        if (name === 'slim' && value) {
            this.nativeInput.setAttribute('readonly', 'true');
        }
    }
    onChangeSelfValue() {
        this.nativeInput.style.backgroundColor = this.value;
    }
    onEscKeyDown(e) {
        var _a;
        if (e.key === jodit_core_constants__WEBPACK_IMPORTED_MODULE_5__.KEY_ESC) {
            (_a = this.popup) === null || _a === void 0 ? void 0 : _a.close();
        }
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)(':change')
], ColorInput.prototype, "onChangeSelfValue", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    (0,jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.watch)('nativeInput:keydown')
], ColorInput.prototype, "onEscKeyDown", null);
ColorInput = (0,tslib__WEBPACK_IMPORTED_MODULE_6__/* .__decorate */ .gn)([
    jodit_core_decorators__WEBPACK_IMPORTED_MODULE_1__.component
], ColorInput);



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__(11804));
/******/ return __webpack_exports__;
/******/ }
]);
});