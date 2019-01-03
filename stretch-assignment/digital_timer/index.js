// 1. Query the parameters

const secondTens = document.getElementById("secondTens");
const secondOnes = document.getElementById("secondOnes");
const colon = document.getElementById("colon");
const msTens = document.getElementById("msTens");
const msHundreds = document.getElementById("msHundreds");
const start = document.getElementById("start");
const reset = document.getElementById("reset");

// 2. Initialize the Params

secondTens.textContent = 0;
secondOnes.textContent = 0;
msTens.textContent = 0;
msHundreds.textContent = 0;

// 3. Declare state of Timer

let timer, timerRunning;
timerRunning = false;

// 4. Create Start & Reset Functions

function startBtn() {
  if (timerRunning === false) {
    // Initiate timer interval
    timer = setInterval(msHun, 10);
    // Set timerRunning to True
    timerRunning = true;
    start.textContent = "Pause";
  } else {
    // Clear Interval of Timer
    timer = clearInterval(timer);
    // Set timerRunning to False
    timerRunning = false;
    start.textContent = "Start";
  }
}
// Call the Start function using Event Listener
start.addEventListener("click", startBtn);

// called in html using onClick
function resetBtn() {
  // Clear timer
  clearInterval(timer);

  // Initialize elements to 0
  secondTens.textContent = 0;
  secondOnes.textContent = 0;
  msTens.textContent = 0;
  msHundreds.textContent = 0;

  // remove the redDigit class
  secondTens.classList.remove("redDigit");
  secondOnes.classList.remove("redDigit");
  colon.classList.remove("redDigit");
  msHundreds.classList.remove("redDigit");
  msTens.classList.remove("redDigit");

  // Change the button back to saying "Start"
  start.textContent = "Start";

  // Enable the start button once restarted
  start.disabled = false;

  // Put timerRunning back to false
  timerRunning = false;
}

// 5. Create the CB Functions to initialize timer
function msHun() {
  if (msHundreds.textContent === "9") {
    msHundreds.textContent = 0;
    msTen();
  } else {
    msHundreds.textContent = parseInt(msHundreds.textContent) + 1;
  }
}

function msTen() {
  if (msTens.textContent === "9") {
    msTens.textContent = 0;
    secondOne();
  } else {
    msTens.textContent = parseInt(msTens.textContent) + 1;
  }
}

function secondOne() {
  if (secondOnes.textContent === "9") {
    secondOnes.textContent = 0;
    secondTen();
  } else {
    secondOnes.textContent = parseInt(secondOnes.textContent) + 1;
  }
}

function secondTen() {
  if (secondTens.textContent === "0") {
    secondTens.textContent = 1;
    secondTens.classList.add("redDigit");
    secondOnes.classList.add("redDigit");
    colon.classList.add("redDigit");
    msHundreds.classList.add("redDigit");
    msTens.classList.add("redDigit");
    start.textContent = "Timer Done";
    start.disabled = true;
    clearInterval(timer);
  } else {
    secondTens.textContent = parseInt(secondTens.textContent) + 1;
  }
}
