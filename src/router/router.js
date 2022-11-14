const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser')


//ROTAS DO SISTEMA
router.get('/',controller.homePage);

router.post('/api',bodyParser.json(), controller.consumirApi);













module.exports = router;