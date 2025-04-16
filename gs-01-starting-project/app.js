const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("input");
const listEl = document.querySelector("ul");

function addItem() {
    const inputValue = inputEl.value;
    const newItem = document.createElement("li");
    newItem.textContent = inputValue;
    listEl.appendChild(newItem);
    inputEl.value = "";
}

buttonEl.addEventListener("click", addItem);
