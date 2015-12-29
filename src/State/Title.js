/* global game */
module.exports = {
    create: function() {
        game.add.image(0, 0, 'ttt_title');
        game.time.events.add(2000, function() {
            game.state.start('Main');
        });
    }
};