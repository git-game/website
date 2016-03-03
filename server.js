// Basic app setup
var express = require('express');
var app = express();

// creating global variables to be used
var port = process.env.PORT || 3000;

// configuring our middlware
app.use(express.static('views'));
app.use(express.static('bower_components')); //some libraries can only be reached with bower
app.use(express.static('node_modules'));
app.set('view engine', 'ejs');

// defining our routes
app.get('/', function(req, res){
  res.render('index');
});

app.get('/creators', function(req, res){
  res.render('creators');
})

// setting up our 404 error
app.use(function(err, req, res, next) {
  console.error(err.stack);
  res.render('404');
});

app.listen(port, function(){
  console.log('server started and listening on port ', port);
});
