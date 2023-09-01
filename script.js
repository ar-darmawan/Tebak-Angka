'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //Saat tidak ada input angka
  if (!guess) {
    displayMessage('⛔ TIDAK BOLEH KOSONG!');
    //Saat pemain menang
  } else if (guess === secretNumber) {
    displayMessage('🎉 Yeayy Kamu Benar!');
    displayNumber(secretNumber);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Saat pemain memasukkan nilai tinggi
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? '😮 Terlalu Tinggi' : '😩 Terlalu Rendah'
      );
    }
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    displayMessage('💥 Kamu GAGAL!!');
    document.querySelector('.score').textContent = 0;
  }
});

// Play LAGI
document.querySelector('.again').addEventListener('click', function () {
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Mulai menebak...');
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
