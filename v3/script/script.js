document.addEventListener('DOMContentLoaded', () => {
    const resetButton = document.getElementById('resetArrow');
    const cardStack = document.querySelector('.card-stack');

    // Hide the reset button initially
    resetButton.style.display = 'none';

    // Show the reset button when a card in the left stack is clicked
    cardStack.addEventListener('click', () => {
        resetButton.style.display = 'block';  // Show the reset button
    });

    // Ensure reset button triggers the resetCards function
    resetButton.addEventListener('click', (e) => {
        resetCards();
        resetButton.style.display = 'none'; // Hide the reset button after reset
    });
});

// Function to reset cards
function resetCards() {
    const cardStack = document.querySelector('.card-stack');
    const transitionStack = document.querySelector('.transition-stack');

    // Reset the cards in the card stack to their original state
    cardStack.querySelectorAll('.card').forEach((card, index) => {
        card.style.display = 'block'; // Make sure all original cards are visible
        card.style.transform = 'translateX(0)'; // Reset the position to its original state
    });

    // Reset the cards in the transition stack to their hidden state
    transitionStack.querySelectorAll('.transition-card').forEach((card, index) => {
        card.style.display = 'none'; // Hide all transition cards
        card.style.transform = 'translateX(0)'; // Reset any transformations applied
    });
}

// Transition the clicked card
function transitionCard(cardNumber) {
    const card = document.getElementById(`card${cardNumber}`);
    const transitionCard = document.getElementById(`card${cardNumber}a`);
    
    // Hide the original card and show the transition card
    card.style.display = 'none';
    transitionCard.style.display = 'block';
}

// Overlay logic for right transition
function showOverlayRight(overlayId) {
    const overlay = document.getElementById(overlayId);
    const iframe = document.getElementById('aboutme-frame');   
    iframe.src = 'aboutme.html'; // Set the source to your aboutme.html file
    overlay.style.left = '0';  // Make it slide in from the right
}

function closeOverlayRight(overlayId) {
    const overlay = document.getElementById(overlayId);
    const iframe = document.getElementById('aboutme-frame');
    iframe.src = '';
    overlay.style.left = '-100%';  // Slide it out again
}

// Overlay logic for left transition
function showOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
       
    if(overlayId='overlay1')
    {
        const iframe1 = document.getElementById('project1-frame');
        iframe1.src = 'project1.html'; // Set the source to your aboutme.html file
    }
    if(overlayId='overlay2')
    {
        const iframe2 = document.getElementById('project2-frame');
        iframe2.src = 'project2.html'; // Set the source to your aboutme.html file
    }   
    if(overlayId='overlay3')
    {
        const iframe3 = document.getElementById('project3-frame');
        iframe3.src = 'project3.html'; // Set the source to your aboutme.html file
    } 
    if(overlayId='overlay4')
    {
        const iframe4 = document.getElementById('project4-frame');
        iframe4.src = 'project4.html'; // Set the source to your aboutme.html file
    } 
    if(overlayId='overlay5')
    {
        const iframe5 = document.getElementById('project5-frame');
        iframe5.src = 'project5.html'; // Set the source to your aboutme.html file
    }     

    overlay.style.left = '0';  // Show the overlay from the left
}

function closeOverlay(overlayId) {
    const overlay = document.getElementById(overlayId);
    overlay.style.left = '100%';  // Hide it to the right
}
