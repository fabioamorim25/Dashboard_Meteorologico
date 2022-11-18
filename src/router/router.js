const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();
const bodyParser= require('body-parser')


//ROTAS DO SISTEMA

router.get('/',controller.homePage);

router.post('/api',express.json(),express.urlencoded({extended:true}), controller.consumirApi);
//[express.urlencoded({extended:true})] usado para pegar os dados do input quando tiver
//[express.json()] usado para pegar os dados de latitude e longitude



router.get('/all',controller.all);









module.exports = router;