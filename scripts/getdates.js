

    // Get the last modified date of the HTML file
    alert(document.lastModified);
    const lastModified = new Date(document.lastModified);

    // Populate the last modified date in the designated element
    document.getElementById("lastModified").innerText = formatDate(lastModified);

    

    const hamburgerMenu = document.querySelector('#hamburger-menu');
    const navigation = document.querySelector('.navigation');

    // Add event listener to the hamburger icon
    hamburgerMenu.addEventListener('click' () ,{
        // Toggle the visibility of the main menu items
        navigation,classList.toggle('show')
        .hamburgerMenu.classList.toggle('show')
    });



