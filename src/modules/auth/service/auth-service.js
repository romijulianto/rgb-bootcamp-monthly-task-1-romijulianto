const { users } = require('../../../database/models');
const bcrypt = require("../../../utils/bcrypt");
const jwt = require('jsonwebtoken');
const role = require('/src/config/roles.js')
const ROLEs = role.ROLEs;

const AuthService = {
    /* method login check email/password */
    login: async(email, password, res) => {
        const user = await users.findOne({
            where: { email },
        });

        /* condition email/password invalid */
        if (!user) {
            return res.status(401).json({
                message: 'The email or password is invalid.',
            });
        }

        const isPassword = await bcrypt.compare(password, user.password);
        if (!isPassword) {
            return res.status(401).json({
                message: 'The email or password is invalid.',
            });
        }

        const token = jwt.sign({
            id: user.id,
            username: user.username,
            email: user.email,
        }, 'secret');

        return res.status(200).json({ data: { user, token } });
    }
}

module.exports = AuthService;