const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const { data } = require('./data/data.json');

const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index');
}); // end homepage get

app.get('/about', (req, res) => {
    res.render('about');
}); // end about page get

app.get('/projects', (req, res) => {
    res.render('project');
}); // end projects get route





app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});