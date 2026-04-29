// let nome = prompt("Digite um texto")

// function limpeza (texto){
    
//     texto = texto.trim().toUpperCase()
//     return texto
// }

// console.log(limpeza(nome))

let nome = prompt("Digite um texto")

function formatacao (texto) {
    texto = texto.toLowerCase()

    if (texto.includes('a')){
        texto = texto.replaceAll('a', 'o')
        return texto
    } 
    
    return "erro"
}

console.log(formatacao(nome))