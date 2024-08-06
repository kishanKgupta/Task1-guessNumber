let num = document.querySelector("#live");
let liveValue = num.innerHTML;

let random = document.getElementById("randomNumber");
let greet = document.getElementById("greet");

//Generate random number
const rendomNumber = Math.floor(Math.random() * 10) + 1;

function decr() {
  const input = document.querySelector("input");
  let inputValue = input.value;

  const checkNumber = document.querySelector("#checkNumber");

  if (inputValue > rendomNumber) {
    checkNumber.innerHTML = "Your number is greater than the correct number.";
  } else if (rendomNumber > inputValue) {
    checkNumber.innerHTML = "Your number is lesser than the correct number.";
  }

  if (liveValue > 0) {
    if (greet.innerHTML == "You are Win 🎉") {
      softReload();
    } else if (inputValue == rendomNumber) {
      random.innerHTML = "Correct Number : " + rendomNumber;
      greet.innerHTML = "You are Win 🎉";
      checkNumber.innerHTML = "";
      increment();
    } else {
      num.innerHTML = liveValue - 1;
      liveValue--;
    }
  }
  if (liveValue == 0) {
    if (greet.innerHTML == "You are Loss 😟") {
      softReload();
    } else {
      random.innerHTML = "Correct Number : " + rendomNumber;
      greet.innerHTML = "You are Loss 😟";
      checkNumber.innerHTML = "";
      decrement();
    }
  }
}

const numberKey = "storedNumber";
let number = parseInt(localStorage.getItem(numberKey)) || 0;

function increment() {
  number = number + 1;
  updateDisplay();
}

function decrement() {
  if (number > 0) {
    number = number - 1;
    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById("win-count").textContent = number;
  localStorage.setItem(numberKey, number);
}

updateDisplay();

function hardReload() {
  localStorage.clear();
  location.reload();
}

function softReload() {
  location.reload();
}
