/**
 * Floppy Fish
 *
 * This is the file to kick off everything
 **/

var Phaser = require('phaser/phaser'),
    game = new Phaser.Game(480, 320, Phaser.AUTO, "", {
      preload: preload,
      create: create,
      update: update
    }),
    player,
    mouseDown = false;

function preload () {
  game.load.spritesheet('textures', 'textures.png', 16, 16);
}

function create () {

  // add player and it's settings
  player = game.add.sprite(32, game.world.height * 0.5, 'textures');

  // player physics properties
  player.body.bounce.y = 0.5;
  player.body.gravity.y = 1000;
  player.body.collideWorldBounds = true;

}

function update () {
  if (game.input.mousePointer.isDown && !mouseDown) {
    player.body.velocity.y = -350;
    mouseDown = true;
  } else if (game.input.mousePointer.isUp) {
    mouseDown = false;
  }
}
