const io = require('./io/io')

let x = 0

io.write('Digite o numero de vezes que voce deseja repetir a frase')
let n = io.readInt()
io.write('Digite a frase que você deseja ')
const frase = io.read()

while (x < n) {
    io.write(frase)
    x++
}