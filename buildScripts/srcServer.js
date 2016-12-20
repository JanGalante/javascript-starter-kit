
// import express from 'express';
// import path from 'path';
// import open from 'open';

// var port = 3000;
// var app = express(); //create an instance of express

// //define route
// app.get('/', function(req, resp){
//     res.sendFile(path.join(__dirname, '../src/index.html'))
// });

// //tell express to listen to the port
// app.listen(port, function(err){
//     if(err){
//         console.log(err);
//     }
//     else{
//         open('http://localhost:' + port)
//     }
// });



// import express from 'express';
// import https from 'https';
// import http from 'http';

// const port = 3000;
// const app = express();

// //GET method route
// app.get('/', function (req, res) {
//   res.send('GET request to the homepage')
// })

// //define route
// // app.get('/', function(req, resp){
// //     res.sendFile(path.join(__dirname, '../src/index.html'))
// // });

// http.createServer(app).listen(80, function(err){
//     if(err){
//         console.log(err);
// }});
// // https.createServer(options, app).listen(443);