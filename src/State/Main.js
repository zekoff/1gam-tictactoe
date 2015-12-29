/* global game, Phaser, ttt */

var Main = {};
Main.create = function() {
    ttt.field = Phaser.ArrayUtils.numberArray(0, 8);
    var i, cell;
    for (i = 0; i < 9; i++) {
        cell = game.add.image(i % 3 * 200, Math.floor(i / 3) * 200, 'pix');
        cell.height = cell.width = 200;
        cell.tint = Phaser.Color.getRandomColor();
        cell.inputEnabled = true;
        cell.events.onInputDown.add(function(target, pointer, n) {
            if (ttt.field[n] == 'X' || ttt.field[n] == 'O')
                return;
            placeMarker(n, 'O');
            if (testForWin('O', ttt.field)) {
                endGame("You Win!");
                return;
            }
            var opponentMove = getOpponentMove(ttt.field);
            if (!opponentMove) {
                endGame("Tie...");
                return;
            }
            placeMarker(opponentMove.index, 'X');
            if (testForWin('X', ttt.field)) {
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
var testForWin = function(char, field) {
    var i;
    for (i = 0; i < 9; i += 3)
        if (field[i] == char && field[i + 1] == char && field[i + 2] == char) return true;
    for (i = 0; i < 3; i++)
        if (field[i] == char && field[i + 3] == char && field[i + 6] == char) return true;
    if (field[0] == char && field[4] == char && field[8] == char) return true;
    if (field[2] == char && field[4] == char && field[6] == char) return true;
};
var getOpponentMove = function(field) {
    var potentialMoves = [];
    field.forEach(function(_, i) {
        if (field[i] != 'X' && field[i] != 'O') potentialMoves.push(i);
    });
    potentialMoves = potentialMoves.map(function(index) {
        var value, tempField = ttt.field.slice();
        tempField[index] = 'X';
        if (testForWin('X', tempField))
            value = 1;
        else
            value = getMoveValue(tempField);
        return {
            index: index,
            value: value
        };
    });
    var max = -1;
    potentialMoves.forEach(function(move) {
        if (move.value > max) max = move.value;
    });
    return game.rnd.pick(potentialMoves.filter(function(move) {
        return move.value == max;
    }));
};
var endGame = function(message) {
    var mask = game.add.image(0, 0, 'pix');
    mask.height = mask.width = 600;
    mask.inputEnabled = true;
    mask.alpha = 0;
    game.add.text(300, 300, message, {
        fill: 'white',
        fontSize: 100,
        stroke: 'black',
        strokeThickness: 5
    }).anchor.set(0.5);
    game.time.events.add(2000, function() {
        game.state.restart('Main');
    });
};
var getMoveValue = function(field) {
    var tempField, i;
    var potentialMoves = [];
    field.forEach(function(_, i) {
        if (field[i] != 'X' && field[i] != 'O') potentialMoves.push(i);
    });
    for (i = 0; i < potentialMoves.length; i++) {
        tempField = field.slice();
        tempField[potentialMoves[i]] = 'O';
        if (testForWin('O', tempField)) return -1;
    }
    return 0;
};