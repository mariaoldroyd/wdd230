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
  }, 4000); // Match the setInterval duration
}

let intervalId = setInterval(scrollEvents, 5000);

// Stop the interval and restart it to prevent overlapping
function resetScrollInterval() {
  clearInterval(intervalId);
  intervalId = setInterval(scrollEvents, 5000);
}

// Call scrollEvents initially to start the scroll
scrollEvents();
resetScrollInterval();