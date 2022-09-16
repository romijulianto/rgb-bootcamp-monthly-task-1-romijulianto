'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('projectcategories', [{
                id: 1,
                category_name: 'Teknologi',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                category_name: 'Kesehatan',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                category_name: 'Metaverse',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('projectcategories', null, {});
    }
};