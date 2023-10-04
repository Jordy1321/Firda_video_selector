document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("video");
    const backButton = document.getElementById("back-button");
    const fullscreenButton = document.getElementById("fullscreen-button");
    const replayButton = document.getElementById("replay-button");
    const backHomeButton = document.getElementById("back-home-button");
    const menu = document.querySelector(".menu");

    // Play video in full screen after 5 seconds
    setTimeout(function () {
        video.play();
        video.requestFullscreen().catch(err => {
            console.error("Fullscreen error:", err);
        });
    }, 5000);

    // Show the menu when the video ends
    video.addEventListener("ended", function () {
        menu.style.display = "block";
        replayButton.style.display = "inline-block";
        backHomeButton.style.display = "inline-block";
    });

    // Replay the video
    replayButton.addEventListener("click", function () {
        video.currentTime = 0;
        video.play();
        menu.style.display = "none";
    });

    // Back to home page
    backButton.addEventListener("click", function () {
        window.location.href = "../index.html";
    });

    // Hide the back button after the video ends
    video.addEventListener("ended", function () {
        backButton.style.display = "none";
    });
});
