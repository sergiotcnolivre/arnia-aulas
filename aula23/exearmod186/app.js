const io = require('../io/io')

let soma = 0
let executar = true
let numeros = []

while (executar) {
    io.write('Digite um número:')
    const numero = io.readInt()

    if (numero > -1) {
        numeros.push(numero)
        soma = soma + numero
    } else {
        executar = false
    }
}

const quantidade = numeros.length
const resultado = soma / quantidade

io.write('Os números informados: ')
io.write(numeros)
io.write('A média dos números é: ' + resultado)