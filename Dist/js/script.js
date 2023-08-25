const toggleBtn = document.querySelector(".toggle--button");
const headerNav = document.querySelector(".header--nav");
const headerNav2 = document.querySelector(".header--nav2");
const toggleBtn2 = document.querySelector(".toggle--button2");

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("active");
    headerNav.classList.toggle("active");
  });
} else {
  toggleBtn2.addEventListener("click", () => {
    toggleBtn2.classList.toggle("active");
    headerNav2.classList.toggle("active");
  });
}
