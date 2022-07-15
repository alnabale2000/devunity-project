const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblQS=db.tblQS

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
    }
}