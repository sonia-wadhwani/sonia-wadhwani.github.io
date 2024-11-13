// Text animation script
const dynamicText = document.querySelector('.dynamic-text');
const text = dynamicText.textContent;

dynamicText.textContent = '';

let i = 0;
const typingInterval = 50; // Adjust typing speed in milliseconds

const typeWriter = () => {
    if (i < text.length) {
        dynamicText.textContent += text[i];
        i++;
        setTimeout(typeWriter, typingInterval);
    }
};

typeWriter();