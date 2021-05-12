const express = require('express');
const cors = require('cors');
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;
app.use(serveStatic(__dirname + "/dist"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())
app.use(cors());

const Quiz = require('./src/Schemas/QuizModel')

require('dotenv').config({path: __dirname + '/.env'})

const mongo = require('./mongo')

app.listen(port, () => {
    console.log(`Server running on port:${port}/`);
});

mongo(process.env.MONGO_PROD_DB);

let QuizRoute = require('./src/routes/QuizRoute')
QuizRoute(app)

module.exports = app;