const express = require('express');
const app = express();
const path = require('path')

const port = '8000'

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.listen(port, () => {
    console.log(`Seu site está rodando em http://localhost:${port}`)
})

