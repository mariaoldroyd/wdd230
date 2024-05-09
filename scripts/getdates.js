

document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified date of the HTML file
    const lastModified = new Date(document.lastModified);

    
    document.getElementById("lastModified").innerText = formatDate(lastModified);

   // Function to increment and display the visit count
function incrementVisitCount() {
    
    let visitCount = localStorage.getItem('visitCount');

    
    visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
   
    localStorage.setItem('visitCount', visitCount);

    
    document.getElementById('visitCount').innerText = visitCount;
}
window.onload = function() {
    incrementVisitCount();
};

    // Hamburger Menu functionality
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navigation = document.querySelector(".navigation");

    // Add event listener to the hamburger icon
    hamburgerMenu.addEventListener("click", () => {
        // Toggle the visibility of the navigation menu
        navigation.classList.toggle("show-menu");
    });
});

// Function to format the date in a readable format
function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}



