function readMore() {
  const more = document.getElementById("more");
  const btn = document.getElementById("btn");
  const imgDown = document.getElementById("imgDown");

  if (btn.innerHTML === "Показать все") {
    btn.innerHTML = "Скрыть";
    more.style.display = "inline";
  } else {
    btn.innerHTML = "Показать все";
    more.style.display = "none";
  }

  imgDown.classList.toggle("imgUp");
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.15,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
