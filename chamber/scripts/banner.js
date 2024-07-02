console.log("Banner script loaded");

document.addEventListener("DOMContentLoaded", function () {
    console.log("DOM fully loaded and parsed");

    const bannerContainer = document.getElementById("banner-container");
    console.log("Banner container:", bannerContainer);

    const today = new Date();
    const dayOfWeek = today.getDay();
    console.log("Day of the week:", dayOfWeek);

    if (dayOfWeek === 1 || dayOfWeek === 2) { // 1 = Monday, 2 = Tuesday
        const banner = document.createElement("div");
        banner.id = "banner";
        banner.classList.add("banner");
        banner.innerHTML = `
            <p><strong>Join us for Chamber Meet and Greet Wednesday at 6:00 p.m.</strong></p>
            <button id="closeBanner">X</button>
        `;

        bannerContainer.appendChild(banner);
        console.log("Banner appended");

        const closeBannerButton = banner.querySelector("#closeBanner");
        console.log("Close banner button:", closeBannerButton);

        if (closeBannerButton) {
            closeBannerButton.addEventListener("click", function () {
                console.log("Close button clicked");
                banner.style.display = "none";
            });
        } else {
            console.error("Close banner button not found");
        }
    }
});
 

document.addEventListener("DOMContentLoaded", function() {
    // Fetch company data
    fetch('data/members.json')
        .then(response => response.json())
        .then(data => {
            const spotlightsContainer = document.getElementById('spotlights');
            // Select first three companies
            const companies = data.slice(0, 3);
            // Create HTML for each company and append to spotlights container
            companies.forEach(company => {
                const spotlightDiv = document.createElement('div');
                spotlightDiv.classList.add('spotlight');
                spotlightDiv.innerHTML = `
                    <img src="${company.image}" alt="${company.name}">
                    <h4>${company.name}</h4>
                    <p>${company.description}</p>
                `;
                spotlightsContainer.appendChild(spotlightDiv);
            });
        })
        .catch(error => console.error('Error fetching company data:', error));
});
