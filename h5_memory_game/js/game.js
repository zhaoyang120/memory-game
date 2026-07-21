/**
 * 极限工作记忆 - H5 单页面游戏核心逻辑
 * 视图切换 · 30秒倒计时 · 乱序抽题 · 评分 · 称号解锁 · localStorage
 */
(function () {
  'use strict';

  // ==================== 称号体系 ====================
  var TITLES = [
    { name: '过目小萌新',   threshold: 0  },
    { name: '行走的备忘录', threshold: 5  },
    { name: '照相机大脑',   threshold: 15 },
    { name: '过目不忘宗师', threshold: 30 }
  ];

  // ==================== 游戏状态 ====================
  var state = {
    stage: 1,
    maxStage: 0,
    totalCorrect: 0,
    currentQuiz: null,
    nextQuiz: null,
    correctCount: 0,
    totalQuestions: 0,
    currentIndex: 0,
    unlockedTitles: ['过目小萌新'],
    equippedTitle: '过目小萌新',
    timeLeft: 30,
    timerInterval: null,
    answerLocked: false
  };

  // ==================== DOM 快捷引用 ====================
  var $ = function (id) { return document.getElementById(id); };

  // ==================== 初始化 ====================
  function init() {
    loadFromStorage();
    updateHomeStats();
    bindEvents();
    showPage('home');
  }

  // ==================== localStorage ====================
  function saveToStorage() {
    try {
      var data = {
        maxStage: state.maxStage,
        totalCorrect: state.totalCorrect,
        unlockedTitles: state.unlockedTitles,
        equippedTitle: state.equippedTitle
      };
      localStorage.setItem('memory_game_save', JSON.stringify(data));
    } catch (e) { /* 无痕模式可能抛异常，忽略 */ }
  }

  function loadFromStorage() {
    try {
      var raw = localStorage.getItem('memory_game_save');
      if (raw) {
        var data = JSON.parse(raw);
        if (data.maxStage != null) state.maxStage = data.maxStage;
        if (data.totalCorrect != null) state.totalCorrect = data.totalCorrect;
        if (data.unlockedTitles) state.unlockedTitles = data.unlockedTitles;
        if (data.equippedTitle) state.equippedTitle = data.equippedTitle;
      }
    } catch (e) { /* 忽略 */ }
  }

  // ==================== 页面切换 ====================
  function showPage(name) {
    var pages = document.querySelectorAll('.page');
    for (var i = 0; i < pages.length; i++) {
      pages[i].classList.remove('active');
    }
    var target = $('page-' + name);
    if (target) target.classList.add('active');
    window.scrollTo(0, 0);
  }

  // ==================== 首页更新 ====================
  function updateHomeStats() {
    $('home-title-tag').textContent = '称号：' + state.equippedTitle;
    $('home-max-stage').textContent = state.maxStage;
    $('home-title-count').textContent = state.unlockedTitles.length;
    $('home-total-correct').textContent = state.totalCorrect;
  }

  // ==================== 事件绑定 ====================
  function bindEvents() {
    $('btn-start').addEventListener('click', startGame);
    $('btn-finish-early').addEventListener('click', finishMemoryEarly);
    $('btn-next').addEventListener('click', nextStage);
    $('btn-retry').addEventListener('click', retryStage);
    $('btn-home').addEventListener('click', goHome);
    $('btn-share').addEventListener('click', shareGame);

    // 点击分享浮层关闭
    $('share-overlay').addEventListener('click', function () {
      this.style.display = 'none';
    });
  }

  // ==================== 开始游戏 ====================
  function startGame() {
    state.stage = 1;
    state.currentQuiz = getRandomQuiz(1);
    state.nextQuiz = null;
    state.correctCount = 0;

    // 记忆页
    $('memory-stage').textContent = '第 ' + state.stage + ' 关';
    $('story-text').textContent = state.currentQuiz.storyText;

    showPage('memory');
    startTimer();
  }

  // ==================== 倒计时 ====================
  function startTimer() {
    state.timeLeft = 30;
    updateTimerDisplay();

    var timerBox = $('timer-box');
    var timerText = $('timer-text');
    var timerCircle = $('timer-circle');
    var circumference = 263.89; // 2π × 42

    clearInterval(state.timerInterval);

    state.timerInterval = setInterval(function () {
      state.timeLeft--;
      updateTimerDisplay();

      // 更新圆环
      var offset = circumference * (1 - state.timeLeft / 30);
      timerCircle.style.strokeDashoffset = offset;

      // 警告状态
      if (state.timeLeft <= 5) {
        timerCircle.classList.add('warning');
        timerText.classList.add('warning');
      }

      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        goToQuiz();
      }
    }, 1000);
  }

  function updateTimerDisplay() {
    $('timer-text').textContent = state.timeLeft + 's';
  }

  function finishMemoryEarly() {
    clearInterval(state.timerInterval);
    goToQuiz();
  }

  // ==================== 进入答题 ====================
  function goToQuiz() {
    clearInterval(state.timerInterval);
    state.totalQuestions = state.currentQuiz.questions.length;
    state.currentIndex = 0;
    state.answerLocked = false;

    showPage('quiz');
    renderQuestion();
  }

  function renderQuestion() {
    var q = state.currentQuiz.questions[state.currentIndex];
    var total = state.totalQuestions;
    var idx = state.currentIndex;

    // 进度条
    $('progress-fill').style.width = ((idx + 1) / total * 100) + '%';
    $('progress-label').textContent = (idx + 1) + ' / ' + total;

    // 题目
    $('question-text').textContent = q.questionText;

    // 选项
    var container = $('options-container');
    container.innerHTML = '';

    q.options.forEach(function (opt) {
      var btn = document.createElement('div');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        selectOption(opt, btn);
      });
      container.appendChild(btn);
    });
  }

  // ==================== 选择选项 ====================
  function selectOption(option, clickedBtn) {
    if (state.answerLocked) return;
    state.answerLocked = true;

    var q = state.currentQuiz.questions[state.currentIndex];
    var isCorrect = (option === q.correctAnswer);

    // 禁用所有按钮
    var allBtns = $('options-container').querySelectorAll('.option-btn');
    for (var i = 0; i < allBtns.length; i++) {
      allBtns[i].classList.add('disabled');
    }

    // 标记选中的
    if (isCorrect) {
      clickedBtn.classList.add('correct');
      state.correctCount++;
    } else {
      clickedBtn.classList.add('wrong');
      // 高亮正确答案
      for (var j = 0; j < allBtns.length; j++) {
        if (allBtns[j].textContent === q.correctAnswer) {
          allBtns[j].classList.add('correct');
          break;
        }
      }
    }

    // 延迟进入下一题
    setTimeout(function () {
      state.currentIndex++;
      state.answerLocked = false;

      if (state.currentIndex < state.totalQuestions) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    }, isCorrect ? 600 : 1000);
  }

  // ==================== 完成答题 ====================
  function finishQuiz() {
    var allCorrect = (state.correctCount === state.totalQuestions);

    // 更新最高关卡
    if (allCorrect && state.stage > state.maxStage) {
      state.maxStage = state.stage;
    }

    // 累计答对
    state.totalCorrect += state.correctCount;

    // 检查称号
    var newTitle = checkTitleUnlock();

    // 预加载下一关
    state.nextQuiz = getRandomQuiz(state.stage + 1);

    // 渲染结算页
    renderResult(allCorrect, newTitle);

    // 持久化
    saveToStorage();

    showPage('result');
  }

  function renderResult(allCorrect, newTitle) {
    // 图标
    if (allCorrect) {
      $('result-icon').textContent = '🏆';
      $('result-title').textContent = '完美通关！';
    } else {
      $('result-icon').textContent = '🎉';
      $('result-title').textContent = '挑战完成';
    }

    $('result-score').textContent =
      '本次答对 ' + state.correctCount + ' / ' + state.totalQuestions + ' 题';

    // 新称号
    var badge = $('new-title-badge');
    if (newTitle) {
      badge.textContent = '🎉 解锁新称号：【' + newTitle + '】';
      badge.style.display = 'inline-block';
    } else {
      badge.style.display = 'none';
    }

    // 按钮
    var btnNext = $('btn-next');
    var btnRetry = $('btn-retry');

    if (allCorrect) {
      btnNext.style.display = 'block';
      btnNext.textContent = '进入第 ' + (state.stage + 1) + ' 关 →';
      btnRetry.style.display = 'none';
    } else {
      btnNext.style.display = 'none';
      btnRetry.style.display = 'block';
    }
  }

  // ==================== 称号判定 ====================
  function checkTitleUnlock() {
    var newTitle = null;
    for (var i = TITLES.length - 1; i >= 0; i--) {
      if (state.totalCorrect >= TITLES[i].threshold &&
          state.unlockedTitles.indexOf(TITLES[i].name) === -1) {
        newTitle = TITLES[i].name;
        state.unlockedTitles.push(newTitle);
      }
    }
    // 装备最高称号
    var best = TITLES[0].name;
    for (var j = 0; j < TITLES.length; j++) {
      if (state.unlockedTitles.indexOf(TITLES[j].name) !== -1) {
        best = TITLES[j].name;
      }
    }
    state.equippedTitle = best;
    updateHomeStats();
    return newTitle;
  }

  // ==================== 按钮动作 ====================
  function nextStage() {
    state.stage++;
    state.currentQuiz = state.nextQuiz;
    state.nextQuiz = null;
    state.correctCount = 0;

    $('memory-stage').textContent = '第 ' + state.stage + ' 关';
    $('story-text').textContent = state.currentQuiz.storyText;

    // 重置计时器样式
    var circle = $('timer-circle');
    var text = $('timer-text');
    circle.classList.remove('warning');
    text.classList.remove('warning');
    circle.style.strokeDashoffset = '0';

    showPage('memory');
    startTimer();
  }

  function retryStage() {
    state.currentQuiz = getRandomQuiz(state.stage);
    state.nextQuiz = null;
    state.correctCount = 0;

    $('memory-stage').textContent = '第 ' + state.stage + ' 关';
    $('story-text').textContent = state.currentQuiz.storyText;

    var circle = $('timer-circle');
    var text = $('timer-text');
    circle.classList.remove('warning');
    text.classList.remove('warning');
    circle.style.strokeDashoffset = '0';

    showPage('memory');
    startTimer();
  }

  function goHome() {
    clearInterval(state.timerInterval);
    updateHomeStats();
    showPage('home');
  }

  // ==================== 分享 ====================
  function shareGame() {
    var shareData = {
      title: '极限工作记忆 - 30秒挑战你的脑力极限',
      text: '我已解锁【' + state.equippedTitle + '】称号！累计答对 ' + state.totalCorrect + ' 题，快来挑战我吧！',
      url: window.location.href
    };

    // 优先使用 Web Share API（移动端原生分享）
    if (navigator.share) {
      navigator.share(shareData).catch(function () {});
    } else {
      // 桌面端 / 不支持 Web Share → 显示引导浮层
      var overlay = $('share-overlay');
      overlay.style.display = 'block';
      setTimeout(function () {
        overlay.style.display = 'none';
      }, 3000);

      // 同时尝试复制链接
      copyToClipboard(window.location.href);
    }
  }

  function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(function () {
        showToast('链接已复制，粘贴给朋友吧！');
      }).catch(function () {});
    } else {
      // fallback
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try { document.execCommand('copy'); showToast('链接已复制！'); } catch (e) {}
      document.body.removeChild(ta);
    }
  }

  function showToast(msg) {
    var toast = document.createElement('div');
    toast.textContent = msg;
    toast.style.cssText =
      'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);' +
      'background:rgba(0,0,0,0.78);color:#fff;padding:14px 28px;' +
      'border-radius:24px;font-size:26rpx;z-index:9999;' +
      'animation:fadeSlideIn 0.3s ease;white-space:nowrap;';
    document.body.appendChild(toast);
    setTimeout(function () {
      toast.style.opacity = '0';
      toast.style.transition = 'opacity 0.3s';
      setTimeout(function () { document.body.removeChild(toast); }, 300);
    }, 2000);
  }

  // ==================== 启动 ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
