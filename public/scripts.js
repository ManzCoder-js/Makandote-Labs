// Parallax effect for service cards
document.addEventListener('scroll', function() {
    const parallaxElements = document.querySelectorAll('.parallax');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    parallaxElements.forEach(el => {
        const speed = el.dataset.speed;
        const offset = scrollTop * speed;
        el.style.backgroundPositionY = `${offset}px`;
    });
});
