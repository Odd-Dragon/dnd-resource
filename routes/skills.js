const express = require('express');
const router = express.Router();
const skillsMiddleware = require('../controllers/skills');

//get all spells
router.get('/', skillsMiddleware.getAll);
//get one spell
router.get('/:id', skillsMiddleware.getOne);
//create a new spell
router.post('/', skillsMiddleware.create);
// Update a spell
router.put('/:id', skillsMiddleware.update);

// Delete a spell
router.delete('/:id', skillsMiddleware.delete);
module.exports = router;