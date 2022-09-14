const auth = require('./auth.js');
const project = require('./project.js');
const projectCategory = require('./projectcategories.js');

module.exports = function(express) {
    const app = express();

    app.use('/auth', auth(express));
    app.use('/project', project(express));
    app.use('/projectcategories', projectCategory(express));

    return app;
}