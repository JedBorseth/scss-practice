"use strict";
const closeAd: any = document.getElementById("ad-close");
const menu: any = document.querySelector(".menu");
const menuEl: any = document.querySelector(".menu-dropdown");
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
