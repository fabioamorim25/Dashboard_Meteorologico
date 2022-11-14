const axios = require('axios');


const homePage = async(req,res)=>{
    try { 
        res.render('home.ejs');
    } catch (error) {
        res.status(404).send(error);
    }
}

const consumirApi = async (req,res)=>{



    res.send("tudo ok")

}

module.exports = {consumirApi,homePage}