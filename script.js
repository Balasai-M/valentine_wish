// Updated script.js to handle NO button boundary properly
function handleNoButton() {
    const noButton = document.getElementById('no-button');
    const yesButton = document.getElementById('yes-button');
    const buttonContainer = document.getElementById('button-container');

    // Make sure the NO button stays within its container
    noButton.addEventListener('mouseenter', () => {
        const containerRect = buttonContainer.getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        if (noButtonRect.top < containerRect.top) {
            noButton.style.top = '0px';
        }
    });

    // Prevent NO button from escaping above YES button
    noButton.addEventListener('mouseleave', () => {
        if (noButton.getBoundingClientRect().bottom < yesButton.getBoundingClientRect().top) {
            noButton.style.top = yesButton.offsetTop + 'px';
        }
    });
}

handleNoButton();