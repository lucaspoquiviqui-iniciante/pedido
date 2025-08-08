const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const messageBox = document.getElementById("message");

// Função que move o botão "Não" para uma posição aleatória
function moveButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;
  const maxX = window.innerWidth - btnWidth;
  const maxY = window.innerHeight - btnHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Detecta se o dispositivo é touch (celular/tablet)
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Configura eventos com base no tipo de dispositivo
if (isTouchDevice) {
  noBtn.addEventListener("click", moveButton);
} else {
  noBtn.addEventListener("mouseover", moveButton);
}

// Ação ao clicar no botão "Sim"
yesBtn.addEventListener("click", () => {
  messageBox.innerText = "Sabia que você ia dizer SIM! 💖";
  messageBox.style.display = "block";
});
