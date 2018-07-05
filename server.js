const express = require('express');
const app = express();
const hbs = require('hbs');

require('./hbs/helpers/herlpers');

const port = process.env.PORT || 7070;

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials/');

app.get('/', (req, res) => {

    res.render('home', {
        nombre: "kevin trujillo 25"
    });
});
app.get('/about', (req, res) => {

    res.render('about');
});

app.listen(port, () => {
    console.log("Servidor corriendo en puerto " + port);
});