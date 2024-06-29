document.addEventListener("DOMContentLoaded", function () {
    const bannerContainer = document.getElementById("banner-container");

    const today = new Date();
    const dayOfWeek = today.getDay(); 

    if (dayOfWeek === 1 || dayOfWeek === 2) { // 1 = Monday, 2 = Tuesday
        const banner = document.createElement("div");
        banner.id = "banner";
        banner.classList.add("banner");
        banner.innerHTML = `
            <p><strong>Join us for Chamber Meet and Greet Wednesday at 6:00 p.m.</strong></p>
            <button id="closeBanner">X</button>
        `;

        bannerContainer.appendChild(banner);

        const closeBannerButton = document.getElementById("closeBanner");
        closeBannerButton.addEventListener("click", function () {
            banner.style.display = "none";
        });
    }
});


   