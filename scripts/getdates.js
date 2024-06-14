

document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified date of the HTML file
    const lastModified = new Date(document.lastModified);
const currentyear = new Date().getFullYear();

    
    document.getElementById("lastModified").innerText = formatDate(lastModified);
    document.getElementById("currentYear").innerText = currentyear;

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

const modeButton = document.querySelector("#darkMode");
const main = document.querySelector("main");

modeButton.addEventListener("click", () => {
	if (modeButton.textContent.includes("🕶️")) {
		main.style.background = "#000";
		main.style.color = "#fff";
		modeButton.textContent = "🔆";
	} else {
		main.style.background = "#eee";
		main.style.color = "#000";
		modeButton.textContent = "🕶️";
	}
});

function updateRating(value) {
    document.getElementById('ratingValue').textContent = value;
}

document.querySelector('form').addEventListener('submit', function(e) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('password-confirm').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match. Please try again.');
        document.getElementById('password').value = '';
        document.getElementById('password-confirm').value = '';
        document.getElementById('password').focus();
        e.preventDefault();
    }
});




