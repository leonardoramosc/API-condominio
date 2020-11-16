const express = require('express');
const debtController = require('../controllers/debtController');

// mergeparams sirve para recivir los parametros de otras rutas
// En este caso, se reciben los parametros de la ruta '/:ownerId/debts'
const router = express.Router({ mergeParams: true });

router
  .route('/')
  .get(debtController.getAllDebts)
  .post(debtController.createDebt);

module.exports = router;