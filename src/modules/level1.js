var Phaser = require('phaser/phaser');

module.exports = {

  create: function () {

    this.speed = 5;

    var tween;

    this.background = this.add.tileSprite(0, 0, 480, 320, 'game_background');

  },

  update: function () {
    this.background.tilePosition.x -= this.speed;
  }

};
