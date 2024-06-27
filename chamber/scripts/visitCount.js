document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('darkMode').addEventListener('click', function() {
        document.body.classList.toggle('darkMode');
    });

    document.getElementById('hamburger-menu').addEventListener('click', function() {
        document.querySelector('.navigation').classList.toggle('open');
    });

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

    const visitMessage = document.getElementById('visitMessage');
    const currentDate = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');
    
    if (!lastVisit) {
        visitMessage.textContent = "Welcome! Let us know if you have any questions.";
    } else {
        const daysSinceLastVisit = Math.floor((currentDate - lastVisit) / (1000 * 60 * 60 * 24));
        
        if (daysSinceLastVisit < 1) {
            visitMessage.textContent = "Back so soon! Awesome!";
        } else if (daysSinceLastVisit === 1) {
            visitMessage.textContent = "You last visited 1 day ago.";
        } else {
            visitMessage.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
        }
    }

    localStorage.setItem('lastVisit', currentDate);

    const calendar = document.getElementById('calendar');
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    // Display the current month and year
    const header = document.createElement('div');
    header.classList.add('header');
    header.style.gridColumn = "span 7";
    header.textContent = `${months[month]} ${year}`;
    calendar.appendChild(header);

    // Display days of the week
    daysOfWeek.forEach(day => {
        const dayOfWeek = document.createElement('div');
        dayOfWeek.classList.add('header');
        dayOfWeek.textContent = day;
        calendar.appendChild(dayOfWeek);
    });

    // Get the first day of the month
    const firstDay = new Date(year, month, 1).getDay();

    // Get the number of days in the month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Fill in the days of the month
    for (let i = 0; i < firstDay; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.classList.add('day');
        calendar.appendChild(emptyCell);
    }

    for (let day = 1; day <= daysInMonth; day++) {
        const dayCell = document.createElement('div');
        dayCell.classList.add('day');
        dayCell.textContent = day;
        if (day === today.getDate()) {
            dayCell.classList.add('today');
        }
        calendar.appendChild(dayCell);
    }
});
