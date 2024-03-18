
let links = document.querySelectorAll(".links li");

    links.forEach(link => {

        link.addEventListener("click", (e) => {
    
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
