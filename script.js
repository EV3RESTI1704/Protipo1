function entrar(tipo) {

/* salva o tipo (opcional, mas útil) */
localStorage.setItem("tipoUsuario", tipo);

/* redireciona */

if (tipo === "aluno") {
    window.location.href = "aluno.html";
}

if (tipo === "professor") {
    window.location.href = "professor.html";
}

}