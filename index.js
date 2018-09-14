

// Importing the require modules
var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/config')


// Connecting to mongodb
mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);

var appRouters = require('./app/routes');

// Defining our app using express
var app = express();

// Using bodyparser for Post Method data parsing
// And also to parse query parameters
// For Json
app.use(bodyParser.json());
// For query params
app.use(bodyParser.urlencoded({extended: true}));

app.use(appRouters);
app.listen(config.app.port,function(){
    console.log("bro server started at port: "+ config.app.port);
});