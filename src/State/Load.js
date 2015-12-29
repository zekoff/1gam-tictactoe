/* global game */
module.exports = {
    preload: function(){
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
        game.load.baseURL = './assets/';
        game.load.image('O');
        game.load.image('X');
        game.load.image('pix');
        game.load.image('ttt_title');
    },
    create: function(){
        game.state.start('Title');
    }
};