let randomnumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#subt");
const userinput = document.querySelector("#guessField");
const userguesses = document.querySelector(".guesses");
const result = document.querySelector(".lastResult");
const lowORhigh = document.querySelector(".lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement("p");
let preguess = [];
let numguess = 0;

let playgame = true;
if (playgame) {
  submit.addEventListener("click", (event) => {
    event.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number greater than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    preguess.push(guess);
    if (numguess === 9) {
      displayguess(guess);
      displaymessage(`Game over,Randomnumber was ${randomnumber}`);
      endgame();
    } else {
      displayguess(guess);
      checkguess(guess);
    }
  }
}
function checkguess(guess) {
  if (guess === randomnumber) {
    displaymessage(`your guess is right`);
    endgame();
  } else if (guess < randomnumber) {
    displaymessage(`number is too low`);
  } else if (guess > randomnumber) {
    displaymessage(`number is too high`);
  }
}

function displayguess(guess) {
  userinput.value = "";
  userguesses.innerHTML += `${guess} `;
  numguess++;
  result.innerHTML = `${10 - numguess}`;
}

function displaymessage(message) {
  lowORhigh.innerHTML = `<h2>${message}</h2>`;
}
function endgame() {
  userinput.value = "";
  userinput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newgame">Start new Game</h2>`;
  startover.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newgamebutton = document.querySelector("#newgame");
  newgamebutton.addEventListener("click", (event) => {
    randomnumber = parseInt(Math.random() * 100 + 1);
    preguess = [];
    numguess = 0;
    userguesses.innerHTML = "";
    result.innerHTML = `${10 - numguess}`;
    userinput.removeAttribute("disabled");
    startover.removeChild(p);
    playgame = false;
  });
}
