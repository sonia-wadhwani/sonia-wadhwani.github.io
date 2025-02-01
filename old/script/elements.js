/*This JS file has the change of image function based on the selection of radio on the Elements of design project page*/

const imageElement = document.getElementById('image');
const radioButtons = document.querySelectorAll('input[name="image"]');

radioButtons.forEach(radio => {
  radio.addEventListener('change', () => {
    const selectedImage = radio.value;
    imageElement.src = `images/${selectedImage}.png`;
  });
});