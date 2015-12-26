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
            placeMarker(n, 'O');
            if (testForWin('O')) {
                endGame("You Win!");
                return;
            }
            placeMarker(getOpponentMove(ttt.field).index, 'X');
            if (testForWin('X')) {
                endGame("You Lose...");
                return;
            }
        }, this, 0, i);
    }
};
module.exports = Main;

var placeMarker = function(index, char) {
    ttt.field[index] = char;
    game.add.image(index % 3 * 200, Math.floor(index / 3) * 200, char);
};
var testForWin = function(char) {
    var i;
    for (i = 0; i < 9; i += 3)
        if (ttt.field[i] == char && ttt.field[i + 1] == char && ttt.field[i + 2] == char) return true;
    for (i = 0; i < 3; i++)
        if (ttt.field[i] == char && ttt.field[i + 3] == char && ttt.field[i + 6] == char) return true;
    if (ttt.field[0] == char && ttt.field[4] == char && ttt.field[8] == char) return true;
    if (ttt.field[2] == char && ttt.field[4] == char && ttt.field[6] == char) return true;
};
var getOpponentMove = function(field) {
    var potentialMoves = [];
    var i;
    for (i = 0; i < 9; i++)
        if (field[i] != 'X' && field[i] != 'O') potentialMoves.push(i);
    potentialMoves = potentialMoves.map(function(index) {
        var value = game.rnd.between(-1, 1);
        return {
            index: index,
            value: value
        };
    });
    var max = -1;
    potentialMoves.forEach(function(move) {
        if (move.value > max) max = move.value;
    });
    potentialMoves = potentialMoves.filter(function(move) {
        return move.value == max;
    });
    return game.rnd.pick(potentialMoves);
};
var endGame = function(message) {
    var mask = game.add.image(0, 0, 'pix');
    mask.height = mask.width = 600;
    mask.inputEnabled = true;
    mask.alpha = 0;
    game.add.text(300, 300, message, {
        fill: 'white',
        fontSize: 120,
        stroke: 'black',
        strokeThickness: 5
    }).anchor.set(0.5);
};