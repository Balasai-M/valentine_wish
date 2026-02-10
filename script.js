const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const popup = document.getElementById("popup");
const popupText = document.getElementById("popupText");
const popupClose = document.getElementById("popupClose");

let noCount = 0;

function showPopup(text) {
    popupText.textContent = text;
    popup.classList.remove("hidden");
}

popupClose.onclick = () => {
    popup.classList.add("hidden");
};

noBtn.addEventListener("click", () => {
    noCount++;

    if (noCount === 1) {
        showPopup("Bad luck 😜 Try again!");
        noBtn.style.width = "80px";
        yesBtn.style.width = "160px";
    }

    else if (noCount === 2) {
        showPopup("Whatttt againn.... 🥺💔");
        noBtn.style.width = "60px";
        yesBtn.style.width = "200px";
    }

    else if (noCount >= 3) {
        showPopup("Idhuku mela unaku option illa 😌❤️");
        noBtn.style.display = "none";
        yesBtn.style.width = "240px";
    }
});

yesBtn.addEventListener("click", () => {
    if (noCount === 0) {
        showPopup("Hurrayyy 🥳💖 So happieee!");
    } else {
        showPopup("I knew you will come here only 😏❤️");
    }

    yesBtn.disabled = true;
});
