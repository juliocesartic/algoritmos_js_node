'use strict'

const hambre = Boolean(process.argv[2])
var mood = ''

if (hambre == true) {
    mood = 'Triste'
}
else {
    mood = 'Feliz'
}
    
console.log(mood)

