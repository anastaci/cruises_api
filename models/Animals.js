const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Animals extends Model {}

Animals.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // ownerId:{
    //     type: DataTypes.INTEGER,
    //     allowNull:false
    // },
    birth: {
        type: DataTypes.DATE,
        allowNull: false
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: true
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: false
    },
    bloodGroup: {
        type: DataTypes.STRING,
        field: 'blood_group',
        allowNull: true
    },
},{
    sequelize,
    modelName: 'animals',
    underscored: true,
    timestamps: false,
    // defaultScope: {
    //     attributes: { exclude: ['id', 'userId'] }
    // }
});

Animals.associate = ( models ) => {
    Animals.belongsTo(models.Users);
};

module.exports = Animals;
