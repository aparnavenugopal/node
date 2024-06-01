const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log('in the middleware');
    next();//allows the request to continue to the next imiddleware in line
});
app.use((req, res, next) => {
    console.log('in the middleware2');
    next();
});

const server = http.createServer();

server.listen(3000);