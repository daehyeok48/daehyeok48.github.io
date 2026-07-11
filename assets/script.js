const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".mobile-menu");

if (btn && menu) {
  btn.addEventListener("click", () => {
    menu.classList.toggle("open");
  });
}

["contextmenu", "copy", "cut", "paste"].forEach((eventName) => {
  document.addEventListener(eventName, (event) => {
    event.preventDefault();
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if ((event.ctrlKey || event.metaKey) && ["c", "x", "v"].includes(key)) {
    event.preventDefault();
  }
});
