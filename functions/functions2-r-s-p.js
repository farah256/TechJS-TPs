let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

updateScoreElement();



document.querySelector('.js-rock-button')
  .addEventListener('click', () => {
    playGame('rock');
  });

document.querySelector('.js-paper-button')
  .addEventListener('click', () => {
    playGame('paper');
  });

document.querySelector('.js-scissors-button')
  .addEventListener('click', () => {
    playGame('scissors');
  });

  /*
  Add an event listener
  if the user presses the key r => play rock
  if the user presses the key p => play paper
  if the user presses the key s => play scissors
  */
document.querySelector('.js-rock-button')
  .addEventListener("r",()=>{
  playGame('rock');
});
document.querySelector('.js-paper-button')
 .addEventListener("p",()=>{
  playGame('paper');
});
document.querySelector('.js-scissors-button')
 .addEventListener("s",()=>{
  playGame('scissors');
});


function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  // calculate result
  if(playerMove == computerMove){
    score.ties ++;
  } else if ((playerMove == 'rock' && computerMove == 'scissors') || (playerMove == 'scissors' && computerMove == 'paper') ||  (playerMove == 'paper' && computerMove == 'rock')){
    score.wins ++;
  } else if ((computerMove == 'rock' && playerMove == 'scissors') || (computerMove == 'scissors' && playerMove == 'paper') ||  (computerMove == 'paper' && playerMove == 'rock')){
    score.losses ++;
  }

  // update the score and store it using localStorage.setItem
  updateScoreElement();
  localStorage.setItem('score',JSON.stringify(score));
  // show the new score and the updated images using "document.querySelector"

  let playerImage = playerMove + '-emoji.png';
  let computerImage = computerMove + '-emoji.png';

  document.querySelector('.js-moves')
     .innerHTML = `<img src="images/${playerImage}" class="move-icon"> <img src="images/${computerImage}" class="move-icon">`;
  

}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}