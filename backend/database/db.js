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
        timestamps:true,
        freezeTableName:true
    },
    
})

db.sequelize=sequelize;

db.user= require('./models/user')(sequelize,Sequelize)
db.language=require('./models/language')(sequelize,Sequelize)
db.article=require('./models/article/article')(sequelize,Sequelize)
db.articleCm=require('./models/article/article-comment')(sequelize,Sequelize)
db.post=require('./models/post/post')(sequelize,Sequelize)
db.postCm=require('./models/post/post-comment')(sequelize,Sequelize)
db.QS=require('./models/Q&A/question')(sequelize,Sequelize)
db.answer=require('./models/Q&A/answer')(sequelize,Sequelize)


module.exports=db