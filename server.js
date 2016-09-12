// server.js

// BASE SETUP
// ==============================================

// call the packages I need
var express = require('express'), //call express
    app = express(),
    pg = require('pg'),
    bodyParser = require ('body-parser'),
    // Panel = require('./app/models/panel.js'),
    controllers = require('./controllers'),

// DB connection string
// var connect = "postgres://Uili:password@localhost/PertronicTest"
// var data = controllers.getItems;
// console.log('items from controllers', controllers.getItems)
// console.log('controllers.items: ', data);
// configure the app to use bodyParser()
// this will allow us to get the data from POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
var port = process.env.PORT || 8080;

// VIEW ENGIN setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');

app.engine('jsx', require('express-react-views').createEngine());


// connection to postgres DATABASE knex
// var pg = require('knex')({
//   client: 'pg',
//   connection: process.enve.PG_CONNECTION_STRING,
//   aquireConnectionTimeout: 10000,
//   searchPath: 'knex, public'
// });

// ROUTES FOR OUR API
// I will try to extract these to the routes folder
// ================================

// get and instance of the express Router
var router = express.Router();

// middleware to use for all requests

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.use(function(req, res, next){
  // do the logging
  console.log('Something is happening.');
  // this makes sure we move to the next route and not stop here.
  next();
});

// test route to make sure everything is working (accessed at GET http:localhost:8080/api)
router.get('/', function(req, res) {
  res.render('index', {name: 'Panel Order Wizard', word: 'Make Selections Below'});
});

// available at http://localhost:8080/api/products
router.route('/products')
  .all(controllers.getItems)
// more routes for our API here


// REGISTER OUR ROUTES -----------------
// all our routes will be prefied with /api
app.use('/api', router);


// START THE SERVER
// =================================
app.listen(port);
console.log('Panel order Wizard on port ' + port);