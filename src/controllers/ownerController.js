const { Owner, uniqueColumns } = require('../models');
const factory = require('./CRUDFactory');

exports.getAllOwners = factory.getAll(Owner);
exports.createOwner = factory.createOne(Owner, uniqueColumns.owner);
exports.getOneOwner = factory.getOne(Owner);
exports.updateOneOwner = factory.updateOne(Owner);
exports.deleteOneOwner = factory.deleteOne(Owner);




