'use strict';

// Creating variables from classes and id in the html document.
const elementPlayer0 = document.querySelector('.player--0'); // The element for player 0.
const elementPlayer1 = document.querySelector('.player--1'); // The element for player 1.
const elementScore0 = document.querySelector('#score--0'); // The scoreboard for player0 score.
const elementScore1 = document.querySelector('#score--1'); // The scoreboard for player1 score.
const elementCurrentScore0 = document.getElementById('current--0'); // Current score for player0.
const elementCurrentScore1 = document.getElementById('current--1'); // Current score for player0.
const elementDice = document.querySelector('.dice'); //The dice.
const btnNew = document.querySelector('.btn--new'); // Button to start new game.
const btnRoll = document.querySelector('.btn--roll'); // Button to roll the dice.
const btnHold = document.querySelector('.btn--hold'); // Button to hold the current score.

const scores = [0, 0]; // Array to hold scores for players.
let currentScore = 0; // Variable to hold the current score.
let currentPlayer = 0; //Variable to hold the current player.

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

  // If dice is not equal to 1 it adds the dice number to current score and displays it.
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${currentPlayer}`).textContent =
      currentScore;
  }

  // If dice is 1 it will reset the current score to 0 and switch the current player.
  else {
    document.getElementById(`current--${currentPlayer}`).textContent = 0;
    currentPlayer = currentPlayer === 0 ? 1 : 0;
    currentScore = 0;
    elementPlayer0.classList.toggle('player--active'); // Changes the display of the element.
    elementPlayer1.classList.toggle('player--active'); // Changes the display of the element.
  }
});
