document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Select ALL path elements with the class 'draw-path'
    // (We changed querySelector to querySelectorAll)
    const paths = document.querySelectorAll('.draw-path');
    
    // 2. Iterate through EVERY path found
    paths.forEach(path => {
        
        // Calculate the length of this specific line
        const length = path.getTotalLength();
        
        // Set up the starting positions so the line is hidden
        // We use 'px' units here to ensure wider browser compatibility
        path.style.strokeDasharray = length + 'px';
        path.style.strokeDashoffset = length + 'px';
        
        // Force reflow for this path
        path.getBoundingClientRect();
    });
    
    // 3. Trigger the animation after a brief pause
    setTimeout(() => {
        // We loop through them again to trigger the draw
        paths.forEach(path => {
             path.style.strokeDashoffset = '0px';
        });
    }, 500); // 500ms delay before drawing starts
    
});
