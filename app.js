let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3); // 0 to 2
  return options[randomIndex];
};

const drawGame = () => {
  console.log("Game draw");
  msg.innerText = " Grame was draw ! Play agian ";
  msg.style.backgroundColor = "green";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorepara.innerText = userScore;
    console.log("You Win !!!");
    msg.innerText = `You Win !!! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorepara.innerText = compScore;
    console.log("You lose !!!");
    msg.innerText = `You Lose !!! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log(userChoice);

  //generate computer choice
  const compChoice = genCompChoice();
  console.log("Computer choice = ", compChoice);

  if (userChoice == compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice == "rock") {
      //computer = scissors or paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice == "paper") {
      //computer = rock or scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //computer = rock or paper
      userWin = compChoice === "rock" ? false : true;
    }

    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice clicked", userChoice);

    playGame(userChoice);
  });
});
