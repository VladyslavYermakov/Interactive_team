
let buttons = document.querySelectorAll('.knp-btn');
let result = document.getElementById('knp-result');
buttons.forEach(function (btn) {
  btn.onclick = function () {
    let user = btn.getAttribute('data-choice');
    let compOptions = ['камінь', 'ножиці', 'папір'];
    let comp = compOptions[Math.floor(Math.random() * 3)];
    if (user === comp) {
      result.textContent = 'Нічия! Обидва обрали: ' + user;
    } else if (
      (user === 'ножиці' && comp === 'камінь') ||
      (user === 'папір' && comp === 'ножиці') ||
      (user === 'камінь' && comp === 'папір')
    ) {
      result.textContent = 'Ви виграли! Комп’ютер: ' + comp;
    } else {
      result.textContent = 'Ви програли! Комп’ютер: ' + comp;
    }
  };
});
