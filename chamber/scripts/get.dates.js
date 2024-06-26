document.addEventListener('DOMContentLoaded', () => {
  // Update current year
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
      const currentYear = new Date().getFullYear();
      yearSpan.textContent = currentYear;
  }

  // Update last modified date
  const lastModifiedSpan = document.getElementById('lastModified');
  if (lastModifiedSpan) {
      const lastModified = document.lastModified;
      lastModifiedSpan.textContent = lastModified;
  }

  // Visit counter
  const visitCountSpan = document.getElementById('visitCount');
  if (visitCountSpan) {
      let visitCount = localStorage.getItem('visitCount');
      if (!visitCount) {
          visitCount = 0;
      }
      visitCount++;
      localStorage.setItem('visitCount', visitCount);
      visitCountSpan.textContent = visitCount;
  }
});


  // Hamburger menu
  const hamburgerMenu = document.getElementsByClassName('hamburger-menu')[0];
  const navLinks = document.querySelector('.nav-links');
  if (hamburgerMenu && navLinks) {
      hamburgerMenu.addEventListener('click', () => {
          navLinks.classList.toggle('active');
      });
    }
   