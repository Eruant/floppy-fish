var Phaser = require('phaser/phaser');

module.exports = {

  preload: function () {

    var x = (this.game.width / 2);
    var y = (this.game.height / 2);

    this.preloadBar = this.add.sprite(x, y, 'preloadBar');
    this.load.setPreloadSprite(this.preloadBar);

    // load game assets
    this.game.load.image('menu_background', 'img/menu_background.png');
  },

  create: function () {
    var tween = this.add.tween(this.preloadBar)
      .to({
        alpha: 0
      }, 1000, Phaser.Easing.Linear.None, true);
    tween.onComplete.add(this.startMainMenu, this);
  },

  startMainMenu: function () {
    this.game.state.start('MainMenu', true, false);
  }

};
