/* global game */
module.exports = {
    preload: function(){
        game.load.baseURL = './assets/';
        game.load.image('O');
        game.load.image('X');
        game.load.image('pix');
    },
    create: function(){
        game.state.start('Title');
    }
};