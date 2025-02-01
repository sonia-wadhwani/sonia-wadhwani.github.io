const track = document.querySelector(".carousel-track");
const images = document.querySelectorAll(".carousel-item");

let index = 0; 
let imagesPerView = 3; // Default for large screens
let isMobile = false;

// Function to adjust how many images should be visible based on screen width
function adjustImageCount() {
    const screenWidth = window.innerWidth;
    
    if (screenWidth <= 600) {
        imagesPerView = 1; // Show 1 image on mobile
        isMobile = true;
    } else {
        imagesPerView = 3; // Show 3 images on larger screens
        isMobile = false;
    }
    
    updateCarousel();
}

// Function to update visible images in the carousel
function updateCarousel() {
    const imageWidth = images[0].getBoundingClientRect().width;
    const spacing = imageWidth * 0.2; // 20% of image width as space
    const offset = -(index * (imageWidth + spacing));
    
    track.style.transform = `translateX(${offset}px)`;
}

// Function to shift images when scrolling
function shiftImages(direction) {
    if (direction === "down") {
        index = (index + 1) % images.length;
    } else if (direction === "up") {
        index = (index - 1 + images.length) % images.length;
    }
    
    updateCarousel();
}

// Mouse Wheel Scroll Event
window.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
        shiftImages("down");
    } else {
        shiftImages("up");
    }
});

// Mobile Touch Support
let startX, endX;

window.addEventListener("touchstart", (event) => {
    startX = event.touches[0].clientX;
});

window.addEventListener("touchend", (event) => {
    endX = event.changedTouches[0].clientX;

    if (startX > endX) {
        shiftImages("down"); // Swipe left
    } else if (startX < endX) {
        shiftImages("up"); // Swipe right
    }
});

// Initialize
window.addEventListener("resize", adjustImageCount);
adjustImageCount();
