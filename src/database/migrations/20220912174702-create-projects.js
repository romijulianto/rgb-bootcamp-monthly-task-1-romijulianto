'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('projects', {
            id: {
                type: Sequelize.UUID,
                defaultValue: Sequelize.UUIDV4,
                allowNull: false,
                primaryKey: true

            },
            id_category: {
                allowNull: false,
                type: Sequelize.STRING,
            },
            author: {
                type: Sequelize.STRING
            },
            image: {
                type: Sequelize.STRING
            },
            publishedAt: {
                type: Sequelize.DATE
            },
            summary: {
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
        await queryInterface.dropTable('projects');
    }
};