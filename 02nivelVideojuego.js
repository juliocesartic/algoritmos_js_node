'use strict'

var nivel = parseInt(process.argv[2])
var resultadoNivel = ''

if (nivel < 10) {
    resultadoNivel = 'Aprendiz'
}
else if (nivel >= 10 && nivel < 20){
    resultadoNivel = 'Acrobata'
}
else {
    resultadoNivel = 'Ninja'
}

console.log(resultadoNivel)
