'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('statuses', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            id: {
                type: Sequelize.UUID
            },
            title: {
                type: Sequelize.STRING
            },
            body: {
                type: Sequelize.STRING
            },
            id_user: {
                allowNull: false,
                references: {
                    model: {
                        tableName: 'users'
                    },
                    key: 'id'
                },
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
        await queryInterface.dropTable('statuses');
    }
};