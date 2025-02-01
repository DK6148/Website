document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("offCanvasMenu");
    const body = document.body;

    const openMenu = () => {
        body.classList.add("menu-open"); 
    };

    const closeMenu = () => {
        body.classList.remove("menu-open");
    };

    document.addEventListener("mousemove", (event) => {
        if (event.clientX > window.innerWidth - 50) {
            openMenu();
        } else if (event.clientX < window.innerWidth - 300) {
            closeMenu();
        }
    });

    document.querySelectorAll(".off-canvas-menu a").forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: "smooth"
                });
                closeMenu(); 
            }
        });
    });

    const sections = document.querySelectorAll(".section");
    
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
    revealOnScroll();
});



document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("offCanvasMenu");
    const content = document.querySelector(".content");

    document.addEventListener("click", function (event) {
        if (event.target.closest(".menu-toggle")) { 
            menu.classList.toggle("open");
            content.classList.toggle("shift");
        }
    });
});
