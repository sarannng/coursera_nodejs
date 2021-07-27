 const express = require('express');
 const http = require('http');
 const morgan = require('morgan');
const hostname = 'localhost';
const port = 3000;

const app = express();
//for log
app.use(morgan('dev'));


//for serving static file froom dir path
app.use(express.static(__dirname + '/public'));

app.use((req, res, next)=>{

res.statusCode = 200;
res.setHeader('Content-Type', 'html/text');
res.send('<html><body><h4>This is server</h4></body></html>');
});


const server = http.createServer(app);
server.listen(port,hostname, ()=> {

    console.log("This is server listening");

});