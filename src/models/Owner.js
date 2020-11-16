const owner = (sequelize, DataTypes) => {
    const Owner = sequelize.define('Owner', {
        nombre: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        inmueble: {
            type: DataTypes.STRING(20),
            allowNull: false,
            unique: true
        },
        correo: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        telefono: {
            type: DataTypes.STRING(20)
        }
    }, {
        freezeTableName: true,
        tableName: 'propietarios',
        timestamps: false
    });
    
    Owner.associate = (models) => {
        Owner.belongsToMany(models.Bill, { through: models.Debt });
    }

    return Owner;
}

module.exports = owner;
