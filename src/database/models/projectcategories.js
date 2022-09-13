'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projectCategories extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            this.belongsTo(models.projects, {
                as: 'project',
                foreignKey: 'id'
            });
            this.belongsTo(models.users, {
                as: 'user',
                foreignKey: 'id'
            });
        }
    }
    projectCategories.init({
        category_name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'projectCategories',
    });
    return projectCategories;
};