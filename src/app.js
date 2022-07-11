const logger = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

var express = require('express')
    , http = require('http')
    , https = require('https')
    , app = express();

http.createServer(app);
https.createServer(app);

const routes = require('./routes/index');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(routes);


module.exports = app;
