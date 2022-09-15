"use strict";

// Hamburger menu

const menuItems = document.getElementById("menuItems");
const menuButton = document.getElementById("menu-icon");
const rentacarssTitle = document.getElementById("rent-title");
const rentacarssContent = document.getElementById("rent-content");
const btnHeader = document.querySelector(".btn-header")

menuItems.style.maxHeight = "0px";

function menuToggle() {
  if (menuItems.style.maxHeight == "0px") {
    menuItems.style.maxHeight = "200px";
  } else {
    menuItems.style.maxHeight = "0px";
  }
}

menuButton.addEventListener("click", function () {
  menuToggle();
  rentacarssTitle.style.zIndex = "-1";
  rentacarssContent.style.zIndex = "-1";
  menuItems.style.zIndex = "1";
  menuItems.style.fontWeight="700"
btnHeader.classList.toggle("hidden")
});

// Page Animations

window.sr = new ScrollReveal();

sr.reveal("#menuItems", {
  delay: 100,
  distance: "200px",
  origin: "left",
});

sr.reveal(".logo-img", {
  opacity: 0,
  scale: 0.8,
  duration: 2000,
});

sr.reveal("#what-we-do", {
  opacity: 0,
  scale: 0.1,
  duration: 1000,
});
sr.reveal("#about", {
  opacity: 0,
  scale: 0.1,
  duration: 1000,
});
sr.reveal("#products", {
  opacity: 0,
  scale: 0.1,
  duration: 1000,
});
sr.reveal(".fas", {
  opacity: 0,
  scale: 0.2,
  duration: 3000,
});
sr.reveal(".fa-brands", {
  opacity: 0,
  scale: 0.2,
  duration: 3000,
});

// Scrolls

const links = document.getElementsByClassName("link-item");

function smoothScroll(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  document.querySelector(href).scrollIntoView({
    behavior: "smooth",
  });
}

for (let link of links) {
  link.addEventListener("click", smoothScroll);
}
