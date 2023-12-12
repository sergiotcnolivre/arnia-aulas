
const io = require('../io/io')

const somarNumeros = (numeros) => {
    let soma = 0

    for (let i = 0; i < numeros.length; i++) {
        soma = soma + numeros[i]
    }

    return soma
}


const numeros = []
const quantidade = 5

for (let i = 0; i < quantidade; i++) {
    io.write(`Digite o ${i + 1}º número:`)
    const numero = io.readInt()
    numeros.push(numero) 
}

const soma = somarNumeros(numeros)
io.write(soma)