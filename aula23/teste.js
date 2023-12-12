const io = require('./io/io')

const array = []
let total

for (let i = 0; i < 4; i++) {
    io.write('Digite um numero')
    let tmp = io.readInt()
    total = total + tmp
    array.push(tmp)
    
}
io.write(array)
io.write(total)
