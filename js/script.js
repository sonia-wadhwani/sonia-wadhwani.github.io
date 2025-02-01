document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    let images = Array.from(document.querySelectorAll(".carousel-item"));
    let imagesPerView = 3;
    let isMobile = false;
    let isScrolling = false;

    function adjustImageSize() {
        const containerWidth = window.innerWidth * 0.9; // 5% margin on both sides
        const spacing = containerWidth * 0.05; // 5% spacing between images
        imagesPerView = window.innerWidth <= 600 ? 1 : 3;
        isMobile = window.innerWidth <= 600;

        const imageWidth = (containerWidth - spacing * (imagesPerView - 1)) / imagesPerView;

        images.forEach(img => {
            img.style.width = `${imageWidth}px`;
            img.style.marginRight = `${spacing}px`;
        });

        // Clone first and last images for infinite loop effect
        const firstClone = images[0].cloneNode(true);
        const lastClone = images[images.length - 1].cloneNode(true);
        track.appendChild(firstClone);
        track.insertBefore(lastClone, images[0]);

        images = Array.from(document.querySelectorAll(".carousel-item"));
        updateCarousel(true);
    }

    function updateCarousel(noTransition = false) {
        const imageWidth = images[1].getBoundingClientRect().width;
        const spacing = imageWidth * 0.05;
        const totalWidth = imageWidth + spacing;

        if (noTransition) {
            track.style.transition = "none";
        } else {
            track.style.transition = "transform 0.5s ease-in-out";
        }

        track.style.transform = `translateX(${-imagesPerView * totalWidth}px)`;
    }

    function shiftImages(direction) {
        if (isScrolling) return;
        isScrolling = true;

        const imageWidth = images[1].getBoundingClientRect().width;
        const spacing = imageWidth * 0.05;
        const totalWidth = imageWidth + spacing;

        if (direction === "down") {
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(${-totalWidth * (imagesPerView + 1)}px)`;
        } else if (direction === "up") {
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(${-totalWidth * (imagesPerView - 1)}px)`;
        }

        setTimeout(() => {
            if (direction === "down") {
                track.appendChild(track.firstElementChild);
            } else if (direction === "up") {
                track.insertBefore(track.lastElementChild, track.firstElementChild);
            }
            track.style.transition = "none";
            track.style.transform = `translateX(${-imagesPerView * totalWidth}px)`;
            isScrolling = false;
        }, 500);
    }

    window.addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
            shiftImages("down");
        } else {
            shiftImages("up");
        }
    });

    let startY;
    window.addEventListener("touchstart", (event) => {
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", (event) => {
        let endY = event.changedTouches[0].clientY;
        if (startY > endY) {
            shiftImages("down");
        } else {
            shiftImages("up");
        }
    });

    adjustImageSize();
    window.addEventListener("resize", adjustImageSize);
});
