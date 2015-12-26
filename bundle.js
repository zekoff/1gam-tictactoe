(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
/* global Phaser, game */
global.print = console.log.bind(console);
global.game = new Phaser.Game(600, 600);
global.ttt = {};
game.state.add('Main', require('./State/Main'));
game.state.add('Title', require('./State/Title'));
game.state.add('Load', require('./State/Load'));
game.state.start('Load');
}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./State/Load":2,"./State/Main":3,"./State/Title":4}],2:[function(require,module,exports){
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
},{}],3:[function(require,module,exports){
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
},{}],4:[function(require,module,exports){
/* global game */
module.exports = {
    create: function() {
        game.state.start('Main');
    }
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC4yLjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RhcnR1cC5qcyIsInNyYy9TdGF0ZS9Mb2FkLmpzIiwic3JjL1N0YXRlL01haW4uanMiLCJzcmMvU3RhdGUvVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qIGdsb2JhbCBQaGFzZXIsIGdhbWUgKi9cbmdsb2JhbC5wcmludCA9IGNvbnNvbGUubG9nLmJpbmQoY29uc29sZSk7XG5nbG9iYWwuZ2FtZSA9IG5ldyBQaGFzZXIuR2FtZSg2MDAsIDYwMCk7XG5nbG9iYWwudHR0ID0ge307XG5nYW1lLnN0YXRlLmFkZCgnTWFpbicsIHJlcXVpcmUoJy4vU3RhdGUvTWFpbicpKTtcbmdhbWUuc3RhdGUuYWRkKCdUaXRsZScsIHJlcXVpcmUoJy4vU3RhdGUvVGl0bGUnKSk7XG5nYW1lLnN0YXRlLmFkZCgnTG9hZCcsIHJlcXVpcmUoJy4vU3RhdGUvTG9hZCcpKTtcbmdhbWUuc3RhdGUuc3RhcnQoJ0xvYWQnKTsiLCIvKiBnbG9iYWwgZ2FtZSAqL1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcHJlbG9hZDogZnVuY3Rpb24oKXtcbiAgICAgICAgZ2FtZS5sb2FkLmJhc2VVUkwgPSAnLi9hc3NldHMvJztcbiAgICAgICAgZ2FtZS5sb2FkLmltYWdlKCdPJyk7XG4gICAgICAgIGdhbWUubG9hZC5pbWFnZSgnWCcpO1xuICAgICAgICBnYW1lLmxvYWQuaW1hZ2UoJ3BpeCcpO1xuICAgIH0sXG4gICAgY3JlYXRlOiBmdW5jdGlvbigpe1xuICAgICAgICBnYW1lLnN0YXRlLnN0YXJ0KCdUaXRsZScpO1xuICAgIH1cbn07IiwiLyogZ2xvYmFsIGdhbWUsIFBoYXNlciwgdHR0ICovXG5cbnZhciBNYWluID0ge307XG5NYWluLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHR0dC5maWVsZCA9IFBoYXNlci5BcnJheVV0aWxzLm51bWJlckFycmF5KDAsIDgpO1xuICAgIHZhciBpLCBjZWxsO1xuICAgIGZvciAoaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgY2VsbCA9IGdhbWUuYWRkLmltYWdlKGkgJSAzICogMjAwLCBNYXRoLmZsb29yKGkgLyAzKSAqIDIwMCwgJ3BpeCcpO1xuICAgICAgICBjZWxsLmhlaWdodCA9IDIwMDtcbiAgICAgICAgY2VsbC53aWR0aCA9IDIwMDtcbiAgICAgICAgY2VsbC50aW50ID0gUGhhc2VyLkNvbG9yLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgICAgIGNlbGwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uKHRhcmdldCwgcG9pbnRlciwgbikge1xuICAgICAgICAgICAgaWYgKHR0dC5maWVsZFtuXSA9PSAnWCcgfHwgdHR0LmZpZWxkW25dID09ICdPJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBwbGFjZU1hcmtlcihuLCAnTycpO1xuICAgICAgICAgICAgaWYgKHRlc3RGb3JXaW4oJ08nKSkge1xuICAgICAgICAgICAgICAgIGVuZEdhbWUoXCJZb3UgV2luIVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwbGFjZU1hcmtlcihnZXRPcHBvbmVudE1vdmUodHR0LmZpZWxkKS5pbmRleCwgJ1gnKTtcbiAgICAgICAgICAgIGlmICh0ZXN0Rm9yV2luKCdYJykpIHtcbiAgICAgICAgICAgICAgICBlbmRHYW1lKFwiWW91IExvc2UuLi5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzLCAwLCBpKTtcbiAgICB9XG59O1xubW9kdWxlLmV4cG9ydHMgPSBNYWluO1xuXG52YXIgcGxhY2VNYXJrZXIgPSBmdW5jdGlvbihpbmRleCwgY2hhcikge1xuICAgIHR0dC5maWVsZFtpbmRleF0gPSBjaGFyO1xuICAgIGdhbWUuYWRkLmltYWdlKGluZGV4ICUgMyAqIDIwMCwgTWF0aC5mbG9vcihpbmRleCAvIDMpICogMjAwLCBjaGFyKTtcbn07XG52YXIgdGVzdEZvcldpbiA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSArPSAzKVxuICAgICAgICBpZiAodHR0LmZpZWxkW2ldID09IGNoYXIgJiYgdHR0LmZpZWxkW2kgKyAxXSA9PSBjaGFyICYmIHR0dC5maWVsZFtpICsgMl0gPT0gY2hhcikgcmV0dXJuIHRydWU7XG4gICAgZm9yIChpID0gMDsgaSA8IDM7IGkrKylcbiAgICAgICAgaWYgKHR0dC5maWVsZFtpXSA9PSBjaGFyICYmIHR0dC5maWVsZFtpICsgM10gPT0gY2hhciAmJiB0dHQuZmllbGRbaSArIDZdID09IGNoYXIpIHJldHVybiB0cnVlO1xuICAgIGlmICh0dHQuZmllbGRbMF0gPT0gY2hhciAmJiB0dHQuZmllbGRbNF0gPT0gY2hhciAmJiB0dHQuZmllbGRbOF0gPT0gY2hhcikgcmV0dXJuIHRydWU7XG4gICAgaWYgKHR0dC5maWVsZFsyXSA9PSBjaGFyICYmIHR0dC5maWVsZFs0XSA9PSBjaGFyICYmIHR0dC5maWVsZFs2XSA9PSBjaGFyKSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgZ2V0T3Bwb25lbnRNb3ZlID0gZnVuY3Rpb24oZmllbGQpIHtcbiAgICB2YXIgcG90ZW50aWFsTW92ZXMgPSBbXTtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSsrKVxuICAgICAgICBpZiAoZmllbGRbaV0gIT0gJ1gnICYmIGZpZWxkW2ldICE9ICdPJykgcG90ZW50aWFsTW92ZXMucHVzaChpKTtcbiAgICBwb3RlbnRpYWxNb3ZlcyA9IHBvdGVudGlhbE1vdmVzLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBnYW1lLnJuZC5iZXR3ZWVuKC0xLCAxKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9O1xuICAgIH0pO1xuICAgIHZhciBtYXggPSAtMTtcbiAgICBwb3RlbnRpYWxNb3Zlcy5mb3JFYWNoKGZ1bmN0aW9uKG1vdmUpIHtcbiAgICAgICAgaWYgKG1vdmUudmFsdWUgPiBtYXgpIG1heCA9IG1vdmUudmFsdWU7XG4gICAgfSk7XG4gICAgcG90ZW50aWFsTW92ZXMgPSBwb3RlbnRpYWxNb3Zlcy5maWx0ZXIoZnVuY3Rpb24obW92ZSkge1xuICAgICAgICByZXR1cm4gbW92ZS52YWx1ZSA9PSBtYXg7XG4gICAgfSk7XG4gICAgcmV0dXJuIGdhbWUucm5kLnBpY2socG90ZW50aWFsTW92ZXMpO1xufTtcbnZhciBlbmRHYW1lID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHZhciBtYXNrID0gZ2FtZS5hZGQuaW1hZ2UoMCwgMCwgJ3BpeCcpO1xuICAgIG1hc2suaGVpZ2h0ID0gbWFzay53aWR0aCA9IDYwMDtcbiAgICBtYXNrLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgbWFzay5hbHBoYSA9IDA7XG4gICAgZ2FtZS5hZGQudGV4dCgzMDAsIDMwMCwgbWVzc2FnZSwge1xuICAgICAgICBmaWxsOiAnd2hpdGUnLFxuICAgICAgICBmb250U2l6ZTogMTIwLFxuICAgICAgICBzdHJva2U6ICdibGFjaycsXG4gICAgICAgIHN0cm9rZVRoaWNrbmVzczogNVxuICAgIH0pLmFuY2hvci5zZXQoMC41KTtcbn07IiwiLyogZ2xvYmFsIGdhbWUgKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGdhbWUuc3RhdGUuc3RhcnQoJ01haW4nKTtcbiAgICB9XG59OyJdfQ==
