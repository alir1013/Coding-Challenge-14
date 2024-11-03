//Task 2:Fetch Tickets Using Async/Await and Handle Errors

async function fetchTickets() {
    const api = "https://jsonplaceholder.typicode.com/posts"; //API URL
    const errorMessage = document.getElementById("error-message");
    const loadingButton= document.getElementById("loading-button")  //Defining loading for "finally" block

    try {
        const response = await fetch(api);   //Fetching API
        
        if (!response.ok) {
            throw new Error(`Error Occured: ${response.status} - ${response.statusText}`);    //Error is thrown inside an async function
        }

        const tickets = await response.json();

        if (tickets.length === 0) {
            throw new Error("Tickets could not be found.");
        }

        displayTickets(tickets);

    } catch (error) {
        errorMessage.style.display = "Error fetching data";  //Showcases the error message 
        errorMessage.textContent = error.message;

    }finally {
    loadingButton.style.display = 'none'; //Task 4: Use finally to Ensure Cleanup
}}

fetchTickets();

//Task 3:Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    const container = document.getElementById("support-tickets-container");
    container.innerHTML = ''; 

    tickets.forEach(ticket => {
        const ticketDisplay = document.createElement("div");
        ticketDisplay.classList.add("ticket");
//Displaying detaisl for each unresolved ticket 
        ticketDisplay.innerHTML = `        
            <h3>Ticket ID: ${ticket.id}</h3>
            <p>Customer Name:User ${ticket.userId}</p>
            <p>Issue Description:${ticket.title}</p>
            <p>Details:${ticket.body}</p>
        `;

        container.appendChild(ticketDisplay);
    });
}

//Task 4: Use finally to Ensure Cleanup
//Added onto task two
