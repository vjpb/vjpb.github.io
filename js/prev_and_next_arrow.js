
    function moveNextCarousel() {
        const elems = document.querySelector('.carousel.carousel-slider');
        const moveRight = M.Carousel.getInstance(elems);
        moveRight.next(1);
    }
    function movePrevCarousel() {
        const elems = document.querySelector('.carousel.carousel-slider');
        const moveLeft = M.Carousel.getInstance(elems);
        moveLeft.prev(1);
    }
