const imagens = document.querySelectorAll(".images img")
const imagemModal = document.querySelector(".modal img")
const modal = document.querySelector(".modal")
const linkModal = document.querySelector(".modal a")
function abrirModal(src) {
    imagemModal.src = src;
    modal.style.display = "flex"
    linkModal.href = src;
}
imagens.forEach(imagem => {
    imagem.addEventListener("click", function (event) {
        abrirModal(event.target.src)
    })
})

modal.addEventListener("click", function () {
    modal.style.display = "none"
})
linkModal.addEventListener("click", function(event){
    event.stopPropagation()
})

