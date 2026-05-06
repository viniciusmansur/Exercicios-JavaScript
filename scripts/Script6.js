let i1 = 0;

function aumentarNumero(num) {
    while (num <= 10){
        console.log(num);
        num++;
    }
}

aumentarNumero(i1)

let i;
do {
    i = Number(prompt("Digite um número"))
} while (isNaN(i))

for (let i = 0; i <= 10; i++){
    console.log(i)
}

// Exercício 1
let n1 = Number(prompt("Digite um número"));

function diminuirNumero (i) {
    while (i >= 0){
        console.log(i);
        i--;
    }
}

diminuirNumero(n1)

// Exercício 2
let nome;
let idade;
let sal;
let gen;
let estciv;

do {
    nome = prompt("Digite seu nome");
} while (nome.length <= 3);

do {
    idade = Number(prompt("Digite sua idade"));
} while (idade < 0 || idade > 150);

do {
    sal = parseFloat(prompt("Digite seu salário"));
} while (sal < 0);

do {
    gen = prompt("Digite seu gênero");
} while (gen !== 'f' && gen !== 'm');

do {
    estciv = prompt("Digite seu estado civil");
} while (estciv !== 's' && estciv !== 'c' && estciv !== 'v' && estciv !== 'd');

// Exercício 3
let n = Number(prompt("Digite um número"));

for (i = 0; i <= 10; i++){
    console.log(`${n} X ${i} = ${n * i}`)
}