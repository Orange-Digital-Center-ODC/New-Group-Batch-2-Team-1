// pages/navbar.js
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

const pages = document.querySelectorAll(".fixture-page");
const buttons = document.querySelectorAll(".page-btn");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
let currentPage = 1;

function showPage(page) {
  pages.forEach((p, i) => p.classList.toggle("hidden", i + 1 !== page));
  buttons.forEach((b) => {
    b.classList.remove("bg-blue-500", "text-white");
    b.classList.add("bg-gray-200");
    if (parseInt(b.dataset.page) === page) {
      b.classList.add("bg-blue-500", "text-white");
    }
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    currentPage = parseInt(btn.dataset.page);
    showPage(currentPage);
  });
});

nextBtn.addEventListener("click", () => {
  currentPage = currentPage < pages.length ? currentPage + 1 : 1;
  showPage(currentPage);
});

prevBtn.addEventListener("click", () => {
  currentPage = currentPage > 1 ? currentPage - 1 : pages.length;
  showPage(currentPage);
});

showPage(currentPage);
