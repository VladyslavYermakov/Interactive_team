let secretNumber = Math.floor(Math.random() * 10) + 1;

const computerInput = document.getElementById("computerInput");
const computerBtn = document.getElementById("computerBtn");
const computerResult = document.getElementById("computerResult");

computerBtn.addEventListener("click", () => {
    let userValue = computerInput.value;

    if (userValue == secretNumber) {
        computerResult.textContent = "Вітаю, ви вгадали число! (" + secretNumber + ")";
        computerResult.style.color = "green";
    } else {
        computerResult.textContent = "Ви програли, комп'ютер загадав (" + secretNumber + ")";
        computerResult.style.color = "red";
    }
});

