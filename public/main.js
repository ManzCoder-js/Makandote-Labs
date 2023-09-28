document.addEventListener("DOMContentLoaded", function () {
    // Agregar un evento de clic a todos los enlaces del menú
    const links = document.querySelectorAll("nav a");
    links.forEach(function (link) {
        link.addEventListener("click", scrollToSection);
    });

    // Función para desplazarse suavemente a la sección correspondiente
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Obtener el ID de la sección objetivo
        const targetSection = document.getElementById(targetId); // Obtener el elemento de la sección objetivo
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth", // Hace que el desplazamiento sea suave
                block: "start", // Alinea la parte superior de la sección con la parte superior de la ventana
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    // Agregar un evento de clic a todos los enlaces del menú
    const links = document.querySelectorAll("nav a");
    links.forEach(function (link) {
        link.addEventListener("click", scrollToSection);
    });

    // Función para desplazarse suavemente a la sección correspondiente
    function scrollToSection(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Obtener el ID de la sección objetivo
        const targetSection = document.getElementById(targetId); // Obtener el elemento de la sección objetivo
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: "smooth", // Hace que el desplazamiento sea suave
                block: "start", // Alinea la parte superior de la sección con la parte superior de la ventana
            });
        }
    }
});
