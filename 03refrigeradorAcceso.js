'use strict'

var nombre = process.argv[2]
var contraseña = process.argv[3]
var abrirRefrigerador = ''
if (nombre == 'Julio' && contraseña == 'abcd1234'){
    abrirRefrigerador = 'Se abre Refrigerador'
}
else {
    abrirRefrigerador = 'No se abre Refrigerador'
}

 console.log(abrirRefrigerador)
