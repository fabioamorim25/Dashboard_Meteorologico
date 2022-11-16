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

    const city = req.body.nameCity;


    //CONSUMIR A API APARTIR DOS DADOS RECEBIDOS DO [DOC]
   // var {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city.nameCity}&appid=${process.env.API_KEY}&lang=pt_br&units=metric`);
    
   res.status(200).send({city,doc})
    // try {

    //     var {data} = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${doc.lat}&lon=${doc.lon}&appid=${process.env.API_KEY}&lang=pt_br&units=metric`);
          
    //     res.json(data);

    // } catch (error) {
    //     console.error(error)
    // }

     


       

}

module.exports = {consumirApi,homePage}