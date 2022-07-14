const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblPost=db.tblPost

module.exports={
    countPosts:async(args,req)=>{
        try {
            return await tblPost.count()
        } catch (error) {
            throw (error)
        }
    }
}