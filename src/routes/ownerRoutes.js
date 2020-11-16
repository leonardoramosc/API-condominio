const express = require('express');
const ownerController = require('../controllers/ownerController');
const debtRouter = require('./debtRoutes');

const router = express.Router();

router.param('ownerId', (req, res, next, id) => {
  req.resourceID = id;
  next();
});

router.use('/:ownerId/debts', debtRouter);

router
  .route('/')
  .get(ownerController.getAllOwners)
  .post(ownerController.createOwner);

router
  .route('/:ownerId')
  .get(ownerController.getOneOwner)
  .patch(ownerController.updateOneOwner);

module.exports = router;

