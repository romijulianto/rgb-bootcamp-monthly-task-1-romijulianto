const controller = require('../modules/auth/controller/auth-controller');
const validation = require('../middleware/validation');
const { loginRequest } = require('../modules/auth/request/auth-request');

module.exports = function(express) {
    const route = express.Router();

    route.post('/login', loginRequest, validation, controller.login);

    return route;
}