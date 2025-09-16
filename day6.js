// Step 1: Select the necessary DOM elements
const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

// Step 2: Define the function to fetch a new quote
function getNewQuote() {
    // We are now using the original API that we know works with Live Server
    const apiUrl = 'https://api.quotable.io/random';

    // Disable the button to prevent multiple rapid clicks
    newQuoteBtn.disabled = true;
    newQuoteBtn.textContent = 'Loading...';

    // Use fetch() to make an API call
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Update the DOM elements with the new quote and author
            quoteElement.textContent = data.content;
            authorElement.textContent = `- ${data.author}`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            quoteElement.textContent = 'Failed to load a quote. Please try again.';
            authorElement.textContent = '';
        })
        .finally(() => {
            // Re-enable the button regardless of success or failure
            newQuoteBtn.disabled = false;
            newQuoteBtn.textContent = 'New Quote';
        });
}

// Step 3: Add a click event listener to the button
newQuoteBtn.addEventListener('click', getNewQuote);

// Optional: Fetch a quote on page load
document.addEventListener('DOMContentLoaded', getNewQuote);