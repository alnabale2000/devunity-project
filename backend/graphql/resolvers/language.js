const Sequelize=require('sequelize')
const db=require('../../database/db')
const Op = Sequelize.Op
const tblLanguage=db.tblLanguage;
const tblUser=db.tblUser;

module.exports={
    getAllLanguages:async(args)=>{
        // const intUserID
        try {
            return await tblLanguage.findAll({})
        } catch (error) {
            
        }
    },
    getLanguagesByUserID:async(args)=>{
        try {
            //get languages ids for the user
            const intUserID=args.intUserID
            const result=await tblUser.findOne({
                attributes:["strLanguagesIDs"],
                where:{
                    intUserID
                }
        })
        // convert the result to array to enable check all languages
        // and make sure it is a typeof number
        const languagesIDs=result.dataValues.strLanguagesIDs.split(' , ')
        languagesIDs.map((item) => {
            return parseInt(item);
        });
        //get the languages that belong to the user
        //by check if the language id is in our array
        return await tblLanguage.findAll({
            where:{
                intLanguageID:{
                    [Op.in]:languagesIDs
                }
            }
        })
        } catch (error) {
            throw error
        }
    },

    updateLanguagesByUserId:async(args)=>{
        const {intUserID,strLanguagesIDs}=args
        const result=await tblUser.findOne({
            attributes:["strLanguagesIDs"],
            where:{
                intUserID
            }
        })
        const languagesIDs=result.dataValues.strLanguagesIDs
        const newIDs=strLanguagesIDs+' , '+languagesIDs;
        console.log(newIDs,typeof newIDs);

        const user = await tblUser.update({strLanguagesIDs:newIDs},{
            where:{
                intUserID
            }
        })

        return user[0]===0?'Nothing Changed !':"New Languages Added";

    }
}