const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const message = document.getElementById("message");

let moveCount = 0;

noBtn.addEventListener("mouseenter", () => {
    moveCount++;

    if (moveCount < 4) {
        const x = Math.random() * 60 - 30;
        const y = Math.random() * 40 - 20;

        noBtn.style.transform = `translate(${x}px, ${y}px)`;
    } else {
        noBtn.style.transform = "translate(0,0)";
        message.textContent = "😅 Just say YES already!";
    }
});

yesBtn.addEventListener("click", () => {
    message.textContent = "Yayyy 💖 I knew it!";
    noBtn.disabled = true;
    yesBtn.disabled = true;
});
