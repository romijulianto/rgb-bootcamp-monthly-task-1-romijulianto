const { projectCategories } = require('../../../database/models');

const ProjectCategoryService = {
    /* service to find all category project */
    findAll: async() => {
        return await ProjectCategoryService.findAll({
            attributes: ['id', 'category_name'],
            include: [{
                required: true,
                association: 'project',
            }, ],
        });
    },


    /* service to create project */
    create: async(data) => {
        return await ProjectCategoryService.create(data);
    },

    /* service to update project */
    update: async(id, data, res) => {
        const model = await ProjectCategoryService.findOne(id, res);

        await model.update(data);
        return await model.reload();
    },

    /* service to delete project */
    delete: async(id, res) => {
        const model = await ProjectCategoryService.findOne(id, res);

        await model.destroy();
    },

    /* find category project using primary key: id */
    findOne: async(id, res) => {
        const model = await projectCategories.findByPk(id, {
            attributes: ['id', 'category_name'],
            include: [{
                required: true,
                association: 'project',
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

module.exports = ProjectCategoryService;