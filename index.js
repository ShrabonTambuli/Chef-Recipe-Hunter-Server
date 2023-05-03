const express = require('express')
const cors = require('cors');
const chefs = require('./chef-section.json');
const app = express()
const port = 5000

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chefs/:id', (req, res) => {
    const id = req.params.id;
    const chef = chefs.find(chef => chef.id === id) || {};
    res.send(chef);
})

app.listen(port, () => {
    console.log(`Runnig port: ${port}`)
})