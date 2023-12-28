document.addEventListener("DOMContentLoaded", function() {

    var currentURL = window.location.href;
    var navLinks = document.querySelectorAll('.nav-item a');L
    navLinks.forEach(function(link) {
        if (link.href === currentURL) {
            link.parentElement.classList.add('active'); 
        }
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const mobileMenu = document.getElementById("mobile-menu");
    const navItems = document.querySelector(".nav-items");

    mobileMenu.addEventListener("click", function () {
        navItems.classList.toggle("active");
    });
});
