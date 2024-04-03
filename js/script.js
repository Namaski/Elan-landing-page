const formule = document.querySelectorAll(".formule");
const formulePromo = document.querySelector(".promo")

formule.forEach(el => {
    el.addEventListener("mouseover", function() {
        formulePromo.classList.remove("promo")
        el.classList.add("hightlight");
    });
    el.addEventListener("mouseout", function() {
        el.classList.remove("hightlight");
        formulePromo.classList.add("promo")
    });

});

document.addEventListener('DOMContentLoaded', function () {
    const navbar_toggle = document.querySelector('.navbar-toggle')
    const navbar_menu = document.querySelector('.navbar-menu')
    
    navbar_toggle.addEventListener('click', function () {
        navbar_menu.classList.toggle('active');

    });
});

const darkModeToggle = document.getElementById('dark-mode-toggle');

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


console.log(document)