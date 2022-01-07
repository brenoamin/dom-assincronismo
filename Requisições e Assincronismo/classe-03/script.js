const inputPoke = document.querySelector("#nome-pokemon")
const nomePoke = document.querySelector(".poke-nome")
const pokePhoto = document.querySelector(".poke-photo")
const ul = document.querySelector("#poke-skill")

inputPoke.addEventListener("change", function () {
    const promiseResposta = fetch(`https://pokeapi.co/api/v2/pokemon/${inputPoke.value}/`)
    ul.innerHTML = ""
    promiseResposta.then(function (resposta) {
        if (!resposta.ok) {
            return
        }
        const promiseBody = resposta.json()
        promiseBody.then(function (body) {
            nomePoke.textContent = body.name;
            pokePhoto.src = body.sprites.front_default;
            for (i = 0; i < body.abilities.length; i++) {
                const listaPoke = document.createElement("li")
                listaPoke.innerHTML = body.abilities[i].ability.name;
                ul.append(listaPoke)
            }
        })
    })
})