const d = new Date();
const y = d.getFullYear();
const copyright_info = document.querySelector("#year");
copyright_info.innerHTML = `&copy ${y} Maria Oldroyd Texas`;

const modified = document.querySelector("#lastModified");
last_modified = document.lastModified;
modified.innerHTML = `Last Modified: ${last_modified}`;


document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const nav = document.querySelector('.navigation');

    hamButton.addEventListener('click', () => {
        nav.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

    // Corrected selector for navigation links
    document.querySelectorAll('.navigation a').forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('open');
            hamButton.classList.remove('open');
        });
    });
});

