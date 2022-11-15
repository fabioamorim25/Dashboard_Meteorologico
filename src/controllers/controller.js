const axios = require('axios');



const homePage = async(req,res)=>{
    try { 
        res.render('home.ejs');
    } catch (error) {
        res.status(404).send(error);
    }
}

const consumirApi = async (req,res)=>{

    //Variavel que recebe os dados de latitude e longitude vinda do front end
    const doc = {
        lon: req.body.lon,
        lat: req.body.lat
    }


     


        res.send(doc)

}

module.exports = {consumirApi,homePage}