// Updated script.js to fix NO button movement boundaries
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');
const container = document.getElementById('buttonContainer');

noButton.addEventListener('mouseover', () => {
    const containerRect = container.getBoundingClientRect();
    const noButtonRect = noButton.getBoundingClientRect();
    const yesButtonRect = yesButton.getBoundingClientRect();

    // Calculate new position within bounds
    let newX = noButton.offsetLeft + (Math.random() > 0.5 ? 20 : -20);
    let newY = noButton.offsetTop + (Math.random() > 0.5 ? 20 : -20);

    // Ensuring the NO button does not escape above YES button or outside the container
    if (newY < yesButtonRect.bottom) {
        newY = yesButtonRect.bottom;
    }
    if (newX < 0) {
        newX = 0;
    }
    if (newX + noButtonRect.width > containerRect.width) {
        newX = containerRect.width - noButtonRect.width;
    }
    if (newY < 0) {
        newY = 0;
    }
    if (newY + noButtonRect.height > containerRect.height) {
        newY = containerRect.height - noButtonRect.height;
    }

    // Apply position
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});
