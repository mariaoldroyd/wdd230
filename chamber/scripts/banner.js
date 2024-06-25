document.addEventListener('DOMContentLoaded', () =>{
    const today = new Date().getDay();
    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerhtml = `
    <p>Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
    <button class="close-banner" aria-label="Close banner">❌</button>`;

        // 1= Monday, 2 = tuesday, 3 = Wednesday
    if (today ===1 || today === 2 || today === 3) {
        document.body.insertBefore(banner, document.body.firstChild);
    }

    document.querySelector('.close-banner').addEventListener('click', () =>{
        banner.style.display = 'none';
    });
});