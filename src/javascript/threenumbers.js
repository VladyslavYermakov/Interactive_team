const a = document.getElementById('num1');
const b = document.getElementById('num2');
const c = document.getElementById('num3');
const btn = document.getElementById('btn');
function showMaxNumber() {
  const num1 = a.value.trim();
  console.log(num1);
  //   const result = document.getElementById('result');
  //   if (!n1 && !n2 && !n3) {
  //     document.getElementById('result').textContent = '';
  //     return;
  //   }
  //   const max = Math.max(a, b, c);
  //   result.textContent = 'Найбільше число, яке ви ввели - ' + max;
}

showMaxNumber();
