'use strict';

const player1 = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const playerActive = document.querySelector('.player--active');
const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const diceImage = document.getElementById('image');
const currentPlayer = document.querySelector('#current--0');
const score1 = document.querySelector('#score--0');
const currentPlayer2 = document.querySelector('#current--1');
const score2 = document.querySelector('#score--1');

let current1 = 0;
let current2 = 0;
let scorePlayerOne = 0;
let scorePlayerTwo = 0;
let activePlayer = true;

function player1Active() {
  player1.classList.add('player--active');
  player1.classList.remove('player--winner');
  player1.classList.remove('name');
  player2.classList.remove('player--active');
}

function player2Active() {
  player2.classList.add('player--active');
  player2.classList.remove('player--winner');
  player2.classList.remove('name');
  player1.classList.remove('player--active');
}

function addWinner(player) {
  player.classList.add('player--winner');
  player.classList.add('name');
}

rollDice.addEventListener('click', function () {
  if (activePlayer) {
    player1Active();
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 1) {
      diceImage.src = './assets/dice-1.png';
      current1 = 0;
      activePlayer = false;
      player2Active();
      currentPlayer.textContent = current1;
    } else {
      diceImage.src = `./assets/dice-${dice}.png`;
      current1 += dice;
      currentPlayer.textContent = current1;
    }
  } else {
    player2Active();
    const dice = Math.floor(Math.random() * 6) + 1;
    if (dice === 1) {
      diceImage.src = './assets/dice-1.png';
      current2 = 0;
      activePlayer = true;
      player1Active();
      currentPlayer2.textContent = current2;
    } else {
      diceImage.src = `./assets/dice-${dice}.png`;
      current2 += dice;
      currentPlayer2.textContent = current2;
    }
  }
});

hold.addEventListener('click', function () {
  if (activePlayer) {
    scorePlayerOne += current1;
    if (scorePlayerOne >= 100) {
      score1.textContent = scorePlayerOne;
      currentPlayer.textContent = 0;
      addWinner(player1);
    } else {
      score1.textContent = scorePlayerOne;
      activePlayer = false;
      player2Active();
      current1 = 0;
      currentPlayer.textContent = current1;
    }
  } else {
    scorePlayerTwo += current2;
    if (scorePlayerTwo >= 100) {
      score2.textContent = scorePlayerTwo;
      currentPlayer2.textContent = 0;
      addWinner(player2);
    } else {
      score2.textContent = scorePlayerTwo;
      activePlayer = true;
      player1Active();
      current2 = 0;
      currentPlayer2.textContent = current2;
    }
  }
});

btnNew.addEventListener('click', function () {
  current1 = 0;
  current2 = 0;
  scorePlayerOne = 0;
  scorePlayerTwo = 0;
  currentPlayer.textContent = current1;
  currentPlayer2.textContent = current2;
  score1.textContent = current1;
  score2.textContent = current2;
  activePlayer = true;
  player2Active();
  player1Active();
});
