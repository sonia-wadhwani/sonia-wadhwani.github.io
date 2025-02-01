// Array of image IDs
const images = [
    "image1",
    "image2",
    "image3",
    "image4",
    "image5",
    "image6"
  ];
  
  let currentIndex = 0; // To track the current set of 3 images
  let imageCount = 3;  // Default to 3 images
  
  // Adjust the number of images based on screen width
  function adjustImageCount() {
    const width = window.innerWidth;
    if (width <= 600) {
      imageCount = 1;  // Mobile view: Show 1 image
    } else if (width <= 1024) {
      imageCount = 3;  // Tablet view: Show 3 images
    } else {
      imageCount = 3;  // Large screen view: Show 3 images
    }
    updateImages();  // Update the displayed images
  }
  
  // Function to shift images when scrolling
  function shiftImages(direction) {
    if (direction === "up") {
      currentIndex = (currentIndex - 1 + images.length) % images.length; // Scroll up (previous images)
    } else if (direction === "down") {
      currentIndex = (currentIndex + 1) % images.length; // Scroll down (next images)
    }
  
    // Adjust the images to display based on the new index
    updateImages();
  }
  
  // Function to update the images visible on screen
  function updateImages() {
    // First, hide all images
    images.forEach((image) => {
      document.getElementById(image).classList.remove("active");
    });
  
    // Add new set of active images
    for (let i = 0; i < imageCount; i++) {
      document.getElementById(images[(currentIndex + i) % images.length]).classList.add("active");
    }
  }
  
  // Initialize the page with the first set of images
  adjustImageCount();
  
  // Listen for window resizing
  window.addEventListener("resize", adjustImageCount);
  
  // Add event listener for mouse wheel scrolling
  window.addEventListener("wheel", (e) => {
    if (e.deltaY > 0) {
      shiftImages("down"); // Scroll down (next images)
    } else {
      shiftImages("up"); // Scroll up (previous images)
    }
  });
  