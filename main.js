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
ctx.textAlign = "center";

// Person Choosing Sign
document.getElementById("scissorsBtn").addEventListener("click", sciClicked);
document.getElementById("rockBtn").addEventListener("click", rockClicked);
document.getElementById("paperBtn").addEventListener("click", paperClicked);

function rockClicked() {
  if (paper === false && scissors === false) {
    rock = true;
  }
  displayRock();
  setTimeout(displayPaper, 1000);
  setTimeout(displayScissors, 2000);
  setTimeout(rockChoose, 3000);
}

function paperClicked() {
  if (rock === false && scissors === false) {
    paper = true;
  }
  displayRock();
  setTimeout(displayPaper, 1000);
  setTimeout(displayScissors, 2000);
  setTimeout(papChoose, 3000);
}

function sciClicked() {
  if (paper === false && rock === false) {
    scissors = true;
  }
  displayRock();
  setTimeout(displayPaper, 1000);
  setTimeout(displayScissors, 2000);
  setTimeout(sciChoose, 3000);
}

// Computer Random Choice
function rockChoose() {
  let rockNum = Math.random();

  ctx.fillStyle = "#F3DE8A";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "rgb(180, 59, 22)";
  ctx.font = "42px Courier New";
  if (rockNum <= 0.333) {
    console.log("CPU chose rock");
    ctx.drawImage(imageObj, 175, 0, 256, 256);
    ctx.fillText("You Tied!", 300, 300);
  } else if (rockNum <= 0.666) {
    cpuScore++;
    console.log("CPU chose paper");
    ctx.drawImage(imagePap, 175, 30, 256, 256);
    ctx.fillText("You Lose!", 300, 300);
  } else {
    score++;
    console.log("CPU chose scissors");
    ctx.drawImage(imageSci, 175, 30, 225, 225);
    ctx.fillText("You Won!", 300, 300);
  }
  document.getElementById("userOut").innerHTML = score;
  document.getElementById("cpuOut").innerHTML = cpuScore;
  setTimeout(clearCnv, 3000);
}

function papChoose() {
  let papNum = Math.random();

  ctx.fillStyle = "#F3DE8A";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "rgb(180, 59, 22)";
  ctx.font = "42px Courier New";
  if (papNum <= 0.333) {
    console.log("CPU chose paper");
    ctx.drawImage(imagePap, 175, 0, 256, 256);
    ctx.fillText("You Tied!", 300, 300);
  } else if (papNum <= 0.666) {
    cpuScore++;
    console.log("CPU chose scissors");
    ctx.drawImage(imageSci, 175, 30, 225, 225);
    ctx.fillText("You Lose!", 300, 300);
  } else {
    score++;
    console.log("CPU chose rock");
    ctx.drawImage(imageObj, 175, 30, 256, 256);
    ctx.fillText("You Won!", 300, 300);
  }
  document.getElementById("userOut").innerHTML = score;
  document.getElementById("cpuOut").innerHTML = cpuScore;
  setTimeout(clearCnv, 3000);
}

function sciChoose() {
  let sciNum = Math.random();

  ctx.fillStyle = "#F3DE8A";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  ctx.fillStyle = "rgb(180, 59, 22)";
  ctx.font = "42px Courier New";
  if (sciNum <= 0.333) {
    console.log("CPU chose scissors");
    ctx.drawImage(imageSci, 175, 0, 225, 225);
    ctx.fillText("You Tied!", 300, 300);
  } else if (sciNum <= 0.666) {
    cpuScore++;
    console.log("CPU chose rock");
    ctx.drawImage(imageObj, 175, 30, 256, 256);
    ctx.fillText("You Lose!", 300, 300);
  } else {
    score++;
    console.log("CPU chose paper");
    ctx.drawImage(imagePap, 175, 30, 256, 256);
    ctx.fillText("You Won!", 300, 300);
  }
  document.getElementById("userOut").innerHTML = score;
  document.getElementById("cpuOut").innerHTML = cpuScore;
  setTimeout(clearCnv, 3000);
}

function clearCnv() {
  ctx.clearRect(0, 0, cnv.width, cnv.height);
}

// Reset Score
document.getElementById("score").addEventListener("click", clearScore);

function clearScore() {
  rock = false;
  scissors = false;
  paper = false;
  score = 0;
  cpuScore = 0;
  clearCnv();
  if (score === 0) {
    document.getElementById("userOut").innerHTML = "--";
  }
  if (cpuScore === 0) {
    document.getElementById("cpuOut").innerHTML = "--";
  }
}

function displayRock() {
  ctx.fillStyle = "#F3DE8A";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = "rgb(180, 59, 22)";
  ctx.font = "42px Courier New";
  ctx.fillText("Rock!", 300, 300);
}

function displayPaper() {
  ctx.fillStyle = "#F3DE8A";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = "rgb(180, 59, 22)";
  ctx.font = "42px Courier New";
  ctx.fillText("Paper!", 300, 300);
}

function displayScissors() {
  ctx.fillStyle = "#F3DE8A";
  ctx.fillRect(0, 0, cnv.width, cnv.height);
  ctx.fillStyle = "rgb(180, 59, 22)";
  ctx.font = "42px Courier New";
  ctx.fillText("Scissors!", 300, 300);
}
