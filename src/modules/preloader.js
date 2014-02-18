var Phaser = require('phaser/phaser');

module.exports = {

  preload: function () {

    var x = this.game.world.centerX;
    var y = this.game.world.centerY;

    this.preloadBar = this.add.sprite(x, y, 'preloadBar');
    this.preloadBar.anchor.x = 0.5;
    this.preloadBar.anchor.y = 0.5;
    this.load.setPreloadSprite(this.preloadBar);

    // load game assets
    this.game.load.image('game_background', 'img/game_background.jpg');
  },

  create: function () {
    var tween = this.add.tween(this.preloadBar)
      .to({
        alpha: 0
      }, 1000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(this.startMainMenu, this);
  },

  startMainMenu: function () {
    this.game.state.start('mainMenu', true, false);
  }

};
