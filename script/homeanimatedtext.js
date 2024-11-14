
const textLine1 = "Hello,";
const textLine2 = "I am Sonia.";
const textLine3 = "A compassionate, creative design enthusiast blending artistry with user-focused innovation. I value diverse experiences & am driven by positivity & discovery.";


const typewriterElement1 = document.getElementById('typewriterLine1');
const typewriterElement2 = document.getElementById('typewriterLine2');
const typewriterElement3 = document.getElementById('typewriterLine3');


let index1 = 0, index2 = 0, index3 = 0;

function typeWriter1() {
	if (index1 < textLine1.length) {
		typewriterElement1.innerHTML += textLine1[index1];
		index1++;
		setTimeout(typeWriter1, 100);
	} else {
		typewriterElement1.style.borderRight = "none";
	}
}

function typeWriter2() {
	if (index2 < textLine2.length) {
		typewriterElement2.innerHTML += textLine2[index2];
		index2++;
		setTimeout(typeWriter2, 100);
	} else {
		typewriterElement2.style.borderRight = "none";
	}
}

function typeWriter3() {
	if (index3 < textLine3.length) {
		typewriterElement3.innerHTML += textLine3[index3];
		index3++;
		setTimeout(typeWriter3, 40);
	} else {
		typewriterElement3.style.borderRight = "none";
	}
}



typeWriter1();
setTimeout(typeWriter2, 1000);
setTimeout(typeWriter3, 2000);

function checkOrientation() {
	const isLandscape = screen.orientation.type === 'landscape-primary' || screen.orientation.type === 'landscape-secondary';
	if (!isLandscape) {
		alert('This page is best viewed in landscape mode!');
	}
}

window.addEventListener('orientationchange', checkOrientation);

checkOrientation(); // Check initial orientation on page load