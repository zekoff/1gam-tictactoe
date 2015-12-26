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
            ttt.field[n] = 'O';
            game.add.image(n % 3 * 200, Math.floor(n / 3) * 200, 'O');
        }, this, 0, i);
    }
};
module.exports = Main;
},{}],4:[function(require,module,exports){
/* global game */
module.exports = {
    create: function() {
        game.state.start('Main');
    }
};
},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy5udm0vdmVyc2lvbnMvbm9kZS92NC4yLjEvbGliL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvU3RhcnR1cC5qcyIsInNyYy9TdGF0ZS9Mb2FkLmpzIiwic3JjL1N0YXRlL01haW4uanMiLCJzcmMvU3RhdGUvVGl0bGUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyogZ2xvYmFsIFBoYXNlciwgZ2FtZSAqL1xuZ2xvYmFsLnByaW50ID0gY29uc29sZS5sb2cuYmluZChjb25zb2xlKTtcbmdsb2JhbC5nYW1lID0gbmV3IFBoYXNlci5HYW1lKDYwMCwgNjAwKTtcbmdsb2JhbC50dHQgPSB7fTtcbmdhbWUuc3RhdGUuYWRkKCdNYWluJywgcmVxdWlyZSgnLi9TdGF0ZS9NYWluJykpO1xuZ2FtZS5zdGF0ZS5hZGQoJ1RpdGxlJywgcmVxdWlyZSgnLi9TdGF0ZS9UaXRsZScpKTtcbmdhbWUuc3RhdGUuYWRkKCdMb2FkJywgcmVxdWlyZSgnLi9TdGF0ZS9Mb2FkJykpO1xuZ2FtZS5zdGF0ZS5zdGFydCgnTG9hZCcpOyIsIi8qIGdsb2JhbCBnYW1lICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwcmVsb2FkOiBmdW5jdGlvbigpe1xuICAgICAgICBnYW1lLmxvYWQuYmFzZVVSTCA9ICcuL2Fzc2V0cy8nO1xuICAgICAgICBnYW1lLmxvYWQuaW1hZ2UoJ08nKTtcbiAgICAgICAgZ2FtZS5sb2FkLmltYWdlKCdYJyk7XG4gICAgICAgIGdhbWUubG9hZC5pbWFnZSgncGl4Jyk7XG4gICAgfSxcbiAgICBjcmVhdGU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGdhbWUuc3RhdGUuc3RhcnQoJ1RpdGxlJyk7XG4gICAgfVxufTsiLCIvKiBnbG9iYWwgZ2FtZSwgUGhhc2VyLCB0dHQgKi9cbnZhciBNYWluID0ge307XG5NYWluLmNyZWF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHR0dC5maWVsZCA9IFBoYXNlci5BcnJheVV0aWxzLm51bWJlckFycmF5KDAsIDgpO1xuICAgIHZhciBpLCBjZWxsO1xuICAgIGZvciAoaSA9IDA7IGkgPCA5OyBpKyspIHtcbiAgICAgICAgY2VsbCA9IGdhbWUuYWRkLmltYWdlKGkgJSAzICogMjAwLCBNYXRoLmZsb29yKGkgLyAzKSAqIDIwMCwgJ3BpeCcpO1xuICAgICAgICBjZWxsLmhlaWdodCA9IDIwMDtcbiAgICAgICAgY2VsbC53aWR0aCA9IDIwMDtcbiAgICAgICAgY2VsbC50aW50ID0gUGhhc2VyLkNvbG9yLmdldFJhbmRvbUNvbG9yKCk7XG4gICAgICAgIGNlbGwuaW5wdXRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5ldmVudHMub25JbnB1dERvd24uYWRkKGZ1bmN0aW9uKHRhcmdldCwgcG9pbnRlciwgbikge1xuICAgICAgICAgICAgaWYgKHR0dC5maWVsZFtuXSA9PSAnWCcgfHwgdHR0LmZpZWxkW25dID09ICdPJylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB0dHQuZmllbGRbbl0gPSAnTyc7XG4gICAgICAgICAgICBnYW1lLmFkZC5pbWFnZShuICUgMyAqIDIwMCwgTWF0aC5mbG9vcihuIC8gMykgKiAyMDAsICdPJyk7XG4gICAgICAgIH0sIHRoaXMsIDAsIGkpO1xuICAgIH1cbn07XG5tb2R1bGUuZXhwb3J0cyA9IE1haW47IiwiLyogZ2xvYmFsIGdhbWUgKi9cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIGdhbWUuc3RhdGUuc3RhcnQoJ01haW4nKTtcbiAgICB9XG59OyJdfQ==
