// Variable Setup
let rock = false;
let paper = false;
let scissors = false;
let score = 0;
let cpuScore = 0;

// Rock Image
const imageObj = new Image();
imageObj.src = "img/rock.png";

// Paper Image
const imagePap = new Image();
imagePap.src = "img/paper.png";

// Scissors Image
const imageSci = new Image();
imageSci.src = "img/scissors.png";

// Canvas setup
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");
cnv.width = 600;
cnv.height = 600;

// Person Choosing Sign
document.getElementById("scissorsBtn").addEventListener("click", sciClicked);
document.getElementById("rockBtn").addEventListener("click", rockClicked);
document.getElementById("paperBtn").addEventListener("click", paperClicked);

function rockClicked() {
  if (paper === true || scissors === true) {
  } else {
    rock = true;
  }
}

function paperClicked() {
  if (rock === true || scissors === true) {
  } else {
    paper = true;
  }
}

function sciClicked() {
  if (paper === true || rock === true) {
  } else {
    scissors = true;
  }
}

// Countdown
document.getElementById("playBtn").addEventListener("click", startTime);

// Computer Random Choice
function cpuChoose() {
  let randNum = Math.random();

  if (randNum <= 0.333) {
    console.log("The cpu chose rock");
    ctx.drawImage(imageObj, 175, 0, 256, 256);
    if ((paper = true)) {
      cpuScore++;
      ctx.font = "42px Comic Sans MS";
      ctx.fillStyle = "red";
      ctx.fillText("You Win!", 275, 300);
    } else if ((scissors = true)) {
      score++;
      // Write "You Lose"
    } else {
      // Write "You Tied"
    }
  } else if (randNum <= 0.666) {
    console.log("The cpu chose paper");
    ctx.drawImage(imagePap, 175, 30, 256, 256);
  } else {
    console.log("The cpu chose scissors");
    ctx.drawImage(imageSci, 175, 30, 230, 230);
  }
}

function startTime() {
  rock = false;
  paper = false;
  scissors = false;
  ctx.clearRect(0, 0, cnv.width, cnv.height);
  setTimeout(cpuChoose, 3000);
}
