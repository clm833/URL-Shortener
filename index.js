const { port, host } = require('./config/config');
const express = require('express')
const app = express()

// Parse incoming request body in JSON format.
app.use(express.json({
  extended: false
})) 

//Routes
app.use('/api/url', require('./routes/url'));
app.use('/', require('./routes/redirect'))

//Listen for incoming requests
app.listen(port, () => {
  console.log(`Shortener app listening at http://${host}:${port}`)
})
