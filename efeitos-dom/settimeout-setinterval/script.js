// Mude a cor da tela para azul e depois para vermelho a cada 2s.
// function changeBG() {
//   document.body.classList.toggle("active");
// }

// setInterval(() => {
//   changeBG();
// }, 2000);

// Crie um cronometro utilizando o setInterval. Deve ser possível
// iniciar, pausar e resetar (duplo clique no pausar).
const start = document.querySelector(".start");
const pause = document.querySelector(".pause");
const tempo = document.querySelector(".time");

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
pause.addEventListener("dblclick", resetTimer);

let i = 0;
let timer;
function startTimer() {
  timer = setInterval(() => {
    tempo.innerText = i++;
  }, 100);
  start.setAttribute("disabled", "");
}

function pauseTimer() {
  clearInterval(timer);
  start.removeAttribute("disabled");
}

function resetTimer() {
  tempo.innerText = 0;
  i = 0;
}
