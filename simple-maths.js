

function double(num) {

  if (!Number.isFinite(num)) throw new Error('Por favor ingrese un numero')

  return 2 * num

}

module.exports = {double}