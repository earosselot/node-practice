const sharp = require('sharp')
const path = require('path')

async function editPhoto() {

  try {
    const imagePath = path.join(__dirname, 'pics', 'f1.jpeg')
    const imageOutPath = path.join(__dirname, 'pics/f1-3.jpg')

    const image = sharp(imagePath)

    image.resize(400, 400, {
      fit: 'cover',
    })

    await image.toFile(imageOutPath)
    console.log('la imagen se ha modificado')

  } catch (e) {
    console.log(e.message)
  }

}

editPhoto()