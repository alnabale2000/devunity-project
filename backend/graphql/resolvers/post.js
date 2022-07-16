const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblPost=db.tblPost
const tblPostCm=db.tblPostCm
const tblUser=db.tblUser


module.exports={
    countPosts:async(args,req)=>{
        try {
            return await tblPost.count()
        } catch (error) {
            throw (error)
        }
    },

    getPostsByLanguageID:async (args)=>{
        const intLanguageID=args.intLanguageID;
        return await tblPost.findAll({
            where:{
                intLanguageID
            }
        })
    },

    addPost:async (args)=>{
        try {
            const {strBody,intAuthorId,intLanguageID}=args

            const result=await tblPost.create({
                intLanguageID,
                strBody,
                intAuthorId,
            })
            console.log(result);
            
            return result?"Post Added Successfully":"Can't Add Post"
        } catch (error) {
            throw error
        }
    },

    addPostComment:async(args)=>{
        try {
            const {strBody,intPostID,intCommenterID}=args
            await tblPostCm.create({
                strBody,
                intPostID,
                intCommenterID
            })
            console.log('test');
            return "Comment Added"
        } catch (error) {
            throw error
        }
    },

    getPostComments:async(args)=>{
        const intPostID=args.intPostID;
        let postsCm=await tblPostCm.findAll({
            where:{
                intPostID
            }
        })
        for(let index in postsCm){
            const user= await tblUser.findOne({
                where:{
                    intUserID:postsCm[index].intCommenterID
                }
            })
            postsCm[index].commenter=user.dataValues
        }
        return postsCm
    }
}