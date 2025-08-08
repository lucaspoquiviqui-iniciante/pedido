const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const messageBox = document.getElementById("message");

// Função que move o botão "Não" de forma segura
function moveButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 20; // margem para não colar nas bordas

  const maxX = window.innerWidth - btnWidth - padding;
  const maxY = window.innerHeight - btnHeight - padding;

  const x = Math.random() * maxX + padding / 2;
  const y = Math.random() * maxY + padding / 2;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Detecta se é dispositivo com toque (mobile/tablet)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

if (isTouchDevice) {
  noBtn.addEventListener("click", moveButton);
} else {
  noBtn.addEventListener("mouseover", moveButton);
}

yesBtn.addEventListener("click", () => {
  messageBox.innerText = "Sabia que você ia dizer SIM! 💖";
  messageBox.style.display = "block";
});
