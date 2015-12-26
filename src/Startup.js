/* global Phaser, game */
global.print = console.log.bind(console);
global.game = new Phaser.Game(600, 600);
global.ttt = {};
game.state.add('Main', require('./State/Main'));
game.state.add('Title', require('./State/Title'));
game.state.add('Load', require('./State/Load'));
game.state.start('Load');