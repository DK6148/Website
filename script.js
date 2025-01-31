document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    const menu = document.getElementById("offCanvasMenu");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.classList.add("visible");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);

    // Initialer Check
    revealOnScroll();

    // Animationen initialisieren
    document.querySelectorAll(".section").forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
        section.style.transition = "opacity 0.5s ease-out, transform 0.5s ease-out";
    });

    document.addEventListener("scroll", () => {
        document.querySelectorAll(".visible").forEach(section => {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        });
    });

    // Off-Canvas-Menü Logik
    document.addEventListener("mousemove", (event) => {
        if (event.clientX > window.innerWidth - 50) {
            menu.style.right = "0"; // Menü anzeigen
        } else if (event.clientX < window.innerWidth - 250) {
            menu.style.right = "-250px"; // Menü verstecken
        }
    });
});
