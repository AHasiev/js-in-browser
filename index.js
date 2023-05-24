function readMore() {
  const more = document.getElementById("more");
  const btn = document.getElementById("btn");

  if (btn.innerHTML === "Показать все") {
    btn.innerHTML = "Скрыть";
    more.style.display = "inline";
  } else {
    btn.innerHTML = "Показать все";
    more.style.display = "none";
  }
}

var swiper = new Swiper('.swiper-container', {
    
  pagination: {
    el: '.swiper-pagination',
    clickable: true
    
  },
});

