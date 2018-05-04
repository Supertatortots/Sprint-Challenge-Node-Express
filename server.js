const express = require('express');

const server = express();

server.get('/', (req, res) => {
  res.send('Testing One Two Three!');
});

server.listen(5000, () => console.log("\n== API Running on port 5000 ==\n"));