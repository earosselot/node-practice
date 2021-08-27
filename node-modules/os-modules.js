const os = require('os')

console.log('Momoria total:', os.totalmem())
console.log('Memoria disponible:', os.freemem())

console.log('Hostname:', os.hostname())

console.log('ruta usuario: ', os.homedir())
console.log('Ruta de archivos temporales: ', os.tmpdir())