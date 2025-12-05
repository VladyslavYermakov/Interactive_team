const yearBtn = document.getElementById("yearBtn")
yearBtn.addEventListener("click", () => {
    const year = document.getElementById("yearInput").value;
    const result = document.getElementById("yearResult");

    if (year === "") {
        result.textContent = "Введіть рік!";
        result.style.color = "red";
        return;
    }
    const leap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
    if (leap) {
        result.textContent = "Ви народилися у високосний рік!";
        result.style.color = "rgba(3, 153, 0, 1)";
    } else {
        result.textContent = "Ви народилися не у високосний рік!";
        result.style.color = "rgba(153, 0, 0, 1)";
    }
});