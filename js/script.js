const navToggleIcon = document.querySelector(".nav__toggle-icon");
const menuItem = document.querySelector(".menu");
const coverItem = document.querySelector(".cover");

navToggleIcon.addEventListener("click", function () {
  this.classList.toggle("nav__toggle-icon--open");
  menuItem.classList.toggle("menu--open");
  coverItem.classList.toggle("cover--show");
});
