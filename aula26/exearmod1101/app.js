
const io = require('../io/io')

const inverterArray = (numeros) => {
    const numerosInvertidos = []

    for (let i = 0; i < numeros.length; i++) {
        //o método unshift insere o novo elemento no início do array, enquanto o push insere no final
        numerosInvertidos.unshift(numeros[i]) 
    }

    return numeros
}


const numeros = []
const quantidade = 5

for (let i = 0; i < quantidade; i++) {
    io.write(`Digite o ${i + 1}º número:`)
    const numero = io.readInt()
    numeros.push(numero) 
}

const array = inverterArray(numeros)
io.write(array)