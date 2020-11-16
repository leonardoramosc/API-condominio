const debt = (sequelize, DataTypes) => {
    const Debt = sequelize.define('Debt',{}, {
        freezeTableName: true,
        tableName: 'deudas',
        timestamps: false
    });
    return Debt;
}

module.exports = debt;

