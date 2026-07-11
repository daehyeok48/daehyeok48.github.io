const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}
