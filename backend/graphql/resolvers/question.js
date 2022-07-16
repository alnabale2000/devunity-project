const { where } = require('sequelize')
const Sequelize=require('sequelize')
const { tblArticle } = require('../../database/db')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblQS=db.tblQS
const tblUser=db.tblUser
const tblAnswer=db.tblAnswer



module.exports={
    countQuestions:async(args,req)=>{
        try {
            return await tblQS.count()
        } catch (error) {
            throw (error)
        }
    },

    getQuestionsByLanguageID:async (args)=>{
        const intLanguageID=args.intLanguageID;
        return await tblQS.findAll({
            where:{
                strLanguagesIDs:{
                    [Op.substring]:intLanguageID
                }
            }
        })
    },
    getQuestionById:async(args)=>{
        try {
            console.log('test');
            const intQuestionID=args.intQuestionID;
            const question=await tblQS.findOne({
                where:{
                    intQuestionID
                }
            })
            console.log('question', question);
            const intUserID=question.dataValues.intAuthorId
            const author = await tblUser.findOne({ where: { intUserID  } })
            question.author=author
            return question
        } catch (error) {     
        }
    },

    addNewQuestion:async (args)=>{
        try {
            const {strLanguagesIDs,strTitle,strBody,intAuthorId}=args.questionInput

            const result=await tblQS.create({
                strLanguagesIDs,
                strTitle,
                strBody,
                intAuthorId,
            })
            console.log(result);
            
            return result?"Question Added Successfully":"Can't Add Question"
        } catch (error) {
            throw error
        }
    },

    addAnswer:async(args)=>{
        const {strBody,QSId,intCommenterID}=args

        try {
            await tblAnswer.create({
                strBody,
                QSId,
                intCommenterID,
            })
            return "Answer Added"
        } catch (error) {
            throw error
        }
    },

    getAnswers:async(args)=>{
        const QSId=args.intQuestionID;
        let answers=await tblAnswer.findAll({
            where:{
                QSId
            }
        })
        for(let index in answers){
            const user= await tblUser.findOne({
                where:{
                    intUserID:answers[index].intCommenterID
                }
            })
            answers[index].commenter=user.dataValues
        }
        return answers
    },

    getQuestionsByUserId:async(args)=>{
        const intUserID=args.intUserID;
        return await tblQS.findAll({
            where:{
                intAuthorId:intUserID
            }
        })
    },
    addVote:async(args)=>{

        const {intAnswerID,intUserID,strUpOrDown}=args.voteInput

        const answer=await tblAnswer.findOne({
            attributes:[
                'strUpVotesIDs','strDownVotesIDs',
                'intUpVotesCount','intDownVotesCount',
            ],
            where:{
                intAnswerID
            }
        })

        if(strUpOrDown==='up'){
            const answerUpVotesIDs=answer.strUpVotesIDs.split(' ,').map((item) => {
                return parseInt(item)
            });
            if(!answerUpVotesIDs.includes(intUserID)){
                const newUpVotesCount=answer.intUpVotesCount + 1
                const newUpVotesIDs=answer.strUpVotesIDs + `${intUserID} ,`

                await tblAnswer.update(
                    {strUpVotesIDs:newUpVotesIDs,intUpVotesCount:newUpVotesCount},
                    {where:{intAnswerID}}

                )
                return "done"
            }
            else{
                return "Can't Vote Twice"
            }
        }else{
            const answerDownVotesIDs=answer.strDownVotesIDs.split(' ,').map((item) => {
                return parseInt(item)
            });
            if(!answerDownVotesIDs.includes(intUserID)){
                const newDownVotesCount=answer.intDownVotesCount + 1
                const newDownVotesIDs=answer.strDownVotesIDs + `${intUserID} ,`

                await tblAnswer.update(
                    {strDownVotesIDs:newDownVotesIDs,intDownVotesCount:newDownVotesCount},
                    {where:{intAnswerID}}


                )
                return "done"
            }
            else{
                return "Can't Vote Twice"
            }
        }

        // const article=await tblArticle.findOne({
        //     attributes:['strLikesIDs','intLikesCount'],
        //     where:{
        //         intArticleID
        //     }
        // })
        // const articleLikeIDs=article.strLikesIDs.split(' ,').map((item) => {
        //     return parseInt(item)
        // });
        // if(!articleLikeIDs.includes(intUserID)){
        //     const newLikesCount=article.intLikesCount + 1
        //     const newLikesIDs=article.strLikesIDs + `${intUserID} ,`
        //     await tblArticle.update(
        //         {strLikesIDs:newLikesIDs,intLikesCount:newLikesCount},
        //         {where:{intArticleID}}
        //         )
        //     return "done"
        // }else{
        // }
    }
}