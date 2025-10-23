const buttonToggle = document.getElementById("buttonToggle");
buttonToggle.addEventListener("click", () => {
  alert("You have click on the menu icon");
});
const slides = document.querySelectorAll(".slide");
let current = 0;

function updateSlides() {
  slides.forEach((slide, index) => {
    if (index === current) {
      slide.querySelector("img").style.opacity = "1";
      slide.style.transform = "scale(1)";
      slide.style.transition = "ease-in-out 0.5s";
      slide.style.zIndex = "20";
    } else {
      slide.querySelector("img").style.opacity = "0.5";
      slide.style.transform = "scale(0.9)";
      slide.style.zIndex = "10";
    }
  });
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % slides.length;
  slides[current].parentElement.appendChild(slides[current]);
  updateSlides();
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + slides.length) % slides.length;
  slides[current].parentElement.prepend(slides[current]);
  updateSlides();
});

setInterval(() => {
  document.getElementById("next").click();
}, 5000);

updateSlides();
