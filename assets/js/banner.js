const videoSource = document.getElementById('video-source');

function updateVideoSource() {
    if (window.innerWidth <= 768) {
        // Mobile version
        videoSource.src = 'images/vid_mobile_logo.mp4'; // Change to your mobile video file
    } else {
        // Desktop version
        videoSource.src = 'images/vid_logo.mp4'; // Change to your desktop video file
    }
    // Load the new video source
    const video = document.getElementById('banner-video');
    video.load();
}

// Check on page load
updateVideoSource();
// Check on resize
window.addEventListener('resize', updateVideoSource);
