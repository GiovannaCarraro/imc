// Obter os elementos
// tratar os dados, exibir od ados de forma correta
// fazer os calculos

const inputPeso = document.getElementById('weight');
const inputAltura = document.getElementById('height');
const textoResultado = document.getElementById('resultText');
const formulario = document.getElementById('resultText');

function mostarResultado(mensagem) {
    textoResultado.textContent = mensagem;
}

function calcularIMC(){
const peso = parseFloat(inputPeso.value);
const altura = parseFloat(inputAltura.value);

if (isNaN(peso)) || isNaN(altura) || peso <= 0 ||altura <=0) {
    mostarResultado("por favor, insira uma resposta valida");
    return;
}

const imc = peso / (altura * altura);
let classifacao = "";


function classificarIMC(){
if(imc < 18.5){
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Sobrepeso')
} else {
    console.log('Obesidade');
}
}
};