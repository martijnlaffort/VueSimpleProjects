const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser')
const app = express();
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.urlencoded({extended: true}))
const port = process.env.PORT || 3000;

require('dotenv').config({path: __dirname + '/.env'})

const mongo = require('./mongo')

app.listen(port, () => {
    console.log(`Server running on port:${port}/`);
});


mongo(process.env.MONGO_PROD_DB);

module.exports = app;