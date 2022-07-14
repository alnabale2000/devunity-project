const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblArticle=db.tblArticle

module.exports={
    countArticles:async(args,req)=>{
        try {
            return await tblArticle.count()
        } catch (error) {
            throw (error)
        }
    }
}