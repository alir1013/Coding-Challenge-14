//Task 2:Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const api = "https://jsonplaceholder.typicode.com/posts";
    const errorMessage = document.getElementById("error-message");

    try {
        const response = await fetch(api);
        
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const tickets = await response.json();

        if (tickets.length === 0) {
            throw new Error("Tickets could not be found.");
        }

        displayTickets(tickets);

    } catch (error) {
        errorMessage.style.display = "Error fetching data";
        errorMessage.textContent = error.message;
    }
}

fetchTickets();


