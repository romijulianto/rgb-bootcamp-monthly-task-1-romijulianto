'use strict';

const bcrypt = require("../../utils/bcrypt");

module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert('users', [{
            username: 'Romi Julianto',
            email: 'romijuulianto@gmail.com',
            password: await bcrypt.hash('password'),
            createdAt: new Date(),
            updatedAt: new Date()
        }]);
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('users', null, {});
    }
};