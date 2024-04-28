// Function to format the date as "Month Day, Year"
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Get the last modified date of the HTML file
const lastModified = new Date(document.lastModified);

// Populate the last modified date in the designated element
document.getElementById("lastModified").innerText = formatDate(lastModified);

// Get the current year and populate it in the designated element
document.getElementById("currentYear").innerText = new Date().getFullYear();

// Check if localStorage has the visit count
if (localStorage.getItem('visitCount')) {
    // Increment the visit count
    let visitCount = parseInt(localStorage.getItem('visitCount')) + 1;
    // Update the visit count in localStorage
    localStorage.setItem('visitCount', visitCount);
    // Populate the visit count in the designated element
    document.getElementById("visitCount").innerText = visitCount;
} else {
    // Set the visit count to 1 and store it in localStorage
    localStorage.setItem('visitCount', 1);
    // Populate the visit count in the designated element
    document.getElementById("visitCount").innerText = 1;
}