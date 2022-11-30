// Canvas setup
let cnv = document.getElementById("canvas");
let ctx = cnv.getContext("2d");

cnv.width = 600;
cnv.height = 600;

// Countdown
document.getElementById("playBtn").addEventListener("click", startTime);

// Computer Random Choice
function cpuChoose() {
  let randNum = Math.random();

  if (randNum <= 0.333) {
    console.log("The cpu chose rock");
  } else if (randNum <= 0.666) {
    console.log("The cpu chose paper");
  } else {
    console.log("The cpu chose scissors");
  }
}

function startTime() {
  setTimeout(cpuChoose, 3000);
}
