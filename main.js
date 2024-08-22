let outputscreen = document.getElementById('output-screen');
let resultCalculated = false;

function display(num) {
  if (resultCalculated) {
    outputscreen.value = ''; // Clear the screen if a result was just calculated
    resultCalculated = false; // Reset the flag
  }
  outputscreen.value += num;
}

function calculate() {
  try {
    outputscreen.value = eval(outputscreen.value);
    resultCalculated = true; // Set the flag to true after calculating the result
  } catch (err) {
    alert("Invalid");
  }
}

function clr() {
  outputscreen.value = '';
  resultCalculated = false; // Reset the flag when the screen is cleared
}

function del() {
  outputscreen.value = outputscreen.value.slice(0, -1);
}