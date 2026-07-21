App({
  onLaunch: function () {
    this.globalData = {
      userInfo: null,
      currentStage: 1,
      maxStage: 0,
      totalCorrect: 0,
      currentQuizData: null,
      nextQuizData: null,
      unlockedTitles: ['过目小萌新'],
      equippedTitle: '过目小萌新'
    };
  }
});
