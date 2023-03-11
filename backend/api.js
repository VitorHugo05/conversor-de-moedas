const axios = require('axios');
const express = require('express')
const app = express()
const cors = require('cors')

const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL';

const port = '3000'

app.use(cors())

async function getUSDtoBRL() {
    try {
      let output = {}
      const response = await axios.get(url);
      output += response.data.USDBRL.high + ", ";
      output += response.data.EURBRL.high + ", ";
      output += response.data.BTCBRL.high;
      postCoins(output)
    } catch (error) {
      console.error(error);
    }
  }

getUSDtoBRL();

async function postCoins(body) {
  app.post('/dolar', (req, res) => {
    res.json(body)
  })
}

app.listen(port, () => {
  console.log(`api run in ${port}`)
})

