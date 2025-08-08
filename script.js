const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const messageBox = document.getElementById("message");

// Função que move o botão "Não" sem sair da tela
function moveButton() {
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  const padding = 20;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const maxX = viewportWidth - btnWidth - padding;
  const maxY = viewportHeight - btnHeight - padding;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Detecta se é celular ou tablet
const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

// Ativa movimento por clique (touch) ou mouseover (PC)
if (isTouchDevice) {
  noBtn.addEventListener("click", moveButton);
} else {
  noBtn.addEventListener("mouseover", moveButton);
}

// Mostra mensagem ao clicar em "Sim"
yesBtn.addEventListener("click", () => {
  messageBox.innerText = "Sabia que você ia dizer SIM! 💖";
  messageBox.style.display = "block";
});
