/*
    This script add an event listenet to a button and when the user fires a clic,
    it causes that the computer sends the text typed in the input element and place it
    as the content of the <p> tag.
*/

const buttonElement = document.getElementById("submitButton");
/*

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);
*/
buttonElement.addEventListener("click", copyInput);
// This code allows to see what happens with the event in the console:
function copyInput(event) {
    // take a look at the event!
    console.log(event);
    const inputElement = document.getElementById("inputBox");
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = inputElement.value;
  }



