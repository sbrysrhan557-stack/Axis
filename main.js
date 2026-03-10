const menuIcon = document.querySelector("header .container i");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

/* فتح وقفل المينيو */
menuIcon.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* قفل المينيو لما اضغط على لينك */
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
  });
});

/* قفل المينيو عند الـ scroll */
window.addEventListener("scroll", () => {
  navMenu.classList.remove("active");
});

/* قفل المينيو لما اضغط برا الناف */
document.addEventListener("click", (e) => {
  if (!navMenu.contains(e.target) && !menuIcon.contains(e.target)) {
    navMenu.classList.remove("active");
  }
});
