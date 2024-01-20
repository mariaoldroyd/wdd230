const d = new Date();
const y = d.getFullYear();
const copyright_info = document.querySelector("#year");
copyright_info.innerHTML = `&copy ${y} Maria Oldroyd Texas`;

const modified =document.querySelector("#lastModified");
last_modified = document.lastModified;
modified.innerHTML = `Last Modified: ${last_modified}`;
