const express = require('express')
const chefs = require('./chef-section.json');
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
  res.send(chefs);
})

app.listen(port, () => {
  console.log(`Runnig port: ${port}`)
})