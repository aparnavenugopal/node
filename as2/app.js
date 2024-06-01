const express = require('express');

const app = express();

app.use('/users',(req, res, next) => {
    console.log('you are in users page');
    res.send('<h1>you are in products apage</h1>')
});

app.use('/',(req, res, next) => {
    console.log('you are in main page');
    res.send('<h1>you are in main page</h1>');
})

app.listen(3000);



