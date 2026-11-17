import "../styles/main.scss";

import "swiper/css";
import "swiper/css/navigation";

import Swiper from "swiper";
import { Navigation } from "swiper/modules";

new Swiper(".swiper", {
  modules: [Navigation],
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const burgerBtn = document.getElementById("burger");
const mobileMenu = document.getElementById("mobile-menu");
const closeMenuBtn = mobileMenu.querySelector(".mobile-menu__close");

function setMenuOpen(isOpen) {
  mobileMenu.classList.toggle("active", isOpen);
  burgerBtn.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  document.body.classList.toggle("menu-open", isOpen);
}

burgerBtn.addEventListener("click", () => {
  setMenuOpen(!mobileMenu.classList.contains("active"));
});
closeMenuBtn.addEventListener("click", () => setMenuOpen(false));

mobileMenu.addEventListener("click", (event) => {
  if (event.target.closest(".mobile-menu__links a")) {
    setMenuOpen(false);
  }
});

const languageButtons = mobileMenu.querySelectorAll(".mobile-menu__languages button");
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    languageButtons.forEach((language) => {
      const isActive = language === button;
      language.classList.toggle("is-active", isActive);
      language.setAttribute("aria-pressed", String(isActive));
    });
  });
});