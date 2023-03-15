'use strict';

// Creating variables from classes and id in the html document.
const elementScore0 = document.querySelector('#score--0'); // The scoreboard for player0 score.
const elementScore1 = document.querySelector('#score--1'); // The scoreboard for player1 score.
const elementDice = document.querySelector('.dice'); //The dice.

// Setting the start conditions for a new game.
elementScore0.textContent = 0;
elementScore1.textContent = 0;
elementDice.classList.add('hidden');
