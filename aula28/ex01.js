const io = require('./io/io')

let pessoas = []

for (let i = 0; i < 2; i++) {
    
    io.write(`Digite o ${i + 1} nome`)
    const nome = io.read()
    io.write(`Digite a ${i + 1} idade`)
    const idade = io.readInt()
    io.write(`Digite o ${i + 1} documento`)
    const documento = io.read()

    const obj = {
        nome,
        idade,
        documento
    }
    pessoas.push(obj)   
}

const maiorDeIdade = pessoas.filter((pessoa) => {
    return pessoa.idade > 17
})

console.log(maiorDeIdade)
