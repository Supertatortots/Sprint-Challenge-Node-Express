const express = require('express');
const helmet = require ('helmet');
const server = express();
const cors = require ('cors');

const actionRoute = require('./data/routes/actionRoute');
const projectRoute = require('./data/routes/projectRoute')


//middleware here
server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Testing One Two Three!");
});



server.listen(5000, () => console.log("\n== API Running on port 5000 ==\n"));