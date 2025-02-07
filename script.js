document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".glitch");

    function glitchEffect() {
        text.style.textShadow = `
            ${Math.random() * 5}px ${Math.random() * 5}px #00ffff,
            ${Math.random() * -5}px ${Math.random() * -5}px #ff00ff
        `;
    }

    setInterval(glitchEffect, 200);
});
