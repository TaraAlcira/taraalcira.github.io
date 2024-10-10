window.addEventListener('scroll', () => {
    const currentScrollPosition = window.scrollY;

    if (currentScrollPosition > 0) {
        document.querySelector('.nav-bar').classList.add('nav-bar--scrolled');
    }

    if (currentScrollPosition > 700) {
        document.querySelector('.nav-bar').classList.add('nav-bar--hidden');
    }
    else {
        document.querySelector('.nav-bar').classList.remove('nav-bar--hidden');
    }
});
