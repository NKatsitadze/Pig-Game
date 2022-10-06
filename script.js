'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');
let diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');


// STARTING POINT

score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

let scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

const switchPlayer = function() {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        currentScore = 0;
        player0El.classList.toggle('player--active');
        player1El.classList.toggle('player--active');
}


// DICE ROLLING //
btnRoll.addEventListener('click', function() {
    if (playing) { 
    // Random dice roll between 1 and 6
    let dice = Math.trunc(Math.random()*6 + 1);

    // Displaying
    diceEl.classList.remove('hidden');
    diceEl.src = `images/dice-${dice}.png`;

    if (dice !== 1) {
        currentScore = currentScore + dice;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        
    } else {
        switchPlayer();
     }
    }
})


// HOLD BUTTON FUNCTION

btnHold.addEventListener('click', function() {
    if(playing) { 
        scores[activePlayer] = scores[activePlayer] + currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]; 
    
    if(scores[activePlayer] >= 20) {
        playing = false;
        diceEl.classList.remove('hidden');
        document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
     } else { switchPlayer() };
    }
})

// NEW GAME FUNCTION

btnNew.addEventListener('click', function () {
    playing = true;
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  
    document.querySelector(`.player--0`).classList.add('player--active');
    document.querySelector(`.player--1`).classList.remove('player--active');

    
    score0El.textContent =  0;
    score1El.textContent =  0;
    current0El.textContent =  0;
    current1El.textContent =  0;

    activePlayer = activePlayer === 0 ? 0 : 0;

    scores = [0, 0];
    currentScore = 0;
    scores[activePlayer] = scores[activePlayer] + currentScore;
    
});


// Adding instruction part

const instruction =document.querySelector('.instruction');
const instructionContent = document.querySelector('.instruction-content');

instruction.addEventListener('click', function() {
    instructionContent.classList.toggle('hidden');
    instructionContent.addEventListener('click', function() {
        instructionContent.classList.add('hidden');
    })
})
