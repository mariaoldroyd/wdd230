document.addEventListener('DOMContentLoaded', () => {
  let darkMode = localStorage.getItem('darkMode');
  const darkModeToggle = document.querySelector('#dark-mode-toggle');

  const enableDarkMode = () => {
      document.body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'enabled');
  };

  const disableDarkMode = () => {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'disabled');
  };

  if (darkMode === 'enabled') {
      enableDarkMode();
  }

  darkModeToggle.addEventListener('click', () => {
      darkMode = localStorage.getItem('darkMode');
      if (darkMode !== 'enabled') {
          enableDarkMode();
      } else {
          disableDarkMode();
      }
  });
});
