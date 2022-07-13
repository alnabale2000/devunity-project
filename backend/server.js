const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db=require('./database/db')

const app = express();
app.use(express.json());
app.use(cors());

const SERVER_PORT = process.env.SERVER_PORT || 4001 ;

db.sequelize.authenticate().then(()=>{
    app.listen(SERVER_PORT,()=>{
        console.log(`ServerApp is connected on port : ${SERVER_PORT}`);
    })
})
