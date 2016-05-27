var userInput;
var convertedTemp;

function htmlInsert (hiTemp, loTemp) {
  var color;
  if (convertedTemp > hiTemp) {
    color = "red";
  } else if (convertedTemp < loTemp) {
    color = "blue";
  } else {
    color = "green";
  }
  document.getElementById("convertedTemp").innerHTML = '<p style="color:' + color + '">' + convertedTemp + '</p>';
}

function toCelsius () {
  convertedTemp = (userInput - 32) * (5/9);
  console.log("converted temp", convertedTemp);
  htmlInsert(32, 0);
}

function toFahrenheit () {
  convertedTemp = (userInput * (9/5)) + 32;
  console.log("converted temp", convertedTemp);
  htmlInsert(90, 32);
}

function clearAll () {
  document.getElementById("toCelsius").checked = false;
  document.getElementById("toFahrenheit").checked = false;
  document.getElementById("converter").value = null;
}

function determineConverter () {
  userInput = document.getElementById("converter").value;
  console.log("userInput", userInput);
  if (document.getElementById("toCelsius").checked && (document.getElementById("toFahrenheit")).checked) {
    alert("You can't select both!");
    clearAll();
  } else if (document.getElementById("toCelsius").checked) {
    toCelsius();
  } else if (document.getElementById("toFahrenheit").checked) {
    toFahrenheit();
  } else {
    alert("Please select a conversion.")
  }
}

// Get a reference to the button element in the DOM
var button = document.getElementById("submit");
var clear = document.getElementById("clear");

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
clear.addEventListener("click", clearAll);


