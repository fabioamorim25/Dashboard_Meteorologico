const axios = require('axios');



const homePage = (req,res)=>{
    try { 
        res.render('home.ejs');
    } catch (error) {
        res.status(404).send(error);
    }
}

const consumirApi = async (req,res)=>{
    
    //Armazenar o dado da cidade do usuário
    const city = req.body.nameCity;
    //Armazenar os dados de latitude e longitude vinda do front end
    const doc = {
        lon: req.body.lon,
        lat: req.body.lat
    }

    try {        
       //VERIFICAR QUAL API DO [openweathermap] SERA USADA
        if (!city) {    
            //Consumir a API dos dados recebidos do [DOC]
            let { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?lat=${doc.lat}&lon=${doc.lon}&appid=${process.env.API_KEY}&lang=pt_br&units=metric`);
            //let docs =await JSON.stringify(data)
           await res.status(200).render('all.ejs',{data});
        } else {
            //Consumir a API apartir do dado [CITY]
            let { data } = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}&lang=pt_br&units=metric`);
            //let docs =await JSON.stringify(data)
            await res.status(200).render('all.ejs',{data});
        }       

    } catch (error) {
        console.error(error)
    }

     


       

}


const all = (req,res)=>{
    try { 
        res.render('all.ejs');
    } catch (error) {
        res.status(404).send(error);
    }
}

module.exports = {consumirApi,homePage,all}