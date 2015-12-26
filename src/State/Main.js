/* global game, Phaser, ttt */
var Main = {};
Main.create = function() {
    ttt.field = Phaser.ArrayUtils.numberArray(0, 8);
    var i, cell;
    for (i = 0; i < 9; i++) {
        cell = game.add.image(i % 3 * 200, Math.floor(i / 3) * 200, 'pix');
        cell.height = 200;
        cell.width = 200;
        cell.tint = Phaser.Color.getRandomColor();
        cell.inputEnabled = true;
        cell.events.onInputDown.add(function(target, pointer, n) {
            if (ttt.field[n] == 'X' || ttt.field[n] == 'O')
                return;
            ttt.field[n] = 'O';
            game.add.image(n % 3 * 200, Math.floor(n / 3) * 200, 'O');
        }, this, 0, i);
    }
};
module.exports = Main;