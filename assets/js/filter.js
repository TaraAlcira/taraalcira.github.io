function filterEvents(category) {
    const events = document.querySelectorAll('.event-card');

    events.forEach(event => {
        if (category === 'all' || event.getAttribute('data-category') === category) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
}