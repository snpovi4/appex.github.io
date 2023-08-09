document.addEventListener("DOMContentLoaded", function () {
    // Play/Pause video
    var video = document.querySelector(".video-player video");
    var videoControls = document.querySelector(".video-controls");

    videoControls.addEventListener("click", function () {
        if (video.paused) {
            video.play();
            videoControls.classList.add("playing");
        } else {
            video.pause();
            videoControls.classList.remove("playing");
        }
    });

    // Swiper initialization
    var swiper = new Swiper(".swiper-container", {
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
