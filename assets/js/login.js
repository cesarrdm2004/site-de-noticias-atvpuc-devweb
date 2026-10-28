import { usuario } from "./bd.js"

const email = "admin@email.com";
const senha = "1234";

function verificarCredenciais() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === usuario.email ) {
        alert("E-mail informado corretamente!");
        if(senhaInformada === senha) {
            alert("Senha correta!");
            window.location = "home.html";
        } else 
            alert("Senha incorreta!");
    } else 
        alert("E-mail incorreto!");
}

document.addEventListener("DOMContentLoaded", () => {
    const botao = document.querySelector("button");
    botao.addEventListener("click", verificarCredenciais);
});