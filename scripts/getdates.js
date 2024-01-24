const d = new Date();
const y = d.getFullYear();
const copyright_info = document.querySelector("#year");
copyright_info.innerHTML = `&copy ${y} Maria Oldroyd Texas`;

const modified =document.querySelector("#lastModified");
last_modified = document.lastModified;
modified.innerHTML = `Last Modified: ${last_modified}`;


document.addEventListener('DOMContentLoaded',()=> {
    const hamButton = document.querySelector('.menu');
    const nav = document.querySelector('.nav');
})
    
    hamButton.addEventListener('click',() =>{
      nav.classList.toggle('active');
      hamButton.classList.toggle('active');
    })

    // Close the menu when a menu item is clicked
    document.querySelector('nav a').forEach(item => {
      item.addEventListener('click', () => {
        nav.classList.remove('active');
        menuIcon.classList.remove('active');
      });
    });
    
