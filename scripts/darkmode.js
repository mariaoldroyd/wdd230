// Dark mode toggle
document.addEventListener('DOMContentLoaded', () => {
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const navLinks = document.querySelectorAll('.nav-links a');
    let dark = JSON.parse(localStorage.getItem('animated-icons-darkmode')) || false;

    if (dark) {
        document.body.classList.add('dark-mode');
        document.querySelector('header').classList.add('dark-mode');
        document.querySelector('footer').classList.add('dark-mode');
        navLinks.forEach(link => link.classList.add('dark-mode'));
    }

    darkModeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        document.querySelector('header').classList.toggle('dark-mode');
        document.querySelector('footer').classList.toggle('dark-mode');
        navLinks.forEach(link => link.classList.toggle('dark-mode'));
        dark = !dark;
        localStorage.setItem('animated-icons-darkmode', JSON.stringify(dark));
    });
});

function closeMessage() {
    document.getElementById('high-temp-message').style.display = 'none';
}
