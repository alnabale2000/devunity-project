const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblArticle=db.tblArticle;
const tblUser=db.tblUser;
const tblArticleCm=db.tblArticleCm

module.exports={
    countArticles:async(args,req)=>{
        try {
            return await tblArticle.count()
        } catch (error) {
            throw (error)
        }
    },

    getArticlesByLanguageID:async (args)=>{
        try {
            const intLanguageID=args.intLanguageID;
            return await tblArticle.findAll({
                where:{
                    strLanguagesIDs:{
                        [Op.substring]:intLanguageID
                    }
                }
            })
        } catch (error) {
            throw error
        }
        
    },

    getArticleById:async(args)=>{
        try {
            const intArticleID=args.intArticleID;
            const article=await tblArticle.findOne({
                where:{
                    intArticleID
                }
            })
            const intUserID=article.dataValues.intAuthorId
            const author = await tblUser.findOne({ where: { intUserID  } })
            const articles = await tblArticle.findAll({
                where: {
                    intAuthorId: intUserID
                }
            })
            author.articles=articles
            article.author=author
            return article
        } catch (error) {     
        }
    },

    getRecommendedArticles:async (args)=>{
        try {
            const intLanguageID=args.intLanguageID;
            return await tblArticle.findAll({
                where:{
                    strLanguagesIDs:{
                        [Op.substring]:intLanguageID
                    }
                },
                order:[
                    ['intLikesCount', 'DESC']
                ]
            })
        } catch (error) {
            throw error
        }
    },

    addNewArticle:async (args)=>{
        try {
            const {strLanguagesIDs,strTitle,strBody,intAuthorId}=args.articleInput

            const result=await tblArticle.create({
                strLanguagesIDs,
                strTitle,
                strBody,
                intAuthorId,
            })
            console.log(result);
            
            return result?"Article Added Successfully":"Can't Add Article"
        } catch (error) {
            
        }
    },

    addArticleComment:async(args)=>{
        try {
            const {strBody,intArticleID,intCommenterID}=args
        await tblArticleCm.create({
            strBody,
            intArticleID,
            intCommenterID
        })
        return "Comment Added"

        } catch (error) {
            throw error
        }
        
    }
}