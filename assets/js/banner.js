function updateBannerForScreenSize() {
    const iframeContainer = document.getElementById("iframe-container");
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    // Replace iframe content based on screen size
    if (isMobile) {
        iframeContainer.innerHTML = `
            <iframe src="https://player.vimeo.com/video/1037793710?badge=0&autopause=0&player_id=0&app_id=58479/embed"
                allow="autoplay; fullscreen; picture-in-picture" allowfullscreen frameborder="0"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        `;
        iframeContainer.style.padding = "177.78% 0 0 0";
    } else {
        iframeContainer.innerHTML = `
            <iframe src="https://player.vimeo.com/video/1022964755?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479?autoplay=1&loop=1&background=1"
                frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                style="position:absolute;top:0;left:0;width:100%;height:100%;"></iframe>
        `;
        iframeContainer.style.padding = "56.25% 0 0 0";
    }
}

// Run on load and resize
updateBannerForScreenSize();
window.addEventListener("resize", updateBannerForScreenSize);
