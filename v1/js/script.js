document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".carousel-track");
    let images = Array.from(document.querySelectorAll(".carousel-item"));
    let imagesPerView = 3;
    let isMobile = false;
    let isScrolling = false;
    let scrollTimeout;

    // Adjust image size and layout based on the screen width
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

        // Reset the track to start from the original images
        resetCarousel();
    }

    // Reset carousel by removing clones and repositioning the track
    function resetCarousel() {
        const firstClone = images[0].cloneNode(true);
        const lastClone = images[images.length - 1].cloneNode(true);

        // Remove any existing clones
        if (track.querySelector(".carousel-item-clone")) {
            track.querySelector(".carousel-item-clone").remove();
        }

        track.appendChild(firstClone);
        track.insertBefore(lastClone, images[0]);

        images = Array.from(document.querySelectorAll(".carousel-item"));
        track.style.transition = "none"; // Disable transition during reset
        track.style.transform = `translateX(0)`;
    }

    // Shift images based on scroll direction (down or up)
    function shiftImages(direction) {
        if (isScrolling) return; // Prevent multiple scrolls at once
        isScrolling = true;

        const imageWidth = images[1].getBoundingClientRect().width;
        const spacing = imageWidth * 0.05;
        const totalWidth = imageWidth + spacing;

        if (direction === "down") {
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(${-totalWidth}px)`; // Scroll 1 image at a time
        } else if (direction === "up") {
            track.style.transition = "transform 0.5s ease-in-out";
            track.style.transform = `translateX(${totalWidth}px)`; // Scroll 1 image at a time
        }

        setTimeout(() => {
            // Move the first image to the end or vice versa to create a seamless loop
            if (direction === "down") {
                track.appendChild(track.firstElementChild); // Move the first to last
            } else if (direction === "up") {
                track.insertBefore(track.lastElementChild, track.firstElementChild); // Move the last to first
            }
            track.style.transition = "none"; // Reset transition to immediate movement
            track.style.transform = `translateX(0)`; // Reset to show the next set of images
            isScrolling = false; // Allow scrolling again
        }, 500); // Time matching the transition duration
    }

    // Handle scroll events (down and up)
    window.addEventListener("wheel", (event) => {
        // Clear the previous timeout to reset debounce
        clearTimeout(scrollTimeout);

        // Debounce scroll to allow only one action at a time
        scrollTimeout = setTimeout(() => {
            if (event.deltaY > 0) {
                shiftImages("down");
            } else {
                shiftImages("up");
            }
        }, 150); // Delay of 150ms to wait for the scroll movement to settle
    });

    // Handle touch swipe on mobile
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

    // Initialize the page and adjust image sizes
    adjustImageSize();
    window.addEventListener("resize", adjustImageSize);
});
