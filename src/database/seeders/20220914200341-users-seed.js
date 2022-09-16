'use strict';

const bcrypt = require("../../utils/bcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            id: 1,
            username: 'Romi Julianto',
            email: 'romijuulianto@gmail.com',
            password: await bcrypt.hash('romijulianto'), // password('plaintext')
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};