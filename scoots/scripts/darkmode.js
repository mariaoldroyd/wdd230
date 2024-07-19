document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.querySelector('header').classList.toggle('dark-mode');
    document.querySelector('footer').classList.toggle('dark-mode');
    document.querySelector('.nav-links a').classList.toggle('dark-mode');
    document.querySelector('.hero img').classList.toggle('dark-mode');
}); 

function closeMessage() {
    document.getElementById('high-temp-message').style.display = 'none';
}
document.getElementById('dark-mode-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

function closeMessage() {
    document.getElementById('high-temp-message').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
    const swapBtn = document.querySelector('#dark-mode-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    let dark = JSON.parse(localStorage.getItem('animated-icons-darkmode')) || false;
    if (dark) {
        document.body.classList.add('dark-mode');
    }

    swapBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        dark = !dark;
        localStorage.setItem('animated-icons-darkmode', JSON.stringify(dark));
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const swapBtn = document.querySelector('#swap-btn');
    const container = document.querySelector('#container');
    const icons = document.querySelector('#icons');
    const navLinks = document.querySelectorAll('.nav-links a');

    // Get data stored in localStorage and set up app
    let dark = JSON.parse(localStorage.getItem('animated-icons-darkmode')) || false;
    if (dark) {
        document.body.classList.add('dark-mode');
        container.classList.add('dark-mode');
        swapBtn.textContent = 'Switch to Light Mode';
        icons.style.setProperty('--rotation', 180);
    }

    // Event listener on button
    swapBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        container.classList.toggle('dark-mode');
        const rotation = parseInt(getComputedStyle(icons).getPropertyValue('--rotation'));
        icons.style.setProperty('--rotation', rotation + 180);
        dark = !dark;
        if (dark) {
            swapBtn.textContent = 'Switch to Light Mode';
        } else {
            swapBtn.textContent = 'Switch to Dark Mode';
        }
        localStorage.setItem('animated-icons-darkmode', JSON.stringify(dark));
    });
});
