const { parse } = require('date-fns')
const { es } = require('date-fns/locale')

const wrongDate = '3/diciembre/94 4:13PM'

const newDate = parse(wrongDate, 'd/MMMM/yy h:ma', new Date(), {locale: es})

console.log(newDate.toLocaleString('es'))