var Phaser = require('phaser/phaser');

module.exports = {

  constructor: function () {
    this.game = new Phaser.Game(480, 320, Phaser.AUTO, 'content', {
      preload: this.preload,
      create: this.create,
      update: this.update
    });

    this.mouseDown = false;
  },

  preload: function () {
    this.game.load.spritesheet('textures', 'textures.png', 16, 16);
  },

  create: function () {
    this.player = this.game.add.sprite(32, this.game.world.height * 0.5, 'textures');

    this.player.body.bounce.y = 0.5;
    this.player.body.gravity.y = 1000;
    this.player.body.collideWorldBounds = true;
  },

  update: function () {
    if (this.game.input.mousePointer.isDown && !this.mouseDown) {
      this.player.body.velocity.y = -350;
      this.mouseDown = true;
    } else if (this.game.input.mousePointer.isUp) {
      this.mouseDown = false;
    }
  }

};
