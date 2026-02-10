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

// NO Button - Make it escape with boundary constraints
function setupNoButton() {
    const noBtn = document.getElementById('noBtn');
    const buttonContainer = document.getElementById('buttonContainer');
    let escapeCount = 0;
    
    noBtn.addEventListener('mouseenter', () => {
        escapeCount++;
        
        const containerRect = buttonContainer.getBoundingClientRect();
        const noBtnRect = noBtn.getBoundingClientRect();
        
        // Generate random position within container bounds
        let randomX = (Math.random() - 0.5) * 150;
        let randomY = (Math.random() - 0.5) * 100;
        
        // Get current position
        let currentX = noBtn.offsetLeft || 0;
        let currentY = noBtn.offsetTop || 0;
        
        let newX = currentX + randomX;
        let newY = currentY + randomY;
        
        // Ensure button stays within container bounds
        const minX = 0;
        const maxX = containerRect.width - noBtnRect.width;
        const minY = 0;
        const maxY = containerRect.height - noBtnRect.height;
        
        newX = Math.max(minX, Math.min(newX, maxX));
        newY = Math.max(minY, Math.min(newY, maxY));
        
        // Apply position
        noBtn.style.position = 'relative';
        noBtn.style.left = randomX + 'px';
        noBtn.style.top = randomY + 'px';
        
        // After escaping 3 times, make it harder to catch
        if (escapeCount > 3) {
            noBtn.style.transition = 'all 0.1s ease-out';
        }
        
        // After escaping 5 times, show a funny message
        if (escapeCount === 5) {
            console.log('😄 You can\'t catch me! Just click YES! 💕');
        }
    });
    
    noBtn.addEventListener('mouseleave', () => {
        // Reset position when mouse leaves
        noBtn.style.left = '0';
        noBtn.style.top = '0';
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