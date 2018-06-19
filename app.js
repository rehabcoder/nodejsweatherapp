
const yargs= require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv= yargs
  .options({
    a:{
      demand: true,
      alias:'address',
      describe:'address to fetch weather for',
      string:true //tells yargs prarce 'a' variable as a string.
    }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (errorMessage, results)=>{
    if(errorMessage){
      console.log(errorMessage);
    }else{
      console.log(results.address);
      weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults)=>{
        if(errorMessage){
          console.log(errorMessage);
        }else{
          console.log(`It's currently ${weatherResults.temperature} with a humidity of ${weatherResults.humidity}. It feels like ${weatherResults.apparentTemperature}. `);
        }
      });
    }
});
