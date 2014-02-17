var Phaser = require('phaser/phaser'),
    boot = require('./boot'),
    preloader = require('./preloader'),
    mainMenu = require('./mainMenu'),
    level1 = require('./level1');

module.exports = {

  constructor: function () {
    this.game = new Phaser.Game(480, 320, Phaser.AUTO, 'content', null);

    this.game.state.add('boot', boot, false);
    this.game.state.add('preloader', preloader, false);
    this.game.state.add('mainMenu', mainMenu, false);
    this.game.state.add('level1', level1, false);

    this.game.state.start('boot');
  }

};
