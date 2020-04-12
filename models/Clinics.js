const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Clinics extends Model {}

Clinics.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
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

// Clinics.associate = ( models ) => {
//     Clinics.hasMany(models.Animals);
// };

module.exports = Clinics;
