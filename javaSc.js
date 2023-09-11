const textMuted = document.getElementById("textMuted");
const words = ["Web3", "DeFi", "Payments"];
const colors = ["#ff4d6a", "#7cffa0", "#ffcb4b"];

let idx = 1;

setInterval(() => {
    textMuted.style.color = colors[idx];
    textMuted.textContent = words[idx];
    textMuted.style.opacity = 1;

    setTimeout(() => {
        textMuted.style.opacity = 0;
    }, 2000);

    idx = (idx + 1) % words.length;
}, 3000);