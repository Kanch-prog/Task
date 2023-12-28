document.addEventListener("DOMContentLoaded", function() {
    // Get the current page URL
    var currentURL = window.location.href;

    // Get all navigation links
    var navLinks = document.querySelectorAll('.nav-item a');

    // Loop through each link and check if its href matches the current URL
    navLinks.forEach(function(link) {
        if (link.href === currentURL) {
            link.parentElement.classList.add('active'); // Add 'active' class to parent li
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