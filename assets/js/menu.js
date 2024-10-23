const menu = document.getElementById('menu');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    console.log("Hamburger clicked!"); // Check this message in the console
    menu.classList.toggle('active');
});


document.addEventListener('click', function(event) {
    // Close the menu if you click outside the menu or the hamburger
    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove('active'); // Close the menu
    }
});