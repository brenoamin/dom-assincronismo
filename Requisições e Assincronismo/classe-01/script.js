const cepInput = document.querySelector("#cep")
const cityInput = document.querySelector("#city")
const ruaInput = document.querySelector("#rua")
const ufInput = document.querySelector("#uf")

cepInput.addEventListener("change", function () {
    if (cepInput.value.length !== 8) {
        console.log("ERRO!")
        return;
    }
    const promiseResposta = fetch(`https://viacep.com.br/ws/${cepInput.value}/json/`)
    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json()
        promiseBody.then(function (body) {
            if (body.erro) {
                console.log("ERRO!")
                return;
            }
            cityInput.value = body.localidade;
            ruaInput.value = body.logradouro;
            ufInput.value = body.uf;
        })
    })
})