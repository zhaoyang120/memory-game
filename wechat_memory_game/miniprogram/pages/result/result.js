const app = getApp();

Page({
  data: {
    correctCount: 0,
    totalCount: 0,
    newTitle: ''
  },

  onLoad: function (options) {
    const correct = parseInt(options.correct || 0);
    const total = parseInt(options.total || 0);

    this.setData({
      correctCount: correct,
      totalCount: total
    });

    this.checkTitleAndStage(correct);
  },

  checkTitleAndStage: function (correct) {
    if (correct === this.data.totalCount) {
      if (app.globalData.currentStage > app.globalData.maxStage) {
        app.globalData.maxStage = app.globalData.currentStage;
      }
    }

    let titleUnlocked = '';
    const totalCorrect = (app.globalData.totalCorrect || 0) + correct;
    app.globalData.totalCorrect = totalCorrect;

    if (totalCorrect >= 30 && !app.globalData.unlockedTitles.includes('过目不忘宗师')) {
      titleUnlocked = '过目不忘宗师';
    } else if (totalCorrect >= 15 && !app.globalData.unlockedTitles.includes('照相机大脑')) {
      titleUnlocked = '照相机大脑';
    } else if (totalCorrect >= 5 && !app.globalData.unlockedTitles.includes('行走的备忘录')) {
      titleUnlocked = '行走的备忘录';
    }

    if (titleUnlocked) {
      app.globalData.unlockedTitles.push(titleUnlocked);
      app.globalData.equippedTitle = titleUnlocked;
      this.setData({ newTitle: titleUnlocked });
    }
  },

  nextOrRetry: function () {
    if (this.data.correctCount === this.data.totalCount) {
      app.globalData.currentStage += 1;
      if (app.globalData.nextQuizData) {
        app.globalData.currentQuizData = app.globalData.nextQuizData;
        app.globalData.nextQuizData = null;
      }
    }
    wx.redirectTo({ url: '/pages/memory/memory' });
  },

  goHome: function () {
    wx.reLaunch({ url: '/pages/index/index' });
  }
});
