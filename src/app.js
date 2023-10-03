const express = require('express')
const morgan = require('morgan')
const path = require('path')
const { engine } = require('express-handlebars')
const exp = require('constants')
const app = express()
const methodOverride = require('method-override')

const route = require('./routes')
const db = require('./config/db')

//Connect to DB
db.connect()

app.use(express.static(path.join(__dirname, 'public')))

app.use(
    express.urlencoded({
        extended: true,
    })
)
app.use(express.json())
app.use(methodOverride('_method'))

//HTTP logger
// app.use(morgan('combined'))

//Template engine
app.engine(
    '.hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    })
)
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources', 'views'))

//Route init
route(app)

//listen port
app.listen(3000, () => console.log(`App Listening...`))
