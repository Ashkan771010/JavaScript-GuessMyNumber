var input = document.getElementById("txtInput");
// var score = document.getElementById("score");
var score = 15;
var initialScoreValue = 15;
document.getElementById("score").innerHTML += score;

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

var value = randomNumber(1, 20);
console.log(value);

function result() {
  let finalInput = input.value;

  if (finalInput == value) {
    document.body.style.backgroundColor = "Green";
    document.getElementById("status").innerHTML = "You Win";
  }
  if (finalInput > value) {
    document.getElementById("score").innerHTML = "Score: " + --score;
    document.getElementById("status").innerHTML = "Too High";
  }
  if (finalInput < value) {
    document.getElementById("score").innerHTML = "Score: " + --score;
    document.getElementById("status").innerHTML = "Too Low";
  }

  console.log(score)
  if (score === 0) {
    document.body.style.backgroundColor = "red";
    again();
  }
}

function again() {
  document.body.style.backgroundColor = "rgb(32, 32, 32)";
  document.getElementById("status").innerHTML = "Start Guessing...";
  console.log(score);
  input.value = "";
  score = initialScoreValue;
  document.getElementById("score").innerHTML = "Score: " + initialScoreValue;
  randomNumber(1, 20);
}
