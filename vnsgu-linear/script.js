

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', updateTimer);
// Function to make the timer count down
function updateTimer() {
    // Start with the initial remaining time (e.g., 1 hour, 50 minutes, 26 seconds)
    // You can adjust these values if needed
    let hours = 1;
    let minutes = 50;
    let seconds = 26;

    let totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    // Get the display elements from the HTML
    const hoursElement = document.querySelector('.timer-display .time-segment:nth-child(1) .time-value');
    const minutesElement = document.querySelector('.timer-display .time-segment:nth-child(3) .time-value');
    const secondsElement = document.querySelector('.timer-display .time-segment:nth-child(5) .time-value');

    function tick() {
        if (totalSeconds <= 0) {
            // Stop the timer and display EXPIRED
            hoursElement.textContent = 'EX';
            minutesElement.textContent = 'PI';
            secondsElement.textContent = 'RED';
            clearInterval(interval); 
            return;
        }

        // Calculate and format the time
        const h = Math.floor(totalSeconds / 3600);
        const m = Math.floor((totalSeconds % 3600) / 60);
        const s = totalSeconds % 60;

        // Update the HTML elements
        hoursElement.textContent = String(h).padStart(2, '0');
        minutesElement.textContent = String(m).padStart(2, '0');
        secondsElement.textContent = String(s).padStart(2, '0');

        totalSeconds--; // Decrease total seconds by 1
    }

    // Run the tick function immediately and then every 1000 milliseconds (1 second)
    tick(); 
    const interval = setInterval(tick, 1000);
}

// Start the timer when the page loads
document.addEventListener('DOMContentLoaded', updateTimer);
// Function to update the ticket's "Purchased On" date and time
function updateTicketDateTime() {
    // Get the current time and date
    const now = new Date();

    // Options for formatting the date (e.g., "01 Oct 2025")
    const dateOptions = { day: '2-digit', month: 'short', year: 'numeric' };
    
    // Options for formatting the time (e.g., "01:43 PM")
    const timeOptions = { hour: '2-digit', minute: '2-digit', hour12: true };
    
    // Combine date and time into the desired format: "01 Oct 2025, 01:43 PM"
    const formattedDateTime = now.toLocaleDateString('en-GB', dateOptions) + 
                              ', ' + 
                              now.toLocaleTimeString('en-US', timeOptions);

    // Get the HTML element by its ID
    const dateTimeElement = document.getElementById('current-date-time-display');

    // Update the content if the element is found
    if (dateTimeElement) {
        dateTimeElement.textContent = formattedDateTime;
    }
}


// --- INTEGRATION ---
// 1. Run the update immediately when the page loads
document.addEventListener('DOMContentLoaded', updateTicketDateTime); 

// 2. You may also want it to update every minute, though once on load is usually enough 
//    for a "purchased on" timestamp. If you want it live, uncomment the line below:
// setInterval(updateTicketDateTime, 60000); // Updates every 60 seconds (1 minute)


// (Keep your existing updateTimer function and its DOMContentLoaded listener for the countdown timer)
// ...