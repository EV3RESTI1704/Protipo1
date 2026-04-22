function mudarSala(nome) {

document.getElementById("titulo")
.innerText = "Sala: " + nome;

}


/* Abrir Chat AI */

function abrirChatAI() {

document.getElementById("titulo")
.innerText = "Chat AI";

document.getElementById("conteudoSala")
.innerHTML = `

<div class="chat">

<div
id="chatBox"
class="chat-box"
>

<div class="msg">
Olá! Sou o assistente AI 🤖
</div>

</div>

<div class="chat-input">

<input
id="userInput"
placeholder="Digite sua pergunta..."
>

<button onclick="enviarMensagem()">
Enviar
</button>

</div>

</div>

`;

}


/* Enviar mensagem */

function enviarMensagem() {

let input =
document.getElementById("userInput");

let texto =
input.value;

if (texto === "")
return;

let chat =
document.getElementById("chatBox");


/* mensagem usuário */

chat.innerHTML +=
`<div class="msg user">${texto}</div>`;


/* resposta simples AI */

setTimeout(() => {

chat.innerHTML +=
`<div class="msg">
Resposta automática da AI 🤖
</div>`;

chat.scrollTop =
chat.scrollHeight;

}, 500);


input.value = "";

}