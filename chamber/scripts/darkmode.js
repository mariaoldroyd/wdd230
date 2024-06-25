document.addEventListener('DOMContentLoaded', () => {
let darkMode = localStorage.getItem('darkMode');
const darkModeToggle = document.querySelector('#dark-mode-toggle');

//enable dark mode//
const enableDarkMode = () => {
  document.body.classList.add('darkMode');
  localStorage.setItem('darkMode', 'enabled');
};

const disableDarkMode = () => {
  document.body.classList.remove('darkMode');
  localStorage.setItem('darkMode', 'null');
};

if (darkMode === 'enabled') {
    enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== 'enabled') {
    enableDarkMode();
  
  } else{
    disableDarkMode();
       }
    });
});

function toggleDarkMode() {
  document.body.classList.toggle('darkMode');
}
  