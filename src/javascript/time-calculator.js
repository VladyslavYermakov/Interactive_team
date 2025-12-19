const input = document.getElementById("minutesInput");
const button = document.getElementById("calcBtn");
const result = document.getElementById("TimeResult");

button.addEventListener("click", function () {
    const minutes = Number(input.value);

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    result.textContent = "Результат: " + hours + " " +  "Hours " + mins + " Minutes";
});