const Sequelize = require('sequelize')
const db = require('../../database/db')
const Op = Sequelize.Op
const tblUser = db.tblUser
const tblArticle = db.tblArticle
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const sendEMail = require('../../middleware/send-mail')

module.exports = {
    getUserByID: async (args, req) => {
        try {
            const user = await tblUser.findOne({ where: { intUserID: args.intUserID } })
            const articles = await tblArticle.findAll({
                where: {
                    intAuthorId: args.intUserID
                }
            })
            user.dataValues.articles = articles
            return user.dataValues
        } catch (error) {
            throw error;
        }
    },

    countUsers: async (args, req) => {
        try {
            return await tblUser.count()
        } catch (error) {
            throw (error)
        }
    },

    createNewAccount: async (args, req) => {
        console.log('args', args);
        const { strName, strEmail, strPassword, strProfileImage, strLanguagesIDs } = args.userInput;
        const hashedPassword = await bcrypt.hash(strPassword, 10);

        try {
            // check if user exist:
            const user = await tblUser.findOne({
                where: {
                    strEmail: args.userInput.strEmail,
                }
            })
            if (user) {
                throw new Error('User Already Exist')
            }

            sendEMail(strEmail)

            return await tblUser.create({
                strName,
                strEmail,
                strPassword: hashedPassword,
                strProfileImage,
                strLanguagesIDs,
            })
        } catch (error) {
            throw error
        }

    },

    loginUser: async (args) => {
        try {
            // check if email exist:
            const user = await tblUser.findOne({
                where: {
                    strEmail: args.strEmail,
                }
            })
            if (user) {
                const userData=user.dataValues
                console.log();
                const valid = await bcrypt.compare(args.strPassword, userData.strPassword);
                if(valid){
                    const payload = {
                        userId: userData.intUserID,
                        type: "user",
                    };

                    const options = {
                        expiresIn: "60m",
                    };
                    const token=jwt.sign(payload, process.env.SECRET, options)
                    return token;
                }
                
            }//email not found :
            else {
                return "Email Doesn't Exist"
            }
        } catch (error) {
            throw error
        }
    },

    updateUserPoints:async(args)=>{
        const {intUserID,newPoints}=args

        const user = await tblUser.findOne({where:{
            intUserID
        }})
        const prePoints=user.dataValues.intPoints
        await tblUser.update({intPoints:prePoints+newPoints},{
            where:{
                intUserID
            }
        })
    },

    updateUser:async(args)=>{
        const {intUserID,strProfileImage,strName}=args
        const user= await tblUser.update({strProfileImage,strName},{
            where:{
                intUserID
            }
        })
        console.log(typeof user[0]);
        return user[0]===0?'Nothing Changed !':"Updated successfully";
    }
}