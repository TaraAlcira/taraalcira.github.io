// Helper function to parse dates in "dd-mm-yyyy" format
function parseDate(dateString) {
    if (!dateString || dateString.toLowerCase() === "tbd") return null; // Handle "TBD" or invalid dates
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`); // Convert to "yyyy-mm-dd" format
}

// Fetch events from JSON file and display the 3 most recent ones
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        const eventContainer = document.getElementById('eventContainer');

        // Filter and sort events by date
        const validEvents = events.filter(event => parseDate(event.date)); // Filter out "TBD" or invalid dates
        validEvents.sort((a, b) => parseDate(b.date) - parseDate(a.date)); // Sort descending by date

        // Get the 3 most recent events
        const recentEvents = validEvents.slice(0, 3);

        // Generate event cards
        recentEvents.forEach(event => {
            const eventCard = document.createElement('div');
            eventCard.classList.add('event-card');
            eventCard.setAttribute('data-category', event.category);

            eventCard.innerHTML = `
                <h3>${formatDate(event.date)}</h3>
                <img src="${event.image}" alt="${event.title}" />
                <h2>${event.title}</h2>
                <p>${event.description}</p>
                <button class="event-button" onclick="redirectToEventDetails('${event.id}')">Bekijk event</button>
            `;
            eventContainer.appendChild(eventCard);
        });
    })
    .catch(error => console.error('Error fetching events:', error));

// Function to format dates
function formatDate(dateString) {
    const date = parseDate(dateString);
    if (!date) return "TBA"; // Display "TBA" if the date is "TBD" or invalid
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('nl-NL', options);
}

// Function to redirect to event details
function redirectToEventDetails(eventId) {
    console.log('Redirect to event with ID:', eventId);
    // Replace with your redirection logic
}
