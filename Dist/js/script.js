const toggleBtn = document.querySelector(".toggle--button");
const headerNav = document.querySelector(".header--nav");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  headerNav.classList.toggle("active");
});
