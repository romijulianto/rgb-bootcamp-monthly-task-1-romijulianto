const { check } = require('express-validator');

exports.request = [
    check('id_category', 'The Project Category field is required.').not().isEmpty(),
    check('id_category', 'The Project Category value is invalid.').isIn(['1', '2']),
]