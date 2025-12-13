// ========== 모바일 메뉴 ========== //
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");
});

menu.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});
