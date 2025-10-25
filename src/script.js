document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openMenu");
  const closeBtn = document.getElementById("closeMenu");
  const mobileMenu = document.getElementById("mobileMenu");
  const menuLinks = document.querySelectorAll(".menu-link");

  openBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("-translate-x-full");
    openBtn.classList.add("hidden");
    closeBtn.classList.remove("hidden");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("-translate-x-full");
    closeBtn.classList.add("hidden");
    openBtn.classList.remove("hidden");
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("-translate-x-full");
      closeBtn.classList.add("hidden");
      openBtn.classList.remove("hidden");
    });
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

  // Script for setting match countdown
  const matchDate = new Date("November 3, 2025 18:00:00").getTime();

  const countdownEl = document.getElementById("countdown");

  const timer = setInterval(() => {
    const now = new Date().getTime();
    const distance = matchDate - now;

    if (distance < 0) {
      clearInterval(timer);
      countdownEl.textContent = "MATCH STARTED!";
      return;
    }
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((distance % (1000 * 60)) / 1000);

    countdownEl.textContent = `${days.toString().padStart(2, "0")}:${hours
      .toString()
      .padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
});
