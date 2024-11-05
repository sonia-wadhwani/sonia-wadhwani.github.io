// Image slider script
const images = document.querySelectorAll('.image-slider img');
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    image.style.display = i === index ? 'block' : 'none';
  });
}

showImage(currentIndex);

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);

// Device orientation check script
function checkOrientation() {
  const isLandscape = screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary';
  if (!isLandscape) {
    alert('This page is best viewed in landscape mode!');
  }
}

window.addEventListener('orientationchange', checkOrientation);

checkOrientation(); // Check initial orientation on page load