const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Users extends Model {}

Users.init({
    fullName: {
        type: DataTypes.STRING,
        field: 'full_name',
        allowNull: false
    },
    sex: {
        type: DataTypes.STRING,
        allowNull: true
    },
    city: {
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
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
},{
    sequelize,
    modelName: 'users',
    underscored: true,
    timestamps: false,
    defaultScope: {
        attributes: { exclude: ['id'] }
    }
});

Users.associate = ( models ) => {
    Users.hasMany(models.Animals);
};

module.exports = Users;
