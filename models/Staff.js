const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Staff extends Model {}

Staff.init({
    fullName: {
        type: DataTypes.DATE,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: true
    },
    birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    phone: {
        type: DataTypes.DATE,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
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
