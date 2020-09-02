'use strict';

require('dotenv').config();

const net = require('net');

const port = process.env.PORT || 3001;
const server = net.createServer();

server.listen(port, () => console.log(`Server Runnin' on Port ${port}`));

// create a list of clients that are connected to the server
let socketPool = {};

// when a client connects to a server:
server.on('connection', (socket) => {
  // assign each client a unique id
  const id = `Socket-${Math.random()}`;
  // add them to our socketpool list
  socketPool[id] = socket;

  console.log('connection', socketPool);
})
