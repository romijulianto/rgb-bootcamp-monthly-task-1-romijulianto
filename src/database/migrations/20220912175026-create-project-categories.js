'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('projectCategories', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.STRING
            },
            category_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('projectCategories');
    }
};