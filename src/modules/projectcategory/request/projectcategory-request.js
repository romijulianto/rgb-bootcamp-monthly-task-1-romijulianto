const { check } = require('express-validator');

exports.request = [
    check('id', 'The category project type field is requied.').not().isEmpty(),
    check('category_name', 'The category project type value is invalid.').not().isEmpty(),
]