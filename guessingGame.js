/*
This file is the JavaScript code for the guessing game HTML code.
*/

"use strict";

(function() {
    var number = null;
    function start() {
        var button = document.getElementById('start');
        button.onclick = beginGuessGame;
        var submitguess = document.getElementById('submitguess');
        submitguess.onclick = checkGuesses;
    }
    function beginGuessGame() {

        document.getElementById('guess').value = "";
        var guesslist = document.getElementById("guesslist");
        guesslist.innerHTML = "";
        var min = Number(document.getElementById('min').value);
        var max = Number(document.getElementById('max').value);
        number = Math.floor(Math.random() * (max - min)) + min;
    }
    function checkGuesses() {
        var guesslist = document.getElementById('guesslist');
        if (number !== null) {
            var guess = Number(document.getElementById('guess').value);
            if (guess == number) {
                guesslist.innerHTML = "you got it right!<br/>" + guesslist.innerHTML;
            } else if (guess < number) {
                guesslist.innerHTML = "more than " + guess.toString() + "<br/>" + 
                    guesslist.innerHTML;
            } else if (guess > number) {
                guesslist.innerHTML = "less than " + guess.toString() + "<br/>" + 
                    guesslist.innerHTML;
            } 
        }
    }
    window.onload = start;
})();
