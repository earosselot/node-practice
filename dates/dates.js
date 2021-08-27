const { format } = require('date-fns')
const { es } = require('date-fns/locale')

const now = new Date()

const formatDate = format(now, 'yyyy-MM')

console.log(formatDate)

const formatDateAdv = format(now, `EEEE, d 'de' MMMM 'de' yyyy`, {
  locale: es,
})

console.log(formatDateAdv)