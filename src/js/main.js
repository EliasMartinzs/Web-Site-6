"use strict";

const copy = document.querySelector(".copy");

/* --------------------- Footer Year ----------------------*/

let d = new Date();
let year = d.getFullYear();

copy.textContent = `${year} Copyright All Reserved`;

/* --------------------- Swiper Js ----------------------*/

const swiper = new Swiper(".swiper", {
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    // el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    // el: ".swiper-scrollbar",
  },
});

/* --------------------- Scrool Reveal ----------------------*/

let slideLeft = {
  origin: "left",
  delay: 600,
  duration: 2500,
  distance: "180px",
  opacity: 0,
  container: document.documentElement,
};

ScrollReveal().reveal(".img-container", slideLeft);
ScrollReveal().reveal(".hero-title", slideLeft);
ScrollReveal().reveal(".hero-medias", slideLeft);
ScrollReveal().reveal(".nav-links", slideLeft);

/* --------------------- Full Page ----------------------*/
