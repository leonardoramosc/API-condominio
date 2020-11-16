const express = require('express');
const ownerRouter = require('./routes/ownerRoutes');
const billRouter = require('./routes/billRoutes');
const debtRouter = require('./routes/debtRoutes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 3) ROUTES
app.use('/api/v1/propietarios', ownerRouter);
app.use('/api/v1/recibos', billRouter);
app.use('/api/v1/deudas', debtRouter);

module.exports = app;