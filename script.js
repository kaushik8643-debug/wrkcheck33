// Select all anchor tags
const links = document.querySelectorAll('a');
let currentIndex = 0; // Start from the first link
const interval = 8000; // Time interval in milliseconds (3 seconds)
const closeDelay = 8000; // Time to keep the link open before closing (2 seconds)

function clickLinks() {
    if (currentIndex < links.length) {
        // Open the link programmatically in a new tab
        const newTab = window.open(links[currentIndex].href, '_blank');
        
        // Close the tab after the specified delay
        setTimeout(() => {
            if (newTab) newTab.close();
        }, closeDelay);

        // Move to the next link
        currentIndex++;
        
        // Set up the next click after the interval
        setTimeout(clickLinks, interval);
    } else {
        // Refresh the page once all links have been processed
        setTimeout(() => {
            location.reload();
        }, interval);
    }
}

// Start the loop
clickLinks();
