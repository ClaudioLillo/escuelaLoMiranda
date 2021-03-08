import express from 'express'
import multer from 'multer'

const router = express()
const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function(req, file, cb) {
      cb(null, Date.now() + "-" + file.originalname)
    },
  })
const upload = multer({storage: storage})

router.post('/', upload.array('files',5), function(req, res, next){
    const files = req.files
    console.log(files)
    let arr=[]
    for (let i of files){
        arr.push(i.filename)
    }
    res.status(200).json({files: arr})
})


export default router