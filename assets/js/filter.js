// Helper function to parse dates in "dd-mm-yyyy" format
function parseDate(dateString) {
    if (!dateString || dateString.toLowerCase() === "tbd") return null; // Handle "TBD" or invalid dates
    const [day, month, year] = dateString.split('-');
    return new Date(`${year}-${month}-${day}`); // Convert to "yyyy-mm-dd" format
}

// Fetch events from JSON file and generate event cards dynamically
fetch('events.json')
    .then(response => response.json())
    .then(events => {
        const eventContainer = document.getElementById('eventContainer');
        
        // Sort events by date, placing TBD events at the end
        events.sort((a, b) => {
            const dateA = parseDate(a.date)?.getTime() || Infinity;
            const dateB = parseDate(b.date)?.getTime() || Infinity;
            return dateA - dateB;
        });

        // Generate event cards
        events.forEach(event => {
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
    if (!date) return "TBD"; // Handle "TBD" or invalid dates
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('nl-NL', options);
}

// Function to filter events based on category
function filterEvents(category) {
    const events = document.querySelectorAll('.event-card');

    events.forEach(event => {
        if (category === 'all' || event.getAttribute('data-category').includes(category)) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
}

// Function to redirect to event details
function redirectToEventDetails(eventId) {
    console.log('Redirect to event with ID:', eventId);
    // Replace with your redirection logic
}
