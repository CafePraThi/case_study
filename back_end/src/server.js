const express = require('express');
const app = express();
const motoRouter = require('./routes/motoRoutes');
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/motos', motoRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

module.exports = app;


