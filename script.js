
const formulario = document.getElementById("form-login");
const usuario = document.getElementById("usuario");
const senha = document.getElementById("senha");
const senhaTexto = document.getElementById("senha-text");

const erroUsuario = document.getElementById("erro-usuario");
const erroSenha = document.getElementById("erro-senha");
const mensagemStatus = document.getElementById("mensagem-status");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const usuarioVazio = usuario.value.trim() === "";
    const senhaDigitada = senhaTexto.style.display !== "none"
        ? senhaTexto.value
        : senha.value;

    const senhaVazia = senhaDigitada.trim() === "";

    erroUsuario.textContent = "";
    erroSenha.textContent = "";
    mensagemStatus.textContent = "";
    mensagemStatus.classList.remove("mensagem-sucesso");

    usuario.classList.remove("campo-erro");
    senha.classList.remove("campo-erro");
    senhaTexto.classList.remove("campo-erro");

    if (usuarioVazio) {
        erroUsuario.textContent = "Preencha seu CPF ou e-mail.";
        usuario.classList.add("campo-erro");
    }

    if (senhaVazia) {
        erroSenha.textContent = "Preencha sua senha.";
        senha.classList.add("campo-erro");
        senhaTexto.classList.add("campo-erro");
    }

    if (!usuarioVazio && !senhaVazia) {
        mensagemStatus.textContent = "Formulário preenchido com sucesso!";
        mensagemStatus.classList.add("mensagem-sucesso");
    }
});
