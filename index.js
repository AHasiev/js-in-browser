function readMore() {
  const more = document.querySelector(".more");
  const btn = document.querySelector("button");
  const imgDown = document.querySelector(".imgDown");

  if (btn.innerHTML === "Показать все") {
    btn.innerHTML = "Скрыть";
    more.style.display = "flex";
  } else {
    btn.innerHTML = "Показать все";
    more.style.display = "none";
  }

  imgDown.classList.toggle("imgUp");
}

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1.30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
