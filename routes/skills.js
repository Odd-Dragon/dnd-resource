const express = require('express');
const router = express.Router();
const skillsMiddleware = require('../controllers/skills');

//get all spells
router.get('/skills', skillsMiddleware.getAll);
//get one spell
router.get('/skills/:id', skillsMiddleware.getOne);
//create a new spell
router.post('/skills', skillsMiddleware.create);
module.exports = router;