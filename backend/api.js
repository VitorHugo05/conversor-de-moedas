const axios = require('axios');

const url = 'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL,BTC-BRL'




async function getUser() {
    try {
      const response = await axios.get(url);
      return response
    } catch (error) {
      console.error(error);
    }
  }


if (typeof document !== 'undefined') {
    document.createElement('a').setAttribute('texto', 'id')
    const b = document.querySelector('.texto')
    return b
}

getUser().then(response => b.innerHTML = `${response.data}`)