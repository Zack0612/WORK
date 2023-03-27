"use strict";

function canvasBg() {
  "use strict";

  var PI = Math.PI,
      cos = Math.cos,
      sin = Math.sin,
      abs = Math.abs,
      sqrt = Math.sqrt,
      pow = Math.pow,
      round = Math.round,
      random = Math.random,
      atan2 = Math.atan2;
  var HALF_PI = 0.5 * PI;
  var TAU = 2 * PI;
  var TO_RAD = PI / 180;

  var floor = function floor(n) {
    return n | 0;
  };

  var rand = function rand(n) {
    return n * random();
  };

  var randIn = function randIn(min, max) {
    return rand(max - min) + min;
  };

  var randRange = function randRange(n) {
    return n - rand(2 * n);
  };

  var fadeIn = function fadeIn(t, m) {
    return t / m;
  };

  var fadeOut = function fadeOut(t, m) {
    return (m - t) / m;
  };

  var fadeInOut = function fadeInOut(t, m) {
    var hm = 0.5 * m;
    return abs((t + hm) % m - hm) / hm;
  };

  var dist = function dist(x1, y1, x2, y2) {
    return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
  };

  var angle = function angle(x1, y1, x2, y2) {
    return atan2(y2 - y1, x2 - x1);
  };

  var lerp = function lerp(n1, n2, speed) {
    return (1 - speed) * n1 + speed * n2;
  }; // 動態


  var circleCount = 10;
  var circlePropCount = 8;
  var circlePropsLength = circleCount * circlePropCount;
  var baseSpeed = 1;
  var rangeSpeed = 3;
  var baseTTL = 150;
  var rangeTTL = 200;
  var baseRadius = 100;
  var rangeRadius = 200;
  var rangeHue = 40;
  var xOff = 0.0015;
  var yOff = 0.0015;
  var zOff = 0.0015;
  var backgroundColor = 'rgba(255,255,255, 1)';
  var container;
  var canvas;
  var ctx;
  var circles;
  var circleProps;
  var simplex;
  var baseHue;

  function setup() {
    createCanvas();
    resize();
    initCircles();
    draw();
  }

  function initCircles() {
    circleProps = new Float32Array(circlePropsLength);
    simplex = new SimplexNoise();
    baseHue = 1;
    var i;

    for (i = 0; i < circlePropsLength; i += circlePropCount) {
      initCircle(i);
    }
  }

  function initCircle(i) {
    var x, y, n, t, speed, vx, vy, life, ttl, radius, hue; // 亂數產生圓圈位置

    x = rand(canvas.a.width);
    y = rand(canvas.a.height);
    n = simplex.noise3D(x * xOff, y * yOff, baseHue * zOff); // 圓圈半徑

    t = rand(TAU); // 圓圈移動速度

    speed = baseSpeed + rand(rangeSpeed);
    vx = speed * cos(t);
    vy = speed * sin(t);
    life = 0;
    ttl = baseTTL + rand(rangeTTL);
    radius = baseRadius + rand(rangeRadius);
    hue = baseHue + n * rangeHue;
    circleProps.set([x, y, vx, vy, life, ttl, radius, hue], i);
  }

  function updateCircles() {
    var i; // baseHue++;

    for (i = 0; i < circlePropsLength; i += circlePropCount) {
      updateCircle(i);
    }
  }

  function updateCircle(i) {
    var i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i;
    var x, y, vx, vy, life, ttl, radius, hue;
    x = circleProps[i];
    y = circleProps[i2];
    vx = circleProps[i3];
    vy = circleProps[i4];
    life = circleProps[i5];
    ttl = circleProps[i6];
    radius = circleProps[i7];
    hue = circleProps[i8];
    drawCircle(x, y, life, ttl, radius, hue);
    life++;
    circleProps[i] = x + vx;
    circleProps[i2] = y + vy;
    circleProps[i5] = life;
    (checkBounds(x, y, radius) || life > ttl) && initCircle(i);
  }

  function drawCircle(x, y, life, ttl, radius, hue) {
    ctx.a.save();
    ctx.a.fillStyle = "hsla(".concat(hue, ",60%,30%,").concat(fadeInOut(life, ttl), ")");
    ctx.a.beginPath();
    ctx.a.arc(x, y, radius, 0, TAU);
    ctx.a.fill();
    ctx.a.closePath();
    ctx.a.restore();
  }

  function checkBounds(x, y, radius) {
    return x < -radius || x > canvas.a.width + radius || y < -radius || y > canvas.a.height + radius;
  }

  function createCanvas() {
    container = document.querySelector('.canvas_bg');
    canvas = {
      a: document.createElement('canvas'),
      b: document.createElement('canvas')
    }; // canvas.b.style = `
    //   position: fixed;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    // `;

    container.appendChild(canvas.b);
    ctx = {
      a: canvas.a.getContext('2d'),
      b: canvas.b.getContext('2d')
    };
  }

  function resize() {
    var _window = window,
        innerWidth = _window.innerWidth,
        innerHeight = _window.innerHeight;
    canvas.a.width = innerWidth;
    canvas.a.height = innerHeight;
    ctx.a.drawImage(canvas.b, 0, 0);
    canvas.b.width = innerWidth;
    canvas.b.height = innerHeight;
    ctx.b.drawImage(canvas.a, 0, 0);
  }

  function render() {
    ctx.b.save();
    ctx.b.filter = 'blur(50px)';
    ctx.b.drawImage(canvas.a, 0, 0);
    ctx.b.restore();
  }

  function draw() {
    ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height);
    ctx.b.fillStyle = backgroundColor;
    ctx.b.fillRect(0, 0, canvas.b.width, canvas.b.height);
    updateCircles();
    render();
    window.requestAnimationFrame(draw);
  }

  window.addEventListener('load', setup);
  window.addEventListener('resize', resize);
}
