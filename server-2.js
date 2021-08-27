require('dotenv').config();
const http = require('http')
const querystring = require('querystring');

const {HOST, PORT } = process.env;

const baseURL = `http://${HOST}:${PORT}`

const server = http.createServer()

// funcion que analiza el body de la req y lo parsea
function bodyParser(req) {
  return new Promise((resolve) => {
    let body = []
    // si el body del request tiene data, se ejecuta este evento
    req.on('data',
      // pone los datos binarios en el array body, para luego usarlo.
      (chunk) => body.push(chunk))

    // cuando se termina de ejecutar el evento data, se ejecuta el end
    req.on('end', () => {

      // deserializar el array del buffer. Se convierte el binario que recivo a string
      body = Buffer.concat(body).toString()

      // se convierte el string a un objeto y resuelve
      // si viene en formato x-www-form-urlencoded (el formato viene en el encabezado):
      resolve(querystring.parse(body))

      // si viene en formato JSON:
      // resolve(JSON.parse(body))

    })
  })
}

// se ejecuta cada vez que el server recibe una peticion
server.on('request',async (req, res) => {
  // creamos un objeto URL.
  const urlInfo = new URL(req.url, baseURL)

  // Obtenemos el path de la URL.
  const url = urlInfo.pathname

  // Obtengo los parametros del querystring de la url y lo guardamos en la req
  req.querystring = urlInfo.searchParams

  // Parseamos el body y lo convertimos en un objeto JS
  // Luego lo guardamos de nuevo en el request (que tenia el body sin parsear)
  req.body = await bodyParser(req)

  const method = req.method

  if (urlPath === '/' && method === 'GET') {

  }

  res.end()
})

server.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`)
})