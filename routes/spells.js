const express = require('express');
const router = express.Router();
const spellsMiddleware = require('../controllers/spells');

//get all spells
router.get('/', spellsMiddleware.getAll);
//get one spell
router.get('/:id', spellsMiddleware.getOne);
//create a new spell
router.post('/', spellsMiddleware.create);
module.exports = router;