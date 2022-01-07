const root = document.querySelector("body")
const div = document.querySelector("div.paises")
const input = document.querySelector("input")

fetch("https://restcountries.eu/rest/v2/all").then(function (resposta) {
    const promiseBody = resposta.json();
    promiseBody.then(function (body) {
        body.forEach(item => {
            const nome = document.createElement("h2")
            const regiao = document.createElement("span")
            const capital = document.createElement("span")
            const populacao = document.createElement("p")
            const bandeira = document.createElement("img")
            const container = document.createElement("div");
            container.classList.add("country-container")
            nome.textContent = item.name;
            regiao.textContent = item.region;
            capital.textContent = item.capital;
            populacao.textContent = item.population;
            bandeira.src = item.flag;
            container.append(nome, regiao, capital, populacao, bandeira)
            div.append(container)
            root.append(div)
        })
    })
})
input.addEventListener("keydown", function (event) {
    if (event.key == "Enter") {
        const countryContainer = document.querySelectorAll(".country-container")
        countryContainer.forEach(item => {
            if (!input.value) {
                item.classList.remove("escondido")
                return;
            }
            if (!item.firstChild.textContent.includes(input.value)) {
                item.classList.add("escondido")
            }
        })
    }
})


