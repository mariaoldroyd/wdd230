document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;  
    // Update last modified date
    const lastModifiedSpan = document.getElementById('lastModified');
    const lastModified = document.lastModified;
    lastModifiedSpan.textContent = lastModified;  
    // Visit counter
    const visitCountSpan = document.getElementById('visitCount');
    let visitCount = localStorage.getItem('visitCount');
    if (!visitCount) {
      visitCount = 0;
    }
    visitCount++;
    localStorage.setItem('visitCount', visitCount);
    visitCountSpan.textContent = visitCount;
  });
  
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburgerMenu.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.addEventListener('DOMContentLoaded', () => {
      // Update current year
      const yearSpan = document.getElementById('currentYear');
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;    
      // Update last modified date
      const lastModifiedSpan = document.getElementById('lastModified');
      const lastModified = document.lastModified;
      lastModifiedSpan.textContent = lastModified;    
      // Visit counter
      const visitCountSpan = document.getElementById('visitCount');
      let visitCount = localStorage.getItem('visitCount');
      if (!visitCount) {
        visitCount = 0;
      }
      visitCount++;
      localStorage.setItem('visitCount', visitCount);
      visitCountSpan.textContent = visitCount;
    });

    document.addEventListener('DOMContentLoaded', () => {
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
  });


  
