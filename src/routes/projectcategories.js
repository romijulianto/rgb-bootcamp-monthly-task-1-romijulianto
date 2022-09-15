const controller = require('../modules/projectcategory/controller/projectcategory-controller');
const auth = require('../middleware/auth');
const validation = require('../middleware/validation');
const { request } = require('../modules/projectcategory/request/projectcategory-request');

module.exports = function(express) {
    const route = express.Router();

    route.get('/', auth, controller.findAll);
    route.post('/', auth, request, validation, controller.create);
    route.get('/:id', auth, controller.findOne);
    route.put('/:id', auth, request, validation, controller.update);
    route.delete('/:id', auth, controller.delete);

    return route;
}