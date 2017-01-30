if (function(n, t) {
        typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
            if (!n.document) throw new Error("jQuery requires a window with a document");
            return t(n)
        } : t(n)
    }(typeof window != "undefined" ? window : this, function(n, t) {
        function ii(n) {
            var t = !!n && "length" in n && n.length,
                r = i.type(n);
            return r === "function" || i.isWindow(n) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
        }

        function ri(n, t, r) {
            if (i.isFunction(t)) return i.grep(n, function(n, i) {
                return !!t.call(n, i, n) !== r
            });
            if (t.nodeType) return i.grep(n, function(n) {
                return n === t !== r
            });
            if (typeof t == "string") {
                if (bf.test(t)) return i.filter(t, n, r);
                t = i.filter(t, n)
            }
            return i.grep(n, function(n) {
                return lt.call(t, n) > -1 !== r
            })
        }

        function hr(n, t) {
            while ((n = n[t]) && n.nodeType !== 1);
            return n
        }

        function kf(n) {
            var t = {};
            return i.each(n.match(h) || [], function(n, i) {
                t[i] = !0
            }), t
        }

        function yt() {
            u.removeEventListener("DOMContentLoaded", yt);
            n.removeEventListener("load", yt);
            i.ready()
        }

        function et() {
            this.expando = i.expando + et.uid++
        }

        function lr(n, t, r) {
            var u;
            if (r === undefined && n.nodeType === 1)
                if (u = "data-" + t.replace(cr, "-$&").toLowerCase(), r = n.getAttribute(u), typeof r == "string") {
                    try {
                        r = r === "true" ? !0 : r === "false" ? !1 : r === "null" ? null : +r + "" === r ? +r : df.test(r) ? i.parseJSON(r) : r
                    } catch (f) {}
                    e.set(n, t, r)
                } else r = undefined;
            return r
        }

        function vr(n, t, r, u) {
            var h, e = 1,
                l = 20,
                c = u ? function() {
                    return u.cur()
                } : function() {
                    return i.css(n, t, "")
                },
                s = c(),
                o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
                f = (i.cssNumber[t] || o !== "px" && +s) && ot.exec(i.css(n, t));
            if (f && f[3] !== o) {
                o = o || f[3];
                r = r || [];
                f = +s || 1;
                do e = e || ".5", f = f / e, i.style(n, t, f + o); while (e !== (e = c() / s) && e !== 1 && --l)
            }
            return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
        }

        function o(n, t) {
            var r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [];
            return t === undefined || t && i.nodeName(n, t) ? i.merge([n], r) : r
        }

        function ui(n, t) {
            for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
        }

        function kr(n, t, r, u, f) {
            for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
                if (e = n[l], e || e === 0)
                    if (i.type(e) === "object") i.merge(y, e.nodeType ? [e] : e);
                    else if (br.test(e)) {
                for (s = s || h.appendChild(t.createElement("div")), p = (pr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
                i.merge(y, s.childNodes);
                s = h.firstChild;
                s.textContent = ""
            } else y.push(t.createTextNode(e));
            for (h.textContent = "", l = 0; e = y[l++];) {
                if (u && i.inArray(e, u) > -1) {
                    f && f.push(e);
                    continue
                }
                if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && ui(s), r)
                    for (v = 0; e = s[v++];) wr.test(e.type || "") && r.push(e)
            }
            return h
        }

        function pt() {
            return !0
        }

        function nt() {
            return !1
        }

        function gr() {
            try {
                return u.activeElement
            } catch (n) {}
        }

        function fi(n, t, r, u, f, e) {
            var o, s;
            if (typeof t == "object") {
                typeof r != "string" && (u = u || r, r = undefined);
                for (s in t) fi(n, s, r, u, t[s], e);
                return n
            }
            if (u == null && f == null ? (f = r, u = r = undefined) : f == null && (typeof r == "string" ? (f = u, u = undefined) : (f = u, u = r, r = undefined)), f === !1) f = nt;
            else if (!f) return n;
            return e === 1 && (o = f, f = function(n) {
                return i().off(n), o.apply(this, arguments)
            }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
                i.event.add(this, t, f, u, r)
            })
        }

        function nu(n, t) {
            return i.nodeName(n, "table") && i.nodeName(t.nodeType !== 11 ? t : t.firstChild, "tr") ? n.getElementsByTagName("tbody")[0] || n.appendChild(n.ownerDocument.createElement("tbody")) : n
        }

        function ee(n) {
            return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
        }

        function oe(n) {
            var t = ue.exec(n.type);
            return t ? n.type = t[1] : n.removeAttribute("type"), n
        }

        function tu(n, t) {
            var f, c, o, s, h, l, a, u;
            if (t.nodeType === 1) {
                if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                    delete h.handle;
                    h.events = {};
                    for (o in u)
                        for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
                }
                e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
            }
        }

        function se(n, t) {
            var i = t.nodeName.toLowerCase();
            i === "input" && yr.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
        }

        function b(n, t, u, e) {
            t = gi.apply([], t);
            var l, p, c, a, s, w, h = 0,
                v = n.length,
                d = v - 1,
                y = t[0],
                k = i.isFunction(y);
            if (k || v > 1 && typeof y == "string" && !f.checkClone && re.test(y)) return n.each(function(i) {
                var r = n.eq(i);
                k && (t[0] = y.call(this, i, r.html()));
                b(r, t, u, e)
            });
            if (v && (l = kr(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, l.childNodes.length === 1 && (l = p), p || e)) {
                for (c = i.map(o(l, "script"), ee), a = c.length; h < v; h++) s = l, h !== d && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
                if (a)
                    for (w = c[c.length - 1].ownerDocument, i.map(c, oe), h = 0; h < a; h++) s = c[h], wr.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : i.globalEval(s.textContent.replace(fe, "")))
            }
            return n
        }

        function iu(n, t, r) {
            for (var u, e = t ? i.filter(t, n) : n, f = 0;
                (u = e[f]) != null; f++) r || u.nodeType !== 1 || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && ui(o(u, "script")), u.parentNode.removeChild(u));
            return n
        }

        function ru(n, t) {
            var r = i(t.createElement(n)).appendTo(t.body),
                u = i.css(r[0], "display");
            return r.detach(), u
        }

        function oi(n) {
            var r = u,
                t = ei[n];
            return t || (t = ru(n, r), t !== "none" && t || (wt = (wt || i("<iframe frameborder='0' width='0' height='0'/>")).appendTo(r.documentElement), r = wt[0].contentDocument, r.write(), r.close(), t = ru(n, r), wt.detach()), ei[n] = t), t
        }

        function tt(n, t, r) {
            var o, s, h, u, e = n.style;
            return r = r || bt(n), u = r ? r.getPropertyValue(t) || r[t] : undefined, u !== "" && u !== undefined || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), r && !f.pixelMarginRight() && si.test(u) && uu.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h), u !== undefined ? u + "" : u
        }

        function ci(n, t) {
            return {
                get: function() {
                    if (n()) {
                        delete this.get;
                        return
                    }
                    return (this.get = t).apply(this, arguments)
                }
            }
        }

        function su(n) {
            if (n in ou) return n;
            for (var i = n[0].toUpperCase() + n.slice(1), t = eu.length; t--;)
                if (n = eu[t] + i, n in ou) return n
        }

        function hu(n, t, i) {
            var r = ot.exec(t);
            return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
        }

        function cu(n, t, r, u, f) {
            for (var e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0, o = 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + w[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + w[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + w[e] + "Width", !0, f))) : (o += i.css(n, "padding" + w[e], !0, f), r !== "padding" && (o += i.css(n, "border" + w[e] + "Width", !0, f)));
            return o
        }

        function lu(t, r, e) {
            var h = !0,
                o = r === "width" ? t.offsetWidth : t.offsetHeight,
                s = bt(t),
                c = i.css(t, "boxSizing", !1, s) === "border-box";
            if (u.msFullscreenElement && n.top !== n && t.getClientRects().length && (o = Math.round(t.getBoundingClientRect()[r] * 100)), o <= 0 || o == null) {
                if (o = tt(t, r, s), (o < 0 || o == null) && (o = t.style[r]), si.test(o)) return o;
                h = c && (f.boxSizingReliable() || o === t.style[r]);
                o = parseFloat(o) || 0
            }
            return o + cu(t, r, e || (c ? "border" : "content"), h, s) + "px"
        }

        function au(n, t) {
            for (var e, u, s, o = [], f = 0, h = n.length; f < h; f++)(u = n[f], u.style) && (o[f] = r.get(u, "olddisplay"), e = u.style.display, t ? (o[f] || e !== "none" || (u.style.display = ""), u.style.display === "" && st(u) && (o[f] = r.access(u, "olddisplay", oi(u.nodeName)))) : (s = st(u), e === "none" && s || r.set(u, "olddisplay", s ? e : i.css(u, "display"))));
            for (f = 0; f < h; f++)(u = n[f], u.style) && (t && u.style.display !== "none" && u.style.display !== "" || (u.style.display = t ? o[f] || "" : "none"));
            return n
        }

        function s(n, t, i, r, u) {
            return new s.prototype.init(n, t, i, r, u)
        }

        function pu() {
            return n.setTimeout(function() {
                it = undefined
            }), it = i.now()
        }

        function dt(n, t) {
            var r, u = 0,
                i = {
                    height: n
                };
            for (t = t ? 1 : 0; u < 4; u += 2 - t) r = w[u], i["margin" + r] = i["padding" + r] = n;
            return t && (i.opacity = i.width = n), i
        }

        function wu(n, t, i) {
            for (var u, f = (l.tweeners[t] || []).concat(l.tweeners["*"]), r = 0, e = f.length; r < e; r++)
                if (u = f[r].call(i, t, n)) return u
        }

        function le(n, t, u) {
            var f, a, p, v, o, w, h, b, l = this,
                y = {},
                s = n.style,
                c = n.nodeType && st(n),
                e = r.get(n, "fxshow");
            u.queue || (o = i._queueHooks(n, "fx"), o.unqueued == null && (o.unqueued = 0, w = o.empty.fire, o.empty.fire = function() {
                o.unqueued || w()
            }), o.unqueued++, l.always(function() {
                l.always(function() {
                    o.unqueued--;
                    i.queue(n, "fx").length || o.empty.fire()
                })
            }));
            n.nodeType === 1 && ("height" in t || "width" in t) && (u.overflow = [s.overflow, s.overflowX, s.overflowY], h = i.css(n, "display"), b = h === "none" ? r.get(n, "olddisplay") || oi(n.nodeName) : h, b === "inline" && i.css(n, "float") === "none" && (s.display = "inline-block"));
            u.overflow && (s.overflow = "hidden", l.always(function() {
                s.overflow = u.overflow[0];
                s.overflowX = u.overflow[1];
                s.overflowY = u.overflow[2]
            }));
            for (f in t)
                if (a = t[f], vu.exec(a)) {
                    if (delete t[f], p = p || a === "toggle", a === (c ? "hide" : "show"))
                        if (a === "show" && e && e[f] !== undefined) c = !0;
                        else continue;
                    y[f] = e && e[f] || i.style(n, f)
                } else h = undefined;
            if (i.isEmptyObject(y))(h === "none" ? oi(n.nodeName) : h) === "inline" && (s.display = h);
            else {
                e ? "hidden" in e && (c = e.hidden) : e = r.access(n, "fxshow", {});
                p && (e.hidden = !c);
                c ? i(n).show() : l.done(function() {
                    i(n).hide()
                });
                l.done(function() {
                    var t;
                    r.remove(n, "fxshow");
                    for (t in y) i.style(n, t, y[t])
                });
                for (f in y) v = wu(c ? e[f] : 0, f, l), f in e || (e[f] = v.start, c && (v.end = v.start, v.start = f === "width" || f === "height" ? 1 : 0))
            }
        }

        function ae(n, t) {
            var r, f, e, u, o;
            for (r in n)
                if (f = i.camelCase(r), e = t[f], u = n[r], i.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                    u = o.expand(u);
                    delete n[f];
                    for (r in u) r in n || (n[r] = u[r], t[r] = e)
                } else t[f] = e
        }

        function l(n, t, r) {
            var f, o, s = 0,
                a = l.prefilters.length,
                e = i.Deferred().always(function() {
                    delete c.elem
                }),
                c = function() {
                    if (o) return !1;
                    for (var s = it || pu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, f = u.tweens.length; r < f; r++) u.tweens[r].run(i);
                    return e.notifyWith(n, [u, i, t]), i < 1 && f ? t : (e.resolveWith(n, [u]), !1)
                },
                u = e.promise({
                    elem: n,
                    props: i.extend({}, t),
                    opts: i.extend(!0, {
                        specialEasing: {},
                        easing: i.easing._default
                    }, r),
                    originalProperties: t,
                    originalOptions: r,
                    startTime: it || pu(),
                    duration: r.duration,
                    tweens: [],
                    createTween: function(t, r) {
                        var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                        return u.tweens.push(f), f
                    },
                    stop: function(t) {
                        var i = 0,
                            r = t ? u.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; i < r; i++) u.tweens[i].run(1);
                        return t ? (e.notifyWith(n, [u, 1, 0]), e.resolveWith(n, [u, t])) : e.rejectWith(n, [u, t]), this
                    }
                }),
                h = u.props;
            for (ae(h, u.opts.specialEasing); s < a; s++)
                if (f = l.prefilters[s].call(u, n, h, u.opts), f) return i.isFunction(f.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(f.stop, f)), f;
            return i.map(h, wu, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), i.fx.timer(i.extend(c, {
                elem: n,
                anim: u,
                queue: u.opts.queue
            })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
        }

        function k(n) {
            return n.getAttribute && n.getAttribute("class") || ""
        }

        function ff(n) {
            return function(t, r) {
                typeof t != "string" && (r = t, t = "*");
                var u, f = 0,
                    e = t.toLowerCase().match(h) || [];
                if (i.isFunction(r))
                    while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
            }
        }

        function ef(n, t, r, u) {
            function e(s) {
                var h;
                return f[s] = !0, i.each(n[s] || [], function(n, i) {
                    var s = i(t, r, u);
                    if (typeof s != "string" || o || f[s]) {
                        if (o) return !(h = s)
                    } else return t.dataTypes.unshift(s), e(s), !1
                }), h
            }
            var f = {},
                o = n === yi;
            return e(t.dataTypes[0]) || !f["*"] && e("*")
        }

        function wi(n, t) {
            var r, u, f = i.ajaxSettings.flatOptions || {};
            for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
            return u && i.extend(!0, n, u), n
        }

        function be(n, t, i) {
            for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
            if (e)
                for (u in s)
                    if (s[u] && s[u].test(e)) {
                        r.unshift(u);
                        break
                    }
            if (r[0] in i) f = r[0];
            else {
                for (u in i) {
                    if (!r[0] || n.converters[u + " " + r[0]]) {
                        f = u;
                        break
                    }
                    o || (o = u)
                }
                f = f || o
            }
            if (f) return f !== r[0] && r.unshift(f), i[f]
        }

        function ke(n, t, i, r) {
            var h, u, f, s, e, o = {},
                c = n.dataTypes.slice();
            if (c[1])
                for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
            for (u = c.shift(); u;)
                if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                    if (u === "*") u = e;
                    else if (e !== "*" && e !== u) {
                if (f = o[e + " " + u] || o["* " + u], !f)
                    for (h in o)
                        if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                            f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                            break
                        }
                if (f !== !0)
                    if (f && n.throws) t = f(t);
                    else try {
                        t = f(t)
                    } catch (l) {
                        return {
                            state: "parsererror",
                            error: f ? l : "No conversion from " + e + " to " + u
                        }
                    }
            }
            return {
                state: "success",
                data: t
            }
        }

        function bi(n, t, r, u) {
            var f;
            if (i.isArray(t)) i.each(t, function(t, i) {
                r || ge.test(n) ? u(n, i) : bi(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
            });
            else if (r || i.type(t) !== "object") u(n, t);
            else
                for (f in t) bi(n + "[" + f + "]", t[f], r, u)
        }

        function hf(n) {
            return i.isWindow(n) ? n : n.nodeType === 9 && n.defaultView
        }
        var y = [],
            u = n.document,
            v = y.slice,
            gi = y.concat,
            ti = y.push,
            lt = y.indexOf,
            at = {},
            af = at.toString,
            ft = at.hasOwnProperty,
            f = {},
            nr = "2.2.3",
            i = function(n, t) {
                return new i.fn.init(n, t)
            },
            vf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            yf = /^-ms-/,
            pf = /-([\da-z])/gi,
            wf = function(n, t) {
                return t.toUpperCase()
            },
            p, ur, fr, er, or, sr, h, vt, a, g, br, wt, ei, it, kt, vu, yu, bu, rt, ku, du, gt, gu, nf, li, sf, ut, ki, ni, di, cf, lf;
        i.fn = i.prototype = {
            jquery: nr,
            constructor: i,
            selector: "",
            length: 0,
            toArray: function() {
                return v.call(this)
            },
            get: function(n) {
                return n != null ? n < 0 ? this[n + this.length] : this[n] : v.call(this)
            },
            pushStack: function(n) {
                var t = i.merge(this.constructor(), n);
                return t.prevObject = this, t.context = this.context, t
            },
            each: function(n) {
                return i.each(this, n)
            },
            map: function(n) {
                return this.pushStack(i.map(this, function(t, i) {
                    return n.call(t, i, t)
                }))
            },
            slice: function() {
                return this.pushStack(v.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(n) {
                var i = this.length,
                    t = +n + (n < 0 ? i : 0);
                return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: ti,
            sort: y.sort,
            splice: y.splice
        };
        i.extend = i.fn.extend = function() {
            var e, f, r, t, o, s, n = arguments[0] || {},
                u = 1,
                c = arguments.length,
                h = !1;
            for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
                if ((e = arguments[u]) != null)
                    for (f in e)(r = n[f], t = e[f], n !== t) && (h && t && (i.isPlainObject(t) || (o = i.isArray(t))) ? (o ? (o = !1, s = r && i.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
            return n
        };
        i.extend({
            expando: "jQuery" + (nr + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(n) {
                throw new Error(n);
            },
            noop: function() {},
            isFunction: function(n) {
                return i.type(n) === "function"
            },
            isArray: Array.isArray,
            isWindow: function(n) {
                return n != null && n === n.window
            },
            isNumeric: function(n) {
                var t = n && n.toString();
                return !i.isArray(n) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(n) {
                var t;
                if (i.type(n) !== "object" || n.nodeType || i.isWindow(n) || n.constructor && !ft.call(n, "constructor") && !ft.call(n.constructor.prototype || {}, "isPrototypeOf")) return !1;
                for (t in n);
                return t === undefined || ft.call(n, t)
            },
            isEmptyObject: function(n) {
                for (var t in n) return !1;
                return !0
            },
            type: function(n) {
                return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? at[af.call(n)] || "object" : typeof n
            },
            globalEval: function(n) {
                var t, r = eval;
                n = i.trim(n);
                n && (n.indexOf("use strict") === 1 ? (t = u.createElement("script"), t.text = n, u.head.appendChild(t).parentNode.removeChild(t)) : r(n))
            },
            camelCase: function(n) {
                return n.replace(yf, "ms-").replace(pf, wf)
            },
            nodeName: function(n, t) {
                return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
            },
            each: function(n, t) {
                var r, i = 0;
                if (ii(n)) {
                    for (r = n.length; i < r; i++)
                        if (t.call(n[i], i, n[i]) === !1) break
                } else
                    for (i in n)
                        if (t.call(n[i], i, n[i]) === !1) break; return n
            },
            trim: function(n) {
                return n == null ? "" : (n + "").replace(vf, "")
            },
            makeArray: function(n, t) {
                var r = t || [];
                return n != null && (ii(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ti.call(r, n)), r
            },
            inArray: function(n, t, i) {
                return t == null ? -1 : lt.call(t, n, i)
            },
            merge: function(n, t) {
                for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
                return n.length = r, n
            },
            grep: function(n, t, i) {
                for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
                return f
            },
            map: function(n, t, i) {
                var e, u, r = 0,
                    f = [];
                if (ii(n))
                    for (e = n.length; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
                else
                    for (r in n) u = t(n[r], r, i), u != null && f.push(u);
                return gi.apply([], f)
            },
            guid: 1,
            proxy: function(n, t) {
                var u, f, r;
                return (typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n)) ? undefined : (f = v.call(arguments, 2), r = function() {
                    return n.apply(t || this, f.concat(v.call(arguments)))
                }, r.guid = n.guid = n.guid || i.guid++, r)
            },
            now: Date.now,
            support: f
        });
        typeof Symbol == "function" && (i.fn[Symbol.iterator] = y[Symbol.iterator]);
        i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
            at["[object " + t + "]"] = t.toLowerCase()
        });
        p = function(n) {
            function u(n, t, r, u) {
                var l, w, a, s, nt, d, y, g, p = t && t.ownerDocument,
                    v = t ? t.nodeType : 9;
                if (r = r || [], typeof n != "string" || !n || v !== 1 && v !== 9 && v !== 11) return r;
                if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                    if (v !== 11 && (d = sr.exec(n)))
                        if (l = d[1]) {
                            if (v === 9)
                                if (a = t.getElementById(l)) {
                                    if (a.id === l) return r.push(a), r
                                } else return r;
                            else if (p && (a = p.getElementById(l)) && et(t, a) && a.id === l) return r.push(a), r
                        } else {
                            if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                            if ((l = d[3]) && f.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(l)), r
                        }
                    if (f.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                        if (v !== 1) p = t, g = n;
                        else if (t.nodeName.toLowerCase() !== "object") {
                            for ((s = t.getAttribute("id")) ? s = s.replace(hr, "\\$&") : t.setAttribute("id", s = e), y = ft(n), w = y.length, nt = yi.test(s) ? "#" + s : "[id='" + s + "']"; w--;) y[w] = nt + " " + yt(y[w]);
                            g = y.join(",");
                            p = gt.test(n) && ii(t.parentNode) || t
                        }
                        if (g) try {
                            return k.apply(r, p.querySelectorAll(g)), r
                        } catch (tt) {} finally {
                            s === e && t.removeAttribute("id")
                        }
                    }
                }
                return si(n.replace(at, "$1"), t, r, u)
            }

            function ni() {
                function n(r, u) {
                    return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
                }
                var i = [];
                return n
            }

            function l(n) {
                return n[e] = !0, n
            }

            function a(n) {
                var t = i.createElement("div");
                try {
                    return !!n(t)
                } catch (r) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t);
                    t = null
                }
            }

            function ti(n, i) {
                for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
            }

            function wi(n, t) {
                var i = t && n,
                    r = i && n.nodeType === 1 && t.nodeType === 1 && (~t.sourceIndex || li) - (~n.sourceIndex || li);
                if (r) return r;
                if (i)
                    while (i = i.nextSibling)
                        if (i === t) return -1;
                return n ? 1 : -1
            }

            function cr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return i === "input" && t.type === n
                }
            }

            function lr(n) {
                return function(t) {
                    var i = t.nodeName.toLowerCase();
                    return (i === "input" || i === "button") && t.type === n
                }
            }

            function it(n) {
                return l(function(t) {
                    return t = +t, l(function(i, r) {
                        for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                    })
                })
            }

            function ii(n) {
                return n && typeof n.getElementsByTagName != "undefined" && n
            }

            function bi() {}

            function yt(n) {
                for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
                return i
            }

            function ri(n, t, i) {
                var r = t.dir,
                    u = i && r === "parentNode",
                    f = ki++;
                return t.first ? function(t, i, f) {
                    while (t = t[r])
                        if (t.nodeType === 1 || u) return n(t, i, f)
                } : function(t, i, o) {
                    var s, h, c, l = [v, f];
                    if (o) {
                        while (t = t[r])
                            if ((t.nodeType === 1 || u) && n(t, i, o)) return !0
                    } else
                        while (t = t[r])
                            if (t.nodeType === 1 || u) {
                                if (c = t[e] || (t[e] = {}), h = c[t.uniqueID] || (c[t.uniqueID] = {}), (s = h[r]) && s[0] === v && s[1] === f) return l[2] = s[2];
                                if (h[r] = l, l[2] = n(t, i, o)) return !0
                            }
                }
            }

            function ui(n) {
                return n.length > 1 ? function(t, i, r) {
                    for (var u = n.length; u--;)
                        if (!n[u](t, i, r)) return !1;
                    return !0
                } : n[0]
            }

            function ar(n, t, i) {
                for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
                return i
            }

            function pt(n, t, i, r, u) {
                for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
                return o
            }

            function fi(n, t, i, r, u, f) {
                return r && !r[e] && (r = fi(r)), u && !u[e] && (u = fi(u, f)), l(function(f, e, o, s) {
                    var l, c, a, p = [],
                        y = [],
                        w = e.length,
                        b = f || ar(t || "*", o.nodeType ? [o] : o, []),
                        v = n && (f || !t) ? pt(b, p, n, o, s) : b,
                        h = i ? u || (f ? n : w || r) ? [] : e : v;
                    if (i && i(v, h, o, s), r)
                        for (l = pt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                    if (f) {
                        if (u || n) {
                            if (u) {
                                for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                                u(null, h = [], l, s)
                            }
                            for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                        }
                    } else h = pt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
                })
            }

            function ei(n) {
                for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = ri(function(n) {
                        return n === o
                    }, c, !0), a = ri(function(n) {
                        return nt(o, n) > -1
                    }, c, !0), f = [function(n, t, i) {
                        var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                        return o = null, r
                    }]; i < s; i++)
                    if (u = t.relative[n[i].type]) f = [ri(ui(f), u)];
                    else {
                        if (u = t.filter[n[i].type].apply(null, n[i].matches), u[e]) {
                            for (r = ++i; r < s; r++)
                                if (t.relative[n[r].type]) break;
                            return fi(i > 1 && ui(f), i > 1 && yt(n.slice(0, i - 1).concat({
                                value: n[i - 2].type === " " ? "*" : ""
                            })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                        }
                        f.push(u)
                    }
                return ui(f)
            }

            function vr(n, r) {
                var f = r.length > 0,
                    e = n.length > 0,
                    o = function(o, s, c, l, a) {
                        var y, nt, d, g = 0,
                            p = "0",
                            tt = o && [],
                            w = [],
                            it = ht,
                            rt = o || e && t.find.TAG("*", a),
                            ut = v += it == null ? 1 : Math.random() || .1,
                            ft = rt.length;
                        for (a && (ht = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                            if (e && y) {
                                for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                    if (d(y, s || i, c)) {
                                        l.push(y);
                                        break
                                    }
                                a && (v = ut)
                            }
                            f && ((y = !d && y) && g--, o && tt.push(y))
                        }
                        if (g += p, f && p !== g) {
                            for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                            if (o) {
                                if (g > 0)
                                    while (p--) tt[p] || w[p] || (w[p] = gi.call(l));
                                w = pt(w)
                            }
                            k.apply(l, w);
                            a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                        }
                        return a && (v = ut, ht = it), tt
                    };
                return f ? l(o) : o
            }
            var rt, f, t, st, oi, ft, wt, si, ht, w, ut, b, i, s, h, o, d, ct, et, e = "sizzle" + 1 * new Date,
                c = n.document,
                v = 0,
                ki = 0,
                hi = ni(),
                ci = ni(),
                lt = ni(),
                bt = function(n, t) {
                    return n === t && (ut = !0), 0
                },
                li = -2147483648,
                di = {}.hasOwnProperty,
                g = [],
                gi = g.pop,
                nr = g.push,
                k = g.push,
                ai = g.slice,
                nt = function(n, t) {
                    for (var i = 0, r = n.length; i < r; i++)
                        if (n[i] === t) return i;
                    return -1
                },
                kt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                r = "[\\x20\\t\\r\\n\\f]",
                tt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                vi = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
                dt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + vi + ")*)|.*)\\)|)",
                tr = new RegExp(r + "+", "g"),
                at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
                ir = new RegExp("^" + r + "*," + r + "*"),
                rr = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
                ur = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
                fr = new RegExp(dt),
                yi = new RegExp("^" + tt + "$"),
                vt = {
                    ID: new RegExp("^#(" + tt + ")"),
                    CLASS: new RegExp("^\\.(" + tt + ")"),
                    TAG: new RegExp("^(" + tt + "|[*])"),
                    ATTR: new RegExp("^" + vi),
                    PSEUDO: new RegExp("^" + dt),
                    CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                    bool: new RegExp("^(?:" + kt + ")$", "i"),
                    needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
                },
                er = /^(?:input|select|textarea|button)$/i,
                or = /^h\d$/i,
                ot = /^[^{]+\{\s*\[native \w/,
                sr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                gt = /[+~]/,
                hr = /'|\\/g,
                y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
                p = function(n, t, i) {
                    var r = "0x" + t - 65536;
                    return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
                },
                pi = function() {
                    b()
                };
            try {
                k.apply(g = ai.call(c.childNodes), c.childNodes);
                g[c.childNodes.length].nodeType
            } catch (yr) {
                k = {
                    apply: g.length ? function(n, t) {
                        nr.apply(n, ai.call(t))
                    } : function(n, t) {
                        for (var i = n.length, r = 0; n[i++] = t[r++];);
                        n.length = i - 1
                    }
                }
            }
            f = u.support = {};
            oi = u.isXML = function(n) {
                var t = n && (n.ownerDocument || n).documentElement;
                return t ? t.nodeName !== "HTML" : !1
            };
            b = u.setDocument = function(n) {
                var v, u, l = n ? n.ownerDocument || n : c;
                return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l, s = i.documentElement, h = !oi(i), (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), f.attributes = a(function(n) {
                    return n.className = "i", !n.getAttribute("className")
                }), f.getElementsByTagName = a(function(n) {
                    return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
                }), f.getElementsByClassName = ot.test(i.getElementsByClassName), f.getById = a(function(n) {
                    return s.appendChild(n).id = e, !i.getElementsByName || !i.getElementsByName(e).length
                }), f.getById ? (t.find.ID = function(n, t) {
                    if (typeof t.getElementById != "undefined" && h) {
                        var i = t.getElementById(n);
                        return i ? [i] : []
                    }
                }, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        return n.getAttribute("id") === t
                    }
                }) : (delete t.find.ID, t.filter.ID = function(n) {
                    var t = n.replace(y, p);
                    return function(n) {
                        var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                        return i && i.value === t
                    }
                }), t.find.TAG = f.getElementsByTagName ? function(n, t) {
                    return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : f.qsa ? t.querySelectorAll(n) : void 0
                } : function(n, t) {
                    var i, r = [],
                        f = 0,
                        u = t.getElementsByTagName(n);
                    if (n === "*") {
                        while (i = u[f++]) i.nodeType === 1 && r.push(i);
                        return r
                    }
                    return u
                }, t.find.CLASS = f.getElementsByClassName && function(n, t) {
                    if (typeof t.getElementsByClassName != "undefined" && h) return t.getElementsByClassName(n)
                }, d = [], o = [], (f.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                    s.appendChild(n).innerHTML = "<a id='" + e + "'><\/a><select id='" + e + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                    n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                    n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + kt + ")");
                    n.querySelectorAll("[id~=" + e + "-]").length || o.push("~=");
                    n.querySelectorAll(":checked").length || o.push(":checked");
                    n.querySelectorAll("a#" + e + "+*").length || o.push(".#.+[+~]")
                }), a(function(n) {
                    var t = i.createElement("input");
                    t.setAttribute("type", "hidden");
                    n.appendChild(t).setAttribute("name", "D");
                    n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                    n.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled");
                    n.querySelectorAll("*,:x");
                    o.push(",.*:")
                })), (f.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                    f.disconnectedMatch = ct.call(n, "div");
                    ct.call(n, "[s!='']:x");
                    d.push("!=", dt)
                }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                    var r = n.nodeType === 9 ? n.documentElement : n,
                        i = t && t.parentNode;
                    return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
                } : function(n, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === n) return !0;
                    return !1
                }, bt = v ? function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                    return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, r & 1 || !f.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1
                } : function(n, t) {
                    if (n === t) return ut = !0, 0;
                    var r, u = 0,
                        o = n.parentNode,
                        s = t.parentNode,
                        f = [n],
                        e = [t];
                    if (o && s) {
                        if (o === s) return wi(n, t)
                    } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                    for (r = n; r = r.parentNode;) f.unshift(r);
                    for (r = t; r = r.parentNode;) e.unshift(r);
                    while (f[u] === e[u]) u++;
                    return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
                }, i)
            };
            u.matches = function(n, t) {
                return u(n, null, null, t)
            };
            u.matchesSelector = function(n, t) {
                if ((n.ownerDocument || n) !== i && b(n), t = t.replace(ur, "='$1']"), f.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                    var r = ct.call(n, t);
                    if (r || f.disconnectedMatch || n.document && n.document.nodeType !== 11) return r
                } catch (e) {}
                return u(t, i, null, [n]).length > 0
            };
            u.contains = function(n, t) {
                return (n.ownerDocument || n) !== i && b(n), et(n, t)
            };
            u.attr = function(n, r) {
                (n.ownerDocument || n) !== i && b(n);
                var e = t.attrHandle[r.toLowerCase()],
                    u = e && di.call(t.attrHandle, r.toLowerCase()) ? e(n, r, !h) : undefined;
                return u !== undefined ? u : f.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
            };
            u.error = function(n) {
                throw new Error("Syntax error, unrecognized expression: " + n);
            };
            u.uniqueSort = function(n) {
                var r, u = [],
                    t = 0,
                    i = 0;
                if (ut = !f.detectDuplicates, w = !f.sortStable && n.slice(0), n.sort(bt), ut) {
                    while (r = n[i++]) r === n[i] && (t = u.push(i));
                    while (t--) n.splice(u[t], 1)
                }
                return w = null, n
            };
            st = u.getText = function(n) {
                var r, i = "",
                    u = 0,
                    t = n.nodeType;
                if (t) {
                    if (t === 1 || t === 9 || t === 11) {
                        if (typeof n.textContent == "string") return n.textContent;
                        for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                    } else if (t === 3 || t === 4) return n.nodeValue
                } else
                    while (r = n[u++]) i += st(r);
                return i
            };
            t = u.selectors = {
                cacheLength: 50,
                createPseudo: l,
                match: vt,
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
                    ATTR: function(n) {
                        return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                    },
                    CHILD: function(n) {
                        return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                    },
                    PSEUDO: function(n) {
                        var i, t = !n[6] && n[2];
                        return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && fr.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(n) {
                        var t = n.replace(y, p).toLowerCase();
                        return n === "*" ? function() {
                            return !0
                        } : function(n) {
                            return n.nodeName && n.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(n) {
                        var t = hi[n + " "];
                        return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                            return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, t, i) {
                        return function(r) {
                            var f = u.attr(r, n);
                            return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(tr, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(n, t, i, r, u) {
                        var s = n.slice(0, 3) !== "nth",
                            o = n.slice(-4) !== "last",
                            f = t === "of-type";
                        return r === 1 && u === 0 ? function(n) {
                            return !!n.parentNode
                        } : function(t, i, h) {
                            var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                                d = t.parentNode,
                                nt = f && t.nodeName.toLowerCase(),
                                g = !h && !f,
                                l = !1;
                            if (d) {
                                if (s) {
                                    while (k) {
                                        for (c = t; c = c[k];)
                                            if (f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) return !1;
                                        b = k = n === "only" && !b && "nextSibling"
                                    }
                                    return !0
                                }
                                if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                    for (c = d, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                        if (c.nodeType === 1 && ++l && c === t) {
                                            w[n] = [v, a, l];
                                            break
                                        }
                                } else if (g && (c = t, y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                    while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                        if ((f ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[e] || (c[e] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                                return l -= u, l === r || l % r == 0 && l / r >= 0
                            }
                        }
                    },
                    PSEUDO: function(n, i) {
                        var f, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                        return r[e] ? r(i) : r.length > 1 ? (f = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                            for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                        }) : function(n) {
                            return r(n, 0, f)
                        }) : r
                    }
                },
                pseudos: {
                    not: l(function(n) {
                        var t = [],
                            r = [],
                            i = wt(n.replace(at, "$1"));
                        return i[e] ? l(function(n, t, r, u) {
                            for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                        }) : function(n, u, f) {
                            return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                        }
                    }),
                    has: l(function(n) {
                        return function(t) {
                            return u(n, t).length > 0
                        }
                    }),
                    contains: l(function(n) {
                        return n = n.replace(y, p),
                            function(t) {
                                return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                            }
                    }),
                    lang: l(function(n) {
                        return yi.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                            function(t) {
                                var i;
                                do
                                    if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                                while ((t = t.parentNode) && t.nodeType === 1);
                                return !1
                            }
                    }),
                    target: function(t) {
                        var i = n.location && n.location.hash;
                        return i && i.slice(1) === t.id
                    },
                    root: function(n) {
                        return n === s
                    },
                    focus: function(n) {
                        return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                    },
                    enabled: function(n) {
                        return n.disabled === !1
                    },
                    disabled: function(n) {
                        return n.disabled === !0
                    },
                    checked: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && !!n.checked || t === "option" && !!n.selected
                    },
                    selected: function(n) {
                        return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                    },
                    empty: function(n) {
                        for (n = n.firstChild; n; n = n.nextSibling)
                            if (n.nodeType < 6) return !1;
                        return !0
                    },
                    parent: function(n) {
                        return !t.pseudos.empty(n)
                    },
                    header: function(n) {
                        return or.test(n.nodeName)
                    },
                    input: function(n) {
                        return er.test(n.nodeName)
                    },
                    button: function(n) {
                        var t = n.nodeName.toLowerCase();
                        return t === "input" && n.type === "button" || t === "button"
                    },
                    text: function(n) {
                        var t;
                        return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                    },
                    first: it(function() {
                        return [0]
                    }),
                    last: it(function(n, t) {
                        return [t - 1]
                    }),
                    eq: it(function(n, t, i) {
                        return [i < 0 ? i + t : i]
                    }),
                    even: it(function(n, t) {
                        for (var i = 0; i < t; i += 2) n.push(i);
                        return n
                    }),
                    odd: it(function(n, t) {
                        for (var i = 1; i < t; i += 2) n.push(i);
                        return n
                    }),
                    lt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                        return n
                    }),
                    gt: it(function(n, t, i) {
                        for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                        return n
                    })
                }
            };
            t.pseudos.nth = t.pseudos.eq;
            for (rt in {
                    radio: !0,
                    checkbox: !0,
                    file: !0,
                    password: !0,
                    image: !0
                }) t.pseudos[rt] = cr(rt);
            for (rt in {
                    submit: !0,
                    reset: !0
                }) t.pseudos[rt] = lr(rt);
            return bi.prototype = t.filters = t.pseudos, t.setFilters = new bi, ft = u.tokenize = function(n, i) {
                var e, f, s, o, r, h, c, l = ci[n + " "];
                if (l) return i ? 0 : l.slice(0);
                for (r = n, h = [], c = t.preFilter; r;) {
                    (!e || (f = ir.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                    e = !1;
                    (f = rr.exec(r)) && (e = f.shift(), s.push({
                        value: e,
                        type: f[0].replace(at, " ")
                    }), r = r.slice(e.length));
                    for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                        value: e,
                        type: o,
                        matches: f
                    }), r = r.slice(e.length));
                    if (!e) break
                }
                return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
            }, wt = u.compile = function(n, t) {
                var r, u = [],
                    f = [],
                    i = lt[n + " "];
                if (!i) {
                    for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[e] ? u.push(i) : f.push(i);
                    i = lt(n, vr(f, u));
                    i.selector = n
                }
                return i
            }, si = u.select = function(n, i, r, u) {
                var s, e, o, a, v, l = typeof n == "function" && n,
                    c = !u && ft(n = l.selector || n);
                if (r = r || [], c.length === 1) {
                    if (e = c[0] = c[0].slice(0), e.length > 2 && (o = e[0]).type === "ID" && f.getById && i.nodeType === 9 && h && t.relative[e[1].type]) {
                        if (i = (t.find.ID(o.matches[0].replace(y, p), i) || [])[0], i) l && (i = i.parentNode);
                        else return r;
                        n = n.slice(e.shift().value.length)
                    }
                    for (s = vt.needsContext.test(n) ? 0 : e.length; s--;) {
                        if (o = e[s], t.relative[a = o.type]) break;
                        if ((v = t.find[a]) && (u = v(o.matches[0].replace(y, p), gt.test(e[0].type) && ii(i.parentNode) || i))) {
                            if (e.splice(s, 1), n = u.length && yt(e), !n) return k.apply(r, u), r;
                            break
                        }
                    }
                }
                return (l || wt(n, c))(u, i, !h, r, !i || gt.test(n) && ii(i.parentNode) || i), r
            }, f.sortStable = e.split("").sort(bt).join("") === e, f.detectDuplicates = !!ut, b(), f.sortDetached = a(function(n) {
                return n.compareDocumentPosition(i.createElement("div")) & 1
            }), a(function(n) {
                return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
            }) || ti("type|href|height|width", function(n, t, i) {
                if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
            }), f.attributes && a(function(n) {
                return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
            }) || ti("value", function(n, t, i) {
                if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
            }), a(function(n) {
                return n.getAttribute("disabled") == null
            }) || ti(kt, function(n, t, i) {
                var r;
                if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
            }), u
        }(n);
        i.find = p;
        i.expr = p.selectors;
        i.expr[":"] = i.expr.pseudos;
        i.uniqueSort = i.unique = p.uniqueSort;
        i.text = p.getText;
        i.isXMLDoc = p.isXML;
        i.contains = p.contains;
        var d = function(n, t, r) {
                for (var u = [], f = r !== undefined;
                    (n = n[t]) && n.nodeType !== 9;)
                    if (n.nodeType === 1) {
                        if (f && i(n).is(r)) break;
                        u.push(n)
                    }
                return u
            },
            tr = function(n, t) {
                for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
                return i
            },
            ir = i.expr.match.needsContext,
            rr = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
            bf = /^.[^:#\[\.,]*$/;
        i.filter = function(n, t, r) {
            var u = t[0];
            return r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1 ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
                return n.nodeType === 1
            }))
        };
        i.fn.extend({
            find: function(n) {
                var t, u = this.length,
                    r = [],
                    f = this;
                if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                    for (t = 0; t < u; t++)
                        if (i.contains(f[t], this)) return !0
                }));
                for (t = 0; t < u; t++) i.find(n, f[t], r);
                return r = this.pushStack(u > 1 ? i.unique(r) : r), r.selector = this.selector ? this.selector + " " + n : n, r
            },
            filter: function(n) {
                return this.pushStack(ri(this, n || [], !1))
            },
            not: function(n) {
                return this.pushStack(ri(this, n || [], !0))
            },
            is: function(n) {
                return !!ri(this, typeof n == "string" && ir.test(n) ? i(n) : n || [], !1).length
            }
        });
        fr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
        er = i.fn.init = function(n, t, r) {
            var f, e;
            if (!n) return this;
            if (r = r || ur, typeof n == "string") {
                if (f = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : fr.exec(n), f && (f[1] || !t)) {
                    if (f[1]) {
                        if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), rr.test(f[1]) && i.isPlainObject(t))
                            for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                        return this
                    }
                    return e = u.getElementById(f[2]), e && e.parentNode && (this.length = 1, this[0] = e), this.context = u, this.selector = n, this
                }
                return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
            }
            return n.nodeType ? (this.context = this[0] = n, this.length = 1, this) : i.isFunction(n) ? r.ready !== undefined ? r.ready(n) : n(i) : (n.selector !== undefined && (this.selector = n.selector, this.context = n.context), i.makeArray(n, this))
        };
        er.prototype = i.fn;
        ur = i(u);
        or = /^(?:parents|prev(?:Until|All))/;
        sr = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        i.fn.extend({
            has: function(n) {
                var t = i(n, this),
                    r = t.length;
                return this.filter(function() {
                    for (var n = 0; n < r; n++)
                        if (i.contains(this, t[n])) return !0
                })
            },
            closest: function(n, t) {
                for (var r, f = 0, o = this.length, u = [], e = ir.test(n) || typeof n != "string" ? i(n, t || this.context) : 0; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
                return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
            },
            index: function(n) {
                return n ? typeof n == "string" ? lt.call(i(n), this[0]) : lt.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(n, t) {
                return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
            },
            addBack: function(n) {
                return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
            }
        });
        i.each({
            parent: function(n) {
                var t = n.parentNode;
                return t && t.nodeType !== 11 ? t : null
            },
            parents: function(n) {
                return d(n, "parentNode")
            },
            parentsUntil: function(n, t, i) {
                return d(n, "parentNode", i)
            },
            next: function(n) {
                return hr(n, "nextSibling")
            },
            prev: function(n) {
                return hr(n, "previousSibling")
            },
            nextAll: function(n) {
                return d(n, "nextSibling")
            },
            prevAll: function(n) {
                return d(n, "previousSibling")
            },
            nextUntil: function(n, t, i) {
                return d(n, "nextSibling", i)
            },
            prevUntil: function(n, t, i) {
                return d(n, "previousSibling", i)
            },
            siblings: function(n) {
                return tr((n.parentNode || {}).firstChild, n)
            },
            children: function(n) {
                return tr(n.firstChild)
            },
            contents: function(n) {
                return n.contentDocument || i.merge([], n.childNodes)
            }
        }, function(n, t) {
            i.fn[n] = function(r, u) {
                var f = i.map(this, t, r);
                return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (sr[n] || i.uniqueSort(f), or.test(n) && f.reverse()), this.pushStack(f)
            }
        });
        h = /\S+/g;
        i.Callbacks = function(n) {
            n = typeof n == "string" ? kf(n) : i.extend({}, n);
            var o, r, h, f, t = [],
                e = [],
                u = -1,
                c = function() {
                    for (f = n.once, h = o = !0; e.length; u = -1)
                        for (r = e.shift(); ++u < t.length;) t[u].apply(r[0], r[1]) === !1 && n.stopOnFalse && (u = t.length, r = !1);
                    n.memory || (r = !1);
                    o = !1;
                    f && (t = r ? [] : "")
                },
                s = {
                    add: function() {
                        return t && (r && !o && (u = t.length - 1, e.push(r)), function f(r) {
                            i.each(r, function(r, u) {
                                i.isFunction(u) ? n.unique && s.has(u) || t.push(u) : u && u.length && i.type(u) !== "string" && f(u)
                            })
                        }(arguments), r && !o && c()), this
                    },
                    remove: function() {
                        return i.each(arguments, function(n, r) {
                            for (var f;
                                (f = i.inArray(r, t, f)) > -1;) t.splice(f, 1), f <= u && u--
                        }), this
                    },
                    has: function(n) {
                        return n ? i.inArray(n, t) > -1 : t.length > 0
                    },
                    empty: function() {
                        return t && (t = []), this
                    },
                    disable: function() {
                        return f = e = [], t = r = "", this
                    },
                    disabled: function() {
                        return !t
                    },
                    lock: function() {
                        return f = e = [], r || (t = r = ""), this
                    },
                    locked: function() {
                        return !!f
                    },
                    fireWith: function(n, t) {
                        return f || (t = t || [], t = [n, t.slice ? t.slice() : t], e.push(t), o || c()), this
                    },
                    fire: function() {
                        return s.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!h
                    }
                };
            return s
        };
        i.extend({
            Deferred: function(n) {
                var u = [
                        ["resolve", "done", i.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", i.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", i.Callbacks("memory")]
                    ],
                    f = "pending",
                    r = {
                        state: function() {
                            return f
                        },
                        always: function() {
                            return t.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var n = arguments;
                            return i.Deferred(function(f) {
                                i.each(u, function(u, e) {
                                    var o = i.isFunction(n[u]) && n[u];
                                    t[e[1]](function() {
                                        var n = o && o.apply(this, arguments);
                                        n && i.isFunction(n.promise) ? n.promise().progress(f.notify).done(f.resolve).fail(f.reject) : f[e[0] + "With"](this === r ? f.promise() : this, o ? [n] : arguments)
                                    })
                                });
                                n = null
                            }).promise()
                        },
                        promise: function(n) {
                            return n != null ? i.extend(n, r) : r
                        }
                    },
                    t = {};
                return r.pipe = r.then, i.each(u, function(n, i) {
                    var e = i[2],
                        o = i[3];
                    r[i[1]] = e.add;
                    o && e.add(function() {
                        f = o
                    }, u[n ^ 1][2].disable, u[2][2].lock);
                    t[i[0]] = function() {
                        return t[i[0] + "With"](this === t ? r : this, arguments), this
                    };
                    t[i[0] + "With"] = e.fireWith
                }), r.promise(t), n && n.call(t, t), t
            },
            when: function(n) {
                var t = 0,
                    u = v.call(arguments),
                    r = u.length,
                    e = r !== 1 || n && i.isFunction(n.promise) ? r : 0,
                    f = e === 1 ? n : i.Deferred(),
                    h = function(n, t, i) {
                        return function(r) {
                            t[n] = this;
                            i[n] = arguments.length > 1 ? v.call(arguments) : r;
                            i === o ? f.notifyWith(t, i) : --e || f.resolveWith(t, i)
                        }
                    },
                    o, c, s;
                if (r > 1)
                    for (o = new Array(r), c = new Array(r), s = new Array(r); t < r; t++) u[t] && i.isFunction(u[t].promise) ? u[t].promise().progress(h(t, c, o)).done(h(t, s, u)).fail(f.reject) : --e;
                return e || f.resolveWith(s, u), f.promise()
            }
        });
        i.fn.ready = function(n) {
            return i.ready.promise().done(n), this
        };
        i.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(n) {
                n ? i.readyWait++ : i.ready(!0)
            },
            ready: function(n) {
                (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || (vt.resolveWith(u, [i]), i.fn.triggerHandler && (i(u).triggerHandler("ready"), i(u).off("ready")))
            }
        });
        i.ready.promise = function(t) {
            return vt || (vt = i.Deferred(), u.readyState !== "complete" && (u.readyState === "loading" || u.documentElement.doScroll) ? (u.addEventListener("DOMContentLoaded", yt), n.addEventListener("load", yt)) : n.setTimeout(i.ready)), vt.promise(t)
        };
        i.ready.promise();
        a = function(n, t, r, u, f, e, o) {
            var s = 0,
                c = n.length,
                h = r == null;
            if (i.type(r) === "object") {
                f = !0;
                for (s in r) a(n, t, s, r[s], !0, e, o)
            } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                    return h.call(i(n), r)
                })), t))
                for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
            return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
        };
        g = function(n) {
            return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
        };
        et.uid = 1;
        et.prototype = {
            register: function(n, t) {
                var i = t || {};
                return n.nodeType ? n[this.expando] = i : Object.defineProperty(n, this.expando, {
                    value: i,
                    writable: !0,
                    configurable: !0
                }), n[this.expando]
            },
            cache: function(n) {
                if (!g(n)) return {};
                var t = n[this.expando];
                return t || (t = {}, g(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                    value: t,
                    configurable: !0
                }))), t
            },
            set: function(n, t, i) {
                var r, u = this.cache(n);
                if (typeof t == "string") u[t] = i;
                else
                    for (r in t) u[r] = t[r];
                return u
            },
            get: function(n, t) {
                return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][t]
            },
            access: function(n, t, r) {
                var u;
                return t === undefined || t && typeof t == "string" && r === undefined ? (u = this.get(n, t), u !== undefined ? u : this.get(n, i.camelCase(t))) : (this.set(n, t, r), r !== undefined ? r : t)
            },
            remove: function(n, t) {
                var f, r, e, u = n[this.expando];
                if (u !== undefined) {
                    if (t === undefined) this.register(n);
                    else
                        for (i.isArray(t) ? r = t.concat(t.map(i.camelCase)) : (e = i.camelCase(t), t in u ? r = [t, e] : (r = e, r = r in u ? [r] : r.match(h) || [])), f = r.length; f--;) delete u[r[f]];
                    (t === undefined || i.isEmptyObject(u)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
                }
            },
            hasData: function(n) {
                var t = n[this.expando];
                return t !== undefined && !i.isEmptyObject(t)
            }
        };
        var r = new et,
            e = new et,
            df = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            cr = /[A-Z]/g;
        i.extend({
            hasData: function(n) {
                return e.hasData(n) || r.hasData(n)
            },
            data: function(n, t, i) {
                return e.access(n, t, i)
            },
            removeData: function(n, t) {
                e.remove(n, t)
            },
            _data: function(n, t, i) {
                return r.access(n, t, i)
            },
            _removeData: function(n, t) {
                r.remove(n, t)
            }
        });
        i.fn.extend({
            data: function(n, t) {
                var o, f, s, u = this[0],
                    h = u && u.attributes;
                if (n === undefined) {
                    if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                        for (o = h.length; o--;) h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), lr(u, f, s[f])));
                        r.set(u, "hasDataAttrs", !0)
                    }
                    return s
                }
                return typeof n == "object" ? this.each(function() {
                    e.set(this, n)
                }) : a(this, function(t) {
                    var r, f;
                    if (u && t === undefined) return (r = e.get(u, n) || e.get(u, n.replace(cr, "-$&").toLowerCase()), r !== undefined) ? r : (f = i.camelCase(n), r = e.get(u, f), r !== undefined) ? r : (r = lr(u, f, undefined), r !== undefined) ? r : void 0;
                    f = i.camelCase(n);
                    this.each(function() {
                        var i = e.get(this, f);
                        e.set(this, f, t);
                        n.indexOf("-") > -1 && i !== undefined && e.set(this, n, t)
                    })
                }, null, t, arguments.length > 1, null, !0)
            },
            removeData: function(n) {
                return this.each(function() {
                    e.remove(this, n)
                })
            }
        });
        i.extend({
            queue: function(n, t, u) {
                var f;
                if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || i.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
            },
            dequeue: function(n, t) {
                t = t || "fx";
                var r = i.queue(n, t),
                    e = r.length,
                    u = r.shift(),
                    f = i._queueHooks(n, t),
                    o = function() {
                        i.dequeue(n, t)
                    };
                u === "inprogress" && (u = r.shift(), e--);
                u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
                !e && f && f.empty.fire()
            },
            _queueHooks: function(n, t) {
                var u = t + "queueHooks";
                return r.get(n, u) || r.access(n, u, {
                    empty: i.Callbacks("once memory").add(function() {
                        r.remove(n, [t + "queue", u])
                    })
                })
            }
        });
        i.fn.extend({
            queue: function(n, t) {
                var r = 2;
                return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                    var r = i.queue(this, n, t);
                    i._queueHooks(this, n);
                    n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
                })
            },
            dequeue: function(n) {
                return this.each(function() {
                    i.dequeue(this, n)
                })
            },
            clearQueue: function(n) {
                return this.queue(n || "fx", [])
            },
            promise: function(n, t) {
                var u, e = 1,
                    o = i.Deferred(),
                    f = this,
                    s = this.length,
                    h = function() {
                        --e || o.resolveWith(f, [f])
                    };
                for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
                return h(), o.promise(t)
            }
        });
        var ar = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ot = new RegExp("^(?:([+-])=|)(" + ar + ")([a-z%]*)$", "i"),
            w = ["Top", "Right", "Bottom", "Left"],
            st = function(n, t) {
                return n = t || n, i.css(n, "display") === "none" || !i.contains(n.ownerDocument, n)
            };
        var yr = /^(?:checkbox|radio)$/i,
            pr = /<([\w:-]+)/,
            wr = /^$|\/(?:java|ecma)script/i,
            c = {
                option: [1, "<select multiple='multiple'>", "<\/select>"],
                thead: [1, "<table>", "<\/table>"],
                col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
                tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
                td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
                _default: [0, "", ""]
            };
        c.optgroup = c.option;
        c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
        c.th = c.td;
        br = /<|&#?\w+;/,
            function() {
                var i = u.createDocumentFragment(),
                    n = i.appendChild(u.createElement("div")),
                    t = u.createElement("input");
                t.setAttribute("type", "radio");
                t.setAttribute("checked", "checked");
                t.setAttribute("name", "t");
                n.appendChild(t);
                f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
                n.innerHTML = "<textarea>x<\/textarea>";
                f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
            }();
        var gf = /^key/,
            ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
            dr = /^([^.]*)(?:\.(.+)|)/;
        i.event = {
            global: {},
            add: function(n, t, u, f, e) {
                var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
                if (a)
                    for (u.handler && (v = u, u = v.handler, e = v.selector), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                            return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                        }), t = (t || "").match(h) || [""], b = t.length; b--;)(w = dr.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                        type: o,
                        origType: d,
                        data: f,
                        handler: u,
                        guid: u.guid,
                        selector: e,
                        needsContext: e && i.expr.match.needsContext.test(e),
                        namespace: k.join(".")
                    }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
            },
            remove: function(n, t, u, f, e) {
                var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
                if (w && (v = w.events)) {
                    for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                        if (c = dr.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), !o) {
                            for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                            continue
                        }
                        for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], (e || d === s.origType) && (!u || u.guid === s.guid) && (!c || c.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                        k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                    }
                    i.isEmptyObject(v) && r.remove(n, "handle events")
                }
            },
            dispatch: function(n) {
                n = i.event.fix(n);
                var o, s, e, u, t, h = [],
                    c = v.call(arguments),
                    l = (r.get(this, "events") || {})[n.type] || [],
                    f = i.event.special[n.type] || {};
                if (c[0] = n, n.delegateTarget = this, !f.preDispatch || f.preDispatch.call(this, n) !== !1) {
                    for (h = i.event.handlers.call(this, n, l), o = 0;
                        (u = h[o++]) && !n.isPropagationStopped();)
                        for (n.currentTarget = u.elem, s = 0;
                            (t = u.handlers[s++]) && !n.isImmediatePropagationStopped();)(!n.rnamespace || n.rnamespace.test(t.namespace)) && (n.handleObj = t, n.data = t.data, e = ((i.event.special[t.origType] || {}).handle || t.handler).apply(u.elem, c), e !== undefined && (n.result = e) === !1 && (n.preventDefault(), n.stopPropagation()));
                    return f.postDispatch && f.postDispatch.call(this, n), n.result
                }
            },
            handlers: function(n, t) {
                var e, u, f, o, h = [],
                    s = t.delegateCount,
                    r = n.target;
                if (s && r.nodeType && (n.type !== "click" || isNaN(n.button) || n.button < 1))
                    for (; r !== this; r = r.parentNode || this)
                        if (r.nodeType === 1 && (r.disabled !== !0 || n.type !== "click")) {
                            for (u = [], e = 0; e < s; e++) o = t[e], f = o.selector + " ", u[f] === undefined && (u[f] = o.needsContext ? i(f, this).index(r) > -1 : i.find(f, this, null, [r]).length), u[f] && u.push(o);
                            u.length && h.push({
                                elem: r,
                                handlers: u
                            })
                        }
                return s < t.length && h.push({
                    elem: this,
                    handlers: t.slice(s)
                }), h
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(n, t) {
                    return n.which == null && (n.which = t.charCode != null ? t.charCode : t.keyCode), n
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(n, t) {
                    var e, i, r, f = t.button;
                    return n.pageX == null && t.clientX != null && (e = n.target.ownerDocument || u, i = e.documentElement, r = e.body, n.pageX = t.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0), n.pageY = t.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)), n.which || f === undefined || (n.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0), n
                }
            },
            fix: function(n) {
                if (n[i.expando]) return n;
                var f, e, o, r = n.type,
                    s = n,
                    t = this.fixHooks[r];
                for (t || (this.fixHooks[r] = t = ne.test(r) ? this.mouseHooks : gf.test(r) ? this.keyHooks : {}), o = t.props ? this.props.concat(t.props) : this.props, n = new i.Event(s), f = o.length; f--;) e = o[f], n[e] = s[e];
                return n.target || (n.target = u), n.target.nodeType === 3 && (n.target = n.target.parentNode), t.filter ? t.filter(n, s) : n
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== gr() && this.focus) return this.focus(), !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === gr() && this.blur) return this.blur(), !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if (this.type === "checkbox" && this.click && i.nodeName(this, "input")) return this.click(), !1
                    },
                    _default: function(n) {
                        return i.nodeName(n.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(n) {
                        n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                    }
                }
            }
        };
        i.removeEvent = function(n, t, i) {
            n.removeEventListener && n.removeEventListener(t, i)
        };
        i.Event = function(n, t) {
            if (!(this instanceof i.Event)) return new i.Event(n, t);
            n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? pt : nt) : this.type = n;
            t && i.extend(this, t);
            this.timeStamp = n && n.timeStamp || i.now();
            this[i.expando] = !0
        };
        i.Event.prototype = {
            constructor: i.Event,
            isDefaultPrevented: nt,
            isPropagationStopped: nt,
            isImmediatePropagationStopped: nt,
            preventDefault: function() {
                var n = this.originalEvent;
                this.isDefaultPrevented = pt;
                n && n.preventDefault()
            },
            stopPropagation: function() {
                var n = this.originalEvent;
                this.isPropagationStopped = pt;
                n && n.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var n = this.originalEvent;
                this.isImmediatePropagationStopped = pt;
                n && n.stopImmediatePropagation();
                this.stopPropagation()
            }
        };
        i.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(n, t) {
            i.event.special[n] = {
                delegateType: t,
                bindType: t,
                handle: function(n) {
                    var u, f = this,
                        r = n.relatedTarget,
                        e = n.handleObj;
                    return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
                }
            }
        });
        i.fn.extend({
            on: function(n, t, i, r) {
                return fi(this, n, t, i, r)
            },
            one: function(n, t, i, r) {
                return fi(this, n, t, i, r, 1)
            },
            off: function(n, t, r) {
                var u, f;
                if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
                if (typeof n == "object") {
                    for (f in n) this.off(f, t, n[f]);
                    return this
                }
                return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = nt), this.each(function() {
                    i.event.remove(this, n, r, t)
                })
            }
        });
        var te = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
            ie = /<script|<style|<link/i,
            re = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ue = /^true\/(.*)/,
            fe = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        i.extend({
            htmlPrefilter: function(n) {
                return n.replace(te, "<$1><\/$2>")
            },
            clone: function(n, t, r) {
                var u, c, s, e, h = n.cloneNode(!0),
                    l = i.contains(n.ownerDocument, n);
                if (!f.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                    for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) se(s[u], e[u]);
                if (t)
                    if (r)
                        for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) tu(s[u], e[u]);
                    else tu(n, h);
                return e = o(h, "script"), e.length > 0 && ui(e, !l && o(n, "script")), h
            },
            cleanData: function(n) {
                for (var u, t, f, s = i.event.special, o = 0;
                    (t = n[o]) !== undefined; o++)
                    if (g(t)) {
                        if (u = t[r.expando]) {
                            if (u.events)
                                for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                            t[r.expando] = undefined
                        }
                        t[e.expando] && (t[e.expando] = undefined)
                    }
            }
        });
        i.fn.extend({
            domManip: b,
            detach: function(n) {
                return iu(this, n, !0)
            },
            remove: function(n) {
                return iu(this, n)
            },
            text: function(n) {
                return a(this, function(n) {
                    return n === undefined ? i.text(this) : this.empty().each(function() {
                        (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                    })
                }, null, n, arguments.length)
            },
            append: function() {
                return b(this, arguments, function(n) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = nu(this, n);
                        t.appendChild(n)
                    }
                })
            },
            prepend: function() {
                return b(this, arguments, function(n) {
                    if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                        var t = nu(this, n);
                        t.insertBefore(n, t.firstChild)
                    }
                })
            },
            before: function() {
                return b(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this)
                })
            },
            after: function() {
                return b(this, arguments, function(n) {
                    this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
                })
            },
            empty: function() {
                for (var n, t = 0;
                    (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
                return this
            },
            clone: function(n, t) {
                return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                    return i.clone(this, n, t)
                })
            },
            html: function(n) {
                return a(this, function(n) {
                    var t = this[0] || {},
                        r = 0,
                        u = this.length;
                    if (n === undefined && t.nodeType === 1) return t.innerHTML;
                    if (typeof n == "string" && !ie.test(n) && !c[(pr.exec(n) || ["", ""])[1].toLowerCase()]) {
                        n = i.htmlPrefilter(n);
                        try {
                            for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                            t = 0
                        } catch (f) {}
                    }
                    t && this.empty().append(n)
                }, null, n, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return b(this, arguments, function(t) {
                    var r = this.parentNode;
                    i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
                }, n)
            }
        });
        i.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(n, t) {
            i.fn[n] = function(n) {
                for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ti.apply(f, u.get());
                return this.pushStack(f)
            }
        });
        ei = {
            HTML: "block",
            BODY: "block"
        };
        var uu = /^margin/,
            si = new RegExp("^(" + ar + ")(?!px)[a-z%]+$", "i"),
            bt = function(t) {
                var i = t.ownerDocument.defaultView;
                return i && i.opener || (i = n), i.getComputedStyle(t)
            },
            hi = function(n, t, i, r) {
                var f, u, e = {};
                for (u in t) e[u] = n.style[u], n.style[u] = t[u];
                f = i.apply(n, r || []);
                for (u in t) n.style[u] = e[u];
                return f
            },
            ht = u.documentElement;
        (function() {
            function o() {
                t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                ht.appendChild(r);
                var i = n.getComputedStyle(t);
                s = i.top !== "1%";
                c = i.marginLeft === "2px";
                e = i.width === "4px";
                t.style.marginRight = "50%";
                h = i.marginRight === "4px";
                ht.removeChild(r)
            }
            var s, e, h, c, r = u.createElement("div"),
                t = u.createElement("div");
            t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = t.style.backgroundClip === "content-box", r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(t), i.extend(f, {
                pixelPosition: function() {
                    return o(), s
                },
                boxSizingReliable: function() {
                    return e == null && o(), e
                },
                pixelMarginRight: function() {
                    return e == null && o(), h
                },
                reliableMarginLeft: function() {
                    return e == null && o(), c
                },
                reliableMarginRight: function() {
                    var f, i = t.appendChild(u.createElement("div"));
                    return i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", ht.appendChild(r), f = !parseFloat(n.getComputedStyle(i).marginRight), ht.removeChild(r), t.removeChild(i), f
                }
            }))
        })();
        var he = /^(none|table(?!-c[ea]).+)/,
            ce = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            fu = {
                letterSpacing: "0",
                fontWeight: "400"
            },
            eu = ["Webkit", "O", "Moz", "ms"],
            ou = u.createElement("div").style;
        i.extend({
            cssHooks: {
                opacity: {
                    get: function(n, t) {
                        if (t) {
                            var i = tt(n, "opacity");
                            return i === "" ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
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
                float: "cssFloat"
            },
            style: function(n, t, r, u) {
                if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                    var e, h, o, s = i.camelCase(t),
                        c = n.style;
                    if (t = i.cssProps[s] || (i.cssProps[s] = su(s) || s), o = i.cssHooks[t] || i.cssHooks[s], r !== undefined) {
                        if (h = typeof r, h === "string" && (e = ot.exec(r)) && e[1] && (r = vr(n, t, e), h = "number"), r == null || r !== r) return;
                        h === "number" && (r += e && e[3] || (i.cssNumber[s] ? "" : "px"));
                        f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (c[t] = "inherit");
                        o && "set" in o && (r = o.set(n, r, u)) === undefined || (c[t] = r)
                    } else return o && "get" in o && (e = o.get(n, !1, u)) !== undefined ? e : c[t]
                }
            },
            css: function(n, t, r, u) {
                var f, s, o, e = i.camelCase(t);
                return (t = i.cssProps[e] || (i.cssProps[e] = su(e) || e), o = i.cssHooks[t] || i.cssHooks[e], o && "get" in o && (f = o.get(n, !0, r)), f === undefined && (f = tt(n, t, u)), f === "normal" && t in fu && (f = fu[t]), r === "" || r) ? (s = parseFloat(f), r === !0 || isFinite(s) ? s || 0 : f) : f
            }
        });
        i.each(["height", "width"], function(n, t) {
            i.cssHooks[t] = {
                get: function(n, r, u) {
                    if (r) return he.test(i.css(n, "display")) && n.offsetWidth === 0 ? hi(n, ce, function() {
                        return lu(n, t, u)
                    }) : lu(n, t, u)
                },
                set: function(n, r, u) {
                    var f, e = u && bt(n),
                        o = u && cu(n, t, u, i.css(n, "boxSizing", !1, e) === "border-box", e);
                    return o && (f = ot.exec(r)) && (f[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), hu(n, r, o)
                }
            }
        });
        i.cssHooks.marginLeft = ci(f.reliableMarginLeft, function(n, t) {
            if (t) return (parseFloat(tt(n, "marginLeft")) || n.getBoundingClientRect().left - hi(n, {
                marginLeft: 0
            }, function() {
                return n.getBoundingClientRect().left
            })) + "px"
        });
        i.cssHooks.marginRight = ci(f.reliableMarginRight, function(n, t) {
            if (t) return hi(n, {
                display: "inline-block"
            }, tt, [n, "marginRight"])
        });
        i.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(n, t) {
            i.cssHooks[n + t] = {
                expand: function(i) {
                    for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + w[r] + t] = u[r] || u[r - 2] || u[0];
                    return f
                }
            };
            uu.test(n) || (i.cssHooks[n + t].set = hu)
        });
        i.fn.extend({
            css: function(n, t) {
                return a(this, function(n, t, r) {
                    var f, e, o = {},
                        u = 0;
                    if (i.isArray(t)) {
                        for (f = bt(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                        return o
                    }
                    return r !== undefined ? i.style(n, t, r) : i.css(n, t)
                }, n, t, arguments.length > 1)
            },
            show: function() {
                return au(this, !0)
            },
            hide: function() {
                return au(this)
            },
            toggle: function(n) {
                return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                    st(this) ? i(this).show() : i(this).hide()
                })
            }
        });
        i.Tween = s;
        s.prototype = {
            constructor: s,
            init: function(n, t, r, u, f, e) {
                this.elem = n;
                this.prop = r;
                this.easing = f || i.easing._default;
                this.options = t;
                this.start = this.now = this.cur();
                this.end = u;
                this.unit = e || (i.cssNumber[r] ? "" : "px")
            },
            cur: function() {
                var n = s.propHooks[this.prop];
                return n && n.get ? n.get(this) : s.propHooks._default.get(this)
            },
            run: function(n) {
                var t, r = s.propHooks[this.prop];
                return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
            }
        };
        s.prototype.init.prototype = s.prototype;
        s.propHooks = {
            _default: {
                get: function(n) {
                    var t;
                    return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
                },
                set: function(n) {
                    i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
                }
            }
        };
        s.propHooks.scrollTop = s.propHooks.scrollLeft = {
            set: function(n) {
                n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
            }
        };
        i.easing = {
            linear: function(n) {
                return n
            },
            swing: function(n) {
                return .5 - Math.cos(n * Math.PI) / 2
            },
            _default: "swing"
        };
        i.fx = s.prototype.init;
        i.fx.step = {};
        vu = /^(?:toggle|show|hide)$/;
        yu = /queueHooks$/;
        i.Animation = i.extend(l, {
            tweeners: {
                "*": [function(n, t) {
                    var i = this.createTween(n, t);
                    return vr(i.elem, n, ot.exec(t), i), i
                }]
            },
            tweener: function(n, t) {
                i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
                for (var r, u = 0, f = n.length; u < f; u++) r = n[u], l.tweeners[r] = l.tweeners[r] || [], l.tweeners[r].unshift(t)
            },
            prefilters: [le],
            prefilter: function(n, t) {
                t ? l.prefilters.unshift(n) : l.prefilters.push(n)
            }
        });
        i.speed = function(n, t, r) {
            var u = n && typeof n == "object" ? i.extend({}, n) : {
                complete: r || !r && t || i.isFunction(n) && n,
                duration: n,
                easing: r && t || t && !i.isFunction(t) && t
            };
            return u.duration = i.fx.off ? 0 : typeof u.duration == "number" ? u.duration : u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default, (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
                i.isFunction(u.old) && u.old.call(this);
                u.queue && i.dequeue(this, u.queue)
            }, u
        };
        i.fn.extend({
            fadeTo: function(n, t, i, r) {
                return this.filter(st).css("opacity", 0).show().end().animate({
                    opacity: t
                }, n, i, r)
            },
            animate: function(n, t, u, f) {
                var s = i.isEmptyObject(n),
                    o = i.speed(t, u, f),
                    e = function() {
                        var t = l(this, i.extend({}, n), o);
                        (s || r.get(this, "finish")) && t.stop(!0)
                    };
                return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
            },
            stop: function(n, t, u) {
                var f = function(n) {
                    var t = n.stop;
                    delete n.stop;
                    t(u)
                };
                return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                    var s = !0,
                        t = n != null && n + "queueHooks",
                        o = i.timers,
                        e = r.get(this);
                    if (t) e[t] && e[t].stop && f(e[t]);
                    else
                        for (t in e) e[t] && e[t].stop && yu.test(t) && f(e[t]);
                    for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                    (s || !u) && i.dequeue(this, n)
                })
            },
            finish: function(n) {
                return n !== !1 && (n = n || "fx"), this.each(function() {
                    var t, e = r.get(this),
                        u = e[n + "queue"],
                        o = e[n + "queueHooks"],
                        f = i.timers,
                        s = u ? u.length : 0;
                    for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                    for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                    delete e.finish
                })
            }
        });
        i.each(["toggle", "show", "hide"], function(n, t) {
            var r = i.fn[t];
            i.fn[t] = function(n, i, u) {
                return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(dt(t, !0), n, i, u)
            }
        });
        i.each({
            slideDown: dt("show"),
            slideUp: dt("hide"),
            slideToggle: dt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(n, t) {
            i.fn[n] = function(n, i, r) {
                return this.animate(t, n, i, r)
            }
        });
        i.timers = [];
        i.fx.tick = function() {
            var r, n = 0,
                t = i.timers;
            for (it = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
            t.length || i.fx.stop();
            it = undefined
        };
        i.fx.timer = function(n) {
            i.timers.push(n);
            n() ? i.fx.start() : i.timers.pop()
        };
        i.fx.interval = 13;
        i.fx.start = function() {
            kt || (kt = n.setInterval(i.fx.tick, i.fx.interval))
        };
        i.fx.stop = function() {
            n.clearInterval(kt);
            kt = null
        };
        i.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        };
        i.fn.delay = function(t, r) {
                return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                    var u = n.setTimeout(i, t);
                    r.stop = function() {
                        n.clearTimeout(u)
                    }
                })
            },
            function() {
                var n = u.createElement("input"),
                    t = u.createElement("select"),
                    i = t.appendChild(u.createElement("option"));
                n.type = "checkbox";
                f.checkOn = n.value !== "";
                f.optSelected = i.selected;
                t.disabled = !0;
                f.optDisabled = !i.disabled;
                n = u.createElement("input");
                n.value = "t";
                n.type = "radio";
                f.radioValue = n.value === "t"
            }();
        rt = i.expr.attrHandle;
        i.fn.extend({
            attr: function(n, t) {
                return a(this, i.attr, n, t, arguments.length > 1)
            },
            removeAttr: function(n) {
                return this.each(function() {
                    i.removeAttr(this, n)
                })
            }
        });
        i.extend({
            attr: function(n, t, r) {
                var u, f, e = n.nodeType;
                if (e !== 3 && e !== 8 && e !== 2) {
                    if (typeof n.getAttribute == "undefined") return i.prop(n, t, r);
                    if (e === 1 && i.isXMLDoc(n) || (t = t.toLowerCase(), f = i.attrHooks[t] || (i.expr.match.bool.test(t) ? bu : undefined)), r !== undefined) {
                        if (r === null) {
                            i.removeAttr(n, t);
                            return
                        }
                        return f && "set" in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""), r)
                    }
                    return f && "get" in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t), u == null ? undefined : u)
                }
            },
            attrHooks: {
                type: {
                    set: function(n, t) {
                        if (!f.radioValue && t === "radio" && i.nodeName(n, "input")) {
                            var r = n.value;
                            return n.setAttribute("type", t), r && (n.value = r), t
                        }
                    }
                }
            },
            removeAttr: function(n, t) {
                var r, u, e = 0,
                    f = t && t.match(h);
                if (f && n.nodeType === 1)
                    while (r = f[e++]) u = i.propFix[r] || r, i.expr.match.bool.test(r) && (n[u] = !1), n.removeAttribute(r)
            }
        });
        bu = {
            set: function(n, t, r) {
                return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
            }
        };
        i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
            var r = rt[t] || i.find.attr;
            rt[t] = function(n, t, i) {
                var u, f;
                return i || (f = rt[t], rt[t] = u, u = r(n, t, i) != null ? t.toLowerCase() : null, rt[t] = f), u
            }
        });
        ku = /^(?:input|select|textarea|button)$/i;
        du = /^(?:a|area)$/i;
        i.fn.extend({
            prop: function(n, t) {
                return a(this, i.prop, n, t, arguments.length > 1)
            },
            removeProp: function(n) {
                return this.each(function() {
                    delete this[i.propFix[n] || n]
                })
            }
        });
        i.extend({
            prop: function(n, t, r) {
                var f, u, e = n.nodeType;
                if (e !== 3 && e !== 8 && e !== 2) return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined) ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(n) {
                        var t = i.find.attr(n, "tabindex");
                        return t ? parseInt(t, 10) : ku.test(n.nodeName) || du.test(n.nodeName) && n.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        });
        f.optSelected || (i.propHooks.selected = {
            get: function(n) {
                var t = n.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex, null
            },
            set: function(n) {
                var t = n.parentNode;
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
            }
        });
        i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            i.propFix[this.toLowerCase()] = this
        });
        gt = /[\t\r\n\f]/g;
        i.fn.extend({
            addClass: function(n) {
                var o, r, t, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).addClass(n.call(this, t, k(this)))
                });
                if (typeof n == "string" && n)
                    for (o = n.match(h) || []; r = this[c++];)
                        if (u = k(r), t = r.nodeType === 1 && (" " + u + " ").replace(gt, " "), t) {
                            for (s = 0; f = o[s++];) t.indexOf(" " + f + " ") < 0 && (t += f + " ");
                            e = i.trim(t);
                            u !== e && r.setAttribute("class", e)
                        }
                return this
            },
            removeClass: function(n) {
                var o, r, t, u, f, s, e, c = 0;
                if (i.isFunction(n)) return this.each(function(t) {
                    i(this).removeClass(n.call(this, t, k(this)))
                });
                if (!arguments.length) return this.attr("class", "");
                if (typeof n == "string" && n)
                    for (o = n.match(h) || []; r = this[c++];)
                        if (u = k(r), t = r.nodeType === 1 && (" " + u + " ").replace(gt, " "), t) {
                            for (s = 0; f = o[s++];)
                                while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                            e = i.trim(t);
                            u !== e && r.setAttribute("class", e)
                        }
                return this
            },
            toggleClass: function(n, t) {
                var u = typeof n;
                return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                    i(this).toggleClass(n.call(this, r, k(this), t), t)
                }) : this.each(function() {
                    var t, e, f, o;
                    if (u === "string")
                        for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                    else(n === undefined || u === "boolean") && (t = k(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
                })
            },
            hasClass: function(n) {
                for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                    if (t.nodeType === 1 && (" " + k(t) + " ").replace(gt, " ").indexOf(i) > -1) return !0;
                return !1
            }
        });
        gu = /\r/g;
        nf = /[\x20\t\r\n\f]+/g;
        i.fn.extend({
            val: function(n) {
                var t, r, f, u = this[0];
                return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                    var u;
                    this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : i.isArray(u) && (u = i.map(u, function(n) {
                        return n == null ? "" : n + ""
                    })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
                })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string" ? r.replace(gu, "") : r == null ? "" : r) : void 0
            }
        });
        i.extend({
            valHooks: {
                option: {
                    get: function(n) {
                        var t = i.find.attr(n, "value");
                        return t != null ? t : i.trim(i.text(n)).replace(nf, " ")
                    }
                },
                select: {
                    get: function(n) {
                        for (var o, t, s = n.options, r = n.selectedIndex, u = n.type === "select-one" || r < 0, h = u ? null : [], c = u ? r + 1 : s.length, e = r < 0 ? c : u ? r : 0; e < c; e++)
                            if (t = s[e], (t.selected || e === r) && (f.optDisabled ? !t.disabled : t.getAttribute("disabled") === null) && (!t.parentNode.disabled || !i.nodeName(t.parentNode, "optgroup"))) {
                                if (o = i(t).val(), u) return o;
                                h.push(o)
                            }
                        return h
                    },
                    set: function(n, t) {
                        for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                        return u || (n.selectedIndex = -1), e
                    }
                }
            }
        });
        i.each(["radio", "checkbox"], function() {
            i.valHooks[this] = {
                set: function(n, t) {
                    if (i.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
                }
            };
            f.checkOn || (i.valHooks[this].get = function(n) {
                return n.getAttribute("value") === null ? "on" : n.value
            })
        });
        li = /^(?:focusinfocus|focusoutblur)$/;
        i.extend(i.event, {
            trigger: function(t, f, e, o) {
                var w, s, c, b, a, v, l, p = [e || u],
                    h = ft.call(t, "type") ? t.type : t,
                    y = ft.call(t, "namespace") ? t.namespace.split(".") : [];
                if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) && !li.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                    if (!o && !l.noBubble && !i.isWindow(e)) {
                        for (b = l.delegateType || h, li.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                        c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                    }
                    for (w = 0;
                        (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && g(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                    return t.type = h, o || t.isDefaultPrevented() || (!l._default || l._default.apply(p.pop(), f) === !1) && g(e) && a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = undefined, c && (e[a] = c)), t.result
                }
            },
            simulate: function(n, t, r) {
                var u = i.extend(new i.Event, r, {
                    type: n,
                    isSimulated: !0
                });
                i.event.trigger(u, null, t);
                u.isDefaultPrevented() && r.preventDefault()
            }
        });
        i.fn.extend({
            trigger: function(n, t) {
                return this.each(function() {
                    i.event.trigger(n, t, this)
                })
            },
            triggerHandler: function(n, t) {
                var r = this[0];
                if (r) return i.event.trigger(n, t, r, !0)
            }
        });
        i.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(n, t) {
            i.fn[t] = function(n, i) {
                return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
            }
        });
        i.fn.extend({
            hover: function(n, t) {
                return this.mouseenter(n).mouseleave(t || n)
            }
        });
        f.focusin = "onfocusin" in n;
        f.focusin || i.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, t) {
            var u = function(n) {
                i.event.simulate(t, n.target, i.event.fix(n))
            };
            i.event.special[t] = {
                setup: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t);
                    f || i.addEventListener(n, u, !0);
                    r.access(i, t, (f || 0) + 1)
                },
                teardown: function() {
                    var i = this.ownerDocument || this,
                        f = r.access(i, t) - 1;
                    f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
                }
            }
        });
        var ct = n.location,
            ai = i.now(),
            vi = /\?/;
        i.parseJSON = function(n) {
            return JSON.parse(n + "")
        };
        i.parseXML = function(t) {
            var r;
            if (!t || typeof t != "string") return null;
            try {
                r = (new n.DOMParser).parseFromString(t, "text/xml")
            } catch (u) {
                r = undefined
            }
            return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t), r
        };
        var ve = /#.*$/,
            tf = /([?&])_=[^&]*/,
            ye = /^(.*?):[ \t]*([^\r\n]*)$/mg,
            pe = /^(?:GET|HEAD)$/,
            we = /^\/\//,
            rf = {},
            yi = {},
            uf = "*/".concat("*"),
            pi = u.createElement("a");
        pi.href = ct.href;
        i.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: ct.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": uf,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": i.parseJSON,
                    "text xml": i.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(n, t) {
                return t ? wi(wi(n, i.ajaxSettings), t) : wi(i.ajaxSettings, n)
            },
            ajaxPrefilter: ff(rf),
            ajaxTransport: ff(yi),
            ajax: function(t, r) {
                function b(t, r, u, h) {
                    var v, rt, it, p, b, a = r;
                    s !== 2 && (s = 2, d && n.clearTimeout(d), l = undefined, k = h || "", e.readyState = t > 0 ? 4 : 0, v = t >= 200 && t < 300 || t === 304, u && (p = be(f, e, u)), p = ke(f, p, e, v), v ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), t === 204 || f.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state, rt = p.data, it = p.error, v = !it)) : (it = a, (t || !a) && (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", v ? nt.resolveWith(c, [rt, a, e]) : nt.rejectWith(c, [e, a, it]), e.statusCode(w), w = undefined, y && g.trigger(v ? "ajaxSuccess" : "ajaxError", [e, f, v ? rt : it]), tt.fireWith(c, [e, a]), y && (g.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
                }
                typeof t == "object" && (r = t, t = undefined);
                r = r || {};
                var l, o, k, p, d, a, y, v, f = i.ajaxSetup({}, r),
                    c = f.context || f,
                    g = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                    nt = i.Deferred(),
                    tt = i.Callbacks("once memory"),
                    w = f.statusCode || {},
                    it = {},
                    rt = {},
                    s = 0,
                    ut = "canceled",
                    e = {
                        readyState: 0,
                        getResponseHeader: function(n) {
                            var t;
                            if (s === 2) {
                                if (!p)
                                    for (p = {}; t = ye.exec(k);) p[t[1].toLowerCase()] = t[2];
                                t = p[n.toLowerCase()]
                            }
                            return t == null ? null : t
                        },
                        getAllResponseHeaders: function() {
                            return s === 2 ? k : null
                        },
                        setRequestHeader: function(n, t) {
                            var i = n.toLowerCase();
                            return s || (n = rt[i] = rt[i] || n, it[n] = t), this
                        },
                        overrideMimeType: function(n) {
                            return s || (f.mimeType = n), this
                        },
                        statusCode: function(n) {
                            var t;
                            if (n)
                                if (s < 2)
                                    for (t in n) w[t] = [w[t], n[t]];
                                else e.always(n[e.status]);
                            return this
                        },
                        abort: function(n) {
                            var t = n || ut;
                            return l && l.abort(t), b(0, t), this
                        }
                    };
                if (nt.promise(e).complete = tt.add, e.success = e.done, e.error = e.fail, f.url = ((t || f.url || ct.href) + "").replace(ve, "").replace(we, ct.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = i.trim(f.dataType || "*").toLowerCase().match(h) || [""], f.crossDomain == null) {
                    a = u.createElement("a");
                    try {
                        a.href = f.url;
                        a.href = a.href;
                        f.crossDomain = pi.protocol + "//" + pi.host != a.protocol + "//" + a.host
                    } catch (ft) {
                        f.crossDomain = !0
                    }
                }
                if (f.data && f.processData && typeof f.data != "string" && (f.data = i.param(f.data, f.traditional)), ef(rf, f, r, e), s === 2) return e;
                y = i.event && f.global;
                y && i.active++ == 0 && i.event.trigger("ajaxStart");
                f.type = f.type.toUpperCase();
                f.hasContent = !pe.test(f.type);
                o = f.url;
                f.hasContent || (f.data && (o = f.url += (vi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (f.url = tf.test(o) ? o.replace(tf, "$1_=" + ai++) : o + (vi.test(o) ? "&" : "?") + "_=" + ai++));
                f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
                (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
                e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + uf + "; q=0.01" : "") : f.accepts["*"]);
                for (v in f.headers) e.setRequestHeader(v, f.headers[v]);
                if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s === 2)) return e.abort();
                ut = "abort";
                for (v in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) e[v](f[v]);
                if (l = ef(yi, f, r, e), l) {
                    if (e.readyState = 1, y && g.trigger("ajaxSend", [e, f]), s === 2) return e;
                    f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                        e.abort("timeout")
                    }, f.timeout));
                    try {
                        s = 1;
                        l.send(it, b)
                    } catch (ft) {
                        if (s < 2) b(-1, ft);
                        else throw ft;
                    }
                } else b(-1, "No Transport");
                return e
            },
            getJSON: function(n, t, r) {
                return i.get(n, t, r, "json")
            },
            getScript: function(n, t) {
                return i.get(n, undefined, t, "script")
            }
        });
        i.each(["get", "post"], function(n, t) {
            i[t] = function(n, r, u, f) {
                return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax(i.extend({
                    url: n,
                    type: t,
                    dataType: f,
                    data: r,
                    success: u
                }, i.isPlainObject(n) && n))
            }
        });
        i._evalUrl = function(n) {
            return i.ajax({
                url: n,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                throws: !0
            })
        };
        i.fn.extend({
            wrapAll: function(n) {
                var t;
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapAll(n.call(this, t))
                }) : (this[0] && (t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                    for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                    return n
                }).append(this)), this)
            },
            wrapInner: function(n) {
                return i.isFunction(n) ? this.each(function(t) {
                    i(this).wrapInner(n.call(this, t))
                }) : this.each(function() {
                    var t = i(this),
                        r = t.contents();
                    r.length ? r.wrapAll(n) : t.append(n)
                })
            },
            wrap: function(n) {
                var t = i.isFunction(n);
                return this.each(function(r) {
                    i(this).wrapAll(t ? n.call(this, r) : n)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    i.nodeName(this, "body") || i(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        i.expr.filters.hidden = function(n) {
            return !i.expr.filters.visible(n)
        };
        i.expr.filters.visible = function(n) {
            return n.offsetWidth > 0 || n.offsetHeight > 0 || n.getClientRects().length > 0
        };
        var de = /%20/g,
            ge = /\[\]$/,
            of = /\r?\n/g,
            no = /^(?:submit|button|image|reset|file)$/i,
            to = /^(?:input|select|textarea|keygen)/i;
        return i.param = function(n, t) {
            var r, u = [],
                f = function(n, t) {
                    t = i.isFunction(t) ? t() : t == null ? "" : t;
                    u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(t)
                };
            if (t === undefined && (t = i.ajaxSettings && i.ajaxSettings.traditional), i.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
                f(this.name, this.value)
            });
            else
                for (r in n) bi(r, n[r], t, f);
            return u.join("&").replace(de, "+")
        }, i.fn.extend({
            serialize: function() {
                return i.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var n = i.prop(this, "elements");
                    return n ? i.makeArray(n) : this
                }).filter(function() {
                    var n = this.type;
                    return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !yr.test(n))
                }).map(function(n, t) {
                    var r = i(this).val();
                    return r == null ? null : i.isArray(r) ? i.map(r, function(n) {
                        return {
                            name: t.name,
                            value: n.replace(of, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: r.replace(of, "\r\n")
                    }
                }).get()
            }
        }), i.ajaxSettings.xhr = function() {
            try {
                return new n.XMLHttpRequest
            } catch (t) {}
        }, sf = {
            0: 200,
            1223: 204
        }, ut = i.ajaxSettings.xhr(), f.cors = !!ut && "withCredentials" in ut, f.ajax = ut = !!ut, i.ajaxTransport(function(t) {
            var i, r;
            if (f.cors || ut && !t.crossDomain) return {
                send: function(u, f) {
                    var o, e = t.xhr();
                    if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                        for (o in t.xhrFields) e[o] = t.xhrFields[o];
                    t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                    t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                    for (o in u) e.setRequestHeader(o, u[o]);
                    i = function(n) {
                        return function() {
                            i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(sf[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                                binary: e.response
                            } : {
                                text: e.responseText
                            }, e.getAllResponseHeaders()))
                        }
                    };
                    e.onload = i();
                    r = e.onerror = i("error");
                    e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() {
                        e.readyState === 4 && n.setTimeout(function() {
                            i && r()
                        })
                    };
                    i = i("abort");
                    try {
                        e.send(t.hasContent && t.data || null)
                    } catch (s) {
                        if (i) throw s;
                    }
                },
                abort: function() {
                    i && i()
                }
            }
        }), i.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(n) {
                    return i.globalEval(n), n
                }
            }
        }), i.ajaxPrefilter("script", function(n) {
            n.cache === undefined && (n.cache = !1);
            n.crossDomain && (n.type = "GET")
        }), i.ajaxTransport("script", function(n) {
            if (n.crossDomain) {
                var r, t;
                return {
                    send: function(f, e) {
                        r = i("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", t = function(n) {
                            r.remove();
                            t = null;
                            n && e(n.type === "error" ? 404 : 200, n.type)
                        });
                        u.head.appendChild(r[0])
                    },
                    abort: function() {
                        t && t()
                    }
                }
            }
        }), ki = [], ni = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var n = ki.pop() || i.expando + "_" + ai++;
                return this[n] = !0, n
            }
        }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
            var f, e, o, s = t.jsonp !== !1 && (ni.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ni.test(t.data) && "data");
            if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ni, "$1" + f) : t.jsonp !== !1 && (t.url += (vi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
                return o || i.error(f + " was not called"), o[0]
            }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
                o = arguments
            }, u.always(function() {
                e === undefined ? i(n).removeProp(f) : n[f] = e;
                t[f] && (t.jsonpCallback = r.jsonpCallback, ki.push(f));
                o && i.isFunction(e) && e(o[0]);
                o = e = undefined
            }), "script"
        }), i.parseHTML = function(n, t, r) {
            if (!n || typeof n != "string") return null;
            typeof t == "boolean" && (r = t, t = !1);
            t = t || u;
            var f = rr.exec(n),
                e = !r && [];
            return f ? [t.createElement(f[1])] : (f = kr([n], t, e), e && e.length && i(e).remove(), i.merge([], f.childNodes))
        }, di = i.fn.load, i.fn.load = function(n, t, r) {
            if (typeof n != "string" && di) return di.apply(this, arguments);
            var u, o, s, f = this,
                e = n.indexOf(" ");
            return e > -1 && (u = i.trim(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 && i.ajax({
                url: n,
                type: o || "GET",
                dataType: "html",
                data: t
            }).done(function(n) {
                s = arguments;
                f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
            }).always(r && function(n, t) {
                f.each(function() {
                    r.apply(this, s || [n.responseText, t, n])
                })
            }), this
        }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
            i.fn[t] = function(n) {
                return this.on(t, n)
            }
        }), i.expr.filters.animated = function(n) {
            return i.grep(i.timers, function(t) {
                return n === t.elem
            }).length
        }, i.offset = {
            setOffset: function(n, t, r) {
                var e, o, s, h, u, c, v, l = i.css(n, "position"),
                    a = i(n),
                    f = {};
                l === "static" && (n.style.position = "relative");
                u = a.offset();
                s = i.css(n, "top");
                c = i.css(n, "left");
                v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
                v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
                i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
                t.top != null && (f.top = t.top - u.top + h);
                t.left != null && (f.left = t.left - u.left + o);
                "using" in t ? t.using.call(n, f) : a.css(f)
            }
        }, i.fn.extend({
            offset: function(n) {
                if (arguments.length) return n === undefined ? this : this.each(function(t) {
                    i.offset.setOffset(this, n, t)
                });
                var t, f, r = this[0],
                    u = {
                        top: 0,
                        left: 0
                    },
                    e = r && r.ownerDocument;
                if (e) return (t = e.documentElement, !i.contains(t, r)) ? u : (u = r.getBoundingClientRect(), f = hf(e), {
                    top: u.top + f.pageYOffset - t.clientTop,
                    left: u.left + f.pageXOffset - t.clientLeft
                })
            },
            position: function() {
                if (this[0]) {
                    var n, r, u = this[0],
                        t = {
                            top: 0,
                            left: 0
                        };
                    return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (n = this.offsetParent(), r = this.offset(), i.nodeName(n[0], "html") || (t = n.offset()), t.top += i.css(n[0], "borderTopWidth", !0), t.left += i.css(n[0], "borderLeftWidth", !0)), {
                        top: r.top - t.top - i.css(u, "marginTop", !0),
                        left: r.left - t.left - i.css(u, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var n = this.offsetParent; n && i.css(n, "position") === "static";) n = n.offsetParent;
                    return n || ht
                })
            }
        }), i.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(n, t) {
            var r = "pageYOffset" === t;
            i.fn[n] = function(i) {
                return a(this, function(n, i, u) {
                    var f = hf(n);
                    if (u === undefined) return f ? f[t] : n[i];
                    f ? f.scrollTo(r ? f.pageXOffset : u, r ? u : f.pageYOffset) : n[i] = u
                }, n, i, arguments.length)
            }
        }), i.each(["top", "left"], function(n, t) {
            i.cssHooks[t] = ci(f.pixelPosition, function(n, r) {
                if (r) return r = tt(n, t), si.test(r) ? i(n).position()[t] + "px" : r
            })
        }), i.each({
            Height: "height",
            Width: "width"
        }, function(n, t) {
            i.each({
                padding: "inner" + n,
                content: t,
                "": "outer" + n
            }, function(r, u) {
                i.fn[u] = function(u, f) {
                    var e = arguments.length && (r || typeof u != "boolean"),
                        o = r || (u === !0 || f === !0 ? "margin" : "border");
                    return a(this, function(t, r, u) {
                        var f;
                        return i.isWindow(t) ? t.document.documentElement["client" + n] : t.nodeType === 9 ? (f = t.documentElement, Math.max(t.body["scroll" + n], f["scroll" + n], t.body["offset" + n], f["offset" + n], f["client" + n])) : u === undefined ? i.css(t, r, o) : i.style(t, r, u, o)
                    }, t, e ? u : undefined, e, null)
                }
            })
        }), i.fn.extend({
            bind: function(n, t, i) {
                return this.on(n, null, t, i)
            },
            unbind: function(n, t) {
                return this.off(n, null, t)
            },
            delegate: function(n, t, i, r) {
                return this.on(t, n, i, r)
            },
            undelegate: function(n, t, i) {
                return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
            },
            size: function() {
                return this.length
            }
        }), i.fn.andSelf = i.fn.addBack, typeof define == "function" && define.amd && define("jquery", [], function() {
            return i
        }), cf = n.jQuery, lf = n.$, i.noConflict = function(t) {
            return n.$ === i && (n.$ = lf), t && n.jQuery === i && (n.jQuery = cf), i
        }, t || (n.jQuery = n.$ = i), i
    }), function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : n(jQuery)
    }(function(n) {
        function o(t, i) {
            var r, u, f, e = t.nodeName.toLowerCase();
            return "area" === e ? (r = t.parentNode, u = r.name, !t.href || !u || r.nodeName.toLowerCase() !== "map") ? !1 : (f = n("img[usemap='#" + u + "']")[0], !!f && s(f)) : (/^(input|select|textarea|button|object)$/.test(e) ? !t.disabled : "a" === e ? t.href || i : i) && s(t)
        }

        function s(t) {
            return n.expr.filters.visible(t) && !n(t).parents().addBack().filter(function() {
                return n.css(this, "visibility") === "hidden"
            }).length
        }

        function tt(n) {
            for (var t, i; n.length && n[0] !== document;) {
                if (t = n.css("position"), (t === "absolute" || t === "relative" || t === "fixed") && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && i !== 0)) return i;
                n = n.parent()
            }
            return 0
        }

        function v() {
            this._curInst = null;
            this._keyEvent = !1;
            this._disabledInputs = [];
            this._datepickerShowing = !1;
            this._inDialog = !1;
            this._mainDivId = "ui-datepicker-div";
            this._inlineClass = "ui-datepicker-inline";
            this._appendClass = "ui-datepicker-append";
            this._triggerClass = "ui-datepicker-trigger";
            this._dialogClass = "ui-datepicker-dialog";
            this._disableClass = "ui-datepicker-disabled";
            this._unselectableClass = "ui-datepicker-unselectable";
            this._currentClass = "ui-datepicker-current-day";
            this._dayOverClass = "ui-datepicker-days-cell-over";
            this.regional = [];
            this.regional[""] = {
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
            };
            this._defaults = {
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
            };
            n.extend(this._defaults, this.regional[""]);
            this.regional.en = n.extend(!0, {}, this.regional[""]);
            this.regional["en-US"] = n.extend(!0, {}, this.regional.en);
            this.dpDiv = y(n("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>"))
        }

        function y(t) {
            var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
            return t.delegate(i, "mouseout", function() {
                n(this).removeClass("ui-state-hover");
                this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).removeClass("ui-datepicker-prev-hover");
                this.className.indexOf("ui-datepicker-next") !== -1 && n(this).removeClass("ui-datepicker-next-hover")
            }).delegate(i, "mouseover", p)
        }

        function p() {
            n.datepicker._isDisabledDatepicker(t.inline ? t.dpDiv.parent()[0] : t.input[0]) || (n(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), n(this).addClass("ui-state-hover"), this.className.indexOf("ui-datepicker-prev") !== -1 && n(this).addClass("ui-datepicker-prev-hover"), this.className.indexOf("ui-datepicker-next") !== -1 && n(this).addClass("ui-datepicker-next-hover"))
        }

        function u(t, i) {
            n.extend(t, i);
            for (var r in i) i[r] == null && (t[r] = i[r]);
            return t
        }

        function i(n) {
            return function() {
                var t = this.element.val();
                n.apply(this, arguments);
                this._refresh();
                t !== this.element.val() && this._trigger("change")
            }
        }
        var h, f, k, r, d, nt, t, it, rt, ut, ft;
        n.ui = n.ui || {};
        n.extend(n.ui, {
            version: "1.11.4",
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
        });
        n.fn.extend({
            scrollParent: function(t) {
                var i = this.css("position"),
                    u = i === "absolute",
                    f = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                    r = this.parents().filter(function() {
                        var t = n(this);
                        return u && t.css("position") === "static" ? !1 : f.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                    }).eq(0);
                return i === "fixed" || !r.length ? n(this[0].ownerDocument || document) : r
            },
            uniqueId: function() {
                var n = 0;
                return function() {
                    return this.each(function() {
                        this.id || (this.id = "ui-id-" + ++n)
                    })
                }
            }(),
            removeUniqueId: function() {
                return this.each(function() {
                    /^ui-id-\d+$/.test(this.id) && n(this).removeAttr("id")
                })
            }
        });
        n.extend(n.expr[":"], {
            data: n.expr.createPseudo ? n.expr.createPseudo(function(t) {
                return function(i) {
                    return !!n.data(i, t)
                }
            }) : function(t, i, r) {
                return !!n.data(t, r[3])
            },
            focusable: function(t) {
                return o(t, !isNaN(n.attr(t, "tabindex")))
            },
            tabbable: function(t) {
                var i = n.attr(t, "tabindex"),
                    r = isNaN(i);
                return (r || i >= 0) && o(t, !r)
            }
        });
        n("<a>").outerWidth(1).jquery || n.each(["Width", "Height"], function(t, i) {
            function f(t, i, r, u) {
                return n.each(e, function() {
                    i -= parseFloat(n.css(t, "padding" + this)) || 0;
                    r && (i -= parseFloat(n.css(t, "border" + this + "Width")) || 0);
                    u && (i -= parseFloat(n.css(t, "margin" + this)) || 0)
                }), i
            }
            var e = i === "Width" ? ["Left", "Right"] : ["Top", "Bottom"],
                r = i.toLowerCase(),
                u = {
                    innerWidth: n.fn.innerWidth,
                    innerHeight: n.fn.innerHeight,
                    outerWidth: n.fn.outerWidth,
                    outerHeight: n.fn.outerHeight
                };
            n.fn["inner" + i] = function(t) {
                return t === undefined ? u["inner" + i].call(this) : this.each(function() {
                    n(this).css(r, f(this, t) + "px")
                })
            };
            n.fn["outer" + i] = function(t, e) {
                return typeof t != "number" ? u["outer" + i].call(this, t) : this.each(function() {
                    n(this).css(r, f(this, t, !0, e) + "px")
                })
            }
        });
        n.fn.addBack || (n.fn.addBack = function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        });
        n("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (n.fn.removeData = function(t) {
            return function(i) {
                return arguments.length ? t.call(this, n.camelCase(i)) : t.call(this)
            }
        }(n.fn.removeData));
        n.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
        n.fn.extend({
            focus: function(t) {
                return function(i, r) {
                    return typeof i == "number" ? this.each(function() {
                        var t = this;
                        setTimeout(function() {
                            n(t).focus();
                            r && r.call(t)
                        }, i)
                    }) : t.apply(this, arguments)
                }
            }(n.fn.focus),
            disableSelection: function() {
                var n = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
                return function() {
                    return this.bind(n + ".ui-disableSelection", function(n) {
                        n.preventDefault()
                    })
                }
            }(),
            enableSelection: function() {
                return this.unbind(".ui-disableSelection")
            },
            zIndex: function(t) {
                if (t !== undefined) return this.css("zIndex", t);
                if (this.length)
                    for (var i = n(this[0]), r, u; i.length && i[0] !== document;) {
                        if (r = i.css("position"), (r === "absolute" || r === "relative" || r === "fixed") && (u = parseInt(i.css("zIndex"), 10), !isNaN(u) && u !== 0)) return u;
                        i = i.parent()
                    }
                return 0
            }
        });
        n.ui.plugin = {
            add: function(t, i, r) {
                var u, f = n.ui[t].prototype;
                for (u in r) f.plugins[u] = f.plugins[u] || [], f.plugins[u].push([i, r[u]])
            },
            call: function(n, t, i, r) {
                var u, f = n.plugins[t];
                if (f && (r || n.element[0].parentNode && n.element[0].parentNode.nodeType !== 11))
                    for (u = 0; u < f.length; u++) n.options[f[u][0]] && f[u][1].apply(n.element, i)
            }
        };
        h = 0;
        f = Array.prototype.slice;
        n.cleanData = function(t) {
            return function(i) {
                for (var r, u, f = 0;
                    (u = i[f]) != null; f++) try {
                    r = n._data(u, "events");
                    r && r.remove && n(u).triggerHandler("remove")
                } catch (e) {}
                t(i)
            }
        }(n.cleanData);
        n.widget = function(t, i, r) {
            var s, f, u, o, h = {},
                e = t.split(".")[0];
            return t = t.split(".")[1], s = e + "-" + t, r || (r = i, i = n.Widget), n.expr[":"][s.toLowerCase()] = function(t) {
                return !!n.data(t, s)
            }, n[e] = n[e] || {}, f = n[e][t], u = n[e][t] = function(n, t) {
                if (!this._createWidget) return new u(n, t);
                arguments.length && this._createWidget(n, t)
            }, n.extend(u, f, {
                version: r.version,
                _proto: n.extend({}, r),
                _childConstructors: []
            }), o = new i, o.options = n.widget.extend({}, o.options), n.each(r, function(t, r) {
                if (!n.isFunction(r)) {
                    h[t] = r;
                    return
                }
                h[t] = function() {
                    var n = function() {
                            return i.prototype[t].apply(this, arguments)
                        },
                        u = function(n) {
                            return i.prototype[t].apply(this, n)
                        };
                    return function() {
                        var i = this._super,
                            f = this._superApply,
                            t;
                        return this._super = n, this._superApply = u, t = r.apply(this, arguments), this._super = i, this._superApply = f, t
                    }
                }()
            }), u.prototype = n.widget.extend(o, {
                widgetEventPrefix: f ? o.widgetEventPrefix || t : t
            }, h, {
                constructor: u,
                namespace: e,
                widgetName: t,
                widgetFullName: s
            }), f ? (n.each(f._childConstructors, function(t, i) {
                var r = i.prototype;
                n.widget(r.namespace + "." + r.widgetName, u, i._proto)
            }), delete f._childConstructors) : i._childConstructors.push(u), n.widget.bridge(t, u), u
        };
        n.widget.extend = function(t) {
            for (var e = f.call(arguments, 1), u = 0, o = e.length, i, r; u < o; u++)
                for (i in e[u]) r = e[u][i], e[u].hasOwnProperty(i) && r !== undefined && (t[i] = n.isPlainObject(r) ? n.isPlainObject(t[i]) ? n.widget.extend({}, t[i], r) : n.widget.extend({}, r) : r);
            return t
        };
        n.widget.bridge = function(t, i) {
            var r = i.prototype.widgetFullName || t;
            n.fn[t] = function(u) {
                var s = typeof u == "string",
                    o = f.call(arguments, 1),
                    e = this;
                return s ? this.each(function() {
                    var i, f = n.data(this, r);
                    return u === "instance" ? (e = f, !1) : f ? !n.isFunction(f[u]) || u.charAt(0) === "_" ? n.error("no such method '" + u + "' for " + t + " widget instance") : (i = f[u].apply(f, o), i !== f && i !== undefined ? (e = i && i.jquery ? e.pushStack(i.get()) : i, !1) : void 0) : n.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + u + "'")
                }) : (o.length && (u = n.widget.extend.apply(null, [u].concat(o))), this.each(function() {
                    var t = n.data(this, r);
                    t ? (t.option(u || {}), t._init && t._init()) : n.data(this, r, new i(u, this))
                })), e
            }
        };
        n.Widget = function() {};
        n.Widget._childConstructors = [];
        n.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: {
                disabled: !1,
                create: null
            },
            _createWidget: function(t, i) {
                i = n(i || this.defaultElement || this)[0];
                this.element = n(i);
                this.uuid = h++;
                this.eventNamespace = "." + this.widgetName + this.uuid;
                this.bindings = n();
                this.hoverable = n();
                this.focusable = n();
                i !== this && (n.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                    remove: function(n) {
                        n.target === i && this.destroy()
                    }
                }), this.document = n(i.style ? i.ownerDocument : i.document || i), this.window = n(this.document[0].defaultView || this.document[0].parentWindow));
                this.options = n.widget.extend({}, this.options, this._getCreateOptions(), t);
                this._create();
                this._trigger("create", null, this._getCreateEventData());
                this._init()
            },
            _getCreateOptions: n.noop,
            _getCreateEventData: n.noop,
            _create: n.noop,
            _init: n.noop,
            destroy: function() {
                this._destroy();
                this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(n.camelCase(this.widgetFullName));
                this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled");
                this.bindings.unbind(this.eventNamespace);
                this.hoverable.removeClass("ui-state-hover");
                this.focusable.removeClass("ui-state-focus")
            },
            _destroy: n.noop,
            widget: function() {
                return this.element
            },
            option: function(t, i) {
                var e = t,
                    r, u, f;
                if (arguments.length === 0) return n.widget.extend({}, this.options);
                if (typeof t == "string")
                    if (e = {}, r = t.split("."), t = r.shift(), r.length) {
                        for (u = e[t] = n.widget.extend({}, this.options[t]), f = 0; f < r.length - 1; f++) u[r[f]] = u[r[f]] || {}, u = u[r[f]];
                        if (t = r.pop(), arguments.length === 1) return u[t] === undefined ? null : u[t];
                        u[t] = i
                    } else {
                        if (arguments.length === 1) return this.options[t] === undefined ? null : this.options[t];
                        e[t] = i
                    }
                return this._setOptions(e), this
            },
            _setOptions: function(n) {
                for (var t in n) this._setOption(t, n[t]);
                return this
            },
            _setOption: function(n, t) {
                return this.options[n] = t, n === "disabled" && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
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
            _on: function(t, i, r) {
                var f, u = this;
                typeof t != "boolean" && (r = i, i = t, t = !1);
                r ? (i = f = n(i), this.bindings = this.bindings.add(i)) : (r = i, i = this.element, f = this.widget());
                n.each(r, function(r, e) {
                    function o() {
                        if (t || u.options.disabled !== !0 && !n(this).hasClass("ui-state-disabled")) return (typeof e == "string" ? u[e] : e).apply(u, arguments)
                    }
                    typeof e != "string" && (o.guid = e.guid = e.guid || o.guid || n.guid++);
                    var s = r.match(/^([\w:-]*)\s*(.*)$/),
                        h = s[1] + u.eventNamespace,
                        c = s[2];
                    c ? f.delegate(c, h, o) : i.bind(h, o)
                })
            },
            _off: function(t, i) {
                i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace;
                t.unbind(i).undelegate(i);
                this.bindings = n(this.bindings.not(t).get());
                this.focusable = n(this.focusable.not(t).get());
                this.hoverable = n(this.hoverable.not(t).get())
            },
            _delay: function(n, t) {
                function r() {
                    return (typeof n == "string" ? i[n] : n).apply(i, arguments)
                }
                var i = this;
                return setTimeout(r, t || 0)
            },
            _hoverable: function(t) {
                this.hoverable = this.hoverable.add(t);
                this._on(t, {
                    mouseenter: function(t) {
                        n(t.currentTarget).addClass("ui-state-hover")
                    },
                    mouseleave: function(t) {
                        n(t.currentTarget).removeClass("ui-state-hover")
                    }
                })
            },
            _focusable: function(t) {
                this.focusable = this.focusable.add(t);
                this._on(t, {
                    focusin: function(t) {
                        n(t.currentTarget).addClass("ui-state-focus")
                    },
                    focusout: function(t) {
                        n(t.currentTarget).removeClass("ui-state-focus")
                    }
                })
            },
            _trigger: function(t, i, r) {
                var u, f, e = this.options[t];
                if (r = r || {}, i = n.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], f = i.originalEvent, f)
                    for (u in f) u in i || (i[u] = f[u]);
                return this.element.trigger(i, r), !(n.isFunction(e) && e.apply(this.element[0], [i].concat(r)) === !1 || i.isDefaultPrevented())
            }
        };
        n.each({
            show: "fadeIn",
            hide: "fadeOut"
        }, function(t, i) {
            n.Widget.prototype["_" + t] = function(r, u, f) {
                typeof u == "string" && (u = {
                    effect: u
                });
                var o, e = u ? u === !0 || typeof u == "number" ? i : u.effect || i : t;
                u = u || {};
                typeof u == "number" && (u = {
                    duration: u
                });
                o = !n.isEmptyObject(u);
                u.complete = f;
                u.delay && r.delay(u.delay);
                o && n.effects && n.effects.effect[e] ? r[t](u) : e !== t && r[e] ? r[e](u.duration, u.easing, f) : r.queue(function(i) {
                    n(this)[t]();
                    f && f.call(r[0]);
                    i()
                })
            }
        });
        k = n.widget;
        r = !1;
        n(document).mouseup(function() {
            r = !1
        });
        d = n.widget("ui.mouse", {
                version: "1.11.4",
                options: {
                    cancel: "input,textarea,button,select,option",
                    distance: 1,
                    delay: 0
                },
                _mouseInit: function() {
                    var t = this;
                    this.element.bind("mousedown." + this.widgetName, function(n) {
                        return t._mouseDown(n)
                    }).bind("click." + this.widgetName, function(i) {
                        if (!0 === n.data(i.target, t.widgetName + ".preventClickEvent")) return n.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1
                    });
                    this.started = !1
                },
                _mouseDestroy: function() {
                    this.element.unbind("." + this.widgetName);
                    this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
                },
                _mouseDown: function(t) {
                    if (!r) {
                        this._mouseMoved = !1;
                        this._mouseStarted && this._mouseUp(t);
                        this._mouseDownEvent = t;
                        var i = this,
                            u = t.which === 1,
                            f = typeof this.options.cancel == "string" && t.target.nodeName ? n(t.target).closest(this.options.cancel).length : !1;
                        return !u || f || !this._mouseCapture(t) ? !0 : (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                            i.mouseDelayMet = !0
                        }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted)) ? (t.preventDefault(), !0) : (!0 === n.data(t.target, this.widgetName + ".preventClickEvent") && n.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(n) {
                            return i._mouseMove(n)
                        }, this._mouseUpDelegate = function(n) {
                            return i._mouseUp(n)
                        }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), r = !0, !0)
                    }
                },
                _mouseMove: function(t) {
                    return this._mouseMoved && (n.ui.ie && (!document.documentMode || document.documentMode < 9) && !t.button || !t.which) ? this._mouseUp(t) : ((t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted) ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
                },
                _mouseUp: function(t) {
                    return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && n.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), r = !1, !1
                },
                _mouseDistanceMet: function(n) {
                    return Math.max(Math.abs(this._mouseDownEvent.pageX - n.pageX), Math.abs(this._mouseDownEvent.pageY - n.pageY)) >= this.options.distance
                },
                _mouseDelayMet: function() {
                    return this.mouseDelayMet
                },
                _mouseStart: function() {},
                _mouseDrag: function() {},
                _mouseStop: function() {},
                _mouseCapture: function() {
                    return !0
                }
            }),
            function() {
                function a(n, t, i) {
                    return [parseFloat(n[0]) * (l.test(n[0]) ? t / 100 : 1), parseFloat(n[1]) * (l.test(n[1]) ? i / 100 : 1)]
                }

                function r(t, i) {
                    return parseInt(n.css(t, i), 10) || 0
                }

                function y(t) {
                    var i = t[0];
                    return i.nodeType === 9 ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: 0,
                            left: 0
                        }
                    } : n.isWindow(i) ? {
                        width: t.width(),
                        height: t.height(),
                        offset: {
                            top: t.scrollTop(),
                            left: t.scrollLeft()
                        }
                    } : i.preventDefault ? {
                        width: 0,
                        height: 0,
                        offset: {
                            top: i.pageY,
                            left: i.pageX
                        }
                    } : {
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        offset: t.offset()
                    }
                }
                n.ui = n.ui || {};
                var u, f, i = Math.max,
                    t = Math.abs,
                    e = Math.round,
                    o = /left|center|right/,
                    s = /top|center|bottom/,
                    h = /[\+\-]\d+(\.[\d]+)?%?/,
                    c = /^\w+/,
                    l = /%$/,
                    v = n.fn.position;
                n.position = {
                    scrollbarWidth: function() {
                        if (u !== undefined) return u;
                        var r, i, t = n("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'><\/div><\/div>"),
                            f = t.children()[0];
                        return n("body").append(t), r = f.offsetWidth, t.css("overflow", "scroll"), i = f.offsetWidth, r === i && (i = t[0].clientWidth), t.remove(), u = r - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            r = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            u = i === "scroll" || i === "auto" && t.width < t.element[0].scrollWidth,
                            f = r === "scroll" || r === "auto" && t.height < t.element[0].scrollHeight;
                        return {
                            width: f ? n.position.scrollbarWidth() : 0,
                            height: u ? n.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var i = n(t || window),
                            r = n.isWindow(i[0]),
                            u = !!i[0] && i[0].nodeType === 9;
                        return {
                            element: i,
                            isWindow: r,
                            isDocument: u,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: r || u ? i.width() : i.outerWidth(),
                            height: r || u ? i.height() : i.outerHeight()
                        }
                    }
                };
                n.fn.position = function(u) {
                    if (!u || !u.of) return v.apply(this, arguments);
                    u = n.extend({}, u);
                    var k, l, p, b, w, g, nt = n(u.of),
                        it = n.position.getWithinInfo(u.within),
                        rt = n.position.getScrollInfo(it),
                        d = (u.collision || "flip").split(" "),
                        tt = {};
                    return g = y(nt), nt[0].preventDefault && (u.at = "left top"), l = g.width, p = g.height, b = g.offset, w = n.extend({}, b), n.each(["my", "at"], function() {
                        var n = (u[this] || "").split(" "),
                            t, i;
                        n.length === 1 && (n = o.test(n[0]) ? n.concat(["center"]) : s.test(n[0]) ? ["center"].concat(n) : ["center", "center"]);
                        n[0] = o.test(n[0]) ? n[0] : "center";
                        n[1] = s.test(n[1]) ? n[1] : "center";
                        t = h.exec(n[0]);
                        i = h.exec(n[1]);
                        tt[this] = [t ? t[0] : 0, i ? i[0] : 0];
                        u[this] = [c.exec(n[0])[0], c.exec(n[1])[0]]
                    }), d.length === 1 && (d[1] = d[0]), u.at[0] === "right" ? w.left += l : u.at[0] === "center" && (w.left += l / 2), u.at[1] === "bottom" ? w.top += p : u.at[1] === "center" && (w.top += p / 2), k = a(tt.at, l, p), w.left += k[0], w.top += k[1], this.each(function() {
                        var y, g, s = n(this),
                            h = s.outerWidth(),
                            c = s.outerHeight(),
                            ut = r(this, "marginLeft"),
                            ft = r(this, "marginTop"),
                            et = h + ut + r(this, "marginRight") + rt.width,
                            ot = c + ft + r(this, "marginBottom") + rt.height,
                            o = n.extend({}, w),
                            v = a(tt.my, s.outerWidth(), s.outerHeight());
                        u.my[0] === "right" ? o.left -= h : u.my[0] === "center" && (o.left -= h / 2);
                        u.my[1] === "bottom" ? o.top -= c : u.my[1] === "center" && (o.top -= c / 2);
                        o.left += v[0];
                        o.top += v[1];
                        f || (o.left = e(o.left), o.top = e(o.top));
                        y = {
                            marginLeft: ut,
                            marginTop: ft
                        };
                        n.each(["left", "top"], function(t, i) {
                            n.ui.position[d[t]] && n.ui.position[d[t]][i](o, {
                                targetWidth: l,
                                targetHeight: p,
                                elemWidth: h,
                                elemHeight: c,
                                collisionPosition: y,
                                collisionWidth: et,
                                collisionHeight: ot,
                                offset: [k[0] + v[0], k[1] + v[1]],
                                my: u.my,
                                at: u.at,
                                within: it,
                                elem: s
                            })
                        });
                        u.using && (g = function(n) {
                            var r = b.left - o.left,
                                a = r + l - h,
                                f = b.top - o.top,
                                v = f + p - c,
                                e = {
                                    target: {
                                        element: nt,
                                        left: b.left,
                                        top: b.top,
                                        width: l,
                                        height: p
                                    },
                                    element: {
                                        element: s,
                                        left: o.left,
                                        top: o.top,
                                        width: h,
                                        height: c
                                    },
                                    horizontal: a < 0 ? "left" : r > 0 ? "right" : "center",
                                    vertical: v < 0 ? "top" : f > 0 ? "bottom" : "middle"
                                };
                            l < h && t(r + a) < l && (e.horizontal = "center");
                            p < c && t(f + v) < p && (e.vertical = "middle");
                            e.important = i(t(r), t(a)) > i(t(f), t(v)) ? "horizontal" : "vertical";
                            u.using.call(this, n, e)
                        });
                        s.offset(n.extend(o, {
                            using: g
                        }))
                    })
                };
                n.ui.position = {
                        fit: {
                            left: function(n, t) {
                                var e = t.within,
                                    u = e.isWindow ? e.scrollLeft : e.offset.left,
                                    o = e.width,
                                    s = n.left - t.collisionPosition.marginLeft,
                                    r = u - s,
                                    f = s + t.collisionWidth - o - u,
                                    h;
                                t.collisionWidth > o ? r > 0 && f <= 0 ? (h = n.left + r + t.collisionWidth - o - u, n.left += r - h) : n.left = f > 0 && r <= 0 ? u : r > f ? u + o - t.collisionWidth : u : r > 0 ? n.left += r : f > 0 ? n.left -= f : n.left = i(n.left - s, n.left)
                            },
                            top: function(n, t) {
                                var o = t.within,
                                    u = o.isWindow ? o.scrollTop : o.offset.top,
                                    e = t.within.height,
                                    s = n.top - t.collisionPosition.marginTop,
                                    r = u - s,
                                    f = s + t.collisionHeight - e - u,
                                    h;
                                t.collisionHeight > e ? r > 0 && f <= 0 ? (h = n.top + r + t.collisionHeight - e - u, n.top += r - h) : n.top = f > 0 && r <= 0 ? u : r > f ? u + e - t.collisionHeight : u : r > 0 ? n.top += r : f > 0 ? n.top -= f : n.top = i(n.top - s, n.top)
                            }
                        },
                        flip: {
                            left: function(n, i) {
                                var r = i.within,
                                    y = r.offset.left + r.scrollLeft,
                                    c = r.width,
                                    o = r.isWindow ? r.scrollLeft : r.offset.left,
                                    l = n.left - i.collisionPosition.marginLeft,
                                    a = l - o,
                                    v = l + i.collisionWidth - c - o,
                                    u = i.my[0] === "left" ? -i.elemWidth : i.my[0] === "right" ? i.elemWidth : 0,
                                    f = i.at[0] === "left" ? i.targetWidth : i.at[0] === "right" ? -i.targetWidth : 0,
                                    e = -2 * i.offset[0],
                                    s, h;
                                a < 0 ? (s = n.left + u + f + e + i.collisionWidth - c - y, (s < 0 || s < t(a)) && (n.left += u + f + e)) : v > 0 && (h = n.left - i.collisionPosition.marginLeft + u + f + e - o, (h > 0 || t(h) < v) && (n.left += u + f + e))
                            },
                            top: function(n, i) {
                                var r = i.within,
                                    y = r.offset.top + r.scrollTop,
                                    c = r.height,
                                    o = r.isWindow ? r.scrollTop : r.offset.top,
                                    l = n.top - i.collisionPosition.marginTop,
                                    a = l - o,
                                    v = l + i.collisionHeight - c - o,
                                    p = i.my[1] === "top",
                                    u = p ? -i.elemHeight : i.my[1] === "bottom" ? i.elemHeight : 0,
                                    f = i.at[1] === "top" ? i.targetHeight : i.at[1] === "bottom" ? -i.targetHeight : 0,
                                    e = -2 * i.offset[1],
                                    s, h;
                                a < 0 ? (h = n.top + u + f + e + i.collisionHeight - c - y, (h < 0 || h < t(a)) && (n.top += u + f + e)) : v > 0 && (s = n.top - i.collisionPosition.marginTop + u + f + e - o, (s > 0 || t(s) < v) && (n.top += u + f + e))
                            }
                        },
                        flipfit: {
                            left: function() {
                                n.ui.position.flip.left.apply(this, arguments);
                                n.ui.position.fit.left.apply(this, arguments)
                            },
                            top: function() {
                                n.ui.position.flip.top.apply(this, arguments);
                                n.ui.position.fit.top.apply(this, arguments)
                            }
                        }
                    },
                    function() {
                        var t, i, r, u, e, o = document.getElementsByTagName("body")[0],
                            s = document.createElement("div");
                        t = document.createElement(o ? "div" : "body");
                        r = {
                            visibility: "hidden",
                            width: 0,
                            height: 0,
                            border: 0,
                            margin: 0,
                            background: "none"
                        };
                        o && n.extend(r, {
                            position: "absolute",
                            left: "-1000px",
                            top: "-1000px"
                        });
                        for (e in r) t.style[e] = r[e];
                        t.appendChild(s);
                        i = o || document.documentElement;
                        i.insertBefore(t, i.firstChild);
                        s.style.cssText = "position: absolute; left: 10.7432222px;";
                        u = n(s).offset().left;
                        f = u > 10 && u < 11;
                        t.innerHTML = "";
                        i.removeChild(t)
                    }()
            }();
        var et = n.ui.position,
            ot = n.widget("ui.accordion", {
                version: "1.11.4",
                options: {
                    active: 0,
                    animate: {},
                    collapsible: !1,
                    event: "click",
                    header: "> li > :first-child,> :not(li):even",
                    heightStyle: "auto",
                    icons: {
                        activeHeader: "ui-icon-triangle-1-s",
                        header: "ui-icon-triangle-1-e"
                    },
                    activate: null,
                    beforeActivate: null
                },
                hideProps: {
                    borderTopWidth: "hide",
                    borderBottomWidth: "hide",
                    paddingTop: "hide",
                    paddingBottom: "hide",
                    height: "hide"
                },
                showProps: {
                    borderTopWidth: "show",
                    borderBottomWidth: "show",
                    paddingTop: "show",
                    paddingBottom: "show",
                    height: "show"
                },
                _create: function() {
                    var t = this.options;
                    this.prevShow = this.prevHide = n();
                    this.element.addClass("ui-accordion ui-widget ui-helper-reset").attr("role", "tablist");
                    t.collapsible || t.active !== !1 && t.active != null || (t.active = 0);
                    this._processPanels();
                    t.active < 0 && (t.active += this.headers.length);
                    this._refresh()
                },
                _getCreateEventData: function() {
                    return {
                        header: this.active,
                        panel: this.active.length ? this.active.next() : n()
                    }
                },
                _createIcons: function() {
                    var t = this.options.icons;
                    t && (n("<span>").addClass("ui-accordion-header-icon ui-icon " + t.header).prependTo(this.headers), this.active.children(".ui-accordion-header-icon").removeClass(t.header).addClass(t.activeHeader), this.headers.addClass("ui-accordion-icons"))
                },
                _destroyIcons: function() {
                    this.headers.removeClass("ui-accordion-icons").children(".ui-accordion-header-icon").remove()
                },
                _destroy: function() {
                    var n;
                    this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
                    this.headers.removeClass("ui-accordion-header ui-accordion-header-active ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("aria-controls").removeAttr("tabIndex").removeUniqueId();
                    this._destroyIcons();
                    n = this.headers.next().removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-state-disabled").css("display", "").removeAttr("role").removeAttr("aria-hidden").removeAttr("aria-labelledby").removeUniqueId();
                    this.options.heightStyle !== "content" && n.css("height", "")
                },
                _setOption: function(n, t) {
                    if (n === "active") {
                        this._activate(t);
                        return
                    }
                    n === "event" && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(t));
                    this._super(n, t);
                    n !== "collapsible" || t || this.options.active !== !1 || this._activate(0);
                    n === "icons" && (this._destroyIcons(), t && this._createIcons());
                    n === "disabled" && (this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t), this.headers.add(this.headers.next()).toggleClass("ui-state-disabled", !!t))
                },
                _keydown: function(t) {
                    if (!t.altKey && !t.ctrlKey) {
                        var i = n.ui.keyCode,
                            u = this.headers.length,
                            f = this.headers.index(t.target),
                            r = !1;
                        switch (t.keyCode) {
                            case i.RIGHT:
                            case i.DOWN:
                                r = this.headers[(f + 1) % u];
                                break;
                            case i.LEFT:
                            case i.UP:
                                r = this.headers[(f - 1 + u) % u];
                                break;
                            case i.SPACE:
                            case i.ENTER:
                                this._eventHandler(t);
                                break;
                            case i.HOME:
                                r = this.headers[0];
                                break;
                            case i.END:
                                r = this.headers[u - 1]
                        }
                        r && (n(t.target).attr("tabIndex", -1), n(r).attr("tabIndex", 0), r.focus(), t.preventDefault())
                    }
                },
                _panelKeyDown: function(t) {
                    t.keyCode === n.ui.keyCode.UP && t.ctrlKey && n(t.currentTarget).prev().focus()
                },
                refresh: function() {
                    var t = this.options;
                    this._processPanels();
                    (t.active !== !1 || t.collapsible !== !0) && this.headers.length ? t.active === !1 ? this._activate(0) : this.active.length && !n.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (t.active = !1, this.active = n()) : this._activate(Math.max(0, t.active - 1)) : t.active = this.headers.index(this.active) : (t.active = !1, this.active = n());
                    this._destroyIcons();
                    this._refresh()
                },
                _processPanels: function() {
                    var t = this.headers,
                        n = this.panels;
                    this.headers = this.element.find(this.options.header).addClass("ui-accordion-header ui-state-default ui-corner-all");
                    this.panels = this.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom").filter(":not(.ui-accordion-content-active)").hide();
                    n && (this._off(t.not(this.headers)), this._off(n.not(this.panels)))
                },
                _refresh: function() {
                    var t, i = this.options,
                        r = i.heightStyle,
                        u = this.element.parent();
                    this.active = this._findActive(i.active).addClass("ui-accordion-header-active ui-state-active ui-corner-top").removeClass("ui-corner-all");
                    this.active.next().addClass("ui-accordion-content-active").show();
                    this.headers.attr("role", "tab").each(function() {
                        var t = n(this),
                            r = t.uniqueId().attr("id"),
                            i = t.next(),
                            u = i.uniqueId().attr("id");
                        t.attr("aria-controls", u);
                        i.attr("aria-labelledby", r)
                    }).next().attr("role", "tabpanel");
                    this.headers.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    }).next().attr({
                        "aria-hidden": "true"
                    }).hide();
                    this.active.length ? this.active.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }).next().attr({
                        "aria-hidden": "false"
                    }) : this.headers.eq(0).attr("tabIndex", 0);
                    this._createIcons();
                    this._setupEvents(i.event);
                    r === "fill" ? (t = u.height(), this.element.siblings(":visible").each(function() {
                        var i = n(this),
                            r = i.css("position");
                        r !== "absolute" && r !== "fixed" && (t -= i.outerHeight(!0))
                    }), this.headers.each(function() {
                        t -= n(this).outerHeight(!0)
                    }), this.headers.next().each(function() {
                        n(this).height(Math.max(0, t - n(this).innerHeight() + n(this).height()))
                    }).css("overflow", "auto")) : r === "auto" && (t = 0, this.headers.next().each(function() {
                        t = Math.max(t, n(this).css("height", "").height())
                    }).height(t))
                },
                _activate: function(t) {
                    var i = this._findActive(t)[0];
                    i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                        target: i,
                        currentTarget: i,
                        preventDefault: n.noop
                    }))
                },
                _findActive: function(t) {
                    return typeof t == "number" ? this.headers.eq(t) : n()
                },
                _setupEvents: function(t) {
                    var i = {
                        keydown: "_keydown"
                    };
                    t && n.each(t.split(" "), function(n, t) {
                        i[t] = "_eventHandler"
                    });
                    this._off(this.headers.add(this.headers.next()));
                    this._on(this.headers, i);
                    this._on(this.headers.next(), {
                        keydown: "_panelKeyDown"
                    });
                    this._hoverable(this.headers);
                    this._focusable(this.headers)
                },
                _eventHandler: function(t) {
                    var i = this.options,
                        u = this.active,
                        r = n(t.currentTarget),
                        f = r[0] === u[0],
                        e = f && i.collapsible,
                        s = e ? n() : r.next(),
                        h = u.next(),
                        o = {
                            oldHeader: u,
                            oldPanel: h,
                            newHeader: e ? n() : r,
                            newPanel: s
                        };
                    (t.preventDefault(), (!f || i.collapsible) && this._trigger("beforeActivate", t, o) !== !1) && (i.active = e ? !1 : this.headers.index(r), this.active = f ? n() : r, this._toggle(o), u.removeClass("ui-accordion-header-active ui-state-active"), i.icons && u.children(".ui-accordion-header-icon").removeClass(i.icons.activeHeader).addClass(i.icons.header), f || (r.removeClass("ui-corner-all").addClass("ui-accordion-header-active ui-state-active ui-corner-top"), i.icons && r.children(".ui-accordion-header-icon").removeClass(i.icons.header).addClass(i.icons.activeHeader), r.next().addClass("ui-accordion-content-active")))
                },
                _toggle: function(t) {
                    var r = t.newPanel,
                        i = this.prevShow.length ? this.prevShow : t.oldPanel;
                    this.prevShow.add(this.prevHide).stop(!0, !0);
                    this.prevShow = r;
                    this.prevHide = i;
                    this.options.animate ? this._animate(r, i, t) : (i.hide(), r.show(), this._toggleComplete(t));
                    i.attr({
                        "aria-hidden": "true"
                    });
                    i.prev().attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    });
                    r.length && i.length ? i.prev().attr({
                        tabIndex: -1,
                        "aria-expanded": "false"
                    }) : r.length && this.headers.filter(function() {
                        return parseInt(n(this).attr("tabIndex"), 10) === 0
                    }).attr("tabIndex", -1);
                    r.attr("aria-hidden", "false").prev().attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _animate: function(n, t, i) {
                    var h, r, u, c = this,
                        o = 0,
                        l = n.css("box-sizing"),
                        a = n.length && (!t.length || n.index() < t.index()),
                        e = this.options.animate || {},
                        f = a && e.down || e,
                        s = function() {
                            c._toggleComplete(i)
                        };
                    if (typeof f == "number" && (u = f), typeof f == "string" && (r = f), r = r || f.easing || e.easing, u = u || f.duration || e.duration, !t.length) return n.animate(this.showProps, u, r, s);
                    if (!n.length) return t.animate(this.hideProps, u, r, s);
                    h = n.show().outerHeight();
                    t.animate(this.hideProps, {
                        duration: u,
                        easing: r,
                        step: function(n, t) {
                            t.now = Math.round(n)
                        }
                    });
                    n.hide().animate(this.showProps, {
                        duration: u,
                        easing: r,
                        complete: s,
                        step: function(n, i) {
                            i.now = Math.round(n);
                            i.prop !== "height" ? l === "content-box" && (o += i.now) : c.options.heightStyle !== "content" && (i.now = Math.round(h - t.outerHeight() - o), o = 0)
                        }
                    })
                },
                _toggleComplete: function(n) {
                    var t = n.oldPanel;
                    t.removeClass("ui-accordion-content-active").prev().removeClass("ui-corner-top").addClass("ui-corner-all");
                    t.length && (t.parent()[0].className = t.parent()[0].className);
                    this._trigger("activate", null, n)
                }
            }),
            st = n.widget("ui.menu", {
                version: "1.11.4",
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
                    this.activeMenu = this.element;
                    this.mouseHandled = !1;
                    this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
                        role: this.options.role,
                        tabIndex: 0
                    });
                    this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true");
                    this._on({
                        "mousedown .ui-menu-item": function(n) {
                            n.preventDefault()
                        },
                        "click .ui-menu-item": function(t) {
                            var i = n(t.target);
                            !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(t), t.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(t) : !this.element.is(":focus") && n(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && this.active.parents(".ui-menu").length === 1 && clearTimeout(this.timer)))
                        },
                        "mouseenter .ui-menu-item": function(t) {
                            if (!this.previousFilter) {
                                var i = n(t.currentTarget);
                                i.siblings(".ui-state-active").removeClass("ui-state-active");
                                this.focus(t, i)
                            }
                        },
                        mouseleave: "collapseAll",
                        "mouseleave .ui-menu": "collapseAll",
                        focus: function(n, t) {
                            var i = this.active || this.element.find(this.options.items).eq(0);
                            t || this.focus(n, i)
                        },
                        blur: function(t) {
                            this._delay(function() {
                                n.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(t)
                            })
                        },
                        keydown: "_keydown"
                    });
                    this.refresh();
                    this._on(this.document, {
                        click: function(n) {
                            this._closeOnDocumentClick(n) && this.collapseAll(n);
                            this.mouseHandled = !1
                        }
                    })
                },
                _destroy: function() {
                    this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-menu-icons ui-front").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show();
                    this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").removeUniqueId().removeClass("ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
                        var t = n(this);
                        t.data("ui-menu-submenu-carat") && t.remove()
                    });
                    this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
                },
                _keydown: function(t) {
                    var i, u, r, f, e = !0;
                    switch (t.keyCode) {
                        case n.ui.keyCode.PAGE_UP:
                            this.previousPage(t);
                            break;
                        case n.ui.keyCode.PAGE_DOWN:
                            this.nextPage(t);
                            break;
                        case n.ui.keyCode.HOME:
                            this._move("first", "first", t);
                            break;
                        case n.ui.keyCode.END:
                            this._move("last", "last", t);
                            break;
                        case n.ui.keyCode.UP:
                            this.previous(t);
                            break;
                        case n.ui.keyCode.DOWN:
                            this.next(t);
                            break;
                        case n.ui.keyCode.LEFT:
                            this.collapse(t);
                            break;
                        case n.ui.keyCode.RIGHT:
                            this.active && !this.active.is(".ui-state-disabled") && this.expand(t);
                            break;
                        case n.ui.keyCode.ENTER:
                        case n.ui.keyCode.SPACE:
                            this._activate(t);
                            break;
                        case n.ui.keyCode.ESCAPE:
                            this.collapse(t);
                            break;
                        default:
                            e = !1;
                            u = this.previousFilter || "";
                            r = String.fromCharCode(t.keyCode);
                            f = !1;
                            clearTimeout(this.filterTimer);
                            r === u ? f = !0 : r = u + r;
                            i = this._filterMenuItems(r);
                            i = f && i.index(this.active.next()) !== -1 ? this.active.nextAll(".ui-menu-item") : i;
                            i.length || (r = String.fromCharCode(t.keyCode), i = this._filterMenuItems(r));
                            i.length ? (this.focus(t, i), this.previousFilter = r, this.filterTimer = this._delay(function() {
                                delete this.previousFilter
                            }, 1e3)) : delete this.previousFilter
                    }
                    e && t.preventDefault()
                },
                _activate: function(n) {
                    this.active.is(".ui-state-disabled") || (this.active.is("[aria-haspopup='true']") ? this.expand(n) : this.select(n))
                },
                refresh: function() {
                    var i, t, u = this,
                        f = this.options.icons.submenu,
                        r = this.element.find(this.options.menus);
                    this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length);
                    r.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-front").hide().attr({
                        role: this.options.role,
                        "aria-hidden": "true",
                        "aria-expanded": "false"
                    }).each(function() {
                        var t = n(this),
                            i = t.parent(),
                            r = n("<span>").addClass("ui-menu-icon ui-icon " + f).data("ui-menu-submenu-carat", !0);
                        i.attr("aria-haspopup", "true").prepend(r);
                        t.attr("aria-labelledby", i.attr("id"))
                    });
                    i = r.add(this.element);
                    t = i.find(this.options.items);
                    t.not(".ui-menu-item").each(function() {
                        var t = n(this);
                        u._isDivider(t) && t.addClass("ui-widget-content ui-menu-divider")
                    });
                    t.not(".ui-menu-item, .ui-menu-divider").addClass("ui-menu-item").uniqueId().attr({
                        tabIndex: -1,
                        role: this._itemRole()
                    });
                    t.filter(".ui-state-disabled").attr("aria-disabled", "true");
                    this.active && !n.contains(this.element[0], this.active[0]) && this.blur()
                },
                _itemRole: function() {
                    return {
                        menu: "menuitem",
                        listbox: "option"
                    }[this.options.role]
                },
                _setOption: function(n, t) {
                    n === "icons" && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu);
                    n === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
                    this._super(n, t)
                },
                focus: function(n, t) {
                    var i, r;
                    this.blur(n, n && n.type === "focus");
                    this._scrollIntoView(t);
                    this.active = t.first();
                    r = this.active.addClass("ui-state-focus").removeClass("ui-state-active");
                    this.options.role && this.element.attr("aria-activedescendant", r.attr("id"));
                    this.active.parent().closest(".ui-menu-item").addClass("ui-state-active");
                    n && n.type === "keydown" ? this._close() : this.timer = this._delay(function() {
                        this._close()
                    }, this.delay);
                    i = t.children(".ui-menu");
                    i.length && n && /^mouse/.test(n.type) && this._startOpening(i);
                    this.activeMenu = t.parent();
                    this._trigger("focus", n, {
                        item: t
                    })
                },
                _scrollIntoView: function(t) {
                    var e, o, i, r, u, f;
                    this._hasScroll() && (e = parseFloat(n.css(this.activeMenu[0], "borderTopWidth")) || 0, o = parseFloat(n.css(this.activeMenu[0], "paddingTop")) || 0, i = t.offset().top - this.activeMenu.offset().top - e - o, r = this.activeMenu.scrollTop(), u = this.activeMenu.height(), f = t.outerHeight(), i < 0 ? this.activeMenu.scrollTop(r + i) : i + f > u && this.activeMenu.scrollTop(r + i - u + f))
                },
                blur: function(n, t) {
                    (t || clearTimeout(this.timer), this.active) && (this.active.removeClass("ui-state-focus"), this.active = null, this._trigger("blur", n, {
                        item: this.active
                    }))
                },
                _startOpening: function(n) {
                    (clearTimeout(this.timer), n.attr("aria-hidden") === "true") && (this.timer = this._delay(function() {
                        this._close();
                        this._open(n)
                    }, this.delay))
                },
                _open: function(t) {
                    var i = n.extend({
                        of: this.active
                    }, this.options.position);
                    clearTimeout(this.timer);
                    this.element.find(".ui-menu").not(t.parents(".ui-menu")).hide().attr("aria-hidden", "true");
                    t.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
                },
                collapseAll: function(t, i) {
                    clearTimeout(this.timer);
                    this.timer = this._delay(function() {
                        var r = i ? this.element : n(t && t.target).closest(this.element.find(".ui-menu"));
                        r.length || (r = this.element);
                        this._close(r);
                        this.blur(t);
                        this.activeMenu = r
                    }, this.delay)
                },
                _close: function(n) {
                    n || (n = this.active ? this.active.parent() : this.element);
                    n.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find(".ui-state-active").not(".ui-state-focus").removeClass("ui-state-active")
                },
                _closeOnDocumentClick: function(t) {
                    return !n(t.target).closest(".ui-menu").length
                },
                _isDivider: function(n) {
                    return !/[^\-\u2014\u2013\s]/.test(n.text())
                },
                collapse: function(n) {
                    var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
                    t && t.length && (this._close(), this.focus(n, t))
                },
                expand: function(n) {
                    var t = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
                    t && t.length && (this._open(t.parent()), this._delay(function() {
                        this.focus(n, t)
                    }))
                },
                next: function(n) {
                    this._move("next", "first", n)
                },
                previous: function(n) {
                    this._move("prev", "last", n)
                },
                isFirstItem: function() {
                    return this.active && !this.active.prevAll(".ui-menu-item").length
                },
                isLastItem: function() {
                    return this.active && !this.active.nextAll(".ui-menu-item").length
                },
                _move: function(n, t, i) {
                    var r;
                    this.active && (r = n === "first" || n === "last" ? this.active[n === "first" ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[n + "All"](".ui-menu-item").eq(0));
                    r && r.length && this.active || (r = this.activeMenu.find(this.options.items)[t]());
                    this.focus(i, r)
                },
                nextPage: function(t) {
                    var i, r, u;
                    if (!this.active) {
                        this.next(t);
                        return
                    }
                    this.isLastItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
                        return i = n(this), i.offset().top - r - u < 0
                    }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))
                },
                previousPage: function(t) {
                    var i, r, u;
                    if (!this.active) {
                        this.next(t);
                        return
                    }
                    this.isFirstItem() || (this._hasScroll() ? (r = this.active.offset().top, u = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
                        return i = n(this), i.offset().top - r + u > 0
                    }), this.focus(t, i)) : this.focus(t, this.activeMenu.find(this.options.items).first()))
                },
                _hasScroll: function() {
                    return this.element.outerHeight() < this.element.prop("scrollHeight")
                },
                select: function(t) {
                    this.active = this.active || n(t.target).closest(".ui-menu-item");
                    var i = {
                        item: this.active
                    };
                    this.active.has(".ui-menu").length || this.collapseAll(t, !0);
                    this._trigger("select", t, i)
                },
                _filterMenuItems: function(t) {
                    var i = t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                        r = new RegExp("^" + i, "i");
                    return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() {
                        return r.test(n.trim(n(this).text()))
                    })
                }
            });
        n.widget("ui.autocomplete", {
            version: "1.11.4",
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
                var t, i, r, u = this.element[0].nodeName.toLowerCase(),
                    f = u === "textarea",
                    e = u === "input";
                this.isMultiLine = f ? !0 : e ? !1 : this.element.prop("isContentEditable");
                this.valueMethod = this.element[f || e ? "val" : "text"];
                this.isNewMenu = !0;
                this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off");
                this._on(this.element, {
                    keydown: function(u) {
                        if (this.element.prop("readOnly")) {
                            t = !0;
                            r = !0;
                            i = !0;
                            return
                        }
                        t = !1;
                        r = !1;
                        i = !1;
                        var f = n.ui.keyCode;
                        switch (u.keyCode) {
                            case f.PAGE_UP:
                                t = !0;
                                this._move("previousPage", u);
                                break;
                            case f.PAGE_DOWN:
                                t = !0;
                                this._move("nextPage", u);
                                break;
                            case f.UP:
                                t = !0;
                                this._keyEvent("previous", u);
                                break;
                            case f.DOWN:
                                t = !0;
                                this._keyEvent("next", u);
                                break;
                            case f.ENTER:
                                this.menu.active && (t = !0, u.preventDefault(), this.menu.select(u));
                                break;
                            case f.TAB:
                                this.menu.active && this.menu.select(u);
                                break;
                            case f.ESCAPE:
                                this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(u), u.preventDefault());
                                break;
                            default:
                                i = !0;
                                this._searchTimeout(u)
                        }
                    },
                    keypress: function(r) {
                        if (t) {
                            t = !1;
                            (!this.isMultiLine || this.menu.element.is(":visible")) && r.preventDefault();
                            return
                        }
                        if (!i) {
                            var u = n.ui.keyCode;
                            switch (r.keyCode) {
                                case u.PAGE_UP:
                                    this._move("previousPage", r);
                                    break;
                                case u.PAGE_DOWN:
                                    this._move("nextPage", r);
                                    break;
                                case u.UP:
                                    this._keyEvent("previous", r);
                                    break;
                                case u.DOWN:
                                    this._keyEvent("next", r)
                            }
                        }
                    },
                    input: function(n) {
                        if (r) {
                            r = !1;
                            n.preventDefault();
                            return
                        }
                        this._searchTimeout(n)
                    },
                    focus: function() {
                        this.selectedItem = null;
                        this.previous = this._value()
                    },
                    blur: function(n) {
                        if (this.cancelBlur) {
                            delete this.cancelBlur;
                            return
                        }
                        clearTimeout(this.searching);
                        this.close(n);
                        this._change(n)
                    }
                });
                this._initSource();
                this.menu = n("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
                    role: null
                }).hide().menu("instance");
                this._on(this.menu.element, {
                    mousedown: function(t) {
                        t.preventDefault();
                        this.cancelBlur = !0;
                        this._delay(function() {
                            delete this.cancelBlur
                        });
                        var i = this.menu.element[0];
                        n(t.target).closest(".ui-menu-item").length || this._delay(function() {
                            var t = this;
                            this.document.one("mousedown", function(r) {
                                r.target === t.element[0] || r.target === i || n.contains(i, r.target) || t.close()
                            })
                        })
                    },
                    menufocus: function(t, i) {
                        var r, u;
                        if (this.isNewMenu && (this.isNewMenu = !1, t.originalEvent && /^mouse/.test(t.originalEvent.type))) {
                            this.menu.blur();
                            this.document.one("mousemove", function() {
                                n(t.target).trigger(t.originalEvent)
                            });
                            return
                        }
                        u = i.item.data("ui-autocomplete-item");
                        !1 !== this._trigger("focus", t, {
                            item: u
                        }) && t.originalEvent && /^key/.test(t.originalEvent.type) && this._value(u.value);
                        r = i.item.attr("aria-label") || u.value;
                        r && n.trim(r).length && (this.liveRegion.children().hide(), n("<div>").text(r).appendTo(this.liveRegion))
                    },
                    menuselect: function(n, t) {
                        var i = t.item.data("ui-autocomplete-item"),
                            r = this.previous;
                        this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = r, this._delay(function() {
                            this.previous = r;
                            this.selectedItem = i
                        }));
                        !1 !== this._trigger("select", n, {
                            item: i
                        }) && this._value(i.value);
                        this.term = this._value();
                        this.close(n);
                        this.selectedItem = i
                    }
                });
                this.liveRegion = n("<span>", {
                    role: "status",
                    "aria-live": "assertive",
                    "aria-relevant": "additions"
                }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body);
                this._on(this.window, {
                    beforeunload: function() {
                        this.element.removeAttr("autocomplete")
                    }
                })
            },
            _destroy: function() {
                clearTimeout(this.searching);
                this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete");
                this.menu.element.remove();
                this.liveRegion.remove()
            },
            _setOption: function(n, t) {
                this._super(n, t);
                n === "source" && this._initSource();
                n === "appendTo" && this.menu.element.appendTo(this._appendTo());
                n === "disabled" && t && this.xhr && this.xhr.abort()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
            },
            _initSource: function() {
                var i, r, t = this;
                n.isArray(this.options.source) ? (i = this.options.source, this.source = function(t, r) {
                    r(n.ui.autocomplete.filter(i, t.term))
                }) : typeof this.options.source == "string" ? (r = this.options.source, this.source = function(i, u) {
                    t.xhr && t.xhr.abort();
                    t.xhr = n.ajax({
                        url: r,
                        data: i,
                        dataType: "json",
                        success: function(n) {
                            u(n)
                        },
                        error: function() {
                            u([])
                        }
                    })
                }) : this.source = this.options.source
            },
            _searchTimeout: function(n) {
                clearTimeout(this.searching);
                this.searching = this._delay(function() {
                    var t = this.term === this._value(),
                        i = this.menu.element.is(":visible"),
                        r = n.altKey || n.ctrlKey || n.metaKey || n.shiftKey;
                    t && (!t || i || r) || (this.selectedItem = null, this.search(null, n))
                }, this.options.delay)
            },
            search: function(n, t) {
                return (n = n != null ? n : this._value(), this.term = this._value(), n.length < this.options.minLength) ? this.close(t) : this._trigger("search", t) === !1 ? void 0 : this._search(n)
            },
            _search: function(n) {
                this.pending++;
                this.element.addClass("ui-autocomplete-loading");
                this.cancelSearch = !1;
                this.source({
                    term: n
                }, this._response())
            },
            _response: function() {
                var t = ++this.requestIndex;
                return n.proxy(function(n) {
                    t === this.requestIndex && this.__response(n);
                    this.pending--;
                    this.pending || this.element.removeClass("ui-autocomplete-loading")
                }, this)
            },
            __response: function(n) {
                n && (n = this._normalize(n));
                this._trigger("response", null, {
                    content: n
                });
                !this.options.disabled && n && n.length && !this.cancelSearch ? (this._suggest(n), this._trigger("open")) : this._close()
            },
            close: function(n) {
                this.cancelSearch = !0;
                this._close(n)
            },
            _close: function(n) {
                this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", n))
            },
            _change: function(n) {
                this.previous !== this._value() && this._trigger("change", n, {
                    item: this.selectedItem
                })
            },
            _normalize: function(t) {
                return t.length && t[0].label && t[0].value ? t : n.map(t, function(t) {
                    return typeof t == "string" ? {
                        label: t,
                        value: t
                    } : n.extend({}, t, {
                        label: t.label || t.value,
                        value: t.value || t.label
                    })
                })
            },
            _suggest: function(t) {
                var i = this.menu.element.empty();
                this._renderMenu(i, t);
                this.isNewMenu = !0;
                this.menu.refresh();
                i.show();
                this._resizeMenu();
                i.position(n.extend({
                    of: this.element
                }, this.options.position));
                this.options.autoFocus && this.menu.next()
            },
            _resizeMenu: function() {
                var n = this.menu.element;
                n.outerWidth(Math.max(n.width("").outerWidth() + 1, this.element.outerWidth()))
            },
            _renderMenu: function(t, i) {
                var r = this;
                n.each(i, function(n, i) {
                    r._renderItemData(t, i)
                })
            },
            _renderItemData: function(n, t) {
                return this._renderItem(n, t).data("ui-autocomplete-item", t)
            },
            _renderItem: function(t, i) {
                return n("<li>").text(i.label).appendTo(t)
            },
            _move: function(n, t) {
                if (!this.menu.element.is(":visible")) {
                    this.search(null, t);
                    return
                }
                if (this.menu.isFirstItem() && /^previous/.test(n) || this.menu.isLastItem() && /^next/.test(n)) {
                    this.isMultiLine || this._value(this.term);
                    this.menu.blur();
                    return
                }
                this.menu[n](t)
            },
            widget: function() {
                return this.menu.element
            },
            _value: function() {
                return this.valueMethod.apply(this.element, arguments)
            },
            _keyEvent: function(n, t) {
                (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(n, t), t.preventDefault())
            }
        });
        n.extend(n.ui.autocomplete, {
            escapeRegex: function(n) {
                return n.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
            },
            filter: function(t, i) {
                var r = new RegExp(n.ui.autocomplete.escapeRegex(i), "i");
                return n.grep(t, function(n) {
                    return r.test(n.label || n.value || n)
                })
            }
        });
        n.widget("ui.autocomplete", n.ui.autocomplete, {
            options: {
                messages: {
                    noResults: "No search results.",
                    results: function(n) {
                        return n + (n > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                    }
                }
            },
            __response: function(t) {
                var i;
                (this._superApply(arguments), this.options.disabled || this.cancelSearch) || (i = t && t.length ? this.options.messages.results(t.length) : this.options.messages.noResults, this.liveRegion.children().hide(), n("<div>").text(i).appendTo(this.liveRegion))
            }
        });
        var ht = n.ui.autocomplete,
            e, c = "ui-button ui-widget ui-state-default ui-corner-all",
            l = "ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only",
            g = function() {
                var t = n(this);
                setTimeout(function() {
                    t.find(":ui-button").button("refresh")
                }, 1)
            },
            a = function(t) {
                var i = t.name,
                    r = t.form,
                    u = n([]);
                return i && (i = i.replace(/'/g, "\\'"), u = r ? n(r).find("[name='" + i + "'][type=radio]") : n("[name='" + i + "'][type=radio]", t.ownerDocument).filter(function() {
                    return !this.form
                })), u
            };
        n.widget("ui.button", {
            version: "1.11.4",
            defaultElement: "<button>",
            options: {
                disabled: null,
                text: !0,
                label: null,
                icons: {
                    primary: null,
                    secondary: null
                }
            },
            _create: function() {
                this.element.closest("form").unbind("reset" + this.eventNamespace).bind("reset" + this.eventNamespace, g);
                typeof this.options.disabled != "boolean" ? this.options.disabled = !!this.element.prop("disabled") : this.element.prop("disabled", this.options.disabled);
                this._determineButtonType();
                this.hasTitle = !!this.buttonElement.attr("title");
                var i = this,
                    t = this.options,
                    r = this.type === "checkbox" || this.type === "radio",
                    u = r ? "" : "ui-state-active";
                t.label === null && (t.label = this.type === "input" ? this.buttonElement.val() : this.buttonElement.html());
                this._hoverable(this.buttonElement);
                this.buttonElement.addClass(c).attr("role", "button").bind("mouseenter" + this.eventNamespace, function() {
                    t.disabled || this === e && n(this).addClass("ui-state-active")
                }).bind("mouseleave" + this.eventNamespace, function() {
                    t.disabled || n(this).removeClass(u)
                }).bind("click" + this.eventNamespace, function(n) {
                    t.disabled && (n.preventDefault(), n.stopImmediatePropagation())
                });
                this._on({
                    focus: function() {
                        this.buttonElement.addClass("ui-state-focus")
                    },
                    blur: function() {
                        this.buttonElement.removeClass("ui-state-focus")
                    }
                });
                r && this.element.bind("change" + this.eventNamespace, function() {
                    i.refresh()
                });
                this.type === "checkbox" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (t.disabled) return !1
                }) : this.type === "radio" ? this.buttonElement.bind("click" + this.eventNamespace, function() {
                    if (t.disabled) return !1;
                    n(this).addClass("ui-state-active");
                    i.buttonElement.attr("aria-pressed", "true");
                    var r = i.element[0];
                    a(r).not(r).map(function() {
                        return n(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : (this.buttonElement.bind("mousedown" + this.eventNamespace, function() {
                    if (t.disabled) return !1;
                    n(this).addClass("ui-state-active");
                    e = this;
                    i.document.one("mouseup", function() {
                        e = null
                    })
                }).bind("mouseup" + this.eventNamespace, function() {
                    if (t.disabled) return !1;
                    n(this).removeClass("ui-state-active")
                }).bind("keydown" + this.eventNamespace, function(i) {
                    if (t.disabled) return !1;
                    (i.keyCode === n.ui.keyCode.SPACE || i.keyCode === n.ui.keyCode.ENTER) && n(this).addClass("ui-state-active")
                }).bind("keyup" + this.eventNamespace + " blur" + this.eventNamespace, function() {
                    n(this).removeClass("ui-state-active")
                }), this.buttonElement.is("a") && this.buttonElement.keyup(function(t) {
                    t.keyCode === n.ui.keyCode.SPACE && n(this).click()
                }));
                this._setOption("disabled", t.disabled);
                this._resetButton()
            },
            _determineButtonType: function() {
                var n, t, i;
                this.type = this.element.is("[type=checkbox]") ? "checkbox" : this.element.is("[type=radio]") ? "radio" : this.element.is("input") ? "input" : "button";
                this.type === "checkbox" || this.type === "radio" ? (n = this.element.parents().last(), t = "label[for='" + this.element.attr("id") + "']", this.buttonElement = n.find(t), this.buttonElement.length || (n = n.length ? n.siblings() : this.element.siblings(), this.buttonElement = n.filter(t), this.buttonElement.length || (this.buttonElement = n.find(t))), this.element.addClass("ui-helper-hidden-accessible"), i = this.element.is(":checked"), i && this.buttonElement.addClass("ui-state-active"), this.buttonElement.prop("aria-pressed", i)) : this.buttonElement = this.element
            },
            widget: function() {
                return this.buttonElement
            },
            _destroy: function() {
                this.element.removeClass("ui-helper-hidden-accessible");
                this.buttonElement.removeClass(c + " ui-state-active " + l).removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
                this.hasTitle || this.buttonElement.removeAttr("title")
            },
            _setOption: function(n, t) {
                if (this._super(n, t), n === "disabled") {
                    this.widget().toggleClass("ui-state-disabled", !!t);
                    this.element.prop("disabled", !!t);
                    t && (this.type === "checkbox" || this.type === "radio" ? this.buttonElement.removeClass("ui-state-focus") : this.buttonElement.removeClass("ui-state-focus ui-state-active"));
                    return
                }
                this._resetButton()
            },
            refresh: function() {
                var t = this.element.is("input, button") ? this.element.is(":disabled") : this.element.hasClass("ui-button-disabled");
                t !== this.options.disabled && this._setOption("disabled", t);
                this.type === "radio" ? a(this.element[0]).each(function() {
                    n(this).is(":checked") ? n(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : n(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                }) : this.type === "checkbox" && (this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false"))
            },
            _resetButton: function() {
                if (this.type === "input") {
                    this.options.label && this.element.val(this.options.label);
                    return
                }
                var i = this.buttonElement.removeClass(l),
                    f = n("<span><\/span>", this.document[0]).addClass("ui-button-text").html(this.options.label).appendTo(i.empty()).text(),
                    t = this.options.icons,
                    u = t.primary && t.secondary,
                    r = [];
                t.primary || t.secondary ? (this.options.text && r.push("ui-button-text-icon" + (u ? "s" : t.primary ? "-primary" : "-secondary")), t.primary && i.prepend("<span class='ui-button-icon-primary ui-icon " + t.primary + "'><\/span>"), t.secondary && i.append("<span class='ui-button-icon-secondary ui-icon " + t.secondary + "'><\/span>"), this.options.text || (r.push(u ? "ui-button-icons-only" : "ui-button-icon-only"), this.hasTitle || i.attr("title", n.trim(f)))) : r.push("ui-button-text-only");
                i.addClass(r.join(" "))
            }
        });
        n.widget("ui.buttonset", {
            version: "1.11.4",
            options: {
                items: "button, input[type=button], input[type=submit], input[type=reset], input[type=checkbox], input[type=radio], a, :data(ui-button)"
            },
            _create: function() {
                this.element.addClass("ui-buttonset")
            },
            _init: function() {
                this.refresh()
            },
            _setOption: function(n, t) {
                n === "disabled" && this.buttons.button("option", n, t);
                this._super(n, t)
            },
            refresh: function() {
                var i = this.element.css("direction") === "rtl",
                    t = this.element.find(this.options.items),
                    r = t.filter(":ui-button");
                t.not(":ui-button").button();
                r.button("refresh");
                this.buttons = t.map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(i ? "ui-corner-right" : "ui-corner-left").end().filter(":last").addClass(i ? "ui-corner-left" : "ui-corner-right").end().end()
            },
            _destroy: function() {
                this.element.removeClass("ui-buttonset");
                this.buttons.map(function() {
                    return n(this).button("widget")[0]
                }).removeClass("ui-corner-left ui-corner-right").end().button("destroy")
            }
        });
        nt = n.ui.button;
        n.extend(n.ui, {
            datepicker: {
                version: "1.11.4"
            }
        });
        n.extend(v.prototype, {
            markerClassName: "hasDatepicker",
            maxRows: 4,
            _widgetDatepicker: function() {
                return this.dpDiv
            },
            setDefaults: function(n) {
                return u(this._defaults, n || {}), this
            },
            _attachDatepicker: function(t, i) {
                var r, f, u;
                r = t.nodeName.toLowerCase();
                f = r === "div" || r === "span";
                t.id || (this.uuid += 1, t.id = "dp" + this.uuid);
                u = this._newInst(n(t), f);
                u.settings = n.extend({}, i || {});
                r === "input" ? this._connectDatepicker(t, u) : f && this._inlineDatepicker(t, u)
            },
            _newInst: function(t, i) {
                var r = t[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");
                return {
                    id: r,
                    input: t,
                    selectedDay: 0,
                    selectedMonth: 0,
                    selectedYear: 0,
                    drawMonth: 0,
                    drawYear: 0,
                    inline: i,
                    dpDiv: i ? y(n("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'><\/div>")) : this.dpDiv
                }
            },
            _connectDatepicker: function(t, i) {
                var r = n(t);
                (i.append = n([]), i.trigger = n([]), r.hasClass(this.markerClassName)) || (this._attachments(r, i), r.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp), this._autoSize(i), n.data(t, "datepicker", i), i.settings.disabled && this._disableDatepicker(t))
            },
            _attachments: function(t, i) {
                var u, r, f, e = this._get(i, "appendText"),
                    o = this._get(i, "isRTL");
                i.append && i.append.remove();
                e && (i.append = n("<span class='" + this._appendClass + "'>" + e + "<\/span>"), t[o ? "before" : "after"](i.append));
                t.unbind("focus", this._showDatepicker);
                i.trigger && i.trigger.remove();
                u = this._get(i, "showOn");
                (u === "focus" || u === "both") && t.focus(this._showDatepicker);
                (u === "button" || u === "both") && (r = this._get(i, "buttonText"), f = this._get(i, "buttonImage"), i.trigger = n(this._get(i, "buttonImageOnly") ? n("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: r,
                    title: r
                }) : n("<button type='button'><\/button>").addClass(this._triggerClass).html(f ? n("<img/>").attr({
                    src: f,
                    alt: r,
                    title: r
                }) : r)), t[o ? "before" : "after"](i.trigger), i.trigger.click(function() {
                    return n.datepicker._datepickerShowing && n.datepicker._lastInput === t[0] ? n.datepicker._hideDatepicker() : n.datepicker._datepickerShowing && n.datepicker._lastInput !== t[0] ? (n.datepicker._hideDatepicker(), n.datepicker._showDatepicker(t[0])) : n.datepicker._showDatepicker(t[0]), !1
                }))
            },
            _autoSize: function(n) {
                if (this._get(n, "autoSize") && !n.inline) {
                    var r, u, f, t, i = new Date(2009, 11, 20),
                        e = this._get(n, "dateFormat");
                    e.match(/[DM]/) && (r = function(n) {
                        for (u = 0, f = 0, t = 0; t < n.length; t++) n[t].length > u && (u = n[t].length, f = t);
                        return f
                    }, i.setMonth(r(this._get(n, e.match(/MM/) ? "monthNames" : "monthNamesShort"))), i.setDate(r(this._get(n, e.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - i.getDay()));
                    n.input.attr("size", this._formatDate(n, i).length)
                }
            },
            _inlineDatepicker: function(t, i) {
                var r = n(t);
                r.hasClass(this.markerClassName) || (r.addClass(this.markerClassName).append(i.dpDiv), n.data(t, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(t), i.dpDiv.css("display", "block"))
            },
            _dialogDatepicker: function(t, i, r, f, e) {
                var s, h, c, l, a, o = this._dialogInst;
                return o || (this.uuid += 1, s = "dp" + this.uuid, this._dialogInput = n("<input type='text' id='" + s + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.keydown(this._doKeyDown), n("body").append(this._dialogInput), o = this._dialogInst = this._newInst(this._dialogInput, !1), o.settings = {}, n.data(this._dialogInput[0], "datepicker", o)), u(o.settings, f || {}), i = i && i.constructor === Date ? this._formatDate(o, i) : i, this._dialogInput.val(i), this._pos = e ? e.length ? e : [e.pageX, e.pageY] : null, this._pos || (h = document.documentElement.clientWidth, c = document.documentElement.clientHeight, l = document.documentElement.scrollLeft || document.body.scrollLeft, a = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [h / 2 - 100 + l, c / 2 - 150 + a]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), o.settings.onSelect = r, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), n.blockUI && n.blockUI(this.dpDiv), n.data(this._dialogInput[0], "datepicker", o), this
            },
            _destroyDatepicker: function(i) {
                var r, u = n(i),
                    f = n.data(i, "datepicker");
                u.hasClass(this.markerClassName) && (r = i.nodeName.toLowerCase(), n.removeData(i, "datepicker"), r === "input" ? (f.append.remove(), f.trigger.remove(), u.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)) : (r === "div" || r === "span") && u.removeClass(this.markerClassName).empty(), t === f && (t = null))
            },
            _enableDatepicker: function(t) {
                var i, r, u = n(t),
                    f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !1, f.trigger.filter("button").each(function() {
                    this.disabled = !1
                }).end().filter("img").css({
                    opacity: "1.0",
                    cursor: ""
                })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().removeClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }))
            },
            _disableDatepicker: function(t) {
                var i, r, u = n(t),
                    f = n.data(t, "datepicker");
                u.hasClass(this.markerClassName) && (i = t.nodeName.toLowerCase(), i === "input" ? (t.disabled = !0, f.trigger.filter("button").each(function() {
                    this.disabled = !0
                }).end().filter("img").css({
                    opacity: "0.5",
                    cursor: "default"
                })) : (i === "div" || i === "span") && (r = u.children("." + this._inlineClass), r.children().addClass("ui-state-disabled"), r.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = n.map(this._disabledInputs, function(n) {
                    return n === t ? null : n
                }), this._disabledInputs[this._disabledInputs.length] = t)
            },
            _isDisabledDatepicker: function(n) {
                if (!n) return !1;
                for (var t = 0; t < this._disabledInputs.length; t++)
                    if (this._disabledInputs[t] === n) return !0;
                return !1
            },
            _getInst: function(t) {
                try {
                    return n.data(t, "datepicker")
                } catch (i) {
                    throw "Missing instance data for this datepicker";
                }
            },
            _optionDatepicker: function(t, i, r) {
                var e, h, o, s, f = this._getInst(t);
                if (arguments.length === 2 && typeof i == "string") return i === "defaults" ? n.extend({}, n.datepicker._defaults) : f ? i === "all" ? n.extend({}, f.settings) : this._get(f, i) : null;
                e = i || {};
                typeof i == "string" && (e = {}, e[i] = r);
                f && (this._curInst === f && this._hideDatepicker(), h = this._getDateDatepicker(t, !0), o = this._getMinMaxDate(f, "min"), s = this._getMinMaxDate(f, "max"), u(f.settings, e), o !== null && e.dateFormat !== undefined && e.minDate === undefined && (f.settings.minDate = this._formatDate(f, o)), s !== null && e.dateFormat !== undefined && e.maxDate === undefined && (f.settings.maxDate = this._formatDate(f, s)), "disabled" in e && (e.disabled ? this._disableDatepicker(t) : this._enableDatepicker(t)), this._attachments(n(t), f), this._autoSize(f), this._setDate(f, h), this._updateAlternate(f), this._updateDatepicker(f))
            },
            _changeDatepicker: function(n, t, i) {
                this._optionDatepicker(n, t, i)
            },
            _refreshDatepicker: function(n) {
                var t = this._getInst(n);
                t && this._updateDatepicker(t)
            },
            _setDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                i && (this._setDate(i, t), this._updateDatepicker(i), this._updateAlternate(i))
            },
            _getDateDatepicker: function(n, t) {
                var i = this._getInst(n);
                return i && !i.inline && this._setDateFromField(i, t), i ? this._getDate(i) : null
            },
            _doKeyDown: function(t) {
                var u, e, f, i = n.datepicker._getInst(t.target),
                    r = !0,
                    o = i.dpDiv.is(".ui-datepicker-rtl");
                if (i._keyEvent = !0, n.datepicker._datepickerShowing) switch (t.keyCode) {
                    case 9:
                        n.datepicker._hideDatepicker();
                        r = !1;
                        break;
                    case 13:
                        return f = n("td." + n.datepicker._dayOverClass + ":not(." + n.datepicker._currentClass + ")", i.dpDiv), f[0] && n.datepicker._selectDay(t.target, i.selectedMonth, i.selectedYear, f[0]), u = n.datepicker._get(i, "onSelect"), u ? (e = n.datepicker._formatDate(i), u.apply(i.input ? i.input[0] : null, [e, i])) : n.datepicker._hideDatepicker(), !1;
                    case 27:
                        n.datepicker._hideDatepicker();
                        break;
                    case 33:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 34:
                        n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 35:
                        (t.ctrlKey || t.metaKey) && n.datepicker._clearDate(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 36:
                        (t.ctrlKey || t.metaKey) && n.datepicker._gotoToday(t.target);
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 37:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? 1 : -1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? -n.datepicker._get(i, "stepBigMonths") : -n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 38:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, -7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    case 39:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, o ? -1 : 1, "D");
                        r = t.ctrlKey || t.metaKey;
                        t.originalEvent.altKey && n.datepicker._adjustDate(t.target, t.ctrlKey ? +n.datepicker._get(i, "stepBigMonths") : +n.datepicker._get(i, "stepMonths"), "M");
                        break;
                    case 40:
                        (t.ctrlKey || t.metaKey) && n.datepicker._adjustDate(t.target, 7, "D");
                        r = t.ctrlKey || t.metaKey;
                        break;
                    default:
                        r = !1
                } else t.keyCode === 36 && t.ctrlKey ? n.datepicker._showDatepicker(this) : r = !1;
                r && (t.preventDefault(), t.stopPropagation())
            },
            _doKeyPress: function(t) {
                var i, r, u = n.datepicker._getInst(t.target);
                if (n.datepicker._get(u, "constrainInput")) return i = n.datepicker._possibleChars(n.datepicker._get(u, "dateFormat")), r = String.fromCharCode(t.charCode == null ? t.keyCode : t.charCode), t.ctrlKey || t.metaKey || r < " " || !i || i.indexOf(r) > -1
            },
            _doKeyUp: function(t) {
                var r, i = n.datepicker._getInst(t.target);
                if (i.input.val() !== i.lastVal) try {
                    r = n.datepicker.parseDate(n.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, n.datepicker._getFormatConfig(i));
                    r && (n.datepicker._setDateFromField(i), n.datepicker._updateAlternate(i), n.datepicker._updateDatepicker(i))
                } catch (u) {}
                return !0
            },
            _showDatepicker: function(t) {
                if (t = t.target || t, t.nodeName.toLowerCase() !== "input" && (t = n("input", t.parentNode)[0]), !n.datepicker._isDisabledDatepicker(t) && n.datepicker._lastInput !== t) {
                    var i, o, s, r, f, e, h;
                    (i = n.datepicker._getInst(t), n.datepicker._curInst && n.datepicker._curInst !== i && (n.datepicker._curInst.dpDiv.stop(!0, !0), i && n.datepicker._datepickerShowing && n.datepicker._hideDatepicker(n.datepicker._curInst.input[0])), o = n.datepicker._get(i, "beforeShow"), s = o ? o.apply(t, [t, i]) : {}, s !== !1) && (u(i.settings, s), i.lastVal = null, n.datepicker._lastInput = t, n.datepicker._setDateFromField(i), n.datepicker._inDialog && (t.value = ""), n.datepicker._pos || (n.datepicker._pos = n.datepicker._findPos(t), n.datepicker._pos[1] += t.offsetHeight), r = !1, n(t).parents().each(function() {
                        return r |= n(this).css("position") === "fixed", !r
                    }), f = {
                        left: n.datepicker._pos[0],
                        top: n.datepicker._pos[1]
                    }, n.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                        position: "absolute",
                        display: "block",
                        top: "-1000px"
                    }), n.datepicker._updateDatepicker(i), f = n.datepicker._checkOffset(i, f, r), i.dpDiv.css({
                        position: n.datepicker._inDialog && n.blockUI ? "static" : r ? "fixed" : "absolute",
                        display: "none",
                        left: f.left + "px",
                        top: f.top + "px"
                    }), i.inline || (e = n.datepicker._get(i, "showAnim"), h = n.datepicker._get(i, "duration"), i.dpDiv.css("z-index", tt(n(t)) + 1), n.datepicker._datepickerShowing = !0, n.effects && n.effects.effect[e] ? i.dpDiv.show(e, n.datepicker._get(i, "showOptions"), h) : i.dpDiv[e || "show"](e ? h : null), n.datepicker._shouldFocusInput(i) && i.input.focus(), n.datepicker._curInst = i))
                }
            },
            _updateDatepicker: function(i) {
                this.maxRows = 4;
                t = i;
                i.dpDiv.empty().append(this._generateHTML(i));
                this._attachHandlers(i);
                var r, u = this._getNumberOfMonths(i),
                    f = u[1],
                    e = i.dpDiv.find("." + this._dayOverClass + " a");
                e.length > 0 && p.apply(e.get(0));
                i.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
                f > 1 && i.dpDiv.addClass("ui-datepicker-multi-" + f).css("width", 17 * f + "em");
                i.dpDiv[(u[0] !== 1 || u[1] !== 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
                i.dpDiv[(this._get(i, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
                i === n.datepicker._curInst && n.datepicker._datepickerShowing && n.datepicker._shouldFocusInput(i) && i.input.focus();
                i.yearshtml && (r = i.yearshtml, setTimeout(function() {
                    r === i.yearshtml && i.yearshtml && i.dpDiv.find("select.ui-datepicker-year:first").replaceWith(i.yearshtml);
                    r = i.yearshtml = null
                }, 0))
            },
            _shouldFocusInput: function(n) {
                return n.input && n.input.is(":visible") && !n.input.is(":disabled") && !n.input.is(":focus")
            },
            _checkOffset: function(t, i, r) {
                var u = t.dpDiv.outerWidth(),
                    f = t.dpDiv.outerHeight(),
                    h = t.input ? t.input.outerWidth() : 0,
                    o = t.input ? t.input.outerHeight() : 0,
                    e = document.documentElement.clientWidth + (r ? 0 : n(document).scrollLeft()),
                    s = document.documentElement.clientHeight + (r ? 0 : n(document).scrollTop());
                return i.left -= this._get(t, "isRTL") ? u - h : 0, i.left -= r && i.left === t.input.offset().left ? n(document).scrollLeft() : 0, i.top -= r && i.top === t.input.offset().top + o ? n(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + u > e && e > u ? Math.abs(i.left + u - e) : 0), i.top -= Math.min(i.top, i.top + f > s && s > f ? Math.abs(f + o) : 0), i
            },
            _findPos: function(t) {
                for (var i, r = this._getInst(t), u = this._get(r, "isRTL"); t && (t.type === "hidden" || t.nodeType !== 1 || n.expr.filters.hidden(t));) t = t[u ? "previousSibling" : "nextSibling"];
                return i = n(t).offset(), [i.left, i.top]
            },
            _hideDatepicker: function(t) {
                var r, f, u, e, i = this._curInst;
                i && (!t || i === n.data(t, "datepicker")) && this._datepickerShowing && (r = this._get(i, "showAnim"), f = this._get(i, "duration"), u = function() {
                    n.datepicker._tidyDialog(i)
                }, n.effects && (n.effects.effect[r] || n.effects[r]) ? i.dpDiv.hide(r, n.datepicker._get(i, "showOptions"), f, u) : i.dpDiv[r === "slideDown" ? "slideUp" : r === "fadeIn" ? "fadeOut" : "hide"](r ? f : null, u), r || u(), this._datepickerShowing = !1, e = this._get(i, "onClose"), e && e.apply(i.input ? i.input[0] : null, [i.input ? i.input.val() : "", i]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                    position: "absolute",
                    left: "0",
                    top: "-100px"
                }), n.blockUI && (n.unblockUI(), n("body").append(this.dpDiv))), this._inDialog = !1)
            },
            _tidyDialog: function(n) {
                n.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
            },
            _checkExternalClick: function(t) {
                if (n.datepicker._curInst) {
                    var i = n(t.target),
                        r = n.datepicker._getInst(i[0]);
                    (i[0].id === n.datepicker._mainDivId || i.parents("#" + n.datepicker._mainDivId).length !== 0 || i.hasClass(n.datepicker.markerClassName) || i.closest("." + n.datepicker._triggerClass).length || !n.datepicker._datepickerShowing || n.datepicker._inDialog && n.blockUI) && (!i.hasClass(n.datepicker.markerClassName) || n.datepicker._curInst === r) || n.datepicker._hideDatepicker()
                }
            },
            _adjustDate: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                this._isDisabledDatepicker(f[0]) || (this._adjustInstDate(u, i + (r === "M" ? this._get(u, "showCurrentAtPos") : 0), r), this._updateDatepicker(u))
            },
            _gotoToday: function(t) {
                var r, u = n(t),
                    i = this._getInst(u[0]);
                this._get(i, "gotoCurrent") && i.currentDay ? (i.selectedDay = i.currentDay, i.drawMonth = i.selectedMonth = i.currentMonth, i.drawYear = i.selectedYear = i.currentYear) : (r = new Date, i.selectedDay = r.getDate(), i.drawMonth = i.selectedMonth = r.getMonth(), i.drawYear = i.selectedYear = r.getFullYear());
                this._notifyChange(i);
                this._adjustDate(u)
            },
            _selectMonthYear: function(t, i, r) {
                var f = n(t),
                    u = this._getInst(f[0]);
                u["selected" + (r === "M" ? "Month" : "Year")] = u["draw" + (r === "M" ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10);
                this._notifyChange(u);
                this._adjustDate(f)
            },
            _selectDay: function(t, i, r, u) {
                var f, e = n(t);
                n(u).hasClass(this._unselectableClass) || this._isDisabledDatepicker(e[0]) || (f = this._getInst(e[0]), f.selectedDay = f.currentDay = n("a", u).html(), f.selectedMonth = f.currentMonth = i, f.selectedYear = f.currentYear = r, this._selectDate(t, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear)))
            },
            _clearDate: function(t) {
                var i = n(t);
                this._selectDate(i, "")
            },
            _selectDate: function(t, i) {
                var u, f = n(t),
                    r = this._getInst(f[0]);
                i = i != null ? i : this._formatDate(r);
                r.input && r.input.val(i);
                this._updateAlternate(r);
                u = this._get(r, "onSelect");
                u ? u.apply(r.input ? r.input[0] : null, [i, r]) : r.input && r.input.trigger("change");
                r.inline ? this._updateDatepicker(r) : (this._hideDatepicker(), this._lastInput = r.input[0], typeof r.input[0] != "object" && r.input.focus(), this._lastInput = null)
            },
            _updateAlternate: function(t) {
                var i, r, u, f = this._get(t, "altField");
                f && (i = this._get(t, "altFormat") || this._get(t, "dateFormat"), r = this._getDate(t), u = this.formatDate(i, r, this._getFormatConfig(t)), n(f).each(function() {
                    n(this).val(u)
                }))
            },
            noWeekends: function(n) {
                var t = n.getDay();
                return [t > 0 && t < 6, ""]
            },
            iso8601Week: function(n) {
                var i, t = new Date(n.getTime());
                return t.setDate(t.getDate() + 4 - (t.getDay() || 7)), i = t.getTime(), t.setMonth(0), t.setDate(1), Math.floor(Math.round((i - t) / 864e5) / 7) + 1
            },
            parseDate: function(t, i, r) {
                if (t == null || i == null) throw "Invalid arguments";
                if (i = typeof i == "object" ? i.toString() : i + "", i === "") return null;
                for (var a, v, f = 0, y = (r ? r.shortYearCutoff : null) || this._defaults.shortYearCutoff, d = typeof y != "string" ? y : (new Date).getFullYear() % 100 + parseInt(y, 10), g = (r ? r.dayNamesShort : null) || this._defaults.dayNamesShort, nt = (r ? r.dayNames : null) || this._defaults.dayNames, tt = (r ? r.monthNamesShort : null) || this._defaults.monthNamesShort, it = (r ? r.monthNames : null) || this._defaults.monthNames, e = -1, s = -1, h = -1, p = -1, w = !1, u, l = function(n) {
                        var i = o + 1 < t.length && t.charAt(o + 1) === n;
                        return i && o++, i
                    }, c = function(n) {
                        var u = l(n),
                            r = n === "@" ? 14 : n === "!" ? 20 : n === "y" && u ? 4 : n === "o" ? 3 : 2,
                            e = n === "y" ? r : 1,
                            o = new RegExp("^\\d{" + e + "," + r + "}"),
                            t = i.substring(f).match(o);
                        if (!t) throw "Missing number at position " + f;
                        return f += t[0].length, parseInt(t[0], 10)
                    }, k = function(t, r, u) {
                        var e = -1,
                            o = n.map(l(t) ? u : r, function(n, t) {
                                return [
                                    [t, n]
                                ]
                            }).sort(function(n, t) {
                                return -(n[1].length - t[1].length)
                            });
                        if (n.each(o, function(n, t) {
                                var r = t[1];
                                if (i.substr(f, r.length).toLowerCase() === r.toLowerCase()) return e = t[0], f += r.length, !1
                            }), e !== -1) return e + 1;
                        throw "Unknown name at position " + f;
                    }, b = function() {
                        if (i.charAt(f) !== t.charAt(o)) throw "Unexpected literal at position " + f;
                        f++
                    }, o = 0; o < t.length; o++)
                    if (w) t.charAt(o) !== "'" || l("'") ? b() : w = !1;
                    else switch (t.charAt(o)) {
                        case "d":
                            h = c("d");
                            break;
                        case "D":
                            k("D", g, nt);
                            break;
                        case "o":
                            p = c("o");
                            break;
                        case "m":
                            s = c("m");
                            break;
                        case "M":
                            s = k("M", tt, it);
                            break;
                        case "y":
                            e = c("y");
                            break;
                        case "@":
                            u = new Date(c("@"));
                            e = u.getFullYear();
                            s = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "!":
                            u = new Date((c("!") - this._ticksTo1970) / 1e4);
                            e = u.getFullYear();
                            s = u.getMonth() + 1;
                            h = u.getDate();
                            break;
                        case "'":
                            l("'") ? b() : w = !0;
                            break;
                        default:
                            b()
                    }
                    if (f < i.length && (v = i.substr(f), !/^\s+/.test(v))) throw "Extra/unparsed characters found in date: " + v;
                if (e === -1 ? e = (new Date).getFullYear() : e < 100 && (e += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (e <= d ? 0 : -100)), p > -1) {
                    s = 1;
                    h = p;
                    do {
                        if (a = this._getDaysInMonth(e, s - 1), h <= a) break;
                        s++;
                        h -= a
                    } while (1)
                }
                if (u = this._daylightSavingAdjust(new Date(e, s - 1, h)), u.getFullYear() !== e || u.getMonth() + 1 !== s || u.getDate() !== h) throw "Invalid date";
                return u
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
            _ticksTo1970: (718685 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 864e9,
            formatDate: function(n, t, i) {
                if (!t) return "";
                var u, h = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                    c = (i ? i.dayNames : null) || this._defaults.dayNames,
                    l = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                    a = (i ? i.monthNames : null) || this._defaults.monthNames,
                    f = function(t) {
                        var i = u + 1 < n.length && n.charAt(u + 1) === t;
                        return i && u++, i
                    },
                    e = function(n, t, i) {
                        var r = "" + t;
                        if (f(n))
                            while (r.length < i) r = "0" + r;
                        return r
                    },
                    s = function(n, t, i, r) {
                        return f(n) ? r[t] : i[t]
                    },
                    r = "",
                    o = !1;
                if (t)
                    for (u = 0; u < n.length; u++)
                        if (o) n.charAt(u) !== "'" || f("'") ? r += n.charAt(u) : o = !1;
                        else switch (n.charAt(u)) {
                            case "d":
                                r += e("d", t.getDate(), 2);
                                break;
                            case "D":
                                r += s("D", t.getDay(), h, c);
                                break;
                            case "o":
                                r += e("o", Math.round((new Date(t.getFullYear(), t.getMonth(), t.getDate()).getTime() - new Date(t.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                                break;
                            case "m":
                                r += e("m", t.getMonth() + 1, 2);
                                break;
                            case "M":
                                r += s("M", t.getMonth(), l, a);
                                break;
                            case "y":
                                r += f("y") ? t.getFullYear() : (t.getYear() % 100 < 10 ? "0" : "") + t.getYear() % 100;
                                break;
                            case "@":
                                r += t.getTime();
                                break;
                            case "!":
                                r += t.getTime() * 1e4 + this._ticksTo1970;
                                break;
                            case "'":
                                f("'") ? r += "'" : o = !0;
                                break;
                            default:
                                r += n.charAt(u)
                        }
                        return r
            },
            _possibleChars: function(n) {
                for (var i = "", r = !1, u = function(i) {
                        var r = t + 1 < n.length && n.charAt(t + 1) === i;
                        return r && t++, r
                    }, t = 0; t < n.length; t++)
                    if (r) n.charAt(t) !== "'" || u("'") ? i += n.charAt(t) : r = !1;
                    else switch (n.charAt(t)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            i += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            u("'") ? i += "'" : r = !0;
                            break;
                        default:
                            i += n.charAt(t)
                    }
                    return i
            },
            _get: function(n, t) {
                return n.settings[t] !== undefined ? n.settings[t] : this._defaults[t]
            },
            _setDateFromField: function(n, t) {
                if (n.input.val() !== n.lastVal) {
                    var f = this._get(n, "dateFormat"),
                        r = n.lastVal = n.input ? n.input.val() : null,
                        u = this._getDefaultDate(n),
                        i = u,
                        e = this._getFormatConfig(n);
                    try {
                        i = this.parseDate(f, r, e) || u
                    } catch (o) {
                        r = t ? "" : r
                    }
                    n.selectedDay = i.getDate();
                    n.drawMonth = n.selectedMonth = i.getMonth();
                    n.drawYear = n.selectedYear = i.getFullYear();
                    n.currentDay = r ? i.getDate() : 0;
                    n.currentMonth = r ? i.getMonth() : 0;
                    n.currentYear = r ? i.getFullYear() : 0;
                    this._adjustInstDate(n)
                }
            },
            _getDefaultDate: function(n) {
                return this._restrictMinMax(n, this._determineDate(n, this._get(n, "defaultDate"), new Date))
            },
            _determineDate: function(t, i, r) {
                var f = function(n) {
                        var t = new Date;
                        return t.setDate(t.getDate() + n), t
                    },
                    e = function(i) {
                        try {
                            return n.datepicker.parseDate(n.datepicker._get(t, "dateFormat"), i, n.datepicker._getFormatConfig(t))
                        } catch (h) {}
                        for (var o = (i.toLowerCase().match(/^c/) ? n.datepicker._getDate(t) : null) || new Date, f = o.getFullYear(), e = o.getMonth(), r = o.getDate(), s = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, u = s.exec(i); u;) {
                            switch (u[2] || "d") {
                                case "d":
                                case "D":
                                    r += parseInt(u[1], 10);
                                    break;
                                case "w":
                                case "W":
                                    r += parseInt(u[1], 10) * 7;
                                    break;
                                case "m":
                                case "M":
                                    e += parseInt(u[1], 10);
                                    r = Math.min(r, n.datepicker._getDaysInMonth(f, e));
                                    break;
                                case "y":
                                case "Y":
                                    f += parseInt(u[1], 10);
                                    r = Math.min(r, n.datepicker._getDaysInMonth(f, e))
                            }
                            u = s.exec(i)
                        }
                        return new Date(f, e, r)
                    },
                    u = i == null || i === "" ? r : typeof i == "string" ? e(i) : typeof i == "number" ? isNaN(i) ? r : f(i) : new Date(i.getTime());
                return u = u && u.toString() === "Invalid Date" ? r : u, u && (u.setHours(0), u.setMinutes(0), u.setSeconds(0), u.setMilliseconds(0)), this._daylightSavingAdjust(u)
            },
            _daylightSavingAdjust: function(n) {
                return n ? (n.setHours(n.getHours() > 12 ? n.getHours() + 2 : 0), n) : null
            },
            _setDate: function(n, t, i) {
                var u = !t,
                    f = n.selectedMonth,
                    e = n.selectedYear,
                    r = this._restrictMinMax(n, this._determineDate(n, t, new Date));
                n.selectedDay = n.currentDay = r.getDate();
                n.drawMonth = n.selectedMonth = n.currentMonth = r.getMonth();
                n.drawYear = n.selectedYear = n.currentYear = r.getFullYear();
                f === n.selectedMonth && e === n.selectedYear || i || this._notifyChange(n);
                this._adjustInstDate(n);
                n.input && n.input.val(u ? "" : this._formatDate(n))
            },
            _getDate: function(n) {
                return !n.currentYear || n.input && n.input.val() === "" ? null : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay))
            },
            _attachHandlers: function(t) {
                var r = this._get(t, "stepMonths"),
                    i = "#" + t.id.replace(/\\\\/g, "\\");
                t.dpDiv.find("[data-handler]").map(function() {
                    var t = {
                        prev: function() {
                            n.datepicker._adjustDate(i, -r, "M")
                        },
                        next: function() {
                            n.datepicker._adjustDate(i, +r, "M")
                        },
                        hide: function() {
                            n.datepicker._hideDatepicker()
                        },
                        today: function() {
                            n.datepicker._gotoToday(i)
                        },
                        selectDay: function() {
                            return n.datepicker._selectDay(i, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                        },
                        selectMonth: function() {
                            return n.datepicker._selectMonthYear(i, this, "M"), !1
                        },
                        selectYear: function() {
                            return n.datepicker._selectMonthYear(i, this, "Y"), !1
                        }
                    };
                    n(this).bind(this.getAttribute("data-event"), t[this.getAttribute("data-handler")])
                })
            },
            _generateHTML: function(n) {
                var b, s, rt, h, ut, k, ft, et, ri, c, ot, ui, fi, ei, oi, st, g, si, ht, nt, f, y, ct, p, lt, l, u, at, vt, yt, pt, tt, wt, i, bt, kt, d, a, it, dt = new Date,
                    gt = this._daylightSavingAdjust(new Date(dt.getFullYear(), dt.getMonth(), dt.getDate())),
                    e = this._get(n, "isRTL"),
                    li = this._get(n, "showButtonPanel"),
                    hi = this._get(n, "hideIfNoPrevNext"),
                    ni = this._get(n, "navigationAsDateFormat"),
                    o = this._getNumberOfMonths(n),
                    ai = this._get(n, "showCurrentAtPos"),
                    ci = this._get(n, "stepMonths"),
                    ti = o[0] !== 1 || o[1] !== 1,
                    ii = this._daylightSavingAdjust(n.currentDay ? new Date(n.currentYear, n.currentMonth, n.currentDay) : new Date(9999, 9, 9)),
                    w = this._getMinMaxDate(n, "min"),
                    v = this._getMinMaxDate(n, "max"),
                    t = n.drawMonth - ai,
                    r = n.drawYear;
                if (t < 0 && (t += 12, r--), v)
                    for (b = this._daylightSavingAdjust(new Date(v.getFullYear(), v.getMonth() - o[0] * o[1] + 1, v.getDate())), b = w && b < w ? w : b; this._daylightSavingAdjust(new Date(r, t, 1)) > b;) t--, t < 0 && (t = 11, r--);
                for (n.drawMonth = t, n.drawYear = r, s = this._get(n, "prevText"), s = ni ? this.formatDate(s, this._daylightSavingAdjust(new Date(r, t - ci, 1)), this._getFormatConfig(n)) : s, rt = this._canAdjustMonth(n, -1, r, t) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "e" : "w") + "'>" + s + "<\/span><\/a>", h = this._get(n, "nextText"), h = ni ? this.formatDate(h, this._daylightSavingAdjust(new Date(r, t + ci, 1)), this._getFormatConfig(n)) : h, ut = this._canAdjustMonth(n, 1, r, t) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>" : hi ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + h + "'><span class='ui-icon ui-icon-circle-triangle-" + (e ? "w" : "e") + "'>" + h + "<\/span><\/a>", k = this._get(n, "currentText"), ft = this._get(n, "gotoCurrent") && n.currentDay ? ii : gt, k = ni ? this.formatDate(k, ft, this._getFormatConfig(n)) : k, et = n.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(n, "closeText") + "<\/button>", ri = li ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (e ? et : "") + (this._isInRange(n, ft) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + k + "<\/button>" : "") + (e ? "" : et) + "<\/div>" : "", c = parseInt(this._get(n, "firstDay"), 10), c = isNaN(c) ? 0 : c, ot = this._get(n, "showWeek"), ui = this._get(n, "dayNames"), fi = this._get(n, "dayNamesMin"), ei = this._get(n, "monthNames"), oi = this._get(n, "monthNamesShort"), st = this._get(n, "beforeShowDay"), g = this._get(n, "showOtherMonths"), si = this._get(n, "selectOtherMonths"), ht = this._getDefaultDate(n), nt = "", f, y = 0; y < o[0]; y++) {
                    for (ct = "", this.maxRows = 4, p = 0; p < o[1]; p++) {
                        if (lt = this._daylightSavingAdjust(new Date(r, t, n.selectedDay)), l = " ui-corner-all", u = "", ti) {
                            if (u += "<div class='ui-datepicker-group", o[1] > 1) switch (p) {
                                case 0:
                                    u += " ui-datepicker-group-first";
                                    l = " ui-corner-" + (e ? "right" : "left");
                                    break;
                                case o[1] - 1:
                                    u += " ui-datepicker-group-last";
                                    l = " ui-corner-" + (e ? "left" : "right");
                                    break;
                                default:
                                    u += " ui-datepicker-group-middle";
                                    l = ""
                            }
                            u += "'>"
                        }
                        for (u += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + l + "'>" + (/all|left/.test(l) && y === 0 ? e ? ut : rt : "") + (/all|right/.test(l) && y === 0 ? e ? rt : ut : "") + this._generateMonthYearHeader(n, t, r, w, v, y > 0 || p > 0, ei, oi) + "<\/div><table class='ui-datepicker-calendar'><thead><tr>", at = ot ? "<th class='ui-datepicker-week-col'>" + this._get(n, "weekHeader") + "<\/th>" : "", f = 0; f < 7; f++) vt = (f + c) % 7, at += "<th scope='col'" + ((f + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + ui[vt] + "'>" + fi[vt] + "<\/span><\/th>";
                        for (u += at + "<\/tr><\/thead><tbody>", yt = this._getDaysInMonth(r, t), r === n.selectedYear && t === n.selectedMonth && (n.selectedDay = Math.min(n.selectedDay, yt)), pt = (this._getFirstDayOfMonth(r, t) - c + 7) % 7, tt = Math.ceil((pt + yt) / 7), wt = ti ? this.maxRows > tt ? this.maxRows : tt : tt, this.maxRows = wt, i = this._daylightSavingAdjust(new Date(r, t, 1 - pt)), bt = 0; bt < wt; bt++) {
                            for (u += "<tr>", kt = ot ? "<td class='ui-datepicker-week-col'>" + this._get(n, "calculateWeek")(i) + "<\/td>" : "", f = 0; f < 7; f++) d = st ? st.apply(n.input ? n.input[0] : null, [i]) : [!0, ""], a = i.getMonth() !== t, it = a && !si || !d[0] || w && i < w || v && i > v, kt += "<td class='" + ((f + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (a ? " ui-datepicker-other-month" : "") + (i.getTime() === lt.getTime() && t === n.selectedMonth && n._keyEvent || ht.getTime() === i.getTime() && ht.getTime() === lt.getTime() ? " " + this._dayOverClass : "") + (it ? " " + this._unselectableClass + " ui-state-disabled" : "") + (a && !g ? "" : " " + d[1] + (i.getTime() === ii.getTime() ? " " + this._currentClass : "") + (i.getTime() === gt.getTime() ? " ui-datepicker-today" : "")) + "'" + ((!a || g) && d[2] ? " title='" + d[2].replace(/'/g, "&#39;") + "'" : "") + (it ? "" : " data-handler='selectDay' data-event='click' data-month='" + i.getMonth() + "' data-year='" + i.getFullYear() + "'") + ">" + (a && !g ? "&#xa0;" : it ? "<span class='ui-state-default'>" + i.getDate() + "<\/span>" : "<a class='ui-state-default" + (i.getTime() === gt.getTime() ? " ui-state-highlight" : "") + (i.getTime() === ii.getTime() ? " ui-state-active" : "") + (a ? " ui-priority-secondary" : "") + "' href='#'>" + i.getDate() + "<\/a>") + "<\/td>", i.setDate(i.getDate() + 1), i = this._daylightSavingAdjust(i);
                            u += kt + "<\/tr>"
                        }
                        t++;
                        t > 11 && (t = 0, r++);
                        u += "<\/tbody><\/table>" + (ti ? "<\/div>" + (o[0] > 0 && p === o[1] - 1 ? "<div class='ui-datepicker-row-break'><\/div>" : "") : "");
                        ct += u
                    }
                    nt += ct
                }
                return nt += ri, n._keyEvent = !1, nt
            },
            _generateMonthYearHeader: function(n, t, i, r, u, f, e, o) {
                var k, d, h, v, y, p, s, a, w = this._get(n, "changeMonth"),
                    b = this._get(n, "changeYear"),
                    g = this._get(n, "showMonthAfterYear"),
                    c = "<div class='ui-datepicker-title'>",
                    l = "";
                if (f || !w) l += "<span class='ui-datepicker-month'>" + e[t] + "<\/span>";
                else {
                    for (k = r && r.getFullYear() === i, d = u && u.getFullYear() === i, l += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", h = 0; h < 12; h++)(!k || h >= r.getMonth()) && (!d || h <= u.getMonth()) && (l += "<option value='" + h + "'" + (h === t ? " selected='selected'" : "") + ">" + o[h] + "<\/option>");
                    l += "<\/select>"
                }
                if (g || (c += l + (f || !(w && b) ? "&#xa0;" : "")), !n.yearshtml)
                    if (n.yearshtml = "", f || !b) c += "<span class='ui-datepicker-year'>" + i + "<\/span>";
                    else {
                        for (v = this._get(n, "yearRange").split(":"), y = (new Date).getFullYear(), p = function(n) {
                                var t = n.match(/c[+\-].*/) ? i + parseInt(n.substring(1), 10) : n.match(/[+\-].*/) ? y + parseInt(n, 10) : parseInt(n, 10);
                                return isNaN(t) ? y : t
                            }, s = p(v[0]), a = Math.max(s, p(v[1] || "")), s = r ? Math.max(s, r.getFullYear()) : s, a = u ? Math.min(a, u.getFullYear()) : a, n.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; s <= a; s++) n.yearshtml += "<option value='" + s + "'" + (s === i ? " selected='selected'" : "") + ">" + s + "<\/option>";
                        n.yearshtml += "<\/select>";
                        c += n.yearshtml;
                        n.yearshtml = null
                    }
                return c += this._get(n, "yearSuffix"), g && (c += (f || !(w && b) ? "&#xa0;" : "") + l), c + "<\/div>"
            },
            _adjustInstDate: function(n, t, i) {
                var u = n.drawYear + (i === "Y" ? t : 0),
                    f = n.drawMonth + (i === "M" ? t : 0),
                    e = Math.min(n.selectedDay, this._getDaysInMonth(u, f)) + (i === "D" ? t : 0),
                    r = this._restrictMinMax(n, this._daylightSavingAdjust(new Date(u, f, e)));
                n.selectedDay = r.getDate();
                n.drawMonth = n.selectedMonth = r.getMonth();
                n.drawYear = n.selectedYear = r.getFullYear();
                (i === "M" || i === "Y") && this._notifyChange(n)
            },
            _restrictMinMax: function(n, t) {
                var i = this._getMinMaxDate(n, "min"),
                    r = this._getMinMaxDate(n, "max"),
                    u = i && t < i ? i : t;
                return r && u > r ? r : u
            },
            _notifyChange: function(n) {
                var t = this._get(n, "onChangeMonthYear");
                t && t.apply(n.input ? n.input[0] : null, [n.selectedYear, n.selectedMonth + 1, n])
            },
            _getNumberOfMonths: function(n) {
                var t = this._get(n, "numberOfMonths");
                return t == null ? [1, 1] : typeof t == "number" ? [1, t] : t
            },
            _getMinMaxDate: function(n, t) {
                return this._determineDate(n, this._get(n, t + "Date"), null)
            },
            _getDaysInMonth: function(n, t) {
                return 32 - this._daylightSavingAdjust(new Date(n, t, 32)).getDate()
            },
            _getFirstDayOfMonth: function(n, t) {
                return new Date(n, t, 1).getDay()
            },
            _canAdjustMonth: function(n, t, i, r) {
                var f = this._getNumberOfMonths(n),
                    u = this._daylightSavingAdjust(new Date(i, r + (t < 0 ? t : f[0] * f[1]), 1));
                return t < 0 && u.setDate(this._getDaysInMonth(u.getFullYear(), u.getMonth())), this._isInRange(n, u)
            },
            _isInRange: function(n, t) {
                var i, f, e = this._getMinMaxDate(n, "min"),
                    o = this._getMinMaxDate(n, "max"),
                    r = null,
                    u = null,
                    s = this._get(n, "yearRange");
                return s && (i = s.split(":"), f = (new Date).getFullYear(), r = parseInt(i[0], 10), u = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (r += f), i[1].match(/[+\-].*/) && (u += f)), (!e || t.getTime() >= e.getTime()) && (!o || t.getTime() <= o.getTime()) && (!r || t.getFullYear() >= r) && (!u || t.getFullYear() <= u)
            },
            _getFormatConfig: function(n) {
                var t = this._get(n, "shortYearCutoff");
                return t = typeof t != "string" ? t : (new Date).getFullYear() % 100 + parseInt(t, 10), {
                    shortYearCutoff: t,
                    dayNamesShort: this._get(n, "dayNamesShort"),
                    dayNames: this._get(n, "dayNames"),
                    monthNamesShort: this._get(n, "monthNamesShort"),
                    monthNames: this._get(n, "monthNames")
                }
            },
            _formatDate: function(n, t, i, r) {
                t || (n.currentDay = n.selectedDay, n.currentMonth = n.selectedMonth, n.currentYear = n.selectedYear);
                var u = t ? typeof t == "object" ? t : this._daylightSavingAdjust(new Date(r, i, t)) : this._daylightSavingAdjust(new Date(n.currentYear, n.currentMonth, n.currentDay));
                return this.formatDate(this._get(n, "dateFormat"), u, this._getFormatConfig(n))
            }
        });
        n.fn.datepicker = function(t) {
            if (!this.length) return this;
            n.datepicker.initialized || (n(document).mousedown(n.datepicker._checkExternalClick), n.datepicker.initialized = !0);
            n("#" + n.datepicker._mainDivId).length === 0 && n("body").append(n.datepicker.dpDiv);
            var i = Array.prototype.slice.call(arguments, 1);
            return typeof t == "string" && (t === "isDisabled" || t === "getDate" || t === "widget") ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : t === "option" && arguments.length === 2 && typeof arguments[1] == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this[0]].concat(i)) : this.each(function() {
                typeof t == "string" ? n.datepicker["_" + t + "Datepicker"].apply(n.datepicker, [this].concat(i)) : n.datepicker._attachDatepicker(this, t)
            })
        };
        n.datepicker = new v;
        n.datepicker.initialized = !1;
        n.datepicker.uuid = (new Date).getTime();
        n.datepicker.version = "1.11.4";
        it = n.datepicker;
        n.widget("ui.draggable", n.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                this.options.helper === "original" && this._setPositionRelative();
                this.options.addClasses && this.element.addClass("ui-draggable");
                this.options.disabled && this.element.addClass("ui-draggable-disabled");
                this._setHandleClassName();
                this._mouseInit()
            },
            _setOption: function(n, t) {
                this._super(n, t);
                n === "handle" && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                if ((this.helper || this.element).is(".ui-draggable-dragging")) {
                    this.destroyOnClear = !0;
                    return
                }
                this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._removeHandleClassName();
                this._mouseDestroy()
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return (this._blurActiveElement(t), this.helper || i.disabled || n(t.target).closest(".ui-resizable-handle").length > 0) ? !1 : (this.handle = this._getHandle(t), !this.handle) ? !1 : (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0)
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = n(this);
                    return n("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var i = this.document[0];
                if (this.handleElement.is(t.target)) try {
                    i.activeElement && i.activeElement.nodeName.toLowerCase() !== "body" && n(i.activeElement).blur()
                } catch (r) {}
            },
            _mouseStart: function(t) {
                var i = this.options;
                return (this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), n.ui.ddmanager && (n.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return n(this).css("position") === "fixed"
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1) ? (this._clear(), !1) : (this._cacheHelperProportions(), n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), n.ui.ddmanager && n.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(n) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                };
                this.offset.click = {
                    left: n.pageX - this.offset.left,
                    top: n.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var r = this._uiHash();
                    if (this._trigger("drag", t, r) === !1) return this._mouseUp({}), !1;
                    this.position = r.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", n.ui.ddmanager && n.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var r = this,
                    i = !1;
                return n.ui.ddmanager && !this.options.dropBehaviour && (i = n.ui.ddmanager.drop(this, t)), this.dropped && (i = this.dropped, this.dropped = !1), this.options.revert === "invalid" && !i || this.options.revert === "valid" && i || this.options.revert === !0 || n.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? n(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    r._trigger("stop", t) !== !1 && r._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), n.ui.ddmanager && n.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), n.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!n(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element;
                this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(t) {
                var r = this.options,
                    u = n.isFunction(r.helper),
                    i = u ? n(r.helper.apply(this.element[0], [t])) : r.helper === "clone" ? this.element.clone().removeAttr("id") : this.element;
                return i.parents("body").length || i.appendTo(r.appendTo === "parent" ? this.element[0].parentNode : r.appendTo), u && i[0] === this.element[0] && this._setPositionRelative(), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                typeof t == "string" && (t = t.split(" "));
                n.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                });
                "left" in t && (this.offset.click.left = t.left + this.margins.left);
                "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
                "top" in t && (this.offset.click.top = t.top + this.margins.top);
                "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(n) {
                return /(html|body)/i.test(n.tagName) || n === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    i = this.document[0];
                return this.cssPosition === "absolute" && this.scrollParent[0] !== i && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if (this.cssPosition !== "relative") return {
                    top: 0,
                    left: 0
                };
                var n = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var f, t, i, r = this.options,
                    u = this.document[0];
                if (this.relativeContainer = null, !r.containment) {
                    this.containment = null;
                    return
                }
                if (r.containment === "window") {
                    this.containment = [n(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, n(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, n(window).scrollLeft() + n(window).width() - this.helperProportions.width - this.margins.left, n(window).scrollTop() + (n(window).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                    return
                }
                if (r.containment === "document") {
                    this.containment = [0, 0, n(u).width() - this.helperProportions.width - this.margins.left, (n(u).height() || u.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
                    return
                }
                if (r.containment.constructor === Array) {
                    this.containment = r.containment;
                    return
                }(r.containment === "parent" && (r.containment = this.helper[0].parentNode), t = n(r.containment), i = t[0], i) && (f = /(scroll|auto)/.test(t.css("overflow")), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (f ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (f ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = t)
            },
            _convertPositionTo: function(n, t) {
                t || (t = this.position);
                var i = n === "absolute" ? 1 : -1,
                    r = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - (this.cssPosition === "fixed" ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - (this.cssPosition === "fixed" ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(n, t) {
                var i, s, u, f, r = this.options,
                    h = this._isRootNode(this.scrollParent[0]),
                    e = n.pageX,
                    o = n.pageY;
                return h && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, n.pageX - this.offset.click.left < i[0] && (e = i[0] + this.offset.click.left), n.pageY - this.offset.click.top < i[1] && (o = i[1] + this.offset.click.top), n.pageX - this.offset.click.left > i[2] && (e = i[2] + this.offset.click.left), n.pageY - this.offset.click.top > i[3] && (o = i[3] + this.offset.click.top)), r.grid && (u = r.grid[1] ? this.originalPageY + Math.round((o - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, o = i ? u - this.offset.click.top >= i[1] || u - this.offset.click.top > i[3] ? u : u - this.offset.click.top >= i[1] ? u - r.grid[1] : u + r.grid[1] : u, f = r.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, e = i ? f - this.offset.click.left >= i[0] || f - this.offset.click.left > i[2] ? f : f - this.offset.click.left >= i[0] ? f - r.grid[0] : f + r.grid[0] : f), r.axis === "y" && (e = this.originalPageX), r.axis === "x" && (o = this.originalPageY)), {
                    top: o - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.offset.scroll.top : h ? 0 : this.offset.scroll.top),
                    left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.offset.scroll.left : h ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging");
                this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove();
                this.helper = null;
                this.cancelHelperRemoval = !1;
                this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                this.options.axis !== "y" && this.helper.css("right") !== "auto" && (this.helper.width(this.helper.width()), this.helper.css("right", "auto"));
                this.options.axis !== "x" && this.helper.css("bottom") !== "auto" && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(t, i, r) {
                return r = r || this._uiHash(), n.ui.plugin.call(this, t, [i, r, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), r.offset = this.positionAbs), n.Widget.prototype._trigger.call(this, t, i, r)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        });
        n.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i, r) {
                var u = n.extend({}, i, {
                    item: r.element
                });
                r.sortables = [];
                n(r.options.connectToSortable).each(function() {
                    var i = n(this).sortable("instance");
                    i && !i.options.disabled && (r.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, u))
                })
            },
            stop: function(t, i, r) {
                var u = n.extend({}, i, {
                    item: r.element
                });
                r.cancelHelperRemoval = !1;
                n.each(r.sortables, function() {
                    var n = this;
                    n.isOver ? (n.isOver = 0, r.cancelHelperRemoval = !0, n.cancelHelperRemoval = !1, n._storedCSS = {
                        position: n.placeholder.css("position"),
                        top: n.placeholder.css("top"),
                        left: n.placeholder.css("left")
                    }, n._mouseStop(t), n.options.helper = n.options._helper) : (n.cancelHelperRemoval = !0, n._trigger("deactivate", t, u))
                })
            },
            drag: function(t, i, r) {
                n.each(r.sortables, function() {
                    var f = !1,
                        u = this;
                    u.positionAbs = r.positionAbs;
                    u.helperProportions = r.helperProportions;
                    u.offset.click = r.offset.click;
                    u._intersectsWith(u.containerCache) && (f = !0, n.each(r.sortables, function() {
                        return this.positionAbs = r.positionAbs, this.helperProportions = r.helperProportions, this.offset.click = r.offset.click, this !== u && this._intersectsWith(this.containerCache) && n.contains(u.element[0], this.element[0]) && (f = !1), f
                    }));
                    f ? (u.isOver || (u.isOver = 1, r._parent = i.helper.parent(), u.currentItem = i.helper.appendTo(u.element).data("ui-sortable-item", !0), u.options._helper = u.options.helper, u.options.helper = function() {
                        return i.helper[0]
                    }, t.target = u.currentItem[0], u._mouseCapture(t, !0), u._mouseStart(t, !0, !0), u.offset.click.top = r.offset.click.top, u.offset.click.left = r.offset.click.left, u.offset.parent.left -= r.offset.parent.left - u.offset.parent.left, u.offset.parent.top -= r.offset.parent.top - u.offset.parent.top, r._trigger("toSortable", t), r.dropped = u.element, n.each(r.sortables, function() {
                        this.refreshPositions()
                    }), r.currentItem = r.element, u.fromOutside = r), u.currentItem && (u._mouseDrag(t), i.position = u.position)) : u.isOver && (u.isOver = 0, u.cancelHelperRemoval = !0, u.options._revert = u.options.revert, u.options.revert = !1, u._trigger("out", t, u._uiHash(u)), u._mouseStop(t, !0), u.options.revert = u.options._revert, u.options.helper = u.options._helper, u.placeholder && u.placeholder.remove(), i.helper.appendTo(r._parent), r._refreshOffsets(t), i.position = r._generatePosition(t, !0), r._trigger("fromSortable", t), r.dropped = !1, n.each(r.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        });
        n.ui.plugin.add("draggable", "cursor", {
            start: function(t, i, r) {
                var u = n("body"),
                    f = r.options;
                u.css("cursor") && (f._cursor = u.css("cursor"));
                u.css("cursor", f.cursor)
            },
            stop: function(t, i, r) {
                var u = r.options;
                u._cursor && n("body").css("cursor", u._cursor)
            }
        });
        n.ui.plugin.add("draggable", "opacity", {
            start: function(t, i, r) {
                var u = n(i.helper),
                    f = r.options;
                u.css("opacity") && (f._opacity = u.css("opacity"));
                u.css("opacity", f.opacity)
            },
            stop: function(t, i, r) {
                var u = r.options;
                u._opacity && n(i.helper).css("opacity", u._opacity)
            }
        });
        n.ui.plugin.add("draggable", "scroll", {
            start: function(n, t, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1));
                i.scrollParentNotHidden[0] !== i.document[0] && i.scrollParentNotHidden[0].tagName !== "HTML" && (i.overflowOffset = i.scrollParentNotHidden.offset())
            },
            drag: function(t, i, r) {
                var u = r.options,
                    o = !1,
                    e = r.scrollParentNotHidden[0],
                    f = r.document[0];
                e !== f && e.tagName !== "HTML" ? (u.axis && u.axis === "x" || (r.overflowOffset.top + e.offsetHeight - t.pageY < u.scrollSensitivity ? e.scrollTop = o = e.scrollTop + u.scrollSpeed : t.pageY - r.overflowOffset.top < u.scrollSensitivity && (e.scrollTop = o = e.scrollTop - u.scrollSpeed)), u.axis && u.axis === "y" || (r.overflowOffset.left + e.offsetWidth - t.pageX < u.scrollSensitivity ? e.scrollLeft = o = e.scrollLeft + u.scrollSpeed : t.pageX - r.overflowOffset.left < u.scrollSensitivity && (e.scrollLeft = o = e.scrollLeft - u.scrollSpeed))) : (u.axis && u.axis === "x" || (t.pageY - n(f).scrollTop() < u.scrollSensitivity ? o = n(f).scrollTop(n(f).scrollTop() - u.scrollSpeed) : n(window).height() - (t.pageY - n(f).scrollTop()) < u.scrollSensitivity && (o = n(f).scrollTop(n(f).scrollTop() + u.scrollSpeed))), u.axis && u.axis === "y" || (t.pageX - n(f).scrollLeft() < u.scrollSensitivity ? o = n(f).scrollLeft(n(f).scrollLeft() - u.scrollSpeed) : n(window).width() - (t.pageX - n(f).scrollLeft()) < u.scrollSensitivity && (o = n(f).scrollLeft(n(f).scrollLeft() + u.scrollSpeed))));
                o !== !1 && n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(r, t)
            }
        });
        n.ui.plugin.add("draggable", "snap", {
            start: function(t, i, r) {
                var u = r.options;
                r.snapElements = [];
                n(u.snap.constructor !== String ? u.snap.items || ":data(ui-draggable)" : u.snap).each(function() {
                    var t = n(this),
                        i = t.offset();
                    this !== r.element[0] && r.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(t, i, r) {
                for (var e, o, s, h, c, a, l, v, w, b = r.options, f = b.snapTolerance, y = i.offset.left, k = y + r.helperProportions.width, p = i.offset.top, d = p + r.helperProportions.height, u = r.snapElements.length - 1; u >= 0; u--) {
                    if (c = r.snapElements[u].left - r.margins.left, a = c + r.snapElements[u].width, l = r.snapElements[u].top - r.margins.top, v = l + r.snapElements[u].height, k < c - f || y > a + f || d < l - f || p > v + f || !n.contains(r.snapElements[u].item.ownerDocument, r.snapElements[u].item)) {
                        r.snapElements[u].snapping && r.options.snap.release && r.options.snap.release.call(r.element, t, n.extend(r._uiHash(), {
                            snapItem: r.snapElements[u].item
                        }));
                        r.snapElements[u].snapping = !1;
                        continue
                    }
                    b.snapMode !== "inner" && (e = Math.abs(l - d) <= f, o = Math.abs(v - p) <= f, s = Math.abs(c - k) <= f, h = Math.abs(a - y) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                        top: l - r.helperProportions.height,
                        left: 0
                    }).top), o && (i.position.top = r._convertPositionTo("relative", {
                        top: v,
                        left: 0
                    }).top), s && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c - r.helperProportions.width
                    }).left), h && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: a
                    }).left));
                    w = e || o || s || h;
                    b.snapMode !== "outer" && (e = Math.abs(l - p) <= f, o = Math.abs(v - d) <= f, s = Math.abs(c - y) <= f, h = Math.abs(a - k) <= f, e && (i.position.top = r._convertPositionTo("relative", {
                        top: l,
                        left: 0
                    }).top), o && (i.position.top = r._convertPositionTo("relative", {
                        top: v - r.helperProportions.height,
                        left: 0
                    }).top), s && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: c
                    }).left), h && (i.position.left = r._convertPositionTo("relative", {
                        top: 0,
                        left: a - r.helperProportions.width
                    }).left));
                    !r.snapElements[u].snapping && (e || o || s || h || w) && r.options.snap.snap && r.options.snap.snap.call(r.element, t, n.extend(r._uiHash(), {
                        snapItem: r.snapElements[u].item
                    }));
                    r.snapElements[u].snapping = e || o || s || h || w
                }
            }
        });
        n.ui.plugin.add("draggable", "stack", {
            start: function(t, i, r) {
                var f, e = r.options,
                    u = n.makeArray(n(e.stack)).sort(function(t, i) {
                        return (parseInt(n(t).css("zIndex"), 10) || 0) - (parseInt(n(i).css("zIndex"), 10) || 0)
                    });
                u.length && (f = parseInt(n(u[0]).css("zIndex"), 10) || 0, n(u).each(function(t) {
                    n(this).css("zIndex", f + t)
                }), this.css("zIndex", f + u.length))
            }
        });
        n.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i, r) {
                var u = n(i.helper),
                    f = r.options;
                u.css("zIndex") && (f._zIndex = u.css("zIndex"));
                u.css("zIndex", f.zIndex)
            },
            stop: function(t, i, r) {
                var u = r.options;
                u._zIndex && n(i.helper).css("zIndex", u._zIndex)
            }
        });
        rt = n.ui.draggable;
        n.widget("ui.resizable", n.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "resize",
            options: {
                alsoResize: !1,
                animate: !1,
                animateDuration: "slow",
                animateEasing: "swing",
                aspectRatio: !1,
                autoHide: !1,
                containment: !1,
                ghost: !1,
                grid: !1,
                handles: "e,s,se",
                helper: !1,
                maxHeight: null,
                maxWidth: null,
                minHeight: 10,
                minWidth: 10,
                zIndex: 90,
                resize: null,
                start: null,
                stop: null
            },
            _num: function(n) {
                return parseInt(n, 10) || 0
            },
            _isNumber: function(n) {
                return !isNaN(parseInt(n, 10))
            },
            _hasScroll: function(t, i) {
                if (n(t).css("overflow") === "hidden") return !1;
                var r = i && i === "left" ? "scrollLeft" : "scrollTop",
                    u = !1;
                return t[r] > 0 ? !0 : (t[r] = 1, u = t[r] > 0, t[r] = 0, u)
            },
            _create: function() {
                var e, f, u, i, o, r = this,
                    t = this.options;
                if (this.element.addClass("ui-resizable"), n.extend(this, {
                        _aspectRatio: !!t.aspectRatio,
                        aspectRatio: t.aspectRatio,
                        originalElement: this.element,
                        _proportionallyResizeElements: [],
                        _helper: t.helper || t.ghost || t.animate ? t.helper || "ui-resizable-helper" : null
                    }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(n("<div class='ui-wrapper' style='overflow: hidden;'><\/div>").css({
                        position: this.element.css("position"),
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight(),
                        top: this.element.css("top"),
                        left: this.element.css("left")
                    })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, this.element.css({
                        marginLeft: this.originalElement.css("marginLeft"),
                        marginTop: this.originalElement.css("marginTop"),
                        marginRight: this.originalElement.css("marginRight"),
                        marginBottom: this.originalElement.css("marginBottom")
                    }), this.originalElement.css({
                        marginLeft: 0,
                        marginTop: 0,
                        marginRight: 0,
                        marginBottom: 0
                    }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                        position: "static",
                        zoom: 1,
                        display: "block"
                    })), this.originalElement.css({
                        margin: this.originalElement.css("margin")
                    }), this._proportionallyResize()), this.handles = t.handles || (n(".ui-resizable-handle", this.element).length ? {
                        n: ".ui-resizable-n",
                        e: ".ui-resizable-e",
                        s: ".ui-resizable-s",
                        w: ".ui-resizable-w",
                        se: ".ui-resizable-se",
                        sw: ".ui-resizable-sw",
                        ne: ".ui-resizable-ne",
                        nw: ".ui-resizable-nw"
                    } : "e,s,se"), this._handles = n(), this.handles.constructor === String)
                    for (this.handles === "all" && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, f = 0; f < e.length; f++) u = n.trim(e[f]), o = "ui-resizable-" + u, i = n("<div class='ui-resizable-handle " + o + "'><\/div>"), i.css({
                        zIndex: t.zIndex
                    }), "se" === u && i.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[u] = ".ui-resizable-" + u, this.element.append(i);
                this._renderAxis = function(t) {
                    var i, u, f, e;
                    t = t || this.element;
                    for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = n(this.handles[i]), this._on(this.handles[i], {
                        mousedown: r._mouseDown
                    })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (u = n(this.handles[i], this.element), e = /sw|ne|nw|se|n|s/.test(i) ? u.outerHeight() : u.outerWidth(), f = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), t.css(f, e), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
                };
                this._renderAxis(this.element);
                this._handles = this._handles.add(this.element.find(".ui-resizable-handle"));
                this._handles.disableSelection();
                this._handles.mouseover(function() {
                    r.resizing || (this.className && (i = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = i && i[1] ? i[1] : "se")
                });
                t.autoHide && (this._handles.hide(), n(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
                    t.disabled || (n(this).removeClass("ui-resizable-autohide"), r._handles.show())
                }).mouseleave(function() {
                    t.disabled || r.resizing || (n(this).addClass("ui-resizable-autohide"), r._handles.hide())
                }));
                this._mouseInit()
            },
            _destroy: function() {
                this._mouseDestroy();
                var t, i = function(t) {
                    n(t).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
                };
                return this.elementIsWrapper && (i(this.element), t = this.element, this.originalElement.css({
                    position: t.css("position"),
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    top: t.css("top"),
                    left: t.css("left")
                }).insertAfter(t), t.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
            },
            _mouseCapture: function(t) {
                var r, i, u = !1;
                for (r in this.handles) i = n(this.handles[r])[0], (i === t.target || n.contains(i, t.target)) && (u = !0);
                return !this.options.disabled && u
            },
            _mouseStart: function(t) {
                var u, f, e, r = this.options,
                    i = this.element;
                return this.resizing = !0, this._renderProxy(), u = this._num(this.helper.css("left")), f = this._num(this.helper.css("top")), r.containment && (u += n(r.containment).scrollLeft() || 0, f += n(r.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                    left: u,
                    top: f
                }, this.size = this._helper ? {
                    width: this.helper.width(),
                    height: this.helper.height()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.originalSize = this._helper ? {
                    width: i.outerWidth(),
                    height: i.outerHeight()
                } : {
                    width: i.width(),
                    height: i.height()
                }, this.sizeDiff = {
                    width: i.outerWidth() - i.width(),
                    height: i.outerHeight() - i.height()
                }, this.originalPosition = {
                    left: u,
                    top: f
                }, this.originalMousePosition = {
                    left: t.pageX,
                    top: t.pageY
                }, this.aspectRatio = typeof r.aspectRatio == "number" ? r.aspectRatio : this.originalSize.width / this.originalSize.height || 1, e = n(".ui-resizable-" + this.axis).css("cursor"), n("body").css("cursor", e === "auto" ? this.axis + "-resize" : e), i.addClass("ui-resizable-resizing"), this._propagate("start", t), !0
            },
            _mouseDrag: function(t) {
                var i, r, u = this.originalMousePosition,
                    e = this.axis,
                    o = t.pageX - u.left || 0,
                    s = t.pageY - u.top || 0,
                    f = this._change[e];
                return (this._updatePrevProperties(), !f) ? !1 : (i = f.apply(this, [t, o, s]), this._updateVirtualBoundaries(t.shiftKey), (this._aspectRatio || t.shiftKey) && (i = this._updateRatio(i, t)), i = this._respectSize(i, t), this._updateCache(i), this._propagate("resize", t), r = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), n.isEmptyObject(r) || (this._updatePrevProperties(), this._trigger("resize", t, this.ui()), this._applyChanges()), !1)
            },
            _mouseStop: function(t) {
                this.resizing = !1;
                var r, u, f, e, o, s, h, c = this.options,
                    i = this;
                return this._helper && (r = this._proportionallyResizeElements, u = r.length && /textarea/i.test(r[0].nodeName), f = u && this._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height, e = u ? 0 : i.sizeDiff.width, o = {
                    width: i.helper.width() - e,
                    height: i.helper.height() - f
                }, s = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null, h = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null, c.animate || this.element.css(n.extend(o, {
                    top: h,
                    left: s
                })), i.helper.height(i.size.height), i.helper.width(i.size.width), this._helper && !c.animate && this._proportionallyResize()), n("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", t), this._helper && this.helper.remove(), !1
            },
            _updatePrevProperties: function() {
                this.prevPosition = {
                    top: this.position.top,
                    left: this.position.left
                };
                this.prevSize = {
                    width: this.size.width,
                    height: this.size.height
                }
            },
            _applyChanges: function() {
                var n = {};
                return this.position.top !== this.prevPosition.top && (n.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (n.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (n.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (n.height = this.size.height + "px"), this.helper.css(n), n
            },
            _updateVirtualBoundaries: function(n) {
                var r, u, f, e, t, i = this.options;
                t = {
                    minWidth: this._isNumber(i.minWidth) ? i.minWidth : 0,
                    maxWidth: this._isNumber(i.maxWidth) ? i.maxWidth : Infinity,
                    minHeight: this._isNumber(i.minHeight) ? i.minHeight : 0,
                    maxHeight: this._isNumber(i.maxHeight) ? i.maxHeight : Infinity
                };
                (this._aspectRatio || n) && (r = t.minHeight * this.aspectRatio, f = t.minWidth / this.aspectRatio, u = t.maxHeight * this.aspectRatio, e = t.maxWidth / this.aspectRatio, r > t.minWidth && (t.minWidth = r), f > t.minHeight && (t.minHeight = f), u < t.maxWidth && (t.maxWidth = u), e < t.maxHeight && (t.maxHeight = e));
                this._vBoundaries = t
            },
            _updateCache: function(n) {
                this.offset = this.helper.offset();
                this._isNumber(n.left) && (this.position.left = n.left);
                this._isNumber(n.top) && (this.position.top = n.top);
                this._isNumber(n.height) && (this.size.height = n.height);
                this._isNumber(n.width) && (this.size.width = n.width)
            },
            _updateRatio: function(n) {
                var t = this.position,
                    i = this.size,
                    r = this.axis;
                return this._isNumber(n.height) ? n.width = n.height * this.aspectRatio : this._isNumber(n.width) && (n.height = n.width / this.aspectRatio), r === "sw" && (n.left = t.left + (i.width - n.width), n.top = null), r === "nw" && (n.top = t.top + (i.height - n.height), n.left = t.left + (i.width - n.width)), n
            },
            _respectSize: function(n) {
                var t = this._vBoundaries,
                    i = this.axis,
                    r = this._isNumber(n.width) && t.maxWidth && t.maxWidth < n.width,
                    u = this._isNumber(n.height) && t.maxHeight && t.maxHeight < n.height,
                    f = this._isNumber(n.width) && t.minWidth && t.minWidth > n.width,
                    e = this._isNumber(n.height) && t.minHeight && t.minHeight > n.height,
                    o = this.originalPosition.left + this.originalSize.width,
                    s = this.position.top + this.size.height,
                    h = /sw|nw|w/.test(i),
                    c = /nw|ne|n/.test(i);
                return f && (n.width = t.minWidth), e && (n.height = t.minHeight), r && (n.width = t.maxWidth), u && (n.height = t.maxHeight), f && h && (n.left = o - t.minWidth), r && h && (n.left = o - t.maxWidth), e && c && (n.top = s - t.minHeight), u && c && (n.top = s - t.maxHeight), n.width || n.height || n.left || !n.top ? n.width || n.height || n.top || !n.left || (n.left = null) : n.top = null, n
            },
            _getPaddingPlusBorderDimensions: function(n) {
                for (var t = 0, i = [], r = [n.css("borderTopWidth"), n.css("borderRightWidth"), n.css("borderBottomWidth"), n.css("borderLeftWidth")], u = [n.css("paddingTop"), n.css("paddingRight"), n.css("paddingBottom"), n.css("paddingLeft")]; t < 4; t++) i[t] = parseInt(r[t], 10) || 0, i[t] += parseInt(u[t], 10) || 0;
                return {
                    height: i[0] + i[2],
                    width: i[1] + i[3]
                }
            },
            _proportionallyResize: function() {
                if (this._proportionallyResizeElements.length)
                    for (var n, t = 0, i = this.helper || this.element; t < this._proportionallyResizeElements.length; t++) n = this._proportionallyResizeElements[t], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(n)), n.css({
                        height: i.height() - this.outerDimensions.height || 0,
                        width: i.width() - this.outerDimensions.width || 0
                    })
            },
            _renderProxy: function() {
                var t = this.element,
                    i = this.options;
                this.elementOffset = t.offset();
                this._helper ? (this.helper = this.helper || n("<div style='overflow:hidden;'><\/div>"), this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() - 1,
                    height: this.element.outerHeight() - 1,
                    position: "absolute",
                    left: this.elementOffset.left + "px",
                    top: this.elementOffset.top + "px",
                    zIndex: ++i.zIndex
                }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
            },
            _change: {
                e: function(n, t) {
                    return {
                        width: this.originalSize.width + t
                    }
                },
                w: function(n, t) {
                    var i = this.originalSize,
                        r = this.originalPosition;
                    return {
                        left: r.left + t,
                        width: i.width - t
                    }
                },
                n: function(n, t, i) {
                    var r = this.originalSize,
                        u = this.originalPosition;
                    return {
                        top: u.top + i,
                        height: r.height - i
                    }
                },
                s: function(n, t, i) {
                    return {
                        height: this.originalSize.height + i
                    }
                },
                se: function(t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                },
                sw: function(t, i, r) {
                    return n.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                },
                ne: function(t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [t, i, r]))
                },
                nw: function(t, i, r) {
                    return n.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [t, i, r]))
                }
            },
            _propagate: function(t, i) {
                n.ui.plugin.call(this, t, [i, this.ui()]);
                t !== "resize" && this._trigger(t, i, this.ui())
            },
            plugins: {},
            ui: function() {
                return {
                    originalElement: this.originalElement,
                    element: this.element,
                    helper: this.helper,
                    position: this.position,
                    size: this.size,
                    originalSize: this.originalSize,
                    originalPosition: this.originalPosition
                }
            }
        });
        n.ui.plugin.add("resizable", "animate", {
            stop: function(t) {
                var i = n(this).resizable("instance"),
                    u = i.options,
                    r = i._proportionallyResizeElements,
                    f = r.length && /textarea/i.test(r[0].nodeName),
                    s = f && i._hasScroll(r[0], "left") ? 0 : i.sizeDiff.height,
                    h = f ? 0 : i.sizeDiff.width,
                    c = {
                        width: i.size.width - h,
                        height: i.size.height - s
                    },
                    e = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
                    o = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
                i.element.animate(n.extend(c, o && e ? {
                    top: o,
                    left: e
                } : {}), {
                    duration: u.animateDuration,
                    easing: u.animateEasing,
                    step: function() {
                        var u = {
                            width: parseInt(i.element.css("width"), 10),
                            height: parseInt(i.element.css("height"), 10),
                            top: parseInt(i.element.css("top"), 10),
                            left: parseInt(i.element.css("left"), 10)
                        };
                        r && r.length && n(r[0]).css({
                            width: u.width,
                            height: u.height
                        });
                        i._updateCache(u);
                        i._propagate("resize", t)
                    }
                })
            }
        });
        n.ui.plugin.add("resizable", "containment", {
            start: function() {
                var r, f, e, o, s, h, c, t = n(this).resizable("instance"),
                    l = t.options,
                    a = t.element,
                    u = l.containment,
                    i = u instanceof n ? u.get(0) : /parent/.test(u) ? a.parent().get(0) : u;
                i && (t.containerElement = n(i), /document/.test(u) || u === document ? (t.containerOffset = {
                    left: 0,
                    top: 0
                }, t.containerPosition = {
                    left: 0,
                    top: 0
                }, t.parentData = {
                    element: n(document),
                    left: 0,
                    top: 0,
                    width: n(document).width(),
                    height: n(document).height() || document.body.parentNode.scrollHeight
                }) : (r = n(i), f = [], n(["Top", "Right", "Left", "Bottom"]).each(function(n, i) {
                    f[n] = t._num(r.css("padding" + i))
                }), t.containerOffset = r.offset(), t.containerPosition = r.position(), t.containerSize = {
                    height: r.innerHeight() - f[3],
                    width: r.innerWidth() - f[1]
                }, e = t.containerOffset, o = t.containerSize.height, s = t.containerSize.width, h = t._hasScroll(i, "left") ? i.scrollWidth : s, c = t._hasScroll(i) ? i.scrollHeight : o, t.parentData = {
                    element: i,
                    left: e.left,
                    top: e.top,
                    width: h,
                    height: c
                }))
            },
            resize: function(t) {
                var o, s, h, c, i = n(this).resizable("instance"),
                    v = i.options,
                    r = i.containerOffset,
                    l = i.position,
                    f = i._aspectRatio || t.shiftKey,
                    e = {
                        top: 0,
                        left: 0
                    },
                    a = i.containerElement,
                    u = !0;
                a[0] !== document && /static/.test(a.css("position")) && (e = r);
                l.left < (i._helper ? r.left : 0) && (i.size.width = i.size.width + (i._helper ? i.position.left - r.left : i.position.left - e.left), f && (i.size.height = i.size.width / i.aspectRatio, u = !1), i.position.left = v.helper ? r.left : 0);
                l.top < (i._helper ? r.top : 0) && (i.size.height = i.size.height + (i._helper ? i.position.top - r.top : i.position.top), f && (i.size.width = i.size.height * i.aspectRatio, u = !1), i.position.top = i._helper ? r.top : 0);
                h = i.containerElement.get(0) === i.element.parent().get(0);
                c = /relative|absolute/.test(i.containerElement.css("position"));
                h && c ? (i.offset.left = i.parentData.left + i.position.left, i.offset.top = i.parentData.top + i.position.top) : (i.offset.left = i.element.offset().left, i.offset.top = i.element.offset().top);
                o = Math.abs(i.sizeDiff.width + (i._helper ? i.offset.left - e.left : i.offset.left - r.left));
                s = Math.abs(i.sizeDiff.height + (i._helper ? i.offset.top - e.top : i.offset.top - r.top));
                o + i.size.width >= i.parentData.width && (i.size.width = i.parentData.width - o, f && (i.size.height = i.size.width / i.aspectRatio, u = !1));
                s + i.size.height >= i.parentData.height && (i.size.height = i.parentData.height - s, f && (i.size.width = i.size.height * i.aspectRatio, u = !1));
                u || (i.position.left = i.prevPosition.left, i.position.top = i.prevPosition.top, i.size.width = i.prevSize.width, i.size.height = i.prevSize.height)
            },
            stop: function() {
                var t = n(this).resizable("instance"),
                    r = t.options,
                    u = t.containerOffset,
                    f = t.containerPosition,
                    e = t.containerElement,
                    i = n(t.helper),
                    o = i.offset(),
                    s = i.outerWidth() - t.sizeDiff.width,
                    h = i.outerHeight() - t.sizeDiff.height;
                t._helper && !r.animate && /relative/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                });
                t._helper && !r.animate && /static/.test(e.css("position")) && n(this).css({
                    left: o.left - f.left - u.left,
                    width: s,
                    height: h
                })
            }
        });
        n.ui.plugin.add("resizable", "alsoResize", {
            start: function() {
                var t = n(this).resizable("instance"),
                    i = t.options;
                n(i.alsoResize).each(function() {
                    var t = n(this);
                    t.data("ui-resizable-alsoresize", {
                        width: parseInt(t.width(), 10),
                        height: parseInt(t.height(), 10),
                        left: parseInt(t.css("left"), 10),
                        top: parseInt(t.css("top"), 10)
                    })
                })
            },
            resize: function(t, i) {
                var r = n(this).resizable("instance"),
                    e = r.options,
                    u = r.originalSize,
                    f = r.originalPosition,
                    o = {
                        height: r.size.height - u.height || 0,
                        width: r.size.width - u.width || 0,
                        top: r.position.top - f.top || 0,
                        left: r.position.left - f.left || 0
                    };
                n(e.alsoResize).each(function() {
                    var t = n(this),
                        u = n(this).data("ui-resizable-alsoresize"),
                        r = {},
                        f = t.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    n.each(f, function(n, t) {
                        var i = (u[t] || 0) + (o[t] || 0);
                        i && i >= 0 && (r[t] = i || null)
                    });
                    t.css(r)
                })
            },
            stop: function() {
                n(this).removeData("resizable-alsoresize")
            }
        });
        n.ui.plugin.add("resizable", "ghost", {
            start: function() {
                var t = n(this).resizable("instance"),
                    i = t.options,
                    r = t.size;
                t.ghost = t.originalElement.clone();
                t.ghost.css({
                    opacity: .25,
                    display: "block",
                    position: "relative",
                    height: r.height,
                    width: r.width,
                    margin: 0,
                    left: 0,
                    top: 0
                }).addClass("ui-resizable-ghost").addClass(typeof i.ghost == "string" ? i.ghost : "");
                t.ghost.appendTo(t.helper)
            },
            resize: function() {
                var t = n(this).resizable("instance");
                t.ghost && t.ghost.css({
                    position: "relative",
                    height: t.size.height,
                    width: t.size.width
                })
            },
            stop: function() {
                var t = n(this).resizable("instance");
                t.ghost && t.helper && t.helper.get(0).removeChild(t.ghost.get(0))
            }
        });
        n.ui.plugin.add("resizable", "grid", {
            resize: function() {
                var h, t = n(this).resizable("instance"),
                    i = t.options,
                    y = t.size,
                    o = t.originalSize,
                    s = t.originalPosition,
                    c = t.axis,
                    l = typeof i.grid == "number" ? [i.grid, i.grid] : i.grid,
                    f = l[0] || 1,
                    e = l[1] || 1,
                    a = Math.round((y.width - o.width) / f) * f,
                    v = Math.round((y.height - o.height) / e) * e,
                    r = o.width + a,
                    u = o.height + v,
                    p = i.maxWidth && i.maxWidth < r,
                    w = i.maxHeight && i.maxHeight < u,
                    b = i.minWidth && i.minWidth > r,
                    k = i.minHeight && i.minHeight > u;
                i.grid = l;
                b && (r += f);
                k && (u += e);
                p && (r -= f);
                w && (u -= e);
                /^(se|s|e)$/.test(c) ? (t.size.width = r, t.size.height = u) : /^(ne)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.top = s.top - v) : /^(sw)$/.test(c) ? (t.size.width = r, t.size.height = u, t.position.left = s.left - a) : ((u - e <= 0 || r - f <= 0) && (h = t._getPaddingPlusBorderDimensions(this)), u - e > 0 ? (t.size.height = u, t.position.top = s.top - v) : (u = e - h.height, t.size.height = u, t.position.top = s.top + o.height - u), r - f > 0 ? (t.size.width = r, t.position.left = s.left - a) : (r = f - h.width, t.size.width = r, t.position.left = s.left + o.width - r))
            }
        });
        ut = n.ui.resizable;
        ft = n.widget("ui.dialog", {
            version: "1.11.4",
            options: {
                appendTo: "body",
                autoOpen: !0,
                buttons: [],
                closeOnEscape: !0,
                closeText: "Close",
                dialogClass: "",
                draggable: !0,
                hide: null,
                height: "auto",
                maxHeight: null,
                maxWidth: null,
                minHeight: 150,
                minWidth: 150,
                modal: !1,
                position: {
                    my: "center",
                    at: "center",
                    of: window,
                    collision: "fit",
                    using: function(t) {
                        var i = n(this).css(t).offset().top;
                        i < 0 && n(this).css("top", t.top - i)
                    }
                },
                resizable: !0,
                show: null,
                title: null,
                width: 300,
                beforeClose: null,
                close: null,
                drag: null,
                dragStart: null,
                dragStop: null,
                focus: null,
                open: null,
                resize: null,
                resizeStart: null,
                resizeStop: null
            },
            sizeRelatedOptions: {
                buttons: !0,
                height: !0,
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0,
                width: !0
            },
            resizableRelatedOptions: {
                maxHeight: !0,
                maxWidth: !0,
                minHeight: !0,
                minWidth: !0
            },
            _create: function() {
                this.originalCss = {
                    display: this.element[0].style.display,
                    width: this.element[0].style.width,
                    minHeight: this.element[0].style.minHeight,
                    maxHeight: this.element[0].style.maxHeight,
                    height: this.element[0].style.height
                };
                this.originalPosition = {
                    parent: this.element.parent(),
                    index: this.element.parent().children().index(this.element)
                };
                this.originalTitle = this.element.attr("title");
                this.options.title = this.options.title || this.originalTitle;
                this._createWrapper();
                this.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(this.uiDialog);
                this._createTitlebar();
                this._createButtonPane();
                this.options.draggable && n.fn.draggable && this._makeDraggable();
                this.options.resizable && n.fn.resizable && this._makeResizable();
                this._isOpen = !1;
                this._trackFocus()
            },
            _init: function() {
                this.options.autoOpen && this.open()
            },
            _appendTo: function() {
                var t = this.options.appendTo;
                return t && (t.jquery || t.nodeType) ? n(t) : this.document.find(t || "body").eq(0)
            },
            _destroy: function() {
                var n, t = this.originalPosition;
                this._untrackInstance();
                this._destroyOverlay();
                this.element.removeUniqueId().removeClass("ui-dialog-content ui-widget-content").css(this.originalCss).detach();
                this.uiDialog.stop(!0, !0).remove();
                this.originalTitle && this.element.attr("title", this.originalTitle);
                n = t.parent.children().eq(t.index);
                n.length && n[0] !== this.element[0] ? n.before(this.element) : t.parent.append(this.element)
            },
            widget: function() {
                return this.uiDialog
            },
            disable: n.noop,
            enable: n.noop,
            close: function(t) {
                var i, r = this;
                if (this._isOpen && this._trigger("beforeClose", t) !== !1) {
                    if (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), !this.opener.filter(":focusable").focus().length) try {
                        i = this.document[0].activeElement;
                        i && i.nodeName.toLowerCase() !== "body" && n(i).blur()
                    } catch (u) {}
                    this._hide(this.uiDialog, this.options.hide, function() {
                        r._trigger("close", t)
                    })
                }
            },
            isOpen: function() {
                return this._isOpen
            },
            moveToTop: function() {
                this._moveToTop()
            },
            _moveToTop: function(t, i) {
                var r = !1,
                    f = this.uiDialog.siblings(".ui-front:visible").map(function() {
                        return +n(this).css("z-index")
                    }).get(),
                    u = Math.max.apply(null, f);
                return u >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", u + 1), r = !0), r && !i && this._trigger("focus", t), r
            },
            open: function() {
                var t = this;
                if (this._isOpen) {
                    this._moveToTop() && this._focusTabbable();
                    return
                }
                this._isOpen = !0;
                this.opener = n(this.document[0].activeElement);
                this._size();
                this._position();
                this._createOverlay();
                this._moveToTop(null, !0);
                this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1);
                this._show(this.uiDialog, this.options.show, function() {
                    t._focusTabbable();
                    t._trigger("focus")
                });
                this._makeFocusTarget();
                this._trigger("open")
            },
            _focusTabbable: function() {
                var n = this._focusedElement;
                n || (n = this.element.find("[autofocus]"));
                n.length || (n = this.element.find(":tabbable"));
                n.length || (n = this.uiDialogButtonPane.find(":tabbable"));
                n.length || (n = this.uiDialogTitlebarClose.filter(":tabbable"));
                n.length || (n = this.uiDialog);
                n.eq(0).focus()
            },
            _keepFocus: function(t) {
                function i() {
                    var t = this.document[0].activeElement,
                        i = this.uiDialog[0] === t || n.contains(this.uiDialog[0], t);
                    i || this._focusTabbable()
                }
                t.preventDefault();
                i.call(this);
                this._delay(i)
            },
            _createWrapper: function() {
                this.uiDialog = n("<div>").addClass("ui-dialog ui-widget ui-widget-content ui-corner-all ui-front " + this.options.dialogClass).hide().attr({
                    tabIndex: -1,
                    role: "dialog"
                }).appendTo(this._appendTo());
                this._on(this.uiDialog, {
                    keydown: function(t) {
                        if (this.options.closeOnEscape && !t.isDefaultPrevented() && t.keyCode && t.keyCode === n.ui.keyCode.ESCAPE) {
                            t.preventDefault();
                            this.close(t);
                            return
                        }
                        if (t.keyCode === n.ui.keyCode.TAB && !t.isDefaultPrevented()) {
                            var i = this.uiDialog.find(":tabbable"),
                                r = i.filter(":first"),
                                u = i.filter(":last");
                            t.target !== u[0] && t.target !== this.uiDialog[0] || t.shiftKey ? (t.target === r[0] || t.target === this.uiDialog[0]) && t.shiftKey && (this._delay(function() {
                                u.focus()
                            }), t.preventDefault()) : (this._delay(function() {
                                r.focus()
                            }), t.preventDefault())
                        }
                    },
                    mousedown: function(n) {
                        this._moveToTop(n) && this._focusTabbable()
                    }
                });
                this.element.find("[aria-describedby]").length || this.uiDialog.attr({
                    "aria-describedby": this.element.uniqueId().attr("id")
                })
            },
            _createTitlebar: function() {
                var t;
                this.uiDialogTitlebar = n("<div>").addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(this.uiDialog);
                this._on(this.uiDialogTitlebar, {
                    mousedown: function(t) {
                        n(t.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.focus()
                    }
                });
                this.uiDialogTitlebarClose = n("<button type='button'><\/button>").button({
                    label: this.options.closeText,
                    icons: {
                        primary: "ui-icon-closethick"
                    },
                    text: !1
                }).addClass("ui-dialog-titlebar-close").appendTo(this.uiDialogTitlebar);
                this._on(this.uiDialogTitlebarClose, {
                    click: function(n) {
                        n.preventDefault();
                        this.close(n)
                    }
                });
                t = n("<span>").uniqueId().addClass("ui-dialog-title").prependTo(this.uiDialogTitlebar);
                this._title(t);
                this.uiDialog.attr({
                    "aria-labelledby": t.attr("id")
                })
            },
            _title: function(n) {
                this.options.title || n.html("&#160;");
                n.text(this.options.title)
            },
            _createButtonPane: function() {
                this.uiDialogButtonPane = n("<div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix");
                this.uiButtonSet = n("<div>").addClass("ui-dialog-buttonset").appendTo(this.uiDialogButtonPane);
                this._createButtons()
            },
            _createButtons: function() {
                var i = this,
                    t = this.options.buttons;
                if (this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), n.isEmptyObject(t) || n.isArray(t) && !t.length) {
                    this.uiDialog.removeClass("ui-dialog-buttons");
                    return
                }
                n.each(t, function(t, r) {
                    var u, f;
                    r = n.isFunction(r) ? {
                        click: r,
                        text: t
                    } : r;
                    r = n.extend({
                        type: "button"
                    }, r);
                    u = r.click;
                    r.click = function() {
                        u.apply(i.element[0], arguments)
                    };
                    f = {
                        icons: r.icons,
                        text: r.showText
                    };
                    delete r.icons;
                    delete r.showText;
                    n("<button><\/button>", r).button(f).appendTo(i.uiButtonSet)
                });
                this.uiDialog.addClass("ui-dialog-buttons");
                this.uiDialogButtonPane.appendTo(this.uiDialog)
            },
            _makeDraggable: function() {
                function i(n) {
                    return {
                        position: n.position,
                        offset: n.offset
                    }
                }
                var t = this,
                    r = this.options;
                this.uiDialog.draggable({
                    cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                    handle: ".ui-dialog-titlebar",
                    containment: "document",
                    start: function(r, u) {
                        n(this).addClass("ui-dialog-dragging");
                        t._blockFrames();
                        t._trigger("dragStart", r, i(u))
                    },
                    drag: function(n, r) {
                        t._trigger("drag", n, i(r))
                    },
                    stop: function(u, f) {
                        var e = f.offset.left - t.document.scrollLeft(),
                            o = f.offset.top - t.document.scrollTop();
                        r.position = {
                            my: "left top",
                            at: "left" + (e >= 0 ? "+" : "") + e + " top" + (o >= 0 ? "+" : "") + o,
                            of: t.window
                        };
                        n(this).removeClass("ui-dialog-dragging");
                        t._unblockFrames();
                        t._trigger("dragStop", u, i(f))
                    }
                })
            },
            _makeResizable: function() {
                function r(n) {
                    return {
                        originalPosition: n.originalPosition,
                        originalSize: n.originalSize,
                        position: n.position,
                        size: n.size
                    }
                }
                var t = this,
                    i = this.options,
                    u = i.resizable,
                    f = this.uiDialog.css("position"),
                    e = typeof u == "string" ? u : "n,e,s,w,se,sw,ne,nw";
                this.uiDialog.resizable({
                    cancel: ".ui-dialog-content",
                    containment: "document",
                    alsoResize: this.element,
                    maxWidth: i.maxWidth,
                    maxHeight: i.maxHeight,
                    minWidth: i.minWidth,
                    minHeight: this._minHeight(),
                    handles: e,
                    start: function(i, u) {
                        n(this).addClass("ui-dialog-resizing");
                        t._blockFrames();
                        t._trigger("resizeStart", i, r(u))
                    },
                    resize: function(n, i) {
                        t._trigger("resize", n, r(i))
                    },
                    stop: function(u, f) {
                        var e = t.uiDialog.offset(),
                            o = e.left - t.document.scrollLeft(),
                            s = e.top - t.document.scrollTop();
                        i.height = t.uiDialog.height();
                        i.width = t.uiDialog.width();
                        i.position = {
                            my: "left top",
                            at: "left" + (o >= 0 ? "+" : "") + o + " top" + (s >= 0 ? "+" : "") + s,
                            of: t.window
                        };
                        n(this).removeClass("ui-dialog-resizing");
                        t._unblockFrames();
                        t._trigger("resizeStop", u, r(f))
                    }
                }).css("position", f)
            },
            _trackFocus: function() {
                this._on(this.widget(), {
                    focusin: function(t) {
                        this._makeFocusTarget();
                        this._focusedElement = n(t.target)
                    }
                })
            },
            _makeFocusTarget: function() {
                this._untrackInstance();
                this._trackingInstances().unshift(this)
            },
            _untrackInstance: function() {
                var t = this._trackingInstances(),
                    i = n.inArray(this, t);
                i !== -1 && t.splice(i, 1)
            },
            _trackingInstances: function() {
                var n = this.document.data("ui-dialog-instances");
                return n || (n = [], this.document.data("ui-dialog-instances", n)), n
            },
            _minHeight: function() {
                var n = this.options;
                return n.height === "auto" ? n.minHeight : Math.min(n.minHeight, n.height)
            },
            _position: function() {
                var n = this.uiDialog.is(":visible");
                n || this.uiDialog.show();
                this.uiDialog.position(this.options.position);
                n || this.uiDialog.hide()
            },
            _setOptions: function(t) {
                var i = this,
                    r = !1,
                    u = {};
                n.each(t, function(n, t) {
                    i._setOption(n, t);
                    n in i.sizeRelatedOptions && (r = !0);
                    n in i.resizableRelatedOptions && (u[n] = t)
                });
                r && (this._size(), this._position());
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", u)
            },
            _setOption: function(n, t) {
                var u, r, i = this.uiDialog;
                (n === "dialogClass" && i.removeClass(this.options.dialogClass).addClass(t), n !== "disabled") && (this._super(n, t), n === "appendTo" && this.uiDialog.appendTo(this._appendTo()), n === "buttons" && this._createButtons(), n === "closeText" && this.uiDialogTitlebarClose.button({
                    label: "" + t
                }), n === "draggable" && (u = i.is(":data(ui-draggable)"), u && !t && i.draggable("destroy"), !u && t && this._makeDraggable()), n === "position" && this._position(), n === "resizable" && (r = i.is(":data(ui-resizable)"), r && !t && i.resizable("destroy"), r && typeof t == "string" && i.resizable("option", "handles", t), r || t === !1 || this._makeResizable()), n === "title" && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
            },
            _size: function() {
                var t, i, r, n = this.options;
                this.element.show().css({
                    width: "auto",
                    minHeight: 0,
                    maxHeight: "none",
                    height: 0
                });
                n.minWidth > n.width && (n.width = n.minWidth);
                t = this.uiDialog.css({
                    height: "auto",
                    width: n.width
                }).outerHeight();
                i = Math.max(0, n.minHeight - t);
                r = typeof n.maxHeight == "number" ? Math.max(0, n.maxHeight - t) : "none";
                n.height === "auto" ? this.element.css({
                    minHeight: i,
                    maxHeight: r,
                    height: "auto"
                }) : this.element.height(Math.max(0, n.height - t));
                this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
            },
            _blockFrames: function() {
                this.iframeBlocks = this.document.find("iframe").map(function() {
                    var t = n(this);
                    return n("<div>").css({
                        position: "absolute",
                        width: t.outerWidth(),
                        height: t.outerHeight()
                    }).appendTo(t.parent()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _allowInteraction: function(t) {
                return n(t.target).closest(".ui-dialog").length ? !0 : !!n(t.target).closest(".ui-datepicker").length
            },
            _createOverlay: function() {
                if (this.options.modal) {
                    var t = !0;
                    this._delay(function() {
                        t = !1
                    });
                    this.document.data("ui-dialog-overlays") || this._on(this.document, {
                        focusin: function(n) {
                            t || this._allowInteraction(n) || (n.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                        }
                    });
                    this.overlay = n("<div>").addClass("ui-widget-overlay ui-front").appendTo(this._appendTo());
                    this._on(this.overlay, {
                        mousedown: "_keepFocus"
                    });
                    this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
                }
            },
            _destroyOverlay: function() {
                if (this.options.modal && this.overlay) {
                    var n = this.document.data("ui-dialog-overlays") - 1;
                    n ? this.document.data("ui-dialog-overlays", n) : this.document.unbind("focusin").removeData("ui-dialog-overlays");
                    this.overlay.remove();
                    this.overlay = null
                }
            }
        });
        n.widget("ui.droppable", {
            version: "1.11.4",
            widgetEventPrefix: "drop",
            options: {
                accept: "*",
                activeClass: !1,
                addClasses: !0,
                greedy: !1,
                hoverClass: !1,
                scope: "default",
                tolerance: "intersect",
                activate: null,
                deactivate: null,
                drop: null,
                out: null,
                over: null
            },
            _create: function() {
                var t, i = this.options,
                    r = i.accept;
                this.isover = !1;
                this.isout = !0;
                this.accept = n.isFunction(r) ? r : function(n) {
                    return n.is(r)
                };
                this.proportions = function() {
                    if (arguments.length) t = arguments[0];
                    else return t ? t : t = {
                        width: this.element[0].offsetWidth,
                        height: this.element[0].offsetHeight
                    }
                };
                this._addToManager(i.scope);
                i.addClasses && this.element.addClass("ui-droppable")
            },
            _addToManager: function(t) {
                n.ui.ddmanager.droppables[t] = n.ui.ddmanager.droppables[t] || [];
                n.ui.ddmanager.droppables[t].push(this)
            },
            _splice: function(n) {
                for (var t = 0; t < n.length; t++) n[t] === this && n.splice(t, 1)
            },
            _destroy: function() {
                var t = n.ui.ddmanager.droppables[this.options.scope];
                this._splice(t);
                this.element.removeClass("ui-droppable ui-droppable-disabled")
            },
            _setOption: function(t, i) {
                if (t === "accept") this.accept = n.isFunction(i) ? i : function(n) {
                    return n.is(i)
                };
                else if (t === "scope") {
                    var r = n.ui.ddmanager.droppables[this.options.scope];
                    this._splice(r);
                    this._addToManager(i)
                }
                this._super(t, i)
            },
            _activate: function(t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.addClass(this.options.activeClass);
                i && this._trigger("activate", t, this.ui(i))
            },
            _deactivate: function(t) {
                var i = n.ui.ddmanager.current;
                this.options.activeClass && this.element.removeClass(this.options.activeClass);
                i && this._trigger("deactivate", t, this.ui(i))
            },
            _over: function(t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", t, this.ui(i)))
            },
            _out: function(t) {
                var i = n.ui.ddmanager.current;
                i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", t, this.ui(i)))
            },
            _drop: function(t, i) {
                var r = i || n.ui.ddmanager.current,
                    u = !1;
                return !r || (r.currentItem || r.element)[0] === this.element[0] ? !1 : (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
                    var i = n(this).droppable("instance");
                    if (i.options.greedy && !i.options.disabled && i.options.scope === r.options.scope && i.accept.call(i.element[0], r.currentItem || r.element) && n.ui.intersect(r, n.extend(i, {
                            offset: i.element.offset()
                        }), i.options.tolerance, t)) return u = !0, !1
                }), u) ? !1 : this.accept.call(this.element[0], r.currentItem || r.element) ? (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", t, this.ui(r)), this.element) : !1
            },
            ui: function(n) {
                return {
                    draggable: n.currentItem || n.element,
                    helper: n.helper,
                    position: n.position,
                    offset: n.positionAbs
                }
            }
        });
        n.ui.intersect = function() {
            function n(n, t, i) {
                return n >= t && n < t + i
            }
            return function(t, i, r, u) {
                if (!i.offset) return !1;
                var o = (t.positionAbs || t.position.absolute).left + t.margins.left,
                    s = (t.positionAbs || t.position.absolute).top + t.margins.top,
                    h = o + t.helperProportions.width,
                    c = s + t.helperProportions.height,
                    f = i.offset.left,
                    e = i.offset.top,
                    l = f + i.proportions().width,
                    a = e + i.proportions().height;
                switch (r) {
                    case "fit":
                        return f <= o && h <= l && e <= s && c <= a;
                    case "intersect":
                        return f < o + t.helperProportions.width / 2 && h - t.helperProportions.width / 2 < l && e < s + t.helperProportions.height / 2 && c - t.helperProportions.height / 2 < a;
                    case "pointer":
                        return n(u.pageY, e, i.proportions().height) && n(u.pageX, f, i.proportions().width);
                    case "touch":
                        return (s >= e && s <= a || c >= e && c <= a || s < e && c > a) && (o >= f && o <= l || h >= f && h <= l || o < f && h > l);
                    default:
                        return !1
                }
            }
        }();
        n.ui.ddmanager = {
            current: null,
            droppables: {
                "default": []
            },
            prepareOffsets: function(t, i) {
                var r, f, u = n.ui.ddmanager.droppables[t.options.scope] || [],
                    o = i ? i.type : null,
                    e = (t.currentItem || t.element).find(":data(ui-droppable)").addBack();
                n: for (r = 0; r < u.length; r++)
                    if (!u[r].options.disabled && (!t || u[r].accept.call(u[r].element[0], t.currentItem || t.element))) {
                        for (f = 0; f < e.length; f++)
                            if (e[f] === u[r].element[0]) {
                                u[r].proportions().height = 0;
                                continue n
                            }(u[r].visible = u[r].element.css("display") !== "none", u[r].visible) && (o === "mousedown" && u[r]._activate.call(u[r], i), u[r].offset = u[r].element.offset(), u[r].proportions({
                                width: u[r].element[0].offsetWidth,
                                height: u[r].element[0].offsetHeight
                            }))
                    }
            },
            drop: function(t, i) {
                var r = !1;
                return n.each((n.ui.ddmanager.droppables[t.options.scope] || []).slice(), function() {
                    this.options && (!this.options.disabled && this.visible && n.ui.intersect(t, this, this.options.tolerance, i) && (r = this._drop.call(this, i) || r), !this.options.disabled && this.visible && this.accept.call(this.element[0], t.currentItem || t.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
                }), r
            },
            dragStart: function(t, i) {
                t.element.parentsUntil("body").bind("scroll.droppable", function() {
                    t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
                })
            },
            drag: function(t, i) {
                t.options.refreshPositions && n.ui.ddmanager.prepareOffsets(t, i);
                n.each(n.ui.ddmanager.droppables[t.options.scope] || [], function() {
                    if (!this.options.disabled && !this.greedyChild && this.visible) {
                        var r, e, f, o = n.ui.intersect(t, this, this.options.tolerance, i),
                            u = !o && this.isover ? "isout" : o && !this.isover ? "isover" : null;
                        u && (this.options.greedy && (e = this.options.scope, f = this.element.parents(":data(ui-droppable)").filter(function() {
                            return n(this).droppable("instance").options.scope === e
                        }), f.length && (r = n(f[0]).droppable("instance"), r.greedyChild = u === "isover")), r && u === "isover" && (r.isover = !1, r.isout = !0, r._out.call(r, i)), this[u] = !0, this[u === "isout" ? "isover" : "isout"] = !1, this[u === "isover" ? "_over" : "_out"].call(this, i), r && u === "isout" && (r.isout = !1, r.isover = !0, r._over.call(r, i)))
                    }
                })
            },
            dragStop: function(t, i) {
                t.element.parentsUntil("body").unbind("scroll.droppable");
                t.options.refreshPositions || n.ui.ddmanager.prepareOffsets(t, i)
            }
        };
        var ct = n.ui.droppable,
            w = "ui-effects-",
            b = n;
        n.effects = {
                effect: {}
            },
            function(n, t) {
                function e(n, t, i) {
                    var r = s[t.type] || {};
                    return n == null ? i || !t.def ? null : t.def : (n = r.floor ? ~~n : parseFloat(n), isNaN(n)) ? t.def : r.mod ? (n + r.mod) % r.mod : 0 > n ? 0 : r.max < n ? r.max : n
                }

                function l(t) {
                    var e = i(),
                        o = e._rgba = [];
                    return (t = t.toLowerCase(), r(v, function(n, i) {
                        var r, s = i.re.exec(t),
                            h = s && i.parse(s),
                            f = i.space || "rgba";
                        if (h) return r = e[f](h), e[u[f].cache] = r[u[f].cache], o = e._rgba = r._rgba, !1
                    }), o.length) ? (o.join() === "0,0,0,0" && n.extend(o, f.transparent), e) : f[t]
                }

                function o(n, t, i) {
                    return (i = (i + 1) % 1, i * 6 < 1) ? n + (t - n) * i * 6 : i * 2 < 1 ? t : i * 3 < 2 ? n + (t - n) * (2 / 3 - i) * 6 : n
                }
                var a = /^([\-+])=\s*(\d+\.?\d*)/,
                    v = [{
                        re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(n) {
                            return [n[1], n[2], n[3], n[4]]
                        }
                    }, {
                        re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        parse: function(n) {
                            return [n[1] * 2.55, n[2] * 2.55, n[3] * 2.55, n[4]]
                        }
                    }, {
                        re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
                        parse: function(n) {
                            return [parseInt(n[1], 16), parseInt(n[2], 16), parseInt(n[3], 16)]
                        }
                    }, {
                        re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
                        parse: function(n) {
                            return [parseInt(n[1] + n[1], 16), parseInt(n[2] + n[2], 16), parseInt(n[3] + n[3], 16)]
                        }
                    }, {
                        re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                        space: "hsla",
                        parse: function(n) {
                            return [n[1], n[2] / 100, n[3] / 100, n[4]]
                        }
                    }],
                    i = n.Color = function(t, i, r, u) {
                        return new n.Color.fn.parse(t, i, r, u)
                    },
                    u = {
                        rgba: {
                            props: {
                                red: {
                                    idx: 0,
                                    type: "byte"
                                },
                                green: {
                                    idx: 1,
                                    type: "byte"
                                },
                                blue: {
                                    idx: 2,
                                    type: "byte"
                                }
                            }
                        },
                        hsla: {
                            props: {
                                hue: {
                                    idx: 0,
                                    type: "degrees"
                                },
                                saturation: {
                                    idx: 1,
                                    type: "percent"
                                },
                                lightness: {
                                    idx: 2,
                                    type: "percent"
                                }
                            }
                        }
                    },
                    s = {
                        byte: {
                            floor: !0,
                            max: 255
                        },
                        percent: {
                            max: 1
                        },
                        degrees: {
                            mod: 360,
                            floor: !0
                        }
                    },
                    h = i.support = {},
                    c = n("<p>")[0],
                    f, r = n.each;
                c.style.cssText = "background-color:rgba(1,1,1,.5)";
                h.rgba = c.style.backgroundColor.indexOf("rgba") > -1;
                r(u, function(n, t) {
                    t.cache = "_" + n;
                    t.props.alpha = {
                        idx: 3,
                        type: "percent",
                        def: 1
                    }
                });
                i.fn = n.extend(i.prototype, {
                    parse: function(o, s, h, c) {
                        if (o === t) return this._rgba = [null, null, null, null], this;
                        (o.jquery || o.nodeType) && (o = n(o).css(s), s = t);
                        var a = this,
                            v = n.type(o),
                            y = this._rgba = [];
                        return (s !== t && (o = [o, s, h, c], v = "array"), v === "string") ? this.parse(l(o) || f._default) : v === "array" ? (r(u.rgba.props, function(n, t) {
                            y[t.idx] = e(o[t.idx], t)
                        }), this) : v === "object" ? (o instanceof i ? r(u, function(n, t) {
                            o[t.cache] && (a[t.cache] = o[t.cache].slice())
                        }) : r(u, function(t, i) {
                            var u = i.cache;
                            r(i.props, function(n, t) {
                                if (!a[u] && i.to) {
                                    if (n === "alpha" || o[n] == null) return;
                                    a[u] = i.to(a._rgba)
                                }
                                a[u][t.idx] = e(o[n], t, !0)
                            });
                            a[u] && n.inArray(null, a[u].slice(0, 3)) < 0 && (a[u][3] = 1, i.from && (a._rgba = i.from(a[u])))
                        }), this) : void 0
                    },
                    is: function(n) {
                        var e = i(n),
                            t = !0,
                            f = this;
                        return r(u, function(n, i) {
                            var o, u = e[i.cache];
                            return u && (o = f[i.cache] || i.to && i.to(f._rgba) || [], r(i.props, function(n, i) {
                                if (u[i.idx] != null) return t = u[i.idx] === o[i.idx]
                            })), t
                        }), t
                    },
                    _space: function() {
                        var n = [],
                            t = this;
                        return r(u, function(i, r) {
                            t[r.cache] && n.push(i)
                        }), n.pop()
                    },
                    transition: function(n, t) {
                        var f = i(n),
                            c = f._space(),
                            o = u[c],
                            l = this.alpha() === 0 ? i("transparent") : this,
                            a = l[o.cache] || o.to(l._rgba),
                            h = a.slice();
                        return f = f[o.cache], r(o.props, function(n, i) {
                            var c = i.idx,
                                r = a[c],
                                u = f[c],
                                o = s[i.type] || {};
                            u !== null && (r === null ? h[c] = u : (o.mod && (u - r > o.mod / 2 ? r += o.mod : r - u > o.mod / 2 && (r -= o.mod)), h[c] = e((u - r) * t + r, i)))
                        }), this[c](h)
                    },
                    blend: function(t) {
                        if (this._rgba[3] === 1) return this;
                        var r = this._rgba.slice(),
                            u = r.pop(),
                            f = i(t)._rgba;
                        return i(n.map(r, function(n, t) {
                            return (1 - u) * f[t] + u * n
                        }))
                    },
                    toRgbaString: function() {
                        var i = "rgba(",
                            t = n.map(this._rgba, function(n, t) {
                                return n == null ? t > 2 ? 1 : 0 : n
                            });
                        return t[3] === 1 && (t.pop(), i = "rgb("), i + t.join() + ")"
                    },
                    toHslaString: function() {
                        var i = "hsla(",
                            t = n.map(this.hsla(), function(n, t) {
                                return n == null && (n = t > 2 ? 1 : 0), t && t < 3 && (n = Math.round(n * 100) + "%"), n
                            });
                        return t[3] === 1 && (t.pop(), i = "hsl("), i + t.join() + ")"
                    },
                    toHexString: function(t) {
                        var i = this._rgba.slice(),
                            r = i.pop();
                        return t && i.push(~~(r * 255)), "#" + n.map(i, function(n) {
                            return n = (n || 0).toString(16), n.length === 1 ? "0" + n : n
                        }).join("")
                    },
                    toString: function() {
                        return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
                    }
                });
                i.fn.parse.prototype = i.fn;
                u.hsla.to = function(n) {
                    if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                    var i = n[0] / 255,
                        r = n[1] / 255,
                        f = n[2] / 255,
                        s = n[3],
                        u = Math.max(i, r, f),
                        e = Math.min(i, r, f),
                        t = u - e,
                        o = u + e,
                        h = o * .5,
                        c, l;
                    return c = e === u ? 0 : i === u ? 60 * (r - f) / t + 360 : r === u ? 60 * (f - i) / t + 120 : 60 * (i - r) / t + 240, l = t === 0 ? 0 : h <= .5 ? t / o : t / (2 - o), [Math.round(c) % 360, l, h, s == null ? 1 : s]
                };
                u.hsla.from = function(n) {
                    if (n[0] == null || n[1] == null || n[2] == null) return [null, null, null, n[3]];
                    var r = n[0] / 360,
                        u = n[1],
                        t = n[2],
                        e = n[3],
                        i = t <= .5 ? t * (1 + u) : t + u - t * u,
                        f = 2 * t - i;
                    return [Math.round(o(f, i, r + 1 / 3) * 255), Math.round(o(f, i, r) * 255), Math.round(o(f, i, r - 1 / 3) * 255), e]
                };
                r(u, function(u, f) {
                    var s = f.props,
                        o = f.cache,
                        h = f.to,
                        c = f.from;
                    i.fn[u] = function(u) {
                        if (h && !this[o] && (this[o] = h(this._rgba)), u === t) return this[o].slice();
                        var l, a = n.type(u),
                            v = a === "array" || a === "object" ? u : arguments,
                            f = this[o].slice();
                        return r(s, function(n, t) {
                            var i = v[a === "object" ? n : t.idx];
                            i == null && (i = f[t.idx]);
                            f[t.idx] = e(i, t)
                        }), c ? (l = i(c(f)), l[o] = f, l) : i(f)
                    };
                    r(s, function(t, r) {
                        i.fn[t] || (i.fn[t] = function(i) {
                            var f = n.type(i),
                                h = t === "alpha" ? this._hsla ? "hsla" : "rgba" : u,
                                o = this[h](),
                                s = o[r.idx],
                                e;
                            return f === "undefined" ? s : (f === "function" && (i = i.call(this, s), f = n.type(i)), i == null && r.empty) ? this : (f === "string" && (e = a.exec(i), e && (i = s + parseFloat(e[2]) * (e[1] === "+" ? 1 : -1))), o[r.idx] = i, this[h](o))
                        })
                    })
                });
                i.hook = function(t) {
                    var u = t.split(" ");
                    r(u, function(t, r) {
                        n.cssHooks[r] = {
                            set: function(t, u) {
                                var o, f, e = "";
                                if (u !== "transparent" && (n.type(u) !== "string" || (o = l(u)))) {
                                    if (u = i(o || u), !h.rgba && u._rgba[3] !== 1) {
                                        for (f = r === "backgroundColor" ? t.parentNode : t;
                                            (e === "" || e === "transparent") && f && f.style;) try {
                                            e = n.css(f, "backgroundColor");
                                            f = f.parentNode
                                        } catch (s) {}
                                        u = u.blend(e && e !== "transparent" ? e : "_default")
                                    }
                                    u = u.toRgbaString()
                                }
                                try {
                                    t.style[r] = u
                                } catch (s) {}
                            }
                        };
                        n.fx.step[r] = function(t) {
                            t.colorInit || (t.start = i(t.elem, r), t.end = i(t.end), t.colorInit = !0);
                            n.cssHooks[r].set(t.elem, t.start.transition(t.end, t.pos))
                        }
                    })
                };
                i.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor");
                n.cssHooks.borderColor = {
                    expand: function(n) {
                        var t = {};
                        return r(["Top", "Right", "Bottom", "Left"], function(i, r) {
                            t["border" + r + "Color"] = n
                        }), t
                    }
                };
                f = n.Color.names = {
                    aqua: "#00ffff",
                    black: "#000000",
                    blue: "#0000ff",
                    fuchsia: "#ff00ff",
                    gray: "#808080",
                    green: "#008000",
                    lime: "#00ff00",
                    maroon: "#800000",
                    navy: "#000080",
                    olive: "#808000",
                    purple: "#800080",
                    red: "#ff0000",
                    silver: "#c0c0c0",
                    teal: "#008080",
                    white: "#ffffff",
                    yellow: "#ffff00",
                    transparent: [null, null, null, 0],
                    _default: "#ffffff"
                }
            }(b),
            function() {
                function t(t) {
                    var r, u, i = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                        f = {};
                    if (i && i.length && i[0] && i[i[0]])
                        for (u = i.length; u--;) r = i[u], typeof i[r] == "string" && (f[n.camelCase(r)] = i[r]);
                    else
                        for (r in i) typeof i[r] == "string" && (f[r] = i[r]);
                    return f
                }

                function u(t, i) {
                    var e = {},
                        u, f;
                    for (u in i) f = i[u], t[u] !== f && (r[u] || (n.fx.step[u] || !isNaN(parseFloat(f))) && (e[u] = f));
                    return e
                }
                var i = ["add", "remove", "toggle"],
                    r = {
                        border: 1,
                        borderBottom: 1,
                        borderColor: 1,
                        borderLeft: 1,
                        borderRight: 1,
                        borderTop: 1,
                        borderWidth: 1,
                        margin: 1,
                        padding: 1
                    };
                n.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(t, i) {
                    n.fx.step[i] = function(n) {
                        (n.end === "none" || n.setAttr) && (n.pos !== 1 || n.setAttr) || (b.style(n.elem, i, n.end), n.setAttr = !0)
                    }
                });
                n.fn.addBack || (n.fn.addBack = function(n) {
                    return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
                });
                n.effects.animateClass = function(r, f, e, o) {
                    var s = n.speed(f, e, o);
                    return this.queue(function() {
                        var e = n(this),
                            h = e.attr("class") || "",
                            o, f = s.children ? e.find("*").addBack() : e;
                        f = f.map(function() {
                            var i = n(this);
                            return {
                                el: i,
                                start: t(this)
                            }
                        });
                        o = function() {
                            n.each(i, function(n, t) {
                                r[t] && e[t + "Class"](r[t])
                            })
                        };
                        o();
                        f = f.map(function() {
                            return this.end = t(this.el[0]), this.diff = u(this.start, this.end), this
                        });
                        e.attr("class", h);
                        f = f.map(function() {
                            var i = this,
                                t = n.Deferred(),
                                r = n.extend({}, s, {
                                    queue: !1,
                                    complete: function() {
                                        t.resolve(i)
                                    }
                                });
                            return this.el.animate(this.diff, r), t.promise()
                        });
                        n.when.apply(n, f.get()).done(function() {
                            o();
                            n.each(arguments, function() {
                                var t = this.el;
                                n.each(this.diff, function(n) {
                                    t.css(n, "")
                                })
                            });
                            s.complete.call(e[0])
                        })
                    })
                };
                n.fn.extend({
                    addClass: function(t) {
                        return function(i, r, u, f) {
                            return r ? n.effects.animateClass.call(this, {
                                add: i
                            }, r, u, f) : t.apply(this, arguments)
                        }
                    }(n.fn.addClass),
                    removeClass: function(t) {
                        return function(i, r, u, f) {
                            return arguments.length > 1 ? n.effects.animateClass.call(this, {
                                remove: i
                            }, r, u, f) : t.apply(this, arguments)
                        }
                    }(n.fn.removeClass),
                    toggleClass: function(t) {
                        return function(i, r, u, f, e) {
                            return typeof r == "boolean" || r === undefined ? u ? n.effects.animateClass.call(this, r ? {
                                add: i
                            } : {
                                remove: i
                            }, u, f, e) : t.apply(this, arguments) : n.effects.animateClass.call(this, {
                                toggle: i
                            }, r, u, f)
                        }
                    }(n.fn.toggleClass),
                    switchClass: function(t, i, r, u, f) {
                        return n.effects.animateClass.call(this, {
                            add: i,
                            remove: t
                        }, r, u, f)
                    }
                })
            }(),
            function() {
                function t(t, i, r, u) {
                    return n.isPlainObject(t) && (i = t, t = t.effect), t = {
                        effect: t
                    }, i == null && (i = {}), n.isFunction(i) && (u = i, r = null, i = {}), (typeof i == "number" || n.fx.speeds[i]) && (u = r, r = i, i = {}), n.isFunction(r) && (u = r, r = null), i && n.extend(t, i), r = r || i.duration, t.duration = n.fx.off ? 0 : typeof r == "number" ? r : r in n.fx.speeds ? n.fx.speeds[r] : n.fx.speeds._default, t.complete = u || i.complete, t
                }

                function i(t) {
                    return !t || typeof t == "number" || n.fx.speeds[t] ? !0 : typeof t == "string" && !n.effects.effect[t] ? !0 : n.isFunction(t) ? !0 : typeof t == "object" && !t.effect ? !0 : !1
                }
                n.extend(n.effects, {
                    version: "1.11.4",
                    save: function(n, t) {
                        for (var i = 0; i < t.length; i++) t[i] !== null && n.data(w + t[i], n[0].style[t[i]])
                    },
                    restore: function(n, t) {
                        for (var r, i = 0; i < t.length; i++) t[i] !== null && (r = n.data(w + t[i]), r === undefined && (r = ""), n.css(t[i], r))
                    },
                    setMode: function(n, t) {
                        return t === "toggle" && (t = n.is(":hidden") ? "show" : "hide"), t
                    },
                    getBaseline: function(n, t) {
                        var i, r;
                        switch (n[0]) {
                            case "top":
                                i = 0;
                                break;
                            case "middle":
                                i = .5;
                                break;
                            case "bottom":
                                i = 1;
                                break;
                            default:
                                i = n[0] / t.height
                        }
                        switch (n[1]) {
                            case "left":
                                r = 0;
                                break;
                            case "center":
                                r = .5;
                                break;
                            case "right":
                                r = 1;
                                break;
                            default:
                                r = n[1] / t.width
                        }
                        return {
                            x: r,
                            y: i
                        }
                    },
                    createWrapper: function(t) {
                        if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                        var i = {
                                width: t.outerWidth(!0),
                                height: t.outerHeight(!0),
                                float: t.css("float")
                            },
                            u = n("<div><\/div>").addClass("ui-effects-wrapper").css({
                                fontSize: "100%",
                                background: "transparent",
                                border: "none",
                                margin: 0,
                                padding: 0
                            }),
                            f = {
                                width: t.width(),
                                height: t.height()
                            },
                            r = document.activeElement;
                        try {
                            r.id
                        } catch (e) {
                            r = document.body
                        }
                        return t.wrap(u), (t[0] === r || n.contains(t[0], r)) && n(r).focus(), u = t.parent(), t.css("position") === "static" ? (u.css({
                            position: "relative"
                        }), t.css({
                            position: "relative"
                        })) : (n.extend(i, {
                            position: t.css("position"),
                            zIndex: t.css("z-index")
                        }), n.each(["top", "left", "bottom", "right"], function(n, r) {
                            i[r] = t.css(r);
                            isNaN(parseInt(i[r], 10)) && (i[r] = "auto")
                        }), t.css({
                            position: "relative",
                            top: 0,
                            left: 0,
                            right: "auto",
                            bottom: "auto"
                        })), t.css(f), u.css(i).show()
                    },
                    removeWrapper: function(t) {
                        var i = document.activeElement;
                        return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || n.contains(t[0], i)) && n(i).focus()), t
                    },
                    setTransition: function(t, i, r, u) {
                        return u = u || {}, n.each(i, function(n, i) {
                            var f = t.cssUnit(i);
                            f[0] > 0 && (u[i] = f[0] * r + f[1])
                        }), u
                    }
                });
                n.fn.extend({
                    effect: function() {
                        function e(t) {
                            function o() {
                                n.isFunction(e) && e.call(r[0]);
                                n.isFunction(t) && t()
                            }
                            var r = n(this),
                                e = i.complete,
                                u = i.mode;
                            (r.is(":hidden") ? u === "hide" : u === "show") ? (r[u](), o()) : f.call(r[0], i, o)
                        }
                        var i = t.apply(this, arguments),
                            r = i.mode,
                            u = i.queue,
                            f = n.effects.effect[i.effect];
                        return n.fx.off || !f ? r ? this[r](i.duration, i.complete) : this.each(function() {
                            i.complete && i.complete.call(this)
                        }) : u === !1 ? this.each(e) : this.queue(u || "fx", e)
                    },
                    show: function(n) {
                        return function(r) {
                            if (i(r)) return n.apply(this, arguments);
                            var u = t.apply(this, arguments);
                            return u.mode = "show", this.effect.call(this, u)
                        }
                    }(n.fn.show),
                    hide: function(n) {
                        return function(r) {
                            if (i(r)) return n.apply(this, arguments);
                            var u = t.apply(this, arguments);
                            return u.mode = "hide", this.effect.call(this, u)
                        }
                    }(n.fn.hide),
                    toggle: function(n) {
                        return function(r) {
                            if (i(r) || typeof r == "boolean") return n.apply(this, arguments);
                            var u = t.apply(this, arguments);
                            return u.mode = "toggle", this.effect.call(this, u)
                        }
                    }(n.fn.toggle),
                    cssUnit: function(t) {
                        var i = this.css(t),
                            r = [];
                        return n.each(["em", "px", "%", "pt"], function(n, t) {
                            i.indexOf(t) > 0 && (r = [parseFloat(i), t])
                        }), r
                    }
                })
            }(),
            function() {
                var t = {};
                n.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(n, i) {
                    t[i] = function(t) {
                        return Math.pow(t, n + 2)
                    }
                });
                n.extend(t, {
                    Sine: function(n) {
                        return 1 - Math.cos(n * Math.PI / 2)
                    },
                    Circ: function(n) {
                        return 1 - Math.sqrt(1 - n * n)
                    },
                    Elastic: function(n) {
                        return n === 0 || n === 1 ? n : -Math.pow(2, 8 * (n - 1)) * Math.sin(((n - 1) * 80 - 7.5) * Math.PI / 15)
                    },
                    Back: function(n) {
                        return n * n * (3 * n - 2)
                    },
                    Bounce: function(n) {
                        for (var t, i = 4; n < ((t = Math.pow(2, --i)) - 1) / 11;);
                        return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((t * 3 - 2) / 22 - n, 2)
                    }
                });
                n.each(t, function(t, i) {
                    n.easing["easeIn" + t] = i;
                    n.easing["easeOut" + t] = function(n) {
                        return 1 - i(1 - n)
                    };
                    n.easing["easeInOut" + t] = function(n) {
                        return n < .5 ? i(n * 2) / 2 : 1 - i(n * -2 + 2) / 2
                    }
                })
            }();
        var lt = n.effects,
            at = n.effects.effect.blind = function(t, i) {
                var r = n(this),
                    s = ["position", "top", "bottom", "left", "right", "height", "width"],
                    v = n.effects.setMode(r, t.mode || "hide"),
                    y = t.direction || "up",
                    f = /up|down|vertical/.test(y),
                    h = f ? "height" : "width",
                    c = f ? "top" : "left",
                    p = /up|left|vertical|horizontal/.test(y),
                    l = {},
                    a = v === "show",
                    u, e, o;
                r.parent().is(".ui-effects-wrapper") ? n.effects.save(r.parent(), s) : n.effects.save(r, s);
                r.show();
                u = n.effects.createWrapper(r).css({
                    overflow: "hidden"
                });
                e = u[h]();
                o = parseFloat(u.css(c)) || 0;
                l[h] = a ? e : 0;
                p || (r.css(f ? "bottom" : "right", 0).css(f ? "top" : "left", "auto").css({
                    position: "absolute"
                }), l[c] = a ? o : e + o);
                a && (u.css(h, 0), p || u.css(c, o + e));
                u.animate(l, {
                    duration: t.duration,
                    easing: t.easing,
                    queue: !1,
                    complete: function() {
                        v === "hide" && r.hide();
                        n.effects.restore(r, s);
                        n.effects.removeWrapper(r);
                        i()
                    }
                })
            },
            vt = n.effects.effect.bounce = function(t, i) {
                var r = n(this),
                    v = ["position", "top", "bottom", "left", "right", "height", "width"],
                    k = n.effects.setMode(r, t.mode || "effect"),
                    f = k === "hide",
                    y = k === "show",
                    h = t.direction || "up",
                    u = t.distance,
                    p = t.times || 5,
                    d = p * 2 + (y || f ? 1 : 0),
                    c = t.duration / d,
                    l = t.easing,
                    e = h === "up" || h === "down" ? "top" : "left",
                    w = h === "up" || h === "left",
                    b, o, s, a = r.queue(),
                    g = a.length;
                for ((y || f) && v.push("opacity"), n.effects.save(r, v), r.show(), n.effects.createWrapper(r), u || (u = r[e === "top" ? "outerHeight" : "outerWidth"]() / 3), y && (s = {
                        opacity: 1
                    }, s[e] = 0, r.css("opacity", 0).css(e, w ? -u * 2 : u * 2).animate(s, c, l)), f && (u = u / Math.pow(2, p - 1)), s = {}, s[e] = 0, b = 0; b < p; b++) o = {}, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l).animate(s, c, l), u = f ? u * 2 : u / 2;
                f && (o = {
                    opacity: 0
                }, o[e] = (w ? "-=" : "+=") + u, r.animate(o, c, l));
                r.queue(function() {
                    f && r.hide();
                    n.effects.restore(r, v);
                    n.effects.removeWrapper(r);
                    i()
                });
                g > 1 && a.splice.apply(a, [1, 0].concat(a.splice(g, d + 1)));
                r.dequeue()
            },
            yt = n.effects.effect.clip = function(t, i) {
                var r = n(this),
                    h = ["position", "top", "bottom", "left", "right", "height", "width"],
                    v = n.effects.setMode(r, t.mode || "hide"),
                    f = v === "show",
                    y = t.direction || "vertical",
                    c = y === "vertical",
                    o = c ? "height" : "width",
                    l = c ? "top" : "left",
                    s = {},
                    a, u, e;
                n.effects.save(r, h);
                r.show();
                a = n.effects.createWrapper(r).css({
                    overflow: "hidden"
                });
                u = r[0].tagName === "IMG" ? a : r;
                e = u[o]();
                f && (u.css(o, 0), u.css(l, e / 2));
                s[o] = f ? e : 0;
                s[l] = f ? 0 : e / 2;
                u.animate(s, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        f || r.hide();
                        n.effects.restore(r, h);
                        n.effects.removeWrapper(r);
                        i()
                    }
                })
            },
            pt = n.effects.effect.drop = function(t, i) {
                var r = n(this),
                    h = ["position", "top", "bottom", "left", "right", "opacity", "height", "width"],
                    c = n.effects.setMode(r, t.mode || "hide"),
                    e = c === "show",
                    u = t.direction || "left",
                    o = u === "up" || u === "down" ? "top" : "left",
                    s = u === "up" || u === "left" ? "pos" : "neg",
                    l = {
                        opacity: e ? 1 : 0
                    },
                    f;
                n.effects.save(r, h);
                r.show();
                n.effects.createWrapper(r);
                f = t.distance || r[o === "top" ? "outerHeight" : "outerWidth"](!0) / 2;
                e && r.css("opacity", 0).css(o, s === "pos" ? -f : f);
                l[o] = (e ? s === "pos" ? "+=" : "-=" : s === "pos" ? "-=" : "+=") + f;
                r.animate(l, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        c === "hide" && r.hide();
                        n.effects.restore(r, h);
                        n.effects.removeWrapper(r);
                        i()
                    }
                })
            },
            wt = n.effects.effect.explode = function(t, i) {
                function k() {
                    l.push(this);
                    l.length === o * c && d()
                }

                function d() {
                    r.css({
                        visibility: "visible"
                    });
                    n(l).remove();
                    u || r.hide();
                    i()
                }
                for (var o = t.pieces ? Math.round(Math.sqrt(t.pieces)) : 3, c = o, r = n(this), b = n.effects.setMode(r, t.mode || "hide"), u = b === "show", w = r.show().css("visibility", "hidden").offset(), s = Math.ceil(r.outerWidth() / c), h = Math.ceil(r.outerHeight() / o), l = [], e, a, v, y, p, f = 0; f < o; f++)
                    for (v = w.top + f * h, p = f - (o - 1) / 2, e = 0; e < c; e++) a = w.left + e * s, y = e - (c - 1) / 2, r.clone().appendTo("body").wrap("<div><\/div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -e * s,
                        top: -f * h
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: s,
                        height: h,
                        left: a + (u ? y * s : 0),
                        top: v + (u ? p * h : 0),
                        opacity: u ? 0 : 1
                    }).animate({
                        left: a + (u ? 0 : y * s),
                        top: v + (u ? 0 : p * h),
                        opacity: u ? 1 : 0
                    }, t.duration || 500, t.easing, k)
            },
            bt = n.effects.effect.fade = function(t, i) {
                var r = n(this),
                    u = n.effects.setMode(r, t.mode || "toggle");
                r.animate({
                    opacity: u
                }, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: i
                })
            },
            kt = n.effects.effect.fold = function(t, i) {
                var r = n(this),
                    s = ["position", "top", "bottom", "left", "right", "height", "width"],
                    h = n.effects.setMode(r, t.mode || "hide"),
                    e = h === "show",
                    c = h === "hide",
                    f = t.size || 15,
                    l = /([0-9]+)%/.exec(f),
                    a = !!t.horizFirst,
                    v = e !== a,
                    y = v ? ["width", "height"] : ["height", "width"],
                    p = t.duration / 2,
                    u, o, w = {},
                    b = {};
                n.effects.save(r, s);
                r.show();
                u = n.effects.createWrapper(r).css({
                    overflow: "hidden"
                });
                o = v ? [u.width(), u.height()] : [u.height(), u.width()];
                l && (f = parseInt(l[1], 10) / 100 * o[c ? 0 : 1]);
                e && u.css(a ? {
                    height: 0,
                    width: f
                } : {
                    height: f,
                    width: 0
                });
                w[y[0]] = e ? o[0] : f;
                b[y[1]] = e ? o[1] : 0;
                u.animate(w, p, t.easing).animate(b, p, t.easing, function() {
                    c && r.hide();
                    n.effects.restore(r, s);
                    n.effects.removeWrapper(r);
                    i()
                })
            },
            dt = n.effects.effect.highlight = function(t, i) {
                var r = n(this),
                    u = ["backgroundImage", "backgroundColor", "opacity"],
                    f = n.effects.setMode(r, t.mode || "show"),
                    e = {
                        backgroundColor: r.css("backgroundColor")
                    };
                f === "hide" && (e.opacity = 0);
                n.effects.save(r, u);
                r.show().css({
                    backgroundImage: "none",
                    backgroundColor: t.color || "#ffff99"
                }).animate(e, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        f === "hide" && r.hide();
                        n.effects.restore(r, u);
                        i()
                    }
                })
            },
            gt = n.effects.effect.size = function(t, i) {
                var f, l, u, r = n(this),
                    w = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"],
                    a = ["width", "height", "overflow"],
                    v = ["fontSize"],
                    e = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
                    o = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
                    h = n.effects.setMode(r, t.mode || "effect"),
                    y = t.restore || h !== "effect",
                    c = t.scale || "both",
                    b = t.origin || ["middle", "center"],
                    k = r.css("position"),
                    s = y ? w : ["position", "top", "bottom", "left", "right", "overflow", "opacity"],
                    p = {
                        height: 0,
                        width: 0,
                        outerHeight: 0,
                        outerWidth: 0
                    };
                h === "show" && r.show();
                f = {
                    height: r.height(),
                    width: r.width(),
                    outerHeight: r.outerHeight(),
                    outerWidth: r.outerWidth()
                };
                t.mode === "toggle" && h === "show" ? (r.from = t.to || p, r.to = t.from || f) : (r.from = t.from || (h === "show" ? p : f), r.to = t.to || (h === "hide" ? p : f));
                u = {
                    from: {
                        y: r.from.height / f.height,
                        x: r.from.width / f.width
                    },
                    to: {
                        y: r.to.height / f.height,
                        x: r.to.width / f.width
                    }
                };
                (c === "box" || c === "both") && (u.from.y !== u.to.y && (s = s.concat(e), r.from = n.effects.setTransition(r, e, u.from.y, r.from), r.to = n.effects.setTransition(r, e, u.to.y, r.to)), u.from.x !== u.to.x && (s = s.concat(o), r.from = n.effects.setTransition(r, o, u.from.x, r.from), r.to = n.effects.setTransition(r, o, u.to.x, r.to)));
                (c === "content" || c === "both") && u.from.y !== u.to.y && (s = s.concat(v).concat(a), r.from = n.effects.setTransition(r, v, u.from.y, r.from), r.to = n.effects.setTransition(r, v, u.to.y, r.to));
                n.effects.save(r, s);
                r.show();
                n.effects.createWrapper(r);
                r.css("overflow", "hidden").css(r.from);
                b && (l = n.effects.getBaseline(b, f), r.from.top = (f.outerHeight - r.outerHeight()) * l.y, r.from.left = (f.outerWidth - r.outerWidth()) * l.x, r.to.top = (f.outerHeight - r.to.outerHeight) * l.y, r.to.left = (f.outerWidth - r.to.outerWidth) * l.x);
                r.css(r.from);
                (c === "content" || c === "both") && (e = e.concat(["marginTop", "marginBottom"]).concat(v), o = o.concat(["marginLeft", "marginRight"]), a = w.concat(e).concat(o), r.find("*[width]").each(function() {
                    var i = n(this),
                        r = {
                            height: i.height(),
                            width: i.width(),
                            outerHeight: i.outerHeight(),
                            outerWidth: i.outerWidth()
                        };
                    y && n.effects.save(i, a);
                    i.from = {
                        height: r.height * u.from.y,
                        width: r.width * u.from.x,
                        outerHeight: r.outerHeight * u.from.y,
                        outerWidth: r.outerWidth * u.from.x
                    };
                    i.to = {
                        height: r.height * u.to.y,
                        width: r.width * u.to.x,
                        outerHeight: r.height * u.to.y,
                        outerWidth: r.width * u.to.x
                    };
                    u.from.y !== u.to.y && (i.from = n.effects.setTransition(i, e, u.from.y, i.from), i.to = n.effects.setTransition(i, e, u.to.y, i.to));
                    u.from.x !== u.to.x && (i.from = n.effects.setTransition(i, o, u.from.x, i.from), i.to = n.effects.setTransition(i, o, u.to.x, i.to));
                    i.css(i.from);
                    i.animate(i.to, t.duration, t.easing, function() {
                        y && n.effects.restore(i, a)
                    })
                }));
                r.animate(r.to, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        r.to.opacity === 0 && r.css("opacity", r.from.opacity);
                        h === "hide" && r.hide();
                        n.effects.restore(r, s);
                        y || (k === "static" ? r.css({
                            position: "relative",
                            top: r.to.top,
                            left: r.to.left
                        }) : n.each(["top", "left"], function(n, t) {
                            r.css(t, function(t, i) {
                                var f = parseInt(i, 10),
                                    u = n ? r.to.left : r.to.top;
                                return i === "auto" ? u + "px" : f + u + "px"
                            })
                        }));
                        n.effects.removeWrapper(r);
                        i()
                    }
                })
            },
            ni = n.effects.effect.scale = function(t, i) {
                var u = n(this),
                    r = n.extend(!0, {}, t),
                    f = n.effects.setMode(u, t.mode || "effect"),
                    s = parseInt(t.percent, 10) || (parseInt(t.percent, 10) === 0 ? 0 : f === "hide" ? 0 : 100),
                    h = t.direction || "both",
                    c = t.origin,
                    e = {
                        height: u.height(),
                        width: u.width(),
                        outerHeight: u.outerHeight(),
                        outerWidth: u.outerWidth()
                    },
                    o = {
                        y: h !== "horizontal" ? s / 100 : 1,
                        x: h !== "vertical" ? s / 100 : 1
                    };
                r.effect = "size";
                r.queue = !1;
                r.complete = i;
                f !== "effect" && (r.origin = c || ["middle", "center"], r.restore = !0);
                r.from = t.from || (f === "show" ? {
                    height: 0,
                    width: 0,
                    outerHeight: 0,
                    outerWidth: 0
                } : e);
                r.to = {
                    height: e.height * o.y,
                    width: e.width * o.x,
                    outerHeight: e.outerHeight * o.y,
                    outerWidth: e.outerWidth * o.x
                };
                r.fade && (f === "show" && (r.from.opacity = 0, r.to.opacity = 1), f === "hide" && (r.from.opacity = 1, r.to.opacity = 0));
                u.effect(r)
            },
            ti = n.effects.effect.puff = function(t, i) {
                var r = n(this),
                    e = n.effects.setMode(r, t.mode || "hide"),
                    o = e === "hide",
                    s = parseInt(t.percent, 10) || 150,
                    f = s / 100,
                    u = {
                        height: r.height(),
                        width: r.width(),
                        outerHeight: r.outerHeight(),
                        outerWidth: r.outerWidth()
                    };
                n.extend(t, {
                    effect: "scale",
                    queue: !1,
                    fade: !0,
                    mode: e,
                    complete: i,
                    percent: o ? s : 100,
                    from: o ? u : {
                        height: u.height * f,
                        width: u.width * f,
                        outerHeight: u.outerHeight * f,
                        outerWidth: u.outerWidth * f
                    }
                });
                r.effect(t)
            },
            ii = n.effects.effect.pulsate = function(t, i) {
                var r = n(this),
                    e = n.effects.setMode(r, t.mode || "show"),
                    h = e === "show",
                    a = e === "hide",
                    v = h || e === "hide",
                    o = (t.times || 5) * 2 + (v ? 1 : 0),
                    c = t.duration / o,
                    u = 0,
                    f = r.queue(),
                    l = f.length,
                    s;
                for ((h || !r.is(":visible")) && (r.css("opacity", 0).show(), u = 1), s = 1; s < o; s++) r.animate({
                    opacity: u
                }, c, t.easing), u = 1 - u;
                r.animate({
                    opacity: u
                }, c, t.easing);
                r.queue(function() {
                    a && r.hide();
                    i()
                });
                l > 1 && f.splice.apply(f, [1, 0].concat(f.splice(l, o + 1)));
                r.dequeue()
            },
            ri = n.effects.effect.shake = function(t, i) {
                var r = n(this),
                    v = ["position", "top", "bottom", "left", "right", "height", "width"],
                    k = n.effects.setMode(r, t.mode || "effect"),
                    f = t.direction || "left",
                    o = t.distance || 20,
                    y = t.times || 3,
                    p = y * 2 + 1,
                    u = Math.round(t.duration / p),
                    s = f === "up" || f === "down" ? "top" : "left",
                    h = f === "up" || f === "left",
                    c = {},
                    l = {},
                    w = {},
                    a, e = r.queue(),
                    b = e.length;
                for (n.effects.save(r, v), r.show(), n.effects.createWrapper(r), c[s] = (h ? "-=" : "+=") + o, l[s] = (h ? "+=" : "-=") + o * 2, w[s] = (h ? "-=" : "+=") + o * 2, r.animate(c, u, t.easing), a = 1; a < y; a++) r.animate(l, u, t.easing).animate(w, u, t.easing);
                r.animate(l, u, t.easing).animate(c, u / 2, t.easing).queue(function() {
                    k === "hide" && r.hide();
                    n.effects.restore(r, v);
                    n.effects.removeWrapper(r);
                    i()
                });
                b > 1 && e.splice.apply(e, [1, 0].concat(e.splice(b, p + 1)));
                r.dequeue()
            },
            ui = n.effects.effect.slide = function(t, i) {
                var r = n(this),
                    s = ["position", "top", "bottom", "left", "right", "width", "height"],
                    h = n.effects.setMode(r, t.mode || "show"),
                    c = h === "show",
                    f = t.direction || "left",
                    e = f === "up" || f === "down" ? "top" : "left",
                    o = f === "up" || f === "left",
                    u, l = {};
                n.effects.save(r, s);
                r.show();
                u = t.distance || r[e === "top" ? "outerHeight" : "outerWidth"](!0);
                n.effects.createWrapper(r).css({
                    overflow: "hidden"
                });
                c && r.css(e, o ? isNaN(u) ? "-" + u : -u : u);
                l[e] = (c ? o ? "+=" : "-=" : o ? "-=" : "+=") + u;
                r.animate(l, {
                    queue: !1,
                    duration: t.duration,
                    easing: t.easing,
                    complete: function() {
                        h === "hide" && r.hide();
                        n.effects.restore(r, s);
                        n.effects.removeWrapper(r);
                        i()
                    }
                })
            },
            fi = n.effects.effect.transfer = function(t, i) {
                var u = n(this),
                    r = n(t.to),
                    f = r.css("position") === "fixed",
                    e = n("body"),
                    o = f ? e.scrollTop() : 0,
                    s = f ? e.scrollLeft() : 0,
                    h = r.offset(),
                    l = {
                        top: h.top - o,
                        left: h.left - s,
                        height: r.innerHeight(),
                        width: r.innerWidth()
                    },
                    c = u.offset(),
                    a = n("<div class='ui-effects-transfer'><\/div>").appendTo(document.body).addClass(t.className).css({
                        top: c.top - o,
                        left: c.left - s,
                        height: u.innerHeight(),
                        width: u.innerWidth(),
                        position: f ? "fixed" : "absolute"
                    }).animate(l, t.duration, t.easing, function() {
                        a.remove();
                        i()
                    })
            },
            ei = n.widget("ui.progressbar", {
                version: "1.11.4",
                options: {
                    max: 100,
                    value: 0,
                    change: null,
                    complete: null
                },
                min: 0,
                _create: function() {
                    this.oldValue = this.options.value = this._constrainedValue();
                    this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                        role: "progressbar",
                        "aria-valuemin": this.min
                    });
                    this.valueDiv = n("<div class='ui-progressbar-value ui-widget-header ui-corner-left'><\/div>").appendTo(this.element);
                    this._refreshValue()
                },
                _destroy: function() {
                    this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                    this.valueDiv.remove()
                },
                value: function(n) {
                    if (n === undefined) return this.options.value;
                    this.options.value = this._constrainedValue(n);
                    this._refreshValue()
                },
                _constrainedValue: function(n) {
                    return n === undefined && (n = this.options.value), this.indeterminate = n === !1, typeof n != "number" && (n = 0), this.indeterminate ? !1 : Math.min(this.options.max, Math.max(this.min, n))
                },
                _setOptions: function(n) {
                    var t = n.value;
                    delete n.value;
                    this._super(n);
                    this.options.value = this._constrainedValue(t);
                    this._refreshValue()
                },
                _setOption: function(n, t) {
                    n === "max" && (t = Math.max(this.min, t));
                    n === "disabled" && this.element.toggleClass("ui-state-disabled", !!t).attr("aria-disabled", t);
                    this._super(n, t)
                },
                _percentage: function() {
                    return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
                },
                _refreshValue: function() {
                    var t = this.options.value,
                        i = this._percentage();
                    this.valueDiv.toggle(this.indeterminate || t > this.min).toggleClass("ui-corner-right", t === this.options.max).width(i.toFixed(0) + "%");
                    this.element.toggleClass("ui-progressbar-indeterminate", this.indeterminate);
                    this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = n("<div class='ui-progressbar-overlay'><\/div>").appendTo(this.valueDiv))) : (this.element.attr({
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": t
                    }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null));
                    this.oldValue !== t && (this.oldValue = t, this._trigger("change"));
                    t === this.options.max && this._trigger("complete")
                }
            }),
            oi = n.widget("ui.selectable", n.ui.mouse, {
                version: "1.11.4",
                options: {
                    appendTo: "body",
                    autoRefresh: !0,
                    distance: 0,
                    filter: "*",
                    tolerance: "touch",
                    selected: null,
                    selecting: null,
                    start: null,
                    stop: null,
                    unselected: null,
                    unselecting: null
                },
                _create: function() {
                    var t, i = this;
                    this.element.addClass("ui-selectable");
                    this.dragged = !1;
                    this.refresh = function() {
                        t = n(i.options.filter, i.element[0]);
                        t.addClass("ui-selectee");
                        t.each(function() {
                            var t = n(this),
                                i = t.offset();
                            n.data(this, "selectable-item", {
                                element: this,
                                $element: t,
                                left: i.left,
                                top: i.top,
                                right: i.left + t.outerWidth(),
                                bottom: i.top + t.outerHeight(),
                                startselected: !1,
                                selected: t.hasClass("ui-selected"),
                                selecting: t.hasClass("ui-selecting"),
                                unselecting: t.hasClass("ui-unselecting")
                            })
                        })
                    };
                    this.refresh();
                    this.selectees = t.addClass("ui-selectee");
                    this._mouseInit();
                    this.helper = n("<div class='ui-selectable-helper'><\/div>")
                },
                _destroy: function() {
                    this.selectees.removeClass("ui-selectee").removeData("selectable-item");
                    this.element.removeClass("ui-selectable ui-selectable-disabled");
                    this._mouseDestroy()
                },
                _mouseStart: function(t) {
                    var i = this,
                        r = this.options;
                    (this.opos = [t.pageX, t.pageY], this.options.disabled) || (this.selectees = n(r.filter, this.element[0]), this._trigger("start", t), n(r.appendTo).append(this.helper), this.helper.css({
                        left: t.pageX,
                        top: t.pageY,
                        width: 0,
                        height: 0
                    }), r.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                        var r = n.data(this, "selectable-item");
                        r.startselected = !0;
                        t.metaKey || t.ctrlKey || (r.$element.removeClass("ui-selected"), r.selected = !1, r.$element.addClass("ui-unselecting"), r.unselecting = !0, i._trigger("unselecting", t, {
                            unselecting: r.element
                        }))
                    }), n(t.target).parents().addBack().each(function() {
                        var u, r = n.data(this, "selectable-item");
                        if (r) return u = !t.metaKey && !t.ctrlKey || !r.$element.hasClass("ui-selected"), r.$element.removeClass(u ? "ui-unselecting" : "ui-selected").addClass(u ? "ui-selecting" : "ui-unselecting"), r.unselecting = !u, r.selecting = u, r.selected = u, u ? i._trigger("selecting", t, {
                            selecting: r.element
                        }) : i._trigger("unselecting", t, {
                            unselecting: r.element
                        }), !1
                    }))
                },
                _mouseDrag: function(t) {
                    if (this.dragged = !0, !this.options.disabled) {
                        var e, o = this,
                            s = this.options,
                            i = this.opos[0],
                            r = this.opos[1],
                            u = t.pageX,
                            f = t.pageY;
                        return i > u && (e = u, u = i, i = e), r > f && (e = f, f = r, r = e), this.helper.css({
                            left: i,
                            top: r,
                            width: u - i,
                            height: f - r
                        }), this.selectees.each(function() {
                            var e = n.data(this, "selectable-item"),
                                h = !1;
                            e && e.element !== o.element[0] && (s.tolerance === "touch" ? h = !(e.left > u || e.right < i || e.top > f || e.bottom < r) : s.tolerance === "fit" && (h = e.left > i && e.right < u && e.top > r && e.bottom < f), h ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, o._trigger("selecting", t, {
                                selecting: e.element
                            }))) : (e.selecting && ((t.metaKey || t.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), o._trigger("unselecting", t, {
                                unselecting: e.element
                            }))), e.selected && (t.metaKey || t.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, o._trigger("unselecting", t, {
                                unselecting: e.element
                            })))))
                        }), !1
                    }
                },
                _mouseStop: function(t) {
                    var i = this;
                    return this.dragged = !1, n(".ui-unselecting", this.element[0]).each(function() {
                        var r = n.data(this, "selectable-item");
                        r.$element.removeClass("ui-unselecting");
                        r.unselecting = !1;
                        r.startselected = !1;
                        i._trigger("unselected", t, {
                            unselected: r.element
                        })
                    }), n(".ui-selecting", this.element[0]).each(function() {
                        var r = n.data(this, "selectable-item");
                        r.$element.removeClass("ui-selecting").addClass("ui-selected");
                        r.selecting = !1;
                        r.selected = !0;
                        r.startselected = !0;
                        i._trigger("selected", t, {
                            selected: r.element
                        })
                    }), this._trigger("stop", t), this.helper.remove(), !1
                }
            }),
            si = n.widget("ui.selectmenu", {
                version: "1.11.4",
                defaultElement: "<select>",
                options: {
                    appendTo: null,
                    disabled: null,
                    icons: {
                        button: "ui-icon-triangle-1-s"
                    },
                    position: {
                        my: "left top",
                        at: "left bottom",
                        collision: "none"
                    },
                    width: null,
                    change: null,
                    close: null,
                    focus: null,
                    open: null,
                    select: null
                },
                _create: function() {
                    var n = this.element.uniqueId().attr("id");
                    this.ids = {
                        element: n,
                        button: n + "-button",
                        menu: n + "-menu"
                    };
                    this._drawButton();
                    this._drawMenu();
                    this.options.disabled && this.disable()
                },
                _drawButton: function() {
                    var t = this;
                    this.label = n("label[for='" + this.ids.element + "']").attr("for", this.ids.button);
                    this._on(this.label, {
                        click: function(n) {
                            this.button.focus();
                            n.preventDefault()
                        }
                    });
                    this.element.hide();
                    this.button = n("<span>", {
                        "class": "ui-selectmenu-button ui-widget ui-state-default ui-corner-all",
                        tabindex: this.options.disabled ? -1 : 0,
                        id: this.ids.button,
                        role: "combobox",
                        "aria-expanded": "false",
                        "aria-autocomplete": "list",
                        "aria-owns": this.ids.menu,
                        "aria-haspopup": "true"
                    }).insertAfter(this.element);
                    n("<span>", {
                        "class": "ui-icon " + this.options.icons.button
                    }).prependTo(this.button);
                    this.buttonText = n("<span>", {
                        "class": "ui-selectmenu-text"
                    }).appendTo(this.button);
                    this._setText(this.buttonText, this.element.find("option:selected").text());
                    this._resizeButton();
                    this._on(this.button, this._buttonEvents);
                    this.button.one("focusin", function() {
                        t.menuItems || t._refreshMenu()
                    });
                    this._hoverable(this.button);
                    this._focusable(this.button)
                },
                _drawMenu: function() {
                    var t = this;
                    this.menu = n("<ul>", {
                        "aria-hidden": "true",
                        "aria-labelledby": this.ids.button,
                        id: this.ids.menu
                    });
                    this.menuWrap = n("<div>", {
                        "class": "ui-selectmenu-menu ui-front"
                    }).append(this.menu).appendTo(this._appendTo());
                    this.menuInstance = this.menu.menu({
                        role: "listbox",
                        select: function(n, i) {
                            n.preventDefault();
                            t._setSelection();
                            t._select(i.item.data("ui-selectmenu-item"), n)
                        },
                        focus: function(n, i) {
                            var r = i.item.data("ui-selectmenu-item");
                            t.focusIndex != null && r.index !== t.focusIndex && (t._trigger("focus", n, {
                                item: r
                            }), t.isOpen || t._select(r, n));
                            t.focusIndex = r.index;
                            t.button.attr("aria-activedescendant", t.menuItems.eq(r.index).attr("id"))
                        }
                    }).menu("instance");
                    this.menu.addClass("ui-corner-bottom").removeClass("ui-corner-all");
                    this.menuInstance._off(this.menu, "mouseleave");
                    this.menuInstance._closeOnDocumentClick = function() {
                        return !1
                    };
                    this.menuInstance._isDivider = function() {
                        return !1
                    }
                },
                refresh: function() {
                    this._refreshMenu();
                    this._setText(this.buttonText, this._getSelectedItem().text());
                    this.options.width || this._resizeButton()
                },
                _refreshMenu: function() {
                    this.menu.empty();
                    var n, t = this.element.find("option");
                    t.length && (this._parseOptions(t), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup"), n = this._getSelectedItem(), this.menuInstance.focus(null, n), this._setAria(n.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
                },
                open: function(n) {
                    this.options.disabled || (this.menuItems ? (this.menu.find(".ui-state-focus").removeClass("ui-state-focus"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", n))
                },
                _position: function() {
                    this.menuWrap.position(n.extend({
                        of: this.button
                    }, this.options.position))
                },
                close: function(n) {
                    this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", n))
                },
                widget: function() {
                    return this.button
                },
                menuWidget: function() {
                    return this.menu
                },
                _renderMenu: function(t, i) {
                    var u = this,
                        r = "";
                    n.each(i, function(i, f) {
                        f.optgroup !== r && (n("<li>", {
                            "class": "ui-selectmenu-optgroup ui-menu-divider" + (f.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : ""),
                            text: f.optgroup
                        }).appendTo(t), r = f.optgroup);
                        u._renderItemData(t, f)
                    })
                },
                _renderItemData: function(n, t) {
                    return this._renderItem(n, t).data("ui-selectmenu-item", t)
                },
                _renderItem: function(t, i) {
                    var r = n("<li>");
                    return i.disabled && r.addClass("ui-state-disabled"), this._setText(r, i.label), r.appendTo(t)
                },
                _setText: function(n, t) {
                    t ? n.text(t) : n.html("&#160;")
                },
                _move: function(n, t) {
                    var i, r, u = ".ui-menu-item";
                    this.isOpen ? i = this.menuItems.eq(this.focusIndex) : (i = this.menuItems.eq(this.element[0].selectedIndex), u += ":not(.ui-state-disabled)");
                    r = n === "first" || n === "last" ? i[n === "first" ? "prevAll" : "nextAll"](u).eq(-1) : i[n + "All"](u).eq(0);
                    r.length && this.menuInstance.focus(t, r)
                },
                _getSelectedItem: function() {
                    return this.menuItems.eq(this.element[0].selectedIndex)
                },
                _toggle: function(n) {
                    this[this.isOpen ? "close" : "open"](n)
                },
                _setSelection: function() {
                    var n;
                    this.range && (window.getSelection ? (n = window.getSelection(), n.removeAllRanges(), n.addRange(this.range)) : this.range.select(), this.button.focus())
                },
                _documentClick: {
                    mousedown: function(t) {
                        this.isOpen && (n(t.target).closest(".ui-selectmenu-menu, #" + this.ids.button).length || this.close(t))
                    }
                },
                _buttonEvents: {
                    mousedown: function() {
                        var n;
                        window.getSelection ? (n = window.getSelection(), n.rangeCount && (this.range = n.getRangeAt(0))) : this.range = document.selection.createRange()
                    },
                    click: function(n) {
                        this._setSelection();
                        this._toggle(n)
                    },
                    keydown: function(t) {
                        var i = !0;
                        switch (t.keyCode) {
                            case n.ui.keyCode.TAB:
                            case n.ui.keyCode.ESCAPE:
                                this.close(t);
                                i = !1;
                                break;
                            case n.ui.keyCode.ENTER:
                                this.isOpen && this._selectFocusedItem(t);
                                break;
                            case n.ui.keyCode.UP:
                                t.altKey ? this._toggle(t) : this._move("prev", t);
                                break;
                            case n.ui.keyCode.DOWN:
                                t.altKey ? this._toggle(t) : this._move("next", t);
                                break;
                            case n.ui.keyCode.SPACE:
                                this.isOpen ? this._selectFocusedItem(t) : this._toggle(t);
                                break;
                            case n.ui.keyCode.LEFT:
                                this._move("prev", t);
                                break;
                            case n.ui.keyCode.RIGHT:
                                this._move("next", t);
                                break;
                            case n.ui.keyCode.HOME:
                            case n.ui.keyCode.PAGE_UP:
                                this._move("first", t);
                                break;
                            case n.ui.keyCode.END:
                            case n.ui.keyCode.PAGE_DOWN:
                                this._move("last", t);
                                break;
                            default:
                                this.menu.trigger(t);
                                i = !1
                        }
                        i && t.preventDefault()
                    }
                },
                _selectFocusedItem: function(n) {
                    var t = this.menuItems.eq(this.focusIndex);
                    t.hasClass("ui-state-disabled") || this._select(t.data("ui-selectmenu-item"), n)
                },
                _select: function(n, t) {
                    var i = this.element[0].selectedIndex;
                    this.element[0].selectedIndex = n.index;
                    this._setText(this.buttonText, n.label);
                    this._setAria(n);
                    this._trigger("select", t, {
                        item: n
                    });
                    n.index !== i && this._trigger("change", t, {
                        item: n
                    });
                    this.close(t)
                },
                _setAria: function(n) {
                    var t = this.menuItems.eq(n.index).attr("id");
                    this.button.attr({
                        "aria-labelledby": t,
                        "aria-activedescendant": t
                    });
                    this.menu.attr("aria-activedescendant", t)
                },
                _setOption: function(n, t) {
                    n === "icons" && this.button.find("span.ui-icon").removeClass(this.options.icons.button).addClass(t.button);
                    this._super(n, t);
                    n === "appendTo" && this.menuWrap.appendTo(this._appendTo());
                    n === "disabled" && (this.menuInstance.option("disabled", t), this.button.toggleClass("ui-state-disabled", t).attr("aria-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0));
                    n === "width" && this._resizeButton()
                },
                _appendTo: function() {
                    var t = this.options.appendTo;
                    return t && (t = t.jquery || t.nodeType ? n(t) : this.document.find(t).eq(0)), t && t[0] || (t = this.element.closest(".ui-front")), t.length || (t = this.document[0].body), t
                },
                _toggleAttr: function() {
                    this.button.toggleClass("ui-corner-top", this.isOpen).toggleClass("ui-corner-all", !this.isOpen).attr("aria-expanded", this.isOpen);
                    this.menuWrap.toggleClass("ui-selectmenu-open", this.isOpen);
                    this.menu.attr("aria-hidden", !this.isOpen)
                },
                _resizeButton: function() {
                    var n = this.options.width;
                    n || (n = this.element.show().outerWidth(), this.element.hide());
                    this.button.outerWidth(n)
                },
                _resizeMenu: function() {
                    this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
                },
                _getCreateOptions: function() {
                    return {
                        disabled: this.element.prop("disabled")
                    }
                },
                _parseOptions: function(t) {
                    var i = [];
                    t.each(function(t, r) {
                        var u = n(r),
                            f = u.parent("optgroup");
                        i.push({
                            element: u,
                            index: t,
                            value: u.val(),
                            label: u.text(),
                            optgroup: f.attr("label") || "",
                            disabled: f.prop("disabled") || u.prop("disabled")
                        })
                    });
                    this.items = i
                },
                _destroy: function() {
                    this.menuWrap.remove();
                    this.button.remove();
                    this.element.show();
                    this.element.removeUniqueId();
                    this.label.attr("for", this.ids.element)
                }
            }),
            hi = n.widget("ui.slider", n.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "slide",
                options: {
                    animate: !1,
                    distance: 0,
                    max: 100,
                    min: 0,
                    orientation: "horizontal",
                    range: !1,
                    step: 1,
                    value: 0,
                    values: null,
                    change: null,
                    slide: null,
                    start: null,
                    stop: null
                },
                numPages: 5,
                _create: function() {
                    this._keySliding = !1;
                    this._mouseSliding = !1;
                    this._animateOff = !0;
                    this._handleIndex = null;
                    this._detectOrientation();
                    this._mouseInit();
                    this._calculateNewMax();
                    this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all");
                    this._refresh();
                    this._setOption("disabled", this.options.disabled);
                    this._animateOff = !1
                },
                _refresh: function() {
                    this._createRange();
                    this._createHandles();
                    this._setupEvents();
                    this._refreshValue()
                },
                _createHandles: function() {
                    var r, i, u = this.options,
                        t = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),
                        f = [];
                    for (i = u.values && u.values.length || 1, t.length > i && (t.slice(i).remove(), t = t.slice(0, i)), r = t.length; r < i; r++) f.push("<span class='ui-slider-handle ui-state-default ui-corner-all' tabindex='0'><\/span>");
                    this.handles = t.add(n(f.join("")).appendTo(this.element));
                    this.handle = this.handles.eq(0);
                    this.handles.each(function(t) {
                        n(this).data("ui-slider-handle-index", t)
                    })
                },
                _createRange: function() {
                    var t = this.options,
                        i = "";
                    t.range ? (t.range === !0 && (t.values ? t.values.length && t.values.length !== 2 ? t.values = [t.values[0], t.values[0]] : n.isArray(t.values) && (t.values = t.values.slice(0)) : t.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({
                        left: "",
                        bottom: ""
                    }) : (this.range = n("<div><\/div>").appendTo(this.element), i = "ui-slider-range ui-widget-header ui-corner-all"), this.range.addClass(i + (t.range === "min" || t.range === "max" ? " ui-slider-range-" + t.range : ""))) : (this.range && this.range.remove(), this.range = null)
                },
                _setupEvents: function() {
                    this._off(this.handles);
                    this._on(this.handles, this._handleEvents);
                    this._hoverable(this.handles);
                    this._focusable(this.handles)
                },
                _destroy: function() {
                    this.handles.remove();
                    this.range && this.range.remove();
                    this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all");
                    this._mouseDestroy()
                },
                _mouseCapture: function(t) {
                    var s, f, r, i, u, h, e, c, o = this,
                        l = this.options;
                    return l.disabled ? !1 : (this.elementSize = {
                        width: this.element.outerWidth(),
                        height: this.element.outerHeight()
                    }, this.elementOffset = this.element.offset(), s = {
                        x: t.pageX,
                        y: t.pageY
                    }, f = this._normValueFromMouse(s), r = this._valueMax() - this._valueMin() + 1, this.handles.each(function(t) {
                        var e = Math.abs(f - o.values(t));
                        (r > e || r === e && (t === o._lastChangedValue || o.values(t) === l.min)) && (r = e, i = n(this), u = t)
                    }), h = this._start(t, u), h === !1) ? !1 : (this._mouseSliding = !0, this._handleIndex = u, i.addClass("ui-state-active").focus(), e = i.offset(), c = !n(t.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = c ? {
                        left: 0,
                        top: 0
                    } : {
                        left: t.pageX - e.left - i.width() / 2,
                        top: t.pageY - e.top - i.height() / 2 - (parseInt(i.css("borderTopWidth"), 10) || 0) - (parseInt(i.css("borderBottomWidth"), 10) || 0) + (parseInt(i.css("marginTop"), 10) || 0)
                    }, this.handles.hasClass("ui-state-hover") || this._slide(t, u, f), this._animateOff = !0, !0)
                },
                _mouseStart: function() {
                    return !0
                },
                _mouseDrag: function(n) {
                    var t = {
                            x: n.pageX,
                            y: n.pageY
                        },
                        i = this._normValueFromMouse(t);
                    return this._slide(n, this._handleIndex, i), !1
                },
                _mouseStop: function(n) {
                    return this.handles.removeClass("ui-state-active"), this._mouseSliding = !1, this._stop(n, this._handleIndex), this._change(n, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
                },
                _detectOrientation: function() {
                    this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
                },
                _normValueFromMouse: function(n) {
                    var i, r, t, u, f;
                    return this.orientation === "horizontal" ? (i = this.elementSize.width, r = n.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (i = this.elementSize.height, r = n.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), t = r / i, t > 1 && (t = 1), t < 0 && (t = 0), this.orientation === "vertical" && (t = 1 - t), u = this._valueMax() - this._valueMin(), f = this._valueMin() + t * u, this._trimAlignValue(f)
                },
                _start: function(n, t) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    return this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values()), this._trigger("start", n, i)
                },
                _slide: function(n, t, i) {
                    var r, f, u;
                    this.options.values && this.options.values.length ? (r = this.values(t ? 0 : 1), this.options.values.length === 2 && this.options.range === !0 && (t === 0 && i > r || t === 1 && i < r) && (i = r), i !== this.values(t) && (f = this.values(), f[t] = i, u = this._trigger("slide", n, {
                        handle: this.handles[t],
                        value: i,
                        values: f
                    }), r = this.values(t ? 0 : 1), u !== !1 && this.values(t, i))) : i !== this.value() && (u = this._trigger("slide", n, {
                        handle: this.handles[t],
                        value: i
                    }), u !== !1 && this.value(i))
                },
                _stop: function(n, t) {
                    var i = {
                        handle: this.handles[t],
                        value: this.value()
                    };
                    this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                    this._trigger("stop", n, i)
                },
                _change: function(n, t) {
                    if (!this._keySliding && !this._mouseSliding) {
                        var i = {
                            handle: this.handles[t],
                            value: this.value()
                        };
                        this.options.values && this.options.values.length && (i.value = this.values(t), i.values = this.values());
                        this._lastChangedValue = t;
                        this._trigger("change", n, i)
                    }
                },
                value: function(n) {
                    if (arguments.length) {
                        this.options.value = this._trimAlignValue(n);
                        this._refreshValue();
                        this._change(null, 0);
                        return
                    }
                    return this._value()
                },
                values: function(t, i) {
                    var u, f, r;
                    if (arguments.length > 1) {
                        this.options.values[t] = this._trimAlignValue(i);
                        this._refreshValue();
                        this._change(null, t);
                        return
                    }
                    if (arguments.length)
                        if (n.isArray(arguments[0])) {
                            for (u = this.options.values, f = arguments[0], r = 0; r < u.length; r += 1) u[r] = this._trimAlignValue(f[r]), this._change(null, r);
                            this._refreshValue()
                        } else return this.options.values && this.options.values.length ? this._values(t) : this.value();
                    else return this._values()
                },
                _setOption: function(t, i) {
                    var r, u = 0;
                    t === "range" && this.options.range === !0 && (i === "min" ? (this.options.value = this._values(0), this.options.values = null) : i === "max" && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null));
                    n.isArray(this.options.values) && (u = this.options.values.length);
                    t === "disabled" && this.element.toggleClass("ui-state-disabled", !!i);
                    this._super(t, i);
                    switch (t) {
                        case "orientation":
                            this._detectOrientation();
                            this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                            this._refreshValue();
                            this.handles.css(i === "horizontal" ? "bottom" : "left", "");
                            break;
                        case "value":
                            this._animateOff = !0;
                            this._refreshValue();
                            this._change(null, 0);
                            this._animateOff = !1;
                            break;
                        case "values":
                            for (this._animateOff = !0, this._refreshValue(), r = 0; r < u; r += 1) this._change(null, r);
                            this._animateOff = !1;
                            break;
                        case "step":
                        case "min":
                        case "max":
                            this._animateOff = !0;
                            this._calculateNewMax();
                            this._refreshValue();
                            this._animateOff = !1;
                            break;
                        case "range":
                            this._animateOff = !0;
                            this._refresh();
                            this._animateOff = !1
                    }
                },
                _value: function() {
                    var n = this.options.value;
                    return this._trimAlignValue(n)
                },
                _values: function(n) {
                    var r, t, i;
                    if (arguments.length) return r = this.options.values[n], this._trimAlignValue(r);
                    if (this.options.values && this.options.values.length) {
                        for (t = this.options.values.slice(), i = 0; i < t.length; i += 1) t[i] = this._trimAlignValue(t[i]);
                        return t
                    }
                    return []
                },
                _trimAlignValue: function(n) {
                    if (n <= this._valueMin()) return this._valueMin();
                    if (n >= this._valueMax()) return this._valueMax();
                    var t = this.options.step > 0 ? this.options.step : 1,
                        i = (n - this._valueMin()) % t,
                        r = n - i;
                    return Math.abs(i) * 2 >= t && (r += i > 0 ? t : -t), parseFloat(r.toFixed(5))
                },
                _calculateNewMax: function() {
                    var n = this.options.max,
                        t = this._valueMin(),
                        i = this.options.step,
                        r = Math.floor(+(n - t).toFixed(this._precision()) / i) * i;
                    n = r + t;
                    this.max = parseFloat(n.toFixed(this._precision()))
                },
                _precision: function() {
                    var n = this._precisionOf(this.options.step);
                    return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
                },
                _precisionOf: function(n) {
                    var t = n.toString(),
                        i = t.indexOf(".");
                    return i === -1 ? 0 : t.length - i - 1
                },
                _valueMin: function() {
                    return this.options.min
                },
                _valueMax: function() {
                    return this.max
                },
                _refreshValue: function() {
                    var s, t, c, f, h, e = this.options.range,
                        i = this.options,
                        r = this,
                        u = this._animateOff ? !1 : i.animate,
                        o = {};
                    this.options.values && this.options.values.length ? this.handles.each(function(f) {
                        t = (r.values(f) - r._valueMin()) / (r._valueMax() - r._valueMin()) * 100;
                        o[r.orientation === "horizontal" ? "left" : "bottom"] = t + "%";
                        n(this).stop(1, 1)[u ? "animate" : "css"](o, i.animate);
                        r.options.range === !0 && (r.orientation === "horizontal" ? (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                            left: t + "%"
                        }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                            width: t - s + "%"
                        }, {
                            queue: !1,
                            duration: i.animate
                        })) : (f === 0 && r.range.stop(1, 1)[u ? "animate" : "css"]({
                            bottom: t + "%"
                        }, i.animate), f === 1 && r.range[u ? "animate" : "css"]({
                            height: t - s + "%"
                        }, {
                            queue: !1,
                            duration: i.animate
                        })));
                        s = t
                    }) : (c = this.value(), f = this._valueMin(), h = this._valueMax(), t = h !== f ? (c - f) / (h - f) * 100 : 0, o[this.orientation === "horizontal" ? "left" : "bottom"] = t + "%", this.handle.stop(1, 1)[u ? "animate" : "css"](o, i.animate), e === "min" && this.orientation === "horizontal" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        width: t + "%"
                    }, i.animate), e === "max" && this.orientation === "horizontal" && this.range[u ? "animate" : "css"]({
                        width: 100 - t + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    }), e === "min" && this.orientation === "vertical" && this.range.stop(1, 1)[u ? "animate" : "css"]({
                        height: t + "%"
                    }, i.animate), e === "max" && this.orientation === "vertical" && this.range[u ? "animate" : "css"]({
                        height: 100 - t + "%"
                    }, {
                        queue: !1,
                        duration: i.animate
                    }))
                },
                _handleEvents: {
                    keydown: function(t) {
                        var e, r, i, u, f = n(t.target).data("ui-slider-handle-index");
                        switch (t.keyCode) {
                            case n.ui.keyCode.HOME:
                            case n.ui.keyCode.END:
                            case n.ui.keyCode.PAGE_UP:
                            case n.ui.keyCode.PAGE_DOWN:
                            case n.ui.keyCode.UP:
                            case n.ui.keyCode.RIGHT:
                            case n.ui.keyCode.DOWN:
                            case n.ui.keyCode.LEFT:
                                if (t.preventDefault(), !this._keySliding && (this._keySliding = !0, n(t.target).addClass("ui-state-active"), e = this._start(t, f), e === !1)) return
                        }
                        u = this.options.step;
                        r = this.options.values && this.options.values.length ? i = this.values(f) : i = this.value();
                        switch (t.keyCode) {
                            case n.ui.keyCode.HOME:
                                i = this._valueMin();
                                break;
                            case n.ui.keyCode.END:
                                i = this._valueMax();
                                break;
                            case n.ui.keyCode.PAGE_UP:
                                i = this._trimAlignValue(r + (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case n.ui.keyCode.PAGE_DOWN:
                                i = this._trimAlignValue(r - (this._valueMax() - this._valueMin()) / this.numPages);
                                break;
                            case n.ui.keyCode.UP:
                            case n.ui.keyCode.RIGHT:
                                if (r === this._valueMax()) return;
                                i = this._trimAlignValue(r + u);
                                break;
                            case n.ui.keyCode.DOWN:
                            case n.ui.keyCode.LEFT:
                                if (r === this._valueMin()) return;
                                i = this._trimAlignValue(r - u)
                        }
                        this._slide(t, f, i)
                    },
                    keyup: function(t) {
                        var i = n(t.target).data("ui-slider-handle-index");
                        this._keySliding && (this._keySliding = !1, this._stop(t, i), this._change(t, i), n(t.target).removeClass("ui-state-active"))
                    }
                }
            }),
            ci = n.widget("ui.sortable", n.ui.mouse, {
                version: "1.11.4",
                widgetEventPrefix: "sort",
                ready: !1,
                options: {
                    appendTo: "parent",
                    axis: !1,
                    connectWith: !1,
                    containment: !1,
                    cursor: "auto",
                    cursorAt: !1,
                    dropOnEmpty: !0,
                    forcePlaceholderSize: !1,
                    forceHelperSize: !1,
                    grid: !1,
                    handle: !1,
                    helper: "original",
                    items: "> *",
                    opacity: !1,
                    placeholder: !1,
                    revert: !1,
                    scroll: !0,
                    scrollSensitivity: 20,
                    scrollSpeed: 20,
                    scope: "default",
                    tolerance: "intersect",
                    zIndex: 1e3,
                    activate: null,
                    beforeStop: null,
                    change: null,
                    deactivate: null,
                    out: null,
                    over: null,
                    receive: null,
                    remove: null,
                    sort: null,
                    start: null,
                    stop: null,
                    update: null
                },
                _isOverAxis: function(n, t, i) {
                    return n >= t && n < t + i
                },
                _isFloating: function(n) {
                    return /left|right/.test(n.css("float")) || /inline|table-cell/.test(n.css("display"))
                },
                _create: function() {
                    this.containerCache = {};
                    this.element.addClass("ui-sortable");
                    this.refresh();
                    this.offset = this.element.offset();
                    this._mouseInit();
                    this._setHandleClassName();
                    this.ready = !0
                },
                _setOption: function(n, t) {
                    this._super(n, t);
                    n === "handle" && this._setHandleClassName()
                },
                _setHandleClassName: function() {
                    this.element.find(".ui-sortable-handle").removeClass("ui-sortable-handle");
                    n.each(this.items, function() {
                        (this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item).addClass("ui-sortable-handle")
                    })
                },
                _destroy: function() {
                    this.element.removeClass("ui-sortable ui-sortable-disabled").find(".ui-sortable-handle").removeClass("ui-sortable-handle");
                    this._mouseDestroy();
                    for (var n = this.items.length - 1; n >= 0; n--) this.items[n].item.removeData(this.widgetName + "-item");
                    return this
                },
                _mouseCapture: function(t, i) {
                    var r = null,
                        f = !1,
                        u = this;
                    return this.reverting ? !1 : this.options.disabled || this.options.type === "static" ? !1 : (this._refreshItems(t), n(t.target).parents().each(function() {
                        if (n.data(this, u.widgetName + "-item") === u) return r = n(this), !1
                    }), n.data(t.target, u.widgetName + "-item") === u && (r = n(t.target)), !r) ? !1 : this.options.handle && !i && (n(this.options.handle, r).find("*").addBack().each(function() {
                        this === t.target && (f = !0)
                    }), !f) ? !1 : (this.currentItem = r, this._removeCurrentsFromItems(), !0)
                },
                _mouseStart: function(t, i, r) {
                    var f, e, u = this.options;
                    if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(t), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                            top: this.offset.top - this.margins.top,
                            left: this.offset.left - this.margins.left
                        }, n.extend(this.offset, {
                            click: {
                                left: t.pageX - this.offset.left,
                                top: t.pageY - this.offset.top
                            },
                            parent: this._getParentOffset(),
                            relative: this._getRelativeOffset()
                        }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(t), this.originalPageX = t.pageX, this.originalPageY = t.pageY, u.cursorAt && this._adjustOffsetFromHelper(u.cursorAt), this.domPosition = {
                            prev: this.currentItem.prev()[0],
                            parent: this.currentItem.parent()[0]
                        }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), u.containment && this._setContainment(), u.cursor && u.cursor !== "auto" && (e = this.document.find("body"), this.storedCursor = e.css("cursor"), e.css("cursor", u.cursor), this.storedStylesheet = n("<style>*{ cursor: " + u.cursor + " !important; }<\/style>").appendTo(e)), u.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", u.opacity)), u.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", u.zIndex)), this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", t, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !r)
                        for (f = this.containers.length - 1; f >= 0; f--) this.containers[f]._trigger("activate", t, this._uiHash(this));
                    return n.ui.ddmanager && (n.ui.ddmanager.current = this), n.ui.ddmanager && !u.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t), this.dragging = !0, this.helper.addClass("ui-sortable-helper"), this._mouseDrag(t), !0
                },
                _mouseDrag: function(t) {
                    var e, u, f, o, i = this.options,
                        r = !1;
                    for (this.position = this._generatePosition(t), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && this.scrollParent[0].tagName !== "HTML" ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - t.pageY < i.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + i.scrollSpeed : t.pageY - this.overflowOffset.top < i.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - i.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - t.pageX < i.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + i.scrollSpeed : t.pageX - this.overflowOffset.left < i.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - i.scrollSpeed)) : (t.pageY - this.document.scrollTop() < i.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - i.scrollSpeed) : this.window.height() - (t.pageY - this.document.scrollTop()) < i.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + i.scrollSpeed)), t.pageX - this.document.scrollLeft() < i.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - i.scrollSpeed) : this.window.width() - (t.pageX - this.document.scrollLeft()) < i.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + i.scrollSpeed))), r !== !1 && n.ui.ddmanager && !i.dropBehaviour && n.ui.ddmanager.prepareOffsets(this, t)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && this.options.axis === "y" || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && this.options.axis === "x" || (this.helper[0].style.top = this.position.top + "px"), e = this.items.length - 1; e >= 0; e--)
                        if ((u = this.items[e], f = u.item[0], o = this._intersectsWithPointer(u), o) && u.instance === this.currentContainer && f !== this.currentItem[0] && this.placeholder[o === 1 ? "next" : "prev"]()[0] !== f && !n.contains(this.placeholder[0], f) && (this.options.type === "semi-dynamic" ? !n.contains(this.element[0], f) : !0)) {
                            if (this.direction = o === 1 ? "down" : "up", this.options.tolerance === "pointer" || this._intersectsWithSides(u)) this._rearrange(t, u);
                            else break;
                            this._trigger("change", t, this._uiHash());
                            break
                        }
                    return this._contactContainers(t), n.ui.ddmanager && n.ui.ddmanager.drag(this, t), this._trigger("sort", t, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
                },
                _mouseStop: function(t, i) {
                    if (t) {
                        if (n.ui.ddmanager && !this.options.dropBehaviour && n.ui.ddmanager.drop(this, t), this.options.revert) {
                            var e = this,
                                f = this.placeholder.offset(),
                                r = this.options.axis,
                                u = {};
                            r && r !== "x" || (u.left = f.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft));
                            r && r !== "y" || (u.top = f.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop));
                            this.reverting = !0;
                            n(this.helper).animate(u, parseInt(this.options.revert, 10) || 500, function() {
                                e._clear(t)
                            })
                        } else this._clear(t, i);
                        return !1
                    }
                },
                cancel: function() {
                    if (this.dragging) {
                        this._mouseUp({
                            target: null
                        });
                        this.options.helper === "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                        for (var t = this.containers.length - 1; t >= 0; t--) this.containers[t]._trigger("deactivate", null, this._uiHash(this)), this.containers[t].containerCache.over && (this.containers[t]._trigger("out", null, this._uiHash(this)), this.containers[t].containerCache.over = 0)
                    }
                    return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.options.helper !== "original" && this.helper && this.helper[0].parentNode && this.helper.remove(), n.extend(this, {
                        helper: null,
                        dragging: !1,
                        reverting: !1,
                        _noFinalSort: null
                    }), this.domPosition.prev ? n(this.domPosition.prev).after(this.currentItem) : n(this.domPosition.parent).prepend(this.currentItem)), this
                },
                serialize: function(t) {
                    var r = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, n(r).each(function() {
                        var r = (n(t.item || this).attr(t.attribute || "id") || "").match(t.expression || /(.+)[\-=_](.+)/);
                        r && i.push((t.key || r[1] + "[]") + "=" + (t.key && t.expression ? r[1] : r[2]))
                    }), !i.length && t.key && i.push(t.key + "="), i.join("&")
                },
                toArray: function(t) {
                    var r = this._getItemsAsjQuery(t && t.connected),
                        i = [];
                    return t = t || {}, r.each(function() {
                        i.push(n(t.item || this).attr(t.attribute || "id") || "")
                    }), i
                },
                _intersectsWith: function(n) {
                    var t = this.positionAbs.left,
                        h = t + this.helperProportions.width,
                        i = this.positionAbs.top,
                        c = i + this.helperProportions.height,
                        r = n.left,
                        f = r + n.width,
                        u = n.top,
                        e = u + n.height,
                        o = this.offset.click.top,
                        s = this.offset.click.left,
                        l = this.options.axis === "x" || i + o > u && i + o < e,
                        a = this.options.axis === "y" || t + s > r && t + s < f,
                        v = l && a;
                    return this.options.tolerance === "pointer" || this.options.forcePointerForContainers || this.options.tolerance !== "pointer" && this.helperProportions[this.floating ? "width" : "height"] > n[this.floating ? "width" : "height"] ? v : r < t + this.helperProportions.width / 2 && h - this.helperProportions.width / 2 < f && u < i + this.helperProportions.height / 2 && c - this.helperProportions.height / 2 < e
                },
                _intersectsWithPointer: function(n) {
                    var r = this.options.axis === "x" || this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top, n.height),
                        u = this.options.axis === "y" || this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left, n.width),
                        f = r && u,
                        t = this._getDragVerticalDirection(),
                        i = this._getDragHorizontalDirection();
                    return f ? this.floating ? i && i === "right" || t === "down" ? 2 : 1 : t && (t === "down" ? 2 : 1) : !1
                },
                _intersectsWithSides: function(n) {
                    var r = this._isOverAxis(this.positionAbs.top + this.offset.click.top, n.top + n.height / 2, n.height),
                        u = this._isOverAxis(this.positionAbs.left + this.offset.click.left, n.left + n.width / 2, n.width),
                        t = this._getDragVerticalDirection(),
                        i = this._getDragHorizontalDirection();
                    return this.floating && i ? i === "right" && u || i === "left" && !u : t && (t === "down" && r || t === "up" && !r)
                },
                _getDragVerticalDirection: function() {
                    var n = this.positionAbs.top - this.lastPositionAbs.top;
                    return n !== 0 && (n > 0 ? "down" : "up")
                },
                _getDragHorizontalDirection: function() {
                    var n = this.positionAbs.left - this.lastPositionAbs.left;
                    return n !== 0 && (n > 0 ? "right" : "left")
                },
                refresh: function(n) {
                    return this._refreshItems(n), this._setHandleClassName(), this.refreshPositions(), this
                },
                _connectWith: function() {
                    var n = this.options;
                    return n.connectWith.constructor === String ? [n.connectWith] : n.connectWith
                },
                _getItemsAsjQuery: function(t) {
                    function h() {
                        s.push(this)
                    }
                    var r, u, e, i, s = [],
                        f = [],
                        o = this._connectWith();
                    if (o && t)
                        for (r = o.length - 1; r >= 0; r--)
                            for (e = n(o[r], this.document[0]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element) : n(i.options.items, i.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), i]);
                    for (f.push([n.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                            options: this.options,
                            item: this.currentItem
                        }) : n(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), r = f.length - 1; r >= 0; r--) f[r][0].each(h);
                    return n(s)
                },
                _removeCurrentsFromItems: function() {
                    var t = this.currentItem.find(":data(" + this.widgetName + "-item)");
                    this.items = n.grep(this.items, function(n) {
                        for (var i = 0; i < t.length; i++)
                            if (t[i] === n.item[0]) return !1;
                        return !0
                    })
                },
                _refreshItems: function(t) {
                    this.items = [];
                    this.containers = [this];
                    var r, u, e, i, o, s, h, l, a = this.items,
                        f = [
                            [n.isFunction(this.options.items) ? this.options.items.call(this.element[0], t, {
                                item: this.currentItem
                            }) : n(this.options.items, this.element), this]
                        ],
                        c = this._connectWith();
                    if (c && this.ready)
                        for (r = c.length - 1; r >= 0; r--)
                            for (e = n(c[r], this.document[0]), u = e.length - 1; u >= 0; u--) i = n.data(e[u], this.widgetFullName), i && i !== this && !i.options.disabled && (f.push([n.isFunction(i.options.items) ? i.options.items.call(i.element[0], t, {
                                item: this.currentItem
                            }) : n(i.options.items, i.element), i]), this.containers.push(i));
                    for (r = f.length - 1; r >= 0; r--)
                        for (o = f[r][1], s = f[r][0], u = 0, l = s.length; u < l; u++) h = n(s[u]), h.data(this.widgetName + "-item", o), a.push({
                            item: h,
                            instance: o,
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        })
                },
                refreshPositions: function(t) {
                    this.floating = this.items.length ? this.options.axis === "x" || this._isFloating(this.items[0].item) : !1;
                    this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
                    for (var r, f, u, i = this.items.length - 1; i >= 0; i--)(r = this.items[i], r.instance !== this.currentContainer && this.currentContainer && r.item[0] !== this.currentItem[0]) || (f = this.options.toleranceElement ? n(this.options.toleranceElement, r.item) : r.item, t || (r.width = f.outerWidth(), r.height = f.outerHeight()), u = f.offset(), r.left = u.left, r.top = u.top);
                    if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
                    else
                        for (i = this.containers.length - 1; i >= 0; i--) u = this.containers[i].element.offset(), this.containers[i].containerCache.left = u.left, this.containers[i].containerCache.top = u.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
                    return this
                },
                _createPlaceholder: function(t) {
                    t = t || this;
                    var r, i = t.options;
                    i.placeholder && i.placeholder.constructor !== String || (r = i.placeholder, i.placeholder = {
                        element: function() {
                            var u = t.currentItem[0].nodeName.toLowerCase(),
                                i = n("<" + u + ">", t.document[0]).addClass(r || t.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper");
                            return u === "tbody" ? t._createTrPlaceholder(t.currentItem.find("tr").eq(0), n("<tr>", t.document[0]).appendTo(i)) : u === "tr" ? t._createTrPlaceholder(t.currentItem, i) : u === "img" && i.attr("src", t.currentItem.attr("src")), r || i.css("visibility", "hidden"), i
                        },
                        update: function(n, u) {
                            (!r || i.forcePlaceholderSize) && (u.height() || u.height(t.currentItem.innerHeight() - parseInt(t.currentItem.css("paddingTop") || 0, 10) - parseInt(t.currentItem.css("paddingBottom") || 0, 10)), u.width() || u.width(t.currentItem.innerWidth() - parseInt(t.currentItem.css("paddingLeft") || 0, 10) - parseInt(t.currentItem.css("paddingRight") || 0, 10)))
                        }
                    });
                    t.placeholder = n(i.placeholder.element.call(t.element, t.currentItem));
                    t.currentItem.after(t.placeholder);
                    i.placeholder.update(t, t.placeholder)
                },
                _createTrPlaceholder: function(t, i) {
                    var r = this;
                    t.children().each(function() {
                        n("<td>&#160;<\/td>", r.document[0]).attr("colspan", n(this).attr("colspan") || 1).appendTo(i)
                    })
                },
                _contactContainers: function(t) {
                    for (var u, c, f, a, v, o, l, s, h, e = null, i = null, r = this.containers.length - 1; r >= 0; r--)
                        if (!n.contains(this.currentItem[0], this.containers[r].element[0]))
                            if (this._intersectsWith(this.containers[r].containerCache)) {
                                if (e && n.contains(this.containers[r].element[0], e.element[0])) continue;
                                e = this.containers[r];
                                i = r
                            } else this.containers[r].containerCache.over && (this.containers[r]._trigger("out", t, this._uiHash(this)), this.containers[r].containerCache.over = 0);
                    if (e)
                        if (this.containers.length === 1) this.containers[i].containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash(this)), this.containers[i].containerCache.over = 1);
                        else {
                            for (c = 1e4, f = null, s = e.floating || this._isFloating(this.currentItem), a = s ? "left" : "top", v = s ? "width" : "height", h = s ? "clientX" : "clientY", u = this.items.length - 1; u >= 0; u--) n.contains(this.containers[i].element[0], this.items[u].item[0]) && this.items[u].item[0] !== this.currentItem[0] && (o = this.items[u].item.offset()[a], l = !1, t[h] - o > this.items[u][v] / 2 && (l = !0), Math.abs(t[h] - o) < c && (c = Math.abs(t[h] - o), f = this.items[u], this.direction = l ? "up" : "down"));
                            if (!f && !this.options.dropOnEmpty) return;
                            if (this.currentContainer === this.containers[i]) {
                                this.currentContainer.containerCache.over || (this.containers[i]._trigger("over", t, this._uiHash()), this.currentContainer.containerCache.over = 1);
                                return
                            }
                            f ? this._rearrange(t, f, null, !0) : this._rearrange(t, null, this.containers[i].element, !0);
                            this._trigger("change", t, this._uiHash());
                            this.containers[i]._trigger("change", t, this._uiHash(this));
                            this.currentContainer = this.containers[i];
                            this.options.placeholder.update(this.currentContainer, this.placeholder);
                            this.containers[i]._trigger("over", t, this._uiHash(this));
                            this.containers[i].containerCache.over = 1
                        }
                },
                _createHelper: function(t) {
                    var r = this.options,
                        i = n.isFunction(r.helper) ? n(r.helper.apply(this.element[0], [t, this.currentItem])) : r.helper === "clone" ? this.currentItem.clone() : this.currentItem;
                    return i.parents("body").length || n(r.appendTo !== "parent" ? r.appendTo : this.currentItem[0].parentNode)[0].appendChild(i[0]), i[0] === this.currentItem[0] && (this._storedCSS = {
                        width: this.currentItem[0].style.width,
                        height: this.currentItem[0].style.height,
                        position: this.currentItem.css("position"),
                        top: this.currentItem.css("top"),
                        left: this.currentItem.css("left")
                    }), (!i[0].style.width || r.forceHelperSize) && i.width(this.currentItem.width()), (!i[0].style.height || r.forceHelperSize) && i.height(this.currentItem.height()), i
                },
                _adjustOffsetFromHelper: function(t) {
                    typeof t == "string" && (t = t.split(" "));
                    n.isArray(t) && (t = {
                        left: +t[0],
                        top: +t[1] || 0
                    });
                    "left" in t && (this.offset.click.left = t.left + this.margins.left);
                    "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left);
                    "top" in t && (this.offset.click.top = t.top + this.margins.top);
                    "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
                },
                _getParentOffset: function() {
                    this.offsetParent = this.helper.offsetParent();
                    var t = this.offsetParent.offset();
                    return this.cssPosition === "absolute" && this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() === "html" && n.ui.ie) && (t = {
                        top: 0,
                        left: 0
                    }), {
                        top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                        left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                    }
                },
                _getRelativeOffset: function() {
                    if (this.cssPosition === "relative") {
                        var n = this.currentItem.position();
                        return {
                            top: n.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                            left: n.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                        }
                    }
                    return {
                        top: 0,
                        left: 0
                    }
                },
                _cacheMargins: function() {
                    this.margins = {
                        left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                        top: parseInt(this.currentItem.css("marginTop"), 10) || 0
                    }
                },
                _cacheHelperProportions: function() {
                    this.helperProportions = {
                        width: this.helper.outerWidth(),
                        height: this.helper.outerHeight()
                    }
                },
                _setContainment: function() {
                    var t, r, u, i = this.options;
                    i.containment === "parent" && (i.containment = this.helper[0].parentNode);
                    (i.containment === "document" || i.containment === "window") && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, i.containment === "document" ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, (i.containment === "document" ? this.document.width() : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]);
                    /^(document|window|parent)$/.test(i.containment) || (t = n(i.containment)[0], r = n(i.containment).offset(), u = n(t).css("overflow") !== "hidden", this.containment = [r.left + (parseInt(n(t).css("borderLeftWidth"), 10) || 0) + (parseInt(n(t).css("paddingLeft"), 10) || 0) - this.margins.left, r.top + (parseInt(n(t).css("borderTopWidth"), 10) || 0) + (parseInt(n(t).css("paddingTop"), 10) || 0) - this.margins.top, r.left + (u ? Math.max(t.scrollWidth, t.offsetWidth) : t.offsetWidth) - (parseInt(n(t).css("borderLeftWidth"), 10) || 0) - (parseInt(n(t).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, r.top + (u ? Math.max(t.scrollHeight, t.offsetHeight) : t.offsetHeight) - (parseInt(n(t).css("borderTopWidth"), 10) || 0) - (parseInt(n(t).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
                },
                _convertPositionTo: function(t, i) {
                    i || (i = this.position);
                    var r = t === "absolute" ? 1 : -1,
                        u = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                        f = /(html|body)/i.test(u[0].tagName);
                    return {
                        top: i.top + this.offset.relative.top * r + this.offset.parent.top * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : u.scrollTop()) * r,
                        left: i.left + this.offset.relative.left * r + this.offset.parent.left * r - (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : u.scrollLeft()) * r
                    }
                },
                _generatePosition: function(t) {
                    var r, u, i = this.options,
                        f = t.pageX,
                        e = t.pageY,
                        o = this.cssPosition === "absolute" && !(this.scrollParent[0] !== this.document[0] && n.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent,
                        s = /(html|body)/i.test(o[0].tagName);
                    return this.cssPosition !== "relative" || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (t.pageX - this.offset.click.left < this.containment[0] && (f = this.containment[0] + this.offset.click.left), t.pageY - this.offset.click.top < this.containment[1] && (e = this.containment[1] + this.offset.click.top), t.pageX - this.offset.click.left > this.containment[2] && (f = this.containment[2] + this.offset.click.left), t.pageY - this.offset.click.top > this.containment[3] && (e = this.containment[3] + this.offset.click.top)), i.grid && (r = this.originalPageY + Math.round((e - this.originalPageY) / i.grid[1]) * i.grid[1], e = this.containment ? r - this.offset.click.top >= this.containment[1] && r - this.offset.click.top <= this.containment[3] ? r : r - this.offset.click.top >= this.containment[1] ? r - i.grid[1] : r + i.grid[1] : r, u = this.originalPageX + Math.round((f - this.originalPageX) / i.grid[0]) * i.grid[0], f = this.containment ? u - this.offset.click.left >= this.containment[0] && u - this.offset.click.left <= this.containment[2] ? u : u - this.offset.click.left >= this.containment[0] ? u - i.grid[0] : u + i.grid[0] : u)), {
                        top: e - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (this.cssPosition === "fixed" ? -this.scrollParent.scrollTop() : s ? 0 : o.scrollTop()),
                        left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (this.cssPosition === "fixed" ? -this.scrollParent.scrollLeft() : s ? 0 : o.scrollLeft())
                    }
                },
                _rearrange: function(n, t, i, r) {
                    i ? i[0].appendChild(this.placeholder[0]) : t.item[0].parentNode.insertBefore(this.placeholder[0], this.direction === "down" ? t.item[0] : t.item[0].nextSibling);
                    this.counter = this.counter ? ++this.counter : 1;
                    var u = this.counter;
                    this._delay(function() {
                        u === this.counter && this.refreshPositions(!r)
                    })
                },
                _clear: function(n, t) {
                    function u(n, t, i) {
                        return function(r) {
                            i._trigger(n, r, t._uiHash(t))
                        }
                    }
                    this.reverting = !1;
                    var i, r = [];
                    if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                        for (i in this._storedCSS)(this._storedCSS[i] === "auto" || this._storedCSS[i] === "static") && (this._storedCSS[i] = "");
                        this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
                    } else this.currentItem.show();
                    for (this.fromOutside && !t && r.push(function(n) {
                            this._trigger("receive", n, this._uiHash(this.fromOutside))
                        }), (this.fromOutside || this.domPosition.prev !== this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent !== this.currentItem.parent()[0]) && !t && r.push(function(n) {
                            this._trigger("update", n, this._uiHash())
                        }), this !== this.currentContainer && (t || (r.push(function(n) {
                            this._trigger("remove", n, this._uiHash())
                        }), r.push(function(n) {
                            return function(t) {
                                n._trigger("receive", t, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)), r.push(function(n) {
                            return function(t) {
                                n._trigger("update", t, this._uiHash(this))
                            }
                        }.call(this, this.currentContainer)))), i = this.containers.length - 1; i >= 0; i--) t || r.push(u("deactivate", this, this.containers[i])), this.containers[i].containerCache.over && (r.push(u("out", this, this.containers[i])), this.containers[i].containerCache.over = 0);
                    if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", this._storedZIndex === "auto" ? "" : this._storedZIndex), this.dragging = !1, t || this._trigger("beforeStop", n, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !t) {
                        for (i = 0; i < r.length; i++) r[i].call(this, n);
                        this._trigger("stop", n, this._uiHash())
                    }
                    return this.fromOutside = !1, !this.cancelHelperRemoval
                },
                _trigger: function() {
                    n.Widget.prototype._trigger.apply(this, arguments) === !1 && this.cancel()
                },
                _uiHash: function(t) {
                    var i = t || this;
                    return {
                        helper: i.helper,
                        placeholder: i.placeholder || n([]),
                        position: i.position,
                        originalPosition: i.originalPosition,
                        offset: i.positionAbs,
                        item: i.currentItem,
                        sender: t ? t.element : null
                    }
                }
            });
        var li = n.widget("ui.spinner", {
                version: "1.11.4",
                defaultElement: "<input>",
                widgetEventPrefix: "spin",
                options: {
                    culture: null,
                    icons: {
                        down: "ui-icon-triangle-1-s",
                        up: "ui-icon-triangle-1-n"
                    },
                    incremental: !0,
                    max: null,
                    min: null,
                    numberFormat: null,
                    page: 10,
                    step: 1,
                    change: null,
                    spin: null,
                    start: null,
                    stop: null
                },
                _create: function() {
                    this._setOption("max", this.options.max);
                    this._setOption("min", this.options.min);
                    this._setOption("step", this.options.step);
                    this.value() !== "" && this._value(this.element.val(), !0);
                    this._draw();
                    this._on(this._events);
                    this._refresh();
                    this._on(this.window, {
                        beforeunload: function() {
                            this.element.removeAttr("autocomplete")
                        }
                    })
                },
                _getCreateOptions: function() {
                    var t = {},
                        i = this.element;
                    return n.each(["min", "max", "step"], function(n, r) {
                        var u = i.attr(r);
                        u !== undefined && u.length && (t[r] = u)
                    }), t
                },
                _events: {
                    keydown: function(n) {
                        this._start(n) && this._keydown(n) && n.preventDefault()
                    },
                    keyup: "_stop",
                    focus: function() {
                        this.previous = this.element.val()
                    },
                    blur: function(n) {
                        if (this.cancelBlur) {
                            delete this.cancelBlur;
                            return
                        }
                        this._stop();
                        this._refresh();
                        this.previous !== this.element.val() && this._trigger("change", n)
                    },
                    mousewheel: function(n, t) {
                        if (t) {
                            if (!this.spinning && !this._start(n)) return !1;
                            this._spin((t > 0 ? 1 : -1) * this.options.step, n);
                            clearTimeout(this.mousewheelTimer);
                            this.mousewheelTimer = this._delay(function() {
                                this.spinning && this._stop(n)
                            }, 100);
                            n.preventDefault()
                        }
                    },
                    "mousedown .ui-spinner-button": function(t) {
                        function r() {
                            var n = this.element[0] === this.document[0].activeElement;
                            n || (this.element.focus(), this.previous = i, this._delay(function() {
                                this.previous = i
                            }))
                        }
                        var i;
                        (i = this.element[0] === this.document[0].activeElement ? this.previous : this.element.val(), t.preventDefault(), r.call(this), this.cancelBlur = !0, this._delay(function() {
                            delete this.cancelBlur;
                            r.call(this)
                        }), this._start(t) !== !1) && this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                    },
                    "mouseup .ui-spinner-button": "_stop",
                    "mouseenter .ui-spinner-button": function(t) {
                        if (n(t.currentTarget).hasClass("ui-state-active")) {
                            if (this._start(t) === !1) return !1;
                            this._repeat(null, n(t.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, t)
                        }
                    },
                    "mouseleave .ui-spinner-button": "_stop"
                },
                _draw: function() {
                    var n = this.uiSpinner = this.element.addClass("ui-spinner-input").attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml());
                    this.element.attr("role", "spinbutton");
                    this.buttons = n.find(".ui-spinner-button").attr("tabIndex", -1).button().removeClass("ui-corner-all");
                    this.buttons.height() > Math.ceil(n.height() * .5) && n.height() > 0 && n.height(n.height());
                    this.options.disabled && this.disable()
                },
                _keydown: function(t) {
                    var r = this.options,
                        i = n.ui.keyCode;
                    switch (t.keyCode) {
                        case i.UP:
                            return this._repeat(null, 1, t), !0;
                        case i.DOWN:
                            return this._repeat(null, -1, t), !0;
                        case i.PAGE_UP:
                            return this._repeat(null, r.page, t), !0;
                        case i.PAGE_DOWN:
                            return this._repeat(null, -r.page, t), !0
                    }
                    return !1
                },
                _uiSpinnerHtml: function() {
                    return "<span class='ui-spinner ui-widget ui-widget-content ui-corner-all'><\/span>"
                },
                _buttonHtml: function() {
                    return "<a class='ui-spinner-button ui-spinner-up ui-corner-tr'><span class='ui-icon " + this.options.icons.up + "'>&#9650;<\/span><\/a><a class='ui-spinner-button ui-spinner-down ui-corner-br'><span class='ui-icon " + this.options.icons.down + "'>&#9660;<\/span><\/a>"
                },
                _start: function(n) {
                    return !this.spinning && this._trigger("start", n) === !1 ? !1 : (this.counter || (this.counter = 1), this.spinning = !0, !0)
                },
                _repeat: function(n, t, i) {
                    n = n || 500;
                    clearTimeout(this.timer);
                    this.timer = this._delay(function() {
                        this._repeat(40, t, i)
                    }, n);
                    this._spin(t * this.options.step, i)
                },
                _spin: function(n, t) {
                    var i = this.value() || 0;
                    this.counter || (this.counter = 1);
                    i = this._adjustValue(i + n * this._increment(this.counter));
                    this.spinning && this._trigger("spin", t, {
                        value: i
                    }) === !1 || (this._value(i), this.counter++)
                },
                _increment: function(t) {
                    var i = this.options.incremental;
                    return i ? n.isFunction(i) ? i(t) : Math.floor(t * t * t / 5e4 - t * t / 500 + 17 * t / 200 + 1) : 1
                },
                _precision: function() {
                    var n = this._precisionOf(this.options.step);
                    return this.options.min !== null && (n = Math.max(n, this._precisionOf(this.options.min))), n
                },
                _precisionOf: function(n) {
                    var t = n.toString(),
                        i = t.indexOf(".");
                    return i === -1 ? 0 : t.length - i - 1
                },
                _adjustValue: function(n) {
                    var r, i, t = this.options;
                    return (r = t.min !== null ? t.min : 0, i = n - r, i = Math.round(i / t.step) * t.step, n = r + i, n = parseFloat(n.toFixed(this._precision())), t.max !== null && n > t.max) ? t.max : t.min !== null && n < t.min ? t.min : n
                },
                _stop: function(n) {
                    this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", n))
                },
                _setOption: function(n, t) {
                    if (n === "culture" || n === "numberFormat") {
                        var i = this._parse(this.element.val());
                        this.options[n] = t;
                        this.element.val(this._format(i));
                        return
                    }(n === "max" || n === "min" || n === "step") && typeof t == "string" && (t = this._parse(t));
                    n === "icons" && (this.buttons.first().find(".ui-icon").removeClass(this.options.icons.up).addClass(t.up), this.buttons.last().find(".ui-icon").removeClass(this.options.icons.down).addClass(t.down));
                    this._super(n, t);
                    n === "disabled" && (this.widget().toggleClass("ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable"))
                },
                _setOptions: i(function(n) {
                    this._super(n)
                }),
                _parse: function(n) {
                    return typeof n == "string" && n !== "" && (n = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(n, 10, this.options.culture) : +n), n === "" || isNaN(n) ? null : n
                },
                _format: function(n) {
                    return n === "" ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(n, this.options.numberFormat, this.options.culture) : n
                },
                _refresh: function() {
                    this.element.attr({
                        "aria-valuemin": this.options.min,
                        "aria-valuemax": this.options.max,
                        "aria-valuenow": this._parse(this.element.val())
                    })
                },
                isValid: function() {
                    var n = this.value();
                    return n === null ? !1 : n === this._adjustValue(n)
                },
                _value: function(n, t) {
                    var i;
                    n !== "" && (i = this._parse(n), i !== null && (t || (i = this._adjustValue(i)), n = this._format(i)));
                    this.element.val(n);
                    this._refresh()
                },
                _destroy: function() {
                    this.element.removeClass("ui-spinner-input").prop("disabled", !1).removeAttr("autocomplete").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
                    this.uiSpinner.replaceWith(this.element)
                },
                stepUp: i(function(n) {
                    this._stepUp(n)
                }),
                _stepUp: function(n) {
                    this._start() && (this._spin((n || 1) * this.options.step), this._stop())
                },
                stepDown: i(function(n) {
                    this._stepDown(n)
                }),
                _stepDown: function(n) {
                    this._start() && (this._spin((n || 1) * -this.options.step), this._stop())
                },
                pageUp: i(function(n) {
                    this._stepUp((n || 1) * this.options.page)
                }),
                pageDown: i(function(n) {
                    this._stepDown((n || 1) * this.options.page)
                }),
                value: function(n) {
                    if (!arguments.length) return this._parse(this.element.val());
                    i(this._value).call(this, n)
                },
                widget: function() {
                    return this.uiSpinner
                }
            }),
            ai = n.widget("ui.tabs", {
                version: "1.11.4",
                delay: 300,
                options: {
                    active: null,
                    collapsible: !1,
                    event: "click",
                    heightStyle: "content",
                    hide: null,
                    show: null,
                    activate: null,
                    beforeActivate: null,
                    beforeLoad: null,
                    load: null
                },
                _isLocal: function() {
                    var n = /#.*$/;
                    return function(t) {
                        var i, r;
                        t = t.cloneNode(!1);
                        i = t.href.replace(n, "");
                        r = location.href.replace(n, "");
                        try {
                            i = decodeURIComponent(i)
                        } catch (u) {}
                        try {
                            r = decodeURIComponent(r)
                        } catch (u) {}
                        return t.hash.length > 1 && i === r
                    }
                }(),
                _create: function() {
                    var i = this,
                        t = this.options;
                    this.running = !1;
                    this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all").toggleClass("ui-tabs-collapsible", t.collapsible);
                    this._processTabs();
                    t.active = this._initialActive();
                    n.isArray(t.disabled) && (t.disabled = n.unique(t.disabled.concat(n.map(this.tabs.filter(".ui-state-disabled"), function(n) {
                        return i.tabs.index(n)
                    }))).sort());
                    this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(t.active) : n();
                    this._refresh();
                    this.active.length && this.load(t.active)
                },
                _initialActive: function() {
                    var t = this.options.active,
                        i = this.options.collapsible,
                        r = location.hash.substring(1);
                    return t === null && (r && this.tabs.each(function(i, u) {
                        if (n(u).attr("aria-controls") === r) return t = i, !1
                    }), t === null && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (t === null || t === -1) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), t === -1 && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
                },
                _getCreateEventData: function() {
                    return {
                        tab: this.active,
                        panel: this.active.length ? this._getPanelForTab(this.active) : n()
                    }
                },
                _tabKeydown: function(t) {
                    var r = n(this.document[0].activeElement).closest("li"),
                        i = this.tabs.index(r),
                        u = !0;
                    if (!this._handlePageNav(t)) {
                        switch (t.keyCode) {
                            case n.ui.keyCode.RIGHT:
                            case n.ui.keyCode.DOWN:
                                i++;
                                break;
                            case n.ui.keyCode.UP:
                            case n.ui.keyCode.LEFT:
                                u = !1;
                                i--;
                                break;
                            case n.ui.keyCode.END:
                                i = this.anchors.length - 1;
                                break;
                            case n.ui.keyCode.HOME:
                                i = 0;
                                break;
                            case n.ui.keyCode.SPACE:
                                t.preventDefault();
                                clearTimeout(this.activating);
                                this._activate(i);
                                return;
                            case n.ui.keyCode.ENTER:
                                t.preventDefault();
                                clearTimeout(this.activating);
                                this._activate(i === this.options.active ? !1 : i);
                                return;
                            default:
                                return
                        }
                        t.preventDefault();
                        clearTimeout(this.activating);
                        i = this._focusNextTab(i, u);
                        t.ctrlKey || t.metaKey || (r.attr("aria-selected", "false"), this.tabs.eq(i).attr("aria-selected", "true"), this.activating = this._delay(function() {
                            this.option("active", i)
                        }, this.delay))
                    }
                },
                _panelKeydown: function(t) {
                    this._handlePageNav(t) || t.ctrlKey && t.keyCode === n.ui.keyCode.UP && (t.preventDefault(), this.active.focus())
                },
                _handlePageNav: function(t) {
                    return t.altKey && t.keyCode === n.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === n.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
                },
                _findNextTab: function(t, i) {
                    function u() {
                        return t > r && (t = 0), t < 0 && (t = r), t
                    }
                    for (var r = this.tabs.length - 1; n.inArray(u(), this.options.disabled) !== -1;) t = i ? t + 1 : t - 1;
                    return t
                },
                _focusNextTab: function(n, t) {
                    return n = this._findNextTab(n, t), this.tabs.eq(n).focus(), n
                },
                _setOption: function(n, t) {
                    if (n === "active") {
                        this._activate(t);
                        return
                    }
                    if (n === "disabled") {
                        this._setupDisabled(t);
                        return
                    }
                    this._super(n, t);
                    n === "collapsible" && (this.element.toggleClass("ui-tabs-collapsible", t), t || this.options.active !== !1 || this._activate(0));
                    n === "event" && this._setupEvents(t);
                    n === "heightStyle" && this._setupHeightStyle(t)
                },
                _sanitizeSelector: function(n) {
                    return n ? n.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
                },
                refresh: function() {
                    var t = this.options,
                        i = this.tablist.children(":has(a[href])");
                    t.disabled = n.map(i.filter(".ui-state-disabled"), function(n) {
                        return i.index(n)
                    });
                    this._processTabs();
                    t.active !== !1 && this.anchors.length ? this.active.length && !n.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = n()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = n());
                    this._refresh()
                },
                _refresh: function() {
                    this._setupDisabled(this.options.disabled);
                    this._setupEvents(this.options.event);
                    this._setupHeightStyle(this.options.heightStyle);
                    this.tabs.not(this.active).attr({
                        "aria-selected": "false",
                        "aria-expanded": "false",
                        tabIndex: -1
                    });
                    this.panels.not(this._getPanelForTab(this.active)).hide().attr({
                        "aria-hidden": "true"
                    });
                    this.active.length ? (this.active.addClass("ui-tabs-active ui-state-active").attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    }), this._getPanelForTab(this.active).show().attr({
                        "aria-hidden": "false"
                    })) : this.tabs.eq(0).attr("tabIndex", 0)
                },
                _processTabs: function() {
                    var t = this,
                        i = this.tabs,
                        r = this.anchors,
                        u = this.panels;
                    this.tablist = this._getList().addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").attr("role", "tablist").delegate("> li", "mousedown" + this.eventNamespace, function(t) {
                        n(this).is(".ui-state-disabled") && t.preventDefault()
                    }).delegate(".ui-tabs-anchor", "focus" + this.eventNamespace, function() {
                        n(this).closest("li").is(".ui-state-disabled") && this.blur()
                    });
                    this.tabs = this.tablist.find("> li:has(a[href])").addClass("ui-state-default ui-corner-top").attr({
                        role: "tab",
                        tabIndex: -1
                    });
                    this.anchors = this.tabs.map(function() {
                        return n("a", this)[0]
                    }).addClass("ui-tabs-anchor").attr({
                        role: "presentation",
                        tabIndex: -1
                    });
                    this.panels = n();
                    this.anchors.each(function(i, r) {
                        var f, u, e, s = n(r).uniqueId().attr("id"),
                            o = n(r).closest("li"),
                            h = o.attr("aria-controls");
                        t._isLocal(r) ? (f = r.hash, e = f.substring(1), u = t.element.find(t._sanitizeSelector(f))) : (e = o.attr("aria-controls") || n({}).uniqueId()[0].id, f = "#" + e, u = t.element.find(f), u.length || (u = t._createPanel(e), u.insertAfter(t.panels[i - 1] || t.tablist)), u.attr("aria-live", "polite"));
                        u.length && (t.panels = t.panels.add(u));
                        h && o.data("ui-tabs-aria-controls", h);
                        o.attr({
                            "aria-controls": e,
                            "aria-labelledby": s
                        });
                        u.attr("aria-labelledby", s)
                    });
                    this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").attr("role", "tabpanel");
                    i && (this._off(i.not(this.tabs)), this._off(r.not(this.anchors)), this._off(u.not(this.panels)))
                },
                _getList: function() {
                    return this.tablist || this.element.find("ol,ul").eq(0)
                },
                _createPanel: function(t) {
                    return n("<div>").attr("id", t).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").data("ui-tabs-destroy", !0)
                },
                _setupDisabled: function(t) {
                    n.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1);
                    for (var i = 0, r; r = this.tabs[i]; i++) t === !0 || n.inArray(i, t) !== -1 ? n(r).addClass("ui-state-disabled").attr("aria-disabled", "true") : n(r).removeClass("ui-state-disabled").removeAttr("aria-disabled");
                    this.options.disabled = t
                },
                _setupEvents: function(t) {
                    var i = {};
                    t && n.each(t.split(" "), function(n, t) {
                        i[t] = "_eventHandler"
                    });
                    this._off(this.anchors.add(this.tabs).add(this.panels));
                    this._on(!0, this.anchors, {
                        click: function(n) {
                            n.preventDefault()
                        }
                    });
                    this._on(this.anchors, i);
                    this._on(this.tabs, {
                        keydown: "_tabKeydown"
                    });
                    this._on(this.panels, {
                        keydown: "_panelKeydown"
                    });
                    this._focusable(this.tabs);
                    this._hoverable(this.tabs)
                },
                _setupHeightStyle: function(t) {
                    var i, r = this.element.parent();
                    t === "fill" ? (i = r.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                        var t = n(this),
                            r = t.css("position");
                        r !== "absolute" && r !== "fixed" && (i -= t.outerHeight(!0))
                    }), this.element.children().not(this.panels).each(function() {
                        i -= n(this).outerHeight(!0)
                    }), this.panels.each(function() {
                        n(this).height(Math.max(0, i - n(this).innerHeight() + n(this).height()))
                    }).css("overflow", "auto")) : t === "auto" && (i = 0, this.panels.each(function() {
                        i = Math.max(i, n(this).height("").height())
                    }).height(i))
                },
                _eventHandler: function(t) {
                    var u = this.options,
                        r = this.active,
                        c = n(t.currentTarget),
                        i = c.closest("li"),
                        f = i[0] === r[0],
                        e = f && u.collapsible,
                        o = e ? n() : this._getPanelForTab(i),
                        s = r.length ? this._getPanelForTab(r) : n(),
                        h = {
                            oldTab: r,
                            oldPanel: s,
                            newTab: e ? n() : i,
                            newPanel: o
                        };
                    (t.preventDefault(), i.hasClass("ui-state-disabled") || i.hasClass("ui-tabs-loading") || this.running || f && !u.collapsible || this._trigger("beforeActivate", t, h) === !1) || (u.active = e ? !1 : this.tabs.index(i), this.active = f ? n() : i, this.xhr && this.xhr.abort(), s.length || o.length || n.error("jQuery UI Tabs: Mismatching fragment identifier."), o.length && this.load(this.tabs.index(i), t), this._toggle(t, h))
                },
                _toggle: function(t, i) {
                    function e() {
                        u.running = !1;
                        u._trigger("activate", t, i)
                    }

                    function o() {
                        i.newTab.closest("li").addClass("ui-tabs-active ui-state-active");
                        r.length && u.options.show ? u._show(r, u.options.show, e) : (r.show(), e())
                    }
                    var u = this,
                        r = i.newPanel,
                        f = i.oldPanel;
                    this.running = !0;
                    f.length && this.options.hide ? this._hide(f, this.options.hide, function() {
                        i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active");
                        o()
                    }) : (i.oldTab.closest("li").removeClass("ui-tabs-active ui-state-active"), f.hide(), o());
                    f.attr("aria-hidden", "true");
                    i.oldTab.attr({
                        "aria-selected": "false",
                        "aria-expanded": "false"
                    });
                    r.length && f.length ? i.oldTab.attr("tabIndex", -1) : r.length && this.tabs.filter(function() {
                        return n(this).attr("tabIndex") === 0
                    }).attr("tabIndex", -1);
                    r.attr("aria-hidden", "false");
                    i.newTab.attr({
                        "aria-selected": "true",
                        "aria-expanded": "true",
                        tabIndex: 0
                    })
                },
                _activate: function(t) {
                    var r, i = this._findActive(t);
                    i[0] !== this.active[0] && (i.length || (i = this.active), r = i.find(".ui-tabs-anchor")[0], this._eventHandler({
                        target: r,
                        currentTarget: r,
                        preventDefault: n.noop
                    }))
                },
                _findActive: function(t) {
                    return t === !1 ? n() : this.tabs.eq(t)
                },
                _getIndex: function(n) {
                    return typeof n == "string" && (n = this.anchors.index(this.anchors.filter("[href$='" + n + "']"))), n
                },
                _destroy: function() {
                    this.xhr && this.xhr.abort();
                    this.element.removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible");
                    this.tablist.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all").removeAttr("role");
                    this.anchors.removeClass("ui-tabs-anchor").removeAttr("role").removeAttr("tabIndex").removeUniqueId();
                    this.tablist.unbind(this.eventNamespace);
                    this.tabs.add(this.panels).each(function() {
                        n.data(this, "ui-tabs-destroy") ? n(this).remove() : n(this).removeClass("ui-state-default ui-state-active ui-state-disabled ui-corner-top ui-corner-bottom ui-widget-content ui-tabs-active ui-tabs-panel").removeAttr("tabIndex").removeAttr("aria-live").removeAttr("aria-busy").removeAttr("aria-selected").removeAttr("aria-labelledby").removeAttr("aria-hidden").removeAttr("aria-expanded").removeAttr("role")
                    });
                    this.tabs.each(function() {
                        var t = n(this),
                            i = t.data("ui-tabs-aria-controls");
                        i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
                    });
                    this.panels.show();
                    this.options.heightStyle !== "content" && this.panels.css("height", "")
                },
                enable: function(t) {
                    var i = this.options.disabled;
                    i !== !1 && (t === undefined ? i = !1 : (t = this._getIndex(t), i = n.isArray(i) ? n.map(i, function(n) {
                        return n !== t ? n : null
                    }) : n.map(this.tabs, function(n, i) {
                        return i !== t ? i : null
                    })), this._setupDisabled(i))
                },
                disable: function(t) {
                    var i = this.options.disabled;
                    if (i !== !0) {
                        if (t === undefined) i = !0;
                        else {
                            if (t = this._getIndex(t), n.inArray(t, i) !== -1) return;
                            i = n.isArray(i) ? n.merge([t], i).sort() : [t]
                        }
                        this._setupDisabled(i)
                    }
                },
                load: function(t, i) {
                    t = this._getIndex(t);
                    var u = this,
                        r = this.tabs.eq(t),
                        e = r.find(".ui-tabs-anchor"),
                        f = this._getPanelForTab(r),
                        o = {
                            tab: r,
                            panel: f
                        },
                        s = function(n, t) {
                            t === "abort" && u.panels.stop(!1, !0);
                            r.removeClass("ui-tabs-loading");
                            f.removeAttr("aria-busy");
                            n === u.xhr && delete u.xhr
                        };
                    this._isLocal(e[0]) || (this.xhr = n.ajax(this._ajaxSettings(e, i, o)), this.xhr && this.xhr.statusText !== "canceled" && (r.addClass("ui-tabs-loading"), f.attr("aria-busy", "true"), this.xhr.done(function(n, t, r) {
                        setTimeout(function() {
                            f.html(n);
                            u._trigger("load", i, o);
                            s(r, t)
                        }, 1)
                    }).fail(function(n, t) {
                        setTimeout(function() {
                            s(n, t)
                        }, 1)
                    })))
                },
                _ajaxSettings: function(t, i, r) {
                    var u = this;
                    return {
                        url: t.attr("href"),
                        beforeSend: function(t, f) {
                            return u._trigger("beforeLoad", i, n.extend({
                                jqXHR: t,
                                ajaxSettings: f
                            }, r))
                        }
                    }
                },
                _getPanelForTab: function(t) {
                    var i = n(t).attr("aria-controls");
                    return this.element.find(this._sanitizeSelector("#" + i))
                }
            }),
            vi = n.widget("ui.tooltip", {
                version: "1.11.4",
                options: {
                    content: function() {
                        var t = n(this).attr("title") || "";
                        return n("<a>").text(t).html()
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
                _addDescribedBy: function(t, i) {
                    var r = (t.attr("aria-describedby") || "").split(/\s+/);
                    r.push(i);
                    t.data("ui-tooltip-id", i).attr("aria-describedby", n.trim(r.join(" ")))
                },
                _removeDescribedBy: function(t) {
                    var u = t.data("ui-tooltip-id"),
                        i = (t.attr("aria-describedby") || "").split(/\s+/),
                        r = n.inArray(u, i);
                    r !== -1 && i.splice(r, 1);
                    t.removeData("ui-tooltip-id");
                    i = n.trim(i.join(" "));
                    i ? t.attr("aria-describedby", i) : t.removeAttr("aria-describedby")
                },
                _create: function() {
                    this._on({
                        mouseover: "open",
                        focusin: "open"
                    });
                    this.tooltips = {};
                    this.parents = {};
                    this.options.disabled && this._disable();
                    this.liveRegion = n("<div>").attr({
                        role: "log",
                        "aria-live": "assertive",
                        "aria-relevant": "additions"
                    }).addClass("ui-helper-hidden-accessible").appendTo(this.document[0].body)
                },
                _setOption: function(t, i) {
                    var r = this;
                    if (t === "disabled") {
                        this[i ? "_disable" : "_enable"]();
                        this.options[t] = i;
                        return
                    }
                    this._super(t, i);
                    t === "content" && n.each(this.tooltips, function(n, t) {
                        r._updateContent(t.element)
                    })
                },
                _disable: function() {
                    var t = this;
                    n.each(this.tooltips, function(i, r) {
                        var u = n.Event("blur");
                        u.target = u.currentTarget = r.element[0];
                        t.close(u, !0)
                    });
                    this.element.find(this.options.items).addBack().each(function() {
                        var t = n(this);
                        t.is("[title]") && t.data("ui-tooltip-title", t.attr("title")).removeAttr("title")
                    })
                },
                _enable: function() {
                    this.element.find(this.options.items).addBack().each(function() {
                        var t = n(this);
                        t.data("ui-tooltip-title") && t.attr("title", t.data("ui-tooltip-title"))
                    })
                },
                open: function(t) {
                    var r = this,
                        i = n(t ? t.target : this.element).closest(this.options.items);
                    i.length && !i.data("ui-tooltip-id") && (i.attr("title") && i.data("ui-tooltip-title", i.attr("title")), i.data("ui-tooltip-open", !0), t && t.type === "mouseover" && i.parents().each(function() {
                        var t = n(this),
                            i;
                        t.data("ui-tooltip-open") && (i = n.Event("blur"), i.target = i.currentTarget = this, r.close(i, !0));
                        t.attr("title") && (t.uniqueId(), r.parents[this.id] = {
                            element: this,
                            title: t.attr("title")
                        }, t.attr("title", ""))
                    }), this._registerCloseHandlers(t, i), this._updateContent(i, t))
                },
                _updateContent: function(n, t) {
                    var i, r = this.options.content,
                        u = this,
                        f = t ? t.type : null;
                    if (typeof r == "string") return this._open(t, n, r);
                    i = r.call(n[0], function(i) {
                        u._delay(function() {
                            n.data("ui-tooltip-open") && (t && (t.type = f), this._open(t, n, i))
                        })
                    });
                    i && this._open(t, n, i)
                },
                _open: function(t, i, r) {
                    function s(n) {
                        (o.of = n, u.is(":hidden")) || u.position(o)
                    }
                    var f, u, h, e, o = n.extend({}, this.options.position);
                    if (r) {
                        if (f = this._find(i), f) {
                            f.tooltip.find(".ui-tooltip-content").html(r);
                            return
                        }
                        i.is("[title]") && (t && t.type === "mouseover" ? i.attr("title", "") : i.removeAttr("title"));
                        f = this._tooltip(i);
                        u = f.tooltip;
                        this._addDescribedBy(i, u.attr("id"));
                        u.find(".ui-tooltip-content").html(r);
                        this.liveRegion.children().hide();
                        r.clone ? (e = r.clone(), e.removeAttr("id").find("[id]").removeAttr("id")) : e = r;
                        n("<div>").html(e).appendTo(this.liveRegion);
                        this.options.track && t && /^mouse/.test(t.type) ? (this._on(this.document, {
                            mousemove: s
                        }), s(t)) : u.position(n.extend({
                            of: i
                        }, this.options.position));
                        u.hide();
                        this._show(u, this.options.show);
                        this.options.show && this.options.show.delay && (h = this.delayedShow = setInterval(function() {
                            u.is(":visible") && (s(o.of), clearInterval(h))
                        }, n.fx.interval));
                        this._trigger("open", t, {
                            tooltip: u
                        })
                    }
                },
                _registerCloseHandlers: function(t, i) {
                    var r = {
                        keyup: function(t) {
                            if (t.keyCode === n.ui.keyCode.ESCAPE) {
                                var r = n.Event(t);
                                r.currentTarget = i[0];
                                this.close(r, !0)
                            }
                        }
                    };
                    i[0] !== this.element[0] && (r.remove = function() {
                        this._removeTooltip(this._find(i).tooltip)
                    });
                    t && t.type !== "mouseover" || (r.mouseleave = "close");
                    t && t.type !== "focusin" || (r.focusout = "close");
                    this._on(!0, i, r)
                },
                close: function(t) {
                    var u, f = this,
                        i = n(t ? t.currentTarget : this.element),
                        r = this._find(i);
                    if (!r) {
                        i.removeData("ui-tooltip-open");
                        return
                    }(u = r.tooltip, r.closing) || (clearInterval(this.delayedShow), i.data("ui-tooltip-title") && !i.attr("title") && i.attr("title", i.data("ui-tooltip-title")), this._removeDescribedBy(i), r.hiding = !0, u.stop(!0), this._hide(u, this.options.hide, function() {
                        f._removeTooltip(n(this))
                    }), i.removeData("ui-tooltip-open"), this._off(i, "mouseleave focusout keyup"), i[0] !== this.element[0] && this._off(i, "remove"), this._off(this.document, "mousemove"), t && t.type === "mouseleave" && n.each(this.parents, function(t, i) {
                        n(i.element).attr("title", i.title);
                        delete f.parents[t]
                    }), r.closing = !0, this._trigger("close", t, {
                        tooltip: u
                    }), r.hiding || (r.closing = !1))
                },
                _tooltip: function(t) {
                    var i = n("<div>").attr("role", "tooltip").addClass("ui-tooltip ui-widget ui-corner-all ui-widget-content " + (this.options.tooltipClass || "")),
                        r = i.uniqueId().attr("id");
                    return n("<div>").addClass("ui-tooltip-content").appendTo(i), i.appendTo(this.document[0].body), this.tooltips[r] = {
                        element: t,
                        tooltip: i
                    }
                },
                _find: function(n) {
                    var t = n.data("ui-tooltip-id");
                    return t ? this.tooltips[t] : null
                },
                _removeTooltip: function(n) {
                    n.remove();
                    delete this.tooltips[n.attr("id")]
                },
                _destroy: function() {
                    var t = this;
                    n.each(this.tooltips, function(i, r) {
                        var f = n.Event("blur"),
                            u = r.element;
                        f.target = f.currentTarget = u[0];
                        t.close(f, !0);
                        n("#" + i).remove();
                        u.data("ui-tooltip-title") && (u.attr("title") || u.attr("title", u.data("ui-tooltip-title")), u.removeData("ui-tooltip-title"))
                    });
                    this.liveRegion.remove()
                }
            })
    }), function(n) {
        typeof define == "function" && define.amd ? define(["jquery"], n) : typeof module == "object" && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
    }(function(n) {
        n.extend(n.fn, {
            validate: function(t) {
                if (!this.length) {
                    t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing.");
                    return
                }
                var i = n.data(this[0], "validator");
                if (i) return i;
                if (this.attr("novalidate", "novalidate"), i = new n.validator(t, this[0]), n.data(this[0], "validator", i), i.settings.onsubmit) {
                    this.on("click.validate", ":submit", function(t) {
                        i.settings.submitHandler && (i.submitButton = t.target);
                        n(this).hasClass("cancel") && (i.cancelSubmit = !0);
                        n(this).attr("formnovalidate") !== undefined && (i.cancelSubmit = !0)
                    });
                    this.on("submit.validate", function(t) {
                        function r() {
                            var u, r;
                            return i.settings.submitHandler ? (i.submitButton && (u = n("<input type='hidden'/>").attr("name", i.submitButton.name).val(n(i.submitButton).val()).appendTo(i.currentForm)), r = i.settings.submitHandler.call(i, i.currentForm, t), i.submitButton && u.remove(), r !== undefined) ? r : !1 : !0
                        }
                        return (i.settings.debug && t.preventDefault(), i.cancelSubmit) ? (i.cancelSubmit = !1, r()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : r() : (i.focusInvalid(), !1)
                    })
                }
                return i
            },
            valid: function() {
                var t, i, r;
                return n(this[0]).is("form") ? t = this.validate().form() : (r = [], t = !0, i = n(this[0].form).validate(), this.each(function() {
                    t = i.element(this) && t;
                    t || (r = r.concat(i.errorList))
                }), i.errorList = r), t
            },
            rules: function(t, i) {
                if (this.length) {
                    var r = this[0],
                        e, s, f, u, o, h;
                    if (t) {
                        e = n.data(r.form, "validator").settings;
                        s = e.rules;
                        f = n.validator.staticRules(r);
                        switch (t) {
                            case "add":
                                n.extend(f, n.validator.normalizeRule(i));
                                delete f.messages;
                                s[r.name] = f;
                                i.messages && (e.messages[r.name] = n.extend(e.messages[r.name], i.messages));
                                break;
                            case "remove":
                                return i ? (h = {}, n.each(i.split(/\s/), function(t, i) {
                                    h[i] = f[i];
                                    delete f[i];
                                    i === "required" && n(r).removeAttr("aria-required")
                                }), h) : (delete s[r.name], f)
                        }
                    }
                    return u = n.validator.normalizeRules(n.extend({}, n.validator.classRules(r), n.validator.attributeRules(r), n.validator.dataRules(r), n.validator.staticRules(r)), r), u.required && (o = u.required, delete u.required, u = n.extend({
                        required: o
                    }, u), n(r).attr("aria-required", "true")), u.remote && (o = u.remote, delete u.remote, u = n.extend(u, {
                        remote: o
                    })), u
                }
            }
        });
        n.extend(n.expr[":"], {
            blank: function(t) {
                return !n.trim("" + n(t).val())
            },
            filled: function(t) {
                var i = n(t).val();
                return i !== null && !!n.trim("" + i)
            },
            unchecked: function(t) {
                return !n(t).prop("checked")
            }
        });
        n.validator = function(t, i) {
            this.settings = n.extend(!0, {}, n.validator.defaults, t);
            this.currentForm = i;
            this.init()
        };
        n.validator.format = function(t, i) {
            return arguments.length === 1 ? function() {
                var i = n.makeArray(arguments);
                return i.unshift(t), n.validator.format.apply(this, i)
            } : i === undefined ? t : (arguments.length > 2 && i.constructor !== Array && (i = n.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), n.each(i, function(n, i) {
                t = t.replace(new RegExp("\\{" + n + "\\}", "g"), function() {
                    return i
                })
            }), t)
        };
        n.extend(n.validator, {
            defaults: {
                messages: {},
                groups: {},
                rules: {},
                errorClass: "error",
                pendingClass: "pending",
                validClass: "valid",
                errorElement: "label",
                focusCleanup: !1,
                focusInvalid: !0,
                errorContainer: n([]),
                errorLabelContainer: n([]),
                onsubmit: !0,
                ignore: ":hidden",
                ignoreTitle: !1,
                onfocusin: function(n) {
                    this.lastActive = n;
                    this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, n, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(n)))
                },
                onfocusout: function(n) {
                    !this.checkable(n) && (n.name in this.submitted || !this.optional(n)) && this.element(n)
                },
                onkeyup: function(t, i) {
                    (i.which !== 9 || this.elementValue(t) !== "") && n.inArray(i.keyCode, [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225]) === -1 && (t.name in this.submitted || t.name in this.invalid) && this.element(t)
                },
                onclick: function(n) {
                    n.name in this.submitted ? this.element(n) : n.parentNode.name in this.submitted && this.element(n.parentNode)
                },
                highlight: function(t, i, r) {
                    t.type === "radio" ? this.findByName(t.name).addClass(i).removeClass(r) : n(t).addClass(i).removeClass(r)
                },
                unhighlight: function(t, i, r) {
                    t.type === "radio" ? this.findByName(t.name).removeClass(i).addClass(r) : n(t).removeClass(i).addClass(r)
                }
            },
            setDefaults: function(t) {
                n.extend(n.validator.defaults, t)
            },
            messages: {
                required: "This field is required.",
                remote: "Please fix this field.",
                email: "Please enter a valid email address.",
                url: "Please enter a valid URL.",
                date: "Please enter a valid date.",
                dateISO: "Please enter a valid date ( ISO ).",
                number: "Please enter a valid number.",
                digits: "Please enter only digits.",
                equalTo: "Please enter the same value again.",
                maxlength: n.validator.format("Please enter no more than {0} characters."),
                minlength: n.validator.format("Please enter at least {0} characters."),
                rangelength: n.validator.format("Please enter a value between {0} and {1} characters long."),
                range: n.validator.format("Please enter a value between {0} and {1}."),
                max: n.validator.format("Please enter a value less than or equal to {0}."),
                min: n.validator.format("Please enter a value greater than or equal to {0}."),
                step: n.validator.format("Please enter a multiple of {0}.")
            },
            autoCreateRanges: !1,
            prototype: {
                init: function() {
                    function i(t) {
                        var r = n.data(this.form, "validator"),
                            u = "on" + t.type.replace(/^validate/, ""),
                            i = r.settings;
                        i[u] && !n(this).is(i.ignore) && i[u].call(r, this, t)
                    }
                    this.labelContainer = n(this.settings.errorLabelContainer);
                    this.errorContext = this.labelContainer.length && this.labelContainer || n(this.currentForm);
                    this.containers = n(this.settings.errorContainer).add(this.settings.errorLabelContainer);
                    this.submitted = {};
                    this.valueCache = {};
                    this.pendingRequest = 0;
                    this.pending = {};
                    this.invalid = {};
                    this.reset();
                    var r = this.groups = {},
                        t;
                    n.each(this.settings.groups, function(t, i) {
                        typeof i == "string" && (i = i.split(/\s/));
                        n.each(i, function(n, i) {
                            r[i] = t
                        })
                    });
                    t = this.settings.rules;
                    n.each(t, function(i, r) {
                        t[i] = n.validator.normalizeRule(r)
                    });
                    n(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", i).on("click.validate", "select, option, [type='radio'], [type='checkbox']", i);
                    if (this.settings.invalidHandler) n(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler);
                    n(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
                },
                form: function() {
                    return this.checkForm(), n.extend(this.submitted, this.errorMap), this.invalid = n.extend({}, this.errorMap), this.valid() || n(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
                },
                checkForm: function() {
                    this.prepareForm();
                    for (var n = 0, t = this.currentElements = this.elements(); t[n]; n++) this.check(t[n]);
                    return this.valid()
                },
                element: function(t) {
                    var i = this.clean(t),
                        r = this.validationTargetFor(i),
                        u = this,
                        f = !0,
                        e, o;
                    return r === undefined ? delete this.invalid[i.name] : (this.prepareElement(r), this.currentElements = n(r), o = this.groups[r.name], o && n.each(this.groups, function(n, t) {
                        t === o && n !== r.name && (i = u.validationTargetFor(u.clean(u.findByName(n))), i && i.name in u.invalid && (u.currentElements.push(i), f = f && u.check(i)))
                    }), e = this.check(r) !== !1, f = f && e, this.invalid[r.name] = e ? !1 : !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n(t).attr("aria-invalid", !e)), f
                },
                showErrors: function(t) {
                    if (t) {
                        var i = this;
                        n.extend(this.errorMap, t);
                        this.errorList = n.map(this.errorMap, function(n, t) {
                            return {
                                message: n,
                                element: i.findByName(t)[0]
                            }
                        });
                        this.successList = n.grep(this.successList, function(n) {
                            return !(n.name in t)
                        })
                    }
                    this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
                },
                resetForm: function() {
                    n.fn.resetForm && n(this.currentForm).resetForm();
                    this.invalid = {};
                    this.submitted = {};
                    this.prepareForm();
                    this.hideErrors();
                    var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                    this.resetElements(t)
                },
                resetElements: function(n) {
                    var t;
                    if (this.settings.unhighlight)
                        for (t = 0; n[t]; t++) this.settings.unhighlight.call(this, n[t], this.settings.errorClass, ""), this.findByName(n[t].name).removeClass(this.settings.validClass);
                    else n.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
                },
                numberOfInvalids: function() {
                    return this.objectLength(this.invalid)
                },
                objectLength: function(n) {
                    var t = 0;
                    for (var i in n) n[i] && t++;
                    return t
                },
                hideErrors: function() {
                    this.hideThese(this.toHide)
                },
                hideThese: function(n) {
                    n.not(this.containers).text("");
                    this.addWrapper(n).hide()
                },
                valid: function() {
                    return this.size() === 0
                },
                size: function() {
                    return this.errorList.length
                },
                focusInvalid: function() {
                    if (this.settings.focusInvalid) try {
                        n(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                    } catch (t) {}
                },
                findLastActive: function() {
                    var t = this.lastActive;
                    return t && n.grep(this.errorList, function(n) {
                        return n.element.name === t.name
                    }).length === 1 && t
                },
                elements: function() {
                    var t = this,
                        i = {};
                    return n(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function() {
                        var r = this.name || n(this).attr("name");
                        return (!r && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = n(this).closest("form")[0]), r in i || !t.objectLength(n(this).rules())) ? !1 : (i[r] = !0, !0)
                    })
                },
                clean: function(t) {
                    return n(t)[0]
                },
                errors: function() {
                    var t = this.settings.errorClass.split(" ").join(".");
                    return n(this.settings.errorElement + "." + t, this.errorContext)
                },
                resetInternals: function() {
                    this.successList = [];
                    this.errorList = [];
                    this.errorMap = {};
                    this.toShow = n([]);
                    this.toHide = n([])
                },
                reset: function() {
                    this.resetInternals();
                    this.currentElements = n([])
                },
                prepareForm: function() {
                    this.reset();
                    this.toHide = this.errors().add(this.containers)
                },
                prepareElement: function(n) {
                    this.reset();
                    this.toHide = this.errorsFor(n)
                },
                elementValue: function(t) {
                    var f = n(t),
                        u = t.type,
                        i, r;
                    return u === "radio" || u === "checkbox" ? this.findByName(t.name).filter(":checked").val() : u === "number" && typeof t.validity != "undefined" ? t.validity.badInput ? "NaN" : f.val() : (i = t.hasAttribute("contenteditable") ? f.text() : f.val(), u === "file") ? i.substr(0, 12) === "C:\\fakepath\\" ? i.substr(12) : (r = i.lastIndexOf("/"), r >= 0) ? i.substr(r + 1) : (r = i.lastIndexOf("\\"), r >= 0) ? i.substr(r + 1) : i : typeof i == "string" ? i.replace(/\r/g, "") : i
                },
                check: function(t) {
                    t = this.validationTargetFor(this.clean(t));
                    var i = n(t).rules(),
                        h = n.map(i, function(n, t) {
                            return t
                        }).length,
                        s = !1,
                        u = this.elementValue(t),
                        f, e, r;
                    if (typeof i.normalizer == "function") {
                        if (u = i.normalizer.call(t, u), typeof u != "string") throw new TypeError("The normalizer should return a string value.");
                        delete i.normalizer
                    }
                    for (e in i) {
                        r = {
                            method: e,
                            parameters: i[e]
                        };
                        try {
                            if (f = n.validator.methods[e].call(this, u, t, r.parameters), f === "dependency-mismatch" && h === 1) {
                                s = !0;
                                continue
                            }
                            if (s = !1, f === "pending") {
                                this.toHide = this.toHide.not(this.errorsFor(t));
                                return
                            }
                            if (!f) return this.formatAndAdd(t, r), !1
                        } catch (o) {
                            this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", o);
                            o instanceof TypeError && (o.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.");
                            throw o;
                        }
                    }
                    if (!s) return this.objectLength(i) && this.successList.push(t), !0
                },
                customDataMessage: function(t, i) {
                    return n(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || n(t).data("msg")
                },
                customMessage: function(n, t) {
                    var i = this.settings.messages[n];
                    return i && (i.constructor === String ? i : i[t])
                },
                findDefined: function() {
                    for (var n = 0; n < arguments.length; n++)
                        if (arguments[n] !== undefined) return arguments[n];
                    return undefined
                },
                defaultMessage: function(t, i) {
                    var r = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || undefined, n.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "<\/strong>"),
                        u = /\$?\{(\d+)\}/g;
                    return typeof r == "function" ? r = r.call(this, i.parameters, t) : u.test(r) && (r = n.validator.format(r.replace(u, "{$1}"), i.parameters)), r
                },
                formatAndAdd: function(n, t) {
                    var i = this.defaultMessage(n, t);
                    this.errorList.push({
                        message: i,
                        element: n,
                        method: t.method
                    });
                    this.errorMap[n.name] = i;
                    this.submitted[n.name] = i
                },
                addWrapper: function(n) {
                    return this.settings.wrapper && (n = n.add(n.parent(this.settings.wrapper))), n
                },
                defaultShowErrors: function() {
                    for (var i, t, n = 0; this.errorList[n]; n++) t = this.errorList[n], this.settings.highlight && this.settings.highlight.call(this, t.element, this.settings.errorClass, this.settings.validClass), this.showLabel(t.element, t.message);
                    if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
                        for (n = 0; this.successList[n]; n++) this.showLabel(this.successList[n]);
                    if (this.settings.unhighlight)
                        for (n = 0, i = this.validElements(); i[n]; n++) this.settings.unhighlight.call(this, i[n], this.settings.errorClass, this.settings.validClass);
                    this.toHide = this.toHide.not(this.toShow);
                    this.hideErrors();
                    this.addWrapper(this.toShow).show()
                },
                validElements: function() {
                    return this.currentElements.not(this.invalidElements())
                },
                invalidElements: function() {
                    return n(this.errorList).map(function() {
                        return this.element
                    })
                },
                showLabel: function(t, i) {
                    var u, s, e, o, r = this.errorsFor(t),
                        h = this.idOrName(t),
                        f = n(t).attr("aria-describedby");
                    r.length ? (r.removeClass(this.settings.validClass).addClass(this.settings.errorClass), r.html(i)) : (r = n("<" + this.settings.errorElement + ">").attr("id", h + "-error").addClass(this.settings.errorClass).html(i || ""), u = r, this.settings.wrapper && (u = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(u) : this.settings.errorPlacement ? this.settings.errorPlacement(u, n(t)) : u.insertAfter(t), r.is("label") ? r.attr("for", h) : r.parents("label[for='" + this.escapeCssMeta(h) + "']").length === 0 && (e = r.attr("id"), f ? f.match(new RegExp("\\b" + this.escapeCssMeta(e) + "\\b")) || (f += " " + e) : f = e, n(t).attr("aria-describedby", f), s = this.groups[t.name], s && (o = this, n.each(o.groups, function(t, i) {
                        i === s && n("[name='" + o.escapeCssMeta(t) + "']", o.currentForm).attr("aria-describedby", r.attr("id"))
                    }))));
                    !i && this.settings.success && (r.text(""), typeof this.settings.success == "string" ? r.addClass(this.settings.success) : this.settings.success(r, t));
                    this.toShow = this.toShow.add(r)
                },
                errorsFor: function(t) {
                    var r = this.escapeCssMeta(this.idOrName(t)),
                        u = n(t).attr("aria-describedby"),
                        i = "label[for='" + r + "'], label[for='" + r + "'] *";
                    return u && (i = i + ", #" + this.escapeCssMeta(u).replace(/\s+/g, ", #")), this.errors().filter(i)
                },
                escapeCssMeta: function(n) {
                    return n.replace(/([\\!"#$%&'()*+,./:;<=>?@\[\]^`{|}~])/g, "\\$1")
                },
                idOrName: function(n) {
                    return this.groups[n.name] || (this.checkable(n) ? n.name : n.id || n.name)
                },
                validationTargetFor: function(t) {
                    return this.checkable(t) && (t = this.findByName(t.name)), n(t).not(this.settings.ignore)[0]
                },
                checkable: function(n) {
                    return /radio|checkbox/i.test(n.type)
                },
                findByName: function(t) {
                    return n(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
                },
                getLength: function(t, i) {
                    switch (i.nodeName.toLowerCase()) {
                        case "select":
                            return n("option:selected", i).length;
                        case "input":
                            if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                    }
                    return t.length
                },
                depend: function(n, t) {
                    return this.dependTypes[typeof n] ? this.dependTypes[typeof n](n, t) : !0
                },
                dependTypes: {
                    boolean: function(n) {
                        return n
                    },
                    string: function(t, i) {
                        return !!n(t, i.form).length
                    },
                    "function": function(n, t) {
                        return n(t)
                    }
                },
                optional: function(t) {
                    var i = this.elementValue(t);
                    return !n.validator.methods.required.call(this, i, t) && "dependency-mismatch"
                },
                startRequest: function(t) {
                    this.pending[t.name] || (this.pendingRequest++, n(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
                },
                stopRequest: function(t, i) {
                    this.pendingRequest--;
                    this.pendingRequest < 0 && (this.pendingRequest = 0);
                    delete this.pending[t.name];
                    n(t).removeClass(this.settings.pendingClass);
                    i && this.pendingRequest === 0 && this.formSubmitted && this.form() ? (n(this.currentForm).submit(), this.formSubmitted = !1) : !i && this.pendingRequest === 0 && this.formSubmitted && (n(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
                },
                previousValue: function(t, i) {
                    return n.data(t, "previousValue") || n.data(t, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(t, {
                            method: i
                        })
                    })
                },
                destroy: function() {
                    this.resetForm();
                    n(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
                }
            },
            classRuleSettings: {
                required: {
                    required: !0
                },
                email: {
                    email: !0
                },
                url: {
                    url: !0
                },
                date: {
                    date: !0
                },
                dateISO: {
                    dateISO: !0
                },
                number: {
                    number: !0
                },
                digits: {
                    digits: !0
                },
                creditcard: {
                    creditcard: !0
                }
            },
            addClassRules: function(t, i) {
                t.constructor === String ? this.classRuleSettings[t] = i : n.extend(this.classRuleSettings, t)
            },
            classRules: function(t) {
                var i = {},
                    r = n(t).attr("class");
                return r && n.each(r.split(" "), function() {
                    this in n.validator.classRuleSettings && n.extend(i, n.validator.classRuleSettings[this])
                }), i
            },
            normalizeAttributeRule: function(n, t, i, r) {
                /min|max|step/.test(i) && (t === null || /number|range|text/.test(t)) && (r = Number(r), isNaN(r) && (r = undefined));
                r || r === 0 ? n[i] = r : t === i && t !== "range" && (n[i] = !0)
            },
            attributeRules: function(t) {
                var r = {},
                    f = n(t),
                    e = t.getAttribute("type"),
                    u, i;
                for (u in n.validator.methods) u === "required" ? (i = t.getAttribute(u), i === "" && (i = !0), i = !!i) : i = f.attr(u), this.normalizeAttributeRule(r, e, u, i);
                return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
            },
            dataRules: function(t) {
                var r = {},
                    f = n(t),
                    e = t.getAttribute("type"),
                    i, u;
                for (i in n.validator.methods) u = f.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, e, i, u);
                return r
            },
            staticRules: function(t) {
                var i = {},
                    r = n.data(t.form, "validator");
                return r.settings.rules && (i = n.validator.normalizeRule(r.settings.rules[t.name]) || {}), i
            },
            normalizeRules: function(t, i) {
                return n.each(t, function(r, u) {
                    if (u === !1) {
                        delete t[r];
                        return
                    }
                    if (u.param || u.depends) {
                        var f = !0;
                        switch (typeof u.depends) {
                            case "string":
                                f = !!n(u.depends, i.form).length;
                                break;
                            case "function":
                                f = u.depends.call(i, i)
                        }
                        f ? t[r] = u.param !== undefined ? u.param : !0 : (n.data(i.form, "validator").resetElements(n(i)), delete t[r])
                    }
                }), n.each(t, function(r, u) {
                    t[r] = n.isFunction(u) && r !== "normalizer" ? u(i) : u
                }), n.each(["minlength", "maxlength"], function() {
                    t[this] && (t[this] = Number(t[this]))
                }), n.each(["rangelength", "range"], function() {
                    var i;
                    t[this] && (n.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : typeof t[this] == "string" && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
                }), n.validator.autoCreateRanges && (t.min != null && t.max != null && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength != null && t.maxlength != null && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
            },
            normalizeRule: function(t) {
                if (typeof t == "string") {
                    var i = {};
                    n.each(t.split(/\s/), function() {
                        i[this] = !0
                    });
                    t = i
                }
                return t
            },
            addMethod: function(t, i, r) {
                n.validator.methods[t] = i;
                n.validator.messages[t] = r !== undefined ? r : n.validator.messages[t];
                i.length < 3 && n.validator.addClassRules(t, n.validator.normalizeRule(t))
            },
            methods: {
                required: function(t, i, r) {
                    if (!this.depend(r, i)) return "dependency-mismatch";
                    if (i.nodeName.toLowerCase() === "select") {
                        var u = n(i).val();
                        return u && u.length > 0
                    }
                    return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
                },
                email: function(n, t) {
                    return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(n)
                },
                url: function(n, t) {
                    return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(n)
                },
                date: function(n, t) {
                    return this.optional(t) || !/Invalid|NaN/.test(new Date(n).toString())
                },
                dateISO: function(n, t) {
                    return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(n)
                },
                number: function(n, t) {
                    return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(n)
                },
                digits: function(n, t) {
                    return this.optional(t) || /^\d+$/.test(n)
                },
                minlength: function(t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u >= r
                },
                maxlength: function(t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u <= r
                },
                rangelength: function(t, i, r) {
                    var u = n.isArray(t) ? t.length : this.getLength(t, i);
                    return this.optional(i) || u >= r[0] && u <= r[1]
                },
                min: function(n, t, i) {
                    return this.optional(t) || n >= i
                },
                max: function(n, t, i) {
                    return this.optional(t) || n <= i
                },
                range: function(n, t, i) {
                    return this.optional(t) || n >= i[0] && n <= i[1]
                },
                step: function(t, i, r) {
                    var u = n(i).attr("type"),
                        f = "Step attribute on input type " + u + " is not supported.",
                        e = new RegExp("\\b" + u + "\\b"),
                        o = u && !e.test("text,number,range");
                    if (o) throw new Error(f);
                    return this.optional(i) || t % r == 0
                },
                equalTo: function(t, i, r) {
                    var u = n(r);
                    if (this.settings.onfocusout && u.not(".validate-equalTo-blur").length) u.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function() {
                        n(i).valid()
                    });
                    return t === u.val()
                },
                remote: function(t, i, r, u) {
                    if (this.optional(i)) return "dependency-mismatch";
                    u = typeof u == "string" && u || "remote";
                    var e = this.previousValue(i, u),
                        f, o, s;
                    return (this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), e.originalMessage = e.originalMessage || this.settings.messages[i.name][u], this.settings.messages[i.name][u] = e.message, r = typeof r == "string" && {
                        url: r
                    } || r, s = n.param(n.extend({
                        data: t
                    }, r.data)), e.old === s) ? e.valid : (e.old = s, f = this, this.startRequest(i), o = {}, o[i.name] = t, n.ajax(n.extend(!0, {
                        mode: "abort",
                        port: "validate" + i.name,
                        dataType: "json",
                        data: o,
                        context: f.currentForm,
                        success: function(n) {
                            var r = n === !0 || n === "true",
                                o, s, h;
                            f.settings.messages[i.name][u] = e.originalMessage;
                            r ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(i), f.formSubmitted = h, f.successList.push(i), f.invalid[i.name] = !1, f.showErrors()) : (o = {}, s = n || f.defaultMessage(i, {
                                method: u,
                                parameters: t
                            }), o[i.name] = e.message = s, f.invalid[i.name] = !0, f.showErrors(o));
                            e.valid = r;
                            f.stopRequest(i, r)
                        }
                    }, r)), "pending")
                }
            }
        });
        var t = {},
            i;
        n.ajaxPrefilter ? n.ajaxPrefilter(function(n, i, r) {
            var u = n.port;
            n.mode === "abort" && (t[u] && t[u].abort(), t[u] = r)
        }) : (i = n.ajax, n.ajax = function(r) {
            var f = ("mode" in r ? r : n.ajaxSettings).mode,
                u = ("port" in r ? r : n.ajaxSettings).port;
            return f === "abort" ? (t[u] && t[u].abort(), t[u] = i.apply(this, arguments), t[u]) : i.apply(this, arguments)
        })
    }), function(n) {
        function i(n, t, i) {
            n.rules[t] = i;
            n.message && (n.messages[t] = n.message)
        }

        function h(n) {
            return n.replace(/^\s+|\s+$/g, "").split(/\s*,\s*/g)
        }

        function f(n) {
            return n.replace(/([!"#$%&'()*+,./:;<=>?@\[\\\]^`{|}~])/g, "\\$1")
        }

        function e(n) {
            return n.substr(0, n.lastIndexOf(".") + 1)
        }

        function o(n, t) {
            return n.indexOf("*.") === 0 && (n = n.replace("*.", t)), n
        }

        function c(t, i) {
            var r = n(this).find("[data-valmsg-for='" + f(i[0].name) + "']"),
                u = r.attr("data-valmsg-replace"),
                e = u ? n.parseJSON(u) !== !1 : null;
            r.removeClass("field-validation-valid").addClass("field-validation-error");
            t.data("unobtrusiveContainer", r);
            e ? (r.empty(), t.removeClass("input-validation-error").appendTo(r)) : t.hide()
        }

        function l(t, i) {
            var u = n(this).find("[data-valmsg-summary=true]"),
                r = u.find("ul");
            r && r.length && i.errorList.length && (r.empty(), u.addClass("validation-summary-errors").removeClass("validation-summary-valid"), n.each(i.errorList, function() {
                n("<li />").html(this.message).appendTo(r)
            }))
        }

        function a(t) {
            var i = t.data("unobtrusiveContainer"),
                r, u;
            i && (r = i.attr("data-valmsg-replace"), u = r ? n.parseJSON(r) : null, i.addClass("field-validation-valid").removeClass("field-validation-error"), t.removeData("unobtrusiveContainer"), u && i.empty())
        }

        function v() {
            var t = n(this),
                i = "__jquery_unobtrusive_validation_form_reset";
            if (!t.data(i)) {
                t.data(i, !0);
                try {
                    t.data("validator").resetForm()
                } finally {
                    t.removeData(i)
                }
                t.find(".validation-summary-errors").addClass("validation-summary-valid").removeClass("validation-summary-errors");
                t.find(".field-validation-error").addClass("field-validation-valid").removeClass("field-validation-error").removeData("unobtrusiveContainer").find(">*").removeData("unobtrusiveContainer")
            }
        }

        function s(t) {
            var i = n(t),
                f = i.data(u),
                s = n.proxy(v, t),
                e = r.unobtrusive.options || {},
                o = function(i, r) {
                    var u = e[i];
                    u && n.isFunction(u) && u.apply(t, r)
                };
            return f || (f = {
                options: {
                    errorClass: e.errorClass || "input-validation-error",
                    errorElement: e.errorElement || "span",
                    errorPlacement: function() {
                        c.apply(t, arguments);
                        o("errorPlacement", arguments)
                    },
                    invalidHandler: function() {
                        l.apply(t, arguments);
                        o("invalidHandler", arguments)
                    },
                    messages: {},
                    rules: {},
                    success: function() {
                        a.apply(t, arguments);
                        o("success", arguments)
                    }
                },
                attachValidation: function() {
                    i.off("reset." + u, s).on("reset." + u, s).validate(this.options)
                },
                validate: function() {
                    return i.validate(), i.valid()
                }
            }, i.data(u, f)), f
        }
        var r = n.validator,
            t, u = "unobtrusiveValidation";
        r.unobtrusive = {
            adapters: [],
            parseElement: function(t, i) {
                var u = n(t),
                    f = u.parents("form")[0],
                    r, e, o;
                f && (r = s(f), r.options.rules[t.name] = e = {}, r.options.messages[t.name] = o = {}, n.each(this.adapters, function() {
                    var i = "data-val-" + this.name,
                        r = u.attr(i),
                        s = {};
                    r !== undefined && (i += "-", n.each(this.params, function() {
                        s[this] = u.attr(i + this)
                    }), this.adapt({
                        element: t,
                        form: f,
                        message: r,
                        params: s,
                        rules: e,
                        messages: o
                    }))
                }), n.extend(e, {
                    __dummy__: !0
                }), i || r.attachValidation())
            },
            parse: function(t) {
                var i = n(t),
                    u = i.parents().addBack().filter("form").add(i.find("form")).has("[data-val=true]");
                i.find("[data-val=true]").each(function() {
                    r.unobtrusive.parseElement(this, !0)
                });
                u.each(function() {
                    var n = s(this);
                    n && n.attachValidation()
                })
            }
        };
        t = r.unobtrusive.adapters;
        t.add = function(n, t, i) {
            return i || (i = t, t = []), this.push({
                name: n,
                params: t,
                adapt: i
            }), this
        };
        t.addBool = function(n, t) {
            return this.add(n, function(r) {
                i(r, t || n, !0)
            })
        };
        t.addMinMax = function(n, t, r, u, f, e) {
            return this.add(n, [f || "min", e || "max"], function(n) {
                var f = n.params.min,
                    e = n.params.max;
                f && e ? i(n, u, [f, e]) : f ? i(n, t, f) : e && i(n, r, e)
            })
        };
        t.addSingleVal = function(n, t, r) {
            return this.add(n, [t || "val"], function(u) {
                i(u, r || n, u.params[t])
            })
        };
        r.addMethod("__dummy__", function() {
            return !0
        });
        r.addMethod("regex", function(n, t, i) {
            var r;
            return this.optional(t) ? !0 : (r = new RegExp(i).exec(n), r && r.index === 0 && r[0].length === n.length)
        });
        r.addMethod("nonalphamin", function(n, t, i) {
            var r;
            return i && (r = n.match(/\W/g), r = r && r.length >= i), r
        });
        r.methods.extension ? (t.addSingleVal("accept", "mimtype"), t.addSingleVal("extension", "extension")) : t.addSingleVal("extension", "extension", "accept");
        t.addSingleVal("regex", "pattern");
        t.addBool("creditcard").addBool("date").addBool("digits").addBool("email").addBool("number").addBool("url");
        t.addMinMax("length", "minlength", "maxlength", "rangelength").addMinMax("range", "min", "max", "range");
        t.addMinMax("minlength", "minlength").addMinMax("maxlength", "minlength", "maxlength");
        t.add("equalto", ["other"], function(t) {
            var r = e(t.element.name),
                u = t.params.other,
                s = o(u, r),
                h = n(t.form).find(":input").filter("[name='" + f(s) + "']")[0];
            i(t, "equalTo", h)
        });
        t.add("required", function(n) {
            (n.element.tagName.toUpperCase() !== "INPUT" || n.element.type.toUpperCase() !== "CHECKBOX") && i(n, "required", !0)
        });
        t.add("remote", ["url", "type", "additionalfields"], function(t) {
            var r = {
                    url: t.params.url,
                    type: t.params.type || "GET",
                    data: {}
                },
                u = e(t.element.name);
            n.each(h(t.params.additionalfields || t.element.name), function(i, e) {
                var s = o(e, u);
                r.data[s] = function() {
                    var i = n(t.form).find(":input").filter("[name='" + f(s) + "']");
                    return i.is(":checkbox") ? i.filter(":checked").val() || i.filter(":hidden").val() || "" : i.is(":radio") ? i.filter(":checked").val() || "" : i.val()
                }
            });
            i(t, "remote", r)
        });
        t.add("password", ["min", "nonalphamin", "regex"], function(n) {
            n.params.min && i(n, "minlength", n.params.min);
            n.params.nonalphamin && i(n, "nonalphamin", n.params.nonalphamin);
            n.params.regex && i(n, "regex", n.params.regex)
        });
        n(function() {
            r.unobtrusive.parse(document)
        })
    }(jQuery), typeof jQuery == "undefined") throw new Error("Bootstrap's JavaScript requires jQuery"); + function(n) {
    "use strict";
    var t = n.fn.jquery.split(" ")[0].split(".");
    if (t[0] < 2 && t[1] < 9 || t[0] == 1 && t[1] == 9 && t[2] < 1 || t[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");
}(jQuery); + function(n) {
    "use strict";

    function t() {
        var i = document.createElement("bootstrap"),
            n = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var t in n)
            if (i.style[t] !== undefined) return {
                end: n[t]
            };
        return !1
    }
    n.fn.emulateTransitionEnd = function(t) {
        var i = !1,
            u = this,
            r;
        n(this).one("bsTransitionEnd", function() {
            i = !0
        });
        return r = function() {
            i || n(u).trigger(n.support.transition.end)
        }, setTimeout(r, t), this
    };
    n(function() {
        (n.support.transition = t(), n.support.transition) && (n.event.special.bsTransitionEnd = {
            bindType: n.support.transition.end,
            delegateType: n.support.transition.end,
            handle: function(t) {
                if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
            }
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function u(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.alert");
            u || r.data("bs.alert", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var i = '[data-dismiss="alert"]',
        t = function(t) {
            n(t).on("click", i, this.close)
        },
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.close = function(i) {
        function e() {
            r.detach().trigger("closed.bs.alert").remove()
        }
        var f = n(this),
            u = f.attr("data-target"),
            r;
        (u || (u = f.attr("href"), u = u && u.replace(/.*(?=#[^\s]*$)/, "")), r = n(u), i && i.preventDefault(), r.length || (r = f.closest(".alert")), r.trigger(i = n.Event("close.bs.alert")), i.isDefaultPrevented()) || (r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e())
    };
    r = n.fn.alert;
    n.fn.alert = u;
    n.fn.alert.Constructor = t;
    n.fn.alert.noConflict = function() {
        return n.fn.alert = r, this
    };
    n(document).on("click.bs.alert.data-api", i, t.prototype.close)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.button"),
                f = typeof i == "object" && i;
            r || u.data("bs.button", r = new t(this, f));
            i == "toggle" ? r.toggle() : i && r.setState(i)
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.isLoading = !1
        },
        r;
    t.VERSION = "3.3.6";
    t.DEFAULTS = {
        loadingText: "loading..."
    };
    t.prototype.setState = function(t) {
        var r = "disabled",
            i = this.$element,
            f = i.is("input") ? "val" : "html",
            u = i.data();
        t += "Text";
        u.resetText == null && i.data("resetText", i[f]());
        setTimeout(n.proxy(function() {
            i[f](u[t] == null ? this.options[t] : u[t]);
            t == "loadingText" ? (this.isLoading = !0, i.addClass(r).attr(r, r)) : this.isLoading && (this.isLoading = !1, i.removeClass(r).removeAttr(r))
        }, this), 0)
    };
    t.prototype.toggle = function() {
        var t = !0,
            i = this.$element.closest('[data-toggle="buttons"]'),
            n;
        i.length ? (n = this.$element.find("input"), n.prop("type") == "radio" ? (n.prop("checked") && (t = !1), i.find(".active").removeClass("active"), this.$element.addClass("active")) : n.prop("type") == "checkbox" && (n.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), n.prop("checked", this.$element.hasClass("active")), t && n.trigger("change")) : (this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active"))
    };
    r = n.fn.button;
    n.fn.button = i;
    n.fn.button.Constructor = t;
    n.fn.button.noConflict = function() {
        return n.fn.button = r, this
    };
    n(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        var r = n(t.target);
        r.hasClass("btn") || (r = r.closest(".btn"));
        i.call(r, "toggle");
        n(t.target).is('input[type="radio"]') || n(t.target).is('input[type="checkbox"]') || t.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(t) {
        n(t.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(t.type))
    })
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.carousel"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i),
                e = typeof i == "string" ? i : f.slide;
            r || u.data("bs.carousel", r = new t(this, f));
            typeof i == "number" ? r.to(i) : e ? r[e]() : f.interval && r.pause().cycle()
        })
    }
    var t = function(t, i) {
            this.$element = n(t);
            this.$indicators = this.$element.find(".carousel-indicators");
            this.options = i;
            this.paused = null;
            this.sliding = null;
            this.interval = null;
            this.$active = null;
            this.$items = null;
            this.options.keyboard && this.$element.on("keydown.bs.carousel", n.proxy(this.keydown, this));
            this.options.pause != "hover" || "ontouchstart" in document.documentElement || this.$element.on("mouseenter.bs.carousel", n.proxy(this.pause, this)).on("mouseleave.bs.carousel", n.proxy(this.cycle, this))
        },
        u, r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 600;
    t.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    };
    t.prototype.keydown = function(n) {
        if (!/input|textarea/i.test(n.target.tagName)) {
            switch (n.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            n.preventDefault()
        }
    };
    t.prototype.cycle = function(t) {
        return t || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(n.proxy(this.next, this), this.options.interval)), this
    };
    t.prototype.getItemIndex = function(n) {
        return this.$items = n.parent().children(".item"), this.$items.index(n || this.$active)
    };
    t.prototype.getItemForDirection = function(n, t) {
        var i = this.getItemIndex(t),
            f = n == "prev" && i === 0 || n == "next" && i == this.$items.length - 1,
            r, u;
        return f && !this.options.wrap ? t : (r = n == "prev" ? -1 : 1, u = (i + r) % this.$items.length, this.$items.eq(u))
    };
    t.prototype.to = function(n) {
        var i = this,
            t = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        if (!(n > this.$items.length - 1) && !(n < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function() {
            i.to(n)
        }) : t == n ? this.pause().cycle() : this.slide(n > t ? "next" : "prev", this.$items.eq(n))
    };
    t.prototype.pause = function(t) {
        return t || (this.paused = !0), this.$element.find(".next, .prev").length && n.support.transition && (this.$element.trigger(n.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    };
    t.prototype.next = function() {
        if (!this.sliding) return this.slide("next")
    };
    t.prototype.prev = function() {
        if (!this.sliding) return this.slide("prev")
    };
    t.prototype.slide = function(i, r) {
        var e = this.$element.find(".item.active"),
            u = r || this.getItemForDirection(i, e),
            l = this.interval,
            f = i == "next" ? "left" : "right",
            a = this,
            o, s, h, c;
        return u.hasClass("active") ? this.sliding = !1 : (o = u[0], s = n.Event("slide.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), this.$element.trigger(s), s.isDefaultPrevented()) ? void 0 : (this.sliding = !0, l && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), h = n(this.$indicators.children()[this.getItemIndex(u)]), h && h.addClass("active")), c = n.Event("slid.bs.carousel", {
            relatedTarget: o,
            direction: f
        }), n.support.transition && this.$element.hasClass("slide") ? (u.addClass(i), u[0].offsetWidth, e.addClass(f), u.addClass(f), e.one("bsTransitionEnd", function() {
            u.removeClass([i, f].join(" ")).addClass("active");
            e.removeClass(["active", f].join(" "));
            a.sliding = !1;
            setTimeout(function() {
                a.$element.trigger(c)
            }, 0)
        }).emulateTransitionEnd(t.TRANSITION_DURATION)) : (e.removeClass("active"), u.addClass("active"), this.sliding = !1, this.$element.trigger(c)), l && this.cycle(), this)
    };
    u = n.fn.carousel;
    n.fn.carousel = i;
    n.fn.carousel.Constructor = t;
    n.fn.carousel.noConflict = function() {
        return n.fn.carousel = u, this
    };
    r = function(t) {
        var o, r = n(this),
            u = n(r.attr("data-target") || (o = r.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, "")),
            e, f;
        u.hasClass("carousel") && (e = n.extend({}, u.data(), r.data()), f = r.attr("data-slide-to"), f && (e.interval = !1), i.call(u, e), f && u.data("bs.carousel").to(f), t.preventDefault())
    };
    n(document).on("click.bs.carousel.data-api", "[data-slide]", r).on("click.bs.carousel.data-api", "[data-slide-to]", r);
    n(window).on("load", function() {
        n('[data-ride="carousel"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i, r = t.attr("data-target") || (i = t.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return n(r)
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.collapse"),
                f = n.extend({}, t.DEFAULTS, u.data(), typeof i == "object" && i);
            !r && f.toggle && /show|hide/.test(i) && (f.toggle = !1);
            r || u.data("bs.collapse", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.$element = n(i);
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$trigger = n('[data-toggle="collapse"][href="#' + i.id + '"],[data-toggle="collapse"][data-target="#' + i.id + '"]');
            this.transitioning = null;
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger);
            this.options.toggle && this.toggle()
        },
        u;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 350;
    t.DEFAULTS = {
        toggle: !0
    };
    t.prototype.dimension = function() {
        var n = this.$element.hasClass("width");
        return n ? "width" : "height"
    };
    t.prototype.show = function() {
        var f, r, e, u, o, s;
        if (!this.transitioning && !this.$element.hasClass("in") && (r = this.$parent && this.$parent.children(".panel").children(".in, .collapsing"), !r || !r.length || (f = r.data("bs.collapse"), !f || !f.transitioning)) && (e = n.Event("show.bs.collapse"), this.$element.trigger(e), !e.isDefaultPrevented())) {
            if (r && r.length && (i.call(r, "hide"), f || r.data("bs.collapse", null)), u = this.dimension(), this.$element.removeClass("collapse").addClass("collapsing")[u](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1, o = function() {
                    this.$element.removeClass("collapsing").addClass("collapse in")[u]("");
                    this.transitioning = 0;
                    this.$element.trigger("shown.bs.collapse")
                }, !n.support.transition) return o.call(this);
            s = n.camelCase(["scroll", u].join("-"));
            this.$element.one("bsTransitionEnd", n.proxy(o, this)).emulateTransitionEnd(t.TRANSITION_DURATION)[u](this.$element[0][s])
        }
    };
    t.prototype.hide = function() {
        var r, i, u;
        if (!this.transitioning && this.$element.hasClass("in") && (r = n.Event("hide.bs.collapse"), this.$element.trigger(r), !r.isDefaultPrevented())) {
            if (i = this.dimension(), this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1, u = function() {
                    this.transitioning = 0;
                    this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                }, !n.support.transition) return u.call(this);
            this.$element[i](0).one("bsTransitionEnd", n.proxy(u, this)).emulateTransitionEnd(t.TRANSITION_DURATION)
        }
    };
    t.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    };
    t.prototype.getParent = function() {
        return n(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(n.proxy(function(t, i) {
            var u = n(i);
            this.addAriaAndCollapsedClass(r(u), u)
        }, this)).end()
    };
    t.prototype.addAriaAndCollapsedClass = function(n, t) {
        var i = n.hasClass("in");
        n.attr("aria-expanded", i);
        t.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    u = n.fn.collapse;
    n.fn.collapse = i;
    n.fn.collapse.Constructor = t;
    n.fn.collapse.noConflict = function() {
        return n.fn.collapse = u, this
    };
    n(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(t) {
        var u = n(this);
        u.attr("data-target") || t.preventDefault();
        var f = r(u),
            e = f.data("bs.collapse"),
            o = e ? "toggle" : u.data();
        i.call(f, o)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(t) {
        var i = t.attr("data-target"),
            r;
        return i || (i = t.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")), r = i && n(i), r && r.length ? r : t.parent()
    }

    function u(t) {
        t && t.which === 3 || (n(e).remove(), n(i).each(function() {
            var u = n(this),
                i = r(u),
                f = {
                    relatedTarget: this
                };
            i.hasClass("open") && (t && t.type == "click" && /input|textarea/i.test(t.target.tagName) && n.contains(i[0], t.target) || (i.trigger(t = n.Event("hide.bs.dropdown", f)), t.isDefaultPrevented()) || (u.attr("aria-expanded", "false"), i.removeClass("open").trigger(n.Event("hidden.bs.dropdown", f))))
        }))
    }

    function o(i) {
        return this.each(function() {
            var r = n(this),
                u = r.data("bs.dropdown");
            u || r.data("bs.dropdown", u = new t(this));
            typeof i == "string" && u[i].call(r)
        })
    }
    var e = ".dropdown-backdrop",
        i = '[data-toggle="dropdown"]',
        t = function(t) {
            n(t).on("click.bs.dropdown", this.toggle)
        },
        f;
    t.VERSION = "3.3.6";
    t.prototype.toggle = function(t) {
        var f = n(this),
            i, o, e;
        if (!f.is(".disabled, :disabled")) {
            if (i = r(f), o = i.hasClass("open"), u(), !o) {
                if ("ontouchstart" in document.documentElement && !i.closest(".navbar-nav").length) n(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(n(this)).on("click", u);
                if (e = {
                        relatedTarget: this
                    }, i.trigger(t = n.Event("show.bs.dropdown", e)), t.isDefaultPrevented()) return;
                f.trigger("focus").attr("aria-expanded", "true");
                i.toggleClass("open").trigger(n.Event("shown.bs.dropdown", e))
            }
            return !1
        }
    };
    t.prototype.keydown = function(t) {
        var e, o, s, h, f, u;
        if (/(38|40|27|32)/.test(t.which) && !/input|textarea/i.test(t.target.tagName) && (e = n(this), t.preventDefault(), t.stopPropagation(), !e.is(".disabled, :disabled"))) {
            if (o = r(e), s = o.hasClass("open"), !s && t.which != 27 || s && t.which == 27) return t.which == 27 && o.find(i).trigger("focus"), e.trigger("click");
            (h = " li:not(.disabled):visible a", f = o.find(".dropdown-menu" + h), f.length) && (u = f.index(t.target), t.which == 38 && u > 0 && u--, t.which == 40 && u < f.length - 1 && u++, ~u || (u = 0), f.eq(u).trigger("focus"))
        }
    };
    f = n.fn.dropdown;
    n.fn.dropdown = o;
    n.fn.dropdown.Constructor = t;
    n.fn.dropdown.noConflict = function() {
        return n.fn.dropdown = f, this
    };
    n(document).on("click.bs.dropdown.data-api", u).on("click.bs.dropdown.data-api", ".dropdown form", function(n) {
        n.stopPropagation()
    }).on("click.bs.dropdown.data-api", i, t.prototype.toggle).on("keydown.bs.dropdown.data-api", i, t.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", t.prototype.keydown)
}(jQuery); + function(n) {
    "use strict";

    function i(i, r) {
        return this.each(function() {
            var f = n(this),
                u = f.data("bs.modal"),
                e = n.extend({}, t.DEFAULTS, f.data(), typeof i == "object" && i);
            u || f.data("bs.modal", u = new t(this, e));
            typeof i == "string" ? u[i](r) : e.show && u.show(r)
        })
    }
    var t = function(t, i) {
            this.options = i;
            this.$body = n(document.body);
            this.$element = n(t);
            this.$dialog = this.$element.find(".modal-dialog");
            this.$backdrop = null;
            this.isShown = null;
            this.originalBodyPad = null;
            this.scrollbarWidth = 0;
            this.ignoreBackdropClick = !1;
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, n.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        },
        r;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 300;
    t.BACKDROP_TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    };
    t.prototype.toggle = function(n) {
        return this.isShown ? this.hide() : this.show(n)
    };
    t.prototype.show = function(i) {
        var r = this,
            u = n.Event("show.bs.modal", {
                relatedTarget: i
            });
        if (this.$element.trigger(u), !this.isShown && !u.isDefaultPrevented()) {
            this.isShown = !0;
            this.checkScrollbar();
            this.setScrollbar();
            this.$body.addClass("modal-open");
            this.escape();
            this.resize();
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', n.proxy(this.hide, this));
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                r.$element.one("mouseup.dismiss.bs.modal", function(t) {
                    n(t.target).is(r.$element) && (r.ignoreBackdropClick = !0)
                })
            });
            this.backdrop(function() {
                var f = n.support.transition && r.$element.hasClass("fade"),
                    u;
                r.$element.parent().length || r.$element.appendTo(r.$body);
                r.$element.show().scrollTop(0);
                r.adjustDialog();
                f && r.$element[0].offsetWidth;
                r.$element.addClass("in");
                r.enforceFocus();
                u = n.Event("shown.bs.modal", {
                    relatedTarget: i
                });
                f ? r.$dialog.one("bsTransitionEnd", function() {
                    r.$element.trigger("focus").trigger(u)
                }).emulateTransitionEnd(t.TRANSITION_DURATION) : r.$element.trigger("focus").trigger(u)
            })
        }
    };
    t.prototype.hide = function(i) {
        (i && i.preventDefault(), i = n.Event("hide.bs.modal"), this.$element.trigger(i), this.isShown && !i.isDefaultPrevented()) && (this.isShown = !1, this.escape(), this.resize(), n(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), n.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", n.proxy(this.hideModal, this)).emulateTransitionEnd(t.TRANSITION_DURATION) : this.hideModal())
    };
    t.prototype.enforceFocus = function() {
        n(document).off("focusin.bs.modal").on("focusin.bs.modal", n.proxy(function(n) {
            this.$element[0] === n.target || this.$element.has(n.target).length || this.$element.trigger("focus")
        }, this))
    };
    t.prototype.escape = function() {
        if (this.isShown && this.options.keyboard) this.$element.on("keydown.dismiss.bs.modal", n.proxy(function(n) {
            n.which == 27 && this.hide()
        }, this));
        else this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    };
    t.prototype.resize = function() {
        if (this.isShown) n(window).on("resize.bs.modal", n.proxy(this.handleUpdate, this));
        else n(window).off("resize.bs.modal")
    };
    t.prototype.hideModal = function() {
        var n = this;
        this.$element.hide();
        this.backdrop(function() {
            n.$body.removeClass("modal-open");
            n.resetAdjustments();
            n.resetScrollbar();
            n.$element.trigger("hidden.bs.modal")
        })
    };
    t.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove();
        this.$backdrop = null
    };
    t.prototype.backdrop = function(i) {
        var e = this,
            f = this.$element.hasClass("fade") ? "fade" : "",
            r, u;
        if (this.isShown && this.options.backdrop) {
            r = n.support.transition && f;
            this.$backdrop = n(document.createElement("div")).addClass("modal-backdrop " + f).appendTo(this.$body);
            this.$element.on("click.dismiss.bs.modal", n.proxy(function(n) {
                if (this.ignoreBackdropClick) {
                    this.ignoreBackdropClick = !1;
                    return
                }
                n.target === n.currentTarget && (this.options.backdrop == "static" ? this.$element[0].focus() : this.hide())
            }, this));
            if (r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !i) return;
            r ? this.$backdrop.one("bsTransitionEnd", i).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : i()
        } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), u = function() {
            e.removeBackdrop();
            i && i()
        }, n.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", u).emulateTransitionEnd(t.BACKDROP_TRANSITION_DURATION) : u()) : i && i()
    };
    t.prototype.handleUpdate = function() {
        this.adjustDialog()
    };
    t.prototype.adjustDialog = function() {
        var n = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && n ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !n ? this.scrollbarWidth : ""
        })
    };
    t.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    };
    t.prototype.checkScrollbar = function() {
        var n = window.innerWidth,
            t;
        n || (t = document.documentElement.getBoundingClientRect(), n = t.right - Math.abs(t.left));
        this.bodyIsOverflowing = document.body.clientWidth < n;
        this.scrollbarWidth = this.measureScrollbar()
    };
    t.prototype.setScrollbar = function() {
        var n = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "";
        this.bodyIsOverflowing && this.$body.css("padding-right", n + this.scrollbarWidth)
    };
    t.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    };
    t.prototype.measureScrollbar = function() {
        var n = document.createElement("div"),
            t;
        return n.className = "modal-scrollbar-measure", this.$body.append(n), t = n.offsetWidth - n.clientWidth, this.$body[0].removeChild(n), t
    };
    r = n.fn.modal;
    n.fn.modal = i;
    n.fn.modal.Constructor = t;
    n.fn.modal.noConflict = function() {
        return n.fn.modal = r, this
    };
    n(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(t) {
        var r = n(this),
            f = r.attr("href"),
            u = n(r.attr("data-target") || f && f.replace(/.*(?=#[^\s]+$)/, "")),
            e = u.data("bs.modal") ? "toggle" : n.extend({
                remote: !/#/.test(f) && f
            }, u.data(), r.data());
        r.is("a") && t.preventDefault();
        u.one("show.bs.modal", function(n) {
            if (!n.isDefaultPrevented()) u.one("hidden.bs.modal", function() {
                r.is(":visible") && r.trigger("focus")
            })
        });
        i.call(u, e, this)
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tooltip"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.tooltip", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.type = null;
            this.options = null;
            this.enabled = null;
            this.timeout = null;
            this.hoverState = null;
            this.$element = null;
            this.inState = null;
            this.init("tooltip", n, t)
        },
        i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    };
    t.prototype.init = function(t, i, r) {
        var f, e, u, o, s;
        if (this.enabled = !0, this.type = t, this.$element = n(i), this.options = this.getOptions(r), this.$viewport = this.options.viewport && n(n.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (f = this.options.trigger.split(" "), e = f.length; e--;)
            if (u = f[e], u == "click") this.$element.on("click." + this.type, this.options.selector, n.proxy(this.toggle, this));
            else if (u != "manual") {
            o = u == "hover" ? "mouseenter" : "focusin";
            s = u == "hover" ? "mouseleave" : "focusout";
            this.$element.on(o + "." + this.type, this.options.selector, n.proxy(this.enter, this));
            this.$element.on(s + "." + this.type, this.options.selector, n.proxy(this.leave, this))
        }
        this.options.selector ? this._options = n.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    };
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.getOptions = function(t) {
        return t = n.extend({}, this.getDefaults(), this.$element.data(), t), t.delay && typeof t.delay == "number" && (t.delay = {
            show: t.delay,
            hide: t.delay
        }), t
    };
    t.prototype.getDelegateOptions = function() {
        var t = {},
            i = this.getDefaults();
        return this._options && n.each(this._options, function(n, r) {
            i[n] != r && (t[n] = r)
        }), t
    };
    t.prototype.enter = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusin" ? "focus" : "hover"] = !0), i.tip().hasClass("in") || i.hoverState == "in") {
            i.hoverState = "in";
            return
        }
        if (clearTimeout(i.timeout), i.hoverState = "in", !i.options.delay || !i.options.delay.show) return i.show();
        i.timeout = setTimeout(function() {
            i.hoverState == "in" && i.show()
        }, i.options.delay.show)
    };
    t.prototype.isInStateTrue = function() {
        for (var n in this.inState)
            if (this.inState[n]) return !0;
        return !1
    };
    t.prototype.leave = function(t) {
        var i = t instanceof this.constructor ? t : n(t.currentTarget).data("bs." + this.type);
        if (i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)), t instanceof n.Event && (i.inState[t.type == "focusout" ? "focus" : "hover"] = !1), !i.isInStateTrue()) {
            if (clearTimeout(i.timeout), i.hoverState = "out", !i.options.delay || !i.options.delay.hide) return i.hide();
            i.timeout = setTimeout(function() {
                i.hoverState == "out" && i.hide()
            }, i.options.delay.hide)
        }
    };
    t.prototype.show = function() {
        var c = n.Event("show.bs." + this.type),
            l, p, e, w, h;
        if (this.hasContent() && this.enabled) {
            if (this.$element.trigger(c), l = n.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]), c.isDefaultPrevented() || !l) return;
            var u = this,
                r = this.tip(),
                a = this.getUID(this.type);
            this.setContent();
            r.attr("id", a);
            this.$element.attr("aria-describedby", a);
            this.options.animation && r.addClass("fade");
            var i = typeof this.options.placement == "function" ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                v = /\s?auto?\s?/i,
                y = v.test(i);
            y && (i = i.replace(v, "") || "top");
            r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(i).data("bs." + this.type, this);
            this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element);
            this.$element.trigger("inserted.bs." + this.type);
            var f = this.getPosition(),
                o = r[0].offsetWidth,
                s = r[0].offsetHeight;
            y && (p = i, e = this.getPosition(this.$viewport), i = i == "bottom" && f.bottom + s > e.bottom ? "top" : i == "top" && f.top - s < e.top ? "bottom" : i == "right" && f.right + o > e.width ? "left" : i == "left" && f.left - o < e.left ? "right" : i, r.removeClass(p).addClass(i));
            w = this.getCalculatedOffset(i, f, o, s);
            this.applyPlacement(w, i);
            h = function() {
                var n = u.hoverState;
                u.$element.trigger("shown.bs." + u.type);
                u.hoverState = null;
                n == "out" && u.leave(u)
            };
            n.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", h).emulateTransitionEnd(t.TRANSITION_DURATION) : h()
        }
    };
    t.prototype.applyPlacement = function(t, i) {
        var r = this.tip(),
            l = r[0].offsetWidth,
            e = r[0].offsetHeight,
            o = parseInt(r.css("margin-top"), 10),
            s = parseInt(r.css("margin-left"), 10),
            h, f, u;
        isNaN(o) && (o = 0);
        isNaN(s) && (s = 0);
        t.top += o;
        t.left += s;
        n.offset.setOffset(r[0], n.extend({
            using: function(n) {
                r.css({
                    top: Math.round(n.top),
                    left: Math.round(n.left)
                })
            }
        }, t), 0);
        r.addClass("in");
        h = r[0].offsetWidth;
        f = r[0].offsetHeight;
        i == "top" && f != e && (t.top = t.top + e - f);
        u = this.getViewportAdjustedDelta(i, t, h, f);
        u.left ? t.left += u.left : t.top += u.top;
        var c = /top|bottom/.test(i),
            a = c ? u.left * 2 - l + h : u.top * 2 - e + f,
            v = c ? "offsetWidth" : "offsetHeight";
        r.offset(t);
        this.replaceArrow(a, r[0][v], c)
    };
    t.prototype.replaceArrow = function(n, t, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - n / t) + "%").css(i ? "top" : "left", "")
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            t = this.getTitle();
        n.find(".tooltip-inner")[this.options.html ? "html" : "text"](t);
        n.removeClass("fade in top bottom left right")
    };
    t.prototype.hide = function(i) {
        function e() {
            u.hoverState != "in" && r.detach();
            u.$element.removeAttr("aria-describedby").trigger("hidden.bs." + u.type);
            i && i()
        }
        var u = this,
            r = n(this.$tip),
            f = n.Event("hide.bs." + this.type);
        if (this.$element.trigger(f), !f.isDefaultPrevented()) return r.removeClass("in"), n.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", e).emulateTransitionEnd(t.TRANSITION_DURATION) : e(), this.hoverState = null, this
    };
    t.prototype.fixTitle = function() {
        var n = this.$element;
        (n.attr("title") || typeof n.attr("data-original-title") != "string") && n.attr("data-original-title", n.attr("title") || "").attr("title", "")
    };
    t.prototype.hasContent = function() {
        return this.getTitle()
    };
    t.prototype.getPosition = function(t) {
        t = t || this.$element;
        var u = t[0],
            r = u.tagName == "BODY",
            i = u.getBoundingClientRect();
        i.width == null && (i = n.extend({}, i, {
            width: i.right - i.left,
            height: i.bottom - i.top
        }));
        var f = r ? {
                top: 0,
                left: 0
            } : t.offset(),
            e = {
                scroll: r ? document.documentElement.scrollTop || document.body.scrollTop : t.scrollTop()
            },
            o = r ? {
                width: n(window).width(),
                height: n(window).height()
            } : null;
        return n.extend({}, i, e, o, f)
    };
    t.prototype.getCalculatedOffset = function(n, t, i, r) {
        return n == "bottom" ? {
            top: t.top + t.height,
            left: t.left + t.width / 2 - i / 2
        } : n == "top" ? {
            top: t.top - r,
            left: t.left + t.width / 2 - i / 2
        } : n == "left" ? {
            top: t.top + t.height / 2 - r / 2,
            left: t.left - i
        } : {
            top: t.top + t.height / 2 - r / 2,
            left: t.left + t.width
        }
    };
    t.prototype.getViewportAdjustedDelta = function(n, t, i, r) {
        var f = {
                top: 0,
                left: 0
            },
            e, u, o, s, h, c;
        return this.$viewport ? (e = this.options.viewport && this.options.viewport.padding || 0, u = this.getPosition(this.$viewport), /right|left/.test(n) ? (o = t.top - e - u.scroll, s = t.top + e - u.scroll + r, o < u.top ? f.top = u.top - o : s > u.top + u.height && (f.top = u.top + u.height - s)) : (h = t.left - e, c = t.left + e + i, h < u.left ? f.left = u.left - h : c > u.right && (f.left = u.left + u.width - c)), f) : f
    };
    t.prototype.getTitle = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-original-title") || (typeof n.title == "function" ? n.title.call(t[0]) : n.title)
    };
    t.prototype.getUID = function(n) {
        do n += ~~(Math.random() * 1e6); while (document.getElementById(n));
        return n
    };
    t.prototype.tip = function() {
        if (!this.$tip && (this.$tip = n(this.options.template), this.$tip.length != 1)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    };
    t.prototype.enable = function() {
        this.enabled = !0
    };
    t.prototype.disable = function() {
        this.enabled = !1
    };
    t.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    };
    t.prototype.toggle = function(t) {
        var i = this;
        t && (i = n(t.currentTarget).data("bs." + this.type), i || (i = new this.constructor(t.currentTarget, this.getDelegateOptions()), n(t.currentTarget).data("bs." + this.type, i)));
        t ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    };
    t.prototype.destroy = function() {
        var n = this;
        clearTimeout(this.timeout);
        this.hide(function() {
            n.$element.off("." + n.type).removeData("bs." + n.type);
            n.$tip && n.$tip.detach();
            n.$tip = null;
            n.$arrow = null;
            n.$viewport = null
        })
    };
    i = n.fn.tooltip;
    n.fn.tooltip = r;
    n.fn.tooltip.Constructor = t;
    n.fn.tooltip.noConflict = function() {
        return n.fn.tooltip = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.popover"),
                f = typeof i == "object" && i;
            (r || !/destroy|hide/.test(i)) && (r || u.data("bs.popover", r = new t(this, f)), typeof i == "string" && r[i]())
        })
    }
    var t = function(n, t) {
            this.init("popover", n, t)
        },
        i;
    if (!n.fn.tooltip) throw new Error("Popover requires tooltip.js");
    t.VERSION = "3.3.6";
    t.DEFAULTS = n.extend({}, n.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-title"><\/h3><div class="popover-content"><\/div><\/div>'
    });
    t.prototype = n.extend({}, n.fn.tooltip.Constructor.prototype);
    t.prototype.constructor = t;
    t.prototype.getDefaults = function() {
        return t.DEFAULTS
    };
    t.prototype.setContent = function() {
        var n = this.tip(),
            i = this.getTitle(),
            t = this.getContent();
        n.find(".popover-title")[this.options.html ? "html" : "text"](i);
        n.find(".popover-content").children().detach().end()[this.options.html ? typeof t == "string" ? "html" : "append" : "text"](t);
        n.removeClass("fade top bottom left right in");
        n.find(".popover-title").html() || n.find(".popover-title").hide()
    };
    t.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    };
    t.prototype.getContent = function() {
        var t = this.$element,
            n = this.options;
        return t.attr("data-content") || (typeof n.content == "function" ? n.content.call(t[0]) : n.content)
    };
    t.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    i = n.fn.popover;
    n.fn.popover = r;
    n.fn.popover.Constructor = t;
    n.fn.popover.noConflict = function() {
        return n.fn.popover = i, this
    }
}(jQuery); + function(n) {
    "use strict";

    function t(i, r) {
        this.$body = n(document.body);
        this.$scrollElement = n(i).is(document.body) ? n(window) : n(i);
        this.options = n.extend({}, t.DEFAULTS, r);
        this.selector = (this.options.target || "") + " .nav li > a";
        this.offsets = [];
        this.targets = [];
        this.activeTarget = null;
        this.scrollHeight = 0;
        this.$scrollElement.on("scroll.bs.scrollspy", n.proxy(this.process, this));
        this.refresh();
        this.process()
    }

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.scrollspy"),
                f = typeof i == "object" && i;
            r || u.data("bs.scrollspy", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    t.VERSION = "3.3.6";
    t.DEFAULTS = {
        offset: 10
    };
    t.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    };
    t.prototype.refresh = function() {
        var t = this,
            i = "offset",
            r = 0;
        this.offsets = [];
        this.targets = [];
        this.scrollHeight = this.getScrollHeight();
        n.isWindow(this.$scrollElement[0]) || (i = "position", r = this.$scrollElement.scrollTop());
        this.$body.find(this.selector).map(function() {
            var f = n(this),
                u = f.data("target") || f.attr("href"),
                t = /^#./.test(u) && n(u);
            return t && t.length && t.is(":visible") && [
                [t[i]().top + r, u]
            ] || null
        }).sort(function(n, t) {
            return n[0] - t[0]
        }).each(function() {
            t.offsets.push(this[0]);
            t.targets.push(this[1])
        })
    };
    t.prototype.process = function() {
        var i = this.$scrollElement.scrollTop() + this.options.offset,
            f = this.getScrollHeight(),
            e = this.options.offset + f - this.$scrollElement.height(),
            t = this.offsets,
            r = this.targets,
            u = this.activeTarget,
            n;
        if (this.scrollHeight != f && this.refresh(), i >= e) return u != (n = r[r.length - 1]) && this.activate(n);
        if (u && i < t[0]) return this.activeTarget = null, this.clear();
        for (n = t.length; n--;) u != r[n] && i >= t[n] && (t[n + 1] === undefined || i < t[n + 1]) && this.activate(r[n])
    };
    t.prototype.activate = function(t) {
        this.activeTarget = t;
        this.clear();
        var r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            i = n(r).parents("li").addClass("active");
        i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active"));
        i.trigger("activate.bs.scrollspy")
    };
    t.prototype.clear = function() {
        n(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var r = n.fn.scrollspy;
    n.fn.scrollspy = i;
    n.fn.scrollspy.Constructor = t;
    n.fn.scrollspy.noConflict = function() {
        return n.fn.scrollspy = r, this
    };
    n(window).on("load.bs.scrollspy.data-api", function() {
        n('[data-spy="scroll"]').each(function() {
            var t = n(this);
            i.call(t, t.data())
        })
    })
}(jQuery); + function(n) {
    "use strict";

    function r(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.tab");
            r || u.data("bs.tab", r = new t(this));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(t) {
            this.element = n(t)
        },
        u, i;
    t.VERSION = "3.3.6";
    t.TRANSITION_DURATION = 150;
    t.prototype.show = function() {
        var t = this.element,
            f = t.closest("ul:not(.dropdown-menu)"),
            i = t.data("target"),
            u;
        if (i || (i = t.attr("href"), i = i && i.replace(/.*(?=#[^\s]*$)/, "")), !t.parent("li").hasClass("active")) {
            var r = f.find(".active:last a"),
                e = n.Event("hide.bs.tab", {
                    relatedTarget: t[0]
                }),
                o = n.Event("show.bs.tab", {
                    relatedTarget: r[0]
                });
            (r.trigger(e), t.trigger(o), o.isDefaultPrevented() || e.isDefaultPrevented()) || (u = n(i), this.activate(t.closest("li"), f), this.activate(u, u.parent(), function() {
                r.trigger({
                    type: "hidden.bs.tab",
                    relatedTarget: t[0]
                });
                t.trigger({
                    type: "shown.bs.tab",
                    relatedTarget: r[0]
                })
            }))
        }
    };
    t.prototype.activate = function(i, r, u) {
        function o() {
            f.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1);
            i.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0);
            e ? (i[0].offsetWidth, i.addClass("in")) : i.removeClass("fade");
            i.parent(".dropdown-menu").length && i.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0);
            u && u()
        }
        var f = r.find("> .active"),
            e = u && n.support.transition && (f.length && f.hasClass("fade") || !!r.find("> .fade").length);
        f.length && e ? f.one("bsTransitionEnd", o).emulateTransitionEnd(t.TRANSITION_DURATION) : o();
        f.removeClass("in")
    };
    u = n.fn.tab;
    n.fn.tab = r;
    n.fn.tab.Constructor = t;
    n.fn.tab.noConflict = function() {
        return n.fn.tab = u, this
    };
    i = function(t) {
        t.preventDefault();
        r.call(n(this), "show")
    };
    n(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', i).on("click.bs.tab.data-api", '[data-toggle="pill"]', i)
}(jQuery); + function(n) {
    "use strict";

    function i(i) {
        return this.each(function() {
            var u = n(this),
                r = u.data("bs.affix"),
                f = typeof i == "object" && i;
            r || u.data("bs.affix", r = new t(this, f));
            typeof i == "string" && r[i]()
        })
    }
    var t = function(i, r) {
            this.options = n.extend({}, t.DEFAULTS, r);
            this.$target = n(this.options.target).on("scroll.bs.affix.data-api", n.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", n.proxy(this.checkPositionWithEventLoop, this));
            this.$element = n(i);
            this.affixed = null;
            this.unpin = null;
            this.pinnedOffset = null;
            this.checkPosition()
        },
        r;
    t.VERSION = "3.3.6";
    t.RESET = "affix affix-top affix-bottom";
    t.DEFAULTS = {
        offset: 0,
        target: window
    };
    t.prototype.getState = function(n, t, i, r) {
        var u = this.$target.scrollTop(),
            f = this.$element.offset(),
            e = this.$target.height();
        if (i != null && this.affixed == "top") return u < i ? "top" : !1;
        if (this.affixed == "bottom") return i != null ? u + this.unpin <= f.top ? !1 : "bottom" : u + e <= n - r ? !1 : "bottom";
        var o = this.affixed == null,
            s = o ? u : f.top,
            h = o ? e : t;
        return i != null && u <= i ? "top" : r != null && s + h >= n - r ? "bottom" : !1
    };
    t.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(t.RESET).addClass("affix");
        var n = this.$target.scrollTop(),
            i = this.$element.offset();
        return this.pinnedOffset = i.top - n
    };
    t.prototype.checkPositionWithEventLoop = function() {
        setTimeout(n.proxy(this.checkPosition, this), 1)
    };
    t.prototype.checkPosition = function() {
        var i, e, o;
        if (this.$element.is(":visible")) {
            var s = this.$element.height(),
                r = this.options.offset,
                f = r.top,
                u = r.bottom,
                h = Math.max(n(document).height(), n(document.body).height());
            if (typeof r != "object" && (u = f = r), typeof f == "function" && (f = r.top(this.$element)), typeof u == "function" && (u = r.bottom(this.$element)), i = this.getState(h, s, f, u), this.affixed != i) {
                if (this.unpin != null && this.$element.css("top", ""), e = "affix" + (i ? "-" + i : ""), o = n.Event(e + ".bs.affix"), this.$element.trigger(o), o.isDefaultPrevented()) return;
                this.affixed = i;
                this.unpin = i == "bottom" ? this.getPinnedOffset() : null;
                this.$element.removeClass(t.RESET).addClass(e).trigger(e.replace("affix", "affixed") + ".bs.affix")
            }
            i == "bottom" && this.$element.offset({
                top: h - s - u
            })
        }
    };
    r = n.fn.affix;
    n.fn.affix = i;
    n.fn.affix.Constructor = t;
    n.fn.affix.noConflict = function() {
        return n.fn.affix = r, this
    };
    n(window).on("load", function() {
        n('[data-spy="affix"]').each(function() {
            var r = n(this),
                t = r.data();
            t.offset = t.offset || {};
            t.offsetBottom != null && (t.offset.bottom = t.offsetBottom);
            t.offsetTop != null && (t.offset.top = t.offsetTop);
            i.call(r, t)
        })
    })
}(jQuery),
function(n, t, i) {
    function f(t, i) {
        this.element = n(t);
        this.settings = n.extend({}, u, i);
        this._defaults = u;
        this._name = r;
        this.init()
    }
    var r = "metisMenu",
        u = {
            toggle: !0,
            doubleTapToGo: !1
        };
    f.prototype = {
        init: function() {
            var t = this.element,
                f = this.settings.toggle,
                u = this;
            this.isIE() <= 9 ? (t.find("li.active").has("ul").children("ul").collapse("show"), t.find("li").not(".active").has("ul").children("ul").collapse("hide")) : (t.find("li.active").has("ul").children("ul").addClass("collapse in"), t.find("li").not(".active").has("ul").children("ul").addClass("collapse"));
            u.settings.doubleTapToGo && t.find("li.active").has("ul").children("a").addClass("doubleTapToGo");
            t.find("li").has("ul").children("a").on("click." + r, function(t) {
                if (t.preventDefault(), u.settings.doubleTapToGo && u.doubleTapToGo(n(this)) && n(this).attr("href") !== "#" && n(this).attr("href") !== "") {
                    t.stopPropagation();
                    i.location = n(this).attr("href");
                    return
                }
                n(this).parent("li").toggleClass("active").children("ul").collapse("toggle");
                f && n(this).parent("li").siblings().removeClass("active").children("ul.in").collapse("hide")
            })
        },
        isIE: function() {
            for (var r, n = 3, t = i.createElement("div"), u = t.getElementsByTagName("i"); t.innerHTML = "<!--[if gt IE " + ++n + "]><i><\/i><![endif]-->", u[0];) return n > 4 ? n : r
        },
        doubleTapToGo: function(n) {
            var t = this.element;
            return n.hasClass("doubleTapToGo") ? (n.removeClass("doubleTapToGo"), !0) : n.parent().children("ul").length ? (t.find(".doubleTapToGo").removeClass("doubleTapToGo"), n.addClass("doubleTapToGo"), !1) : void 0
        },
        remove: function() {
            this.element.off("." + r);
            this.element.removeData(r)
        }
    };
    n.fn[r] = function(t) {
        return this.each(function() {
            var i = n(this);
            i.data(r) && i.data(r).remove();
            i.data(r, new f(this, t))
        }), this
    }
}(jQuery, window, document),
function(n, t) {
    typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : n.moment = t()
}(this, function() {
    "use strict";

    function t() {
        return gu.apply(null, arguments)
    }

    function as(n) {
        gu = n
    }

    function pt(n) {
        return n instanceof Array || Object.prototype.toString.call(n) === "[object Array]"
    }

    function ai(n) {
        return n instanceof Date || Object.prototype.toString.call(n) === "[object Date]"
    }

    function nf(n, t) {
        for (var r = [], i = 0; i < n.length; ++i) r.push(t(n[i], i));
        return r
    }

    function w(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }

    function wt(n, t) {
        for (var i in t) w(t, i) && (n[i] = t[i]);
        return w(t, "toString") && (n.toString = t.toString), w(t, "valueOf") && (n.valueOf = t.valueOf), n
    }

    function it(n, t, i, r) {
        return he(n, t, i, r, !0).utc()
    }

    function vs() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1,
            parsedDateParts: [],
            meridiem: null
        }
    }

    function f(n) {
        return n._pf == null && (n._pf = vs()), n._pf
    }

    function ar(n) {
        if (n._isValid == null) {
            var t = f(n),
                i = tf.call(t.parsedDateParts, function(n) {
                    return n != null
                });
            n._isValid = !isNaN(n._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && i);
            n._strict && (n._isValid = n._isValid && t.charsLeftOver === 0 && t.unusedTokens.length === 0 && t.bigHour === undefined)
        }
        return n._isValid
    }

    function vi(n) {
        var t = it(NaN);
        return n != null ? wt(f(t), n) : f(t).userInvalidated = !0, t
    }

    function p(n) {
        return n === void 0
    }

    function vr(n, t) {
        var u, i, r;
        if (p(t._isAMomentObject) || (n._isAMomentObject = t._isAMomentObject), p(t._i) || (n._i = t._i), p(t._f) || (n._f = t._f), p(t._l) || (n._l = t._l), p(t._strict) || (n._strict = t._strict), p(t._tzm) || (n._tzm = t._tzm), p(t._isUTC) || (n._isUTC = t._isUTC), p(t._offset) || (n._offset = t._offset), p(t._pf) || (n._pf = f(t)), p(t._locale) || (n._locale = t._locale), yi.length > 0)
            for (u in yi) i = yi[u], r = t[i], p(r) || (n[i] = r);
        return n
    }

    function oi(n) {
        vr(this, n);
        this._d = new Date(n._d != null ? n._d.getTime() : NaN);
        pi === !1 && (pi = !0, t.updateOffset(this), pi = !1)
    }

    function ht(n) {
        return n instanceof oi || n != null && n._isAMomentObject != null
    }

    function b(n) {
        return n < 0 ? Math.ceil(n) : Math.floor(n)
    }

    function e(n) {
        var t = +n,
            i = 0;
        return t !== 0 && isFinite(t) && (i = b(t)), i
    }

    function rf(n, t, i) {
        for (var f = Math.min(n.length, t.length), o = Math.abs(n.length - t.length), u = 0, r = 0; r < f; r++)(i && n[r] !== t[r] || !i && e(n[r]) !== e(t[r])) && u++;
        return u + o
    }

    function uf(n) {
        t.suppressDeprecationWarnings === !1 && typeof console != "undefined" && console.warn && console.warn("Deprecation warning: " + n)
    }

    function d(n, i) {
        var r = !0;
        return wt(function() {
            return t.deprecationHandler != null && t.deprecationHandler(null, n), r && (uf(n + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), r = !1), i.apply(this, arguments)
        }, i)
    }

    function pr(n, i) {
        t.deprecationHandler != null && t.deprecationHandler(n, i);
        yr[n] || (uf(i), yr[n] = !0)
    }

    function ct(n) {
        return n instanceof Function || Object.prototype.toString.call(n) === "[object Function]"
    }

    function ff(n) {
        return Object.prototype.toString.call(n) === "[object Object]"
    }

    function ys(n) {
        var t;
        for (var i in n) t = n[i], ct(t) ? this[i] = t : this["_" + i] = t;
        this._config = n;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function wr(n, t) {
        var r = wt({}, n);
        for (var i in t) w(t, i) && (ff(n[i]) && ff(t[i]) ? (r[i] = {}, wt(r[i], n[i]), wt(r[i], t[i])) : t[i] != null ? r[i] = t[i] : delete r[i]);
        return r
    }

    function br(n) {
        n != null && this.set(n)
    }

    function of(n) {
        return n ? n.toLowerCase().replace("_", "-") : n
    }

    function ps(n) {
        for (var r = 0, i, t, f, u; r < n.length;) {
            for (u = of(n[r]).split("-"), i = u.length, t = of(n[r + 1]), t = t ? t.split("-") : null; i > 0;) {
                if (f = sf(u.slice(0, i).join("-")), f) return f;
                if (t && t.length >= i && rf(u, t, !0) >= i - 1) break;
                i--
            }
            r++
        }
        return null
    }

    function sf(n) {
        var t = null;
        if (!l[n] && typeof module != "undefined" && module && module.exports) try {
            t = wi._abbr;
            require("./locale/" + n);
            ii(t)
        } catch (i) {}
        return l[n]
    }

    function ii(n, t) {
        var i;
        return n && (i = p(t) ? lt(n) : hf(n, t), i && (wi = i)), wi._abbr
    }

    function hf(n, t) {
        return t !== null ? (t.abbr = n, l[n] != null ? (pr("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = wr(l[n]._config, t)) : t.parentLocale != null && (l[t.parentLocale] != null ? t = wr(l[t.parentLocale]._config, t) : pr("parentLocaleUndefined", "specified parentLocale is not defined yet")), l[n] = new br(t), ii(n), l[n]) : (delete l[n], null)
    }

    function ws(n, t) {
        if (t != null) {
            var i;
            l[n] != null && (t = wr(l[n]._config, t));
            i = new br(t);
            i.parentLocale = l[n];
            l[n] = i;
            ii(n)
        } else l[n] != null && (l[n].parentLocale != null ? l[n] = l[n].parentLocale : l[n] != null && delete l[n]);
        return l[n]
    }

    function lt(n) {
        var t;
        if (n && n._locale && n._locale._abbr && (n = n._locale._abbr), !n) return wi;
        if (!pt(n)) {
            if (t = sf(n), t) return t;
            n = [n]
        }
        return ps(n)
    }

    function bs() {
        return ef(l)
    }

    function y(n, t) {
        var i = n.toLowerCase();
        ri[i] = ri[i + "s"] = ri[t] = n
    }

    function g(n) {
        return typeof n == "string" ? ri[n] || ri[n.toLowerCase()] : undefined
    }

    function cf(n) {
        var r = {},
            t;
        for (var i in n) w(n, i) && (t = g(i), t && (r[t] = n[i]));
        return r
    }

    function ui(n, i) {
        return function(r) {
            return r != null ? (lf(this, n, r), t.updateOffset(this, i), this) : bi(this, n)
        }
    }

    function bi(n, t) {
        return n.isValid() ? n._d["get" + (n._isUTC ? "UTC" : "") + t]() : NaN
    }

    function lf(n, t, i) {
        n.isValid() && n._d["set" + (n._isUTC ? "UTC" : "") + t](i)
    }

    function af(n, t) {
        var i;
        if (typeof n == "object")
            for (i in n) this.set(i, n[i]);
        else if (n = g(n), ct(this[n])) return this[n](t);
        return this
    }

    function ft(n, t, i) {
        var r = "" + Math.abs(n),
            u = t - r.length,
            f = n >= 0;
        return (f ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, u)).toString().substr(1) + r
    }

    function r(n, t, i, r) {
        var u = r;
        typeof r == "string" && (u = function() {
            return this[r]()
        });
        n && (fi[n] = u);
        t && (fi[t[0]] = function() {
            return ft(u.apply(this, arguments), t[1], t[2])
        });
        i && (fi[i] = function() {
            return this.localeData().ordinal(u.apply(this, arguments), n)
        })
    }

    function ks(n) {
        return n.match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "")
    }

    function ds(n) {
        for (var t = n.match(vf), i = 0, r = t.length; i < r; i++) t[i] = fi[t[i]] ? fi[t[i]] : ks(t[i]);
        return function(i) {
            for (var f = "", u = 0; u < r; u++) f += t[u] instanceof Function ? t[u].call(i, n) : t[u];
            return f
        }
    }

    function dr(n, t) {
        return n.isValid() ? (t = yf(t, n.localeData()), kr[t] = kr[t] || ds(t), kr[t](n)) : n.localeData().invalidDate()
    }

    function yf(n, t) {
        function r(n) {
            return t.longDateFormat(n) || n
        }
        var i = 5;
        for (ki.lastIndex = 0; i >= 0 && ki.test(n);) n = n.replace(ki, r), ki.lastIndex = 0, i -= 1;
        return n
    }

    function i(n, t, i) {
        tu[n] = ct(t) ? t : function(n) {
            return n && i ? i : t
        }
    }

    function nh(n, t) {
        return w(tu, n) ? tu[n](t._strict, t._locale) : new RegExp(th(n))
    }

    function th(n) {
        return bt(n.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(n, t, i, r, u) {
            return t || i || r || u
        }))
    }

    function bt(n) {
        return n.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function s(n, t) {
        var i, r = t;
        for (typeof n == "string" && (n = [n]), typeof t == "number" && (r = function(n, i) {
                i[t] = e(n)
            }), i = 0; i < n.length; i++) rr[n[i]] = r
    }

    function hi(n, t) {
        s(n, function(n, i, r, u) {
            r._w = r._w || {};
            t(n, r._w, r, u)
        })
    }

    function ih(n, t, i) {
        t != null && w(rr, n) && rr[n](t, i._a, i, n)
    }

    function iu(n, t) {
        return new Date(Date.UTC(n, t + 1, 0)).getUTCDate()
    }

    function fh(n, t) {
        return pt(this._months) ? this._months[n.month()] : this._months[ru.test(t) ? "format" : "standalone"][n.month()]
    }

    function eh(n, t) {
        return pt(this._monthsShort) ? this._monthsShort[n.month()] : this._monthsShort[ru.test(t) ? "format" : "standalone"][n.month()]
    }

    function oh(n, t, i) {
        var u, r, e, f = n.toLocaleLowerCase();
        if (!this._monthsParse)
            for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], u = 0; u < 12; ++u) e = it([2e3, u]), this._shortMonthsParse[u] = this.monthsShort(e, "").toLocaleLowerCase(), this._longMonthsParse[u] = this.months(e, "").toLocaleLowerCase();
        return i ? t === "MMM" ? (r = a.call(this._shortMonthsParse, f), r !== -1 ? r : null) : (r = a.call(this._longMonthsParse, f), r !== -1 ? r : null) : t === "MMM" ? (r = a.call(this._shortMonthsParse, f), r !== -1) ? r : (r = a.call(this._longMonthsParse, f), r !== -1 ? r : null) : (r = a.call(this._longMonthsParse, f), r !== -1) ? r : (r = a.call(this._shortMonthsParse, f), r !== -1 ? r : null)
    }

    function sh(n, t, i) {
        var r, u, f;
        if (this._monthsParseExact) return oh.call(this, n, t, i);
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++)
            if ((u = it([2e3, r]), i && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(u, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(u, "").replace(".", "") + "$", "i")), i || this._monthsParse[r] || (f = "^" + this.months(u, "") + "|^" + this.monthsShort(u, ""), this._monthsParse[r] = new RegExp(f.replace(".", ""), "i")), i && t === "MMMM" && this._longMonthsParse[r].test(n)) || i && t === "MMM" && this._shortMonthsParse[r].test(n) || !i && this._monthsParse[r].test(n)) return r
    }

    function ne(n, t) {
        var i;
        if (!n.isValid()) return n;
        if (typeof t == "string")
            if (/^\d+$/.test(t)) t = e(t);
            else if (t = n.localeData().monthsParse(t), typeof t != "number") return n;
        return i = Math.min(n.date(), iu(n.year(), t)), n._d["set" + (n._isUTC ? "UTC" : "") + "Month"](t, i), n
    }

    function te(n) {
        return n != null ? (ne(this, n), t.updateOffset(this, !0), this) : bi(this, "Month")
    }

    function hh() {
        return iu(this.year(), this.month())
    }

    function ch(n) {
        return this._monthsParseExact ? (w(this, "_monthsRegex") || ue.call(this), n ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && n ? this._monthsShortStrictRegex : this._monthsShortRegex
    }

    function lh(n) {
        return this._monthsParseExact ? (w(this, "_monthsRegex") || ue.call(this), n ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && n ? this._monthsStrictRegex : this._monthsRegex
    }

    function ue() {
        function f(n, t) {
            return t.length - n.length
        }
        for (var i = [], r = [], t = [], u, n = 0; n < 12; n++) u = it([2e3, n]), i.push(this.monthsShort(u, "")), r.push(this.months(u, "")), t.push(this.months(u, "")), t.push(this.monthsShort(u, ""));
        for (i.sort(f), r.sort(f), t.sort(f), n = 0; n < 12; n++) i[n] = bt(i[n]), r[n] = bt(r[n]), t[n] = bt(t[n]);
        this._monthsRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._monthsShortRegex = this._monthsRegex;
        this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._monthsShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
    }

    function uu(n) {
        var i, t = n._a;
        return t && f(n).overflow === -2 && (i = t[et] < 0 || t[et] > 11 ? et : t[rt] < 1 || t[rt] > iu(t[nt], t[et]) ? rt : t[v] < 0 || t[v] > 24 || t[v] === 24 && (t[tt] !== 0 || t[ot] !== 0 || t[kt] !== 0) ? v : t[tt] < 0 || t[tt] > 59 ? tt : t[ot] < 0 || t[ot] > 59 ? ot : t[kt] < 0 || t[kt] > 999 ? kt : -1, f(n)._overflowDayOfYear && (i < nt || i > rt) && (i = rt), f(n)._overflowWeeks && i === -1 && (i = rh), f(n)._overflowWeekday && i === -1 && (i = uh), f(n).overflow = i), n
    }

    function fe(n) {
        var t, r, o = n._i,
            i = ah.exec(o) || vh.exec(o),
            s, e, u, h;
        if (i) {
            for (f(n).iso = !0, t = 0, r = ur.length; t < r; t++)
                if (ur[t][1].exec(i[1])) {
                    e = ur[t][0];
                    s = ur[t][2] !== !1;
                    break
                }
            if (e == null) {
                n._isValid = !1;
                return
            }
            if (i[3]) {
                for (t = 0, r = fu.length; t < r; t++)
                    if (fu[t][1].exec(i[3])) {
                        u = (i[2] || " ") + fu[t][0];
                        break
                    }
                if (u == null) {
                    n._isValid = !1;
                    return
                }
            }
            if (!s && u != null) {
                n._isValid = !1;
                return
            }
            if (i[4])
                if (yh.exec(i[4])) h = "Z";
                else {
                    n._isValid = !1;
                    return
                }
            n._f = e + (u || "") + (h || "");
            su(n)
        } else n._isValid = !1
    }

    function wh(n) {
        var i = ph.exec(n._i);
        if (i !== null) {
            n._d = new Date(+i[1]);
            return
        }
        fe(n);
        n._isValid === !1 && (delete n._isValid, t.createFromInputFallback(n))
    }

    function bh(n, t, i, r, u, f, e) {
        var o = new Date(n, t, i, r, u, f, e);
        return n < 100 && n >= 0 && isFinite(o.getFullYear()) && o.setFullYear(n), o
    }

    function fr(n) {
        var t = new Date(Date.UTC.apply(null, arguments));
        return n < 100 && n >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(n), t
    }

    function ci(n) {
        return ee(n) ? 366 : 365
    }

    function ee(n) {
        return n % 4 == 0 && n % 100 != 0 || n % 400 == 0
    }

    function kh() {
        return ee(this.year())
    }

    function er(n, t, i) {
        var r = 7 + t - i,
            u = (7 + fr(n, 0, r).getUTCDay() - t) % 7;
        return -u + r - 1
    }

    function oe(n, t, i, r, u) {
        var s = (7 + i - r) % 7,
            h = er(n, r, u),
            f = 1 + 7 * (t - 1) + s + h,
            e, o;
        return f <= 0 ? (e = n - 1, o = ci(e) + f) : f > ci(n) ? (e = n + 1, o = f - ci(n)) : (e = n, o = f), {
            year: e,
            dayOfYear: o
        }
    }

    function li(n, t, i) {
        var e = er(n.year(), t, i),
            r = Math.floor((n.dayOfYear() - e - 1) / 7) + 1,
            f, u;
        return r < 1 ? (u = n.year() - 1, f = r + dt(u, t, i)) : r > dt(n.year(), t, i) ? (f = r - dt(n.year(), t, i), u = n.year() + 1) : (u = n.year(), f = r), {
            week: f,
            year: u
        }
    }

    function dt(n, t, i) {
        var r = er(n, t, i),
            u = er(n + 1, t, i);
        return (ci(n) - r + u) / 7
    }

    function ei(n, t, i) {
        return n != null ? n : t != null ? t : i
    }

    function dh(n) {
        var i = new Date(t.now());
        return n._useUTC ? [i.getUTCFullYear(), i.getUTCMonth(), i.getUTCDate()] : [i.getFullYear(), i.getMonth(), i.getDate()]
    }

    function ou(n) {
        var t, i, r = [],
            u, e;
        if (!n._d) {
            for (u = dh(n), n._w && n._a[rt] == null && n._a[et] == null && gh(n), n._dayOfYear && (e = ei(n._a[nt], u[nt]), n._dayOfYear > ci(e) && (f(n)._overflowDayOfYear = !0), i = fr(e, 0, n._dayOfYear), n._a[et] = i.getUTCMonth(), n._a[rt] = i.getUTCDate()), t = 0; t < 3 && n._a[t] == null; ++t) n._a[t] = r[t] = u[t];
            for (; t < 7; t++) n._a[t] = r[t] = n._a[t] == null ? t === 2 ? 1 : 0 : n._a[t];
            n._a[v] === 24 && n._a[tt] === 0 && n._a[ot] === 0 && n._a[kt] === 0 && (n._nextDay = !0, n._a[v] = 0);
            n._d = (n._useUTC ? fr : bh).apply(null, r);
            n._tzm != null && n._d.setUTCMinutes(n._d.getUTCMinutes() - n._tzm);
            n._nextDay && (n._a[v] = 24)
        }
    }

    function gh(n) {
        var t, o, u, i, r, e, h, s;
        t = n._w;
        t.GG != null || t.W != null || t.E != null ? (r = 1, e = 4, o = ei(t.GG, n._a[nt], li(c(), 1, 4).year), u = ei(t.W, 1), i = ei(t.E, 1), (i < 1 || i > 7) && (s = !0)) : (r = n._locale._week.dow, e = n._locale._week.doy, o = ei(t.gg, n._a[nt], li(c(), r, e).year), u = ei(t.w, 1), t.d != null ? (i = t.d, (i < 0 || i > 6) && (s = !0)) : t.e != null ? (i = t.e + r, (t.e < 0 || t.e > 6) && (s = !0)) : i = r);
        u < 1 || u > dt(o, r, e) ? f(n)._overflowWeeks = !0 : s != null ? f(n)._overflowWeekday = !0 : (h = oe(o, u, i, r, e), n._a[nt] = h.year, n._dayOfYear = h.dayOfYear)
    }

    function su(n) {
        if (n._f === t.ISO_8601) {
            fe(n);
            return
        }
        n._a = [];
        f(n).empty = !0;
        for (var i = "" + n._i, r, u, s, c = i.length, h = 0, o = yf(n._f, n._locale).match(vf) || [], e = 0; e < o.length; e++) u = o[e], r = (i.match(nh(u, n)) || [])[0], r && (s = i.substr(0, i.indexOf(r)), s.length > 0 && f(n).unusedInput.push(s), i = i.slice(i.indexOf(r) + r.length), h += r.length), fi[u] ? (r ? f(n).empty = !1 : f(n).unusedTokens.push(u), ih(u, r, n)) : n._strict && !r && f(n).unusedTokens.push(u);
        f(n).charsLeftOver = c - h;
        i.length > 0 && f(n).unusedInput.push(i);
        f(n).bigHour === !0 && n._a[v] <= 12 && n._a[v] > 0 && (f(n).bigHour = undefined);
        f(n).parsedDateParts = n._a.slice(0);
        f(n).meridiem = n._meridiem;
        n._a[v] = nc(n._locale, n._a[v], n._meridiem);
        ou(n);
        uu(n)
    }

    function nc(n, t, i) {
        var r;
        return i == null ? t : n.meridiemHour != null ? n.meridiemHour(t, i) : n.isPM != null ? (r = n.isPM(i), r && t < 12 && (t += 12), r || t !== 12 || (t = 0), t) : t
    }

    function tc(n) {
        var t, e, u, r, i;
        if (n._f.length === 0) {
            f(n).invalidFormat = !0;
            n._d = new Date(NaN);
            return
        }
        for (r = 0; r < n._f.length; r++)(i = 0, t = vr({}, n), n._useUTC != null && (t._useUTC = n._useUTC), t._f = n._f[r], su(t), ar(t)) && (i += f(t).charsLeftOver, i += f(t).unusedTokens.length * 10, f(t).score = i, (u == null || i < u) && (u = i, e = t));
        wt(n, e || t)
    }

    function ic(n) {
        if (!n._d) {
            var t = cf(n._i);
            n._a = nf([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(n) {
                return n && parseInt(n, 10)
            });
            ou(n)
        }
    }

    function rc(n) {
        var t = new oi(uu(se(n)));
        return t._nextDay && (t.add(1, "d"), t._nextDay = undefined), t
    }

    function se(n) {
        var t = n._i,
            i = n._f;
        return (n._locale = n._locale || lt(n._l), t === null || i === undefined && t === "") ? vi({
            nullInput: !0
        }) : (typeof t == "string" && (n._i = t = n._locale.preparse(t)), ht(t)) ? new oi(uu(t)) : (pt(i) ? tc(n) : i ? su(n) : ai(t) ? n._d = t : uc(n), ar(n) || (n._d = null), n)
    }

    function uc(n) {
        var i = n._i;
        i === undefined ? n._d = new Date(t.now()) : ai(i) ? n._d = new Date(i.valueOf()) : typeof i == "string" ? wh(n) : pt(i) ? (n._a = nf(i.slice(0), function(n) {
            return parseInt(n, 10)
        }), ou(n)) : typeof i == "object" ? ic(n) : typeof i == "number" ? n._d = new Date(i) : t.createFromInputFallback(n)
    }

    function he(n, t, i, r, u) {
        var f = {};
        return typeof i == "boolean" && (r = i, i = undefined), f._isAMomentObject = !0, f._useUTC = f._isUTC = u, f._l = i, f._i = n, f._f = t, f._strict = r, rc(f)
    }

    function c(n, t, i, r) {
        return he(n, t, i, r, !1)
    }

    function ae(n, t) {
        var r, i;
        if (t.length === 1 && pt(t[0]) && (t = t[0]), !t.length) return c();
        for (r = t[0], i = 1; i < t.length; ++i)(!t[i].isValid() || t[i][n](r)) && (r = t[i]);
        return r
    }

    function fc() {
        var n = [].slice.call(arguments, 0);
        return ae("isBefore", n)
    }

    function ec() {
        var n = [].slice.call(arguments, 0);
        return ae("isAfter", n)
    }

    function or(n) {
        var t = cf(n),
            i = t.year || 0,
            r = t.quarter || 0,
            u = t.month || 0,
            f = t.week || 0,
            e = t.day || 0,
            o = t.hour || 0,
            s = t.minute || 0,
            h = t.second || 0,
            c = t.millisecond || 0;
        this._milliseconds = +c + h * 1e3 + s * 6e4 + o * 36e5;
        this._days = +e + f * 7;
        this._months = +u + r * 3 + i * 12;
        this._data = {};
        this._locale = lt();
        this._bubble()
    }

    function hu(n) {
        return n instanceof or
    }

    function ye(n, t) {
        r(n, 0, 0, function() {
            var n = this.utcOffset(),
                i = "+";
            return n < 0 && (n = -n, i = "-"), i + ft(~~(n / 60), 2) + t + ft(~~n % 60, 2)
        })
    }

    function cu(n, t) {
        var r = (t || "").match(n) || [],
            f = r[r.length - 1] || [],
            i = (f + "").match(pe) || ["-", 0, 0],
            u = +(i[1] * 60) + e(i[2]);
        return i[0] === "+" ? u : -u
    }

    function lu(n, i) {
        var r, u;
        return i._isUTC ? (r = i.clone(), u = (ht(n) || ai(n) ? n.valueOf() : c(n).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + u), t.updateOffset(r, !1), r) : c(n).local()
    }

    function au(n) {
        return -Math.round(n._d.getTimezoneOffset() / 15) * 15
    }

    function oc(n, i) {
        var r = this._offset || 0,
            u;
        return this.isValid() ? n != null ? (typeof n == "string" ? n = cu(ir, n) : Math.abs(n) < 16 && (n = n * 60), !this._isUTC && i && (u = au(this)), this._offset = n, this._isUTC = !0, u != null && this.add(u, "m"), r !== n && (!i || this._changeInProgress ? to(this, at(n - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, t.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? r : au(this) : n != null ? this : NaN
    }

    function sc(n, t) {
        return n != null ? (typeof n != "string" && (n = -n), this.utcOffset(n, t), this) : -this.utcOffset()
    }

    function hc(n) {
        return this.utcOffset(0, n)
    }

    function cc(n) {
        return this._isUTC && (this.utcOffset(0, n), this._isUTC = !1, n && this.subtract(au(this), "m")), this
    }

    function lc() {
        return this._tzm ? this.utcOffset(this._tzm) : typeof this._i == "string" && this.utcOffset(cu(gs, this._i)), this
    }

    function ac(n) {
        return this.isValid() ? (n = n ? c(n).utcOffset() : 0, (this.utcOffset() - n) % 60 == 0) : !1
    }

    function vc() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function yc() {
        var n, t;
        return p(this._isDSTShifted) ? (n = {}, vr(n, this), n = se(n), n._a ? (t = n._isUTC ? it(n._a) : c(n._a), this._isDSTShifted = this.isValid() && rf(n._a, t.toArray()) > 0) : this._isDSTShifted = !1, this._isDSTShifted) : this._isDSTShifted
    }

    function pc() {
        return this.isValid() ? !this._isUTC : !1
    }

    function wc() {
        return this.isValid() ? this._isUTC : !1
    }

    function we() {
        return this.isValid() ? this._isUTC && this._offset === 0 : !1
    }

    function at(n, t) {
        var i = n,
            r = null,
            u, f, o;
        return hu(n) ? i = {
            ms: n._milliseconds,
            d: n._days,
            M: n._months
        } : typeof n == "number" ? (i = {}, t ? i[t] = n : i.milliseconds = n) : (r = be.exec(n)) ? (u = r[1] === "-" ? -1 : 1, i = {
            y: 0,
            d: e(r[rt]) * u,
            h: e(r[v]) * u,
            m: e(r[tt]) * u,
            s: e(r[ot]) * u,
            ms: e(r[kt]) * u
        }) : (r = ke.exec(n)) ? (u = r[1] === "-" ? -1 : 1, i = {
            y: gt(r[2], u),
            M: gt(r[3], u),
            w: gt(r[4], u),
            d: gt(r[5], u),
            h: gt(r[6], u),
            m: gt(r[7], u),
            s: gt(r[8], u)
        }) : i == null ? i = {} : typeof i == "object" && ("from" in i || "to" in i) && (o = bc(c(i.from), c(i.to)), i = {}, i.ms = o.milliseconds, i.M = o.months), f = new or(i), hu(n) && w(n, "_locale") && (f._locale = n._locale), f
    }

    function gt(n, t) {
        var i = n && parseFloat(n.replace(",", "."));
        return (isNaN(i) ? 0 : i) * t
    }

    function de(n, t) {
        var i = {
            milliseconds: 0,
            months: 0
        };
        return i.months = t.month() - n.month() + (t.year() - n.year()) * 12, n.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +n.clone().add(i.months, "M"), i
    }

    function bc(n, t) {
        var i;
        return (n.isValid() && t.isValid()) ? (t = lu(t, n), n.isBefore(t) ? i = de(n, t) : (i = de(t, n), i.milliseconds = -i.milliseconds, i.months = -i.months), i) : {
            milliseconds: 0,
            months: 0
        }
    }

    function ge(n) {
        return n < 0 ? Math.round(-1 * n) * -1 : Math.round(n)
    }

    function no(n, t) {
        return function(i, r) {
            var u, f;
            return r === null || isNaN(+r) || (pr(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), f = i, i = r, r = f), i = typeof i == "string" ? +i : i, u = at(i, r), to(this, u, n), this
        }
    }

    function to(n, i, r, u) {
        var o = i._milliseconds,
            f = ge(i._days),
            e = ge(i._months);
        n.isValid() && (u = u == null ? !0 : u, o && n._d.setTime(n._d.valueOf() + o * r), f && lf(n, "Date", bi(n, "Date") + f * r), e && ne(n, bi(n, "Month") + e * r), u && t.updateOffset(n, f || e))
    }

    function kc(n, t) {
        var u = n || c(),
            f = lu(u, this).startOf("day"),
            i = this.diff(f, "days", !0),
            r = i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse",
            e = t && (ct(t[r]) ? t[r]() : t[r]);
        return this.format(e || this.localeData().calendar(r, this, c(u)))
    }

    function dc() {
        return new oi(this)
    }

    function gc(n, t) {
        var i = ht(n) ? n : c(n);
        return (this.isValid() && i.isValid()) ? (t = g(p(t) ? "millisecond" : t), t === "millisecond" ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf()) : !1
    }

    function nl(n, t) {
        var i = ht(n) ? n : c(n);
        return (this.isValid() && i.isValid()) ? (t = g(p(t) ? "millisecond" : t), t === "millisecond" ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf()) : !1
    }

    function tl(n, t, i, r) {
        return r = r || "()", (r[0] === "(" ? this.isAfter(n, i) : !this.isBefore(n, i)) && (r[1] === ")" ? this.isBefore(t, i) : !this.isAfter(t, i))
    }

    function il(n, t) {
        var i = ht(n) ? n : c(n),
            r;
        return (this.isValid() && i.isValid()) ? (t = g(t || "millisecond"), t === "millisecond" ? this.valueOf() === i.valueOf() : (r = i.valueOf(), this.clone().startOf(t).valueOf() <= r && r <= this.clone().endOf(t).valueOf())) : !1
    }

    function rl(n, t) {
        return this.isSame(n, t) || this.isAfter(n, t)
    }

    function ul(n, t) {
        return this.isSame(n, t) || this.isBefore(n, t)
    }

    function fl(n, t, i) {
        var f, e, u, r;
        return this.isValid() ? (f = lu(n, this), !f.isValid()) ? NaN : (e = (f.utcOffset() - this.utcOffset()) * 6e4, t = g(t), t === "year" || t === "month" || t === "quarter" ? (r = el(this, f), t === "quarter" ? r = r / 3 : t === "year" && (r = r / 12)) : (u = this - f, r = t === "second" ? u / 1e3 : t === "minute" ? u / 6e4 : t === "hour" ? u / 36e5 : t === "day" ? (u - e) / 864e5 : t === "week" ? (u - e) / 6048e5 : u), i ? r : b(r)) : NaN
    }

    function el(n, t) {
        var r = (t.year() - n.year()) * 12 + (t.month() - n.month()),
            i = n.clone().add(r, "months"),
            u, f;
        return t - i < 0 ? (u = n.clone().add(r - 1, "months"), f = (t - i) / (i - u)) : (u = n.clone().add(r + 1, "months"), f = (t - i) / (u - i)), -(r + f) || 0
    }

    function ol() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function sl() {
        var n = this.clone().utc();
        return 0 < n.year() && n.year() <= 9999 ? ct(Date.prototype.toISOString) ? this.toDate().toISOString() : dr(n, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : dr(n, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function hl(n) {
        n || (n = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
        var i = dr(this, n);
        return this.localeData().postformat(i)
    }

    function cl(n, t) {
        return this.isValid() && (ht(n) && n.isValid() || c(n).isValid()) ? at({
            to: this,
            from: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function ll(n) {
        return this.from(c(), n)
    }

    function al(n, t) {
        return this.isValid() && (ht(n) && n.isValid() || c(n).isValid()) ? at({
            from: this,
            to: n
        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
    }

    function vl(n) {
        return this.to(c(), n)
    }

    function uo(n) {
        var t;
        return n === undefined ? this._locale._abbr : (t = lt(n), t != null && (this._locale = t), this)
    }

    function fo() {
        return this._locale
    }

    function yl(n) {
        n = g(n);
        switch (n) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
            case "date":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return n === "week" && this.weekday(0), n === "isoWeek" && this.isoWeekday(1), n === "quarter" && this.month(Math.floor(this.month() / 3) * 3), this
    }

    function pl(n) {
        return (n = g(n), n === undefined || n === "millisecond") ? this : (n === "date" && (n = "day"), this.startOf(n).add(1, n === "isoWeek" ? "week" : n).subtract(1, "ms"))
    }

    function wl() {
        return this._d.valueOf() - (this._offset || 0) * 6e4
    }

    function bl() {
        return Math.floor(this.valueOf() / 1e3)
    }

    function kl() {
        return this._offset ? new Date(this.valueOf()) : this._d
    }

    function dl() {
        var n = this;
        return [n.year(), n.month(), n.date(), n.hour(), n.minute(), n.second(), n.millisecond()]
    }

    function gl() {
        var n = this;
        return {
            years: n.year(),
            months: n.month(),
            date: n.date(),
            hours: n.hours(),
            minutes: n.minutes(),
            seconds: n.seconds(),
            milliseconds: n.milliseconds()
        }
    }

    function na() {
        return this.isValid() ? this.toISOString() : null
    }

    function ta() {
        return ar(this)
    }

    function ia() {
        return wt({}, f(this))
    }

    function ra() {
        return f(this).overflow
    }

    function ua() {
        return {
            input: this._i,
            format: this._f,
            locale: this._locale,
            isUTC: this._isUTC,
            strict: this._strict
        }
    }

    function sr(n, t) {
        r(0, [n, n.length], 0, t)
    }

    function fa(n) {
        return eo.call(this, n, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
    }

    function ea(n) {
        return eo.call(this, n, this.isoWeek(), this.isoWeekday(), 1, 4)
    }

    function oa() {
        return dt(this.year(), 1, 4)
    }

    function sa() {
        var n = this.localeData()._week;
        return dt(this.year(), n.dow, n.doy)
    }

    function eo(n, t, i, r, u) {
        var f;
        return n == null ? li(this, r, u).year : (f = dt(n, r, u), t > f && (t = f), ha.call(this, n, t, i, r, u))
    }

    function ha(n, t, i, r, u) {
        var e = oe(n, t, i, r, u),
            f = fr(e.year, 0, e.dayOfYear);
        return this.year(f.getUTCFullYear()), this.month(f.getUTCMonth()), this.date(f.getUTCDate()), this
    }

    function ca(n) {
        return n == null ? Math.ceil((this.month() + 1) / 3) : this.month((n - 1) * 3 + this.month() % 3)
    }

    function la(n) {
        return li(n, this._week.dow, this._week.doy).week
    }

    function aa() {
        return this._week.dow
    }

    function va() {
        return this._week.doy
    }

    function ya(n) {
        var t = this.localeData().week(this);
        return n == null ? t : this.add((n - t) * 7, "d")
    }

    function pa(n) {
        var t = li(this, 1, 4).week;
        return n == null ? t : this.add((n - t) * 7, "d")
    }

    function wa(n, t) {
        return typeof n != "string" ? n : isNaN(n) ? (n = t.weekdaysParse(n), typeof n == "number") ? n : null : parseInt(n, 10)
    }

    function ba(n, t) {
        return pt(this._weekdays) ? this._weekdays[n.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][n.day()]
    }

    function ka(n) {
        return this._weekdaysShort[n.day()]
    }

    function da(n) {
        return this._weekdaysMin[n.day()]
    }

    function ga(n, t, i) {
        var f, r, e, u = n.toLocaleLowerCase();
        if (!this._weekdaysParse)
            for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], f = 0; f < 7; ++f) e = it([2e3, 1]).day(f), this._minWeekdaysParse[f] = this.weekdaysMin(e, "").toLocaleLowerCase(), this._shortWeekdaysParse[f] = this.weekdaysShort(e, "").toLocaleLowerCase(), this._weekdaysParse[f] = this.weekdays(e, "").toLocaleLowerCase();
        return i ? t === "dddd" ? (r = a.call(this._weekdaysParse, u), r !== -1 ? r : null) : t === "ddd" ? (r = a.call(this._shortWeekdaysParse, u), r !== -1 ? r : null) : (r = a.call(this._minWeekdaysParse, u), r !== -1 ? r : null) : t === "dddd" ? (r = a.call(this._weekdaysParse, u), r !== -1) ? r : (r = a.call(this._shortWeekdaysParse, u), r !== -1) ? r : (r = a.call(this._minWeekdaysParse, u), r !== -1 ? r : null) : t === "ddd" ? (r = a.call(this._shortWeekdaysParse, u), r !== -1) ? r : (r = a.call(this._weekdaysParse, u), r !== -1) ? r : (r = a.call(this._minWeekdaysParse, u), r !== -1 ? r : null) : (r = a.call(this._minWeekdaysParse, u), r !== -1) ? r : (r = a.call(this._weekdaysParse, u), r !== -1) ? r : (r = a.call(this._shortWeekdaysParse, u), r !== -1 ? r : null)
    }

    function nv(n, t, i) {
        var r, u, f;
        if (this._weekdaysParseExact) return ga.call(this, n, t, i);
        for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++)
            if ((u = it([2e3, 1]).day(r), i && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(u, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(u, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(u, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (f = "^" + this.weekdays(u, "") + "|^" + this.weekdaysShort(u, "") + "|^" + this.weekdaysMin(u, ""), this._weekdaysParse[r] = new RegExp(f.replace(".", ""), "i")), i && t === "dddd" && this._fullWeekdaysParse[r].test(n)) || i && t === "ddd" && this._shortWeekdaysParse[r].test(n) || i && t === "dd" && this._minWeekdaysParse[r].test(n) || !i && this._weekdaysParse[r].test(n)) return r
    }

    function tv(n) {
        if (!this.isValid()) return n != null ? this : NaN;
        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return n != null ? (n = wa(n, this.localeData()), this.add(n - t, "d")) : t
    }

    function iv(n) {
        if (!this.isValid()) return n != null ? this : NaN;
        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return n == null ? t : this.add(n - t, "d")
    }

    function rv(n) {
        return this.isValid() ? n == null ? this.day() || 7 : this.day(this.day() % 7 ? n : n - 7) : n != null ? this : NaN
    }

    function uv(n) {
        return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || pu.call(this), n ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && n ? this._weekdaysStrictRegex : this._weekdaysRegex
    }

    function fv(n) {
        return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || pu.call(this), n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && n ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
    }

    function ev(n) {
        return this._weekdaysParseExact ? (w(this, "_weekdaysRegex") || pu.call(this), n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && n ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
    }

    function pu() {
        function u(n, t) {
            return t.length - n.length
        }
        for (var e = [], i = [], r = [], t = [], f, o, s, h, n = 0; n < 7; n++) f = it([2e3, 1]).day(n), o = this.weekdaysMin(f, ""), s = this.weekdaysShort(f, ""), h = this.weekdays(f, ""), e.push(o), i.push(s), r.push(h), t.push(o), t.push(s), t.push(h);
        for (e.sort(u), i.sort(u), r.sort(u), t.sort(u), n = 0; n < 7; n++) i[n] = bt(i[n]), r[n] = bt(r[n]), t[n] = bt(t[n]);
        this._weekdaysRegex = new RegExp("^(" + t.join("|") + ")", "i");
        this._weekdaysShortRegex = this._weekdaysRegex;
        this._weekdaysMinRegex = this._weekdaysRegex;
        this._weekdaysStrictRegex = new RegExp("^(" + r.join("|") + ")", "i");
        this._weekdaysShortStrictRegex = new RegExp("^(" + i.join("|") + ")", "i");
        this._weekdaysMinStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")
    }

    function ov(n) {
        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return n == null ? t : this.add(n - t, "d")
    }

    function wu() {
        return this.hours() % 12 || 12
    }

    function sv() {
        return this.hours() || 24
    }

    function yo(n, t) {
        r(n, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), t)
        })
    }

    function po(n, t) {
        return t._meridiemParse
    }

    function hv(n) {
        return (n + "").toLowerCase().charAt(0) === "p"
    }

    function cv(n, t, i) {
        return n > 11 ? i ? "pm" : "PM" : i ? "am" : "AM"
    }

    function lv(n, t) {
        t[kt] = e(("0." + n) * 1e3)
    }

    function av() {
        return this._isUTC ? "UTC" : ""
    }

    function vv() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function yv(n) {
        return c(n * 1e3)
    }

    function pv() {
        return c.apply(null, arguments).parseZone()
    }

    function wv(n, t, i) {
        var r = this._calendar[n];
        return ct(r) ? r.call(t, i) : r
    }

    function bv(n) {
        var t = this._longDateFormat[n],
            i = this._longDateFormat[n.toUpperCase()];
        return t || !i ? t : (this._longDateFormat[n] = i.replace(/MMMM|MM|DD|dddd/g, function(n) {
            return n.slice(1)
        }), this._longDateFormat[n])
    }

    function kv() {
        return this._invalidDate
    }

    function dv(n) {
        return this._ordinal.replace("%d", n)
    }

    function es(n) {
        return n
    }

    function gv(n, t, i, r) {
        var u = this._relativeTime[i];
        return ct(u) ? u(n, t, i, r) : u.replace(/%d/i, n)
    }

    function ny(n, t) {
        var i = this._relativeTime[n > 0 ? "future" : "past"];
        return ct(i) ? i(t) : i.replace(/%s/i, t)
    }

    function hr(n, t, i, r) {
        var u = lt(),
            f = it().set(r, t);
        return u[i](f, n)
    }

    function ss(n, t, i) {
        if (typeof n == "number" && (t = n, n = undefined), n = n || "", t != null) return hr(n, t, i, "month");
        for (var u = [], r = 0; r < 12; r++) u[r] = hr(n, r, i, "month");
        return u
    }

    function ku(n, t, i, r) {
        var o, f, u, e;
        if (typeof n == "boolean" ? (typeof t == "number" && (i = t, t = undefined), t = t || "") : (t = n, i = t, n = !1, typeof t == "number" && (i = t, t = undefined), t = t || ""), o = lt(), f = n ? o._week.dow : 0, i != null) return hr(t, (i + f) % 7, r, "day");
        for (e = [], u = 0; u < 7; u++) e[u] = hr(t, (u + f) % 7, r, "day");
        return e
    }

    function ty(n, t) {
        return ss(n, t, "months")
    }

    function iy(n, t) {
        return ss(n, t, "monthsShort")
    }

    function ry(n, t, i) {
        return ku(n, t, i, "weekdays")
    }

    function uy(n, t, i) {
        return ku(n, t, i, "weekdaysShort")
    }

    function fy(n, t, i) {
        return ku(n, t, i, "weekdaysMin")
    }

    function ey() {
        var n = this._data;
        return this._milliseconds = ut(this._milliseconds), this._days = ut(this._days), this._months = ut(this._months), n.milliseconds = ut(n.milliseconds), n.seconds = ut(n.seconds), n.minutes = ut(n.minutes), n.hours = ut(n.hours), n.months = ut(n.months), n.years = ut(n.years), this
    }

    function hs(n, t, i, r) {
        var u = at(t, i);
        return n._milliseconds += r * u._milliseconds, n._days += r * u._days, n._months += r * u._months, n._bubble()
    }

    function oy(n, t) {
        return hs(this, n, t, 1)
    }

    function sy(n, t) {
        return hs(this, n, t, -1)
    }

    function cs(n) {
        return n < 0 ? Math.floor(n) : Math.ceil(n)
    }

    function hy() {
        var r = this._milliseconds,
            n = this._days,
            t = this._months,
            i = this._data,
            u, f, e, s, o;
        return r >= 0 && n >= 0 && t >= 0 || r <= 0 && n <= 0 && t <= 0 || (r += cs(du(t) + n) * 864e5, n = 0, t = 0), i.milliseconds = r % 1e3, u = b(r / 1e3), i.seconds = u % 60, f = b(u / 60), i.minutes = f % 60, e = b(f / 60), i.hours = e % 24, n += b(e / 24), o = b(ls(n)), t += o, n -= cs(du(o)), s = b(t / 12), t %= 12, i.days = n, i.months = t, i.years = s, this
    }

    function ls(n) {
        return n * 4800 / 146097
    }

    function du(n) {
        return n * 146097 / 4800
    }

    function cy(n) {
        var t, r, i = this._milliseconds;
        if (n = g(n), n === "month" || n === "year") return t = this._days + i / 864e5, r = this._months + ls(t), n === "month" ? r : r / 12;
        t = this._days + Math.round(du(this._months));
        switch (n) {
            case "week":
                return t / 7 + i / 6048e5;
            case "day":
                return t + i / 864e5;
            case "hour":
                return t * 24 + i / 36e5;
            case "minute":
                return t * 1440 + i / 6e4;
            case "second":
                return t * 86400 + i / 1e3;
            case "millisecond":
                return Math.floor(t * 864e5) + i;
            default:
                throw new Error("Unknown unit " + n);
        }
    }

    function ly() {
        return this._milliseconds + this._days * 864e5 + this._months % 12 * 2592e6 + e(this._months / 12) * 31536e6
    }

    function yt(n) {
        return function() {
            return this.as(n)
        }
    }

    function gy(n) {
        return n = g(n), this[n + "s"]()
    }

    function ni(n) {
        return function() {
            return this._data[n]
        }
    }

    function op() {
        return b(this.days() / 7)
    }

    function sp(n, t, i, r, u) {
        return u.relativeTime(t || 1, !!i, n, r)
    }

    function hp(n, t, i) {
        var r = at(n).abs(),
            h = ti(r.as("s")),
            f = ti(r.as("m")),
            e = ti(r.as("h")),
            o = ti(r.as("d")),
            s = ti(r.as("M")),
            c = ti(r.as("y")),
            u = h < st.s && ["s", h] || f <= 1 && ["m"] || f < st.m && ["mm", f] || e <= 1 && ["h"] || e < st.h && ["hh", e] || o <= 1 && ["d"] || o < st.d && ["dd", o] || s <= 1 && ["M"] || s < st.M && ["MM", s] || c <= 1 && ["y"] || ["yy", c];
        return u[2] = t, u[3] = +n > 0, u[4] = i, sp.apply(null, u)
    }

    function cp(n, t) {
        return st[n] === undefined ? !1 : t === undefined ? st[n] : (st[n] = t, !0)
    }

    function lp(n) {
        var t = this.localeData(),
            i = hp(this, !n, t);
        return n && (i = t.pastFuture(+this, i)), t.postformat(i)
    }

    function lr() {
        var t = cr(this._milliseconds) / 1e3,
            a = cr(this._days),
            i = cr(this._months),
            n, e, o;
        n = b(t / 60);
        e = b(n / 60);
        t %= 60;
        n %= 60;
        o = b(i / 12);
        i %= 12;
        var s = o,
            h = i,
            c = a,
            r = e,
            u = n,
            f = t,
            l = this.asSeconds();
        return l ? (l < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (h ? h + "M" : "") + (c ? c + "D" : "") + (r || u || f ? "T" : "") + (r ? r + "H" : "") + (u ? u + "M" : "") + (f ? f + "S" : "") : "P0D"
    }
    var gu, tf, yi, pi, yr, ef, l, wi, ri, rr, ru, df, gf, ie, re, eu, ce, le, ve, pe, be, ke, io, ro, vu, oo, yu, so, ho, co, lo, ao, vo, wo, bo, ko, go, vt, ns, n, bu, ts, is, rs, us, fs, os, u, ut, ti, st, cr, o;
    tf = Array.prototype.some ? Array.prototype.some : function(n) {
        for (var i = Object(this), r = i.length >>> 0, t = 0; t < r; t++)
            if (t in i && n.call(this, i[t], t, i)) return !0;
        return !1
    };
    yi = t.momentProperties = [];
    pi = !1;
    yr = {};
    t.suppressDeprecationWarnings = !1;
    t.deprecationHandler = null;
    ef = Object.keys ? Object.keys : function(n) {
        var t, i = [];
        for (t in n) w(n, t) && i.push(t);
        return i
    };
    l = {};
    ri = {};
    var vf = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        ki = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        kr = {},
        fi = {};
    var pf = /\d/,
        k = /\d\d/,
        wf = /\d{3}/,
        gr = /\d{4}/,
        di = /[+-]?\d{6}/,
        h = /\d\d?/,
        bf = /\d\d\d\d?/,
        kf = /\d\d\d\d\d\d?/,
        gi = /\d{1,3}/,
        nu = /\d{1,4}/,
        nr = /[+-]?\d{1,6}/,
        tr = /[+-]?\d+/,
        gs = /Z|[+-]\d\d:?\d\d/gi,
        ir = /Z|[+-]\d\d(?::?\d\d)?/gi,
        si = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        tu = {};
    rr = {};
    var nt = 0,
        et = 1,
        rt = 2,
        v = 3,
        tt = 4,
        ot = 5,
        kt = 6,
        rh = 7,
        uh = 8,
        a;
    a = Array.prototype.indexOf ? Array.prototype.indexOf : function(n) {
        for (var t = 0; t < this.length; ++t)
            if (this[t] === n) return t;
        return -1
    };
    r("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    });
    r("MMM", 0, 0, function(n) {
        return this.localeData().monthsShort(this, n)
    });
    r("MMMM", 0, 0, function(n) {
        return this.localeData().months(this, n)
    });
    y("month", "M");
    i("M", h);
    i("MM", h, k);
    i("MMM", function(n, t) {
        return t.monthsShortRegex(n)
    });
    i("MMMM", function(n, t) {
        return t.monthsRegex(n)
    });
    s(["M", "MM"], function(n, t) {
        t[et] = e(n) - 1
    });
    s(["MMM", "MMMM"], function(n, t, i, r) {
        var u = i._locale.monthsParse(n, r, i._strict);
        u != null ? t[et] = u : f(i).invalidMonth = n
    });
    ru = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/;
    df = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
    gf = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");
    ie = si;
    re = si;
    var ah = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        vh = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
        yh = /Z|[+-]\d\d(?::?\d\d)?/,
        ur = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
            ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
            ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
            ["YYYY-DDD", /\d{4}-\d{3}/],
            ["YYYY-MM", /\d{4}-\d\d/, !1],
            ["YYYYYYMMDD", /[+-]\d{10}/],
            ["YYYYMMDD", /\d{8}/],
            ["GGGG[W]WWE", /\d{4}W\d{3}/],
            ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
            ["YYYYDDD", /\d{7}/]
        ],
        fu = [
            ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
            ["HH:mm:ss", /\d\d:\d\d:\d\d/],
            ["HH:mm", /\d\d:\d\d/],
            ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
            ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
            ["HHmmss", /\d\d\d\d\d\d/],
            ["HHmm", /\d\d\d\d/],
            ["HH", /\d\d/]
        ],
        ph = /^\/?Date\((\-?\d+)/i;
    for (t.createFromInputFallback = d("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(n) {
            n._d = new Date(n._i + (n._useUTC ? " UTC" : ""))
        }), r("Y", 0, 0, function() {
            var n = this.year();
            return n <= 9999 ? "" + n : "+" + n
        }), r(0, ["YY", 2], 0, function() {
            return this.year() % 100
        }), r(0, ["YYYY", 4], 0, "year"), r(0, ["YYYYY", 5], 0, "year"), r(0, ["YYYYYY", 6, !0], 0, "year"), y("year", "y"), i("Y", tr), i("YY", h, k), i("YYYY", nu, gr), i("YYYYY", nr, di), i("YYYYYY", nr, di), s(["YYYYY", "YYYYYY"], nt), s("YYYY", function(n, i) {
            i[nt] = n.length === 2 ? t.parseTwoDigitYear(n) : e(n)
        }), s("YY", function(n, i) {
            i[nt] = t.parseTwoDigitYear(n)
        }), s("Y", function(n, t) {
            t[nt] = parseInt(n, 10)
        }), t.parseTwoDigitYear = function(n) {
            return e(n) + (e(n) > 68 ? 1900 : 2e3)
        }, eu = ui("FullYear", !0), t.ISO_8601 = function() {}, ce = d("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var n = c.apply(null, arguments);
            return this.isValid() && n.isValid() ? n < this ? this : n : vi()
        }), le = d("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var n = c.apply(null, arguments);
            return this.isValid() && n.isValid() ? n > this ? this : n : vi()
        }), ve = function() {
            return Date.now ? Date.now() : +new Date
        }, ye("Z", ":"), ye("ZZ", ""), i("Z", ir), i("ZZ", ir), s(["Z", "ZZ"], function(n, t, i) {
            i._useUTC = !0;
            i._tzm = cu(ir, n)
        }), pe = /([\+\-]|\d\d)/gi, t.updateOffset = function() {}, be = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/, ke = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/, at.fn = or.prototype, io = no(1, "add"), ro = no(-1, "subtract"), t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]", vu = d("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(n) {
            return n === undefined ? this.localeData() : this.locale(n)
        }), r(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }), r(0, ["GG", 2], 0, function() {
            return this.isoWeekYear() % 100
        }), sr("gggg", "weekYear"), sr("ggggg", "weekYear"), sr("GGGG", "isoWeekYear"), sr("GGGGG", "isoWeekYear"), y("weekYear", "gg"), y("isoWeekYear", "GG"), i("G", tr), i("g", tr), i("GG", h, k), i("gg", h, k), i("GGGG", nu, gr), i("gggg", nu, gr), i("GGGGG", nr, di), i("ggggg", nr, di), hi(["gggg", "ggggg", "GGGG", "GGGGG"], function(n, t, i, r) {
            t[r.substr(0, 2)] = e(n)
        }), hi(["gg", "GG"], function(n, i, r, u) {
            i[u] = t.parseTwoDigitYear(n)
        }), r("Q", 0, "Qo", "quarter"), y("quarter", "Q"), i("Q", pf), s("Q", function(n, t) {
            t[et] = (e(n) - 1) * 3
        }), r("w", ["ww", 2], "wo", "week"), r("W", ["WW", 2], "Wo", "isoWeek"), y("week", "w"), y("isoWeek", "W"), i("w", h), i("ww", h, k), i("W", h), i("WW", h, k), hi(["w", "ww", "W", "WW"], function(n, t, i, r) {
            t[r.substr(0, 1)] = e(n)
        }), oo = {
            dow: 0,
            doy: 6
        }, r("D", ["DD", 2], "Do", "date"), y("date", "D"), i("D", h), i("DD", h, k), i("Do", function(n, t) {
            return n ? t._ordinalParse : t._ordinalParseLenient
        }), s(["D", "DD"], rt), s("Do", function(n, t) {
            t[rt] = e(n.match(h)[0], 10)
        }), yu = ui("Date", !0), r("d", 0, "do", "day"), r("dd", 0, 0, function(n) {
            return this.localeData().weekdaysMin(this, n)
        }), r("ddd", 0, 0, function(n) {
            return this.localeData().weekdaysShort(this, n)
        }), r("dddd", 0, 0, function(n) {
            return this.localeData().weekdays(this, n)
        }), r("e", 0, 0, "weekday"), r("E", 0, 0, "isoWeekday"), y("day", "d"), y("weekday", "e"), y("isoWeekday", "E"), i("d", h), i("e", h), i("E", h), i("dd", function(n, t) {
            return t.weekdaysMinRegex(n)
        }), i("ddd", function(n, t) {
            return t.weekdaysShortRegex(n)
        }), i("dddd", function(n, t) {
            return t.weekdaysRegex(n)
        }), hi(["dd", "ddd", "dddd"], function(n, t, i, r) {
            var u = i._locale.weekdaysParse(n, r, i._strict);
            u != null ? t.d = u : f(i).invalidWeekday = n
        }), hi(["d", "e", "E"], function(n, t, i, r) {
            t[r] = e(n)
        }), so = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), ho = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), co = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), lo = si, ao = si, vo = si, r("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), y("dayOfYear", "DDD"), i("DDD", gi), i("DDDD", wf), s(["DDD", "DDDD"], function(n, t, i) {
            i._dayOfYear = e(n)
        }), r("H", ["HH", 2], 0, "hour"), r("h", ["hh", 2], 0, wu), r("k", ["kk", 2], 0, sv), r("hmm", 0, 0, function() {
            return "" + wu.apply(this) + ft(this.minutes(), 2)
        }), r("hmmss", 0, 0, function() {
            return "" + wu.apply(this) + ft(this.minutes(), 2) + ft(this.seconds(), 2)
        }), r("Hmm", 0, 0, function() {
            return "" + this.hours() + ft(this.minutes(), 2)
        }), r("Hmmss", 0, 0, function() {
            return "" + this.hours() + ft(this.minutes(), 2) + ft(this.seconds(), 2)
        }), yo("a", !0), yo("A", !1), y("hour", "h"), i("a", po), i("A", po), i("H", h), i("h", h), i("HH", h, k), i("hh", h, k), i("hmm", bf), i("hmmss", kf), i("Hmm", bf), i("Hmmss", kf), s(["H", "HH"], v), s(["a", "A"], function(n, t, i) {
            i._isPm = i._locale.isPM(n);
            i._meridiem = n
        }), s(["h", "hh"], function(n, t, i) {
            t[v] = e(n);
            f(i).bigHour = !0
        }), s("hmm", function(n, t, i) {
            var r = n.length - 2;
            t[v] = e(n.substr(0, r));
            t[tt] = e(n.substr(r));
            f(i).bigHour = !0
        }), s("hmmss", function(n, t, i) {
            var r = n.length - 4,
                u = n.length - 2;
            t[v] = e(n.substr(0, r));
            t[tt] = e(n.substr(r, 2));
            t[ot] = e(n.substr(u));
            f(i).bigHour = !0
        }), s("Hmm", function(n, t) {
            var i = n.length - 2;
            t[v] = e(n.substr(0, i));
            t[tt] = e(n.substr(i))
        }), s("Hmmss", function(n, t) {
            var i = n.length - 4,
                r = n.length - 2;
            t[v] = e(n.substr(0, i));
            t[tt] = e(n.substr(i, 2));
            t[ot] = e(n.substr(r))
        }), wo = /[ap]\.?m?\.?/i, bo = ui("Hours", !0), r("m", ["mm", 2], 0, "minute"), y("minute", "m"), i("m", h), i("mm", h, k), s(["m", "mm"], tt), ko = ui("Minutes", !1), r("s", ["ss", 2], 0, "second"), y("second", "s"), i("s", h), i("ss", h, k), s(["s", "ss"], ot), go = ui("Seconds", !1), r("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }), r(0, ["SS", 2], 0, function() {
            return ~~(this.millisecond() / 10)
        }), r(0, ["SSS", 3], 0, "millisecond"), r(0, ["SSSS", 4], 0, function() {
            return this.millisecond() * 10
        }), r(0, ["SSSSS", 5], 0, function() {
            return this.millisecond() * 100
        }), r(0, ["SSSSSS", 6], 0, function() {
            return this.millisecond() * 1e3
        }), r(0, ["SSSSSSS", 7], 0, function() {
            return this.millisecond() * 1e4
        }), r(0, ["SSSSSSSS", 8], 0, function() {
            return this.millisecond() * 1e5
        }), r(0, ["SSSSSSSSS", 9], 0, function() {
            return this.millisecond() * 1e6
        }), y("millisecond", "ms"), i("S", gi, pf), i("SS", gi, k), i("SSS", gi, wf), vt = "SSSS"; vt.length <= 9; vt += "S") i(vt, /\d+/);
    for (vt = "S"; vt.length <= 9; vt += "S") s(vt, lv);
    ns = ui("Milliseconds", !1);
    r("z", 0, 0, "zoneAbbr");
    r("zz", 0, 0, "zoneName");
    n = oi.prototype;
    n.add = io;
    n.calendar = kc;
    n.clone = dc;
    n.diff = fl;
    n.endOf = pl;
    n.format = hl;
    n.from = cl;
    n.fromNow = ll;
    n.to = al;
    n.toNow = vl;
    n.get = af;
    n.invalidAt = ra;
    n.isAfter = gc;
    n.isBefore = nl;
    n.isBetween = tl;
    n.isSame = il;
    n.isSameOrAfter = rl;
    n.isSameOrBefore = ul;
    n.isValid = ta;
    n.lang = vu;
    n.locale = uo;
    n.localeData = fo;
    n.max = le;
    n.min = ce;
    n.parsingFlags = ia;
    n.set = af;
    n.startOf = yl;
    n.subtract = ro;
    n.toArray = dl;
    n.toObject = gl;
    n.toDate = kl;
    n.toISOString = sl;
    n.toJSON = na;
    n.toString = ol;
    n.unix = bl;
    n.valueOf = wl;
    n.creationData = ua;
    n.year = eu;
    n.isLeapYear = kh;
    n.weekYear = fa;
    n.isoWeekYear = ea;
    n.quarter = n.quarters = ca;
    n.month = te;
    n.daysInMonth = hh;
    n.week = n.weeks = ya;
    n.isoWeek = n.isoWeeks = pa;
    n.weeksInYear = sa;
    n.isoWeeksInYear = oa;
    n.date = yu;
    n.day = n.days = tv;
    n.weekday = iv;
    n.isoWeekday = rv;
    n.dayOfYear = ov;
    n.hour = n.hours = bo;
    n.minute = n.minutes = ko;
    n.second = n.seconds = go;
    n.millisecond = n.milliseconds = ns;
    n.utcOffset = oc;
    n.utc = hc;
    n.local = cc;
    n.parseZone = lc;
    n.hasAlignedHourOffset = ac;
    n.isDST = vc;
    n.isDSTShifted = yc;
    n.isLocal = pc;
    n.isUtcOffset = wc;
    n.isUtc = we;
    n.isUTC = we;
    n.zoneAbbr = av;
    n.zoneName = vv;
    n.dates = d("dates accessor is deprecated. Use date instead.", yu);
    n.months = d("months accessor is deprecated. Use month instead", te);
    n.years = d("years accessor is deprecated. Use year instead", eu);
    n.zone = d("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", sc);
    bu = n;
    ts = {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
    };
    is = {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
    };
    rs = "Invalid date";
    us = "%d";
    fs = /\d{1,2}/;
    os = {
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
    };
    u = br.prototype;
    u._calendar = ts;
    u.calendar = wv;
    u._longDateFormat = is;
    u.longDateFormat = bv;
    u._invalidDate = rs;
    u.invalidDate = kv;
    u._ordinal = us;
    u.ordinal = dv;
    u._ordinalParse = fs;
    u.preparse = es;
    u.postformat = es;
    u._relativeTime = os;
    u.relativeTime = gv;
    u.pastFuture = ny;
    u.set = ys;
    u.months = fh;
    u._months = df;
    u.monthsShort = eh;
    u._monthsShort = gf;
    u.monthsParse = sh;
    u._monthsRegex = re;
    u.monthsRegex = lh;
    u._monthsShortRegex = ie;
    u.monthsShortRegex = ch;
    u.week = la;
    u._week = oo;
    u.firstDayOfYear = va;
    u.firstDayOfWeek = aa;
    u.weekdays = ba;
    u._weekdays = so;
    u.weekdaysMin = da;
    u._weekdaysMin = co;
    u.weekdaysShort = ka;
    u._weekdaysShort = ho;
    u.weekdaysParse = nv;
    u._weekdaysRegex = lo;
    u.weekdaysRegex = uv;
    u._weekdaysShortRegex = ao;
    u.weekdaysShortRegex = fv;
    u._weekdaysMinRegex = vo;
    u.weekdaysMinRegex = ev;
    u.isPM = hv;
    u._meridiemParse = wo;
    u.meridiem = cv;
    ii("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(n) {
            var t = n % 10,
                i = e(n % 100 / 10) === 1 ? "th" : t === 1 ? "st" : t === 2 ? "nd" : t === 3 ? "rd" : "th";
            return n + i
        }
    });
    t.lang = d("moment.lang is deprecated. Use moment.locale instead.", ii);
    t.langData = d("moment.langData is deprecated. Use moment.localeData instead.", lt);
    ut = Math.abs;
    var ay = yt("ms"),
        vy = yt("s"),
        yy = yt("m"),
        py = yt("h"),
        wy = yt("d"),
        by = yt("w"),
        ky = yt("M"),
        dy = yt("y");
    var np = ni("milliseconds"),
        tp = ni("seconds"),
        ip = ni("minutes"),
        rp = ni("hours"),
        up = ni("days"),
        fp = ni("months"),
        ep = ni("years");
    return ti = Math.round, st = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    }, cr = Math.abs, o = or.prototype, o.abs = ey, o.add = oy, o.subtract = sy, o.as = cy, o.asMilliseconds = ay, o.asSeconds = vy, o.asMinutes = yy, o.asHours = py, o.asDays = wy, o.asWeeks = by, o.asMonths = ky, o.asYears = dy, o.valueOf = ly, o._bubble = hy, o.get = gy, o.milliseconds = np, o.seconds = tp, o.minutes = ip, o.hours = rp, o.days = up, o.weeks = op, o.months = fp, o.years = ep, o.humanize = lp, o.toISOString = lr, o.toString = lr, o.toJSON = lr, o.locale = uo, o.localeData = fo, o.toIsoString = d("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", lr), o.lang = vu, r("X", 0, 0, "unix"), r("x", 0, 0, "valueOf"), i("x", tr), i("X", /[+-]?\d+(\.\d{1,3})?/), s("X", function(n, t, i) {
        i._d = new Date(parseFloat(n, 10) * 1e3)
    }), s("x", function(n, t, i) {
        i._d = new Date(e(n))
    }), t.version = "2.13.0", as(c), t.fn = bu, t.min = fc, t.max = ec, t.now = ve, t.utc = it, t.unix = yv, t.months = ty, t.isDate = ai, t.locale = ii, t.invalid = vi, t.duration = at, t.isMoment = ht, t.weekdays = ry, t.parseZone = pv, t.localeData = lt, t.isDuration = hu, t.monthsShort = iy, t.weekdaysMin = fy, t.defineLocale = hf, t.updateLocale = ws, t.locales = bs, t.weekdaysShort = uy, t.normalizeUnits = g, t.relativeTimeThreshold = cp, t.prototype = bu, t
}),
function(n) {
    "use strict";
    if (typeof define == "function" && define.amd) define(["jquery", "moment"], n);
    else if (typeof exports == "object") n(require("jquery"), require("moment"));
    else {
        if (typeof jQuery == "undefined") throw "bootstrap-datetimepicker requires jQuery to be loaded first";
        if (typeof moment == "undefined") throw "bootstrap-datetimepicker requires Moment.js to be loaded first";
        n(jQuery, moment)
    }
}(function(n, t) {
    "use strict";
    if (!t) throw new Error("bootstrap-datetimepicker requires Moment.js to be loaded first");
    var i = function(i, r) {
        var u = {},
            e, o, k = !0,
            s, l = !1,
            f = !1,
            d, nt = 0,
            y, g, b, ot = [{
                clsName: "days",
                navFnc: "M",
                navStep: 1
            }, {
                clsName: "months",
                navFnc: "y",
                navStep: 1
            }, {
                clsName: "years",
                navFnc: "y",
                navStep: 10
            }, {
                clsName: "decades",
                navFnc: "y",
                navStep: 100
            }],
            vt = ["days", "months", "years", "decades"],
            wt = ["top", "bottom", "auto"],
            bt = ["left", "right", "auto"],
            kt = ["default", "top", "bottom"],
            dt = {
                up: 38,
                38: "up",
                down: 40,
                40: "down",
                left: 37,
                37: "left",
                right: 39,
                39: "right",
                tab: 9,
                9: "tab",
                escape: 27,
                27: "escape",
                enter: 13,
                13: "enter",
                pageUp: 33,
                33: "pageUp",
                pageDown: 34,
                34: "pageDown",
                shift: 16,
                16: "shift",
                control: 17,
                17: "control",
                space: 32,
                32: "space",
                t: 84,
                84: "t",
                "delete": 46,
                46: "delete"
            },
            st = {},
            tt = function(n) {
                var u = !1,
                    i, f, e, o, s;
                return t.tz !== undefined && r.timeZone !== undefined && r.timeZone !== null && r.timeZone !== "" && (u = !0), n === undefined || n === null ? i = u ? t().tz(r.timeZone).startOf("d") : t().startOf("d") : u ? (f = t().tz(r.timeZone).utcOffset(), e = t(n, g, r.useStrict).utcOffset(), e !== f ? (o = t().tz(r.timeZone).format("Z"), s = t(n, g, r.useStrict).format("YYYY-MM-DD[T]HH:mm:ss") + o, i = t(s, g, r.useStrict).tz(r.timeZone)) : i = t(n, g, r.useStrict).tz(r.timeZone)) : i = t(n, g, r.useStrict), i
            },
            p = function(n) {
                if (typeof n != "string" || n.length > 1) throw new TypeError("isEnabled expects a single character string parameter");
                switch (n) {
                    case "y":
                        return y.indexOf("Y") !== -1;
                    case "M":
                        return y.indexOf("M") !== -1;
                    case "d":
                        return y.toLowerCase().indexOf("d") !== -1;
                    case "h":
                    case "H":
                        return y.toLowerCase().indexOf("h") !== -1;
                    case "m":
                        return y.indexOf("m") !== -1;
                    case "s":
                        return y.indexOf("s") !== -1;
                    default:
                        return !1
                }
            },
            ht = function() {
                return p("h") || p("m") || p("s")
            },
            ct = function() {
                return p("y") || p("M") || p("d")
            },
            fi = function() {
                var t = n("<thead>").append(n("<tr>").append(n("<th>").addClass("prev").attr("data-action", "previous").append(n("<span>").addClass(r.icons.previous))).append(n("<th>").addClass("picker-switch").attr("data-action", "pickerSwitch").attr("colspan", r.calendarWeeks ? "6" : "5")).append(n("<th>").addClass("next").attr("data-action", "next").append(n("<span>").addClass(r.icons.next)))),
                    i = n("<tbody>").append(n("<tr>").append(n("<td>").attr("colspan", r.calendarWeeks ? "8" : "7")));
                return [n("<div>").addClass("datepicker-days").append(n("<table>").addClass("table-condensed").append(t).append(n("<tbody>"))), n("<div>").addClass("datepicker-months").append(n("<table>").addClass("table-condensed").append(t.clone()).append(i.clone())), n("<div>").addClass("datepicker-years").append(n("<table>").addClass("table-condensed").append(t.clone()).append(i.clone())), n("<div>").addClass("datepicker-decades").append(n("<table>").addClass("table-condensed").append(t.clone()).append(i.clone()))]
            },
            ei = function() {
                var t = n("<tr>"),
                    i = n("<tr>"),
                    u = n("<tr>");
                return p("h") && (t.append(n("<td>").append(n("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: r.tooltips.incrementHour
                }).addClass("btn").attr("data-action", "incrementHours").append(n("<span>").addClass(r.icons.up)))), i.append(n("<td>").append(n("<span>").addClass("timepicker-hour").attr({
                    "data-time-component": "hours",
                    title: r.tooltips.pickHour
                }).attr("data-action", "showHours"))), u.append(n("<td>").append(n("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: r.tooltips.decrementHour
                }).addClass("btn").attr("data-action", "decrementHours").append(n("<span>").addClass(r.icons.down))))), p("m") && (p("h") && (t.append(n("<td>").addClass("separator")), i.append(n("<td>").addClass("separator").html(":")), u.append(n("<td>").addClass("separator"))), t.append(n("<td>").append(n("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: r.tooltips.incrementMinute
                }).addClass("btn").attr("data-action", "incrementMinutes").append(n("<span>").addClass(r.icons.up)))), i.append(n("<td>").append(n("<span>").addClass("timepicker-minute").attr({
                    "data-time-component": "minutes",
                    title: r.tooltips.pickMinute
                }).attr("data-action", "showMinutes"))), u.append(n("<td>").append(n("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: r.tooltips.decrementMinute
                }).addClass("btn").attr("data-action", "decrementMinutes").append(n("<span>").addClass(r.icons.down))))), p("s") && (p("m") && (t.append(n("<td>").addClass("separator")), i.append(n("<td>").addClass("separator").html(":")), u.append(n("<td>").addClass("separator"))), t.append(n("<td>").append(n("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: r.tooltips.incrementSecond
                }).addClass("btn").attr("data-action", "incrementSeconds").append(n("<span>").addClass(r.icons.up)))), i.append(n("<td>").append(n("<span>").addClass("timepicker-second").attr({
                    "data-time-component": "seconds",
                    title: r.tooltips.pickSecond
                }).attr("data-action", "showSeconds"))), u.append(n("<td>").append(n("<a>").attr({
                    href: "#",
                    tabindex: "-1",
                    title: r.tooltips.decrementSecond
                }).addClass("btn").attr("data-action", "decrementSeconds").append(n("<span>").addClass(r.icons.down))))), d || (t.append(n("<td>").addClass("separator")), i.append(n("<td>").append(n("<button>").addClass("btn btn-primary").attr({
                    "data-action": "togglePeriod",
                    tabindex: "-1",
                    title: r.tooltips.togglePeriod
                }))), u.append(n("<td>").addClass("separator"))), n("<div>").addClass("timepicker-picker").append(n("<table>").addClass("table-condensed").append([t, i, u]))
            },
            oi = function() {
                var i = n("<div>").addClass("timepicker-hours").append(n("<table>").addClass("table-condensed")),
                    r = n("<div>").addClass("timepicker-minutes").append(n("<table>").addClass("table-condensed")),
                    u = n("<div>").addClass("timepicker-seconds").append(n("<table>").addClass("table-condensed")),
                    t = [ei()];
                return p("h") && t.push(i), p("m") && t.push(r), p("s") && t.push(u), t
            },
            si = function() {
                var t = [];
                return r.showTodayButton && t.push(n("<td>").append(n("<a>").attr({
                    "data-action": "today",
                    title: r.tooltips.today
                }).append(n("<span>").addClass(r.icons.today)))), !r.sideBySide && ct() && ht() && t.push(n("<td>").append(n("<a>").attr({
                    "data-action": "togglePicker",
                    title: r.tooltips.selectTime
                }).append(n("<span>").addClass(r.icons.time)))), r.showClear && t.push(n("<td>").append(n("<a>").attr({
                    "data-action": "clear",
                    title: r.tooltips.clear
                }).append(n("<span>").addClass(r.icons.clear)))), r.showClose && t.push(n("<td>").append(n("<a>").attr({
                    "data-action": "close",
                    title: r.tooltips.close
                }).append(n("<span>").addClass(r.icons.close)))), n("<table>").addClass("table-condensed").append(n("<tbody>").append(n("<tr>").append(t)))
            },
            hi = function() {
                var t = n("<div>").addClass("bootstrap-datetimepicker-widget dropdown-menu"),
                    f = n("<div>").addClass("datepicker").append(fi()),
                    e = n("<div>").addClass("timepicker").append(oi()),
                    i = n("<ul>").addClass("list-unstyled"),
                    u = n("<li>").addClass("picker-switch" + (r.collapse ? " accordion-toggle" : "")).append(si());
                return (r.inline && t.removeClass("dropdown-menu"), d && t.addClass("usetwentyfour"), p("s") && !d && t.addClass("wider"), r.sideBySide && ct() && ht()) ? (t.addClass("timepicker-sbs"), r.toolbarPlacement === "top" && t.append(u), t.append(n("<div>").addClass("row").append(f.addClass("col-md-6")).append(e.addClass("col-md-6"))), r.toolbarPlacement === "bottom" && t.append(u), t) : (r.toolbarPlacement === "top" && i.append(u), ct() && i.append(n("<li>").addClass(r.collapse && ht() ? "collapse in" : "").append(f)), r.toolbarPlacement === "default" && i.append(u), ht() && i.append(n("<li>").addClass(r.collapse && ct() ? "collapse" : "").append(e)), r.toolbarPlacement === "bottom" && i.append(u), t.append(i))
            },
            ci = function() {
                var t, u = {};
                return t = i.is("input") || r.inline ? i.data() : i.find("input").data(), t.dateOptions && t.dateOptions instanceof Object && (u = n.extend(!0, u, t.dateOptions)), n.each(r, function(n) {
                    var i = "date" + n.charAt(0).toUpperCase() + n.slice(1);
                    t[i] !== undefined && (u[n] = t[i])
                }), u
            },
            yt = function() {
                var o = (l || i).position(),
                    s = (l || i).offset(),
                    u = r.widgetPositioning.vertical,
                    e = r.widgetPositioning.horizontal,
                    t;
                if (r.widgetParent) t = r.widgetParent.append(f);
                else if (i.is("input")) t = i.after(f).parent();
                else {
                    if (r.inline) {
                        t = i.append(f);
                        return
                    }
                    t = i;
                    i.children().first().after(f)
                }
                if (u === "auto" && (u = s.top + f.height() * 1.5 >= n(window).height() + n(window).scrollTop() && f.height() + i.outerHeight() < s.top ? "top" : "bottom"), e === "auto" && (e = t.width() < s.left + f.outerWidth() / 2 && s.left + f.outerWidth() > n(window).width() ? "right" : "left"), u === "top" ? f.addClass("top").removeClass("bottom") : f.addClass("bottom").removeClass("top"), e === "right" ? f.addClass("pull-right") : f.removeClass("pull-right"), t.css("position") !== "relative" && (t = t.parents().filter(function() {
                        return n(this).css("position") === "relative"
                    }).first()), t.length === 0) throw new Error("datetimepicker component should be placed within a relative positioned container");
                f.css({
                    top: u === "top" ? "auto" : o.top + i.outerHeight(),
                    bottom: u === "top" ? o.top + i.outerHeight() : "auto",
                    left: e === "left" ? t === i ? 0 : o.left : "auto",
                    right: e === "left" ? "auto" : t.outerWidth() - i.outerWidth() - (t === i ? 0 : o.left)
                })
            },
            rt = function(n) {
                (n.type !== "dp.change" || (!n.date || !n.date.isSame(n.oldDate)) && (n.date || n.oldDate)) && i.trigger(n)
            },
            ut = function(n) {
                n === "y" && (n = "YYYY");
                rt({
                    type: "dp.update",
                    change: n,
                    viewDate: o.clone()
                })
            },
            ft = function(n) {
                f && (n && (b = Math.max(nt, Math.min(3, b + n))), f.find(".datepicker > div").hide().filter(".datepicker-" + ot[b].clsName).show())
            },
            li = function() {
                var t = n("<tr>"),
                    i = o.clone().startOf("w").startOf("d");
                for (r.calendarWeeks === !0 && t.append(n("<th>").addClass("cw").text("#")); i.isBefore(o.clone().endOf("w"));) t.append(n("<th>").addClass("dow").text(i.format("dd"))), i.add(1, "d");
                f.find(".datepicker-days thead").append(t)
            },
            ai = function(n) {
                return r.disabledDates[n.format("YYYY-MM-DD")] === !0
            },
            vi = function(n) {
                return r.enabledDates[n.format("YYYY-MM-DD")] === !0
            },
            yi = function(n) {
                return r.disabledHours[n.format("H")] === !0
            },
            pi = function(n) {
                return r.enabledHours[n.format("H")] === !0
            },
            c = function(t, i) {
                if (!t.isValid() || r.disabledDates && i === "d" && ai(t) || r.enabledDates && i === "d" && !vi(t) || r.minDate && t.isBefore(r.minDate, i) || r.maxDate && t.isAfter(r.maxDate, i) || r.daysOfWeekDisabled && i === "d" && r.daysOfWeekDisabled.indexOf(t.day()) !== -1 || r.disabledHours && (i === "h" || i === "m" || i === "s") && yi(t) || r.enabledHours && (i === "h" || i === "m" || i === "s") && !pi(t)) return !1;
                if (r.disabledTimeIntervals && (i === "h" || i === "m" || i === "s")) {
                    var u = !1;
                    if (n.each(r.disabledTimeIntervals, function() {
                            if (t.isBetween(this[0], this[1])) return u = !0, !1
                        }), u) return !1
                }
                return !0
            },
            wi = function() {
                for (var i = [], t = o.clone().startOf("y").startOf("d"); t.isSame(o, "y");) i.push(n("<span>").attr("data-action", "selectMonth").addClass("month").text(t.format("MMM"))), t.add(1, "M");
                f.find(".datepicker-months td").empty().append(i)
            },
            bi = function() {
                var i = f.find(".datepicker-months"),
                    t = i.find("th"),
                    u = i.find("tbody").find("span");
                t.eq(0).find("span").attr("title", r.tooltips.prevYear);
                t.eq(1).attr("title", r.tooltips.selectYear);
                t.eq(2).find("span").attr("title", r.tooltips.nextYear);
                i.find(".disabled").removeClass("disabled");
                c(o.clone().subtract(1, "y"), "y") || t.eq(0).addClass("disabled");
                t.eq(1).text(o.year());
                c(o.clone().add(1, "y"), "y") || t.eq(2).addClass("disabled");
                u.removeClass("active");
                e.isSame(o, "y") && !k && u.eq(e.month()).addClass("active");
                u.each(function(t) {
                    c(o.clone().month(t), "M") || n(this).addClass("disabled")
                })
            },
            ki = function() {
                var i = f.find(".datepicker-years"),
                    t = i.find("th"),
                    n = o.clone().subtract(5, "y"),
                    u = o.clone().add(6, "y"),
                    s = "";
                for (t.eq(0).find("span").attr("title", r.tooltips.prevDecade), t.eq(1).attr("title", r.tooltips.selectDecade), t.eq(2).find("span").attr("title", r.tooltips.nextDecade), i.find(".disabled").removeClass("disabled"), r.minDate && r.minDate.isAfter(n, "y") && t.eq(0).addClass("disabled"), t.eq(1).text(n.year() + "-" + u.year()), r.maxDate && r.maxDate.isBefore(u, "y") && t.eq(2).addClass("disabled"); !n.isAfter(u, "y");) s += '<span data-action="selectYear" class="year' + (n.isSame(e, "y") && !k ? " active" : "") + (c(n, "y") ? "" : " disabled") + '">' + n.year() + "<\/span>", n.add(1, "y");
                i.find("td").html(s)
            },
            di = function() {
                var u = f.find(".datepicker-decades"),
                    i = u.find("th"),
                    n = t({
                        y: o.year() - o.year() % 100 - 1
                    }),
                    s = n.clone().add(100, "y"),
                    l = n.clone(),
                    h = "";
                for (i.eq(0).find("span").attr("title", r.tooltips.prevCentury), i.eq(2).find("span").attr("title", r.tooltips.nextCentury), u.find(".disabled").removeClass("disabled"), (n.isSame(t({
                        y: 1900
                    })) || r.minDate && r.minDate.isAfter(n, "y")) && i.eq(0).addClass("disabled"), i.eq(1).text(n.year() + "-" + s.year()), (n.isSame(t({
                        y: 2e3
                    })) || r.maxDate && r.maxDate.isBefore(s, "y")) && i.eq(2).addClass("disabled"); !n.isAfter(s, "y");) h += '<span data-action="selectDecade" class="decade' + (n.isSame(e, "y") ? " active" : "") + (c(n, "y") ? "" : " disabled") + '" data-selection="' + (n.year() + 6) + '">' + (n.year() + 1) + " - " + (n.year() + 12) + "<\/span>", n.add(12, "y");
                h += "<span><\/span><span><\/span><span><\/span>";
                u.find("td").html(h);
                i.eq(1).text(l.year() + 1 + "-" + n.year())
            },
            et = function() {
                var h = f.find(".datepicker-days"),
                    u = h.find("th"),
                    t, a = [],
                    s, i, l;
                if (ct()) {
                    for (u.eq(0).find("span").attr("title", r.tooltips.prevMonth), u.eq(1).attr("title", r.tooltips.selectMonth), u.eq(2).find("span").attr("title", r.tooltips.nextMonth), h.find(".disabled").removeClass("disabled"), u.eq(1).text(o.format(r.dayViewHeaderFormat)), c(o.clone().subtract(1, "M"), "M") || u.eq(0).addClass("disabled"), c(o.clone().add(1, "M"), "M") || u.eq(2).addClass("disabled"), t = o.clone().startOf("M").startOf("w").startOf("d"), l = 0; l < 42; l++) t.weekday() === 0 && (s = n("<tr>"), r.calendarWeeks && s.append('<td class="cw">' + t.week() + "<\/td>"), a.push(s)), i = "", t.isBefore(o, "M") && (i += " old"), t.isAfter(o, "M") && (i += " new"), t.isSame(e, "d") && !k && (i += " active"), c(t, "d") || (i += " disabled"), t.isSame(tt(), "d") && (i += " today"), (t.day() === 0 || t.day() === 6) && (i += " weekend"), s.append('<td data-action="selectDay" data-day="' + t.format("L") + '" class="day' + i + '">' + t.date() + "<\/td>"), t.add(1, "d");
                    h.find("tbody").empty().append(a);
                    bi();
                    ki();
                    di()
                }
            },
            gi = function() {
                var u = f.find(".timepicker-hours table"),
                    t = o.clone().startOf("d"),
                    r = [],
                    i = n("<tr>");
                for (o.hour() > 11 && !d && t.hour(12); t.isSame(o, "d") && (d || o.hour() < 12 && t.hour() < 12 || o.hour() > 11);) t.hour() % 4 == 0 && (i = n("<tr>"), r.push(i)), i.append('<td data-action="selectHour" class="hour' + (c(t, "h") ? "" : " disabled") + '">' + t.format(d ? "HH" : "hh") + "<\/td>"), t.add(1, "h");
                u.empty().append(r)
            },
            nr = function() {
                for (var s = f.find(".timepicker-minutes table"), t = o.clone().startOf("h"), u = [], i = n("<tr>"), e = r.stepping === 1 ? 5 : r.stepping; o.isSame(t, "h");) t.minute() % (e * 4) == 0 && (i = n("<tr>"), u.push(i)), i.append('<td data-action="selectMinute" class="minute' + (c(t, "m") ? "" : " disabled") + '">' + t.format("mm") + "<\/td>"), t.add(e, "m");
                s.empty().append(u)
            },
            tr = function() {
                for (var u = f.find(".timepicker-seconds table"), t = o.clone().startOf("m"), r = [], i = n("<tr>"); o.isSame(t, "m");) t.second() % 20 == 0 && (i = n("<tr>"), r.push(i)), i.append('<td data-action="selectSecond" class="second' + (c(t, "s") ? "" : " disabled") + '">' + t.format("ss") + "<\/td>"), t.add(5, "s");
                u.empty().append(r)
            },
            ir = function() {
                var n, i, t = f.find(".timepicker span[data-time-component]");
                d || (n = f.find(".timepicker [data-action=togglePeriod]"), i = e.clone().add(e.hours() >= 12 ? -12 : 12, "h"), n.text(e.format("A")), c(i, "h") ? n.removeClass("disabled") : n.addClass("disabled"));
                t.filter("[data-time-component=hours]").text(e.format(d ? "HH" : "hh"));
                t.filter("[data-time-component=minutes]").text(e.format("mm"));
                t.filter("[data-time-component=seconds]").text(e.format("ss"));
                gi();
                nr();
                tr()
            },
            a = function() {
                f && (et(), ir())
            },
            h = function(n) {
                var t = k ? null : e;
                if (!n) {
                    k = !0;
                    s.val("");
                    i.data("date", "");
                    rt({
                        type: "dp.change",
                        date: !1,
                        oldDate: t
                    });
                    a();
                    return
                }
                n = n.clone().locale(r.locale);
                r.stepping !== 1 && n.minutes(Math.round(n.minutes() / r.stepping) * r.stepping % 60).seconds(0);
                c(n) ? (e = n, o = e.clone(), s.val(e.format(y)), i.data("date", e.format(y)), k = !1, a(), rt({
                    type: "dp.change",
                    date: e.clone(),
                    oldDate: t
                })) : (r.keepInvalid || s.val(k ? "" : e.format(y)), rt({
                    type: "dp.error",
                    date: n
                }))
            },
            v = function() {
                var t = !1;
                return f ? (f.find(".collapse").each(function() {
                    var i = n(this).data("collapse");
                    return i && i.transitioning ? (t = !0, !1) : !0
                }), t) ? u : (l && l.hasClass("btn") && l.toggleClass("active"), f.hide(), n(window).off("resize", yt), f.off("click", "[data-action]"), f.off("mousedown", !1), f.remove(), f = !1, rt({
                    type: "dp.hide",
                    date: e.clone()
                }), s.blur(), u) : u
            },
            gt = function() {
                h(null)
            },
            lt = {
                next: function() {
                    var n = ot[b].navFnc;
                    o.add(ot[b].navStep, n);
                    et();
                    ut(n)
                },
                previous: function() {
                    var n = ot[b].navFnc;
                    o.subtract(ot[b].navStep, n);
                    et();
                    ut(n)
                },
                pickerSwitch: function() {
                    ft(1)
                },
                selectMonth: function(t) {
                    var i = n(t.target).closest("tbody").find("span").index(n(t.target));
                    o.month(i);
                    b === nt ? (h(e.clone().year(o.year()).month(o.month())), r.inline || v()) : (ft(-1), et());
                    ut("M")
                },
                selectYear: function(t) {
                    var i = parseInt(n(t.target).text(), 10) || 0;
                    o.year(i);
                    b === nt ? (h(e.clone().year(o.year())), r.inline || v()) : (ft(-1), et());
                    ut("YYYY")
                },
                selectDecade: function(t) {
                    var i = parseInt(n(t.target).data("selection"), 10) || 0;
                    o.year(i);
                    b === nt ? (h(e.clone().year(o.year())), r.inline || v()) : (ft(-1), et());
                    ut("YYYY")
                },
                selectDay: function(t) {
                    var i = o.clone();
                    n(t.target).is(".old") && i.subtract(1, "M");
                    n(t.target).is(".new") && i.add(1, "M");
                    h(i.date(parseInt(n(t.target).text(), 10)));
                    ht() || r.keepOpen || r.inline || v()
                },
                incrementHours: function() {
                    var n = e.clone().add(1, "h");
                    c(n, "h") && h(n)
                },
                incrementMinutes: function() {
                    var n = e.clone().add(r.stepping, "m");
                    c(n, "m") && h(n)
                },
                incrementSeconds: function() {
                    var n = e.clone().add(1, "s");
                    c(n, "s") && h(n)
                },
                decrementHours: function() {
                    var n = e.clone().subtract(1, "h");
                    c(n, "h") && h(n)
                },
                decrementMinutes: function() {
                    var n = e.clone().subtract(r.stepping, "m");
                    c(n, "m") && h(n)
                },
                decrementSeconds: function() {
                    var n = e.clone().subtract(1, "s");
                    c(n, "s") && h(n)
                },
                togglePeriod: function() {
                    h(e.clone().add(e.hours() >= 12 ? -12 : 12, "h"))
                },
                togglePicker: function(t) {
                    var u = n(t.target),
                        e = u.closest("ul"),
                        i = e.find(".in"),
                        o = e.find(".collapse:not(.in)"),
                        f;
                    if (i && i.length) {
                        if (f = i.data("collapse"), f && f.transitioning) return;
                        i.collapse ? (i.collapse("hide"), o.collapse("show")) : (i.removeClass("in"), o.addClass("in"));
                        u.is("span") ? u.toggleClass(r.icons.time + " " + r.icons.date) : u.find("span").toggleClass(r.icons.time + " " + r.icons.date)
                    }
                },
                showPicker: function() {
                    f.find(".timepicker > div:not(.timepicker-picker)").hide();
                    f.find(".timepicker .timepicker-picker").show()
                },
                showHours: function() {
                    f.find(".timepicker .timepicker-picker").hide();
                    f.find(".timepicker .timepicker-hours").show()
                },
                showMinutes: function() {
                    f.find(".timepicker .timepicker-picker").hide();
                    f.find(".timepicker .timepicker-minutes").show()
                },
                showSeconds: function() {
                    f.find(".timepicker .timepicker-picker").hide();
                    f.find(".timepicker .timepicker-seconds").show()
                },
                selectHour: function(t) {
                    var i = parseInt(n(t.target).text(), 10);
                    d || (e.hours() >= 12 ? i !== 12 && (i += 12) : i === 12 && (i = 0));
                    h(e.clone().hours(i));
                    lt.showPicker.call(u)
                },
                selectMinute: function(t) {
                    h(e.clone().minutes(parseInt(n(t.target).text(), 10)));
                    lt.showPicker.call(u)
                },
                selectSecond: function(t) {
                    h(e.clone().seconds(parseInt(n(t.target).text(), 10)));
                    lt.showPicker.call(u)
                },
                clear: gt,
                today: function() {
                    var n = tt();
                    c(n, "d") && h(n)
                },
                close: v
            },
            rr = function(t) {
                return n(t.currentTarget).is(".disabled") ? !1 : (lt[n(t.currentTarget).data("action")].apply(u, arguments), !1)
            },
            w = function() {
                var t, i = {
                    year: function(n) {
                        return n.month(0).date(1).hours(0).seconds(0).minutes(0)
                    },
                    month: function(n) {
                        return n.date(1).hours(0).seconds(0).minutes(0)
                    },
                    day: function(n) {
                        return n.hours(0).seconds(0).minutes(0)
                    },
                    hour: function(n) {
                        return n.seconds(0).minutes(0)
                    },
                    minute: function(n) {
                        return n.seconds(0)
                    }
                };
                if (s.prop("disabled") || !r.ignoreReadonly && s.prop("readonly") || f) return u;
                s.val() !== undefined && s.val().trim().length !== 0 ? h(it(s.val().trim())) : r.useCurrent && k && (s.is("input") && s.val().trim().length === 0 || r.inline) && (t = tt(), typeof r.useCurrent == "string" && (t = i[r.useCurrent](t)), h(t));
                f = hi();
                li();
                wi();
                f.find(".timepicker-hours").hide();
                f.find(".timepicker-minutes").hide();
                f.find(".timepicker-seconds").hide();
                a();
                ft();
                n(window).on("resize", yt);
                f.on("click", "[data-action]", rr);
                f.on("mousedown", !1);
                return l && l.hasClass("btn") && l.toggleClass("active"), f.show(), yt(), r.focusOnShow && !s.is(":focus") && s.focus(), rt({
                    type: "dp.show"
                }), u
            },
            pt = function() {
                return f ? v() : w()
            },
            it = function(n) {
                return n = r.parseInputDate === undefined ? t.isMoment(n) || n instanceof Date ? t(n) : tt(n) : r.parseInputDate(n), n.locale(r.locale), n
            },
            ni = function(n) {
                var o = null,
                    t, e, c = [],
                    l = {},
                    s = n.which,
                    i, h, a = "p";
                st[s] = a;
                for (t in st) st.hasOwnProperty(t) && st[t] === a && (c.push(t), parseInt(t, 10) !== s && (l[t] = !0));
                for (t in r.keyBinds)
                    if (r.keyBinds.hasOwnProperty(t) && typeof r.keyBinds[t] == "function" && (i = t.split(" "), i.length === c.length && dt[s] === i[i.length - 1])) {
                        for (h = !0, e = i.length - 2; e >= 0; e--)
                            if (!(dt[i[e]] in l)) {
                                h = !1;
                                break
                            }
                        if (h) {
                            o = r.keyBinds[t];
                            break
                        }
                    }
                o && (o.call(u, f), n.stopPropagation(), n.preventDefault())
            },
            ti = function(n) {
                st[n.which] = "r";
                n.stopPropagation();
                n.preventDefault()
            },
            ii = function(t) {
                var i = n(t.target).val().trim(),
                    r = i ? it(i) : null;
                return h(r), t.stopImmediatePropagation(), !1
            },
            ur = function() {
                s.on({
                    change: ii,
                    blur: r.debug ? "" : v,
                    keydown: ni,
                    keyup: ti,
                    focus: r.allowInputToggle ? w : ""
                });
                if (i.is("input")) s.on({
                    focus: w
                });
                else if (l) {
                    l.on("click", pt);
                    l.on("mousedown", !1)
                }
            },
            fr = function() {
                s.off({
                    change: ii,
                    blur: blur,
                    keydown: ni,
                    keyup: ti,
                    focus: r.allowInputToggle ? v : ""
                });
                i.is("input") ? s.off({
                    focus: w
                }) : l && (l.off("click", pt), l.off("mousedown", !1))
            },
            ri = function(t) {
                var i = {};
                return n.each(t, function() {
                    var n = it(this);
                    n.isValid() && (i[n.format("YYYY-MM-DD")] = !0)
                }), Object.keys(i).length ? i : !1
            },
            ui = function(t) {
                var i = {};
                return n.each(t, function() {
                    i[this] = !0
                }), Object.keys(i).length ? i : !1
            },
            at = function() {
                var n = r.format || "L LT";
                y = n.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(n) {
                    var t = e.localeData().longDateFormat(n) || n;
                    return t.replace(/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, function(n) {
                        return e.localeData().longDateFormat(n) || n
                    })
                });
                g = r.extraFormats ? r.extraFormats.slice() : [];
                g.indexOf(n) < 0 && g.indexOf(y) < 0 && g.push(y);
                d = y.toLowerCase().indexOf("a") < 1 && y.replace(/\[.*?\]/g, "").indexOf("h") < 1;
                p("y") && (nt = 2);
                p("M") && (nt = 1);
                p("d") && (nt = 0);
                b = Math.max(nt, b);
                k || h(e)
            };
        if (u.destroy = function() {
                v();
                fr();
                i.removeData("DateTimePicker");
                i.removeData("date")
            }, u.toggle = pt, u.show = w, u.hide = v, u.disable = function() {
                return v(), l && l.hasClass("btn") && l.addClass("disabled"), s.prop("disabled", !0), u
            }, u.enable = function() {
                return l && l.hasClass("btn") && l.removeClass("disabled"), s.prop("disabled", !1), u
            }, u.ignoreReadonly = function(n) {
                if (arguments.length === 0) return r.ignoreReadonly;
                if (typeof n != "boolean") throw new TypeError("ignoreReadonly () expects a boolean parameter");
                return r.ignoreReadonly = n, u
            }, u.options = function(t) {
                if (arguments.length === 0) return n.extend(!0, {}, r);
                if (!(t instanceof Object)) throw new TypeError("options() options parameter should be an object");
                return n.extend(!0, r, t), n.each(r, function(n, t) {
                    if (u[n] !== undefined) u[n](t);
                    else throw new TypeError("option " + n + " is not recognized!");
                }), u
            }, u.date = function(n) {
                if (arguments.length === 0) return k ? null : e.clone();
                if (n !== null && typeof n != "string" && !t.isMoment(n) && !(n instanceof Date)) throw new TypeError("date() parameter must be one of [null, string, moment or Date]");
                return h(n === null ? null : it(n)), u
            }, u.format = function(n) {
                if (arguments.length === 0) return r.format;
                if (typeof n != "string" && (typeof n != "boolean" || n !== !1)) throw new TypeError("format() expects a sting or boolean:false parameter " + n);
                return r.format = n, y && at(), u
            }, u.timeZone = function(n) {
                return arguments.length === 0 ? r.timeZone : (r.timeZone = n, u)
            }, u.dayViewHeaderFormat = function(n) {
                if (arguments.length === 0) return r.dayViewHeaderFormat;
                if (typeof n != "string") throw new TypeError("dayViewHeaderFormat() expects a string parameter");
                return r.dayViewHeaderFormat = n, u
            }, u.extraFormats = function(n) {
                if (arguments.length === 0) return r.extraFormats;
                if (n !== !1 && !(n instanceof Array)) throw new TypeError("extraFormats() expects an array or false parameter");
                return r.extraFormats = n, g && at(), u
            }, u.disabledDates = function(t) {
                if (arguments.length === 0) return r.disabledDates ? n.extend({}, r.disabledDates) : r.disabledDates;
                if (!t) return r.disabledDates = !1, a(), u;
                if (!(t instanceof Array)) throw new TypeError("disabledDates() expects an array parameter");
                return r.disabledDates = ri(t), r.enabledDates = !1, a(), u
            }, u.enabledDates = function(t) {
                if (arguments.length === 0) return r.enabledDates ? n.extend({}, r.enabledDates) : r.enabledDates;
                if (!t) return r.enabledDates = !1, a(), u;
                if (!(t instanceof Array)) throw new TypeError("enabledDates() expects an array parameter");
                return r.enabledDates = ri(t), r.disabledDates = !1, a(), u
            }, u.daysOfWeekDisabled = function(n) {
                if (arguments.length === 0) return r.daysOfWeekDisabled.splice(0);
                if (typeof n == "boolean" && !n) return r.daysOfWeekDisabled = !1, a(), u;
                if (!(n instanceof Array)) throw new TypeError("daysOfWeekDisabled() expects an array parameter");
                if (r.daysOfWeekDisabled = n.reduce(function(n, t) {
                        return (t = parseInt(t, 10), t > 6 || t < 0 || isNaN(t)) ? n : (n.indexOf(t) === -1 && n.push(t), n)
                    }, []).sort(), r.useCurrent && !r.keepInvalid) {
                    for (var t = 0; !c(e, "d");) {
                        if (e.add(1, "d"), t === 7) throw "Tried 7 times to find a valid date";
                        t++
                    }
                    h(e)
                }
                return a(), u
            }, u.maxDate = function(n) {
                if (arguments.length === 0) return r.maxDate ? r.maxDate.clone() : r.maxDate;
                if (typeof n == "boolean" && n === !1) return r.maxDate = !1, a(), u;
                typeof n == "string" && (n === "now" || n === "moment") && (n = tt());
                var t = it(n);
                if (!t.isValid()) throw new TypeError("maxDate() Could not parse date parameter: " + n);
                if (r.minDate && t.isBefore(r.minDate)) throw new TypeError("maxDate() date parameter is before options.minDate: " + t.format(y));
                return r.maxDate = t, r.useCurrent && !r.keepInvalid && e.isAfter(n) && h(r.maxDate), o.isAfter(t) && (o = t.clone().subtract(r.stepping, "m")), a(), u
            }, u.minDate = function(n) {
                if (arguments.length === 0) return r.minDate ? r.minDate.clone() : r.minDate;
                if (typeof n == "boolean" && n === !1) return r.minDate = !1, a(), u;
                typeof n == "string" && (n === "now" || n === "moment") && (n = tt());
                var t = it(n);
                if (!t.isValid()) throw new TypeError("minDate() Could not parse date parameter: " + n);
                if (r.maxDate && t.isAfter(r.maxDate)) throw new TypeError("minDate() date parameter is after options.maxDate: " + t.format(y));
                return r.minDate = t, r.useCurrent && !r.keepInvalid && e.isBefore(n) && h(r.minDate), o.isBefore(t) && (o = t.clone().add(r.stepping, "m")), a(), u
            }, u.defaultDate = function(n) {
                if (arguments.length === 0) return r.defaultDate ? r.defaultDate.clone() : r.defaultDate;
                if (!n) return r.defaultDate = !1, u;
                typeof n == "string" && (n === "now" || n === "moment") && (n = tt());
                var t = it(n);
                if (!t.isValid()) throw new TypeError("defaultDate() Could not parse date parameter: " + n);
                if (!c(t)) throw new TypeError("defaultDate() date passed is invalid according to component setup validations");
                return r.defaultDate = t, (r.defaultDate && r.inline || s.val().trim() === "") && h(r.defaultDate), u
            }, u.locale = function(n) {
                if (arguments.length === 0) return r.locale;
                if (!t.localeData(n)) throw new TypeError("locale() locale " + n + " is not loaded from moment locales!");
                return r.locale = n, e.locale(r.locale), o.locale(r.locale), y && at(), f && (v(), w()), u
            }, u.stepping = function(n) {
                return arguments.length === 0 ? r.stepping : (n = parseInt(n, 10), (isNaN(n) || n < 1) && (n = 1), r.stepping = n, u)
            }, u.useCurrent = function(n) {
                var t = ["year", "month", "day", "hour", "minute"];
                if (arguments.length === 0) return r.useCurrent;
                if (typeof n != "boolean" && typeof n != "string") throw new TypeError("useCurrent() expects a boolean or string parameter");
                if (typeof n == "string" && t.indexOf(n.toLowerCase()) === -1) throw new TypeError("useCurrent() expects a string parameter of " + t.join(", "));
                return r.useCurrent = n, u
            }, u.collapse = function(n) {
                if (arguments.length === 0) return r.collapse;
                if (typeof n != "boolean") throw new TypeError("collapse() expects a boolean parameter");
                return r.collapse === n ? u : (r.collapse = n, f && (v(), w()), u)
            }, u.icons = function(t) {
                if (arguments.length === 0) return n.extend({}, r.icons);
                if (!(t instanceof Object)) throw new TypeError("icons() expects parameter to be an Object");
                return n.extend(r.icons, t), f && (v(), w()), u
            }, u.tooltips = function(t) {
                if (arguments.length === 0) return n.extend({}, r.tooltips);
                if (!(t instanceof Object)) throw new TypeError("tooltips() expects parameter to be an Object");
                return n.extend(r.tooltips, t), f && (v(), w()), u
            }, u.useStrict = function(n) {
                if (arguments.length === 0) return r.useStrict;
                if (typeof n != "boolean") throw new TypeError("useStrict() expects a boolean parameter");
                return r.useStrict = n, u
            }, u.sideBySide = function(n) {
                if (arguments.length === 0) return r.sideBySide;
                if (typeof n != "boolean") throw new TypeError("sideBySide() expects a boolean parameter");
                return r.sideBySide = n, f && (v(), w()), u
            }, u.viewMode = function(n) {
                if (arguments.length === 0) return r.viewMode;
                if (typeof n != "string") throw new TypeError("viewMode() expects a string parameter");
                if (vt.indexOf(n) === -1) throw new TypeError("viewMode() parameter must be one of (" + vt.join(", ") + ") value");
                return r.viewMode = n, b = Math.max(vt.indexOf(n), nt), ft(), u
            }, u.toolbarPlacement = function(n) {
                if (arguments.length === 0) return r.toolbarPlacement;
                if (typeof n != "string") throw new TypeError("toolbarPlacement() expects a string parameter");
                if (kt.indexOf(n) === -1) throw new TypeError("toolbarPlacement() parameter must be one of (" + kt.join(", ") + ") value");
                return r.toolbarPlacement = n, f && (v(), w()), u
            }, u.widgetPositioning = function(t) {
                if (arguments.length === 0) return n.extend({}, r.widgetPositioning);
                if ({}.toString.call(t) !== "[object Object]") throw new TypeError("widgetPositioning() expects an object variable");
                if (t.horizontal) {
                    if (typeof t.horizontal != "string") throw new TypeError("widgetPositioning() horizontal variable must be a string");
                    if (t.horizontal = t.horizontal.toLowerCase(), bt.indexOf(t.horizontal) === -1) throw new TypeError("widgetPositioning() expects horizontal parameter to be one of (" + bt.join(", ") + ")");
                    r.widgetPositioning.horizontal = t.horizontal
                }
                if (t.vertical) {
                    if (typeof t.vertical != "string") throw new TypeError("widgetPositioning() vertical variable must be a string");
                    if (t.vertical = t.vertical.toLowerCase(), wt.indexOf(t.vertical) === -1) throw new TypeError("widgetPositioning() expects vertical parameter to be one of (" + wt.join(", ") + ")");
                    r.widgetPositioning.vertical = t.vertical
                }
                return a(), u
            }, u.calendarWeeks = function(n) {
                if (arguments.length === 0) return r.calendarWeeks;
                if (typeof n != "boolean") throw new TypeError("calendarWeeks() expects parameter to be a boolean value");
                return r.calendarWeeks = n, a(), u
            }, u.showTodayButton = function(n) {
                if (arguments.length === 0) return r.showTodayButton;
                if (typeof n != "boolean") throw new TypeError("showTodayButton() expects a boolean parameter");
                return r.showTodayButton = n, f && (v(), w()), u
            }, u.showClear = function(n) {
                if (arguments.length === 0) return r.showClear;
                if (typeof n != "boolean") throw new TypeError("showClear() expects a boolean parameter");
                return r.showClear = n, f && (v(), w()), u
            }, u.widgetParent = function(t) {
                if (arguments.length === 0) return r.widgetParent;
                if (typeof t == "string" && (t = n(t)), t !== null && typeof t != "string" && !(t instanceof n)) throw new TypeError("widgetParent() expects a string or a jQuery object parameter");
                return r.widgetParent = t, f && (v(), w()), u
            }, u.keepOpen = function(n) {
                if (arguments.length === 0) return r.keepOpen;
                if (typeof n != "boolean") throw new TypeError("keepOpen() expects a boolean parameter");
                return r.keepOpen = n, u
            }, u.focusOnShow = function(n) {
                if (arguments.length === 0) return r.focusOnShow;
                if (typeof n != "boolean") throw new TypeError("focusOnShow() expects a boolean parameter");
                return r.focusOnShow = n, u
            }, u.inline = function(n) {
                if (arguments.length === 0) return r.inline;
                if (typeof n != "boolean") throw new TypeError("inline() expects a boolean parameter");
                return r.inline = n, u
            }, u.clear = function() {
                return gt(), u
            }, u.keyBinds = function(n) {
                return r.keyBinds = n, u
            }, u.getMoment = function(n) {
                return tt(n)
            }, u.debug = function(n) {
                if (typeof n != "boolean") throw new TypeError("debug() expects a boolean parameter");
                return r.debug = n, u
            }, u.allowInputToggle = function(n) {
                if (arguments.length === 0) return r.allowInputToggle;
                if (typeof n != "boolean") throw new TypeError("allowInputToggle() expects a boolean parameter");
                return r.allowInputToggle = n, u
            }, u.showClose = function(n) {
                if (arguments.length === 0) return r.showClose;
                if (typeof n != "boolean") throw new TypeError("showClose() expects a boolean parameter");
                return r.showClose = n, u
            }, u.keepInvalid = function(n) {
                if (arguments.length === 0) return r.keepInvalid;
                if (typeof n != "boolean") throw new TypeError("keepInvalid() expects a boolean parameter");
                return r.keepInvalid = n, u
            }, u.datepickerInput = function(n) {
                if (arguments.length === 0) return r.datepickerInput;
                if (typeof n != "string") throw new TypeError("datepickerInput() expects a string parameter");
                return r.datepickerInput = n, u
            }, u.parseInputDate = function(n) {
                if (arguments.length === 0) return r.parseInputDate;
                if (typeof n != "function") throw new TypeError("parseInputDate() sholud be as function");
                return r.parseInputDate = n, u
            }, u.disabledTimeIntervals = function(t) {
                if (arguments.length === 0) return r.disabledTimeIntervals ? n.extend({}, r.disabledTimeIntervals) : r.disabledTimeIntervals;
                if (!t) return r.disabledTimeIntervals = !1, a(), u;
                if (!(t instanceof Array)) throw new TypeError("disabledTimeIntervals() expects an array parameter");
                return r.disabledTimeIntervals = t, a(), u
            }, u.disabledHours = function(t) {
                if (arguments.length === 0) return r.disabledHours ? n.extend({}, r.disabledHours) : r.disabledHours;
                if (!t) return r.disabledHours = !1, a(), u;
                if (!(t instanceof Array)) throw new TypeError("disabledHours() expects an array parameter");
                if (r.disabledHours = ui(t), r.enabledHours = !1, r.useCurrent && !r.keepInvalid) {
                    for (var i = 0; !c(e, "h");) {
                        if (e.add(1, "h"), i === 24) throw "Tried 24 times to find a valid date";
                        i++
                    }
                    h(e)
                }
                return a(), u
            }, u.enabledHours = function(t) {
                if (arguments.length === 0) return r.enabledHours ? n.extend({}, r.enabledHours) : r.enabledHours;
                if (!t) return r.enabledHours = !1, a(), u;
                if (!(t instanceof Array)) throw new TypeError("enabledHours() expects an array parameter");
                if (r.enabledHours = ui(t), r.disabledHours = !1, r.useCurrent && !r.keepInvalid) {
                    for (var i = 0; !c(e, "h");) {
                        if (e.add(1, "h"), i === 24) throw "Tried 24 times to find a valid date";
                        i++
                    }
                    h(e)
                }
                return a(), u
            }, u.viewDate = function(n) {
                if (arguments.length === 0) return o.clone();
                if (!n) return o = e.clone(), u;
                if (typeof n != "string" && !t.isMoment(n) && !(n instanceof Date)) throw new TypeError("viewDate() parameter must be one of [string, moment or Date]");
                return o = it(n), ut(), u
            }, i.is("input")) s = i;
        else if (s = i.find(r.datepickerInput), s.size() === 0) s = i.find("input");
        else if (!s.is("input")) throw new Error('CSS class "' + r.datepickerInput + '" cannot be applied to non input element');
        if (i.hasClass("input-group") && (l = i.find(".datepickerbutton").size() === 0 ? i.find(".input-group-addon") : i.find(".datepickerbutton")), !r.inline && !s.is("input")) throw new Error("Could not initialize DateTimePicker without an input element");
        return e = tt(), o = e.clone(), n.extend(!0, r, ci()), u.options(r), at(), ur(), s.prop("disabled") && u.disable(), s.is("input") && s.val().trim().length !== 0 ? h(it(s.val().trim())) : r.defaultDate && s.attr("placeholder") === undefined && h(r.defaultDate), r.inline && w(), u
    };
    n.fn.datetimepicker = function(t) {
        return this.each(function() {
            var r = n(this);
            r.data("DateTimePicker") || (t = n.extend(!0, {}, n.fn.datetimepicker.defaults, t), r.data("DateTimePicker", i(r, t)))
        })
    };
    n.fn.datetimepicker.defaults = {
        timeZone: "Etc/UTC",
        format: !1,
        dayViewHeaderFormat: "MMMM YYYY",
        extraFormats: !1,
        stepping: 1,
        minDate: !1,
        maxDate: !1,
        useCurrent: !0,
        collapse: !0,
        locale: t.locale(),
        defaultDate: !1,
        disabledDates: !1,
        enabledDates: !1,
        icons: {
            time: "glyphicon glyphicon-time",
            date: "glyphicon glyphicon-calendar",
            up: "glyphicon glyphicon-chevron-up",
            down: "glyphicon glyphicon-chevron-down",
            previous: "glyphicon glyphicon-chevron-left",
            next: "glyphicon glyphicon-chevron-right",
            today: "glyphicon glyphicon-screenshot",
            clear: "glyphicon glyphicon-trash",
            close: "glyphicon glyphicon-remove"
        },
        tooltips: {
            today: "Go to today",
            clear: "Clear selection",
            close: "Close the picker",
            selectMonth: "Select Month",
            prevMonth: "Previous Month",
            nextMonth: "Next Month",
            selectYear: "Select Year",
            prevYear: "Previous Year",
            nextYear: "Next Year",
            selectDecade: "Select Decade",
            prevDecade: "Previous Decade",
            nextDecade: "Next Decade",
            prevCentury: "Previous Century",
            nextCentury: "Next Century",
            pickHour: "Pick Hour",
            incrementHour: "Increment Hour",
            decrementHour: "Decrement Hour",
            pickMinute: "Pick Minute",
            incrementMinute: "Increment Minute",
            decrementMinute: "Decrement Minute",
            pickSecond: "Pick Second",
            incrementSecond: "Increment Second",
            decrementSecond: "Decrement Second",
            togglePeriod: "Toggle Period",
            selectTime: "Select Time"
        },
        useStrict: !1,
        sideBySide: !1,
        daysOfWeekDisabled: !1,
        calendarWeeks: !1,
        viewMode: "days",
        toolbarPlacement: "default",
        showTodayButton: !1,
        showClear: !1,
        showClose: !1,
        widgetPositioning: {
            horizontal: "auto",
            vertical: "auto"
        },
        widgetParent: null,
        ignoreReadonly: !1,
        keepOpen: !1,
        focusOnShow: !0,
        inline: !1,
        keepInvalid: !1,
        datepickerInput: ".datepickerinput",
        keyBinds: {
            up: function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(7, "d")) : this.date(t.clone().add(this.stepping(), "m"))
                }
            },
            down: function(n) {
                if (!n) {
                    this.show();
                    return
                }
                var t = this.date() || this.getMoment();
                n.find(".datepicker").is(":visible") ? this.date(t.clone().add(7, "d")) : this.date(t.clone().subtract(this.stepping(), "m"))
            },
            "control up": function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") ? this.date(t.clone().subtract(1, "y")) : this.date(t.clone().add(1, "h"))
                }
            },
            "control down": function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") ? this.date(t.clone().add(1, "y")) : this.date(t.clone().subtract(1, "h"))
                }
            },
            left: function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "d"))
                }
            },
            right: function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "d"))
                }
            },
            pageUp: function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") && this.date(t.clone().subtract(1, "M"))
                }
            },
            pageDown: function(n) {
                if (n) {
                    var t = this.date() || this.getMoment();
                    n.find(".datepicker").is(":visible") && this.date(t.clone().add(1, "M"))
                }
            },
            enter: function() {
                this.hide()
            },
            escape: function() {
                this.hide()
            },
            "control space": function(n) {
                n.find(".timepicker").is(":visible") && n.find('.btn[data-action="togglePeriod"]').click()
            },
            t: function() {
                this.date(this.getMoment())
            },
            "delete": function() {
                this.clear()
            }
        },
        debug: !1,
        allowInputToggle: !1,
        disabledTimeIntervals: !1,
        disabledHours: !1,
        enabledHours: !1,
        viewDate: !1
    }
}),
function(n) {
    typeof define == "function" && define.amd ? define(["jquery", "moment"], n) : typeof exports == "object" ? module.exports = n(require("jquery"), require("moment")) : n(jQuery, moment)
}(function(n, t) {
    function g(n) {
        return ti(n, yt)
    }

    function wu(t) {
        var i = {
                views: t.views || {}
            },
            r;
        return n.each(t, function(t, u) {
            t != "views" && (n.isPlainObject(u) && !/(time|duration|interval)$/i.test(t) && n.inArray(t, yt) == -1 ? (r = null, n.each(u, function(n, u) {
                /^(month|week|day|default|basic(Week|Day)?|agenda(Week|Day)?)$/.test(n) ? (i.views[n] || (i.views[n] = {}), i.views[n][t] = u) : (r || (r = {}), r[n] = u)
            }), r && (i[t] = r)) : i[t] = u)
        }), i
    }

    function pi(n, t) {
        t.left && n.css({
            "border-left-width": 1,
            "margin-left": t.left - 1
        });
        t.right && n.css({
            "border-right-width": 1,
            "margin-right": t.right - 1
        })
    }

    function wi(n) {
        n.css({
            "margin-left": "",
            "margin-right": "",
            "border-left-width": "",
            "border-right-width": ""
        })
    }

    function ft() {
        n("body").addClass("fc-not-allowed")
    }

    function nt() {
        n("body").removeClass("fc-not-allowed")
    }

    function bi(t, i, r) {
        var u = Math.floor(i / t.length),
            e = Math.floor(i - u * (t.length - 1)),
            f = [],
            o = [],
            s = [],
            h = 0;
        ki(t);
        t.each(function(i, r) {
            var l = i === t.length - 1 ? e : u,
                c = n(r).outerHeight(!0);
            c < l ? (f.push(r), o.push(c), s.push(n(r).height())) : h += c
        });
        r && (i -= h, u = Math.floor(i / f.length), e = Math.floor(i - u * (f.length - 1)));
        n(f).each(function(t, i) {
            var r = t === f.length - 1 ? e : u,
                h = o[t],
                c = s[t],
                l = r - (h - c);
            h < r && n(i).height(l)
        })
    }

    function ki(n) {
        n.height("")
    }

    function di(t) {
        var i = 0;
        return t.find("> span").each(function(t, r) {
            var u = n(r).outerWidth();
            u > i && (i = u)
        }), i++, t.width(i), i
    }

    function gi(n, t) {
        var i = n.add(t),
            r;
        return i.css({
            position: "relative",
            left: -1
        }), r = n.outerHeight() - t.outerHeight(), i.css({
            position: "",
            left: ""
        }), r
    }

    function pt(t) {
        var r = t.css("position"),
            i = t.parents().filter(function() {
                var t = n(this);
                return /(auto|scroll)/.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
            }).eq(0);
        return r === "fixed" || !i.length ? n(t[0].ownerDocument || document) : i
    }

    function wt(n, t) {
        var i = n.offset(),
            r = i.left - (t ? t.left : 0),
            u = i.top - (t ? t.top : 0);
        return {
            left: r,
            right: r + n.outerWidth(),
            top: u,
            bottom: u + n.outerHeight()
        }
    }

    function nr(n, t) {
        var i = n.offset(),
            r = bt(n),
            u = i.left + k(n, "border-left-width") + r.left - (t ? t.left : 0),
            f = i.top + k(n, "border-top-width") + r.top - (t ? t.top : 0);
        return {
            left: u,
            right: u + n[0].clientWidth,
            top: f,
            bottom: f + n[0].clientHeight
        }
    }

    function bu(n, t) {
        var i = n.offset(),
            r = i.left + k(n, "border-left-width") + k(n, "padding-left") - (t ? t.left : 0),
            u = i.top + k(n, "border-top-width") + k(n, "padding-top") - (t ? t.top : 0);
        return {
            left: r,
            right: r + n.width(),
            top: u,
            bottom: u + n.height()
        }
    }

    function bt(n) {
        var i = n.innerWidth() - n[0].clientWidth,
            t = {
                left: 0,
                right: 0,
                top: 0,
                bottom: n.innerHeight() - n[0].clientHeight
            };
        return ku() && n.css("direction") == "rtl" ? t.left = i : t.right = i, t
    }

    function ku() {
        return et === null && (et = du()), et
    }

    function du() {
        var t = n("<div><div/><\/div>").css({
                position: "absolute",
                top: -1e3,
                left: 0,
                border: 0,
                padding: 0,
                overflow: "scroll",
                direction: "rtl"
            }).appendTo("body"),
            i = t.children(),
            r = i.offset().left > t.offset().left;
        return t.remove(), r
    }

    function k(n, t) {
        return parseFloat(n.css(t)) || 0
    }

    function tr(n) {
        return n.which == 1 && !n.ctrlKey
    }

    function c(n) {
        if (n.pageX !== undefined) return n.pageX;
        var t = n.originalEvent.touches;
        if (t) return t[0].pageX
    }

    function l(n) {
        if (n.pageY !== undefined) return n.pageY;
        var t = n.originalEvent.touches;
        if (t) return t[0].pageY
    }

    function ir(n) {
        return /^touch/.test(n.type)
    }

    function gu(n) {
        n.addClass("fc-unselectable").on("selectstart", ot)
    }

    function ot(n) {
        n.preventDefault()
    }

    function rr(n, t) {
        var i = {
            left: Math.max(n.left, t.left),
            right: Math.min(n.right, t.right),
            top: Math.max(n.top, t.top),
            bottom: Math.min(n.bottom, t.bottom)
        };
        return i.left < i.right && i.top < i.bottom ? i : !1
    }

    function nf(n, t) {
        return {
            left: Math.min(Math.max(n.left, t.left), t.right),
            top: Math.min(Math.max(n.top, t.top), t.bottom)
        }
    }

    function tf(n) {
        return {
            left: (n.left + n.right) / 2,
            top: (n.top + n.bottom) / 2
        }
    }

    function rf(n, t) {
        return {
            left: n.left - t.left,
            top: n.top - t.top
        }
    }

    function ur(t) {
        var f = [],
            r = [],
            u, i;
        for (typeof t == "string" ? r = t.split(/\s*,\s*/) : typeof t == "function" ? r = [t] : n.isArray(t) && (r = t), u = 0; u < r.length; u++) i = r[u], typeof i == "string" ? f.push(i.charAt(0) == "-" ? {
            field: i.substring(1),
            order: -1
        } : {
            field: i,
            order: 1
        }) : typeof i == "function" && f.push({
            func: i
        });
        return f
    }

    function fr(n, t, i) {
        for (var u, r = 0; r < i.length; r++)
            if (u = er(n, t, i[r]), u) return u;
        return 0
    }

    function er(n, t, i) {
        return i.func ? i.func(n, t) : or(n[i.field], t[i.field]) * (i.order || 1)
    }

    function or(t, i) {
        return !t && !i ? 0 : i == null ? -1 : t == null ? 1 : n.type(t) === "string" || n.type(i) === "string" ? String(t).localeCompare(String(i)) : t - i
    }

    function kt(n, t) {
        var i = n.start,
            r = n.end,
            u = t.start,
            f = t.end,
            e, o, s, h;
        if (r > u && i < f) return i >= u ? (e = i.clone(), s = !0) : (e = u.clone(), s = !1), r <= f ? (o = r.clone(), h = !0) : (o = f.clone(), h = !1), {
            start: e,
            end: o,
            isStart: s,
            isEnd: h
        }
    }

    function sr(n, i) {
        return t.duration({
            days: n.clone().stripTime().diff(i.clone().stripTime(), "days"),
            ms: n.time() - i.time()
        })
    }

    function uf(n, i) {
        return t.duration({
            days: n.clone().stripTime().diff(i.clone().stripTime(), "days")
        })
    }

    function hr(n, i, r) {
        return t.duration(Math.round(n.diff(i, r, !0)), r)
    }

    function gt(n, t) {
        for (var r, u, i = 0; i < st.length; i++)
            if (r = st[i], u = ff(r, n, t), u >= 1 && v(u)) break;
        return r
    }

    function ff(n, i, r) {
        return r != null ? r.diff(i, n, !0) : t.isDuration(i) ? i.as(n) : i.end.diff(i.start, n, !0)
    }

    function ef(n, t, i) {
        var r;
        return b(i) ? (t - n) / i : (r = i.asMonths(), Math.abs(r) >= 1 && v(r)) ? t.diff(n, "months", !0) / r : t.diff(n, "days", !0) / i.asDays()
    }

    function ni(n, t) {
        var i, r;
        return b(n) || b(t) ? n / t : (i = n.asMonths(), r = t.asMonths(), Math.abs(i) >= 1 && v(i) && Math.abs(r) >= 1 && v(r)) ? i / r : n.asDays() / t.asDays()
    }

    function of(n, i) {
        var r;
        return b(n) ? t.duration(n * i) : (r = n.asMonths(), Math.abs(r) >= 1 && v(r)) ? t.duration({
            months: r * i
        }) : t.duration({
            days: n.asDays() * i
        })
    }

    function b(n) {
        return Boolean(n.hours() || n.minutes() || n.seconds() || n.milliseconds())
    }

    function sf(n) {
        return Object.prototype.toString.call(n) === "[object Date]" || n instanceof Date
    }

    function cr(n) {
        return /^\d+\:\d+(?:\:\d+\.?(?:\d{3})?)?$/.test(n)
    }

    function ti(n, t) {
        var u = {},
            i, r, e, o, f, s;
        if (t)
            for (i = 0; i < t.length; i++) {
                for (r = t[i], e = [], o = n.length - 1; o >= 0; o--)
                    if (f = n[o][r], typeof f == "object") e.unshift(f);
                    else if (f !== undefined) {
                    u[r] = f;
                    break
                }
                e.length && (u[r] = ti(e))
            }
        for (i = n.length - 1; i >= 0; i--) {
            s = n[i];
            for (r in s) r in u || (u[r] = s[r])
        }
        return u
    }

    function ht(n) {
        var t = function() {};
        return t.prototype = n, new t
    }

    function ii(n, t) {
        for (var i in n) ar(n, i) && (t[i] = n[i])
    }

    function hf(n, t) {
        for (var u = ["constructor", "toString", "valueOf"], i, r = 0; r < u.length; r++) i = u[r], n[i] !== Object.prototype[i] && (t[i] = n[i])
    }

    function ar(n, t) {
        return lr.call(n, t)
    }

    function cf(t) {
        return /undefined|null|boolean|number|string/.test(n.type(t))
    }

    function ct(t, i, r) {
        if (n.isFunction(t) && (t = [t]), t) {
            for (var f, u = 0; u < t.length; u++) f = t[u].apply(i, r) || f;
            return f
        }
    }

    function o() {
        for (var n = 0; n < arguments.length; n++)
            if (arguments[n] !== undefined) return arguments[n]
    }

    function r(n) {
        return (n + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#039;").replace(/"/g, "&quot;").replace(/\n/g, "<br />")
    }

    function ri(n) {
        return n.replace(/&.*?;/g, "")
    }

    function lt(t) {
        var i = [];
        return n.each(t, function(n, t) {
            t != null && i.push(n + ":" + t)
        }), i.join(";")
    }

    function lf(n) {
        return n.charAt(0).toUpperCase() + n.slice(1)
    }

    function af(n, t) {
        return n - t
    }

    function v(n) {
        return n % 1 == 0
    }

    function tt(n, t) {
        var i = n[t];
        return function() {
            return i.apply(n, arguments)
        }
    }

    function ui(n, t, i) {
        var r, u, f, o, e, s = function() {
            var h = +new Date - o;
            h < t ? r = setTimeout(s, t - h) : (r = null, i || (e = n.apply(f, u), f = u = null))
        };
        return function() {
            f = this;
            u = arguments;
            o = +new Date;
            var h = i && !r;
            return r || (r = setTimeout(s, t)), h && (e = n.apply(f, u), f = u = null), e
        }
    }

    function oi(i, r, u) {
        var f = i[0],
            h = i.length == 1 && typeof f == "string",
            o, s, c, e;
        return t.isMoment(f) ? (e = t.apply(null, i), yr(f, e)) : sf(f) || f === undefined ? e = t.apply(null, i) : (o = !1, s = !1, h ? vf.test(f) ? (f += "-01", i = [f], o = !0, s = !0) : (c = yf.exec(f)) && (o = !c[5], s = !0) : n.isArray(f) && (s = !0), e = r || o ? t.utc.apply(t, i) : t.apply(null, i), o ? (e._ambigTime = !0, e._ambigZone = !0) : u && (s ? e._ambigZone = !0 : h && (e.utcOffset ? e.utcOffset(f) : e.zone(f)))), e._fullCalendar = !0, e
    }

    function si(n, r) {
        for (var o = !1, s = !1, h = n.length, e = [], u, f = 0; f < h; f++) u = n[f], t.isMoment(u) || (u = i.moment.parseZone(u)), o = o || u._ambigTime, s = s || u._ambigZone, e.push(u);
        for (f = 0; f < h; f++) u = e[f], r || !o || u._ambigTime ? s && !u._ambigZone && (e[f] = u.clone().stripZone()) : e[f] = u.clone().stripTime();
        return e
    }

    function yr(n, t) {
        n._ambigTime ? t._ambigTime = !0 : t._ambigTime && (t._ambigTime = !1);
        n._ambigZone ? t._ambigZone = !0 : t._ambigZone && (t._ambigZone = !1)
    }

    function pr(n, t) {
        n.year(t[0] || 0).month(t[1] || 0).date(t[2] || 0).hours(t[3] || 0).minutes(t[4] || 0).seconds(t[5] || 0).milliseconds(t[6] || 0)
    }

    function y(n, t) {
        return f.format.call(n, t)
    }

    function pf(n, t) {
        return wr(n, gr(t))
    }

    function wr(n, t) {
        for (var r = "", i = 0; i < t.length; i++) r += ci(n, t[i]);
        return r
    }

    function ci(n, t) {
        var i, r;
        return typeof t == "string" ? t : (i = t.token) ? hi[i] ? hi[i](n) : y(n, i) : t.maybe && (r = wr(n, t.maybe), r.match(/[1-9]/)) ? r : ""
    }

    function br(n, t, r, u, f) {
        var e;
        return n = i.moment.parseZone(n), t = i.moment.parseZone(t), e = (n.localeData || n.lang).call(n), r = e.longDateFormat(r) || r, u = u || " - ", wf(n, t, gr(r), u, f)
    }

    function wf(n, t, i, r, u) {
        for (var a = n.clone().stripZone(), v = t.clone().stripZone(), f, y = "", o, l = "", s, h = "", c = "", p = "", e = 0; e < i.length; e++) {
            if (f = dr(n, t, a, v, i[e]), f === !1) break;
            y += f
        }
        for (o = i.length - 1; o > e; o--) {
            if (f = dr(n, t, a, v, i[o]), f === !1) break;
            l = f + l
        }
        for (s = e; s <= o; s++) h += ci(n, i[s]), c += ci(t, i[s]);
        return (h || c) && (p = u ? c + r + h : h + r + c), y + p + l
    }

    function dr(n, t, i, r, u) {
        var f, e;
        return typeof u == "string" ? u : (f = u.token) && (e = kr[f.charAt(0)], e && i.isSame(r, e)) ? y(n, f) : !1
    }

    function gr(n) {
        return n in at ? at[n] : at[n] = nu(n)
    }

    function nu(n) {
        for (var i = [], r = /\[([^\]]*)\]|\(([^\)]*)\)|(LTS|LT|(\w)\4*o?)|([^\w\[\(]+)/g, t; t = r.exec(n);) t[1] ? i.push(t[1]) : t[2] ? i.push({
            maybe: nu(t[2])
        }) : t[3] ? i.push({
            token: t[3]
        }) : t[5] && i.push(t[5]);
        return i
    }

    function s() {}

    function bf(n, t) {
        var i;
        return ar(t, "constructor") && (i = t.constructor), typeof i != "function" && (i = t.constructor = function() {
            n.apply(this, arguments)
        }), i.prototype = ht(n.prototype), ii(t, i.prototype), hf(t, i.prototype), ii(n, i), i
    }

    function tu(n, t) {
        ii(t, n.prototype)
    }

    function ru(n, t) {
        return !n && !t ? !0 : n && t ? n.component === t.component && uu(n, t) && uu(t, n) : !1
    }

    function uu(n, t) {
        for (var i in n)
            if (!/^(component|left|right|top|bottom)$/.test(i) && n[i] !== t[i]) return !1;
        return !0
    }

    function eu(n) {
        var t = ou(n);
        return t === "background" || t === "inverse-background"
    }

    function df(n) {
        return ou(n) === "inverse-background"
    }

    function ou(n) {
        return o((n.source || {}).rendering, n.rendering)
    }

    function gf(n) {
        for (var r = {}, i, t = 0; t < n.length; t++) i = n[t], (r[i._id] || (r[i._id] = [])).push(i);
        return r
    }

    function ne(n, t) {
        return n.start - t.start
    }

    function te(r) {
        var e = i.dataAttrPrefix,
            u, f, o, s;
        return e && (e += "-"), u = r.data(e + "event") || null, u && (u = typeof u == "object" ? n.extend({}, u) : {}, f = u.start, f == null && (f = u.time), o = u.duration, s = u.stick, delete u.start, delete u.time, delete u.duration, delete u.stick), f == null && (f = r.data(e + "start")), f == null && (f = r.data(e + "time")), o == null && (o = r.data(e + "duration")), s == null && (s = r.data(e + "stick")), f = f != null ? t.duration(f) : null, o = o != null ? t.duration(o) : null, s = Boolean(s), {
            eventProps: u,
            startTime: f,
            duration: o,
            stick: s
        }
    }

    function ie(n, t) {
        for (var r, i = 0; i < t.length; i++)
            if (r = t[i], r.leftCol <= n.rightCol && r.rightCol >= n.leftCol) return !0;
        return !1
    }

    function re(n, t) {
        return n.leftCol - t.leftCol
    }

    function ue(n) {
        for (var i = [], u, t, r = 0; r < n.length; r++) {
            for (u = n[r], t = 0; t < i.length; t++)
                if (!hu(u, i[t]).length) break;
            u.level = t;
            (i[t] || (i[t] = [])).push(u)
        }
        return i
    }

    function fe(n) {
        for (var f, i, r, u, t = 0; t < n.length; t++)
            for (f = n[t], i = 0; i < f.length; i++)
                for (r = f[i], r.forwardSegs = [], u = t + 1; u < n.length; u++) hu(r, n[u], r.forwardSegs)
    }

    function su(n) {
        var u = n.forwardSegs,
            i = 0,
            t, r;
        if (n.forwardPressure === undefined) {
            for (t = 0; t < u.length; t++) r = u[t], su(r), i = Math.max(i, 1 + r.forwardPressure);
            n.forwardPressure = i
        }
    }

    function hu(n, t, i) {
        i = i || [];
        for (var r = 0; r < t.length; r++) ee(n, t[r]) && i.push(t[r]);
        return i
    }

    function ee(n, t) {
        return n.bottom > t.top && n.top < t.bottom
    }

    function oe(r, u) {
        function at() {
            a ? w() && (ft(), h()) : vt()
        }

        function vt() {
            lt = e.theme ? "ui" : "fc";
            r.addClass("fc");
            r.addClass(f.isTouch ? "fc-touch" : "fc-cursor");
            e.isRTL ? r.addClass("fc-rtl") : r.addClass("fc-ltr");
            e.theme ? r.addClass("ui-widget") : r.addClass("fc-unthemed");
            a = n("<div class='fc-view-container'/>").prependTo(r);
            l = f.header = new le(f, e);
            v = l.render();
            v && r.prepend(v);
            h(e.defaultView);
            e.handleWindowResize && (k = ui(pt, e.windowResizeDelay), n(window).resize(k))
        }

        function yt() {
            o && o.removeElement();
            l.removeElement();
            a.remove();
            r.removeClass("fc fc-touch fc-cursor fc-ltr fc-rtl fc-unthemed ui-widget");
            k && n(window).unbind("resize", k)
        }

        function w() {
            return r.is(":visible")
        }

        function h(t) {
            p++;
            o && t && o.type !== t && (l.deactivateButton(o.type), g(), o.removeElement(), o = f.view = null);
            !o && t && (o = f.view = it[t] || (it[t] = f.instantiateView(t)), o.setElement(n("<div class='fc-view fc-" + t + "-view' />").appendTo(a)), l.activateButton(t));
            o && (s = o.massageCurrentDate(s), o.displaying && s.isWithin(o.intervalStart, o.intervalEnd) || w() && (o.display(s), b(), ni(), ti(), kt()));
            b();
            p--
        }

        function ut(n) {
            if (w()) return n && et(), p++, o.updateSize(!0), p--, !0
        }

        function ft() {
            w() && et()
        }

        function et() {
            y = typeof e.contentHeight == "number" ? e.contentHeight : typeof e.height == "number" ? e.height - (v ? v.outerHeight(!0) : 0) : Math.round(a.width() / Math.max(e.aspectRatio, .5))
        }

        function pt(n) {
            !p && n.target === window && o.start && ut(!0) && o.trigger("windowResize", tt)
        }

        function wt() {
            bt();
            ot()
        }

        function d() {
            w() && (g(), o.displayEvents(rt), b())
        }

        function bt() {
            g();
            o.clearEvents();
            b()
        }

        function kt() {
            !e.lazyFetching || st(o.start, o.end) ? ot() : d()
        }

        function ot() {
            ct(o.start, o.end)
        }

        function dt(n) {
            rt = n;
            d()
        }

        function gt() {
            d()
        }

        function ni() {
            l.updateTitle(o.title)
        }

        function ti() {
            var n = f.getNow();
            n.isWithin(o.intervalStart, o.intervalEnd) ? l.disableButton("today") : l.enableButton("today")
        }

        function ii() {
            o.select(f.buildSelectSpan.apply(f, arguments))
        }

        function ri() {
            o && o.unselect()
        }

        function fi() {
            s = o.computePrevDate(s);
            h()
        }

        function ei() {
            s = o.computeNextDate(s);
            h()
        }

        function oi() {
            s.add(-1, "years");
            h()
        }

        function si() {
            s.add(1, "years");
            h()
        }

        function hi() {
            s = f.getNow();
            h()
        }

        function ci(n) {
            s = f.moment(n).stripZone();
            h()
        }

        function li(n) {
            s.add(t.duration(n));
            h()
        }

        function ai(n, t) {
            var i;
            t = t || "day";
            i = f.getViewSpec(t) || f.getUnitViewSpec(t);
            s = n.clone();
            h(i ? i.type : null)
        }

        function vi() {
            return f.applyTimezone(s)
        }

        function g() {
            a.css({
                width: "100%",
                height: a.height(),
                overflow: "hidden"
            })
        }

        function b() {
            a.css({
                width: "",
                height: "",
                overflow: ""
            })
        }

        function yi() {
            return f
        }

        function pi() {
            return o
        }

        function wi(n, t) {
            if (t === undefined) return e[n];
            (n == "height" || n == "contentHeight" || n == "aspectRatio") && (e[n] = t, ut(!0))
        }

        function bi(n, t) {
            var i = Array.prototype.slice.call(arguments, 2);
            return t = t || tt, this.triggerWith(n, t, i), e[n] ? e[n].apply(t, i) : void 0
        }
        var f = this,
            e, c, nt;
        f.initOptions(u || {});
        e = this.options;
        f.render = at;
        f.destroy = yt;
        f.refetchEvents = wt;
        f.reportEvents = dt;
        f.reportEventChange = gt;
        f.rerenderEvents = d;
        f.changeView = h;
        f.select = ii;
        f.unselect = ri;
        f.prev = fi;
        f.next = ei;
        f.prevYear = oi;
        f.nextYear = si;
        f.today = hi;
        f.gotoDate = ci;
        f.incrementDate = li;
        f.zoomTo = ai;
        f.getDate = vi;
        f.getCalendar = yi;
        f.getView = pi;
        f.option = wi;
        f.trigger = bi;
        c = ht(au(e.lang));
        e.monthNames && (c._months = e.monthNames);
        e.monthNamesShort && (c._monthsShort = e.monthNamesShort);
        e.dayNames && (c._weekdays = e.dayNames);
        e.dayNamesShort && (c._weekdaysShort = e.dayNamesShort);
        e.firstDay != null && (nt = ht(c._week), nt.dow = e.firstDay, c._week = nt);
        c._fullCalendar_weekCalc = function(n) {
            return typeof n == "function" ? n : n === "local" ? n : n === "iso" || n === "ISO" ? "ISO" : void 0
        }(e.weekNumberCalculation);
        f.defaultAllDayEventDuration = t.duration(e.defaultAllDayEventDuration);
        f.defaultTimedEventDuration = t.duration(e.defaultTimedEventDuration);
        f.moment = function() {
            var n;
            return e.timezone === "local" ? (n = i.moment.apply(null, arguments), n.hasTime() && n.local()) : n = e.timezone === "UTC" ? i.moment.utc.apply(null, arguments) : i.moment.parseZone.apply(null, arguments), "_locale" in n ? n._locale = c : n._lang = c, n
        };
        f.getIsAmbigTimezone = function() {
            return e.timezone !== "local" && e.timezone !== "UTC"
        };
        f.applyTimezone = function(n) {
            if (!n.hasTime()) return n.clone();
            var t = f.moment(n.toArray()),
                r = n.time() - t.time(),
                i;
            return r && (i = t.clone().add(r), n.time() - i.time() == 0 && (t = i)), t
        };
        f.getNow = function() {
            var n = e.now;
            return typeof n == "function" && (n = n()), f.moment(n).stripZone()
        };
        f.getEventEnd = function(n) {
            return n.end ? n.end.clone() : f.getDefaultEventEnd(n.allDay, n.start)
        };
        f.getDefaultEventEnd = function(n, t) {
            var i = t.clone();
            return n ? i.stripTime().add(f.defaultAllDayEventDuration) : i.add(f.defaultTimedEventDuration), f.getIsAmbigTimezone() && i.stripZone(), i
        };
        f.humanizeDuration = function(n) {
            return (n.locale || n.lang).call(n, e.lang).humanize()
        };
        ae.call(f, e);
        var st = f.isFetchNeeded,
            ct = f.fetchEvents,
            tt = r[0],
            l, v, a, lt, o, it = {},
            y, k, p = 0,
            rt = [],
            s;
        s = e.defaultDate != null ? f.moment(e.defaultDate).stripZone() : f.getNow();
        f.getSuggestedViewHeight = function() {
            return y === undefined && ft(), y
        };
        f.isHeightAuto = function() {
            return e.contentHeight === "auto" || e.height === "auto"
        };
        f.freezeContentHeight = g;
        f.unfreezeContentHeight = b;
        f.initialize()
    }

    function lu(t) {
        n.each(ce, function(n, i) {
            t[n] == null && (t[n] = i(t))
        })
    }

    function au(n) {
        var i = t.localeData || t.langData;
        return i.call(t, n) || i.call(t, "en")
    }

    function le(t, i) {
        function h() {
            var t = i.header;
            return u = i.theme ? "ui" : "fc", t ? f = n("<div class='fc-toolbar'/>").append(s("left")).append(s("right")).append(s("center")).append('<div class="fc-clear"/>') : void 0
        }

        function c() {
            f.remove();
            f = n()
        }

        function s(f) {
            var e = n('<div class="fc-' + f + '"/>'),
                s = i.header[f];
            return s && n.each(s.split(" "), function() {
                var f = n(),
                    h = !0,
                    s;
                n.each(this.split(","), function(e, s) {
                    var l, p, a, v, y, w, b, k, d, c;
                    s == "title" ? (f = f.add(n("<h2>&nbsp;<\/h2>")), h = !1) : ((l = (t.options.customButtons || {})[s]) ? (a = function(n) {
                        l.click && l.click.call(c[0], n)
                    }, v = "", y = l.text) : (p = t.getViewSpec(s)) ? (a = function() {
                        t.changeView(s)
                    }, o.push(s), v = p.buttonTextOverride, y = p.buttonTextDefault) : t[s] && (a = function() {
                        t[s]()
                    }, v = (t.overrides.buttonText || {})[s], y = i.buttonText[s]), a && (w = l ? l.themeIcon : i.themeButtonIcons[s], b = l ? l.icon : i.buttonIcons[s], k = v ? r(v) : w && i.theme ? "<span class='ui-icon ui-icon-" + w + "'><\/span>" : b && !i.theme ? "<span class='fc-icon fc-icon-" + b + "'><\/span>" : r(y), d = ["fc-" + s + "-button", u + "-button", u + "-state-default"], c = n('<button type="button" class="' + d.join(" ") + '">' + k + "<\/button>").click(function(n) {
                        c.hasClass(u + "-state-disabled") || (a(n), (c.hasClass(u + "-state-active") || c.hasClass(u + "-state-disabled")) && c.removeClass(u + "-state-hover"))
                    }).mousedown(function() {
                        c.not("." + u + "-state-active").not("." + u + "-state-disabled").addClass(u + "-state-down")
                    }).mouseup(function() {
                        c.removeClass(u + "-state-down")
                    }).hover(function() {
                        c.not("." + u + "-state-active").not("." + u + "-state-disabled").addClass(u + "-state-hover")
                    }, function() {
                        c.removeClass(u + "-state-hover").removeClass(u + "-state-down")
                    }), f = f.add(c)))
                });
                h && f.first().addClass(u + "-corner-left").end().last().addClass(u + "-corner-right").end();
                f.length > 1 ? (s = n("<div/>"), h && s.addClass("fc-button-group"), s.append(f), e.append(s)) : e.append(f)
            }), e
        }

        function l(n) {
            f.find("h2").text(n)
        }

        function a(n) {
            f.find(".fc-" + n + "-button").addClass(u + "-state-active")
        }

        function v(n) {
            f.find(".fc-" + n + "-button").removeClass(u + "-state-active")
        }

        function y(n) {
            f.find(".fc-" + n + "-button").attr("disabled", "disabled").addClass(u + "-state-disabled")
        }

        function p(n) {
            f.find(".fc-" + n + "-button").removeAttr("disabled").removeClass(u + "-state-disabled")
        }

        function w() {
            return o
        }
        var e = this,
            f, o, u;
        e.render = h;
        e.removeElement = c;
        e.updateTitle = l;
        e.activateButton = a;
        e.deactivateButton = v;
        e.disableButton = y;
        e.enableButton = p;
        e.getViewsWithButtons = w;
        f = n();
        o = []
    }

    function ae(r) {
        function lt(n, t) {
            return !s || n < s || t > h
        }

        function at(n, t) {
            var u, r, i;
            for (s = n, h = t, f = [], u = ++w, r = e.length, y = r, i = 0; i < r; i++) k(e[i], u)
        }

        function k(t, i) {
            d(t, function(r) {
                var s = n.isArray(t.events),
                    u, e, o;
                if (i == w) {
                    if (r)
                        for (u = 0; u < r.length; u++) e = r[u], o = s ? e : c(e, t), o && f.push.apply(f, v(o));
                    y--;
                    y || l(f)
                }
            })
        }

        function d(t, f) {
            for (var v = i.sourceFetchers, l, e, y, c = 0; c < v.length; c++) {
                if (l = v[c].call(u, t, s.clone(), h.clone(), r.timezone, f), l === !0) return;
                if (typeof l == "object") {
                    d(l, f);
                    return
                }
            }
            if (e = t.events, e) n.isFunction(e) ? (u.pushLoading(), e.call(u, s.clone(), h.clone(), r.timezone, function(n) {
                f(n);
                u.popLoading()
            })) : n.isArray(e) ? f(e) : f();
            else if (y = t.url, y) {
                var b = t.success,
                    k = t.error,
                    g = t.complete,
                    nt = n.isFunction(t.data) ? t.data() : t.data;
                var a = n.extend({}, nt || {}),
                    p = o(t.startParam, r.startParam),
                    w = o(t.endParam, r.endParam),
                    tt = o(t.timezoneParam, r.timezoneParam);
                p && (a[p] = s.format());
                w && (a[w] = h.format());
                r.timezone && r.timezone != "local" && (a[tt] = r.timezone);
                u.pushLoading();
                n.ajax(n.extend({}, vu, t, {
                    data: a,
                    success: function(t) {
                        t = t || [];
                        var i = ct(b, this, arguments);
                        n.isArray(i) && (t = i);
                        f(t)
                    },
                    error: function() {
                        ct(k, this, arguments);
                        f()
                    },
                    complete: function() {
                        ct(g, this, arguments);
                        u.popLoading()
                    }
                }))
            } else f()
        }

        function vt(n) {
            var t = g(n);
            t && (e.push(t), y++, k(t, w))
        }

        function g(t) {
            var e = i.sourceNormalizers,
                r, f;
            if (n.isFunction(t) || n.isArray(t) ? r = {
                    events: t
                } : typeof t == "string" ? r = {
                    url: t
                } : typeof t == "object" && (r = n.extend({}, t)), r) {
                for (r.className ? typeof r.className == "string" && (r.className = r.className.split(/\s+/)) : r.className = [], n.isArray(r.events) && (r.origArray = r.events, r.events = n.map(r.events, function(n) {
                        return c(n, r)
                    })), f = 0; f < e.length; f++) e[f].call(u, r);
                return r
            }
        }

        function yt(t) {
            e = n.grep(e, function(n) {
                return !nt(n, t)
            });
            f = n.grep(f, function(n) {
                return !nt(n.source, t)
            });
            l(f)
        }

        function nt(n, t) {
            return n && t && tt(n) == tt(t)
        }

        function tt(n) {
            return (typeof n == "object" ? n.origArray || n.googleCalendarId || n.url || n.events : null) || n
        }

        function pt(n) {
            n.start = u.moment(n.start);
            n.end = n.end ? u.moment(n.end) : null;
            ft(n, wt(n));
            l(f)
        }

        function wt(t) {
            var i = {};
            return n.each(t, function(n, t) {
                it(n) && t !== undefined && cf(t) && (i[n] = t)
            }), i
        }

        function it(n) {
            return !/^_|^(id|allDay|start|end)$/.test(n)
        }

        function bt(n, t) {
            var e = c(n),
                r, u, i;
            if (e) {
                for (r = v(e), u = 0; u < r.length; u++) i = r[u], i.source || (t && (p.events.push(i), i.source = p), f.push(i));
                return l(f), r
            }
            return []
        }

        function kt(t) {
            var r, i;
            for (t == null ? t = function() {
                    return !0
                } : n.isFunction(t) || (r = t + "", t = function(n) {
                    return n._id == r
                }), f = n.grep(f, t, !0), i = 0; i < e.length; i++) n.isArray(e[i].events) && (e[i].events = n.grep(e[i].events, t, !0));
            l(f)
        }

        function b(t) {
            return n.isFunction(t) ? n.grep(f, t) : t != null ? (t += "", n.grep(f, function(n) {
                return n._id == t
            })) : f
        }

        function c(i, f) {
            var h = {},
                s, e, c;
            if (r.eventDataTransform && (i = r.eventDataTransform(i)), f && f.eventDataTransform && (i = f.eventDataTransform(i)), n.extend(h, i), f && (h.source = f), h._id = i._id || (i.id === undefined ? "_fc" + yu++ : i.id + ""), h.className = i.className ? typeof i.className == "string" ? i.className.split(/\s+/) : i.className : [], s = i.start || i.date, e = i.end, cr(s) && (s = t.duration(s)), cr(e) && (e = t.duration(e)), i.dow || t.isDuration(s) || t.isDuration(e)) h.start = s ? t.duration(s) : null, h.end = e ? t.duration(e) : null, h._recurring = !0;
            else {
                if (s && (s = u.moment(s), !s.isValid())) return !1;
                e && (e = u.moment(e), e.isValid() || (e = null));
                c = i.allDay;
                c === undefined && (c = o(f ? f.allDayDefault : undefined, r.allDayDefault));
                rt(s, e, c, h)
            }
            return h
        }

        function rt(n, t, i, r) {
            r.start = n;
            r.end = t;
            r.allDay = i;
            a(r);
            vi(r)
        }

        function a(n) {
            ut(n);
            n.end && !n.end.isAfter(n.start) && (n.end = null);
            n.end || (n.end = r.forceEventDuration ? u.getDefaultEventEnd(n.allDay, n.start) : null)
        }

        function ut(n) {
            n.allDay == null && (n.allDay = !(n.start.hasTime() || n.end && n.end.hasTime()));
            n.allDay ? (n.start.stripTime(), n.end && n.end.stripTime()) : (n.start.hasTime() || (n.start = u.applyTimezone(n.start.time(0))), n.end && !n.end.hasTime() && (n.end = u.applyTimezone(n.end.time(0))))
        }

        function v(t, i, r) {
            var a = [],
                f, v, e, u, o, c, l, y, p;
            if (i = i || s, r = r || h, t)
                if (t._recurring) {
                    if (v = t.dow)
                        for (f = {}, e = 0; e < v.length; e++) f[v[e]] = !0;
                    for (u = i.clone().stripTime(); u.isBefore(r);)(!f || f[u.day()]) && (o = t.start, c = t.end, l = u.clone(), y = null, o && (l = l.time(o)), c && (y = u.clone().time(c)), p = n.extend({}, t), rt(l, y, !o && !c, p), a.push(p)), u.add(1, "days")
                } else a.push(t);
            return a
        }

        function ft(t, i, r) {
            function v(n, t) {
                return r ? hr(n, t, r) : i.allDay ? uf(n, t) : sr(n, t)
            }
            var s = {},
                f, h, e, c, o, l;
            return i = i || {}, i.start || (i.start = t.start.clone()), i.end === undefined && (i.end = t.end ? t.end.clone() : null), i.allDay == null && (i.allDay = t.allDay), a(i), f = {
                start: t._start.clone(),
                end: t._end ? t._end.clone() : u.getDefaultEventEnd(t._allDay, t._start),
                allDay: i.allDay
            }, a(f), h = t._end !== null && i.end === null, e = v(i.start, f.start), i.end ? (c = v(i.end, f.end), o = c.subtract(e)) : o = null, n.each(i, function(n, t) {
                it(n) && t !== undefined && (s[n] = t)
            }), l = dt(b(t._id), h, i.allDay, e, o, s), {
                dateDelta: e,
                durationDelta: o,
                undo: l
            }
        }

        function dt(t, i, r, f, e, o) {
            var h = u.getIsAmbigTimezone(),
                s = [];
            return f && !f.valueOf() && (f = null), e && !e.valueOf() && (e = null), n.each(t, function(t, c) {
                    var v, l;
                    v = {
                        start: c.start.clone(),
                        end: c.end ? c.end.clone() : null,
                        allDay: c.allDay
                    };
                    n.each(o, function(n) {
                        v[n] = c[n]
                    });
                    l = {
                        start: c._start,
                        end: c._end,
                        allDay: r
                    };
                    a(l);
                    i ? l.end = null : e && !l.end && (l.end = u.getDefaultEventEnd(l.allDay, l.start));
                    f && (l.start.add(f), l.end && l.end.add(f));
                    e && l.end.add(e);
                    h && !l.allDay && (f || e) && (l.start.stripZone(), l.end && l.end.stripZone());
                    n.extend(c, o, l);
                    vi(c);
                    s.push(function() {
                        n.extend(c, v);
                        vi(c)
                    })
                }),
                function() {
                    for (var n = 0; n < s.length; n++) s[n]()
                }
        }

        function et(t) {
            var f = r.businessHours,
                e = u.getView(),
                i;
            return (f && (i = n.extend({}, {
                className: "fc-nonbusiness",
                start: "09:00",
                end: "17:00",
                dow: [1, 2, 3, 4, 5],
                rendering: "inverse-background"
            }, typeof f == "object" ? f : {})), i) ? (t && (i.start = null, i.end = null), v(c(i), e.start, e.end)) : []
        }

        function ot(n, t) {
            var i = t.source || {},
                u = o(t.constraint, i.constraint, r.eventConstraint),
                f = o(t.overlap, i.overlap, r.eventOverlap);
            return ht(n, u, f, t)
        }

        function gt(t, i, r) {
            var f, u;
            return r && (f = n.extend({}, r, i), u = v(c(f))[0]), u ? ot(t, u) : st(t)
        }

        function st(n) {
            return ht(n, r.selectConstraint, r.selectOverlap)
        }

        function ht(n, t, i, r) {
            var h, c, l, f, e, s;
            if (t != null) {
                for (h = ni(t), c = !1, f = 0; f < h.length; f++)
                    if (ti(h[f], n)) {
                        c = !0;
                        break
                    }
                if (!c) return !1
            }
            for (l = u.getPeerEvents(n, r), f = 0; f < l.length; f++)
                if (e = l[f], ii(e, n) && (i === !1 || typeof i == "function" && !i(e, r) || r && ((s = o(e.overlap, (e.source || {}).overlap), s === !1) || typeof s == "function" && !s(r, e)))) return !1;
            return !0
        }

        function ni(n) {
            return n === "businessHours" ? et() : typeof n == "object" ? v(c(n)) : b(n)
        }

        function ti(n, t) {
            var i = n.start.clone().stripZone(),
                r = u.getEventEnd(n).stripZone();
            return t.start >= i && t.end <= r
        }

        function ii(n, t) {
            var i = n.start.clone().stripZone(),
                r = u.getEventEnd(n).stripZone();
            return t.start < r && t.end > i
        }
        var u = this;
        u.isFetchNeeded = lt;
        u.fetchEvents = at;
        u.addEventSource = vt;
        u.removeEventSource = yt;
        u.updateEvent = pt;
        u.renderEvent = bt;
        u.removeEvents = kt;
        u.clientEvents = b;
        u.mutateEvent = ft;
        u.normalizeEventDates = a;
        u.normalizeEventTimes = ut;
        var l = u.reportEvents,
            p = {
                events: []
            },
            e = [p],
            s, h, w = 0,
            y = 0,
            f = [];
        n.each((r.events ? [r.events] : []).concat(r.eventSources || []), function(n, t) {
            var i = g(t);
            i && e.push(i)
        });
        u.getBusinessHoursEvents = et;
        u.isEventSpanAllowed = ot;
        u.isExternalSpanAllowed = gt;
        u.isSelectionSpanAllowed = st;
        u.getEventCache = function() {
            return f
        }
    }

    function vi(n) {
        n._allDay = n.allDay;
        n._start = n.start.clone();
        n._end = n.end ? n.end.clone() : null
    }
    var i = n.fullCalendar = {
            version: "2.7.0",
            internalApiVersion: 3
        },
        a = i.views = {},
        yt, et, dt, st, lr, hi, kr, at, rt, fu, p, li, ut, ai, w, vu, yu;
    i.isTouch = "ontouchstart" in document;
    n.fn.fullCalendar = function(t) {
        var r = Array.prototype.slice.call(arguments, 1),
            i = this;
        return this.each(function(u, f) {
            var s = n(f),
                o = s.data("fullCalendar"),
                h;
            typeof t == "string" ? o && n.isFunction(o[t]) && (h = o[t].apply(o, r), u || (i = h), t === "destroy" && s.removeData("fullCalendar")) : o || (o = new e(s, t), s.data("fullCalendar", o), o.render())
        }), i
    };
    yt = ["header", "buttonText", "buttonIcons", "themeButtonIcons"];
    i.intersectRanges = kt;
    i.applyAll = ct;
    i.debounce = ui;
    i.isInt = v;
    i.htmlEscape = r;
    i.cssToStr = lt;
    i.proxy = tt;
    i.capitaliseFirstLetter = lf;
    i.getOuterRect = wt;
    i.getClientRect = nr;
    i.getContentRect = bu;
    i.getScrollbarWidths = bt;
    et = null;
    i.preventDefault = ot;
    i.intersectRects = rr;
    i.parseFieldSpecs = ur;
    i.compareByFieldSpecs = fr;
    i.compareByFieldSpec = er;
    i.flexibleCompare = or;
    i.computeIntervalUnit = gt;
    i.divideRangeByDuration = ef;
    i.divideDurationByDuration = ni;
    i.multiplyDuration = of;
    i.durationHasTime = b;
    dt = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
    st = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    i.log = function() {
        var n = window.console;
        if (n && n.log) return n.log.apply(n, arguments)
    };
    i.warn = function() {
        var n = window.console;
        return n && n.warn ? n.warn.apply(n, arguments) : i.log.apply(i, arguments)
    };
    lr = {}.hasOwnProperty;
    var vf = /^\s*\d{4}-\d\d$/,
        yf = /^\s*\d{4}-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?)?$/,
        u = t.fn,
        f = n.extend({}, u),
        fi, ei, vr;
    i.moment = function() {
        return oi(arguments)
    };
    i.moment.utc = function() {
        var n = oi(arguments, !0);
        return n.hasTime() && n.utc(), n
    };
    i.moment.parseZone = function() {
        return oi(arguments, !0, !0)
    };
    u.clone = function() {
        var n = f.clone.apply(this, arguments);
        return yr(this, n), this._fullCalendar && (n._fullCalendar = !0), n
    };
    u.week = u.weeks = function(n) {
        var t = (this._locale || this._lang)._fullCalendar_weekCalc;
        return n == null && typeof t == "function" ? t(this) : t === "ISO" ? f.isoWeek.apply(this, arguments) : f.week.apply(this, arguments)
    };
    u.time = function(n) {
        if (!this._fullCalendar) return f.time.apply(this, arguments);
        if (n == null) return t.duration({
            hours: this.hours(),
            minutes: this.minutes(),
            seconds: this.seconds(),
            milliseconds: this.milliseconds()
        });
        this._ambigTime = !1;
        t.isDuration(n) || t.isMoment(n) || (n = t.duration(n));
        var i = 0;
        return t.isDuration(n) && (i = Math.floor(n.asDays()) * 24), this.hours(i + n.hours()).minutes(n.minutes()).seconds(n.seconds()).milliseconds(n.milliseconds())
    };
    u.stripTime = function() {
        var n;
        return this._ambigTime || (n = this.toArray(), this.utc(), ei(this, n.slice(0, 3)), this._ambigTime = !0, this._ambigZone = !0), this
    };
    u.hasTime = function() {
        return !this._ambigTime
    };
    u.stripZone = function() {
        var n, t;
        return this._ambigZone || (n = this.toArray(), t = this._ambigTime, this.utc(), ei(this, n), this._ambigTime = t || !1, this._ambigZone = !0), this
    };
    u.hasZone = function() {
        return !this._ambigZone
    };
    u.local = function() {
        var n = this.toArray(),
            t = this._ambigZone;
        return f.local.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, t && vr(this, n), this
    };
    u.utc = function() {
        return f.utc.apply(this, arguments), this._ambigTime = !1, this._ambigZone = !1, this
    };
    n.each(["zone", "utcOffset"], function(n, t) {
        f[t] && (u[t] = function(n) {
            return n != null && (this._ambigTime = !1, this._ambigZone = !1), f[t].apply(this, arguments)
        })
    });
    u.format = function() {
        return this._fullCalendar && arguments[0] ? pf(this, arguments[0]) : this._ambigTime ? y(this, "YYYY-MM-DD") : this._ambigZone ? y(this, "YYYY-MM-DD[T]HH:mm:ss") : f.format.apply(this, arguments)
    };
    u.toISOString = function() {
        return this._ambigTime ? y(this, "YYYY-MM-DD") : this._ambigZone ? y(this, "YYYY-MM-DD[T]HH:mm:ss") : f.toISOString.apply(this, arguments)
    };
    u.isWithin = function(n, t) {
        var i = si([this, n, t]);
        return i[0] >= i[1] && i[0] < i[2]
    };
    u.isSame = function(n, t) {
        var r;
        return this._fullCalendar ? t ? (r = si([this, n], !0), f.isSame.call(r[0], r[1], t)) : (n = i.moment.parseZone(n), f.isSame.call(this, n) && Boolean(this._ambigTime) === Boolean(n._ambigTime) && Boolean(this._ambigZone) === Boolean(n._ambigZone)) : f.isSame.apply(this, arguments)
    };
    n.each(["isBefore", "isAfter"], function(n, t) {
        u[t] = function(n, i) {
            var r;
            return this._fullCalendar ? (r = si([this, n]), f[t].call(r[0], r[1], i)) : f[t].apply(this, arguments)
        }
    });
    fi = "_d" in t() && "updateOffset" in t;
    ei = fi ? function(n, i) {
        n._d.setTime(Date.UTC.apply(Date, i));
        t.updateOffset(n, !1)
    } : pr;
    vr = fi ? function(n, i) {
        n._d.setTime(+new Date(i[0] || 0, i[1] || 0, i[2] || 0, i[3] || 0, i[4] || 0, i[5] || 0, i[6] || 0));
        t.updateOffset(n, !1)
    } : pr;
    hi = {
        t: function(n) {
            return y(n, "a").charAt(0)
        },
        T: function(n) {
            return y(n, "A").charAt(0)
        }
    };
    i.formatRange = br;
    kr = {
        Y: "year",
        M: "month",
        D: "day",
        d: "day",
        A: "second",
        a: "second",
        T: "second",
        t: "second",
        H: "second",
        h: "second",
        m: "second",
        s: "second"
    };
    at = {};
    i.Class = s;
    s.extend = function() {
        for (var i = arguments.length, t, n = 0; n < i; n++) t = arguments[n], n < i - 1 && tu(this, t);
        return bf(this, t || {})
    };
    s.mixin = function(n) {
        tu(this, n)
    };
    var iu = i.EmitterMixin = {
            callbackHash: null,
            on: function(n, t) {
                return this.loopCallbacks(n, "add", [t]), this
            },
            off: function(n, t) {
                return this.loopCallbacks(n, "remove", [t]), this
            },
            trigger: function(n) {
                var t = Array.prototype.slice.call(arguments, 1);
                return this.triggerWith(n, this, t), this
            },
            triggerWith: function(n, t, i) {
                return this.loopCallbacks(n, "fireWith", [t, i]), this
            },
            loopCallbacks: function(n, t, i) {
                for (var e = n.split("."), u, f, r = 0; r < e.length; r++) u = e[r], u && (f = this.ensureCallbackObj((r ? "." : "") + u), f[t].apply(f, i))
            },
            ensureCallbackObj: function(t) {
                return this.callbackHash || (this.callbackHash = {}), this.callbackHash[t] || (this.callbackHash[t] = n.Callbacks()), this.callbackHash[t]
            }
        },
        it = i.ListenerMixin = function() {
            var t = 0;
            return {
                listenerId: null,
                listenTo: function(t, i, r) {
                    if (typeof i == "object")
                        for (var u in i) i.hasOwnProperty(u) && this.listenTo(t, u, i[u]);
                    else if (typeof i == "string") t.on(i + "." + this.getListenerNamespace(), n.proxy(r, this))
                },
                stopListeningTo: function(n, t) {
                    n.off((t || "") + "." + this.getListenerNamespace())
                },
                getListenerNamespace: function() {
                    return this.listenerId == null && (this.listenerId = t++), "_listener" + this.listenerId
                }
            }
        }(),
        kf = s.extend(it, {
            isHidden: !0,
            options: null,
            el: null,
            margin: 10,
            constructor: function(n) {
                this.options = n || {}
            },
            show: function() {
                this.isHidden && (this.el || this.render(), this.el.show(), this.position(), this.isHidden = !1, this.trigger("show"))
            },
            hide: function() {
                this.isHidden || (this.el.hide(), this.isHidden = !0, this.trigger("hide"))
            },
            render: function() {
                var i = this,
                    t = this.options;
                this.el = n('<div class="fc-popover"/>').addClass(t.className || "").css({
                    top: 0,
                    left: 0
                }).append(t.content).appendTo(t.parentEl);
                this.el.on("click", ".fc-close", function() {
                    i.hide()
                });
                t.autoHide && this.listenTo(n(document), "mousedown", this.documentMousedown)
            },
            documentMousedown: function(t) {
                this.el && !n(t.target).closest(this.el).length && this.hide()
            },
            removeElement: function() {
                this.hide();
                this.el && (this.el.remove(), this.el = null);
                this.stopListeningTo(n(document), "mousedown")
            },
            position: function() {
                var t = this.options,
                    h = this.el.offsetParent().offset(),
                    c = this.el.outerWidth(),
                    l = this.el.outerHeight(),
                    o = n(window),
                    i = pt(this.el),
                    f, e, s, r, u;
                r = t.top || 0;
                u = t.left !== undefined ? t.left : t.right !== undefined ? t.right - c : 0;
                i.is(window) || i.is(document) ? (i = o, f = 0, e = 0) : (s = i.offset(), f = s.top, e = s.left);
                f += o.scrollTop();
                e += o.scrollLeft();
                t.viewportConstrain !== !1 && (r = Math.min(r, f + i.outerHeight() - l - this.margin), r = Math.max(r, f + this.margin), u = Math.min(u, e + i.outerWidth() - c - this.margin), u = Math.max(u, e + this.margin));
                this.el.css({
                    top: r - h.top,
                    left: u - h.left
                })
            },
            trigger: function(n) {
                this.options[n] && this.options[n].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        }),
        vt = i.CoordCache = s.extend({
            els: null,
            forcedOffsetParentEl: null,
            origin: null,
            boundingRect: null,
            isHorizontal: !1,
            isVertical: !1,
            lefts: null,
            rights: null,
            tops: null,
            bottoms: null,
            constructor: function(t) {
                this.els = n(t.els);
                this.isHorizontal = t.isHorizontal;
                this.isVertical = t.isVertical;
                this.forcedOffsetParentEl = t.offsetParent ? n(t.offsetParent) : null
            },
            build: function() {
                var n = this.forcedOffsetParentEl || this.els.eq(0).offsetParent();
                this.origin = n.offset();
                this.boundingRect = this.queryBoundingRect();
                this.isHorizontal && this.buildElHorizontals();
                this.isVertical && this.buildElVerticals()
            },
            clear: function() {
                this.origin = null;
                this.boundingRect = null;
                this.lefts = null;
                this.rights = null;
                this.tops = null;
                this.bottoms = null
            },
            ensureBuilt: function() {
                this.origin || this.build()
            },
            queryBoundingRect: function() {
                var n = pt(this.els.eq(0));
                if (!n.is(document)) return nr(n)
            },
            buildElHorizontals: function() {
                var t = [],
                    i = [];
                this.els.each(function(r, u) {
                    var f = n(u),
                        e = f.offset().left,
                        o = f.outerWidth();
                    t.push(e);
                    i.push(e + o)
                });
                this.lefts = t;
                this.rights = i
            },
            buildElVerticals: function() {
                var t = [],
                    i = [];
                this.els.each(function(r, u) {
                    var f = n(u),
                        e = f.offset().top,
                        o = f.outerHeight();
                    t.push(e);
                    i.push(e + o)
                });
                this.tops = t;
                this.bottoms = i
            },
            getHorizontalIndex: function(n) {
                this.ensureBuilt();
                var i = this.boundingRect,
                    r = this.lefts,
                    u = this.rights,
                    f = r.length,
                    t;
                if (!i || n >= i.left && n < i.right)
                    for (t = 0; t < f; t++)
                        if (n >= r[t] && n < u[t]) return t
            },
            getVerticalIndex: function(n) {
                this.ensureBuilt();
                var i = this.boundingRect,
                    r = this.tops,
                    u = this.bottoms,
                    f = r.length,
                    t;
                if (!i || n >= i.top && n < i.bottom)
                    for (t = 0; t < f; t++)
                        if (n >= r[t] && n < u[t]) return t
            },
            getLeftOffset: function(n) {
                return this.ensureBuilt(), this.lefts[n]
            },
            getLeftPosition: function(n) {
                return this.ensureBuilt(), this.lefts[n] - this.origin.left
            },
            getRightOffset: function(n) {
                return this.ensureBuilt(), this.rights[n]
            },
            getRightPosition: function(n) {
                return this.ensureBuilt(), this.rights[n] - this.origin.left
            },
            getWidth: function(n) {
                return this.ensureBuilt(), this.rights[n] - this.lefts[n]
            },
            getTopOffset: function(n) {
                return this.ensureBuilt(), this.tops[n]
            },
            getTopPosition: function(n) {
                return this.ensureBuilt(), this.tops[n] - this.origin.top
            },
            getBottomOffset: function(n) {
                return this.ensureBuilt(), this.bottoms[n]
            },
            getBottomPosition: function(n) {
                return this.ensureBuilt(), this.bottoms[n] - this.origin.top
            },
            getHeight: function(n) {
                return this.ensureBuilt(), this.bottoms[n] - this.tops[n]
            }
        }),
        h = i.DragListener = s.extend(it, {
            options: null,
            subjectEl: null,
            subjectHref: null,
            originX: null,
            originY: null,
            scrollEl: null,
            isInteracting: !1,
            isDistanceSurpassed: !1,
            isDelayEnded: !1,
            isDragging: !1,
            isTouch: !1,
            delay: null,
            delayTimeoutId: null,
            minDistance: null,
            constructor: function(n) {
                this.options = n || {}
            },
            startInteraction: function(t, i) {
                var r = ir(t);
                if (t.type === "mousedown")
                    if (tr(t)) t.preventDefault();
                    else return;
                this.isInteracting || (i = i || {}, this.delay = o(i.delay, this.options.delay, 0), this.minDistance = o(i.distance, this.options.distance, 0), this.subjectEl = this.options.subjectEl, this.isInteracting = !0, this.isTouch = r, this.isDelayEnded = !1, this.isDistanceSurpassed = !1, this.originX = c(t), this.originY = l(t), this.scrollEl = pt(n(t.target)), this.bindHandlers(), this.initAutoScroll(), this.handleInteractionStart(t), this.startDelay(t), this.minDistance || this.handleDistanceSurpassed(t))
            },
            handleInteractionStart: function(n) {
                this.trigger("interactionStart", n)
            },
            endInteraction: function(n) {
                this.isInteracting && (this.endDrag(n), this.delayTimeoutId && (clearTimeout(this.delayTimeoutId), this.delayTimeoutId = null), this.destroyAutoScroll(), this.unbindHandlers(), this.isInteracting = !1, this.handleInteractionEnd(n))
            },
            handleInteractionEnd: function(n) {
                this.trigger("interactionEnd", n)
            },
            bindHandlers: function() {
                var i = this,
                    t = 1;
                this.isTouch ? (this.listenTo(n(document), {
                    touchmove: this.handleTouchMove,
                    touchend: this.endInteraction,
                    touchcancel: this.endInteraction,
                    touchstart: function(n) {
                        t ? t-- : i.endInteraction(n)
                    }
                }), this.scrollEl && this.listenTo(this.scrollEl, "scroll", this.handleTouchScroll)) : this.listenTo(n(document), {
                    mousemove: this.handleMouseMove,
                    mouseup: this.endInteraction
                });
                this.listenTo(n(document), {
                    selectstart: ot,
                    contextmenu: ot
                })
            },
            unbindHandlers: function() {
                this.stopListeningTo(n(document));
                this.scrollEl && this.stopListeningTo(this.scrollEl)
            },
            startDrag: function(n, t) {
                this.startInteraction(n, t);
                this.isDragging || (this.isDragging = !0, this.handleDragStart(n))
            },
            handleDragStart: function(n) {
                this.trigger("dragStart", n);
                this.initHrefHack()
            },
            handleMove: function(n) {
                var t = c(n) - this.originX,
                    i = l(n) - this.originY,
                    r = this.minDistance,
                    u;
                this.isDistanceSurpassed || (u = t * t + i * i, u >= r * r && this.handleDistanceSurpassed(n));
                this.isDragging && this.handleDrag(t, i, n)
            },
            handleDrag: function(n, t, i) {
                this.trigger("drag", n, t, i);
                this.updateAutoScroll(i)
            },
            endDrag: function(n) {
                this.isDragging && (this.isDragging = !1, this.handleDragEnd(n))
            },
            handleDragEnd: function(n) {
                this.trigger("dragEnd", n);
                this.destroyHrefHack()
            },
            startDelay: function(n) {
                var t = this;
                this.delay ? this.delayTimeoutId = setTimeout(function() {
                    t.handleDelayEnd(n)
                }, this.delay) : this.handleDelayEnd(n)
            },
            handleDelayEnd: function(n) {
                this.isDelayEnded = !0;
                this.isDistanceSurpassed && this.startDrag(n)
            },
            handleDistanceSurpassed: function(n) {
                this.isDistanceSurpassed = !0;
                this.isDelayEnded && this.startDrag(n)
            },
            handleTouchMove: function(n) {
                this.isDragging && n.preventDefault();
                this.handleMove(n)
            },
            handleMouseMove: function(n) {
                this.handleMove(n)
            },
            handleTouchScroll: function(n) {
                this.isDragging || this.endInteraction(n)
            },
            initHrefHack: function() {
                var n = this.subjectEl;
                (this.subjectHref = n ? n.attr("href") : null) && n.removeAttr("href")
            },
            destroyHrefHack: function() {
                var t = this.subjectEl,
                    n = this.subjectHref;
                setTimeout(function() {
                    n && t.attr("href", n)
                }, 0)
            },
            trigger: function(n) {
                this.options[n] && this.options[n].apply(this, Array.prototype.slice.call(arguments, 1));
                this["_" + n] && this["_" + n].apply(this, Array.prototype.slice.call(arguments, 1))
            }
        });
    h.mixin({
        isAutoScroll: !1,
        scrollBounds: null,
        scrollTopVel: null,
        scrollLeftVel: null,
        scrollIntervalId: null,
        scrollSensitivity: 30,
        scrollSpeed: 200,
        scrollIntervalMs: 50,
        initAutoScroll: function() {
            var n = this.scrollEl;
            this.isAutoScroll = this.options.scroll && n && !n.is(window) && !n.is(document);
            this.isAutoScroll && this.listenTo(n, "scroll", ui(this.handleDebouncedScroll, 100))
        },
        destroyAutoScroll: function() {
            this.endAutoScroll();
            this.isAutoScroll && this.stopListeningTo(this.scrollEl, "scroll")
        },
        computeScrollBounds: function() {
            this.isAutoScroll && (this.scrollBounds = wt(this.scrollEl))
        },
        updateAutoScroll: function(n) {
            var t = this.scrollSensitivity,
                i = this.scrollBounds,
                r, u, f, e, o = 0,
                s = 0;
            i && (r = (t - (l(n) - i.top)) / t, u = (t - (i.bottom - l(n))) / t, f = (t - (c(n) - i.left)) / t, e = (t - (i.right - c(n))) / t, r >= 0 && r <= 1 ? o = r * this.scrollSpeed * -1 : u >= 0 && u <= 1 && (o = u * this.scrollSpeed), f >= 0 && f <= 1 ? s = f * this.scrollSpeed * -1 : e >= 0 && e <= 1 && (s = e * this.scrollSpeed));
            this.setScrollVel(o, s)
        },
        setScrollVel: function(n, t) {
            this.scrollTopVel = n;
            this.scrollLeftVel = t;
            this.constrainScrollVel();
            (this.scrollTopVel || this.scrollLeftVel) && !this.scrollIntervalId && (this.scrollIntervalId = setInterval(tt(this, "scrollIntervalFunc"), this.scrollIntervalMs))
        },
        constrainScrollVel: function() {
            var n = this.scrollEl;
            this.scrollTopVel < 0 ? n.scrollTop() <= 0 && (this.scrollTopVel = 0) : this.scrollTopVel > 0 && n.scrollTop() + n[0].clientHeight >= n[0].scrollHeight && (this.scrollTopVel = 0);
            this.scrollLeftVel < 0 ? n.scrollLeft() <= 0 && (this.scrollLeftVel = 0) : this.scrollLeftVel > 0 && n.scrollLeft() + n[0].clientWidth >= n[0].scrollWidth && (this.scrollLeftVel = 0)
        },
        scrollIntervalFunc: function() {
            var n = this.scrollEl,
                t = this.scrollIntervalMs / 1e3;
            this.scrollTopVel && n.scrollTop(n.scrollTop() + this.scrollTopVel * t);
            this.scrollLeftVel && n.scrollLeft(n.scrollLeft() + this.scrollLeftVel * t);
            this.constrainScrollVel();
            this.scrollTopVel || this.scrollLeftVel || this.endAutoScroll()
        },
        endAutoScroll: function() {
            this.scrollIntervalId && (clearInterval(this.scrollIntervalId), this.scrollIntervalId = null, this.handleScrollEnd())
        },
        handleDebouncedScroll: function() {
            this.scrollIntervalId || this.handleScrollEnd()
        },
        handleScrollEnd: function() {}
    });
    rt = h.extend({
        component: null,
        origHit: null,
        hit: null,
        coordAdjust: null,
        constructor: function(n, t) {
            h.call(this, t);
            this.component = n
        },
        handleInteractionStart: function(n) {
            var r = this.subjectEl,
                i, u, t;
            h.prototype.handleInteractionStart.apply(this, arguments);
            this.computeCoords();
            n ? (u = {
                left: c(n),
                top: l(n)
            }, t = u, r && (i = wt(r), t = nf(t, i)), this.origHit = this.queryHit(t.left, t.top), r && this.options.subjectCenter && (this.origHit && (i = rr(this.origHit, i) || i), t = tf(i)), this.coordAdjust = rf(t, u)) : (this.origHit = null, this.coordAdjust = null)
        },
        computeCoords: function() {
            this.component.prepareHits();
            this.computeScrollBounds()
        },
        handleDragStart: function(n) {
            var t;
            h.prototype.handleDragStart.apply(this, arguments);
            t = this.queryHit(c(n), l(n));
            t && this.handleHitOver(t)
        },
        handleDrag: function(n, t, i) {
            var r;
            h.prototype.handleDrag.apply(this, arguments);
            r = this.queryHit(c(i), l(i));
            ru(r, this.hit) || (this.hit && this.handleHitOut(), r && this.handleHitOver(r))
        },
        handleDragEnd: function() {
            this.handleHitDone();
            h.prototype.handleDragEnd.apply(this, arguments)
        },
        handleHitOver: function(n) {
            var t = ru(n, this.origHit);
            this.hit = n;
            this.trigger("hitOver", this.hit, t, this.origHit)
        },
        handleHitOut: function() {
            this.hit && (this.trigger("hitOut", this.hit), this.handleHitDone(), this.hit = null)
        },
        handleHitDone: function() {
            this.hit && this.trigger("hitDone", this.hit)
        },
        handleInteractionEnd: function() {
            h.prototype.handleInteractionEnd.apply(this, arguments);
            this.origHit = null;
            this.hit = null;
            this.component.releaseHits()
        },
        handleScrollEnd: function() {
            h.prototype.handleScrollEnd.apply(this, arguments);
            this.computeCoords()
        },
        queryHit: function(n, t) {
            return this.coordAdjust && (n += this.coordAdjust.left, t += this.coordAdjust.top), this.component.queryHit(n, t)
        }
    });
    fu = s.extend(it, {
        options: null,
        sourceEl: null,
        el: null,
        parentEl: null,
        top0: null,
        left0: null,
        y0: null,
        x0: null,
        topDelta: null,
        leftDelta: null,
        isFollowing: !1,
        isHidden: !1,
        isAnimating: !1,
        constructor: function(t, i) {
            this.options = i = i || {};
            this.sourceEl = t;
            this.parentEl = i.parentEl ? n(i.parentEl) : t.parent()
        },
        start: function(t) {
            this.isFollowing || (this.isFollowing = !0, this.y0 = l(t), this.x0 = c(t), this.topDelta = 0, this.leftDelta = 0, this.isHidden || this.updatePosition(), ir(t) ? this.listenTo(n(document), "touchmove", this.handleMove) : this.listenTo(n(document), "mousemove", this.handleMove))
        },
        stop: function(t, i) {
            function u() {
                this.isAnimating = !1;
                f.removeElement();
                this.top0 = this.left0 = null;
                i && i()
            }
            var f = this,
                r = this.options.revertDuration;
            this.isFollowing && !this.isAnimating && (this.isFollowing = !1, this.stopListeningTo(n(document)), t && r && !this.isHidden ? (this.isAnimating = !0, this.el.animate({
                top: this.top0,
                left: this.left0
            }, {
                duration: r,
                complete: u
            })) : u())
        },
        getEl: function() {
            var n = this.el;
            return n || (this.sourceEl.width(), n = this.el = this.sourceEl.clone().addClass(this.options.additionalClass || "").css({
                position: "absolute",
                visibility: "",
                display: this.isHidden ? "none" : "",
                margin: 0,
                right: "auto",
                bottom: "auto",
                width: this.sourceEl.width(),
                height: this.sourceEl.height(),
                opacity: this.options.opacity || "",
                zIndex: this.options.zIndex
            }), n.addClass("fc-unselectable"), n.appendTo(this.parentEl)), n
        },
        removeElement: function() {
            this.el && (this.el.remove(), this.el = null)
        },
        updatePosition: function() {
            var n, t;
            this.getEl();
            this.top0 === null && (this.sourceEl.width(), n = this.sourceEl.offset(), t = this.el.offsetParent().offset(), this.top0 = n.top - t.top, this.left0 = n.left - t.left);
            this.el.css({
                top: this.top0 + this.topDelta,
                left: this.left0 + this.leftDelta
            })
        },
        handleMove: function(n) {
            this.topDelta = l(n) - this.y0;
            this.leftDelta = c(n) - this.x0;
            this.isHidden || this.updatePosition()
        },
        hide: function() {
            this.isHidden || (this.isHidden = !0, this.el && this.el.hide())
        },
        show: function() {
            this.isHidden && (this.isHidden = !1, this.updatePosition(), this.getEl().show())
        }
    });
    p = i.Grid = s.extend(it, {
        view: null,
        isRTL: null,
        start: null,
        end: null,
        el: null,
        elsByFill: null,
        eventTimeFormat: null,
        displayEventTime: null,
        displayEventEnd: null,
        minResizeDuration: null,
        largeUnit: null,
        dayDragListener: null,
        segDragListener: null,
        segResizeListener: null,
        externalDragListener: null,
        constructor: function(n) {
            this.view = n;
            this.isRTL = n.opt("isRTL");
            this.elsByFill = {}
        },
        computeEventTimeFormat: function() {
            return this.view.opt("smallTimeFormat")
        },
        computeDisplayEventTime: function() {
            return !0
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        setRange: function(n) {
            this.start = n.start.clone();
            this.end = n.end.clone();
            this.rangeUpdated();
            this.processRangeOptions()
        },
        rangeUpdated: function() {},
        processRangeOptions: function() {
            var n = this.view,
                t, i;
            this.eventTimeFormat = n.opt("eventTimeFormat") || n.opt("timeFormat") || this.computeEventTimeFormat();
            t = n.opt("displayEventTime");
            t == null && (t = this.computeDisplayEventTime());
            i = n.opt("displayEventEnd");
            i == null && (i = this.computeDisplayEventEnd());
            this.displayEventTime = t;
            this.displayEventEnd = i
        },
        spanToSegs: function() {},
        diffDates: function(n, t) {
            return this.largeUnit ? hr(n, t, this.largeUnit) : sr(n, t)
        },
        prepareHits: function() {},
        releaseHits: function() {},
        queryHit: function() {},
        getHitSpan: function() {},
        getHitEl: function() {},
        setElement: function(n) {
            this.el = n;
            gu(n);
            this.view.calendar.isTouch ? this.bindDayHandler("touchstart", this.dayTouchStart) : this.bindDayHandler("mousedown", this.dayMousedown);
            this.bindSegHandlers();
            this.bindGlobalHandlers()
        },
        bindDayHandler: function(t, i) {
            var r = this;
            this.el.on(t, function(t) {
                if (!n(t.target).is(".fc-event-container *, .fc-more") && !n(t.target).closest(".fc-popover").length) return i.call(r, t)
            })
        },
        removeElement: function() {
            this.unbindGlobalHandlers();
            this.clearDragListeners();
            this.el.remove()
        },
        renderSkeleton: function() {},
        renderDates: function() {},
        unrenderDates: function() {},
        bindGlobalHandlers: function() {
            this.listenTo(n(document), {
                dragstart: this.externalDragStart,
                sortstart: this.externalDragStart
            })
        },
        unbindGlobalHandlers: function() {
            this.stopListeningTo(n(document))
        },
        dayMousedown: function(n) {
            this.clearDragListeners();
            this.buildDayDragListener().startInteraction(n, {})
        },
        dayTouchStart: function(n) {
            this.clearDragListeners();
            this.buildDayDragListener().startInteraction(n, {
                delay: this.view.opt("longPressDelay")
            })
        },
        buildDayDragListener: function() {
            var n = this,
                i = this.view,
                u = i.opt("selectable"),
                r, t;
            return this.dayDragListener = new rt(this, {
                scroll: i.opt("dragScroll"),
                dragStart: function() {
                    i.unselect()
                },
                hitOver: function(i, f, e) {
                    e && (r = f ? i : null, u && (t = n.computeSelection(n.getHitSpan(e), n.getHitSpan(i)), t ? n.renderSelection(t) : t === !1 && ft()))
                },
                hitOut: function() {
                    r = null;
                    t = null;
                    n.unrenderSelection();
                    nt()
                },
                interactionEnd: function(u) {
                    r && i.triggerDayClick(n.getHitSpan(r), n.getHitEl(r), u);
                    t && i.reportSelection(t, u);
                    nt();
                    n.dayDragListener = null
                }
            })
        },
        clearDragListeners: function() {
            this.dayDragListener && this.dayDragListener.endInteraction();
            this.segDragListener && this.segDragListener.endInteraction();
            this.segResizeListener && this.segResizeListener.endInteraction();
            this.externalDragListener && this.externalDragListener.endInteraction()
        },
        renderEventLocationHelper: function(n, t) {
            var i = this.fabricateHelperEvent(n, t);
            return this.renderHelper(i, t)
        },
        fabricateHelperEvent: function(n, t) {
            var i = t ? ht(t.event) : {};
            return i.start = n.start.clone(), i.end = n.end ? n.end.clone() : null, i.allDay = null, this.view.calendar.normalizeEventDates(i), i.className = (i.className || []).concat("fc-helper"), t || (i.editable = !1), i
        },
        renderHelper: function() {},
        unrenderHelper: function() {},
        renderSelection: function(n) {
            this.renderHighlight(n)
        },
        unrenderSelection: function() {
            this.unrenderHighlight()
        },
        computeSelection: function(n, t) {
            var i = this.computeSelectionSpan(n, t);
            return i && !this.view.calendar.isSelectionSpanAllowed(i) ? !1 : i
        },
        computeSelectionSpan: function(n, t) {
            var i = [n.start, n.end, t.start, t.end];
            return i.sort(af), {
                start: i[0].clone(),
                end: i[3].clone()
            }
        },
        renderHighlight: function(n) {
            this.renderFill("highlight", this.spanToSegs(n))
        },
        unrenderHighlight: function() {
            this.unrenderFill("highlight")
        },
        highlightSegClasses: function() {
            return ["fc-highlight"]
        },
        renderBusinessHours: function() {},
        unrenderBusinessHours: function() {},
        getNowIndicatorUnit: function() {},
        renderNowIndicator: function() {},
        unrenderNowIndicator: function() {},
        renderFill: function() {},
        unrenderFill: function(n) {
            var t = this.elsByFill[n];
            t && (t.remove(), delete this.elsByFill[n])
        },
        renderFillSegEls: function(t, i) {
            var u = this,
                f = this[t + "SegEl"],
                e = "",
                o = [],
                r;
            if (i.length) {
                for (r = 0; r < i.length; r++) e += this.fillSegHtml(t, i[r]);
                n(e).each(function(t, r) {
                    var s = i[t],
                        e = n(r);
                    f && (e = f.call(u, s, e));
                    e && (e = n(e), e.is(u.fillSegTag) && (s.el = e, o.push(s)))
                })
            }
            return o
        },
        fillSegTag: "div",
        fillSegHtml: function(n, t) {
            var i = this[n + "SegClasses"],
                r = this[n + "SegCss"],
                u = i ? i.call(this, t) : [],
                f = lt(r ? r.call(this, t) : {});
            return "<" + this.fillSegTag + (u.length ? ' class="' + u.join(" ") + '"' : "") + (f ? ' style="' + f + '"' : "") + " />"
        },
        getDayClasses: function(n) {
            var i = this.view,
                r = i.calendar.getNow(),
                t = ["fc-" + dt[n.day()]];
            return i.intervalDuration.as("months") == 1 && n.month() != i.intervalStart.month() && t.push("fc-other-month"), n.isSame(r, "day") ? t.push("fc-today", i.highlightStateClass) : n < r ? t.push("fc-past") : t.push("fc-future"), t
        }
    });
    p.mixin({
        mousedOverSeg: null,
        isDraggingSeg: !1,
        isResizingSeg: !1,
        isDraggingExternal: !1,
        segs: null,
        renderEvents: function(n) {
            for (var i = [], r = [], t = 0; t < n.length; t++)(eu(n[t]) ? i : r).push(n[t]);
            this.segs = [].concat(this.renderBgEvents(i), this.renderFgEvents(r))
        },
        renderBgEvents: function(n) {
            var t = this.eventsToSegs(n);
            return this.renderBgSegs(t) || t
        },
        renderFgEvents: function(n) {
            var t = this.eventsToSegs(n);
            return this.renderFgSegs(t) || t
        },
        unrenderEvents: function() {
            this.handleSegMouseout();
            this.clearDragListeners();
            this.unrenderFgSegs();
            this.unrenderBgSegs();
            this.segs = null
        },
        getEventSegs: function() {
            return this.segs || []
        },
        renderFgSegs: function() {},
        unrenderFgSegs: function() {},
        renderFgSegEls: function(t, i) {
            var e = this.view,
                u = "",
                f = [],
                r;
            if (t.length) {
                for (r = 0; r < t.length; r++) u += this.fgSegHtml(t[r], i);
                n(u).each(function(i, r) {
                    var u = t[i],
                        o = e.resolveEventEl(u.event, n(r));
                    o && (o.data("fc-seg", u), u.el = o, f.push(u))
                })
            }
            return f
        },
        fgSegHtml: function() {},
        renderBgSegs: function(n) {
            return this.renderFill("bgEvent", n)
        },
        unrenderBgSegs: function() {
            this.unrenderFill("bgEvent")
        },
        bgEventSegEl: function(n, t) {
            return this.view.resolveEventEl(n.event, t)
        },
        bgEventSegClasses: function(n) {
            var t = n.event,
                i = t.source || {};
            return ["fc-bgevent"].concat(t.className, i.className || [])
        },
        bgEventSegCss: function(n) {
            return {
                "background-color": this.getSegSkinCss(n)["background-color"]
            }
        },
        businessHoursSegClasses: function() {
            return ["fc-nonbusiness", "fc-bgevent"]
        },
        bindSegHandlers: function() {
            this.view.calendar.isTouch ? this.bindSegHandler("touchstart", this.handleSegTouchStart) : (this.bindSegHandler("mouseenter", this.handleSegMouseover), this.bindSegHandler("mouseleave", this.handleSegMouseout), this.bindSegHandler("mousedown", this.handleSegMousedown));
            this.bindSegHandler("click", this.handleSegClick)
        },
        bindSegHandler: function(t, i) {
            var r = this;
            this.el.on(t, ".fc-event-container > *", function(t) {
                var u = n(this).data("fc-seg");
                if (u && !r.isDraggingSeg && !r.isResizingSeg) return i.call(r, u, t)
            })
        },
        handleSegClick: function(n, t) {
            return this.view.trigger("eventClick", n.el[0], n.event, t)
        },
        handleSegMouseover: function(n, t) {
            this.mousedOverSeg || (this.mousedOverSeg = n, this.view.trigger("eventMouseover", n.el[0], n.event, t))
        },
        handleSegMouseout: function(n, t) {
            t = t || {};
            this.mousedOverSeg && (n = n || this.mousedOverSeg, this.mousedOverSeg = null, this.view.trigger("eventMouseout", n.el[0], n.event, t))
        },
        handleSegTouchStart: function(n, t) {
            var i = this.view,
                r = n.event,
                u = i.isEventSelected(r),
                e = i.isEventDraggable(r),
                o = i.isEventResizable(r),
                s = !1,
                f;
            u && o && (s = this.startSegResize(n, t));
            !s && (e || o) && (this.clearDragListeners(), f = e ? this.buildSegDragListener(n) : new h, f._dragStart = function() {
                u || i.selectEvent(r)
            }, f.startInteraction(t, {
                delay: u ? 0 : this.view.opt("longPressDelay")
            }))
        },
        handleSegMousedown: function(n, t) {
            var i = this.startSegResize(n, t, {
                distance: 5
            });
            !i && this.view.isEventDraggable(n.event) && (this.clearDragListeners(), this.buildSegDragListener(n).startInteraction(t, {
                distance: 5
            }))
        },
        startSegResize: function(t, i, r) {
            return n(i.target).is(".fc-resizer") ? (this.clearDragListeners(), this.buildSegResizeListener(t, n(i.target).is(".fc-start-resizer")).startInteraction(i, r), !0) : !1
        },
        buildSegDragListener: function(n) {
            var r = this,
                t = this.view,
                h = t.calendar,
                s = n.el,
                f = n.event,
                e, u, i, o = this.segDragListener = new rt(t, {
                    scroll: t.opt("dragScroll"),
                    subjectEl: s,
                    subjectCenter: !0,
                    interactionStart: function(i) {
                        e = !1;
                        u = new fu(n.el, {
                            additionalClass: "fc-dragging",
                            parentEl: t.el,
                            opacity: o.isTouch ? null : t.opt("dragOpacity"),
                            revertDuration: t.opt("dragRevertDuration"),
                            zIndex: 2
                        });
                        u.hide();
                        u.start(i)
                    },
                    dragStart: function(i) {
                        e = !0;
                        r.handleSegMouseout(n, i);
                        r.segDragStart(n, i);
                        t.hideEvent(f)
                    },
                    hitOver: function(e, s, c) {
                        var l;
                        n.hit && (c = n.hit);
                        i = r.computeEventDrop(c.component.getHitSpan(c), e.component.getHitSpan(e), f);
                        i && !h.isEventSpanAllowed(r.eventToSpan(i), f) && (ft(), i = null);
                        i && (l = t.renderDrag(i, n)) ? (l.addClass("fc-dragging"), o.isTouch || r.applyDragOpacity(l), u.hide()) : u.show();
                        s && (i = null)
                    },
                    hitOut: function() {
                        t.unrenderDrag();
                        u.show();
                        i = null
                    },
                    hitDone: function() {
                        nt()
                    },
                    interactionEnd: function(o) {
                        u.stop(!i, function() {
                            e && (t.unrenderDrag(), t.showEvent(f), r.segDragStop(n, o));
                            i && t.reportEventDrop(f, i, this.largeUnit, s, o)
                        });
                        r.segDragListener = null
                    }
                });
            return o
        },
        segDragStart: function(n, t) {
            this.isDraggingSeg = !0;
            this.view.trigger("eventDragStart", n.el[0], n.event, t, {})
        },
        segDragStop: function(n, t) {
            this.isDraggingSeg = !1;
            this.view.trigger("eventDragStop", n.el[0], n.event, t, {})
        },
        computeEventDrop: function(n, t, i) {
            var e = this.view.calendar,
                o = n.start,
                u = t.start,
                f, r;
            return o.hasTime() === u.hasTime() ? (f = this.diffDates(u, o), i.allDay && b(f) ? (r = {
                start: i.start.clone(),
                end: e.getEventEnd(i),
                allDay: !1
            }, e.normalizeEventTimes(r)) : r = {
                start: i.start.clone(),
                end: i.end ? i.end.clone() : null,
                allDay: i.allDay
            }, r.start.add(f), r.end && r.end.add(f)) : r = {
                start: u.clone(),
                end: null,
                allDay: !u.hasTime()
            }, r
        },
        applyDragOpacity: function(n) {
            var t = this.view.opt("dragOpacity");
            t != null && n.each(function(n, i) {
                i.style.opacity = t
            })
        },
        externalDragStart: function(t, i) {
            var f = this.view,
                r, u;
            f.opt("droppable") && (r = n((i ? i.item : null) || t.target), u = f.opt("dropAccept"), (n.isFunction(u) ? u.call(r[0], r) : r.is(u)) && (this.isDraggingExternal || this.listenToExternalDrag(r, t, i)))
        },
        listenToExternalDrag: function(n, t, i) {
            var u = this,
                e = this.view.calendar,
                f = te(n),
                r, o = u.externalDragListener = new rt(this, {
                    interactionStart: function() {
                        u.isDraggingExternal = !0
                    },
                    hitOver: function(n) {
                        r = u.computeExternalDrop(n.component.getHitSpan(n), f);
                        r && !e.isExternalSpanAllowed(u.eventToSpan(r), r, f.eventProps) && (ft(), r = null);
                        r && u.renderDrag(r)
                    },
                    hitOut: function() {
                        r = null
                    },
                    hitDone: function() {
                        nt();
                        u.unrenderDrag()
                    },
                    interactionEnd: function(t) {
                        r && u.view.reportExternalDrop(f, r, n, t, i);
                        u.isDraggingExternal = !1;
                        u.externalDragListener = null
                    }
                });
            o.startDrag(t)
        },
        computeExternalDrop: function(n, t) {
            var r = this.view.calendar,
                i = {
                    start: r.applyTimezone(n.start),
                    end: null
                };
            return t.startTime && !i.start.hasTime() && i.start.time(t.startTime), t.duration && (i.end = i.start.clone().add(t.duration)), i
        },
        renderDrag: function() {},
        unrenderDrag: function() {},
        buildSegResizeListener: function(n, t) {
            var r = this,
                f = this.view,
                o = f.calendar,
                s = n.el,
                u = n.event,
                h = o.getEventEnd(u),
                e, i;
            return this.segResizeListener = new rt(this, {
                scroll: f.opt("dragScroll"),
                subjectEl: s,
                interactionStart: function() {
                    e = !1
                },
                dragStart: function(t) {
                    e = !0;
                    r.handleSegMouseout(n, t);
                    r.segResizeStart(n, t)
                },
                hitOver: function(e, s, c) {
                    var l = r.getHitSpan(c),
                        a = r.getHitSpan(e);
                    i = t ? r.computeEventStartResize(l, a, u) : r.computeEventEndResize(l, a, u);
                    i && (o.isEventSpanAllowed(r.eventToSpan(i), u) ? i.start.isSame(u.start) && i.end.isSame(h) && (i = null) : (ft(), i = null));
                    i && (f.hideEvent(u), r.renderEventResize(i, n))
                },
                hitOut: function() {
                    i = null
                },
                hitDone: function() {
                    r.unrenderEventResize();
                    f.showEvent(u);
                    nt()
                },
                interactionEnd: function(t) {
                    e && r.segResizeStop(n, t);
                    i && f.reportEventResize(u, i, this.largeUnit, s, t);
                    r.segResizeListener = null
                }
            })
        },
        segResizeStart: function(n, t) {
            this.isResizingSeg = !0;
            this.view.trigger("eventResizeStart", n.el[0], n.event, t, {})
        },
        segResizeStop: function(n, t) {
            this.isResizingSeg = !1;
            this.view.trigger("eventResizeStop", n.el[0], n.event, t, {})
        },
        computeEventStartResize: function(n, t, i) {
            return this.computeEventResize("start", n, t, i)
        },
        computeEventEndResize: function(n, t, i) {
            return this.computeEventResize("end", n, t, i)
        },
        computeEventResize: function(n, t, i, r) {
            var f = this.view.calendar,
                o = this.diffDates(i[n], t[n]),
                u, e;
            return u = {
                start: r.start.clone(),
                end: f.getEventEnd(r),
                allDay: r.allDay
            }, u.allDay && b(o) && (u.allDay = !1, f.normalizeEventTimes(u)), u[n].add(o), u.start.isBefore(u.end) || (e = this.minResizeDuration || (r.allDay ? f.defaultAllDayEventDuration : f.defaultTimedEventDuration), n == "start" ? u.start = u.end.clone().subtract(e) : u.end = u.start.clone().add(e)), u
        },
        renderEventResize: function() {},
        unrenderEventResize: function() {},
        getEventTimeText: function(n, t, i) {
            return (t == null && (t = this.eventTimeFormat), i == null && (i = this.displayEventEnd), this.displayEventTime && n.start.hasTime()) ? i && n.end ? this.view.formatRange(n, t) : n.start.format(t) : ""
        },
        getSegClasses: function(n, t, i) {
            var f = this.view,
                r = n.event,
                u = ["fc-event", n.isStart ? "fc-start" : "fc-not-start", n.isEnd ? "fc-end" : "fc-not-end"].concat(r.className, r.source ? r.source.className : []);
            return t && u.push("fc-draggable"), i && u.push("fc-resizable"), f.isEventSelected(r) && u.push("fc-selected"), u
        },
        getSegSkinCss: function(n) {
            var t = n.event,
                i = this.view,
                r = t.source || {},
                u = t.color,
                f = r.color,
                e = i.opt("eventColor");
            return {
                "background-color": t.backgroundColor || u || r.backgroundColor || f || i.opt("eventBackgroundColor") || e,
                "border-color": t.borderColor || u || r.borderColor || f || i.opt("eventBorderColor") || e,
                color: t.textColor || r.textColor || i.opt("eventTextColor")
            }
        },
        eventToSegs: function(n) {
            return this.eventsToSegs([n])
        },
        eventToSpan: function(n) {
            return this.eventToSpans(n)[0]
        },
        eventToSpans: function(n) {
            var t = this.eventToRange(n);
            return this.eventRangeToSpans(t, n)
        },
        eventsToSegs: function(t, i) {
            var u = this,
                f = gf(t),
                r = [];
            return n.each(f, function(n, t) {
                for (var e = [], f = 0; f < t.length; f++) e.push(u.eventToRange(t[f]));
                if (df(t[0]))
                    for (e = u.invertRanges(e), f = 0; f < e.length; f++) r.push.apply(r, u.eventRangeToSegs(e[f], t[0], i));
                else
                    for (f = 0; f < e.length; f++) r.push.apply(r, u.eventRangeToSegs(e[f], t[f], i))
            }), r
        },
        eventToRange: function(n) {
            return {
                start: n.start.clone().stripZone(),
                end: (n.end ? n.end.clone() : this.view.calendar.getDefaultEventEnd(n.allDay != null ? n.allDay : !n.start.hasTime(), n.start)).stripZone()
            }
        },
        eventRangeToSegs: function(n, t, i) {
            for (var f = this.eventRangeToSpans(n, t), u = [], r = 0; r < f.length; r++) u.push.apply(u, this.eventSpanToSegs(f[r], t, i));
            return u
        },
        eventRangeToSpans: function(t) {
            return [n.extend({}, t)]
        },
        eventSpanToSegs: function(n, t, i) {
            for (var f = i ? i(n) : this.spanToSegs(n), u, r = 0; r < f.length; r++) u = f[r], u.event = t, u.eventStartMS = +n.start, u.eventDurationMS = n.end - n.start;
            return f
        },
        invertRanges: function(n) {
            var f = this.view,
                o = f.start.clone(),
                e = f.end.clone(),
                u = [],
                t = o,
                i, r;
            for (n.sort(ne), i = 0; i < n.length; i++) r = n[i], r.start > t && u.push({
                start: t,
                end: r.start
            }), t = r.end;
            return t < e && u.push({
                start: t,
                end: e
            }), u
        },
        sortEventSegs: function(n) {
            n.sort(tt(this, "compareEventSegs"))
        },
        compareEventSegs: function(n, t) {
            return n.eventStartMS - t.eventStartMS || t.eventDurationMS - n.eventDurationMS || t.event.allDay - n.event.allDay || fr(n.event, t.event, this.view.eventOrderSpecs)
        }
    });
    i.isBgEvent = eu;
    i.dataAttrPrefix = "";
    li = i.DayTableMixin = {
        breakOnWeeks: !1,
        dayDates: null,
        dayIndices: null,
        daysPerRow: null,
        rowCnt: null,
        colCnt: null,
        colHeadFormat: null,
        updateDayTable: function() {
            for (var o = this.view, i = this.start.clone(), r = -1, u = [], n = [], t, e, f; i.isBefore(this.end);) o.isHiddenDay(i) ? u.push(r + .5) : (r++, u.push(r), n.push(i.clone())), i.add(1, "days");
            if (this.breakOnWeeks) {
                for (e = n[0].day(), t = 1; t < n.length; t++)
                    if (n[t].day() == e) break;
                f = Math.ceil(n.length / t)
            } else f = 1, t = n.length;
            this.dayDates = n;
            this.dayIndices = u;
            this.daysPerRow = t;
            this.rowCnt = f;
            this.updateDayTableCols()
        },
        updateDayTableCols: function() {
            this.colCnt = this.computeColCnt();
            this.colHeadFormat = this.view.opt("columnFormat") || this.computeColHeadFormat()
        },
        computeColCnt: function() {
            return this.daysPerRow
        },
        getCellDate: function(n, t) {
            return this.dayDates[this.getCellDayIndex(n, t)].clone()
        },
        getCellRange: function(n, t) {
            var i = this.getCellDate(n, t),
                r = i.clone().add(1, "days");
            return {
                start: i,
                end: r
            }
        },
        getCellDayIndex: function(n, t) {
            return n * this.daysPerRow + this.getColDayIndex(t)
        },
        getColDayIndex: function(n) {
            return this.isRTL ? this.colCnt - 1 - n : n
        },
        getDateDayIndex: function(n) {
            var t = this.dayIndices,
                i = n.diff(this.start, "days");
            return i < 0 ? t[0] - 1 : i >= t.length ? t[t.length - 1] + 1 : t[i]
        },
        computeColHeadFormat: function() {
            return this.rowCnt > 1 || this.colCnt > 10 ? "ddd" : this.colCnt > 1 ? this.view.opt("dayOfMonthFormat") : "dddd"
        },
        sliceRangeByRow: function(n) {
            for (var f = this.daysPerRow, e = this.view.computeDayRange(n), o = this.getDateDayIndex(e.start), s = this.getDateDayIndex(e.end.clone().subtract(1, "days")), h = [], u, c, t, i, r = 0; r < this.rowCnt; r++) u = r * f, c = u + f - 1, t = Math.max(o, u), i = Math.min(s, c), t = Math.ceil(t), i = Math.floor(i), t <= i && h.push({
                row: r,
                firstRowDayIndex: t - u,
                lastRowDayIndex: i - u,
                isStart: t === o,
                isEnd: i === s
            });
            return h
        },
        sliceRangeByDay: function(n) {
            for (var e = this.daysPerRow, o = this.view.computeDayRange(n), s = this.getDateDayIndex(o.start), h = this.getDateDayIndex(o.end.clone().subtract(1, "days")), c = [], u, l, f, t, i, r = 0; r < this.rowCnt; r++)
                for (u = r * e, l = u + e - 1, f = u; f <= l; f++) t = Math.max(s, f), i = Math.min(h, f), t = Math.ceil(t), i = Math.floor(i), t <= i && c.push({
                    row: r,
                    firstRowDayIndex: t - u,
                    lastRowDayIndex: i - u,
                    isStart: t === s,
                    isEnd: i === h
                });
            return c
        },
        renderHeadHtml: function() {
            var n = this.view;
            return '<div class="fc-row ' + n.widgetHeaderClass + '"><table><thead>' + this.renderHeadTrHtml() + "<\/thead><\/table><\/div>"
        },
        renderHeadIntroHtml: function() {
            return this.renderIntroHtml()
        },
        renderHeadTrHtml: function() {
            return "<tr>" + (this.isRTL ? "" : this.renderHeadIntroHtml()) + this.renderHeadDateCellsHtml() + (this.isRTL ? this.renderHeadIntroHtml() : "") + "<\/tr>"
        },
        renderHeadDateCellsHtml: function() {
            for (var t = [], i, n = 0; n < this.colCnt; n++) i = this.getCellDate(0, n), t.push(this.renderHeadDateCellHtml(i));
            return t.join("")
        },
        renderHeadDateCellHtml: function(n, t, i) {
            var u = this.view;
            return '<th class="fc-day-header ' + u.widgetHeaderClass + " fc-" + dt[n.day()] + '"' + (this.rowCnt == 1 ? ' data-date="' + n.format("YYYY-MM-DD") + '"' : "") + (t > 1 ? ' colspan="' + t + '"' : "") + (i ? " " + i : "") + ">" + r(n.format(this.colHeadFormat)) + "<\/th>"
        },
        renderBgTrHtml: function(n) {
            return "<tr>" + (this.isRTL ? "" : this.renderBgIntroHtml(n)) + this.renderBgCellsHtml(n) + (this.isRTL ? this.renderBgIntroHtml(n) : "") + "<\/tr>"
        },
        renderBgIntroHtml: function() {
            return this.renderIntroHtml()
        },
        renderBgCellsHtml: function(n) {
            for (var i = [], r, t = 0; t < this.colCnt; t++) r = this.getCellDate(n, t), i.push(this.renderBgCellHtml(r));
            return i.join("")
        },
        renderBgCellHtml: function(n, t) {
            var r = this.view,
                i = this.getDayClasses(n);
            return i.unshift("fc-day", r.widgetContentClass), '<td class="' + i.join(" ") + '" data-date="' + n.format("YYYY-MM-DD") + '"' + (t ? " " + t : "") + "><\/td>"
        },
        renderIntroHtml: function() {},
        bookendCells: function(n) {
            var t = this.renderIntroHtml();
            t && (this.isRTL ? n.append(t) : n.prepend(t))
        }
    };
    ut = i.DayGrid = p.extend(li, {
        numbersVisible: !1,
        bottomCoordPadding: 0,
        rowEls: null,
        cellEls: null,
        helperEls: null,
        rowCoordCache: null,
        colCoordCache: null,
        renderDates: function(n) {
            for (var f = this.view, r = this.rowCnt, e = this.colCnt, u = "", i, t = 0; t < r; t++) u += this.renderDayRowHtml(t, n);
            for (this.el.html(u), this.rowEls = this.el.find(".fc-row"), this.cellEls = this.el.find(".fc-day"), this.rowCoordCache = new vt({
                    els: this.rowEls,
                    isVertical: !0
                }), this.colCoordCache = new vt({
                    els: this.cellEls.slice(0, this.colCnt),
                    isHorizontal: !0
                }), t = 0; t < r; t++)
                for (i = 0; i < e; i++) f.trigger("dayRender", null, this.getCellDate(t, i), this.getCellEl(t, i))
        },
        unrenderDates: function() {
            this.removeSegPopover()
        },
        renderBusinessHours: function() {
            var n = this.view.calendar.getBusinessHoursEvents(!0),
                t = this.eventsToSegs(n);
            this.renderFill("businessHours", t, "bgevent")
        },
        renderDayRowHtml: function(n, t) {
            var r = this.view,
                i = ["fc-row", "fc-week", r.widgetContentClass];
            return t && i.push("fc-rigid"), '<div class="' + i.join(" ") + '"><div class="fc-bg"><table>' + this.renderBgTrHtml(n) + '<\/table><\/div><div class="fc-content-skeleton"><table>' + (this.numbersVisible ? "<thead>" + this.renderNumberTrHtml(n) + "<\/thead>" : "") + "<\/table><\/div><\/div>"
        },
        renderNumberTrHtml: function(n) {
            return "<tr>" + (this.isRTL ? "" : this.renderNumberIntroHtml(n)) + this.renderNumberCellsHtml(n) + (this.isRTL ? this.renderNumberIntroHtml(n) : "") + "<\/tr>"
        },
        renderNumberIntroHtml: function() {
            return this.renderIntroHtml()
        },
        renderNumberCellsHtml: function(n) {
            for (var i = [], r, t = 0; t < this.colCnt; t++) r = this.getCellDate(n, t), i.push(this.renderNumberCellHtml(r));
            return i.join("")
        },
        renderNumberCellHtml: function(n) {
            var t;
            return this.view.dayNumbersVisible ? (t = this.getDayClasses(n), t.unshift("fc-day-number"), '<td class="' + t.join(" ") + '" data-date="' + n.format() + '">' + n.date() + "<\/td>") : "<td/>"
        },
        computeEventTimeFormat: function() {
            return this.view.opt("extraSmallTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return this.colCnt == 1
        },
        rangeUpdated: function() {
            this.updateDayTable()
        },
        spanToSegs: function(n) {
            for (var r = this.sliceRangeByRow(n), t, i = 0; i < r.length; i++) t = r[i], this.isRTL ? (t.leftCol = this.daysPerRow - 1 - t.lastRowDayIndex, t.rightCol = this.daysPerRow - 1 - t.firstRowDayIndex) : (t.leftCol = t.firstRowDayIndex, t.rightCol = t.lastRowDayIndex);
            return r
        },
        prepareHits: function() {
            this.colCoordCache.build();
            this.rowCoordCache.build();
            this.rowCoordCache.bottoms[this.rowCnt - 1] += this.bottomCoordPadding
        },
        releaseHits: function() {
            this.colCoordCache.clear();
            this.rowCoordCache.clear()
        },
        queryHit: function(n, t) {
            var i = this.colCoordCache.getHorizontalIndex(n),
                r = this.rowCoordCache.getVerticalIndex(t);
            if (r != null && i != null) return this.getCellHit(r, i)
        },
        getHitSpan: function(n) {
            return this.getCellRange(n.row, n.col)
        },
        getHitEl: function(n) {
            return this.getCellEl(n.row, n.col)
        },
        getCellHit: function(n, t) {
            return {
                row: n,
                col: t,
                component: this,
                left: this.colCoordCache.getLeftOffset(t),
                right: this.colCoordCache.getRightOffset(t),
                top: this.rowCoordCache.getTopOffset(n),
                bottom: this.rowCoordCache.getBottomOffset(n)
            }
        },
        getCellEl: function(n, t) {
            return this.cellEls.eq(n * this.colCnt + t)
        },
        renderDrag: function(n, t) {
            return this.renderHighlight(this.eventToSpan(n)), t && !t.el.closest(this.el).length ? this.renderEventLocationHelper(n, t) : void 0
        },
        unrenderDrag: function() {
            this.unrenderHighlight();
            this.unrenderHelper()
        },
        renderEventResize: function(n, t) {
            return this.renderHighlight(this.eventToSpan(n)), this.renderEventLocationHelper(n, t)
        },
        unrenderEventResize: function() {
            this.unrenderHighlight();
            this.unrenderHelper()
        },
        renderHelper: function(t, i) {
            var u = [],
                r = this.eventToSegs(t),
                f;
            return r = this.renderFgSegEls(r), f = this.renderSegRows(r), this.rowEls.each(function(t, r) {
                var o = n(r),
                    e = n('<div class="fc-helper-skeleton"><table/><\/div>'),
                    s;
                s = i && i.row === t ? i.el.position().top : o.find(".fc-content-skeleton tbody").position().top;
                e.css("top", s).find("table").append(f[t].tbodyEl);
                o.append(e);
                u.push(e[0])
            }), this.helperEls = n(u)
        },
        unrenderHelper: function() {
            this.helperEls && (this.helperEls.remove(), this.helperEls = null)
        },
        fillSegTag: "td",
        renderFill: function(t, i, r) {
            var o = [],
                u, f, e;
            for (i = this.renderFillSegEls(t, i), u = 0; u < i.length; u++) f = i[u], e = this.renderFillRow(t, f, r), this.rowEls.eq(f.row).append(e), o.push(e[0]);
            return this.elsByFill[t] = n(o), i
        },
        renderFillRow: function(t, i, r) {
            var s = this.colCnt,
                f = i.leftCol,
                e = i.rightCol + 1,
                o, u;
            return r = r || t.toLowerCase(), o = n('<div class="fc-' + r + '-skeleton"><table><tr/><\/table><\/div>'), u = o.find("tr"), f > 0 && u.append('<td colspan="' + f + '"/>'), u.append(i.el.attr("colspan", e - f)), e < s && u.append('<td colspan="' + (s - e) + '"/>'), this.bookendCells(u), o
        }
    });
    ut.mixin({
        rowStructs: null,
        unrenderEvents: function() {
            this.removeSegPopover();
            p.prototype.unrenderEvents.apply(this, arguments)
        },
        getEventSegs: function() {
            return p.prototype.getEventSegs.call(this).concat(this.popoverSegs || [])
        },
        renderBgSegs: function(t) {
            var i = n.grep(t, function(n) {
                return n.event.allDay
            });
            return p.prototype.renderBgSegs.call(this, i)
        },
        renderFgSegs: function(t) {
            var i;
            return t = this.renderFgSegEls(t), i = this.rowStructs = this.renderSegRows(t), this.rowEls.each(function(t, r) {
                n(r).find(".fc-content-skeleton > table").append(i[t].tbodyEl)
            }), t
        },
        unrenderFgSegs: function() {
            for (var t = this.rowStructs || [], n; n = t.pop();) n.tbodyEl.remove();
            this.rowStructs = null
        },
        renderSegRows: function(n) {
            for (var r = [], i = this.groupSegRows(n), t = 0; t < i.length; t++) r.push(this.renderSegRow(t, i[t]));
            return r
        },
        fgSegHtml: function(n, t) {
            var u = this.view,
                i = n.event,
                a = u.isEventDraggable(i),
                s = !t && i.allDay && n.isStart && u.isEventResizableFromStart(i),
                h = !t && i.allDay && n.isEnd && u.isEventResizableFromEnd(i),
                c = this.getSegClasses(n, a, s || h),
                l = lt(this.getSegSkinCss(n)),
                f = "",
                e, o;
            return c.unshift("fc-day-grid-event", "fc-h-event"), n.isStart && (e = this.getEventTimeText(i), e && (f = '<span class="fc-time">' + r(e) + "<\/span>")), o = '<span class="fc-title">' + (r(i.title || "") || "&nbsp;") + "<\/span>", '<a class="' + c.join(" ") + '"' + (i.url ? ' href="' + r(i.url) + '"' : "") + (l ? ' style="' + l + '"' : "") + '><div class="fc-content">' + (this.isRTL ? o + " " + f : f + " " + o) + "<\/div>" + (s ? '<div class="fc-resizer fc-start-resizer" />' : "") + (h ? '<div class="fc-resizer fc-end-resizer" />' : "") + "<\/a>"
        },
        renderSegRow: function(t, i) {
            function p(t) {
                while (u < t) r = (h[f - 1] || [])[u], r ? r.attr("rowspan", parseInt(r.attr("rowspan") || 1, 10) + 1) : (r = n("<td/>"), o.append(r)), s[f][u] = r, h[f][u] = r, u++
            }
            for (var w = this.colCnt, a = this.buildSegLevels(i), b = Math.max(1, a.length), y = n("<tbody/>"), v = [], s = [], h = [], c, u, o, l, e, r, f = 0; f < b; f++) {
                if (c = a[f], u = 0, o = n("<tr/>"), v.push([]), s.push([]), h.push([]), c)
                    for (l = 0; l < c.length; l++) {
                        for (e = c[l], p(e.leftCol), r = n('<td class="fc-event-container"/>').append(e.el), e.leftCol != e.rightCol ? r.attr("colspan", e.rightCol - e.leftCol + 1) : h[f][u] = r; u <= e.rightCol;) s[f][u] = r, v[f][u] = e, u++;
                        o.append(r)
                    }
                p(w);
                this.bookendCells(o);
                y.append(o)
            }
            return {
                row: t,
                tbodyEl: y,
                cellMatrix: s,
                segMatrix: v,
                segLevels: a,
                segs: i
            }
        },
        buildSegLevels: function(n) {
            var i = [],
                r, u, t;
            for (this.sortEventSegs(n), r = 0; r < n.length; r++) {
                for (u = n[r], t = 0; t < i.length; t++)
                    if (!ie(u, i[t])) break;
                u.level = t;
                (i[t] || (i[t] = [])).push(u)
            }
            for (t = 0; t < i.length; t++) i[t].sort(re);
            return i
        },
        groupSegRows: function(n) {
            for (var i = [], t = 0; t < this.rowCnt; t++) i.push([]);
            for (t = 0; t < n.length; t++) i[n[t].row].push(n[t]);
            return i
        }
    });
    ut.mixin({
        segPopover: null,
        popoverSegs: null,
        removeSegPopover: function() {
            this.segPopover && this.segPopover.hide()
        },
        limitRows: function(n) {
            for (var r = this.rowStructs || [], i, t = 0; t < r.length; t++) this.unlimitRow(t), i = n ? typeof n == "number" ? n : this.computeRowLevelLimit(t) : !1, i !== !1 && this.limitRow(t, i)
        },
        computeRowLevelLimit: function(t) {
            function s(t, i) {
                r = Math.max(r, n(i).outerHeight())
            }
            for (var e = this.rowEls.eq(t), o = e.height(), f = this.rowStructs[t].tbodyEl.children(), u, r, i = 0; i < f.length; i++)
                if (u = f.eq(i).removeClass("fc-limited"), r = 0, u.find("> td > :first-child").each(s), u.position().top + r > o) return i;
            return !1
        },
        limitRow: function(t, i) {
            function tt(f) {
                while (r < f) u = g.getCellSegs(t, r, i), u.length && (o = w[i - 1][r], v = g.renderMoreLink(t, r, u), h = n("<div/>").append(v), o.append(h), y.push(h[0])), r++
            }
            var g = this,
                f = this.rowStructs[t],
                y = [],
                r = 0,
                p, w, b, c, e, u, k, l, o, nt, d, s, a, h, v;
            if (i && i < f.segLevels.length) {
                for (p = f.segLevels[i - 1], w = f.cellMatrix, b = f.tbodyEl.children().slice(i).addClass("fc-limited").get(), c = 0; c < p.length; c++) {
                    for (e = p[c], tt(e.leftCol), l = [], k = 0; r <= e.rightCol;) u = this.getCellSegs(t, r, i), l.push(u), k += u.length, r++;
                    if (k) {
                        for (o = w[i - 1][e.leftCol], nt = o.attr("rowspan") || 1, d = [], s = 0; s < l.length; s++) a = n('<td class="fc-more-cell"/>').attr("rowspan", nt), u = l[s], v = this.renderMoreLink(t, e.leftCol + s, [e].concat(u)), h = n("<div/>").append(v), a.append(h), d.push(a[0]), y.push(a[0]);
                        o.addClass("fc-limited").after(n(d));
                        b.push(o[0])
                    }
                }
                tt(this.colCnt);
                f.moreEls = n(y);
                f.limitedEls = n(b)
            }
        },
        unlimitRow: function(n) {
            var t = this.rowStructs[n];
            t.moreEls && (t.moreEls.remove(), t.moreEls = null);
            t.limitedEls && (t.limitedEls.removeClass("fc-limited"), t.limitedEls = null)
        },
        renderMoreLink: function(t, i, r) {
            var u = this,
                f = this.view;
            return n('<a class="fc-more"/>').text(this.getMoreLinkText(r.length)).on("click", function(e) {
                var o = f.opt("eventLimitClick"),
                    s = u.getCellDate(t, i),
                    h = n(this),
                    l = u.getCellEl(t, i),
                    a = u.getCellSegs(t, i),
                    c = u.resliceDaySegs(a, s),
                    v = u.resliceDaySegs(r, s);
                typeof o == "function" && (o = f.trigger("eventLimitClick", null, {
                    date: s,
                    dayEl: l,
                    moreEl: h,
                    segs: c,
                    hiddenSegs: v
                }, e));
                o === "popover" ? u.showSegPopover(t, i, h, c) : typeof o == "string" && f.calendar.zoomTo(s, o)
            })
        },
        showSegPopover: function(n, t, i, r) {
            var f = this,
                o = this.view,
                e = i.parent(),
                s, u;
            s = this.rowCnt == 1 ? o.el : this.rowEls.eq(n);
            u = {
                className: "fc-more-popover",
                content: this.renderSegPopoverContent(n, t, r),
                parentEl: this.el,
                top: s.offset().top,
                autoHide: !0,
                viewportConstrain: o.opt("popoverViewportConstrain"),
                hide: function() {
                    f.segPopover.removeElement();
                    f.segPopover = null;
                    f.popoverSegs = null
                }
            };
            this.isRTL ? u.right = e.offset().left + e.outerWidth() + 1 : u.left = e.offset().left - 1;
            this.segPopover = new kf(u);
            this.segPopover.show()
        },
        renderSegPopoverContent: function(t, i, u) {
            var e = this.view,
                s = e.opt("theme"),
                h = this.getCellDate(t, i).format(e.opt("dayPopoverFormat")),
                o = n('<div class="fc-header ' + e.widgetHeaderClass + '"><span class="fc-close ' + (s ? "ui-icon ui-icon-closethick" : "fc-icon fc-icon-x") + '"><\/span><span class="fc-title">' + r(h) + '<\/span><div class="fc-clear"/><\/div><div class="fc-body ' + e.widgetContentClass + '"><div class="fc-event-container"><\/div><\/div>'),
                c = o.find(".fc-event-container"),
                f;
            for (u = this.renderFgSegEls(u, !0), this.popoverSegs = u, f = 0; f < u.length; f++) this.prepareHits(), u[f].hit = this.getCellHit(t, i), this.releaseHits(), c.append(u[f].el);
            return o
        },
        resliceDaySegs: function(t, i) {
            var u = n.map(t, function(n) {
                    return n.event
                }),
                r = i.clone(),
                f = r.clone().add(1, "days"),
                e = {
                    start: r,
                    end: f
                };
            return t = this.eventsToSegs(u, function(n) {
                var t = kt(n, e);
                return t ? [t] : []
            }), this.sortEventSegs(t), t
        },
        getMoreLinkText: function(n) {
            var t = this.view.opt("eventLimitText");
            return typeof t == "function" ? t(n) : "+" + n + " " + t
        },
        getCellSegs: function(n, t, i) {
            for (var f = this.rowStructs[n].segMatrix, r = i || 0, e = [], u; r < f.length;) u = f[r][t], u && e.push(u), r++;
            return e
        }
    });
    ai = i.TimeGrid = p.extend(li, {
        slotDuration: null,
        snapDuration: null,
        snapsPerSlot: null,
        minTime: null,
        maxTime: null,
        labelFormat: null,
        labelInterval: null,
        colEls: null,
        slatContainerEl: null,
        slatEls: null,
        nowIndicatorEls: null,
        colCoordCache: null,
        slatCoordCache: null,
        constructor: function() {
            p.apply(this, arguments);
            this.processOptions()
        },
        renderDates: function() {
            this.el.html(this.renderHtml());
            this.colEls = this.el.find(".fc-day");
            this.slatContainerEl = this.el.find(".fc-slats");
            this.slatEls = this.slatContainerEl.find("tr");
            this.colCoordCache = new vt({
                els: this.colEls,
                isHorizontal: !0
            });
            this.slatCoordCache = new vt({
                els: this.slatEls,
                isVertical: !0
            });
            this.renderContentSkeleton()
        },
        renderHtml: function() {
            return '<div class="fc-bg"><table>' + this.renderBgTrHtml(0) + '<\/table><\/div><div class="fc-slats"><table>' + this.renderSlatRowHtml() + "<\/table><\/div>"
        },
        renderSlatRowHtml: function() {
            for (var i = this.view, o = this.isRTL, s = "", n = t.duration(+this.minTime), u, f, e; n < this.maxTime;) u = this.start.clone().time(n), f = v(ni(n, this.labelInterval)), e = '<td class="fc-axis fc-time ' + i.widgetContentClass + '" ' + i.axisStyleAttr() + ">" + (f ? "<span>" + r(u.format(this.labelFormat)) + "<\/span>" : "") + "<\/td>", s += '<tr data-time="' + u.format("HH:mm:ss") + '"' + (f ? "" : ' class="fc-minor"') + ">" + (o ? "" : e) + '<td class="' + i.widgetContentClass + '"/>' + (o ? e : "") + "<\/tr>", n.add(this.slotDuration);
            return s
        },
        processOptions: function() {
            var r = this.view,
                u = r.opt("slotDuration"),
                f = r.opt("snapDuration"),
                i;
            u = t.duration(u);
            f = f ? t.duration(f) : u;
            this.slotDuration = u;
            this.snapDuration = f;
            this.snapsPerSlot = u / f;
            this.minResizeDuration = f;
            this.minTime = t.duration(r.opt("minTime"));
            this.maxTime = t.duration(r.opt("maxTime"));
            i = r.opt("slotLabelFormat");
            n.isArray(i) && (i = i[i.length - 1]);
            this.labelFormat = i || r.opt("axisFormat") || r.opt("smallTimeFormat");
            i = r.opt("slotLabelInterval");
            this.labelInterval = i ? t.duration(i) : this.computeLabelInterval(u)
        },
        computeLabelInterval: function(n) {
            for (var r, u, i = pu.length - 1; i >= 0; i--)
                if (r = t.duration(pu[i]), u = ni(r, n), v(u) && u > 1) return r;
            return t.duration(n)
        },
        computeEventTimeFormat: function() {
            return this.view.opt("noMeridiemTimeFormat")
        },
        computeDisplayEventEnd: function() {
            return !0
        },
        prepareHits: function() {
            this.colCoordCache.build();
            this.slatCoordCache.build()
        },
        releaseHits: function() {
            this.colCoordCache.clear()
        },
        queryHit: function(n, t) {
            var i = this.snapsPerSlot,
                f = this.colCoordCache,
                e = this.slatCoordCache,
                r = f.getHorizontalIndex(n),
                u = e.getVerticalIndex(t);
            if (r != null && u != null) {
                var o = e.getTopOffset(u),
                    s = e.getHeight(u),
                    c = (t - o) / s,
                    h = Math.floor(c * i),
                    l = u * i + h,
                    a = o + h / i * s,
                    v = o + (h + 1) / i * s;
                return {
                    col: r,
                    snap: l,
                    component: this,
                    left: f.getLeftOffset(r),
                    right: f.getRightOffset(r),
                    top: a,
                    bottom: v
                }
            }
        },
        getHitSpan: function(n) {
            var t = this.getCellDate(0, n.col),
                r = this.computeSnapTime(n.snap),
                i;
            return t.time(r), i = t.clone().add(this.snapDuration), {
                start: t,
                end: i
            }
        },
        getHitEl: function(n) {
            return this.colEls.eq(n.col)
        },
        rangeUpdated: function() {
            this.updateDayTable()
        },
        computeSnapTime: function(n) {
            return t.duration(this.minTime + this.snapDuration * n)
        },
        spanToSegs: function(n) {
            for (var i = this.sliceRangeByTimes(n), t = 0; t < i.length; t++) i[t].col = this.isRTL ? this.daysPerRow - 1 - i[t].dayIndex : i[t].dayIndex;
            return i
        },
        sliceRangeByTimes: function(n) {
            for (var u = [], i, r, f, t = 0; t < this.daysPerRow; t++) r = this.dayDates[t].clone(), f = {
                start: r.clone().time(this.minTime),
                end: r.clone().time(this.maxTime)
            }, i = kt(n, f), i && (i.dayIndex = t, u.push(i));
            return u
        },
        updateSize: function(n) {
            this.slatCoordCache.build();
            n && this.updateSegVerticals([].concat(this.fgSegs || [], this.bgSegs || [], this.businessSegs || []))
        },
        getTotalSlatHeight: function() {
            return this.slatContainerEl.outerHeight()
        },
        computeDateTop: function(n, i) {
            return this.computeTimeTop(t.duration(n - i.clone().stripTime()))
        },
        computeTimeTop: function(n) {
            var r = this.slatEls.length,
                t = (n - this.minTime) / this.slotDuration,
                i, u;
            return t = Math.max(0, t), t = Math.min(r, t), i = Math.floor(t), i = Math.min(i, r - 1), u = t - i, this.slatCoordCache.getTopPosition(i) + this.slatCoordCache.getHeight(i) * u
        },
        renderDrag: function(n, t) {
            if (t) return this.renderEventLocationHelper(n, t);
            this.renderHighlight(this.eventToSpan(n))
        },
        unrenderDrag: function() {
            this.unrenderHelper();
            this.unrenderHighlight()
        },
        renderEventResize: function(n, t) {
            return this.renderEventLocationHelper(n, t)
        },
        unrenderEventResize: function() {
            this.unrenderHelper()
        },
        renderHelper: function(n, t) {
            return this.renderHelperSegs(this.eventToSegs(n), t)
        },
        unrenderHelper: function() {
            this.unrenderHelperSegs()
        },
        renderBusinessHours: function() {
            var n = this.view.calendar.getBusinessHoursEvents(),
                t = this.eventsToSegs(n);
            this.renderBusinessSegs(t)
        },
        unrenderBusinessHours: function() {
            this.unrenderBusinessSegs()
        },
        getNowIndicatorUnit: function() {
            return "minute"
        },
        renderNowIndicator: function(t) {
            for (var r = this.spanToSegs({
                    start: t,
                    end: t
                }), f = this.computeDateTop(t, t), u = [], i = 0; i < r.length; i++) u.push(n('<div class="fc-now-indicator fc-now-indicator-line"><\/div>').css("top", f).appendTo(this.colContainerEls.eq(r[i].col))[0]);
            r.length > 0 && u.push(n('<div class="fc-now-indicator fc-now-indicator-arrow"><\/div>').css("top", f).appendTo(this.el.find(".fc-content-skeleton"))[0]);
            this.nowIndicatorEls = n(u)
        },
        unrenderNowIndicator: function() {
            this.nowIndicatorEls && (this.nowIndicatorEls.remove(), this.nowIndicatorEls = null)
        },
        renderSelection: function(n) {
            this.view.opt("selectHelper") ? this.renderEventLocationHelper(n) : this.renderHighlight(n)
        },
        unrenderSelection: function() {
            this.unrenderHelper();
            this.unrenderHighlight()
        },
        renderHighlight: function(n) {
            this.renderHighlightSegs(this.spanToSegs(n))
        },
        unrenderHighlight: function() {
            this.unrenderHighlightSegs()
        }
    });
    ai.mixin({
        colContainerEls: null,
        fgContainerEls: null,
        bgContainerEls: null,
        helperContainerEls: null,
        highlightContainerEls: null,
        businessContainerEls: null,
        fgSegs: null,
        bgSegs: null,
        helperSegs: null,
        highlightSegs: null,
        businessSegs: null,
        renderContentSkeleton: function() {
            for (var r = "", t, i = 0; i < this.colCnt; i++) r += '<td><div class="fc-content-col"><div class="fc-event-container fc-helper-container"><\/div><div class="fc-event-container"><\/div><div class="fc-highlight-container"><\/div><div class="fc-bgevent-container"><\/div><div class="fc-business-container"><\/div><\/div><\/td>';
            t = n('<div class="fc-content-skeleton"><table><tr>' + r + "<\/tr><\/table><\/div>");
            this.colContainerEls = t.find(".fc-content-col");
            this.helperContainerEls = t.find(".fc-helper-container");
            this.fgContainerEls = t.find(".fc-event-container:not(.fc-helper-container)");
            this.bgContainerEls = t.find(".fc-bgevent-container");
            this.highlightContainerEls = t.find(".fc-highlight-container");
            this.businessContainerEls = t.find(".fc-business-container");
            this.bookendCells(t.find("tr"));
            this.el.append(t)
        },
        renderFgSegs: function(n) {
            return n = this.renderFgSegsIntoContainers(n, this.fgContainerEls), this.fgSegs = n, n
        },
        unrenderFgSegs: function() {
            this.unrenderNamedSegs("fgSegs")
        },
        renderHelperSegs: function(t, i) {
            var e = [],
                u, f, r;
            for (t = this.renderFgSegsIntoContainers(t, this.helperContainerEls), u = 0; u < t.length; u++) f = t[u], i && i.col === f.col && (r = i.el, f.el.css({
                left: r.css("left"),
                right: r.css("right"),
                "margin-left": r.css("margin-left"),
                "margin-right": r.css("margin-right")
            })), e.push(f.el[0]);
            return this.helperSegs = t, n(e)
        },
        unrenderHelperSegs: function() {
            this.unrenderNamedSegs("helperSegs")
        },
        renderBgSegs: function(n) {
            return n = this.renderFillSegEls("bgEvent", n), this.updateSegVerticals(n), this.attachSegsByCol(this.groupSegsByCol(n), this.bgContainerEls), this.bgSegs = n, n
        },
        unrenderBgSegs: function() {
            this.unrenderNamedSegs("bgSegs")
        },
        renderHighlightSegs: function(n) {
            n = this.renderFillSegEls("highlight", n);
            this.updateSegVerticals(n);
            this.attachSegsByCol(this.groupSegsByCol(n), this.highlightContainerEls);
            this.highlightSegs = n
        },
        unrenderHighlightSegs: function() {
            this.unrenderNamedSegs("highlightSegs")
        },
        renderBusinessSegs: function(n) {
            n = this.renderFillSegEls("businessHours", n);
            this.updateSegVerticals(n);
            this.attachSegsByCol(this.groupSegsByCol(n), this.businessContainerEls);
            this.businessSegs = n
        },
        unrenderBusinessSegs: function() {
            this.unrenderNamedSegs("businessSegs")
        },
        groupSegsByCol: function(n) {
            for (var i = [], t = 0; t < this.colCnt; t++) i.push([]);
            for (t = 0; t < n.length; t++) i[n[t].col].push(n[t]);
            return i
        },
        attachSegsByCol: function(n, t) {
            for (var u, r, i = 0; i < this.colCnt; i++)
                for (u = n[i], r = 0; r < u.length; r++) t.eq(i).append(u[r].el)
        },
        unrenderNamedSegs: function(n) {
            var i = this[n],
                t;
            if (i) {
                for (t = 0; t < i.length; t++) i[t].el.remove();
                this[n] = null
            }
        },
        renderFgSegsIntoContainers: function(n, t) {
            var r, i;
            for (n = this.renderFgSegEls(n), r = this.groupSegsByCol(n), i = 0; i < this.colCnt; i++) this.updateFgSegCoords(r[i]);
            return this.attachSegsByCol(r, t), n
        },
        fgSegHtml: function(n, t) {
            var u = this.view,
                i = n.event,
                l = u.isEventDraggable(i),
                a = !t && n.isStart && u.isEventResizableFromStart(i),
                s = !t && n.isEnd && u.isEventResizableFromEnd(i),
                h = this.getSegClasses(n, l, a || s),
                c = lt(this.getSegSkinCss(n)),
                f, e, o;
            return h.unshift("fc-time-grid-event", "fc-v-event"), u.isMultiDayEvent(i) ? (n.isStart || n.isEnd) && (f = this.getEventTimeText(n), e = this.getEventTimeText(n, "LT"), o = this.getEventTimeText(n, null, !1)) : (f = this.getEventTimeText(i), e = this.getEventTimeText(i, "LT"), o = this.getEventTimeText(i, null, !1)), '<a class="' + h.join(" ") + '"' + (i.url ? ' href="' + r(i.url) + '"' : "") + (c ? ' style="' + c + '"' : "") + '><div class="fc-content">' + (f ? '<div class="fc-time" data-start="' + r(o) + '" data-full="' + r(e) + '"><span>' + r(f) + "<\/span><\/div>" : "") + (i.title ? '<div class="fc-title">' + r(i.title) + "<\/div>" : "") + '<\/div><div class="fc-bg"/>' + (s ? '<div class="fc-resizer fc-end-resizer" />' : "") + "<\/a>"
        },
        updateSegVerticals: function(n) {
            this.computeSegVerticals(n);
            this.assignSegVerticals(n)
        },
        computeSegVerticals: function(n) {
            for (var t, i = 0; i < n.length; i++) t = n[i], t.top = this.computeDateTop(t.start, t.start), t.bottom = this.computeDateTop(t.end, t.start)
        },
        assignSegVerticals: function(n) {
            for (var i, t = 0; t < n.length; t++) i = n[t], i.el.css(this.generateSegVerticalCss(i))
        },
        generateSegVerticalCss: function(n) {
            return {
                top: n.top,
                bottom: -n.bottom
            }
        },
        updateFgSegCoords: function(n) {
            this.computeSegVerticals(n);
            this.computeFgSegHorizontals(n);
            this.assignSegVerticals(n);
            this.assignFgSegHorizontals(n)
        },
        computeFgSegHorizontals: function(n) {
            var r, i, t;
            if (this.sortEventSegs(n), r = ue(n), fe(r), i = r[0]) {
                for (t = 0; t < i.length; t++) su(i[t]);
                for (t = 0; t < i.length; t++) this.computeFgSegForwardBack(i[t], 0, 0)
            }
        },
        computeFgSegForwardBack: function(n, t, i) {
            var r = n.forwardSegs,
                u;
            if (n.forwardCoord === undefined)
                for (r.length ? (this.sortForwardSegs(r), this.computeFgSegForwardBack(r[0], t + 1, i), n.forwardCoord = r[0].backwardCoord) : n.forwardCoord = 1, n.backwardCoord = n.forwardCoord - (n.forwardCoord - i) / (t + 1), u = 0; u < r.length; u++) this.computeFgSegForwardBack(r[u], 0, n.forwardCoord)
        },
        sortForwardSegs: function(n) {
            n.sort(tt(this, "compareForwardSegs"))
        },
        compareForwardSegs: function(n, t) {
            return t.forwardPressure - n.forwardPressure || (n.backwardCoord || 0) - (t.backwardCoord || 0) || this.compareEventSegs(n, t)
        },
        assignFgSegHorizontals: function(n) {
            for (var t, i = 0; i < n.length; i++) t = n[i], t.el.css(this.generateFgSegHorizontalCss(t)), t.bottom - t.top < 30 && t.el.addClass("fc-short")
        },
        generateFgSegHorizontalCss: function(n) {
            var e = this.view.opt("slotEventOverlap"),
                i = n.backwardCoord,
                r = n.forwardCoord,
                t = this.generateSegVerticalCss(n),
                u, f;
            return e && (r = Math.min(1, i + (r - i) * 2)), this.isRTL ? (u = 1 - r, f = i) : (u = i, f = 1 - r), t.zIndex = n.level + 1, t.left = u * 100 + "%", t.right = f * 100 + "%", e && n.forwardPressure && (t[this.isRTL ? "marginLeft" : "marginRight"] = 20), t
        }
    });
    var d = i.View = s.extend(iu, it, {
            type: null,
            name: null,
            title: null,
            calendar: null,
            options: null,
            el: null,
            displaying: null,
            isSkeletonRendered: !1,
            isEventsRendered: !1,
            start: null,
            end: null,
            intervalStart: null,
            intervalEnd: null,
            intervalDuration: null,
            intervalUnit: null,
            isRTL: !1,
            isSelected: !1,
            selectedEvent: null,
            eventOrderSpecs: null,
            widgetHeaderClass: null,
            widgetContentClass: null,
            highlightStateClass: null,
            nextDayThreshold: null,
            isHiddenDayHash: null,
            isNowIndicatorRendered: null,
            initialNowDate: null,
            initialNowQueriedMs: null,
            nowIndicatorTimeoutID: null,
            nowIndicatorIntervalID: null,
            constructor: function(n, i, r, u) {
                this.calendar = n;
                this.type = this.name = i;
                this.options = r;
                this.intervalDuration = u || t.duration(1, "day");
                this.nextDayThreshold = t.duration(this.opt("nextDayThreshold"));
                this.initThemingProps();
                this.initHiddenDays();
                this.isRTL = this.opt("isRTL");
                this.eventOrderSpecs = ur(this.opt("eventOrder"));
                this.initialize()
            },
            initialize: function() {},
            opt: function(n) {
                return this.options[n]
            },
            trigger: function(n, t) {
                var i = this.calendar;
                return i.trigger.apply(i, [n, t || this].concat(Array.prototype.slice.call(arguments, 2), [this]))
            },
            setDate: function(n) {
                this.setRange(this.computeRange(n))
            },
            setRange: function(t) {
                n.extend(this, t);
                this.updateTitle()
            },
            computeRange: function(n) {
                var f = gt(this.intervalDuration),
                    t = n.clone().startOf(f),
                    i = t.clone().add(this.intervalDuration),
                    r, u;
                return /year|month|week|day/.test(f) ? (t.stripTime(), i.stripTime()) : (t.hasTime() || (t = this.calendar.time(0)), i.hasTime() || (i = this.calendar.time(0))), r = t.clone(), r = this.skipHiddenDays(r), u = i.clone(), u = this.skipHiddenDays(u, -1, !0), {
                    intervalUnit: f,
                    intervalStart: t,
                    intervalEnd: i,
                    start: r,
                    end: u
                }
            },
            computePrevDate: function(n) {
                return this.massageCurrentDate(n.clone().startOf(this.intervalUnit).subtract(this.intervalDuration), -1)
            },
            computeNextDate: function(n) {
                return this.massageCurrentDate(n.clone().startOf(this.intervalUnit).add(this.intervalDuration))
            },
            massageCurrentDate: function(n, t) {
                return this.intervalDuration.as("days") <= 1 && this.isHiddenDay(n) && (n = this.skipHiddenDays(n, t), n.startOf("day")), n
            },
            updateTitle: function() {
                this.title = this.computeTitle()
            },
            computeTitle: function() {
                return this.formatRange({
                    start: this.calendar.applyTimezone(this.intervalStart),
                    end: this.calendar.applyTimezone(this.intervalEnd)
                }, this.opt("titleFormat") || this.computeTitleFormat(), this.opt("titleRangeSeparator"))
            },
            computeTitleFormat: function() {
                return this.intervalUnit == "year" ? "YYYY" : this.intervalUnit == "month" ? this.opt("monthYearFormat") : this.intervalDuration.as("days") > 1 ? "ll" : "LL"
            },
            formatRange: function(n, t, i) {
                var r = n.end;
                return r.hasTime() || (r = r.clone().subtract(1)), br(n.start, r, t, i, this.opt("isRTL"))
            },
            setElement: function(n) {
                this.el = n;
                this.bindGlobalHandlers()
            },
            removeElement: function() {
                this.clear();
                this.isSkeletonRendered && (this.unrenderSkeleton(), this.isSkeletonRendered = !1);
                this.unbindGlobalHandlers();
                this.el.remove()
            },
            display: function(t) {
                var i = this,
                    r = null;
                return this.displaying && (r = this.queryScroll()), this.calendar.freezeContentHeight(), this.clear().then(function() {
                    return i.displaying = n.when(i.displayView(t)).then(function() {
                        i.forceScroll(i.computeInitialScroll(r));
                        i.calendar.unfreezeContentHeight();
                        i.triggerRender()
                    })
                })
            },
            clear: function() {
                var t = this,
                    i = this.displaying;
                return i ? i.then(function() {
                    return t.displaying = null, t.clearEvents(), t.clearView()
                }) : n.when()
            },
            displayView: function(n) {
                this.isSkeletonRendered || (this.renderSkeleton(), this.isSkeletonRendered = !0);
                n && this.setDate(n);
                this.render && this.render();
                this.renderDates();
                this.updateSize();
                this.renderBusinessHours();
                this.startNowIndicator()
            },
            clearView: function() {
                this.unselect();
                this.stopNowIndicator();
                this.triggerUnrender();
                this.unrenderBusinessHours();
                this.unrenderDates();
                this.destroy && this.destroy()
            },
            renderSkeleton: function() {},
            unrenderSkeleton: function() {},
            renderDates: function() {},
            unrenderDates: function() {},
            triggerRender: function() {
                this.trigger("viewRender", this, this, this.el)
            },
            triggerUnrender: function() {
                this.trigger("viewDestroy", this, this, this.el)
            },
            bindGlobalHandlers: function() {
                this.listenTo(n(document), "mousedown", this.handleDocumentMousedown);
                this.listenTo(n(document), "touchstart", this.handleDocumentTouchStart);
                this.listenTo(n(document), "touchend", this.handleDocumentTouchEnd)
            },
            unbindGlobalHandlers: function() {
                this.stopListeningTo(n(document))
            },
            initThemingProps: function() {
                var n = this.opt("theme") ? "ui" : "fc";
                this.widgetHeaderClass = n + "-widget-header";
                this.widgetContentClass = n + "-widget-content";
                this.highlightStateClass = n + "-state-highlight"
            },
            renderBusinessHours: function() {},
            unrenderBusinessHours: function() {},
            startNowIndicator: function() {
                var u = this,
                    i, r, n;
                this.opt("nowIndicator") && (i = this.getNowIndicatorUnit(), i && (r = tt(this, "updateNowIndicator"), this.initialNowDate = this.calendar.getNow(), this.initialNowQueriedMs = +new Date, this.renderNowIndicator(this.initialNowDate), this.isNowIndicatorRendered = !0, n = this.initialNowDate.clone().startOf(i).add(1, i) - this.initialNowDate, this.nowIndicatorTimeoutID = setTimeout(function() {
                    u.nowIndicatorTimeoutID = null;
                    r();
                    n = +t.duration(1, i);
                    n = Math.max(100, n);
                    u.nowIndicatorIntervalID = setInterval(r, n)
                }, n)))
            },
            updateNowIndicator: function() {
                this.isNowIndicatorRendered && (this.unrenderNowIndicator(), this.renderNowIndicator(this.initialNowDate.clone().add(new Date - this.initialNowQueriedMs)))
            },
            stopNowIndicator: function() {
                this.isNowIndicatorRendered && (this.nowIndicatorTimeoutID && (clearTimeout(this.nowIndicatorTimeoutID), this.nowIndicatorTimeoutID = null), this.nowIndicatorIntervalID && (clearTimeout(this.nowIndicatorIntervalID), this.nowIndicatorIntervalID = null), this.unrenderNowIndicator(), this.isNowIndicatorRendered = !1)
            },
            getNowIndicatorUnit: function() {},
            renderNowIndicator: function() {},
            unrenderNowIndicator: function() {},
            updateSize: function(n) {
                var t;
                n && (t = this.queryScroll());
                this.updateHeight(n);
                this.updateWidth(n);
                this.updateNowIndicator();
                n && this.setScroll(t)
            },
            updateWidth: function() {},
            updateHeight: function() {
                var n = this.calendar;
                this.setHeight(n.getSuggestedViewHeight(), n.isHeightAuto())
            },
            setHeight: function() {},
            computeInitialScroll: function() {
                return 0
            },
            queryScroll: function() {},
            setScroll: function() {},
            forceScroll: function(n) {
                var t = this;
                this.setScroll(n);
                setTimeout(function() {
                    t.setScroll(n)
                }, 0)
            },
            displayEvents: function(n) {
                var t = this.queryScroll();
                this.clearEvents();
                this.renderEvents(n);
                this.isEventsRendered = !0;
                this.setScroll(t);
                this.triggerEventRender()
            },
            clearEvents: function() {
                var n;
                this.isEventsRendered && (n = this.queryScroll(), this.triggerEventUnrender(), this.destroyEvents && this.destroyEvents(), this.unrenderEvents(), this.setScroll(n), this.isEventsRendered = !1)
            },
            renderEvents: function() {},
            unrenderEvents: function() {},
            triggerEventRender: function() {
                this.renderedEventSegEach(function(n) {
                    this.trigger("eventAfterRender", n.event, n.event, n.el)
                });
                this.trigger("eventAfterAllRender")
            },
            triggerEventUnrender: function() {
                this.renderedEventSegEach(function(n) {
                    this.trigger("eventDestroy", n.event, n.event, n.el)
                })
            },
            resolveEventEl: function(t, i) {
                var r = this.trigger("eventRender", t, t, i);
                return r === !1 ? i = null : r && r !== !0 && (i = n(r)), i
            },
            showEvent: function(n) {
                this.renderedEventSegEach(function(n) {
                    n.el.css("visibility", "")
                }, n)
            },
            hideEvent: function(n) {
                this.renderedEventSegEach(function(n) {
                    n.el.css("visibility", "hidden")
                }, n)
            },
            renderedEventSegEach: function(n, t) {
                for (var r = this.getEventSegs(), i = 0; i < r.length; i++) t && r[i].event._id !== t._id || r[i].el && n.call(this, r[i])
            },
            getEventSegs: function() {
                return []
            },
            isEventDraggable: function(n) {
                var t = n.source || {};
                return o(n.startEditable, t.startEditable, this.opt("eventStartEditable"), n.editable, t.editable, this.opt("editable"))
            },
            reportEventDrop: function(n, t, i, r, u) {
                var f = this.calendar,
                    e = f.mutateEvent(n, t, i),
                    o = function() {
                        e.undo();
                        f.reportEventChange()
                    };
                this.triggerEventDrop(n, e.dateDelta, o, r, u);
                f.reportEventChange()
            },
            triggerEventDrop: function(n, t, i, r, u) {
                this.trigger("eventDrop", r[0], n, t, i, u, {})
            },
            reportExternalDrop: function(t, i, r, u, f) {
                var e = t.eventProps,
                    o, s;
                e && (o = n.extend({}, e, i), s = this.calendar.renderEvent(o, t.stick)[0]);
                this.triggerExternalDrop(s, i, r, u, f)
            },
            triggerExternalDrop: function(n, t, i, r, u) {
                this.trigger("drop", i[0], t.start, r, u);
                n && this.trigger("eventReceive", null, n)
            },
            renderDrag: function() {},
            unrenderDrag: function() {},
            isEventResizableFromStart: function(n) {
                return this.opt("eventResizableFromStart") && this.isEventResizable(n)
            },
            isEventResizableFromEnd: function(n) {
                return this.isEventResizable(n)
            },
            isEventResizable: function(n) {
                var t = n.source || {};
                return o(n.durationEditable, t.durationEditable, this.opt("eventDurationEditable"), n.editable, t.editable, this.opt("editable"))
            },
            reportEventResize: function(n, t, i, r, u) {
                var f = this.calendar,
                    e = f.mutateEvent(n, t, i),
                    o = function() {
                        e.undo();
                        f.reportEventChange()
                    };
                this.triggerEventResize(n, e.durationDelta, o, r, u);
                f.reportEventChange()
            },
            triggerEventResize: function(n, t, i, r, u) {
                this.trigger("eventResize", r[0], n, t, i, u, {})
            },
            select: function(n, t) {
                this.unselect(t);
                this.renderSelection(n);
                this.reportSelection(n, t)
            },
            renderSelection: function() {},
            reportSelection: function(n, t) {
                this.isSelected = !0;
                this.triggerSelect(n, t)
            },
            triggerSelect: function(n, t) {
                this.trigger("select", null, this.calendar.applyTimezone(n.start), this.calendar.applyTimezone(n.end), t)
            },
            unselect: function(n) {
                this.isSelected && (this.isSelected = !1, this.destroySelection && this.destroySelection(), this.unrenderSelection(), this.trigger("unselect", null, n))
            },
            unrenderSelection: function() {},
            selectEvent: function(n) {
                this.selectedEvent && this.selectedEvent === n || (this.unselectEvent(), this.renderedEventSegEach(function(n) {
                    n.el.addClass("fc-selected")
                }, n), this.selectedEvent = n)
            },
            unselectEvent: function() {
                this.selectedEvent && (this.renderedEventSegEach(function(n) {
                    n.el.removeClass("fc-selected")
                }, this.selectedEvent), this.selectedEvent = null)
            },
            isEventSelected: function(n) {
                return this.selectedEvent && this.selectedEvent._id === n._id
            },
            handleDocumentMousedown: function(n) {
                !this.calendar.isTouch && tr(n) && (this.processRangeUnselect(n), this.processEventUnselect(n))
            },
            handleDocumentTouchStart: function(n) {
                this.processRangeUnselect(n)
            },
            handleDocumentTouchEnd: function(n) {
                this.processEventUnselect(n)
            },
            processRangeUnselect: function(t) {
                var i;
                this.isSelected && this.opt("unselectAuto") && (i = this.opt("unselectCancel"), i && n(t.target).closest(i).length || this.unselect(t))
            },
            processEventUnselect: function(t) {
                this.selectedEvent && (n(t.target).closest(".fc-selected").length || this.unselectEvent())
            },
            triggerDayClick: function(n, t, i) {
                this.trigger("dayClick", t, this.calendar.applyTimezone(n.start), i)
            },
            initHiddenDays: function() {
                var i = this.opt("hiddenDays") || [],
                    r = [],
                    u = 0,
                    t;
                for (this.opt("weekends") === !1 && i.push(0, 6), t = 0; t < 7; t++)(r[t] = n.inArray(t, i) !== -1) || u++;
                if (!u) throw "invalid hiddenDays";
                this.isHiddenDayHash = r
            },
            isHiddenDay: function(n) {
                return t.isMoment(n) && (n = n.day()), this.isHiddenDayHash[n]
            },
            skipHiddenDays: function(n, t, i) {
                var r = n.clone();
                for (t = t || 1; this.isHiddenDayHash[(r.day() + (i ? t : 0) + 7) % 7];) r.add(t, "days");
                return r
            },
            computeDayRange: function(n) {
                var r = n.start.clone().stripTime(),
                    i = n.end,
                    t = null,
                    u;
                return i && (t = i.clone().stripTime(), u = +i.time(), u && u >= this.nextDayThreshold && t.add(1, "days")), (!i || t <= r) && (t = r.clone().add(1, "days")), {
                    start: r,
                    end: t
                }
            },
            isMultiDayEvent: function(n) {
                var t = this.computeDayRange(n);
                return t.end.diff(t.start, "days") > 1
            }
        }),
        cu = i.Scroller = s.extend({
            el: null,
            scrollEl: null,
            overflowX: null,
            overflowY: null,
            constructor: function(n) {
                n = n || {};
                this.overflowX = n.overflowX || n.overflow || "auto";
                this.overflowY = n.overflowY || n.overflow || "auto"
            },
            render: function() {
                this.el = this.renderEl();
                this.applyOverflow()
            },
            renderEl: function() {
                return this.scrollEl = n('<div class="fc-scroller"><\/div>')
            },
            clear: function() {
                this.setHeight("auto");
                this.applyOverflow()
            },
            destroy: function() {
                this.el.remove()
            },
            applyOverflow: function() {
                this.scrollEl.css({
                    "overflow-x": this.overflowX,
                    "overflow-y": this.overflowY
                })
            },
            lockOverflow: function(n) {
                var t = this.overflowX,
                    i = this.overflowY;
                n = n || this.getScrollbarWidths();
                t === "auto" && (t = n.top || n.bottom || this.scrollEl[0].scrollWidth - 1 > this.scrollEl[0].clientWidth ? "scroll" : "hidden");
                i === "auto" && (i = n.left || n.right || this.scrollEl[0].scrollHeight - 1 > this.scrollEl[0].clientHeight ? "scroll" : "hidden");
                this.scrollEl.css({
                    "overflow-x": t,
                    "overflow-y": i
                })
            },
            setHeight: function(n) {
                this.scrollEl.height(n)
            },
            getScrollTop: function() {
                return this.scrollEl.scrollTop()
            },
            setScrollTop: function(n) {
                this.scrollEl.scrollTop(n)
            },
            getClientWidth: function() {
                return this.scrollEl[0].clientWidth
            },
            getClientHeight: function() {
                return this.scrollEl[0].clientHeight
            },
            getScrollbarWidths: function() {
                return bt(this.scrollEl)
            }
        }),
        e = i.Calendar = s.extend({
            dirDefaults: null,
            langDefaults: null,
            overrides: null,
            options: null,
            viewSpecCache: null,
            view: null,
            header: null,
            loadingLevel: 0,
            isTouch: !1,
            constructor: oe,
            initialize: function() {},
            initOptions: function(n) {
                var r, t, f, u;
                n = wu(n);
                r = n.lang;
                t = w[r];
                t || (r = e.defaults.lang, t = w[r] || {});
                f = o(n.isRTL, t.isRTL, e.defaults.isRTL);
                u = f ? e.rtlDefaults : {};
                this.dirDefaults = u;
                this.langDefaults = t;
                this.overrides = n;
                this.options = g([e.defaults, u, t, n]);
                lu(this.options);
                this.isTouch = this.options.isTouch != null ? this.options.isTouch : i.isTouch;
                this.viewSpecCache = {}
            },
            getViewSpec: function(n) {
                var t = this.viewSpecCache;
                return t[n] || (t[n] = this.buildViewSpec(n))
            },
            getUnitViewSpec: function(t) {
                var r, u, f;
                if (n.inArray(t, st) != -1)
                    for (r = this.header.getViewsWithButtons(), n.each(i.views, function(n) {
                            r.push(n)
                        }), u = 0; u < r.length; u++)
                        if (f = this.getViewSpec(r[u]), f && f.singleUnit == t) return f
            },
            buildViewSpec: function(n) {
                for (var s = this.overrides.views || {}, h = [], c = [], o = [], u = n, i, f, r, e; u;) i = a[u], f = s[u], u = null, typeof i == "function" && (i = {
                    "class": i
                }), i && (h.unshift(i), c.unshift(i.defaults || {}), r = r || i.duration, u = u || i.type), f && (o.unshift(f), r = r || f.duration, u = u || f.type);
                return (i = ti(h), i.type = n, !i["class"]) ? !1 : (r && (r = t.duration(r), r.valueOf() && (i.duration = r, e = gt(r), r.as(e) === 1 && (i.singleUnit = e, o.unshift(s[e] || {})))), i.defaults = g(c), i.overrides = g(o), this.buildViewSpecOptions(i), this.buildViewSpecButtonText(i, n), i)
            },
            buildViewSpecOptions: function(n) {
                n.options = g([e.defaults, n.defaults, this.dirDefaults, this.langDefaults, this.overrides, n.overrides]);
                lu(n.options)
            },
            buildViewSpecButtonText: function(n, t) {
                function i(i) {
                    var r = i.buttonText || {};
                    return r[t] || (n.singleUnit ? r[n.singleUnit] : null)
                }
                n.buttonTextOverride = i(this.overrides) || n.overrides.buttonText;
                n.buttonTextDefault = i(this.langDefaults) || i(this.dirDefaults) || n.defaults.buttonText || i(e.defaults) || (n.duration ? this.humanizeDuration(n.duration) : null) || t
            },
            instantiateView: function(n) {
                var t = this.getViewSpec(n);
                return new t["class"](this, n, t.options, t.duration)
            },
            isValidViewType: function(n) {
                return Boolean(this.getViewSpec(n))
            },
            pushLoading: function() {
                this.loadingLevel++ || this.trigger("loading", null, !0, this.view)
            },
            popLoading: function() {
                --this.loadingLevel || this.trigger("loading", null, !1, this.view)
            },
            buildSelectSpan: function(n, t) {
                var i = this.moment(n).stripZone(),
                    r;
                return r = t ? this.moment(t).stripZone() : i.hasTime() ? i.clone().add(this.defaultTimedEventDuration) : i.clone().add(this.defaultAllDayEventDuration), {
                    start: i,
                    end: r
                }
            }
        });
    e.mixin(iu);
    e.defaults = {
        titleRangeSeparator: " — ",
        monthYearFormat: "MMMM YYYY",
        defaultTimedEventDuration: "02:00:00",
        defaultAllDayEventDuration: {
            days: 1
        },
        forceEventDuration: !1,
        nextDayThreshold: "09:00:00",
        defaultView: "month",
        aspectRatio: 1.35,
        header: {
            left: "title",
            center: "",
            right: "today prev,next"
        },
        weekends: !0,
        weekNumbers: !1,
        weekNumberTitle: "W",
        weekNumberCalculation: "local",
        scrollTime: "06:00:00",
        lazyFetching: !0,
        startParam: "start",
        endParam: "end",
        timezoneParam: "timezone",
        timezone: !1,
        isRTL: !1,
        buttonText: {
            prev: "prev",
            next: "next",
            prevYear: "prev year",
            nextYear: "next year",
            year: "year",
            today: "today",
            month: "month",
            week: "week",
            day: "day"
        },
        buttonIcons: {
            prev: "left-single-arrow",
            next: "right-single-arrow",
            prevYear: "left-double-arrow",
            nextYear: "right-double-arrow"
        },
        theme: !1,
        themeButtonIcons: {
            prev: "circle-triangle-w",
            next: "circle-triangle-e",
            prevYear: "seek-prev",
            nextYear: "seek-next"
        },
        dragOpacity: .75,
        dragRevertDuration: 500,
        dragScroll: !0,
        unselectAuto: !0,
        dropAccept: "*",
        eventOrder: "title",
        eventLimit: !1,
        eventLimitText: "more",
        eventLimitClick: "popover",
        dayPopoverFormat: "LL",
        handleWindowResize: !0,
        windowResizeDelay: 200,
        longPressDelay: 1e3
    };
    e.englishDefaults = {
        dayPopoverFormat: "dddd, MMMM D"
    };
    e.rtlDefaults = {
        header: {
            left: "next,prev today",
            center: "",
            right: "title"
        },
        buttonIcons: {
            prev: "right-single-arrow",
            next: "left-single-arrow",
            prevYear: "right-double-arrow",
            nextYear: "left-double-arrow"
        },
        themeButtonIcons: {
            prev: "circle-triangle-e",
            next: "circle-triangle-w",
            nextYear: "seek-prev",
            prevYear: "seek-next"
        }
    };
    w = i.langs = {};
    i.datepickerLang = function(t, i, r) {
        var u = w[t] || (w[t] = {});
        u.isRTL = r.isRTL;
        u.weekNumberTitle = r.weekHeader;
        n.each(se, function(n, t) {
            u[n] = t(r)
        });
        n.datepicker && (n.datepicker.regional[i] = n.datepicker.regional[t] = r, n.datepicker.regional.en = n.datepicker.regional[""], n.datepicker.setDefaults(r))
    };
    i.lang = function(t, i) {
        var r, u;
        r = w[t] || (w[t] = {});
        i && (r = w[t] = g([r, i]));
        u = au(t);
        n.each(he, function(n, t) {
            r[n] == null && (r[n] = t(u, r))
        });
        e.defaults.lang = t
    };
    var se = {
            buttonText: function(n) {
                return {
                    prev: ri(n.prevText),
                    next: ri(n.nextText),
                    today: ri(n.currentText)
                }
            },
            monthYearFormat: function(n) {
                return n.showMonthAfterYear ? "YYYY[" + n.yearSuffix + "] MMMM" : "MMMM YYYY[" + n.yearSuffix + "]"
            }
        },
        he = {
            dayOfMonthFormat: function(n, t) {
                var i = n.longDateFormat("l");
                return i = i.replace(/^Y+[^\w\s]*|[^\w\s]*Y+$/g, ""), t.isRTL ? i += " ddd" : i = "ddd " + i, i
            },
            mediumTimeFormat: function(n) {
                return n.longDateFormat("LT").replace(/\s*a$/i, "a")
            },
            smallTimeFormat: function(n) {
                return n.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "a")
            },
            extraSmallTimeFormat: function(n) {
                return n.longDateFormat("LT").replace(":mm", "(:mm)").replace(/(\Wmm)$/, "($1)").replace(/\s*a$/i, "t")
            },
            hourFormat: function(n) {
                return n.longDateFormat("LT").replace(":mm", "").replace(/(\Wmm)$/, "").replace(/\s*a$/i, "a")
            },
            noMeridiemTimeFormat: function(n) {
                return n.longDateFormat("LT").replace(/\s*a$/i, "")
            }
        },
        ce = {
            smallDayDateFormat: function(n) {
                return n.isRTL ? "D dd" : "dd D"
            },
            weekFormat: function(n) {
                return n.isRTL ? "w[ " + n.weekNumberTitle + "]" : "[" + n.weekNumberTitle + " ]w"
            },
            smallWeekFormat: function(n) {
                return n.isRTL ? "w[" + n.weekNumberTitle + "]" : "[" + n.weekNumberTitle + "]w"
            }
        };
    i.lang("en", e.englishDefaults);
    i.sourceNormalizers = [];
    i.sourceFetchers = [];
    vu = {
        dataType: "json",
        cache: !1
    };
    yu = 1;
    e.prototype.getPeerEvents = function(n, t) {
        for (var u = this.getEventCache(), f = [], r, i = 0; i < u.length; i++) r = u[i], t && t._id === r._id || f.push(r);
        return f
    };
    var yi = i.BasicView = d.extend({
            scroller: null,
            dayGridClass: ut,
            dayGrid: null,
            dayNumbersVisible: !1,
            weekNumbersVisible: !1,
            weekNumberWidth: null,
            headContainerEl: null,
            headRowEl: null,
            initialize: function() {
                this.dayGrid = this.instantiateDayGrid();
                this.scroller = new cu({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            instantiateDayGrid: function() {
                var n = this.dayGridClass.extend(ve);
                return new n(this)
            },
            setRange: function(n) {
                d.prototype.setRange.call(this, n);
                this.dayGrid.breakOnWeeks = /year|month|week/.test(this.intervalUnit);
                this.dayGrid.setRange(n)
            },
            computeRange: function(n) {
                var t = d.prototype.computeRange.call(this, n);
                return /year|month/.test(t.intervalUnit) && (t.start.startOf("week"), t.start = this.skipHiddenDays(t.start), t.end.weekday() && (t.end.add(1, "week").startOf("week"), t.end = this.skipHiddenDays(t.end, -1, !0))), t
            },
            renderDates: function() {
                this.dayNumbersVisible = this.dayGrid.rowCnt > 1;
                this.weekNumbersVisible = this.opt("weekNumbers");
                this.dayGrid.numbersVisible = this.dayNumbersVisible || this.weekNumbersVisible;
                this.el.addClass("fc-basic-view").html(this.renderSkeletonHtml());
                this.renderHead();
                this.scroller.render();
                var t = this.scroller.el.addClass("fc-day-grid-container"),
                    i = n('<div class="fc-day-grid" />').appendTo(t);
                this.el.find(".fc-body > tr > td").append(t);
                this.dayGrid.setElement(i);
                this.dayGrid.renderDates(this.hasRigidRows())
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.dayGrid.renderHeadHtml());
                this.headRowEl = this.headContainerEl.find(".fc-row")
            },
            unrenderDates: function() {
                this.dayGrid.unrenderDates();
                this.dayGrid.removeElement();
                this.scroller.destroy()
            },
            renderBusinessHours: function() {
                this.dayGrid.renderBusinessHours()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"><\/td><\/tr><\/thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '"><\/td><\/tr><\/tbody><\/table>'
            },
            weekNumberStyleAttr: function() {
                return this.weekNumberWidth !== null ? 'style="width:' + this.weekNumberWidth + 'px"' : ""
            },
            hasRigidRows: function() {
                var n = this.opt("eventLimit");
                return n && typeof n != "number"
            },
            updateWidth: function() {
                this.weekNumbersVisible && (this.weekNumberWidth = di(this.el.find(".fc-week-number")))
            },
            setHeight: function(n, t) {
                var i = this.opt("eventLimit"),
                    r, u;
                this.scroller.clear();
                wi(this.headRowEl);
                this.dayGrid.removeSegPopover();
                i && typeof i == "number" && this.dayGrid.limitRows(i);
                r = this.computeScrollerHeight(n);
                this.setGridHeight(r, t);
                i && typeof i != "number" && this.dayGrid.limitRows(i);
                t || (this.scroller.setHeight(r), u = this.scroller.getScrollbarWidths(), (u.left || u.right) && (pi(this.headRowEl, u), r = this.computeScrollerHeight(n), this.scroller.setHeight(r)), this.scroller.lockOverflow(u))
            },
            computeScrollerHeight: function(n) {
                return n - gi(this.el, this.scroller.el)
            },
            setGridHeight: function(n, t) {
                t ? ki(this.dayGrid.rowEls) : bi(this.dayGrid.rowEls, n, !0)
            },
            queryScroll: function() {
                return this.scroller.getScrollTop()
            },
            setScroll: function(n) {
                this.scroller.setScrollTop(n)
            },
            prepareHits: function() {
                this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.dayGrid.releaseHits()
            },
            queryHit: function(n, t) {
                return this.dayGrid.queryHit(n, t)
            },
            getHitSpan: function(n) {
                return this.dayGrid.getHitSpan(n)
            },
            getHitEl: function(n) {
                return this.dayGrid.getHitEl(n)
            },
            renderEvents: function(n) {
                this.dayGrid.renderEvents(n);
                this.updateHeight()
            },
            getEventSegs: function() {
                return this.dayGrid.getEventSegs()
            },
            unrenderEvents: function() {
                this.dayGrid.unrenderEvents()
            },
            renderDrag: function(n, t) {
                return this.dayGrid.renderDrag(n, t)
            },
            unrenderDrag: function() {
                this.dayGrid.unrenderDrag()
            },
            renderSelection: function(n) {
                this.dayGrid.renderSelection(n)
            },
            unrenderSelection: function() {
                this.dayGrid.unrenderSelection()
            }
        }),
        ve = {
            renderHeadIntroHtml: function() {
                var n = this.view;
                return n.weekNumbersVisible ? '<th class="fc-week-number ' + n.widgetHeaderClass + '" ' + n.weekNumberStyleAttr() + "><span>" + r(n.opt("weekNumberTitle")) + "<\/span><\/th>" : ""
            },
            renderNumberIntroHtml: function(n) {
                var t = this.view;
                return t.weekNumbersVisible ? '<td class="fc-week-number" ' + t.weekNumberStyleAttr() + "><span>" + this.getCellDate(n, 0).format("w") + "<\/span><\/td>" : ""
            },
            renderBgIntroHtml: function() {
                var n = this.view;
                return n.weekNumbersVisible ? '<td class="fc-week-number ' + n.widgetContentClass + '" ' + n.weekNumberStyleAttr() + "><\/td>" : ""
            },
            renderIntroHtml: function() {
                var n = this.view;
                return n.weekNumbersVisible ? '<td class="fc-week-number" ' + n.weekNumberStyleAttr() + "><\/td>" : ""
            }
        },
        ye = i.MonthView = yi.extend({
            computeRange: function(n) {
                var t = yi.prototype.computeRange.call(this, n),
                    i;
                return this.isFixedWeeks() && (i = Math.ceil(t.end.diff(t.start, "weeks", !0)), t.end.add(6 - i, "weeks")), t
            },
            setGridHeight: function(n, t) {
                t = t || this.opt("weekMode") === "variable";
                t && (n *= this.rowCnt / 6);
                bi(this.dayGrid.rowEls, n, !t)
            },
            isFixedWeeks: function() {
                var n = this.opt("weekMode");
                return n ? n === "fixed" : this.opt("fixedWeekCount")
            }
        });
    a.basic = {
        "class": yi
    };
    a.basicDay = {
        type: "basic",
        duration: {
            days: 1
        }
    };
    a.basicWeek = {
        type: "basic",
        duration: {
            weeks: 1
        }
    };
    a.month = {
        "class": ye,
        duration: {
            months: 1
        },
        defaults: {
            fixedWeekCount: !0
        }
    };
    var pe = i.AgendaView = d.extend({
            scroller: null,
            timeGridClass: ai,
            timeGrid: null,
            dayGridClass: ut,
            dayGrid: null,
            axisWidth: null,
            headContainerEl: null,
            noScrollRowEls: null,
            bottomRuleEl: null,
            initialize: function() {
                this.timeGrid = this.instantiateTimeGrid();
                this.opt("allDaySlot") && (this.dayGrid = this.instantiateDayGrid());
                this.scroller = new cu({
                    overflowX: "hidden",
                    overflowY: "auto"
                })
            },
            instantiateTimeGrid: function() {
                var n = this.timeGridClass.extend(we);
                return new n(this)
            },
            instantiateDayGrid: function() {
                var n = this.dayGridClass.extend(be);
                return new n(this)
            },
            setRange: function(n) {
                d.prototype.setRange.call(this, n);
                this.timeGrid.setRange(n);
                this.dayGrid && this.dayGrid.setRange(n)
            },
            renderDates: function() {
                this.el.addClass("fc-agenda-view").html(this.renderSkeletonHtml());
                this.renderHead();
                this.scroller.render();
                var t = this.scroller.el.addClass("fc-time-grid-container"),
                    i = n('<div class="fc-time-grid" />').appendTo(t);
                this.el.find(".fc-body > tr > td").append(t);
                this.timeGrid.setElement(i);
                this.timeGrid.renderDates();
                this.bottomRuleEl = n('<hr class="fc-divider ' + this.widgetHeaderClass + '"/>').appendTo(this.timeGrid.el);
                this.dayGrid && (this.dayGrid.setElement(this.el.find(".fc-day-grid")), this.dayGrid.renderDates(), this.dayGrid.bottomCoordPadding = this.dayGrid.el.next("hr").outerHeight());
                this.noScrollRowEls = this.el.find(".fc-row:not(.fc-scroller *)")
            },
            renderHead: function() {
                this.headContainerEl = this.el.find(".fc-head-container").html(this.timeGrid.renderHeadHtml())
            },
            unrenderDates: function() {
                this.timeGrid.unrenderDates();
                this.timeGrid.removeElement();
                this.dayGrid && (this.dayGrid.unrenderDates(), this.dayGrid.removeElement());
                this.scroller.destroy()
            },
            renderSkeletonHtml: function() {
                return '<table><thead class="fc-head"><tr><td class="fc-head-container ' + this.widgetHeaderClass + '"><\/td><\/tr><\/thead><tbody class="fc-body"><tr><td class="' + this.widgetContentClass + '">' + (this.dayGrid ? '<div class="fc-day-grid"/><hr class="fc-divider ' + this.widgetHeaderClass + '"/>' : "") + "<\/td><\/tr><\/tbody><\/table>"
            },
            axisStyleAttr: function() {
                return this.axisWidth !== null ? 'style="width:' + this.axisWidth + 'px"' : ""
            },
            renderBusinessHours: function() {
                this.timeGrid.renderBusinessHours();
                this.dayGrid && this.dayGrid.renderBusinessHours()
            },
            unrenderBusinessHours: function() {
                this.timeGrid.unrenderBusinessHours();
                this.dayGrid && this.dayGrid.unrenderBusinessHours()
            },
            getNowIndicatorUnit: function() {
                return this.timeGrid.getNowIndicatorUnit()
            },
            renderNowIndicator: function(n) {
                this.timeGrid.renderNowIndicator(n)
            },
            unrenderNowIndicator: function() {
                this.timeGrid.unrenderNowIndicator()
            },
            updateSize: function(n) {
                this.timeGrid.updateSize(n);
                d.prototype.updateSize.call(this, n)
            },
            updateWidth: function() {
                this.axisWidth = di(this.el.find(".fc-axis"))
            },
            setHeight: function(n, t) {
                var i, r, u;
                this.bottomRuleEl.hide();
                this.scroller.clear();
                wi(this.noScrollRowEls);
                this.dayGrid && (this.dayGrid.removeSegPopover(), i = this.opt("eventLimit"), i && typeof i != "number" && (i = ke), i && this.dayGrid.limitRows(i));
                t || (r = this.computeScrollerHeight(n), this.scroller.setHeight(r), u = this.scroller.getScrollbarWidths(), (u.left || u.right) && (pi(this.noScrollRowEls, u), r = this.computeScrollerHeight(n), this.scroller.setHeight(r)), this.scroller.lockOverflow(u), this.timeGrid.getTotalSlatHeight() < r && this.bottomRuleEl.show())
            },
            computeScrollerHeight: function(n) {
                return n - gi(this.el, this.scroller.el)
            },
            computeInitialScroll: function() {
                var i = t.duration(this.opt("scrollTime")),
                    n = this.timeGrid.computeTimeTop(i);
                return n = Math.ceil(n), n && n++, n
            },
            queryScroll: function() {
                return this.scroller.getScrollTop()
            },
            setScroll: function(n) {
                this.scroller.setScrollTop(n)
            },
            prepareHits: function() {
                this.timeGrid.prepareHits();
                this.dayGrid && this.dayGrid.prepareHits()
            },
            releaseHits: function() {
                this.timeGrid.releaseHits();
                this.dayGrid && this.dayGrid.releaseHits()
            },
            queryHit: function(n, t) {
                var i = this.timeGrid.queryHit(n, t);
                return !i && this.dayGrid && (i = this.dayGrid.queryHit(n, t)), i
            },
            getHitSpan: function(n) {
                return n.component.getHitSpan(n)
            },
            getHitEl: function(n) {
                return n.component.getHitEl(n)
            },
            renderEvents: function(n) {
                for (var i = [], r = [], u = [], f, t = 0; t < n.length; t++) n[t].allDay ? i.push(n[t]) : r.push(n[t]);
                f = this.timeGrid.renderEvents(r);
                this.dayGrid && (u = this.dayGrid.renderEvents(i));
                this.updateHeight()
            },
            getEventSegs: function() {
                return this.timeGrid.getEventSegs().concat(this.dayGrid ? this.dayGrid.getEventSegs() : [])
            },
            unrenderEvents: function() {
                this.timeGrid.unrenderEvents();
                this.dayGrid && this.dayGrid.unrenderEvents()
            },
            renderDrag: function(n, t) {
                return n.start.hasTime() ? this.timeGrid.renderDrag(n, t) : this.dayGrid ? this.dayGrid.renderDrag(n, t) : void 0
            },
            unrenderDrag: function() {
                this.timeGrid.unrenderDrag();
                this.dayGrid && this.dayGrid.unrenderDrag()
            },
            renderSelection: function(n) {
                n.start.hasTime() || n.end.hasTime() ? this.timeGrid.renderSelection(n) : this.dayGrid && this.dayGrid.renderSelection(n)
            },
            unrenderSelection: function() {
                this.timeGrid.unrenderSelection();
                this.dayGrid && this.dayGrid.unrenderSelection()
            }
        }),
        we = {
            renderHeadIntroHtml: function() {
                var n = this.view,
                    t;
                return n.opt("weekNumbers") ? (t = this.start.format(n.opt("smallWeekFormat")), '<th class="fc-axis fc-week-number ' + n.widgetHeaderClass + '" ' + n.axisStyleAttr() + "><span>" + r(t) + "<\/span><\/th>") : '<th class="fc-axis ' + n.widgetHeaderClass + '" ' + n.axisStyleAttr() + "><\/th>"
            },
            renderBgIntroHtml: function() {
                var n = this.view;
                return '<td class="fc-axis ' + n.widgetContentClass + '" ' + n.axisStyleAttr() + "><\/td>"
            },
            renderIntroHtml: function() {
                var n = this.view;
                return '<td class="fc-axis" ' + n.axisStyleAttr() + "><\/td>"
            }
        },
        be = {
            renderBgIntroHtml: function() {
                var n = this.view;
                return '<td class="fc-axis ' + n.widgetContentClass + '" ' + n.axisStyleAttr() + "><span>" + (n.opt("allDayHtml") || r(n.opt("allDayText"))) + "<\/span><\/td>"
            },
            renderIntroHtml: function() {
                var n = this.view;
                return '<td class="fc-axis" ' + n.axisStyleAttr() + "><\/td>"
            }
        },
        ke = 5,
        pu = [{
            hours: 1
        }, {
            minutes: 30
        }, {
            minutes: 15
        }, {
            seconds: 30
        }, {
            seconds: 15
        }];
    return a.agenda = {
        "class": pe,
        defaults: {
            allDaySlot: !0,
            allDayText: "all-day",
            slotDuration: "00:30:00",
            minTime: "00:00:00",
            maxTime: "24:00:00",
            slotEventOverlap: !0
        }
    }, a.agendaDay = {
        type: "agenda",
        duration: {
            days: 1
        }
    }, a.agendaWeek = {
        type: "agenda",
        duration: {
            weeks: 1
        }
    }, i
});
$(function() {
    $("#side-menu").metisMenu()
});
$(function() {
    $(window).bind("load resize", function() {
        var t = 75,
            i = this.window.innerWidth > 0 ? this.window.innerWidth : this.screen.width,
            n;
        i < 768 ? $("div.navbar-collapse").addClass("collapse") : $("div.navbar-collapse").removeClass("collapse");
        n = (this.window.innerHeight > 0 ? this.window.innerHeight : this.screen.height) - 1;
        n = n - t;
        n < 1 && (n = 1);
        n > t && $("#page-wrapper").css("min-height", n + "px")
    });
    var n = window.location,
        t = $("ul.nav a").filter(function() {
            return this.href === n.toString() || n.href.indexOf(this.href) === 0 && this.href !== n.origin + "/" || $(this).hasClass("active") ? !0 : !1
        }).addClass("active").parent().parent().addClass("in").parent();
    t.is("li") && t.addClass("active")
})