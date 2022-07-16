const Sequelize=require('sequelize')
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
}