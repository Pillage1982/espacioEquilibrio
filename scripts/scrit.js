document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const menuLinks = document.querySelectorAll('.navbar a');

    menuToggle.addEventListener('click', function() {
        navbar.classList.toggle('show');
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('show');
        });
    });
});