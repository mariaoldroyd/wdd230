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
