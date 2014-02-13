module.exports = {

  preload: function () {
    this.load.image('preloadBar', 'img/loader.png');
  },

  create: function () {

    // no need for multi-touch
    this.input.maxPointers = 1;

    // Phaser will auto pause if browser tab looses focus
    this.stage.disableVisibilityChange = true;

    if (this.game.device.desktop) {
      this.stage.scale.pageAlignHorizontally = true;
    } else {
      // we are on a mobile
    }

    this.game.state.start('Preloader', true, false);
  }

};
