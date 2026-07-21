const app = getApp();

Page({
  data: {
    stage: 1,
    timeLeft: 30,
    storyText: ''
  },
  timer: null,

  onLoad: function () {
    const quizData = app.globalData.currentQuizData;
    this.setData({
      stage: app.globalData.currentStage,
      storyText: quizData ? quizData.storyText : ''
    });
    this.startTimer();
  },

  startTimer: function () {
    this.timer = setInterval(() => {
      if (this.data.timeLeft <= 1) {
        clearInterval(this.timer);
        this.goToQuiz();
      } else {
        this.setData({ timeLeft: this.data.timeLeft - 1 });
      }
    }, 1000);
  },

  finishEarly: function () {
    if (this.timer) clearInterval(this.timer);
    this.goToQuiz();
  },

  goToQuiz: function () {
    wx.redirectTo({ url: '/pages/quiz/quiz' });
  },

  onUnload: function () {
    if (this.timer) clearInterval(this.timer);
  }
});
