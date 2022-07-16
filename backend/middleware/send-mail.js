const nodemailer=require('NodeMailer')
const express = require("express");
const mailRouter = express.Router();
const db = require('../database/db')
const tblUser = db.tblUser
const tblToken=db.tblToken

const sendEMail=async(strEmail , message)=>{
    try {
        let transporter = nodemailer.createTransport({
            service:'gmail',
            host:'smtp.gmail.com',
            auth: {
                user:'alnabaleanas2017@gmail.com', 
                pass:'cpyafsfjcelzkjbz', 
            },
        });

        const options={
            from: '"Anas Alnabale" <alnabaleanas2017@gmail.com>', 
            to: strEmail, 
            subject:'Verify Your Email', 
            text: message, 
            html:`<p>Please Click the link to verify your account <a href=${message}>${message}</a></p>`
        }

        transporter.sendMail(options,(error,info)=>{
            if(error){return error}
            return 'mail sent'
        });
    } catch (error) {
        throw(error)
    }
}

mailRouter.get("/user/verify/:id/:token",async (req, res) =>{
    console.log('I am here');
    try {
        const user = await tblUser.findOne({where:{
            intUserID:req.params.id
        }});
        if (!user) return res.status(400).send("Invalid link");
        
        const token=await tblToken.findOne({
            where:{
                strToken:req.params.token
            }
        })
        if (!token) return res.status(400).send("Invalid link");

        await tblUser.update(
            {verified: true },
            {where:{
                intUserID:req.params.id
            }}
            )
        await tblToken.destroy({
            where:{
                intUserID:req.params.id
            }
        })
        console.log("email verified successfully");
        res.send("email verified successfully");

    } catch (error) {
        throw error
    }
})

module.exports={
    sendEMail,
    mailRouter
}