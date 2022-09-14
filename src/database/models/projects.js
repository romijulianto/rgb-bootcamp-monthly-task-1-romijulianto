'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class projects extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasMany(models.projectCategories, {
                as: 'projectCategory',
                foreignKey: 'id_category'
            });
        }
    }
    projects.init({
        id_user: DataTypes.STRING,
        id_category: DataTypes.STRING,
        author: DataTypes.STRING,
        image: DataTypes.STRING,
        publishedAt: DataTypes.DATE,
        summary: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'projects',
    });
    return projects;
};