// const express = require('express')
// const app = express()

// app.get('/', function(req,res){
//   res.send('<h1>HELLO</h1>')
// })

// app.listen(3000)

const express = require('express');

const app = express();
//Su dung Express-hbs
const { engine } = require('express-handlebars');
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(3000);