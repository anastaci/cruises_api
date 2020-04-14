const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Clinic extends Model {}

Clinic.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },

},{
    sequelize,
    modelName: 'clinics',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

Clinic.associate = ( models ) => {
    Clinic.hasMany(models.Staff, {
        as: 'staff'
    });
};

module.exports = Clinic;
