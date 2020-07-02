let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

//Generate random integer between 0 and 9
const generateTarget = () => Math.floor(Math.random() * 10);

//Compare guesses between computer, user and target guess
const compareGuesses = (userGuess, computerGuess, targetGuess) => {
  return Math.abs(computerGuess - targetGuess) >=
    Math.abs(userGuess - targetGuess)
    ? true
    : false;
};

//update the score based on winner
const updateScore = (winner) => {
  winner === "human" ? humanScore++ : computerScore++;
};

//update the round number
const advanceRound = () => {
  currentRoundNumber++;
};
