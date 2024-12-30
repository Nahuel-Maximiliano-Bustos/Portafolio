document.addEventListener("DOMContentLoaded", () => {
    const menuLinks = document.querySelectorAll(".menu-link");
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        menuLinks.forEach((link) => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});


// Envio del Formulario

// Inicializa EmailJS con tu User ID
emailjs.init('hNQkhELLVMq3gn3aa'); // Reemplaza 'TU_USER_ID' con tu verdadero User ID

// Agrega el evento al formulario
document.querySelector('.contact-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evita la recarga de la página

    // Configura tu Service ID y Template ID
    const serviceID = 'service_8w506n4'; // Reemplaza con tu Service ID
    const templateID = 'template_b8y01za'; // Reemplaza con tu Template ID

    // Envía el formulario usando EmailJS
    emailjs.sendForm(serviceID, templateID, this)
        .then(
            function (response) {
                alert('Mensaje enviado exitosamente!'); // Muestra mensaje de éxito
                document.querySelector('.contact-form').reset(); // Limpia el formulario
            },
            function (error) {
                alert('Ocurrió un error al enviar el mensaje. Revisa la consola para más detalles.');
                console.error('Error:', error); // Muestra detalles del error en la consola
            }
        );
});


// Seleccionamos todas las tarjetas de proyectos
const projectCards = document.querySelectorAll('.project-card');

// Agregamos evento para cada tarjeta
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        // Cerramos cualquier otra tarjeta activa
        projectCards.forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.classList.remove('active');
            }
        });
        // Alternamos la clase activa en la tarjeta seleccionada
        card.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button'); // Botón del menú
    const sidebar = document.querySelector('.sidebar'); // Menú lateral

    // Alternar la clase "active" para mostrar/ocultar el menú en pantallas grandes
    menuButton.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });
    // Opcional: cerrar el menú si se hace clic fuera de él
    document.addEventListener('click', (event) => {
        if (!sidebar.contains(event.target) && event.target !== menuButton) {
            sidebar.classList.remove('active');
        }
    });
});