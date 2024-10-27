const menu = document.getElementById('menu');
const hamburger = document.querySelector('.hamburger-container');

hamburger.addEventListener('click', () => {
    const hamburgerIcon = document.querySelector('.hamburger');
    // Toggle the active class on both hamburger and menu
    hamburgerIcon.classList.toggle('active');
    menu.classList.toggle('active');
});

document.addEventListener('click', function(event) {
    // Close the menu if you click outside the menu or the hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        const hamburgerIcon = document.querySelector('.hamburger');
        menu.classList.remove('active'); // Close the menu
        hamburgerIcon.classList.remove('active'); // Reset the hamburger to default
    }
});
