var Phaser = require('phaser/phaser');

module.exports = {

  create: function () {

    var tween;

    this.background = this.add.sprite(0, 0, 'game_background');
    this.background.alpha = 0;

    tween = this.add.tween(this.background)
      .to({ alpha: 1 }, 500, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.addInteraction, this);
  },

  addInteraction: function () {
    this.input.onDown.addOnce(this.startGame, this);
  },

  startGame: function () {
    this.game.state.start('level1', true, false);
  }

};
