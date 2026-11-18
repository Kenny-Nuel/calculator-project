// Select the screen and buttons
const operationScreen = document.querySelector(".operation");
const resultScreen = document.querySelector(".operation-result");
const allButtons = document.querySelectorAll("button");

allButtons.forEach(function (button) {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    if (button.classList.contains("number-buttons")) {
      if (operationScreen.textContent === "0") {
        operationScreen.textContent = button.innerText;
      } else {
        operationScreen.textContent += button.innerText;
      }
    } else if (button.classList.contains("operation-sign")) {
      operationScreen.textContent += ` ${button.innerText} `;
    } else if (button.classList.contains("clear")) {
      operationScreen.textContent = "0";
      resultScreen.textContent = "0";
    } else if (button.classList.contains("backspace")) {
      const finalResult = operationScreen.textContent;
      const parts = finalResult.split("");
      parts.pop();

      const updatedfinalResult = parts.join("");
      operationScreen.textContent = updatedfinalResult;
    } else if (button.classList.contains("equal")) {
      const finalOperation = operationScreen.textContent;
      const parts = finalOperation.trim().split(" ");
      const simplified = [Number(parts[0])]; // 1 + 2 x 3

      for (let i = 1; i < parts.length; i += 2) {
        const operator = parts[i];
        const nextNumber = Number(parts[i + 1]);

        if (operator === "×") {
          simplified[simplified.length - 1] *= nextNumber;
        } else if (operator === "÷") {
          simplified[simplified.length - 1] /= nextNumber;
        } else if (operator === "%") {
          simplified[simplified.length - 1] *= 0.01;
        } else {
          simplified.push(operator, nextNumber);
        }
      }

      let runningTotal = simplified[0];

      for (let i = 1; i < simplified.length; i += 2) {
        const operationSign = simplified[i];
        const nextNumber = simplified[i + 1];

        if (operationSign === "+") {
          runningTotal += nextNumber;
        } else if (operationSign === "−") {
          runningTotal -= nextNumber;
        }
      }

      resultScreen.textContent = runningTotal;
    }
  });
});
