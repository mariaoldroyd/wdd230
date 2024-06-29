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