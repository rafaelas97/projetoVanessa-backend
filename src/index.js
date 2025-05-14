const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('./database/connection');

app.use(express.json());

app.use('/parques', require('./routes/parqueRoutes'));
app.use('/reservas', require('./routes/reservaRoutes'));
app.use('/feedbacks', require('./routes/feedbackRoutes'));
app.use('/', require('./routes/pagesRoutes'));

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});