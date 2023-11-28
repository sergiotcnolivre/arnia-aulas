const io = require('./io/io')
/* Receba um número e informe se ele é igual ou diferente de 10 */

io.write('Informe o lado 1:')
const lado1 = io.readInt()

io.write('Informe o lado 2:')
const lado2 = io.readInt()

io.write('Informe o lado 3:')
const lado3 = io.readInt()

if (lado1 < lado2 + lado3 && lado2 < lado1 + lado3 && lado3 < lado1 + lado2) {
    io.write('O triangulo existe')
} else {
    io.write('O triangulo não existe')
}


