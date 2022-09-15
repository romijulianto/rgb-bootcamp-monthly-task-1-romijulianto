const { check } = require('express-validator');

exports.request = [
    check('id_category', 'The Project Category field is required.').not().isEmpty(),
]