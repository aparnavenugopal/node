const express =  require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const mainRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(mainRoutes);
app.use(usersRoutes);

app.listen(3000);