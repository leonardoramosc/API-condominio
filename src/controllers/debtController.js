const { Debt, Owner, Bill, uniqueColumns } = require('../models');

const factory = require('./CRUDFactory');

//exports.getAllDebts = factory.getAll(Debt);
exports.createDebt = factory.createOne(Debt, uniqueColumns.debt);

exports.getAllDebts = async(req, res) => {
  let filter = {};

  if(req.params.ownerId) filter.id = req.params.ownerId;

  try {
    const records = await Owner.findAll({
      where: filter,
      include: [
        { model: Bill, required: true }
      ]
    });

    res.status(200).json({
      status: 'success',
      data: records
    });

  } catch(err){
    console.log(err);
    return res.status(500).json({
      status: 'fail',
      msg: 'Internal Error'
    })
  }
}