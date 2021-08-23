const http = require('http');
const { sum } = require('./calculadora');

const hostname = '127.0.0.1'
const port = 4000

const server = http.createServer((request, response) => {

  response.statusCode = 200
  response.setHeader('Content-Type', 'text/html')
  response.end('<h1>Hello world!</h1>')
})

server.listen(port, hostname, () => {
  console.log(process.argv.slice(2))
  console.log(`Server listening on http://${hostname}:${port}`)
})
