const express = require('express');
const router = express.Router();
const skillsMiddleware = require('../controllers/skills');

//get all spells
router.get('/', skillsMiddleware.getAll);
//get one spell
router.get('/:id', skillsMiddleware.getOne);
//create a new spell
router.post('/', skillsMiddleware.create);
module.exports = router;