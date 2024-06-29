document.addEventListener('DOMContentLoaded', () => {
    const today = new Date().getDay();
    const banner = document.createElement('div');
    banner.className = 'banner';
    banner.innerHTML = `
    <p>Join us for the Chamber of Commerce meet and greet on Wednesday at 7:00 p.m.</p>
    <button class="close-banner" aria-label="Close banner">❌</button>`;

        // 1= Monday, 2 = tuesday, 3 = Wednesday
        if (today === 1 || today === 2 || today === 3) {
            const bannerContainer = document.getElementById('banner-container');
            if (bannerContainer) {
                bannerContainer.appendChild(banner);
            }
    
            document.querySelector('.close-banner').addEventListener('click', () => {
                banner.style.display = 'none';
            });
        }
    });

     // Function to make the events scroll
     function scrollEvents() {
        const eventsWrapper = document.getElementById('eventsWrapper');
        const firstEvent = eventsWrapper.firstElementChild;
        const eventHeight = firstEvent.offsetHeight;
        eventsWrapper.style.transition = 'transform 4s linear';
        eventsWrapper.style.transform = `translateY(-${eventHeight}px)`;

        // After the transition, move the first event to the bottom and reset transform
        setTimeout(() => {
            eventsWrapper.style.transition = 'none';
            eventsWrapper.style.transform = 'none';
            eventsWrapper.appendChild(firstEvent);
        }, 1000);
    }

    // Scroll events every 2 seconds
    setInterval(scrollEvents, 2000);