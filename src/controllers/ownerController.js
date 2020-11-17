const { Owner, uniqueColumns, Debt } = require('../models');
const factory = require('./CRUDFactory');

exports.getAllOwners = factory.getAll(Owner);
exports.getAllOwnersDebts = factory.getAll(Owner, {
  // Esta linea hace que se vean las deudas de cada propietario.
  include: [
    { model: Debt, required: true }
  ]
});
exports.createOwner = factory.createOne(Owner, uniqueColumns.owner);
exports.getOneOwner = factory.getOne(Owner);
exports.updateOneOwner = factory.updateOne(Owner);
exports.deleteOneOwner = factory.deleteOne(Owner);




