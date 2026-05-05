/* armazenamentos simples (simulando banco) */

let avisos = [];
let atividades = [];
let conteudos = [];


/* AVISOS */
function sair() {

localStorage.removeItem("tipoUsuario");

window.location.href = "index.html";

}

function abrirAvisos() {

document.getElementById("titulo").innerText = "Gerenciar Avisos";

document.getElementById("conteudo").innerHTML = `

<input id="novoAviso" placeholder="Digite o aviso" />
<button onclick="adicionarAviso()">Adicionar</button>

<div id="listaAvisos"></div>

`;

renderAvisos();

}

function adicionarAviso() {

let texto = document.getElementById("novoAviso").value;

if (!texto) return;

avisos.push(texto);

renderAvisos();

}

function renderAvisos() {

let html = "";

avisos.forEach(a => {
html += `<div class="card">📢 ${a}</div>`;
});

document.getElementById("listaAvisos").innerHTML = html;

}


/* ATIVIDADES */

function abrirAtividades() {

document.getElementById("titulo").innerText = "Gerenciar Atividades";

document.getElementById("conteudo").innerHTML = `

<input id="novaAtividade" placeholder="Nome da atividade" />
<button onclick="adicionarAtividade()">Criar</button>

<div id="listaAtividades"></div>

`;

renderAtividades();

}

function adicionarAtividade() {

let texto = document.getElementById("novaAtividade").value;

if (!texto) return;

atividades.push(texto);

renderAtividades();

}

function renderAtividades() {

let html = "";

atividades.forEach(a => {
html += `<div class="card">📝 ${a}</div>`;
});

document.getElementById("listaAtividades").innerHTML = html;

}


/* CONTEÚDOS */

function abrirConteudos() {

document.getElementById("titulo").innerText = "Gerenciar Conteúdos";

document.getElementById("conteudo").innerHTML = `

<input id="tituloConteudo" placeholder="Título da aula" />
<textarea id="descricaoConteudo" placeholder="Descrição"></textarea>

<button onclick="adicionarConteudo()">Adicionar</button>

<div id="listaConteudos"></div>

`;

renderConteudos();

}

function adicionarConteudo() {

let titulo = document.getElementById("tituloConteudo").value;
let desc = document.getElementById("descricaoConteudo").value;

if (!titulo || !desc) return;

conteudos.push({ titulo, desc });

renderConteudos();

}

function renderConteudos() {

let html = "";

conteudos.forEach(c => {

html += `
<div class="card">
<h3>${c.titulo}</h3>
<p>${c.desc}</p>
</div>
`;

});

document.getElementById("listaConteudos").innerHTML = html;

}


/* iniciar */

abrirAvisos();

function abrirIA() {

document.getElementById("titulo").innerText =
"IA Auxiliar de Atividades";

document.getElementById("conteudo").innerHTML = `

<div class="ia-box">

<p>Digite o tema da atividade:</p>

<input id="temaIA" placeholder="Ex: Frações, Revolução Francesa..." />

<button onclick="gerarAtividadeIA()">
Gerar atividade
</button>

<div id="resultadoIA"></div>

</div>

`;

}
function gerarAtividadeIA() {

let tema =
document.getElementById("temaIA").value;

if (!tema) return;

let atividade = `

<h3>Atividade sobre ${tema}</h3>

<p>1. Explique o conceito de ${tema}.</p>

<p>2. Cite um exemplo prático.</p>

<p>3. Resolva um exercício relacionado.</p>

<button onclick="usarAtividade('${tema}')">
Usar esta atividade
</button>

`;

document.getElementById("resultadoIA")
.innerHTML = atividade;

}

function usarAtividade(tema) {

atividades.push("Atividade sobre " + tema);

alert("Atividade adicionada!");

}