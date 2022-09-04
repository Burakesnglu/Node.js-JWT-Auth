const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes');
app.use('/api',routes);

app.listen(8080);
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
});

module.exports = { app };