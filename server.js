const dotenv = require('dotenv').config();
const express = require('express');
const app = express();
const path= require('path'); 
const router = require('./src/router/router');


//Definir onde esta os arquivos do sistema
app.use(express.static(path.join(__dirname,'public')));
app.set('views engine', 'ejs'); 




app.use('/', router);






app.listen(process.env.PORT||3000,()=>{
    console.log("Servidor rodando na porta: ", process.env.PORT);
})