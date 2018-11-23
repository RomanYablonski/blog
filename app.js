const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser'); // for parsing server requests
const cors = require('cors'); // чтобы сервер мог обрабатывать cors запросы
const morgan = require('morgan'); // чтобы мы могли логировать запросы
const authRoutes = require('./routes/auth');
const categoryRoutes = require('./routes/category');
const articleRoutes = require('./routes/article');
const reviewRoutes = require('./routes/review');
const analyticsRoutes = require('./routes/analytics');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB connected'))
    .catch(error => console.log(error));

app.use(passport.initialize()); // для защиты роутов
require('./middleware/passport')(passport);
app.use(morgan('dev')); // чтобы мы могли логировать запросы (в консоли например)
app.use(cors());  // чтобы сервер мог обрабатывать cors запросы
app.use(bodyParser.urlencoded({extended: true})); // for parsing server requests
app.use(bodyParser.json()); // for generate js objects from json

app.use('/api/auth/', authRoutes);
app.use('/api/category/', categoryRoutes);
app.use('/api/article/', articleRoutes);
app.use('/api/review/', reviewRoutes);
app.use('/api/analytics/', analyticsRoutes);


module.exports = app;