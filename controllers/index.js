// si no especifico archivo busca el index.js, si no esta no importa nada
const { html } = require('../components')

function news(req, res) {

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')

}
