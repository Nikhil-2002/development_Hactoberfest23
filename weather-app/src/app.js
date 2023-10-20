const path = require('path')
const express = require('express')
const hbs = require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const app = express()
const port = process.env.PORT || 3000;

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials')

//Setup handlebar engines and views location
app.set('view engine', 'hbs'); //dynamically templating using hbs which shows dynamic page
app.set('views', viewsPath);
hbs.registerPartials(partialPath);

//Setup static directory to serve
app.use(express.static(publicDirectoryPath)) //the dir contain index.html and its root

//routes are url page address like 1.app.com/help 2.app.com/about 3.app.com(root) etc

app.get("/", (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Dhiraj Mishra'
    }); //render is send for hbs files
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: "About Me",
        name: "Dhiraj Mishra",
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "Help",
        name: "Dhiraj Mishra",
        msg: "Any Help needed? Move to About Page",
    })
})

app.get('/weather', (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Address must be provided",
        })
    }

    const addressQuery = req.query.address
    // IN case of undefine when error occurred, it would destructure undefined data, where app crashed so give default value as ={}, that is empty object to avoid crashing
    geocode(addressQuery, (error, { longitude, latitude, location } = {}) => {
        if (error) {
            return res.send({
                error
            })
        }

        forecast(longitude, latitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }

            res.send({
                forecast: forecastData,
                location,
                address: addressQuery,
            })
        })
    })
    
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Dhiraj Mishra",
        errorMessage: 'Help article not found',
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        name: "Dhiraj Mishra",
        errorMessage: "404 error occurred, Page not Found!",
    })
})

//to run on local host change port to 3000 and run 
app.listen(port, () => {
    console.log("Server started on "+port)
})