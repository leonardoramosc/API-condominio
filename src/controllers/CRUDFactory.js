const { internalHandler } = require('../utils/errorHandler');

exports.getAll = Model => async (req, res) => {
  try {
    const records = await Model.findAll();

    res.status(200).json({
      status: 'success',
      data: {
        records
      }
    })
  } catch (err) {
    internalHandler(err, res);
  }
}

exports.getOne = Model => async (req, res) => {

  // Obtener el nombre del parametro (el id del recurso. ejemplo: "ownerId")
  const idKey = Object.keys(req.params)[0];
  // Obtener el valor de ese parametro (ejemplo: "1")
  const idValue = req.params[idKey];

  try {
    const record = await Model.findOne({ where: { id: idValue } });

    if(!record){
      return res.status(404).json({
        status: 'fail',
        msg: 'The record requested does not exist.'
      })
    }

    res.status(200).json({
      status: 'success',
      data: {
        record
      }
    })
  } catch (err) {
    internalHandler(err, res);
  }
}

exports.updateOne = Model => async (req, res) => {
  // Obtener el nombre del parametro (el id del recurso. ejemplo: "ownerId")
  const idKey = Object.keys(req.params)[0];
  // Obtener el valor de ese parametro (ejemplo: "1")
  const idValue = req.params[idKey];

  const fields = Object.keys(req.body);

  try {
    await Model.update({...req.body}, {
      where: {
        id: idValue
      },
      fields: fields
    });

    const updatedRecord = await Model.findOne({ where: { id: idValue } });

    res.status(200).json({
      status: 'success',
      data: updatedRecord
    })
  } catch(err) {
    console.log(err);
    internalHandler(err, res);
  }
  

}

exports.createOne = (Model, uniqueCol) => async (req, res) => {
  // Clause sera usado como clausula en la condicion where
  let clause = {};

  /*
  UniqueCol debe ser un array con todas las columnas cuyos valores no deberian repetirse,
  en caso de haber varias, se agregaran a la clausula de la siguiente forma:
  {'inmueble': 'pb-a', 'email': 'example@gmail.com'}, esta clausula es inferida
  en sequelize como una operacion AND, en este caso se chequea si ya existe un
  registro que contenga el inmueble pb-a con el email example@gmail.com.
   */
  uniqueCol.forEach(field => {
    clause[field] = req.body[field]
  })

  try {
    const [instance, created] = await Model.findOrCreate({
      where: clause,
      defaults: {
        ...req.body
      }
    });

    if(!created){
      return res.status(409).json({
        status: 'fail',
        msg: `The record already exist.`
      });
    }

    return res.status(201).json({
      status: 'success',
      msg: 'Reacord succesfully created',
      data: {
        instance
      }
    });
  } catch(error) {
    internalHandler(err, res);
  }
}
