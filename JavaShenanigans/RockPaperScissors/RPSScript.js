let resultTally = JSON.parse(localStorage.getItem("Tally")) || {
    wins: 0,
    loses: 0,
    ties: 0,
  };

  updateTally();

  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You lose.";
      } else if (computerMove === "paper") {
        result = "You win.";
      } else if (computerMove === "scissors") {
        result = "It is a tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You win.";
      } else if (computerMove === "paper") {
        result = "It is a tie.";
      } else if (computerMove === "scissors") {
        result = "You lose.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "It is a tie.";
      } else if (computerMove === "paper") {
        result = "You lose.";
      } else if (computerMove === "scissors") {
        result = "You win.";
      }
    }

    if (result === "You win.") {
      resultTally.wins += 1;
    } else if (result === "You lose.") {
      resultTally.loses += 1;
    } else if (result === "It is a tie.") {
      resultTally.ties += 1;
    }

    localStorage.setItem("Tally", JSON.stringify(resultTally));

    updateTally();

    document.querySelector(".js-results").innerHTML = result;

    document.querySelector(
      ".js-detail-player"
    ).innerHTML = `<img src="RPSImages/${playerMove}.png" class="move-icon">`;
  
    document.querySelector(
      ".js-detail-computer"
    ).innerHTML = `<img src="RPSImages/${computerMove}.png" class="move-icon">`;

    document.querySelector(
      ".js-detail-playsay"
    ).innerHTML = `You chose ${playerMove}!`;

    document.querySelector(
      ".js-detail-compsay"
    ).innerHTML = `Computer chose ${computerMove}!`;
  }
   
  function updateTally() {
    document.querySelector(
      ".js-tally"
    ).innerHTML = `Wins = ${resultTally.wins}, Loses = ${resultTally.loses},
  Ties = ${resultTally.ties}`;
  }

  function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = "";

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
      computerMove = "scissors";
    }
    return computerMove;
  }

  
