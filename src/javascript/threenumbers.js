'use strict';

const a = document.getElementById('num1');
const b = document.getElementById('num2');
const c = document.getElementById('num3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
function showMaxNumber() {
  const num1 = a.value.trim();
  const num2 = b.value.trim();
  const num3 = c.value.trim();
  console.log(num1);
  if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    result.textContent = 'введіть  число';
    return;
  }
  const maxNum = Math.max(num1, num2, num3);

  result.textContent = ' найбільше число яке ви ввели:' + maxNum;
}
btn.addEventListener('click', showMaxNumber);
showMaxNumber();
