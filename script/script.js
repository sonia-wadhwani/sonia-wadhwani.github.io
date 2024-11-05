// script.js

// Example: Image Slider
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
    images.forEach((image, i) => {
        image.style.display = i === index ? 'block' : 'none';
    });
}

// Automatic slide show
setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}, 3000); // Change image every 3 seconds