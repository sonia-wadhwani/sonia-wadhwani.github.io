// Wait for the document to load
document.addEventListener("DOMContentLoaded", function () {
    // Add click event listener for each card
    const cards = document.querySelectorAll('.card');
    const transitionCards = document.querySelectorAll('.transition-card');

    function transitionCard(cardIndex) {
        // Hide the clicked card
        cards[cardIndex - 1].style.display = 'none';

        // Show the corresponding transition card
        transitionCards[cardIndex - 1].style.display = 'block';
    }

    // Adding event listeners
    cards.forEach((card, index) => {
        card.addEventListener('click', function () {
            transitionCard(index + 1); // Call the function with the correct index
        });
    });
});
