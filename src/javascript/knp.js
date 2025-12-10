let userScore = 0;
let compScore = 0;
let drawScore = 0;

const buttonKnp = document.querySelectorAll('.knp-option');
const resultKnp = document.getElementById('knp-result');

buttonKnp.forEach(function (btn) {
  btn.onclick = function () {
    let user = btn.getAttribute('data-choice');
    let compOptions = ['камінь', 'ножиці', 'папір'];
    let comp = compOptions[Math.floor(Math.random() * 3)];

    console.log("Комп'ютер обрав: " + comp);

    if (user === comp) {
      resultKnp.textContent = 'Нічия! Обидва обрали: ' + user;
      drawScore++;
    } else if (
      (user === 'камінь' && comp === 'ножиці') ||
      (user === 'ножиці' && comp === 'папір') ||
      (user === 'папір' && comp === 'камінь')
    ) {
      resultKnp.textContent = "Ви виграли! Комп'ютер: " + comp;
      userScore++;
    } else {
      resultKnp.textContent = "Ви програли! Комп'ютер: " + comp;
      compScore++;
    }

    document.getElementById('user-score').textContent = 'Ви:' + userScore;
    document.getElementById('comp-score').textContent =
      "Комп'ютер:" + compScore;
    document.getElementById('draw-score').textContent = drawScore;
  };
});
