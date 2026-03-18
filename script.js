let display = document.getElementById("display");
let historyList = document.getElementById("historyList");

function appendValue(value) {
  display.value = display.value + value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    let expression = display.value;
    let result = eval(expression);
    display.value = result;
    addToHistory(expression + " = " + result);
  } catch (error) {
    display.value = "Error";
  }
}

function addToHistory(text) {
  let listItem = document.createElement("li");
  listItem.textContent = text;
  historyList.appendChild(listItem);
}

function clearHistory() {
  historyList.innerHTML = "";
}