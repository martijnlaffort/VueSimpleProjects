const express = require('express');
const path = require('path');
const serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
const port = process.env.PORT || 7070;
const hostname = '127.0.0.1';

app.get('/', (req, res) => {
    console.log(res.send('Hi World!'));
})

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});