// Wait for DOM to fully load
window.addEventListener('DOMContentLoaded', () => {
    
    // Get the SVG object element
    const svgObject = document.getElementById('contour-svg');
    
    // Wait for SVG to load
    svgObject.addEventListener('load', () => {
        
        // Access the SVG document inside the object
        const svgDoc = svgObject.contentDocument;
        const svg = svgDoc.querySelector('svg');
        
        // Get all paths in the SVG
        const paths = svgDoc.querySelectorAll('path, polyline, line, circle, ellipse, polygon');
        
        // Prepare each path for animation
        paths.forEach((path, index) => {
            
            // Get the total length of the path
            const length = path.getTotalLength();
            
            // Set up the stroke properties
            path.style.stroke = '#2A2A2A';
            path.style.strokeWidth = '0.8';
            path.style.fill = 'none';
            path.style.strokeLinecap = 'round';
            path.style.strokeLinejoin = 'round';
            
            // Set initial state (invisible)
            path.style.strokeDasharray = length;
            path.style.strokeDashoffset = length;
            
            // Calculate animation delay (stagger effect)
            const delay = index * 80; // 80ms between each path
            
            // Animate after delay
            setTimeout(() => {
                path.style.transition = `stroke-dashoffset 1.8s ease-out`;
                path.style.strokeDashoffset = '0';
            }, delay);
        });
    });
});