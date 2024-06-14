document.addEventListener("DOMContentLoaded", function() {
    // Get the last modified date of the HTML file
    const lastModified = new Date(document.lastModified);
    const currentYear = new Date().getFullYear();

    document.getElementById("lastModified").innerText = formatDate(lastModified);
    document.getElementById("currentYear").innerText = currentYear;

    // Increment and display the visit count
    incrementVisitCount();

    // Hamburger Menu functionality
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const navigation = document.querySelector(".navigation");

    hamburgerMenu.addEventListener("click", () => {
        navigation.classList.toggle("show-menu");
    });

    // Dark mode functionality
    const modeButton = document.querySelector("#darkMode");
    const main = document.querySelector("main");

    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("😎")) {
            main.style.background = "#000";
            main.style.color = "#fff";
            modeButton.textContent = "🔆";
        } else {
            main.style.background = "#eee";
            main.style.color = "#000";
            modeButton.textContent = "😎";
        }
    });

    // Display visit message
    displayVisitMessage();
});

// Function to format the date in a readable format
function formatDate(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
}

// Function to increment and display the visit count
function incrementVisitCount() {
    let numVisits = Number(localStorage.getItem("numVisits")) || 0;
    localStorage.setItem("numVisits", ++numVisits);

    const visitMessage = document.getElementById("visitMessage");
    if (visitMessage) {
        if (numVisits > 1) {
            visitMessage.textContent = `You have visited this page ${numVisits} times.`;
        } else {
            visitMessage.textContent = `Welcome to the Chamber!`;
        }
    }
}

// Function to display the visit message
function displayVisitMessage() {
    const visitMessage = document.createElement("p");
    visitMessage.id = "visitMessage";
    document.querySelector("main").prepend(visitMessage);
}

function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        const date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/; SameSite=Lax; Secure";
}

function getCookie(name) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
