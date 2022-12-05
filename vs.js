// Canvas setup
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Variables
let player1;
let player2;

// Event Listeners
addEventListener("keypress", (event) => {
  if (event.key === "a") {
    console.log("Player1 chose rock");
    player1++;
  } else if (event.key === "s") {
    console.log("Player1 chose paper");
    player1++;
  } else if (event.key === "d") {
    console.log("Player1 chose scissors");
    player1++;
  } else if (event.key === ",") {
    console.log("Player2 chose rock");
    player2++;
  } else if (event.key === ".") {
    console.log("Player2 chose paper");
    player2++;
  } else if (event.key === "/") {
    console.log("Player2 chose scissors");
    player2++;
  }
});

if (player1 >= 1 && player2 >= 1) {
  startgame();
}

function startgame() {
  displayRock();
  setTimeout(displayPaper, 1000);
  setTimeout(displayScissors, 2000);
}

function displayRock() {
  ctx.fillStyle = "rgb(0, 192, 0)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.font = "42px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("Rock!", 300, 300);
}

function displayPaper() {
  ctx.fillStyle = "rgb(0, 192, 0)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.font = "42px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("Paper!", 300, 300);
}

function displayScissors() {
  ctx.fillStyle = "rgb(0, 192, 0)";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.font = "42px Comic Sans MS";
  ctx.fillStyle = "red";
  ctx.fillText("Scissors!", 300, 300);
}
