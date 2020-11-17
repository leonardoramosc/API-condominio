const bill = (sequelize, DataTypes, models) => {
  const Bill = sequelize.define('Bill', {
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      unique: true
    },
    monto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
  }, {
    freezeTableName: true,
    tableName: 'recibos',
    timestamps: false,
    hooks: {
      async afterCreate(newBill){
        // obtener todos los propietarios
        const owners = await models.Owner.findAll();
        const months = [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        
        // insertar en deudas, a cada uno de los propietarios, el nuevo monto del recibo creado
        const concepto = `Relacion ${months[newBill.fecha.getMonth()]} ${newBill.fecha.getFullYear()}`;
        owners.forEach(async owner => {
          await models.Debt.create({monto: newBill.monto, concepto, OwnerId: owner.id});
        })
      }
    }
  });

  return Bill;
}


module.exports = bill;

// id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     mes VARCHAR ( 20 ) NOT NULL,
//     año VARCHAR ( 4 ) NOT NULL,
//     monto NUMERIC (6, 2) NOT NULL