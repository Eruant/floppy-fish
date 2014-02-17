var Phaser = require('phaser/phaser');

module.exports = {

  create: function () {

    this.speed = 1;

    var tween;

    this.background = this.add.tileSprite(0, 0, 480, 320, 'game_background');
    this.background.alpha = 0;

    tween = this.add.tween(this.background)
      .to({ alpha: 1 }, 2000, Phaser.Easing.Linear.None, true);

    tween.onComplete.add(this.addInteraction, this);

  },

  addInteraction: function () {
    console.log('ready');
  },

  update: function () {
    this.background.tilePosition.x += this.speed;
  }

};
