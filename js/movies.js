document.addEventListener('DOMContentLoaded', function () {
    const carousels = document.querySelectorAll('.movie-carousel');

    carousels.forEach(carousel => {
        const prevButton = carousel.querySelector('.carousel-button-prev');
        const nextButton = carousel.querySelector('.carousel-button-next');
        const wrapper = carousel.querySelector('.carousel-wrapper');

        let currentIndex = 0;
        const itemsToShow = 3; // Number of movies to show per slide
        const movieCards = carousel.querySelectorAll('.movie-card');
        const totalItems = movieCards.length;
        const totalSlides = Math.ceil(totalItems / itemsToShow);

        function updateCarousel() {
            const offset = -currentIndex * (100 / totalSlides);
            wrapper.style.transform = `translateX(${offset}%)`;
        }

        nextButton.addEventListener('click', function () {
            if (currentIndex < totalSlides - 1) {
                currentIndex++;
            } else {
                currentIndex = 0;
            }
            updateCarousel();
        });

        prevButton.addEventListener('click', function () {
            if (currentIndex > 0) {
                currentIndex--;
            } else {
                currentIndex = totalSlides - 1;
            }
            updateCarousel();
        });

        updateCarousel(); // Initialize the carousel
    });
});
