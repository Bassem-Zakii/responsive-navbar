"use strict";

// navbar active links

const navLinks = document.querySelectorAll("header nav ul a");

navLinks.forEach((links) => {
  links.addEventListener("click", function () {
    navLinks.forEach((link) => link.classList.remove("active"));
    this.classList.add("active");
  });
});

// // Navbar menu show and hide navbar menu in mobile

const navBtn = document.querySelector("header .nav-btn");
const navList = document.querySelector("header nav");

navBtn.addEventListener("click", () => {
  navList.classList.toggle("active");
  navBtn.classList.toggle("active");
});

// when you click outside navbar, and navbar toggle button remove class active

const html = document.querySelector("html");

// html.addEventListener("click", (e) => {
//   const navBtnRemove = e.target.closest(".nav-btn");
//   if (!navBtnRemove && e.target !== navList) {
//     navBtn.classList.remove("active");
//     navList.classList.remove("active");
//   }
// });

// when you click outside navbar, header and navbar toggle button remove class active

html.addEventListener("click", (e) => {
  const header = e.target.closest("header");
  if (!header) {
    navBtn.classList.remove("active");
    navList.classList.remove("active");
  }
});
