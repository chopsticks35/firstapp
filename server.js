//Requires\\
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var USer = require('./models/user');


// Create Express App Object \\
var app = express();

mongoose.connect('mongodb://localhost/firstapp');

//mongoose.connect('mongodb://root:<password>@ds019048.mlab.com:19048/firstapp', function(err){
//    if (err) {
//        console.log(err);
//    }
//    else {
//        console.log("Connected to the database!");
//    }
//});

// App Config \\
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

//  Routes \\
app.get('/', function(req, res){
//    res.sendFile('views/index.html', {root : 'public'})
   res.json('connected');
});

app.post('/create-user', function(req, res){
    var user = new User();

    user.profile.name = "Ti Wegmeyer"
});





// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(err){
    if (err) throw err;
    console.log('Server running on port ' + port);
});
