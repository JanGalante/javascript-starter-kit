// var path = require("path");
// var express = require('express')


import express from 'express';
import path from 'path';
// import open from 'open';
// import webpack from 'webpack';
// import config from '../webpack.config.dev';


const app = express()

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})