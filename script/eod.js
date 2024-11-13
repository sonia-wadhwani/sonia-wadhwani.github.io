        // JavaScript to change image source based on selected radio button
        const image = document.getElementById("image");
        document.querySelectorAll('input[name="image"]').forEach(radio => {
            radio.addEventListener("change", (event) => {
                image.src = `images/${event.target.value}.png`;
            });
        });