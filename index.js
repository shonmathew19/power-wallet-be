


//import dotenv module
require('dotenv').config()

//import express module, DB,routes
const express = require('express')

require('./DB/connection.js');
const routes = require('./Router/router.js');
const consumerInfoRouter = require('./Router/consumerInfoRouter.js');
const newConnectionRouter = require('./Router/newConnectionRouter.js');
const priceUpdatesRouter = require('./Router/priceUpdatesRouter.js');


//import cors modules
const cors = require('cors');


//create server using express
const pwServer = express()

//inject cors into pwServer
pwServer.use(cors());

//use middleware to covert JSON data to js object
pwServer.use(express.json());
pwServer.use(routes);
pwServer.use(consumerInfoRouter);
pwServer.use(newConnectionRouter);
pwServer.use(priceUpdatesRouter);



//provide port 
const PORT = 3000

//run the server
pwServer.listen(PORT, () => {
    console.log(`pwServer is running in PORT ${PORT}`);
})

pwServer.get('/',(req,res)=>{
    res.send('server is running  for power wallet !!!')
})

