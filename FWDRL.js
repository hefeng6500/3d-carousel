var _fwd_fwdScope
if (
  (window.FWDAnimation ||
    ((
      (_fwd_fwdScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window)._fwd_fwdQueue || (_fwd_fwdScope._fwd_fwdQueue = [])
    ).push(function () {
      "use strict"
      function u(o, t, n, s) {
        n === s && (n = s - (s - t) / 1e6), o === t && (t = o + (n - o) / 1e6), (this.a = o), (this.b = t), (this.c = n), (this.d = s), (this.da = s - o), (this.ca = n - o), (this.ba = t - o)
      }
      function S(d, t, e, m) {
        var r = { a: d },
          s = {},
          n = {},
          a = { c: m },
          o = (d + t) / 2,
          l = (t + e) / 2,
          c = (e + m) / 2,
          h = (o + l) / 2,
          u = (l + c) / 2,
          p = (u - h) / 8
        return (r.b = o + (d - o) / 4), (s.b = h + p), (r.c = s.a = (r.b + s.b) / 2), (s.c = n.a = (h + u) / 2), (n.b = u - p), (a.b = c + (m - c) / 4), (n.c = a.a = (n.b + a.b) / 2), [r, s, n, a]
      }
      function d(g, b, y, v, r, x) {
        var T = {},
          c = [],
          d = x || g[0],
          m,
          O,
          P,
          k,
          I,
          A,
          D,
          H
        for (O in ((r =
          "string" == typeof r
            ? "," + r + ","
            : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
        null == b && (b = 1),
        g[0]))
          c.push(O)
        if (1 < g.length) {
          for (H = g[g.length - 1], D = !0, m = c.length; -1 < --m; )
            if (((O = c[m]), 0.05 < Math.abs(d[O] - H[O]))) {
              D = !1
              break
            }
          D && ((g = g.concat()), x && g.unshift(x), g.push(g[1]), (x = g[g.length - 3]))
        }
        for (w.length = B.length = C.length = 0, m = c.length; -1 < --m; )
          (O = c[m]),
            (_[O] = -1 !== r.indexOf("," + O + ",")),
            (T[O] = (function (d, p, e, _) {
              var r = [],
                m,
                c,
                g,
                f,
                b,
                y
              if (_) for (c = (d = [_].concat(d)).length; -1 < --c; ) "string" == typeof (y = d[c][p]) && "=" === y.charAt(1) && (d[c][p] = _[p] + +(y.charAt(0) + y.substr(2)))
              if (0 > (m = d.length - 2)) return (r[0] = new u(d[0][p], 0, 0, d[-1 > m ? 0 : 1][p])), r
              for (c = 0; c < m; c++)
                (g = d[c][p]), (f = d[c + 1][p]), (r[c] = new u(g, 0, 0, f)), e && ((b = d[c + 2][p]), (w[c] = (w[c] || 0) + (f - g) * (f - g)), (B[c] = (B[c] || 0) + (b - f) * (b - f)))
              return (r[c] = new u(d[c][p], 0, 0, d[c + 1][p])), r
            })(g, O, _[O], x))
        for (m = w.length; -1 < --m; ) (w[m] = Math.sqrt(w[m])), (B[m] = Math.sqrt(B[m]))
        if (!v) {
          for (m = c.length; -1 < --m; ) if (_[O]) for (A = (P = T[c[m]]).length - 1, k = 0; k < A; k++) (I = P[k + 1].da / B[k] + P[k].da / w[k] || 0), (C[k] = (C[k] || 0) + I * I)
          for (m = C.length; -1 < --m; ) C[m] = Math.sqrt(C[m])
        }
        for (m = c.length, k = y ? 4 : 1; -1 < --m; )
          (function (b, t, e, T, r) {
            for (var s = b.length - 1, g = 0, O = b[0].a, P = 0, k, I, A, D, H, E, L, M, F, R, z, X; P < s; P++)
              (k = (D = b[g]).a),
                (I = D.d),
                (A = b[g + 1].d),
                (L = r
                  ? ((R = w[P]),
                    (X = (0.25 * (((z = B[P]) + R) * t)) / ((!T && C[P]) || 0.5)),
                    I - ((H = I - (I - k) * (T ? 0.5 * t : 0 === R ? 0 : X / R)) + ((((E = I + (A - I) * (T ? 0.5 * t : 0 === z ? 0 : X / z)) - H) * ((3 * R) / (R + z) + 0.5)) / 4 || 0)))
                  : I - ((H = I - 0.5 * ((I - k) * t)) + (E = I + 0.5 * ((A - I) * t))) / 2),
                (H += L),
                (E += L),
                (D.c = M = H),
                (D.b = 0 == P ? (O = D.a + 0.6 * (D.c - D.a)) : O),
                (D.da = I - k),
                (D.ca = M - k),
                (D.ba = O - k),
                e ? ((F = S(k, O, M, I)), b.splice(g, 1, F[0], F[1], F[2], F[3]), (g += 4)) : g++,
                (O = E)
            ;((D = b[g]).b = O), (D.c = O + 0.4 * (D.d - O)), (D.da = D.d - D.a), (D.ca = D.c - D.a), (D.ba = O - D.a), e && ((F = S(D.a, O, D.c, D.d)), b.splice(g, 1, F[0], F[1], F[2], F[3]))
          })((P = T[(O = c[m])]), b, y, v, _[O]),
            D && (P.splice(0, k), P.splice(P.length - k, k))
        return T
      }
      var o, w, B, C, _, n, y, e
      _fwd_fwdScope.FWDFWD_fwdDefine(
        "FWDAnimation",
        ["core.FWDAnimation", "core.FWDSimpleTimeline", "FWDTweenLite"],
        function (S, d, B) {
          function g(o) {
            for (var t = [], e = o.length, n = 0; n !== e; t.push(o[n++]));
            return t
          }
          function a(o, t, e) {
            var a = o.cycle,
              n,
              d
            for (n in a) (d = a[n]), (o[n] = "function" == typeof d ? d(e, t[e]) : d[e % d.length])
            delete o.cycle
          }
          function o(p, t, m, u) {
            ;(t = !1 !== t), (m = !1 !== m)
            for (var c = _((u = !1 !== u)), a = t && m && u, o = c.length, h, g; -1 < --o; )
              (g = c[o]), (a || g instanceof d || ((h = g.target === g.vars.onComplete) && m) || (t && !h)) && g.paused(p)
          }
          var S = function (o, t, e) {
              B.call(this, o, t, e),
                (this._cycle = 0),
                (this._yoyo = !0 === this.vars.yoyo),
                (this._repeat = this.vars.repeat || 0),
                (this._repeatDelay = this.vars.repeatDelay || 0),
                (this._dirty = !0),
                (this.render = S.prototype.render)
            },
            y = 1e-10,
            l = B._internals,
            v = l.isSelector,
            w = l.isArray,
            e = (S.prototype = B.to({}, 0.1, {})),
            t = []
          ;(S.version = "1.19.0"),
            (e.constructor = S),
            (e.kill()._gc = !1),
            (S.killTweensOf = S.killDelayedCallsTo = B.killTweensOf),
            (S.getTweensOf = B.getTweensOf),
            (S.lagSmoothing = B.lagSmoothing),
            (S.ticker = B.ticker),
            (S.render = B.render),
            (e.invalidate = function () {
              return (
                (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), B.prototype.invalidate.call(this)
              )
            }),
            (e.updateTo = function (o, t) {
              var e = this.ratio,
                r = this.vars.immediateRender || o.immediateRender,
                s
              for (s in (t &&
                this._startTime < this._timeline._time &&
                ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
              o))
                this.vars[s] = o[s]
              if (this._initted || r)
                if (t) (this._initted = !1), r && this.render(0, !0, !0)
                else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && B._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration)) {
                  var d = this._totalTime
                  this.render(0, !0, !1), (this._initted = !1), this.render(d, !0, !1)
                } else if (((this._initted = !1), this._init(), 0 < this._time || r)) for (var n = this._firstPT, p; n; ) (p = n.s + n.c), (n.c *= 1 / (1 - e)), (n.s = p - n.c), (n = n._next)
              return this
            }),
            (e.render = function (b, v, e) {
              this._initted || (0 === this._duration && this.vars.repeat && this.invalidate())
              var w = this._dirty ? this.totalDuration() : this._totalDuration,
                p = this._time,
                _ = this._totalTime,
                c = this._cycle,
                d = this._duration,
                m = this._rawPrevTime,
                g,
                x,
                S,
                T,
                B,
                O,
                C,
                P,
                k
              if (
                (w - 1e-7 <= b
                  ? ((this._totalTime = w),
                    (this._cycle = this._repeat),
                    this._yoyo && 0 != (1 & this._cycle)
                      ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
                      : ((this._time = d), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                    this._reversed || ((g = !0), (x = "onComplete"), (e = e || this._timeline.autoRemoveChildren)),
                    0 === d &&
                      ((!this._initted && this.vars.lazy && !e) ||
                        (this._startTime === this._timeline._duration && (b = 0),
                        (0 > m || (0 >= b && -1e-7 <= b) || (m === y && "isPause" !== this.data)) && m !== b && ((e = !0), y < m && (x = "onReverseComplete")),
                        (this._rawPrevTime = P = !v || b || m === b ? b : y))))
                  : 1e-7 > b
                  ? ((this._totalTime = this._time = this._cycle = 0),
                    (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                    (0 !== _ || (0 === d && 0 < m)) && ((x = "onReverseComplete"), (g = this._reversed)),
                    0 > b && ((this._active = !1), 0 === d && ((!this._initted && this.vars.lazy && !e) || (0 <= m && (e = !0), (this._rawPrevTime = P = !v || b || m === b ? b : y)))),
                    this._initted || (e = !0))
                  : ((this._totalTime = this._time = b),
                    0 !== this._repeat &&
                      ((T = d + this._repeatDelay),
                      (this._cycle = (this._totalTime / T) >> 0),
                      0 !== this._cycle && this._cycle === this._totalTime / T && _ <= b && this._cycle--,
                      (this._time = this._totalTime - this._cycle * T),
                      this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
                      this._time > d ? (this._time = d) : 0 > this._time && (this._time = 0)),
                    this._easeType
                      ? ((B = this._time / d),
                        (1 === (O = this._easeType) || (3 === O && 0.5 <= B)) && (B = 1 - B),
                        3 === O && (B *= 2),
                        1 === (C = this._easePower) ? (B *= B) : 2 === C ? (B *= B * B) : 3 === C ? (B *= B * B * B) : 4 === C && (B *= B * B * B * B),
                        (this.ratio = 1 === O ? 1 - B : 2 === O ? B : 0.5 > this._time / d ? B / 2 : 1 - B / 2))
                      : (this.ratio = this._ease.getRatio(this._time / d))),
                p !== this._time || e || c !== this._cycle)
              ) {
                if (!this._initted) {
                  if ((this._init(), !this._initted || this._gc)) return
                  if (!e && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                    return (this._time = p), (this._totalTime = _), (this._rawPrevTime = m), (this._cycle = c), l.lazyTweens.push(this), void (this._lazy = [b, v])
                  this._time && !g ? (this.ratio = this._ease.getRatio(this._time / d)) : g && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (
                  !1 !== this._lazy && (this._lazy = !1),
                    this._active || (!this._paused && this._time !== p && 0 <= b && (this._active = !0)),
                    0 === _ &&
                      (2 === this._initted && 0 < b && this._init(),
                      this._startAt && (0 <= b ? this._startAt.render(b, v, e) : (x = x || "_dummyGS")),
                      this.vars.onStart && ((0 === this._totalTime && 0 !== d) || v || this._callback("onStart"))),
                    S = this._firstPT;
                  S;

                )
                  S.f
                    ? S.t[S.p](S.c * this.ratio + S.s)
                    : ((k = S.c * this.ratio + S.s),
                      "x" == S.p
                        ? S.t.setX(k)
                        : "y" == S.p
                        ? S.t.setY(k)
                        : "z" == S.p
                        ? S.t.setZ(k)
                        : "angleX" == S.p
                        ? S.t.setAngleX(k)
                        : "angleY" == S.p
                        ? S.t.setAngleY(k)
                        : "angleZ" == S.p
                        ? S.t.setAngleZ(k)
                        : "w" == S.p
                        ? S.t.setWidth(k)
                        : "h" == S.p
                        ? S.t.setHeight(k)
                        : "alpha" == S.p
                        ? S.t.setAlpha(k)
                        : "scale" == S.p
                        ? S.t.setScale2(k)
                        : (S.t[S.p] = k)),
                    (S = S._next)
                this._onUpdate && (0 > b && this._startAt && this._startTime && this._startAt.render(b, v, e), v || (this._totalTime === _ && !x) || this._callback("onUpdate")),
                  this._cycle !== c && (v || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                  x &&
                    ((this._gc && !e) ||
                      (0 > b && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(b, v, e),
                      g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                      !v && this.vars[x] && this._callback(x),
                      0 === d && this._rawPrevTime === y && P !== y && (this._rawPrevTime = 0)))
              } else _ !== this._totalTime && this._onUpdate && (v || this._callback("onUpdate"))
            }),
            (S.to = function (o, t, e) {
              return new S(o, t, e)
            }),
            (S.from = function (o, t, e) {
              return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), new S(o, t, e)
            }),
            (S.fromTo = function (o, t, e, n) {
              return (n.startAt = e), (n.immediateRender = 0 != n.immediateRender && 0 != e.immediateRender), new S(o, t, n)
            }),
            (S.staggerTo = S.allTo =
              function (m, b, y, x, T, s, n) {
                function O() {
                  y.onComplete && y.onComplete.apply(y.onCompleteScope || this, arguments), T.apply(n || y.callbackScope || this, s || t)
                }
                x = x || 0
                var o = 0,
                  C = [],
                  _ = y.cycle,
                  c = y.startAt && y.startAt.cycle,
                  P,
                  k,
                  I,
                  A
                for (w(m) || ("string" == typeof m && (m = B.selector(m) || m), v(m) && (m = g(m))), m = m || [], 0 > x && ((m = g(m)).reverse(), (x *= -1)), P = m.length - 1, I = 0; I <= P; I++) {
                  for (A in ((k = {}), y)) k[A] = y[A]
                  if ((_ && (a(k, m, I), null != k.duration && ((b = k.duration), delete k.duration)), c)) {
                    for (A in ((c = k.startAt = {}), y.startAt)) c[A] = y.startAt[A]
                    a(k.startAt, m, I)
                  }
                  ;(k.delay = o + (k.delay || 0)), I === P && T && (k.onComplete = O), (C[I] = new S(m[I], b, k)), (o += x)
                }
                return C
              }),
            (S.staggerFrom = S.allFrom =
              function (o, t, e, d, r, s, n) {
                return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), S.staggerTo(o, t, e, d, r, s, n)
              }),
            (S.staggerFromTo = S.allFromTo =
              function (d, t, e, l, r, s, n, a) {
                return (l.startAt = e), (l.immediateRender = 0 != l.immediateRender && 0 != e.immediateRender), S.staggerTo(d, t, l, r, s, n, a)
              }),
            (S.delayedCall = function (o, t, e, n, r) {
              return new S(t, 0, { delay: o, onComplete: t, onCompleteParams: e, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: e, immediateRender: !1, useFrames: r, overwrite: 0 })
            }),
            (S.set = function (o, t) {
              return new S(o, 0, t)
            }),
            (S.isTweening = function (e) {
              return 0 < B.getTweensOf(e, !0).length
            })
          var p = function (o, t) {
              for (var e = [], n = 0, a = o._first; a; ) a instanceof B ? (e[n++] = a) : (t && (e[n++] = a), (n = (e = e.concat(p(a, t))).length)), (a = a._next)
              return e
            },
            _ = (S.getAllTweens = function (e) {
              return p(S._rootTimeline, e).concat(p(S._rootFramesTimeline, e))
            })
          return (
            (S.killAll = function (p, t, m, u) {
              null == t && (t = !0), null == m && (m = !0)
              for (var r = _(0 != u), a = r.length, o = t && m && u, l = 0, c, g; l < a; l++)
                (g = r[l]), (o || g instanceof d || ((c = g.target === g.vars.onComplete) && m) || (t && !c)) && (p ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
            }),
            (S.killChildTweensOf = function (d, p) {
              if (null != d) {
                var e = l.tweenLookup,
                  o,
                  _,
                  m,
                  u,
                  c
                if (("string" == typeof d && (d = B.selector(d) || d), v(d) && (d = g(d)), w(d))) for (u = d.length; -1 < --u; ) S.killChildTweensOf(d[u], p)
                else {
                  for (m in ((o = []), e)) for (_ = e[m].target.parentNode; _; ) _ === d && (o = o.concat(e[m].tweens)), (_ = _.parentNode)
                  for (c = o.length, u = 0; u < c; u++) p && o[u].totalTime(o[u].totalDuration()), o[u]._enabled(!1, !1)
                }
              }
            }),
            ((S.pauseAll = function (n, t, e) {
              o(!0, n, t, e)
            }),
            (S.resumeAll = function (n, t, e) {
              o(!1, n, t, e)
            }),
            (S.globalTimeScale = function (o) {
              var n = S._rootTimeline,
                s = B.ticker.time
              return arguments.length
                ? ((o = o || y),
                  (n._startTime = s - ((s - n._startTime) * n._timeScale) / o),
                  (n = S._rootFramesTimeline),
                  (s = B.ticker.frame),
                  (n._startTime = s - ((s - n._startTime) * n._timeScale) / o),
                  (n._timeScale = S._rootTimeline._timeScale = o))
                : n._timeScale
            }),
            (e.progress = function (o, t) {
              return arguments.length
                ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - o : o) + this._cycle * (this._duration + this._repeatDelay), t)
                : this._time / this.duration()
            }),
            (e.totalProgress = function (o, t) {
              return arguments.length ? this.totalTime(this.totalDuration() * o, t) : this._totalTime / this.totalDuration()
            }),
            (e.time = function (o, n) {
              return arguments.length
                ? (this._dirty && this.totalDuration(),
                  o > this._duration && (o = this._duration),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? (o = this._duration - o + this._cycle * (this._duration + this._repeatDelay))
                    : 0 !== this._repeat && (o += this._cycle * (this._duration + this._repeatDelay)),
                  this.totalTime(o, n))
                : this._time
            }),
            (e.duration = function (e) {
              return arguments.length ? S.prototype.duration.call(this, e) : this._duration
            }),
            (e.totalDuration = function (e) {
              return arguments.length
                ? -1 === this._repeat
                  ? this
                  : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
                : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)),
                  this._totalDuration)
            }),
            (e.repeat = function (e) {
              return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat
            }),
            (e.repeatDelay = function (e) {
              return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay
            }),
            (e.yoyo = function (e) {
              return arguments.length ? ((this._yoyo = e), this) : this._yoyo
            }),
            S)
          )
        },
        !0
      ),
        (o = 180 / Math.PI),
        (w = []),
        (B = []),
        (C = []),
        (_ = {}),
        (n = _fwd_fwdScope.FWDFWD_fwdDefine.globals),
        (y = _fwd_fwdScope.FWDFWD_fwdDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.7",
          API: 2,
          fwd_global: !0,
          init: function (_, t, m) {
            ;(this._target = _),
              t instanceof Array && (t = { values: t }),
              (this._func = {}),
              (this._mod = {}),
              (this._props = []),
              (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10))
            var c = t.values || [],
              h = {},
              g = c[0],
              f = t.autoRotate || m.vars.orientToBezier,
              b,
              y,
              v,
              w,
              x,
              S
            for (b in ((this._autoRotate = f ? (f instanceof Array ? f : [["x", "y", "rotation", (!0 !== f && +f) || 0]]) : null), g)) this._props.push(b)
            for (v = this._props.length; -1 < --v; )
              (b = this._props[v]),
                this._overwriteProps.push(b),
                (y = this._func[b] = "function" == typeof _[b]),
                (h[b] = y ? _[b.indexOf("set") || "function" != typeof _["get" + b.substr(3)] ? b : "get" + b.substr(3)]() : parseFloat(_[b])),
                x || (h[b] !== c[0][b] && (x = h))
            if (
              ((this._beziers =
                "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type
                  ? d(c, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, x)
                  : (function (b, y, v) {
                      var w = {},
                        c = "cubic" === (y = y || "soft") ? 3 : 2,
                        d = "soft" === y,
                        m = [],
                        g,
                        x,
                        S,
                        T,
                        B,
                        O,
                        C,
                        P,
                        k,
                        I,
                        A
                      if ((d && v && (b = [v].concat(b)), null == b || b.length < 1 + c)) throw "invalid Bezier data"
                      for (k in b[0]) m.push(k)
                      for (O = m.length; -1 < --O; ) {
                        for (w[(k = m[O])] = B = [], I = 0, P = b.length, C = 0; C < P; C++)
                          (g = null == v ? b[C][k] : "string" == typeof (A = b[C][k]) && "=" === A.charAt(1) ? v[k] + +(A.charAt(0) + A.substr(2)) : +A),
                            d && 1 < C && C < P - 1 && (B[I++] = (g + B[I - 2]) / 2),
                            (B[I++] = g)
                        for (P = I - c + 1, C = I = 0; C < P; C += c)
                          (g = B[C]), (x = B[C + 1]), (S = B[C + 2]), (T = 2 == c ? 0 : B[C + 3]), (B[I++] = A = 3 == c ? new u(g, x, S, T) : new u(g, (2 * x + g) / 3, (2 * x + S) / 3, S))
                        B.length = I
                      }
                      return w
                    })(c, t.type, h)),
              (this._segCount = this._beziers[b].length),
              this._timeRes &&
                ((S = (function (d, t) {
                  var _ = [],
                    a = [],
                    o = 0,
                    m = 0,
                    c = (t = t >> 0 || 6) - 1,
                    g = [],
                    u = [],
                    f,
                    b,
                    y,
                    v
                  for (f in d)
                    !(function (m, t, e) {
                      for (var c = m.length, g, b, y, v, w, x, S, T, B, O, C; -1 < --c; )
                        for (y = (O = m[c]).a, v = O.d - y, w = O.c - y, x = O.b - y, g = b = 0, T = 1; T <= e; T++)
                          (g = b - (b = ((S = (1 / e) * T) * S * v + 3 * (B = 1 - S) * (S * w + B * x)) * S)), (t[(C = c * e + T - 1)] = (t[C] || 0) + g * g)
                    })(d[f], _, t)
                  for (y = _.length, b = 0; b < y; b++) (o += Math.sqrt(_[b])), (u[(v = b % t)] = o), v === c && ((m += o), (g[(v = (b / t) >> 0)] = u), (a[v] = m), (o = 0), (u = []))
                  return { length: m, lengths: a, segments: g }
                })(this._beziers, this._timeRes)),
                (this._length = S.length),
                (this._lengths = S.lengths),
                (this._segments = S.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length)),
              (f = this._autoRotate))
            )
              for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), v = f.length; -1 < --v; ) {
                for (w = 0; 3 > w; w++) (b = f[v][w]), (this._func[b] = "function" == typeof _[b] && _[b.indexOf("set") || "function" != typeof _["get" + b.substr(3)] ? b : "get" + b.substr(3)])
                ;(b = f[v][2]), (this._initialRotations[v] = (this._func[b] ? this._func[b].call(this._target) : this._target[b]) || 0), this._overwriteProps.push(b)
              }
            return (this._startRatio = m.vars.runBackwards ? 1 : 0), !0
          },
          set: function (b) {
            var S = this._segCount,
              f = this._func,
              u = this._target,
              p = b !== this._startRatio,
              _,
              B,
              O,
              C,
              P,
              k,
              I,
              A,
              D
            if (this._timeRes) {
              if (((A = this._lengths), (D = this._curSeg), (b *= this._length), (w = this._li), b > this._l2 && w < S - 1)) {
                for (I = S - 1; w < I && (this._l2 = A[++w]) <= b; );
                ;(this._l1 = A[w - 1]), (this._li = w), (this._curSeg = D = this._segments[w]), (this._s2 = D[(this._s1 = this._si = 0)])
              } else if (b < this._l1 && 0 < w) {
                for (; 0 < w && (this._l1 = A[--w]) >= b; );
                0 === w && b < this._l1 ? (this._l1 = 0) : w++,
                  (this._l2 = A[w]),
                  (this._li = w),
                  (this._curSeg = D = this._segments[w]),
                  (this._s1 = D[(this._si = D.length - 1) - 1] || 0),
                  (this._s2 = D[this._si])
              }
              if (((_ = w), (b -= this._l1), (w = this._si), b > this._s2 && w < D.length - 1)) {
                for (I = D.length - 1; w < I && (this._s2 = D[++w]) <= b; );
                ;(this._s1 = D[w - 1]), (this._si = w)
              } else if (b < this._s1 && 0 < w) {
                for (; 0 < w && (this._s1 = D[--w]) >= b; );
                0 === w && b < this._s1 ? (this._s1 = 0) : w++, (this._s2 = D[w]), (this._si = w)
              }
              P = (w + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
            } else P = (b - (_ = 0 > b ? 0 : 1 <= b ? S - 1 : (S * b) >> 0) * (1 / S)) * S
            for (B = 1 - P, w = this._props.length; -1 < --w; )
              (O = this._props[w]),
                (k = (P * P * (C = this._beziers[O][_]).da + 3 * B * (P * C.ca + B * C.ba)) * P + C.a),
                this._mod[O] && (k = this._mod[O](k, u)),
                f[O]
                  ? u[O](k)
                  : "x" == O
                  ? u.setX(k)
                  : "y" == O
                  ? u.setY(k)
                  : "z" == O
                  ? u.setZ(k)
                  : "angleX" == O
                  ? u.setAngleX(k)
                  : "angleY" == O
                  ? u.setAngleY(k)
                  : "angleZ" == O
                  ? u.setAngleZ(k)
                  : "w" == O
                  ? u.setWidth(k)
                  : "h" == O
                  ? u.setHeight(k)
                  : "alpha" == O
                  ? u.setAlpha(k)
                  : "scale" == O
                  ? u.setScale2(k)
                  : (u[O] = k)
            if (this._autoRotate)
              for (var H = this._autoRotate, w = H.length, E, L, M, F, R, z, X; -1 < --w; )
                (O = H[w][2]),
                  (z = H[w][3] || 0),
                  (X = !0 === H[w][4] ? 1 : o),
                  (C = this._beziers[H[w][0]]),
                  (E = this._beziers[H[w][1]]),
                  C &&
                    E &&
                    ((C = C[_]),
                    (E = E[_]),
                    (L = C.a + (C.b - C.a) * P),
                    (L += ((F = C.b + (C.c - C.b) * P) - L) * P),
                    (F += (C.c + (C.d - C.c) * P - F) * P),
                    (M = E.a + (E.b - E.a) * P),
                    (M += ((R = E.b + (E.c - E.b) * P) - M) * P),
                    (R += (E.c + (E.d - E.c) * P - R) * P),
                    (k = p ? Math.atan2(R - M, F - L) * X + z : this._initialRotations[w]),
                    this._mod[O] && (k = this._mod[O](k, u)),
                    f[O] ? u[O](k) : (u[O] = k))
          },
        })),
        (e = y.prototype),
        (y.bezierThrough = d),
        (y.cubicToQuadratic = S),
        (y._autoCSS = !0),
        (y.quadraticToCubic = function (o, t, e) {
          return new u(o, (2 * t + o) / 3, (2 * t + e) / 3, e)
        }),
        (y._cssRegister = function () {
          var o = n.CSSPlugin,
            e,
            p,
            m,
            g
          o &&
            ((e = o._internals),
            (p = e._parseToProxy),
            (m = e._setPluginRatio),
            (g = e.CSSPropTween),
            e._registerComplexSpecialProp("bezier", {
              parser: function (d, t, _, c, r, b) {
                t instanceof Array && (t = { values: t }), (b = new y())
                var v = t.values,
                  h = v.length - 1,
                  f = [],
                  u = {},
                  w,
                  x,
                  S
                if (0 > h) return r
                for (w = 0; w <= h; w++) (S = p(d, v[w], c, r, b, h !== w)), (f[w] = S.end)
                for (x in t) u[x] = t[x]
                return (
                  (u.values = f),
                  ((r = new g(d, "bezier", 0, 0, S.pt, 2)).data = S),
                  (r.plugin = b),
                  (r.setRatio = m),
                  0 === u.autoRotate && (u.autoRotate = !0),
                  !u.autoRotate ||
                    u.autoRotate instanceof Array ||
                    ((w = !0 === u.autoRotate ? 0 : +u.autoRotate), (u.autoRotate = null == S.end.left ? null != S.end.x && [["x", "y", "rotation", w, !1]] : [["left", "top", "rotation", w, !1]])),
                  u.autoRotate &&
                    (c._transform || c._enableTransforms(!1), (S.autoRotate = c._target._fwdTransform), (S.proxy.rotation = S.autoRotate.rotation || 0), c._overwriteProps.push("rotation")),
                  b._onInitTween(S.proxy, u, c._tween),
                  r
                )
              },
            }))
        }),
        (e._mod = function (o) {
          for (var t = this._overwriteProps, n = t.length, s; -1 < --n; ) (s = o[t[n]]) && "function" == typeof s && (this._mod[t[n]] = s)
        }),
        (e._kill = function (o) {
          var t = this._props,
            n,
            s
          for (n in this._beziers) if (n in o) for (delete this._beziers[n], delete this._func[n], s = t.length; -1 < --s; ) t[s] === n && t.splice(s, 1)
          if ((t = this._autoRotate)) for (s = t.length; -1 < --s; ) o[t[s][2]] && t.splice(s, 1)
          return this._super._kill.call(this, o)
        }),
        _fwd_fwdScope.FWDFWD_fwdDefine(
          "plugins.CSSPlugin",
          ["plugins.TweenPlugin", "FWDTweenLite"],
          function (E, L) {
            function B(o, t) {
              return t.toUpperCase()
            }
            function n(e) {
              return ue.createElementNS ? ue.createElementNS("http://www.w3.org/1999/xhtml", e) : ue.createElement(e)
            }
            function a(e) {
              return I.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
            }
            function V(e) {
              window.console && console.log(e)
            }
            function j(o, n) {
              var a = (n = n || K).style,
                s,
                d
              if (void 0 !== a[o]) return o
              for (o = o.charAt(0).toUpperCase() + o.substr(1), s = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; -1 < --d && void 0 === a[s[d] + o]; );
              return 0 <= d ? ((he = "-" + (ge = 3 === d ? "ms" : s[d]).toLowerCase() + "-"), ge + o) : null
            }
            function g(o, t) {
              var d = {},
                n,
                l,
                p
              if ((t = t || fe(o, null))) {
                if ((n = t.length)) for (; -1 < --n; ) (-1 !== (p = t[n]).indexOf("-transform") && Ue !== p) || (d[p.replace(u, B)] = t.getPropertyValue(p))
                else for (n in t) (-1 !== n.indexOf("Transform") && Ye !== n) || (d[n] = t[n])
              } else if ((t = o.currentStyle || o.style)) for (n in t) "string" == typeof n && void 0 === d[n] && (d[n.replace(u, B)] = t[n])
              return (
                ce || (d.opacity = a(o)),
                (l = tt(o, t, !1)),
                (d.rotation = l.rotation),
                (d.skewX = l.skewX),
                (d.scaleX = l.scaleX),
                (d.scaleY = l.scaleY),
                (d.x = l.x),
                (d.y = l.y),
                Ze && ((d.z = l.z), (d.rotationX = l.rotationX), (d.rotationY = l.rotationY), (d.scaleZ = l.scaleZ)),
                d.filters && delete d.filters,
                d
              )
            }
            function y(d, t, e, p, r) {
              var s = {},
                l = d.style,
                _,
                m,
                u
              for (m in e)
                "cssText" !== m &&
                  "length" !== m &&
                  isNaN(m) &&
                  (t[m] !== (_ = e[m]) || (r && r[m])) &&
                  -1 === m.indexOf("Origin") &&
                  (("number" != typeof _ && "string" != typeof _) ||
                    ((s[m] = "auto" !== _ || ("left" !== m && "top" !== m) ? (("" !== _ && "auto" !== _ && "none" !== _) || "string" != typeof t[m] || "" === t[m].replace(b, "") ? _ : 0) : ve(d, m)),
                    void 0 !== l[m] && (u = new Fe(l, m, l[m], u))))
              if (p) for (m in p) "className" !== m && (s[m] = p[m])
              return { difs: s, firstMPT: u }
            }
            function e(o, n) {
              return (
                "function" == typeof o && (o = o(Ee, He)), "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) : parseFloat(o) - parseFloat(n) || 0
              )
            }
            function k(o, n) {
              return (
                "function" == typeof o && (o = o(Ee, He)),
                null == o ? n : "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) + n : parseFloat(o) || 0
              )
            }
            function o(d, p, e, _) {
              var r, m, u, c, h
              return (
                "function" == typeof d && (d = d(Ee, He)),
                1e-6 >
                  (c =
                    null == d
                      ? p
                      : "number" == typeof d
                      ? d
                      : ((r = 360),
                        (m = d.split("_")),
                        (u = ((h = "=" === d.charAt(1)) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(m[0].substr(2)) : parseFloat(m[0])) * (-1 === d.indexOf("rad") ? 1 : Q) - (h ? 0 : p)),
                        m.length &&
                          (_ && (_[e] = p + u),
                          -1 !== d.indexOf("short") && (u %= r) !== u % 180 && (u = 0 > u ? u + r : u - r),
                          -1 !== d.indexOf("_cw") && 0 > u
                            ? (u = ((u + 3599999999640) % r) - (0 | (u / r)) * r)
                            : -1 !== d.indexOf("ccw") && 0 < u && (u = ((u - 3599999999640) % r) - (0 | (u / r)) * r)),
                        p + u)) &&
                  -1e-6 < c &&
                  (c = 0),
                c
              )
            }
            function v(o, n, e) {
              return 0 | (255 * (1 > 6 * (o = 0 > o ? o + 1 : 1 < o ? o - 1 : o) ? n + 6 * ((e - n) * o) : 0.5 > o ? e : 2 > 3 * o ? n + 6 * ((e - n) * (2 / 3 - o)) : n) + 0.5)
            }
            function _(d, t) {
              for (var e = d.match(Oe) || [], s = 0, l = e.length ? "" : d, p = 0, _, m; p < e.length; p++)
                (_ = e[p]),
                  (s += (m = d.substr(s, d.indexOf(_, s) - s)).length + _.length),
                  3 === (_ = Be(_, t)).length && _.push(1),
                  (l += m + (t ? "hsla(" + _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : "rgba(" + _.join(",")) + ")")
              return l + d.substr(s)
            }
            function r(s, t, d, n) {
              if (null == s)
                return function (e) {
                  return e
                }
              var a = t ? (s.match(Oe) || [""])[0] : "",
                l = s.split(a).join("").match(X) || [],
                m = s.substr(0, s.indexOf(l[0])),
                h = ")" === s.charAt(s.length - 1) ? ")" : "",
                u = -1 === s.indexOf(" ") ? "," : " ",
                p = l.length,
                _ = 0 < p ? l[0].replace(_e, "") : "",
                e
              return p
                ? (e = t
                    ? function (o) {
                        var c, g, f, b
                        if ("number" == typeof o) o += _
                        else if (n && Z.test(o)) {
                          for (b = o.replace(Z, "|").split("|"), f = 0; f < b.length; f++) b[f] = e(b[f])
                          return b.join(",")
                        }
                        if (((c = (o.match(Oe) || [a])[0]), (f = (g = o.split(c).join("").match(X) || []).length), p > f--)) for (; ++f < p; ) g[f] = d ? g[0 | ((f - 1) / 2)] : l[f]
                        return m + g.join(u) + u + c + h + (-1 === o.indexOf("inset") ? "" : " inset")
                      }
                    : function (o) {
                        var s, a, c
                        if ("number" == typeof o) o += _
                        else if (n && Z.test(o)) {
                          for (a = o.replace(Z, "|").split("|"), c = 0; c < a.length; c++) a[c] = e(a[c])
                          return a.join(",")
                        }
                        if (((c = (s = o.match(X) || []).length), p > c--)) for (; ++c < p; ) s[c] = d ? s[0 | ((c - 1) / 2)] : l[c]
                        return m + s.join(u) + h
                      })
                : function (e) {
                    return e
                  }
            }
            function S(e) {
              return (
                (e = e.split(",")),
                function (d, t, p, _, r, s, n) {
                  var m = (t + "").split(" "),
                    l
                  for (n = {}, l = 0; 4 > l; l++) n[e[l]] = m[l] = m[l] || m[((l - 1) / 2) >> 0]
                  return _.parse(d, n, r, s)
                }
              )
            }
            function A(o, t, e, d, r, s) {
              var n = new Re(o, t, e, d - e, r, -1, s)
              return (n.b = e), (n.e = n.xs0 = d), n
            }
            function R(o, t) {
              ;(t = t || {}),
                (this.p = (t.prefix && j(o)) || o),
                ((re[o] = re[this.p] = this).format = t.formatter || r(t.defaultValue, t.color, t.collapsible, t.multi)),
                t.parser && (this.parse = t.parser),
                (this.clrs = t.color),
                (this.multi = t.multi),
                (this.keyword = t.keyword),
                (this.dflt = t.defaultValue),
                (this.pr = t.priority || 0)
            }
            function q(o, t, e) {
              var n = ue.createElementNS("http://www.w3.org/2000/svg", o),
                s
              for (s in e) n.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), e[s])
              return t.appendChild(n), n
            }
            function $(b, t, S, T, r, s) {
              var n = b._fwdTransform,
                B = et(b, !0),
                w,
                O,
                C,
                P,
                k,
                I,
                A,
                D,
                H,
                E,
                L,
                M,
                F,
                R
              n && ((F = n.xOrigin), (R = n.yOrigin)),
                (!T || 2 > (w = T.split(" ")).length) &&
                  ((A = b.getBBox()),
                  (w = [
                    (-1 === (t = Se(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) : (parseFloat(t[0]) / 100) * A.width) + A.x,
                    (-1 === t[1].indexOf("%") ? parseFloat(t[1]) : (parseFloat(t[1]) / 100) * A.height) + A.y,
                  ])),
                (S.xOrigin = P = parseFloat(w[0])),
                (S.yOrigin = k = parseFloat(w[1])),
                T &&
                  B !== Je &&
                  ((I = B[0]),
                  (A = B[1]),
                  (D = B[2]),
                  (H = B[3]),
                  (E = B[4]),
                  (O = P * (H / (M = I * H - A * D)) + k * (-D / M) + (D * (L = B[5]) - H * E) / M),
                  (C = P * (-A / M) + k * (I / M) - (I * L - A * E) / M),
                  (P = S.xOrigin = w[0] = O),
                  (k = S.yOrigin = w[1] = C)),
                n &&
                  (s && ((S.xOffset = n.xOffset), (S.yOffset = n.yOffset), (n = S)),
                  r || (!1 !== r && !1 !== se.defaultSmoothOrigin)
                    ? ((O = P - F), (C = k - R), (n.xOffset += O * B[0] + C * B[2] - O), (n.yOffset += O * B[1] + C * B[3] - C))
                    : (n.xOffset = n.yOffset = 0)),
                s || b.setAttribute("data-svg-origin", w.join(" "))
            }
            function ee(a) {
              var t = this.data,
                r = -t.rotation * U,
                s = r + t.skewX * U,
                n = (0 | (Math.cos(r) * t.scaleX * 100000)) / 100000,
                o = (0 | (Math.sin(r) * t.scaleX * 100000)) / 100000,
                S = (0 | (Math.sin(s) * -t.scaleY * 100000)) / 100000,
                B = (0 | (Math.cos(s) * t.scaleY * 100000)) / 100000,
                f = this.t.style,
                u = this.t.currentStyle,
                p,
                O
              if (u) {
                ;(O = o), (o = -S), (S = -O), (p = u.filter), (f.filter = "")
                var C = this.t.offsetWidth,
                  _ = this.t.offsetHeight,
                  c = "absolute" !== u.position,
                  d = "progid:DXImageTransform.Microsoft.Matrix(M11=" + n + ", M12=" + o + ", M21=" + S + ", M22=" + B,
                  k = t.x + (C * t.xPercent) / 100,
                  A = t.y + (_ * t.yPercent) / 100
                if (
                  (null != t.ox && ((k += (T = (t.oxp ? 0.01 * (C * t.ox) : t.ox) - C / 2) - (T * n + (H = (t.oyp ? 0.01 * (_ * t.oy) : t.oy) - _ / 2) * o)), (A += H - (T * S + H * B))),
                  (d += c ? ", Dx=" + ((T = C / 2) - (T * n + (H = _ / 2) * o) + k) + ", Dy=" + (H - (T * S + H * B) + A) + ")" : ", sizingMethod='auto expand')"),
                  (f.filter = -1 === p.indexOf("DXImageTransform.Microsoft.Matrix(") ? d + " " + p : p.replace(N, d)),
                  (0 !== a && 1 !== a) ||
                    (1 == n &&
                      0 === o &&
                      0 === S &&
                      1 == B &&
                      ((c && -1 === d.indexOf("Dx=0, Dy=0")) || (I.test(p) && 100 !== parseFloat(RegExp.$1)) || (-1 === p.indexOf(p.indexOf("Alpha")) && f.removeAttribute("filter")))),
                  !c)
                ) {
                  var D = 8 > De ? 1 : -1,
                    T = t.ieOffsetX || 0,
                    H = t.ieOffsetY || 0,
                    E,
                    L,
                    M
                  for (
                    t.ieOffsetX = Math.round((C - ((0 > n ? -n : n) * C + (0 > o ? -o : o) * _)) / 2 + k),
                      t.ieOffsetY = Math.round((_ - ((0 > B ? -B : B) * _ + (0 > S ? -S : S) * C)) / 2 + A),
                      Xe = 0;
                    4 > Xe;
                    Xe++
                  )
                    (M =
                      (O = -1 === (E = u[(L = xe[Xe])]).indexOf("px") ? ye(this.t, L, parseFloat(E), E.replace(me, "")) || 0 : parseFloat(E)) === t[L]
                        ? 2 > Xe
                          ? T - t.ieOffsetX
                          : H - t.ieOffsetY
                        : 2 > Xe
                        ? -t.ieOffsetX
                        : -t.ieOffsetY),
                      (f[L] = (t[L] = Math.round(O - M * (0 === Xe || 2 === Xe ? 1 : D))) + "px")
                }
              }
            }
            function te(o) {
              var t = this.t,
                n = t.filter || be(this.data, "filter") || "",
                a = 0 | (this.s + this.c * o),
                s
              100 == a &&
                (s =
                  -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(")
                    ? (t.removeAttribute("filter"), !be(this.data, "filter"))
                    : ((t.filter = n.replace(h, "")), !0)),
                s ||
                  (this.xn1 && (t.filter = n = n || "alpha(opacity=" + a + ")"),
                  -1 === n.indexOf("pacity") ? (0 == a && this.xn1) || (t.filter = n + " alpha(opacity=" + a + ")") : (t.filter = n.replace(I, "opacity=" + a)))
            }
            function oe(o) {
              if (((this.t._fwdClassPT = this), 1 === o || 0 === o)) {
                this.t.setAttribute("class", 0 === o ? this.b : this.e)
                for (var t = this.data, n = this.t.style; t; ) t.v ? (n[t.p] = t.v) : _t(n, t.p), (t = t._next)
                1 === o && this.t._fwdClassPT === this && (this.t._fwdClassPT = null)
              } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
            }
            function ne(d) {
              if ((1 === d || 0 === d) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                var t = this.t.style,
                  a = re.transform.parse,
                  o,
                  l,
                  p,
                  _,
                  m
                if ("all" === this.e) _ = !(t.cssText = "")
                else
                  for (p = (o = this.e.split(" ").join("").split(",")).length; -1 < --p; ) (l = o[p]), re[l] && (re[l].parse === a ? (_ = !0) : (l = "transformOrigin" === l ? je : re[l].p)), _t(t, l)
                _ && (_t(t, Ye), (m = this.t._fwdTransform) && (m.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._fwdTransform))
              }
            }
            function ie() {
              ;(this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0)
            }
            var se = function () {
                E.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = se.prototype.setRatio)
              },
              W = _fwd_fwdScope.FWDFWD_fwdDefine.globals,
              re = {},
              m = (se.prototype = new E("css")),
              ae,
              de,
              le,
              pe
            ;((m.constructor = se).version = "1.19.0"),
              (se.API = 2),
              (se.defaultTransformPerspective = 0),
              (se.defaultSkewType = "compensated"),
              (se.defaultSmoothOrigin = !0),
              (m = "px"),
              (se.suffixMap = { top: m, right: m, bottom: m, left: m, width: m, height: m, fontSize: m, padding: m, margin: m, perspective: m, lineHeight: "" })
            var _e = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
              z = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
              X = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
              b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
              me = /(?:\d|\-|\+|=|#|\.)*/g,
              I = /opacity *= *([^)]*)/i,
              h = /alpha\(opacity *=.+?\)/i,
              l = /([A-Z])/g,
              u = /-([a-z])/gi,
              N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
              Z = /,(?=[^\)]*(?:\(|$))/gi,
              U = Math.PI / 180,
              Q = 180 / Math.PI,
              G = {},
              ue = document,
              K = n("div"),
              p = n("img"),
              f = (se._internals = { _specialProps: re }),
              J = navigator.userAgent,
              ce =
                ((Le = J.indexOf("Android")),
                (Me = n("a")),
                (ke = -1 !== J.indexOf("Safari") && -1 === J.indexOf("Chrome") && (-1 === Le || 3 < +J.substr(Le + 8, 1))),
                (Ae = ke && 6 > +J.substr(J.indexOf("Version/") + 8, 1)),
                (Ie = -1 !== J.indexOf("Firefox")),
                (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(J) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(J)) && (De = parseFloat(RegExp.$1)),
                !!Me && ((Me.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(Me.style.opacity))),
              he = "",
              ge = "",
              fe = ue.defaultView ? ue.defaultView.getComputedStyle : function () {},
              be = (se.style = function (o, t, e, d, r) {
                var s
                return ce || "opacity" !== t
                  ? (!d && o.style[t]
                      ? (s = o.style[t])
                      : (e = e || fe(o))
                      ? (s = e[t] || e.getPropertyValue(t) || e.getPropertyValue(t.replace(l, "-$1").toLowerCase()))
                      : o.currentStyle && (s = o.currentStyle[t]),
                    null == r || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : r)
                  : a(o)
              }),
              ye = (f.convertToPixels = function (d, t, e, _, r) {
                if ("px" === _ || !_) return e
                if ("auto" === _ || !e) return 0
                var s = /(?:Left|Right|Width)/i.test(t),
                  l = d,
                  m = K.style,
                  c = 0 > e,
                  u = 1 === e,
                  p,
                  g,
                  f
                if ((c && (e = -e), u && (e *= 100), "%" === _ && -1 !== t.indexOf("border"))) p = (e / 100) * (s ? d.clientWidth : d.clientHeight)
                else {
                  if (((m.cssText = "border:0 solid red;position:" + be(d, "position") + ";line-height:0;"), "%" !== _ && l.appendChild && "v" !== _.charAt(0) && "rem" !== _))
                    m[s ? "borderLeftWidth" : "borderTopWidth"] = e + _
                  else {
                    if (((g = (l = d.parentNode || ue.body)._fwdCache), (f = L.ticker.frame), g && s && g.time === f)) return (g.width * e) / 100
                    m[s ? "width" : "height"] = e + _
                  }
                  l.appendChild(K),
                    (p = parseFloat(K[s ? "offsetWidth" : "offsetHeight"])),
                    l.removeChild(K),
                    s && "%" === _ && !1 !== se.cacheWidths && (((g = l._fwdCache = l._fwdCache || {}).time = f), (g.width = 100 * (p / e))),
                    0 !== p || r || (p = ye(d, t, e, _, !0))
                }
                return u && (p /= 100), c ? -p : p
              }),
              ve = (f.calculateOffset = function (o, t, e) {
                if ("absolute" !== be(o, "position", e)) return 0
                var n = "left" === t ? "Left" : "Top",
                  r = be(o, "margin" + n, e)
                return o["offset" + n] - (ye(o, t, parseFloat(r), r.replace(me, "")) || 0)
              }),
              we = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
              xe = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
              Se = function (o, a) {
                if ("contain" === o || "auto" === o || "auto auto" === o) return o + " "
                ;(null != o && "" !== o) || (o = "0 0")
                var e = o.split(" "),
                  d = -1 === o.indexOf("left") ? (-1 === o.indexOf("right") ? e[0] : "100%") : "0%",
                  l = -1 === o.indexOf("top") ? (-1 === o.indexOf("bottom") ? e[1] : "100%") : "0%",
                  p
                if (3 < e.length && !a) {
                  for (e = o.split(", ").join(",").split(","), o = [], p = 0; p < e.length; p++) o.push(Se(e[p]))
                  return o.join(",")
                }
                return (
                  null == l ? (l = "center" === d ? "50%" : "0") : "center" === l && (l = "50%"),
                  ("center" === d || (isNaN(parseFloat(d)) && -1 === (d + "").indexOf("="))) && (d = "50%"),
                  (o = d + " " + l + (2 < e.length ? " " + e[2] : "")),
                  a &&
                    ((a.oxp = -1 !== d.indexOf("%")),
                    (a.oyp = -1 !== l.indexOf("%")),
                    (a.oxr = "=" === d.charAt(1)),
                    (a.oyr = "=" === l.charAt(1)),
                    (a.ox = parseFloat(d.replace(b, ""))),
                    (a.oy = parseFloat(l.replace(b, ""))),
                    (a.v = o)),
                  a || o
                )
              },
              Te = {
                aqua: [0, 255, 255],
                lime: [0, 255, 0],
                silver: [192, 192, 192],
                black: [0, 0, 0],
                maroon: [128, 0, 0],
                teal: [0, 128, 128],
                blue: [0, 0, 255],
                navy: [0, 0, 128],
                white: [255, 255, 255],
                fuchsia: [255, 0, 255],
                olive: [128, 128, 0],
                yellow: [255, 255, 0],
                orange: [255, 165, 0],
                gray: [128, 128, 128],
                purple: [128, 0, 128],
                green: [0, 128, 0],
                red: [255, 0, 0],
                pink: [255, 192, 203],
                cyan: [0, 255, 255],
                transparent: [255, 255, 255, 0],
              },
              Be = (se.parseColor = function (d, _) {
                var e, m, c, g, b, y, w, x, S, T, B
                if (!d) e = Te.black
                else if ("number" == typeof d) e = [d >> 16, 255 & (d >> 8), 255 & d]
                else {
                  if (("," === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1)), Te[d])) e = Te[d]
                  else if ("#" === d.charAt(0))
                    4 === d.length && (d = "#" + (m = d.charAt(1)) + m + (c = d.charAt(2)) + c + (g = d.charAt(3)) + g), (e = [(d = parseInt(d.substr(1), 16)) >> 16, 255 & (d >> 8), 255 & d])
                  else if (!("hsl" === d.substr(0, 3))) e = d.match(_e) || Te.transparent
                  else if (!((e = B = d.match(_e)), _))
                    (b = (+e[0] % 360) / 360),
                      (y = +e[1] / 100),
                      (m = 2 * (w = +e[2] / 100) - (c = 0.5 >= w ? w * (y + 1) : w + y - w * y)),
                      3 < e.length && (e[3] = +d[3]),
                      (e[0] = v(b + 1 / 3, m, c)),
                      (e[1] = v(b, m, c)),
                      (e[2] = v(b - 1 / 3, m, c))
                  else if (-1 !== d.indexOf("=")) return d.match(z)
                  ;(e[0] = +e[0]), (e[1] = +e[1]), (e[2] = +e[2]), 3 < e.length && (e[3] = +e[3])
                }
                return (
                  _ &&
                    !B &&
                    ((m = e[0] / 255),
                    (c = e[1] / 255),
                    (g = e[2] / 255),
                    (w = ((x = Math.max(m, c, g)) + (S = Math.min(m, c, g))) / 2),
                    x === S
                      ? (b = y = 0)
                      : ((T = x - S), (y = 0.5 < w ? T / (2 - x - S) : T / (x + S)), (b = x === m ? (c - g) / T + (c < g ? 6 : 0) : x === c ? (g - m) / T + 2 : (m - c) / T + 4), (b *= 60)),
                    (e[0] = 0 | (b + 0.5)),
                    (e[1] = 0 | (100 * y + 0.5)),
                    (e[2] = 0 | (100 * w + 0.5))),
                  e
                )
              }),
              Oe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
              Ce,
              Pe,
              ke,
              Ie,
              Ae,
              De,
              He,
              Ee,
              Le,
              Me
            for (m in Te) Oe += "|" + m + "\\b"
            ;(Oe = new RegExp(Oe + ")", "gi")),
              (se.colorStringFilter = function (o) {
                var t = o[0] + o[1],
                  n
                Oe.test(t) && ((n = -1 !== t.indexOf("hsl(") || -1 !== t.indexOf("hsla(")), (o[0] = _(o[0], n)), (o[1] = _(o[1], n))), (Oe.lastIndex = 0)
              }),
              L.defaultStringFilter || (L.defaultStringFilter = se.colorStringFilter),
              (f._setPluginRatio = function (d) {
                this.plugin.setRatio(d)
                for (var t = this.data, a = t.proxy, o = t.firstMPT, p, _, m, u, c; o; ) (p = a[o.v]), o.r ? (p = Math.round(p)) : 1e-6 > p && -1e-6 < p && (p = 0), (o.t[o.p] = p), (o = o._next)
                if ((t.autoRotate && (t.autoRotate.rotation = t.mod ? t.mod(a.rotation, this.t) : a.rotation), 1 === d || 0 === d))
                  for (o = t.firstMPT, c = 1 === d ? "e" : "b"; o; ) {
                    if (!(_ = o.t).type) _[c] = _.s + _.xs0
                    else if (1 === _.type) {
                      for (u = _.xs0 + _.s + _.xs1, m = 1; m < _.l; m++) u += _["xn" + m] + _["xs" + (m + 1)]
                      _[c] = u
                    }
                    o = o._next
                  }
              })
            var Fe = function (o, t, e, n, r) {
                ;(this.t = o), (this.p = t), (this.v = e), (this.r = r), n && ((n._prev = this)._next = n)
              },
              Re =
                ((f._parseToProxy = function (m, t, e, g, b, s) {
                  var n = g,
                    u = {},
                    p = {},
                    _ = e._transform,
                    c = G,
                    d,
                    y,
                    v,
                    w,
                    x
                  for (e._transform = null, G = t, g = x = e.parse(m, t, g, b), G = c, s && ((e._transform = _), n && ((n._prev = null), n._prev && (n._prev._next = null))); g && g !== n; ) {
                    if (1 >= g.type && ((p[(y = g.p)] = g.s + g.c), (u[y] = g.s), s || ((w = new Fe(g, "s", y, w, g.r)), (g.c = 0)), 1 === g.type))
                      for (d = g.l; 0 < --d; ) (v = "xn" + d), (p[(y = g.p + "_" + v)] = g.data[v]), (u[y] = g[v]), s || (w = new Fe(g, v, y, w, g.rxp[v]))
                    g = g._next
                  }
                  return { proxy: u, end: p, firstMPT: w, pt: x }
                }),
                (f.CSSPropTween = function (d, t, e, p, r, s, n, a, o, l, _) {
                  ;(this.t = d),
                    (this.p = t),
                    (this.s = e),
                    (this.c = p),
                    (this.n = n || t),
                    d instanceof Re || pe.push(this.n),
                    (this.r = a),
                    (this.type = s || 0),
                    o && ((this.pr = o), (ae = !0)),
                    (this.b = void 0 === l ? e : l),
                    (this.e = void 0 === _ ? e + p : _),
                    r && ((this._next = r)._prev = this)
                })),
              ze = (se.parseComplex = function (S, t, B, C, I, s, n, A, o, l) {
                ;(B = B || s || ""),
                  "function" == typeof C && (C = C(Ee, He)),
                  (n = new Re(S, t, 0, 0, n, l ? 2 : 1, null, !1, A, B, C)),
                  (C += ""),
                  I && Oe.test(C + B) && ((C = [B, C]), se.colorStringFilter(C), (B = C[0]), (C = C[1]))
                var h = B.split(", ").join(",").split(" "),
                  D = C.split(", ").join(",").split(" "),
                  H = h.length,
                  E = !1 !== Ce,
                  k,
                  L,
                  M,
                  F,
                  R,
                  X,
                  W,
                  N,
                  V,
                  Y,
                  U,
                  j,
                  G
                for (
                  (-1 === C.indexOf(",") && -1 === B.indexOf(",")) || ((h = h.join(" ").replace(Z, ", ").split(" ")), (D = D.join(" ").replace(Z, ", ").split(" ")), (H = h.length)),
                    H !== D.length && (H = (h = (s || "").split(" ")).length),
                    n.plugin = o,
                    n.setRatio = l,
                    k = Oe.lastIndex = 0;
                  k < H;
                  k++
                )
                  if (((F = h[k]), (R = D[k]), (N = parseFloat(F)) || 0 === N)) n.appendXtra("", N, e(R, N), R.replace(z, ""), E && -1 !== R.indexOf("px"), !0)
                  else if (I && Oe.test(F))
                    (j = ")" + ((j = R.indexOf(")") + 1) ? R.substr(j) : "")),
                      (G = -1 !== R.indexOf("hsl") && ce),
                      (F = Be(F, G)),
                      (R = Be(R, G)),
                      (V = 6 < F.length + R.length) && !ce && 0 === R[3]
                        ? ((n["xs" + n.l] += n.l ? " transparent" : "transparent"), (n.e = n.e.split(D[k]).join("transparent")))
                        : (ce || (V = !1),
                          G
                            ? n
                                .appendXtra(V ? "hsla(" : "hsl(", F[0], e(R[0], F[0]), ",", !1, !0)
                                .appendXtra("", F[1], e(R[1], F[1]), "%,", !1)
                                .appendXtra("", F[2], e(R[2], F[2]), V ? "%," : "%" + j, !1)
                            : n
                                .appendXtra(V ? "rgba(" : "rgb(", F[0], R[0] - F[0], ",", !0, !0)
                                .appendXtra("", F[1], R[1] - F[1], ",", !0)
                                .appendXtra("", F[2], R[2] - F[2], V ? "," : j, !0),
                          V && ((F = 4 > F.length ? 1 : F[3]), n.appendXtra("", F, (4 > R.length ? 1 : R[3]) - F, j, !1))),
                      (Oe.lastIndex = 0)
                  else if ((X = F.match(_e))) {
                    if (!(W = R.match(z)) || W.length !== X.length) return n
                    for (L = M = 0; L < X.length; L++)
                      (U = X[L]), (Y = F.indexOf(U, M)), n.appendXtra(F.substr(M, Y - M), +U, e(W[L], U), "", E && "px" === F.substr(Y + U.length, 2), 0 === L), (M = Y + U.length)
                    n["xs" + n.l] += F.substr(M)
                  } else n["xs" + n.l] += n.l || n["xs" + n.l] ? " " + R : R
                if (-1 !== C.indexOf("=") && n.data) {
                  for (j = n.xs0 + n.data.s, k = 1; k < n.l; k++) j += n["xs" + k] + n.data["xn" + k]
                  n.e = j + n["xs" + k]
                }
                return n.l || ((n.type = -1), (n.xs0 = n.e)), n.xfirst || n
              }),
              Xe = 9
            for ((m = Re.prototype).l = m.pr = 0; 0 < --Xe; ) (m["xn" + Xe] = 0), (m["xs" + Xe] = "")
            ;(m.xs0 = ""),
              (m._next = m._prev = m.xfirst = m.data = m.plugin = m.setRatio = m.rxp = null),
              (m.appendXtra = function (d, t, e, l, r, s) {
                var n = this,
                  a = n.l
                return (
                  (n["xs" + a] += s && (a || n["xs" + a]) ? " " + d : d || ""),
                  e || 0 === a || n.plugin
                    ? (n.l++,
                      (n.type = n.setRatio ? 2 : 1),
                      (n["xs" + n.l] = l || ""),
                      0 < a
                        ? ((n.data["xn" + a] = t + e),
                          (n.rxp["xn" + a] = r),
                          (n["xn" + a] = t),
                          n.plugin || ((n.xfirst = new Re(n, "xn" + a, t, e, n.xfirst || n, 0, n.n, r, n.pr)), (n.xfirst.xs0 = 0)))
                        : ((n.data = { s: t + e }), (n.rxp = {}), (n.s = t), (n.c = e), (n.r = r)),
                      n)
                    : ((n["xs" + a] += t + (l || "")), n)
                )
              })
            var We = (f._registerComplexSpecialProp = function (o, t, a) {
                "object" != typeof t && (t = { parser: a })
                var d = o.split(","),
                  s = t.defaultValue,
                  n
                for (a = a || [s], n = 0; n < d.length; n++) (t.prefix = 0 === n && t.prefix), (t.defaultValue = a[n] || s), new R(d[n], t)
              }),
              Ne = (f._registerPluginProp = function (e) {
                var d
                re[e] ||
                  ((d = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin"),
                  We(e, {
                    parser: function (l, t, e, p, r, s, n) {
                      var a = W.com.fwd.plugins[d]
                      return a ? (a._cssRegister(), re[e].parse(l, t, e, p, r, s, n)) : (V("Error: " + d + " js file not loaded."), r)
                    },
                  }))
              })
            ;((m = R.prototype).parseComplex = function (d, t, _, m, r, s) {
              var n = this.keyword,
                p,
                c,
                g,
                b,
                y,
                v
              if ((this.multi && (Z.test(_) || Z.test(t) ? ((c = t.replace(Z, "|").split("|")), (g = _.replace(Z, "|").split("|"))) : n && ((c = [t]), (g = [_]))), g)) {
                for (b = g.length > c.length ? g.length : c.length, p = 0; p < b; p++)
                  (t = c[p] = c[p] || this.dflt),
                    (_ = g[p] = g[p] || this.dflt),
                    n && (y = t.indexOf(n)) !== (v = _.indexOf(n)) && (-1 === v ? (c[p] = c[p].split(n).join("")) : -1 === y && (c[p] += " " + n))
                ;(t = c.join(", ")), (_ = g.join(", "))
              }
              return ze(d, this.p, t, _, this.clrs, this.dflt, m, this.pr, r, s)
            }),
              (m.parse = function (o, t, e, a, r, s) {
                return this.parseComplex(o.style, this.format(be(o, this.p, le, !1, this.dflt)), this.format(t), r, s)
              }),
              (se.registerSpecialProp = function (e, a, d) {
                We(e, {
                  parser: function (l, t, e, p, r, s) {
                    var n = new Re(l, e, 0, 0, r, 2, e, !1, d)
                    return (n.plugin = s), (n.setRatio = a(l, t, p._tween, e)), n
                  },
                  priority: d,
                })
              }),
              (se.useSVGTransformAttr = ke || Ie)
            var Ve = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "skewY", "rotation", "rotationX", "rotationY", "perspective", "xPercent", "yPercent"],
              Ye = j("transform"),
              Ue = he + "transform",
              je = j("transformOrigin"),
              Ze = null !== j("perspective"),
              Ge = (f.Transform = function () {
                ;(this.perspective = parseFloat(se.defaultTransformPerspective) || 0), (this.force3D = !1 !== se.defaultForce3D && Ze && (se.defaultForce3D || "auto"))
              }),
              qe = window.SVGElement,
              Ke = ue.documentElement,
              Qe =
                ((pt = De || (/Android/i.test(J) && !window.chrome)),
                ue.createElementNS &&
                  !pt &&
                  ((rt = q("svg", Ke)),
                  (lt = (at = q("rect", rt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                  (at.style[je] = "50% 50%"),
                  (at.style[Ye] = "scaleX(0.5)"),
                  (pt = lt === at.getBoundingClientRect().width && !(Ie && Ze)),
                  Ke.removeChild(rt)),
                pt),
              $e = function (e) {
                return !!(
                  qe &&
                  e.getBBox &&
                  e.getCTM &&
                  (function (e) {
                    try {
                      return e.getBBox()
                    } catch (e) {}
                  })(e) &&
                  (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM))
                )
              },
              Je = [1, 0, 0, 1, 0, 0],
              et = function (d, t) {
                var e = d._fwdTransform || new Ge(),
                  l = d.style,
                  p,
                  _,
                  m,
                  u,
                  c,
                  h
                if (
                  (Ye
                    ? (_ = be(d, Ue, null, !0))
                    : d.currentStyle &&
                      (_ =
                        (_ = d.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi)) && 4 === _.length
                          ? [_[0].substr(4), +_[2].substr(4), +_[1].substr(4), _[3].substr(4), e.x || 0, e.y || 0].join(",")
                          : ""),
                  (p = !_ || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _) &&
                    Ye &&
                    ((h = "none" === fe(d).display) || !d.parentNode) &&
                    (h && ((u = l.display), (l.display = "block")),
                    d.parentNode || ((c = 1), Ke.appendChild(d)),
                    (p = !(_ = be(d, Ue, null, !0)) || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _),
                    u ? (l.display = u) : h && _t(l, "display"),
                    c && Ke.removeChild(d)),
                  (e.svg || (d.getBBox && $e(d))) &&
                    (p && -1 !== (l[Ye] + "").indexOf("matrix") && ((_ = l[Ye]), (p = 0)),
                    (m = d.getAttribute("transform")),
                    p &&
                      m &&
                      (-1 === m.indexOf("matrix") ? -1 !== m.indexOf("translate") && ((_ = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (p = 0)) : ((_ = m), (p = 0)))),
                  p)
                )
                  return Je
                for (m = (_ || "").match(_e) || [], Xe = m.length; -1 < --Xe; ) (u = +m[Xe]), (m[Xe] = (c = u - (u |= 0)) ? (0 | (1e5 * c + (0 > c ? -0.5 : 0.5))) / 1e5 + u : u)
                return t && 6 < m.length ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m
              },
              tt = (f.getTransform = function (B, t, e, H) {
                if (B._fwdTransform && e && !H) return B._fwdTransform
                var r = (e && B._fwdTransform) || new Ge(),
                  I = 0 > r.scaleX,
                  W = (Ze && (parseFloat(be(B, je, t, !1, "0 0 0").split(" ")[2]) || r.zOrigin)) || 0,
                  N = parseFloat(se.defaultTransformPerspective) || 0,
                  E,
                  V,
                  Y,
                  U,
                  j,
                  Z,
                  G,
                  q,
                  K,
                  J,
                  ee,
                  te,
                  oe,
                  ne,
                  ie,
                  re,
                  ae,
                  de,
                  le,
                  pe,
                  _e,
                  me,
                  ue,
                  ce,
                  he,
                  ge,
                  fe,
                  ye,
                  ve,
                  we,
                  xe,
                  Se
                if (((r.svg = B.getBBox && $e(B)), r.svg && ($(B, be(B, je, t, !1, "50% 50%") + "", r, B.getAttribute("data-svg-origin")), (it = se.useSVGTransformAttr || Qe)), (E = et(B)) !== Je))
                  for (V in (16 === E.length
                    ? ((G = E[0]),
                      (q = E[1]),
                      (K = E[2]),
                      (J = E[3]),
                      (ee = E[4]),
                      (te = E[5]),
                      (oe = E[6]),
                      (ne = E[7]),
                      (ie = E[8]),
                      (re = E[9]),
                      (ae = E[10]),
                      (de = E[12]),
                      (le = E[13]),
                      (pe = E[14]),
                      (_e = E[11]),
                      (me = Math.atan2(oe, ae)),
                      r.zOrigin && ((de = ie * (pe = -r.zOrigin) - E[12]), (le = re * pe - E[13]), (pe = ae * pe + r.zOrigin - E[14])),
                      (r.rotationX = me * Q),
                      me &&
                        ((ue = ee * (ge = Math.cos(-me)) + ie * (fe = Math.sin(-me))),
                        (ce = te * ge + re * fe),
                        (he = oe * ge + ae * fe),
                        (ie = ee * -fe + ie * ge),
                        (re = te * -fe + re * ge),
                        (ae = oe * -fe + ae * ge),
                        (_e = ne * -fe + _e * ge),
                        (ee = ue),
                        (te = ce),
                        (oe = he)),
                      (me = Math.atan2(-K, ae)),
                      (r.rotationY = me * Q),
                      me &&
                        ((ce = q * (ge = Math.cos(-me)) - re * (fe = Math.sin(-me))),
                        (he = K * ge - ae * fe),
                        (re = q * fe + re * ge),
                        (ae = K * fe + ae * ge),
                        (_e = J * fe + _e * ge),
                        (G = ue = G * ge - ie * fe),
                        (q = ce),
                        (K = he)),
                      (me = Math.atan2(q, G)),
                      (r.rotation = me * Q),
                      me && ((G = G * (ge = Math.cos(-me)) + ee * (fe = Math.sin(-me))), (ce = q * ge + te * fe), (te = q * -fe + te * ge), (oe = K * -fe + oe * ge), (q = ce)),
                      r.rotationX && 359.9 < Math.abs(r.rotationX) + Math.abs(r.rotation) && ((r.rotationX = r.rotation = 0), (r.rotationY = 180 - r.rotationY)),
                      (r.scaleX = (0 | (1e5 * Math.sqrt(G * G + q * q) + 0.5)) / 1e5),
                      (r.scaleY = (0 | (1e5 * Math.sqrt(te * te + re * re) + 0.5)) / 1e5),
                      (r.scaleZ = (0 | (1e5 * Math.sqrt(oe * oe + ae * ae) + 0.5)) / 1e5),
                      r.rotationX || r.rotationY
                        ? (r.skewX = 0)
                        : ((r.skewX = ee || te ? Math.atan2(ee, te) * Q + r.rotation : r.skewX || 0),
                          90 < Math.abs(r.skewX) &&
                            270 > Math.abs(r.skewX) &&
                            (I
                              ? ((r.scaleX *= -1), (r.skewX += 0 >= r.rotation ? 180 : -180), (r.rotation += 0 >= r.rotation ? 180 : -180))
                              : ((r.scaleY *= -1), (r.skewX += 0 >= r.skewX ? 180 : -180)))),
                      (r.perspective = _e ? 1 / (0 > _e ? -_e : _e) : 0),
                      (r.x = de),
                      (r.y = le),
                      (r.z = pe),
                      r.svg && ((r.x -= r.xOrigin - (r.xOrigin * G - r.yOrigin * ee)), (r.y -= r.yOrigin - (r.yOrigin * q - r.xOrigin * te))))
                    : (Ze && !H && E.length && r.x === E[4] && r.y === E[5] && (r.rotationX || r.rotationY)) ||
                      ((ve = (ye = 6 <= E.length) ? E[0] : 1),
                      (we = E[1] || 0),
                      (xe = E[2] || 0),
                      (Se = ye ? E[3] : 1),
                      (r.x = E[4] || 0),
                      (r.y = E[5] || 0),
                      (Y = Math.sqrt(ve * ve + we * we)),
                      (U = Math.sqrt(Se * Se + xe * xe)),
                      (j = ve || we ? Math.atan2(we, ve) * Q : r.rotation || 0),
                      (Z = xe || Se ? Math.atan2(xe, Se) * Q + j : r.skewX || 0),
                      90 < Math.abs(Z) && 270 > Math.abs(Z) && (I ? ((Y *= -1), (Z += 0 >= j ? 180 : -180), (j += 0 >= j ? 180 : -180)) : ((U *= -1), (Z += 0 >= Z ? 180 : -180))),
                      (r.scaleX = Y),
                      (r.scaleY = U),
                      (r.rotation = j),
                      (r.skewX = Z),
                      Ze && ((r.rotationX = r.rotationY = r.z = 0), (r.perspective = N), (r.scaleZ = 1)),
                      r.svg && ((r.x -= r.xOrigin - (r.xOrigin * ve + r.yOrigin * xe)), (r.y -= r.yOrigin - (r.xOrigin * we + r.yOrigin * Se)))),
                  (r.zOrigin = W),
                  r))
                    2e-5 > r[V] && -2e-5 < r[V] && (r[V] = 0)
                return (
                  e &&
                    (B._fwdTransform = r).svg &&
                    (it && B.style[Ye]
                      ? L.delayedCall(0.001, function () {
                          _t(B.style, Ye)
                        })
                      : !it &&
                        B.getAttribute("transform") &&
                        L.delayedCall(0.001, function () {
                          B.removeAttribute("transform")
                        })),
                  r
                )
              }),
              ot =
                (f.set3DTransformRatio =
                f.setTransformRatio =
                  function (B) {
                    var t = this.data,
                      P = this.t.style,
                      O = t.rotation,
                      H = t.rotationX,
                      E = t.rotationY,
                      S = t.scaleX,
                      L = t.scaleY,
                      R = t.scaleZ,
                      W = t.x,
                      V = t.y,
                      Y = t.z,
                      j = t.svg,
                      X = t.perspective,
                      Z = t.force3D,
                      N,
                      G,
                      q,
                      K,
                      Q,
                      $,
                      J,
                      ee,
                      te,
                      oe,
                      ne,
                      ie,
                      se,
                      re,
                      ae,
                      de,
                      le,
                      pe,
                      _e,
                      me,
                      ue,
                      ce,
                      he
                    if (
                      !((((1 !== B && 0 !== B) || "auto" !== Z || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && Z) || Y || X || E || H || 1 !== R) ||
                      (it && j) ||
                      !Ze
                    )
                      O || t.skewX || j
                        ? ((O *= U),
                          (ce = t.skewX * U),
                          (he = 1e5),
                          (N = Math.cos(O) * S),
                          (K = Math.sin(O) * S),
                          (G = Math.sin(O - ce) * -L),
                          (Q = Math.cos(O - ce) * L),
                          ce &&
                            "simple" === t.skewType &&
                            ((le = Math.tan(ce - t.skewY * U)),
                            (G *= le = Math.sqrt(1 + le * le)),
                            (Q *= le),
                            t.skewY && ((le = Math.tan(t.skewY * U)), (N *= le = Math.sqrt(1 + le * le)), (K *= le))),
                          j &&
                            ((W += t.xOrigin - (t.xOrigin * N + t.yOrigin * G) + t.xOffset),
                            (V += t.yOrigin - (t.xOrigin * K + t.yOrigin * Q) + t.yOffset),
                            it && (t.xPercent || t.yPercent) && ((re = this.t.getBBox()), (W += 0.01 * t.xPercent * re.width), (V += 0.01 * t.yPercent * re.height)),
                            W < (re = 1e-6) && -re < W && (W = 0),
                            V < re && -re < V && (V = 0)),
                          (_e = (0 | (N * he)) / he + "," + (0 | (K * he)) / he + "," + (0 | (G * he)) / he + "," + (0 | (Q * he)) / he + "," + W + "," + V + ")"),
                          j && it
                            ? this.t.setAttribute("transform", "matrix(" + _e)
                            : (P[Ye] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + _e))
                        : (P[Ye] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + L + "," + W + "," + V + ")")
                    else {
                      if ((Ie && (S < (re = 1e-4) && -re < S && (S = R = 2e-5), L < re && -re < L && (L = R = 2e-5), !X || t.z || t.rotationX || t.rotationY || (X = 0)), O || t.skewX))
                        (O *= U),
                          (ae = N = Math.cos(O)),
                          (de = K = Math.sin(O)),
                          t.skewX &&
                            ((O -= t.skewX * U),
                            (ae = Math.cos(O)),
                            (de = Math.sin(O)),
                            "simple" === t.skewType &&
                              ((le = Math.tan((t.skewX - t.skewY) * U)),
                              (ae *= le = Math.sqrt(1 + le * le)),
                              (de *= le),
                              t.skewY && ((le = Math.tan(t.skewY * U)), (N *= le = Math.sqrt(1 + le * le)), (K *= le)))),
                          (G = -de),
                          (Q = ae)
                      else {
                        if (!(E || H || 1 !== R || X || j))
                          return void (P[Ye] =
                            (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") +
                            W +
                            "px," +
                            V +
                            "px," +
                            Y +
                            "px)" +
                            (1 !== S || 1 !== L ? " scale(" + S + "," + L + ")" : ""))
                        ;(N = Q = 1), (G = K = 0)
                      }
                      ;(te = 1),
                        (q = $ = J = ee = oe = ne = 0),
                        (ie = X ? -1 / X : 0),
                        (se = t.zOrigin),
                        (re = 1e-6),
                        (me = ","),
                        (ue = "0"),
                        (O = E * U) && ((ae = Math.cos(O)), (oe = ie * (J = -(de = Math.sin(O)))), (q = N * de), ($ = K * de), (ie *= te = ae), (N *= ae), (K *= ae)),
                        (O = H * U) &&
                          ((le = G * (ae = Math.cos(O)) + q * (de = Math.sin(O))),
                          (pe = Q * ae + $ * de),
                          (ee = te * de),
                          (ne = ie * de),
                          (q = G * -de + q * ae),
                          ($ = Q * -de + $ * ae),
                          (te *= ae),
                          (ie *= ae),
                          (G = le),
                          (Q = pe)),
                        1 !== R && ((q *= R), ($ *= R), (te *= R), (ie *= R)),
                        1 !== L && ((G *= L), (Q *= L), (ee *= L), (ne *= L)),
                        1 !== S && ((N *= S), (K *= S), (J *= S), (oe *= S)),
                        (se || j) &&
                          (se && ((W += q * -se), (V += $ * -se), (Y += te * -se + se)),
                          j && ((W += t.xOrigin - (t.xOrigin * N + t.yOrigin * G) + t.xOffset), (V += t.yOrigin - (t.xOrigin * K + t.yOrigin * Q) + t.yOffset)),
                          W < re && -re < W && (W = ue),
                          V < re && -re < V && (V = ue),
                          Y < re && -re < Y && (Y = 0)),
                        (_e = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d("),
                        (_e += (N < re && -re < N ? ue : N) + me + (K < re && -re < K ? ue : K) + me + (J < re && -re < J ? ue : J)),
                        (_e += me + (oe < re && -re < oe ? ue : oe) + me + (G < re && -re < G ? ue : G) + me + (Q < re && -re < Q ? ue : Q)),
                        H || E || 1 !== R
                          ? ((_e += me + (ee < re && -re < ee ? ue : ee) + me + (ne < re && -re < ne ? ue : ne) + me + (q < re && -re < q ? ue : q)),
                            (_e += me + ($ < re && -re < $ ? ue : $) + me + (te < re && -re < te ? ue : te) + me + (ie < re && -re < ie ? ue : ie) + me))
                          : (_e += ",0,0,0,0,1,0,"),
                        (_e += W + me + V + me + Y + me + (X ? 1 + -Y / X : 1) + ")"),
                        (P[Ye] = _e)
                    }
                  }),
              it,
              rt,
              at,
              lt,
              pt
            ;((m = Ge.prototype).x = m.y = m.z = m.skewX = m.skewY = m.rotation = m.rotationX = m.rotationY = m.zOrigin = m.xPercent = m.yPercent = m.xOffset = m.yOffset = 0),
              (m.scaleX = m.scaleY = m.scaleZ = 1),
              We(
                "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
                {
                  parser: function (S, t, e, T, r, B, n) {
                    if (T._lastParsedTransform === n) return r
                    var a
                    "function" == typeof (T._lastParsedTransform = n)[e] && ((a = n[e]), (n[e] = t))
                    var O = S._fwdTransform,
                      g = S.style,
                      y = Ve.length,
                      C = n,
                      x = {},
                      w = tt(S, le, !0, C.parseTransform),
                      b = C.transform && ("function" == typeof C.transform ? C.transform(Ee, He) : C.transform),
                      I,
                      D,
                      H,
                      E,
                      L,
                      M,
                      F,
                      R,
                      z
                    if (((T._transform = w), b && "string" == typeof b && Ye))
                      ((D = K.style)[Ye] = b),
                        (D.display = "block"),
                        (D.position = "absolute"),
                        ue.body.appendChild(K),
                        (I = tt(K, null, !1)),
                        w.svg &&
                          ((M = w.xOrigin),
                          (F = w.yOrigin),
                          (I.x -= w.xOffset),
                          (I.y -= w.yOffset),
                          (C.transformOrigin || C.svgOrigin) &&
                            ((b = {}),
                            $(S, Se(C.transformOrigin), b, C.svgOrigin, C.smoothOrigin, !0),
                            (M = b.xOrigin),
                            (F = b.yOrigin),
                            (I.x -= b.xOffset - w.xOffset),
                            (I.y -= b.yOffset - w.yOffset)),
                          (M || F) && ((R = et(K, !0)), (I.x -= M - (M * R[0] + F * R[2])), (I.y -= F - (M * R[1] + F * R[3])))),
                        ue.body.removeChild(K),
                        I.perspective || (I.perspective = w.perspective),
                        null != C.xPercent && (I.xPercent = k(C.xPercent, w.xPercent)),
                        null != C.yPercent && (I.yPercent = k(C.yPercent, w.yPercent))
                    else if ("object" == typeof C) {
                      if (
                        ((I = {
                          scaleX: k(null == C.scaleX ? C.scale : C.scaleX, w.scaleX),
                          scaleY: k(null == C.scaleY ? C.scale : C.scaleY, w.scaleY),
                          scaleZ: k(C.scaleZ, w.scaleZ),
                          x: k(C.x, w.x),
                          y: k(C.y, w.y),
                          z: k(C.z, w.z),
                          xPercent: k(C.xPercent, w.xPercent),
                          yPercent: k(C.yPercent, w.yPercent),
                          perspective: k(C.transformPerspective, w.perspective),
                        }),
                        null != (L = C.directionalRotation))
                      )
                        if ("object" == typeof L) for (D in L) C[D] = L[D]
                        else C.rotation = L
                      "string" == typeof C.x && -1 !== C.x.indexOf("%") && ((I.x = 0), (I.xPercent = k(C.x, w.xPercent))),
                        "string" == typeof C.y && -1 !== C.y.indexOf("%") && ((I.y = 0), (I.yPercent = k(C.y, w.yPercent))),
                        (I.rotation = o(
                          "rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : w.rotation - w.skewY,
                          w.rotation - w.skewY,
                          "rotation",
                          x
                        )),
                        Ze &&
                          ((I.rotationX = o("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", x)),
                          (I.rotationY = o("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", x))),
                        (I.skewX = o(C.skewX, w.skewX - w.skewY)),
                        (I.skewY = o(C.skewY, w.skewY)) && ((I.skewX += I.skewY), (I.rotation += I.skewY))
                    }
                    for (
                      Ze && null != C.force3D && ((w.force3D = C.force3D), (E = !0)),
                        w.skewType = C.skewType || w.skewType || se.defaultSkewType,
                        (H = w.force3D || w.z || w.rotationX || w.rotationY || I.z || I.rotationX || I.rotationY || I.perspective) || null == C.scale || (I.scaleZ = 1);
                      -1 < --y;

                    )
                      (1e-6 < (b = I[(z = Ve[y])] - w[z]) || -1e-6 > b || null != C[z] || null != G[z]) &&
                        ((E = !0), (r = new Re(w, z, w[z], b, r)), z in x && (r.e = x[z]), (r.xs0 = 0), (r.plugin = B), T._overwriteProps.push(r.n))
                    return (
                      (b = C.transformOrigin),
                      w.svg &&
                        (b || C.svgOrigin) &&
                        ((M = w.xOffset),
                        (F = w.yOffset),
                        $(S, Se(b), I, C.svgOrigin, C.smoothOrigin),
                        (r = A(w, "xOrigin", (O ? w : I).xOrigin, I.xOrigin, r, "transformOrigin")),
                        (r = A(w, "yOrigin", (O ? w : I).yOrigin, I.yOrigin, r, "transformOrigin")),
                        (M === w.xOffset && F === w.yOffset) ||
                          ((r = A(w, "xOffset", O ? M : w.xOffset, w.xOffset, r, "transformOrigin")), (r = A(w, "yOffset", O ? F : w.yOffset, w.yOffset, r, "transformOrigin"))),
                        (b = it ? null : "0px 0px")),
                      (b || (Ze && H && w.zOrigin)) &&
                        (Ye
                          ? ((E = !0),
                            (z = je),
                            (b = (b || be(S, z, le, !1, "50% 50%")) + ""),
                            ((r = new Re(g, z, 0, 0, r, -1, "transformOrigin")).b = g[z]),
                            (r.plugin = B),
                            Ze
                              ? ((D = w.zOrigin),
                                (b = b.split(" ")),
                                (w.zOrigin = (2 < b.length && (0 === D || "0px" !== b[2]) ? parseFloat(b[2]) : D) || 0),
                                (r.xs0 = r.e = b[0] + " " + (b[1] || "50%") + " 0px"),
                                ((r = new Re(w, "zOrigin", 0, 0, r, -1, r.n)).b = D),
                                (r.xs0 = r.e = w.zOrigin))
                              : (r.xs0 = r.e = b))
                          : Se(b + "", w)),
                      E && (T._transformType = (w.svg && it) || (!H && 3 !== this._transformType) ? 2 : 3),
                      a && (n[e] = a),
                      r
                    )
                  },
                  prefix: !0,
                }
              ),
              We("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
              We("borderRadius", {
                defaultValue: "0px",
                parser: function (n, t, S, B, r) {
                  t = this.format(t)
                  for (
                    var O = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                      y = n.style,
                      v = parseFloat(n.offsetWidth),
                      x = parseFloat(n.offsetHeight),
                      w = t.split(" "),
                      T = 0,
                      C,
                      P,
                      k,
                      I,
                      A,
                      D,
                      H,
                      E,
                      L,
                      M,
                      F,
                      R;
                    T < O.length;
                    T++
                  )
                    this.p.indexOf("border") && (O[T] = j(O[T])),
                      -1 !== (k = P = be(n, O[T], le, !1, "0px")).indexOf(" ") && ((k = (P = k.split(" "))[0]), (P = P[1])),
                      (I = C = w[T]),
                      (A = parseFloat(k)),
                      (E = k.substr((A + "").length)),
                      "" ===
                        (H = (L = "=" === I.charAt(1))
                          ? ((D = parseInt(I.charAt(0) + "1", 10)), (I = I.substr(2)), (D *= parseFloat(I)), I.substr((D + "").length - (0 > D ? 1 : 0)) || "")
                          : ((D = parseFloat(I)), I.substr((D + "").length))) && (H = de[S] || E),
                      H !== E &&
                        ((M = ye(n, "borderLeft", A, E)),
                        (F = ye(n, "borderTop", A, E)),
                        (P =
                          "%" === H ? ((k = 100 * (M / v) + "%"), 100 * (F / x) + "%") : "em" === H ? ((k = M / (R = ye(n, "borderLeft", 1, "em")) + "em"), F / R + "em") : ((k = M + "px"), F + "px")),
                        L && ((I = parseFloat(k) + D + H), (C = parseFloat(P) + D + H))),
                      (r = ze(y, O[T], k + " " + P, I + " " + C, !1, "0px", r))
                  return r
                },
                prefix: !0,
                formatter: r("0px 0px 0px 0px", !1, !0),
              }),
              We("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                defaultValue: "0px",
                parser: function (o, t, e, n, r) {
                  return ze(o.style, e, this.format(be(o, e, le, !1, "0px 0px")), this.format(t), !1, "0px", r)
                },
                prefix: !0,
                formatter: r("0px 0px", !1, !0),
              }),
              We("backgroundPosition", {
                defaultValue: "0 0",
                parser: function (m, t, e, g, r, s) {
                  var n = le || fe(m, null),
                    _ = this.format(
                      (n
                        ? De
                          ? n.getPropertyValue("background-position-x") + " " + n.getPropertyValue("background-position-y")
                          : n.getPropertyValue("background-position")
                        : m.currentStyle.backgroundPositionX + " " + m.currentStyle.backgroundPositionY) || "0 0"
                    ),
                    b = this.format(t),
                    d,
                    y,
                    v,
                    w,
                    x,
                    S
                  if (
                    (-1 !== _.indexOf("%")) != (-1 !== b.indexOf("%")) &&
                    2 > b.split(",").length &&
                    (S = be(m, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) &&
                    "none" !== S
                  ) {
                    for (d = _.split(" "), y = b.split(" "), p.setAttribute("src", S), v = 2; -1 < --v; )
                      (w = -1 !== (_ = d[v]).indexOf("%")) != (-1 !== y[v].indexOf("%")) &&
                        ((x = 0 === v ? m.offsetWidth - p.width : m.offsetHeight - p.height), (d[v] = w ? (parseFloat(_) / 100) * x + "px" : 100 * (parseFloat(_) / x) + "%"))
                    _ = d.join(" ")
                  }
                  return this.parseComplex(m.style, _, b, r, s)
                },
                formatter: Se,
              }),
              We("backgroundSize", {
                defaultValue: "0 0",
                formatter: function (e) {
                  return Se(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
                },
              }),
              We("perspective", { defaultValue: "0px", prefix: !0 }),
              We("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
              We("transformStyle", { prefix: !0 }),
              We("backfaceVisibility", { prefix: !0 }),
              We("userSelect", { prefix: !0 }),
              We("margin", { parser: S("marginTop,marginRight,marginBottom,marginLeft") }),
              We("padding", { parser: S("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
              We("clip", {
                defaultValue: "rect(0px,0px,0px,0px)",
                parser: function (d, t, p, _, r, s) {
                  var n, m, u
                  return (
                    (t =
                      9 > De
                        ? ((m = d.currentStyle), (u = 8 > De ? " " : ","), (n = "rect(" + m.clipTop + u + m.clipRight + u + m.clipBottom + u + m.clipLeft + ")"), this.format(t).split(",").join(u))
                        : ((n = this.format(be(d, this.p, le, !1, this.dflt))), this.format(t))),
                    this.parseComplex(d.style, n, t, r, s)
                  )
                },
              }),
              We("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
              We("autoRound,strictUnits", {
                parser: function (o, t, e, n, r) {
                  return r
                },
              }),
              We("border", {
                defaultValue: "0px solid #000",
                parser: function (d, t, e, p, r, s) {
                  var n = be(d, "borderTopWidth", le, !1, "0px"),
                    _ = this.format(t).split(" "),
                    o = _[0].replace(me, "")
                  return (
                    "px" !== o && (n = parseFloat(n) / ye(d, "borderTopWidth", 1, o) + o),
                    this.parseComplex(d.style, this.format(n + " " + be(d, "borderTopStyle", le, !1, "solid") + " " + be(d, "borderTopColor", le, !1, "#000")), _.join(" "), r, s)
                  )
                },
                color: !0,
                formatter: function (o) {
                  var t = o.split(" ")
                  return t[0] + " " + (t[1] || "solid") + " " + (o.match(Oe) || ["#000"])[0]
                },
              }),
              We("borderWidth", { parser: S("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
              We("float,cssFloat,styleFloat", {
                parser: function (n, t, e, d, r) {
                  var s = n.style,
                    a = "cssFloat" in s ? "cssFloat" : "styleFloat"
                  return new Re(s, a, 0, 0, r, -1, e, !1, 0, s[a], t)
                },
              }),
              We("opacity,alpha,autoAlpha", {
                defaultValue: "1",
                parser: function (d, t, p, _, r, m) {
                  var n = parseFloat(be(d, "opacity", le, !1, "1")),
                    u = d.style,
                    o = "autoAlpha" === p
                  return (
                    "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + n),
                    o && 1 === n && "hidden" === be(d, "visibility", le) && 0 !== t && (n = 0),
                    ce
                      ? (r = new Re(u, "opacity", n, t - n, r))
                      : (((r = new Re(u, "opacity", 100 * n, 100 * (t - n), r)).xn1 = o ? 1 : 0),
                        (u.zoom = 1),
                        (r.type = 2),
                        (r.b = "alpha(opacity=" + r.s + ")"),
                        (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                        (r.data = d),
                        (r.plugin = m),
                        (r.setRatio = te)),
                    o &&
                      (((r = new Re(u, "visibility", 0, 0, r, -1, null, !1, 0, 0 === n ? "hidden" : "inherit", 0 === t ? "hidden" : "inherit")).xs0 = "inherit"),
                      _._overwriteProps.push(r.n),
                      _._overwriteProps.push(p)),
                    r
                  )
                },
              })
            var _t = function (o, t) {
              t && (o.removeProperty ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t), o.removeProperty(t.replace(l, "-$1").toLowerCase())) : o.removeAttribute(t))
            }
            for (
              We("className", {
                parser: function (d, t, e, m, r, c, n) {
                  var a = d.getAttribute("class") || "",
                    p = d.style.cssText,
                    _,
                    b,
                    v,
                    w,
                    x
                  if ((((r = m._classNamePT = new Re(d, e, 0, 0, r, 2)).setRatio = oe), (r.pr = -11), (ae = !0), (r.b = a), (b = g(d, le)), (v = d._fwdClassPT))) {
                    for (w = {}, x = v.data; x; ) (w[x.p] = 1), (x = x._next)
                    v.setRatio(1)
                  }
                  return (
                    ((d._fwdClassPT = r).e = "=" === t.charAt(1) ? a.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "") : t),
                    d.setAttribute("class", r.e),
                    (_ = y(d, b, g(d), n, w)),
                    d.setAttribute("class", a),
                    (r.data = _.firstMPT),
                    (d.style.cssText = p),
                    (r = r.xfirst = m.parse(d, _.difs, r, c))
                  )
                },
              }),
                We("clearProps", {
                  parser: function (o, t, e, n, r) {
                    return ((r = new Re(o, e, 0, 0, r, 2)).setRatio = ne), (r.e = t), (r.pr = -10), (r.data = n._tween), (ae = !0), r
                  },
                }),
                m = ["bezier", "throwProps", "physicsProps", "physics2D"],
                Xe = m.length;
              Xe--;

            )
              Ne(m[Xe])
            ;((m = se.prototype)._firstPT = m._lastParsedTransform = m._transform = null),
              (m._onInitTween = function (d, t, m, c) {
                if (!d.nodeType) return !1
                ;(this._target = He = d),
                  (this._tween = m),
                  (this._vars = t),
                  (Ee = c),
                  (Ce = t.autoRound),
                  (ae = !1),
                  (de = t.suffixMap || se.suffixMap),
                  (le = fe(d, "")),
                  (pe = this._overwriteProps)
                var r = d.style,
                  _,
                  b,
                  v,
                  w,
                  x,
                  S,
                  T,
                  B,
                  O
                if (
                  (Pe && "" === r.zIndex && (("auto" !== (_ = be(d, "zIndex", le)) && "" !== _) || this._addLazySet(r, "zIndex", 0)),
                  "string" == typeof t &&
                    ((w = r.cssText),
                    (_ = g(d, le)),
                    (r.cssText = w + ";" + t),
                    (_ = y(d, _, g(d)).difs),
                    !ce && /opacity:([^;]*)/i.test(t) && (_.opacity = parseFloat(RegExp.$1)),
                    (t = _),
                    (r.cssText = w)),
                  (this._firstPT = t.className ? (b = re.className.parse(d, t.className, "className", this, null, null, t)) : (b = this.parse(d, t, null))),
                  this._transformType)
                ) {
                  for (
                    O = 3 === this._transformType,
                      Ye
                        ? ke &&
                          ((Pe = !0),
                          "" === r.zIndex && (("auto" !== (T = be(d, "zIndex", le)) && "" !== T) || this._addLazySet(r, "zIndex", 0)),
                          Ae && this._addLazySet(r, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden")))
                        : (r.zoom = 1),
                      v = b;
                    v && v._next;

                  )
                    v = v._next
                  ;(B = new Re(d, "transform", 0, 0, null, 2)),
                    this._linkCSSP(B, null, v),
                    (B.setRatio = Ye ? ot : ee),
                    (B.data = this._transform || tt(d, le, !0)),
                    (B.tween = m),
                    (B.pr = -1),
                    pe.pop()
                }
                if (ae) {
                  for (; b; ) {
                    for (S = b._next, v = w; v && v.pr > b.pr; ) v = v._next
                    ;(b._prev = v ? v._prev : x) ? (b._prev._next = b) : (w = b), (b._next = v) ? (v._prev = b) : (x = b), (b = S)
                  }
                  this._firstPT = w
                }
                return !0
              }),
              (m.parse = function (d, t, e, m) {
                var r = d.style,
                  c,
                  g,
                  b,
                  y,
                  v,
                  w,
                  x,
                  S,
                  T,
                  B
                for (c in t)
                  "function" == typeof (w = t[c]) && (w = w(Ee, He)),
                    (g = re[c])
                      ? (e = g.parse(d, w, c, this, e, m, t))
                      : ((v = be(d, c, le) + ""),
                        (T = "string" == typeof w),
                        "color" === c || "fill" === c || "stroke" === c || -1 !== c.indexOf("Color") || (T && /^(rgb|hsl)/.test(w))
                          ? (T || (w = (3 < (w = Be(w)).length ? "rgba(" : "rgb(") + w.join(",") + ")"), (e = ze(r, c, v, w, !0, "transparent", e, 0, m)))
                          : T && /[\s,\(]/i.test(w)
                          ? (e = ze(r, c, v, w, !0, null, e, 0, m))
                          : ((x = (b = parseFloat(v)) || 0 === b ? v.substr((b + "").length) : ""),
                            ("" !== v && "auto" !== v) ||
                              (x =
                                "width" === c || "height" === c
                                  ? ((b = (function (o, t, e) {
                                      if ("svg" === (o.nodeName + "").toLowerCase()) return (e || fe(o))[t] || 0
                                      if (o.getBBox && $e(o)) return o.getBBox()[t] || 0
                                      var a = parseFloat("width" === t ? o.offsetWidth : o.offsetHeight),
                                        d = we[t],
                                        s = d.length
                                      for (e = e || fe(o, null); -1 < --s; ) (a -= parseFloat(be(o, "padding" + d[s], e, !0)) || 0), (a -= parseFloat(be(o, "border" + d[s] + "Width", e, !0)) || 0)
                                      return a
                                    })(d, c, le)),
                                    "px")
                                  : "left" === c || "top" === c
                                  ? ((b = ve(d, c, le)), "px")
                                  : ((b = "opacity" === c ? 1 : 0), "")),
                            "" ===
                              (S = (B = T && "=" === w.charAt(1))
                                ? ((y = parseInt(w.charAt(0) + "1", 10)), (w = w.substr(2)), (y *= parseFloat(w)), w.replace(me, ""))
                                : ((y = parseFloat(w)), T ? w.replace(me, "") : "")) && (S = c in de ? de[c] : x),
                            (w = y || 0 === y ? (B ? y + b : y) + S : t[c]),
                            x !== S &&
                              "" !== S &&
                              (y || 0 === y) &&
                              b &&
                              ((b = ye(d, c, b, x)),
                              "%" === S
                                ? ((b /= ye(d, c, 100, "%") / 100), !0 !== t.strictUnits && (v = b + "%"))
                                : "em" === S || "rem" === S || "vw" === S || "vh" === S
                                ? (b /= ye(d, c, 1, S))
                                : "px" !== S && ((y = ye(d, c, y, S)), (S = "px")),
                              B && ((!y && 0 !== y) || (w = y + b + S))),
                            B && (y += b),
                            (b || 0 === b) && (y || 0 === y)
                              ? ((e = new Re(r, c, b, y - b, e, 0, c, !1 !== Ce && ("px" === S || "zIndex" === c), 0, v, w)).xs0 = S)
                              : void 0 !== r[c] && (w || ("NaN" != w + "" && null != w))
                              ? ((e = new Re(r, c, y || b || 0, 0, e, -1, c, !1, 0, v, w)).xs0 = "none" !== w || ("display" !== c && -1 === c.indexOf("Style")) ? w : v)
                              : V("invalid " + c + " tween value: " + t[c]))),
                    m && e && !e.plugin && (e.plugin = m)
                return e
              }),
              (m.setRatio = function (o) {
                var t = this._firstPT,
                  n,
                  a,
                  d
                if (!(1 !== o || (this._tween._time !== this._tween._duration && 0 !== this._tween._time)))
                  for (; t; ) {
                    if (!(2 !== t.type)) t.setRatio(o)
                    else if (!(t.r && -1 !== t.type)) t.t[t.p] = t.e
                    else if (!((n = Math.round(t.s + t.c)), t.type)) t.t[t.p] = n + t.xs0
                    else if (1 === t.type) {
                      for (d = t.l, a = t.xs0 + n + t.xs1, d = 1; d < t.l; d++) a += t["xn" + d] + t["xs" + (d + 1)]
                      t.t[t.p] = a
                    }
                    t = t._next
                  }
                else if (o || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                  for (; t; ) {
                    if (!((n = t.c * o + t.s), t.r ? (n = Math.round(n)) : 1e-6 > n && -1e-6 < n && (n = 0), t.type)) t.t[t.p] = n + t.xs0
                    else if (!(1 === t.type)) -1 === t.type ? (t.t[t.p] = t.xs0) : t.setRatio && t.setRatio(o)
                    else if (2 === (d = t.l)) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2
                    else if (3 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3
                    else if (4 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4
                    else if (5 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5
                    else {
                      for (a = t.xs0 + n + t.xs1, d = 1; d < t.l; d++) a += t["xn" + d] + t["xs" + (d + 1)]
                      t.t[t.p] = a
                    }
                    t = t._next
                  }
                else for (; t; ) 2 === t.type ? t.setRatio(o) : (t.t[t.p] = t.b), (t = t._next)
              }),
              (m._enableTransforms = function (e) {
                ;(this._transform = this._transform || tt(this._target, le, !0)), (this._transformType = (this._transform.svg && it) || (!e && 3 !== this._transformType) ? 2 : 3)
              }),
              (m._addLazySet = function (o, t, e) {
                var n = (this._firstPT = new Re(o, t, 0, 0, this._firstPT, 2))
                ;(n.e = e), (n.setRatio = ie), (n.data = this)
              }),
              (m._linkCSSP = function (o, t, e, n) {
                return (
                  o &&
                    (t && (t._prev = o),
                    o._next && (o._next._prev = o._prev),
                    o._prev ? (o._prev._next = o._next) : this._firstPT === o && ((this._firstPT = o._next), (n = !0)),
                    e ? (e._next = o) : n || null !== this._firstPT || (this._firstPT = o),
                    (o._next = t),
                    (o._prev = e)),
                  o
                )
              }),
              (m._mod = function (o) {
                for (var t = this._firstPT; t; ) "function" == typeof o[t.p] && o[t.p] === Math.round && (t.r = 1), (t = t._next)
              }),
              (m._kill = function (o) {
                var t = o,
                  n,
                  a,
                  d
                if (o.autoAlpha || o.alpha) {
                  for (a in ((t = {}), o)) t[a] = o[a]
                  ;(t.opacity = 1), t.autoAlpha && (t.visibility = 1)
                }
                for (
                  o.className &&
                    (n = this._classNamePT) &&
                    ((d = n.xfirst) && d._prev ? this._linkCSSP(d._prev, n._next, d._prev._prev) : d === this._firstPT && (this._firstPT = n._next),
                    n._next && this._linkCSSP(n._next, n._next._next, d._prev),
                    (this._classNamePT = null)),
                    n = this._firstPT;
                  n;

                )
                  n.plugin && n.plugin !== a && n.plugin._kill && (n.plugin._kill(o), (a = n.plugin)), (n = n._next)
                return E.prototype._kill.call(this, t)
              })
            var mt = function (o, t, e) {
              var d, l, p, _
              if (o.slice) for (l = o.length; -1 < --l; ) mt(o[l], t, e)
              else
                for (l = (d = o.childNodes).length; -1 < --l; ) (_ = (p = d[l]).type), p.style && (t.push(g(p)), e && e.push(p)), (1 === _ || 9 === _ || 11 === _) && p.childNodes.length && mt(p, t, e)
            }
            return (
              (se.cascadeTo = function (d, _, e) {
                var m = L.to(d, _, e),
                  o = [m],
                  l = [],
                  c = [],
                  h = [],
                  u = L._internals.reservedProps,
                  p,
                  g,
                  f,
                  b
                for (d = m._targets || m.target, mt(d, l, h), m.render(_, !0, !0), mt(d, c), m.render(0, !0, !0), m._enabled(!0), p = h.length; -1 < --p; )
                  if ((g = y(h[p], l[p], c[p])).firstMPT) {
                    for (f in ((g = g.difs), e)) u[f] && (g[f] = e[f])
                    for (f in ((b = {}), g)) b[f] = l[p][f]
                    o.push(L.fromTo(h[p], _, b, g))
                  }
                return o
              }),
              E.activate([se]),
              se
            )
          },
          !0
        ),
        _fwd_fwdScope.FWDFWD_fwdDefine(
          "easing.Back",
          ["easing.Ease"],
          function (b) {
            function d(o, t) {
              var e = h("easing." + o, function () {}, !0),
                n = (e.prototype = new b())
              return (n.constructor = e), (n.getRatio = t), e
            }
            function t(o, t, e, s) {
              var r = h("easing." + o, { easeOut: new t(), easeIn: new e(), easeInOut: new s() }, !0)
              return f(r, o), r
            }
            function m(o, t, e) {
              ;(this.t = o), (this.v = t), e && ((((this.next = e).prev = this).c = e.v - t), (this.gap = e.t - o))
            }
            function e(o, t) {
              var e = h(
                  "easing." + o,
                  function (e) {
                    ;(this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1)
                  },
                  !0
                ),
                n = (e.prototype = new b())
              return (
                (n.constructor = e),
                (n.getRatio = t),
                (n.config = function (o) {
                  return new e(o)
                }),
                e
              )
            }
            var g = _fwd_fwdScope.FWDGlobals || _fwd_fwdScope,
              a = g.com.fwd,
              o = 2 * Math.PI,
              l = Math.PI / 2,
              h = a._class,
              f = b.register || function () {},
              u = t(
                "Back",
                e("BackOut", function (e) {
                  return --e * e * ((this._p1 + 1) * e + this._p1) + 1
                }),
                e("BackIn", function (e) {
                  return e * e * ((this._p1 + 1) * e - this._p1)
                }),
                e("BackInOut", function (e) {
                  return 1 > (e *= 2) ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
                })
              ),
              p = h(
                "easing.SlowMo",
                function (o, n, s) {
                  ;(n = n || 0 === n ? n : 0.7),
                    null == o ? (o = 0.7) : 1 < o && (o = 1),
                    (this._p = 1 === o ? 0 : n),
                    (this._p1 = (1 - o) / 2),
                    (this._p2 = o),
                    (this._p3 = this._p1 + this._p2),
                    (this._calcEnd = !0 === s)
                },
                !0
              ),
              _ = (p.prototype = new b()),
              y,
              v,
              w
            return (
              (_.constructor = p),
              (_.getRatio = function (o) {
                var n = o + (0.5 - o) * this._p
                return o < this._p1
                  ? this._calcEnd
                    ? 1 - (o = 1 - o / this._p1) * o
                    : n - (o = 1 - o / this._p1) * o * o * o * n
                  : o > this._p3
                  ? this._calcEnd
                    ? 1 - (o = (o - this._p3) / this._p1) * o
                    : n + (o - n) * (o = (o - this._p3) / this._p1) * o * o * o
                  : this._calcEnd
                  ? 1
                  : n
              }),
              (p.ease = new p(0.7, 0.7)),
              (_.config = p.config =
                function (o, t, e) {
                  return new p(o, t, e)
                }),
              ((_ = (y = h(
                "easing.SteppedEase",
                function (e) {
                  ;(e = e || 1), (this._p1 = 1 / e), (this._p2 = e + 1)
                },
                !0
              )).prototype =
                new b()).constructor = y),
              (_.getRatio = function (e) {
                return 0 > e ? (e = 0) : 1 <= e && (e = 0.999999999), ((this._p2 * e) >> 0) * this._p1
              }),
              (_.config = y.config =
                function (e) {
                  return new y(e)
                }),
              ((_ = (v = h(
                "easing.RoughEase",
                function (g) {
                  for (
                    var y = (g = g || {}).taper || "none",
                      o = [],
                      l = 0,
                      v = 0 | (g.points || 20),
                      f = v,
                      w = !1 !== g.randomize,
                      p = !0 === g.clamp,
                      _ = g.template instanceof b ? g.template : null,
                      c = "number" == typeof g.strength ? 0.4 * g.strength : 0.4,
                      d,
                      x,
                      S,
                      T,
                      B,
                      O;
                    -1 < --f;

                  )
                    (d = w ? Math.random() : (1 / v) * f),
                      (x = _ ? _.getRatio(d) : d),
                      (S = "none" === y ? c : "out" === y ? (T = 1 - d) * T * c : "in" === y ? d * d * c : 0.5 > d ? 0.5 * ((T = 2 * d) * T) * c : 0.5 * ((T = 2 * (1 - d)) * T) * c),
                      w ? (x += Math.random() * S - 0.5 * S) : f % 2 ? (x += 0.5 * S) : (x -= 0.5 * S),
                      p && (1 < x ? (x = 1) : 0 > x && (x = 0)),
                      (o[l++] = { x: d, y: x })
                  for (
                    o.sort(function (o, t) {
                      return o.x - t.x
                    }),
                      O = new m(1, 1, null),
                      f = v;
                    -1 < --f;

                  )
                    (B = o[f]), (O = new m(B.x, B.y, O))
                  this._prev = new m(0, 0, 0 === O.t ? O.next : O)
                },
                !0
              )).prototype =
                new b()).constructor = v),
              (_.getRatio = function (o) {
                var t = this._prev
                if (o > t.t) {
                  for (; t.next && o >= t.t; ) t = t.next
                  t = t.prev
                } else for (; t.prev && o <= t.t; ) t = t.prev
                return (this._prev = t).v + ((o - t.t) / t.gap) * t.c
              }),
              (_.config = function (e) {
                return new v(e)
              }),
              (v.ease = new v()),
              t(
                "Bounce",
                d("BounceOut", function (e) {
                  return e < 1 / 2.75
                    ? 7.5625 * e * e
                    : e < 2 / 2.75
                    ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                    : e < 2.5 / 2.75
                    ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                    : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
                }),
                d("BounceIn", function (e) {
                  return (e = 1 - e) < 1 / 2.75
                    ? 1 - 7.5625 * e * e
                    : e < 2 / 2.75
                    ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                    : e < 2.5 / 2.75
                    ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                    : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375)
                }),
                d("BounceInOut", function (o) {
                  var n = 0.5 > o
                  return (
                    (o = n ? 1 - 2 * o : 2 * o - 1) < 1 / 2.75
                      ? (o *= 7.5625 * o)
                      : (o = o < 2 / 2.75 ? 7.5625 * (o -= 1.5 / 2.75) * o + 0.75 : o < 2.5 / 2.75 ? 7.5625 * (o -= 2.25 / 2.75) * o + 0.9375 : 7.5625 * (o -= 2.625 / 2.75) * o + 0.984375),
                    n ? 0.5 * (1 - o) : 0.5 * o + 0.5
                  )
                })
              ),
              t(
                "Circ",
                d("CircOut", function (e) {
                  return Math.sqrt(1 - --e * e)
                }),
                d("CircIn", function (e) {
                  return -(Math.sqrt(1 - e * e) - 1)
                }),
                d("CircInOut", function (e) {
                  return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
                })
              ),
              t(
                "Elastic",
                (w = function (n, t, a) {
                  var d = h(
                      "easing." + n,
                      function (n, t) {
                        ;(this._p1 = 1 <= n ? n : 1), (this._p2 = (t || a) / (1 > n ? n : 1)), (this._p3 = (this._p2 / o) * (Math.asin(1 / this._p1) || 0)), (this._p2 = o / this._p2)
                      },
                      !0
                    ),
                    e = (d.prototype = new b())
                  return (
                    (e.constructor = d),
                    (e.getRatio = t),
                    (e.config = function (o, t) {
                      return new d(o, t)
                    }),
                    d
                  )
                })(
                  "ElasticOut",
                  function (e) {
                    return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                  },
                  0.3
                ),
                w(
                  "ElasticIn",
                  function (e) {
                    return -(this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
                  },
                  0.3
                ),
                w(
                  "ElasticInOut",
                  function (e) {
                    return 1 > (e *= 2)
                      ? -0.5 * (this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
                      : 0.5 * (this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * this._p2)) + 1
                  },
                  0.45
                )
              ),
              t(
                "Expo",
                d("ExpoOut", function (e) {
                  return 1 - Math.pow(2, -10 * e)
                }),
                d("ExpoIn", function (e) {
                  return Math.pow(2, 10 * (e - 1)) - 0.001
                }),
                d("ExpoInOut", function (e) {
                  return 1 > (e *= 2) ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))
                })
              ),
              t(
                "Sine",
                d("SineOut", function (e) {
                  return Math.sin(e * l)
                }),
                d("SineIn", function (e) {
                  return 1 - Math.cos(e * l)
                }),
                d("SineInOut", function (e) {
                  return -0.5 * (Math.cos(Math.PI * e) - 1)
                })
              ),
              h(
                "easing.EaseLookup",
                {
                  find: function (e) {
                    return b.map[e]
                  },
                },
                !0
              ),
              f(g.SlowMo, "SlowMo", "ease,"),
              f(v, "RoughEase", "ease,"),
              f(y, "SteppedEase", "ease,"),
              u
            )
          },
          !0
        )
    }),
    _fwd_fwdScope.FWDFWD_fwdDefine && _fwd_fwdScope._fwd_fwdQueue.pop()(),
    (function (ee, _) {
      "use strict"
      var c = {},
        d = (ee.FWDGlobals = ee.FWDGlobals || ee)
      if (!d.FWDTweenLite) {
        var m = function (o) {
            for (var t = o.split("."), e = d, n = 0; n < t.length; n++) e[t[n]] = e = e[t[n]] || {}
            return e
          },
          y = m("com.fwd"),
          te = 1e-10,
          u = function (o) {
            for (var t = [], e = o.length, n = 0; n !== e; t.push(o[n++]));
            return t
          },
          v = function () {},
          oe =
            ((s = Object.prototype.toString),
            (T = s.call([])),
            function (e) {
              return null != e && (e instanceof Array || ("object" == typeof e && !!e.push && s.call(e) === T))
            }),
          r = {},
          l = function (e, n, h, t) {
            ;(this.sc = r[e] ? r[e].sc : []), ((r[e] = this).gsClass = null), (this.func = h)
            var u = []
            ;(this.check = function (p) {
              for (var g = n.length, f = g, b, y, v, w, x; -1 < --g; ) (b = r[n[g]] || new l(n[g], [])).gsClass ? ((u[g] = b.gsClass), f--) : p && b.sc.push(this)
              if (0 === f && h) {
                if (((v = (y = ("com.fwd." + e).split(".")).pop()), (w = m(y.join("."))[v] = this.gsClass = h.apply(h, u)), t))
                  if (((d[v] = c[v] = w), !(x = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd))
                    define((ee.FWDAMDPath ? ee.FWDAMDPath + "/" : "") + e.split(".").pop(), [], function () {
                      return w
                    })
                  else if (x)
                    if (e === _) for (g in ((fwd_module.exports = c[_] = w), c)) w[g] = c[g]
                    else c[_] && (c[_][v] = w)
                for (g = 0; g < this.sc.length; g++) this.sc[g].check()
              }
            }),
              this.check(!0)
          },
          w = (ee.FWDFWD_fwdDefine = function (o, t, e, n) {
            return new l(o, t, e, n)
          }),
          x = (y._class = function (o, t, n) {
            return (
              (t = t || function () {}),
              w(
                o,
                [],
                function () {
                  return t
                },
                n
              ),
              t
            )
          }),
          p,
          s,
          T
        w.globals = d
        var ne = [0, 0, 1, 1],
          ie = x(
            "easing.Ease",
            function (o, t, e, n) {
              ;(this._func = o), (this._type = e || 0), (this._power = n || 0), (this._params = t ? ne.concat(t) : ne)
            },
            !0
          ),
          b = (ie.map = {}),
          n = (ie.register = function (d, t, e, p) {
            for (var r = t.split(","), l = r.length, _ = (e || "easeIn,easeOut,easeInOut").split(","), m, u, c, g; -1 < --l; )
              for (u = r[l], m = p ? x("easing." + u, null, !0) : y.easing[u] || {}, c = _.length; -1 < --c; ) (g = _[c]), (b[u + "." + g] = b[g + u] = m[g] = d.getRatio ? d : d[g] || new d())
          }),
          a
        for (
          (a = ie.prototype)._calcEnd = !1,
            a.getRatio = function (o) {
              if (this._func) return (this._params[0] = o), this._func.apply(null, this._params)
              var t = this._type,
                e = this._power,
                n = 1 === t ? 1 - o : 2 === t ? o : 0.5 > o ? 2 * o : 2 * (1 - o)
              return 1 === e ? (n *= n) : 2 === e ? (n *= n * n) : 3 === e ? (n *= n * n * n) : 4 === e && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : 0.5 > o ? n / 2 : 1 - n / 2
            },
            ae = (de = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
          -1 < --ae;

        )
          (a = de[ae] + ",Power" + ae),
            n(new ie(null, null, 1, ae), a, "easeOut", !0),
            n(new ie(null, null, 2, ae), a, "easeIn" + (0 === ae ? ",easeNone" : "")),
            n(new ie(null, null, 3, ae), a, "easeInOut")
        ;(b.linear = y.easing.Linear.easeIn), (b.swing = y.easing.Quad.easeInOut)
        var P = x("events.EventDispatcher", function (e) {
          ;(this._listeners = {}), (this._eventTarget = e || this)
        })
        ;((a = P.prototype).addEventListener = function (d, t, e, _, r) {
          r = r || 0
          var m = this._listeners[d],
            u = 0,
            c,
            h
          for (this !== f || p || f.wake(), null == m && (this._listeners[d] = m = []), h = m.length; -1 < --h; ) (c = m[h]).c === t && c.s === e ? m.splice(h, 1) : 0 === u && c.pr < r && (u = h + 1)
          m.splice(u, 0, { c: t, s: e, up: _, pr: r })
        }),
          (a.removeEventListener = function (o, t) {
            var e = this._listeners[o],
              n
            if (e) for (n = e.length; -1 < --n; ) if (e[n].c === t) return void e.splice(n, 1)
          }),
          (a.dispatchEvent = function (o) {
            var t = this._listeners[o],
              n,
              a,
              d
            if (t) for (1 < (n = t.length) && (t = t.slice(0)), a = this._eventTarget; -1 < --n; ) (d = t[n]) && (d.up ? d.c.call(d.s || a, { type: o, target: a }) : d.c.call(d.s || a))
          })
        for (
          var O = ee.requestAnimationFrame,
            se = ee.cancelAnimationFrame,
            re =
              Date.now ||
              function () {
                return new Date().getTime()
              },
            S = re(),
            ae = (de = ["ms", "moz", "webkit", "o"]).length,
            de;
          -1 < --ae && !O;

        )
          (O = ee[de[ae] + "RequestAnimationFrame"]), (se = ee[de[ae] + "CancelAnimationFrame"] || ee[de[ae] + "CancelRequestAnimationFrame"])
        x("Ticker", function (r, t) {
          var d = this,
            m = re(),
            e = !1 !== t && O && "auto",
            c = 500,
            h = 33,
            g = function (o) {
              var t = re() - S,
                n,
                s
              c < t && (m += t - h),
                (S += t),
                (d.time = (S - m) / 1e3),
                (n = d.time - x),
                (!_ || 0 < n || !0 === o) && (d.frame++, (x += n + (w <= n ? 0.004 : w - n)), (s = !0)),
                !0 !== o && (y = b(g)),
                s && d.dispatchEvent("tick")
            },
            _,
            b,
            y,
            w,
            x
          P.call(d),
            (d.time = d.frame = 0),
            (d.tick = function () {
              g(!0)
            }),
            (d.lagSmoothing = function (o, t) {
              ;(c = o || 1e10), (h = Math.min(t, c, 0))
            }),
            (d.sleep = function () {
              null != y && ((e && se ? se : clearTimeout)(y), (b = v), (y = null), d === f && (p = !1))
            }),
            (d.wake = function (o) {
              null === y ? (o ? (m += -S + (S = re())) : 10 < d.frame && (S = re() - c + 5)) : d.sleep(),
                (b =
                  0 === _
                    ? v
                    : e && O
                    ? O
                    : function (e) {
                        return setTimeout(e, 0 | (1e3 * (x - d.time) + 1))
                      }),
                d === f && (p = !0),
                g(2)
            }),
            (d.fps = function (e) {
              return arguments.length ? void ((w = 1 / ((_ = e) || 60)), (x = this.time + w), d.wake()) : _
            }),
            (d.useRAF = function (o) {
              return arguments.length ? void (d.sleep(), (e = o), d.fps(_)) : e
            }),
            d.fps(r),
            setTimeout(function () {
              "auto" === e && 5 > d.frame && "hidden" !== document.visibilityState && d.useRAF(!1)
            }, 1500)
        }),
          ((a = y.Ticker.prototype = new y.events.EventDispatcher()).constructor = y.Ticker)
        var le = x("core.FWDAnimation", function (o, t) {
            var n
            ;(this.vars = t = t || {}),
              (this._duration = this._totalDuration = o || 0),
              (this._delay = +t.delay || 0),
              (this._timeScale = 1),
              (this._active = !0 === t.immediateRender),
              (this.data = t.data),
              (this._reversed = !0 === t.reversed),
              U && (p || f.wake(), (n = this.vars.useFrames ? Z : U).add(this, n._time), this.vars.paused && this.paused(!0))
          }),
          f = (le.ticker = new y.Ticker())
        ;((a = le.prototype)._dirty = a._gc = a._initted = a._paused = !1),
          (a._totalTime = a._time = 0),
          (a._rawPrevTime = -1),
          (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
          (a._paused = !1)
        var M = function () {
          p && 2e3 < re() - S && f.wake(), setTimeout(M, 2e3)
        }
        M(),
          (a.play = function (o, t) {
            return null != o && this.seek(o, t), this.reversed(!1).paused(!1)
          }),
          (a.pause = function (o, t) {
            return null != o && this.seek(o, t), this.paused(!0)
          }),
          (a.resume = function (o, t) {
            return null != o && this.seek(o, t), this.paused(!1)
          }),
          (a.seek = function (o, t) {
            return this.totalTime(+o, !1 !== t)
          }),
          (a.restart = function (o, t) {
            return this.reversed(!1)
              .paused(!1)
              .totalTime(o ? -this._delay : 0, !1 !== t, !0)
          }),
          (a.reverse = function (o, t) {
            return null != o && this.seek(o || this.totalDuration(), t), this.reversed(!0).paused(!1)
          }),
          (a.render = function () {}),
          (a.invalidate = function () {
            return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this
          }),
          (a.isActive = function () {
            var o = this._timeline,
              e = this._startTime,
              n
            return !o || (!this._gc && !this._paused && o.isActive() && (n = o.rawTime()) >= e && n < e + this.totalDuration() / this._timeScale)
          }),
          (a._enabled = function (o, t) {
            return (
              p || f.wake(),
              (this._gc = !o),
              (this._active = this.isActive()),
              !0 !== t && (o && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !o && this.timeline && this._timeline._remove(this, !0)),
              !1
            )
          }),
          (a._kill = function () {
            return this._enabled(!1, !1)
          }),
          (a.kill = function (o, t) {
            return this._kill(o, t), this
          }),
          (a._uncache = function (o) {
            for (var t = o ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline)
            return this
          }),
          (a._swapSelfInParams = function (o) {
            for (var t = o.length, n = o.concat(); -1 < --t; ) "{self}" === o[t] && (n[t] = this)
            return n
          }),
          (a._callback = function (o) {
            var t = this.vars,
              e = t[o],
              n = t[o + "Params"],
              r = t[o + "Scope"] || t.callbackScope || this
            switch (n ? n.length : 0) {
              case 0:
                e.call(r)
                break
              case 1:
                e.call(r, n[0])
                break
              case 2:
                e.call(r, n[0], n[1])
                break
              default:
                e.apply(r, n)
            }
          }),
          (a.eventCallback = function (o, t, e, n) {
            if ("on" === (o || "").substr(0, 2)) {
              var r = this.vars
              if (1 === arguments.length) return r[o]
              null == t ? delete r[o] : ((r[o] = t), (r[o + "Params"] = oe(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e), (r[o + "Scope"] = n)),
                "onUpdate" === o && (this._onUpdate = t)
            }
            return this
          }),
          (a.delay = function (e) {
            return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay
          }),
          (a.duration = function (e) {
            return arguments.length
              ? ((this._duration = this._totalDuration = e),
                this._uncache(!0),
                this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
                this)
              : ((this._dirty = !1), this._duration)
          }),
          (a.totalDuration = function (e) {
            return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration
          }),
          (a.time = function (o, t) {
            return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(o > this._duration ? this._duration : o, t)) : this._time
          }),
          (a.totalTime = function (o, n, e) {
            if ((p || f.wake(), !arguments.length)) return this._totalTime
            if (this._timeline) {
              if ((0 > o && !e && (o += this.totalDuration()), this._timeline.smoothChildTiming)) {
                this._dirty && this.totalDuration()
                var a = this._totalDuration,
                  r = this._timeline
                if (
                  (a < o && !e && (o = a), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? a - o : o) / this._timeScale), r._dirty || this._uncache(!1), r._timeline)
                )
                  for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline)
              }
              this._gc && this._enabled(!0, !1), (this._totalTime === o && 0 !== this._duration) || (z.length && me(), this.render(o, n, !1), z.length && me())
            }
            return this
          }),
          (a.progress = a.totalProgress =
            function (o, t) {
              var e = this.duration()
              return arguments.length ? this.totalTime(e * o, t) : e ? this._time / e : this.ratio
            }),
          (a.startTime = function (e) {
            return arguments.length
              ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this)
              : this._startTime
          }),
          (a.endTime = function (e) {
            return this._startTime + (0 == e ? this.duration() : this.totalDuration()) / this._timeScale
          }),
          (a.timeScale = function (o) {
            return arguments.length
              ? ((o = o || te),
                this._timeline &&
                  this._timeline.smoothChildTiming &&
                  ((s = (n = this._pauseTime) || 0 === n ? n : this._timeline.totalTime()), (this._startTime = s - ((s - this._startTime) * this._timeScale) / o)),
                (this._timeScale = o),
                this._uncache(!1))
              : this._timeScale
            var n, s
          }),
          (a.reversed = function (e) {
            return arguments.length
              ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                this)
              : this._reversed
          }),
          (a.paused = function (o) {
            if (!arguments.length) return this._paused
            var t = this._timeline,
              n,
              s
            return (
              o != this._paused &&
                t &&
                (p || o || f.wake(),
                (s = (n = t.rawTime()) - this._pauseTime),
                !o && t.smoothChildTiming && ((this._startTime += s), this._uncache(!1)),
                (this._pauseTime = o ? n : null),
                (this._paused = o),
                (this._active = this.isActive()),
                !o && 0 != s && this._initted && this.duration() && ((n = t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale), this.render(n, n === this._totalTime, !0))),
              this._gc && !o && this._enabled(!0, !1),
              this
            )
          })
        var C = x("core.FWDSimpleTimeline", function (e) {
          le.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0)
        })
        ;((a = C.prototype = new le()).constructor = C),
          (a.kill()._gc = !1),
          (a._first = a._last = a._recent = null),
          (a._sortChildren = !1),
          (a.add = a.insert =
            function (o, t) {
              var e, r
              if (
                ((o._startTime = +(t || 0) + o._delay),
                o._paused && this !== o._timeline && (o._pauseTime = o._startTime + (this.rawTime() - o._startTime) / o._timeScale),
                o.timeline && o.timeline._remove(o, !0),
                (o.timeline = o._timeline = this),
                o._gc && o._enabled(!0, !0),
                (e = this._last),
                this._sortChildren)
              )
                for (r = o._startTime; e && e._startTime > r; ) e = e._prev
              return (
                e ? ((o._next = e._next), (e._next = o)) : ((o._next = this._first), (this._first = o)),
                o._next ? (o._next._prev = o) : (this._last = o),
                (o._prev = e),
                (this._recent = o),
                this._timeline && this._uncache(!0),
                this
              )
            }),
          (a._remove = function (o, t) {
            return (
              o.timeline === this &&
                (t || o._enabled(!1, !0),
                o._prev ? (o._prev._next = o._next) : this._first === o && (this._first = o._next),
                o._next ? (o._next._prev = o._prev) : this._last === o && (this._last = o._prev),
                (o._next = o._prev = o.timeline = null),
                o === this._recent && (this._recent = this._last),
                this._timeline && this._uncache(!0)),
              this
            )
          }),
          (a.render = function (o, t, e) {
            var n = this._first,
              a
            for (this._totalTime = this._time = this._rawPrevTime = o; n; )
              (a = n._next),
                (n._active || (o >= n._startTime && !n._paused)) &&
                  (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (o - n._startTime) * n._timeScale, t, e) : n.render((o - n._startTime) * n._timeScale, t, e)),
                (n = a)
          }),
          (a.rawTime = function () {
            return p || f.wake(), this._totalTime
          })
        var F = x(
            "FWDTweenLite",
            function (d, l, e) {
              if ((le.call(this, l, e), (this.render = F.prototype.render), null == d)) throw "Cannot tween a null target."
              this.target = d = ("string" == typeof d && F.selector(d)) || d
              var p = d.jquery || (d.length && d !== ee && d[0] && (d[0] === ee || (d[0].nodeType && d[0].style && !d.nodeType))),
                a = this.vars.overwrite,
                _,
                m,
                c
              if (((this._overwrite = a = null == a ? q[F.defaultOverwrite] : "number" == typeof a ? a >> 0 : q[a]), (p || d instanceof Array || (d.push && oe(d))) && "number" != typeof d[0]))
                for (this._targets = c = u(d), this._propLookup = [], this._siblings = [], _ = 0; _ < c.length; _++)
                  (m = c[_])
                    ? "string" == typeof m
                      ? "string" == typeof (m = c[_--] = F.selector(m)) && c.splice(_ + 1, 1)
                      : m.length && m !== ee && m[0] && (m[0] === ee || (m[0].nodeType && m[0].style && !m.nodeType))
                      ? (c.splice(_--, 1), (this._targets = c = c.concat(u(m))))
                      : ((this._siblings[_] = G(m, this, !1)), 1 === a && 1 < this._siblings[_].length && K(m, this, null, 1, this._siblings[_]))
                    : c.splice(_--, 1)
              else (this._propLookup = {}), (this._siblings = G(d, this, !1)), 1 === a && 1 < this._siblings.length && K(d, this, null, 1, this._siblings)
              ;(this.vars.immediateRender || (0 === l && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -te), this.render(Math.min(0, -this._delay)))
            },
            !0
          ),
          D = function (e) {
            return e && e.length && e !== ee && e[0] && (e[0] === ee || (e[0].nodeType && e[0].style && !e.nodeType))
          }
        ;((a = F.prototype = new le()).constructor = F),
          (a.kill()._gc = !1),
          (a.ratio = 0),
          (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
          (a._notifyPluginsOfEnabled = a._lazy = !1),
          (F.version = "1.19.0"),
          (F.defaultEase = a._ease = new ie(null, null, 1, 1)),
          (F.defaultOverwrite = "auto"),
          (F.ticker = f),
          (F.autoSleep = 120),
          (F.lagSmoothing = function (o, t) {
            f.lagSmoothing(o, t)
          }),
          (F.selector =
            ee.$ ||
            ee.jQuery ||
            function (o) {
              var t = ee.$ || ee.jQuery
              return t
                ? (F.selector = t)(o)
                : "undefined" == typeof document
                ? o
                : document.querySelectorAll
                ? document.querySelectorAll(o)
                : document.getElementById("#" === o.charAt(0) ? o.substr(1) : o)
            })
        var z = [],
          X = {},
          pe = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
          N = function (o) {
            for (var t = this._firstPT, n; t; )
              (n = t.blob ? (o ? this.join("") : this.start) : t.c * o + t.s),
                t.m ? (n = t.m(n, this._target || t.t)) : 1e-6 > n && -1e-6 < n && (n = 0),
                t.f ? (t.fp ? t.t[t.p](t.fp, n) : t.t[t.p](n)) : (t.t[t.p] = n),
                (t = t._next)
          },
          Y = function (d, m, g, b) {
            var r = [d, m],
              u = 0,
              y = "",
              v = 0,
              w,
              x,
              S,
              T,
              B,
              O,
              C
            for (
              r.start = d,
                g && (g(r), (d = r[0]), (m = r[1])),
                r.length = 0,
                w = d.match(pe) || [],
                x = m.match(pe) || [],
                b && ((b._next = null), (b.blob = 1), (r._firstPT = r._applyPT = b)),
                B = x.length,
                T = 0;
              T < B;
              T++
            )
              (C = x[T]),
                (y += (O = m.substr(u, m.indexOf(C, u) - u)) || !T ? O : ","),
                (u += O.length),
                v ? (v = (v + 1) % 5) : "rgba(" === O.substr(-5) && (v = 1),
                C === w[T] || w.length <= T
                  ? (y += C)
                  : (y && (r.push(y), (y = "")),
                    (S = parseFloat(w[T])),
                    r.push(S),
                    (r._firstPT = {
                      _next: r._firstPT,
                      t: r,
                      p: r.length - 1,
                      s: S,
                      c: ("=" === C.charAt(1) ? parseInt(C.charAt(0) + "1", 10) * parseFloat(C.substr(2)) : parseFloat(C) - S) || 0,
                      f: 0,
                      m: v && 4 > v ? Math.round : 0,
                    })),
                (u += C.length)
            return (y += m.substr(u)) && r.push(y), (r.setRatio = N), r
          },
          E = function (d, t, e, m, c, s, n, a, o) {
            "function" == typeof m && (m = m(o || 0, d))
            var l = "get" === e ? d[t] : e,
              g = typeof d[t],
              u = "string" == typeof m && "=" === m.charAt(1),
              p = {
                t: d,
                p: t,
                s: l,
                f: "function" == g,
                pg: 0,
                n: c || t,
                m: s ? ("function" == typeof s ? s : Math.round) : 0,
                pr: 0,
                c: u ? parseInt(m.charAt(0) + "1", 10) * parseFloat(m.substr(2)) : parseFloat(m) - l || 0,
              },
              b
            if (
              ("number" != g &&
                ("function" == g && "get" === e && ((b = t.indexOf("set") || "function" != typeof d["get" + t.substr(3)] ? t : "get" + t.substr(3)), (p.s = l = n ? d[b](n) : d[b]())),
                "string" == typeof l && (n || isNaN(l))
                  ? ((p.fp = n), (p = { t: Y(l, m, a || F.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: c || t, pr: 0, m: 0 }))
                  : u || ((p.s = parseFloat(l)), (p.c = parseFloat(m) - p.s || 0))),
              p.c)
            )
              return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p)
          },
          B = (F._internals = { isArray: oe, isSelector: D, lazyTweens: z, blobDif: Y }),
          W = (F._plugins = {}),
          L = (B.tweenLookup = {}),
          j = 0,
          _e = (B.reservedProps = {
            ease: 1,
            delay: 1,
            overwrite: 1,
            onComplete: 1,
            onCompleteParams: 1,
            onCompleteScope: 1,
            useFrames: 1,
            runBackwards: 1,
            startAt: 1,
            onUpdate: 1,
            onUpdateParams: 1,
            onUpdateScope: 1,
            onStart: 1,
            onStartParams: 1,
            onStartScope: 1,
            onReverseComplete: 1,
            onReverseCompleteParams: 1,
            onReverseCompleteScope: 1,
            onRepeat: 1,
            onRepeatParams: 1,
            onRepeatScope: 1,
            easeParams: 1,
            yoyo: 1,
            immediateRender: 1,
            repeat: 1,
            repeatDelay: 1,
            data: 1,
            paused: 1,
            reversed: 1,
            autoCSS: 1,
            lazy: 1,
            onOverwrite: 1,
            callbackScope: 1,
            stringFilter: 1,
            id: 1,
          }),
          q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
          Z = (le._rootFramesTimeline = new C()),
          U = (le._rootTimeline = new C()),
          $ = 30,
          me = (B.lazyRender = function () {
            var o = z.length,
              n
            for (X = {}; -1 < --o; ) (n = z[o]) && !1 !== n._lazy && (n.render(n._lazy[0], n._lazy[1], !0), (n._lazy = !1))
            z.length = 0
          })
        ;(U._startTime = f.time),
          (Z._startTime = f.frame),
          (U._active = Z._active = !0),
          setTimeout(me, 1),
          (le._updateRoot = F.render =
            function () {
              var o, n, s
              if ((z.length && me(), U.render((f.time - U._startTime) * U._timeScale, !1, !1), Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), z.length && me(), f.frame >= $)) {
                for (s in (($ = f.frame + (parseInt(F.autoSleep, 10) || 120)), L)) {
                  for (o = (n = L[s].tweens).length; -1 < --o; ) n[o]._gc && n.splice(o, 1)
                  0 === n.length && delete L[s]
                }
                if ((!(s = U._first) || s._paused) && F.autoSleep && !Z._first && 1 === f._listeners.tick.length) {
                  for (; s && s._paused; ) s = s._next
                  s || f.sleep()
                }
              }
            }),
          f.addEventListener("tick", le._updateRoot)
        var G = function (o, t, e) {
            var a = o._fwdTweenID,
              d,
              l
            if ((L[a || (o._fwdTweenID = a = "t" + j++)] || (L[a] = { target: o, tweens: [] }), t && (((d = L[a].tweens)[(l = d.length)] = t), e))) for (; -1 < --l; ) d[l] === t && d.splice(l, 1)
            return L[a].tweens
          },
          H = function (o, t, e, d) {
            var r = o.vars.onOverwrite,
              l,
              p
            return r && (l = r(o, t, e, d)), (r = F.onOverwrite) && (p = r(o, t, e, d)), !1 !== l && !1 !== p
          },
          K = function (d, t, e, m, r) {
            var s, c, g
            if (1 === m || 4 <= m) {
              for (g = r.length, p = 0; p < g; p++)
                if ((c = r[p]) !== t) c._gc || (c._kill(null, d, t) && (s = !0))
                else if (5 === m) break
              return s
            }
            for (var b = t._startTime + te, h = [], f = 0, y = 0 === t._duration, p = r.length, v; -1 < --p; )
              (c = r[p]) === t ||
                c._gc ||
                c._paused ||
                (c._timeline === t._timeline
                  ? c._startTime <= b && c._startTime + c.totalDuration() / c._timeScale > b && (((y || !c._initted) && 2e-10 >= b - c._startTime) || (h[f++] = c))
                  : ((v = v || J(t, 0, y)), 0 === J(c, v, y) && (h[f++] = c)))
            for (p = f; -1 < --p; )
              if (((c = h[p]), 2 === m && c._kill(e, d, t) && (s = !0), 2 !== m || (!c._firstPT && c._initted))) {
                if (2 !== m && !H(c, t)) continue
                c._enabled(!1, !1) && (s = !0)
              }
            return s
          },
          J = function (o, t, e) {
            for (var a = o._timeline, d = a._timeScale, l = o._startTime; a._timeline; ) {
              if (((l += a._startTime), (d *= a._timeScale), a._paused)) return -100
              a = a._timeline
            }
            return t < (l /= d) ? l - t : (e && l === t) || (!o._initted && l - t < 2 * te) ? te : (l += o.totalDuration() / o._timeScale / d) > t + te ? 0 : l - t - te
          }
        ;(a._init = function () {
          var d = this.vars,
            a = this._overwrittenProps,
            o = this._duration,
            l = !!d.immediateRender,
            p = d.ease,
            _,
            m,
            u,
            c,
            g,
            y
          if (d.startAt) {
            for (c in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (g = {}), d.startAt)) g[c] = d.startAt[c]
            if (((g.overwrite = !1), (g.immediateRender = !0), (g.lazy = l && !1 !== d.lazy), (g.startAt = g.delay = null), (this._startAt = F.to(this.target, 0, g)), l))
              if (0 < this._time) this._startAt = null
              else if (0 !== o) return
          } else if (d.runBackwards && 0 !== o)
            if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null)
            else {
              for (c in (0 !== this._time && (l = !1), (u = {}), d)) (_e[c] && "autoCSS" !== c) || (u[c] = d[c])
              if (!((u.overwrite = 0), (u.data = "isFromStart"), (u.lazy = l && !1 !== d.lazy), (u.immediateRender = l), (this._startAt = F.to(this.target, 0, u)), l))
                this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
              else if (0 === this._time) return
            }
          if (
            ((this._ease = p = p ? (p instanceof ie ? p : "function" == typeof p ? new ie(p, d.easeParams) : b[p] || F.defaultEase) : F.defaultEase),
            d.easeParams instanceof Array && p.config && (this._ease = p.config.apply(p, d.easeParams)),
            (this._easeType = this._ease._type),
            (this._easePower = this._ease._power),
            (this._firstPT = null),
            this._targets)
          )
            for (y = this._targets.length, _ = 0; _ < y; _++) this._initProps(this._targets[_], (this._propLookup[_] = {}), this._siblings[_], a ? a[_] : null, _) && (m = !0)
          else m = this._initProps(this.target, this._propLookup, this._siblings, a, 0)
          if ((m && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), d.runBackwards))
            for (u = this._firstPT; u; ) (u.s += u.c), (u.c = -u.c), (u = u._next)
          ;(this._onUpdate = d.onUpdate), (this._initted = !0)
        }),
          (a._initProps = function (d, t, e, p, r) {
            var s, _, m, u, c, g
            if (null == d) return !1
            for (s in (X[d._fwdTweenID] && me(),
            this.vars.css ||
              (d.style &&
                d !== ee &&
                d.nodeType &&
                W.css &&
                !1 !== this.vars.autoCSS &&
                (function (o, t) {
                  var e = {},
                    n
                  for (n in o)
                    _e[n] ||
                      (n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n) ||
                      !(!W[n] || (W[n] && W[n]._autoCSS)) ||
                      ((e[n] = o[n]), delete o[n])
                  o.css = e
                })(this.vars, d)),
            this.vars))
              if (((g = this.vars[s]), _e[s])) g && (g instanceof Array || (g.push && oe(g))) && -1 !== g.join("").indexOf("{self}") && (this.vars[s] = g = this._swapSelfInParams(g, this))
              else if (W[s] && (u = new W[s]())._onInitTween(d, this.vars[s], this, r)) {
                for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: u._priority, m: 0 }, _ = u._overwriteProps.length; -1 < --_; )
                  t[u._overwriteProps[_]] = this._firstPT
                ;(u._priority || u._onInitAllProps) && (m = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
              } else t[s] = E.call(this, d, s, "get", g, s, 0, null, this.vars.stringFilter, r)
            return p && this._kill(p, d)
              ? this._initProps(d, t, e, p, r)
              : 1 < this._overwrite && this._firstPT && 1 < e.length && K(d, this, t, this._overwrite, e)
              ? (this._kill(t, d), this._initProps(d, t, e, p, r))
              : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (X[d._fwdTweenID] = !0), m)
          }),
          (a.render = function (d, _, e) {
            var m = this._time,
              c = this._duration,
              u = this._rawPrevTime,
              p,
              g,
              f,
              b,
              y,
              v,
              w
            if (
              (c - 1e-7 <= d
                ? ((this._totalTime = this._time = c),
                  (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                  this._reversed || ((p = !0), (g = "onComplete"), (e = e || this._timeline.autoRemoveChildren)),
                  0 === c &&
                    ((!this._initted && this.vars.lazy && !e) ||
                      (this._startTime === this._timeline._duration && (d = 0),
                      (0 > u || (0 >= d && -1e-7 <= d) || (u === te && "isPause" !== this.data)) && u !== d && ((e = !0), te < u && (g = "onReverseComplete")),
                      (this._rawPrevTime = b = !_ || d || u === d ? d : te))))
                : 1e-7 > d
                ? ((this._totalTime = this._time = 0),
                  (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                  (0 !== m || (0 === c && 0 < u)) && ((g = "onReverseComplete"), (p = this._reversed)),
                  0 > d &&
                    ((this._active = !1),
                    0 === c && ((!this._initted && this.vars.lazy && !e) || (0 <= u && (u !== te || "isPause" !== this.data) && (e = !0), (this._rawPrevTime = b = !_ || d || u === d ? d : te)))),
                  this._initted || (e = !0))
                : ((this._totalTime = this._time = d),
                  this._easeType
                    ? ((y = d / c),
                      (1 === (v = this._easeType) || (3 === v && 0.5 <= y)) && (y = 1 - y),
                      3 === v && (y *= 2),
                      1 === (w = this._easePower) ? (y *= y) : 2 === w ? (y *= y * y) : 3 === w ? (y *= y * y * y) : 4 === w && (y *= y * y * y * y),
                      (this.ratio = 1 === v ? 1 - y : 2 === v ? y : 0.5 > d / c ? y / 2 : 1 - y / 2))
                    : (this.ratio = this._ease.getRatio(d / c))),
              this._time !== m || e)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return
                if (!e && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                  return (this._time = this._totalTime = m), (this._rawPrevTime = u), z.push(this), void (this._lazy = [d, _])
                this._time && !p ? (this.ratio = this._ease.getRatio(this._time / c)) : p && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active || (!this._paused && this._time !== m && 0 <= d && (this._active = !0)),
                  0 === m &&
                    (this._startAt && (0 <= d ? this._startAt.render(d, _, e) : (g = g || "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== c) || _ || this._callback("onStart"))),
                  f = this._firstPT;
                f;

              )
                f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next)
              this._onUpdate && (0 > d && this._startAt && -1e-4 !== d && this._startAt.render(d, _, e), _ || ((this._time !== m || p || e) && this._callback("onUpdate"))),
                g &&
                  ((this._gc && !e) ||
                    (0 > d && this._startAt && !this._onUpdate && -1e-4 !== d && this._startAt.render(d, _, e),
                    p && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                    !_ && this.vars[g] && this._callback(g),
                    0 === c && this._rawPrevTime === te && b !== te && (this._rawPrevTime = 0)))
            }
          }),
          (a._kill = function (d, _, m) {
            if (("all" === d && (d = null), null == d && (null == _ || _ === this.target))) return (this._lazy = !1), this._enabled(!1, !1)
            _ = "string" == typeof _ ? F.selector(_) || _ : _ || this._targets || this.target
            var c = m && this._time && m._startTime === this._startTime && this._timeline === m._timeline,
              p,
              g,
              b,
              y,
              v,
              w,
              x,
              S,
              T
            if ((oe(_) || D(_)) && "number" != typeof _[0]) for (p = _.length; -1 < --p; ) this._kill(d, _[p], m) && (w = !0)
            else {
              if (this._targets) {
                for (p = this._targets.length; -1 < --p; )
                  if (_ === this._targets[p]) {
                    ;(v = this._propLookup[p] || {}), (this._overwrittenProps = this._overwrittenProps || []), (g = this._overwrittenProps[p] = d ? this._overwrittenProps[p] || {} : "all")
                    break
                  }
              } else {
                if (_ !== this.target) return !1
                ;(v = this._propLookup), (g = this._overwrittenProps = d ? this._overwrittenProps || {} : "all")
              }
              if (v) {
                if (((x = d || v), (S = d !== g && "all" !== g && d !== v && ("object" != typeof d || !d._tempKill)), m && (F.onOverwrite || this.vars.onOverwrite))) {
                  for (b in x) v[b] && (T = T || []).push(b)
                  if ((T || !d) && !H(this, m, _, T)) return !1
                }
                for (b in x)
                  (y = v[b]) &&
                    (c && (y.f ? y.t[y.p](y.s) : (y.t[y.p] = y.s), (w = !0)),
                    y.pg && y.t._kill(x) && (w = !0),
                    (y.pg && 0 !== y.t._overwriteProps.length) ||
                      (y._prev ? (y._prev._next = y._next) : y === this._firstPT && (this._firstPT = y._next), y._next && (y._next._prev = y._prev), (y._next = y._prev = null)),
                    delete v[b]),
                    S && (g[b] = 1)
                !this._firstPT && this._initted && this._enabled(!1, !1)
              }
            }
            return w
          }),
          (a.invalidate = function () {
            return (
              this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
              (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
              (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
              (this._propLookup = this._targets ? {} : []),
              le.prototype.invalidate.call(this),
              this.vars.immediateRender && ((this._time = -te), this.render(Math.min(0, -this._delay))),
              this
            )
          }),
          (a._enabled = function (o, t) {
            if ((p || f.wake(), o && this._gc)) {
              var e = this._targets,
                n
              if (e) for (n = e.length; -1 < --n; ) this._siblings[n] = G(e[n], this, !0)
              else this._siblings = G(this.target, this, !0)
            }
            return le.prototype._enabled.call(this, o, t), this._notifyPluginsOfEnabled && this._firstPT && F._onPluginEvent(o ? "_onEnable" : "_onDisable", this)
          }),
          (F.to = function (o, t, e) {
            return new F(o, t, e)
          }),
          (F.from = function (o, t, e) {
            return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), new F(o, t, e)
          }),
          (F.fromTo = function (o, t, e, n) {
            return (n.startAt = e), (n.immediateRender = 0 != n.immediateRender && 0 != e.immediateRender), new F(o, t, n)
          }),
          (F.delayedCall = function (o, t, e, n, r) {
            return new F(t, 0, {
              delay: o,
              onComplete: t,
              onCompleteParams: e,
              callbackScope: n,
              onReverseComplete: t,
              onReverseCompleteParams: e,
              immediateRender: !1,
              lazy: !1,
              useFrames: r,
              overwrite: 0,
            })
          }),
          (F.set = function (o, t) {
            return new F(o, 0, t)
          }),
          (F.getTweensOf = function (o, a) {
            if (null == o) return []
            var e, d, l, p
            if (((o = ("string" == typeof o && F.selector(o)) || o), (oe(o) || D(o)) && "number" != typeof o[0])) {
              for (e = o.length, d = []; -1 < --e; ) d = d.concat(F.getTweensOf(o[e], a))
              for (e = d.length; -1 < --e; ) for (p = d[e], l = e; -1 < --l; ) p === d[l] && d.splice(e, 1)
            } else for (e = (d = G(o).concat()).length; -1 < --e; ) (d[e]._gc || (a && !d[e].isActive())) && d.splice(e, 1)
            return d
          }),
          (F.killTweensOf = F.killDelayedCallsTo =
            function (o, t, n) {
              "object" == typeof t && ((n = t), (t = !1))
              for (var a = F.getTweensOf(o, t), r = a.length; -1 < --r; ) a[r]._kill(n, o)
            })
        var ue = x(
          "plugins.TweenPlugin",
          function (o, t) {
            ;(this._overwriteProps = (o || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = ue.prototype)
          },
          !0
        )
        if (
          ((a = ue.prototype),
          (ue.version = "1.19.0"),
          (ue.API = 2),
          (a._firstPT = null),
          (a._addTween = E),
          (a.setRatio = N),
          (a._kill = function (o) {
            var t = this._overwriteProps,
              n = this._firstPT,
              s
            if (null != o[this._propName]) this._overwriteProps = []
            else for (s = t.length; -1 < --s; ) null != o[t[s]] && t.splice(s, 1)
            for (; n; )
              null != o[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next)
            return !1
          }),
          (a._mod = a._roundProps =
            function (o) {
              for (var t = this._firstPT, n; t; )
                (n = o[this._propName] || (null != t.n && o[t.n.split(this._propName + "_").join("")])) && "function" == typeof n && (2 === t.f ? (t.t._applyPT.m = n) : (t.m = n)), (t = t._next)
            }),
          (F._onPluginEvent = function (d, t) {
            var e = t._firstPT,
              l,
              p,
              _,
              m,
              u
            if ("_onInitAllProps" === d) {
              for (; e; ) {
                for (u = e._next, p = _; p && p.pr > e.pr; ) p = p._next
                ;(e._prev = p ? p._prev : m) ? (e._prev._next = e) : (_ = e), (e._next = p) ? (p._prev = e) : (m = e), (e = u)
              }
              e = t._firstPT = _
            }
            for (; e; ) e.pg && "function" == typeof e.t[d] && e.t[d]() && (l = !0), (e = e._next)
            return l
          }),
          (ue.activate = function (o) {
            for (var t = o.length; -1 < --t; ) o[t].API === ue.API && (W[new o[t]()._propName] = o[t])
            return !0
          }),
          (w.plugin = function (d) {
            if (!(d && d.propName && d.init && d.API)) throw "illegal plugin definition."
            var t = d.propName,
              l = d.priority || 0,
              r = d.overwriteProps,
              s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
              n = x(
                "plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin",
                function () {
                  ue.call(this, t, l), (this._overwriteProps = r || [])
                },
                !0 === d.fwd_global
              ),
              a = (n.prototype = new ue(t)),
              o
            for (o in (((a.constructor = n).API = d.API), s)) "function" == typeof d[o] && (a[s[o]] = d[o])
            return (n.version = d.version), ue.activate([n]), n
          }),
          (de = ee._fwd_fwdQueue))
        ) {
          for (ae = 0; ae < de.length; ae++) de[ae]()
          for (a in r) r[a].func || ee.console.log("FWDAnimation encountered missing dependency: " + a)
        }
        p = !1
      }
    })("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation")),
  (function (t) {
    var o = function (e) {
      "use strict"
      var n = this
      o.inst.push(n),
        (n.init = function () {
          return (FWDRLUtils.checkIfHasTransforms(), FWDTweenLite.ticker.useRAF(!0), (n.props = e), !n.props)
            ? void alert("FWDRL settings properties object is not defined!")
            : ((n.instName = n.props.instanceName),
              n.instName
                ? void ((t[n.instName] = n),
                  (n.fr = !1),
                  (n.stageContainer = document.getElementsByTagName("body")[0]),
                  (n._dc = document.documentElement),
                  !n.stageContainer && (n.stageContainer = n._dc),
                  (n.listeners = { events_ar: [] }),
                  (o.cls = n.cls = n.props.cls || "fwdrl"),
                  (n.fontIcon = n.props.fontIcon || "fwdrl-icon"),
                  (n.mediaSelector = n.props.mediaSelector || ".fwdrel"),
                  (n.rightClickContextMenu = n.props.rightClickContextMenu || "developer"),
                  (n.DRightClickContextMenu = n.rightClickContextMenu),
                  (n.buttonsAlignment = n.props.buttonsAlignment || "in"),
                  (n.DFBtnsAlignment = n.buttonsAlignment),
                  (n.useDrag = n.props.useDrag),
                  void 0 === n.useDrag && (n.useDrag = !0),
                  (n.DUseDrag = n.useDrag),
                  (n.mediaLazyLoading = n.props.mediaLazyLoading),
                  void 0 === n.mediaLazyLoading && (n.mediaLazyLoading = !0),
                  (n.DMediaLazyLoading = n.mediaLazyLoading),
                  (n.captionPosition = n.props.captionPosition || "bottomout"),
                  (n.captionPosition = n.captionPosition.toLowerCase()),
                  (n.DCaptionPosition = n.captionPosition),
                  (n.captionAnimationType = n.props.captionAnimationType || "motion"),
                  (n.DFDescriptionAnimationType = n.captionAnimationType),
                  (n.backgroundColor = n.props.backgroundColor || "rgba(0,0,0,.99)"),
                  (n.DFBackgroundColor = n.backgroundColor),
                  (n.thumbnailsBorderColor = n.props.thumbnailsBorderColor || "#FFFFFF"),
                  (n.DThumbnailsBorderColor = n.thumbnailsBorderColor),
                  (n.thumbnailsOverlayColor = n.props.thumbnailsOverlayColor || "rgba(0,0,0,.6)"),
                  (n.DFThumbnailsOverlayColor = n.thumbnailsOverlayColor),
                  (n.buttonsOffsetIn = n.buttonsAlignment == o.BUTTONS_IN ? n.props.buttonsOffsetIn || 10 : n.props.buttonsOffsetOut || 10),
                  (n.DFBtnsOffsetIn = n.buttonsOffsetIn),
                  (n.buttonsOffsetOut = n.buttonsAlignment == o.BUTTONS_IN ? n.props.buttonsOffsetOut || 10 : n.props.buttonsOffsetIn || 10),
                  (n.DFBtnsOffsetOut = n.buttonsOffsetOut),
                  (n.buttonsHideDelay = n.props.buttonsHideDelay || 5),
                  (n.buttonsHideDelay *= 1e3),
                  (n.DButtonsHideDelay = n.buttonsHideDelay),
                  (n.maxZoom = n.props.maxZoom || 1),
                  (n.DMaxZoom = n.maxZoom),
                  (n.spaceBetweenBtns = n.props.spaceBetweenBtns || 8),
                  (n.DFSpaceBetweenBtns = n.spaceBetweenBtns),
                  (n.defaultItemWidth = n.props.defaultItemWidth || 1527),
                  (n.DFDefaultItemW = n.defaultItemWidth),
                  (n.defaultItemHeight = n.props.defaultItemHeight || 859),
                  (n.DFDefaultItemH = n.defaultItemHeight),
                  (n.itemBorderColor = n.props.itemBorderColor || "#FFFFFF"),
                  (n.DFitemBorderColor = n.itemBorderColor),
                  (n.itemBorderSize = n.props.itemBorderSize || 0),
                  (n.DFItemBorderSize = n.itemBorderSize),
                  (n.itemBkColor = n.props.itemBackgroundColor || "#212121"),
                  (n.DItemBkColor = n.itemBkColor),
                  (n.thumbnailsOffsetBottom = n.props.thumbnailsOffsetBottom),
                  null == n.thumbnailsOffsetBottom && (n.thumbnailsOffsetBottom = 10),
                  (n.DFThumbnailsOffsetBottom = n.thumbnailsOffsetBottom),
                  (n.thumbnailsBorderSize = n.props.thumbnailsBorderSize),
                  null == n.thumbnailsBorderSize && (n.thumbnailsBorderSize = 2),
                  (n.DFThumbnailsBorderSize = n.thumbnailsBorderSize),
                  (n.thumbnailH = n.props.thumbnailsHeight || 80),
                  (n.DFThumbnailH = n.thumbnailH),
                  (n.spaceBetweenThumbnails = n.props.spaceBetweenThumbnails),
                  null == n.spaceBetweenThumbnails && (n.spaceBetweenThumbnails = 5),
                  (n.DFSpaceBetweenThumbnails = n.spaceBetweenThumbnails),
                  (n.itemOffsetHeight = n.props.itemOffsetHeight || 37),
                  (n.DItemOffsetHeight = n.itemOffsetHeight),
                  (n.itemOffsetHeightButtonsTop = n.props.itemOffsetHeightButtonsTop || 47),
                  (n.DItemOffsetHeightButtonsTop = n.itemOffsetHeightButtonsTop),
                  (n.spaceBetweenThumbnailsAndItem = n.props.spaceBetweenThumbnailsAndItem),
                  null == n.spaceBetweenThumbnailsAndItem && (n.spaceBetweenThumbnailsAndItem = 10),
                  (n.DFSpaceBetweenThumbnailsAndItem = n.spaceBetweenThumbnailsAndItem),
                  (n.slideShowDelay = 1e3 * n.props.slideShowDelay),
                  void 0 === n.props.slideShowDelay && (n.slideShowDelay = 6e3),
                  (n.DFSlideShowDelay = n.slideShowDelay),
                  (n.mId = -1),
                  (n.prevId = -2),
                  (n.friction = 0.9),
                  (n.mouseY = 0),
                  (n.vx =
                    n.vy =
                    n.vx2 =
                    n.vy2 =
                    n.mouseX =
                    n.dif =
                    n.lastPresedX =
                    n.lastPresedY =
                    n.gmx =
                    n.gmy =
                    n.finalY =
                    n.finalX =
                    n.desc2H =
                    n.finalW =
                    n.finalH =
                    n.stageW =
                    n.stageH =
                    n.totalItems =
                    n.originalW =
                    n.originalH =
                    n.buttonW =
                    n.buttonH =
                      0),
                  (n.isMbl = FWDRLUtils.isMbl),
                  (n.useVideo = n.props.useVideo),
                  n.fr && (n.useVideo = !1),
                  void 0 === n.useVideo && (n.useVideo = !0),
                  (n.fillEntireScreenWithPoster = n.props.fillEntireScreenWithPoster),
                  void 0 === n.fillEntireScreenWithPoster && (n.fillEntireScreenWithPoster = !0),
                  (n.videoAutoPlayText = n.props.videoAutoPlayText || "Click to unmute"),
                  (n.showLogo = n.props.showLogo),
                  void 0 === n.showLogo && (n.showLogo = !0),
                  (n.logoPath = n.props.logoPath || "content/evp/skin/logo.png"),
                  (n.logoLink = n.props.logoLink || ""),
                  (n.showControllerWhenVideoIsStopped = n.props.showControllerWhenVideoIsStopped),
                  (n.DhowControllerWhenVideoIsStopped = n.showControllerWhenVideoIsStopped),
                  (n.showDefaultControllerForVimeo = n.props.showDefaultControllerForVimeo),
                  null == n.showDefaultControllerForVimeo && (n.showDefaultControllerForVimeo = !0),
                  (n.showScrubberWhenControllerIsHidden = n.props.showScrubberWhenControllerIsHidden),
                  null == n.showScrubberWhenControllerIsHidden && (n.showScrubberWhenControllerIsHidden = !0),
                  (n.showVolumeButton = n.props.showVolumeButton),
                  null == n.showVolumeButton && (n.showVolumeButton = !0),
                  (n.showTime = n.props.showTime),
                  null == n.showTime && (n.showTime = !0),
                  (n.showRewindButton = n.props.showRewindButton),
                  null == n.showRewindButton && (n.showRewindButton = !0),
                  (n.showQualityButton = n.props.showQualityButton),
                  null == n.showQualityButton && (n.showQualityButton = !0),
                  (n.showChromecastButton = n.props.showChromecastButton),
                  null == n.showChromecastButton && (n.showChromecastButton = !0),
                  (n.showPlaybackRateButton = n.props.showPlaybackRateButton),
                  null == n.showPlaybackRateButton && (n.showPlaybackRateButton = !0),
                  (n.showFullScreenButton = n.props.showFullScreenButton),
                  null == n.showFullScreenButton && (n.showFullScreenButton = !0),
                  (n.showScrubberToolTipLabel = n.props.showScrubberToolTipLabel),
                  null == n.showScrubberToolTipLabel && (n.showScrubberToolTipLabel = !0),
                  (n.timeColor = n.props.timeColor || "#B9B9B9"),
                  (n.youtubeQualityButtonNormalColor = n.props.youtubeQualityButtonNormalColor || "#B9B9B9"),
                  (n.youtubeQualityButtonSelectedColor = n.props.youtubeQualityButtonSelectedColor || "#FFFFFF"),
                  (n.scrubbersToolTipLabelBackgroundColor = n.props.scrubbersToolTipLabelBackgroundColor || "#FFFFFF"),
                  (n.scrubbersToolTipLabelFontColor = n.props.scrubbersToolTipLabelFontColor || "#5a5a5a"),
                  (n.audioVisualizerLinesColor = n.props.audioVisualizerLinesColor || "#570AB8"),
                  (n.audioVisualizerCircleColor = n.props.audioVisualizerCircleColor || "#b9b9b9"),
                  (n.thumbnailsPreviewWidth = n.props.thumbnailsPreviewWidth || 196),
                  (n.thumbnailsPreviewBackgroundColor = n.props.thumbnailsPreviewBackgroundColor || "#2e2e2e"),
                  (n.thumbnailsPreviewBorderColor = n.props.thumbnailsPreviewBorderColor || "#414141"),
                  (n.thumbnailsPreviewLabelBackgroundColor = n.props.thumbnailsPreviewLabelBackgroundColor || "#414141"),
                  (n.thumbnailsPreviewLabelFontColor = n.props.thumbnailsPreviewLabelFontColor || "#CCCCCC"),
                  (n.skipToVideoText = n.props.skipToVideoText || "You can skip to video in: "),
                  (n.skipToVideoButtonText = n.props.skipToVideoButtonText || "Skip Ad"),
                  (n.useDeepLinking = n.props.useDeepLinking),
                  void 0 === n.useDeepLinking && (n.useDeepLinking = !0),
                  (n.DUseDeepLinking = n.useDeepLinking),
                  (n.useVectorIcons = n.props.useVectorIcons),
                  (n.showCloseButton = n.props.showCloseButton),
                  void 0 === n.showCloseButton && (n.showCloseButton = !0),
                  (n.DFShowCloseButton = n.showCloseButton),
                  (n.showFullscreenButton = n.props.showFullscreenButton),
                  void 0 === n.showFullscreenButton && (n.showFullscreenButton = !0),
                  (n.DShowFullscreenButton = n.showFullscreenButton),
                  (n.showZoomButton = n.props.showZoomButton),
                  void 0 === n.showZoomButton && (n.showZoomButton = !0),
                  (n.DShowZoomButton = n.showZoomButton),
                  (n.showNextAndPrevBtns = n.props.showNextAndPrevBtns),
                  void 0 === n.showNextAndPrevBtns && (n.showNextAndPrevBtns = !0),
                  (n.DShowNextAndPrevBtns = n.showNextAndPrevBtns),
                  (n.DFSefaultShowNextAndPrevBtns = n.defaultShowNextAndPrevBtns),
                  (n.hideButtonsOnDrag = n.props.hideButtonsOnDrag),
                  void 0 === n.hideButtonsOnDrag && (n.hideButtonsOnDrag = !0),
                  (n.DHideButtonsOnDrag = n.hideButtonsOnDrag),
                  (n.caption = n.props.caption),
                  null == n.caption && (n.caption = !0),
                  (n.DCaption = n.caption),
                  (n.showCaptionOnSmallScreens = n.props.showCaptionOnSmallScreens),
                  (n.DShowCaptionOnSmallScreens = n.showCaptionOnSmallScreens),
                  (n.animateCaption = n.props.animateCaption),
                  (n.DAnimateCaption = n.animateCaption),
                  (n.useKeyboard = n.props.useKeyboard),
                  void 0 === n.useKeyboard && (n.useKeyboard = !0),
                  (n.DUseKeyboard = n.useKeyboard),
                  (n.useDoubleClick = n.props.useDoubleClick),
                  void 0 === n.useDoubleClick && (n.useDoubleClick = !0),
                  (n.DUseDoubleClick = n.useDoubleClick),
                  (n.preloaderBkColor = n.props.preloaderBkColor || "#2e2e2e"),
                  (n.DPreloaderBkColor = n.preloaderBkColor),
                  (n.preloaderFillColor = n.props.preloaderFillColor || "#FFFFFF"),
                  (n.DPreloaderFillColor = n.preloaderFillColor),
                  (n.slideShowBkColor = n.props.slideShowBkColor || "#2e2e2e"),
                  (n.DSlideShowBkColor = n.slideShowBkColor),
                  (n.slideShowFillColor = n.props.slideShowFillColor || "#FFFFFF"),
                  (n.DSlideShowFillColor = n.slideShowFillColor),
                  (n.slideShowAutoPlay = n.props.slideShowAutoPlay),
                  (n.DFSlideShowAutoPlay = n.slideShowAutoPlay),
                  (n.slideShowAutoStop = n.props.slideShowAutoStop),
                  (n.DSlideShowAutoStop = n.slideShowAutoStop),
                  (n.DShowThumbnails = n.props.showThumbnails),
                  void 0 === n.DShowThumbnails && (n.DShowThumbnails = !0),
                  (n.DFDefaultThumbnails = n.DShowThumbnails),
                  (n.showSlideShowButton = n.props.showSlideShowButton),
                  void 0 === n.showSlideShowButton && (n.showSlideShowButton = !0),
                  (n.DFShowSlideShowButton = n.showSlideShowButton),
                  (n.showCounter = n.props.showCounter),
                  void 0 === n.showCounter && (n.showCounter = !0),
                  (n.DShowCounter = n.showCounter),
                  (n.showSlideShowAnimation = n.props.showSlideShowAnimation),
                  void 0 === n.showSlideShowAnimation && (n.showSlideShowAnimation = !0),
                  (n.DShowSlideShowAnimation = n.showSlideShowAnimation),
                  (n.addSlideShowAnimation_bl = !1),
                  (n.useAsModal = n.props.useAsModal),
                  (n.DFUseAsModal = n.useAsModal),
                  (n.shareButtons = n.props.shareButtons || ["facebook", "twitter", "linkedin", "tumblr", "pinterest", "reddit", "buffer", "digg", "blogger"]),
                  (n.DShareButtons = n.shareButtons),
                  (n.showShareButton = n.shareButtons.length),
                  (n.DShowShareButton = n.showShareButton),
                  (n.shareText = n.props.shareText || "Share on"),
                  (n.DShareText = n.shareText),
                  (n.sharedURL = n.props.sharedURL || "deeplink"),
                  (n.DSharedURL = n.sharedURL),
                  (n.shareBackgroundColor = n.props.shareBackgroundColor || "#FFFFFF"),
                  (n.DShareBackgroundColor = n.shareBackgroundColor),
                  (n.shareMainBackgroundColor = n.props.shareMainBackgroundColor || "rgba(0,0,0,.4)"),
                  (n.DShareMainBackgroundColor = n.shareMainBackgroundColor),
                  (n.showThumbnailsIcon = n.props.showThumbnailsIcon),
                  void 0 === n.showThumbnailsIcon && (n.showThumbnailsIcon = !0),
                  (n.DShowThumbnailsIcon = n.showThumbnailsIcon),
                  (n.volume = n.props.volume),
                  void 0 === n.volume && (n.volume = 1),
                  (n.DVolume = n.volume),
                  (n.videoAutoPlay = n.props.videoAutoPlay),
                  (n.DVideoAutoPlay = n.videoAutoPlay),
                  (n.nextVideoAutoPlay = n.props.nextVideoAutoPlay),
                  (n.DNextVideoAutoPlay = n.nextVideoAutoPlay),
                  (n.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent),
                  n.initiallize())
                : void alert("FWDRL instance name is required in the settings parameters!"))
        }),
        (n.initiallize = function () {
          function e() {
            ;(n.clicked = !0), n._dc.removeEventListener("touchstart", e), n._dc.removeEventListener("click", e)
          }
          n._dc.addEventListener("touchstart", e, { passive: !1 }),
            n._dc.addEventListener("mousedown", e),
            (n.main_do = new FWDRLDO("div")),
            n.main_do.screen.setAttribute("mId", n.instName),
            (n.main_do.screen.className = n.cls + " " + n.instName),
            (n.main_do.style().msTouchAction = "none"),
            (n.main_do.style().webkitTapHighlightColor = "rgba(0, 0, 0, 0)"),
            n.main_do.setBackfaceVisibility(),
            !n.isMbl && FWDRLUtils.isChrome && ((n.main_do.hasTransform3d_bl = !1), (n.main_do.hasTransform2d_bl = !1)),
            (n.main_do.style().width = "100%"),
            (n.main_do.style().zIndex = "2147483647"),
            (n.bk_do = new FWDRLDO("div")),
            (n.bk_do.screen.className = n.cls + "-main-background"),
            (n.bk_do.style().width = "100%"),
            (n.bk_do.style().height = "100%"),
            n.bk_do.setAlpha(0),
            (n.itemDragHld_do = new FWDRLDO("div")),
            n.itemDragHld_do.setOverflow("visible"),
            (n.itemHld_do = new FWDRLDO("div")),
            (n.itemHld_do.screen.className = n.cls + "-item"),
            FWDRLCaption.setPrototype(),
            (n.caption_do = new FWDRLCaption(n, n.captionAnimationType, n.captionPosition, n.itemBorderSize, "in")),
            FWDRLCaption.setPrototype(),
            (n.caption2_do = new FWDRLCaption(n, n.captionAnimationType, n.captionPosition, n.itemBorderSize, "out")),
            (n.itemBorder_do = new FWDRLDO("div")),
            (n.itemBorder_do.screen.className = n.cls + "-item-border"),
            (n.itemBorder_do.style().backgroundColor = n.itemBorderColor),
            ((!n.isMbl && FWDRLUtils.isChrome) || FWDRLUtils.isAndroid) &&
              ((n.itemBorder_do.hasTransform3d_bl = !1), (n.itemBorder_do.hasTransform2d_bl = !1), n.itemBorder_do.setBackfaceVisibility()),
            (n.itemHolder_do = new FWDRLDO("div")),
            n.itemHolder_do.setOverflow("visible"),
            (n.itemBk_do = new FWDRLDO("div")),
            (n.itemBk_do.screen.className = n.cls + "-item-background"),
            (n.itemBk_do.style().backgroundColor = n.itemBkColor),
            n.itemHld_do.addChild(n.itemBorder_do),
            n.itemHld_do.addChild(n.itemBk_do),
            n.itemHld_do.addChild(n.itemHolder_do),
            n.itemHld_do.addChild(n.caption_do),
            n.itemHld_do.addChild(n.caption2_do),
            (n.captionDumy_do = new FWDRLDO("div")),
            (n.captionDumy_do.screen.className = n.cls + "-caption out"),
            n.captionDumy_do.setVisible(!1),
            n.captionDumy_do.setBkColor("#FF0000"),
            n.main_do.addChild(n.bk_do),
            n.main_do.addChild(n.itemDragHld_do),
            n.itemDragHld_do.addChild(n.itemHld_do),
            n.stageContainer.appendChild(n.main_do.screen),
            n.main_do.addChild(n.caption2_do),
            n.main_do.addChild(n.captionDumy_do),
            (!FWDRLUtils.isMbl || (FWDRLUtils.isMbl && FWDRLUtils.hasPointerEvent)) && n.main_do.setSelectable(!1),
            n.setupContextMenu(),
            n.setupHider(),
            n.setupDisableClick(),
            n.setupData(),
            n.setupInfoWindow(),
            (n.dumy_do = new FWDRLDO("div")),
            (n.dumy_do.style().cursor = n.grabC),
            (n.dumy_do.style().width = "100%"),
            (n.dumy_do.style().height = "100%"),
            n.removeGrabHand(),
            "rl0" == n.instName && n.setStaticGalleries(),
            n.useDeepLinking && n.setupDL(),
            setTimeout(function () {
              var e = FWDRLDL.getParameter("rlinst"),
                t = FWDRLDL.getParameter("rlguid"),
                o = FWDRLDL.getParameter("rlmid")
              ;(e && e != n.instName) || ((n.propsObjName = FWDRLDL.getParameter("rlprops")), t && o && n.show(t, o, n.propsObjName))
            }, 100)
        }),
        (n.setGrabHand = function () {
          n.dumy_do.setVisible(!0), n.main_do.contains(n.dumy_do) || n.main_do.addChild(n.dumy_do)
        }),
        (n.removeGrabHand = function () {
          n.dumy_do.setVisible(!1), n.main_do.contains(n.dumy_do) && n.main_do.removeChild(n.dumy_do)
        }),
        (n.setCaptionText = function () {
          var e = 800
          ;(n.showFirstTimeDone && n.animateCaption) || (e = 0),
            e
              ? setTimeout(function () {
                  n.caption_do.setText(n.gallery_ar[n.mId].caption || ""), n.caption2_do.setText(n.gallery_ar[n.mId].caption || "")
                }, e)
              : (n.caption_do.setText(n.gallery_ar[n.mId].caption || ""), n.caption2_do.setText(n.gallery_ar[n.mId].caption || ""))
        }),
        (n.setupInfoWindow = function () {
          FWDRLInfo.setPrototype(), (n.info_do = new FWDRLInfo(n, n._d.wrningIconPath_str))
        }),
        (n.setupContextMenu = function () {
          n.ctxMenu_do = new FWDRLContextMenu(n.main_do, n.rightClickContextMenu)
        }),
        (n.setupHider = function () {
          FWDRLHider.setPrototype(),
            (n.hider = new FWDRLHider(n.main_do, n.buttonsHideDelay)),
            n.hider.addListener(FWDRLHider.SHOW, n.hiderShowHandler),
            n.hider.addListener(FWDRLHider.HIDE, n.hiderHideHandler)
        }),
        (n.hiderShowHandler = function () {
          n.isMax || n.isAnimMaxOrMin || n.isAnim || ((n.hiderHidden = !1), n.positionBtns(!0))
        }),
        (n.hiderHideHandler = function () {
          if (!(n.isMax || n.share_do.isShowed || n.isDragging)) {
            if (!n.isMbl) {
              if (n.shareBtnsHolder_do && FWDRLUtils.hitTest(n.shareBtnsHolder_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset()
              if (n.showCloseButton && FWDRLUtils.hitTest(n.closeBtn_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset()
              if (n.showNextAndPrevBtns && (FWDRLUtils.hitTest(n.nextBtn_do.screen, n.hider.globalX, n.hider.globalY) || FWDRLUtils.hitTest(n.prevBtn_do.screen, n.hider.globalX, n.hider.globalY)))
                return void n.hider.reset()
              if (n.showZoomButton && FWDRLUtils.hitTest(n.zoomBtn_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset()
              if (n.showFullscreenButton && FWDRLUtils.hitTest(n.fsBtn_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset()
              if (n.showSlideShowButton && FWDRLUtils.hitTest(n.slideShowBtn_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset()
              if (n.showShareButton && FWDRLUtils.hitTest(n.shareBtn_do.screen, n.hider.globalX, n.hider.globalY)) return void n.hider.reset()
            }
            ;(n.hiderHidden = !0), n.hideBtns(!0)
          }
        }),
        (n.setupDisableClick = function () {
          ;(n.dClick_do = new FWDRLDO("div")), FWDRLUtils.isIE && n.dClick_do.setBkColor("rgba(0,0,0,.000001")
        }),
        (n.showDisable = function (e, t, o) {
          if ((!n.isClkDisabled || t) && ((n.isClkDisabled = !0), !n.isGrab2)) {
            t && (n.isGrab2 = !0), n.dClick_do.setWidth(n.stageW)
            var s = n.stageH
            e && !t && n.thumbs_do && (s = n.stageH - n.thumbs_do.stageH), n.dClick_do.setHeight(s)
            var r = n.defaultC
            e && !o ? (r = n.grabC) : n.useDrag && (r = n.handC), (n.dClick_do.style().cursor = r), n.main_do.addChild(n.dClick_do)
          }
        }),
        (n.hideDisable = function () {
          n.isClkDisabled && ((n.isClkDisabled = n.isGrab2 = !1), n.dClick_do.setWidth(0), n.dClick_do.setHeight(0))
        }),
        (n.startResizeHandler = function () {
          t.addEventListener("orientationchange", n.orientationChange),
            t.addEventListener("resize", n.onResizeHandler),
            t.addEventListener("scroll", n.scrollHandler, { passive: !1 }),
            t.addEventListener("mousewheel", n.mouseDummyHandler, { capture: !1, passive: !1 }),
            t.addEventListener("DOMMouseScroll", n.mouseDummyHandler, { capture: !1, passive: !1 }),
            n.isMbl && t.addEventListener("touchmove", n.mouseDummyHandler, { capture: !1, passive: !1 }),
            n.onResizeHandler(),
            setTimeout(n.scrollHandler, 200),
            setTimeout(n.scrollHandler, 500)
        }),
        (n.stopResizeHandler = function () {
          clearTimeout(n.resizeHandlerId_to),
            t.removeEventListener("orientationchange", n.orientationChange),
            t.removeEventListener("resize", n.onResizeHandler),
            t.removeEventListener("scroll", n.scrollHandler),
            t.removeEventListener("mousewheel", n.mouseDummyHandler, { capture: !1, passive: !1 }),
            t.removeEventListener("DOMMouseScroll", n.mouseDummyHandler, { capture: !1, passive: !1 }),
            n.isMbl && t.removeEventListener("touchmove", n.mouseDummyHandler)
        }),
        (n.orientationChange = function () {
          n.resizeHandler(),
            setTimeout(function () {
              n.resizeHandler()
            }, 300),
            setTimeout(function () {
              n.resizeHandler()
            }, 600)
        }),
        (n.onResizeHandler = function () {
          n.resizeHandler()
        }),
        (n.scrollHandler = function (t) {
          n.so = FWDRLUtils.getScrollOffsets()
          n.isShowed && (n.main_do.setX(n.so.x), n.main_do.setY(n.so.y), t && t.preventDefault && t.preventDefault())
        }),
        (n.addPreventMouseWheel = function () {
          t.addEventListener("mousewheel", n.mouseDummyHandler), t.addEventListener("DOMMouseScroll", n.mouseDummyHandler)
        }),
        (n.removePreventMouseWheel = function () {
          t.removeEventListener("mousewheel", n.mouseDummyHandler), t.removeEventListener("DOMMouseScroll", n.mouseDummyHandler)
        }),
        (n.mouseDummyHandler = function (t) {
          return !!t.preventDefault && void t.preventDefault()
        }),
        (n.resizeHandler = function (e) {
          ;(n.isShowed || e) &&
            ((n.ws = FWDRLUtils.getViewportSize()),
            (n.stageW = n.ws.w),
            (n.stageH = n.ws.h),
            n.isMbl && (n.main_do.setWidth(n.stageW), n.main_do.setHeight(n.stageH)),
            n.preloader_do && n.positionPreloader(),
            n.info_do && n.info_do.isShowed && n.info_do.positionAndResize(),
            n.resizeItem(!0, !1, !0),
            n.resizeItem(),
            n.positionBtns(),
            n.isMax && n.hideBtns(!1),
            n.main_do.setX(n.so.x),
            n.main_do.setY(n.so.y),
            n.main_do.setHeight(n.stageH),
            n.thumbs_do && n.tempThumbsShowed && n.thumbs_do.positionAndResize(),
            n.share_do && n.share_do.hide(),
            clearTimeout(n.resizeHandlerId_to),
            (n.resizeHandlerId_to = setTimeout(n.checkStageSizeAndResize, 50)))
        }),
        (n.checkStageSizeAndResize = function () {
          ;(n.ws = FWDRLUtils.getViewportSize()), n.stageW != n.ws.w && n.resizeHandler()
        }),
        (n.setupData = function () {
          FWDRLData.setPrototype(),
            (n._d = new FWDRLData(n.props, n.rootElement_el, n)),
            (n.DFVideoControllerBackgroundColor_str = n._d.videoControllerBackgroundColor_str),
            (n.DFVideoPosterBackgroundColor_str = n._d.videoPosterBackgroundColor_str),
            (n.DFAudioControllerBackgroundColor_str = n._d.audioControllerBackgroundColor_str),
            (n.defaultC = "default"),
            (n.handC = "url(" + n._d.skin + "hand.cur), default"),
            (n.grabC = "url(" + n._d.skin + "grab.cur), default"),
            n.setupPreloader(),
            n.isShowed && (n.positionPreloader(), n.preloader_do.show(!0), n.resizeHandler()),
            n._d.addListener(FWDRLData.LOAD_ERROR, n.dataLoadError),
            n._d.addListener(FWDRLData.SKIN_LOAD_COMPLETE, n.dataSkinLoadComplete)
        }),
        (n.dataLoadError = function (t) {
          n.preloader_do && n.preloader_do.hide(!1), n.showError(t.text), setTimeout(n.resizeHandler, 200), n.showError(t.text)
        }),
        (n.dataSkinLoadComplete = function () {
          n.dataReady()
        }),
        (n.dataReady = function () {
          n.useVideo && !t.FWDEVPlayer ? n.loadVideoPlayer() : n.setupMainStuff()
        }),
        (n.setupMainStuff = function () {
          n.setupCounter(),
            n.setupBtns(),
            n.setupShare(),
            n.setupTimerManager(),
            n.hideStuffForGood(),
            n.setupEVPContainer(),
            clearTimeout(n.showOrHideCompleteId_to),
            setTimeout(function () {
              ;(n.isReady = !0), n.showComplete()
            }, 50),
            (n.tm.delay = n.slideShowDelay),
            (n.slp_do.animDur = n.slideShowDelay / 1e3),
            (n.hider.hideDelay = n.buttonsHideDelay),
            n.slp_do.updateColors(n.slideShowBkColor, n.slideShowFillColor),
            n.slp_do.updateColors(n.slideShowBkColor, n.slideShowFillColor)
        }),
        (n.loadVideoPlayer = function () {
          if (n.fr) {
            return void n.showError("Video is not supported in the free version!")
          }
          if (!o.hasLoadEVP && !t.FWDEVPlayer) {
            var e = document.createElement("script")
            ;(e.src = n._d.mainFolderPath + "evp/java/FWDEVPlayer.js?t=" + 99999999 * Math.random()), document.head.appendChild(e), (e.onload = n.videoLoadDone), (e.onerror = n.onVidLoadError)
          }
          ;(n.evp_it = setInterval(function () {
            ;(o.hasEVP || t.FWDEVPlayer) && (n.setupMainStuff(), clearInterval(n.evp_it))
          }, 5)),
            (o.hasLoadEVP = !0)
        }),
        (n.onVidLoadError = function () {
          n.hideDisable()
          n.showError("Error loading video player!")
        }),
        (n.videoLoadDone = function () {
          o.hasEVP = !0
        }),
        (n.setupEVPContainer = function () {
          ;(n.vidHld_do = new FWDRLDO("div")),
            n.vidHld_do.screen.setAttribute("id", n.instName + "_evp_div"),
            (n.vidHld_do.screen.className = "fwdevp"),
            n.vidHld_do.setOverflow("visible"),
            n.itemHld_do.addChildAt(n.vidHld_do, 3)
        }),
        (n.updateEVP = function () {
          if (!n.evpInst) {
            function o() {
              clearTimeout(_),
                (n.evp = t[n.instName + "_evp"]),
                n.evp
                  ? ((n.evp.main_do.screen.className = "fwdevp"),
                    n.evp.addListener(FWDEVPlayer.READY, n.evpReady),
                    n.evp.addListener(FWDEVPlayer.FRAMEWORK_LOAD, n.evpFrLoad),
                    n.evp.addListener(FWDEVPlayer.FRAMEWORK_DONE, n.evpFrDone),
                    n.evp.addListener(FWDEVPlayer.ERROR, n.evpError),
                    n.evp.addListener(FWDEVPlayer.VOLUME_SET, n.evpVolume),
                    n.evp.addListener(FWDEVPlayer.HIDER_SHOW, n.evpShowCursor),
                    n.evp.addListener(FWDEVPlayer.SHOW_CURSOR, n.evpShowCursor),
                    n.evp.addListener(FWDEVPlayer.STOP, n.evpStop),
                    n.evp.addListener(FWDEVPlayer.PAUSE, n.evpPause),
                    n.evp.addListener(FWDEVPlayer.PLAY, n.evpPlay),
                    n.evp.addListener(FWDEVPlayer.PLAY_START, n.evpPlayStart),
                    n.evp.addListener(FWDEVPlayer.PLAY_COMPLETE, n.evpPlayComplete),
                    n.evp.addListener(FWDEVPlayer.UPDATE, n.evpUpdate),
                    n.evp.addListener(FWDEVPlayer.GO_FULLSCREEN, n.evpFS),
                    n.evp.addListener(FWDEVPlayer.GO_NORMALSCREEN, n.evpNS))
                  : (_ = clearTimeout(_, 50))
            }
            ;(n.isLoading = !0), (n.evpInst = !0), (FWDEVPUtils.hasTransform3d = FWDRLUtils.hasTransform3d), (FWDEVPUtils.hasTransform2d = FWDRLUtils.hasTransform2d)
            var e = n.password ? "yes" : "no",
              s = n.useVectorIcons ? 6 : 12,
              r = n.useVectorIcons ? 12 : 16,
              a = n.useVectorIcons ? -2 : 0,
              d = n.useVectorIcons ? 9 : 3,
              l = n.useVectorIcons ? 6 : 2,
              e = n.password ? "yes" : "no",
              s = n.useVectorIcons ? 2 : 12,
              r = n.useVectorIcons ? 12 : 16,
              a = n.useVectorIcons ? -2 : 0,
              d = n.useVectorIcons ? 9 : 3,
              l = n.useVectorIcons ? 6 : 2,
              p = n.useVectorIcons ? 4 : 0
            t.is_ACORA && ((r = 16), (s = 16), (p = 2), (a = 1)),
              new FWDEVPlayer({
                isRL: !0,
                instanceName: n.instName + "_evp",
                parentId: n.instName + "_evp_div",
                fontIcon: n.fontIcon,
                mainFolderPath: n._d.mainFolderPath + "evp/",
                skinPath: "skin",
                displayType: "afterparent",
                delayPoster: !0,
                playsinline: "yes",
                useVectorIcons: n.useVectorIcons ? "yes" : "no",
                privateVideoPassword: n.password,
                preloaderBackgroundColor: n.preloaderBkColor,
                preloaderFillColor: n.preloaderFillColor,
                startAtVideoSource: 0,
                videoSource: [{ source: n.src, label: "small version", isPrivate: e }],
                posterPath: n.posterSrc,
                showErrorInfo: "no",
                fillEntireScreenWithPoster: n.fillEntireScreenWithPoster ? "yes" : "no",
                addKeyboardSupport: n.useKeyboard ? "yes" : "no",
                autoPlay: n.videoAutoPlay ? "yes" : "no",
                autoPlayText: n.videoAutoPlayText,
                volume: n.volume,
                posterBackgroundColor: "#000000",
                backgroundColor: "#000000",
                showLogo: n.showLogo ? "yes" : "no",
                logoPath: n.logoPath,
                hideLogoWithController: "yes",
                logoPosition: "topRight",
                logoLink: n.logoLink,
                logoMargins: 5,
                pushBtns: a,
                showControllerWhenVideoIsStopped: n.showControllerWhenVideoIsStopped ? "yes" : "no",
                showDefaultControllerForVimeo: n.showDefaultControllerForVimeo ? "yes" : "no",
                showScrubberWhenControllerIsHidden: n.showScrubberWhenControllerIsHidden ? "yes" : "no",
                showVolumeButton: n.showVolumeButton ? "yes" : "no",
                showVolumeScrubber: n.showVolumeButton ? "yes" : "no",
                showTime: n.showTime ? "yes" : "no",
                showRewindButton: n.showRewindButton ? "yes" : "no",
                showShareButton: "no",
                showEmbedButton: "no",
                showQualityButton: n.showQualityButton ? "yes" : "no",
                showChromecastButton: n.showChromecastButton ? "yes" : "no",
                showFullScreenButton: n.showFullScreenButton ? "yes" : "no",
                showMainScrubberToolTipLabel: n.showScrubberToolTipLabel ? "yes" : "no",
                controllerHeight: 42,
                controllerHideDelay: n.buttonsHideDelay / 1e3,
                startSpaceBetweenButtons: r,
                spaceBetweenButtons: s,
                mainScrubberOffestTop: 13,
                scrubbersOffsetWidth: 3,
                timeOffsetLeftWidth: d,
                timeOffsetRightWidth: l,
                volumeScrubberWidth: 80,
                volumeScrubberOffsetRightWidth: p,
                timeColor: n.timeColor,
                youtubeQualityButtonNormalColor: n.youtubeQualityButtonNormalColor,
                youtubeQualityButtonSelectedColor: n.youtubeQualityButtonSelectedColor,
                scrubbersToolTipLabelBackgroundColor: n.scrubbersToolTipLabelBackgroundColor,
                scrubbersToolTipLabelFontColor: n.scrubbersToolTipLabelFontColor,
                showSubtitleButton: "no",
                startAtSubtitle: 1,
                subtitlesSource: [{ subtitlePath: n.subtitleSrc, subtileLabel: "test" }],
                showPlaybackRateButton: n.showPlaybackRateButton ? "yes" : "no",
                defaultPlaybackRate: "1",
                audioVisualizerLinesColor: n.audioVisualizerLinesColor,
                audioVisualizerCircleColor: n.audioVisualizerCircleColor,
                thumbnailsPreview: "auto",
                thumbnailsPreviewWidth: n.thumbnailsPreviewWidth,
                thumbnailsPreviewBackgroundColor: n.thumbnailsPreviewBackgroundColor,
                thumbnailsPreviewBorderColor: n.thumbnailsPreviewBorderColor,
                thumbnailsPreviewLabelBackgroundColor: n.thumbnailsPreviewLabelBackgroundColor,
                thumbnailsPreviewLabelFontColor: n.thumbnailsPreviewLabelFontColor,
                vastSource: n.vastSrc,
                openNewPageAtTheEndOfTheAds: "no",
                adsButtonsPosition: "right",
                skipToVideoText: n.skipToVideoText,
                skipToVideoButtonText: n.skipToVideoButtonText,
                adsTextNormalColor: "#B9B9B9",
                adsTextSelectedColor: "#FFFFFF",
                adsBorderNormalColor: "#2e2e2e",
                adsBorderSelectedColor: "#FFFFFF",
                contextMenuType: "disabled",
                embedWindowCloseButtonMargins: 15,
                borderColor: "#333333",
                mainLabelsColor: "#FFFFFF",
                secondaryLabelsColor: "#a1a1a1",
                shareAndEmbedTextColor: "#5a5a5a",
                inputBackgroundColor: "#000000",
                inputColor: "#FFFFFF",
              }),
              setTimeout(function () {
                n.evp._d.thumbnailsPreview = n.thumbnailsPreviewSrc
              }, 200)
            var _
            o()
          } else
            n.evp &&
              (n.evp.controller_do.hide(!1, !0),
              (n.evp._d.showControllerWhenVideoIsStopped_bl = n.showControllerWhenVideoIsStopped),
              (n.evp.controller_do.showControllerWhenVideoIsStopped_bl = n.showControllerWhenVideoIsStopped),
              (n.evp.prevVideoSource_str = ""),
              n.useKeyboard ? n.evp.addKeyboardSupport() : n.evp.removeKeyboardSupport(),
              (n.evp._d.autoPlay_bl = n.videoAutoPlay || n.nextVideoAutoPlay),
              n.clicked && !n.nextVideoAutoPlay && (n.evp._d.autoPlay_bl = !1),
              !n.showVideoFirstTime && n.videoAutoPlay && ((n.evp._d.autoPlay_bl = !0), (n.showVideoFirstTime = !1)),
              n.evp.preloader_do.updateColors(n.preloaderBkColor, n.preloaderFillColor),
              (n.evp._d.subtitles_ar[0].source = n.subtitleSrc),
              (n.evp._d.thumbnailsPreview = n.thumbnailsPreviewSrc || void 0),
              n.evp.setVolume(n.volume),
              n.evp.setPosterSource(n.posterSrc, !0),
              (n.evp._d.privateVideoPassword_str = n.password),
              n.evp.setVideoSource(n.src, n.vastSrc, "", "", n.vastSrc, !!n.password),
              n.nextVideoAutoPlay && (n.playAudio(), n.type != o.AUDIO && (n.tm.pause(), (n.videoStarted = !0))),
              n.evp.resizeHandler())
        }),
        (n.evpPlayStart = function () {
          n.tm.pause(), (n.videoStarted = !0)
        }),
        (n.playAudio = function () {
          if (n.evp && n.type == o.AUDIO && n.clicked) {
            if (FWDRLUtils.isIOS && !n.audioPlayed) return
            n.tm.pause(), n.evp.play(), (n.videoStarted = !0)
          }
        }),
        (n.evpReady = function () {
          ;(n.isLoading = !1), n.videoAutoPlay && n.playAudio()
        }),
        (n.evpFrLoad = function () {
          n.isLoading = !0
        }),
        (n.evpFrDone = function () {
          n.isLoading = !1
        }),
        (n.evpError = function (t) {
          ;(n.isLoading = !1), n.showError(t.error)
        }),
        (n.evpVolume = function (t) {
          n.isAnim ||
            n.evp._d.autoPlay_bl ||
            ((n.volume = t.volume), n.type == o.VIMEO || (n.type == o.YOUTUBE ? (n.youtubePlayed = !0) : n.type == o.VIDEO ? (n.videoPlayed = !0) : n.type == o.AUDIO && (n.audioPlayed = !0)))
        }),
        (n.evpShowCursor = function () {
          n.updateEVPCursor()
        }),
        (n.evpPause = function () {
          n.evpNS(0, 1)
        }),
        (n.evpPlay = function () {
          n.caption_do.hide(!0),
            n.updateEVPCursor(),
            n.clicked &&
              (FWDRLUtils.isMAC && n.type == o.VIDEO && !n.videoPlayed
                ? n.evp.setupAPT()
                : !FWDRLUtils.isIOS || ((n.type != o.VIDEO || n.videoPlayed) && (n.type != o.VIMEO || n.vimeoPlayed) && (n.type != o.YOUTUBE || n.youtubePlayed))
                ? setTimeout(function () {
                    n.evp.setVolume(n.volume, !0)
                  }, 10)
                : n.evp.setupAPT()),
            FWDRLUtils.isIOS || ((n.audioPlayed = !0), (n.videoPlayed = !0))
        }),
        (n.evpPlayComplete = function () {
          if (((n.videoStarted = !1), n.tm.resume(), n.nextVideoAutoPlay || !n.tm.isStopped)) {
            var e = n.mId + 1
            0 > e ? (e = n.totalItems - 1) : e > n.totalItems - 1 && (e = 0)
            var t = n.gallery_ar[e].type
            t == o.VIDEO || t == o.YOUTUBE || t == o.VIMEO || t == o.AUDIO ? n.gotoNextItem() : !n.tm.isStopped && n.gotoNextItem()
          }
        }),
        (n.evpUpdate = function (t) {
          n.videoStarted && n.slp_do.drawFill(t.percent)
        }),
        (n.evpStop = function () {
          n.caption_do.show(!0), n.evpNS(0, 1), n.dispatchEvent(o.EVP_STOP, { guId: n.guId, mId: n.mId })
        }),
        (n.evpFS = function () {
          ;(n.itemHld_do.style().zIndex = 999999999),
            (n.fsX = n.so.x),
            (n.fsY = n.so.y),
            (n.isEvpFS = n.isEvpFSDL = n.isFullScreen = n.evp.isFullScreen_bl),
            (n.itemHld_do.style().overflow = "visible"),
            n.setBtnsInvisible(),
            n.tm.pause(),
            n.updateEVPCursor(0, !0),
            n.resizeHandler(),
            n.thumbs_do && n.thumbs_do.setVisible(!1)
        }),
        (n.evpNS = function (t, e) {
          ;(n.isEvpFS = n.evp.isFullScreen_bl),
            t &&
              setTimeout(function () {
                n.isEvpFSDL = n.evp.isFullScreen_bl
              }, 200),
            (n.itemHld_do.style().overflow = "hidden"),
            n.isEvpFS || ((n.itemHld_do.style().zIndex = "auto"), n.setBtnsVisible()),
            n.tm.resume(),
            n.updateEVPCursor(),
            e || n.resizeOnNS(),
            n.thumbs_do && n.thumbs_do.setVisible(!0)
        }),
        (n.updateEVPCursor = function (e) {
          n.evp &&
            (!n.useDrag || n.isEvpFS || n.evp.isFullScreen_bl
              ? (n.evp.dClk_do && (n.evp.dClk_do.style().cursor = n.defaultC), n.item_do && (n.item_do.style().cursor = n.defaultC))
              : (!e && (e = n.handC), n.evp.dClk_do && (n.evp.dClk_do.style().cursor = e), n.item_do && (n.item_do.style().cursor = n.handC)))
        }),
        (n.hidePassWindow = function () {
          n.evp && n.evp.passWindow_do && n.evp.passWindow_do.hide(!0)
        }),
        (n.setupTimerManager = function () {
          FWDRLTimerManager.setProtptype(),
            (n.tm = new FWDRLTimerManager(n.slideShowDelay)),
            n.tm.addListener(FWDRLTimerManager.STOP, n.tmStopHandler),
            n.tm.addListener(FWDRLTimerManager.START, n.tmStartHandler),
            n.tm.addListener(FWDRLTimerManager.PAUSE, n.tmPauseHandler),
            n.tm.addListener(FWDRLTimerManager.RESUME, n.tmResumeHandler),
            n.tm.addListener(FWDRLTimerManager.TIME, n.tmTimeHandler)
        }),
        (n.tmStopHandler = function () {
          n.slideShowBtn_do.setButtonState(1),
            n.addSlideShowAnimation_bl && (n.removeSlideShowAnimation(), n.positionBtns(!0), n.slp_do.hide2(), n.slp_do.stopSlideshow()),
            (n.addSlideShowAnimation_bl = !1)
        }),
        (n.tmStartHandler = function () {
          n.slideShowBtn_do.setButtonState(0),
            n.addSlideShowAnimation_bl || (n.addSlideShowAnimation(), n.positionBtns(!0), n.showSlideShowAnimation && n.slp_do.show2(), !n.videoStarted && n.slp_do.startSlideshow(!0)),
            (n.addSlideShowAnimation_bl = !0)
        }),
        (n.tmPauseHandler = function () {
          n.addSlideShowAnimation_bl && !n.videoStarted && n.slp_do.stopSlideshow()
        }),
        (n.tmResumeHandler = function () {
          n.addSlideShowAnimation_bl && n.showSlideShowAnimation && (n.slp_do.show2(), !n.videoStarted && n.slp_do.startSlideshow())
        }),
        (n.tmTimeHandler = function () {
          n.isDragging && n.onDragEnd(), n.addSlideShowAnimation_bl && !n.videoStarted && (n.gotoNextItem(), n.slp_do.stopSlideshow())
        }),
        (n.setupDL = function () {
          ;(FWDRLDL.onChange = n.dlChangeHandler), n.dlChangeHandler()
        }),
        (n.setDL = function (e) {
          var t = 1 < o.inst.length ? "?rlinst=" + n.instName + "&" : "?"
          return (
            (t += n.propsObjName ? "rlguid=" + n.playlistDomOrObj + "&rlmid=" + n.mId + "&rlprops=" + n.propsObjName : "rlguid=" + n.playlistDomOrObj + "&rlmid=" + n.mId), e && FWDRLDL.setValue(t), t
          )
        }),
        (n.dlChangeHandler = function () {
          var e = FWDRLDL.getParameter("rlinst"),
            t = FWDRLDL.getParameter("rlguid"),
            s = FWDRLDL.getParameter("rlmid"),
            r
          if (1 < o.inst.length) {
            o.inst.forEach(function (t) {
              e == t.instName && (r = t)
            })
            var a = !0
            if (
              (o.inst.forEach(function (e) {
                ;(t && s) || !e.useDeepLinking || (e.hide(), (a = !1))
              }),
              !a)
            )
              return
          }
          if ((r || (r = n), r.isReady && !r.isAnim && !r.isAnimMaxOrMin && r.useDeepLinking)) {
            if (r.isMax) return void n.maxOrMin()
            FWDRLDL.getParameter("rlprops")
            return r.isShowed
              ? t && s
                ? ((r.mId = parseInt(FWDRLDL.getParameter("rlmid"))),
                  r.mId == r.prevId
                    ? void 0
                    : 0 > r.mId
                    ? ((r.mId = 0), void r.setDL(!0))
                    : r.mId > r.totalItems - 1
                    ? ((r.mId = r.totalItems - 1), void r.setDL(!0))
                    : void (r.initItem(), (r.prevId = r.mId)))
                : void r.hide()
              : void (t && s && 1 < o.inst.length && e == r.instName ? r.show(t, s, r.propsObjName) : t && s && 1 == o.inst.length && r.show(t, s, r.propsObjName))
          }
        }),
        (n.setupPreloader = function () {
          FWDRLPreloader.setPrototype(), (n.preloader_do = new FWDRLPreloader(n, 10, n.preloaderBkColor, n.preloaderFillColor, 3, 800)), n.main_do.addChild(n.preloader_do)
        }),
        (n.positionPreloader = function () {
          if (n.preloader_do) {
            n.preloader_do.setX(parseInt((n.stageW - n.preloader_do.w) / 2))
            var e
            ;(e = n.showFirstTimeDone ? Math.round(n.finalY + (n.finalH - n.preloader_do.h) / 2) : Math.round((n.stageH - n.preloader_do.h) / 2)), n.preloader_do.setY(e)
          }
        }),
        (n.setupThumbnailManager = function () {
          n.thumbs_do || (FWDRLThumbs.setPrototype(), (n.thumbs_do = new FWDRLThumbs(n)), n.thumbs_do.addListener(FWDRLThumb.CLICK, n.thumbClickHandler), n.main_do.addChild(n.thumbs_do))
        }),
        (n.thumbClickHandler = function (t) {
          n.gotoToItem(t.id)
        }),
        (n.setupThumbnails = function (e) {
          setTimeout(function () {
            n.thumbs_do && n.showThumbnails && n.thumbs_do.setupThumbnails()
          }, e)
        }),
        (n.setupCounter = function () {
          ;(n.mcnt_do = new FWDRLDO("div")),
            n.mcnt_do.setOverflow("visible"),
            (n.mcnt_do.screen.className = n.cls + "-counter"),
            (n.cnt_do = new FWDRLDO("div")),
            (n.cnt_do.screen.className = "text"),
            n.cnt_do.setInnerHTML("1/25"),
            n.mcnt_do.addChild(n.cnt_do),
            n.main_do.addChild(n.mcnt_do),
            n.mcnt_do.setX(-500)
        }),
        (n.setCntText = function () {
          n.cnt_do.setInnerHTML(parseInt(n.mId) + 1 + "/" + n.totalItems)
        }),
        (n.setupBtns = function () {
          ;(n.buttons_ar = []),
            (n.buttonsMaxW_ar = []),
            FWDRLSimpleButton.setPrototype(),
            (n.closeBtn_do = n.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, 0, '<span class="' + n.fontIcon + " " + n.fontIcon + '-close"></span>', n.cls + "-button", "selected")
              : new FWDRLSimpleButton(n._d.closeN_img, n._d.closeSPath)),
            n.closeBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.closeButtonOnMouseUpHandler),
            n.buttonsMaxW_ar.push(n.closeBtn_do),
            n.main_do.addChild(n.closeBtn_do),
            FWDRLComplexButton.setPrototype(),
            (n.zoomBtn_do = n.useVectorIcons
              ? new FWDRLComplexButton(
                  0,
                  0,
                  0,
                  0,
                  '<span class="' + n.fontIcon + " " + n.fontIcon + '-zoomin"></span>',
                  '<span class="' + n.fontIcon + " " + n.fontIcon + '-zoomout"></span>',
                  n.cls + "-button",
                  "selected"
                )
              : new FWDRLComplexButton(n._d.maximizeN_img, n._d.maximizeSPath, n._d.minimizeN_img, n._d.minimizeSPath)),
            n.zoomBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, n.zoomButtonOnMouseUpHandler),
            n.buttonsMaxW_ar.push(n.zoomBtn_do),
            n.main_do.addChild(n.zoomBtn_do),
            FWDRLComplexButton.setPrototype(),
            (n.fsBtn_do = n.useVectorIcons
              ? new FWDRLComplexButton(
                  0,
                  0,
                  0,
                  0,
                  '<span class="' + n.fontIcon + " " + n.fontIcon + '-fullscreen"></span>',
                  '<span class="' + n.fontIcon + " " + n.fontIcon + '-normalscreen"></span>',
                  n.cls + "-button",
                  "selected"
                )
              : new FWDRLComplexButton(n._d.fullScreenN_img, n._d.fullScreenS, n._d.normalScreenN_img, n._d.normalScreenS)),
            n.fsBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, n.fullscreenButtonMUH),
            n.buttonsMaxW_ar.push(n.fsBtn_do),
            n.main_do.addChild(n.fsBtn_do),
            FWDRLComplexButton.setPrototype(),
            (n.slideShowBtn_do = n.useVectorIcons
              ? new FWDRLComplexButton(
                  0,
                  0,
                  0,
                  0,
                  '<span class="' + n.fontIcon + " " + n.fontIcon + '-play"></span>',
                  '<span class="' + n.fontIcon + " " + n.fontIcon + '-pause"></span>',
                  n.cls + "-button",
                  "selected"
                )
              : new FWDRLComplexButton(n._d.playN_img, n._d.playS, n._d.pauseN_img, n._d.pauseS)),
            n.slideShowBtn_do.addListener(FWDRLComplexButton.MOUSE_UP, n.slideshowButtonOnMouseUpHandler),
            n.buttonsMaxW_ar.push(n.slideShowBtn_do),
            n.main_do.addChild(n.slideShowBtn_do),
            FWDRLPreloader.setPrototype(),
            (n.slp_do = new FWDRLPreloader(n, 8, n.slideShowBkColor, n.slideShowFillColor, 2.5, n.slideShowDelay)),
            setTimeout(function () {
              n.slp_do.setFinalSize(n.closeBtn_do.w, n.closeBtn_do.h)
            }, 400),
            n.buttonsMaxW_ar.push(n.slp_do),
            n.main_do.addChild(n.slp_do),
            FWDRLSimpleButton.setPrototype(),
            (n.shareBtn_do = n.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, 0, '<span class="' + n.fontIcon + " " + n.fontIcon + '-share"></span>', n.cls + "-button", "selected")
              : new FWDRLSimpleButton(n._d.showShareImage_img, n._d.showShareImageSPath)),
            n.shareBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareButnMUH),
            n.buttonsMaxW_ar.push(n.shareBtn_do),
            n.main_do.addChild(n.shareBtn_do),
            FWDRLSimpleButton.setPrototype(),
            (n.nextBtn_do = n.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, 0, '<span class="' + n.fontIcon + " " + n.fontIcon + '-next"></span>', n.cls + "-button", "selected")
              : new FWDRLSimpleButton(n._d.nextN_img, n._d.nextSPath)),
            n.nextBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.nextBtnMUH),
            n.buttonsMaxW_ar.push(n.nextBtn_do),
            n.main_do.addChild(n.nextBtn_do),
            FWDRLSimpleButton.setPrototype(),
            (n.prevBtn_do = n.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, 0, '<span class="' + n.fontIcon + " " + n.fontIcon + '-prev"></span>', n.cls + "-button", "selected")
              : new FWDRLSimpleButton(n._d.prevN_img, n._d.prevSPath)),
            n.prevBtn_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.prevBtnMUH),
            n.buttonsMaxW_ar.push(n.prevBtn_do),
            n.main_do.addChild(n.prevBtn_do),
            (n.buttonW = n.buttonsMaxW_ar[0].w),
            (n.buttonH = n.buttonsMaxW_ar[0].h),
            setTimeout(function () {
              ;(n.buttonW = n.buttonsMaxW_ar[0].w), (n.buttonH = n.buttonsMaxW_ar[0].h)
            }, 50)
        }),
        (n.closeButtonOnMouseUpHandler = function () {
          n.hide()
        }),
        (n.zoomButtonOnMouseUpHandler = function () {
          n.maxOrMin()
        }),
        (n.shareButnMUH = function () {
          n.isAnim || n.isAnimMaxOrMin || (n.main_do.addChild(n.share_do), n.share_do.show())
        }),
        (n.nextBtnMUH = function () {
          n.gotoNextItem()
        }),
        (n.prevBtnMUH = function () {
          n.gotoPrevItem()
        }),
        (n.fullscreenButtonMUH = function () {
          1 == n.fsBtn_do.currentState ? n.goFullScreen() : n.goNormalScreen()
        }),
        (n.slideshowButtonOnMouseUpHandler = function () {
          n.isAnim || n.isAnimMaxOrMin || n.isLoading || (n.tm.isStopped ? (!n.videoStarted && n.slp_do.resetSlideshow(), n.tm.start()) : n.tm.stop())
        }),
        (n.positionSlp = function () {
          n.addSlideShowAnimation_bl &&
            (FWDAnimation.killTweensOf(n.slp_do),
            n.tempBtnsAlign == o.BUTTONS_IN
              ? FWDAnimation.to(n.slp_do, 0.8, { x: n.finalX + n.finalW + n.tempBtnsOffsetIn, y: n.finalY, alpha: 1, ease: Expo.easeInOut })
              : FWDAnimation.to(n.slp_do, 0.8, { x: n.stageW - n.buttonW - n.tempBtnsOffsetOut, y: n.tempBtnsOffsetIn, alpha: 1, ease: Expo.easeInOut }))
        }),
        (n.setupShare = function () {
          FWDRLShare.setPrototype(),
            (n.share_do = new FWDRLShare(n)),
            n.share_do.addListener(FWDRLShare.SHOW, n.shareShowH),
            n.share_do.addListener(FWDRLShare.HIDE, n.shareHideH),
            n.main_do.addChild(n.share_do)
        }),
        (n.shareShowH = function () {
          n.tm.pause(), n.evp && n.item_do == n.vidHld_do && (n.evp.setVideoPlayingStateOnWindowShow(), n.evp.pause())
        }),
        (n.shareHideH = function () {
          n.tm.resume(), n.evp && n.item_do == n.vidHld_do && n.evp.isVideoPlayingWhenOpenWindows_bl && n.evp.resume()
        }),
        (n.addCloseButton = function () {
          n.addCloseButton && (-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) || n.buttons_ar.splice(0, 0, n.closeBtn_do))
        }),
        (n.removeCloseButton = function () {
          n.addCloseButton &&
            (-1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) ||
              (FWDAnimation.killTweensOf(n.closeBtn_do), n.closeBtn_do.setX(-5e3), n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do), 1)))
        }),
        (n.addFullscreenButton = function () {
          ;-1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) &&
            (FWDAnimation.killTweensOf(n.fsBtn_do),
            -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do)
              ? (n.isFirstItemShowed && (n.fsBtn_do.setX(n.itemHld_do.x + n.itemHld_do.w + n.tempBtnsOffsetIn), n.fsBtn_do.setY(n.itemHld_do.y)), n.buttons_ar.splice(0, 0, n.fsBtn_do))
              : (n.fsBtn_do.setX(n.closeBtn_do.x),
                n.fsBtn_do.setY(n.closeBtn_do.y + n.closeBtn_do.h + n.spaceBetweenBtns),
                n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) + 1, 0, n.fsBtn_do)))
        }),
        (n.removeFullscreenButton = function () {
          ;-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) &&
            (FWDAnimation.killTweensOf(n.fsBtn_do), n.fsBtn_do.setX(-5e3), n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do), 1))
        }),
        (n.addZoomButton = function () {
          if (n.showZoomButton && -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do)) {
            var e, t
            FWDAnimation.killTweensOf(n.zoomBtn_do),
              -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do)
                ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do)
                  ? (n.isFirstItemShowed &&
                      (n.tempBtnsAlign == o.BUTTONS_TOP
                        ? ((t = n.stageW - n.zoomBtn_do.w - n.tempBtnsOffsetIn), (e = n.tempBtnsOffsetOut))
                        : ((t = n.itemHld_do.x + n.itemHld_do.w + n.tempBtnsOffsetIn), (e = n.itemHld_do.y)),
                      n.zoomBtn_do.setX(t),
                      n.zoomBtn_do.setY(e)),
                    n.buttons_ar.splice(0, 0, n.zoomBtn_do))
                  : (n.tempBtnsAlign == o.BUTTONS_TOP
                      ? ((t = n.closeBtn_do.x - n.zoomBtn_do.w - n.spaceBetweenBtns), (e = n.tempBtnsOffsetOut))
                      : ((t = n.closeBtn_do.x), (e = n.closeBtn_do.y + n.closeBtn_do.h + n.spaceBetweenBtns)),
                    n.zoomBtn_do.setX(t),
                    n.zoomBtn_do.setY(e),
                    n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) + 1, 0, n.zoomBtn_do))
                : (n.tempBtnsAlign == o.BUTTONS_TOP
                    ? ((t = n.fsBtn_do.x - n.zoomBtn_do.w - n.spaceBetweenBtns), (e = n.tempBtnsOffsetOut))
                    : ((t = n.fsBtn_do.x), (e = n.fsBtn_do.y + n.fsBtn_do.h + n.spaceBetweenBtns)),
                  n.zoomBtn_do.setX(t),
                  n.zoomBtn_do.setY(e),
                  n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) + 1, 0, n.zoomBtn_do))
          }
        }),
        (n.removeZoomButton = function () {
          ;-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do) &&
            (FWDAnimation.killTweensOf(n.zoomBtn_do), n.zoomBtn_do.setX(-5e3), n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do), 1))
        }),
        (n.addSlideshowButton = function () {
          n.showSlideShowButton &&
            (-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do) ||
              (FWDAnimation.killTweensOf(n.slideShowBtn_do),
              -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do)
                ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do)
                  ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do)
                    ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do)
                      ? (n.isFirstItemShowed && (n.slideShowBtn_do.setX(n.itemHld_do.x + n.itemHld_do.w + n.tempBtnsOffsetIn), n.slideShowBtn_do.setY(n.itemHld_do.y)),
                        n.buttons_ar.splice(0, 0, n.slideShowBtn_do))
                      : (n.slideShowBtn_do.setX(n.closeBtn_do.x),
                        n.slideShowBtn_do.setY(n.closeBtn_do.y + n.closeBtn_do.h + n.spaceBetweenBtns),
                        n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) + 1, 0, n.slideShowBtn_do))
                    : (n.slideShowBtn_do.setX(n.fsBtn_do.x),
                      n.slideShowBtn_do.setY(n.fsBtn_do.y + n.fsBtn_do.h + n.spaceBetweenBtns),
                      n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) + 1, 0, n.slideShowBtn_do))
                  : (n.slideShowBtn_do.setX(n.zoomBtn_do.x),
                    n.slideShowBtn_do.setY(n.zoomBtn_do.y + n.zoomBtn_do.h + n.spaceBetweenBtns),
                    n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do) + 1, 0, n.slideShowBtn_do))
                : (n.slideShowBtn_do.setX(n.shareBtn_do.x),
                  n.slideShowBtn_do.setY(n.shareBtn_do.y + n.shareBtn_do.h + n.spaceBetweenBtns),
                  n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do) + 1, 0, n.slideShowBtn_do))))
        }),
        (n.removeSlideshowButton = function () {
          ;-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do) &&
            (FWDAnimation.killTweensOf(n.slideShowBtn_do), n.slideShowBtn_do.setX(-5e3), n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do), 1))
        }),
        (n.addSlideShowAnimation = function () {
          if (n.showSlideShowAnimation && -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.slp_do)) {
            var e, t
            FWDAnimation.killTweensOf(n.slp_do),
              -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do)
                ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do)
                  ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do)
                    ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do)
                      ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do)
                        ? (n.isFirstItemShowed &&
                            (n.tempBtnsAlign == o.BUTTONS_TOP
                              ? ((e = n.stageW - n.slp_do.w - n.tempBtnsOffsetIn), (t = n.tempBtnsOffsetOut))
                              : ((e = n.itemHld_do.x + n.itemHld_do.w + n.tempBtnsOffsetIn), (t = n.itemHld_do.y)),
                            n.slp_do.setX(e),
                            n.slp_do.setY(t)),
                          n.buttons_ar.splice(0, 0, n.slp_do))
                        : (n.tempBtnsAlign == o.BUTTONS_TOP
                            ? ((e = n.closeBtn_do.x - n.closeBtn_do.w - n.spaceBetweenBtns), (t = n.tempBtnsOffsetOut))
                            : ((e = n.closeBtn_do.x), (t = n.closeBtn_do.y + n.closeBtn_do.h + n.spaceBetweenBtns)),
                          n.slp_do.setX(e),
                          n.slp_do.setY(t),
                          n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) + 1, 0, n.slp_do))
                      : (n.tempBtnsAlign == o.BUTTONS_TOP
                          ? ((e = n.fsBtn_do.x - n.fsBtn_do.w - n.spaceBetweenBtns), (t = n.tempBtnsOffsetOut))
                          : ((e = n.fsBtn_do.x), (t = n.fsBtn_do.y + n.fsBtn_do.h + n.spaceBetweenBtns)),
                        n.slp_do.setX(e),
                        n.slp_do.setY(t),
                        n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) + 1, 0, n.slp_do))
                    : (n.tempBtnsAlign == o.BUTTONS_TOP
                        ? ((e = n.zoomBtn_do.x - n.zoomBtn_do.w - n.spaceBetweenBtns), (t = n.tempBtnsOffsetOut))
                        : ((e = n.zoomBtn_do.x), (t = n.zoomBtn_do.y + n.zoomBtn_do.h + n.spaceBetweenBtns)),
                      n.slp_do.setX(e),
                      n.slp_do.setY(t),
                      n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do) + 1, 0, n.slp_do))
                  : (n.tempBtnsAlign == o.BUTTONS_TOP
                      ? ((e = n.shareBtn_do.x - n.shareBtn_do.w - n.spaceBetweenBtns), (t = n.tempBtnsOffsetOut))
                      : ((e = n.shareBtn_do.x), (t = n.shareBtn_do.y + n.shareBtn_do.h + n.spaceBetweenBtns)),
                    n.slp_do.setX(e),
                    n.slp_do.setY(t),
                    n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do) + 1, 0, n.slp_do))
                : (n.tempBtnsAlign == o.BUTTONS_TOP
                    ? ((e = n.slideShowBtn_do.x - n.slideShowBtn_do.w - n.spaceBetweenBtns), (t = n.tempBtnsOffsetOut))
                    : ((e = n.slideShowBtn_do.x), (t = n.slideShowBtn_do.y + n.slideShowBtn_do.h + n.spaceBetweenBtns)),
                  n.slp_do.setX(e),
                  n.slp_do.setY(t),
                  n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do) + 1, 0, n.slp_do))
          }
        }),
        (n.removeSlideShowAnimation = function () {
          ;-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.slp_do) && (FWDAnimation.killTweensOf(n.slp_do), n.slp_do.setX(-5e3), n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.slp_do), 1))
        }),
        (n.removeShareButton = function () {
          ;-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do) &&
            (FWDAnimation.killTweensOf(n.shareBtn_do), n.shareBtn_do.setX(-5e3), n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do), 1))
        }),
        (n._addShareButton = function () {
          n.showShareButton &&
            (-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do) ||
              (-1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do)
                ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do)
                  ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do)
                    ? n.buttons_ar.splice(0, 0, n.shareBtn_do)
                    : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) + 1, 0, n.shareBtn_do)
                  : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) + 1, 0, n.shareBtn_do)
                : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do) + 1, 0, n.shareBtn_do)))
        }),
        (n.removeNextAndPrevBtns = function () {
          ;-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.nextBtn_do) &&
            (FWDAnimation.killTweensOf(n.nextBtn_do),
            FWDAnimation.killTweensOf(n.prevBtn_do),
            n.prevBtn_do.setX(-5e3),
            n.nextBtn_do.setX(-5e3),
            n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.nextBtn_do), 1))
        }),
        (n.addNextAndPrevBtns = function () {
          n.showNextAndPrevBtns &&
            (-1 != FWDRLUtils.indexOfArray(n.buttons_ar, n.nextBtn_do) ||
              (-1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do)
                ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.slp_do)
                  ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do)
                    ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do)
                      ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do)
                        ? -1 == FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do)
                          ? n.buttons_ar.splice(0, 0, n.nextBtn_do)
                          : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.closeBtn_do) + 1, 0, n.nextBtn_do)
                        : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.fsBtn_do) + 1, 0, n.nextBtn_do)
                      : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.zoomBtn_do) + 1, 0, n.nextBtn_do)
                    : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.shareBtn_do) + 1, 0, n.nextBtn_do)
                  : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.slp_do) + 1, 0, n.nextBtn_do)
                : n.buttons_ar.splice(FWDRLUtils.indexOfArray(n.buttons_ar, n.slideShowBtn_do) + 1, 0, n.nextBtn_do)))
        }),
        (n.positionBtns = function (e) {
          if (n.isFirstItemShowed && n.isShowed && n.isReady) {
            n.btnsHidden = !1
            var t = 0,
              s = 0,
              r
            n.tempThumbsShowed &&
              (t = Math.round((n.thumbnailH + n.spaceBetweenThumbnailsAndItem) / 2 - n.spaceBetweenThumbnailsAndItem / 2) + n.thumbnailsOffsetBottom + n.spaceBetweenThumbnailsAndItem),
              n.showNextAndPrevBtns &&
                ((n.prevBtn_do.finalX = n.tempBtnsAlign == o.BUTTONS_IN ? n.finalX - n.prevBtn_do.w - n.tempBtnsOffsetIn : n.tempBtnsOffsetOut),
                (n.prevBtn_do.finalY = Math.round(n.finalY + (n.finalH - n.prevBtn_do.h) / 2)),
                null == n.prevBtn_do.finalX && (n.prevBtn_do.finalX = -5e3),
                null == n.prevBtn_do.finalY && (n.prevBtn_do.finalY = -5e3),
                0 >= n.prevBtn_do.finalX && (n.prevBtn_do.finalX = n.tempBtnsOffsetOut))
            for (var a = n.buttons_ar.length, d = 0, l, p; d < a; d++) (l = n.buttons_ar[d]), l && (s += l.h + n.spaceBetweenBtns)
            s -= n.spaceBetweenBtns
            for (var _ = 0; _ < a; _++)
              if (((l = n.buttons_ar[_]), l)) {
                if (
                  (0 != _ && (p = n.buttons_ar[_ - 1]),
                  (l.finalX = n.tempBtnsAlign == o.BUTTONS_IN ? n.finalX + n.finalW + n.tempBtnsOffsetIn : n.stageW - l.w - n.tempBtnsOffsetIn),
                  n.tempBtnsAlign == o.BUTTONS_TOP)
                ) {
                  var m = n.buttons_ar[_]
                  m != n.nextBtn_do && ((m.finalX = n.stageW - m.w - n.tempBtnsOffsetOut), r && (m.finalX = r.finalX - m.w - n.spaceBetweenBtns), (r = m)),
                    (l.finalY = n.tempBtnsOffsetOut),
                    l == n.nextBtn_do && ((l.finalY = n.prevBtn_do.finalY), (m.finalX = n.stageW - m.w - n.tempBtnsOffsetOut))
                } else
                  l.finalX + l.w >= n.stageW && (l.finalX = n.stageW - l.w - n.tempBtnsOffsetOut),
                    s > n.finalH && n.tempBtnsAlign == o.BUTTONS_IN
                      ? 0 == _
                        ? n.tempBtnsAlign == o.BUTTONS_IN
                          ? n.tempThumbsShowed
                            ? (l.finalY = Math.round((n.stageH - s - n.thumbnailH) / 2))
                            : (l.finalY = Math.round((n.stageH - s) / 2))
                          : (l.finalY = n.tempBtnsOffsetIn)
                        : (l.finalY = p.finalY + p.h + n.spaceBetweenBtns)
                      : ((l.finalY = n.tempBtnsAlign == o.BUTTONS_IN ? n.finalY : n.tempBtnsOffsetIn),
                        p
                          ? ((l.finalY = p.finalY + p.h + n.spaceBetweenBtns), l == n.nextBtn_do && l.finalY < n.prevBtn_do.finalY && (l.finalY = n.prevBtn_do.finalY))
                          : l == n.nextBtn_do && l.finalY < n.prevBtn_do.finalY && (l.finalY = n.prevBtn_do.finalY))
                n.hider.isHidden_bl && l == n.slp_do && (n.tempBtnsAlign == o.BUTTONS_IN ? (l.finalY = n.finalY) : (l.finalY = n.tempBtnsOffsetIn))
              }
            if (n.showCounter) {
              var u, c
              "in" == n.tempBtnsAlign ? ((u = n.finalX - n.buttonsOffsetIn), (c = n.finalY)) : ((u = n.tempBtnsOffsetOut), (c = n.tempBtnsOffsetIn)),
                (n.mcnt_do.finalX = u),
                (n.mcnt_do.finalY = c),
                FWDAnimation.killTweensOf(n.mcnt_do),
                e ? FWDAnimation.to(n.mcnt_do, 0.8, { x: u, y: c, alpha: 1, ease: Expo.easeInOut }) : (n.mcnt_do.setX(u), n.mcnt_do.setY(c), n.mcnt_do.setAlpha(1))
            }
            n.showNextAndPrevBtns &&
              (FWDAnimation.killTweensOf(n.prevBtn_do),
              e
                ? FWDAnimation.to(n.prevBtn_do, 0.8, { x: n.prevBtn_do.finalX, y: n.prevBtn_do.finalY, alpha: 1, ease: Expo.easeInOut })
                : (n.prevBtn_do.setX(n.prevBtn_do.finalX), n.prevBtn_do.setY(n.prevBtn_do.finalY), n.prevBtn_do.setAlpha(1)))
            for (var _ = 0; _ < a; _++)
              (l = n.buttons_ar[_]),
                FWDAnimation.killTweensOf(l),
                e ? FWDAnimation.to(l, 0.8, { x: l.finalX, y: l.finalY, alpha: 1, ease: Expo.easeInOut }) : (l.setX(l.finalX), l.setY(l.finalY), l.setAlpha(1))
            n.showZoomButton && n.isMax && (FWDAnimation.killTweensOf(n.zoomBtn_do), n.zoomBtn_do.setX(n.stageW - l.w - 10), n.zoomBtn_do.setY(10)), n.hiderHidden && e && n.hideBtns(!0)
          }
        }),
        (n.hideBtns = function (e) {
          if (n.isReady) {
            n.btnsHidden = !0
            var t = n.buttons_ar.length,
              s
            n.showNextAndPrevBtns && ((n.prevBtn_do.finalX -= n.prevBtn_do.w), null == n.prevBtn_do.finalX && (n.prevBtn_do.finalX = -1), null == n.prevBtn_do.finalY && (n.prevBtn_do.finalY = -1))
            for (var r = 0, a; r < t; r++)
              (a = 0),
                (s = n.buttons_ar[r]),
                s &&
                  (isNaN(s.finalX) ||
                    (n.tempBtnsAlign == o.BUTTONS_TOP && s != n.nextBtn_do && s != n.prevBtn_do ? (s.finalY = -s.h) : s.finalX > n.stageW / 2 ? (s.finalX += s.w) : (s.finalX -= s.w)),
                  void 0 === s.finalX && (s.finalX = -5e3),
                  void 0 === s.finalY && (s.finalY = -5e3),
                  n.isMax && s === n.zoomBtn_do && ((n.zoomBtn_do.finalX = n.stageW - s.w - 10), (n.zoomBtn_do.finalY = 10), (a = 1)),
                  e
                    ? (0 == r &&
                        n.showNextAndPrevBtns &&
                        (FWDAnimation.killTweensOf(n.prevBtn_do), FWDAnimation.to(n.prevBtn_do, 0.8, { alpha: 0, x: n.prevBtn_do.finalX, y: n.prevBtn_do.finalY, ease: Expo.easeInOut })),
                      FWDAnimation.killTweensOf(s),
                      FWDAnimation.to(s, 0.8, { alpha: a, x: s.finalX, y: s.finalY, ease: Expo.easeInOut }))
                    : (0 == r &&
                        n.showNextAndPrevBtns &&
                        (FWDAnimation.killTweensOf(n.prevBtn_do), n.prevBtn_do.setAlpha(0), n.prevBtn_do.setX(n.prevBtn_do.finalX), n.prevBtn_do.setY(n.prevBtn_do.finalY)),
                      FWDAnimation.killTweensOf(s),
                      s.setAlpha(a),
                      s.setX(s.finalX),
                      s.setY(s.finalY)))
            if (n.showCounter) {
              var d, l
              "in" == n.tempBtnsAlign ? ((d = Math.round(n.finalX - n.buttonsOffsetIn - n.cnt_do.getHeight())), (l = n.finalY)) : ((d = n.mcnt_do.finalX), (l = -n.cnt_do.getHeight())),
                FWDAnimation.killTweensOf(n.mcnt_do),
                e ? FWDAnimation.to(n.mcnt_do, 0.8, { x: d, y: l, alpha: 0, ease: Expo.easeInOut }) : (n.mcnt_do.setX(d), n.mcnt_do.setY(l), n.mcnt_do.setAlpha(0))
            }
            n.hiderHidden && n.positionSlp(e)
          }
        }),
        (n.hideStuffForGood = function () {
          n.shareBtn_do && n.shareBtn_do.setX(-5e3),
            n.prevBtn_do.setX(-5e3),
            n.nextBtn_do.setX(-5e3),
            n.closeBtn_do.setX(-5e3),
            n.zoomBtn_do.setX(-5e3),
            n.fsBtn_do.setX(-5e3),
            n.slideShowBtn_do.setX(-5e3),
            n.slp_do.setX(-5e3),
            n.evp && (n.evp.stop(), n.vidHld_do.setX(-5e3))
        }),
        (n.getDynamicGallery = function (e) {
          var o
          ;(n.playlistDomOrObj = e), (n.hadPlErr = !1), (n.gallery_ar = [])
          if (t[e] && t[e].tagName) {
            var s = document.getElementById(e),
              r = FWDRLUtils.getChildren(s)
            if (((n.totalItems = r.length), 0 == n.totalItems))
              return (n.hadPlErr = !0), void alert('Revolution Lightbox error! The playlist with the guId "' + e + '" must contain at least one item.')
            for (var a = 0; a < n.totalItems; a++) {
              var d = {},
                l = r[a]
              ;(d.loaded = !1),
                (d.src = FWDRLUtils.getAttributeValue(l, "data-src") + ""),
                (d.posterSrc = FWDRLUtils.getAttributeValue(l, "data-poster")),
                (d.subtitleSrc = FWDRLUtils.getAttributeValue(l, "data-subtitle") || ""),
                (d.thumbnailsPreviewSrc = FWDRLUtils.getAttributeValue(l, "data-thumbnails-preview") || ""),
                (d.width = FWDRLUtils.getAttributeValue(l, "data-width")),
                (d.height = FWDRLUtils.getAttributeValue(l, "data-height")),
                (d.vastSrc = FWDRLUtils.getAttributeValue(l, "data-vast")),
                FWDRLUtils.hasAttribute(l, "data-thumb") && (d.thumbSrc = FWDRLUtils.getAttributeValue(l, "data-thumb")),
                (d.password = FWDRLUtils.getAttributeValue(l, "data-password")),
                0 != FWDRLUtils.getChildren(l).length && (d.caption = l.innerHTML),
                n.setMediaType(d),
                (n.gallery_ar[a] = d)
            }
            return !0
          }
          if (t[e]) {
            if (((o = t[e]), o && !o.playlistItems)) return
            if (((n.totalItems = o.playlistItems.length), 0 == n.totalItems))
              return (n.hadPlErr = !0), void alert('Revolution Lightbox error! The playlist with the guId "' + e + '" must contain at least one item.')
            for (var a = 0; a < n.totalItems; a++) {
              var d = {},
                l = o.playlistItems[a]
              ;(d.loaded = !1),
                (d.src = l.src),
                (d.thumbSrc = l.thumbSrc),
                (d.posterSrc = l.posterSrc),
                (d.subtitleSrc = l.subtitleSrc || ""),
                (d.thumbnailsPreviewSrc = l.thumbnailsPreviewSrc || ""),
                (d.width = l.width),
                (d.height = l.height),
                (d.vastSrc = l.vastSrc),
                (d.password = l.password),
                (d.caption = l.caption),
                n.setMediaType(d),
                (n.gallery_ar[a] = d)
            }
            return !0
          }
          var s = document.getElementById(e)
          if (!s) return (n.hadPlErr = !0), void alert('Revolution Lightbox error! Gallery element with the guId "' + e + "\" doesn't exist!")
        }),
        (n.setMediaType = function (e) {
          e.type = document.getElementById(e.src)
            ? o.HTML
            : /\.jpg|\.webp|\.jpeg|\.png|\.bmp|\.gif|\.tif|\.tiff|\.jfi|\.jfif|\.exif|\.svg/i.test(e.src)
            ? o.IMAGE
            : /\.mp4|\.m3u8|\.mpd/i.test(e.src)
            ? o.VIDEO
            : /youtube\./i.test(e.src)
            ? o.YOUTUBE
            : /vimeo\./i.test(e.src)
            ? o.VIMEO
            : /\.mp3/i.test(e.src)
            ? o.AUDIO
            : o.IFRAME
        }),
        (n.checkIfHasThumbs = function () {
          for (var e = !0, t = 0; t < n.gallery_ar.length; t++) if (!n.gallery_ar[t].thumbSrc) return !1
          return (e = !(1 >= n.totalItems)), e
        }),
        (n.updateGalleries = function () {
          n.setStaticGalleries(), n.dispatchEvent(o.UPDATE_GALLERIES, { galleries: n.galleries })
        }),
        (n.setStaticGalleries = function () {
          n.galleries = {}
          var e = n.mediaSelector,
            o = ""
          try {
            o = document.querySelectorAll(e)
          } catch (t) {
            n.showError('Your current mediaSelector is not a valid selector: "' + e + '"')
          }
          for (var s = 0; s < o.length; s++) {
            var r = o[s],
              a = {}
            ;(a.src = "A" === r.tagName ? r.getAttribute("href") : null),
              (a.src = "IMG" === r.tagName ? r.currentSrc || r.src : a.src),
              (a.src = r.getAttribute("data-src") || a.src),
              (a.loaded = !1),
              (a.thumbSrc = r.getAttribute("data-thumb")),
              (a.posterSrc = r.getAttribute("data-poster")),
              (a.subtitleSrc = r.getAttribute("data-subtitle")),
              (a.thumbnailsPreviewSrc = r.getAttribute("data-thumbnails-preview")),
              (a.width = r.getAttribute("data-width")),
              (a.height = r.getAttribute("data-height")),
              (a.vastSrc = r.getAttribute("data-vast")),
              (a.password = r.getAttribute("data-password"))
            var d = r.getAttribute("data-title") || r.getAttribute("title") || ""
            d && (d = "<p class='fwdrl-title'>" + d + "</p>")
            var l = r.getAttribute("data-alt") || r.getAttribute("alt") || ""
            l && (l = "<p class='fwdrl-desc'>" + l + "</p>"), (a.caption = d + l), n.setMediaType(a)
            var p = r.getAttribute("data-rel")
            p = p ? p : Object.keys(n.galleries).length + 1
            var _ = n.galleries[p]
            ;(_ = _ ? _ : (n.galleries[p] = [])),
              (_.name = p),
              (a.index = _.length),
              r.fwdrlListener && r.removeEventListener("click", r.fwdrlListener),
              (r.fwdrlName = _.name),
              (r.fwdrlId = a.index),
              (r.style.cursor = "pointer"),
              (r.fwdrlListener = function (o) {
                o.preventDefault && o.preventDefault(), t[n.instName].show(this.fwdrlName, this.fwdrlId, null, !0)
              }),
              r.addEventListener("click", r.fwdrlListener),
              _.push(a)
          }
        }),
        (n.getStaticGallery = function (e) {
          "rl0" == n.instName && ((n.gallery_ar = n.galleries[e]), n.gallery_ar && ((n.totalItems = n.gallery_ar.length), (n.playlistDomOrObj = e)))
        }),
        (n.show = function (e, s, r) {
          var a = FWDRLDL.getParameter("rlinst")
          if (!(a && a != n.instName)) {
            if (n.isShowed || o.isShowed) return void (n.hadPlErr = !1)
            if (((o.isShowed = !0), (n.mId = s), (n.guId = n.playlistDomOrObj = e), (n.propsObjName = r), (n.startToHide = n.showVideoFirstTime = n.hasError = !1), !e)) {
              return void alert("Please sepecify a playlist or selector")
            }
            if ((n.setDefaultSettings(), r && t[r])) {
              var d = t[r]
              n.setObjectPropsSettings(d)
            }
            if ((n.getStaticGallery(e), !n.gallery_ar)) n.getDynamicGallery(e)
            return (
              (n.isShowed = n.isAnim = !0),
              n.dispatchEvent(o.SHOW_START, { guId: n.guId, mId: n.mId }),
              0 > n.mId ? (n.mId = 0) : n.mId > n.totalItems - 1 && (n.mId = n.totalItems - 1),
              (n.prevId = n.mId),
              n.hadPlErr
                ? void setTimeout(function () {
                    n.hadPlErr = n.isShowed = !1
                  }, 100)
                : void (n.fr &&
                    ((n.showThumbnails = !1),
                    (n.shareButtons = []),
                    (n.showSlideShowButton = !1),
                    (n.showSlideShowAnimation = !1),
                    (n.slideShowAutoPlay = !1),
                    (n.showZoomButton = !1),
                    (n.showFullscreenButton = !1),
                    (n.useDeepLinking = !1)),
                  n.useDeepLinking && n.setDL(!0),
                  (n.hasOneItem = 1 == n.gallery_ar.length),
                  n.hasOneItem &&
                    ((n.useDrag = !1),
                    (n.showThumbnails = !1),
                    (n.showCounter = !1),
                    (n.showSlideShowButton = !1),
                    (n.showSlideShowAnimation = !1),
                    (n.slideShowAutoPlay = !1),
                    (n.showNextAndPrevBtns = !1)),
                  n.tm &&
                    ((n.tm.delay = n.slideShowDelay),
                    (n.slp_do.animDur = n.slideShowDelay / 1e3),
                    (n.hider.hideDelay = n.buttonsHideDelay),
                    n.slp_do.updateColors(n.slideShowBkColor, n.slideShowFillColor)),
                  (n.showShareButton = 0 < n.shareButtons.length),
                  (n.caption_do.captionPosition = n.captionPosition),
                  (n.caption2_do.captionPosition = n.captionPosition),
                  (n.caption_do.captionAnimationType = n.captionAnimationType),
                  (n.caption2_do.captionAnimationType = n.captionAnimationType),
                  (n.caption_do.borderSize = n.itemBorderSize),
                  (n.caption2_do.borderSize = n.itemBorderSize),
                  n.preloader_do.updateColors(n.preloaderBkColor, n.preloaderFillColor),
                  n.ctxMenu_do.update(n.rightClickContextMenu),
                  n.thumbs_do && (n.thumbs_do.spaceBetweenThumbnails = n.spaceBetweenThumbnails),
                  (n.bk_do.style().backgroundColor = n.backgroundColor),
                  0 == n.itemBorderSize && (n.itemBorderColor = "transparent"),
                  (n.itemBorder_do.style().backgroundColor = n.DFitemBorderColor),
                  (n.itemBk_do.style().backgroundColor = n.itemBkColor),
                  !n.checkIfHasThumbs() && (n.showThumbnails = !1),
                  n.showThumbnails && n.checkIfHasThumbs() ? (n.setupThumbnailManager(), n.thumbs_do.show(!1)) : n.thumbs_do && n.thumbs_do.hide(!1),
                  (n.so = FWDRLUtils.getScrollOffsets()),
                  (n.addSlideShowAnimation_bl = n.captionShowedOnce = !1),
                  n.caption_do.hide(!1, !0, !0),
                  n.caption2_do.hide(!1, !0, !0),
                  n.startResizeHandler(),
                  n.addPreventMouseWheel(),
                  FWDAnimation.to(n.bk_do, 0.8, { alpha: 1, ease: Quint.easeOut }),
                  n.preloader_do && (n.positionPreloader(), n.preloader_do.show(!0)),
                  n.main_do.setVisible(!0),
                  n.isReady && (n.hideBtns(), n.hideStuffForGood()),
                  n.itemBorderSize ? n.itemBorder_do.setVisible(!0) : n.itemBorder_do.setVisible(!1),
                  n.thumbs_do && n.thumbs_do.destoryThumbnails(),
                  clearTimeout(n.showOrHideCompleteId_to),
                  (n.showOrHideCompleteId_to = setTimeout(n.showComplete, 51)))
            )
          }
        }),
        (n.showComplete = function () {
          !n.hadPlErr &&
            n.isReady &&
            -1 != n.mId &&
            !n.item_do &&
            n.gallery_ar &&
            n.gallery_ar.length &&
            (n.useAsModal ? n.removeBkClose() : n.addBkClose(),
            n.positionPreloader(),
            n.showCloseButton ? n.addCloseButton() : n.removeCloseButton(),
            n.showFullscreenButton ? n.addFullscreenButton() : n.removeFullscreenButton(),
            n.showZoomButton && n.gallery_ar[n.mId].type == o.IMAGE ? n.addZoomButton() : n.removeZoomButton(),
            n.showShareButton ? n._addShareButton() : n.removeShareButton(),
            n.showSlideShowButton ? n.addSlideshowButton() : n.removeSlideshowButton(),
            n.showNextAndPrevBtns ? n.addNextAndPrevBtns() : n.removeNextAndPrevBtns(),
            n.showCounter ? n.mcnt_do.setVisible(!0) : n.mcnt_do.setVisible(!1),
            setTimeout(n.share_do.update, 500),
            n.hideBtns(),
            n.initItem(),
            n.startAnim(801),
            n.dispatchEvent(o.READY))
        }),
        (n.hide = function () {
          if (!(n.isAnim || !n.isShowed || n.isAnimMaxOrMin || n.isMax || n.isDragging || n.isLoading)) {
            var e = n.isFullScreen,
              t = n.btnsHidden
            ;(n.gallery_ar = null),
              (n.startToHide = !0),
              n.goNormalScreen(),
              n.resizeHandler(!0),
              t && n.hideBtns(!1),
              n.removeKeyboard(),
              e ? (FWDRLUtils.isFirefox ? setTimeout(n.hideStart, 350) : setTimeout(n.hideStart, 150)) : n.hideStart()
          }
        }),
        (n.hideStart = function () {
          ;(n.isShowed = !1),
            FWDAnimation.to(n.bk_do, 0.8, { alpha: 0, delay: 0.4, ease: Quint.easeOut }),
            n.item_do &&
              n.item_do.screen &&
              (FWDAnimation.to(n.item_do, 0.8, { alpha: 0, delay: 0.1, ease: Quint.easeOut }),
              FWDAnimation.to(n.item_do, 0.8, { x: -n.finalW / 2, y: -n.finalH / 2, delay: 0.1, ease: Expo.easeInOut })),
            FWDAnimation.to(n.itemHld_do, 0.8, { x: n.stageW / 2, y: n.stageH / 2, w: 0, h: 0, delay: 0.1, ease: Expo.easeInOut }),
            FWDAnimation.to(n.itemBorder_do, 0.8, { w: 0, h: 0, alpha: 0, delay: 0.1, ease: Expo.easeInOut }),
            FWDAnimation.to(n.itemBk_do, 0.8, { x: 0, y: 0, w: 0, h: 0, delay: 0.1, ease: Expo.easeInOut }),
            FWDAnimation.to(n.caption_do, 0.8, { x: -n.finalW / 2, h: 0, delay: 0.1, ease: Expo.easeInOut }),
            n.item_do && n.hideBtns(!0),
            (n.isFirstItemShowed = n.isFirstItemAfterShowed = n.hiderHidden = !1),
            -1 == n.mId,
            n.evp &&
              n.item_do == n.vidHld_do &&
              FWDAnimation.to(n.evp, 0.79, {
                volume: 0,
                onUpdate: function () {
                  n.evp.setVolume(n.evp.volume)
                },
              }),
            n.stopResizeHandler(),
            n.stopMediaLazyLoading(),
            n.tm.stop(),
            n.removeDrag(),
            n.updateDragAf(),
            n.removeDbl(),
            n.thumbs_do && n.thumbs_do.hide(!0),
            n.main_do.contains(n.info_do) && n.main_do.removeChild(n.info_do),
            n.closeImage(),
            n.useAsModal || n.removeBkClose(),
            n.hider.stop(),
            n.preloader_do.hide(!0),
            n.hasCaption && n.caption && (n.caption_do.hide(!0), n.caption2_do.hide(!0)),
            clearTimeout(n.showOrHideCompleteId_to),
            (n.showOrHideCompleteId_to = setTimeout(n.hideComplete, 1200)),
            n.startAnim(1202),
            n.dispatchEvent(o.HIDE_START, { guId: n.guId, mId: n.mId })
        }),
        (n.hideComplete = function () {
          ;(o.isShowed = !1),
            t.history.pushState("", document.title, t.location.href.replace(t.location.hash, "")),
            n.removePreventMouseWheel(),
            n.item_do == n.vidHld_do && n.evp && (n.evp.stop(), n.evp.setPosterSource(""), n.vidHld_do.setX(-1e4)),
            (n.isFirstItemShowed = n.firstVideoOrAudioAdded_bl = n.showFirstTimeDone = n.forceHideCaption = n.prevCaption = n.videoStarted = !1),
            (n.item_do = n.prevItem_do = null),
            n.slp_do.resetSlideshow(),
            n.removeItems(0),
            n.thumbs_do && (n.thumbs_do.destoryThumbnails(), n.thumbs_do.hideForGood()),
            n.main_do.setX(-5e3),
            n.main_do.setVisible(!1),
            n.dispatchEvent(o.HIDE_COMPLETE, { guId: n.guId, mId: n.mId })
        }),
        (n.startAnim = function (e) {
          n.stopAnim(), (n.isAnim = !0), (n.animId_to = setTimeout(n.animationDone, e)), (n.animId2_to = setTimeout(n.animationDone2, e - 300)), n.showDisable(!0, !1, !0)
        }),
        (n.stopAnim = function () {
          ;(n.isAnim = !1), n.tm && n.tm.pause(), clearTimeout(n.animId_to), clearTimeout(n.animId2_to)
        }),
        (n.animationDone = function () {
          ;(n.isAnim = !1),
            n.slideShowAutoStop && n.mId == n.totalItems - 1 ? n.tm.stop() : n.tm.resume(),
            n.item_do && n.dlChangeHandler(),
            n.caption &&
              (((n.animateCaption && n.captionShowedOnce) || n.forceHideCaption) && (n.caption_do.hide(!1, !0), n.caption2_do.hide(!1, !0)),
              n.isShowed && (n.caption_do.show(!0), n.caption2_do && (n.type == o.IMAGE ? !n.isLoading && n.caption2_do.show(!0) : n.caption2_do.show(!0))),
              (n.captionShowedOnce = !0)),
            (n.type == o.IMAGE || n.type == o.IFRAME || n.type == o.HTML) &&
              n.vidHld_do &&
              setTimeout(function () {
                n.vidHld_do.setX(-5e3)
              }, 100),
            n.animItemDone(),
            n.hideDisable()
        }),
        (n.animationDone2 = function () {
          n.animItemBeforeDone()
        }),
        (n.addBkClose = function () {
          n.isMbl
            ? n.hasPointerEvent_bl
              ? n.bk_do.screen.addEventListener("pointerup", n.onBkMouseUp)
              : (n.bk_do.screen.addEventListener("touchend", n.onBkMouseUp), n.bk_do.screen.addEventListener("touchmove", n.onBkTouchMove))
            : n.bk_do.screen.addEventListener && n.bk_do.screen.addEventListener("click", n.onBkMouseUp)
        }),
        (n.removeBkClose = function () {
          n.isMbl
            ? n.hasPointerEvent_bl
              ? n.bk_do.screen.removeEventListener("pointerup", n.onBkMouseUp)
              : (n.bk_do.screen.removeEventListener("touchend", n.onBkMouseUp), n.bk_do.screen.removeEventListener("touchmove", n.onBkTouchMove))
            : n.bk_do.screen.removeEventListener && n.bk_do.screen.removeEventListener("click", n.onBkMouseUp)
        }),
        (n.onBkTouchMove = function () {
          clearTimeout(n.doNotAllowToHideId_to),
            (n.doNotAllowToHideId_to = setTimeout(function () {
              n.doNotAllowToHide_bl = !1
            }, 100)),
            (n.doNotAllowToHide_bl = !0)
        }),
        (n.onBkMouseUp = function () {
          return n.doNotAllowToHide_bl ? void 0 : n.hasError ? void n.hide() : n.btnsHidden ? void n.positionBtns(!0) : void n.hide()
        }),
        (n.initItem = function () {
          var e = n.gallery_ar[n.mId]
          if (
            ((n.hasCaption = !!(n.gallery_ar[n.mId].caption && n.caption)),
            (n.videoStarted = !1),
            (n.type = e.type),
            (n.src = e.src),
            (n.posterSrc = e.posterSrc),
            (n.subtitleSrc = e.subtitleSrc),
            (n.thumbnailsPreviewSrc = e.thumbnailsPreviewSrc),
            (n.vastSrc = e.vastSrc),
            (n.password = e.password),
            n.hidePassWindow(),
            n.tm.pause(),
            n.share_do.hide(),
            n.closeImage(),
            n.preloader_do.hide(!0),
            n.captionDumy_do.setInnerHTML(n.gallery_ar[n.mId].caption),
            n.main_do.contains(n.info_do) && n.main_do.removeChild(n.info_do),
            n.thumbs_do && n.thumbs_do.disableOrEnableThumbnails(),
            n.type == o.IMAGE)
          )
            n.evp && n.evp.goNormalScreen(), n.loadImage(), (n.firstVideoOrAudioAdded_bl = !0)
          else if (n.type == o.VIDEO || n.type == o.YOUTUBE || n.type == o.VIMEO || n.type == o.AUDIO)
            (n.originalW = e.width || n.defaultItemWidth),
              (n.originalH = e.height || n.defaultItemHeight),
              (n.item_do = n.vidHld_do),
              n.animItem(),
              (n.prevItem_do = n.item_do),
              (n.isLoading = !1),
              n.preloader_do.hide(!0),
              n.removeZoomButton(),
              n.positionBtns(!0),
              n.startAnim(801)
          else if (n.type == o.IFRAME) {
            if (
              (n.evp && n.evp.goNormalScreen(),
              (n.originalW = e.width || n.defaultItemWidth),
              (n.originalH = e.height || n.defaultItemHeight),
              (n.item_do = new FWDRLDO("iframe")),
              (n.item_do.screen.allowFullScreen = 1),
              n.item_do.screen.setAttribute("allowFullScreen", ""),
              (n.item_do.screen.frameBorder = 0),
              n.itemHolder_do.addChild(n.item_do),
              n.animItem(),
              n.fr)
            ) {
              var t = "Iframe is not supported in the free version!"
              n.showError(t)
            } else
              /.pdf/i.test(n.src)
                ? setTimeout(function () {
                    n.item_do.screen.src = n.src
                  }, 300)
                : (n.item_do.screen.src = n.src)
            ;(n.prevItem_do = n.item_do), n.removeZoomButton(), n.positionBtns(!0), n.startAnim(801)
          } else if (n.type == o.HTML) {
            if ((n.evp && n.evp.goNormalScreen(), (n.originalW = e.width || n.defaultItemWidth), (n.originalH = e.height || n.defaultItemHeight), (n.item_do = new FWDRLDO("div")), n.fr)) {
              var t = "HTML content is not supported in the free version!"
              n.showError(t)
            } else n.item_do.setInnerHTML(document.getElementById(n.src).innerHTML)
            n.itemHolder_do.addChild(n.item_do), n.animItem(), (n.item_do.screen.src = n.src), (n.prevItem_do = n.item_do), n.removeZoomButton(), n.positionBtns(!0), n.startAnim(801)
          }
          n.dispatchEvent(o.UPDATE_ITEM, { guId: n.guId, curId: n.mId })
        }),
        (n.animItem = function () {
          if (((n.hasError = !1), n.setCaptionText(), n.setCntText(), n.gallery_ar[n.mId].caption || n.animateCaption || n.caption2_do.hide(!1, !0, !1), !n.isFirstItemShowed)) n.showItemFirstTime()
          else {
            n.resizeItem(!0, !1, !0), n.resizeItem(!1, !0), FWDAnimation.to(n.prevItem_do, 0.8, { alpha: 0, ease: Quint.easeOut })
            var e = n.prevItem_do.getWidth() || n.prevFinalW,
              t = n.prevItem_do.getHeight() || n.prevFinalH
            FWDAnimation.to(n.prevItem_do, 0.8, { x: Math.round((n.finalW - e) / 2), y: Math.round((n.finalH - t) / 2), ease: Expo.easeInOut }),
              n.animateCaption
                ? (n.caption_do.hide(!1, !0, !1), n.caption2_do.hide(!0, !0, !1))
                : n.prevCaption
                ? (n.forceHideCaption = !1)
                : (n.caption_do.hide(!1, !0, !1), n.caption2_do.hide(!1, !0, !1), (n.forceHideCaption = !0)),
              n.item_do.setAlpha(0),
              FWDAnimation.to(n.item_do, 0.8, { alpha: 1, delay: 0.8, ease: Quint.easeOut, onComplete: n.animItemDone }),
              n.evp &&
                (n.prevItem_do == n.vidHld_do || n.item_do == n.vidHld_do) &&
                FWDAnimation.to(n.evp, 0.79, {
                  volume: 0,
                  onUpdate: function () {
                    n.evp.setVolume(n.evp.volume)
                  },
                })
          }
          n.prevItem_do == n.vidHld_do &&
            (n.prevItem_do.setAlpha(1),
            FWDAnimation.to(n.prevItem_do, 0.8, { alpha: 0, ease: Quint.easeOut }),
            FWDAnimation.to(n.prevItem_do, 0.8, { x: parseInt((n.finalW - n.prevItem_do.getWidth()) / 2), y: parseInt((n.finalH - n.prevItem_do.getHeight()) / 2), ease: Expo.easeInOut })),
            (n.prevCaption = n.gallery_ar[n.mId].caption),
            (n.prevFinalW = n.finalW),
            (n.prevFinalH = n.finalH),
            (n.prevMId = n.mId)
        }),
        (n.animItemBeforeDone = function () {
          n.vidHld_do &&
            n.item_do == n.vidHld_do &&
            n.evp &&
            (n.evp.largePlayButton_do && n.evp.largePlayButton_do.hide(),
            n.evp.videoScreen_do && n.evp.videoScreen_do.setAlpha(0),
            n.evp.ytb_do && n.evp.ytb_do.setAlpha(0),
            n.evp.vimeo_do && n.evp.vimeo_do.setAlpha(0)),
            n.evp && n.evp.videoPoster_do.setAlpha(0)
        }),
        (n.animItemDone = function () {
          if ((n.evp && n.item_do != n.vidHld_do && n.evp.stop(), !(n.vidHld_do && n.item_do == n.vidHld_do))) n.removeItems(1)
          else if ((n.removeItems(0), n.evp && n.evp.resizeHandler(), n.isFirstItemAfterShowed && n.resizeItem(), n.useVideo)) n.updateEVP()
          else {
            var e = "Please enable video player in the settings."
            return n.fr && (e = "Video is not supported in the free version!"), void n.showError(e)
          }
          n.startMediaLazyLoading(), (n.showVideoFirstTime = !0)
        }),
        (n.closeImage = function () {
          n.image_img && ((n.image_img.onload = null), (n.image_img.onerror = null), (n.image_img = null))
        }),
        (n.loadImage = function () {
          ;(n.isLoading = !0),
            n.stopAnim(),
            n.positionPreloader(),
            n.preloader_do.show(!0),
            (n.image_img = new Image()),
            (n.image_img.onload = n.imageLoadComplete),
            (n.image_img.onerror = n.imageLoadError),
            (n.image_img.src = n.src)
        }),
        (n.imageLoadComplete = function () {
          ;(n.originalW = n.image_img.width), (n.originalH = n.image_img.height), n.resizeItem(!0, !1, !0), n.imageLoadComplete2()
        }),
        (n.imageLoadComplete2 = function () {
          ;(n.item_do = new FWDRLDO("img")),
            n.item_do.setScreen(n.image_img),
            (n.item_do.screen.className = n.cls + "-media"),
            n.animItem(),
            n.startAnim(801),
            (n.isLoading = !1),
            (n.prevItem_do = n.item_do),
            n.preloader_do.hide(!0),
            n.addZoomButton(),
            n.positionBtns(!0),
            n.itemHolder_do.addChild(n.item_do)
        }),
        (n.imageLoadError = function () {
          var e = "Image with path <span style='color:#FF0000;'>" + decodeURIComponent(n.src) + "</span> can't be loaded, probably the path is incorrect."
          n.showError(e)
        }),
        (n.maxOrMin = function () {
          if (!(n.isLoading || n.isAnim)) {
            var e, t, o, s
            ;(n.isAnimMaxOrMin = !0),
              clearTimeout(n.maxComplete_to),
              clearTimeout(n.minComplete_to),
              n.isMax
                ? ((n.isMax = !1),
                  n.useDrag ? n.useDrag && (n.item_do.style().cursor = n.handC) : (n.item_do.style().cursor = n.defaultC),
                  (n.isMaxComplete = !1),
                  n.zoomBtn_do.setButtonState(1),
                  n.removeMaxItemScroll(),
                  n.thumbs_do && n.thumbs_do.positionThumbnails(!1, !0),
                  FWDAnimation.to(n.itemBk_do, 0.8, { alpha: 1 }),
                  FWDAnimation.to(n.itemBorder_do, 0.8, { alpha: 1 }),
                  FWDAnimation.to(n.item_do, 0.8, {
                    x: n.finalX + n.itemBorderSize,
                    y: n.finalY + n.itemBorderSize,
                    w: n.finalW - 2 * n.itemBorderSize,
                    h: n.finalH - 2 * n.itemBorderSize,
                    ease: Expo.easeInOut,
                  }),
                  n.setBtnsVisible(!0),
                  n.positionBtns(!0),
                  n.hasCaption && n.caption && n.caption2_do.show(!0, !0),
                  n.thumbs_do && n.tempThumbsShowed && n.thumbs_do.show(!0),
                  (n.minComplete_to = setTimeout(n.minComplete, 801)))
                : ((n.isMax = !0),
                  (n.item_do.style().cursor = n.handC),
                  n.hideBtns(!0),
                  (n.isMaxComplete = !0),
                  n.zoomBtn_do.setButtonState(0),
                  n.tm.pause(),
                  (o = Math.round(n.originalW * n.maxZoom)),
                  (s = Math.round(n.originalH * n.maxZoom)),
                  (e = Math.round((n.stageW - o) / 2)),
                  (t = Math.round((n.stageH - s) / 2)),
                  1 != n.item_do.alpha && n.item_do.setAlpha(1),
                  n.item_do.setX(n.item_do.getGlobalX()),
                  n.item_do.setY(n.item_do.getGlobalY()),
                  n.itemHolder_do.contains(n.imteHolder_do) && n.itemHolder_do.removeChild(n.item_do),
                  n.main_do.addChild(n.item_do),
                  n.main_do.addChild(n.zoomBtn_do),
                  FWDAnimation.to(n.itemBk_do, 0.4, { alpha: 0 }),
                  FWDAnimation.to(n.itemBorder_do, 0.4, { alpha: 0 }),
                  n.showZoomButton && (FWDAnimation.killTweensOf(n.zoomBtn_do), FWDAnimation.to(n.zoomBtn_do, 0.8, { x: n.stageW - n.zoomBtn_do.w - 10, y: 10, alpha: 1, ease: Expo.easeInOut })),
                  FWDAnimation.to(n.item_do, 0.8, { x: e, y: t, w: o, h: s, ease: Expo.easeInOut }),
                  n.hasCaption && n.caption && (n.caption_do.hide(!0), n.caption2_do.hide(!0, !0, !1, !0)),
                  n.thumbs_do && n.thumbs_do.hide(!0),
                  (n.maxComplete_to = setTimeout(n.maxComplete, 801)))
          }
        }),
        (n.minComplete = function () {
          ;(n.isAnimMaxOrMin = !1),
            (n.isTweening_bl = !1),
            n.itemHolder_do.addChild(n.item_do),
            n.resizeItem(),
            n.tm.resume(),
            n.hasCaption && n.caption && n.caption_do.show(!0),
            n.main_do.addChild(n.zoomBtn_do),
            n.useDeepLinking && n.dlChangeHandler()
        }),
        (n.maxComplete = function () {
          ;(n.isAnimMaxOrMin = !1), n.setBtnsInvisible(!0), n.addMaxItemScroll(), n.hasCaption && n.caption && n.caption_do.hide(!1)
        }),
        (n.setBtnsInvisible = function (e) {
          n.showCloseButton && n.closeBtn_do.setVisible(!1),
            n.showNextAndPrevBtns && (n.nextBtn_do.setVisible(!1), n.prevBtn_do.setVisible(!1)),
            n.tempThumbsShowed && n.thumbs_do.setVisible(!1),
            n.showFullscreenButton && n.fsBtn_do.setVisible(!1),
            n.showSlideShowButton && n.slideShowBtn_do.setVisible(!1),
            n.showCounter && n.mcnt_do.setVisible(!1),
            n.showShareButton && n.shareBtn_do.setVisible(!1),
            n.addSlideShowAnimation_bl && n.slp_do.setVisible(!1),
            n.caption && n.caption2_do.setVisible(!1),
            e && n.itemHld_do.setVisible(!1)
        }),
        (n.setBtnsVisible = function (e) {
          n.showCloseButton && n.closeBtn_do.setVisible(!0),
            n.showNextAndPrevBtns && (n.nextBtn_do.setVisible(!0), n.prevBtn_do.setVisible(!0)),
            n.tempThumbsShowed && n.thumbs_do.setVisible(!0),
            n.showFullscreenButton && n.fsBtn_do.setVisible(!0),
            n.showCounter && n.mcnt_do.setVisible(!0),
            n.showSlideShowButton && n.slideShowBtn_do.setVisible(!0),
            n.showShareButton && n.shareBtn_do.setVisible(!0),
            n.addSlideShowAnimation_bl && n.slp_do.setVisible(!0),
            n.caption && n.caption2_do.setVisible(!0),
            e && n.itemHld_do.setVisible(!0)
        }),
        (n.addMaxItemScroll = function () {
          t.addEventListener("mousedown", n.onMaxScrollStart),
            t.addEventListener("mouseup", n.onMaxScrollEnd),
            t.addEventListener("touchstart", n.onMaxScrollStart),
            t.addEventListener("touchend", n.onMaxScrollEnd)
        }),
        (n.removeMaxItemScroll = function () {
          t.removeEventListener("mousedown", n.onMaxScrollStart),
            t.removeEventListener("mouseup", n.onMaxScrollEnd),
            t.removeEventListener("mousemove", n.onMaxScrollMove),
            t.removeEventListener("touchstart", n.onMaxScrollStart),
            t.removeEventListener("touchend", n.onMaxScrollEnd),
            t.removeEventListener("touchmove", n.onMaxScrollMove),
            n.hasOneItem && (n.item_do.style().cursor = n.defaultC),
            (n.isDragging = !1),
            cancelAnimationFrame(n.updateMax_af)
        }),
        (n.onMaxScrollStart = function (o) {
          if (!(o.button && 2 == o.button)) {
            var e = FWDRLUtils.getViewportMouseCoordinates(o)
            t.addEventListener("mousemove", n.onMaxScrollMove),
              t.addEventListener("touchmove", n.onMaxScrollMove, { passive: !1 }),
              (n.isDragging = !0),
              (n.maxItemX = n.lastFinalX = n.item_do.x),
              (n.maxItemY = n.lastFinalY = n.item_do.y),
              (n.lastPresedX = e.screenX),
              (n.lastPresedY = e.screenY),
              (n.item_do.style().cursor = n.grabC),
              n.startToUpdateDrag()
          }
        }),
        (n.onMaxScrollEnd = function () {
          t.removeEventListener("mousemove", n.onMaxScrollMove), t.removeEventListener("touchmove", n.onMaxScrollMove), (n.item_do.style().cursor = n.handC), (n.isDragging = !1)
        }),
        (n.onMaxScrollMove = function (t) {
          t.preventDefault && t.preventDefault()
          var e = FWDRLUtils.getViewportMouseCoordinates(t),
            o = e.screenX - n.lastPresedX
          ;(n.maxItemX += o), (n.maxItemX = Math.round(n.maxItemX)), (n.lastPresedX = e.screenX), n.item_do.setX(n.maxItemX)
          var s = e.screenY - n.lastPresedY
          ;(n.maxItemY += s), (n.maxItemY = Math.round(n.maxItemY)), (n.lastPresedY = e.screenY), n.item_do.setY(n.maxItemY)
        }),
        (n.stopToUpdateDrag = function () {
          cancelAnimationFrame(n.updateMax_af)
        }),
        (n.startToUpdateDrag = function () {
          n.stopToUpdateDrag(), n.updateMax()
        }),
        (n.updateMax = function () {
          if (((n.updateMax_af = requestAnimationFrame(n.updateMax)), n.isDragging)) {
            ;(n.vx = n.maxItemX - n.lastFinalX), (n.lastFinalX = n.maxItemX), (n.vy = n.maxItemY - n.lastFinalY), (n.lastFinalY = n.maxItemY)
            var e = Math.sqrt(n.vx * n.vx + n.vy * n.vy)
            20 > e && (n.vx = n.vy = 0)
          } else
            (n.vx *= n.friction),
              (n.maxItemX += n.vx),
              n.stageW <= n.item_do.w
                ? 0 <= n.maxItemX
                  ? ((n.vx2 = 0.3 * (0 - n.maxItemX)), (n.vx *= n.friction), (n.maxItemX += n.vx2))
                  : n.maxItemX <= n.stageW - n.item_do.w && ((n.vx2 = 0.3 * (n.stageW - n.item_do.w - n.maxItemX)), (n.vx *= n.friction), (n.maxItemX += n.vx2))
                : ((n.vx2 = 0.3 * ((n.stageW - n.item_do.w) / 2 - n.maxItemX)), (n.vx *= n.friction), (n.maxItemX += n.vx2)),
              (n.vy *= n.friction),
              (n.maxItemY += n.vy),
              n.stageH <= n.item_do.h
                ? 0 <= n.maxItemY
                  ? ((n.vy2 = 0.3 * (0 - n.maxItemY)), (n.vy *= n.friction), (n.maxItemY += n.vy2))
                  : n.maxItemY <= n.stageH - n.item_do.h && ((n.vy2 = 0.3 * (n.stageH - n.item_do.h - n.maxItemY)), (n.vy *= n.friction), (n.maxItemY += n.vy2))
                : ((n.vy2 = 0.3 * ((n.stageH - n.item_do.h) / 2 - n.maxItemY)), (n.vy *= n.friction), (n.maxItemY += n.vy2)),
              (n.maxItemX = parseFloat(n.maxItemX.toFixed(2))),
              (n.maxItemY = parseFloat(n.maxItemY.toFixed(2))),
              n.prevMaxItemX == n.maxItemX && n.prevMaxItemY == n.maxItemY && (n.stopToUpdateDrag(), (n.maxItemX = Math.round(n.maxItemX)), (n.maxItemY = Math.round(n.maxItemY))),
              n.item_do.setX(n.maxItemX),
              n.item_do.setY(n.maxItemY),
              (n.prevMaxItemX = n.maxItemX),
              (n.prevMaxItemY = n.maxItemY)
        }),
        (n.addDbl = function () {
          n.useDoubleClick && (n.isMbl ? t.addEventListener("touchstart", n.firstDown) : t.addEventListener("mousedown", n.firstDown))
        }),
        (n.removeDbl = function () {
          n.isMbl
            ? (t.removeEventListener("touchstart", n.firstDown), t.removeEventListener("touchstart", n.onSecondDown))
            : (t.removeEventListener("mousedown", n.firstDown), t.removeEventListener("mousedown", n.onSecondDown)),
            clearTimeout(n.secondTap_to)
        }),
        (n.firstDown = function (s) {
          if (!(2 == s.btn || n.isAnim || n.isLoading || !n.isShowed || n.type != o.IMAGE)) {
            var e = FWDRLUtils.getViewportMouseCoordinates(s)
            ;(n.firstTapX = e.screenX - n.main_do.getGlobalX()),
              (n.firstTapY = e.screenY - n.main_do.getGlobalY()),
              FWDRLUtils.hitTest(n.share_do.screen, n.hider.globalX, n.hider.globalY) ||
                (n.isMbl
                  ? (t.addEventListener("touchstart", n.onSecondDown), t.removeEventListener("touchstart", n.firstDown))
                  : (t.addEventListener("mousedown", n.onSecondDown), t.removeEventListener("mousedown", n.firstDown)),
                clearTimeout(n.secondTap_to),
                (n.secondTap_to = setTimeout(n.doubleTapExpired, 500)))
          }
        }),
        (n.doubleTapExpired = function () {
          clearTimeout(n.secondTap_to),
            n.isMbl
              ? (t.removeEventListener("touchstart", n.onSecondDown), t.addEventListener("touchstart", n.firstDown))
              : (t.removeEventListener("mousedown", n.onSecondDown), t.addEventListener("mousedown", n.firstDown))
        }),
        (n.onSecondDown = function (t) {
          var e = FWDRLUtils.getViewportMouseCoordinates(t),
            o,
            s
          if (!(t.touches && 1 != t.touches.length))
            return (
              (o = Math.abs(e.screenX - n.main_do.getGlobalX() - n.firstTapX)),
              (s = Math.abs(e.screenY - n.main_do.getGlobalY() - n.firstTapY)),
              10 < o || 10 < s ? void 0 : FWDRLUtils.hitTest(n.item_do.screen, n.hider.globalX, n.hider.globalY) ? void n.maxOrMin() : void 0
            )
        }),
        (n.addDrag = function () {
          n.useDrag &&
            (n.itemHld_do.screen.addEventListener("mousedown", n.onDragStart),
            n.itemHld_do.screen.addEventListener("mouseup", n.onDragEnd),
            n.itemHld_do.screen.addEventListener("touchstart", n.onDragStart, { passive: !1 }),
            n.itemHld_do.screen.addEventListener("touchend", n.onDragEnd),
            (n.itemHld_do.style().cursor = n.handC),
            (n.item_do.style().cursor = n.handC))
        }),
        (n.removeDrag = function () {
          n.itemHld_do.screen.removeEventListener("mousedown", n.onDragStart),
            n.itemHld_do.screen.removeEventListener("mouseup", n.onDragEnd),
            n.itemHld_do.screen.removeEventListener("touchstart", n.onDragStart),
            n.itemHld_do.screen.removeEventListener("touchend", n.onDragEnd),
            (n.itemHld_do.style().cursor = n.defaultC),
            n.item_do && (n.item_do.style().cursor = n.defaultC)
        }),
        (n.stopToDragAF = function () {
          cancelAnimationFrame(n.updateDrag_af)
        }),
        (n.startToDragAF = function () {
          n.stopToDragAF(), n.updateDragAf()
        }),
        (n.updateDragAf = function () {
          ;(n.updateDrag_af = requestAnimationFrame(n.updateDragAf)), n.itemDragHld_do.setX(n.itemDragHld_do.x)
        }),
        (n.onDragStart = function (o) {
          if (!((o.button && 2 == o.button) || (n.evp && n.evp.isFullScreen_bl))) {
            var e = FWDRLUtils.getViewportMouseCoordinates(o)
            if ("input" != event.target.nodeName.toLowerCase()) {
              if (
                (n.evp &&
                  n.evp.controller_do &&
                  (FWDRLUtils.hitTest(n.evp.controller_do.mainHolder_do.screen, e.screenX, e.screenY) ||
                    FWDRLUtils.hitTest(n.evp.largePlayButton_do.screen, e.screenX, e.screenY) ||
                    (n.evp.apt && FWDRLUtils.hitTest(n.evp.apt.screen, e.screenX, e.screenY)))) ||
                n.isEvpFSDL
              )
                return n.hider.reset(), void (o.preventDefault && o.preventDefault())
              if (((n.itemHld_do.style().cursor = n.grabC), (n.item_do.style().cursor = n.grabC), n.updateEVPCursor(n.grabC), !(n.isLoading || n.isAnim || !n.isShowed))) {
                var s = FWDRLUtils.getViewportMouseCoordinates(o)
                ;(n.lastPresedX = n.lastPresedX2 = s.screenX),
                  (n.x1 = n.itemDragHld_do.x),
                  (n.y1 = n.itemDragHld_do.y),
                  (n.dir = ""),
                  n.startToDragAF(),
                  t.addEventListener("mousemove", n.onDragMove),
                  t.addEventListener("touchmove", n.onDragMove, { capture: !1, passive: !1 }),
                  t.addEventListener("mouseup", n.onDragEnd),
                  t.addEventListener("touchend", n.onDragEnd)
              }
            }
          }
        }),
        (n.onDragMove = function (t) {
          t && t.preventDefault && t.preventDefault(),
            n.setGrabHand(),
            FWDAnimation.killTweensOf(n.itemDragHld_do),
            (n.vc = FWDRLUtils.getViewportMouseCoordinates(t)),
            (n.toAddX = n.vc.screenX - n.lastPresedX),
            (n.toAddX2 = n.vc.screenX - n.lastPresedX2)
          var e = 120
          n.isMbl && (e = 50), (n.lastPresedX = n.vc.screenX), (n.x2 = n.itemDragHld_do.x), (n.y2 = n.itemDragHld_do.y)
          var o = parseInt(Math.sqrt(Math.pow(n.x2 - n.x1, 2) + Math.pow(n.y2 - n.y1, 2)), 10),
            s = n.itemDragHld_do.x + (n.toAddX / 1.5) * (1 - o / e)
          ;(n.itemDragHld_do.x = s), (n.isDragging = !0), 5 < o && (n.tm.pause(), n.hideBtnsOnDrag(!0), (n.isSetBtnsHideOnDrag = !0))
          10 > o || (0 > n.toAddX2 && o > e / 2 ? (n.dir = "right") : 0 < n.toAddX2 && o > e / 2 && (n.dir = "left"))
        }),
        (n.onDragEnd = function () {
          ;(n.isDragging = !1),
            FWDAnimation.isTweening(n.itemDragHld_do) || FWDAnimation.to(n.itemDragHld_do, 0.8, { x: 0, ease: Expo.easeInOut }),
            !n.isMax && n.isSetBtnsHideOnDrag && (n.tm.resume(), (n.slp_do.isSlideShowRun = !0)),
            (n.isSetBtnsHideOnDrag = !1),
            n.hideBtnsOnDrag(!1),
            (n.itemHld_do.style().cursor = n.handC),
            (n.item_do.style().cursor = n.handC),
            n.updateEVPCursor(n.handC),
            n.removeGrabHand(),
            n.stopToDragAF(),
            t.removeEventListener("mousemove", n.onDragMove),
            t.removeEventListener("touchmove", n.onDragMove),
            t.removeEventListener("mouseup", n.onDragEnd),
            t.removeEventListener("touchend", n.onDragEnd),
            n.isEvpFSDL || ("left" == n.dir ? n.gotoPrevItem() : "right" == n.dir && n.gotoNextItem()),
            (n.dir = "")
        }),
        (n.getDescOutH = function (e) {
          if ((n.captionDumy_do.setWidth(n.finalW), !e)) {
            n.desc2H = n.captionDumy_do.getHeight()
            var t = n.stageW - 2 * n.buttonW - 2 * (n.tempBtnsOffsetIn + n.tempBtnsOffsetOut) - 2 * n.itemBorderSize,
              o = n.stageH - n.desc2H - n.itemOffsetHeight - 2 * n.itemBorderSize
            n.tempThumbsShowed && (o -= n.thumbnailH + n.spaceBetweenThumbnailsAndItem)
            var s = t / n.originalW,
              r = o / n.originalH,
              a = 0
            s <= r ? (a = s) : s >= r && (a = r), 1 <= s && 1 <= r && (a = 1), (n.finalW = Math.round(n.originalW * a) + 2 * n.itemBorderSize)
          }
          e && n.captionDumy_do.setWidth(e),
            n.caption_do && (n.caption_do.resizeAndPosition(n.finalW - 2 * n.itemBorderSize), n.caption2_do.resizeAndPosition(n.finalW)),
            n.captionDumy_do.setWidth(n.finalW),
            (n.desc2H = n.captionDumy_do.getHeight()),
            e && n.resizeItem(!0, !1, !1)
        }),
        (n.hideBtnsOnDrag = function (e) {
          if (!n.isSetBtnsHideOnDrag && n.hideButtonsOnDrag) {
            var t = "in" == n.tempBtnsAlign || "out" == n.tempBtnsAlign || n.hSmall
            if (t) {
              var o = 1,
                s = 0
              e && ((o = 0.3), (s = 0.4))
              for (var r = 0, a; r < n.buttons_ar.length; r++) (a = n.buttons_ar[r]), e ? a.setHideDrag(!0) : a.setHideDrag(!1)
              n.showCounter && (FWDAnimation.killTweensOf(n.cnt_do), FWDAnimation.to(n.cnt_do, 0.8, { alpha: o, delay: s })), n.showNextAndPrevBtns && n.prevBtn_do.setHideDrag(e)
            }
          }
        }),
        (n.resizeItem = function (e, t, o) {
          n.hSmall = n.wSmall = !1
          var s = n.captionPosition,
            r = n.itemOffsetHeight,
            a = n.spaceBetweenThumbnailsAndItem
          ;(n.tempThumbnailsOffsetBottom = n.thumbnailsOffsetBottom),
            (n.tempThumbsShowed = n.showThumbnails),
            (n.limitH = 650),
            (n.tempBtnsAlign = n.buttonsAlignment),
            n.limitH >= n.stageH && ((n.hSmall = !0), "bottomout" == n.captionPosition && (s = "bottomin"), (n.tempBtnsAlign = "top")),
            (o || "bottomout" != s || !n.hasCaption) && (n.desc2H = 0)
          var d = 2 * n.buttonW + 2 * (n.tempBtnsOffsetIn + n.tempBtnsOffsetOut),
            l = 0
          n.limitH >= n.stageW && ((d = 0), (n.wSmall = !0), (n.tempBtnsAlign = "top")),
            (n.tempBtnsOffsetOut = n.buttonsOffsetOut),
            (n.tempBtnsOffsetIn = n.buttonsOffsetIn),
            (n.stageH <= n.limitH || n.stageW <= n.limitH) && 5 < n.buttonsOffsetOut && ((n.tempBtnsOffsetIn = 5), (n.tempBtnsOffsetOut = 5), "top" == n.buttonsAlignment && (r -= 5)),
            "top" == n.tempBtnsAlign && (r = n.itemOffsetHeightButtonsTop + 5),
            n.wSmall && ((n.tempThumbnailsOffsetBottom = 5), (r -= 10)),
            400 > n.stageH ? ((n.tempThumbsShowed = !1), n.thumbs_do && n.thumbs_do.setVisible(!1)) : n.thumbs_do && n.thumbs_do.setVisible(!0),
            n.hSmall ? (r = l = 0) : "bottomout" == s && n.tempThumbsShowed && (l = 10),
            n.mcnt_do && ("in" == n.tempBtnsAlign ? (n.mcnt_do.screen.className = n.cls + "-counter in") : (n.mcnt_do.screen.className = n.cls + "-counter")),
            "top" == n.tempBtnsAlign && (d = 0)
          var p = n.stageW - d - 2 * n.itemBorderSize,
            _ = n.stageH - n.desc2H - 2 * r - 2 * n.itemBorderSize + l,
            m = 0
          n.tempThumbsShowed
            ? ("bottomout" != s && !n.hSmall && (a = 0),
              n.hSmall && (n.tempThumbnailsOffsetBottom = 0),
              n.thumbs_do.show(),
              (n.thumbs_do.thumbnailH = n.thumbnailH),
              (n.thumbs_do.stageH = n.thumbnailH + n.tempThumbnailsOffsetBottom),
              (_ -= n.thumbnailH + a + n.tempThumbnailsOffsetBottom),
              (m = n.hSmall ? Math.round((n.thumbnailH + a + n.tempThumbnailsOffsetBottom) / 2) : Math.round((n.thumbnailH + a + n.tempThumbnailsOffsetBottom) / 2 - l / 2)))
            : !n.hSmall && (_ -= a + l)
          var u = p / n.originalW,
            c = _ / n.originalH,
            h = 0
          if (
            (u <= c ? (h = u) : u >= c && (h = c),
            1 <= u && 1 <= c && (h = 1),
            (n.finalW = Math.round(n.originalW * h) + 2 * n.itemBorderSize),
            (n.finalH = Math.round(n.originalH * h) + 2 * n.itemBorderSize),
            n.finalW < 2 * n.itemBorderSize && (n.finalW = 2 * n.itemBorderSize),
            n.finalH < 2 * n.itemBorderSize && (n.finalH = 2 * n.itemBorderSize),
            (n.finalX = Math.round((n.stageW - n.finalW) / 2)),
            (n.finalY = Math.round((n.stageH - n.finalH) / 2 - n.desc2H / 2 - m)),
            o && "bottomout" == s && n.getDescOutH(),
            n.positionPreloader(),
            !e && n.item_do)
          ) {
            if ((300 > n.finalH && 550 < n.stageH && (s = "bottomout"), "bottomout" == s)) {
              if (n.finalW != n.captionDumy_do.getWidth()) for (var g = 0; 4 > g; g++) n.getDescOutH(n.finalW)
              ;(n.caption_do.style().display = "none"), (n.caption2_do.style().display = "block")
            } else (n.caption_do.style().display = "block"), (n.caption2_do.style().display = "none"), 220 > n.finalH && !n.showCaptionOnSmallScreens && (n.caption_do.style().display = "none")
            n.hasCaption || ((n.caption_do.style().display = "none"), (n.caption2_do.style().display = "none")),
              n.isEvpFS && ((n.finalX = n.finalY = 0), (n.finalW = n.stageW), (n.finalH = n.stageH)),
              FWDAnimation.killTweensOf(n.itemHld_do),
              FWDAnimation.killTweensOf(n.itemBk_do),
              FWDAnimation.killTweensOf(n.itemBorder_do),
              t
                ? (FWDAnimation.to(n.itemHld_do, 0.8, { x: n.finalX, y: n.finalY, w: n.finalW, h: n.finalH, ease: Expo.easeInOut }),
                  FWDAnimation.to(n.itemBk_do, 0.8, { x: n.itemBorderSize, y: n.itemBorderSize, w: n.finalW - 2 * n.itemBorderSize - 1, h: n.finalH - 2 * n.itemBorderSize - 1, ease: Expo.easeInOut }),
                  FWDAnimation.to(n.itemBorder_do, 0.8, { x: 0, y: 0, w: n.finalW, h: n.finalH, ease: Expo.easeInOut }),
                  n.caption_do &&
                    (FWDAnimation.to(n.caption_do, 0.8, {
                      finalW: n.finalW - 2 * n.itemBorderSize,
                      onUpdate: function () {
                        n.caption_do.resizeAndPosition(), n.caption2_do.resizeAndPosition()
                      },
                      ease: Expo.easeInOut,
                    }),
                    n.caption2_do.setWH(n.finalW, n.finalH)))
                : (n.caption_do && (n.caption_do.resizeAndPosition(n.finalW - 2 * n.itemBorderSize), n.caption2_do.resizeAndPosition(n.finalW)),
                  n.itemHld_do.setX(n.finalX),
                  n.itemHld_do.setY(n.finalY),
                  n.itemHld_do.setWidth(n.finalW),
                  n.itemHld_do.setHeight(n.finalH),
                  n.itemBk_do.setX(n.itemBorderSize),
                  n.itemBk_do.setY(n.itemBorderSize),
                  n.itemBk_do.setWidth(n.finalW - 2 * n.itemBorderSize - 1),
                  n.itemBk_do.setHeight(n.finalH - 2 * n.itemBorderSize - 1),
                  n.itemBorder_do.setX(0),
                  n.itemBorder_do.setY(0),
                  n.itemBorder_do.setWidth(n.finalW),
                  n.itemBorder_do.setHeight(n.finalH),
                  1 != n.itemBorder_do.alpha && n.itemBorder_do.setAlpha(1)),
              FWDAnimation.killTweensOf(n.item_do),
              cancelAnimationFrame(n.updateMax_af),
              n.isMax
                ? (n.item_do.setX(parseInt((n.stageW - n.originalW * n.maxZoom) / 2)),
                  n.item_do.setY(parseInt((n.stageH - n.originalH * n.maxZoom) / 2)),
                  n.item_do.setWidth(Math.max(0, Math.round(n.originalW * n.maxZoom))),
                  n.item_do.setHeight(Math.max(0, Math.round(n.originalH * n.maxZoom))))
                : t
                ? FWDAnimation.to(n.item_do, 0.8, { x: n.itemBorderSize, y: n.itemBorderSize, w: n.finalW - 2 * n.itemBorderSize, h: n.finalH - 2 * n.itemBorderSize, ease: Expo.easeInOut })
                : (n.item_do.setAlpha(1),
                  n.item_do.setX(n.itemBorderSize),
                  n.item_do.setY(n.itemBorderSize),
                  n.item_do.setWidth(n.finalW - 2 * n.itemBorderSize),
                  n.item_do.setHeight(n.finalH - 2 * n.itemBorderSize)),
              n.evp && n.item_do == n.vidHld_do && (n.isEvpFS && n.thumbs_do && n.thumbs_do.setVisible(!1), n.vidHld_do.setX(n.itemBorderSize), (n.vidHld_do.style().left = 0), n.evp.resizeHandler())
          }
        }),
        (n.showItemFirstTime = function () {
          ;(n.isFirstItemShowed = !0),
            (n.showCationFirstTime = !0),
            n.resizeItem(!0, !1, !0),
            n.resizeItem(!1, !1, !1),
            n.itemHld_do.setX(n.stageW / 2),
            n.itemHld_do.setY(n.stageH / 2),
            n.itemHld_do.setWidth(0),
            n.itemHld_do.setHeight(0),
            n.itemBk_do.setX(0),
            n.itemBk_do.setY(0),
            n.itemBk_do.setWidth(0),
            n.itemBk_do.setHeight(0),
            n.item_do.setAlpha(0),
            n.item_do.setX(-n.finalW / 2 + n.itemBorderSize),
            n.item_do.setY(-n.finalH / 2 + n.itemBorderSize),
            FWDAnimation.to(n.item_do, 0.8, { alpha: 1, delay: 0.8, ease: Quint.easeOut }),
            FWDAnimation.to(n.item_do, 0.8, { x: n.itemBorderSize, y: n.itemBorderSize, ease: Expo.easeInOut }),
            n.startAnim(1601),
            FWDAnimation.to(n.itemHld_do, 0.8, { x: n.finalX, y: n.finalY, w: n.finalW, h: n.finalH, ease: Expo.easeInOut }),
            n.itemBorder_do.setAlpha(0),
            FWDAnimation.to(n.itemBorder_do, 0.8, { alpha: 1, x: 0, y: 0, w: n.finalW, h: n.finalH, ease: Expo.easeInOut }),
            FWDAnimation.to(n.itemBk_do, 0.8, { x: n.itemBorderSize, y: n.itemBorderSize, w: n.finalW - 2 * n.itemBorderSize, h: n.finalH - 2 * n.itemBorderSize, ease: Expo.easeInOut }),
            n.hider.start(),
            n.positionBtns(!1),
            n.addKeyboard(),
            n.addDrag(),
            n.addDbl(),
            n.hideBtns(),
            n.setupThumbnails(0),
            n.caption2_do.resizeAndPosition(),
            n.caption_do.hide(!1, !0, !1),
            n.caption2_do.hide(!1, !0, !1),
            setTimeout(function () {
              n.caption2_do && n.caption2_do.show(!0)
            }, 51),
            (n.isFirstItemAfterShowed = !0),
            setTimeout(function () {
              ;(n.showCationFirstTime = !1), n.slideShowAutoPlay && n.tm.start(), n.dispatchEvent(o.SHOW_COMPLETE, { guId: n.guId, mId: n.mId }), (n.showFirstTimeDone = !0)
            }, 800)
        }),
        (n.gotoToItem = function (e) {
          !n.isReady || !n.isFirstItemShowed || n.isAnim || n.isLoading || ((n.mId = e), n.useDeepLinking ? n.setDL(!0) : n.initItem())
        }),
        (n.gotoNextItem = function () {
          !n.isReady ||
            !n.isFirstItemShowed ||
            n.isAnim ||
            n.isLoading ||
            (n.mId++, 0 > n.mId ? (n.mId = n.totalItems - 1) : n.mId > n.totalItems - 1 && (n.mId = 0), n.useDeepLinking ? n.setDL(!0) : n.initItem(!0))
        }),
        (n.gotoPrevItem = function () {
          !n.isReady ||
            !n.isFirstItemShowed ||
            n.isAnim ||
            n.isLoading ||
            (n.mId--, 0 > n.mId ? (n.mId = n.totalItems - 1) : n.mId > n.totalItems - 1 && (n.mId = 0), n.useDeepLinking ? n.setDL(!0) : n.initItem())
        }),
        (n.removeItems = function (e) {
          for (var t; n.itemHolder_do.getNumChildren() > e; ) (t = n.itemHolder_do.getChildAt(0)), FWDAnimation.killTweensOf(t), n.itemHolder_do.removeChild(t), t.destroy()
          t = null
        }),
        (n.addKeyboard = function () {
          n.useKeyboard && (document.addEventListener("keydown", n.onKeyDownHandler), document.addEventListener("keyup", n.onKeyUpHandler))
        }),
        (n.removeKeyboard = function () {
          document.removeEventListener("keydown", n.onKeyDownHandler), document.removeEventListener("keyup", n.onKeyUpHandler)
        }),
        (n.onKeyDownHandler = function (t) {
          if (!(n.isDragging || n.isLoading || n.isAnim)) {
            if ((document.removeEventListener("keydown", n.onKeyDownHandler), 27 == t.keyCode && !n.useAsModal)) {
              if (n.isFullScreen) return void n.goNormalScreen()
              n.hide(), t.preventDefault && t.preventDefault()
            }
            return n.evp && n.evp.isPlaying_bl
              ? void 0
              : 39 == t.keyCode
              ? (n.gotoNextItem(), t.preventDefault && t.preventDefault(), !1)
              : 37 == t.keyCode
              ? (n.gotoPrevItem(), t.preventDefault && t.preventDefault(), !1)
              : void 0
          }
        }),
        (n.onKeyUpHandler = function () {
          document.addEventListener("keydown", n.onKeyDownHandler)
        }),
        (n.goFullScreen = function () {
          n.isAnim ||
            n.isAnimMaxOrMin ||
            n.isLoading ||
            (document.addEventListener &&
              (document.addEventListener("fullscreenchange", n.onFSChange),
              document.addEventListener("mozfullscreenchange", n.onFSChange),
              document.addEventListener("webkitfullscreenchange", n.onFSChange),
              document.addEventListener("MSFullscreenChange", n.onFSChange)),
            n._dc.requestFullScreen
              ? n.main_do.screen.requestFullScreen()
              : n._dc.mozRequestFullScreen
              ? n.main_do.screen.mozRequestFullScreen()
              : n._dc.webkitRequestFullScreen
              ? n.main_do.screen.webkitRequestFullScreen()
              : n._dc.msRequestFullscreen && n.main_do.screen.msRequestFullscreen(),
            (n.isFullScreen = !0),
            (n.dcelState = n._dc.style.overflow),
            (n._dc.style.overflow = "hidden"),
            n.fsBtn_do.setButtonState(0),
            (n.fsX = n.so.x),
            (n.fsY = n.so.y),
            n.isMbl && t.addEventListener("touchmove", n.disableFullScreenOnMobileHandler, { passive: !1 }),
            n.resizeHandler(),
            n.dispatchEvent(o.FULLSCREEN))
        }),
        (n.onFSChange = function () {
          document.fullScreen ||
            document.msFullscreenElement ||
            document.mozFullScreen ||
            document.webkitIsFullScreen ||
            document.msieFullScreen ||
            (n.fsBtn_do.setButtonState(0), n.addNS(), (n.isFullScreen = !1))
        }),
        (n.disableFullScreenOnMobileHandler = function (t) {
          t.preventDefault && t.preventDefault()
        }),
        (n.goNormalScreen = function () {
          n.isAnim ||
            n.isAnimMaxOrMin ||
            n.isLoading ||
            (n.isFullScreen &&
              (document.cancelFullScreen
                ? document.cancelFullScreen()
                : document.mozCancelFullScreen
                ? document.mozCancelFullScreen()
                : document.webkitCancelFullScreen
                ? document.webkitCancelFullScreen()
                : document.msExitFullscreen && document.msExitFullscreen()),
            n.addNS(),
            n.evp && n.evp.goNormalScreen(),
            (n.isFullScreen = !1))
        }),
        (n.addNS = function () {
          n.isFullScreen &&
            (document.removeEventListener &&
              (document.removeEventListener("fullscreenchange", n.onFSChange),
              document.removeEventListener("mozfullscreenchange", n.onFSChange),
              document.removeEventListener("webkitfullscreenchange", n.onFSChange),
              document.removeEventListener("MSFullscreenChange", n.onFSChange)),
            (n.isFullScreen = !1),
            (n._dc.style.overflow = n.dcelState),
            n.fsBtn_do.setButtonState(1),
            n.resizeOnNS(),
            n.isMbl && t.removeEventListener("touchmove", n.disableFullScreenOnMobileHandler),
            n.dispatchEvent(o.NORMALSCREEN))
        }),
        (n.resizeOnNS = function () {
          n.item_do != n.vidHld_do ||
            (n.resizeHandler(),
            setTimeout(function () {
              t.scrollTo(n.fsX, n.fsY), n.resizeHandler()
            }, 50),
            setTimeout(function () {
              t.scrollTo(n.fsX, n.fsY), n.resizeHandler()
            }, 150),
            setTimeout(function () {
              t.scrollTo(n.fsX, n.fsY), n.resizeHandler()
            }, 300))
        }),
        (n.setDefaultSettings = function () {
          ;(n.rightClickContextMenu = n.DRightClickContextMenu),
            (n.useDeepLinking = n.DUseDeepLinking),
            (n.buttonsAlignment = n.DFBtnsAlignment),
            (n.useDrag = n.DUseDrag),
            (n.mediaLazyLoading = n.DMediaLazyLoading),
            (n.useAsModal = n.DFUseAsModal),
            (n.showSlideShowButton = n.DFShowSlideShowButton),
            (n.showSlideShowAnimation = n.DShowSlideShowAnimation),
            (n.slideShowAutoPlay = n.DFSlideShowAutoPlay),
            (n.slideShowAutoStop = n.DSlideShowAutoStop),
            (n.slideShowDelay = n.DFSlideShowDelay),
            (n.slideShowBkColor = n.DSlideShowBkColor),
            (n.slideShowFillColor = n.DSlideShowFillColor),
            (n.useKeyboard = n.DUseKeyboard),
            (n.useDoubleClick = n.DUseDoubleClick),
            (n.showCloseButton = n.DFShowCloseButton),
            (n.showFullscreenButton = n.DShowFullscreenButton),
            (n.showZoomButton = n.DShowZoomButton),
            (n.showCounter = n.DShowCounter),
            (n.showNextAndPrevBtns = n.DShowNextAndPrevBtns),
            (n.defaultShowNextAndPrevBtns = n.DFSefaultShowNextAndPrevBtns),
            (n.hideButtonsOnDrag = n.DHideButtonsOnDrag),
            (n.maxZoom = n.DMaxZoom),
            (n.buttonsHideDelay = n.DButtonsHideDelay),
            (n.defaultItemWidth = n.DFDefaultItemW),
            (n.defaultItemHeight = n.DFDefaultItemH),
            (n.itemOffsetHeight = n.DItemOffsetHeight),
            (n.itemOffsetHeightButtonsTop = n.DItemOffsetHeightButtonsTop),
            (n.spaceBetweenBtns = n.DFSpaceBetweenBtns),
            (n.buttonsOffsetIn = n.DFBtnsOffsetIn),
            (n.buttonsOffsetOut = n.DFBtnsOffsetOut),
            (n.itemBorderSize = n.DFItemBorderSize),
            (n.itemBkColor = n.DItemBkColor),
            (n.itemBorderColor = n.DFitemBorderColor),
            (n.preloaderBkColor = n.DPreloaderBkColor),
            (n.preloaderFillColor = n.DPreloaderFillColor),
            (n.backgroundColor = n.DFBackgroundColor),
            (n.shareButtons = n.DShareButtons),
            (n.showShareButton = n.DShowShareButton),
            (n.shareText = n.DShareText),
            (n.sharedURL = n.DSharedURL),
            (n.shareBackgroundColor = n.DShareBackgroundColor),
            (n.shareMainBackgroundColor = n.DShareMainBackgroundColor),
            (n.showThumbnails = n.DFDefaultThumbnails),
            (n.showThumbnailsIcon = n.DShowThumbnailsIcon),
            (n.thumbnailH = n.DFThumbnailH),
            (n.thumbnailsBorderSize = n.DFThumbnailsBorderSize),
            (n.spaceBetweenThumbnailsAndItem = n.DFSpaceBetweenThumbnailsAndItem),
            (n.spaceBetweenThumbnails = n.DFSpaceBetweenThumbnails),
            (n.thumbnailsOffsetBottom = n.DFThumbnailsOffsetBottom),
            (n.thumbnailsOverlayColor = n.DFThumbnailsOverlayColor),
            (n.thumbnailsBorderColor = n.DThumbnailsBorderColor),
            (n.captionPosition = n.DCaptionPosition),
            (n.caption = n.DCaption),
            (n.showCaptionOnSmallScreens = n.DShowCaptionOnSmallScreens),
            (n.animateCaption = n.DAnimateCaption),
            (n.captionAnimationType = n.DFDescriptionAnimationType),
            (n.volume = n.DVolume),
            (n.videoAutoPlay = n.DVideoAutoPlay),
            (n.nextVideoAutoPlay = n.DNextVideoAutoPlay),
            (n.showControllerWhenVideoIsStopped = n.DhowControllerWhenVideoIsStopped)
        }),
        (n.setObjectPropsSettings = function (e) {
          for (var t in e)
            switch (t) {
              case "useDeepLinking":
                n.useDeepLinking = e.useDeepLinking
                break
              case "rightClickContextMenu":
                n.rightClickContextMenu = e.rightClickContextMenu
                break
              case "defaultItemWidth":
                n.defaultItemWidth = e.defaultItemWidth || 1527
                break
              case "defaultItemHeight":
                n.defaultItemHeight = e.defaultItemHeight || 859
                break
              case "buttonsAlignment":
                n.buttonsAlignment = e.buttonsAlignment || "in"
                break
              case "hideButtonsOnDrag":
                n.hideButtonsOnDrag = e.hideButtonsOnDrag
                break
              case "useDrag":
                n.useDrag = e.useDrag
                break
              case "mediaLazyLoading":
                n.mediaLazyLoading = e.mediaLazyLoading
                break
              case "captionPosition":
                n.captionPosition = e.captionPosition
                break
              case "caption":
                n.caption = e.caption
                break
              case "volume":
                n.volume = e.volume
                break
              case "showCaptionOnSmallScreens":
                n.showCaptionOnSmallScreens = e.showCaptionOnSmallScreens
                break
              case "animateCaption":
                n.animateCaption = e.animateCaption
                break
              case "captionAnimationType":
                ;(n.captionAnimationType = e.captionAnimationType || "motion"),
                  (n.caption_do.captionAnimationType = n.captionAnimationType),
                  (n.caption2_do.captionAnimationType = n.captionAnimationType)
                break
              case "backgroundColor":
                n.backgroundColor = e.backgroundColor || "#000000"
                break
              case "itemBorderColor":
                n.itemBorderColor = e.itemBorderColor || "transparent"
                break
              case "spaceBetweenBtns":
                n.spaceBetweenBtns = e.spaceBetweenBtns || 0
                break
              case "maxZoom":
                n.maxZoom = e.maxZoom || 1
                break
              case "buttonsHideDelay":
                ;(n.buttonsHideDelay = e.buttonsHideDelay || 3), (n.buttonsHideDelay *= 1e3), n.hider && (n.hider.hideDelay = n.buttonsHideDelay)
                break
              case "useAsModal":
                n.useAsModal = e.useAsModal
                break
              case "slideShowAutoPlay":
                n.slideShowAutoPlay = e.slideShowAutoPlay
                break
              case "slideShowAutoStop":
                n.slideShowAutoStop = e.slideShowAutoStop
                break
              case "useKeyboard":
                n.useKeyboard = e.useKeyboard
                break
              case "useDoubleClick":
                n.useDoubleClick = e.useDoubleClick
                break
              case "preloaderBkColor":
                n.preloaderBkColor = e.preloaderBkColor
                break
              case "slideShowBkColor":
                n.slideShowBkColor = e.slideShowBkColor
                break
              case "slideShowFillColor":
                n.slideShowFillColor = e.slideShowFillColor
                break
              case "preloaderFillColor":
                n.preloaderFillColor = e.preloaderFillColor
                break
              case "showCloseButton":
                n.showCloseButton = e.showCloseButton
              case "showFullscreenButton":
                n.showFullscreenButton = e.showFullscreenButton
                break
              case "shareButtons":
                ;(n.showShareButton = e.shareButtons.length), (n.shareButtons = e.shareButtons)
                break
              case "shareText":
                n.shareText = e.shareText
                break
              case "sharedURL":
                n.sharedURL = e.sharedURL
                break
              case "shareBackgroundColor":
                n.shareBackgroundColor = e.shareBackgroundColor
                break
              case "shareMainBackgroundColor":
                n.shareMainBackgroundColor = e.shareMainBackgroundColor
                break
              case "showZoomButton":
                n.showZoomButton = e.showZoomButton
                break
              case "showSlideShowButton":
                n.showSlideShowButton = e.showSlideShowButton
                break
              case "showCounter":
                n.showCounter = e.showCounter
                break
              case "showSlideShowAnimation":
                n.showSlideShowAnimation = e.showSlideShowAnimation
                break
              case "showNextAndPrevBtns":
                n.showNextAndPrevBtns = e.showNextAndPrevBtns
                break
              case "slideShowDelay":
                n.slideShowDelay = 1e3 * Math.round(e.slideShowDelay)
                break
              case "itemOffsetHeight":
                n.itemOffsetHeight = e.itemOffsetHeight
                break
              case "itemOffsetHeightButtonsTop":
                n.itemOffsetHeightButtonsTop = e.itemOffsetHeightButtonsTop
                break
              case "buttonsOffsetIn":
                n.buttonsOffsetIn = n.buttonsAlignment == o.BUTTONS_IN ? e.buttonsOffsetIn : e.buttonsOffsetOut
                break
              case "buttonsOffsetOut":
                n.buttonsOffsetOut = n.buttonsAlignment == o.BUTTONS_IN ? e.buttonsOffsetOut : e.buttonsOffsetIn
                break
              case "itemBorderSize":
                n.itemBorderSize = e.itemBorderSize
                break
              case "itemBackgroundColor":
                n.itemBkColor = e.itemBackgroundColor
                break
              case "showThumbnails":
                n.showThumbnails = e.showThumbnails
                break
              case "showThumbnailsIcon":
                n.showThumbnailsIcon = e.showThumbnailsIcon
                break
              case "thumbnailsOffsetBottom":
                n.thumbnailsOffsetBottom = e.thumbnailsOffsetBottom
                break
              case "thumbnailsHeight":
                n.thumbnailH = e.thumbnailsHeight
                break
              case "thumbnailsBorderSize":
                ;(n.thumbnailsBorderSize = e.thumbnailsBorderSize), n.thumbs_do && (n.thumbs_do.thumbnailsBorderSize = n.thumbnailsBorderSize)
                break
              case "spaceBetweenThumbnailsAndItem":
                n.spaceBetweenThumbnailsAndItem = e.spaceBetweenThumbnailsAndItem
                break
              case "spaceBetweenThumbnails":
                n.spaceBetweenThumbnails = e.spaceBetweenThumbnails
                break
              case "thumbnailsOverlayColor":
                n.thumbnailsOverlayColor = e.thumbnailsOverlayColor || "rgba(0,0,0,.6)"
                break
              case "thumbnailsBorderColor":
                n.thumbnailsBorderColor = e.thumbnailsBorderColor || "#FFFFFF"
                break
              case "videoAutoPlay":
                n.videoAutoPlay = e.videoAutoPlay
                break
              case "nextVideoAutoPlay":
                n.nextVideoAutoPlay = e.nextVideoAutoPlay
                break
              case "showControllerWhenVideoIsStopped":
                n.showControllerWhenVideoIsStopped = e.showControllerWhenVideoIsStopped
                break
              case "videoPosterBackgroundColor":
                ;(n._d.videoPosterBackgroundColor_str = e.videoPosterBackgroundColor || "transparent"),
                  n.video_do && (n.video_do.videoPoster_do.style().backgroundColor = n._d.videoPosterBackgroundColor_str)
                break
              case "audioControllerBackgroundColor":
                ;(n._d.audioControllerBackgroundColor_str = e.audioControllerBackgroundColor || "transparent"),
                  n.audio_do && n.audio_do.controller_do && (n.audio_do.controller_do.style().backgroundColor = n._d.audioControllerBackgroundColor_str)
            }
        }),
        (n.startMediaLazyLoading = function () {
          if (n.isShowed && !n.startMLL && n.mediaLazyLoading) {
            ;(n.lazyLoadedLeft = n.lazyLoadedRight = !1), n.lazy_ar || ((n.lazy_ar = []), n.lazy_ar.push({ guId: n.playlistDomOrObj, loaded: !1 }))
            for (var e = !1, t = 0; t < n.lazy_ar.length; t++) n.lazy_ar[t].guId == n.playlistDomOrObj && (e = !0)
            e || n.lazy_ar.push({ guId: n.playlistDomOrObj, loaded: !1 })
            for (var t = 0; t < n.lazy_ar.length; t++)
              if (n.lazy_ar[t].guId == n.playlistDomOrObj) {
                n.curLazy_ar = n.lazy_ar[t]
                break
              }
            if (!n.curLazy_ar.loaded) {
              n.rlzImg || ((n.rlzImg = new Image()), (n.llzImg = new Image())), (n.startMLL = !0)
              var o = n.gallery_ar[n.mId],
                s = n.gallery_ar.length
              ;(n.rightId = n.mId + 1), (n.leftId = n.mId - 1), n.startMediaLeftLL(), n.startMediaRightLL()
            }
          }
        }),
        (n.startMediaRightLL = function () {
          if (n.rlzImg) {
            var e = n.gallery_ar[n.rightId]
            return e
              ? void (n.rightId++,
                clearTimeout(n.MLRight_to),
                e.type == o.IMAGE || e.posterSrc
                  ? ((n.rlzImg.src = e.posterSrc ? e.posterSrc : e.src),
                    (n.rlzImg.onload = function () {
                      n.MLRight_to = setTimeout(function () {
                        n.startMediaRightLL()
                      }, 50)
                    }))
                  : n.startMediaRightLL())
              : ((n.lazyLoadedRight = !0), void (n.lazyLoadedRight && n.lazyLoadedLeft && (n.curLazy_ar.loaded = !0)))
          }
        }),
        (n.startMediaLeftLL = function () {
          if (n.llzImg) {
            var e = n.gallery_ar[n.leftId]
            return e
              ? void (n.leftId--,
                clearTimeout(n.MLLeft_to),
                e.type == o.IMAGE || e.posterSrc
                  ? ((n.llzImg.src = e.posterSrc ? e.posterSrc : e.src),
                    (n.llzImg.onload = function () {
                      n.MLLeft_to = setTimeout(function () {
                        n.startMediaLeftLL()
                      }, 50)
                    }))
                  : n.startMediaLeftLL())
              : ((n.lazyLoadedLeft = !0), void (n.lazyLoadedRight && n.lazyLoadedLeft && (n.curLazy_ar.loaded = !0)))
          }
        }),
        (n.stopMediaLazyLoading = function () {
          ;(n.startMLL = !1), clearTimeout(n.MLLeft_to), clearTimeout(n.MLRight_to), n.rlzImg && (n.rlzImg = null), n.llzImg && (n.llzImg = null)
        }),
        (n.showError = function (t) {
          ;(n.isLoading = !1),
            (n.hasError = !0),
            n.tm && n.tm.stop(),
            n.stopAnim(),
            n.hideDisable(),
            n.preloader_do.hide(!0),
            n.main_do.addChild(n.info_do),
            n.info_do.showText(t),
            n.dispatchEvent(o.ERROR, { error: t })
        }),
        (n.addListener = function (e, t) {
          if (n.listeners) {
            if (null == e) throw Error("type is required.")
            if ("object" == typeof e) throw Error("type must be of type String.")
            if ("function" != typeof t) throw Error("listener must be of type Function.")
            var o = {}
            ;(o.type = e), (o.listener = t), (o.target = n), n.listeners.events_ar.push(o)
          }
        }),
        (n.dispatchEvent = function (e, t) {
          if (null != n.listeners) {
            if (null == e) throw Error("type is required.")
            if ("object" == typeof e) throw Error("type must be of type String.")
            for (var o = 0, s = n.listeners.events_ar.length; o < s; o++)
              if (n.listeners.events_ar[o].target === n && n.listeners.events_ar[o].type === e) {
                if (t) for (var r in t) n.listeners.events_ar[o][r] = t[r]
                n.listeners.events_ar[o].listener.call(n, n.listeners.events_ar[o])
              }
          }
        }),
        (n.removeListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function." + e)
          for (var o = 0, s = n.listeners.events_ar.length; o < s; o++)
            if (n.listeners.events_ar[o].target === n && n.listeners.events_ar[o].type === e && n.listeners.events_ar[o].listener === t) {
              n.listeners.events_ar.splice(o, 1)
              break
            }
        }),
        n.init()
    }
    ;(o.inst = []),
      (o.setPrototype = function () {
        o.prototype = new FWDRVPEventDispatcher()
      }),
      (o.EVP_STOP = "evpStop"),
      (o.IFRAME = "iframe"),
      (o.IMAGE = "image"),
      (o.VIDEO = "video"),
      (o.YOUTUBE = "youtube"),
      (o.VIMEO = "vimeo"),
      (o.AUDIO = "audio"),
      (o.IFRAME = "iframe"),
      (o.HTML = "html"),
      (o.BUTTONS_IN = "in"),
      (o.BUTTONS_OUT = "out"),
      (o.BUTTONS_TOP = "top"),
      (o.FULLSCREEN = "fullscreen"),
      (o.NORMALSCREEN = "normalscreen"),
      (o.READY = "ready"),
      (o.SHOW_START = "showStart"),
      (o.SHOW_COMPLETE = "showComplete"),
      (o.HIDE_START = "hideStart"),
      (o.HIDE_COMPLETE = "hidecComplete"),
      (o.ERROR = "error"),
      (o.MAXIMIZE_COMPLETE = "maximizeComplete"),
      (o.UPDATE_ITEM = "updateItem"),
      (o.UPDATE_GALLERIES = "updateGalleries"),
      (t.FWDRL = o)
  })(window),
  (function (e) {
    var t = function (e, o, n, s, r) {
      "use strict"
      var a = this,
        d = t.prototype
      ;(a.captionAnimationType = o),
        (a.captionPosition = n),
        (a.borderSize = s),
        (a.finalW = 0),
        (a.finalH = 0),
        (a.finalY = 0),
        (a.type = r),
        "out" == a.type && (a.captionPosition = "bottom"),
        (a.isHiddenDone_bl = !0),
        (a.init = function () {
          a.setupMainContainers()
        }),
        (a.setupMainContainers = function () {
          ;(a.main_do = new FWDRLDO("div")),
            (a.main_do.style().width = "100%"),
            (a.main_do.style().height = "100%"),
            a.main_do.setBackfaceVisibility(),
            (a.text_do = new FWDRLDO("div")),
            (a.text_do.style().width = "100%"),
            a.text_do.setBackfaceVisibility(),
            (a.bk_do = new FWDRLDO("div")),
            (a.bk_do.screen.className = "background"),
            a.bk_do.setResizableSizeAfterParent(),
            a.bk_do.setBackfaceVisibility(),
            "in" == a.type && a.main_do.addChild(a.bk_do),
            a.main_do.addChild(a.text_do),
            a.addChild(a.main_do)
        }),
        (a.setText = function (e) {
          a.text_do.setInnerHTML(e), a.resizeAndPosition()
        }),
        (a.resizeAndPosition = function (e, t) {
          e && (a.finalW = e),
            (a.finalH = a.text_do.getHeight()),
            a.setFinalSize(),
            clearTimeout(a.resizeWithDelayId_to),
            (a.resizeWithDelayId_to = setTimeout(function () {
              a.setFinalSize(t)
            }, 91))
        }),
        (a.setFinalSize = function () {
          var t = e.cls + "-caption"
          "in" == a.type ? ((t += " in"), 550 >= e.stageH && (t += " small-screen")) : (t += " out"), (a.finalH = a.text_do.getHeight()), (a.finalW = e.itemHld_do.w)
          var o = e.itemHld_do.x,
            n = e.itemHld_do.y,
            s = e.itemHld_do.h
          e.showCationFirstTime && ((o = e.finalX), (n = e.finalY), (s = e.finalH), (a.finalW = e.finalW)),
            "in" == a.type
              ? ((a.finalW -= 2 * a.borderSize),
                (a.finalX = a.borderSize),
                "topin" == a.captionPosition
                  ? ((t += " topin"), (a.style().top = "0"), (a.style().bottom = "auto"), (a.text_do.style().top = 0), (a.text_do.style().bottom = "auto"))
                  : ((t += " bottomin"), (a.style().top = "auto"), (a.style().bottom = "0"), (a.text_do.style().top = "auto"), (a.text_do.style().bottom = 0)))
              : ((a.finalX = o), (a.finalY = n + s), a.setY(a.finalY), a.setWH()),
            (a.screen.className = t),
            "in" == a.type && (a.setWidth(a.finalW), a.main_do.setHeight(a.finalH), a.setHeight(a.finalH))
        }),
        (a.setWH = function () {
          a.setWidth(e.finalW), a.main_do.setHeight(a.finalH), a.setHeight(a.finalH), a.setX(e.finalX)
        }),
        (a.hide = function (e, t, o, n) {
          if (a.isShowed || t) {
            ;(a.isShowed = !1), (a.finalH = a.text_do.getHeight())
            var s = 1
            if ((o && (a.isShowedFirstTime_bl = !1), FWDAnimation.killTweensOf(a.main_do), !e)) a.hideComplete()
            else if ("motion" == a.captionAnimationType) {
              var r
              "topin" == a.captionPosition ? (r = -a.finalH) : (a.setOverflow("hidden"), "in" == a.type ? (r = a.finalH) : ((r = -a.finalH - 3), n && (a.setOverflow("visible"), (s = 0), (r *= -1)))),
                FWDAnimation.to(a.main_do, 0.8, {
                  y: r,
                  alpha: s,
                  ease: Expo.easeInOut,
                  onComplete: function () {
                    a.hideComplete(n)
                  },
                })
            } else FWDAnimation.to(a.main_do, 0.4, { alpha: 0, ease: Quint.easeOut, onComplete: a.hideComplete })
          }
        }),
        (a.hideComplete = function (e) {
          if ((a.setVisible(!1), "motion" == a.captionAnimationType)) {
            var t
            "topin" == a.captionPosition
              ? ((t = -a.finalH), a.setX(a.borderSize), a.setY(a.borderSize))
              : "in" == a.type
              ? ((t = a.finalH), a.setX(a.borderSize), a.setY(-a.borderSize))
              : ((t = -a.finalH), e && (a.setOverflow("visible"), (t *= -1))),
              a.main_do.setY(t)
          } else a.main_do.setAlpha(0)
        }),
        (a.show = function (t, o) {
          if (!a.isShowed)
            if (
              ((a.isShowed = !0),
              setTimeout(function () {
                a.setAlpha(1)
              }, 100),
              a.isShowedFirstTime_bl || ((a.isShowedFirstTime_bl = !0), a.hideComplete(), a.resizeAndPosition()),
              a.setVisible(!0),
              FWDAnimation.killTweensOf(a.main_do),
              "motion" == a.captionAnimationType)
            )
              o || 1 == a.main_do.alpha || a.main_do.setAlpha(1), t ? FWDAnimation.to(a.main_do, 0.8, { y: 0, alpha: 1, ease: Expo.easeInOut }) : a.main_do.setY(0)
            else {
              a.main_do.setY(0)
              var n = 0.4
              e.showFirstTimeDone && (n = 0), t ? FWDAnimation.to(a.main_do, 0.6, { alpha: 1, delay: n }) : a.main_do.setAlpha(1)
            }
        }),
        a.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div")
    }),
      (t.HIDE_COMPLETE = "infoWindowHideComplete"),
      (t.prototype = null),
      (e.FWDRLCaption = t)
  })(window),
  (function () {
    var t = function (e, o, n, s, r, a, d, l) {
      "use strict"
      var p = this,
        _ = t.prototype
      ;(p.n1Img = e),
        (p.s1Path_str = o),
        (p.n2Img = n),
        (p.s2Path_str = s),
        (p.html1 = r),
        (p.html2 = a),
        (p.nClass = d),
        (p.sClass = l),
        p.n1Img && ((p.buttonWidth = p.n1Img.width), (p.buttonHeight = p.n1Img.height)),
        (p.currentState = 1),
        (p.isMbl = FWDRLUtils.isMbl),
        (p.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent),
        (p.allowToCreateSecondButton_bl = !p.isMbl || p.hasPointerEvent_bl),
        (p.init = function () {
          p.setButtonMode(!0), p.setupMainContainers()
        }),
        (p.setupMainContainers = function () {
          if (((p.buttonsHolder_do = new FWDRLDO("div")), p.addChild(p.buttonsHolder_do), r))
            (p.firstButton_do = new FWDRLDO("div")),
              (p.n1_do = new FWDEVPDO("div")),
              p.n1_do.setInnerHTML(p.html1),
              p.firstButton_do.addChild(p.n1_do),
              (p.secondButton_do = new FWDRLDO("div")),
              (p.n2_do = new FWDEVPDO("div")),
              p.n2_do.setInnerHTML(p.html2),
              p.secondButton_do.addChild(p.n2_do),
              p.buttonsHolder_do.addChild(p.secondButton_do),
              p.buttonsHolder_do.addChild(p.firstButton_do),
              p.setNormalState(),
              setTimeout(function () {
                ;(p.buttonWidth = parseInt(getComputedStyle(p.n1_do.screen).getPropertyValue("width"))),
                  (p.buttonHeight = parseInt(getComputedStyle(p.n1_do.screen).getPropertyValue("height"))),
                  p.setFinalSize()
              }, 5)
          else {
            ;(p.firstButton_do = new FWDRLDO("div")),
              p.addChild(p.firstButton_do),
              (p.n1_do = new FWDRLDO("img")),
              p.n1_do.setScreen(p.n1Img),
              p.firstButton_do.addChild(p.n1_do),
              (p.s1_do = new FWDRLDO("img"))
            var e = new Image()
            ;(e.src = p.s1Path_str),
              p.s1_do.setScreen(e),
              p.s1_do.setWidth(p.buttonWidth),
              p.s1_do.setHeight(p.buttonHeight),
              p.s1_do.setAlpha(0),
              p.firstButton_do.addChild(p.s1_do),
              p.firstButton_do.setWidth(p.buttonWidth),
              p.firstButton_do.setHeight(p.buttonHeight),
              (p.secondButton_do = new FWDRLDO("div")),
              p.addChild(p.secondButton_do),
              (p.n2_do = new FWDRLDO("img")),
              p.n2_do.setScreen(p.n2Img),
              p.secondButton_do.addChild(p.n2_do),
              (p.s2_do = new FWDRLDO("img"))
            var t = new Image()
            ;(t.src = p.s2Path_str),
              p.s2_do.setScreen(t),
              p.s2_do.setWidth(p.buttonWidth),
              p.s2_do.setHeight(p.buttonHeight),
              p.s2_do.setAlpha(0),
              p.secondButton_do.addChild(p.s2_do),
              p.buttonsHolder_do.addChild(p.secondButton_do),
              p.buttonsHolder_do.addChild(p.firstButton_do),
              p.setFinalSize()
          }
          p.isMbl
            ? p.hasPointerEvent_bl
              ? (p.screen.addEventListener("pointerdown", p.onMouseUp), p.screen.addEventListener("pointerover", p.onMouseOver), p.screen.addEventListener("pointerout", p.onMouseOut))
              : (p.screen.addEventListener("toustart", p.onDown), p.screen.addEventListener("touchend", p.onMouseUp))
            : p.screen.addEventListener &&
              (p.screen.addEventListener("mouseover", p.onMouseOver), p.screen.addEventListener("mouseout", p.onMouseOut), p.screen.addEventListener("mouseup", p.onMouseUp))
        }),
        (p.setFinalSize = function () {
          p.secondButton_do.setX(-50),
            p.setWidth(p.buttonWidth),
            p.setHeight(p.buttonHeight),
            p.buttonsHolder_do.setWidth(p.buttonWidth),
            p.buttonsHolder_do.setHeight(p.buttonHeight),
            p.secondButton_do.setWidth(p.buttonWidth),
            p.secondButton_do.setHeight(p.buttonHeight)
        }),
        (p.onMouseOver = function (o) {
          p.dispatchEvent(t.SHOW_TOOLTIP, { e: o })
          p.isDisabled_bl ||
            p.isSelectedState_bl ||
            p.isHoverDisabled_bl ||
            ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType) && (p.dispatchEvent(t.MOUSE_OVER, { e: o }), p.setSelectedState(!0)))
        }),
        (p.onMouseOut = function (o) {
          p.isDisabled_bl ||
            !p.isSelectedState_bl ||
            p.isHoverDisabled_bl ||
            ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType) && (p.setNormalState(), p.dispatchEvent(t.MOUSE_OUT)))
        }),
        (p.onDown = function (t) {
          t.preventDefault && t.preventDefault()
        }),
        (p.onMouseUp = function (o) {
          p.isDisabled_bl || 2 == o.button || (o.preventDefault && o.preventDefault(), !p.isMbl && p.onMouseOver(o, !1), p.dispatchEvent(t.MOUSE_UP, { e: o }))
        }),
        (p.toggleButton = function () {
          1 == p.currentState
            ? (p.firstButton_do.setX(-50), p.secondButton_do.setX(0), (p.currentState = 0), p.dispatchEvent(t.FIRST_BUTTON_CLICK))
            : (p.firstButton_do.setX(-50), p.secondButton_do.setX(0), (p.currentState = 1), p.dispatchEvent(t.SECOND_BUTTON_CLICK))
        }),
        (p.setButtonState = function (e) {
          1 == e ? (p.firstButton_do.setX(0), p.secondButton_do.setX(-50), (p.currentState = 1)) : (p.firstButton_do.setX(-50), p.secondButton_do.setX(0), (p.currentState = 0))
        }),
        (p.setNormalState = function () {
          ;(p.isSelectedState_bl = !1),
            p.html1
              ? ((p.n1_do.screen.className = p.nClass), (p.n2_do.screen.className = p.nClass))
              : (FWDAnimation.killTweensOf(p.s1_do),
                FWDAnimation.killTweensOf(p.s2_do),
                FWDAnimation.to(p.s1_do, 0.5, { alpha: 0, ease: Expo.easeOut }),
                FWDAnimation.to(p.s2_do, 0.5, { alpha: 0, ease: Expo.easeOut }))
        }),
        (p.setSelectedState = function () {
          ;(p.isSelectedState_bl = !0),
            p.html1
              ? ((p.n1_do.screen.className = p.nClass + " " + p.sClass), (p.n2_do.screen.className = p.nClass + " " + p.sClass))
              : (FWDAnimation.killTweensOf(p.s1_do),
                FWDAnimation.killTweensOf(p.s2_do),
                FWDAnimation.to(p.s1_do, 0.5, { alpha: 1, delay: 0.1, ease: Expo.easeOut }),
                FWDAnimation.to(p.s2_do, 0.5, { alpha: 1, delay: 0.1, ease: Expo.easeOut }))
        }),
        (p.disable = function () {
          ;(p.isDisabled_bl = !0), p.setButtonMode(!1), FWDAnimation.to(p.n1_do, 0.6, { alpha: 0.4 })
        }),
        (p.enable = function () {
          ;(p.isDisabled_bl = !1), p.setButtonMode(!0), FWDAnimation.to(p.n1_do, 0.6, { alpha: 1 })
        }),
        (p.setHideDrag = function (e) {
          FWDAnimation.killTweensOf(p.n1_do),
            FWDAnimation.killTweensOf(p.n2_do),
            e
              ? (FWDAnimation.to(p.n1_do, 0.4, { alpha: 0.3, delay: 0.4 }), FWDAnimation.to(p.n2_do, 0.4, { alpha: 0.3, delay: 0.4 }))
              : (FWDAnimation.to(p.n1_do, 0.4, { alpha: 1 }), FWDAnimation.to(p.n2_do, 0.4, { alpha: 1 }))
        }),
        p.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div")
    }),
      (t.FIRST_BUTTON_CLICK = "onFirstClick"),
      (t.SECOND_BUTTON_CLICK = "secondButtonOnClick"),
      (t.SHOW_TOOLTIP = "showToolTip"),
      (t.MOUSE_OVER = "onMouseOver"),
      (t.MOUSE_OUT = "onMouseOut"),
      (t.MOUSE_UP = "onMouseUp"),
      (t.CLICK = "onClick"),
      (t.prototype = null),
      (window.FWDRLComplexButton = t)
  })(window),
  (function () {
    window.FWDRLContextMenu = function (t, e) {
      "use strict"
      var o = this
      ;(o.prt = t),
        (o.type = e),
        (o.url = "http://www.webdesign-flash.ro"),
        (o.init = function () {
          o.updateParent(o.prt)
        }),
        (o.updateParent = function (e) {
          o.prt && (o.prt.screen.addEventListener ? o.prt.screen.removeEventListener("contextmenu", o.contextMenuHandler) : o.prt.screen.detachEvent("oncontextmenu", o.contextMenuHandler)),
            (o.prt = e),
            o.prt.screen.addEventListener ? o.prt.screen.addEventListener("contextmenu", o.contextMenuHandler) : o.prt.screen.attachEvent("oncontextmenu", o.contextMenuHandler)
        }),
        (o.contextMenuHandler = function (t) {
          if (!o.isDisabled_bl)
            return "disabled" == o.type
              ? !!t.preventDefault && void t.preventDefault()
              : "default" == o.type || -1 == o.url.indexOf("sh.r")
              ? void 0
              : (o.setupMenus(),
                o.prt.addChild(o.menu_do),
                o.menu_do.setVisible(!0),
                o.positionButtons(t),
                window.addEventListener
                  ? window.addEventListener("mousedown", o.contextMenuWindowOnMouseDownHandler)
                  : document.documentElement.attachEvent("onclick", o.contextMenuWindowOnMouseDownHandler),
                !!t.preventDefault && void t.preventDefault())
        }),
        (o.contextMenuWindowOnMouseDownHandler = function (t) {
          var e = FWDRLUtils.getViewportMouseCoordinates(t),
            n = e.screenX,
            s = e.screenY
          FWDRLUtils.hitTest(o.menu_do.screen, n, s) ||
            (window.removeEventListener
              ? window.removeEventListener("mousedown", o.contextMenuWindowOnMouseDownHandler)
              : document.documentElement.detachEvent("onclick", o.contextMenuWindowOnMouseDownHandler),
            o.menu_do.setX(-500))
        }),
        (o.setupMenus = function () {
          o.menu_do ||
            ((o.menu_do = new FWDRLDO("div")),
            o.menu_do.setX(-500),
            (o.menu_do.style().width = "100%"),
            (o.nTxt_do = new FWDRLDO("div")),
            (o.nTxt_do.style().fontFamily = "Arial, Helvetica, sans-serif"),
            (o.nTxt_do.style().padding = "4px"),
            (o.nTxt_do.style().fontSize = "12px"),
            (o.nTxt_do.style().color = "#000000"),
            (o.nTxt_do.style().whiteSpace = "nowrap"),
            o.nTxt_do.setInnerHTML("&#0169; made by FWD"),
            o.nTxt_do.setBkColor("#FFFFFF"),
            (o.sTxt_do = new FWDRLDO("div")),
            (o.sTxt_do.style().fontFamily = "Arial, Helvetica, sans-serif"),
            (o.sTxt_do.style().padding = "4px"),
            (o.sTxt_do.style().fontSize = "12px"),
            (o.sTxt_do.style().color = "#FFFFFF"),
            (o.sTxt_do.style().whiteSpace = "nowrap"),
            o.sTxt_do.setInnerHTML("&#0169; made by FWD"),
            o.sTxt_do.setBkColor("#000000"),
            o.sTxt_do.setAlpha(0),
            (o.over_do = new FWDRLDO("div")),
            o.over_do.setBkColor("#FF0000"),
            o.over_do.setAlpha(0),
            o.menu_do.addChild(o.nTxt_do),
            o.menu_do.addChild(o.sTxt_do),
            o.menu_do.addChild(o.over_do),
            o.prt.addChild(o.menu_do),
            o.over_do.setWidth(o.sTxt_do.getWidth()),
            o.menu_do.setWidth(o.sTxt_do.getWidth()),
            o.over_do.setHeight(o.sTxt_do.getHeight()),
            o.menu_do.setHeight(o.sTxt_do.getHeight()),
            o.menu_do.setVisible(!1),
            o.menu_do.setButtonMode(!0),
            (o.menu_do.screen.onmouseover = o.mouseOverHandler),
            (o.menu_do.screen.onmouseout = o.mouseOutHandler),
            (o.menu_do.screen.onclick = o.onClickHandler))
        }),
        (o.mouseOverHandler = function () {
          ;-1 == o.url.indexOf("w.we") && (o.menu_do.visible = !1), FWDAnimation.to(o.nTxt_do, 0.8, { alpha: 0, ease: Expo.easeOut }), FWDAnimation.to(o.sTxt_do, 0.8, { alpha: 1, ease: Expo.easeOut })
        }),
        (o.mouseOutHandler = function () {
          FWDAnimation.to(o.nTxt_do, 0.8, { alpha: 1, ease: Expo.easeOut }), FWDAnimation.to(o.sTxt_do, 0.8, { alpha: 0, ease: Expo.easeOut })
        }),
        (o.onClickHandler = function () {
          window.open(o.url, "_blank")
        }),
        (o.positionButtons = function (t) {
          var e = FWDRLUtils.getViewportMouseCoordinates(t),
            n = e.screenX - o.prt.getGlobalX(),
            s = e.screenY - o.prt.getGlobalY(),
            r = n + 2,
            a = s + 2
          r > o.prt.getWidth() - o.menu_do.getWidth() - 2 && (r = n - o.menu_do.getWidth() - 2),
            a > o.prt.getHeight() - o.menu_do.getHeight() - 2 && (a = s - o.menu_do.getHeight() - 2),
            o.menu_do.setX(r),
            o.menu_do.setY(a)
        }),
        (o.disable = function () {
          o.isDisabled_bl = !0
        }),
        (o.enable = function () {
          o.isDisabled_bl = !1
        }),
        (o.update = function (e) {
          o.type = e
        }),
        o.init()
    }
  })(window),
  (function (t) {
    var o = function (e) {
      "use strict"
      var n = this,
        s = o.prototype
      ;(n.props_obj = e),
        (n.skinPaths_ar = []),
        (n.images_ar = []),
        (n.cats_ar = []),
        (n.countLoadedSkinImages = 0),
        (n.init = function () {
          n.parseProperties()
        }),
        (n.parseProperties = function () {
          return (
            (n.mainFolderPath = n.props_obj.mainFolderPath),
            n.mainFolderPath
              ? void (n.mainFolderPath.lastIndexOf("/") + 1 != n.mainFolderPath.length && (n.mainFolderPath += "/"),
                (n.skin = n.mainFolderPath + "assets/"),
                (n.wrningIconPath_str = n.skin + "warning.png"),
                (n.useVectorIcons = n.props_obj.useVectorIcons),
                (n.skinPaths_ar = [
                  { img: (n.playN_img = new Image()), src: n.skin + "play-button.png" },
                  { img: (n.nextN_img = new Image()), src: n.skin + "next-button.png" },
                  { img: (n.prevN_img = new Image()), src: n.skin + "prev-button.png" },
                  { img: (n.closeN_img = new Image()), src: n.skin + "close-button.png" },
                  { img: (n.fullScreenN_img = new Image()), src: n.skin + "fullscreen-button.png" },
                  { img: (n.normalScreenN_img = new Image()), src: n.skin + "normalscreen-button.png" },
                  { img: (n.maximizeN_img = new Image()), src: n.skin + "maximize-button.png" },
                  { img: (n.minimizeN_img = new Image()), src: n.skin + "minimize-button.png" },
                  { img: (n.pauseN_img = new Image()), src: n.skin + "pause-button.png" },
                  { img: (n.showShareImage_img = new Image()), src: n.skin + "show-share-button.png" },
                  { img: (n.facebookN_img = new Image()), src: n.skin + "facebook-button.png" },
                  { img: (n.twitterN_img = new Image()), src: n.skin + "twitter-button.png" },
                  { img: (n.linkedinN_img = new Image()), src: n.skin + "linkedin-button.png" },
                  { img: (n.tumblrN_img = new Image()), src: n.skin + "tumblr-button.png" },
                  { img: (n.pinterestN_img = new Image()), src: n.skin + "pinterest-button.png" },
                  { img: (n.redditN_img = new Image()), src: n.skin + "reddit-button.png" },
                  { img: (n.bufferN_img = new Image()), src: n.skin + "buffer-button.png" },
                  { img: (n.diggN_img = new Image()), src: n.skin + "digg-button.png" },
                  { img: (n.bloggerN_img = new Image()), src: n.skin + "blogger-button.png" },
                ]),
                (n.prevSPath = n.skin + "prev-button-over.png"),
                (n.nextSPath = n.skin + "next-button-over.png"),
                (n.closeSPath = n.skin + "close-button-over.png"),
                (n.fullScreenS = n.skin + "fullscreen-button-over.png"),
                (n.normalScreenS = n.skin + "normalscreen-button-over.png"),
                (n.maximizeSPath = n.skin + "maximize-button-over.png"),
                (n.minimizeSPath = n.skin + "minimize-button-over.png"),
                (n.playS = n.skin + "play-button-over.png"),
                (n.pauseS = n.skin + "pause-button-over.png"),
                (n.showShareImageSPath = n.skin + "show-share-button-over.png"),
                (n.facebookSPath = n.skin + "facebook-button-over.png"),
                (n.twitterSPath = n.skin + "twitter-button-over.png"),
                (n.linkedinSPath = n.skin + "linkedin-button-over.png"),
                (n.tumblrSPath = n.skin + "tumblr-button-over.png"),
                (n.pinterestSPath = n.skin + "pinterest-button-over.png"),
                (n.redditSPath = n.skin + "reddit-button-over.png"),
                (n.bufferSPath = n.skin + "buffer-button-over.png"),
                (n.diggSPath = n.skin + "digg-button-over.png"),
                (n.bloggerSPath = n.skin + "blogger-button-over.png"),
                (n.videoIconPath = n.skin + "thumb-play-icon.png"),
                (n.totalGraphics = n.skinPaths_ar.length),
                n.useVectorIcons
                  ? setTimeout(function () {
                      n.dispatchEvent(o.SKIN_LOAD_COMPLETE)
                    }, 50)
                  : n.loadSkin())
              : void setTimeout(function () {
                  null == n ||
                    ((errorMessage_str = "The <font color='#FF0000'>mainFolderPath</font> property is not defined in the constructor function!"),
                    n.dispatchEvent(o.LOAD_ERROR, { text: errorMessage_str }))
                }, 100)
          )
        }),
        (n.loadSkin = function () {
          for (var e = 0, t, o; e < n.totalGraphics; e++)
            (t = n.skinPaths_ar[e].img), (o = n.skinPaths_ar[e].src), (t.onload = n.onSkinLoadHandler), (t.onerror = n.onSkinLoadErrorHandler), (t.src = o)
        }),
        (n.onSkinLoadHandler = function () {
          n.countLoadedSkinImages++, n.countLoadedSkinImages == n.totalGraphics && n.dispatchEvent(o.SKIN_LOAD_COMPLETE)
        }),
        (n.onSkinLoadErrorHandler = function (s) {
          if (FWDRLUtils.isIEAndLessThen9) var e = "Graphics image not found!"
          else var e = "The skin icon with label <font color='#FF0000'>" + s.target.src + "</font> can't be loaded."
          t.console && console.log(s)
          var r = { text: e }
          setTimeout(function () {
            n.dispatchEvent(o.LOAD_ERROR, r)
          }, 100)
        }),
        n.init()
    }
    ;(o.setPrototype = function () {
      o.prototype = new FWDRLEventDispatcher()
    }),
      (o.prototype = null),
      (o.PRELOADER_LOAD_DONE = "onPreloaderLoadDone"),
      (o.LOAD_DONE = "onLoadDone"),
      (o.LOAD_ERROR = "onLoadError"),
      (o.IMAGE_LOADED = "onImageLoaded"),
      (o.SKIN_LOAD_COMPLETE = "onSkinLoadComplete"),
      (o.SKIN_PROGRESS = "onSkinProgress"),
      (o.IMAGES_PROGRESS = "onImagesPogress"),
      (o.PLAYLIST_LOAD_COMPLETE = "onPlaylistLoadComplete"),
      (t.FWDRLData = o)
  })(window),
  "undefined" == typeof fwdal)
)
  var fwdal = {}
"undefined" == typeof fwdal.util && (fwdal.util = {}),
  (fwdal.util.Browser = new (function () {
    var t = navigator.userAgent.toLowerCase(),
      o = /webkit/.test(t),
      n = /opera/.test(t),
      e = /msie/.test(t) && !/opera/.test(t),
      s = /mozilla/.test(t) && !/(compatible|webkit)/.test(t),
      r = parseFloat(e ? t.substr(t.indexOf("msie") + 4) : (t.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/) || [0, "0"])[1])
    ;(this.toString = function () {
      return "[class Browser]"
    }),
      (this.getVersion = function () {
        return r
      }),
      (this.isMSIE = function () {
        return e
      }),
      (this.isSafari = function () {
        return o
      }),
      (this.isOpera = function () {
        return n
      }),
      (this.isMozilla = function () {
        return s
      })
  })()),
  (fwdal.util.Events = new (function () {
    var t = window,
      o = document,
      s = [],
      n = fwdal.util,
      r = n.Browser,
      e = r.isMSIE(),
      a = r.isSafari()
    ;(this.toString = function () {
      return "[class Events]"
    }),
      (this.addListener = function (t, o, n) {
        s.push({ o: t, t: o, l: n }), (o == "DOMContentLoaded" && (e || a)) || (t.addEventListener ? t.addEventListener(o, n, !1) : t.attachEvent && t.attachEvent("on" + o, n))
      }),
      (this.removeListener = function (t, r, d) {
        for (var n = 0, p; (p = s[n]); n++)
          if (p.o == t && p.t == r && p.l == d) {
            s.splice(n, 1)
            break
          }
        ;(r == "DOMContentLoaded" && (e || a)) || (t.removeEventListener ? t.removeEventListener(r, d, !1) : t.detachEvent && t.detachEvent("on" + r, d))
      })
    var d = function () {
      for (var e = 0, t; (t = s[e]); e++) "DOMContentLoaded" != t.t && n.Events.removeListener(t.o, t.t, t.l)
    }
    ;(e || a) &&
      (function () {
        try {
          ;((e && o.body) || !/loaded|complete/.test(o.readyState)) && o.documentElement.doScroll("left")
        } catch (e) {
          return setTimeout(arguments.callee, 0)
        }
        for (var t = 0, n; (n = s[t]); t++) "DOMContentLoaded" == n.t && n.l.call(null)
      })(),
      e &&
        t.attachEvent &&
        t.attachEvent("onbeforeunload", function () {
          if ("interactive" == o.readyState) {
            function e() {
              o.detachEvent("onstop", e), d()
            }
            o.attachEvent("onstop", e),
              t.setTimeout(function () {
                o.detachEvent("onstop", e)
              }, 0)
          }
        }),
      this.addListener(t, "unload", d)
  })()),
  (fwdal.util.Functions = new (function () {
    ;(this.toString = function () {
      return "[class Functions]"
    }),
      (this.bind = function (e, t) {
        for (var o = 2, n = [], s; (s = arguments[o]); o++) n.push(s)
        return function () {
          return e.apply(t, n)
        }
      })
  })())
var FWDRLEvent = function (e) {
  ;(this.toString = function () {
    return "[object FWDRLEvent]"
  }),
    (this.type = e),
    (this.target = FWDRLDL),
    (this.value = FWDRLDL.getValue()),
    (this.path = FWDRLDL.getPath()),
    (this.pathNames = FWDRLDL.getPathNames()),
    (this.parameters = {})
  for (var t = FWDRLDL.getParameterNames(), o = 0, n = t.length; o < n; o++) this.parameters[t[o]] = FWDRLDL.getParameter(t[o])
  this.parameterNames = t
}
;(FWDRLEvent.INIT = "init"), (FWDRLEvent.CHANGE = "change"), (FWDRLEvent.INTERNAL_CHANGE = "internalChange"), (FWDRLEvent.EXTERNAL_CHANGE = "externalChange")
var FWDRLDL = new (function () {
  "use strict"
  var _getHash = function () {
      var e = _l.href.indexOf("#")
      return -1 == e ? "" : _ec(_dc(_l.href.substr(e + 1)))
    },
    _getWindow = function () {
      try {
        return top.document, top
      } catch (t) {
        return window
      }
    },
    _strictCheck = function (e, t) {
      return _opts.strict && (e = t ? ("/" == e.substr(0, 1) ? e : "/" + e) : "" == e ? "/" : e), e
    },
    _ieLocal = function (e, t) {
      return _msie && "file:" == _l.protocol ? (t ? _value.replace(/\?/, "%3F") : _value.replace(/%253F/, "?")) : e
    },
    _searchScript = function (e) {
      if (e.childNodes) for (var t = 0, o = e.childNodes.length, n; t < o; t++) if ((e.childNodes[t].src && (_url = e.childNodes[t].src + ""), (n = _searchScript(e.childNodes[t])))) return n
    },
    _titleCheck = function () {
      _d.title != _title && -1 != _d.title.indexOf("#") && (_d.title = _title)
    },
    _listen = function () {
      if (!_silent) {
        var e = _getHash(),
          t = _value != e
        _safari && 523 > _version
          ? _length != _h.length && ((_length = _h.length), typeof _stack[_length - 1] != UNDEFINED && (_value = _stack[_length - 1]), _update.call(this, !1))
          : _msie && t
          ? 7 > _version
            ? _l.reload()
            : this.setValue(e)
          : t && ((_value = e), _update.call(this, !1)),
          _msie && _titleCheck.call(this)
      }
    },
    _bodyClick = function (e) {
      if (0 < _popup.length) {
        var popup = window.open(_popup[0], _popup[1], eval(_popup[2]))
        typeof _popup[3] != UNDEFINED && eval(_popup[3])
      }
      _popup = []
    },
    _swfChange = function () {
      for (var e = 0, t = FWDRLDL.getValue(), o = "setFWDRLAddressValue", n, s; (n = _ids[e]); e++)
        if (((s = document.getElementById(n)), !s)) (s = document[n]) && typeof s[o] != UNDEFINED && s[o](t)
        else if (s.parentNode && typeof s.parentNode.so != UNDEFINED) s.parentNode.so.call(o, t)
        else {
          if (!(s && typeof s[o] != UNDEFINED)) {
            var r = s.getElementsByTagName("object"),
              a = s.getElementsByTagName("embed")
            s = r[0] && typeof r[0][o] != UNDEFINED ? r[0] : a[0] && typeof a[0][o] != UNDEFINED ? a[0] : null
          }
          s && s[o](t)
        }
    },
    _jsDispatch = function (e) {
      this.dispatchEvent(new FWDRLEvent(e)), (e = e.substr(0, 1).toUpperCase() + e.substr(1)), typeof this["on" + e] == FUNCTION && this["on" + e]()
    },
    _jsInit = function () {
      _util.Browser.isSafari() && _d.body.addEventListener("click", _bodyClick), _jsDispatch.call(this, "init")
    },
    _jsChange = function () {
      _swfChange(), _jsDispatch.call(this, "change")
    },
    _update = function (e) {
      _jsChange.call(this), e ? _jsDispatch.call(this, "internalChange") : _jsDispatch.call(this, "externalChange"), _st(_functions.bind(_track, this), 10)
    },
    _track = function () {
      var e = (_l.pathname + (/\/$/.test(_l.pathname) ? "" : "/") + this.getValue()).replace(/\/\//, "/").replace(/^\/$/, ""),
        t = _t[_opts.tracker]
      typeof t == FUNCTION
        ? t(e)
        : typeof _t.pageTracker != UNDEFINED && typeof _t.pageTracker._trackPageview == FUNCTION
        ? _t.pageTracker._trackPageview(e)
        : typeof _t.urchinTracker == FUNCTION && _t.urchinTracker(e)
    },
    _htmlWrite = function () {
      var e = _frame.contentWindow.document
      e.open(), e.write("<html><head><title>" + _d.title + "</title><script>var " + ID + ' = "' + _getHash() + '";</script></head></html>'), e.close()
    },
    _htmlLoad = function () {
      var e = _frame.contentWindow,
        t = e.location.href
      ;(_value = typeof e[ID] == UNDEFINED ? "" : e[ID]), _value != _getHash() && (_update.call(FWDRLDL, !1), (_l.hash = _ieLocal(_value, TRUE)))
    },
    _load = function () {
      if (!_loaded) {
        if (((_loaded = TRUE), _msie && 8 > _version)) {
          var e = _d.getElementsByTagName("frameset")[0]
          ;(_frame = _d.createElement((e ? "" : "i") + "frame")),
            e
              ? (e.insertAdjacentElement("beforeEnd", _frame),
                (e[e.cols ? "cols" : "rows"] += ",0"),
                (_frame.src = "javascript:false"),
                (_frame.noResize = !0),
                (_frame.frameBorder = _frame.frameSpacing = 0))
              : ((_frame.src = "javascript:false"), (_frame.style.display = "none"), _d.body.insertAdjacentElement("afterBegin", _frame)),
            _st(function () {
              _events.addListener(_frame, "load", _htmlLoad), typeof _frame.contentWindow[ID] == UNDEFINED && _htmlWrite()
            }, 50)
        } else
          _safari &&
            (418 > _version && ((_d.body.innerHTML += '<form id="' + ID + '" style="position:absolute;top:-9999px;" method="get"></form>'), (_form = _d.getElementById(ID))),
            typeof _l[ID] == UNDEFINED && (_l[ID] = {}),
            typeof _l[ID][_l.pathname] != UNDEFINED && (_stack = _l[ID][_l.pathname].split(",")))
        _st(
          _functions.bind(function () {
            _jsInit.call(_s), _jsChange.call(_s), _track.call(_s)
          }, _s),
          1
        ),
          _msie && 8 <= _version ? ((_d.body.onhashchange = _functions.bind(_listen, _s)), _si(_functions.bind(_titleCheck, _s), 50)) : _si(_functions.bind(_listen, _s), 50)
      }
    },
    ID = "swfaddress",
    FUNCTION = "function",
    UNDEFINED = "undefined",
    TRUE = !0,
    FALSE = !1,
    _util = fwdal.util,
    _browser = _util.Browser,
    _events = _util.Events,
    _functions = _util.Functions,
    _version = _browser.getVersion(),
    _msie = _browser.isMSIE(),
    _mozilla = _browser.isMozilla(),
    _opera = _browser.isOpera(),
    _safari = _browser.isSafari(),
    _supported = TRUE,
    _t = _getWindow(),
    _d = _t.document,
    _h = _t.history,
    _l = _t.location,
    _si = setInterval,
    _st = setTimeout,
    _dc = decodeURI,
    _ec = encodeURI,
    _title = _d.title,
    _length = _h.length,
    _silent = FALSE,
    _loaded = FALSE,
    _justset = TRUE,
    _juststart = TRUE,
    _ref = this,
    _stack = [],
    _ids = [],
    _popup = [],
    _listeners = {},
    _value = _getHash(),
    _opts = { history: TRUE, strict: TRUE },
    _frame,
    _form,
    _url
  _msie && _d.documentMode && _d.documentMode != _version && (_version = 8 == _d.documentMode ? 8 : 7)
  var _s = this
  if (_supported) {
    _opera && (history.navigationMode = "compatible")
    for (var i = 1; i < _length; i++) _stack.push("")
    _stack.push(_getHash()), _msie && _l.hash != _getHash() && (_l.hash = "#" + _ieLocal(_getHash(), TRUE)), _searchScript(document)
    var _qi = _url ? _url.indexOf("?") : -1
    if (-1 != _qi)
      for (var params = _url.substr(_qi + 1).split("&"), i = 0, param, p; (p = params[i]); i++)
        (param = p.split("=")),
          /^(history|strict)$/.test(param[0]) && (_opts[param[0]] = isNaN(param[1]) ? /^(true|yes)$/i.test(param[1]) : 0 != parseInt(param[1])),
          /^tracker$/.test(param[0]) && (_opts[param[0]] = param[1])
    _msie && _titleCheck.call(this),
      window == _t && _events.addListener(document, "DOMContentLoaded", _functions.bind(_load, this)),
      _events.addListener(_t, "load", _functions.bind(_load, this)),
      "complete" == document.readyState && _load()
  } else
    (!_supported && -1 != _l.href.indexOf("#")) || (_safari && 418 > _version && -1 != _l.href.indexOf("#") && "" != _l.search)
      ? (_d.open(), _d.write('<html><head><meta http-equiv="refresh" content="0;url=' + _l.href.substr(0, _l.href.indexOf("#")) + '" /></head></html>'), _d.close())
      : _track()
  ;(this.toString = function () {
    return "[class FWDRLDL]"
  }),
    (this.back = function () {
      _h.back()
    }),
    (this.forward = function () {
      _h.forward()
    }),
    (this.up = function () {
      var e = this.getPath()
      this.setValue(e.substr(0, e.lastIndexOf("/", e.length - 2) + ("/" == e.substr(e.length - 1) ? 1 : 0)))
    }),
    (this.go = function (e) {
      _h.go(e)
    }),
    (this.href = function (e, t) {
      ;(t = typeof t == UNDEFINED ? "_self" : t), "_self" == t ? (self.location.href = e) : "_top" == t ? (_l.href = e) : "_blank" == t ? window.open(e) : (_t.frames[t].location.href = e)
    }),
    (this.popup = function (url, name, options, handler) {
      try {
        var popup = window.open(url, name, eval(options))
        typeof handler != UNDEFINED && eval(handler)
      } catch (e) {}
      _popup = arguments
    }),
    (this.getIds = function () {
      return _ids
    }),
    (this.getId = function () {
      return _ids[0]
    }),
    (this.setId = function (e) {
      _ids[0] = e
    }),
    (this.addId = function (e) {
      this.removeId(e), _ids.push(e)
    }),
    (this.removeId = function (e) {
      for (var t = 0; t < _ids.length; t++)
        if (e == _ids[t]) {
          _ids.splice(t, 1)
          break
        }
    }),
    (this.addEventListener = function (e, t) {
      typeof _listeners[e] == UNDEFINED && (_listeners[e] = []), _listeners[e].push(t)
    }),
    (this.removeEventListener = function (e, t) {
      if (typeof _listeners[e] != UNDEFINED) {
        for (var o = 0, n; (n = _listeners[e][o]) && !(n == t); o++);
        _listeners[e].splice(o, 1)
      }
    }),
    (this.dispatchEvent = function (e) {
      if (this.hasEventListener(e.type)) {
        e.target = this
        for (var t = 0, o; (o = _listeners[e.type][t]); t++) o(e)
        return TRUE
      }
      return FALSE
    }),
    (this.hasEventListener = function (e) {
      return typeof _listeners[e] != UNDEFINED && 0 < _listeners[e].length
    }),
    (this.getBaseURL = function () {
      var e = _l.href
      return -1 != e.indexOf("#") && (e = e.substr(0, e.indexOf("#"))), "/" == e.substr(e.length - 1) && (e = e.substr(0, e.length - 1)), e
    }),
    (this.getStrict = function () {
      return _opts.strict
    }),
    (this.setStrict = function (e) {
      _opts.strict = e
    }),
    (this.getHistory = function () {
      return _opts.history
    }),
    (this.setHistory = function (e) {
      _opts.history = e
    }),
    (this.getTracker = function () {
      return _opts.tracker
    }),
    (this.setTracker = function (e) {
      _opts.tracker = e
    }),
    (this.getTitle = function () {
      return _d.title
    }),
    (this.setTitle = function (e) {
      return void (
        typeof e == UNDEFINED ||
        ("null" == e && (e = ""),
        (e = _dc(e)),
        _st(function () {
          ;(_title = _d.title = e),
            _juststart && _frame && _frame.contentWindow && _frame.contentWindow.document && ((_frame.contentWindow.document.title = e), (_juststart = FALSE)),
            !_justset && _mozilla && _l.replace(-1 == _l.href.indexOf("#") ? _l.href + "#" : _l.href),
            (_justset = FALSE)
        }, 10))
      )
    }),
    (this.getStatus = function () {
      return _t.status
    }),
    (this.setStatus = function (e) {
      if (!_supported) return null
      if (typeof e != UNDEFINED && ("null" == e && (e = ""), (e = _dc(e)), !_safari)) {
        if (((e = _strictCheck("null" == e ? "" : e, TRUE)), "/" == e && (e = ""), !/http(s)?:\/\//.test(e))) {
          var t = _l.href.indexOf("#")
          e = (-1 == t ? _l.href : _l.href.substr(0, t)) + "#" + e
        }
        _t.status = e
      }
    }),
    (this.resetStatus = function () {
      _t.status = ""
    }),
    (this.getValue = function () {
      return _dc(_strictCheck(_ieLocal(_value, FALSE), FALSE))
    }),
    (this.setValue = function (e) {
      if (!_supported) return null
      typeof e != UNDEFINED &&
        ("null" == e && (e = ""),
        (e = _ec(_dc(_strictCheck(e, TRUE)))),
        "/" == e && (e = ""),
        _value == e ||
          ((_justset = TRUE),
          (_value = e),
          (_silent = TRUE),
          _update.call(FWDRLDL, !0),
          (_stack[_h.length] = _value),
          _value != _getHash() && (_opts.history ? (_l.hash = "#" + _dc(_ieLocal(_value, TRUE))) : _l.replace("#" + _dc(_value))),
          _msie && 8 > _version && _opts.history && _st(_htmlWrite, 50),
          _safari
            ? _st(function () {
                _silent = FALSE
              }, 1)
            : (_silent = FALSE)))
    }),
    (this.getPath = function () {
      var e = this.getValue()
      return -1 == e.indexOf("?") ? (-1 == e.indexOf("#") ? e : e.split("#")[0]) : e.split("?")[0]
    }),
    (this.getPathNames = function () {
      var e = this.getPath(),
        t = e.split("/")
      return ("/" == e.substr(0, 1) || 0 == e.length) && t.splice(0, 1), "/" == e.substr(e.length - 1, 1) && t.splice(t.length - 1, 1), t
    }),
    (this.getQueryString = function () {
      var e = this.getValue(),
        t = e.indexOf("?")
      if (-1 != t && t < e.length) return e.substr(t + 1)
    }),
    (this.getParameter = function (e) {
      var t = this.getValue(),
        o = t.indexOf("?")
      if (-1 != o) {
        t = t.substr(o + 1)
        for (var n = t.split("&"), s = n.length, a = [], r; s--; ) (r = n[s].split("=")), r[0] == e && a.push(r[1])
        if (0 != a.length) return 1 == a.length ? a[0] : a
      }
    }),
    (this.getParameterNames = function () {
      var e = this.getValue(),
        t = e.indexOf("?"),
        o = []
      if (-1 != t && ((e = e.substr(t + 1)), "" != e && -1 != e.indexOf("="))) for (var n = e.split("&"), s = 0; s < n.length; ) o.push(n[s].split("=")[0]), s++
      return o
    }),
    (this.onInit = null),
    (this.onChange = null),
    (this.onInternalChange = null),
    (this.onExternalChange = null),
    (function () {
      var e
      if ((typeof FlashObject != UNDEFINED && (SWFObject = FlashObject), typeof SWFObject != UNDEFINED && SWFObject.prototype && SWFObject.prototype.write)) {
        var t = SWFObject.prototype.write
        SWFObject.prototype.write = function () {
          ;(e = arguments),
            8 > this.getAttribute("version").major && (this.addVariable("$swfaddress", FWDRLDL.getValue()), (("string" == typeof e[0] ? document.getElementById(e[0]) : e[0]).so = this))
          var o
          return (o = t.apply(this, e)) && _ref.addId(this.getAttribute("id")), o
        }
      }
      if (typeof swfobject != UNDEFINED) {
        var o = swfobject.registerObject
        swfobject.registerObject = function () {
          ;(e = arguments), o.apply(this, e), _ref.addId(e[0])
        }
        var n = swfobject.createSWF
        swfobject.createSWF = function () {
          e = arguments
          var t = n.apply(this, e)
          return t && _ref.addId(e[0].id), t
        }
        var s = swfobject.embedSWF
        swfobject.embedSWF = function () {
          ;(e = arguments), typeof e[8] == UNDEFINED && (e[8] = {}), typeof e[8].id == UNDEFINED && (e[8].id = e[1]), s.apply(this, e), _ref.addId(e[8].id)
        }
      }
      if (typeof UFO != UNDEFINED) {
        var r = UFO.create
        UFO.create = function () {
          ;(e = arguments), r.apply(this, e), _ref.addId(e[0].id)
        }
      }
      if (typeof AC_FL_RunContent != UNDEFINED) {
        var a = AC_FL_RunContent
        AC_FL_RunContent = function () {
          ;(e = arguments), a.apply(this, e)
          for (var t = 0, o = e.length; t < o; t++) "id" == e[t] && _ref.addId(e[t + 1])
        }
      }
    })()
})()
;(function (e) {
  e.FWDRLDO = function (e, t, o, n) {
    "use strict"
    var s = this
    if (((s.listeners = { events_ar: [] }), "div" == e || "img" == e || "canvas" == e || "iframe" == e)) s.type = e
    else throw Error("Type is not valid! " + e)
    ;(s.children_ar = []),
      (s.position = t || "absolute"),
      (s.overflow = o || "hidden"),
      (s.trldo = n),
      (s.visible = !0),
      (s.x = s.y = s.w = s.h = 0),
      (s.scale = s.alpha = 1),
      (s.rotation = 0),
      (s.hasTransform3d_bl = FWDRLUtils.hasTransform3d),
      (s.hasTransform2d_bl = FWDRLUtils.hasTransform2d),
      (s.init = function () {
        s.setScreen()
      }),
      (s.getTransform = function () {
        for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform"], t; (t = e.shift()); ) if ("undefined" != typeof s.screen.style[t]) return t
        return !1
      }),
      (s.setScreen = function (e) {
        "img" == s.type && e ? ((s.screen = e), s.setMainProperties()) : ((s.screen = document.createElement(s.type)), s.setMainProperties())
      }),
      (s.setMainProperties = function () {
        ;(s.transform = s.getTransform()),
          s.setPosition(s.position),
          s.setOverflow(s.overflow),
          "opacity" == s.opacityType && (s.isHtml5_bl = !0),
          (s.screen.style.left = "0px"),
          (s.screen.style.top = "0px"),
          (s.screen.style.margin = "0px"),
          (s.screen.style.padding = "0px"),
          (s.screen.style.maxWidth = "none"),
          (s.screen.style.maxHeight = "none"),
          (s.screen.style.border = "none"),
          (s.screen.style.lineHeight = "1"),
          (s.screen.style.backgroundColor = "transparent"),
          (s.screen.style.backfaceVisibility = "hidden"),
          (s.screen.style.webkitBackfaceVisibility = "hidden"),
          (s.screen.style.MozBackfaceVisibility = "hidden"),
          (s.screen.style.transition = "none"),
          (s.screen.style.webkitTransition = "none"),
          (s.screen.style.MozTransition = "none"),
          (s.screen.style.OTransition = "none"),
          "img" == e && (s.setWidth(s.screen.width), s.setHeight(s.screen.height))
      }),
      (s.setBackfaceVisibility = function () {
        ;(s.screen.style.backfaceVisibility = "visible"), (s.screen.style.webkitBackfaceVisibility = "visible"), (s.screen.style.MozBackfaceVisibility = "visible")
      }),
      (s.setSelectable = function (e) {
        e ||
          ((s.screen.style.userSelect = "none"),
          (s.screen.style.MozUserSelect = "none"),
          (s.screen.style.webkitUserSelect = "none"),
          (s.screen.style.khtmlUserSelect = "none"),
          (s.screen.style.oUserSelect = "none"),
          (s.screen.style.msUserSelect = "none"),
          (s.screen.msUserSelect = "none"),
          (s.screen.ondragstart = function () {
            return !1
          }),
          (s.screen.onselectstart = function () {
            return !1
          }),
          (s.screen.ontouchstart = function () {
            return !1
          }),
          (s.screen.style.webkitTouchCallout = "none"),
          (s.hasBeenSetSelectable = !0))
      }),
      (s.getScreen = function () {
        return s.screen
      }),
      (s.setVisible = function (e) {
        ;(s.visible = e), (s.screen.style.visibility = !0 == s.visible ? "visible" : "hidden")
      }),
      (s.getVisible = function () {
        return s.visible
      }),
      (s.setResizableSizeAfterParent = function () {
        ;(s.screen.style.width = "100%"), (s.screen.style.height = "100%")
      }),
      (s.style = function () {
        return s.screen.style
      }),
      (s.setOverflow = function (e) {
        ;(s.overflow = e), (s.screen.style.overflow = s.overflow)
      }),
      (s.setPosition = function (e) {
        ;(s.position = e), (s.screen.style.position = s.position)
      }),
      (s.setDisplay = function (e) {
        ;(s.display = e), (s.screen.style.display = s.display)
      }),
      (s.setButtonMode = function (e) {
        ;(s.buttonMode = e), (s.screen.style.cursor = !0 == s.buttonMode ? "pointer" : "default")
      }),
      (s.setBkColor = function (e) {
        s.screen.style.backgroundColor = e
      }),
      (s.setInnerHTML = function (e) {
        ;(s.innerHTML = e), (s.screen.innerHTML = s.innerHTML)
      }),
      (s.getInnerHTML = function () {
        return s.innerHTML
      }),
      (s.getRect = function () {
        return s.screen.getBoundingClientRect()
      }),
      (s.setAlpha = function (e) {
        ;(s.alpha = e), (s.screen.style.opacity = s.alpha)
      }),
      (s.getAlpha = function () {
        return s.alpha
      }),
      (s.getRect = function () {
        return s.screen.getBoundingClientRect()
      }),
      (s.getGlobalX = function () {
        return s.getRect().left
      }),
      (s.getGlobalY = function () {
        return s.getRect().top
      }),
      (s.setX = function (e) {
        ;(s.x = e),
          s.hasTransform3d_bl
            ? s.trldo
              ? (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px,0) scale(" + s.scale + " , " + s.scale + ") rotate(" + s.rotation + "deg)")
              : (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px,0)")
            : s.hasTransform2d_bl
            ? s.trldo
              ? (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + " , " + s.scale + ") rotate(" + s.rotation + "deg)")
              : (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px)")
            : (s.screen.style.left = s.x + "px")
      }),
      (s.getX = function () {
        return s.x
      }),
      (s.setY = function (e) {
        ;(s.y = e),
          s.hasTransform3d_bl && !s.trldo
            ? s.trldo
              ? (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px,0) scale(" + s.scale + " , " + s.scale + ") rotate(" + s.rotation + "deg)")
              : (s.screen.style[s.transform] = "translate3d(" + s.x + "px," + s.y + "px,0)")
            : s.hasTransform2d_bl
            ? s.trldo
              ? (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + " , " + s.scale + ") rotate(" + s.rotation + "deg)")
              : (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px)")
            : (s.screen.style.top = s.y + "px")
      }),
      (s.getY = function () {
        return s.y
      }),
      (s.setScale2 = function (e) {
        ;(s.scale = e),
          s.hasTransform2d_bl && s.trldo && (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + " , " + s.scale + ") rotate(" + s.rotation + "deg)")
      }),
      (s.getScale = function () {
        return s.scale
      }),
      (s.setRotation = function (e) {
        ;(s.rotation = e),
          s.hasTransform2d_bl && s.trldo && (s.screen.style[s.transform] = "translate(" + s.x + "px," + s.y + "px) scale(" + s.scale + " , " + s.scale + ") rotate(" + s.rotation + "deg)")
      }),
      (s.setWidth = function (e) {
        ;(s.w = e), "img" == s.type ? (s.screen.width = s.w) : (s.screen.style.width = s.w + "px")
      }),
      (s.setWidth = function (e) {
        ;(s.w = e), "img" == s.type ? ((s.screen.width = s.w), (s.screen.style.width = s.w + "px")) : (s.screen.style.width = s.w + "px")
      }),
      (s.getWidth = function () {
        return "div" == s.type
          ? 0 == s.screen.offsetWidth
            ? s.w
            : s.screen.offsetWidth
          : "img" == s.type
          ? 0 == s.screen.offsetWidth
            ? 0 == s.screen.width
              ? s._w
              : s.screen.width
            : s.screen.offsetWidth
          : "canvas" == s.type
          ? 0 == s.screen.offsetWidth
            ? s.w
            : s.screen.offsetWidth
          : void 0
      }),
      (s.setHeight = function (e) {
        ;(s.h = e), "img" == s.type ? ((s.screen.height = s.h), (s.screen.style.height = s.h + "px")) : (s.screen.style.height = s.h + "px")
      }),
      (s.getHeight = function () {
        return "div" == s.type
          ? 0 == s.screen.offsetHeight
            ? s.h
            : s.screen.offsetHeight
          : "img" == s.type
          ? 0 == s.screen.offsetHeight
            ? 0 == s.screen.height
              ? s.h
              : s.screen.height
            : s.screen.offsetHeight
          : "canvas" == s.type
          ? 0 == s.screen.offsetHeight
            ? s.h
            : s.screen.offsetHeight
          : void 0
      }),
      (s.addChild = function (t) {
        s.contains(t)
          ? (s.children_ar.splice(FWDRLUtils.indexOfArray(s.children_ar, t), 1), s.children_ar.push(t), s.screen.appendChild(t.screen))
          : (s.children_ar.push(t), s.screen.appendChild(t.screen))
      }),
      (s.removeChild = function (t) {
        if (s.contains(t)) s.children_ar.splice(FWDRLUtils.indexOfArray(s.children_ar, t), 1), s.screen.removeChild(t.screen)
        else throw Error("##removeChild()## Child dose't exist, it can't be removed!")
      }),
      (s.contains = function (t) {
        return -1 != FWDRLUtils.indexOfArray(s.children_ar, t)
      }),
      (s.addChildAt = function (t, e) {
        if (0 == s.getNumChildren()) s.children_ar.push(t), s.screen.appendChild(t.screen)
        else if (1 == e)
          s.screen.insertBefore(t.screen, s.children_ar[0].screen),
            s.screen.insertBefore(s.children_ar[0].screen, t.screen),
            s.contains(t) ? s.children_ar.splice(FWDRLUtils.indexOfArray(s.children_ar, t), 1, t) : s.children_ar.splice(FWDRLUtils.indexOfArray(s.children_ar, t), 0, t)
        else {
          if (0 > e || e > s.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!")
          s.screen.insertBefore(t.screen, s.children_ar[e].screen),
            s.contains(t) ? s.children_ar.splice(FWDRLUtils.indexOfArray(s.children_ar, t), 1, t) : s.children_ar.splice(FWDRLUtils.indexOfArray(s.children_ar, t), 0, t)
        }
      }),
      (s.getChildAt = function (e) {
        if (0 > e || e > s.getNumChildren() - 1) throw Error("##getChildAt()## Index out of bounds!")
        if (0 == s.getNumChildren()) throw Errror("##getChildAt## Child dose not exist!")
        return s.children_ar[e]
      }),
      (s.removeChildAtZero = function () {
        s.screen.removeChild(s.children_ar[0].screen), s.children_ar.shift()
      }),
      (s.getNumChildren = function () {
        return s.children_ar.length
      }),
      (s.addListener = function (e, t) {
        if (null == e) throw Error("type is required.")
        if ("object" == typeof e) throw Error("type must be of type String.")
        if ("function" != typeof t) throw Error("listener must be of type Function.")
        var o = {}
        ;(o.type = e), (o.listener = t), (o.target = s), s.listeners.events_ar.push(o)
      }),
      (s.dispatchEvent = function (e, t) {
        if (null != s.listeners) {
          if (null == e) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          for (var o = 0, n = s.listeners.events_ar.length; o < n; o++)
            if (s.listeners.events_ar[o].target === s && s.listeners.events_ar[o].type === e) {
              if (t) for (var r in t) s.listeners.events_ar[o][r] = t[r]
              s.listeners.events_ar[o].listener.call(s, s.listeners.events_ar[o])
            }
        }
      }),
      (s.removeListener = function (e, t) {
        if (null == e) throw Error("type is required.")
        if ("object" == typeof e) throw Error("type must be of type String.")
        if ("function" != typeof t) throw Error("listener must be of type Function." + e)
        for (var o = 0, n = s.listeners.events_ar.length; o < n; o++)
          if (s.listeners.events_ar[o].target === s && s.listeners.events_ar[o].type === e && s.listeners.events_ar[o].listener === t) {
            s.listeners.events_ar.splice(o, 1)
            break
          }
      }),
      (s.destroy = function () {
        s.hasBeenSetSelectable && ((s.screen.ondragstart = null), (s.screen.onselectstart = null), (s.screen.ontouchstart = null)),
          (s.listeners = null),
          (s.listeners = null),
          (s.children_ar = null),
          (s = null)
      }),
      s.init()
  }
})(window),
  (function () {
    window.FWDRLEventDispatcher = function () {
      "use strict"
      ;(this.listeners = { events_ar: [] }),
        (this.addListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function.")
          var o = {}
          ;(o.type = e), (o.listener = t), (o.target = this), this.listeners.events_ar.push(o)
        }),
        (this.dispatchEvent = function (e, t) {
          if (null != this.listeners) {
            if (null == e) throw Error("type is required.")
            if ("object" == typeof e) throw Error("type must be of type String.")
            for (var o = 0, n = this.listeners.events_ar.length; o < n; o++)
              if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e) {
                if (t) for (var s in t) this.listeners.events_ar[o][s] = t[s]
                this.listeners.events_ar[o].listener.call(this, this.listeners.events_ar[o])
              }
          }
        }),
        (this.removeListener = function (e, t) {
          if (e == null) throw Error("type is required.")
          if ("object" == typeof e) throw Error("type must be of type String.")
          if ("function" != typeof t) throw Error("listener must be of type Function." + e)
          for (var o = 0, n = this.listeners.events_ar.length; o < n; o++)
            if (this.listeners.events_ar[o].target === this && this.listeners.events_ar[o].type === e && this.listeners.events_ar[o].listener === t) {
              this.listeners.events_ar.splice(o, 1)
              break
            }
        }),
        (this.destroy = function () {
          ;(this.listeners = null), (this.addListener = null), (this.dispatchEvent = null), (this.removeListener = null)
        })
    }
  })(window),
  (function (e) {
    var t = function (o, n) {
      "use strict"
      var s = this,
        r = t.prototype
      ;(s.screenToTest = o),
        (s.hideDelay = n),
        (s.globalX = 0),
        (s.globalY = 0),
        (s.dspOnceShow = !0),
        (s.isStopped_bl = !0),
        (s.isHidden_bl = !1),
        (s.isMbl = FWDRLUtils.isMbl),
        (s.hasPointerEvt = FWDRLUtils.hasPointerEvent),
        (s.start = function () {
          ;(s.currentTime = new Date().getTime()),
            clearInterval(s.check_int),
            (s.check_int = setInterval(s.update, 100)),
            s.addMouseOrTouchCheck(),
            (s.isStopped_bl = !1),
            e.addEventListener("click", s.reset)
        }),
        (s.stop = function () {
          clearInterval(s.check_int), (s.isStopped_bl = !0), s.removeMT(), s.removeMT2(), e.removeEventListener("click", s.reset)
        }),
        (s.clickMHU = function () {
          s.dispatchEvent(t.SHOW)
        }),
        (s.addMouseOrTouchCheck = function () {
          s.hasInitialTestEvents_bl ||
            ((s.hasInitialTestEvents_bl = !0),
            s.isMbl
              ? s.hasPointerEvt
                ? (s.screenToTest.screen.addEventListener("pointerdown", s.onMTUpdate), s.screenToTest.screen.addEventListener("pointermove", s.onMTUpdate))
                : s.screenToTest.screen.addEventListener("touchstart", s.onMTUpdate)
              : (e.addEventListener("mousemove", s.onMTUpdate), e.addEventListener("click", s.onMTUpdate)))
        }),
        (s.removeMT = function () {
          s.hasInitialTestEvents_bl &&
            ((s.hasInitialTestEvents_bl = !1),
            s.isMbl
              ? s.hasPointerEvt
                ? (s.screenToTest.screen.removeEventListener("pointerdown", s.onMTUpdate), s.screenToTest.screen.removeEventListener("pointermove", s.onMTUpdate))
                : s.screenToTest.screen.removeEventListener("touchstart", s.onMTUpdate)
              : e.removeEventListener("mousemove", s.onMTUpdate))
        }),
        (s.onMTUCheck2 = function () {
          s.addSecondTestEvents_bl ||
            ((s.addSecondTestEvents_bl = !0), s.screenToTest.screen.addEventListener("mousemove", s.secondTestMoveDummy), s.screenToTest.screen.addEventListener("click", s.secondTestMoveDummy))
        }),
        (s.removeMT2 = function () {
          s.addSecondTestEvents_bl &&
            ((s.addSecondTestEvents_bl = !1), s.screenToTest.screen.removeEventListener("mousemove", s.secondTestMoveDummy), s.screenToTest.screen.removeEventListener("click", s.secondTestMoveDummy))
        }),
        (s.secondTestMoveDummy = function () {
          s.removeMT2(), s.addMouseOrTouchCheck()
        }),
        (s.onMTUpdate = function (t) {
          var e = FWDRLUtils.getViewportMouseCoordinates(t)
          s.globalX != e.screenX && s.globalY != e.screenY && (s.currentTime = new Date().getTime()),
            (s.globalX = e.screenX),
            (s.globalY = e.screenY),
            s.isMbl || FWDRLUtils.hitTest(s.screenToTest.screen, s.globalX, s.globalY) || (s.removeMT(), s.onMTUCheck2())
        }),
        (s.update = function () {
          new Date().getTime() > s.currentTime + s.hideDelay
            ? s.dspOnceShow &&
              ((s.dspOnceHide = !0),
              (s.dspOnceShow = !1),
              (s.isHidden_bl = !0),
              s.dispatchEvent(t.HIDE),
              clearTimeout(s.hideCompleteId_to),
              (s.hideCompleteId_to = setTimeout(function () {
                s.dispatchEvent(t.HIDE_COMPLETE)
              }, 1e3)))
            : s.dspOnceHide && (clearTimeout(s.hideCompleteId_to), (s.dspOnceHide = !1), (s.dspOnceShow = !0), (s.isHidden_bl = !1), s.dispatchEvent(t.SHOW))
        }),
        (s.reset = function () {
          ;(s.isHidden_bl = !1), clearTimeout(s.hideCompleteId_to), (s.currentTime = new Date().getTime()), s.dispatchEvent(t.SHOW)
        })
    }
    ;(t.HIDE = "hide"),
      (t.SHOW = "show"),
      (t.HIDE_COMPLETE = "hideComplete"),
      (t.setPrototype = function () {
        t.prototype = new FWDRLEventDispatcher()
      }),
      (e.FWDRLHider = t)
  })(window),
  (function (e) {
    var t = function (e, t) {
      "use strict"
      var o = this
      ;(o.allowToRemove_bl = !0),
        (o.init = function () {
          o.setResizableSizeAfterParent(),
            (o.style().width = "80%"),
            (o.textHolder_do = new FWDRLDO("div")),
            FWDRLUtils.isIEAndLessThen9 || (o.textHolder_do.style().font = "Arial"),
            (o.textHolder_do.style().wordWrap = "break-word"),
            (o.textHolder_do.style().padding = "10px"),
            (o.textHolder_do.style().paddingLeft = "42px"),
            (o.textHolder_do.style().lineHeight = "18px"),
            o.textHolder_do.setBkColor("#EEEEEE")
          var e = new Image()
          ;(e.src = t), (o.img_do = new FWDRLDO("img")), o.img_do.setScreen(e), o.img_do.setWidth(28), o.img_do.setHeight(28), o.addChild(o.textHolder_do), o.addChild(o.img_do)
        }),
        (o.showText = function (e) {
          o.isShowedOnce_bl ||
            (o.screen.addEventListener ? o.screen.addEventListener("click", o.closeWindow) : o.screen.attachEvent && o.screen.attachEvent("onclick", o.closeWindow), (o.isShowedOnce_bl = !0)),
            o.textHolder_do.setInnerHTML(e),
            clearTimeout(o.show_to),
            o.show()
        }),
        (o.show = function () {
          ;(o.isShowed = !0),
            o.setVisible(!0),
            setTimeout(function () {
              o.positionAndResize()
            }, 60)
        }),
        (o.positionAndResize = function () {
          o.setHeight(o.textHolder_do.getHeight()), o.img_do.setX(6), o.img_do.setY(parseInt((o.h - o.img_do.h) / 2))
        }),
        (o.closeWindow = function () {
          if (o.allowToRemove_bl) {
            ;(o.isShowed = !1), clearTimeout(o.show_to)
            try {
              e.main_do.removeChild(o)
            } catch (t) {}
          }
        }),
        o.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div", "relative")
    }),
      (t.prototype = null),
      (e.FWDRLInfo = t)
  })(window),
  (function (e) {
    var t = function (e, o, n, s, r, a) {
      "use strict"
      var d = this,
        l = t.prototype
      ;(d.bkClr = n),
        (d.fillClr = s),
        (d.radius = o),
        (d.strokeSize = r),
        (d.animDur = a / 1e3 || 300),
        (d.strtAngle = 270),
        (d.cntAnim = 0),
        (d.isShowed = !0),
        (d.angle = { n: 0 }),
        (d.init = function () {
          ;(d.style().pointerEvents = "none"),
            (d.mm_do = new FWDRLDO("div")),
            d.mm_do.setOverflow("visible"),
            (d.main_do = new FWDRLDO("div")),
            d.main_do.setOverflow("visible"),
            d.main_do.setWidth(2 * d.radius + d.strokeSize),
            d.main_do.setHeight(2 * d.radius + d.strokeSize),
            d.setOverflow("visible"),
            d.setWidth(2 * d.radius + d.strokeSize),
            d.setHeight(2 * d.radius + d.strokeSize),
            d.mm_do.setWidth(d.w),
            d.mm_do.setHeight(d.h),
            (d.bkCanvas = new FWDRLDO("canvas")),
            (d.bkCtx = d.bkCanvas.screen.getContext("2d")),
            (d.fillCircleCanvas = new FWDRLDO("canvas")),
            (d.fillCtx = d.fillCircleCanvas.screen.getContext("2d")),
            (d.main_do.screen.style.transformOrigin = "50% 50%"),
            d.main_do.addChild(d.bkCanvas),
            d.main_do.addChild(d.fillCircleCanvas),
            d.mm_do.addChild(d.main_do),
            d.addChild(d.mm_do),
            d.drawBackground(),
            d.drawFill(),
            d.hide()
        }),
        (d.setFinalSize = function (e, t) {
          d.main_do.setX(Math.round(e - d.w) / 2), d.main_do.setY(Math.round(t - d.h) / 2), d.setWidth(e), d.setHeight(t)
        }),
        (d.position = function () {
          d.setX(Math.round(e.sW - d.w) / 2), d.setY(Math.round(Math.min(e.sH, e.viewportSize.h) - d.h) / 2)
        }),
        (d.drawBackground = function () {
          ;(d.bkCanvas.screen.width = 2 * d.radius + 2 * d.strokeSize),
            (d.bkCanvas.screen.height = 2 * d.radius + 2 * d.strokeSize),
            (d.bkCtx.lineWidth = d.thicknessSize),
            d.bkCtx.translate(d.strokeSize / 2, d.strokeSize / 2),
            (d.bkCtx.shadowColor = "#333333"),
            (d.bkCtx.shadowBlur = 1),
            (d.bkCtx.lineWidth = d.strokeSize),
            (d.bkCtx.strokeStyle = d.bkClr),
            d.bkCtx.beginPath(),
            d.bkCtx.arc(d.radius, d.radius, d.radius, 0 * (Math.PI / 180), 360 * (Math.PI / 180), !1),
            d.bkCtx.stroke(),
            d.bkCtx.closePath()
        }),
        (d.drawFill = function (e) {
          e && (d.angle.n = Math.round(360 * e)),
            (d.fillCircleCanvas.screen.width = 2 * d.radius + 2 * d.strokeSize),
            (d.fillCircleCanvas.screen.height = 2 * d.radius + 2 * d.strokeSize),
            (d.fillCtx.lineWidth = d.thicknessSize),
            d.fillCtx.translate(d.strokeSize / 2, d.strokeSize / 2),
            (d.fillCtx.lineWidth = d.strokeSize),
            (d.fillCtx.strokeStyle = d.fillClr),
            d.fillCtx.beginPath(),
            d.fillCtx.arc(d.radius, d.radius, d.radius, (Math.PI / 180) * d.strtAngle, (Math.PI / 180) * (d.strtAngle + d.angle.n), !1),
            d.fillCtx.stroke(),
            d.fillCtx.closePath()
        }),
        (d.startSlideshow = function (e) {
          null == d ||
            (d.isSlideShowRun && !e) ||
            ((d.isSlideShowRun = !0), FWDAnimation.killTweensOf(d.angle), FWDAnimation.to(d.angle, d.animDur, { n: 360, onUpdate: d.drawFill, onComplete: d.stopSlideshow }))
        }),
        (d.stopSlideshow = function (e) {
          ;(d.isSlideShowRun || e) && ((d.isSlideShowRun = !1), FWDAnimation.killTweensOf(d.angle), FWDAnimation.to(d.angle, 0.8, { n: 0, onUpdate: d.drawFill, ease: Expo.easeInOut }))
        }),
        (d.resetSlideshow = function () {
          FWDAnimation.killTweensOf(d.angle), (d.angle.n = 0), d.drawFill()
        }),
        (d.startPreloader = function () {
          d.stopPreloader(),
            (d.angle = { n: 0 }),
            FWDAnimation.to(d.angle, d.animDur, { n: 360, onUpdate: d.drawFill, repeat: 100, yoyo: !0, ease: Expo.easeInOut }),
            FWDAnimation.to(d.main_do.screen, d.animDur, { rotation: 360, repeat: 100 })
        }),
        (d.stopPreloader = function () {
          FWDAnimation.killTweensOf(d.angle), FWDAnimation.killTweensOf(d.main_do.screen), FWDAnimation.to(d.main_do.screen, 1e-5, { rotation: 0 })
        }),
        (d.show = function () {
          d.isShowed || (d.setVisible(!0), FWDAnimation.killTweensOf(d.mm_do), FWDAnimation.to(d.mm_do, 1, { alpha: 1, delay: 0.2 }), d.stopPreloader(), d.startPreloader(), (d.isShowed = !0))
        }),
        (d.hide = function (e) {
          d.isShowed && (FWDAnimation.killTweensOf(d.mm_do), e ? FWDAnimation.to(d.mm_do, 0.2, { alpha: 0, onComplete: d.onHideComplete }) : (d.setVisible(!1), d.mm_do.setAlpha(0)), (d.isShowed = !1))
        }),
        (d.show2 = function () {
          d.isShowed || ((d.isShowed = !0), d.setVisible(!0), FWDAnimation.killTweensOf(d.mm_do), FWDAnimation.to(d.mm_do, 1, { alpha: 1, ease: Expo.easeOut }))
        }),
        (d.hide2 = function () {
          d.isShowed && ((d.isShowed = !1), FWDAnimation.killTweensOf(d.mm_do), FWDAnimation.to(d.mm_do, 1, { alpha: 0, onComplete: d.onHideComplete, ease: Expo.easeOut }))
        }),
        (d.onHideComplete = function () {
          d.setVisible(!1), d.stopPreloader(), d.dispatchEvent(t.HIDE_COMPLETE)
        }),
        (d.setHideDrag = function (e) {
          FWDAnimation.killTweensOf(d.main_do), e ? FWDAnimation.to(d.main_do, 0.4, { alpha: 0.3, delay: 0.4 }) : FWDAnimation.to(d.main_do, 0.4, { alpha: 1 })
        }),
        (d.updateColors = function (e, t) {
          ;(d.bkClr = e), (d.fillClr = t), (d.bkCtx.strokeStyle = d.bkClr), (d.fillCtx.strokeStyle = d.fillClr), d.drawBackground()
        }),
        d.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div")
    }),
      (t.HIDE_COMPLETE = "hideComplete"),
      (e.FWDRLPreloader = t)
  })(window),
  (function (e) {
    "use strict"
    var t = function (o) {
      var n = this
      ;(n.prt = o),
        (n._d = o._d),
        (n.x2 = n.y2 = 0),
        (n.socialMedia = {
          facebook: "https://www.facebook.com/sharer/sharer.php?u=[url]",
          twitter: "https://twitter.com/intent/tweet?text=[text]&url=[url]",
          pinterest: "https://www.pinterest.com/pin/create/button/?url=[url]&media=[image]&caption=[text]",
          linkedin: "https://www.linkedin.com/shareArticle?url=[url]&mini=true&title=[text]",
          reddit: "https://www.reddit.com/submit?url=[url]&title=[text]",
          tumblr: "https://www.tumblr.com/share?v=3&u=[url]&t=[text]",
          blogger: "https://www.blogger.com/blog_this.pyra?t&u=[url]&n=[text]",
          buffer: "https://bufferapp.com/add?url=[url]title=[text]",
          digg: "https://digg.com/submit?url=[url]&title=[text]",
        }),
        (n.init = function () {
          n.setOverflow("visible"), (n.style().width = "100%"), (n.style().height = "100%"), n.setupCnt()
        }),
        (n.setupCnt = function () {
          ;(n.bk_do = new FWDRLDO("div")),
            (n.bk_do.style().width = "100%"),
            (n.bk_do.style().height = "100%"),
            n.bk_do.setBkColor(o.shareMainBackgroundColor),
            n.bk_do.screen.addEventListener("click", n.bkMHU),
            n.addChild(n.bk_do),
            (n.mainHld_do = new FWDRLDO("div")),
            (n.mainHld_do.screen.className = o.cls + "-share"),
            n.mainHld_do.setOverflow("visible"),
            n.addChild(n.mainHld_do),
            (n.text_do = new FWDRLDO("div", "relative")),
            (n.text_do.screen.className = o.cls + "-text"),
            n.mainHld_do.addChild(n.text_do),
            (n.hld_do = new FWDRLDO("div", "relative")),
            (n.hld_do.screen.className = o.cls + "-buttons-holder"),
            n.mainHld_do.addChild(n.hld_do),
            n.setupButtons(),
            n.setupPointer(),
            n.hide(!1, !0)
        }),
        (n.bkMHU = function () {
          n.hide(!0)
        }),
        (n.setupPointer = function () {
          ;(n.pointer_do = new FWDRLDO("div")),
            (n.pointer_do.hasTransform3d_bl = n.pointer_do.hasTransform2d_bl = !1),
            (n.pointer_do.screen.className = o.cls + "-pointer"),
            n.pointer_do.setBkColor(o.shareBackgroundColor),
            (n.pointer_do.style().transform = "rotate(45deg)"),
            n.pointer_do.setWidth(8),
            n.pointer_do.setHeight(8),
            n.mainHld_do.addChild(n.pointer_do)
        }),
        (n.setupButtons = function () {
          ;(n.buttons = []),
            FWDRLSimpleButton.setPrototype(),
            (n.facebook_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-facebook"></span>', o.cls + "-button facebook", "selected")
              : new FWDRLSimpleButton(n._d.facebookN_img, n._d.facebookSPath, o.cls)),
            n.facebook_do.setShareButton("facebook"),
            n.facebook_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.facebook_do),
            n.buttons.push(n.facebook_do),
            FWDRLSimpleButton.setPrototype(),
            (n.twitter_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-twitter"></span>', o.cls + "-button twitter", "selected")
              : new FWDRLSimpleButton(n._d.twitterN_img, n._d.twitterSPath, o.cls)),
            n.twitter_do.setShareButton("twitter"),
            n.twitter_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.twitter_do),
            n.buttons.push(n.twitter_do),
            FWDRLSimpleButton.setPrototype(),
            (n.linkedin_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-linkedin"></span>', o.cls + "-button linkedin", "selected")
              : new FWDRLSimpleButton(n._d.linkedinN_img, n._d.linkedinSPath, o.cls)),
            n.linkedin_do.setShareButton("linkedin"),
            n.linkedin_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.linkedin_do),
            n.buttons.push(n.linkedin_do),
            FWDRLSimpleButton.setPrototype(),
            (n.tumblr_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-tumblr"></span>', o.cls + "-button tumblr", "selected")
              : new FWDRLSimpleButton(n._d.tumblrN_img, n._d.tumblrSPath, o.cls)),
            n.tumblr_do.setShareButton("tumblr"),
            n.tumblr_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.tumblr_do),
            n.buttons.push(n.tumblr_do),
            FWDRLSimpleButton.setPrototype(),
            (n.pinterest_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-pinterest"></span>', o.cls + "-button pinterest", "selected")
              : new FWDRLSimpleButton(n._d.pinterestN_img, n._d.pinterestSPath, o.cls)),
            n.pinterest_do.setShareButton("pinterest"),
            n.pinterest_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.pinterest_do),
            n.buttons.push(n.pinterest_do),
            FWDRLSimpleButton.setPrototype(),
            (n.reddit_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-reddit"></span>', o.cls + "-button reddit", "selected")
              : new FWDRLSimpleButton(n._d.redditN_img, n._d.redditSPath, o.cls)),
            n.reddit_do.setShareButton("reddit"),
            n.reddit_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.reddit_do),
            n.buttons.push(n.reddit_do),
            FWDRLSimpleButton.setPrototype(),
            (n.buffer_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-buffer"></span>', o.cls + "-button buffer", "selected")
              : new FWDRLSimpleButton(n._d.bufferN_img, n._d.bufferSPath, o.cls)),
            n.buffer_do.setShareButton("buffer"),
            n.buffer_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.buffer_do),
            n.buttons.push(n.buffer_do),
            FWDRLSimpleButton.setPrototype(),
            (n.digg_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-digg"></span>', o.cls + "-button digg", "selected")
              : new FWDRLSimpleButton(n._d.diggN_img, n._d.diggSPath, o.cls)),
            n.digg_do.setShareButton("digg"),
            n.digg_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.digg_do),
            n.buttons.push(n.digg_do),
            FWDRLSimpleButton.setPrototype(),
            (n.blogger_do = o.useVectorIcons
              ? new FWDRLSimpleButton(0, 0, o.cls, '<span class="' + o.fontIcon + " " + o.fontIcon + '-blogger"></span>', o.cls + "-button blogger", "selected")
              : new FWDRLSimpleButton(n._d.bloggerN_img, n._d.bloggerSPath, o.cls)),
            n.blogger_do.setShareButton("blogger"),
            n.blogger_do.addListener(FWDRLSimpleButton.MOUSE_UP, n.shareMUH),
            n.hld_do.addChild(n.blogger_do),
            n.buttons.push(n.blogger_do)
        }),
        (n.shareMUH = function (t) {
          n.shareOn(t.inst)
        }),
        (n.shareOn = function (t) {
          var s = o.gallery_ar[o.mId],
            r = s.type == FWDRL.IMAGE ? s.src : s.posterSrc,
            a = n.socialMedia[t],
            d
          "page" == o.sharedURL
            ? (d = [location.protocol, "//", location.host, location.pathname].join(""))
            : "deeplink" == o.sharedURL || -1 < ["iframe", "HTML"].indexOf(s.type)
            ? ((d = [location.protocol, "//", location.host, location.pathname].join("")), (d += "#/" + o.setDL(!1)))
            : (d = s.src)
          var l = document.createElement("a")
          ;(l.href = r), (r = l.href), (l.href = d), (d = l.href)
          var p = document.createElement("div")
          p.innerHTML = s.caption
          var _ = (p.textContent || p.innerText).replace(/\s+/g, " ").trim() || ""
          a = a
            .replace("[url]", encodeURIComponent(d))
            .replace("[image]", encodeURIComponent(r))
            .replace("[text]", encodeURIComponent(_ || document.title))
          var m = Math.round(e.screenX + (e.outerWidth - 626) / 2),
            u = Math.round(e.screenY + (e.outerHeight - 436) / 2)
          e.open(a, "fwdrl_share", "status=0,resizable=1,location=1,toolbar=0,width=626,height=436,top=" + u + ",left=" + m)
        }),
        (n.update = function () {
          if (o.showShareButton) {
            n.bk_do.setBkColor(o.shareMainBackgroundColor), n.mainHld_do.setBkColor(o.shareBackgroundColor), n.pointer_do.setBkColor(o.shareBackgroundColor), n.text_do.setInnerHTML(o.shareText)
            for (var e = [], t = 0, s; t < o.shareButtons.length; t++) {
              s = o.shareButtons[t]
              for (var r = 0, a; r < n.buttons.length; r++) (a = n.buttons[r]), s == a.inst && e.push(a)
            }
            for (var t = 0, a; t < n.buttons.length; t++) {
              a = n.buttons[t]
              try {
                n.hld_do.removeChild(a)
              } catch (t) {}
            }
            for (var t = 0, a; t < e.length; t++) (a = e[t]), n.hld_do.addChild(a)
          }
        }),
        (n.show = function (e, s, r) {
          if (!(n.isShowed || o.isLoading)) {
            ;(n.isShowed = !0), n.setX(0)
            var a = o.shareBtn_do.x,
              d = o.shareBtn_do.y,
              l = o.shareBtn_do.w,
              p = o.shareBtn_do.h,
              _ = o.stageW,
              m = o.stageH,
              u = n.mainHld_do.getWidth(),
              c = n.mainHld_do.getHeight(),
              h = 4,
              s,
              r
            o.tempBtnsAlign == FWDRL.BUTTONS_TOP
              ? ((s = a - Math.round((u - l) / 2)), (r = d + l + 10), (e = "top"), s + u > _ && ((s = a - u + l), (h = -(u - l) / 2 + 5)))
              : ((s = a + l + 10), (r = d - Math.round((c - p) / 2)), 0 > r && ((h = 78), (r = o.shareBtn_do.y - 5)), (e = "right"), s + u > _ - 20 && ((s = a - u - 10), (e = "left"))),
              (s = Math.round(s)),
              (r = Math.round(r)),
              (n.x2 = s),
              (n.y2 = r),
              "right" == e ? (n.x2 = s + 20) : "left" == e ? (n.x2 = s - 20) : "top" == e && (n.y2 = r + 20),
              n.mainHld_do.setX(n.x2),
              n.mainHld_do.setY(n.y2),
              n.mainHld_do.setAlpha(0),
              n.bk_do.setAlpha(0),
              "top" == e
                ? ((n.pointer_do.style().top = " -4px"), (n.pointer_do.style().left = "calc(50% - " + h + "px)"))
                : "left" == e
                ? ((n.pointer_do.style().top = "calc(50% - " + h + "px)"), (n.pointer_do.style().left = "calc(100% - 4px)"))
                : "right" == e && ((n.pointer_do.style().top = "calc(50% - " + h + "px)"), (n.pointer_do.style().left = "-4px")),
              FWDAnimation.to(n.bk_do, 0.6, { alpha: 1, ease: Expo.easeInOut }),
              FWDAnimation.to(n.mainHld_do, 0.6, { x: s, y: r, alpha: 1, ease: Expo.easeInOut }),
              n.setVisible(!0),
              n.dispatchEvent(t.SHOW)
          }
        }),
        (n.hide = function (e, s) {
          ;(n.isShowed || s) &&
            !FWDAnimation.isTweening(n.mainHld_do) &&
            ((n.isShowed = !1),
            FWDAnimation.killTweensOf(n.mainHld_do),
            e
              ? (FWDAnimation.to(n.bk_do, 0.6, { alpha: 0, ease: Expo.easeInOut }),
                FWDAnimation.to(n.mainHld_do, 0.6, { x: n.x2, y: n.y2, alpha: 0, ease: Expo.easeInOut, onComplete: n.hideComplete }))
              : n.hideComplete(),
            n.dispatchEvent(t.HIDE))
        }),
        (n.hideComplete = function () {
          n.setX(-8e3), n.setVisible(!1)
        }),
        n.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div")
    }),
      (t.SHOW = "show"),
      (t.HIDE = "hide"),
      (e.FWDRLShare = t)
  })(window),
  (function (e) {
    var t = function (e, o, n, s, r, a) {
      "use strict"
      var d = this,
        l = t.prototype
      ;(d.nImg = e),
        (d.sPath = o),
        d.inst,
        (d.html = s),
        (d.nClass = r),
        (d.sClass = a),
        d.nImg && ((d.totalWidth = d.nImg.width), (d.totalHeight = d.nImg.height)),
        (d.isShowed = !0),
        (d.isMbl = FWDRLUtils.isMbl),
        (d.hasPointerEvent_bl = FWDRLUtils.hasPointerEvent),
        (d.init = function () {
          d.setupMainContainers()
        }),
        (d.setupMainContainers = function () {
          if (d.html)
            (d.n_do = new FWDEVPDO("div")),
              d.n_do.setInnerHTML(d.html),
              d.setNormalState(),
              d.addChild(d.n_do),
              setTimeout(function () {
                d.setWidth(parseInt(getComputedStyle(d.n_do.screen).getPropertyValue("width"))), d.setHeight(parseInt(getComputedStyle(d.n_do.screen).getPropertyValue("height")))
              }, 5)
          else {
            ;(d.buttonsHolder_do = new FWDRLDO("div")), d.buttonsHolder_do.setOverflow("visible"), (d.n_do = new FWDRLDO("img")), d.n_do.setScreen(d.nImg), d.buttonsHolder_do.addChild(d.n_do)
            var e = new Image()
            ;(e.src = d.sPath),
              (d.s_do = new FWDRLDO("img")),
              d.s_do.setScreen(e),
              d.s_do.setWidth(d.totalWidth),
              d.s_do.setHeight(d.totalHeight),
              d.s_do.setAlpha(0),
              d.buttonsHolder_do.addChild(d.s_do),
              d.setWidth(d.totalWidth),
              d.setHeight(d.totalHeight),
              (d.screen.style.yellowOverlayPointerEvents = "none"),
              d.addChild(d.buttonsHolder_do)
          }
          d.setButtonMode(!0),
            d.isMbl
              ? d.hasPointerEvent_bl
                ? (d.screen.addEventListener("pointerup", d.onMouseUp), d.screen.addEventListener("pointerover", d.onMouseOver), d.screen.addEventListener("pointerout", d.onMouseOut))
                : d.screen.addEventListener("touchend", d.onMouseUp)
              : (d.screen.addEventListener("mouseover", d.onMouseOver), d.screen.addEventListener("mouseout", d.onMouseOut), d.screen.addEventListener("mouseup", d.onMouseUp))
        }),
        (d.onMouseOver = function (o) {
          if ((d.dispatchEvent(t.SHOW_TOOLTIP, { e: o }), !d.isDisabledForGood_bl) && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
            if (d.isDisabled_bl || d.isSelectedFinal_bl) return
            d.dispatchEvent(t.MOUSE_OVER, { e: o }), d.setSelectedState(!0)
          }
        }),
        (d.onMouseOut = function (o) {
          if (!d.isDisabledForGood_bl && (!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE || "mouse" == o.pointerType)) {
            if (d.isDisabled_bl || d.isSelectedFinal_bl || d.isDisabled2) return
            d.dispatchEvent(t.MOUSE_OUT, { e: o }), d.setNormalState(!0)
          }
        }),
        (d.onMouseUp = function (o) {
          d.isDisabledForGood_bl || (o.preventDefault && o.preventDefault(), d.isDisabled_bl || 2 == o.button || d.dispatchEvent(t.MOUSE_UP, { e: o, inst: d.inst }))
        }),
        (d.setNormalState = function () {
          d.html ? (d.n_do.screen.className = d.nClass) : (FWDAnimation.killTweensOf(d.s_do), FWDAnimation.to(d.s_do, 0.5, { alpha: 0, ease: Expo.easeOut }))
        }),
        (d.setSelectedState = function () {
          d.html ? (d.n_do.screen.className = d.nClass + " " + d.sClass) : (FWDAnimation.killTweensOf(d.s_do), FWDAnimation.to(d.s_do, 0.5, { alpha: 1, delay: 0.1, ease: Expo.easeOut }))
        }),
        (d.disable = function (e) {
          d.isDisabledForGood_bl || d.isDisabled_bl || ((d.isDisabled_bl = !0), d.setButtonMode(!1), FWDAnimation.to(d, 0.6, { alpha: 0.4 }), !e && d.setNormalState())
        }),
        (d.enable = function () {
          d.isDisabledForGood_bl || !d.isDisabled_bl || ((d.isDisabled_bl = !1), d.setButtonMode(!0), FWDAnimation.to(d, 0.6, { alpha: 1 }))
        }),
        (d.disableForGood = function () {
          ;(d.isDisabledForGood_bl = !0), d.setButtonMode(!1)
        }),
        (d.disable2 = function (e) {
          d.isDisabled2 || ((d.isDisabled2 = !0), FWDAnimation.to(d, 0.6, { alpha: 0.4 }), !e && d.setNormalState())
        }),
        (d.enable2 = function () {
          d.isDisabled2 && ((d.isDisabled2 = !1), FWDAnimation.to(d, 0.6, { alpha: 1 }))
        }),
        (d.setShareButton = function (e) {
          ;(d.inst = e), (d.screen.className = n + "-share-button"), (d.style().position = "relative"), (d.style().display = "inline-block")
        }),
        (d.setHideDrag = function (e) {
          FWDAnimation.killTweensOf(d.n_do), e ? FWDAnimation.to(d.n_do, 0.4, { alpha: 0.3, delay: 0.4 }) : FWDAnimation.to(d.n_do, 0.4, { alpha: 1 })
        }),
        d.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div")
    }),
      (t.CLICK = "onClick"),
      (t.MOUSE_OVER = "onMouseOver"),
      (t.SHOW_TOOLTIP = "showTooltip"),
      (t.MOUSE_OUT = "onMouseOut"),
      (t.MOUSE_UP = "onMouseDown"),
      (t.prototype = null),
      (e.FWDRLSimpleButton = t)
  })(window),
  (function (e) {
    "use strict"
    var t = function (e, o, n, s, r, a, d, l, p) {
      var _ = this,
        m = t.prototype
      ;(_.thumbnailsOverlayColor = d),
        (_.id = o),
        (_.borderSize = r),
        (_.thumbnailH = n),
        (_.isSelected = !0),
        (_.isMbl = FWDRLUtils.isMbl),
        (_.init = function () {
          _.setNormalState(!1), (_.screen.className = FWDRL.cls + "-thumbnail"), (_.screen.id = FWDRL.cls + "_thumbnail_" + _.id)
        }),
        (_.setupBorder = function () {
          ;(_.border_do = new FWDRLDO("div")),
            (_.border_do.style().boxSizing = "border-box"),
            (_.border_do.style().border = _.borderSize + "px solid " + a),
            _.border_do.setWidth(_.finalW),
            _.border_do.setHeight(_.finalH),
            _.border_do.setAlpha(0),
            _.addChild(_.border_do)
        }),
        (_.setImage = function (t) {
          var o = t.width,
            n = t.height,
            s = 2 * -_.borderSize,
            r = _.thumbnailH / n
          ;(_.image_do = new FWDRLDO("img")),
            _.image_do.setScreen(t),
            (_.finalW = Math.round(o * r)),
            (_.finalH = _.thumbnailH),
            _.resizeImage(),
            _.isMbl || (_.screen.addEventListener("mouseover", _.onMOVH), _.screen.addEventListener("mouseout", _.onMOTH)),
            _.screen.addEventListener("click", _.onMCH),
            _.addChild(_.image_do),
            (_.overlay_do = new FWDRLDO("div")),
            _.overlay_do.setWidth(_.finalW),
            _.overlay_do.setHeight(_.finalH),
            _.overlay_do.setBkColor(_.thumbnailsOverlayColor),
            _.addChild(_.overlay_do),
            p &&
              l &&
              ((_.icon_do = new FWDRLDO("img")),
              (_.iconImg_img = new Image()),
              (_.iconImg_img.onload = function () {
                _.icon_do.setScreen(_.iconImg_img),
                  (_.icon_do.trldo = !0),
                  _.icon_do.setX(parseInt((_.finalW - _.icon_do.w) / 2)),
                  _.icon_do.setY(parseInt((_.finalH - _.icon_do.h) / 2)),
                  _.addChild(_.icon_do),
                  setTimeout(function () {
                    _ && (_.icon_do.setAlpha(0), FWDAnimation.to(_.icon_do, 0.8, { alpha: 1, ease: Quint.easeOut }))
                  }, 50)
              }),
              (_.iconImg_img.src = l)),
            _.setupBorder(),
            _.hide(!1),
            _.show(!0),
            e.id == _.id && _.disable()
        }),
        (_.resizeImage = function () {
          _.image_do.setWidth(_.finalW), _.image_do.setHeight(_.finalH), _.setWidth(_.finalW), _.setHeight(_.finalH)
        }),
        (_.onMouseOverHandler = function (o) {
          _.dispatchEvent(t.HOVER)
          _.isDisabled || ((!o.pointerType || o.pointerType == o.MSPOINTER_TYPE_MOUSE) && _.setSelectedState(!0))
        }),
        (_.onMOVH = function (t) {
          _.isDisabled || ((!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) && _.setSelectedState(!0))
        }),
        (_.onMOTH = function (t) {
          _.isDisabled || ((!t.pointerType || t.pointerType == t.MSPOINTER_TYPE_MOUSE) && _.setNormalState(!0))
        }),
        (_.onMCH = function () {
          _.isDisabled || _.dispatchEvent(t.CLICK, { id: _.id })
        }),
        (_.setNormalState = function () {
          _.isSelected &&
            ((_.isSelected = !1),
            _.icon_do && (FWDAnimation.killTweensOf(_.icon_do), FWDAnimation.to(_.icon_do, 1, { alpha: 1, scale: 1, ease: Elastic.easeOut })),
            _.border_do && (FWDAnimation.killTweensOf(_.border_do), FWDAnimation.to(_.border_do, 0.6, { alpha: 0, ease: Expo.easeOut })),
            _.overlay_do && (FWDAnimation.killTweensOf(_.overlay_do), FWDAnimation.to(_.overlay_do, 0.6, { alpha: 1, ease: Expo.easeOut })))
        }),
        (_.setSelectedState = function () {
          _.isSelected ||
            ((_.isSelected = !0),
            _.icon_do && (FWDAnimation.killTweensOf(_.icon_do), FWDAnimation.to(_.icon_do, 0.6, { scale: 0, ease: Expo.easeOut })),
            _.border_do && (FWDAnimation.killTweensOf(_.border_do), FWDAnimation.to(_.border_do, 0.6, { alpha: 1, ease: Expo.easeOut })),
            _.overlay_do && (FWDAnimation.killTweensOf(_.overlay_do), FWDAnimation.to(_.overlay_do, 0.6, { alpha: 0, ease: Expo.easeOut })))
        }),
        (_.show = function (e) {
          FWDAnimation.killTweensOf(_), e ? FWDAnimation.to(_, 0.8, { y: 0, ease: Expo.easeInOut }) : _.setY(0)
        }),
        (_.hide = function (e) {
          FWDAnimation.killTweensOf(_), e ? FWDAnimation.to(_, 0.8, { y: s + _.thumbnailH + 2 }) : _.setY(s + _.thumbnailH + 2)
        }),
        (_.enable = function () {
          _.isDisabled && ((_.isDisabled = !1), _.setNormalState(!0))
        }),
        (_.disable = function () {
          ;(_.isDisabled = !0), _.setSelectedState(!0)
        }),
        (_.destroy = function () {
          _.iconImg_img && ((_.iconImg_img.onload = null), (_.iconImg_img.onerror = null)),
            _.border_do && (FWDAnimation.killTweensOf(_.border_do), _.border_do.destroy()),
            _.image_do && (FWDAnimation.killTweensOf(_.image_do), _.image_do.destroy()),
            _.overlay_do && (FWDAnimation.killTweensOf(_.overlay_do), _.overlay_do.destroy()),
            _.icon_do && (FWDAnimation.killTweensOf(_.icon_do), _.icon_do.destroy()),
            _.screen.removeEventListener("mouseover", _.onMouseOverHandler),
            _.screen.removeEventListener("click", _.onMCH),
            (_.iconImg_img = null),
            (_.border_do = null),
            (_.image_do = null),
            (_.overlay_do = null),
            (_.icon_do = null),
            _.setInnerHTML(""),
            m.destroy(),
            (m = null),
            (_ = null),
            (t.prototype = null)
        }),
        _.init()
    }
    ;(t.setPrototype = function () {
      t.prototype = new FWDRLDO("div")
    }),
      (t.HOVER = "onHover"),
      (t.CLICK = "onClick"),
      (t.prototype = null),
      (e.FWDRLThumb = t)
  })(window),
  (function (t) {
    var o = function (n) {
      "use strict"
      var s = this,
        e = o.prototype
      ;(s._d = n._d),
        (s.spaceBetweenThumbnails = n.spaceBetweenThumbnails),
        (s.totalW = 0),
        (s.vx = 0),
        (s.vx2 = 0),
        (s.lastPresedX = 0),
        (s.totalThumbs = 0),
        (s.countLoadedThumbs = 0),
        (s.id = 0),
        (s.areCreated = !1),
        (s.isMbl = FWDRLUtils.isMbl),
        (s.init = function () {
          s.setOverflow("visible"),
            (s.mainHld_do = new FWDRLDO("div")),
            s.mainHld_do.setOverflow("visible"),
            (s.thumbsHld_do = new FWDRLDO("div")),
            s.thumbsHld_do.setOverflow("visible"),
            s.mainHld_do.addChild(s.thumbsHld_do),
            s.addChild(s.mainHld_do)
        }),
        (s.positionAndResize = function () {
          ;(s.stageW = n.stageW), s.setY(n.stageH), s.mainHld_do.setWidth(s.stageW), s.mainHld_do.setHeight(s.stageH), s.show(!1), s.areCreated && s.positionThumbnails(!1)
        }),
        (s.setupThumbnails = function () {
          ;(s.areCreated = !0), (s.thumbs_ar = []), (s.gallery_ar = n.gallery_ar), (s.totalThumbs = s.gallery_ar.length), (s.countLoadedThumbs = 0), s.loadThumbnails(), s.addScrollSupport()
        }),
        (s.loadThumbnails = function () {
          return s.countLoadedThumbs > s.totalThumbs - 1
            ? void (s.allLoaded_to = setTimeout(function () {
                s.allLoaded = !0
              }, 2e3))
            : void ((s.image_img = new Image()), (s.image_img.onload = s.onThumbnailLoadComplete), (s.image_img.src = s.gallery_ar[s.countLoadedThumbs].thumbSrc))
        }),
        (s.onThumbnailLoadComplete = function () {
          if (n.gallery_ar) {
            var e = n.gallery_ar[s.countLoadedThumbs].type,
              t
            ;(e == FWDRL.AUDIO || e == FWDRL.VIDEO || e == FWDRL.YOUTUBE || e == FWDRL.VIMEO) && (t = s._d.videoIconPath), FWDRLThumb.setPrototype()
            var o = new FWDRLThumb(
              s,
              s.countLoadedThumbs,
              n.thumbnailH,
              n.tempThumbnailsOffsetBottom,
              n.thumbnailsBorderSize,
              n.thumbnailsBorderColor,
              n.thumbnailsOverlayColor,
              t,
              n.showThumbnailsIcon
            )
            ;(s.thumbs_ar[s.countLoadedThumbs] = o),
              o.addListener(FWDRLThumb.HOVER, s.thumbMOH),
              o.addListener(FWDRLThumb.CLICK, s.thumbMCH),
              o.setImage(s.image_img),
              (s.totalW += o.w + s.spaceBetweenThumbnails),
              s.countLoadedThumbs == s.totalThumbs - 1 && (s.totalW -= s.spaceBetweenThumbnails),
              0 != s.countLoadedThumbs && o.setX(s.thumbs_ar[s.countLoadedThumbs - 1].x + s.thumbs_ar[s.countLoadedThumbs - 1].w + s.spaceBetweenThumbnails),
              0 == s.countLoadedThumbs && s.thumbsHld_do.setX(Math.round(s.stageW - o.w) / 2),
              s.thumbsHld_do.addChild(o),
              s.positionThumbnails(!0),
              s.countLoadedThumbs++,
              (s.loadWithDelayId_to = setTimeout(s.loadThumbnails, 50))
          }
        }),
        (s.stopToLoadThumbanils = function () {
          s.image_img && ((s.image_img.onload = null), (s.image_img.onerror = null), (s.image_img.src = ""), (s.image_img = null)), clearTimeout(s.loadWithDelayId_to)
        }),
        (s.thumbMCH = function (t) {
          !n.isShowed || s.isMv || s.dispatchEvent(FWDRLThumb.CLICK, { id: t.id })
        }),
        (s.thumbMOH = function () {
          !n.isShowed
        }),
        (s.positionThumbnails = function (e, t) {
          if (
            ((!s.isDragging && s.isShowed && !n.startToHide) || t) &&
            s.areCreated &&
            (s.finalX,
            (s.curThumb = s.thumbs_ar[s.id]),
            (s.lastCreateThumb = s.thumbs_ar[s.thumbs_ar.length - 1]),
            s.totalW <= s.stageW
              ? (s.finalX = Math.round((s.stageW - s.totalW) / 2))
              : ((s.finalX = s.curThumb ? Math.round(-s.curThumb.x + (s.stageW - s.curThumb.w) / 2) : Math.round(-s.lastCreateThumb.x + (s.stageW - s.lastCreateThumb.w) / 2)),
                s.finalX > n.tempThumbnailsOffsetBottom
                  ? (s.finalX = n.tempThumbnailsOffsetBottom)
                  : s.finalX < s.stageW - s.totalW - n.tempThumbnailsOffsetBottom && (s.finalX = s.stageW - s.totalW - n.tempThumbnailsOffsetBottom)),
            s.thumbsHld_do.setWidth(s.totalW),
            s.thumbsHld_do.setHeight(s.stageH),
            s.stopToUpdateDrag(),
            !s.isDragging)
          ) {
            var o = Expo.easeOut
            s.allLoaded && (o = Expo.easeInOut), FWDAnimation.killTweensOf(s.thumbsHld_do), e ? FWDAnimation.to(s.thumbsHld_do, 0.8, { x: s.finalX, ease: o }) : s.thumbsHld_do.setX(s.finalX)
          }
        }),
        (s.addScrollSupport = function () {
          s.mainHld_do.screen.addEventListener("touchstart", s.scrollMDH),
            s.mainHld_do.screen.addEventListener("mousedown", s.scrollMDH),
            (s.thumbsHld_do.style().cursor = n.handC),
            s.stopToUpdateDrag()
        }),
        (s.removeScrollSupport = function () {
          s.mainHld_do.screen.removeEventListener("touchstart", s.scrollMDH),
            s.mainHld_do.screen.removeEventListener("mousedown", s.scrollMDH),
            t.removeEventListener("touchend", s.scrollMEH),
            t.removeEventListener("touchmove", s.scrollMVH, { passive: !1 })
        }),
        (s.scrollMDH = function (o) {
          if (!n.isAnim) {
            var e = FWDRLUtils.getViewportMouseCoordinates(o)
            t.addEventListener("mouseup", s.scrollMEH),
              t.addEventListener("mousemove", s.scrollMVH),
              t.addEventListener("touchend", s.scrollMEH),
              t.addEventListener("touchmove", s.scrollMVH, { passive: !1 }),
              (s.isDragging2 = !0),
              clearTimeout(s.isMv_to),
              (s.isMv = !1),
              (s.finalX = s.lastFinalX = s.thumbsHld_do.x),
              (s.lastPresedX = s.lastPresedX2 = e.screenX),
              (s.thumbsHld_do.style().cursor = n.grabC),
              n.showDisable(!0),
              s.startToUpdateDrag()
          }
        }),
        (s.scrollMVH = function (t) {
          t.preventDefault && t.preventDefault()
          var e = FWDRLUtils.getViewportMouseCoordinates(t),
            o = e.screenX - s.lastPresedX
          ;(s.finalX += o), (s.finalX = Math.round(s.finalX))
          var r = e.screenX - s.lastPresedX2
          ;(s.lastPresedX = e.screenX), 5 < Math.abs(r) && ((s.isDragging = !0), n.showDisable(!0, !0), (s.isMv = !0)), FWDAnimation.killTweensOf(s.thumbsHld_do), s.thumbsHld_do.setX(s.finalX)
        }),
        (s.scrollMEH = function () {
          ;(s.isDragging = s.isDragging2 = !1),
            clearTimeout(s.isMv_to),
            (s.isMv_to = setTimeout(function () {
              s.isMv = !0
            }, 200)),
            n.hideDisable(),
            (s.thumbsHld_do.style().cursor = n.handC),
            t.removeEventListener("mouseup", s.scrollMEH),
            t.removeEventListener("mousemove", s.scrollMVH),
            t.removeEventListener("touchend", s.scrollMEH),
            t.removeEventListener("touchmove", s.scrollMVH)
        }),
        (s.stopToUpdateDrag = function () {
          FWDAnimation.killTweensOf(s.thumbsHld_do), cancelAnimationFrame(s.updateMov_af)
        }),
        (s.startToUpdateDrag = function () {
          s.stopToUpdateDrag(), s.updateDrag()
        }),
        (s.updateDrag = function () {
          ;(s.updateMov_af = requestAnimationFrame(s.updateDrag)),
            s.isDragging2
              ? ((s.vx = s.finalX - s.lastFinalX), (s.lastFinalX = s.finalX), 20 > Math.abs(s.vx) && (s.vx = 0))
              : ((s.vx *= n.friction),
                (s.finalX += s.vx),
                s.stageW <= s.totalW
                  ? s.finalX > n.tempThumbnailsOffsetBottom
                    ? ((s.vx2 = 0.3 * (n.tempThumbnailsOffsetBottom - s.finalX)), (s.vx *= n.friction), (s.finalX += s.vx2))
                    : s.finalX <= s.stageW - s.totalW - n.tempThumbnailsOffsetBottom &&
                      ((s.vx2 = 0.3 * (s.stageW - s.totalW - s.finalX - n.tempThumbnailsOffsetBottom)), (s.vx *= n.friction), (s.finalX += s.vx2))
                  : ((s.vx2 = 0.3 * ((s.stageW - s.totalW) / 2 - s.finalX)), (s.vx *= n.friction), (s.finalX += s.vx2)),
                (s.finalX = parseFloat(s.finalX.toFixed(2))),
                s.prevFinalX == s.finalX && (s.stopToUpdateDrag(), (s.finalX = Math.round(s.finalX))),
                FWDAnimation.killTweensOf(s.thumbsHld_do),
                s.thumbsHld_do.setX(s.finalX),
                (s.prevFinalX = s.finalX))
        }),
        (s.disableOrEnableThumbnails = function () {
          if (((s.id = n.mId), !!s.thumbs_ar)) {
            for (var e = s.thumbs_ar.length, t = 0, o; t < e; t++) (o = s.thumbs_ar[t]), t == n.mId ? o.disable() : o.enable()
            s.positionThumbnails(!0)
          }
        }),
        (s.destoryThumbnails = function () {
          if (s.areCreated || s.thumbs_ar) {
            ;(s.areCreated = s.allLoaded = !1), clearTimeout(s.allLoaded_to)
            for (var e = s.thumbs_ar.length, t = 0, o; t < e; t++) (o = s.thumbs_ar[t]), FWDAnimation.killTweensOf(o), s.thumbsHld_do.removeChild(o), o.destroy()
            ;(s.thumbs_ar = null), (s.totalW = 0), s.stopToLoadThumbanils(), s.removeScrollSupport()
          }
        }),
        (s.show = function (e) {
          n.isMax || ((s.isShowed = !0), FWDAnimation.killTweensOf(s.mainHld_do), e ? FWDAnimation.to(s.mainHld_do, 0.8, { y: -s.stageH, ease: Expo.easeInOut }) : s.mainHld_do.setY(-s.stageH))
        }),
        (s.hide = function (e) {
          ;(s.isShowed = !1), FWDAnimation.killTweensOf(s.mainHld_do), e ? FWDAnimation.to(s.mainHld_do, 0.8, { y: 0, ease: Expo.easeInOut }) : s.mainHld_do.setY(0), s.stopToUpdateDrag()
        }),
        (s.hideForGood = function () {
          s.mainHld_do.setY(-5e3)
        }),
        s.init()
    }
    ;(o.setPrototype = function () {
      o.prototype = new FWDRLDO("div", "relative")
    }),
      (o.prototype = null),
      (t.FWDRLThumbs = o)
  })(window),
  (function (e) {
    var t = function (e) {
      "use strict"
      var o = this,
        n = t.prototype
      ;(o.delay = e),
        (o.isStopped = !0),
        (o.stop = function () {
          o.isStopped || (o.pause(), (o.isStopped = !0), o.dispatchEvent(t.STOP))
        }),
        (o.start = function () {
          o.isStopped && ((o.isStopped = !1), clearTimeout(o.timeOutId), (o.timeOutId = setTimeout(o.onTimeHandler, o.delay)), o.dispatchEvent(t.START))
        }),
        (o.pause = function () {
          o.isStopped || (clearTimeout(o.timeOutId), o.dispatchEvent(t.PAUSE))
        }),
        (o.resume = function () {
          o.isStopped || (clearTimeout(o.timeOutId), (o.timeOutId = setTimeout(o.onTimeHandler, o.delay)), o.dispatchEvent(t.RESUME))
        }),
        (o.onTimeHandler = function () {
          o.dispatchEvent(t.TIME)
        })
    }
    ;(t.setProtptype = function () {
      t.prototype = new FWDRLEventDispatcher()
    }),
      (t.START = "start"),
      (t.STOP = "stop"),
      (t.RESUME = "resume"),
      (t.PAUSE = "pause"),
      (t.TIME = "time"),
      (t.prototype = null),
      (e.FWDRLTimerManager = t)
  })(window),
  (function (e) {
    function t() {
      for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"], t, o; (t = e.shift()); )
        if (
          "undefined" != typeof s.dumy.style[t] &&
          ((s.dumy.style.position = "absolute"),
          (o = s.dumy.getBoundingClientRect().left),
          (s.dumy.style[t] = "translate3d(500px, 0px, 0px)"),
          (o = Math.abs(s.dumy.getBoundingClientRect().left - o)),
          100 < o && 900 > o)
        ) {
          try {
            document.documentElement.removeChild(s.dumy)
          } catch (t) {}
          return !0
        }
      try {
        document.documentElement.removeChild(s.dumy)
      } catch (t) {}
      return !1
    }
    function o() {
      for (var e = ["transform", "msTransform", "WebkitTransform", "MozTransform", "OTransform", "KhtmlTransform"], t; (t = e.shift()); ) if ("undefined" != typeof s.dumy.style[t]) return !0
      try {
        document.documentElement.removeChild(s.dumy)
      } catch (t) {}
      return !1
    }
    var s = function () {}
    ;(s.dumy = document.createElement("div")),
      (s.trim = function (e) {
        return e.replace(/\s/gi, "")
      }),
      (s.splitAndTrim = function (e, t) {
        for (var o = e.split(","), n = o.length, r = 0; r < n; r++) t && (o[r] = s.trim(o[r]))
        return o
      }),
      (s.indexOfArray = function (e, t) {
        for (var o = e.length, n = 0; n < o; n++) if (e[n] === t) return n
        return -1
      }),
      (s.randomizeArray = function (e) {
        for (var t = [], o = e.concat(), n = o.length, s = 0, r; s < n; s++) (r = Math.floor(Math.random() * o.length)), t.push(o[r]), o.splice(r, 1)
        return t
      }),
      (s.prt = function (t, o) {
        for (void 0 === o && (o = 1); o-- && t; ) t = t.parentNode
        return t && 1 === t.nodeType ? t : null
      }),
      (s.sibling = function (t, o) {
        for (; t && 0 !== o; )
          if (0 < o) {
            if (t.nextElementSibling) t = t.nextElementSibling
            else for (var t = t.nextSibling; t && 1 !== t.nodeType; t = t.nextSibling);
            o--
          } else {
            if (t.previousElementSibling) t = t.previousElementSibling
            else for (var t = t.previousSibling; t && 1 !== t.nodeType; t = t.previousSibling);
            o++
          }
        return t
      }),
      (s.getChildAt = function (t, e) {
        var o = s.getChildren(t)
        return 0 > e && (e += o.length), 0 > e ? null : o[e]
      }),
      (s.getChildById = function (e) {
        return document.getElementById(e) || void 0
      }),
      (s.getChildren = function (t, e) {
        for (var o = [], n = t.firstChild; null != n; n = n.nextSibling) e ? o.push(n) : 1 === n.nodeType && o.push(n)
        return o
      }),
      (s.getChildrenFromAttribute = function (t, e, o) {
        for (var n = [], r = t.firstChild; null != r; r = r.nextSibling) o && s.hasAttribute(r, e) ? n.push(r) : 1 === r.nodeType && s.hasAttribute(r, e) && n.push(r)
        return 0 == n.length ? void 0 : n
      }),
      (s.getChildFromNodeListFromAttribute = function (t, e, o) {
        for (var n = t.firstChild; null != n; n = n.nextSibling) {
          if (o && s.hasAttribute(n, e)) return n
          if (1 === n.nodeType && s.hasAttribute(n, e)) return n
        }
      }),
      (s.getAttributeValue = function (t, e) {
        return s.hasAttribute(t, e) ? t.getAttribute(e) : void 0
      }),
      (s.hasAttribute = function (t, e) {
        if (t.hasAttribute) return t.hasAttribute(e)
        var o = t.getAttribute(e)
        return !!o
      }),
      (s.insertNodeAt = function (e, t, o) {
        var n = s.children(e)
        if (0 > o || o > n.length) throw new Error("invalid index!")
        else e.insertBefore(t, n[o])
      }),
      (s.hasCanvas = function () {
        return !!document.createElement("canvas")
      }),
      (s.hitTest = function (e, t, o) {
        if (!e) throw Error("Hit test target is null!")
        var n = e.getBoundingClientRect()
        return !!(t >= n.left && t <= n.left + (n.right - n.left) && o >= n.top && o <= n.top + (n.bottom - n.top))
      }),
      (s.getScrollOffsets = function () {
        return null == e.pageXOffset
          ? "CSS1Compat" == document.compatMode
            ? { x: document.documentElement.scrollLeft, y: document.documentElement.scrollTop }
            : void 0
          : { x: e.pageXOffset, y: e.pageYOffset }
      }),
      (s.getViewportSize = function () {
        return s.hasPointerEvent && 1 < navigator.msMaxTouchPoints
          ? { w: document.documentElement.clientWidth || e.innerWidth, h: document.documentElement.clientHeight || e.innerHeight }
          : s.isMbl
          ? { w: e.innerWidth, h: e.innerHeight }
          : { w: document.documentElement.clientWidth || e.innerWidth, h: document.documentElement.clientHeight || e.innerHeight }
      }),
      (s.getViewportMouseCoordinates = function (t) {
        var e = s.getScrollOffsets()
        return t.touches
          ? { screenX: null == t.touches[0] ? t.touches.pageX - e.x : t.touches[0].pageX - e.x, screenY: null == t.touches[0] ? t.touches.pageY - e.y : t.touches[0].pageY - e.y }
          : { screenX: t.clientX == null ? t.pageX - e.x : t.clientX, screenY: t.clientY == null ? t.pageY - e.y : t.clientY }
      }),
      (s.hasPointerEvent = (function () {
        return !!e.navigator.msPointerEnabled || !!e.navigator.pointerEnabled
      })()),
      (s.isMbl = (function () {
        if ((s.hasPointerEvent && 1 < navigator.msMaxTouchPoints) || (s.hasPointerEvent && 1 < navigator.maxTouchPoints)) return !0
        var t = ["android", "webos", "iphone", "ipad", "blackberry", "kfsowi"]
        for (i in t) if (-1 != (navigator.userAgent + "").toLowerCase().indexOf((t[i] + "").toLowerCase())) return !0
        return !("macintel" !== navigator.platform.toLowerCase() || !(1 < navigator.maxTouchPoints) || e.MSStream)
      })()),
      (s.isAndroid = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("android".toLowerCase())
      })()),
      (s.isChrome = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("chrome")
      })()),
      (s.isSafari = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("safari") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
      })()),
      (s.isOpera = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("opera") && -1 == navigator.userAgent.toLowerCase().indexOf("chrome")
      })()),
      (s.isFirefox = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("firefox")
      })()),
      (s.isIE = (function () {
        var e = !(-1 == navigator.userAgent.toLowerCase().indexOf("msie")) || !(-1 == navigator.userAgent.toLowerCase().indexOf("edge"))
        return !!(e || document.documentElement.msRequestFullscreen)
      })()),
      (s.isIE11 = (function () {
        return !(s.isIE || !document.documentElement.msRequestFullscreen)
      })()),
      (s.isIEAndLessThen9 = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8")
      })()),
      (s.isIEAndLessThen10 = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 8") || -1 != navigator.userAgent.toLowerCase().indexOf("msie 9")
      })()),
      (s.isIE7 = (function () {
        return -1 != navigator.userAgent.toLowerCase().indexOf("msie 7")
      })()),
      (s.isIOS = (function () {
        return navigator.userAgent.match(/(iPad|iPhone|iPod)/g)
      })()),
      (s.isIphone = (function () {
        return navigator.userAgent.match(/(iPhone|iPod)/g)
      })()),
      (s.isMAC = (function () {
        return -1 != navigator.appVersion.toLowerCase().indexOf("macintosh")
      })()),
      (s.isLocal = (function () {
        return -1 != location.href.indexOf("file:")
      })()),
      (s.hasFullScreen = (function () {
        return s.dumy.requestFullScreen || s.dumy.mozRequestFullScreen || s.dumy.webkitRequestFullScreen || s.dumy.msieRequestFullScreen
      })())
    ;(s.onReady = function (e) {
      document.addEventListener
        ? document.addEventListener("DOMContentLoaded", function () {
            e()
          })
        : (document.onreadystatechange = function () {
            "complete" == document.readyState && e()
          })
    }),
      (s.checkIfHasTransforms = function () {
        s.isReadyMethodCalled_bl || (document.documentElement.appendChild(s.dumy), (s.hasTransform3d = t()), (s.hasTransform2d = o()), (s.isReadyMethodCalled_bl = !0))
      }),
      (s.disableElementSelection = function (t) {
        try {
          t.style.userSelect = "none"
        } catch (t) {}
        try {
          t.style.MozUserSelect = "none"
        } catch (t) {}
        try {
          t.style.webkitUserSelect = "none"
        } catch (t) {}
        try {
          t.style.khtmlUserSelect = "none"
        } catch (t) {}
        try {
          t.style.oUserSelect = "none"
        } catch (t) {}
        try {
          t.style.msUserSelect = "none"
        } catch (t) {}
        try {
          t.msUserSelect = "none"
        } catch (t) {}
        t.onselectstart = function () {
          return !1
        }
      }),
      (s.getSearchArgs = function () {
        for (var e = {}, t = location.href.substr(location.href.indexOf("?") + 1), o = t.split("&"), n = 0; n < o.length; n++) {
          var s = o[n].indexOf("="),
            r = o[n].substring(0, s),
            a = o[n].substring(s + 1)
          ;(a = decodeURIComponent(a)), (e[r] = a)
        }
        return e
      }),
      (s.getHashArgs = function (e) {
        for (var t = {}, o = e.substr(e.indexOf("#") + 1) || location.hash.substring(1), n = o.split("&"), s = 0; s < n.length; s++) {
          var r = n[s].indexOf("="),
            a = n[s].substring(0, r),
            d = n[s].substring(r + 1)
          ;(d = decodeURIComponent(d)), (t[a] = d)
        }
        return t
      }),
      (s.isReadyMethodCalled_bl = !1),
      (e.FWDRLUtils = s)
  })(window)
var _fwd_fwdScope
window.FWDAnimation ||
  ((
    (_fwd_fwdScope = "undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window)._fwd_fwdQueue || (_fwd_fwdScope._fwd_fwdQueue = [])
  ).push(function () {
    "use strict"
    function u(o, t, n, s) {
      n === s && (n = s - (s - t) / 1e6), o === t && (t = o + (n - o) / 1e6), (this.a = o), (this.b = t), (this.c = n), (this.d = s), (this.da = s - o), (this.ca = n - o), (this.ba = t - o)
    }
    function S(d, t, e, m) {
      var r = { a: d },
        s = {},
        n = {},
        a = { c: m },
        o = (d + t) / 2,
        l = (t + e) / 2,
        c = (e + m) / 2,
        h = (o + l) / 2,
        u = (l + c) / 2,
        p = (u - h) / 8
      return (r.b = o + (d - o) / 4), (s.b = h + p), (r.c = s.a = (r.b + s.b) / 2), (s.c = n.a = (h + u) / 2), (n.b = u - p), (a.b = c + (m - c) / 4), (n.c = a.a = (n.b + a.b) / 2), [r, s, n, a]
    }
    function d(g, b, y, v, r, x) {
      var T = {},
        c = [],
        d = x || g[0],
        m,
        O,
        P,
        k,
        I,
        A,
        D,
        H
      for (O in ((r =
        "string" == typeof r
          ? "," + r + ","
          : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,"),
      null == b && (b = 1),
      g[0]))
        c.push(O)
      if (1 < g.length) {
        for (H = g[g.length - 1], D = !0, m = c.length; -1 < --m; )
          if (((O = c[m]), 0.05 < Math.abs(d[O] - H[O]))) {
            D = !1
            break
          }
        D && ((g = g.concat()), x && g.unshift(x), g.push(g[1]), (x = g[g.length - 3]))
      }
      for (w.length = B.length = C.length = 0, m = c.length; -1 < --m; )
        (O = c[m]),
          (_[O] = -1 !== r.indexOf("," + O + ",")),
          (T[O] = (function (d, p, e, _) {
            var r = [],
              m,
              c,
              g,
              f,
              b,
              y
            if (_) for (c = (d = [_].concat(d)).length; -1 < --c; ) "string" == typeof (y = d[c][p]) && "=" === y.charAt(1) && (d[c][p] = _[p] + +(y.charAt(0) + y.substr(2)))
            if (0 > (m = d.length - 2)) return (r[0] = new u(d[0][p], 0, 0, d[-1 > m ? 0 : 1][p])), r
            for (c = 0; c < m; c++)
              (g = d[c][p]), (f = d[c + 1][p]), (r[c] = new u(g, 0, 0, f)), e && ((b = d[c + 2][p]), (w[c] = (w[c] || 0) + (f - g) * (f - g)), (B[c] = (B[c] || 0) + (b - f) * (b - f)))
            return (r[c] = new u(d[c][p], 0, 0, d[c + 1][p])), r
          })(g, O, _[O], x))
      for (m = w.length; -1 < --m; ) (w[m] = Math.sqrt(w[m])), (B[m] = Math.sqrt(B[m]))
      if (!v) {
        for (m = c.length; -1 < --m; ) if (_[O]) for (A = (P = T[c[m]]).length - 1, k = 0; k < A; k++) (I = P[k + 1].da / B[k] + P[k].da / w[k] || 0), (C[k] = (C[k] || 0) + I * I)
        for (m = C.length; -1 < --m; ) C[m] = Math.sqrt(C[m])
      }
      for (m = c.length, k = y ? 4 : 1; -1 < --m; )
        (function (b, t, e, T, r) {
          for (var s = b.length - 1, g = 0, O = b[0].a, P = 0, k, I, A, D, H, E, L, M, F, R, z, X; P < s; P++)
            (k = (D = b[g]).a),
              (I = D.d),
              (A = b[g + 1].d),
              (L = r
                ? ((R = w[P]),
                  (X = (0.25 * (((z = B[P]) + R) * t)) / ((!T && C[P]) || 0.5)),
                  I - ((H = I - (I - k) * (T ? 0.5 * t : 0 === R ? 0 : X / R)) + ((((E = I + (A - I) * (T ? 0.5 * t : 0 === z ? 0 : X / z)) - H) * ((3 * R) / (R + z) + 0.5)) / 4 || 0)))
                : I - ((H = I - 0.5 * ((I - k) * t)) + (E = I + 0.5 * ((A - I) * t))) / 2),
              (H += L),
              (E += L),
              (D.c = M = H),
              (D.b = 0 == P ? (O = D.a + 0.6 * (D.c - D.a)) : O),
              (D.da = I - k),
              (D.ca = M - k),
              (D.ba = O - k),
              e ? ((F = S(k, O, M, I)), b.splice(g, 1, F[0], F[1], F[2], F[3]), (g += 4)) : g++,
              (O = E)
          ;((D = b[g]).b = O), (D.c = O + 0.4 * (D.d - O)), (D.da = D.d - D.a), (D.ca = D.c - D.a), (D.ba = O - D.a), e && ((F = S(D.a, O, D.c, D.d)), b.splice(g, 1, F[0], F[1], F[2], F[3]))
        })((P = T[(O = c[m])]), b, y, v, _[O]),
          D && (P.splice(0, k), P.splice(P.length - k, k))
      return T
    }
    var o, w, B, C, _, n, y, e
    _fwd_fwdScope.FWDFWD_fwdDefine(
      "FWDAnimation",
      ["core.FWDAnimation", "core.FWDSimpleTimeline", "FWDTweenLite"],
      function (S, d, B) {
        function g(o) {
          for (var t = [], e = o.length, n = 0; n !== e; t.push(o[n++]));
          return t
        }
        function a(o, t, e) {
          var a = o.cycle,
            n,
            d
          for (n in a) (d = a[n]), (o[n] = "function" == typeof d ? d(e, t[e]) : d[e % d.length])
          delete o.cycle
        }
        function o(p, t, m, u) {
          ;(t = !1 !== t), (m = !1 !== m)
          for (var c = _((u = !1 !== u)), a = t && m && u, o = c.length, h, g; -1 < --o; ) (g = c[o]), (a || g instanceof d || ((h = g.target === g.vars.onComplete) && m) || (t && !h)) && g.paused(p)
        }
        var S = function (o, t, e) {
            B.call(this, o, t, e),
              (this._cycle = 0),
              (this._yoyo = !0 === this.vars.yoyo),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._dirty = !0),
              (this.render = S.prototype.render)
          },
          y = 1e-10,
          l = B._internals,
          v = l.isSelector,
          w = l.isArray,
          e = (S.prototype = B.to({}, 0.1, {})),
          t = []
        ;(S.version = "1.19.0"),
          (e.constructor = S),
          (e.kill()._gc = !1),
          (S.killTweensOf = S.killDelayedCallsTo = B.killTweensOf),
          (S.getTweensOf = B.getTweensOf),
          (S.lagSmoothing = B.lagSmoothing),
          (S.ticker = B.ticker),
          (S.render = B.render),
          (e.invalidate = function () {
            return (this._yoyo = !0 === this.vars.yoyo), (this._repeat = this.vars.repeat || 0), (this._repeatDelay = this.vars.repeatDelay || 0), this._uncache(!0), B.prototype.invalidate.call(this)
          }),
          (e.updateTo = function (o, t) {
            var e = this.ratio,
              r = this.vars.immediateRender || o.immediateRender,
              s
            for (s in (t &&
              this._startTime < this._timeline._time &&
              ((this._startTime = this._timeline._time), this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
            o))
              this.vars[s] = o[s]
            if (this._initted || r)
              if (t) (this._initted = !1), r && this.render(0, !0, !0)
              else if ((this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && B._onPluginEvent("_onDisable", this), 0.998 < this._time / this._duration)) {
                var d = this._totalTime
                this.render(0, !0, !1), (this._initted = !1), this.render(d, !0, !1)
              } else if (((this._initted = !1), this._init(), 0 < this._time || r)) for (var n = this._firstPT, p; n; ) (p = n.s + n.c), (n.c *= 1 / (1 - e)), (n.s = p - n.c), (n = n._next)
            return this
          }),
          (e.render = function (b, v, e) {
            this._initted || (0 === this._duration && this.vars.repeat && this.invalidate())
            var w = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._time,
              _ = this._totalTime,
              c = this._cycle,
              d = this._duration,
              m = this._rawPrevTime,
              g,
              x,
              S,
              T,
              B,
              O,
              C,
              P,
              k
            if (
              (w - 1e-7 <= b
                ? ((this._totalTime = w),
                  (this._cycle = this._repeat),
                  this._yoyo && 0 != (1 & this._cycle)
                    ? ((this._time = 0), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0))
                    : ((this._time = d), (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1)),
                  this._reversed || ((g = !0), (x = "onComplete"), (e = e || this._timeline.autoRemoveChildren)),
                  0 === d &&
                    ((!this._initted && this.vars.lazy && !e) ||
                      (this._startTime === this._timeline._duration && (b = 0),
                      (0 > m || (0 >= b && -1e-7 <= b) || (m === y && "isPause" !== this.data)) && m !== b && ((e = !0), y < m && (x = "onReverseComplete")),
                      (this._rawPrevTime = P = !v || b || m === b ? b : y))))
                : 1e-7 > b
                ? ((this._totalTime = this._time = this._cycle = 0),
                  (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                  (0 !== _ || (0 === d && 0 < m)) && ((x = "onReverseComplete"), (g = this._reversed)),
                  0 > b && ((this._active = !1), 0 === d && ((!this._initted && this.vars.lazy && !e) || (0 <= m && (e = !0), (this._rawPrevTime = P = !v || b || m === b ? b : y)))),
                  this._initted || (e = !0))
                : ((this._totalTime = this._time = b),
                  0 !== this._repeat &&
                    ((T = d + this._repeatDelay),
                    (this._cycle = (this._totalTime / T) >> 0),
                    0 !== this._cycle && this._cycle === this._totalTime / T && _ <= b && this._cycle--,
                    (this._time = this._totalTime - this._cycle * T),
                    this._yoyo && 0 != (1 & this._cycle) && (this._time = d - this._time),
                    this._time > d ? (this._time = d) : 0 > this._time && (this._time = 0)),
                  this._easeType
                    ? ((B = this._time / d),
                      (1 === (O = this._easeType) || (3 === O && 0.5 <= B)) && (B = 1 - B),
                      3 === O && (B *= 2),
                      1 === (C = this._easePower) ? (B *= B) : 2 === C ? (B *= B * B) : 3 === C ? (B *= B * B * B) : 4 === C && (B *= B * B * B * B),
                      (this.ratio = 1 === O ? 1 - B : 2 === O ? B : 0.5 > this._time / d ? B / 2 : 1 - B / 2))
                    : (this.ratio = this._ease.getRatio(this._time / d))),
              p !== this._time || e || c !== this._cycle)
            ) {
              if (!this._initted) {
                if ((this._init(), !this._initted || this._gc)) return
                if (!e && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                  return (this._time = p), (this._totalTime = _), (this._rawPrevTime = m), (this._cycle = c), l.lazyTweens.push(this), void (this._lazy = [b, v])
                this._time && !g ? (this.ratio = this._ease.getRatio(this._time / d)) : g && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
              }
              for (
                !1 !== this._lazy && (this._lazy = !1),
                  this._active || (!this._paused && this._time !== p && 0 <= b && (this._active = !0)),
                  0 === _ &&
                    (2 === this._initted && 0 < b && this._init(),
                    this._startAt && (0 <= b ? this._startAt.render(b, v, e) : (x = x || "_dummyGS")),
                    this.vars.onStart && ((0 === this._totalTime && 0 !== d) || v || this._callback("onStart"))),
                  S = this._firstPT;
                S;

              )
                S.f
                  ? S.t[S.p](S.c * this.ratio + S.s)
                  : ((k = S.c * this.ratio + S.s),
                    "x" == S.p
                      ? S.t.setX(k)
                      : "y" == S.p
                      ? S.t.setY(k)
                      : "z" == S.p
                      ? S.t.setZ(k)
                      : "angleX" == S.p
                      ? S.t.setAngleX(k)
                      : "angleY" == S.p
                      ? S.t.setAngleY(k)
                      : "angleZ" == S.p
                      ? S.t.setAngleZ(k)
                      : "w" == S.p
                      ? S.t.setWidth(k)
                      : "h" == S.p
                      ? S.t.setHeight(k)
                      : "alpha" == S.p
                      ? S.t.setAlpha(k)
                      : "scale" == S.p
                      ? S.t.setScale2(k)
                      : (S.t[S.p] = k)),
                  (S = S._next)
              this._onUpdate && (0 > b && this._startAt && this._startTime && this._startAt.render(b, v, e), v || (this._totalTime === _ && !x) || this._callback("onUpdate")),
                this._cycle !== c && (v || this._gc || (this.vars.onRepeat && this._callback("onRepeat"))),
                x &&
                  ((this._gc && !e) ||
                    (0 > b && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(b, v, e),
                    g && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                    !v && this.vars[x] && this._callback(x),
                    0 === d && this._rawPrevTime === y && P !== y && (this._rawPrevTime = 0)))
            } else _ !== this._totalTime && this._onUpdate && (v || this._callback("onUpdate"))
          }),
          (S.to = function (o, t, e) {
            return new S(o, t, e)
          }),
          (S.from = function (o, t, e) {
            return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), new S(o, t, e)
          }),
          (S.fromTo = function (o, t, e, n) {
            return (n.startAt = e), (n.immediateRender = 0 != n.immediateRender && 0 != e.immediateRender), new S(o, t, n)
          }),
          (S.staggerTo = S.allTo =
            function (m, b, y, x, T, s, n) {
              function O() {
                y.onComplete && y.onComplete.apply(y.onCompleteScope || this, arguments), T.apply(n || y.callbackScope || this, s || t)
              }
              x = x || 0
              var o = 0,
                C = [],
                _ = y.cycle,
                c = y.startAt && y.startAt.cycle,
                P,
                k,
                I,
                A
              for (w(m) || ("string" == typeof m && (m = B.selector(m) || m), v(m) && (m = g(m))), m = m || [], 0 > x && ((m = g(m)).reverse(), (x *= -1)), P = m.length - 1, I = 0; I <= P; I++) {
                for (A in ((k = {}), y)) k[A] = y[A]
                if ((_ && (a(k, m, I), null != k.duration && ((b = k.duration), delete k.duration)), c)) {
                  for (A in ((c = k.startAt = {}), y.startAt)) c[A] = y.startAt[A]
                  a(k.startAt, m, I)
                }
                ;(k.delay = o + (k.delay || 0)), I === P && T && (k.onComplete = O), (C[I] = new S(m[I], b, k)), (o += x)
              }
              return C
            }),
          (S.staggerFrom = S.allFrom =
            function (o, t, e, d, r, s, n) {
              return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), S.staggerTo(o, t, e, d, r, s, n)
            }),
          (S.staggerFromTo = S.allFromTo =
            function (d, t, e, l, r, s, n, a) {
              return (l.startAt = e), (l.immediateRender = 0 != l.immediateRender && 0 != e.immediateRender), S.staggerTo(d, t, l, r, s, n, a)
            }),
          (S.delayedCall = function (o, t, e, n, r) {
            return new S(t, 0, { delay: o, onComplete: t, onCompleteParams: e, callbackScope: n, onReverseComplete: t, onReverseCompleteParams: e, immediateRender: !1, useFrames: r, overwrite: 0 })
          }),
          (S.set = function (o, t) {
            return new S(o, 0, t)
          }),
          (S.isTweening = function (e) {
            return 0 < B.getTweensOf(e, !0).length
          })
        var p = function (o, t) {
            for (var e = [], n = 0, a = o._first; a; ) a instanceof B ? (e[n++] = a) : (t && (e[n++] = a), (n = (e = e.concat(p(a, t))).length)), (a = a._next)
            return e
          },
          _ = (S.getAllTweens = function (e) {
            return p(S._rootTimeline, e).concat(p(S._rootFramesTimeline, e))
          })
        return (
          (S.killAll = function (p, t, m, u) {
            null == t && (t = !0), null == m && (m = !0)
            for (var r = _(0 != u), a = r.length, o = t && m && u, l = 0, c, g; l < a; l++)
              (g = r[l]), (o || g instanceof d || ((c = g.target === g.vars.onComplete) && m) || (t && !c)) && (p ? g.totalTime(g._reversed ? 0 : g.totalDuration()) : g._enabled(!1, !1))
          }),
          (S.killChildTweensOf = function (d, p) {
            if (null != d) {
              var e = l.tweenLookup,
                o,
                _,
                m,
                u,
                c
              if (("string" == typeof d && (d = B.selector(d) || d), v(d) && (d = g(d)), w(d))) for (u = d.length; -1 < --u; ) S.killChildTweensOf(d[u], p)
              else {
                for (m in ((o = []), e)) for (_ = e[m].target.parentNode; _; ) _ === d && (o = o.concat(e[m].tweens)), (_ = _.parentNode)
                for (c = o.length, u = 0; u < c; u++) p && o[u].totalTime(o[u].totalDuration()), o[u]._enabled(!1, !1)
              }
            }
          }),
          ((S.pauseAll = function (n, t, e) {
            o(!0, n, t, e)
          }),
          (S.resumeAll = function (n, t, e) {
            o(!1, n, t, e)
          }),
          (S.globalTimeScale = function (o) {
            var n = S._rootTimeline,
              s = B.ticker.time
            return arguments.length
              ? ((o = o || y),
                (n._startTime = s - ((s - n._startTime) * n._timeScale) / o),
                (n = S._rootFramesTimeline),
                (s = B.ticker.frame),
                (n._startTime = s - ((s - n._startTime) * n._timeScale) / o),
                (n._timeScale = S._rootTimeline._timeScale = o))
              : n._timeScale
          }),
          (e.progress = function (o, t) {
            return arguments.length
              ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - o : o) + this._cycle * (this._duration + this._repeatDelay), t)
              : this._time / this.duration()
          }),
          (e.totalProgress = function (o, t) {
            return arguments.length ? this.totalTime(this.totalDuration() * o, t) : this._totalTime / this.totalDuration()
          }),
          (e.time = function (o, n) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                o > this._duration && (o = this._duration),
                this._yoyo && 0 != (1 & this._cycle)
                  ? (o = this._duration - o + this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat && (o += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(o, n))
              : this._time
          }),
          (e.duration = function (e) {
            return arguments.length ? S.prototype.duration.call(this, e) : this._duration
          }),
          (e.totalDuration = function (e) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1))
              : (this._dirty && ((this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), (this._dirty = !1)),
                this._totalDuration)
          }),
          (e.repeat = function (e) {
            return arguments.length ? ((this._repeat = e), this._uncache(!0)) : this._repeat
          }),
          (e.repeatDelay = function (e) {
            return arguments.length ? ((this._repeatDelay = e), this._uncache(!0)) : this._repeatDelay
          }),
          (e.yoyo = function (e) {
            return arguments.length ? ((this._yoyo = e), this) : this._yoyo
          }),
          S)
        )
      },
      !0
    ),
      (o = 180 / Math.PI),
      (w = []),
      (B = []),
      (C = []),
      (_ = {}),
      (n = _fwd_fwdScope.FWDFWD_fwdDefine.globals),
      (y = _fwd_fwdScope.FWDFWD_fwdDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.7",
        API: 2,
        fwd_global: !0,
        init: function (_, t, m) {
          ;(this._target = _),
            t instanceof Array && (t = { values: t }),
            (this._func = {}),
            (this._mod = {}),
            (this._props = []),
            (this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10))
          var c = t.values || [],
            h = {},
            g = c[0],
            f = t.autoRotate || m.vars.orientToBezier,
            b,
            y,
            v,
            w,
            x,
            S
          for (b in ((this._autoRotate = f ? (f instanceof Array ? f : [["x", "y", "rotation", (!0 !== f && +f) || 0]]) : null), g)) this._props.push(b)
          for (v = this._props.length; -1 < --v; )
            (b = this._props[v]),
              this._overwriteProps.push(b),
              (y = this._func[b] = "function" == typeof _[b]),
              (h[b] = y ? _[b.indexOf("set") || "function" != typeof _["get" + b.substr(3)] ? b : "get" + b.substr(3)]() : parseFloat(_[b])),
              x || (h[b] !== c[0][b] && (x = h))
          if (
            ((this._beziers =
              "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type
                ? d(c, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, x)
                : (function (b, y, v) {
                    var w = {},
                      c = "cubic" === (y = y || "soft") ? 3 : 2,
                      d = "soft" === y,
                      m = [],
                      g,
                      x,
                      S,
                      T,
                      B,
                      O,
                      C,
                      P,
                      k,
                      I,
                      A
                    if ((d && v && (b = [v].concat(b)), null == b || b.length < 1 + c)) throw "invalid Bezier data"
                    for (k in b[0]) m.push(k)
                    for (O = m.length; -1 < --O; ) {
                      for (w[(k = m[O])] = B = [], I = 0, P = b.length, C = 0; C < P; C++)
                        (g = null == v ? b[C][k] : "string" == typeof (A = b[C][k]) && "=" === A.charAt(1) ? v[k] + +(A.charAt(0) + A.substr(2)) : +A),
                          d && 1 < C && C < P - 1 && (B[I++] = (g + B[I - 2]) / 2),
                          (B[I++] = g)
                      for (P = I - c + 1, C = I = 0; C < P; C += c)
                        (g = B[C]), (x = B[C + 1]), (S = B[C + 2]), (T = 2 == c ? 0 : B[C + 3]), (B[I++] = A = 3 == c ? new u(g, x, S, T) : new u(g, (2 * x + g) / 3, (2 * x + S) / 3, S))
                      B.length = I
                    }
                    return w
                  })(c, t.type, h)),
            (this._segCount = this._beziers[b].length),
            this._timeRes &&
              ((S = (function (d, t) {
                var _ = [],
                  a = [],
                  o = 0,
                  m = 0,
                  c = (t = t >> 0 || 6) - 1,
                  g = [],
                  u = [],
                  f,
                  b,
                  y,
                  v
                for (f in d)
                  !(function (m, t, e) {
                    for (var c = m.length, g, b, y, v, w, x, S, T, B, O, C; -1 < --c; )
                      for (y = (O = m[c]).a, v = O.d - y, w = O.c - y, x = O.b - y, g = b = 0, T = 1; T <= e; T++)
                        (g = b - (b = ((S = (1 / e) * T) * S * v + 3 * (B = 1 - S) * (S * w + B * x)) * S)), (t[(C = c * e + T - 1)] = (t[C] || 0) + g * g)
                  })(d[f], _, t)
                for (y = _.length, b = 0; b < y; b++) (o += Math.sqrt(_[b])), (u[(v = b % t)] = o), v === c && ((m += o), (g[(v = (b / t) >> 0)] = u), (a[v] = m), (o = 0), (u = []))
                return { length: m, lengths: a, segments: g }
              })(this._beziers, this._timeRes)),
              (this._length = S.length),
              (this._lengths = S.lengths),
              (this._segments = S.segments),
              (this._l1 = this._li = this._s1 = this._si = 0),
              (this._l2 = this._lengths[0]),
              (this._curSeg = this._segments[0]),
              (this._s2 = this._curSeg[0]),
              (this._prec = 1 / this._curSeg.length)),
            (f = this._autoRotate))
          )
            for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), v = f.length; -1 < --v; ) {
              for (w = 0; 3 > w; w++) (b = f[v][w]), (this._func[b] = "function" == typeof _[b] && _[b.indexOf("set") || "function" != typeof _["get" + b.substr(3)] ? b : "get" + b.substr(3)])
              ;(b = f[v][2]), (this._initialRotations[v] = (this._func[b] ? this._func[b].call(this._target) : this._target[b]) || 0), this._overwriteProps.push(b)
            }
          return (this._startRatio = m.vars.runBackwards ? 1 : 0), !0
        },
        set: function (b) {
          var S = this._segCount,
            f = this._func,
            u = this._target,
            p = b !== this._startRatio,
            _,
            B,
            O,
            C,
            P,
            k,
            I,
            A,
            D
          if (this._timeRes) {
            if (((A = this._lengths), (D = this._curSeg), (b *= this._length), (w = this._li), b > this._l2 && w < S - 1)) {
              for (I = S - 1; w < I && (this._l2 = A[++w]) <= b; );
              ;(this._l1 = A[w - 1]), (this._li = w), (this._curSeg = D = this._segments[w]), (this._s2 = D[(this._s1 = this._si = 0)])
            } else if (b < this._l1 && 0 < w) {
              for (; 0 < w && (this._l1 = A[--w]) >= b; );
              0 === w && b < this._l1 ? (this._l1 = 0) : w++,
                (this._l2 = A[w]),
                (this._li = w),
                (this._curSeg = D = this._segments[w]),
                (this._s1 = D[(this._si = D.length - 1) - 1] || 0),
                (this._s2 = D[this._si])
            }
            if (((_ = w), (b -= this._l1), (w = this._si), b > this._s2 && w < D.length - 1)) {
              for (I = D.length - 1; w < I && (this._s2 = D[++w]) <= b; );
              ;(this._s1 = D[w - 1]), (this._si = w)
            } else if (b < this._s1 && 0 < w) {
              for (; 0 < w && (this._s1 = D[--w]) >= b; );
              0 === w && b < this._s1 ? (this._s1 = 0) : w++, (this._s2 = D[w]), (this._si = w)
            }
            P = (w + (b - this._s1) / (this._s2 - this._s1)) * this._prec || 0
          } else P = (b - (_ = 0 > b ? 0 : 1 <= b ? S - 1 : (S * b) >> 0) * (1 / S)) * S
          for (B = 1 - P, w = this._props.length; -1 < --w; )
            (O = this._props[w]),
              (k = (P * P * (C = this._beziers[O][_]).da + 3 * B * (P * C.ca + B * C.ba)) * P + C.a),
              this._mod[O] && (k = this._mod[O](k, u)),
              f[O]
                ? u[O](k)
                : "x" == O
                ? u.setX(k)
                : "y" == O
                ? u.setY(k)
                : "z" == O
                ? u.setZ(k)
                : "angleX" == O
                ? u.setAngleX(k)
                : "angleY" == O
                ? u.setAngleY(k)
                : "angleZ" == O
                ? u.setAngleZ(k)
                : "w" == O
                ? u.setWidth(k)
                : "h" == O
                ? u.setHeight(k)
                : "alpha" == O
                ? u.setAlpha(k)
                : "scale" == O
                ? u.setScale2(k)
                : (u[O] = k)
          if (this._autoRotate)
            for (var H = this._autoRotate, w = H.length, E, L, M, F, R, z, X; -1 < --w; )
              (O = H[w][2]),
                (z = H[w][3] || 0),
                (X = !0 === H[w][4] ? 1 : o),
                (C = this._beziers[H[w][0]]),
                (E = this._beziers[H[w][1]]),
                C &&
                  E &&
                  ((C = C[_]),
                  (E = E[_]),
                  (L = C.a + (C.b - C.a) * P),
                  (L += ((F = C.b + (C.c - C.b) * P) - L) * P),
                  (F += (C.c + (C.d - C.c) * P - F) * P),
                  (M = E.a + (E.b - E.a) * P),
                  (M += ((R = E.b + (E.c - E.b) * P) - M) * P),
                  (R += (E.c + (E.d - E.c) * P - R) * P),
                  (k = p ? Math.atan2(R - M, F - L) * X + z : this._initialRotations[w]),
                  this._mod[O] && (k = this._mod[O](k, u)),
                  f[O] ? u[O](k) : (u[O] = k))
        },
      })),
      (e = y.prototype),
      (y.bezierThrough = d),
      (y.cubicToQuadratic = S),
      (y._autoCSS = !0),
      (y.quadraticToCubic = function (o, t, e) {
        return new u(o, (2 * t + o) / 3, (2 * t + e) / 3, e)
      }),
      (y._cssRegister = function () {
        var o = n.CSSPlugin,
          e,
          p,
          m,
          g
        o &&
          ((e = o._internals),
          (p = e._parseToProxy),
          (m = e._setPluginRatio),
          (g = e.CSSPropTween),
          e._registerComplexSpecialProp("bezier", {
            parser: function (d, t, _, c, r, b) {
              t instanceof Array && (t = { values: t }), (b = new y())
              var v = t.values,
                h = v.length - 1,
                f = [],
                u = {},
                w,
                x,
                S
              if (0 > h) return r
              for (w = 0; w <= h; w++) (S = p(d, v[w], c, r, b, h !== w)), (f[w] = S.end)
              for (x in t) u[x] = t[x]
              return (
                (u.values = f),
                ((r = new g(d, "bezier", 0, 0, S.pt, 2)).data = S),
                (r.plugin = b),
                (r.setRatio = m),
                0 === u.autoRotate && (u.autoRotate = !0),
                !u.autoRotate ||
                  u.autoRotate instanceof Array ||
                  ((w = !0 === u.autoRotate ? 0 : +u.autoRotate), (u.autoRotate = null == S.end.left ? null != S.end.x && [["x", "y", "rotation", w, !1]] : [["left", "top", "rotation", w, !1]])),
                u.autoRotate &&
                  (c._transform || c._enableTransforms(!1), (S.autoRotate = c._target._fwdTransform), (S.proxy.rotation = S.autoRotate.rotation || 0), c._overwriteProps.push("rotation")),
                b._onInitTween(S.proxy, u, c._tween),
                r
              )
            },
          }))
      }),
      (e._mod = function (o) {
        for (var t = this._overwriteProps, n = t.length, s; -1 < --n; ) (s = o[t[n]]) && "function" == typeof s && (this._mod[t[n]] = s)
      }),
      (e._kill = function (o) {
        var t = this._props,
          n,
          s
        for (n in this._beziers) if (n in o) for (delete this._beziers[n], delete this._func[n], s = t.length; -1 < --s; ) t[s] === n && t.splice(s, 1)
        if ((t = this._autoRotate)) for (s = t.length; -1 < --s; ) o[t[s][2]] && t.splice(s, 1)
        return this._super._kill.call(this, o)
      }),
      _fwd_fwdScope.FWDFWD_fwdDefine(
        "plugins.CSSPlugin",
        ["plugins.TweenPlugin", "FWDTweenLite"],
        function (E, L) {
          function B(o, t) {
            return t.toUpperCase()
          }
          function n(e) {
            return ue.createElementNS ? ue.createElementNS("http://www.w3.org/1999/xhtml", e) : ue.createElement(e)
          }
          function a(e) {
            return I.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          }
          function V(e) {
            window.console && console.log(e)
          }
          function j(o, n) {
            var a = (n = n || K).style,
              s,
              d
            if (void 0 !== a[o]) return o
            for (o = o.charAt(0).toUpperCase() + o.substr(1), s = ["O", "Moz", "ms", "Ms", "Webkit"], d = 5; -1 < --d && void 0 === a[s[d] + o]; );
            return 0 <= d ? ((he = "-" + (ge = 3 === d ? "ms" : s[d]).toLowerCase() + "-"), ge + o) : null
          }
          function g(o, t) {
            var d = {},
              n,
              l,
              p
            if ((t = t || fe(o, null))) {
              if ((n = t.length)) for (; -1 < --n; ) (-1 !== (p = t[n]).indexOf("-transform") && Ue !== p) || (d[p.replace(u, B)] = t.getPropertyValue(p))
              else for (n in t) (-1 !== n.indexOf("Transform") && Ye !== n) || (d[n] = t[n])
            } else if ((t = o.currentStyle || o.style)) for (n in t) "string" == typeof n && void 0 === d[n] && (d[n.replace(u, B)] = t[n])
            return (
              ce || (d.opacity = a(o)),
              (l = tt(o, t, !1)),
              (d.rotation = l.rotation),
              (d.skewX = l.skewX),
              (d.scaleX = l.scaleX),
              (d.scaleY = l.scaleY),
              (d.x = l.x),
              (d.y = l.y),
              Ze && ((d.z = l.z), (d.rotationX = l.rotationX), (d.rotationY = l.rotationY), (d.scaleZ = l.scaleZ)),
              d.filters && delete d.filters,
              d
            )
          }
          function y(d, t, e, p, r) {
            var s = {},
              l = d.style,
              _,
              m,
              u
            for (m in e)
              "cssText" !== m &&
                "length" !== m &&
                isNaN(m) &&
                (t[m] !== (_ = e[m]) || (r && r[m])) &&
                -1 === m.indexOf("Origin") &&
                (("number" != typeof _ && "string" != typeof _) ||
                  ((s[m] = "auto" !== _ || ("left" !== m && "top" !== m) ? (("" !== _ && "auto" !== _ && "none" !== _) || "string" != typeof t[m] || "" === t[m].replace(b, "") ? _ : 0) : ve(d, m)),
                  void 0 !== l[m] && (u = new Fe(l, m, l[m], u))))
            if (p) for (m in p) "className" !== m && (s[m] = p[m])
            return { difs: s, firstMPT: u }
          }
          function e(o, n) {
            return (
              "function" == typeof o && (o = o(Ee, He)), "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) : parseFloat(o) - parseFloat(n) || 0
            )
          }
          function k(o, n) {
            return (
              "function" == typeof o && (o = o(Ee, He)),
              null == o ? n : "string" == typeof o && "=" === o.charAt(1) ? parseInt(o.charAt(0) + "1", 10) * parseFloat(o.substr(2)) + n : parseFloat(o) || 0
            )
          }
          function o(d, p, e, _) {
            var r, m, u, c, h
            return (
              "function" == typeof d && (d = d(Ee, He)),
              1e-6 >
                (c =
                  null == d
                    ? p
                    : "number" == typeof d
                    ? d
                    : ((r = 360),
                      (m = d.split("_")),
                      (u = ((h = "=" === d.charAt(1)) ? parseInt(d.charAt(0) + "1", 10) * parseFloat(m[0].substr(2)) : parseFloat(m[0])) * (-1 === d.indexOf("rad") ? 1 : Q) - (h ? 0 : p)),
                      m.length &&
                        (_ && (_[e] = p + u),
                        -1 !== d.indexOf("short") && (u %= r) !== u % 180 && (u = 0 > u ? u + r : u - r),
                        -1 !== d.indexOf("_cw") && 0 > u
                          ? (u = ((u + 3599999999640) % r) - (0 | (u / r)) * r)
                          : -1 !== d.indexOf("ccw") && 0 < u && (u = ((u - 3599999999640) % r) - (0 | (u / r)) * r)),
                      p + u)) &&
                -1e-6 < c &&
                (c = 0),
              c
            )
          }
          function v(o, n, e) {
            return 0 | (255 * (1 > 6 * (o = 0 > o ? o + 1 : 1 < o ? o - 1 : o) ? n + 6 * ((e - n) * o) : 0.5 > o ? e : 2 > 3 * o ? n + 6 * ((e - n) * (2 / 3 - o)) : n) + 0.5)
          }
          function _(d, t) {
            for (var e = d.match(Oe) || [], s = 0, l = e.length ? "" : d, p = 0, _, m; p < e.length; p++)
              (_ = e[p]),
                (s += (m = d.substr(s, d.indexOf(_, s) - s)).length + _.length),
                3 === (_ = Be(_, t)).length && _.push(1),
                (l += m + (t ? "hsla(" + _[0] + "," + _[1] + "%," + _[2] + "%," + _[3] : "rgba(" + _.join(",")) + ")")
            return l + d.substr(s)
          }
          function r(s, t, d, n) {
            if (null == s)
              return function (e) {
                return e
              }
            var a = t ? (s.match(Oe) || [""])[0] : "",
              l = s.split(a).join("").match(X) || [],
              m = s.substr(0, s.indexOf(l[0])),
              h = ")" === s.charAt(s.length - 1) ? ")" : "",
              u = -1 === s.indexOf(" ") ? "," : " ",
              p = l.length,
              _ = 0 < p ? l[0].replace(_e, "") : "",
              e
            return p
              ? (e = t
                  ? function (o) {
                      var c, g, f, b
                      if ("number" == typeof o) o += _
                      else if (n && Z.test(o)) {
                        for (b = o.replace(Z, "|").split("|"), f = 0; f < b.length; f++) b[f] = e(b[f])
                        return b.join(",")
                      }
                      if (((c = (o.match(Oe) || [a])[0]), (f = (g = o.split(c).join("").match(X) || []).length), p > f--)) for (; ++f < p; ) g[f] = d ? g[0 | ((f - 1) / 2)] : l[f]
                      return m + g.join(u) + u + c + h + (-1 === o.indexOf("inset") ? "" : " inset")
                    }
                  : function (o) {
                      var s, a, c
                      if ("number" == typeof o) o += _
                      else if (n && Z.test(o)) {
                        for (a = o.replace(Z, "|").split("|"), c = 0; c < a.length; c++) a[c] = e(a[c])
                        return a.join(",")
                      }
                      if (((c = (s = o.match(X) || []).length), p > c--)) for (; ++c < p; ) s[c] = d ? s[0 | ((c - 1) / 2)] : l[c]
                      return m + s.join(u) + h
                    })
              : function (e) {
                  return e
                }
          }
          function S(e) {
            return (
              (e = e.split(",")),
              function (d, t, p, _, r, s, n) {
                var m = (t + "").split(" "),
                  l
                for (n = {}, l = 0; 4 > l; l++) n[e[l]] = m[l] = m[l] || m[((l - 1) / 2) >> 0]
                return _.parse(d, n, r, s)
              }
            )
          }
          function A(o, t, e, d, r, s) {
            var n = new Re(o, t, e, d - e, r, -1, s)
            return (n.b = e), (n.e = n.xs0 = d), n
          }
          function R(o, t) {
            ;(t = t || {}),
              (this.p = (t.prefix && j(o)) || o),
              ((re[o] = re[this.p] = this).format = t.formatter || r(t.defaultValue, t.color, t.collapsible, t.multi)),
              t.parser && (this.parse = t.parser),
              (this.clrs = t.color),
              (this.multi = t.multi),
              (this.keyword = t.keyword),
              (this.dflt = t.defaultValue),
              (this.pr = t.priority || 0)
          }
          function q(o, t, e) {
            var n = ue.createElementNS("http://www.w3.org/2000/svg", o),
              s
            for (s in e) n.setAttributeNS(null, s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(), e[s])
            return t.appendChild(n), n
          }
          function $(b, t, S, T, r, s) {
            var n = b._fwdTransform,
              B = et(b, !0),
              w,
              O,
              C,
              P,
              k,
              I,
              A,
              D,
              H,
              E,
              L,
              M,
              F,
              R
            n && ((F = n.xOrigin), (R = n.yOrigin)),
              (!T || 2 > (w = T.split(" ")).length) &&
                ((A = b.getBBox()),
                (w = [
                  (-1 === (t = Se(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) : (parseFloat(t[0]) / 100) * A.width) + A.x,
                  (-1 === t[1].indexOf("%") ? parseFloat(t[1]) : (parseFloat(t[1]) / 100) * A.height) + A.y,
                ])),
              (S.xOrigin = P = parseFloat(w[0])),
              (S.yOrigin = k = parseFloat(w[1])),
              T &&
                B !== Je &&
                ((I = B[0]),
                (A = B[1]),
                (D = B[2]),
                (H = B[3]),
                (E = B[4]),
                (O = P * (H / (M = I * H - A * D)) + k * (-D / M) + (D * (L = B[5]) - H * E) / M),
                (C = P * (-A / M) + k * (I / M) - (I * L - A * E) / M),
                (P = S.xOrigin = w[0] = O),
                (k = S.yOrigin = w[1] = C)),
              n &&
                (s && ((S.xOffset = n.xOffset), (S.yOffset = n.yOffset), (n = S)),
                r || (!1 !== r && !1 !== se.defaultSmoothOrigin)
                  ? ((O = P - F), (C = k - R), (n.xOffset += O * B[0] + C * B[2] - O), (n.yOffset += O * B[1] + C * B[3] - C))
                  : (n.xOffset = n.yOffset = 0)),
              s || b.setAttribute("data-svg-origin", w.join(" "))
          }
          function ee(a) {
            var t = this.data,
              r = -t.rotation * U,
              s = r + t.skewX * U,
              n = (0 | (Math.cos(r) * t.scaleX * 100000)) / 100000,
              o = (0 | (Math.sin(r) * t.scaleX * 100000)) / 100000,
              S = (0 | (Math.sin(s) * -t.scaleY * 100000)) / 100000,
              B = (0 | (Math.cos(s) * t.scaleY * 100000)) / 100000,
              f = this.t.style,
              u = this.t.currentStyle,
              p,
              O
            if (u) {
              ;(O = o), (o = -S), (S = -O), (p = u.filter), (f.filter = "")
              var C = this.t.offsetWidth,
                _ = this.t.offsetHeight,
                c = "absolute" !== u.position,
                d = "progid:DXImageTransform.Microsoft.Matrix(M11=" + n + ", M12=" + o + ", M21=" + S + ", M22=" + B,
                k = t.x + (C * t.xPercent) / 100,
                A = t.y + (_ * t.yPercent) / 100
              if (
                (null != t.ox && ((k += (T = (t.oxp ? 0.01 * (C * t.ox) : t.ox) - C / 2) - (T * n + (H = (t.oyp ? 0.01 * (_ * t.oy) : t.oy) - _ / 2) * o)), (A += H - (T * S + H * B))),
                (d += c ? ", Dx=" + ((T = C / 2) - (T * n + (H = _ / 2) * o) + k) + ", Dy=" + (H - (T * S + H * B) + A) + ")" : ", sizingMethod='auto expand')"),
                (f.filter = -1 === p.indexOf("DXImageTransform.Microsoft.Matrix(") ? d + " " + p : p.replace(N, d)),
                (0 !== a && 1 !== a) ||
                  (1 == n &&
                    0 === o &&
                    0 === S &&
                    1 == B &&
                    ((c && -1 === d.indexOf("Dx=0, Dy=0")) || (I.test(p) && 100 !== parseFloat(RegExp.$1)) || (-1 === p.indexOf(p.indexOf("Alpha")) && f.removeAttribute("filter")))),
                !c)
              ) {
                var D = 8 > De ? 1 : -1,
                  T = t.ieOffsetX || 0,
                  H = t.ieOffsetY || 0,
                  E,
                  L,
                  M
                for (
                  t.ieOffsetX = Math.round((C - ((0 > n ? -n : n) * C + (0 > o ? -o : o) * _)) / 2 + k), t.ieOffsetY = Math.round((_ - ((0 > B ? -B : B) * _ + (0 > S ? -S : S) * C)) / 2 + A), Xe = 0;
                  4 > Xe;
                  Xe++
                )
                  (M =
                    (O = -1 === (E = u[(L = xe[Xe])]).indexOf("px") ? ye(this.t, L, parseFloat(E), E.replace(me, "")) || 0 : parseFloat(E)) === t[L]
                      ? 2 > Xe
                        ? T - t.ieOffsetX
                        : H - t.ieOffsetY
                      : 2 > Xe
                      ? -t.ieOffsetX
                      : -t.ieOffsetY),
                    (f[L] = (t[L] = Math.round(O - M * (0 === Xe || 2 === Xe ? 1 : D))) + "px")
              }
            }
          }
          function te(o) {
            var t = this.t,
              n = t.filter || be(this.data, "filter") || "",
              a = 0 | (this.s + this.c * o),
              s
            100 == a &&
              (s =
                -1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(")
                  ? (t.removeAttribute("filter"), !be(this.data, "filter"))
                  : ((t.filter = n.replace(h, "")), !0)),
              s ||
                (this.xn1 && (t.filter = n = n || "alpha(opacity=" + a + ")"),
                -1 === n.indexOf("pacity") ? (0 == a && this.xn1) || (t.filter = n + " alpha(opacity=" + a + ")") : (t.filter = n.replace(I, "opacity=" + a)))
          }
          function oe(o) {
            if (((this.t._fwdClassPT = this), 1 === o || 0 === o)) {
              this.t.setAttribute("class", 0 === o ? this.b : this.e)
              for (var t = this.data, n = this.t.style; t; ) t.v ? (n[t.p] = t.v) : _t(n, t.p), (t = t._next)
              1 === o && this.t._fwdClassPT === this && (this.t._fwdClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          }
          function ne(d) {
            if ((1 === d || 0 === d) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
              var t = this.t.style,
                a = re.transform.parse,
                o,
                l,
                p,
                _,
                m
              if ("all" === this.e) _ = !(t.cssText = "")
              else for (p = (o = this.e.split(" ").join("").split(",")).length; -1 < --p; ) (l = o[p]), re[l] && (re[l].parse === a ? (_ = !0) : (l = "transformOrigin" === l ? je : re[l].p)), _t(t, l)
              _ && (_t(t, Ye), (m = this.t._fwdTransform) && (m.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._fwdTransform))
            }
          }
          function ie() {
            ;(this.t[this.p] = this.e), this.data._linkCSSP(this, this._next, null, !0)
          }
          var se = function () {
              E.call(this, "css"), (this._overwriteProps.length = 0), (this.setRatio = se.prototype.setRatio)
            },
            W = _fwd_fwdScope.FWDFWD_fwdDefine.globals,
            re = {},
            m = (se.prototype = new E("css")),
            ae,
            de,
            le,
            pe
          ;((m.constructor = se).version = "1.19.0"),
            (se.API = 2),
            (se.defaultTransformPerspective = 0),
            (se.defaultSkewType = "compensated"),
            (se.defaultSmoothOrigin = !0),
            (m = "px"),
            (se.suffixMap = { top: m, right: m, bottom: m, left: m, width: m, height: m, fontSize: m, padding: m, margin: m, perspective: m, lineHeight: "" })
          var _e = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
            z = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
            X = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
            b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
            me = /(?:\d|\-|\+|=|#|\.)*/g,
            I = /opacity *= *([^)]*)/i,
            h = /alpha\(opacity *=.+?\)/i,
            l = /([A-Z])/g,
            u = /-([a-z])/gi,
            N = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
            Z = /,(?=[^\)]*(?:\(|$))/gi,
            U = Math.PI / 180,
            Q = 180 / Math.PI,
            G = {},
            ue = document,
            K = n("div"),
            p = n("img"),
            f = (se._internals = { _specialProps: re }),
            J = navigator.userAgent,
            ce =
              ((Le = J.indexOf("Android")),
              (Me = n("a")),
              (ke = -1 !== J.indexOf("Safari") && -1 === J.indexOf("Chrome") && (-1 === Le || 3 < +J.substr(Le + 8, 1))),
              (Ae = ke && 6 > +J.substr(J.indexOf("Version/") + 8, 1)),
              (Ie = -1 !== J.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(J) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(J)) && (De = parseFloat(RegExp.$1)),
              !!Me && ((Me.style.cssText = "top:1px;opacity:.55;"), /^0.55/.test(Me.style.opacity))),
            he = "",
            ge = "",
            fe = ue.defaultView ? ue.defaultView.getComputedStyle : function () {},
            be = (se.style = function (o, t, e, d, r) {
              var s
              return ce || "opacity" !== t
                ? (!d && o.style[t]
                    ? (s = o.style[t])
                    : (e = e || fe(o))
                    ? (s = e[t] || e.getPropertyValue(t) || e.getPropertyValue(t.replace(l, "-$1").toLowerCase()))
                    : o.currentStyle && (s = o.currentStyle[t]),
                  null == r || (s && "none" !== s && "auto" !== s && "auto auto" !== s) ? s : r)
                : a(o)
            }),
            ye = (f.convertToPixels = function (d, t, e, _, r) {
              if ("px" === _ || !_) return e
              if ("auto" === _ || !e) return 0
              var s = /(?:Left|Right|Width)/i.test(t),
                l = d,
                m = K.style,
                c = 0 > e,
                u = 1 === e,
                p,
                g,
                f
              if ((c && (e = -e), u && (e *= 100), "%" === _ && -1 !== t.indexOf("border"))) p = (e / 100) * (s ? d.clientWidth : d.clientHeight)
              else {
                if (((m.cssText = "border:0 solid red;position:" + be(d, "position") + ";line-height:0;"), "%" !== _ && l.appendChild && "v" !== _.charAt(0) && "rem" !== _))
                  m[s ? "borderLeftWidth" : "borderTopWidth"] = e + _
                else {
                  if (((g = (l = d.parentNode || ue.body)._fwdCache), (f = L.ticker.frame), g && s && g.time === f)) return (g.width * e) / 100
                  m[s ? "width" : "height"] = e + _
                }
                l.appendChild(K),
                  (p = parseFloat(K[s ? "offsetWidth" : "offsetHeight"])),
                  l.removeChild(K),
                  s && "%" === _ && !1 !== se.cacheWidths && (((g = l._fwdCache = l._fwdCache || {}).time = f), (g.width = 100 * (p / e))),
                  0 !== p || r || (p = ye(d, t, e, _, !0))
              }
              return u && (p /= 100), c ? -p : p
            }),
            ve = (f.calculateOffset = function (o, t, e) {
              if ("absolute" !== be(o, "position", e)) return 0
              var n = "left" === t ? "Left" : "Top",
                r = be(o, "margin" + n, e)
              return o["offset" + n] - (ye(o, t, parseFloat(r), r.replace(me, "")) || 0)
            }),
            we = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
            xe = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
            Se = function (o, a) {
              if ("contain" === o || "auto" === o || "auto auto" === o) return o + " "
              ;(null != o && "" !== o) || (o = "0 0")
              var e = o.split(" "),
                d = -1 === o.indexOf("left") ? (-1 === o.indexOf("right") ? e[0] : "100%") : "0%",
                l = -1 === o.indexOf("top") ? (-1 === o.indexOf("bottom") ? e[1] : "100%") : "0%",
                p
              if (3 < e.length && !a) {
                for (e = o.split(", ").join(",").split(","), o = [], p = 0; p < e.length; p++) o.push(Se(e[p]))
                return o.join(",")
              }
              return (
                null == l ? (l = "center" === d ? "50%" : "0") : "center" === l && (l = "50%"),
                ("center" === d || (isNaN(parseFloat(d)) && -1 === (d + "").indexOf("="))) && (d = "50%"),
                (o = d + " " + l + (2 < e.length ? " " + e[2] : "")),
                a &&
                  ((a.oxp = -1 !== d.indexOf("%")),
                  (a.oyp = -1 !== l.indexOf("%")),
                  (a.oxr = "=" === d.charAt(1)),
                  (a.oyr = "=" === l.charAt(1)),
                  (a.ox = parseFloat(d.replace(b, ""))),
                  (a.oy = parseFloat(l.replace(b, ""))),
                  (a.v = o)),
                a || o
              )
            },
            Te = {
              aqua: [0, 255, 255],
              lime: [0, 255, 0],
              silver: [192, 192, 192],
              black: [0, 0, 0],
              maroon: [128, 0, 0],
              teal: [0, 128, 128],
              blue: [0, 0, 255],
              navy: [0, 0, 128],
              white: [255, 255, 255],
              fuchsia: [255, 0, 255],
              olive: [128, 128, 0],
              yellow: [255, 255, 0],
              orange: [255, 165, 0],
              gray: [128, 128, 128],
              purple: [128, 0, 128],
              green: [0, 128, 0],
              red: [255, 0, 0],
              pink: [255, 192, 203],
              cyan: [0, 255, 255],
              transparent: [255, 255, 255, 0],
            },
            Be = (se.parseColor = function (d, _) {
              var e, m, c, g, b, y, w, x, S, T, B
              if (!d) e = Te.black
              else if ("number" == typeof d) e = [d >> 16, 255 & (d >> 8), 255 & d]
              else {
                if (("," === d.charAt(d.length - 1) && (d = d.substr(0, d.length - 1)), Te[d])) e = Te[d]
                else if ("#" === d.charAt(0))
                  4 === d.length && (d = "#" + (m = d.charAt(1)) + m + (c = d.charAt(2)) + c + (g = d.charAt(3)) + g), (e = [(d = parseInt(d.substr(1), 16)) >> 16, 255 & (d >> 8), 255 & d])
                else if (!("hsl" === d.substr(0, 3))) e = d.match(_e) || Te.transparent
                else if (!((e = B = d.match(_e)), _))
                  (b = (+e[0] % 360) / 360),
                    (y = +e[1] / 100),
                    (m = 2 * (w = +e[2] / 100) - (c = 0.5 >= w ? w * (y + 1) : w + y - w * y)),
                    3 < e.length && (e[3] = +d[3]),
                    (e[0] = v(b + 1 / 3, m, c)),
                    (e[1] = v(b, m, c)),
                    (e[2] = v(b - 1 / 3, m, c))
                else if (-1 !== d.indexOf("=")) return d.match(z)
                ;(e[0] = +e[0]), (e[1] = +e[1]), (e[2] = +e[2]), 3 < e.length && (e[3] = +e[3])
              }
              return (
                _ &&
                  !B &&
                  ((m = e[0] / 255),
                  (c = e[1] / 255),
                  (g = e[2] / 255),
                  (w = ((x = Math.max(m, c, g)) + (S = Math.min(m, c, g))) / 2),
                  x === S
                    ? (b = y = 0)
                    : ((T = x - S), (y = 0.5 < w ? T / (2 - x - S) : T / (x + S)), (b = x === m ? (c - g) / T + (c < g ? 6 : 0) : x === c ? (g - m) / T + 2 : (m - c) / T + 4), (b *= 60)),
                  (e[0] = 0 | (b + 0.5)),
                  (e[1] = 0 | (100 * y + 0.5)),
                  (e[2] = 0 | (100 * w + 0.5))),
                e
              )
            }),
            Oe = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b",
            Ce,
            Pe,
            ke,
            Ie,
            Ae,
            De,
            He,
            Ee,
            Le,
            Me
          for (m in Te) Oe += "|" + m + "\\b"
          ;(Oe = new RegExp(Oe + ")", "gi")),
            (se.colorStringFilter = function (o) {
              var t = o[0] + o[1],
                n
              Oe.test(t) && ((n = -1 !== t.indexOf("hsl(") || -1 !== t.indexOf("hsla(")), (o[0] = _(o[0], n)), (o[1] = _(o[1], n))), (Oe.lastIndex = 0)
            }),
            L.defaultStringFilter || (L.defaultStringFilter = se.colorStringFilter),
            (f._setPluginRatio = function (d) {
              this.plugin.setRatio(d)
              for (var t = this.data, a = t.proxy, o = t.firstMPT, p, _, m, u, c; o; ) (p = a[o.v]), o.r ? (p = Math.round(p)) : 1e-6 > p && -1e-6 < p && (p = 0), (o.t[o.p] = p), (o = o._next)
              if ((t.autoRotate && (t.autoRotate.rotation = t.mod ? t.mod(a.rotation, this.t) : a.rotation), 1 === d || 0 === d))
                for (o = t.firstMPT, c = 1 === d ? "e" : "b"; o; ) {
                  if (!(_ = o.t).type) _[c] = _.s + _.xs0
                  else if (1 === _.type) {
                    for (u = _.xs0 + _.s + _.xs1, m = 1; m < _.l; m++) u += _["xn" + m] + _["xs" + (m + 1)]
                    _[c] = u
                  }
                  o = o._next
                }
            })
          var Fe = function (o, t, e, n, r) {
              ;(this.t = o), (this.p = t), (this.v = e), (this.r = r), n && ((n._prev = this)._next = n)
            },
            Re =
              ((f._parseToProxy = function (m, t, e, g, b, s) {
                var n = g,
                  u = {},
                  p = {},
                  _ = e._transform,
                  c = G,
                  d,
                  y,
                  v,
                  w,
                  x
                for (e._transform = null, G = t, g = x = e.parse(m, t, g, b), G = c, s && ((e._transform = _), n && ((n._prev = null), n._prev && (n._prev._next = null))); g && g !== n; ) {
                  if (1 >= g.type && ((p[(y = g.p)] = g.s + g.c), (u[y] = g.s), s || ((w = new Fe(g, "s", y, w, g.r)), (g.c = 0)), 1 === g.type))
                    for (d = g.l; 0 < --d; ) (v = "xn" + d), (p[(y = g.p + "_" + v)] = g.data[v]), (u[y] = g[v]), s || (w = new Fe(g, v, y, w, g.rxp[v]))
                  g = g._next
                }
                return { proxy: u, end: p, firstMPT: w, pt: x }
              }),
              (f.CSSPropTween = function (d, t, e, p, r, s, n, a, o, l, _) {
                ;(this.t = d),
                  (this.p = t),
                  (this.s = e),
                  (this.c = p),
                  (this.n = n || t),
                  d instanceof Re || pe.push(this.n),
                  (this.r = a),
                  (this.type = s || 0),
                  o && ((this.pr = o), (ae = !0)),
                  (this.b = void 0 === l ? e : l),
                  (this.e = void 0 === _ ? e + p : _),
                  r && ((this._next = r)._prev = this)
              })),
            ze = (se.parseComplex = function (S, t, B, C, I, s, n, A, o, l) {
              ;(B = B || s || ""),
                "function" == typeof C && (C = C(Ee, He)),
                (n = new Re(S, t, 0, 0, n, l ? 2 : 1, null, !1, A, B, C)),
                (C += ""),
                I && Oe.test(C + B) && ((C = [B, C]), se.colorStringFilter(C), (B = C[0]), (C = C[1]))
              var h = B.split(", ").join(",").split(" "),
                D = C.split(", ").join(",").split(" "),
                H = h.length,
                E = !1 !== Ce,
                k,
                L,
                M,
                F,
                R,
                X,
                W,
                N,
                V,
                Y,
                U,
                j,
                G
              for (
                (-1 === C.indexOf(",") && -1 === B.indexOf(",")) || ((h = h.join(" ").replace(Z, ", ").split(" ")), (D = D.join(" ").replace(Z, ", ").split(" ")), (H = h.length)),
                  H !== D.length && (H = (h = (s || "").split(" ")).length),
                  n.plugin = o,
                  n.setRatio = l,
                  k = Oe.lastIndex = 0;
                k < H;
                k++
              )
                if (((F = h[k]), (R = D[k]), (N = parseFloat(F)) || 0 === N)) n.appendXtra("", N, e(R, N), R.replace(z, ""), E && -1 !== R.indexOf("px"), !0)
                else if (I && Oe.test(F))
                  (j = ")" + ((j = R.indexOf(")") + 1) ? R.substr(j) : "")),
                    (G = -1 !== R.indexOf("hsl") && ce),
                    (F = Be(F, G)),
                    (R = Be(R, G)),
                    (V = 6 < F.length + R.length) && !ce && 0 === R[3]
                      ? ((n["xs" + n.l] += n.l ? " transparent" : "transparent"), (n.e = n.e.split(D[k]).join("transparent")))
                      : (ce || (V = !1),
                        G
                          ? n
                              .appendXtra(V ? "hsla(" : "hsl(", F[0], e(R[0], F[0]), ",", !1, !0)
                              .appendXtra("", F[1], e(R[1], F[1]), "%,", !1)
                              .appendXtra("", F[2], e(R[2], F[2]), V ? "%," : "%" + j, !1)
                          : n
                              .appendXtra(V ? "rgba(" : "rgb(", F[0], R[0] - F[0], ",", !0, !0)
                              .appendXtra("", F[1], R[1] - F[1], ",", !0)
                              .appendXtra("", F[2], R[2] - F[2], V ? "," : j, !0),
                        V && ((F = 4 > F.length ? 1 : F[3]), n.appendXtra("", F, (4 > R.length ? 1 : R[3]) - F, j, !1))),
                    (Oe.lastIndex = 0)
                else if ((X = F.match(_e))) {
                  if (!(W = R.match(z)) || W.length !== X.length) return n
                  for (L = M = 0; L < X.length; L++)
                    (U = X[L]), (Y = F.indexOf(U, M)), n.appendXtra(F.substr(M, Y - M), +U, e(W[L], U), "", E && "px" === F.substr(Y + U.length, 2), 0 === L), (M = Y + U.length)
                  n["xs" + n.l] += F.substr(M)
                } else n["xs" + n.l] += n.l || n["xs" + n.l] ? " " + R : R
              if (-1 !== C.indexOf("=") && n.data) {
                for (j = n.xs0 + n.data.s, k = 1; k < n.l; k++) j += n["xs" + k] + n.data["xn" + k]
                n.e = j + n["xs" + k]
              }
              return n.l || ((n.type = -1), (n.xs0 = n.e)), n.xfirst || n
            }),
            Xe = 9
          for ((m = Re.prototype).l = m.pr = 0; 0 < --Xe; ) (m["xn" + Xe] = 0), (m["xs" + Xe] = "")
          ;(m.xs0 = ""),
            (m._next = m._prev = m.xfirst = m.data = m.plugin = m.setRatio = m.rxp = null),
            (m.appendXtra = function (d, t, e, l, r, s) {
              var n = this,
                a = n.l
              return (
                (n["xs" + a] += s && (a || n["xs" + a]) ? " " + d : d || ""),
                e || 0 === a || n.plugin
                  ? (n.l++,
                    (n.type = n.setRatio ? 2 : 1),
                    (n["xs" + n.l] = l || ""),
                    0 < a
                      ? ((n.data["xn" + a] = t + e), (n.rxp["xn" + a] = r), (n["xn" + a] = t), n.plugin || ((n.xfirst = new Re(n, "xn" + a, t, e, n.xfirst || n, 0, n.n, r, n.pr)), (n.xfirst.xs0 = 0)))
                      : ((n.data = { s: t + e }), (n.rxp = {}), (n.s = t), (n.c = e), (n.r = r)),
                    n)
                  : ((n["xs" + a] += t + (l || "")), n)
              )
            })
          var We = (f._registerComplexSpecialProp = function (o, t, a) {
              "object" != typeof t && (t = { parser: a })
              var d = o.split(","),
                s = t.defaultValue,
                n
              for (a = a || [s], n = 0; n < d.length; n++) (t.prefix = 0 === n && t.prefix), (t.defaultValue = a[n] || s), new R(d[n], t)
            }),
            Ne = (f._registerPluginProp = function (e) {
              var d
              re[e] ||
                ((d = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin"),
                We(e, {
                  parser: function (l, t, e, p, r, s, n) {
                    var a = W.com.fwd.plugins[d]
                    return a ? (a._cssRegister(), re[e].parse(l, t, e, p, r, s, n)) : (V("Error: " + d + " js file not loaded."), r)
                  },
                }))
            })
          ;((m = R.prototype).parseComplex = function (d, t, _, m, r, s) {
            var n = this.keyword,
              p,
              c,
              g,
              b,
              y,
              v
            if ((this.multi && (Z.test(_) || Z.test(t) ? ((c = t.replace(Z, "|").split("|")), (g = _.replace(Z, "|").split("|"))) : n && ((c = [t]), (g = [_]))), g)) {
              for (b = g.length > c.length ? g.length : c.length, p = 0; p < b; p++)
                (t = c[p] = c[p] || this.dflt),
                  (_ = g[p] = g[p] || this.dflt),
                  n && (y = t.indexOf(n)) !== (v = _.indexOf(n)) && (-1 === v ? (c[p] = c[p].split(n).join("")) : -1 === y && (c[p] += " " + n))
              ;(t = c.join(", ")), (_ = g.join(", "))
            }
            return ze(d, this.p, t, _, this.clrs, this.dflt, m, this.pr, r, s)
          }),
            (m.parse = function (o, t, e, a, r, s) {
              return this.parseComplex(o.style, this.format(be(o, this.p, le, !1, this.dflt)), this.format(t), r, s)
            }),
            (se.registerSpecialProp = function (e, a, d) {
              We(e, {
                parser: function (l, t, e, p, r, s) {
                  var n = new Re(l, e, 0, 0, r, 2, e, !1, d)
                  return (n.plugin = s), (n.setRatio = a(l, t, p._tween, e)), n
                },
                priority: d,
              })
            }),
            (se.useSVGTransformAttr = ke || Ie)
          var Ve = ["scaleX", "scaleY", "scaleZ", "x", "y", "z", "skewX", "skewY", "rotation", "rotationX", "rotationY", "perspective", "xPercent", "yPercent"],
            Ye = j("transform"),
            Ue = he + "transform",
            je = j("transformOrigin"),
            Ze = null !== j("perspective"),
            Ge = (f.Transform = function () {
              ;(this.perspective = parseFloat(se.defaultTransformPerspective) || 0), (this.force3D = !1 !== se.defaultForce3D && Ze && (se.defaultForce3D || "auto"))
            }),
            qe = window.SVGElement,
            Ke = ue.documentElement,
            Qe =
              ((pt = De || (/Android/i.test(J) && !window.chrome)),
              ue.createElementNS &&
                !pt &&
                ((rt = q("svg", Ke)),
                (lt = (at = q("rect", rt, { width: 100, height: 50, x: 100 })).getBoundingClientRect().width),
                (at.style[je] = "50% 50%"),
                (at.style[Ye] = "scaleX(0.5)"),
                (pt = lt === at.getBoundingClientRect().width && !(Ie && Ze)),
                Ke.removeChild(rt)),
              pt),
            $e = function (e) {
              return !!(
                qe &&
                e.getBBox &&
                e.getCTM &&
                (function (e) {
                  try {
                    return e.getBBox()
                  } catch (e) {}
                })(e) &&
                (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM))
              )
            },
            Je = [1, 0, 0, 1, 0, 0],
            et = function (d, t) {
              var e = d._fwdTransform || new Ge(),
                l = d.style,
                p,
                _,
                m,
                u,
                c,
                h
              if (
                (Ye
                  ? (_ = be(d, Ue, null, !0))
                  : d.currentStyle &&
                    (_ =
                      (_ = d.currentStyle.filter.match(/(M11|M12|M21|M22)=[\d\-\.e]+/gi)) && 4 === _.length
                        ? [_[0].substr(4), +_[2].substr(4), +_[1].substr(4), _[3].substr(4), e.x || 0, e.y || 0].join(",")
                        : ""),
                (p = !_ || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _) &&
                  Ye &&
                  ((h = "none" === fe(d).display) || !d.parentNode) &&
                  (h && ((u = l.display), (l.display = "block")),
                  d.parentNode || ((c = 1), Ke.appendChild(d)),
                  (p = !(_ = be(d, Ue, null, !0)) || "none" === _ || "matrix(1, 0, 0, 1, 0, 0)" === _),
                  u ? (l.display = u) : h && _t(l, "display"),
                  c && Ke.removeChild(d)),
                (e.svg || (d.getBBox && $e(d))) &&
                  (p && -1 !== (l[Ye] + "").indexOf("matrix") && ((_ = l[Ye]), (p = 0)),
                  (m = d.getAttribute("transform")),
                  p &&
                    m &&
                    (-1 === m.indexOf("matrix") ? -1 !== m.indexOf("translate") && ((_ = "matrix(1,0,0,1," + m.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")"), (p = 0)) : ((_ = m), (p = 0)))),
                p)
              )
                return Je
              for (m = (_ || "").match(_e) || [], Xe = m.length; -1 < --Xe; ) (u = +m[Xe]), (m[Xe] = (c = u - (u |= 0)) ? (0 | (1e5 * c + (0 > c ? -0.5 : 0.5))) / 1e5 + u : u)
              return t && 6 < m.length ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m
            },
            tt = (f.getTransform = function (B, t, e, H) {
              if (B._fwdTransform && e && !H) return B._fwdTransform
              var r = (e && B._fwdTransform) || new Ge(),
                I = 0 > r.scaleX,
                W = (Ze && (parseFloat(be(B, je, t, !1, "0 0 0").split(" ")[2]) || r.zOrigin)) || 0,
                N = parseFloat(se.defaultTransformPerspective) || 0,
                E,
                V,
                Y,
                U,
                j,
                Z,
                G,
                q,
                K,
                J,
                ee,
                te,
                oe,
                ne,
                ie,
                re,
                ae,
                de,
                le,
                pe,
                _e,
                me,
                ue,
                ce,
                he,
                ge,
                fe,
                ye,
                ve,
                we,
                xe,
                Se
              if (((r.svg = B.getBBox && $e(B)), r.svg && ($(B, be(B, je, t, !1, "50% 50%") + "", r, B.getAttribute("data-svg-origin")), (it = se.useSVGTransformAttr || Qe)), (E = et(B)) !== Je))
                for (V in (16 === E.length
                  ? ((G = E[0]),
                    (q = E[1]),
                    (K = E[2]),
                    (J = E[3]),
                    (ee = E[4]),
                    (te = E[5]),
                    (oe = E[6]),
                    (ne = E[7]),
                    (ie = E[8]),
                    (re = E[9]),
                    (ae = E[10]),
                    (de = E[12]),
                    (le = E[13]),
                    (pe = E[14]),
                    (_e = E[11]),
                    (me = Math.atan2(oe, ae)),
                    r.zOrigin && ((de = ie * (pe = -r.zOrigin) - E[12]), (le = re * pe - E[13]), (pe = ae * pe + r.zOrigin - E[14])),
                    (r.rotationX = me * Q),
                    me &&
                      ((ue = ee * (ge = Math.cos(-me)) + ie * (fe = Math.sin(-me))),
                      (ce = te * ge + re * fe),
                      (he = oe * ge + ae * fe),
                      (ie = ee * -fe + ie * ge),
                      (re = te * -fe + re * ge),
                      (ae = oe * -fe + ae * ge),
                      (_e = ne * -fe + _e * ge),
                      (ee = ue),
                      (te = ce),
                      (oe = he)),
                    (me = Math.atan2(-K, ae)),
                    (r.rotationY = me * Q),
                    me &&
                      ((ce = q * (ge = Math.cos(-me)) - re * (fe = Math.sin(-me))),
                      (he = K * ge - ae * fe),
                      (re = q * fe + re * ge),
                      (ae = K * fe + ae * ge),
                      (_e = J * fe + _e * ge),
                      (G = ue = G * ge - ie * fe),
                      (q = ce),
                      (K = he)),
                    (me = Math.atan2(q, G)),
                    (r.rotation = me * Q),
                    me && ((G = G * (ge = Math.cos(-me)) + ee * (fe = Math.sin(-me))), (ce = q * ge + te * fe), (te = q * -fe + te * ge), (oe = K * -fe + oe * ge), (q = ce)),
                    r.rotationX && 359.9 < Math.abs(r.rotationX) + Math.abs(r.rotation) && ((r.rotationX = r.rotation = 0), (r.rotationY = 180 - r.rotationY)),
                    (r.scaleX = (0 | (1e5 * Math.sqrt(G * G + q * q) + 0.5)) / 1e5),
                    (r.scaleY = (0 | (1e5 * Math.sqrt(te * te + re * re) + 0.5)) / 1e5),
                    (r.scaleZ = (0 | (1e5 * Math.sqrt(oe * oe + ae * ae) + 0.5)) / 1e5),
                    r.rotationX || r.rotationY
                      ? (r.skewX = 0)
                      : ((r.skewX = ee || te ? Math.atan2(ee, te) * Q + r.rotation : r.skewX || 0),
                        90 < Math.abs(r.skewX) &&
                          270 > Math.abs(r.skewX) &&
                          (I
                            ? ((r.scaleX *= -1), (r.skewX += 0 >= r.rotation ? 180 : -180), (r.rotation += 0 >= r.rotation ? 180 : -180))
                            : ((r.scaleY *= -1), (r.skewX += 0 >= r.skewX ? 180 : -180)))),
                    (r.perspective = _e ? 1 / (0 > _e ? -_e : _e) : 0),
                    (r.x = de),
                    (r.y = le),
                    (r.z = pe),
                    r.svg && ((r.x -= r.xOrigin - (r.xOrigin * G - r.yOrigin * ee)), (r.y -= r.yOrigin - (r.yOrigin * q - r.xOrigin * te))))
                  : (Ze && !H && E.length && r.x === E[4] && r.y === E[5] && (r.rotationX || r.rotationY)) ||
                    ((ve = (ye = 6 <= E.length) ? E[0] : 1),
                    (we = E[1] || 0),
                    (xe = E[2] || 0),
                    (Se = ye ? E[3] : 1),
                    (r.x = E[4] || 0),
                    (r.y = E[5] || 0),
                    (Y = Math.sqrt(ve * ve + we * we)),
                    (U = Math.sqrt(Se * Se + xe * xe)),
                    (j = ve || we ? Math.atan2(we, ve) * Q : r.rotation || 0),
                    (Z = xe || Se ? Math.atan2(xe, Se) * Q + j : r.skewX || 0),
                    90 < Math.abs(Z) && 270 > Math.abs(Z) && (I ? ((Y *= -1), (Z += 0 >= j ? 180 : -180), (j += 0 >= j ? 180 : -180)) : ((U *= -1), (Z += 0 >= Z ? 180 : -180))),
                    (r.scaleX = Y),
                    (r.scaleY = U),
                    (r.rotation = j),
                    (r.skewX = Z),
                    Ze && ((r.rotationX = r.rotationY = r.z = 0), (r.perspective = N), (r.scaleZ = 1)),
                    r.svg && ((r.x -= r.xOrigin - (r.xOrigin * ve + r.yOrigin * xe)), (r.y -= r.yOrigin - (r.xOrigin * we + r.yOrigin * Se)))),
                (r.zOrigin = W),
                r))
                  2e-5 > r[V] && -2e-5 < r[V] && (r[V] = 0)
              return (
                e &&
                  (B._fwdTransform = r).svg &&
                  (it && B.style[Ye]
                    ? L.delayedCall(0.001, function () {
                        _t(B.style, Ye)
                      })
                    : !it &&
                      B.getAttribute("transform") &&
                      L.delayedCall(0.001, function () {
                        B.removeAttribute("transform")
                      })),
                r
              )
            }),
            ot =
              (f.set3DTransformRatio =
              f.setTransformRatio =
                function (B) {
                  var t = this.data,
                    P = this.t.style,
                    O = t.rotation,
                    H = t.rotationX,
                    E = t.rotationY,
                    S = t.scaleX,
                    L = t.scaleY,
                    R = t.scaleZ,
                    W = t.x,
                    V = t.y,
                    Y = t.z,
                    j = t.svg,
                    X = t.perspective,
                    Z = t.force3D,
                    N,
                    G,
                    q,
                    K,
                    Q,
                    $,
                    J,
                    ee,
                    te,
                    oe,
                    ne,
                    ie,
                    se,
                    re,
                    ae,
                    de,
                    le,
                    pe,
                    _e,
                    me,
                    ue,
                    ce,
                    he
                  if (
                    !((((1 !== B && 0 !== B) || "auto" !== Z || (this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime)) && Z) || Y || X || E || H || 1 !== R) ||
                    (it && j) ||
                    !Ze
                  )
                    O || t.skewX || j
                      ? ((O *= U),
                        (ce = t.skewX * U),
                        (he = 1e5),
                        (N = Math.cos(O) * S),
                        (K = Math.sin(O) * S),
                        (G = Math.sin(O - ce) * -L),
                        (Q = Math.cos(O - ce) * L),
                        ce &&
                          "simple" === t.skewType &&
                          ((le = Math.tan(ce - t.skewY * U)), (G *= le = Math.sqrt(1 + le * le)), (Q *= le), t.skewY && ((le = Math.tan(t.skewY * U)), (N *= le = Math.sqrt(1 + le * le)), (K *= le))),
                        j &&
                          ((W += t.xOrigin - (t.xOrigin * N + t.yOrigin * G) + t.xOffset),
                          (V += t.yOrigin - (t.xOrigin * K + t.yOrigin * Q) + t.yOffset),
                          it && (t.xPercent || t.yPercent) && ((re = this.t.getBBox()), (W += 0.01 * t.xPercent * re.width), (V += 0.01 * t.yPercent * re.height)),
                          W < (re = 1e-6) && -re < W && (W = 0),
                          V < re && -re < V && (V = 0)),
                        (_e = (0 | (N * he)) / he + "," + (0 | (K * he)) / he + "," + (0 | (G * he)) / he + "," + (0 | (Q * he)) / he + "," + W + "," + V + ")"),
                        j && it
                          ? this.t.setAttribute("transform", "matrix(" + _e)
                          : (P[Ye] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + _e))
                      : (P[Ye] = (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + S + ",0,0," + L + "," + W + "," + V + ")")
                  else {
                    if ((Ie && (S < (re = 1e-4) && -re < S && (S = R = 2e-5), L < re && -re < L && (L = R = 2e-5), !X || t.z || t.rotationX || t.rotationY || (X = 0)), O || t.skewX))
                      (O *= U),
                        (ae = N = Math.cos(O)),
                        (de = K = Math.sin(O)),
                        t.skewX &&
                          ((O -= t.skewX * U),
                          (ae = Math.cos(O)),
                          (de = Math.sin(O)),
                          "simple" === t.skewType &&
                            ((le = Math.tan((t.skewX - t.skewY) * U)),
                            (ae *= le = Math.sqrt(1 + le * le)),
                            (de *= le),
                            t.skewY && ((le = Math.tan(t.skewY * U)), (N *= le = Math.sqrt(1 + le * le)), (K *= le)))),
                        (G = -de),
                        (Q = ae)
                    else {
                      if (!(E || H || 1 !== R || X || j))
                        return void (P[Ye] =
                          (t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") +
                          W +
                          "px," +
                          V +
                          "px," +
                          Y +
                          "px)" +
                          (1 !== S || 1 !== L ? " scale(" + S + "," + L + ")" : ""))
                      ;(N = Q = 1), (G = K = 0)
                    }
                    ;(te = 1),
                      (q = $ = J = ee = oe = ne = 0),
                      (ie = X ? -1 / X : 0),
                      (se = t.zOrigin),
                      (re = 1e-6),
                      (me = ","),
                      (ue = "0"),
                      (O = E * U) && ((ae = Math.cos(O)), (oe = ie * (J = -(de = Math.sin(O)))), (q = N * de), ($ = K * de), (ie *= te = ae), (N *= ae), (K *= ae)),
                      (O = H * U) &&
                        ((le = G * (ae = Math.cos(O)) + q * (de = Math.sin(O))),
                        (pe = Q * ae + $ * de),
                        (ee = te * de),
                        (ne = ie * de),
                        (q = G * -de + q * ae),
                        ($ = Q * -de + $ * ae),
                        (te *= ae),
                        (ie *= ae),
                        (G = le),
                        (Q = pe)),
                      1 !== R && ((q *= R), ($ *= R), (te *= R), (ie *= R)),
                      1 !== L && ((G *= L), (Q *= L), (ee *= L), (ne *= L)),
                      1 !== S && ((N *= S), (K *= S), (J *= S), (oe *= S)),
                      (se || j) &&
                        (se && ((W += q * -se), (V += $ * -se), (Y += te * -se + se)),
                        j && ((W += t.xOrigin - (t.xOrigin * N + t.yOrigin * G) + t.xOffset), (V += t.yOrigin - (t.xOrigin * K + t.yOrigin * Q) + t.yOffset)),
                        W < re && -re < W && (W = ue),
                        V < re && -re < V && (V = ue),
                        Y < re && -re < Y && (Y = 0)),
                      (_e = t.xPercent || t.yPercent ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d("),
                      (_e += (N < re && -re < N ? ue : N) + me + (K < re && -re < K ? ue : K) + me + (J < re && -re < J ? ue : J)),
                      (_e += me + (oe < re && -re < oe ? ue : oe) + me + (G < re && -re < G ? ue : G) + me + (Q < re && -re < Q ? ue : Q)),
                      H || E || 1 !== R
                        ? ((_e += me + (ee < re && -re < ee ? ue : ee) + me + (ne < re && -re < ne ? ue : ne) + me + (q < re && -re < q ? ue : q)),
                          (_e += me + ($ < re && -re < $ ? ue : $) + me + (te < re && -re < te ? ue : te) + me + (ie < re && -re < ie ? ue : ie) + me))
                        : (_e += ",0,0,0,0,1,0,"),
                      (_e += W + me + V + me + Y + me + (X ? 1 + -Y / X : 1) + ")"),
                      (P[Ye] = _e)
                  }
                }),
            it,
            rt,
            at,
            lt,
            pt
          ;((m = Ge.prototype).x = m.y = m.z = m.skewX = m.skewY = m.rotation = m.rotationX = m.rotationY = m.zOrigin = m.xPercent = m.yPercent = m.xOffset = m.yOffset = 0),
            (m.scaleX = m.scaleY = m.scaleZ = 1),
            We(
              "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",
              {
                parser: function (S, t, e, T, r, B, n) {
                  if (T._lastParsedTransform === n) return r
                  var a
                  "function" == typeof (T._lastParsedTransform = n)[e] && ((a = n[e]), (n[e] = t))
                  var O = S._fwdTransform,
                    g = S.style,
                    y = Ve.length,
                    C = n,
                    x = {},
                    w = tt(S, le, !0, C.parseTransform),
                    b = C.transform && ("function" == typeof C.transform ? C.transform(Ee, He) : C.transform),
                    I,
                    D,
                    H,
                    E,
                    L,
                    M,
                    F,
                    R,
                    z
                  if (((T._transform = w), b && "string" == typeof b && Ye))
                    ((D = K.style)[Ye] = b),
                      (D.display = "block"),
                      (D.position = "absolute"),
                      ue.body.appendChild(K),
                      (I = tt(K, null, !1)),
                      w.svg &&
                        ((M = w.xOrigin),
                        (F = w.yOrigin),
                        (I.x -= w.xOffset),
                        (I.y -= w.yOffset),
                        (C.transformOrigin || C.svgOrigin) &&
                          ((b = {}), $(S, Se(C.transformOrigin), b, C.svgOrigin, C.smoothOrigin, !0), (M = b.xOrigin), (F = b.yOrigin), (I.x -= b.xOffset - w.xOffset), (I.y -= b.yOffset - w.yOffset)),
                        (M || F) && ((R = et(K, !0)), (I.x -= M - (M * R[0] + F * R[2])), (I.y -= F - (M * R[1] + F * R[3])))),
                      ue.body.removeChild(K),
                      I.perspective || (I.perspective = w.perspective),
                      null != C.xPercent && (I.xPercent = k(C.xPercent, w.xPercent)),
                      null != C.yPercent && (I.yPercent = k(C.yPercent, w.yPercent))
                  else if ("object" == typeof C) {
                    if (
                      ((I = {
                        scaleX: k(null == C.scaleX ? C.scale : C.scaleX, w.scaleX),
                        scaleY: k(null == C.scaleY ? C.scale : C.scaleY, w.scaleY),
                        scaleZ: k(C.scaleZ, w.scaleZ),
                        x: k(C.x, w.x),
                        y: k(C.y, w.y),
                        z: k(C.z, w.z),
                        xPercent: k(C.xPercent, w.xPercent),
                        yPercent: k(C.yPercent, w.yPercent),
                        perspective: k(C.transformPerspective, w.perspective),
                      }),
                      null != (L = C.directionalRotation))
                    )
                      if ("object" == typeof L) for (D in L) C[D] = L[D]
                      else C.rotation = L
                    "string" == typeof C.x && -1 !== C.x.indexOf("%") && ((I.x = 0), (I.xPercent = k(C.x, w.xPercent))),
                      "string" == typeof C.y && -1 !== C.y.indexOf("%") && ((I.y = 0), (I.yPercent = k(C.y, w.yPercent))),
                      (I.rotation = o(
                        "rotation" in C ? C.rotation : "shortRotation" in C ? C.shortRotation + "_short" : "rotationZ" in C ? C.rotationZ : w.rotation - w.skewY,
                        w.rotation - w.skewY,
                        "rotation",
                        x
                      )),
                      Ze &&
                        ((I.rotationX = o("rotationX" in C ? C.rotationX : "shortRotationX" in C ? C.shortRotationX + "_short" : w.rotationX || 0, w.rotationX, "rotationX", x)),
                        (I.rotationY = o("rotationY" in C ? C.rotationY : "shortRotationY" in C ? C.shortRotationY + "_short" : w.rotationY || 0, w.rotationY, "rotationY", x))),
                      (I.skewX = o(C.skewX, w.skewX - w.skewY)),
                      (I.skewY = o(C.skewY, w.skewY)) && ((I.skewX += I.skewY), (I.rotation += I.skewY))
                  }
                  for (
                    Ze && null != C.force3D && ((w.force3D = C.force3D), (E = !0)),
                      w.skewType = C.skewType || w.skewType || se.defaultSkewType,
                      (H = w.force3D || w.z || w.rotationX || w.rotationY || I.z || I.rotationX || I.rotationY || I.perspective) || null == C.scale || (I.scaleZ = 1);
                    -1 < --y;

                  )
                    (1e-6 < (b = I[(z = Ve[y])] - w[z]) || -1e-6 > b || null != C[z] || null != G[z]) &&
                      ((E = !0), (r = new Re(w, z, w[z], b, r)), z in x && (r.e = x[z]), (r.xs0 = 0), (r.plugin = B), T._overwriteProps.push(r.n))
                  return (
                    (b = C.transformOrigin),
                    w.svg &&
                      (b || C.svgOrigin) &&
                      ((M = w.xOffset),
                      (F = w.yOffset),
                      $(S, Se(b), I, C.svgOrigin, C.smoothOrigin),
                      (r = A(w, "xOrigin", (O ? w : I).xOrigin, I.xOrigin, r, "transformOrigin")),
                      (r = A(w, "yOrigin", (O ? w : I).yOrigin, I.yOrigin, r, "transformOrigin")),
                      (M === w.xOffset && F === w.yOffset) ||
                        ((r = A(w, "xOffset", O ? M : w.xOffset, w.xOffset, r, "transformOrigin")), (r = A(w, "yOffset", O ? F : w.yOffset, w.yOffset, r, "transformOrigin"))),
                      (b = it ? null : "0px 0px")),
                    (b || (Ze && H && w.zOrigin)) &&
                      (Ye
                        ? ((E = !0),
                          (z = je),
                          (b = (b || be(S, z, le, !1, "50% 50%")) + ""),
                          ((r = new Re(g, z, 0, 0, r, -1, "transformOrigin")).b = g[z]),
                          (r.plugin = B),
                          Ze
                            ? ((D = w.zOrigin),
                              (b = b.split(" ")),
                              (w.zOrigin = (2 < b.length && (0 === D || "0px" !== b[2]) ? parseFloat(b[2]) : D) || 0),
                              (r.xs0 = r.e = b[0] + " " + (b[1] || "50%") + " 0px"),
                              ((r = new Re(w, "zOrigin", 0, 0, r, -1, r.n)).b = D),
                              (r.xs0 = r.e = w.zOrigin))
                            : (r.xs0 = r.e = b))
                        : Se(b + "", w)),
                    E && (T._transformType = (w.svg && it) || (!H && 3 !== this._transformType) ? 2 : 3),
                    a && (n[e] = a),
                    r
                  )
                },
                prefix: !0,
              }
            ),
            We("boxShadow", { defaultValue: "0px 0px 0px 0px #999", prefix: !0, color: !0, multi: !0, keyword: "inset" }),
            We("borderRadius", {
              defaultValue: "0px",
              parser: function (n, t, S, B, r) {
                t = this.format(t)
                for (
                  var O = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
                    y = n.style,
                    v = parseFloat(n.offsetWidth),
                    x = parseFloat(n.offsetHeight),
                    w = t.split(" "),
                    T = 0,
                    C,
                    P,
                    k,
                    I,
                    A,
                    D,
                    H,
                    E,
                    L,
                    M,
                    F,
                    R;
                  T < O.length;
                  T++
                )
                  this.p.indexOf("border") && (O[T] = j(O[T])),
                    -1 !== (k = P = be(n, O[T], le, !1, "0px")).indexOf(" ") && ((k = (P = k.split(" "))[0]), (P = P[1])),
                    (I = C = w[T]),
                    (A = parseFloat(k)),
                    (E = k.substr((A + "").length)),
                    "" ===
                      (H = (L = "=" === I.charAt(1))
                        ? ((D = parseInt(I.charAt(0) + "1", 10)), (I = I.substr(2)), (D *= parseFloat(I)), I.substr((D + "").length - (0 > D ? 1 : 0)) || "")
                        : ((D = parseFloat(I)), I.substr((D + "").length))) && (H = de[S] || E),
                    H !== E &&
                      ((M = ye(n, "borderLeft", A, E)),
                      (F = ye(n, "borderTop", A, E)),
                      (P =
                        "%" === H ? ((k = 100 * (M / v) + "%"), 100 * (F / x) + "%") : "em" === H ? ((k = M / (R = ye(n, "borderLeft", 1, "em")) + "em"), F / R + "em") : ((k = M + "px"), F + "px")),
                      L && ((I = parseFloat(k) + D + H), (C = parseFloat(P) + D + H))),
                    (r = ze(y, O[T], k + " " + P, I + " " + C, !1, "0px", r))
                return r
              },
              prefix: !0,
              formatter: r("0px 0px 0px 0px", !1, !0),
            }),
            We("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
              defaultValue: "0px",
              parser: function (o, t, e, n, r) {
                return ze(o.style, e, this.format(be(o, e, le, !1, "0px 0px")), this.format(t), !1, "0px", r)
              },
              prefix: !0,
              formatter: r("0px 0px", !1, !0),
            }),
            We("backgroundPosition", {
              defaultValue: "0 0",
              parser: function (m, t, e, g, r, s) {
                var n = le || fe(m, null),
                  _ = this.format(
                    (n
                      ? De
                        ? n.getPropertyValue("background-position-x") + " " + n.getPropertyValue("background-position-y")
                        : n.getPropertyValue("background-position")
                      : m.currentStyle.backgroundPositionX + " " + m.currentStyle.backgroundPositionY) || "0 0"
                  ),
                  b = this.format(t),
                  d,
                  y,
                  v,
                  w,
                  x,
                  S
                if (
                  (-1 !== _.indexOf("%")) != (-1 !== b.indexOf("%")) &&
                  2 > b.split(",").length &&
                  (S = be(m, "backgroundImage").replace(/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, "")) &&
                  "none" !== S
                ) {
                  for (d = _.split(" "), y = b.split(" "), p.setAttribute("src", S), v = 2; -1 < --v; )
                    (w = -1 !== (_ = d[v]).indexOf("%")) != (-1 !== y[v].indexOf("%")) &&
                      ((x = 0 === v ? m.offsetWidth - p.width : m.offsetHeight - p.height), (d[v] = w ? (parseFloat(_) / 100) * x + "px" : 100 * (parseFloat(_) / x) + "%"))
                  _ = d.join(" ")
                }
                return this.parseComplex(m.style, _, b, r, s)
              },
              formatter: Se,
            }),
            We("backgroundSize", {
              defaultValue: "0 0",
              formatter: function (e) {
                return Se(-1 === (e += "").indexOf(" ") ? e + " " + e : e)
              },
            }),
            We("perspective", { defaultValue: "0px", prefix: !0 }),
            We("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
            We("transformStyle", { prefix: !0 }),
            We("backfaceVisibility", { prefix: !0 }),
            We("userSelect", { prefix: !0 }),
            We("margin", { parser: S("marginTop,marginRight,marginBottom,marginLeft") }),
            We("padding", { parser: S("paddingTop,paddingRight,paddingBottom,paddingLeft") }),
            We("clip", {
              defaultValue: "rect(0px,0px,0px,0px)",
              parser: function (d, t, p, _, r, s) {
                var n, m, u
                return (
                  (t =
                    9 > De
                      ? ((m = d.currentStyle), (u = 8 > De ? " " : ","), (n = "rect(" + m.clipTop + u + m.clipRight + u + m.clipBottom + u + m.clipLeft + ")"), this.format(t).split(",").join(u))
                      : ((n = this.format(be(d, this.p, le, !1, this.dflt))), this.format(t))),
                  this.parseComplex(d.style, n, t, r, s)
                )
              },
            }),
            We("textShadow", { defaultValue: "0px 0px 0px #999", color: !0, multi: !0 }),
            We("autoRound,strictUnits", {
              parser: function (o, t, e, n, r) {
                return r
              },
            }),
            We("border", {
              defaultValue: "0px solid #000",
              parser: function (d, t, e, p, r, s) {
                var n = be(d, "borderTopWidth", le, !1, "0px"),
                  _ = this.format(t).split(" "),
                  o = _[0].replace(me, "")
                return (
                  "px" !== o && (n = parseFloat(n) / ye(d, "borderTopWidth", 1, o) + o),
                  this.parseComplex(d.style, this.format(n + " " + be(d, "borderTopStyle", le, !1, "solid") + " " + be(d, "borderTopColor", le, !1, "#000")), _.join(" "), r, s)
                )
              },
              color: !0,
              formatter: function (o) {
                var t = o.split(" ")
                return t[0] + " " + (t[1] || "solid") + " " + (o.match(Oe) || ["#000"])[0]
              },
            }),
            We("borderWidth", { parser: S("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth") }),
            We("float,cssFloat,styleFloat", {
              parser: function (n, t, e, d, r) {
                var s = n.style,
                  a = "cssFloat" in s ? "cssFloat" : "styleFloat"
                return new Re(s, a, 0, 0, r, -1, e, !1, 0, s[a], t)
              },
            }),
            We("opacity,alpha,autoAlpha", {
              defaultValue: "1",
              parser: function (d, t, p, _, r, m) {
                var n = parseFloat(be(d, "opacity", le, !1, "1")),
                  u = d.style,
                  o = "autoAlpha" === p
                return (
                  "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + n),
                  o && 1 === n && "hidden" === be(d, "visibility", le) && 0 !== t && (n = 0),
                  ce
                    ? (r = new Re(u, "opacity", n, t - n, r))
                    : (((r = new Re(u, "opacity", 100 * n, 100 * (t - n), r)).xn1 = o ? 1 : 0),
                      (u.zoom = 1),
                      (r.type = 2),
                      (r.b = "alpha(opacity=" + r.s + ")"),
                      (r.e = "alpha(opacity=" + (r.s + r.c) + ")"),
                      (r.data = d),
                      (r.plugin = m),
                      (r.setRatio = te)),
                  o &&
                    (((r = new Re(u, "visibility", 0, 0, r, -1, null, !1, 0, 0 === n ? "hidden" : "inherit", 0 === t ? "hidden" : "inherit")).xs0 = "inherit"),
                    _._overwriteProps.push(r.n),
                    _._overwriteProps.push(p)),
                  r
                )
              },
            })
          var _t = function (o, t) {
            t && (o.removeProperty ? (("ms" !== t.substr(0, 2) && "webkit" !== t.substr(0, 6)) || (t = "-" + t), o.removeProperty(t.replace(l, "-$1").toLowerCase())) : o.removeAttribute(t))
          }
          for (
            We("className", {
              parser: function (d, t, e, m, r, c, n) {
                var a = d.getAttribute("class") || "",
                  p = d.style.cssText,
                  _,
                  b,
                  v,
                  w,
                  x
                if ((((r = m._classNamePT = new Re(d, e, 0, 0, r, 2)).setRatio = oe), (r.pr = -11), (ae = !0), (r.b = a), (b = g(d, le)), (v = d._fwdClassPT))) {
                  for (w = {}, x = v.data; x; ) (w[x.p] = 1), (x = x._next)
                  v.setRatio(1)
                }
                return (
                  ((d._fwdClassPT = r).e = "=" === t.charAt(1) ? a.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : "") : t),
                  d.setAttribute("class", r.e),
                  (_ = y(d, b, g(d), n, w)),
                  d.setAttribute("class", a),
                  (r.data = _.firstMPT),
                  (d.style.cssText = p),
                  (r = r.xfirst = m.parse(d, _.difs, r, c))
                )
              },
            }),
              We("clearProps", {
                parser: function (o, t, e, n, r) {
                  return ((r = new Re(o, e, 0, 0, r, 2)).setRatio = ne), (r.e = t), (r.pr = -10), (r.data = n._tween), (ae = !0), r
                },
              }),
              m = ["bezier", "throwProps", "physicsProps", "physics2D"],
              Xe = m.length;
            Xe--;

          )
            Ne(m[Xe])
          ;((m = se.prototype)._firstPT = m._lastParsedTransform = m._transform = null),
            (m._onInitTween = function (d, t, m, c) {
              if (!d.nodeType) return !1
              ;(this._target = He = d), (this._tween = m), (this._vars = t), (Ee = c), (Ce = t.autoRound), (ae = !1), (de = t.suffixMap || se.suffixMap), (le = fe(d, "")), (pe = this._overwriteProps)
              var r = d.style,
                _,
                b,
                v,
                w,
                x,
                S,
                T,
                B,
                O
              if (
                (Pe && "" === r.zIndex && (("auto" !== (_ = be(d, "zIndex", le)) && "" !== _) || this._addLazySet(r, "zIndex", 0)),
                "string" == typeof t &&
                  ((w = r.cssText),
                  (_ = g(d, le)),
                  (r.cssText = w + ";" + t),
                  (_ = y(d, _, g(d)).difs),
                  !ce && /opacity:([^;]*)/i.test(t) && (_.opacity = parseFloat(RegExp.$1)),
                  (t = _),
                  (r.cssText = w)),
                (this._firstPT = t.className ? (b = re.className.parse(d, t.className, "className", this, null, null, t)) : (b = this.parse(d, t, null))),
                this._transformType)
              ) {
                for (
                  O = 3 === this._transformType,
                    Ye
                      ? ke &&
                        ((Pe = !0),
                        "" === r.zIndex && (("auto" !== (T = be(d, "zIndex", le)) && "" !== T) || this._addLazySet(r, "zIndex", 0)),
                        Ae && this._addLazySet(r, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (O ? "visible" : "hidden")))
                      : (r.zoom = 1),
                    v = b;
                  v && v._next;

                )
                  v = v._next
                ;(B = new Re(d, "transform", 0, 0, null, 2)), this._linkCSSP(B, null, v), (B.setRatio = Ye ? ot : ee), (B.data = this._transform || tt(d, le, !0)), (B.tween = m), (B.pr = -1), pe.pop()
              }
              if (ae) {
                for (; b; ) {
                  for (S = b._next, v = w; v && v.pr > b.pr; ) v = v._next
                  ;(b._prev = v ? v._prev : x) ? (b._prev._next = b) : (w = b), (b._next = v) ? (v._prev = b) : (x = b), (b = S)
                }
                this._firstPT = w
              }
              return !0
            }),
            (m.parse = function (d, t, e, m) {
              var r = d.style,
                c,
                g,
                b,
                y,
                v,
                w,
                x,
                S,
                T,
                B
              for (c in t)
                "function" == typeof (w = t[c]) && (w = w(Ee, He)),
                  (g = re[c])
                    ? (e = g.parse(d, w, c, this, e, m, t))
                    : ((v = be(d, c, le) + ""),
                      (T = "string" == typeof w),
                      "color" === c || "fill" === c || "stroke" === c || -1 !== c.indexOf("Color") || (T && /^(rgb|hsl)/.test(w))
                        ? (T || (w = (3 < (w = Be(w)).length ? "rgba(" : "rgb(") + w.join(",") + ")"), (e = ze(r, c, v, w, !0, "transparent", e, 0, m)))
                        : T && /[\s,\(]/i.test(w)
                        ? (e = ze(r, c, v, w, !0, null, e, 0, m))
                        : ((x = (b = parseFloat(v)) || 0 === b ? v.substr((b + "").length) : ""),
                          ("" !== v && "auto" !== v) ||
                            (x =
                              "width" === c || "height" === c
                                ? ((b = (function (o, t, e) {
                                    if ("svg" === (o.nodeName + "").toLowerCase()) return (e || fe(o))[t] || 0
                                    if (o.getBBox && $e(o)) return o.getBBox()[t] || 0
                                    var a = parseFloat("width" === t ? o.offsetWidth : o.offsetHeight),
                                      d = we[t],
                                      s = d.length
                                    for (e = e || fe(o, null); -1 < --s; ) (a -= parseFloat(be(o, "padding" + d[s], e, !0)) || 0), (a -= parseFloat(be(o, "border" + d[s] + "Width", e, !0)) || 0)
                                    return a
                                  })(d, c, le)),
                                  "px")
                                : "left" === c || "top" === c
                                ? ((b = ve(d, c, le)), "px")
                                : ((b = "opacity" === c ? 1 : 0), "")),
                          "" ===
                            (S = (B = T && "=" === w.charAt(1))
                              ? ((y = parseInt(w.charAt(0) + "1", 10)), (w = w.substr(2)), (y *= parseFloat(w)), w.replace(me, ""))
                              : ((y = parseFloat(w)), T ? w.replace(me, "") : "")) && (S = c in de ? de[c] : x),
                          (w = y || 0 === y ? (B ? y + b : y) + S : t[c]),
                          x !== S &&
                            "" !== S &&
                            (y || 0 === y) &&
                            b &&
                            ((b = ye(d, c, b, x)),
                            "%" === S
                              ? ((b /= ye(d, c, 100, "%") / 100), !0 !== t.strictUnits && (v = b + "%"))
                              : "em" === S || "rem" === S || "vw" === S || "vh" === S
                              ? (b /= ye(d, c, 1, S))
                              : "px" !== S && ((y = ye(d, c, y, S)), (S = "px")),
                            B && ((!y && 0 !== y) || (w = y + b + S))),
                          B && (y += b),
                          (b || 0 === b) && (y || 0 === y)
                            ? ((e = new Re(r, c, b, y - b, e, 0, c, !1 !== Ce && ("px" === S || "zIndex" === c), 0, v, w)).xs0 = S)
                            : void 0 !== r[c] && (w || ("NaN" != w + "" && null != w))
                            ? ((e = new Re(r, c, y || b || 0, 0, e, -1, c, !1, 0, v, w)).xs0 = "none" !== w || ("display" !== c && -1 === c.indexOf("Style")) ? w : v)
                            : V("invalid " + c + " tween value: " + t[c]))),
                  m && e && !e.plugin && (e.plugin = m)
              return e
            }),
            (m.setRatio = function (o) {
              var t = this._firstPT,
                n,
                a,
                d
              if (!(1 !== o || (this._tween._time !== this._tween._duration && 0 !== this._tween._time)))
                for (; t; ) {
                  if (!(2 !== t.type)) t.setRatio(o)
                  else if (!(t.r && -1 !== t.type)) t.t[t.p] = t.e
                  else if (!((n = Math.round(t.s + t.c)), t.type)) t.t[t.p] = n + t.xs0
                  else if (1 === t.type) {
                    for (d = t.l, a = t.xs0 + n + t.xs1, d = 1; d < t.l; d++) a += t["xn" + d] + t["xs" + (d + 1)]
                    t.t[t.p] = a
                  }
                  t = t._next
                }
              else if (o || (this._tween._time !== this._tween._duration && 0 !== this._tween._time) || -1e-6 === this._tween._rawPrevTime)
                for (; t; ) {
                  if (!((n = t.c * o + t.s), t.r ? (n = Math.round(n)) : 1e-6 > n && -1e-6 < n && (n = 0), t.type)) t.t[t.p] = n + t.xs0
                  else if (!(1 === t.type)) -1 === t.type ? (t.t[t.p] = t.xs0) : t.setRatio && t.setRatio(o)
                  else if (2 === (d = t.l)) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2
                  else if (3 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3
                  else if (4 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4
                  else if (5 === d) t.t[t.p] = t.xs0 + n + t.xs1 + t.xn1 + t.xs2 + t.xn2 + t.xs3 + t.xn3 + t.xs4 + t.xn4 + t.xs5
                  else {
                    for (a = t.xs0 + n + t.xs1, d = 1; d < t.l; d++) a += t["xn" + d] + t["xs" + (d + 1)]
                    t.t[t.p] = a
                  }
                  t = t._next
                }
              else for (; t; ) 2 === t.type ? t.setRatio(o) : (t.t[t.p] = t.b), (t = t._next)
            }),
            (m._enableTransforms = function (e) {
              ;(this._transform = this._transform || tt(this._target, le, !0)), (this._transformType = (this._transform.svg && it) || (!e && 3 !== this._transformType) ? 2 : 3)
            }),
            (m._addLazySet = function (o, t, e) {
              var n = (this._firstPT = new Re(o, t, 0, 0, this._firstPT, 2))
              ;(n.e = e), (n.setRatio = ie), (n.data = this)
            }),
            (m._linkCSSP = function (o, t, e, n) {
              return (
                o &&
                  (t && (t._prev = o),
                  o._next && (o._next._prev = o._prev),
                  o._prev ? (o._prev._next = o._next) : this._firstPT === o && ((this._firstPT = o._next), (n = !0)),
                  e ? (e._next = o) : n || null !== this._firstPT || (this._firstPT = o),
                  (o._next = t),
                  (o._prev = e)),
                o
              )
            }),
            (m._mod = function (o) {
              for (var t = this._firstPT; t; ) "function" == typeof o[t.p] && o[t.p] === Math.round && (t.r = 1), (t = t._next)
            }),
            (m._kill = function (o) {
              var t = o,
                n,
                a,
                d
              if (o.autoAlpha || o.alpha) {
                for (a in ((t = {}), o)) t[a] = o[a]
                ;(t.opacity = 1), t.autoAlpha && (t.visibility = 1)
              }
              for (
                o.className &&
                  (n = this._classNamePT) &&
                  ((d = n.xfirst) && d._prev ? this._linkCSSP(d._prev, n._next, d._prev._prev) : d === this._firstPT && (this._firstPT = n._next),
                  n._next && this._linkCSSP(n._next, n._next._next, d._prev),
                  (this._classNamePT = null)),
                  n = this._firstPT;
                n;

              )
                n.plugin && n.plugin !== a && n.plugin._kill && (n.plugin._kill(o), (a = n.plugin)), (n = n._next)
              return E.prototype._kill.call(this, t)
            })
          var mt = function (o, t, e) {
            var d, l, p, _
            if (o.slice) for (l = o.length; -1 < --l; ) mt(o[l], t, e)
            else
              for (l = (d = o.childNodes).length; -1 < --l; ) (_ = (p = d[l]).type), p.style && (t.push(g(p)), e && e.push(p)), (1 === _ || 9 === _ || 11 === _) && p.childNodes.length && mt(p, t, e)
          }
          return (
            (se.cascadeTo = function (d, _, e) {
              var m = L.to(d, _, e),
                o = [m],
                l = [],
                c = [],
                h = [],
                u = L._internals.reservedProps,
                p,
                g,
                f,
                b
              for (d = m._targets || m.target, mt(d, l, h), m.render(_, !0, !0), mt(d, c), m.render(0, !0, !0), m._enabled(!0), p = h.length; -1 < --p; )
                if ((g = y(h[p], l[p], c[p])).firstMPT) {
                  for (f in ((g = g.difs), e)) u[f] && (g[f] = e[f])
                  for (f in ((b = {}), g)) b[f] = l[p][f]
                  o.push(L.fromTo(h[p], _, b, g))
                }
              return o
            }),
            E.activate([se]),
            se
          )
        },
        !0
      ),
      _fwd_fwdScope.FWDFWD_fwdDefine(
        "easing.Back",
        ["easing.Ease"],
        function (b) {
          function d(o, t) {
            var e = h("easing." + o, function () {}, !0),
              n = (e.prototype = new b())
            return (n.constructor = e), (n.getRatio = t), e
          }
          function t(o, t, e, s) {
            var r = h("easing." + o, { easeOut: new t(), easeIn: new e(), easeInOut: new s() }, !0)
            return f(r, o), r
          }
          function m(o, t, e) {
            ;(this.t = o), (this.v = t), e && ((((this.next = e).prev = this).c = e.v - t), (this.gap = e.t - o))
          }
          function e(o, t) {
            var e = h(
                "easing." + o,
                function (e) {
                  ;(this._p1 = e || 0 === e ? e : 1.70158), (this._p2 = 1.525 * this._p1)
                },
                !0
              ),
              n = (e.prototype = new b())
            return (
              (n.constructor = e),
              (n.getRatio = t),
              (n.config = function (o) {
                return new e(o)
              }),
              e
            )
          }
          var g = _fwd_fwdScope.FWDGlobals || _fwd_fwdScope,
            a = g.com.fwd,
            o = 2 * Math.PI,
            l = Math.PI / 2,
            h = a._class,
            f = b.register || function () {},
            u = t(
              "Back",
              e("BackOut", function (e) {
                return --e * e * ((this._p1 + 1) * e + this._p1) + 1
              }),
              e("BackIn", function (e) {
                return e * e * ((this._p1 + 1) * e - this._p1)
              }),
              e("BackInOut", function (e) {
                return 1 > (e *= 2) ? 0.5 * e * e * ((this._p2 + 1) * e - this._p2) : 0.5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
              })
            ),
            p = h(
              "easing.SlowMo",
              function (o, n, s) {
                ;(n = n || 0 === n ? n : 0.7),
                  null == o ? (o = 0.7) : 1 < o && (o = 1),
                  (this._p = 1 === o ? 0 : n),
                  (this._p1 = (1 - o) / 2),
                  (this._p2 = o),
                  (this._p3 = this._p1 + this._p2),
                  (this._calcEnd = !0 === s)
              },
              !0
            ),
            _ = (p.prototype = new b()),
            y,
            v,
            w
          return (
            (_.constructor = p),
            (_.getRatio = function (o) {
              var n = o + (0.5 - o) * this._p
              return o < this._p1
                ? this._calcEnd
                  ? 1 - (o = 1 - o / this._p1) * o
                  : n - (o = 1 - o / this._p1) * o * o * o * n
                : o > this._p3
                ? this._calcEnd
                  ? 1 - (o = (o - this._p3) / this._p1) * o
                  : n + (o - n) * (o = (o - this._p3) / this._p1) * o * o * o
                : this._calcEnd
                ? 1
                : n
            }),
            (p.ease = new p(0.7, 0.7)),
            (_.config = p.config =
              function (o, t, e) {
                return new p(o, t, e)
              }),
            ((_ = (y = h(
              "easing.SteppedEase",
              function (e) {
                ;(e = e || 1), (this._p1 = 1 / e), (this._p2 = e + 1)
              },
              !0
            )).prototype =
              new b()).constructor = y),
            (_.getRatio = function (e) {
              return 0 > e ? (e = 0) : 1 <= e && (e = 0.999999999), ((this._p2 * e) >> 0) * this._p1
            }),
            (_.config = y.config =
              function (e) {
                return new y(e)
              }),
            ((_ = (v = h(
              "easing.RoughEase",
              function (g) {
                for (
                  var y = (g = g || {}).taper || "none",
                    o = [],
                    l = 0,
                    v = 0 | (g.points || 20),
                    f = v,
                    w = !1 !== g.randomize,
                    p = !0 === g.clamp,
                    _ = g.template instanceof b ? g.template : null,
                    c = "number" == typeof g.strength ? 0.4 * g.strength : 0.4,
                    d,
                    x,
                    S,
                    T,
                    B,
                    O;
                  -1 < --f;

                )
                  (d = w ? Math.random() : (1 / v) * f),
                    (x = _ ? _.getRatio(d) : d),
                    (S = "none" === y ? c : "out" === y ? (T = 1 - d) * T * c : "in" === y ? d * d * c : 0.5 > d ? 0.5 * ((T = 2 * d) * T) * c : 0.5 * ((T = 2 * (1 - d)) * T) * c),
                    w ? (x += Math.random() * S - 0.5 * S) : f % 2 ? (x += 0.5 * S) : (x -= 0.5 * S),
                    p && (1 < x ? (x = 1) : 0 > x && (x = 0)),
                    (o[l++] = { x: d, y: x })
                for (
                  o.sort(function (o, t) {
                    return o.x - t.x
                  }),
                    O = new m(1, 1, null),
                    f = v;
                  -1 < --f;

                )
                  (B = o[f]), (O = new m(B.x, B.y, O))
                this._prev = new m(0, 0, 0 === O.t ? O.next : O)
              },
              !0
            )).prototype =
              new b()).constructor = v),
            (_.getRatio = function (o) {
              var t = this._prev
              if (o > t.t) {
                for (; t.next && o >= t.t; ) t = t.next
                t = t.prev
              } else for (; t.prev && o <= t.t; ) t = t.prev
              return (this._prev = t).v + ((o - t.t) / t.gap) * t.c
            }),
            (_.config = function (e) {
              return new v(e)
            }),
            (v.ease = new v()),
            t(
              "Bounce",
              d("BounceOut", function (e) {
                return e < 1 / 2.75
                  ? 7.5625 * e * e
                  : e < 2 / 2.75
                  ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
                  : e < 2.5 / 2.75
                  ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
                  : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375
              }),
              d("BounceIn", function (e) {
                return (e = 1 - e) < 1 / 2.75
                  ? 1 - 7.5625 * e * e
                  : e < 2 / 2.75
                  ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
                  : e < 2.5 / 2.75
                  ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
                  : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375)
              }),
              d("BounceInOut", function (o) {
                var n = 0.5 > o
                return (
                  (o = n ? 1 - 2 * o : 2 * o - 1) < 1 / 2.75
                    ? (o *= 7.5625 * o)
                    : (o = o < 2 / 2.75 ? 7.5625 * (o -= 1.5 / 2.75) * o + 0.75 : o < 2.5 / 2.75 ? 7.5625 * (o -= 2.25 / 2.75) * o + 0.9375 : 7.5625 * (o -= 2.625 / 2.75) * o + 0.984375),
                  n ? 0.5 * (1 - o) : 0.5 * o + 0.5
                )
              })
            ),
            t(
              "Circ",
              d("CircOut", function (e) {
                return Math.sqrt(1 - --e * e)
              }),
              d("CircIn", function (e) {
                return -(Math.sqrt(1 - e * e) - 1)
              }),
              d("CircInOut", function (e) {
                return 1 > (e *= 2) ? -0.5 * (Math.sqrt(1 - e * e) - 1) : 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
              })
            ),
            t(
              "Elastic",
              (w = function (n, t, a) {
                var d = h(
                    "easing." + n,
                    function (n, t) {
                      ;(this._p1 = 1 <= n ? n : 1), (this._p2 = (t || a) / (1 > n ? n : 1)), (this._p3 = (this._p2 / o) * (Math.asin(1 / this._p1) || 0)), (this._p2 = o / this._p2)
                    },
                    !0
                  ),
                  e = (d.prototype = new b())
                return (
                  (e.constructor = d),
                  (e.getRatio = t),
                  (e.config = function (o, t) {
                    return new d(o, t)
                  }),
                  d
                )
              })(
                "ElasticOut",
                function (e) {
                  return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
                },
                0.3
              ),
              w(
                "ElasticIn",
                function (e) {
                  return -(this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
                },
                0.3
              ),
              w(
                "ElasticInOut",
                function (e) {
                  return 1 > (e *= 2)
                    ? -0.5 * (this._p1 * Math.pow(2, 10 * --e) * Math.sin((e - this._p3) * this._p2))
                    : 0.5 * (this._p1 * Math.pow(2, -10 * --e) * Math.sin((e - this._p3) * this._p2)) + 1
                },
                0.45
              )
            ),
            t(
              "Expo",
              d("ExpoOut", function (e) {
                return 1 - Math.pow(2, -10 * e)
              }),
              d("ExpoIn", function (e) {
                return Math.pow(2, 10 * (e - 1)) - 0.001
              }),
              d("ExpoInOut", function (e) {
                return 1 > (e *= 2) ? 0.5 * Math.pow(2, 10 * (e - 1)) : 0.5 * (2 - Math.pow(2, -10 * (e - 1)))
              })
            ),
            t(
              "Sine",
              d("SineOut", function (e) {
                return Math.sin(e * l)
              }),
              d("SineIn", function (e) {
                return 1 - Math.cos(e * l)
              }),
              d("SineInOut", function (e) {
                return -0.5 * (Math.cos(Math.PI * e) - 1)
              })
            ),
            h(
              "easing.EaseLookup",
              {
                find: function (e) {
                  return b.map[e]
                },
              },
              !0
            ),
            f(g.SlowMo, "SlowMo", "ease,"),
            f(v, "RoughEase", "ease,"),
            f(y, "SteppedEase", "ease,"),
            u
          )
        },
        !0
      )
  }),
  _fwd_fwdScope.FWDFWD_fwdDefine && _fwd_fwdScope._fwd_fwdQueue.pop()(),
  (function (ee, _) {
    "use strict"
    var c = {},
      d = (ee.FWDGlobals = ee.FWDGlobals || ee)
    if (!d.FWDTweenLite) {
      var m = function (o) {
          for (var t = o.split("."), e = d, n = 0; n < t.length; n++) e[t[n]] = e = e[t[n]] || {}
          return e
        },
        y = m("com.fwd"),
        te = 1e-10,
        u = function (o) {
          for (var t = [], e = o.length, n = 0; n !== e; t.push(o[n++]));
          return t
        },
        v = function () {},
        oe =
          ((s = Object.prototype.toString),
          (T = s.call([])),
          function (e) {
            return null != e && (e instanceof Array || ("object" == typeof e && !!e.push && s.call(e) === T))
          }),
        r = {},
        l = function (e, n, h, t) {
          ;(this.sc = r[e] ? r[e].sc : []), ((r[e] = this).gsClass = null), (this.func = h)
          var u = []
          ;(this.check = function (p) {
            for (var g = n.length, f = g, b, y, v, w, x; -1 < --g; ) (b = r[n[g]] || new l(n[g], [])).gsClass ? ((u[g] = b.gsClass), f--) : p && b.sc.push(this)
            if (0 === f && h) {
              if (((v = (y = ("com.fwd." + e).split(".")).pop()), (w = m(y.join("."))[v] = this.gsClass = h.apply(h, u)), t))
                if (((d[v] = c[v] = w), !(x = "undefined" != typeof fwd_module && fwd_module.exports) && "function" == typeof define && define.amd))
                  define((ee.FWDAMDPath ? ee.FWDAMDPath + "/" : "") + e.split(".").pop(), [], function () {
                    return w
                  })
                else if (x)
                  if (e === _) for (g in ((fwd_module.exports = c[_] = w), c)) w[g] = c[g]
                  else c[_] && (c[_][v] = w)
              for (g = 0; g < this.sc.length; g++) this.sc[g].check()
            }
          }),
            this.check(!0)
        },
        w = (ee.FWDFWD_fwdDefine = function (o, t, e, n) {
          return new l(o, t, e, n)
        }),
        x = (y._class = function (o, t, n) {
          return (
            (t = t || function () {}),
            w(
              o,
              [],
              function () {
                return t
              },
              n
            ),
            t
          )
        }),
        p,
        s,
        T
      w.globals = d
      var ne = [0, 0, 1, 1],
        ie = x(
          "easing.Ease",
          function (o, t, e, n) {
            ;(this._func = o), (this._type = e || 0), (this._power = n || 0), (this._params = t ? ne.concat(t) : ne)
          },
          !0
        ),
        b = (ie.map = {}),
        n = (ie.register = function (d, t, e, p) {
          for (var r = t.split(","), l = r.length, _ = (e || "easeIn,easeOut,easeInOut").split(","), m, u, c, g; -1 < --l; )
            for (u = r[l], m = p ? x("easing." + u, null, !0) : y.easing[u] || {}, c = _.length; -1 < --c; ) (g = _[c]), (b[u + "." + g] = b[g + u] = m[g] = d.getRatio ? d : d[g] || new d())
        }),
        a
      for (
        (a = ie.prototype)._calcEnd = !1,
          a.getRatio = function (o) {
            if (this._func) return (this._params[0] = o), this._func.apply(null, this._params)
            var t = this._type,
              e = this._power,
              n = 1 === t ? 1 - o : 2 === t ? o : 0.5 > o ? 2 * o : 2 * (1 - o)
            return 1 === e ? (n *= n) : 2 === e ? (n *= n * n) : 3 === e ? (n *= n * n * n) : 4 === e && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : 0.5 > o ? n / 2 : 1 - n / 2
          },
          ae = (de = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length;
        -1 < --ae;

      )
        (a = de[ae] + ",Power" + ae),
          n(new ie(null, null, 1, ae), a, "easeOut", !0),
          n(new ie(null, null, 2, ae), a, "easeIn" + (0 === ae ? ",easeNone" : "")),
          n(new ie(null, null, 3, ae), a, "easeInOut")
      ;(b.linear = y.easing.Linear.easeIn), (b.swing = y.easing.Quad.easeInOut)
      var P = x("events.EventDispatcher", function (e) {
        ;(this._listeners = {}), (this._eventTarget = e || this)
      })
      ;((a = P.prototype).addEventListener = function (d, t, e, _, r) {
        r = r || 0
        var m = this._listeners[d],
          u = 0,
          c,
          h
        for (this !== f || p || f.wake(), null == m && (this._listeners[d] = m = []), h = m.length; -1 < --h; ) (c = m[h]).c === t && c.s === e ? m.splice(h, 1) : 0 === u && c.pr < r && (u = h + 1)
        m.splice(u, 0, { c: t, s: e, up: _, pr: r })
      }),
        (a.removeEventListener = function (o, t) {
          var e = this._listeners[o],
            n
          if (e) for (n = e.length; -1 < --n; ) if (e[n].c === t) return void e.splice(n, 1)
        }),
        (a.dispatchEvent = function (o) {
          var t = this._listeners[o],
            n,
            a,
            d
          if (t) for (1 < (n = t.length) && (t = t.slice(0)), a = this._eventTarget; -1 < --n; ) (d = t[n]) && (d.up ? d.c.call(d.s || a, { type: o, target: a }) : d.c.call(d.s || a))
        })
      for (
        var O = ee.requestAnimationFrame,
          se = ee.cancelAnimationFrame,
          re =
            Date.now ||
            function () {
              return new Date().getTime()
            },
          S = re(),
          ae = (de = ["ms", "moz", "webkit", "o"]).length,
          de;
        -1 < --ae && !O;

      )
        (O = ee[de[ae] + "RequestAnimationFrame"]), (se = ee[de[ae] + "CancelAnimationFrame"] || ee[de[ae] + "CancelRequestAnimationFrame"])
      x("Ticker", function (r, t) {
        var d = this,
          m = re(),
          e = !1 !== t && O && "auto",
          c = 500,
          h = 33,
          g = function (o) {
            var t = re() - S,
              n,
              s
            c < t && (m += t - h),
              (S += t),
              (d.time = (S - m) / 1e3),
              (n = d.time - x),
              (!_ || 0 < n || !0 === o) && (d.frame++, (x += n + (w <= n ? 0.004 : w - n)), (s = !0)),
              !0 !== o && (y = b(g)),
              s && d.dispatchEvent("tick")
          },
          _,
          b,
          y,
          w,
          x
        P.call(d),
          (d.time = d.frame = 0),
          (d.tick = function () {
            g(!0)
          }),
          (d.lagSmoothing = function (o, t) {
            ;(c = o || 1e10), (h = Math.min(t, c, 0))
          }),
          (d.sleep = function () {
            null != y && ((e && se ? se : clearTimeout)(y), (b = v), (y = null), d === f && (p = !1))
          }),
          (d.wake = function (o) {
            null === y ? (o ? (m += -S + (S = re())) : 10 < d.frame && (S = re() - c + 5)) : d.sleep(),
              (b =
                0 === _
                  ? v
                  : e && O
                  ? O
                  : function (e) {
                      return setTimeout(e, 0 | (1e3 * (x - d.time) + 1))
                    }),
              d === f && (p = !0),
              g(2)
          }),
          (d.fps = function (e) {
            return arguments.length ? void ((w = 1 / ((_ = e) || 60)), (x = this.time + w), d.wake()) : _
          }),
          (d.useRAF = function (o) {
            return arguments.length ? void (d.sleep(), (e = o), d.fps(_)) : e
          }),
          d.fps(r),
          setTimeout(function () {
            "auto" === e && 5 > d.frame && "hidden" !== document.visibilityState && d.useRAF(!1)
          }, 1500)
      }),
        ((a = y.Ticker.prototype = new y.events.EventDispatcher()).constructor = y.Ticker)
      var le = x("core.FWDAnimation", function (o, t) {
          var n
          ;(this.vars = t = t || {}),
            (this._duration = this._totalDuration = o || 0),
            (this._delay = +t.delay || 0),
            (this._timeScale = 1),
            (this._active = !0 === t.immediateRender),
            (this.data = t.data),
            (this._reversed = !0 === t.reversed),
            U && (p || f.wake(), (n = this.vars.useFrames ? Z : U).add(this, n._time), this.vars.paused && this.paused(!0))
        }),
        f = (le.ticker = new y.Ticker())
      ;((a = le.prototype)._dirty = a._gc = a._initted = a._paused = !1),
        (a._totalTime = a._time = 0),
        (a._rawPrevTime = -1),
        (a._next = a._last = a._onUpdate = a._timeline = a.timeline = null),
        (a._paused = !1)
      var M = function () {
        p && 2e3 < re() - S && f.wake(), setTimeout(M, 2e3)
      }
      M(),
        (a.play = function (o, t) {
          return null != o && this.seek(o, t), this.reversed(!1).paused(!1)
        }),
        (a.pause = function (o, t) {
          return null != o && this.seek(o, t), this.paused(!0)
        }),
        (a.resume = function (o, t) {
          return null != o && this.seek(o, t), this.paused(!1)
        }),
        (a.seek = function (o, t) {
          return this.totalTime(+o, !1 !== t)
        }),
        (a.restart = function (o, t) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(o ? -this._delay : 0, !1 !== t, !0)
        }),
        (a.reverse = function (o, t) {
          return null != o && this.seek(o || this.totalDuration(), t), this.reversed(!0).paused(!1)
        }),
        (a.render = function () {}),
        (a.invalidate = function () {
          return (this._time = this._totalTime = 0), (this._initted = this._gc = !1), (this._rawPrevTime = -1), (!this._gc && this.timeline) || this._enabled(!0), this
        }),
        (a.isActive = function () {
          var o = this._timeline,
            e = this._startTime,
            n
          return !o || (!this._gc && !this._paused && o.isActive() && (n = o.rawTime()) >= e && n < e + this.totalDuration() / this._timeScale)
        }),
        (a._enabled = function (o, t) {
          return (
            p || f.wake(),
            (this._gc = !o),
            (this._active = this.isActive()),
            !0 !== t && (o && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !o && this.timeline && this._timeline._remove(this, !0)),
            !1
          )
        }),
        (a._kill = function () {
          return this._enabled(!1, !1)
        }),
        (a.kill = function (o, t) {
          return this._kill(o, t), this
        }),
        (a._uncache = function (o) {
          for (var t = o ? this : this.timeline; t; ) (t._dirty = !0), (t = t.timeline)
          return this
        }),
        (a._swapSelfInParams = function (o) {
          for (var t = o.length, n = o.concat(); -1 < --t; ) "{self}" === o[t] && (n[t] = this)
          return n
        }),
        (a._callback = function (o) {
          var t = this.vars,
            e = t[o],
            n = t[o + "Params"],
            r = t[o + "Scope"] || t.callbackScope || this
          switch (n ? n.length : 0) {
            case 0:
              e.call(r)
              break
            case 1:
              e.call(r, n[0])
              break
            case 2:
              e.call(r, n[0], n[1])
              break
            default:
              e.apply(r, n)
          }
        }),
        (a.eventCallback = function (o, t, e, n) {
          if ("on" === (o || "").substr(0, 2)) {
            var r = this.vars
            if (1 === arguments.length) return r[o]
            null == t ? delete r[o] : ((r[o] = t), (r[o + "Params"] = oe(e) && -1 !== e.join("").indexOf("{self}") ? this._swapSelfInParams(e) : e), (r[o + "Scope"] = n)),
              "onUpdate" === o && (this._onUpdate = t)
          }
          return this
        }),
        (a.delay = function (e) {
          return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), (this._delay = e), this) : this._delay
        }),
        (a.duration = function (e) {
          return arguments.length
            ? ((this._duration = this._totalDuration = e),
              this._uncache(!0),
              this._timeline.smoothChildTiming && 0 < this._time && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration)
        }),
        (a.totalDuration = function (e) {
          return (this._dirty = !1), arguments.length ? this.duration(e) : this._totalDuration
        }),
        (a.time = function (o, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(o > this._duration ? this._duration : o, t)) : this._time
        }),
        (a.totalTime = function (o, n, e) {
          if ((p || f.wake(), !arguments.length)) return this._totalTime
          if (this._timeline) {
            if ((0 > o && !e && (o += this.totalDuration()), this._timeline.smoothChildTiming)) {
              this._dirty && this.totalDuration()
              var a = this._totalDuration,
                r = this._timeline
              if ((a < o && !e && (o = a), (this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? a - o : o) / this._timeScale), r._dirty || this._uncache(!1), r._timeline))
                for (; r._timeline; ) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), (r = r._timeline)
            }
            this._gc && this._enabled(!0, !1), (this._totalTime === o && 0 !== this._duration) || (z.length && me(), this.render(o, n, !1), z.length && me())
          }
          return this
        }),
        (a.progress = a.totalProgress =
          function (o, t) {
            var e = this.duration()
            return arguments.length ? this.totalTime(e * o, t) : e ? this._time / e : this.ratio
          }),
        (a.startTime = function (e) {
          return arguments.length ? (e !== this._startTime && ((this._startTime = e), this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
        }),
        (a.endTime = function (e) {
          return this._startTime + (0 == e ? this.duration() : this.totalDuration()) / this._timeScale
        }),
        (a.timeScale = function (o) {
          return arguments.length
            ? ((o = o || te),
              this._timeline &&
                this._timeline.smoothChildTiming &&
                ((s = (n = this._pauseTime) || 0 === n ? n : this._timeline.totalTime()), (this._startTime = s - ((s - this._startTime) * this._timeScale) / o)),
              (this._timeScale = o),
              this._uncache(!1))
            : this._timeScale
          var n, s
        }),
        (a.reversed = function (e) {
          return arguments.length
            ? (e != this._reversed && ((this._reversed = e), this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this)
            : this._reversed
        }),
        (a.paused = function (o) {
          if (!arguments.length) return this._paused
          var t = this._timeline,
            n,
            s
          return (
            o != this._paused &&
              t &&
              (p || o || f.wake(),
              (s = (n = t.rawTime()) - this._pauseTime),
              !o && t.smoothChildTiming && ((this._startTime += s), this._uncache(!1)),
              (this._pauseTime = o ? n : null),
              (this._paused = o),
              (this._active = this.isActive()),
              !o && 0 != s && this._initted && this.duration() && ((n = t.smoothChildTiming ? this._totalTime : (n - this._startTime) / this._timeScale), this.render(n, n === this._totalTime, !0))),
            this._gc && !o && this._enabled(!0, !1),
            this
          )
        })
      var C = x("core.FWDSimpleTimeline", function (e) {
        le.call(this, 0, e), (this.autoRemoveChildren = this.smoothChildTiming = !0)
      })
      ;((a = C.prototype = new le()).constructor = C),
        (a.kill()._gc = !1),
        (a._first = a._last = a._recent = null),
        (a._sortChildren = !1),
        (a.add = a.insert =
          function (o, t) {
            var e, r
            if (
              ((o._startTime = +(t || 0) + o._delay),
              o._paused && this !== o._timeline && (o._pauseTime = o._startTime + (this.rawTime() - o._startTime) / o._timeScale),
              o.timeline && o.timeline._remove(o, !0),
              (o.timeline = o._timeline = this),
              o._gc && o._enabled(!0, !0),
              (e = this._last),
              this._sortChildren)
            )
              for (r = o._startTime; e && e._startTime > r; ) e = e._prev
            return (
              e ? ((o._next = e._next), (e._next = o)) : ((o._next = this._first), (this._first = o)),
              o._next ? (o._next._prev = o) : (this._last = o),
              (o._prev = e),
              (this._recent = o),
              this._timeline && this._uncache(!0),
              this
            )
          }),
        (a._remove = function (o, t) {
          return (
            o.timeline === this &&
              (t || o._enabled(!1, !0),
              o._prev ? (o._prev._next = o._next) : this._first === o && (this._first = o._next),
              o._next ? (o._next._prev = o._prev) : this._last === o && (this._last = o._prev),
              (o._next = o._prev = o.timeline = null),
              o === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          )
        }),
        (a.render = function (o, t, e) {
          var n = this._first,
            a
          for (this._totalTime = this._time = this._rawPrevTime = o; n; )
            (a = n._next),
              (n._active || (o >= n._startTime && !n._paused)) &&
                (n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (o - n._startTime) * n._timeScale, t, e) : n.render((o - n._startTime) * n._timeScale, t, e)),
              (n = a)
        }),
        (a.rawTime = function () {
          return p || f.wake(), this._totalTime
        })
      var F = x(
          "FWDTweenLite",
          function (d, l, e) {
            if ((le.call(this, l, e), (this.render = F.prototype.render), null == d)) throw "Cannot tween a null target."
            this.target = d = ("string" == typeof d && F.selector(d)) || d
            var p = d.jquery || (d.length && d !== ee && d[0] && (d[0] === ee || (d[0].nodeType && d[0].style && !d.nodeType))),
              a = this.vars.overwrite,
              _,
              m,
              c
            if (((this._overwrite = a = null == a ? q[F.defaultOverwrite] : "number" == typeof a ? a >> 0 : q[a]), (p || d instanceof Array || (d.push && oe(d))) && "number" != typeof d[0]))
              for (this._targets = c = u(d), this._propLookup = [], this._siblings = [], _ = 0; _ < c.length; _++)
                (m = c[_])
                  ? "string" == typeof m
                    ? "string" == typeof (m = c[_--] = F.selector(m)) && c.splice(_ + 1, 1)
                    : m.length && m !== ee && m[0] && (m[0] === ee || (m[0].nodeType && m[0].style && !m.nodeType))
                    ? (c.splice(_--, 1), (this._targets = c = c.concat(u(m))))
                    : ((this._siblings[_] = G(m, this, !1)), 1 === a && 1 < this._siblings[_].length && K(m, this, null, 1, this._siblings[_]))
                  : c.splice(_--, 1)
            else (this._propLookup = {}), (this._siblings = G(d, this, !1)), 1 === a && 1 < this._siblings.length && K(d, this, null, 1, this._siblings)
            ;(this.vars.immediateRender || (0 === l && 0 === this._delay && !1 !== this.vars.immediateRender)) && ((this._time = -te), this.render(Math.min(0, -this._delay)))
          },
          !0
        ),
        D = function (e) {
          return e && e.length && e !== ee && e[0] && (e[0] === ee || (e[0].nodeType && e[0].style && !e.nodeType))
        }
      ;((a = F.prototype = new le()).constructor = F),
        (a.kill()._gc = !1),
        (a.ratio = 0),
        (a._firstPT = a._targets = a._overwrittenProps = a._startAt = null),
        (a._notifyPluginsOfEnabled = a._lazy = !1),
        (F.version = "1.19.0"),
        (F.defaultEase = a._ease = new ie(null, null, 1, 1)),
        (F.defaultOverwrite = "auto"),
        (F.ticker = f),
        (F.autoSleep = 120),
        (F.lagSmoothing = function (o, t) {
          f.lagSmoothing(o, t)
        }),
        (F.selector =
          ee.$ ||
          ee.jQuery ||
          function (o) {
            var t = ee.$ || ee.jQuery
            return t
              ? (F.selector = t)(o)
              : "undefined" == typeof document
              ? o
              : document.querySelectorAll
              ? document.querySelectorAll(o)
              : document.getElementById("#" === o.charAt(0) ? o.substr(1) : o)
          })
      var z = [],
        X = {},
        pe = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        N = function (o) {
          for (var t = this._firstPT, n; t; )
            (n = t.blob ? (o ? this.join("") : this.start) : t.c * o + t.s),
              t.m ? (n = t.m(n, this._target || t.t)) : 1e-6 > n && -1e-6 < n && (n = 0),
              t.f ? (t.fp ? t.t[t.p](t.fp, n) : t.t[t.p](n)) : (t.t[t.p] = n),
              (t = t._next)
        },
        Y = function (d, m, g, b) {
          var r = [d, m],
            u = 0,
            y = "",
            v = 0,
            w,
            x,
            S,
            T,
            B,
            O,
            C
          for (
            r.start = d,
              g && (g(r), (d = r[0]), (m = r[1])),
              r.length = 0,
              w = d.match(pe) || [],
              x = m.match(pe) || [],
              b && ((b._next = null), (b.blob = 1), (r._firstPT = r._applyPT = b)),
              B = x.length,
              T = 0;
            T < B;
            T++
          )
            (C = x[T]),
              (y += (O = m.substr(u, m.indexOf(C, u) - u)) || !T ? O : ","),
              (u += O.length),
              v ? (v = (v + 1) % 5) : "rgba(" === O.substr(-5) && (v = 1),
              C === w[T] || w.length <= T
                ? (y += C)
                : (y && (r.push(y), (y = "")),
                  (S = parseFloat(w[T])),
                  r.push(S),
                  (r._firstPT = {
                    _next: r._firstPT,
                    t: r,
                    p: r.length - 1,
                    s: S,
                    c: ("=" === C.charAt(1) ? parseInt(C.charAt(0) + "1", 10) * parseFloat(C.substr(2)) : parseFloat(C) - S) || 0,
                    f: 0,
                    m: v && 4 > v ? Math.round : 0,
                  })),
              (u += C.length)
          return (y += m.substr(u)) && r.push(y), (r.setRatio = N), r
        },
        E = function (d, t, e, m, c, s, n, a, o) {
          "function" == typeof m && (m = m(o || 0, d))
          var l = "get" === e ? d[t] : e,
            g = typeof d[t],
            u = "string" == typeof m && "=" === m.charAt(1),
            p = {
              t: d,
              p: t,
              s: l,
              f: "function" == g,
              pg: 0,
              n: c || t,
              m: s ? ("function" == typeof s ? s : Math.round) : 0,
              pr: 0,
              c: u ? parseInt(m.charAt(0) + "1", 10) * parseFloat(m.substr(2)) : parseFloat(m) - l || 0,
            },
            b
          if (
            ("number" != g &&
              ("function" == g && "get" === e && ((b = t.indexOf("set") || "function" != typeof d["get" + t.substr(3)] ? t : "get" + t.substr(3)), (p.s = l = n ? d[b](n) : d[b]())),
              "string" == typeof l && (n || isNaN(l))
                ? ((p.fp = n), (p = { t: Y(l, m, a || F.defaultStringFilter, p), p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: c || t, pr: 0, m: 0 }))
                : u || ((p.s = parseFloat(l)), (p.c = parseFloat(m) - p.s || 0))),
            p.c)
          )
            return (p._next = this._firstPT) && (p._next._prev = p), (this._firstPT = p)
        },
        B = (F._internals = { isArray: oe, isSelector: D, lazyTweens: z, blobDif: Y }),
        W = (F._plugins = {}),
        L = (B.tweenLookup = {}),
        j = 0,
        _e = (B.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1,
        }),
        q = { none: 0, all: 1, auto: 2, concurrent: 3, allOnStart: 4, preexisting: 5, true: 1, false: 0 },
        Z = (le._rootFramesTimeline = new C()),
        U = (le._rootTimeline = new C()),
        $ = 30,
        me = (B.lazyRender = function () {
          var o = z.length,
            n
          for (X = {}; -1 < --o; ) (n = z[o]) && !1 !== n._lazy && (n.render(n._lazy[0], n._lazy[1], !0), (n._lazy = !1))
          z.length = 0
        })
      ;(U._startTime = f.time),
        (Z._startTime = f.frame),
        (U._active = Z._active = !0),
        setTimeout(me, 1),
        (le._updateRoot = F.render =
          function () {
            var o, n, s
            if ((z.length && me(), U.render((f.time - U._startTime) * U._timeScale, !1, !1), Z.render((f.frame - Z._startTime) * Z._timeScale, !1, !1), z.length && me(), f.frame >= $)) {
              for (s in (($ = f.frame + (parseInt(F.autoSleep, 10) || 120)), L)) {
                for (o = (n = L[s].tweens).length; -1 < --o; ) n[o]._gc && n.splice(o, 1)
                0 === n.length && delete L[s]
              }
              if ((!(s = U._first) || s._paused) && F.autoSleep && !Z._first && 1 === f._listeners.tick.length) {
                for (; s && s._paused; ) s = s._next
                s || f.sleep()
              }
            }
          }),
        f.addEventListener("tick", le._updateRoot)
      var G = function (o, t, e) {
          var a = o._fwdTweenID,
            d,
            l
          if ((L[a || (o._fwdTweenID = a = "t" + j++)] || (L[a] = { target: o, tweens: [] }), t && (((d = L[a].tweens)[(l = d.length)] = t), e))) for (; -1 < --l; ) d[l] === t && d.splice(l, 1)
          return L[a].tweens
        },
        H = function (o, t, e, d) {
          var r = o.vars.onOverwrite,
            l,
            p
          return r && (l = r(o, t, e, d)), (r = F.onOverwrite) && (p = r(o, t, e, d)), !1 !== l && !1 !== p
        },
        K = function (d, t, e, m, r) {
          var s, c, g
          if (1 === m || 4 <= m) {
            for (g = r.length, p = 0; p < g; p++)
              if ((c = r[p]) !== t) c._gc || (c._kill(null, d, t) && (s = !0))
              else if (5 === m) break
            return s
          }
          for (var b = t._startTime + te, h = [], f = 0, y = 0 === t._duration, p = r.length, v; -1 < --p; )
            (c = r[p]) === t ||
              c._gc ||
              c._paused ||
              (c._timeline === t._timeline
                ? c._startTime <= b && c._startTime + c.totalDuration() / c._timeScale > b && (((y || !c._initted) && 2e-10 >= b - c._startTime) || (h[f++] = c))
                : ((v = v || J(t, 0, y)), 0 === J(c, v, y) && (h[f++] = c)))
          for (p = f; -1 < --p; )
            if (((c = h[p]), 2 === m && c._kill(e, d, t) && (s = !0), 2 !== m || (!c._firstPT && c._initted))) {
              if (2 !== m && !H(c, t)) continue
              c._enabled(!1, !1) && (s = !0)
            }
          return s
        },
        J = function (o, t, e) {
          for (var a = o._timeline, d = a._timeScale, l = o._startTime; a._timeline; ) {
            if (((l += a._startTime), (d *= a._timeScale), a._paused)) return -100
            a = a._timeline
          }
          return t < (l /= d) ? l - t : (e && l === t) || (!o._initted && l - t < 2 * te) ? te : (l += o.totalDuration() / o._timeScale / d) > t + te ? 0 : l - t - te
        }
      ;(a._init = function () {
        var d = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          l = !!d.immediateRender,
          p = d.ease,
          _,
          m,
          u,
          c,
          g,
          y
        if (d.startAt) {
          for (c in (this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), (g = {}), d.startAt)) g[c] = d.startAt[c]
          if (((g.overwrite = !1), (g.immediateRender = !0), (g.lazy = l && !1 !== d.lazy), (g.startAt = g.delay = null), (this._startAt = F.to(this.target, 0, g)), l))
            if (0 < this._time) this._startAt = null
            else if (0 !== o) return
        } else if (d.runBackwards && 0 !== o)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), (this._startAt = null)
          else {
            for (c in (0 !== this._time && (l = !1), (u = {}), d)) (_e[c] && "autoCSS" !== c) || (u[c] = d[c])
            if (!((u.overwrite = 0), (u.data = "isFromStart"), (u.lazy = l && !1 !== d.lazy), (u.immediateRender = l), (this._startAt = F.to(this.target, 0, u)), l))
              this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
            else if (0 === this._time) return
          }
        if (
          ((this._ease = p = p ? (p instanceof ie ? p : "function" == typeof p ? new ie(p, d.easeParams) : b[p] || F.defaultEase) : F.defaultEase),
          d.easeParams instanceof Array && p.config && (this._ease = p.config.apply(p, d.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (y = this._targets.length, _ = 0; _ < y; _++) this._initProps(this._targets[_], (this._propLookup[_] = {}), this._siblings[_], a ? a[_] : null, _) && (m = !0)
        else m = this._initProps(this.target, this._propLookup, this._siblings, a, 0)
        if ((m && F._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || ("function" != typeof this.target && this._enabled(!1, !1))), d.runBackwards))
          for (u = this._firstPT; u; ) (u.s += u.c), (u.c = -u.c), (u = u._next)
        ;(this._onUpdate = d.onUpdate), (this._initted = !0)
      }),
        (a._initProps = function (d, t, e, p, r) {
          var s, _, m, u, c, g
          if (null == d) return !1
          for (s in (X[d._fwdTweenID] && me(),
          this.vars.css ||
            (d.style &&
              d !== ee &&
              d.nodeType &&
              W.css &&
              !1 !== this.vars.autoCSS &&
              (function (o, t) {
                var e = {},
                  n
                for (n in o)
                  _e[n] ||
                    (n in t && "transform" !== n && "x" !== n && "y" !== n && "width" !== n && "height" !== n && "className" !== n && "border" !== n) ||
                    !(!W[n] || (W[n] && W[n]._autoCSS)) ||
                    ((e[n] = o[n]), delete o[n])
                o.css = e
              })(this.vars, d)),
          this.vars))
            if (((g = this.vars[s]), _e[s])) g && (g instanceof Array || (g.push && oe(g))) && -1 !== g.join("").indexOf("{self}") && (this.vars[s] = g = this._swapSelfInParams(g, this))
            else if (W[s] && (u = new W[s]())._onInitTween(d, this.vars[s], this, r)) {
              for (this._firstPT = c = { _next: this._firstPT, t: u, p: "setRatio", s: 0, c: 1, f: 1, n: s, pg: 1, pr: u._priority, m: 0 }, _ = u._overwriteProps.length; -1 < --_; )
                t[u._overwriteProps[_]] = this._firstPT
              ;(u._priority || u._onInitAllProps) && (m = !0), (u._onDisable || u._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
            } else t[s] = E.call(this, d, s, "get", g, s, 0, null, this.vars.stringFilter, r)
          return p && this._kill(p, d)
            ? this._initProps(d, t, e, p, r)
            : 1 < this._overwrite && this._firstPT && 1 < e.length && K(d, this, t, this._overwrite, e)
            ? (this._kill(t, d), this._initProps(d, t, e, p, r))
            : (this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)) && (X[d._fwdTweenID] = !0), m)
        }),
        (a.render = function (d, _, e) {
          var m = this._time,
            c = this._duration,
            u = this._rawPrevTime,
            p,
            g,
            f,
            b,
            y,
            v,
            w
          if (
            (c - 1e-7 <= d
              ? ((this._totalTime = this._time = c),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                this._reversed || ((p = !0), (g = "onComplete"), (e = e || this._timeline.autoRemoveChildren)),
                0 === c &&
                  ((!this._initted && this.vars.lazy && !e) ||
                    (this._startTime === this._timeline._duration && (d = 0),
                    (0 > u || (0 >= d && -1e-7 <= d) || (u === te && "isPause" !== this.data)) && u !== d && ((e = !0), te < u && (g = "onReverseComplete")),
                    (this._rawPrevTime = b = !_ || d || u === d ? d : te))))
              : 1e-7 > d
              ? ((this._totalTime = this._time = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== m || (0 === c && 0 < u)) && ((g = "onReverseComplete"), (p = this._reversed)),
                0 > d &&
                  ((this._active = !1),
                  0 === c && ((!this._initted && this.vars.lazy && !e) || (0 <= u && (u !== te || "isPause" !== this.data) && (e = !0), (this._rawPrevTime = b = !_ || d || u === d ? d : te)))),
                this._initted || (e = !0))
              : ((this._totalTime = this._time = d),
                this._easeType
                  ? ((y = d / c),
                    (1 === (v = this._easeType) || (3 === v && 0.5 <= y)) && (y = 1 - y),
                    3 === v && (y *= 2),
                    1 === (w = this._easePower) ? (y *= y) : 2 === w ? (y *= y * y) : 3 === w ? (y *= y * y * y) : 4 === w && (y *= y * y * y * y),
                    (this.ratio = 1 === v ? 1 - y : 2 === v ? y : 0.5 > d / c ? y / 2 : 1 - y / 2))
                  : (this.ratio = this._ease.getRatio(d / c))),
            this._time !== m || e)
          ) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return
              if (!e && this._firstPT && ((!1 !== this.vars.lazy && this._duration) || (this.vars.lazy && !this._duration)))
                return (this._time = this._totalTime = m), (this._rawPrevTime = u), z.push(this), void (this._lazy = [d, _])
              this._time && !p ? (this.ratio = this._ease.getRatio(this._time / c)) : p && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (
              !1 !== this._lazy && (this._lazy = !1),
                this._active || (!this._paused && this._time !== m && 0 <= d && (this._active = !0)),
                0 === m && (this._startAt && (0 <= d ? this._startAt.render(d, _, e) : (g = g || "_dummyGS")), this.vars.onStart && ((0 === this._time && 0 !== c) || _ || this._callback("onStart"))),
                f = this._firstPT;
              f;

            )
              f.f ? f.t[f.p](f.c * this.ratio + f.s) : (f.t[f.p] = f.c * this.ratio + f.s), (f = f._next)
            this._onUpdate && (0 > d && this._startAt && -1e-4 !== d && this._startAt.render(d, _, e), _ || ((this._time !== m || p || e) && this._callback("onUpdate"))),
              g &&
                ((this._gc && !e) ||
                  (0 > d && this._startAt && !this._onUpdate && -1e-4 !== d && this._startAt.render(d, _, e),
                  p && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), (this._active = !1)),
                  !_ && this.vars[g] && this._callback(g),
                  0 === c && this._rawPrevTime === te && b !== te && (this._rawPrevTime = 0)))
          }
        }),
        (a._kill = function (d, _, m) {
          if (("all" === d && (d = null), null == d && (null == _ || _ === this.target))) return (this._lazy = !1), this._enabled(!1, !1)
          _ = "string" == typeof _ ? F.selector(_) || _ : _ || this._targets || this.target
          var c = m && this._time && m._startTime === this._startTime && this._timeline === m._timeline,
            p,
            g,
            b,
            y,
            v,
            w,
            x,
            S,
            T
          if ((oe(_) || D(_)) && "number" != typeof _[0]) for (p = _.length; -1 < --p; ) this._kill(d, _[p], m) && (w = !0)
          else {
            if (this._targets) {
              for (p = this._targets.length; -1 < --p; )
                if (_ === this._targets[p]) {
                  ;(v = this._propLookup[p] || {}), (this._overwrittenProps = this._overwrittenProps || []), (g = this._overwrittenProps[p] = d ? this._overwrittenProps[p] || {} : "all")
                  break
                }
            } else {
              if (_ !== this.target) return !1
              ;(v = this._propLookup), (g = this._overwrittenProps = d ? this._overwrittenProps || {} : "all")
            }
            if (v) {
              if (((x = d || v), (S = d !== g && "all" !== g && d !== v && ("object" != typeof d || !d._tempKill)), m && (F.onOverwrite || this.vars.onOverwrite))) {
                for (b in x) v[b] && (T = T || []).push(b)
                if ((T || !d) && !H(this, m, _, T)) return !1
              }
              for (b in x)
                (y = v[b]) &&
                  (c && (y.f ? y.t[y.p](y.s) : (y.t[y.p] = y.s), (w = !0)),
                  y.pg && y.t._kill(x) && (w = !0),
                  (y.pg && 0 !== y.t._overwriteProps.length) ||
                    (y._prev ? (y._prev._next = y._next) : y === this._firstPT && (this._firstPT = y._next), y._next && (y._next._prev = y._prev), (y._next = y._prev = null)),
                  delete v[b]),
                  S && (g[b] = 1)
              !this._firstPT && this._initted && this._enabled(!1, !1)
            }
          }
          return w
        }),
        (a.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled && F._onPluginEvent("_onDisable", this),
            (this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            le.prototype.invalidate.call(this),
            this.vars.immediateRender && ((this._time = -te), this.render(Math.min(0, -this._delay))),
            this
          )
        }),
        (a._enabled = function (o, t) {
          if ((p || f.wake(), o && this._gc)) {
            var e = this._targets,
              n
            if (e) for (n = e.length; -1 < --n; ) this._siblings[n] = G(e[n], this, !0)
            else this._siblings = G(this.target, this, !0)
          }
          return le.prototype._enabled.call(this, o, t), this._notifyPluginsOfEnabled && this._firstPT && F._onPluginEvent(o ? "_onEnable" : "_onDisable", this)
        }),
        (F.to = function (o, t, e) {
          return new F(o, t, e)
        }),
        (F.from = function (o, t, e) {
          return (e.runBackwards = !0), (e.immediateRender = 0 != e.immediateRender), new F(o, t, e)
        }),
        (F.fromTo = function (o, t, e, n) {
          return (n.startAt = e), (n.immediateRender = 0 != n.immediateRender && 0 != e.immediateRender), new F(o, t, n)
        }),
        (F.delayedCall = function (o, t, e, n, r) {
          return new F(t, 0, {
            delay: o,
            onComplete: t,
            onCompleteParams: e,
            callbackScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: e,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          })
        }),
        (F.set = function (o, t) {
          return new F(o, 0, t)
        }),
        (F.getTweensOf = function (o, a) {
          if (null == o) return []
          var e, d, l, p
          if (((o = ("string" == typeof o && F.selector(o)) || o), (oe(o) || D(o)) && "number" != typeof o[0])) {
            for (e = o.length, d = []; -1 < --e; ) d = d.concat(F.getTweensOf(o[e], a))
            for (e = d.length; -1 < --e; ) for (p = d[e], l = e; -1 < --l; ) p === d[l] && d.splice(e, 1)
          } else for (e = (d = G(o).concat()).length; -1 < --e; ) (d[e]._gc || (a && !d[e].isActive())) && d.splice(e, 1)
          return d
        }),
        (F.killTweensOf = F.killDelayedCallsTo =
          function (o, t, n) {
            "object" == typeof t && ((n = t), (t = !1))
            for (var a = F.getTweensOf(o, t), r = a.length; -1 < --r; ) a[r]._kill(n, o)
          })
      var ue = x(
        "plugins.TweenPlugin",
        function (o, t) {
          ;(this._overwriteProps = (o || "").split(",")), (this._propName = this._overwriteProps[0]), (this._priority = t || 0), (this._super = ue.prototype)
        },
        !0
      )
      if (
        ((a = ue.prototype),
        (ue.version = "1.19.0"),
        (ue.API = 2),
        (a._firstPT = null),
        (a._addTween = E),
        (a.setRatio = N),
        (a._kill = function (o) {
          var t = this._overwriteProps,
            n = this._firstPT,
            s
          if (null != o[this._propName]) this._overwriteProps = []
          else for (s = t.length; -1 < --s; ) null != o[t[s]] && t.splice(s, 1)
          for (; n; )
            null != o[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? ((n._prev._next = n._next), (n._prev = null)) : this._firstPT === n && (this._firstPT = n._next)), (n = n._next)
          return !1
        }),
        (a._mod = a._roundProps =
          function (o) {
            for (var t = this._firstPT, n; t; )
              (n = o[this._propName] || (null != t.n && o[t.n.split(this._propName + "_").join("")])) && "function" == typeof n && (2 === t.f ? (t.t._applyPT.m = n) : (t.m = n)), (t = t._next)
          }),
        (F._onPluginEvent = function (d, t) {
          var e = t._firstPT,
            l,
            p,
            _,
            m,
            u
          if ("_onInitAllProps" === d) {
            for (; e; ) {
              for (u = e._next, p = _; p && p.pr > e.pr; ) p = p._next
              ;(e._prev = p ? p._prev : m) ? (e._prev._next = e) : (_ = e), (e._next = p) ? (p._prev = e) : (m = e), (e = u)
            }
            e = t._firstPT = _
          }
          for (; e; ) e.pg && "function" == typeof e.t[d] && e.t[d]() && (l = !0), (e = e._next)
          return l
        }),
        (ue.activate = function (o) {
          for (var t = o.length; -1 < --t; ) o[t].API === ue.API && (W[new o[t]()._propName] = o[t])
          return !0
        }),
        (w.plugin = function (d) {
          if (!(d && d.propName && d.init && d.API)) throw "illegal plugin definition."
          var t = d.propName,
            l = d.priority || 0,
            r = d.overwriteProps,
            s = { init: "_onInitTween", set: "setRatio", kill: "_kill", round: "_mod", mod: "_mod", initAll: "_onInitAllProps" },
            n = x(
              "plugins." + t.charAt(0).toUpperCase() + t.substr(1) + "Plugin",
              function () {
                ue.call(this, t, l), (this._overwriteProps = r || [])
              },
              !0 === d.fwd_global
            ),
            a = (n.prototype = new ue(t)),
            o
          for (o in (((a.constructor = n).API = d.API), s)) "function" == typeof d[o] && (a[s[o]] = d[o])
          return (n.version = d.version), ue.activate([n]), n
        }),
        (de = ee._fwd_fwdQueue))
      ) {
        for (ae = 0; ae < de.length; ae++) de[ae]()
        for (a in r) r[a].func || ee.console.log("FWDAnimation encountered missing dependency: " + a)
      }
      p = !1
    }
  })("undefined" != typeof fwd_module && fwd_module.exports && "undefined" != typeof fwd_global ? fwd_global : this || window, "FWDAnimation"))
