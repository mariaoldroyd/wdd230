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