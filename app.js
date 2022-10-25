const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const generatePassword = require('./generate_password.js')

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  const password = generatePassword(options)
  res.render('index', {password, options})
})

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`)
})