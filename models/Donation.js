const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Donation extends Model {}

Donation.init({
    createdAt: {
        type: DataTypes.DATE,
        field: 'createdAt',
        allowNull: false
    },
    expireAt: {
        type: DataTypes.DATE,
        field: 'expireAt',
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bloodBankId: {
        type: DataTypes.INTEGER,
        field: 'bloodBank_id',
        allowNull: false
    },
    donorId: {
        type: DataTypes.INTEGER,
        field: 'donor_id',
        allowNull: false
    },
    doctorId: {
        type: DataTypes.INTEGER,
        field: 'doctor_id',
        allowNull: false
    },
},{
    sequelize,
    modelName: 'donations',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// Clinics.associate = ( models ) => {
//     Clinics.hasMany(models.Animals);
// };

module.exports = Donation;
