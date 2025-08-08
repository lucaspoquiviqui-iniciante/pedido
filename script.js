const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const messageBox = document.getElementById("message");

// Função que move o botão "Não" para uma posição aleatória dentro da janela
function moveButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const x = Math.random() * (window.innerWidth - btnWidth);
  const y = Math.random() * (window.innerHeight - btnHeight);
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Detecta se o dispositivo é touch (celular/tablet)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Se for touch device, mover o botão ao clicar
if (isTouchDevice) {
  noBtn.addEventListener("click", moveButton);
} else {
  // Se for desktop, mover o botão ao passar o mouse
  noBtn.addEventListener("mouseover", moveButton);
}

// Evento do botão "Sim"
yesBtn.addEventListener("click", () => {
  messageBox.innerText = "Sabia que você ia dizer SIM! 💖";
  messageBox.style.display = "block";
});
