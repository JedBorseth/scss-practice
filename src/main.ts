"use strict";
const closeAd: HTMLElement = document.getElementById("ad-close");
const menu: HTMLElement = document.querySelector(".menu");
const menuEl: HTMLElement = document.querySelector(".menu-dropdown");
let i = 0;

menu.addEventListener("click", () => {
  if (i === 2) i = 0;
  menuEl.classList.toggle("hidden");
  menu.children[0].classList.toggle("close");
  i++;
});
closeAd.addEventListener("click", () => {
  closeAd.parentElement.classList.add("hidden");
});

export {};
