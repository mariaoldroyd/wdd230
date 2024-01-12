const d = new Date();
console.log(d) 
const y = d.getFullYear();
console.log(y)

const copyright_info = document.querySelector("#year");
copyright_info.innerHTML =` &copy ${y} Maria Oldroyd Texas`;