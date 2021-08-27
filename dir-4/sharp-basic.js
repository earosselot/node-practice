
// isntalar sharp con npm
const sharp = require('sharp')

const image = sharp('./pics/pikachu.gif')

// Modificamos la imagen
image.grayscale()

// Guardamos la imagen
image.toFile('./edited/pikachu.jpg')
  .then(() => console.log('Imagen modificada'))
  .catch((error) => console.log(error));



