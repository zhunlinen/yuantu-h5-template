import React from 'react';
import SelectPatient from '@baseComponents/select-patient';
import Loading from '@baseComponents/loading';
import styles from '@style/index.less';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      show: true,
      text: '',
      transparent: false,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ show: false });
    }, 1000);

    // 背景线条动画
    !(function() {
      function n(n, e, t) {
        return n.getAttribute(e) || t;
      }

      function e(n) {
        return document.getElementsByTagName(n);
      }

      function t() {
        var t = e('script'),
          o = t.length,
          i = t[o - 1];

        return {
          l: o,
          z: n(i, 'zIndex', -1),
          o: n(i, 'opacity', 0.5),
          c: n(i, 'color', '0,0,0'),
          n: n(i, 'count', 99),
        };
      }

      function o() {
        (a = m.width =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth),
          (c = m.height =
            window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight);
      }

      function i() {
        r.clearRect(0, 0, a, c);

        var n, e, t, o, m, l;

        s.forEach(function(i, x) {
          for (
            i.x += i.xa,
              i.y += i.ya,
              i.xa *= i.x > a || i.x < 0 ? -1 : 1,
              i.ya *= i.y > c || i.y < 0 ? -1 : 1,
              r.fillRect(i.x - 0.5, i.y - 0.5, 1, 1),
              e = x + 1;
            e < u.length;
            e++
          )
            (n = u[e]),
              null !== n.x &&
                null !== n.y &&
                ((o = i.x - n.x),
                (m = i.y - n.y),
                (l = o * o + m * m),
                l < n.max &&
                  (n === y &&
                    l >= n.max / 2 &&
                    ((i.x -= 0.03 * o), (i.y -= 0.03 * m)),
                  (t = (n.max - l) / n.max),
                  r.beginPath(),
                  (r.lineWidth = t / 2),
                  (r.strokeStyle = 'rgba(' + d.c + ',' + (t + 0.2) + ')'),
                  r.moveTo(i.x, i.y),
                  r.lineTo(n.x, n.y),
                  r.stroke()));
        }),
          x(i);
      }

      var a,
        c,
        u,
        m = document.createElement('canvas'),
        d = t(),
        l = 'c_n' + d.l,
        r = m.getContext('2d'),
        x =
          window.requestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.oRequestAnimationFrame ||
          window.msRequestAnimationFrame ||
          function(n) {
            window.setTimeout(n, 1e3 / 45);
          },
        w = Math.random,
        y = { x: null, y: null, max: 2e4 };
      (m.id = l),
        (m.style.cssText =
          'position:fixed;top:0;left:0;z-index:' + d.z + ';opacity:' + d.o),
        e('body')[0].appendChild(m),
        o(),
        (window.onresize = o),
        (window.onmousemove = function(n) {
          (n = n || window.event), (y.x = n.clientX), (y.y = n.clientY);
        }),
        (window.onmouseout = function() {
          (y.x = null), (y.y = null);
        });

      for (var s = [], f = 0; d.n > f; f++) {
        var h = w() * a,
          g = w() * c,
          v = 2 * w() - 1,
          p = 2 * w() - 1;
        s.push({ x: h, y: g, xa: v, ya: p, max: 6e3 });
      }

      (u = s.concat([y])),
        setTimeout(function() {
          i();
        }, 100);
    })();
  }
  render() {
    const { show, text, transparent } = this.state;
    const prefixCls = 'index';
    return (
      <>
        <Loading show={show} text={text} transparent={transparent} />
        {/* 请在路由中拼上unionId和corpId使用就诊人组件 */}
        {/* <SelectPatient></SelectPatient> */}
        <div className={styles[prefixCls]}>
          <img
            className={styles[`${prefixCls}-logo`]}
            src="https://front-images.oss-cn-hangzhou.aliyuncs.com/i4/d509adfcbad6369900f5871e36ed22cc-310-310.png"
          />
          <span className={styles[`${prefixCls}-text`]}>Hello YuanTu~</span>
        </div>
      </>
    );
  }
}

export default Index;