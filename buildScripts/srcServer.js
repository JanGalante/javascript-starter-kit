var express = require('express');
var path = require('path');
var open = require('open');

var port = 3000;
var app = express(); //create an instance of express

//define route
app.get('/', function(req, resp){
    res.sendFile(path.join(__dirname, '../src/index.html'))
});

//tell express to listen to the port
app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    else{
        open('http://localhost:' + port)
    }
});