const controller = require('../controllers/controller');
const express= require('express');
const router= express.Router();


//ROTAS DO SISTEMA
router.get('/',controller.consumirApi);




















module.exports = router;