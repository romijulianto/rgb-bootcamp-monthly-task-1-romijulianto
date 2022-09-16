'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('projects', [{
                id: 1,
                id_category: 2,
                author: 'Romi Julianto',
                image: 'https://rollingglory-web.s3.ap-southeast-1.amazonaws.com/images/project/banner1638186675-blackmores.png',
                publishedAt: '2022-09-16',
                summary: 'Beautiful Revamp for Blackmores Website',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 2,
                id_category: 1,
                author: 'Romi Julianto',
                image: 'https://rollingglory-web.s3.ap-southeast-1.amazonaws.com/images/project/banner1641282729-ppm-interactive-module.png',
                publishedAt: '2022-09-16',
                summary: 'Study case of PPM Interactive Module',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                id: 3,
                id_category: 3,
                author: 'Romi Julianto',
                image: 'https://rollingglory-web.s3.ap-southeast-1.amazonaws.com/images/project/banner1638170007-mitra-keluarga.png',
                publishedAt: '2022-09-16',
                summary: 'Company Profile Website for Mitra Keluarga Hospital',
                createdAt: new Date(),
                updatedAt: new Date()
            },
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('projects', null, {});
    }
};