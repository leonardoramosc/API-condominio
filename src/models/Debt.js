const debt = (sequelize, DataTypes) => {
    const Debt = sequelize.define('Debt', {
      monto: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
      },
      concepto: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    }, {
        freezeTableName: true,
        tableName: 'deudas',
        timestamps: false
    });

    Debt.associate = (models) => {
      Debt.belongsTo(models.Owner, {hooks: true});
    }

    return Debt;
}

module.exports = debt;

