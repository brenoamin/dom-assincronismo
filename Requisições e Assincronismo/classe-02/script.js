const inputCripto = document.querySelector("#cripto")
const preco = document.querySelector(".maior-preco")
const quantidade = document.querySelector(".quantidade")
const maiorOferta = document.querySelector(".oferta")

inputCripto.addEventListener("change", function () {
    if(inputCripto.value===""){
        return;
    }
    const promiseResposta = fetch(`https://www.mercadobitcoin.net/api/${inputCripto.value}/ticker/`);
    promiseResposta.then(function (resposta) {
        const promiseBody = resposta.json();
        promiseBody.then(function (body) {
            preco.textContent = Number(body.ticker.high).toFixed(2);
            quantidade.textContent= Number(body.ticker.vol).toFixed(2);
            maiorOferta.textContent = Number(body.ticker.buy).toFixed(2);
        })
    })
})