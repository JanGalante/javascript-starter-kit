var path = require("path");

var express = require('express')
var app = express()


app.get('/', function (req, res) {
//    res.send('Hello World!')
    // var fileName = req.params.name;
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
