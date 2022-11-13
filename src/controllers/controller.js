const axios = require('axios');

const consumirApi = async (req,res)=>{

    try {
        
        const {data} = await axios('');

        
        res.send(data);


    } catch (error) {
        console.error(error)
    }
    










}

module.exports = {consumirApi}