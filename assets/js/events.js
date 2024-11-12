// Function to load and display events
async function loadEvents() {
        try {
            const response = await fetch('events.json');
            const events = await response.json();
            const eventContainer = document.getElementById('eventContainer');

            // Clear any existing content in eventContainer
            eventContainer.innerHTML = '';

            // Populate the events
            events.forEach(event => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');
                eventCard.dataset.category = event.title.toLowerCase().replace(/\s+/g, '');

                eventCard.innerHTML = `
                    <h3>${formatDate(event.date)}</h3>
                    <img src="${event.image}" alt="${event.title}" />
                    <h2>${event.title}</h2>
                    <p>${event.description}</p>
                    <button class="event-button" onclick="redirectToEventDetails('${event.id}')">Bekijk event</button>
                `;
                
                eventContainer.appendChild(eventCard);
            });
        } catch (error) {
            console.error("Error loading events:", error);
        }
    }

    // Helper function to format dates
    function formatDate(date) {
        const [day, month, year] = date.split('-');
        const dateObj = new Date(`${year}-${month}-${day}`);
        return dateObj.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'numeric' }).toUpperCase();
    }

    // Initial load
loadEvents();
