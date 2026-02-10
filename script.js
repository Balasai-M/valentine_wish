const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const status = document.getElementById("status");

let noCount = 0;

function showStatus(text) {
    status.classList.remove("hidden");
    status.textContent = text;

    // restart animation every time
    status.style.animation = "none";
    status.offsetHeight; // force reflow
    status.style.animation = null;
}

noBtn.addEventListener("click", () => {
    noCount++;

    if (noCount === 1) {
        showStatus("Bad luck 😜 Try again!");
        noBtn.style.width = "80px";
        yesBtn.style.width = "160px";
    }
    else if (noCount === 2) {
        showStatus("Whatttt againn.... 🥺💔");
        noBtn.style.width = "60px";
        yesBtn.style.width = "200px";
    }
    else {
        showStatus("Idhuku mela unaku option illa 😌❤️");
        noBtn.style.display = "none";
        yesBtn.style.width = "240px";
    }
});

yesBtn.addEventListener("click", () => {
    if (noCount === 0) {
        showStatus("Hurrayyy 🥳💖 So happieee!");
    } else {
        showStatus("I knew you will come here only 😏❤️");
    }

    yesBtn.disabled = true;
});
