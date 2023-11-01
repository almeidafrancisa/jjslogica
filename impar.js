const prompt = require('prompt-sync')() 

var numero = parseInt(prompt('Informe um numero? '))

if (numero % 2 === 1) {
    console.log(`o numero ${numero} é impa`)
}else{
    console.log(`O numero ${numero} é par`)
}
