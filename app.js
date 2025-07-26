let userScore = 0;
let comScore = 0;

const choices = document.querySelectorAll(".choice");

const compChoice = () => {
  const options = ["rock", "paper", "scissor"];
  Math.floor(Math.random() * 3); // 0 to 2
};

const playGame = (userChoice) => {
  console.log(userChoice);
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choice clicked", userChoice);

    playGame(userChoice);
  });
});
