function scrollEvents() {
  const eventsWrapper = document.getElementById('eventsWrapper');
  const eventHeight = eventsWrapper.firstElementChild.offsetHeight;
  eventsWrapper.style.transition = 'transform 2s linear';
  eventsWrapper.style.transform = `translateY(-${eventHeight}px)`;

  // After the transition, move the first event to the bottom and reset transform
  setTimeout(() => {
      eventsWrapper.style.transition = 'none';
      eventsWrapper.style.transform = 'none';
      eventsWrapper.appendChild(eventsWrapper.firstElementChild);
  }, 2000); // Match the setInterval duration
}

// Scroll events every 2 seconds
setInterval(scrollEvents, 2000);