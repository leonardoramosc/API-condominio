const express = require('express');
const billController = require('../controllers/billController');

const router = express.Router();

router.param('billId', (req, res, next, id) => {
  req.resourceID = id;
  next();
});

router
  .route('/')
  .get(billController.getAllBills)
  .post(billController.createBill);

router
  .route('/:billId')
  .get(billController.getOneBill)
  .patch(billController.updateOneBill)
  .delete(billController.deleteOneBill);

module.exports = router;