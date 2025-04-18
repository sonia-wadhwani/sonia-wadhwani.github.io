
/*The JS shows the carousel for images on the project page. 
Also manages the thumbnail actions*/

const projectImages = document.querySelectorAll('.project-image');
const projectTitles = [
	"Scratch Project - Parallel Parking",
	"P5JS Project - Lighting Animation",
	"Python Project - Foodie, the Nutrition Partner",
	"Elements of Design",
	"Saptha - The book of moods",
	"Brand Positioning - Flexhub"
];
const projectTitle = document.getElementById('project-title');
const thumbnails = document.querySelectorAll('.thumbnail');
let currentProject = 0;

//Shows the project images
function showProject(index) {
	projectImages.forEach((img, i) => {
		img.style.opacity = i === index ? '1' : '0';
	});
	projectTitle.textContent = projectTitles[index];
	thumbnails.forEach(thumb => thumb.classList.remove('active'));
	thumbnails[index].classList.add('active');
	currentProject = index;
}

//Scrolls to next images
function nextProject() {
	currentProject = (currentProject + 1) % projectImages.length;
	showProject(currentProject);
}

setInterval(nextProject, 3000);
showProject(0);

//Opens modal window on click of each thumbnail
function openModal(src, width , height) {
	const modal = document.getElementById("modal");
	const modalIframe = document.getElementById("modalIframe");
	const modalContent = document.getElementById("modalContent");

	// Set the iframe source to the provided src
	modalIframe.src = src;

	// Apply width and height to modal content
	
	modalContent.style.width = width;
	modalContent.style.height = height;

	// Display the modal
	modal.style.display = "flex";
}

// Closes the modal and resets the iframe src
function closeModal() {
	const modal = document.getElementById("modal");
	const modalIframe = document.getElementById("modalIframe");

	// Hide the modal
	modal.style.display = "none";

	// Clear the iframe source to prevent it from continuing to load in the background
	modalIframe.src = "";
}

//Git doesnt allow to open sites outside the domain in a modal window hence opening the new flexhub site in new window
function openCustomWindow(url, width, height) {
	const left = (window.innerWidth - width) / 2 + window.screenX;
	const top = (window.innerHeight - height) / 2 + window.screenY;
	window.open(
		url,
		'_blank',
		`width=${width},height=${height},left=${left},top=${top},toolbar=no,location=no,status=no,menubar=no,scrollbars=yes,resizable=yes`
	);
}
