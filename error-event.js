console.log('proceso inicializado')

setTimeout(() => {
  throw new Error('se pudiro')
}, 5000)

process.on('uncaughtException', (error) => {
  console.log('hola')
})
