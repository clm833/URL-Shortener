const express = require('express')
const app = express()

// CONFIG
const PORT = process.env.PORT || 3000;

//ROUTES
app.get('/', (req, res) => {
  res.send('Hola CM')
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
