//Я 3 ДНІ ЦЕ РОБИВ ЦЕ ПРОСТО ЖАХ СКІЛЬКИ ІНТЕРНЕТУ Я ПЕРЕЛАЗИВ
const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");
const text = document.querySelector(".dyno-text");

let isJumping = false;

function jump() {
    if (isJumping == false) {
        isJumping = true;
        dino.classList.add("jump");

        setTimeout(() => {
        dino.classList.remove("jump");
        isJumping = false;
        }, 700);
    }
}

document.addEventListener("keydown",(event) => {
    if (event.code === "Space" || event.key === "ArrowUp") {
        jump();
    }
});

let check = setInterval(() => {
    let dinoRect = dino.getBoundingClientRect();
    let cactusRect = cactus.getBoundingClientRect();

    if (
        dinoRect.right > cactusRect.left &&
        dinoRect.left < cactusRect.right &&
        dinoRect.bottom > cactusRect.top &&
        dinoRect.top < cactusRect.bottom
    ) {
        text.textContent = "Game Over";
        text.style.fontSize = "20px" 
        cactus.style.animation = "none";
        cactus.style.left = cactusRect.left + "px";
    }
}, 10);

restartBtn.addEventListener("click", () => {
    text.textContent = "";

    isGameOver = false;
    isJumping = false;

    cactus.style.left = "580px";
    cactus.style.animation = "block 2s infinite linear";

    dino.classList.remove("jump");
});