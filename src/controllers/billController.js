const { Bill, uniqueColumns } = require('../models');

const factory = require('./CRUDFactory');

exports.getAllBills = factory.getAll(Bill);
exports.getOneBill = factory.getOne(Bill);
exports.updateOneBill = factory.updateOne(Bill);
exports.deleteOneBill = factory.deleteOne(Bill);

exports.createBill = factory.createOne(Bill, uniqueColumns.bill);
