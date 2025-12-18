const images = [
     {  
        img: "./img/cat1.jpg",
        name: "Влад"
    },
    {   
        img: "./img/cat2.jpg",
        name: "Олена"
    },
    {   
        img: "./img/cat3.jpg",
        name: "Катерина"    
    }
];

let index = 0;

const image = document.getElementById("sliderImage");
const nameText = document.getElementById("sliderName");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

function updateSlider() {
    image.src = images[index].img;
    nameText.textContent = images[index].name;

    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === images.length - 1;
}

nextBtn.addEventListener("click", function () {
    index = index + 1;
    updateSlider();
});

prevBtn.addEventListener("click", function () {
    index = index - 1;
    updateSlider();
});

updateSlider();