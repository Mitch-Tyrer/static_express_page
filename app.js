const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 5000;

const routes = require('./routes')


const app = express();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser());
app.use('/static', express.static('public'));

app.set('view engine', 'pug');

app.use(routes);


app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

app.use((err, req, res, next) => {
    res.locals.error = err;
    console.error(err.status, err.message)
    res.status(err.status);
    res.render('error');
  });

 // listen for heroku server 
app.listen(PORT, () => {console.log(`Listening on ${ PORT }`)});

/* listen for localhost
app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
}); 
*/