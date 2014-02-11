/**
 * Floppy Fish
 *
 * This is the file to kick off everything
 **/

require('SAT/SAT');

var Phaser = require('phaser/phaser'),
    game = new Phaser.Game(800, 600, Phaser.AUTO, "", {
      preload: preload,
      create: create,
      update: update
    });

function preload () {

  console.log('pre-load');
  game.load.spritesheet('textures', 'textures.png', 16, 16);

}

function create () {

  console.log('create');
  game.add.sprite(0, 0, 'textures');

}

function update () {
}
