console.log("Frontside JavaScript")

const weatherForm = document.querySelector('form')
const searchQuery = document.querySelector('input')
const messageOne = document.querySelector('#msg-one')
let temperature = document.querySelector("#temperature")
let wind_speed = document.querySelector('#wind_speed')
let humidity = document.querySelector('#humidity')
let tryAgain = document.querySelector('#try-again')

weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    const location = searchQuery.value

    messageOne.textContent = 'loading...'

    temperature.textContent = ''
    wind_speed.textContent = ''
    humidity.textContent = ''
    tryAgain.textContent = ''
    
    //after deploy, remove local host url to use deployed url
    fetch(`/weather?address=${location}`).then((res)=>{
    res.json().then((data)=>{
        if(data.error){
            messageOne.textContent = data.error
            return;
        }

        messageOne.textContent = `Current Location : ${data.location}`
        temperature.textContent = `${data.forecast.weather_descriptions} : It is ${data.forecast.temperature}°C outside. It feels like ${data.forecast.feelslike}°C`
        wind_speed.textContent = `Wind speed : ${data.forecast.wind_speed} Kilometers/Hour`
        humidity.textContent = `Humidity : ${data.forecast.humidity} g/m3`
        tryAgain.textContent = "Didn't get desired result? Try with full location name like :- City, State, Country"

    })
})
})