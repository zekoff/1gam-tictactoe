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
            if (testForWin('O')) print('win');
            placeMarker(getOpponentMove(ttt.field).index, 'X');
            if (testForWin('X')) print('lose');
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
},{}],4:[function(require,module,exports){
/* global game */
module.exports = {
    create: function() {
        game.state.start('Main');
    }
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC4yLjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RhcnR1cC5qcyIsInNyYy9TdGF0ZS9Mb2FkLmpzIiwic3JjL1N0YXRlL01haW4uanMiLCJzcmMvU3RhdGUvVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKiBnbG9iYWwgUGhhc2VyLCBnYW1lICovXG5nbG9iYWwucHJpbnQgPSBjb25zb2xlLmxvZy5iaW5kKGNvbnNvbGUpO1xuZ2xvYmFsLmdhbWUgPSBuZXcgUGhhc2VyLkdhbWUoNjAwLCA2MDApO1xuZ2xvYmFsLnR0dCA9IHt9O1xuZ2FtZS5zdGF0ZS5hZGQoJ01haW4nLCByZXF1aXJlKCcuL1N0YXRlL01haW4nKSk7XG5nYW1lLnN0YXRlLmFkZCgnVGl0bGUnLCByZXF1aXJlKCcuL1N0YXRlL1RpdGxlJykpO1xuZ2FtZS5zdGF0ZS5hZGQoJ0xvYWQnLCByZXF1aXJlKCcuL1N0YXRlL0xvYWQnKSk7XG5nYW1lLnN0YXRlLnN0YXJ0KCdMb2FkJyk7IiwiLyogZ2xvYmFsIGdhbWUgKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIHByZWxvYWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGdhbWUubG9hZC5iYXNlVVJMID0gJy4vYXNzZXRzLyc7XG4gICAgICAgIGdhbWUubG9hZC5pbWFnZSgnTycpO1xuICAgICAgICBnYW1lLmxvYWQuaW1hZ2UoJ1gnKTtcbiAgICAgICAgZ2FtZS5sb2FkLmltYWdlKCdwaXgnKTtcbiAgICB9LFxuICAgIGNyZWF0ZTogZnVuY3Rpb24oKXtcbiAgICAgICAgZ2FtZS5zdGF0ZS5zdGFydCgnVGl0bGUnKTtcbiAgICB9XG59OyIsIi8qIGdsb2JhbCBnYW1lLCBQaGFzZXIsIHR0dCAqL1xuXG52YXIgTWFpbiA9IHt9O1xuTWFpbi5jcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0dHQuZmllbGQgPSBQaGFzZXIuQXJyYXlVdGlscy5udW1iZXJBcnJheSgwLCA4KTtcbiAgICB2YXIgaSwgY2VsbDtcbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSsrKSB7XG4gICAgICAgIGNlbGwgPSBnYW1lLmFkZC5pbWFnZShpICUgMyAqIDIwMCwgTWF0aC5mbG9vcihpIC8gMykgKiAyMDAsICdwaXgnKTtcbiAgICAgICAgY2VsbC5oZWlnaHQgPSAyMDA7XG4gICAgICAgIGNlbGwud2lkdGggPSAyMDA7XG4gICAgICAgIGNlbGwudGludCA9IFBoYXNlci5Db2xvci5nZXRSYW5kb21Db2xvcigpO1xuICAgICAgICBjZWxsLmlucHV0RW5hYmxlZCA9IHRydWU7XG4gICAgICAgIGNlbGwuZXZlbnRzLm9uSW5wdXREb3duLmFkZChmdW5jdGlvbih0YXJnZXQsIHBvaW50ZXIsIG4pIHtcbiAgICAgICAgICAgIGlmICh0dHQuZmllbGRbbl0gPT0gJ1gnIHx8IHR0dC5maWVsZFtuXSA9PSAnTycpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgcGxhY2VNYXJrZXIobiwgJ08nKTtcbiAgICAgICAgICAgIGlmICh0ZXN0Rm9yV2luKCdPJykpIHByaW50KCd3aW4nKTtcbiAgICAgICAgICAgIHBsYWNlTWFya2VyKGdldE9wcG9uZW50TW92ZSh0dHQuZmllbGQpLmluZGV4LCAnWCcpO1xuICAgICAgICAgICAgaWYgKHRlc3RGb3JXaW4oJ1gnKSkgcHJpbnQoJ2xvc2UnKTtcbiAgICAgICAgfSwgdGhpcywgMCwgaSk7XG4gICAgfVxufTtcbm1vZHVsZS5leHBvcnRzID0gTWFpbjtcblxudmFyIHBsYWNlTWFya2VyID0gZnVuY3Rpb24oaW5kZXgsIGNoYXIpIHtcbiAgICB0dHQuZmllbGRbaW5kZXhdID0gY2hhcjtcbiAgICBnYW1lLmFkZC5pbWFnZShpbmRleCAlIDMgKiAyMDAsIE1hdGguZmxvb3IoaW5kZXggLyAzKSAqIDIwMCwgY2hhcik7XG59O1xuXG52YXIgdGVzdEZvcldpbiA9IGZ1bmN0aW9uKGNoYXIpIHtcbiAgICB2YXIgaTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgOTsgaSArPSAzKVxuICAgICAgICBpZiAodHR0LmZpZWxkW2ldID09IGNoYXIgJiYgdHR0LmZpZWxkW2kgKyAxXSA9PSBjaGFyICYmIHR0dC5maWVsZFtpICsgMl0gPT0gY2hhcikgcmV0dXJuIHRydWU7XG4gICAgZm9yIChpID0gMDsgaSA8IDM7IGkrKylcbiAgICAgICAgaWYgKHR0dC5maWVsZFtpXSA9PSBjaGFyICYmIHR0dC5maWVsZFtpICsgM10gPT0gY2hhciAmJiB0dHQuZmllbGRbaSArIDZdID09IGNoYXIpIHJldHVybiB0cnVlO1xuICAgIGlmICh0dHQuZmllbGRbMF0gPT0gY2hhciAmJiB0dHQuZmllbGRbNF0gPT0gY2hhciAmJiB0dHQuZmllbGRbOF0gPT0gY2hhcikgcmV0dXJuIHRydWU7XG4gICAgaWYgKHR0dC5maWVsZFsyXSA9PSBjaGFyICYmIHR0dC5maWVsZFs0XSA9PSBjaGFyICYmIHR0dC5maWVsZFs2XSA9PSBjaGFyKSByZXR1cm4gdHJ1ZTtcbn07XG5cbnZhciBnZXRPcHBvbmVudE1vdmUgPSBmdW5jdGlvbihmaWVsZCkge1xuICAgIHZhciBwb3RlbnRpYWxNb3ZlcyA9IFtdO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCA5OyBpKyspXG4gICAgICAgIGlmIChmaWVsZFtpXSAhPSAnWCcgJiYgZmllbGRbaV0gIT0gJ08nKSBwb3RlbnRpYWxNb3Zlcy5wdXNoKGkpO1xuICAgIHBvdGVudGlhbE1vdmVzID0gcG90ZW50aWFsTW92ZXMubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGdhbWUucm5kLmJldHdlZW4oLTEsIDEpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgdmFyIG1heCA9IC0xO1xuICAgIHBvdGVudGlhbE1vdmVzLmZvckVhY2goZnVuY3Rpb24obW92ZSkge1xuICAgICAgICBpZiAobW92ZS52YWx1ZSA+IG1heCkgbWF4ID0gbW92ZS52YWx1ZTtcbiAgICB9KTtcbiAgICBwb3RlbnRpYWxNb3ZlcyA9IHBvdGVudGlhbE1vdmVzLmZpbHRlcihmdW5jdGlvbihtb3ZlKSB7XG4gICAgICAgIHJldHVybiBtb3ZlLnZhbHVlID09IG1heDtcbiAgICB9KTtcbiAgICByZXR1cm4gZ2FtZS5ybmQucGljayhwb3RlbnRpYWxNb3Zlcyk7XG59OyIsIi8qIGdsb2JhbCBnYW1lICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICBnYW1lLnN0YXRlLnN0YXJ0KCdNYWluJyk7XG4gICAgfVxufTsiXX0=
