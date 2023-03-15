'use strict';

// Creating variables from classes and id in the html document.
const elementScore0 = document.querySelector('#score--0'); // The scoreboard for player0 score.
const elementScore1 = document.querySelector('#score--1'); // The scoreboard for player1 score.
const elementCurrentScore0 = document.getElementById('current--0'); // Current score for player0.
const elementCurrentScore1 = document.getElementById('current--1'); // Current score for player0.
const elementDice = document.querySelector('.dice'); //The dice.
const btnNew = document.querySelector('.btn--new'); // Button to start new game.
const btnRoll = document.querySelector('.btn--roll'); // Button to roll the dice.
const btnHold = document.querySelector('.btn--hold'); // Button to hold the current score.

let currentScore = 0; // Variable to hold the current score

// Setting the start conditions for a new game.
elementScore0.textContent = 0;
elementScore1.textContent = 0;
elementDice.classList.add('hidden');

// Function to roll the dice when roll button is pressed.
btnRoll.addEventListener('click', function () {
  // Creates a random number between 1-6.
  const dice = Math.trunc(Math.random() * 6) + 1;

  // Shows the correct dice image equal to the rolled dice.
  elementDice.classList.remove('hidden');
  elementDice.src = `images/dice-${dice}.png`;

  // If dies is not equal to 1 it adds the dice number to current score and displays it.
  if (dice !== 1) {
    currentScore += dice;
    elementCurrentScore0.textContent = currentScore;
  } else {
  }
});
