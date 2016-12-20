import express from 'express';
import path from 'path'; //global access to path set in Node
import open from 'open';
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

const port = 3000;
const app = express()


app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname, '../src/index.html'));
})

// app.listen(3000, function () {
//   console.log('Example app listening on port 3000!')
// })

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
