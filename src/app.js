require('dotenv').config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const express = require('express');
const app = express();

require('../environment');
require('./models/models');

app.use(express.json());
app.use(require('./routes'));

module.exports = app;