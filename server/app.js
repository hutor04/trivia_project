require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const apiRouter = require('./api-router');

const app = express();

const port = process.env.SERVER_PORT_DEV;

app.use(bodyParser.json());
app.use('/', express.static('client/build'));
app.use('/api', apiRouter);
app.use('/icons', express.static('server/static/img'));
app.use((req, res) => {
  res.status(404).json({ error: 'Not found.' });
});

module.exports.app = app;
if (require.main === module) { app.listen(port); }
