const d = new Date();
const y = d.getFullYear();
const copyright_info = document.querySelector("#year");
copyright_info.innerHTML = `&copy ${y} Maria Oldroyd Texas`;

const modified = document.querySelector("#lastModified");
last_modified = document.lastModified;
modified.innerHTML = `Last Modified: ${last_modified}`;

// this is the code for the Hamburger menu

const hamButton = document.querySelector('#menu');
const nav = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    nav.classList.toggle('open');
    hamButton.classList.toggle('open');
});




