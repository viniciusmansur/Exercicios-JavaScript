const btn = document.querySelector("#btnAdicionar");
const input = document.querySelector("#inputFilme");
const res = document.querySelector("#resultado")

let filmes = ["Todo mundo em pânico", "Barbie", "Bad boys"]
filmes.push("Harry Potter")
filmes.unshift("Star Wars")

btn.addEventListener("click", function clicar(){
    let texto = input.value;
    filmes.push(texto)

    renderizar()
})

function renderizar(){

    document.querySelector("#listaFilmes").innerHTML = ""
    filmes.forEach(function loopArrays(elementoAtual, indice){

        const filme = document.createElement("li")
        filme.textContent = elementoAtual
        document.querySelector("#listaFilmes").append(filme)

        const btnEditar = document.createElement("button")
        btnEditar.textContent = "Editar"
        filme.append(btnEditar)

    })
}

renderizar()