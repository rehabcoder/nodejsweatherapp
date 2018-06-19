const request=require('request');

var getWeather=(lat,long,callback)=>{
  request({
    url:`https://api.darksky.net/forecast/2f6f5704d395de2211b88fb4b570c2f0/${lat},${long}`,
    json:true
  },  (error, response, body) =>{
    if(!error && response.statusCode===200){
      callback(undefined,{
        temperature: body.currently.temperature,
      humidity: body.currently.humidity,
    apparentTemperature: body.currently.apparentTemperature});
    }else{
      callback('unable to fetch weather.');
    }
  });

};

module.exports.getWeather=getWeather;
