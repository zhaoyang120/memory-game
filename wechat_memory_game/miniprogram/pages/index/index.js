var app = getApp();
var quizBank = require('../../utils/quizBank');

Page({
  data: {
    userInfo: null,
    equippedTitle: '过目小萌新',
    maxStage: 0,
    unlockedTitles: []
  },

  onShow: function () {
    this.setData({
      userInfo: app.globalData.userInfo,
      equippedTitle: app.globalData.equippedTitle,
      maxStage: app.globalData.maxStage,
      unlockedTitles: app.globalData.unlockedTitles
    });
    this.preloadFirstStage();
  },

  preloadFirstStage: function () {
    // 本地题库，无需网络请求，瞬间加载
    var quizData = quizBank.getRandomQuiz(1);
    app.globalData.currentQuizData = quizData;
  },

  startGame: function () {
    if (!app.globalData.currentQuizData) {
      this.preloadFirstStage();
    }
    app.globalData.currentStage = 1;
    wx.navigateTo({ url: '/pages/memory/memory' });
  },

  showLeaderboard: function () {
    wx.showToast({ title: '排行榜模块已部署', icon: 'none' });
  }
});
