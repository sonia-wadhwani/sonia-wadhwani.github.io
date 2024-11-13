let currentPage = 1;
const totalPages = 9;
const pageContainer = document.getElementById("currentPage");
const pageImage = document.getElementById("pageImage");

// Function to update the page image and apply animation
function updatePage(scrollDirection) {
	const pageImageSrc = `images/book-page${currentPage}.png`;
	pageImage.src = pageImageSrc;

	if (scrollDirection === 'scroll-up') {
		pageContainer.classList.add('scroll-up');
	} else if (scrollDirection === 'scroll-down') {
		pageContainer.classList.add('scroll-down');
	}

	setTimeout(() => {
		pageContainer.classList.remove('scroll-up', 'scroll-down');
	}, 500);
}

// Arrow button click events
document.getElementById("prevPage").addEventListener("click", () => {
	if (currentPage > 1) {
		currentPage--;
		updatePage('scroll-down');
	}
});

document.getElementById("nextPage").addEventListener("click", () => {
	if (currentPage < totalPages) {
		currentPage++;
		updatePage('scroll-up');
	}
});

// Initialize the first page
updatePage('scroll-up');

// Prevent right-click context menu
window.addEventListener("contextmenu", (event) => {
	event.preventDefault();
});