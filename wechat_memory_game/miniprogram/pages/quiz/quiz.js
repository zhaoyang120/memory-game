var app = getApp();
var quizBank = require('../../utils/quizBank');

Page({
  data: {
    questions: [],
    currentIndex: 0,
    totalQuestions: 0,
    currentQuestion: null,
    selectedOption: null,
    correctCount: 0
  },

  onLoad: function () {
    var quizData = app.globalData.currentQuizData;
    if (quizData && quizData.questions) {
      this.setData({
        questions: quizData.questions,
        totalQuestions: quizData.questions.length,
        currentQuestion: quizData.questions[0]
      });
    }
  },

  selectOption: function (e) {
    if (this.data.selectedOption) return;

    var option = e.currentTarget.dataset.option;
    var isCorrect = option === this.data.currentQuestion.correctAnswer;

    this.setData({
      selectedOption: option,
      correctCount: isCorrect ? this.data.correctCount + 1 : this.data.correctCount
    });

    setTimeout(function () {
      if (this.data.currentIndex + 1 < this.data.totalQuestions) {
        var nextIdx = this.data.currentIndex + 1;
        this.setData({
          currentIndex: nextIdx,
          currentQuestion: this.data.questions[nextIdx],
          selectedOption: null
        });
      } else {
        this.finishQuiz();
      }
    }.bind(this), 800);
  },

  finishQuiz: function () {
    // 本地题库预加载下一关
    var nextStage = app.globalData.currentStage + 1;
    var nextQuizData = quizBank.getRandomQuiz(nextStage);
    app.globalData.nextQuizData = nextQuizData;

    wx.redirectTo({
      url: '/pages/result/result?correct=' + this.data.correctCount + '&total=' + this.data.totalQuestions
    });
  }
});
