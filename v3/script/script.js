document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');
    const transitionCards = document.querySelectorAll('.transition-card');
    const mainContent = document.querySelector("main");

    function transitionCard(cardIndex) {
        let clickedCard = cards[cardIndex - 1];

        // ✅ Do not hide "sonia1.jpg"
        if (clickedCard.id !== "sonia1") {
            clickedCard.style.display = 'none';
            transitionCards[cardIndex - 1].style.display = 'block';
        }
    }

    cards.forEach((card, index) => {
        card.addEventListener('click', function () {
            transitionCard(index + 1);
        });
    });
});

// Function to show overlay and disable main content interaction
function showOverlay(overlayId) {
    document.getElementById(overlayId).style.left = "0"; // Slide overlay in
    document.querySelector("main").classList.add("disabled"); // Disable clicks on main content
}


// Function to close overlay and restore main content interaction
function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.left = "100%"; // Slide overlay out
    document.querySelector("main").classList.remove("disabled"); // Enable clicks on main content
}

// Function to show overlay and disable main content interaction
function showOverlayRight(overlayId) {
    document.getElementById(overlayId).style.left = "0"; // Slide overlay in
    document.querySelector("main").classList.add("disabled"); // Disable clicks on main content
}


// Function to close overlay and restore main content interaction
function closeOverlayRight(overlayId) {
    document.getElementById(overlayId).style.left = "-100%"; // Slide overlay out
    document.querySelector("main").classList.remove("disabled"); // Enable clicks on main content
}