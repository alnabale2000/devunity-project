const multer = require('multer')
const express = require("express");
const path=require('path')

const router = express.Router();

let filesData=[];
let obj={};

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public/')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

const fileFilter=(req,file,cb)=>{
    if(file.mimetype.startsWith('image')){
        cb(null,true)
    }else {
        cb(null,false)
    }
}


let upload=multer({
    storage: storage ,
    fileFilter:fileFilter
}).single('file')

router.post('/upload',(req,res)=>{
    upload(req,res,function (err){

        filesData=[];

        if(err) return res.status(500).json(err)
        for(let file of req.files){

            //get full path of the image.
            const filePath=path.join(__dirname,'public',file.filename);

            obj={
                "blnsUploaded":true,
                "strFileName":file.originalname,
                "strFileFullPath":filePath,
            }
            filesData.push(obj)
            obj={}
        }
        console.log('files',filesData );
        return res.status(200).send(filesData)
    })
})

    module.exports=router
