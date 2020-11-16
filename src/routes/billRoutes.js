const express = require('express');
const billController = require('../controllers/billController');

const router = express.Router();

router
  .route('/')
  .get(billController.getAllBills)
  .post(billController.createBill);

router
  .route('/:billId')
  .get(billController.getOneBill)
  .patch(billController.updateOneBill);

module.exports = router;