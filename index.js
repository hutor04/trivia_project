/* eslint-disable no-undef */
const server = require('./server/app.js').app;

port = process.env.SERVER_PORT;

server.listen(port);
