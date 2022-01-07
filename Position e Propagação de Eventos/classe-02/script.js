const icone = document.querySelector(".icone-img img")
const cardModal = document.querySelector(".card-modal")

icone.addEventListener("click", function (event) {
    const iconeClicado = event.target;
    if(cardModal.classList.contains("escondido")){
        cardModal.classList.remove("escondido")
    }
    else{
        cardModal.classList.add("escondido") 
    }
})