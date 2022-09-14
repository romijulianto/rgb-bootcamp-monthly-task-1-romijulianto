const ProjectService = require('../service/project-service.js');

const ProjectController = {

    /* controller to find all project */
    findAll: async(req, res) => {
        const data = await ProjectService.findAll();

        return res.status(200).json({ data });
    },

    /* method create with return data from service */
    create: async(req, res) => {
        const data = await ProjectService.create(req.body);

        return res.status(200).json({ data });
    },

    /* method findOne with return data from service */
    findOne: async(req, res) => {
        const data = await ProjectService.findOne(req.params.id, res);

        return res.status(200).json({ data });
    },

    /* method update with return data from service */
    update: async(req, res) => {
        const id = req.params.id;
        const body = req.body;

        const data = await ProjectService.update(id, body, res);

        return res.status(200).json({ data });
    },

    delete: async(req, res) => {
        const id = req.params.id;

        const data = await ProjectService.delete(id, res);

        return res.status(204).json();
    },
}

module.exports = ProjectController;