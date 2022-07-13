const Sequelize=require('sequelize');
const db={}
require("dotenv").config();
const {
    DB_NAME,
    DB_USERNAME,
    DB_PASS,
    DB_HOST,
    DB_PORT } = process.env

const sequelize=new Sequelize(DB_NAME,DB_USERNAME,DB_PASS,{
    host:DB_HOST,
    "dialect": "mysql",
    "port": DB_PORT,
    define:{
        timestamps:true,
        freezeTableName:true
    },
    
})

db.sequelize=sequelize;

db.tblUser= require('./models/user')(sequelize,Sequelize)

module.exports=db