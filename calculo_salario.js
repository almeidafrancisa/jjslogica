const prompt = require('prompt-sync')()
var salario, tempoTrabalho, resultado
salario = parseFloat(prompt('Informe seu salário: '))
tempoTrabalho = parseInt(prompt('Informe o seu tempo de trabalho: '))

if (tempoTrabalho >= 5) {
    resultado = (salario * 0.2) + salario
} else {
    resultado = (salario * 0.1) + salario
}

console.log('em ${tempoTrabalho} anos de trabalho,seu salario será de  R$ ${resultado}')