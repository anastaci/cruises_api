const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Donations extends Model {}

Donations.init({
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expireAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    weight: {
        type: DataTypes.STRING,
        allowNull: false
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false
    }
    //donor, doctor, blood bank ids
},{
    sequelize,
    modelName: 'users',
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
