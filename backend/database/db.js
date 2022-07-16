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
    dialect: "mysql",
    port: DB_PORT,
    define:{
        timestamps:false,
        freezeTableName:true
    },
    
})

db.sequelize=sequelize;

db.tblUser= require('./models/user/user')(sequelize,Sequelize)
db.tblLanguage=require('./models/language')(sequelize,Sequelize)
db.tblArticle=require('./models/article/article')(sequelize,Sequelize)
db.tblArticleCm=require('./models/article/article-comment')(sequelize,Sequelize)
db.tblPost=require('./models/post/post')(sequelize,Sequelize)
db.tblPostCm=require('./models/post/post-comment')(sequelize,Sequelize)
db.tblQS=require('./models/Q&A/question')(sequelize,Sequelize)
db.tblAnswer=require('./models/Q&A/answer')(sequelize,Sequelize)
db.tblToken= require('./models/user/token')(sequelize,Sequelize)



module.exports=db