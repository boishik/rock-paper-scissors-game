let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreEl = document.querySelector("#user-score");
const compScoreEl = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * 3)];
};

// message
const setMsgState = (cls, text) => {
  msg.classList.remove("msg-win", "msg-lose", "msg-draw");
  msg.classList.add(cls);
  msg.innerText = text;
};

const drawGame = () => setMsgState("msg-draw", "Game was a draw! Play again.");

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScoreEl.innerText = userScore;
    setMsgState("msg-win", `You Win! ${userChoice} beats ${compChoice}`);
  } else {
    compScore++;
    compScoreEl.innerText = compScore;
    setMsgState("msg-lose", `You Lose! ${compChoice} beats ${userChoice}`);
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) return drawGame();

  let userWin = true;
  if (userChoice === "rock") userWin = compChoice !== "paper";
  else if (userChoice === "paper") userWin = compChoice !== "scissors";
  else userWin = compChoice !== "rock";

  showWinner(userWin, userChoice, compChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => playGame(choice.id));
});
