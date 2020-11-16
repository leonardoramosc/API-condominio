const bill = (sequelize, DataTypes) => {
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
    timestamps: false
  });

  Bill.associate = (models) => {
    Bill.belongsToMany(models.Owner, { through: models.Debt });
  }

  return Bill;
}


module.exports = bill;

// id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     mes VARCHAR ( 20 ) NOT NULL,
//     año VARCHAR ( 4 ) NOT NULL,
//     monto NUMERIC (6, 2) NOT NULL