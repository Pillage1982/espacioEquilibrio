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

document.addEventListener('DOMContentLoaded', function() {
    // Modal de Contacto
    const openContactModal = document.getElementById('open-contact-modal');
    const contactModal = document.getElementById('contact-modal');
    const closeContactModal = document.getElementById('close-contact-modal');
    const cancelContactButton = document.getElementById('cancel-contact-button');

    openContactModal.addEventListener('click', function() {
        contactModal.style.display = 'block';
    });

    closeContactModal.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });

    cancelContactButton.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Modal de Registro
    const openRegisterModal = document.getElementById('open-register-modal');
    const registerModal = document.getElementById('register-modal');
    const closeRegisterModal = document.getElementById('close-register-modal');
    const cancelRegisterButton = document.getElementById('cancel-register-button');

    openRegisterModal.addEventListener('click', function() {
        registerModal.style.display = 'block';
    });

    closeRegisterModal.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    cancelRegisterButton.addEventListener('click', function() {
        registerModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    });
});