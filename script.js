let input = document.getElementById('inputBox');
let expression = "";
function append(value) {
    expression += value;
    input.value = expression;
}
//calculates the result
function calculate() {
    try {
        expression = eval(expression);
        input.value = expression;
    } catch {
        input.value = "Error";
        expression = "";
    }
}
//To clear all input
function clearAll() {
    expression = "";
    input.value = "";
}
//To delete last character
function deleteLast() {
    expression = expression.slice(0, -1);
    input.value = expression;
}
//event support for keyboard
document.addEventListener('keydown', function(event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%()".includes(key)) {
        append(key);
    } else if (key === "Enter") {
        calculate();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearAll();
    }
});
// functionality for Theme toggle
const toggleTheme = document.getElementById('toggleTheme');
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if (document.body.classList.contains('light-mode')) {
        toggleTheme.innerHTML = "☀️";
    } else {
        toggleTheme.innerHTML = "🌙";
    }
});
