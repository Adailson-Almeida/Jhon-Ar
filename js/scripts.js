/*!
 * Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
 */

// Scripts

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink');
        } else {
            navbarCollapsible.classList.add('navbar-shrink');
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Initialize EmailJS
    (function() {
        emailjs.init("WcrrB8cuijapfogbl");
    })();

    // Form validation and submission
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        const form = event.target;
        if (form.checkValidity() === false) {
            form.classList.add('was-validated');
            return;
        }

        const templateParams = {
            name: form.name.value,
            email: form.email.value,
            message: form.desc.value
        };

        // Enviar o e-mail
        emailjs.send('service_ddz4rr8', 'template_hhyvxxw', templateParams)
            .then(function(response) {
                console.log('Sent successfully:', response);
                alert('Sua mensagem foi enviada com sucesso!');
                form.reset();
                form.classList.remove('was-validated');
            })
            .catch(function(error) {
                console.log('Failed to send:', error);
                alert('Ocorreu um erro ao enviar a mensagem. Por favor, tente novamente.');
            });
    });
});
