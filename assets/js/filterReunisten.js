document.addEventListener('DOMContentLoaded', function () {
    // Fetch events from JSON file and generate event cards dynamically
    fetch('events.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(events => {
            const eventContainer = document.getElementById('eventContainer');

            // Generate event cards
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.setAttribute('data-category', event.category);

                eventCard.innerHTML = `
                    <h3>${new Date(event.date).toLocaleDateString('nl-NL')}</h3>
                    <img src="${event.image}" alt="${event.title}" />
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <button class="event-button" onclick="redirectToEventDetails('${event.id}')">Bekijk event</button>
                `;
                eventContainer.appendChild(eventCard);
            });

            // Automatically filter on "reunisten"
            filterEvents('reunisten');
        })
        .catch(error => console.error('Error fetching events:', error));
});

// Function to filter events based on category
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

// Function to redirect to event details
function redirectToEventDetails(eventId) {
    // Replace with your redirection logic
    console.log('Redirect to event with ID:', eventId);
}