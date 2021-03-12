const indicatorLeft = document.querySelector('.left'),
  indicatorRight = document.querySelector('.right');

function moveNextCarousel() {
  const elems = document.querySelector('.carousel.carousel-slider'),
    moveRight = M.Carousel.getInstance(elems);
  moveRight.next(1);
}

function movePrevCarousel() {
  const elems = document.querySelector('.carousel.carousel-slider'),
    moveLeft = M.Carousel.getInstance(elems);
  moveLeft.prev(1);
}

indicatorRight.addEventListener('click', () => {
  moveNextCarousel();
});

indicatorLeft.addEventListener('click', () => {
  movePrevCarousel();
});
