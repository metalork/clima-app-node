const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')
const colors = require('colors');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad',
        demand: true
    }
}).argv

let getInfo = async(direccion) =>{
    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coors.lat, coors.lng);
    
        return `El clima en ${coors.direccion} es de ${temp}°C`;
    } catch{
        return `No se pudo determinar el clima en ${direccion}`
    }
 

}

getInfo(argv.direccion)
        .then(mensaje => console.log(mensaje))
        .catch(e=> console.log(e));

