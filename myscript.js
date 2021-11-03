'use strict';
// Random Number
const randNum = Math.round(Math.random() * 19 + 1);
console.log(randNum);

// Elements used
const checkBtn = document.querySelector('.check');
const buttons = document.querySelector('button');
const userNum = document.querySelector('.userNum');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const state = document.querySelector('.state');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const randDisplay = document.querySelector('.question-mark');

userNum.addEventListener('change', () => {
  //   console.log(userNum.value);
});
// Color variable
let color = '#60b347';
let resetColor = '#222';
// Score value
let scoreValue = 20;

function changeColor(color) {
  buttons.style.color = color;
  body.style.backgroundColor = color;
  userNum.style.backgroundColor = color;
  randDisplay.style.color = color;
}

// Game Logic
checkBtn.addEventListener('click', () => {
  let guess = Number(userNum.value);

  if (guess <= 20 && guess >= 1) {
    if (randNum === guess) {
      changeColor(color);
      state.textContent = `🎉 Correct number!`;
      randDisplay.textContent = `${randNum}`;
      highScore.textContent = `🥇 Highscore: ${scoreValue}`;
      checkBtn.disabled = true;
      // Guess higher or lower than random Value
    } else if (guess !== randNum) {
      let level = guess > randNum ? 'high' : 'low;';
      state.textContent = `📈 Too ${level}!`;
      scoreValue--;
      score.textContent = `💯 Score: ${scoreValue}`;
    }
  } else {
    state.textContent = `Enter a valid range (1 - 20)`;
  }

  // Game Over
  if (scoreValue === 0) {
    changeColor('red');
    userNum.value = '';
    state.textContent = `Game Over!`;
    randDisplay.textContent = `?`;
    checkBtn.disabled = false;
  }
});

// Reset Button
againBtn.addEventListener('click', () => {
  changeColor(resetColor);
  userNum.value = '';
  state.textContent = `Start guessing...`;
  randDisplay.textContent = `?`;
  highScore.textContent =
    scoreValue === 20 ? `🥇 Highscore: ${0}` : `🥇 Highscore: ${scoreValue}`;
  checkBtn.disabled = false;
});
