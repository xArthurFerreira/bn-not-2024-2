const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');

app.use(express.json());
app.use(express.static('views'));

app.use('/', userRoutes);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});
