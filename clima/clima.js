const axios = require('axios');

const getClima = async (lat, lng)=>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=8b3527d0f9e2d708285e410ef92cf8f6`);
    
    return resp.data.main.temp;
}

module.exports = {
    getClima
}
