const express = require('express');
const toDoRoute = require('./Routes/toDoListRoute');
const cors  = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const PORT = 3001; 

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  console.log('funcionando');
});

app.use('/list', toDoRoute)

app.listen(PORT, () => {
  console.log('Online');
});
