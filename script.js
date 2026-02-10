// Create twinkling stars
function createStars() {
    const starsContainer = document.querySelector('.stars');
    const starCount = 50;
    
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = Math.random() * 100 + '%';
        star.style.animationDelay = Math.random() * 3 + 's';
        starsContainer.appendChild(star);
    }
}

// Create confetti pieces
function createConfetti() {
    const confettiContainer = document.querySelector('.confetti');
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const piece = document.createElement('div');
        piece.className = 'confetti-piece';
        piece.style.left = Math.random() * 100 + 'vw';
        piece.style.backgroundColor = getRandomColor();
        piece.style.animationDelay = Math.random() * 0.5 + 's';
        piece.style.animationDuration = (2 + Math.random() * 1) + 's';
        confettiContainer.appendChild(piece);
    }
    
    // Remove confetti pieces after animation
    setTimeout(() => {
        const pieces = document.querySelectorAll('.confetti-piece');
        pieces.forEach(piece => piece.remove());
    }, 3000);
}

// Get random color for confetti
function getRandomColor() {
    const colors = ['#FF1493', '#FF69B4', '#FFB6C1', '#FFC0CB', '#FFDAB9', '#FFB347', '#FFD700', '#FF6347'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// NO Button - Make it escape
function setupNoButton() {
    const noBtn = document.getElementById('noBtn');
    let escapeCount = 0;
    
    noBtn.addEventListener('mouseenter', () => {
        escapeCount++;
        
        // Generate random position
        const randomX = (Math.random() - 0.5) * 200;
        const randomY = (Math.random() - 0.5) * 200;
        
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        
        // After escaping 3 times, make it harder to escape
        if (escapeCount > 3) {
            noBtn.style.position = 'fixed';
            noBtn.style.pointerEvents = 'none';
        }
        
        // After escaping 5 times, show a funny message
        if (escapeCount === 5) {
            console.log('😄 You can\'t escape! Click YES!');
        }
    });
    
    noBtn.addEventListener('mouseleave', () => {
        noBtn.style.transform = 'translate(0, 0)';
    });
}

// YES Button - Show love animation
function setupYesButton() {
    const yesBtn = document.getElementById('yesBtn');
    const content = document.querySelector('.content');
    const responseBox = document.getElementById('responseBox');
    
    yesBtn.addEventListener('click', () => {
        // Hide question and buttons
        content.style.display = 'none';
        
        // Show response box
        responseBox.style.display = 'block';
        
        // Create confetti
        createConfetti();
        
        // Play sound effect if available (optional)
        playHeartSound();
    });
}

// Play heart sound (optional)
function playHeartSound() {
    // You can add an audio element if needed
    // For now, we\'ll just use the visual animations
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    createStars();
    setupNoButton();
    setupYesButton();
});

// Add some fun Easter eggs
document.addEventListener('keydown', (e) => {
    if (e.key === 'y' || e.key === 'Y') {
        document.getElementById('yesBtn').click();
    }
});