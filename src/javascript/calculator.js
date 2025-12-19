let operation = "";

const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const сalcResult = document.getElementById("calculator-result");

const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const mul = document.getElementById("mul");
const div = document.getElementById("div");
const eq = document.getElementById("eq");

plus.addEventListener("click", () => {
    operation = "+";
});
minus.addEventListener("click", () => {
    operation = "-";
});
mul.addEventListener("click", () => {
    operation = "*";
});
div.addEventListener("click", () => {
    operation = "/";
});
eq.addEventListener("click", () => {
    const a = Number(num1.value);
    const b = Number(num2.value);
    let res = 0;

    if (operation === "+") res = a + b;
    if (operation === "-") res = a - b;
    if (operation === "*") res = a * b;
    if (operation === "/") res = a / b;

    сalcResult.textContent = res;
});