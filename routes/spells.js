const express = require('express');
const router = express.Router();
const spellsMiddleware = require('../controllers/spells');

//get all spells
router.get('/spells', spellsMiddleware.getAll);
//get one spell
router.get('/spells/:id', spellsMiddleware.getOne);
//create a new spell
router.post('/spells', spellsMiddleware.create);
module.exports = router;