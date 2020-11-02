const express = require('express');
const app = express();
const path = require('path');
const request = require('superagent');
const cors = require('cors');

app.use(express.json());
app.use(require('cookie-parser')());
app.use(cors());

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
