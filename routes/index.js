const express = require('express');
const router = express.Router();
const mainController = require('../controllers');
const spellsRouter = require('./spells');
const skillsRouter  = require('./skills');

router.all('/', mainController.home);
router.use('/spells', spellsRouter);
router.use('/skills', skillsRouter);

module.exports = router;