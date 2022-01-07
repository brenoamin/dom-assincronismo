const mostrarSenha = document.querySelector(".input-img img")
const senha=document.querySelector(".input-img input")


mostrarSenha.addEventListener("click", function () {
    if (mostrarSenha.getAttribute("src")=="assets/olho-aberto.svg") {
        mostrarSenha.setAttribute("src", "assets/olho-fechado.svg")
        senha.type="password"
    }
    else {
        mostrarSenha.setAttribute("src", "assets/olho-aberto.svg")
        senha.type="text"
    }
})