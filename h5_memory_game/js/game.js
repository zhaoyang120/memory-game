/**
 * 极限工作记忆 · 社群最强大脑系列
 * 核心游戏逻辑 — 暗色主题版
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
    answerLocked: false,
    playerName: ''
  };

  // ==================== DOM 引用 ====================
  var $ = function (id) { return document.getElementById(id); };
  var pgHome, pgMemory, pgQuiz, pgResult;

  // ==================== 常量 ====================
  var RING_CIRCUM = 2 * Math.PI * 50; // 314.159
  var NICK_KEY = 'mg_story_nick';
  var SAVE_KEY = 'memory_game_story_save';

  // ==================== 初始化 ====================
  function init() {
    pgHome   = $('pg-home');
    pgMemory = $('pg-memory');
    pgQuiz   = $('pg-quiz');
    pgResult = $('pg-result');

    loadSave();
    loadNickname();
    updateHomeUI();
    bindEvents();
    switchPage(pgHome);
  }

  // ==================== 持久化 ====================
  function saveSave() {
    try {
      var data = {
        maxStage: state.maxStage,
        totalCorrect: state.totalCorrect,
        unlockedTitles: state.unlockedTitles,
        equippedTitle: state.equippedTitle
      };
      localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function loadSave() {
    try {
      var raw = localStorage.getItem(SAVE_KEY);
      if (raw) {
        var d = JSON.parse(raw);
        if (d.maxStage != null) state.maxStage = d.maxStage;
        if (d.totalCorrect != null) state.totalCorrect = d.totalCorrect;
        if (d.unlockedTitles) state.unlockedTitles = d.unlockedTitles;
        if (d.equippedTitle) state.equippedTitle = d.equippedTitle;
      }
    } catch (e) {}
  }

  function loadNickname() {
    try {
      var n = localStorage.getItem(NICK_KEY);
      if (n) {
        state.playerName = n;
        $('nickname-input').value = n;
      }
    } catch (e) {}
  }

  function saveNickname(name) {
    state.playerName = name;
    try { localStorage.setItem(NICK_KEY, name); } catch (e) {}
  }

  // ==================== 页面切换 ====================
  function switchPage(page) {
    pgHome.classList.remove('active');
    pgMemory.classList.remove('active');
    pgQuiz.classList.remove('active');
    pgResult.classList.remove('active');
    page.classList.add('active');
    window.scrollTo(0, 0);
  }

  // ==================== 首页 UI 更新 ====================
  function updateHomeUI() {
    $('home-title-badge').textContent = '🏅 ' + state.equippedTitle;
  }

  // ==================== Toast ====================
  function flashToast(emoji) {
    var overlay = $('toast-overlay');
    $('toast-icon').textContent = emoji;
    overlay.classList.add('show');
    clearTimeout(state._toastTid);
    state._toastTid = setTimeout(function () {
      overlay.classList.remove('show');
    }, 620);
  }

  // ==================== 事件绑定 ====================
  function bindEvents() {
    $('btn-start').addEventListener('click', launchGame);
    $('btn-skip').addEventListener('click', skipMemory);
    $('btn-next-round').addEventListener('click', nextStage);
    $('btn-retry-round').addEventListener('click', retryStage);
    $('btn-home-result').addEventListener('click', goHome);

    // 移动端 touch 优化
    $('btn-start').addEventListener('touchstart', function (e) {
      e.preventDefault(); this.click();
    }, { passive: false });
    $('btn-skip').addEventListener('touchstart', function (e) {
      e.preventDefault(); this.click();
    }, { passive: false });
  }

  // ==================== 开始游戏 ====================
  function launchGame() {
    var name = $('nickname-input').value.trim();
    if (!name) {
      var inp = $('nickname-input');
      inp.focus();
      inp.style.borderColor = 'var(--accent)';
      inp.style.boxShadow = '0 0 0 3px rgba(244,63,94,0.2)';
      setTimeout(function () {
        inp.style.borderColor = '';
        inp.style.boxShadow = '';
      }, 1500);
      return;
    }
    saveNickname(name);

    state.stage = 1;
    state.currentQuiz = window.getRandomQuiz(1);
    state.nextQuiz = null;
    state.correctCount = 0;

    $('badge-stage').textContent = '第 1 关';
    $('story-text').textContent = state.currentQuiz.storyText;

    switchPage(pgMemory);
    startTimer();
  }

  // ==================== 30 秒倒计时 ====================
  function startTimer() {
    state.timeLeft = 30;
    updateTimerUI();

    var ringFg = $('ring-fg');
    var ringTxt = $('ring-txt');
    ringFg.classList.remove('warning');
    ringTxt.classList.remove('warning');
    ringFg.style.strokeDashoffset = '0';
    ringFg.style.stroke = 'var(--primary-lt)';

    clearInterval(state.timerInterval);
    state.timerInterval = setInterval(function () {
      state.timeLeft--;
      updateTimerUI();

      var offset = RING_CIRCUM * (1 - state.timeLeft / 30);
      ringFg.style.strokeDashoffset = offset.toFixed(2);

      if (state.timeLeft <= 5) {
        ringFg.classList.add('warning');
        ringTxt.classList.add('warning');
      }

      if (state.timeLeft <= 0) {
        clearInterval(state.timerInterval);
        goToQuiz();
      }
    }, 1000);
  }

  function updateTimerUI() {
    $('ring-txt').textContent = state.timeLeft + 's';
  }

  function skipMemory() {
    clearInterval(state.timerInterval);
    goToQuiz();
  }

  // ==================== 答题 ====================
  function goToQuiz() {
    clearInterval(state.timerInterval);
    state.totalQuestions = state.currentQuiz.questions.length;
    state.currentIndex = 0;
    state.answerLocked = false;

    $('badge-quiz-stage').textContent = '第 ' + state.stage + ' 关';
    switchPage(pgQuiz);
    renderQuestion();
  }

  // Fisher-Yates 洗牌
  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function renderQuestion() {
    var q = state.currentQuiz.questions[state.currentIndex];
    var total = state.totalQuestions;
    var idx = state.currentIndex;

    $('progress-fill').style.width = ((idx + 1) / total * 100) + '%';
    $('progress-label').textContent = (idx + 1) + ' / ' + total;
    $('question-text').textContent = q.questionText;

    var container = $('options-container');
    container.innerHTML = '';

    // 随机打乱选项顺序，避免正确答案总在第一个
    var shuffledOptions = shuffle(q.options);

    shuffledOptions.forEach(function (opt) {
      var btn = document.createElement('div');
      btn.className = 'option-btn';
      btn.textContent = opt;
      btn.addEventListener('click', function () {
        selectOption(opt, btn);
      });
      btn.addEventListener('touchstart', function (e) {
        e.preventDefault(); this.click();
      }, { passive: false });
      container.appendChild(btn);
    });
  }

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

    flashToast(isCorrect ? '✅' : '💔');

    setTimeout(function () {
      state.currentIndex++;
      state.answerLocked = false;

      if (state.currentIndex < state.totalQuestions) {
        renderQuestion();
      } else {
        finishQuiz();
      }
    }, isCorrect ? 600 : 1100);
  }

  // ==================== 结算 ====================
  function finishQuiz() {
    var allCorrect = (state.correctCount === state.totalQuestions);

    if (allCorrect && state.stage > state.maxStage) {
      state.maxStage = state.stage;
    }

    state.totalCorrect += state.correctCount;
    var newTitle = checkTitleUnlock();

    // 预加载下一关
    state.nextQuiz = window.getRandomQuiz(state.stage + 1);

    // 渲染结算
    renderResult(allCorrect);
    saveSave();
    updateHomeUI();

    switchPage(pgResult);
  }

  function renderResult(allCorrect) {
    // icon + title
    if (allCorrect && state.correctCount === state.totalQuestions) {
      $('res-icon').textContent = '🏆';
      $('res-title').textContent = '完美通关！';
    } else if (state.correctCount >= state.totalQuestions * 0.6) {
      $('res-icon').textContent = '🥇';
      $('res-title').textContent = '表现不错！';
    } else {
      $('res-icon').textContent = '💪';
      $('res-title').textContent = '继续加油！';
    }

    // 数据
    $('st-correct').textContent = state.correctCount + '/' + state.totalQuestions;
    $('st-accuracy').textContent = Math.round(state.correctCount / state.totalQuestions * 100) + '%';
    $('st-stage').textContent = '第 ' + state.stage + ' 关';

    // 当前称号
    $('rank-strip').textContent = state.equippedTitle;

    // 按钮
    if (allCorrect) {
      $('btn-next-round').style.display = 'block';
      $('btn-retry-round').style.display = 'none';
      $('btn-next-round').textContent = '进入第 ' + (state.stage + 1) + ' 关 →';
    } else {
      $('btn-next-round').style.display = 'none';
      $('btn-retry-round').style.display = 'block';
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
    // 装备最高
    var best = TITLES[0].name;
    for (var j = 0; j < TITLES.length; j++) {
      if (state.unlockedTitles.indexOf(TITLES[j].name) !== -1) {
        best = TITLES[j].name;
      }
    }
    state.equippedTitle = best;
    return newTitle;
  }

  // ==================== 按钮动作 ====================
  function nextStage() {
    state.stage++;
    state.currentQuiz = state.nextQuiz;
    state.nextQuiz = null;
    state.correctCount = 0;

    $('badge-stage').textContent = '第 ' + state.stage + ' 关';
    $('story-text').textContent = state.currentQuiz.storyText;

    // 重置计时器
    var ringFg = $('ring-fg');
    var ringTxt = $('ring-txt');
    ringFg.classList.remove('warning');
    ringTxt.classList.remove('warning');
    ringFg.style.strokeDashoffset = '0';
    ringFg.style.stroke = 'var(--primary-lt)';

    switchPage(pgMemory);
    startTimer();
  }

  function retryStage() {
    state.currentQuiz = window.getRandomQuiz(state.stage);
    state.nextQuiz = null;
    state.correctCount = 0;

    $('badge-stage').textContent = '第 ' + state.stage + ' 关';
    $('story-text').textContent = state.currentQuiz.storyText;

    var ringFg = $('ring-fg');
    var ringTxt = $('ring-txt');
    ringFg.classList.remove('warning');
    ringTxt.classList.remove('warning');
    ringFg.style.strokeDashoffset = '0';
    ringFg.style.stroke = 'var(--primary-lt)';

    switchPage(pgMemory);
    startTimer();
  }

  function goHome() {
    clearInterval(state.timerInterval);
    updateHomeUI();
    switchPage(pgHome);
  }

  // ==================== 启动 ====================
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
