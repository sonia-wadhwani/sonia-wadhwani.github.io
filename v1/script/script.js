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

    // Shift images based on scroll direction
    function shiftImages(direction) {
        if (isScrolling) return; // Prevent multiple scrolls at once
        isScrolling = true;

        const imageWidth = images[1].getBoundingClientRect().width;
        const spacing = imageWidth * 0.05;
        const totalWidth = imageWidth + spacing;

        track.style.transition = "transform 0.5s ease-in-out"; // Smooth transition

        if (direction === "down" || direction === "right") {
            track.style.transform = `translateX(${-totalWidth}px)`;
        } else if (direction === "up" || direction === "left") {
            track.style.transform = `translateX(${totalWidth}px)`;
        }

        setTimeout(() => {
            if (direction === "down" || direction === "right") {
                track.appendChild(track.firstElementChild);
            } else if (direction === "up" || direction === "left") {
                track.insertBefore(track.lastElementChild, track.firstElementChild);
            }
            track.style.transition = "none";
            track.style.transform = `translateX(0)`;
            isScrolling = false;
        }, 500); // Duration matching the transition time (0.5s)
    }

    // Handle Mouse & Touchpad Scroll Events (UP/DOWN and LEFT/RIGHT)
    window.addEventListener("wheel", (event) => {
        clearTimeout(scrollTimeout); // Clear the previous timeout to reset debounce

        // Debounce scroll to allow only one action at a time
        scrollTimeout = setTimeout(() => {
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                if (event.deltaX > 0) {
                    shiftImages("right");
                } else {
                    shiftImages("left");
                }
            } else {
                if (event.deltaY > 0) {
                    shiftImages("down");
                } else {
                    shiftImages("up");
                }
            }
        }, 150); // Delay of 150ms to wait for the scroll movement to settle
    });

    // Handle Touchpad Gestures More Accurately
    let lastTouchX = 0, lastTouchY = 0;
    window.addEventListener("touchstart", (event) => {
        lastTouchX = event.touches[0].clientX;
        lastTouchY = event.touches[0].clientY;
    });

    window.addEventListener("touchend", (event) => {
        let touchX = event.changedTouches[0].clientX;
        let touchY = event.changedTouches[0].clientY;
        let deltaX = touchX - lastTouchX;
        let deltaY = touchY - lastTouchY;

        // Only trigger movement if the swipe distance is significant enough
        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 30) { // 30px swipe threshold
            if (deltaX > 0) {
                shiftImages("left");
            } else {
                shiftImages("right");
            }
        } else if (Math.abs(deltaY) > Math.abs(deltaX) && Math.abs(deltaY) > 30) { // 30px swipe threshold
            if (deltaY > 0) {
                shiftImages("down");
            } else {
                shiftImages("up");
            }
        }
    });

    // Initialize the page and adjust image sizes
    adjustImageSize();
    window.addEventListener("resize", adjustImageSize);
});

// Overlay logic for left transition
function showOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    
    if (overlayId === 'overlay1') {
        document.getElementById('project1-frame').src = 'project1.html';
    } else if (overlayId === 'overlay2') {
        document.getElementById('project2-frame').src = 'project2.html';
    } else if (overlayId === 'overlay3') {
        document.getElementById('project3-frame').src = 'project3.html';
    } else if (overlayId === 'overlay4') {
        document.getElementById('project4-frame').src = 'project4.html';
    } else if (overlayId === 'overlay5') {
        document.getElementById('project5-frame').src = 'project5.html';
    }

    overlay.style.left = '0';
}

function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.left = '100%';
}

// Overlay logic for right transition
function showOverlayRight(overlayId) {
    const overlay = document.getElementById(overlayId);
    const iframe = document.getElementById('aboutme-frame');
    iframe.src = 'aboutme.html';
    overlay.style.left = '0';
}

function closeOverlayRight(overlayId) {
    const overlay = document.getElementById(overlayId);
    const iframe = document.getElementById('aboutme-frame');
    iframe.src = '';
    overlay.style.left = '-100%';
}
