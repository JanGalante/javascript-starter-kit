import express from 'express';
import path from 'path'; //global access to path set in Node
import open from 'open';
import compression  from 'compression';

/* eslint-disable no-console */

// This is not for actual production use.
// This is just useful for hosting the minified production build for local debugging process

const port = 3000;
const app = express()

app.use(compression()); //enable gzip compression (to simulate prod server better)
app.use(express.static('dist')); //serve static files from the dist folder

app.get('/', function (req, res) {
    //res.send('Hello World!')
    res.sendFile(path.join(__dirname, '../dist/index.html'));
})

app.get('/users', function(req, res) {
  // Hard coding for simplicity. Pretend this hits a real database
  res.json([
    {"id": 1,"firstName":"Bob","lastName":"Smith","email":"bob@gmail.com"},
    {"id": 2,"firstName":"Tammy","lastName":"Norton","email":"tnorton@yahoo.com"},
    {"id": 3,"firstName":"Tina","lastName":"Lee","email":"lee.tina@hotmail.com"}
  ]);
});

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
