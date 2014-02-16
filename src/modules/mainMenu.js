var Phaser = require('phaser/phaser');

module.exports = {

  create: function () {

    var tween;

    this.background = this.add.sprite(0, 0, 'menu_background');
    this.background.alpha = 0;

    tween = this.add.tween(this.background)
      .to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.addInteraction, this);
  },

  addInteraction: function () {
    this.input.onDown.addOnce(this.fadeOut, this);
  },

  fadeOut: function () {

    var tween;

    tween = this.add.tween(this.background)
      .to({ alpha: 0 }, 2000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.startGame, this);

  },

  startGame: function () {
    console.log('start game');
  }

};
