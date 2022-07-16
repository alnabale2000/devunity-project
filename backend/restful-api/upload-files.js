const multer = require('multer')
const path = require('path')
const express = require("express");

const router = express.Router();

let appDir = path.dirname(require.main.filename)
let fileFullPath = path.join(appDir, '/public/')
let arrayResponse = []
let counter = 0


let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, fileFullPath)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
})

const fileFilter = (req, file, cb) => {
    let isFileValid = false;
    const userData = JSON.parse(req.body.userData)
    if (parseInt(counter) >= parseInt(userData.intTotalFiles)) {
        arrayResponse = []
        counter = 0
    }
    counter++;
    let fileNameTemp = file.originalname.split('.')
    const _fileUploadedExtension = fileNameTemp[fileNameTemp.length - 1].toLowerCase()

    if (['jpeg', 'jpg', 'png', 'gif'].includes(_fileUploadedExtension)) {
        fileFullPath = fileFullPath + file.originalname
        isFileValid = true
    }


    if (isFileValid) {
        arrayResponse.push({
            "blnIsUploaded": true,
            "strFileName": file.originalname,
            "strFileFullPath": fileFullPath,
        })
        cb(null, true)
    } else {
        arrayResponse.push({
            "blnIsUploaded": false,
            "strFileName": file.originalname,
            "strFileFullPath": "",
        })
        cb(null, false)
    }
}

const uploadStorage = multer({
    storage: storage,
    fileFilter: fileFilter,
})

router.post('/upload-files', uploadStorage.single('userFiles'), (req, res) => {
    return res.send({ response: arrayResponse });
})

module.exports = router