// Exercício 1
let metros = prompt("Digite o valor para ser convertido: ");

cm = metros * 100;

alert(`${metros} metros são ${cm} centímetros`);

// Exercício 2
let peso = parseFloat(prompt("Digite seu peso"));
let altura = parseFloat(prompt("Digite sua altura"));

imc = peso / (altura * altura);

alert(`Seu IMC é igual a ${imc.toFixed(2)}`);
if (imc < 18.5) {
    alert("Você está abaixo do peso normal");
}
else if (18.5 <= imc && imc < 24.9){
    alert("Você está no peso ideal")
}
else if (24.9 <= imc && imc < 29.9){
    alert("Você está levemente acima do peso")
}
else if (29.9 <= imc && imc < 34.9){
    alert("Você tem obesidade grau I")
}
else if (34.9 <= imc && imc < 39.9){
    alert("Você tem obesidade grau II (severa)")
}
else if (imc >= 39.9){
    alert("Você tem obesidade grau III (mórbida)")
}