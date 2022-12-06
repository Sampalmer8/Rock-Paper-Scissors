// Canvas setup
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;
ctx.textAlign = "center";

// Variables
let player1 = 0;
let player2 = 0;
let player1Rock = false;
let player1Paper = false;
let player1Scissors = false;
let player2Rock = false;
let player2Paper = false;
let player2Scissors = false;

// Event Listeners
addEventListener("keypress", (event) => {
  if (event.key === "a") {
    if (player1Paper === false && player1Scissors === false) {
      player1Rock === true;
    }
    player1++;
    console.log("Player1 chose rock");
  } else if (event.key === "s") {
    if (player1Rock === false && player1Scissors === false) {
      player1Paper = true;
    }
    player1++;
    console.log("Player1 chose paper");
  } else if (event.key === "d") {
    if (player1Rock === false && player1Paper === false) {
      player1Scissors = true;
    }
    player1++;
    console.log("Player1 chose scissors");
  } else if (event.key === ",") {
    if (player2Paper === false && player2Scissors === false) {
      player2Rock = true;
    }
    player2++;
    console.log("Player2 chose rock");
  } else if (event.key === ".") {
    if (player2Rock === false && player2Scissors === false) {
      player2Paper = true;
    }
    player2++;
    console.log("Player2 chose paper");
  } else if (event.key === "/") {
    if (player2Rock === false && player2Paper === false) {
      player2Scissors = true;
    }
    player2++;
    console.log("Player2 chose scissors");
  }

  if (player1 >= 1 && player2 >= 1) {
    startgame();
  }

  if (player1Rock === true && player2Rock === true) {
    ctx.fillStyle = "rgb(115, 0, 192)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Tied!", 300, 300);
  } else if (player1Rock === true && player2Paper === true) {
    ctx.fillStyle = "rgb(115, 0, 192)";
    ctx.fillRect(0, 0, cnv.width, cnv.height);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("Player 2 Wins!", 300, 300);
  }
});

function startgame() {
  displayRock();
  setTimeout(displayPaper, 1000);
  setTimeout(displayScissors, 2000);
}

function displayRock() {
  ctx.fillStyle = "rgb(115, 0, 192)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.font = "42px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("Rock!", 300, 300);
}

function displayPaper() {
  ctx.fillStyle = "rgb(115, 0, 192)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.font = "42px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("Paper!", 300, 300);
}

function displayScissors() {
  ctx.fillStyle = "rgb(115, 0, 192)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.font = "42px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("Scissors!", 300, 300);
}

document.getElementById("score").addEventListener("click", resetAll);

function resetAll() {
  player1 = 0;
  player2 = 0;
  player1Rock = false;
  player1Paper = false;
  player1Scissors = false;
  player2Rock = false;
  player2Paper = false;
  player2Scissors = false;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
}
