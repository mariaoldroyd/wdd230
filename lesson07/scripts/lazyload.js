document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified date of the HTML file
    const lastModified = new Date(document.lastModified);
const currentyear = new Date().getFullYear();

    
    document.getElementById("lastModified").innerText = formatDate(lastModified);
    document.getElementById("currentYear").innerText = currentyear;
