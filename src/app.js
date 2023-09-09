const express = require('express');
const morgan = require('morgan')
const path = require('path')

const { engine } = require('express-handlebars');


const app = express();
//HTTP logger
app.use(morgan('combined'))

//Template engine
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000,()=> console.log(`App Listening...`));