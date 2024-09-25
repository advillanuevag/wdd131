/*
    This script add an event listenet to a button and when the user fires a clic,
    it causes that the computer sends the text typed in the input element and place it
    as the content of the <p> tag.
*/
const buttonElement = document.getElementById("submitButton");

function copyInput() {
  const inputElement = document.getElementById("inputBox");
  const outputElement = document.getElementById("output");
  outputElement.innerHTML = inputElement.value;
}
buttonElement.addEventListener("click", copyInput);