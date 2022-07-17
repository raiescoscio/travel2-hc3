const axios = require("axios").default;

const options = {
  method: 'POST',
  url: 'https://travellog.vtexcommercestable.com.br/api/creditcontrol/accounts',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'X-VTEX-API-AppKey': 'vtexappkey-travellog-GYIKGC',
    'X-VTEX-API-AppToken': 'UXJSBMOSGMJDFOIHIMPKQVGTKIIFBQUAGSMTUVCGZFDVCSGCMOXVTMNPYZZRVGPDQURHYFEGOUZLLPGHNTIAPBQCDXDWUOCCLUNFQSEZVHGGLGDJGPMUKRJPUKMTSONC'
  },
  data: {
    document: '99999999999',
    documentType: 'CPF ou CNPJ ou Other',
    email: 'email@email.com',
    creditLimit: '500',
    description: 'description',
    tolerance: '1'
  }
};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});