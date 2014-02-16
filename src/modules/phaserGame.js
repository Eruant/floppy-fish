var Phaser = require('phaser/phaser'),
    boot = require('./boot'),
    preloader = require('./preloader'),
    mainMenu = require('./mainMenu');

module.exports = {

  constructor: function () {
    this.game = new Phaser.Game(480, 320, Phaser.AUTO, 'content', null);

    this.game.state.add('Boot', boot, false);
    this.game.state.add('Preloader', preloader, false);
    this.game.state.add('MainMenu', mainMenu, false);
    //this.game.state.add('Level1', Level1, false);

    this.game.state.start('Boot');
  }

};
