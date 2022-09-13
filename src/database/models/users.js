'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.hasMany(models.projectCategories, {
                as: 'projectCategory',
                foreignKey: 'id'
            });
            this.hasMany(models.projects, {
                as: 'project',
                foreignKey: 'id'
            });
            this.belongsToMany(models.roles, {
                as: 'role',
                foreignKey: 'id'
            });
            this.hasMany(models.status, {
                as: 'status',
                foreignKey: 'id'
            });
        }
    }
    users.init({
        username: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'users',
    });
    return users;
};