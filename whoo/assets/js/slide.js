(function() {
  'use strict';

  /**
   * 幻燈片動態
   * @constructor
   * @param {object} options
   */
  function Slide(options) {

    // if user accidentally omits the new keyword, this will
    // silently correct the problem...
    if (!(this instanceof Slide)) {
      return new Slide(options);
    }

    var self = this;
    // 目前位置
    self.currentIndex = parseInt(options.currentIndex, 10) || 0;
    // 之前位置
    self.originIndex = parseInt(options.currentIndex, 10) || 0;
    // 是否在動畫中
    self.isActive = false;
    // 自動撥放
    self.isAutoPlay = !!options.isAutoPlay;
    // 動畫物件
    self.timer = null;
    // 輪播間格
    self.duration = options.duration ? (parseInt(options.duration, 10) || 5000) : 5000;

    // 指示
    self.$indicators = $(options.indicatorSelectors);
    // 內容
    self.$items = $(options.itemSelectors);
    // 上一個
    self.$prevIndicators = $(options.prevSelectors);
    // 下一個
    self.$nextIndicators = $(options.nextSelectors);
    self.$window = $(window);
    // 動態方式
    self.mode = options.mode;
    // element
    self.$target = $(options.targetSelectors);
    // touch
    self.isTouch = !!options.isTouch;

    // 註冊事件
    self.$indicators.on('click.simple.slide', function(e) {
      e.preventDefault();
      var index = self.$indicators.index($(this));
      // console.log(index)
      self.indicators(index);
    });

    self.$prevIndicators.on('click.simple.slide', function(e) {
      e.preventDefault();
      self.prev();
    });

    self.$nextIndicators.on('click.simple.slide', function(e) {
      e.preventDefault();
      self.next();
    });

    // 手機觸碰事件
    if (self.isTouch) {
      var hammer = new Hammer(self.$target[0]);

      // subscribe to events
      hammer.on('swipeleft', function( /*e*/ ) {
        self.next();
        // self.onTouch('next');
      });

      hammer.on('swiperight', function( /*e*/ ) {
        self.prev();
        // self.onTouch('prev');
      });
    }

    // 自動撥放
    if (self.isAutoPlay) {
      self.cycle();
    }

    // 預設第一個
    self.$items.eq(0).addClass('active');
    self.$indicators.eq(0).addClass('active');

    $.each(self.$items.not(':eq(0)'), function () {
      var $this = $(this);
      var $video = $this.find('video');

      if ($video.length) {
        $video[0].pause();
      }
    });

  }

  /**
   * 是否可以上移
   */
  Slide.prototype.isPrev = function(index) {
    if (index < 0) {
      return false;
    } else {
      return true;
    }
  };

  /**
   * 是否可以下移
   */
  Slide.prototype.isNext = function(index) {
    var self = this;
    if (index >= self.$items.length) {
      return false;
    } else {
      return true;
    }
  };

  /**
   * 上移
   */
  Slide.prototype.prev = function() {
    var self = this;
    if (self.isActive) { return false; }

    if (!self.isPrev(--self.currentIndex)) {
      // 已經是第一筆的情況下，取得最後一筆
      self.currentIndex = self.$items.length - 1;
    }
    var index = self.$items.index(self.$items.filter('.active'));
    if (index == self.currentIndex) {
      return false;
    }

    self.isActive = true;
    self.animation('prev');
    return true;
  };

  /**
   * 下移
   */
  Slide.prototype.next = function() {
    var self = this;
    if (self.isActive) { return false; }

    if (!self.isNext(++self.currentIndex)) {
      // 已經是最後一筆的情況下，取得第一筆
      self.currentIndex = 0;
    }
    var index = self.$items.index(self.$items.filter('.active'));
    if (index == self.currentIndex) {
      return false;
    }

    self.isActive = true;
    self.animation('next');
    return true;
  };

  /**
   * 指定
   */
  Slide.prototype.indicators = function(index) {
    var self = this;
    if (self.isActive) { return false; }

    // 檢查是否超過合理範圍
    if (!self.isNext(index) || !self.isNext(index) || index === self.currentIndex) {
      return false;
    }

    self.isActive = true;
    self.currentIndex = index;
    self.animation();
  };

  /**
   * 動態效果
   * @param {string} direction 方向
   */
  Slide.prototype.animation = function(direction) {
    var self = this;
    var delay = 0;
    if (self.isAutoPlay) {
      self.pause();
    }

    if (self.mode == 'opacity') {
      delay = self._opacityAnimation(direction);
    } else if (self.mode == 'topDown') {
      delay = self._topDownAnimation(direction);
    } else {
      delay = self._defaultAnimation(direction);
    }
  };

  /**
   * 上下動態
   * @param {string} direction 方向
   */
  Slide.prototype._topDownAnimation =  function(direction) {

  };

  /**
   * 淡入淡出動態
   * @param {string} direction 方向
   */
  Slide.prototype._opacityAnimation = function( /*direction*/ ) {
    var self = this;
    var $newItem = self.$items.eq(self.currentIndex);
    var $oldItem = self.$items.eq(self.originIndex);
    var duration = 1;

    // 點點選中中
    self.$indicators.eq(self.currentIndex).addClass('active');
    self.$indicators.eq(self.originIndex).removeClass('active');
    $newItem.addClass('active');
    $oldItem.removeClass('active');

    var $newVideo = $newItem.find('video');
    var $oldVideo = $oldItem.find('video');
    if ($oldVideo.length) {
      $oldVideo[0].pause();
    }

    TweenMax.fromTo([$oldItem], duration, { opacity: 1, display: 'block' }, { opacity: 0, ease: Power1.easeOut });
    TweenMax.fromTo([$newItem], duration, { opacity: 0, display: 'block' }, { opacity: 1, ease: Power1.easeOut });

    TweenMax.delayedCall(duration, function() {
      $oldItem.hide();

      var delay = 0;
      if ($newVideo.length) {
        delay = parseInt($newVideo[0].duration, 10) || 0;
        if (delay > 0) {
          delay = delay * 1000;
        }
        $newVideo[0].muted = true;
        $newVideo[0].currentTime = 0;
        $newVideo[0].play();
      }

      self.isActive = false;
      // 防呆機制，目前的index不等於之淺的index
      if (self.currentIndex != self.originIndex) {
        self.originIndex = self.currentIndex;
      }
      // 自動撥放
      if (self.isAutoPlay) {
        self.cycle(delay);
      }
    });

  };

  /**
   * 左右滑動
   * @param {string} direction 方向
   */
  Slide.prototype._defaultAnimation = function(direction) {
    var self = this;
    var $newItem = self.$items.eq(self.currentIndex);
    var $oldItem = self.$items.eq(self.originIndex);
    var duration = 0.6;

    var isNext;
    if (direction == 'next') {
      isNext = true;
    } else if (direction == 'prev') {
      isNext = false;
    } else {
      isNext = self.currentIndex > self.originIndex;
    }

    self.$indicators.eq(self.currentIndex).addClass('active');
    self.$indicators.eq(self.originIndex).removeClass('active');

    if (isNext) {
      // next
      $oldItem.addClass('prev');
      $newItem.addClass('next active');
      $newItem[0].offsetWidth; // force reflow
      $newItem.removeClass('next');

    } else {
      // prev
      $oldItem.addClass('next');
      $newItem.addClass('prev active');
      $newItem[0].offsetWidth; // force reflow
      $newItem.removeClass('prev');
    }

    TweenMax.delayedCall(duration, function() {
      $oldItem.removeClass('prev next active');
      self.isActive = false;
      if (self.currentIndex != self.originIndex) {
        self.originIndex = self.currentIndex;
      }
      // 自動撥放
      if (self.isAutoPlay) {
        self.cycle();
      }
    });

  };

  /**
   * 循環撥放動態
   */
  Slide.prototype.cycle = function(delay) {
    var self = this;
    var duration = parseInt(delay, 10) || 0;
    duration = duration > 0 ? duration : self.duration;
    // 防呆機制，防止多個計時器同時啟用
    self.pause();
    self.timer = setInterval($.proxy(self.next, self), duration);
    return self;
  };

  /**
   * 暫停動態
   */
  Slide.prototype.pause = function() {
    var self = this;
    self.timer = clearInterval(self.timer);
    return self;
  };

  window.Slide = Slide;

})();
