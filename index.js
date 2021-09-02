const { port } = require('./config/config');
const express = require('express')
const app = express()

//ROUTES
app.get('/', (req, res) => {
  res.send('Hola CM')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
