// Select the screen and buttons
const operationScreen = document.querySelector(".operation");
const resultScreen = document.querySelector(".operation-result");
const allButtons = document.querySelectorAll("button");

allButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    // Check if the clicked button has the "number-buttons" class
    if (button.classList.contains("number-buttons")) {
      // Concatenate the button's number onto the screen
      operationScreen.textContent += button.innerText;
    } else if (button.classList.contains("operation-sign")) {
      operationScreen.textContent += ` ${button.innerText} `;
      console.log(operationScreen);
    } else if (button.classList.contains("clear")) {
      operationScreen.textContent = "0";
      resultScreen.textContent = "0";
    } else if (button.classList.contains("equal")) {
      const finalOperation = operationScreen.textContent;
      const parts = finalOperation.trim().split(" ");
      let runningTotal = Number(parts[0]); // 1 + 2 + 3

      for (let i = 1; i < parts.length; i += 2) {
        const operationSign = parts[i];
        const nextNumber = Number(parts[i + 1]);

        if (operationSign === "+") {
          runningTotal += nextNumber;
        } else if (operationSign === "−") {
          runningTotal -= nextNumber;
        } else if (operationSign === "÷") {
          runningTotal /= nextNumber;
        } else if (operationSign === "×") {
          runningTotal *= nextNumber;
      }
      resultScreen.textContent = runningTotal;
    }
  });
});
