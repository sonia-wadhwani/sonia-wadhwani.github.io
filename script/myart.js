const images = [
    { src: 'abstract1.png', name: 'Feathered Zigs and Zags', description: "A dreamcatcher's dream, woven into reality. These feathers, symbols of hope and protection, guard the dreams of the dreamer." },
    { src: 'abstract2.png', name: 'Leafy Labyrinth', description: 'A whimsical journey through a jungle of patterns. This monstera leaf, a portal to a world of imagination.' },
    { src: 'abstract3.png', name: 'Ink-spired Escape', description: 'A whimsical escape, captured in ink. This mountain landscape invites you to wander through its peaks and valleys and lose yourself in its beauty.' },
    { src: 'abstract4.png', name: 'Triangular Tranquility', description: 'A glimpse into a world beyond. This artwork transports you to a place of tranquility and wonder.' },
    { src: 'abstract5.png', name: 'Sun, Moon, Sea, and Sky', description: 'A testament to the cyclical nature of life. The sun and moon, the sea and sky, forever changing, yet eternally the same.' },
    { src: 'abstract6.png', name: 'Dualities in Design', description: 'A harmonious blend of chaos and order. This yin yang, a testament to the beauty of imperfection.' },
    { src: 'abstract7.png', name: 'Sun, Sand, and Shadows', description: 'A journey through time is depicted, from the sun-kissed desert to the moonlit night and a mysterious door.' },
    { src: 'abstract8.png', name: 'Heart of the Sea', description: "The ocean's spirit resides within this heart, carrying the whale's song and the sun's warmth." },
    { src: 'doodle1.png', name: 'Doodlephoria', description: 'A chaotic harmony of lines and curves. This doodle masterpiece invites you to lose yourself in its vibrant energy.' },
    { src: 'doodle2.png', name: 'Doodlepalooza', description: 'This doodle artwork, a reminder of the power of imagination.' },
    { src: 'doodle3.png', name: 'Mushroom Madness', description: 'A playful mushroom, caught in a moment of stillness. Its patterns and textures tell a story of a vibrant woodland.' },
    { src: 'doodle4.png', name: 'Creature Chaos', description: 'This doodle is a delightful mix of shapes, patterns, and characters.' },
    { src: 'doodle5.png', name: 'Creature Cauldron', description: 'A playful mushroom, caught in a moment of stillness. Its patterns and textures tell a story of a vibrant woodland.' },
    { src: 'doodle6.png', name: "Chaap Corner’s Crazy Crew", description: 'A whimsical world of doodles invites you to Bombay Chaap Corner, where every bite is as fun as the art on the wall.' },
    { src: 'doodle7.png', name: "Ink-spired Anarchy", description: 'A whimsical escape, captured in ink. This doodle landscape invites you to wander through its creatures and lose yourself in its joy.' },
    { src: 'doodle8.png', name: "Shinchan's Scribbly World", description: 'A chaotic celebration of Shinchan and his friends. This doodle captures the energy and excitement of the Nohara household.' },
    { src: 'sketches1.png', name: 'Emotionless Enigma', description: 'A person whose inner thoughts are hidden behind a mask of indifference.' },
    { src: 'sketches2.png', name: 'AAHHHHH!!!', description: 'A moment of pure frustration.' },
    { src: 'sketches3.png', name: "It's HOTTTTT!!!", description: 'A fiery showdown between a brave eater and a spicy dish.' },
    { src: 'sketches4.png', name: 'Shifting of the Self', description: 'A face unraveling, symbolizing the breakdown of the ego and the emergence of the subconscious.' },
    { src: 'sketches5.png', name: 'Last Christmas', description: 'A grim reminder of the harsh reality of illness, even during the most joyous of times.' },
    { src: 'sketches6.png', name: 'The Mysterious Maven', description: 'A puff of smoke and a pout, this character knows how to work a pose.' },
    { src: 'sketches7.png', name: 'The Frozen Soul', description: 'A once-tender heart, now encased in a shell of crystal, protecting itself from further pain.' },
    { src: 'sketches8.png', name: 'Peek-a-Boo Kitty', description: 'A curious cat explores the hidden depths of a notebook, discovering a world beyond the lines.' },
    { src: 'sketches9.png', name: 'The Frozen Soul', description: 'A once-tender heart, now encased in a shell of crystal, protecting itself from further pain.' },
];

//Shufle the images
for (let i = images.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [images[i], images[j]] = [images[j], images[i]]; // Swap elements
}

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.art-gallery');
    images.forEach(image => {
        const artItem = document.createElement('div');
        artItem.classList.add('art-item');

        const img = document.createElement('img');
        img.src = 'images/' + image.src; // Adjust the path if necessary
        img.alt = image.name;
        img.onclick = () => openOverlay(image);

        artItem.appendChild(img);
        gallery.appendChild(artItem);
    });
});

function openOverlay(image) {
    const overlay = document.getElementById('overlay');
    document.getElementById('overlayImage').src = 'images/' + image.src; // Adjust path as needed
    document.getElementById('overlayName').textContent = image.name;
    document.getElementById('overlayDescription').textContent = image.description;
    overlay.style.display = 'flex';
}

function closeOverlay() {
    document.getElementById('overlay').style.display = 'none';
}