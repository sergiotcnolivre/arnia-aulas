const io = require('../io/io')

const Pares = (numero) => {
    const nPares = []

    for (let i = 0; i < numero.length; i++){
        if (numero[i] % 2 === 0){
            nPares.push(numero[i])
        }
    }
    return nPares
}

const numeros = []
const quantidade = 5

for (let i = 0; i < quantidade; i++){
    io.write(`Digite o ${i + 1}º numero:`)
    const numero = io.readInt()
    numeros.push(numero)
}

const numerosPares = Pares(numeros)
io.write(numerosPares)