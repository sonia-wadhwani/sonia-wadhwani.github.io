// We use window.onload to ensure the SVG is fully rendered before we measure it
window.onload = function() {
    
    const paths = document.querySelectorAll('.draw-path');
    
    // 1. SETUP: Hide lines instantly
    paths.forEach(path => {
        // Get length and add 1 pixel to be safe against rounding errors
        const length = Math.ceil(path.getTotalLength()) + 1;
        
        // Hide the line by pushing the dash offset all the way back
        path.style.strokeDasharray = length + 'px';
        path.style.strokeDashoffset = length + 'px';
        
        // CRITICAL: Disable transition so the "hiding" is instant
        path.style.transition = 'none';
        
        // Force the browser to calculate this change immediately
        path.getBoundingClientRect(); 
    });

    // 2. ACTION: Start drawing after a short delay
    setTimeout(() => {
        
        paths.forEach((path, index) => {
            
            // Stagger: Wait longer for outer lines (200ms between each)
            const delay = index * 200; 
            
            setTimeout(() => {
                // Slower animation: 12 seconds
                // 'ease-in-out' makes it start slow, speed up, end slow
                path.style.transition = 'stroke-dashoffset 12s ease-in-out';
                
                // Go to 0 to reveal the line
                path.style.strokeDashoffset = '0px';
                
            }, delay);
        });
        
    }, 500); // Wait 0.5s after load before doing anything
};