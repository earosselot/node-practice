/**
 * ################
 * ## Calculator ##
 * ################
 *
 * Crea una calculadora que reciba 3 argumentos: tipo de operación,
 * número A y número B.
 *
 *      - node calculadora.js resta 100 33
 *
 *      - node calculadora.js divide 100 33
 *
 * A mayores debe recibir la variable de entorno LANG. En función de
 * LANG se mostrará un resultado en un idioma diferente:
 *
 *      - Para: LANG=es node calculadora suma 10 20
 *      - Salida: El resultado de sumar 10 y 20 es: 30
 *
 *      - Para: LANG=en node calculadora suma 10 20
 *      - Salida: The result of adding 10 and 20 is: 30
 *
 */

const math = require('./maths2')
const languages = require('./languages')
const [operation, numAstr, numBstr] = process.argv.splice(2)
const language = process.env.LANG

if (language !== 'es' && language !== 'en') {
	throw new Error('Idioma incorrecto')
}

if (!operation || !numAstr || !numBstr) {
	console.error('se necesitan 3 argumentos: operacion numeroA numeroB')
	process.exit(1)
}

const validOperations = ['suma', 'resta', 'multiplicacion', 'division']
let numA = Number(numAstr)
let numB = Number(numBstr)


if (!validOperations.includes(operation)) {
	console.error('La operacion no es valida. Las opraciones validas son: suma, resta, multiplicacion y division.')
	process.exit(1)
}

if (isNaN(numA) || isNaN(numB)) {
	console.error('Numeros no validos')
	process.exit(1)
}

const result = math[operation](numA, numB)

if (isNaN(result)) {
	console.error('Resultado indeterminado.')
	process.exit(1)
}

if (!isFinite(result)) {
	console.error('El resultado es infinito.')
	process.exit(1)
}

if (language === 'es') {
	console.log(`El resultado de ${languages[operation][language]} ${numA} y ${numB} es: ${result}`)
} else if(language === 'en') {
	console.log(`The result of ${languages[operation][language]} ${numA} and ${numB} is: ${result}`)
}
