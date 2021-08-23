const {double} = require('./simple-maths')

const argv = process.argv.splice(2)

  try {
    const dbl = double(Number(argv[0]))
    console.log(dbl)
  } catch (e) {
    console.log(e.message)
  }


