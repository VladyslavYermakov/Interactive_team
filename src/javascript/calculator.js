let op = "";

document.getElementById("plus").addEventListener("click", () => {
    op = "+";
});
document.getElementById("minus").addEventListener("click", () => {
    op = "-";
});
document.getElementById("mul").addEventListener("click", () => {
    op = "*";
});
document.getElementById("div").addEventListener("click", () => {
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

    document.getElementById("calculator-result").textContent = result;
}