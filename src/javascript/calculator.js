let op = "";

// кнопки
document.getElementById("plus").addEventListener("click", function() {
    op = "+";
});

document.getElementById("minus").addEventListener("click", function() {
    op = "-";
});

document.getElementById("mul").addEventListener("click", function() {
    op = "*";
});

document.getElementById("div").addEventListener("click", function() {
    op = "/";
});

function calc() {
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);
    let result = 0;

    if (op === "+") result = a + b;
    if (op === "-") result = a - b;
    if (op === "*") result = a * b;
    if (op === "/") result = a / b;

    document.getElementById("calculator-result").value = result;
}