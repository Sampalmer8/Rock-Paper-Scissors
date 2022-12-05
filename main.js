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
  if (paper === false && scissors === false) {
  rock = true;
  }
  setTimeout(rockChoose, 3000);
}

function paperClicked() {
  if (rock === false && scissors === false) {
  paper = true;
  }
  setTimeout(papChoose, 3000);
}

function sciClicked() {
  if (paper === false && rock === false) {
  scissors = true;
  }
  setTimeout(sciChoose, 3000);
}

// Computer Random Choice
function rockChoose() {
  let rockNum = Math.random();

  if (rockNum <= 0.333) {
    console.log("CPU chose rock");
    ctx.drawImage(imageObj, 175, 0, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Tied!", 210, 300);
  } else if (rockNum <= 0.666) {
    cpuScore++;
    console.log("CPU chose paper");
    ctx.drawImage(imagePap, 175, 30, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Lose!", 210, 300);
  } else {
    score++;
    console.log("CPU chose paper");
    ctx.drawImage(imageSci, 175, 30, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Won!", 210, 300);
  }
  document.getElementById("userOut").innerHTML = score;
  document.getElementById("cpuOut").innerHTML = cpuScore;
  setTimeout(clearCnv, 3000);
}

function papChoose() {
  let papNum = Math.random();

  if (papNum <= 0.333) {
    console.log("CPU chose paper");
    ctx.drawImage(imagePap, 175, 0, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Tied!", 210, 300);
  } else if (papNum <= 0.666) {
    cpuScore++;
    console.log("CPU chose scissors");
    ctx.drawImage(imageSci, 175, 30, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Lose!", 210, 300);
  } else {
    score++;
    console.log("CPU chose rock");
    ctx.drawImage(imageObj, 175, 30, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Won!", 210, 300);
  }
  document.getElementById("userOut").innerHTML = score;
  document.getElementById("cpuOut").innerHTML = cpuScore;
  setTimeout(clearCnv, 3000);
}

function sciChoose() {
  let sciNum = Math.random();

  if (sciNum <= 0.333) {
    console.log("CPU chose scissors");
    ctx.drawImage(imageSci, 175, 0, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Tied!", 210, 300);
  } else if (sciNum <= 0.666) {
    cpuScore++;
    console.log("CPU chose rock");
    ctx.drawImage(imageObj, 175, 30, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Lose!", 210, 300);
  } else {
    score++;
    console.log("CPU chose paper");
    ctx.drawImage(imagePap, 175, 30, 256, 256);
    ctx.font = "42px Comic Sans MS";
    ctx.fillStyle = "red";
    ctx.fillText("You Won!", 210, 300);
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
    document.getElementById("userOut").innerHtml = "--";
  }
  if (cpuScore === 0) {
    document.getElementById("cpuOut").innerHTML = "--";
  }
}