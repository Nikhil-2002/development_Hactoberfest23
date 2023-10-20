require('dotenv').config();
const request = require('postman-request')

const secret_key_weatherstack = process.env.secret_key_weatherstack; //api access key from weather-stack

const forecast = (longitude,latitude,callback) => {
    const url = `http://api.weatherstack.com/current?access_key=${secret_key_weatherstack}&query=${latitude},${longitude}&units=m`; //forecastUrl

    request({url , json:true}, (error,response,body) => {
        if(error){
            callback("Unable to connect weather-service! Try again", undefined) //low level(os level) error handling like no internet connection
        } else if(body.error){
            callback(`Unable to find location! Try another search with more details`, undefined)
        }else{
            callback(undefined, {
                temperature : response.body.current.temperature,
                weather_descriptions : response.body.current.weather_descriptions[0],
                wind_speed : response.body.current.wind_speed,
                humidity : response.body.current.humidity,
                feelslike : response.body.current.feelslike,
            })
        }
    })
}

module.exports = forecast