document.addEventListener('DOMContentLoaded', function() {
    // Toggle del menú
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

    // Función para manejar la apertura y cierre de modales
    function setupModal(openButtonId, modalId, closeButtonId, cancelButtonId) {
        const openButton = document.getElementById(openButtonId);
        const modal = document.getElementById(modalId);
        const closeButton = document.getElementById(closeButtonId);
        const cancelButton = document.getElementById(cancelButtonId);

        openButton.addEventListener('click', function() {
            modal.style.display = 'block';
        });

        closeButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        cancelButton.addEventListener('click', function() {
            modal.style.display = 'none';
        });

        window.addEventListener('click', function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // Configuración de los modales
    setupModal('open-contact-modal', 'contact-modal', 'close-contact-modal', 'cancel-contact-button');
    setupModal('open-register-modal', 'register-modal', 'close-register-modal', 'cancel-register-button');


    // Validación del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    const cancelContactButton = document.getElementById('cancel-contact-button');

    async function handleSubmit(event) {
        event.preventDefault();

        const fd = new FormData(contactForm);

        const response = await fetch('https://formspree.io/f/xanywonl', {
            method: 'POST',
            body: fd,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            alert('Mensaje enviado con éxito');
            contactForm.reset();
        } else {
            alert('No se pudo enviar el mensaje');
        }
    }

    contactForm.addEventListener('submit', handleSubmit);

});