const express = require('express');

const app = express();

app.use(express.json());

const PORT = 3001; 

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  console.log('funcionando');
});

app.listen(PORT, () => {
  console.log('Online');
});
