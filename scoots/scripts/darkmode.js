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
