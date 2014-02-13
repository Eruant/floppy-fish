/**
 * Floppy Fish
 *
 * This is the file to kick off everything
 **/

require('SAT/SAT');

var Phaser = require('phaser/phaser'),
    game = new Phaser.Game(480, 320, Phaser.AUTO, "", {
      preload: preload,
      create: create,
      update: update
    }),
    player;

function preload () {

  game.load.spritesheet('textures', 'textures.png', 16, 16);

}

function create () {

  // add player and it's settings
  player = game.add.sprite(32, game.world.height - 150, 'textures');

  // player physics properties
  player.body.bounce.y = 0.9;
  player.body.gravity.y = 100;
  player.body.collideWorldBounds = true;

}

function update () {
}
