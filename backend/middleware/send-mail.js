const nodemailer=require('NodeMailer')

const sendEMail=async(strEmail)=>{
    console.log('hellooooooooo');
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
            subject: 'subject', 
            text: 'text', 
            html: 'bodyText',
        }

        transporter.sendMail(options,(error,info)=>{
            if(error){return error}
            return 'mail sent'
        });
    } catch (error) {
        throw(error)
    }
}

module.exports=sendEMail