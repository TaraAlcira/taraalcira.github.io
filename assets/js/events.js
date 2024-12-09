    // Helper function to format dates
    function formatDate(date) {
        const [day, month, year] = date.split('-');
        const dateObj = new Date(`${year}-${month}-${day}`);
        return dateObj.toLocaleDateString('nl-NL', { weekday: 'short', day: 'numeric', month: 'numeric' }).toUpperCase();
    }

    // Initial load
loadEvents();
