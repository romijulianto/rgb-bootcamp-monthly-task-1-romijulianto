const { Project } = require('../../../database/models').projects;

const ProjectService = {
    /* service to find all project */
    findAll: async() => {
        return await Project.findAll({
            attributes: ['id', 'author', 'image', 'publishedAt'],
            include: [{
                required: true,
                association: 'projectCategory',
                attributes: ['id_category', 'category_name'],
            }, ],
        });
    },

    /* service to create project */
    create: async(data) => {
        return await Project.create(data);
    },

    /* service to update project */
    update: async(id, data, res) => {
        const model = await ProjectService.findOne(id, res);

        await model.update(data);
        return await model.reload();
    },

    /* service to delete project */
    delete: async(id, res) => {
        const model = await ProjectService.findOne(id, res);

        await model.destroy();
    },

    /* find project using primary key: id */
    findOne: async(id, res) => {
        const model = await Project.findByPk(id, {
            attributes: ['id', 'author', 'image', 'publishedAt'],
            include: [{
                required: true,
                association: 'projectCategory',
                attributes: ['id_category', 'category_name'],
            }, ],
        });

        if (!model) {
            res.status(404).json({
                'message': 'The request data not found'
            });
        }
        return model;
    }
}

module.exports = ProjectService;