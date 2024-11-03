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

//Task 3:Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    const container = document.getElementById("support-tickets-container");
    container.innerHTML = ''; 

    tickets.forEach(ticket => {
        const ticketDisplay = document.createElement("div");
        ticketDisplay.classList.add("ticket");

        ticketDisplay.innerHTML = `
            <h3>Ticket ID: ${ticket.id}</h3>
            <p>Customer Name:User ${ticket.userId}</p>
            <p>Issue Description:${ticket.title}</p>
            <p>Details:${ticket.body}</p>
        `;

        container.appendChild(ticketDisplay);
    });
}

