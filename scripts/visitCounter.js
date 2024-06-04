// Get the current visit count from localStorage
let visitCount = localStorage.getItem('visitCount');

// If visitCount is null, initialize it to 0
if (visitCount === null) {
    visitCount = 0;
} else {
    // Convert visitCount to a number
    visitCount = parseInt(visitCount);
}

// Increment the visit count
visitCount += 1;

// Update the visit count in localStorage
localStorage.setItem('visitCount', visitCount);

// Display the visit count on the page
document.getElementById('visitCount').textContent = visitCount;
