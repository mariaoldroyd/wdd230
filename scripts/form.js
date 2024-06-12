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

document.getElementById('currentYear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;