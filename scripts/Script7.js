const filmes = ["Harry Potter", "Spider-Man", "Toy Story 5"]

console.log(filmes)

const filmesModificados = filmes.map((filmeAtual, posicao) => `O filme ${filmeAtual} está na posição ${posicao}`)

console.log(filmesModificados)

function somar(a, b){
    return a + b
}

const somar2 = (a, b) => a + b

const mudarFilmes = listaFilme => listaFilme.map(filme => filme.toUpperCase())

const precos = [12, 33, 25, 20, 63, 55]

const desconto = precos.map((preco) => `O preço: R$${preco} com desconto é: ${preco * 0.9}`)



console.log(desconto)