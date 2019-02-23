const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const data = require('./data/data.json');
const projects = data.projects


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.render('index', {projects});
}); // end homepage get

app.get('/about', (req, res) => {
    res.render('about');
}); // end about page get

app.get('/projects/:id', (req, res) => {
    const id = req.params.id
    if(id < projects.length){
    res.render('project', {id, projects});
    } else {
        res.redirect('/oops');
    }
}); // end projects get route

app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.render('error');
  });

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});