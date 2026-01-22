document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Select the path element we want to animate
    const path = document.querySelector('.draw-path');
    
    // 2. Calculate the exact length of the line
    const length = path.getTotalLength();
    
    // 3. Set up the starting positions
    // This creates a dash that is exactly the length of the line
    path.style.strokeDasharray = length;
    
    // This pushes the dash completely out of view (hiding the line)
    path.style.strokeDashoffset = length;
    
    // 4. Force a browser reflow 
    // (This ensures the browser acknowledges the hidden state before animating)
    path.getBoundingClientRect();
    
    // 5. Trigger the animation
    // We use a tiny delay (100ms) to ensure the page is ready
    setTimeout(() => {
        // Resetting the offset to 0 makes the dash "slide" back into view
        path.style.strokeDashoffset = '0';
    }, 500); // 500ms delay before drawing starts
    
});
