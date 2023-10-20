require('dotenv').config();
const request = require('postman-request')

const secret_key_mapbox = process.env.secret_key_mapbox; //access key for mapbox

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?limit=1&access_token=${secret_key_mapbox}`; //geocodeUrl

    request({url, json:true}, (error,response,body)=>{
        if(error){
            callback("Unable to connect Geocoding service!",undefined) //low level(os) error like no internet connection
        }else if(body.features.length ===0){
            callback("Unable to track location, Try another search!",undefined) //if parameter went wrong or upper level error
        }else{
            callback(undefined,{
                longitude: body.features[0].center[0],
                latitude: body.features[0].center[1],
                location: body.features[0].place_name,
            })
        }
    })
}

module.exports = geocode