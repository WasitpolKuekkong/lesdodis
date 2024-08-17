const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/frog', function (req, res) {
    res.send('Muhahaha')
})

app.listen(3000)