const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class BloodRequest extends Model {}

BloodRequest.init({
    group: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    disease: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    animalId: {
        type: DataTypes.INTEGER,
        field: 'animal_id',
        allowNull: false
    },
    clinicId: {
        type: DataTypes.INTEGER,
        field: 'clinic_id',
        allowNull: false
    }
},{
    sequelize,
    modelName: 'blood_requests',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id'] }
    // }
});

// Clinics.associate = ( models ) => {
//     Clinics.hasMany(models.Animals);
// };

module.exports = BloodRequest;
