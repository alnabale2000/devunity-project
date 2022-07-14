const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblUser=db.tblUser
const article=db.article

module.exports={
    getUserByID:async(args,req)=>{
        try {
            const user=await tblUser.findOne({ where: { intUserID: args.intUserID } })
            const articles=await article.findAll({
                where:{
                    intAuthorId:args.intUserID
                }
            })
            user.dataValues.articles=articles 
            return user.dataValues
        } catch (error) {
            throw error;
        }
    },

    countUsers:async(args,req)=>{
        try {
            return await tblUser.count()
        } catch (error) {
            throw (error)
        }
    }
}