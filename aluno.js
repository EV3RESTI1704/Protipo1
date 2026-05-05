
function sair() {

localStorage.removeItem("tipoUsuario");

window.location.href = "index.html";

}
function abrirSalas() {

document.getElementById("titulo").innerText = "Salas";

document.getElementById("conteudo").innerHTML = `

<div class="card">📚 Matemática</div>
<div class="card">📚 Português</div>
<div class="card">📚 História</div>

`;

}


/* AVISOS */

function abrirAvisos() {

document.getElementById("titulo").innerText = "Avisos";

document.getElementById("conteudo").innerHTML = `

<div class="card">📢 Prova sexta-feira</div>
<div class="card">📢 Trabalho segunda</div>

`;

}


/* CALENDÁRIO */

function abrirCalendario() {

document.getElementById("titulo").innerText = "Calendário";

let dias = "";

for (let i = 1; i <= 30; i++) {

dias += `<div class="dia">${i}</div>`;

}

document.getElementById("conteudo").innerHTML = `
<div class="calendario">${dias}</div>
`;

}


/* CHAT AI */

function abrirChat() {

document.getElementById("titulo").innerText = "Chat AI";

document.getElementById("conteudo").innerHTML = `

<div class="chat-box" id="chat"></div>

<input id="input" placeholder="Digite..." />

<button onclick="enviar()">Enviar</button>

`;

}


function enviar() {

let input = document.getElementById("input");

let texto = input.value;

if (!texto) return;

let chat = document.getElementById("chat");

chat.innerHTML += `<div class="msg user">${texto}</div>`;

setTimeout(() => {

chat.innerHTML += `<div class="msg">Resposta da AI 🤖</div>`;

chat.scrollTop = chat.scrollHeight;

}, 500);

input.value = "";

}


/* iniciar com salas */

abrirSalas();