var express = require('express');
var router = express.Router();
var path = require('path');
var fs = require('fs');
var multer = require('multer');
/* GET users listing. */
var docStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    var destinationDir = 'upload';
    var dir = path.join(__dirname, '..', destinationDir);
    console.log(__dirname);
    console.log(dir);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
      }
    cb(null, dir)
  },
  filename: function (req, file, cb) {
    file_name=file.originalname;
    console.log(file_name);
    //file_name = path.basename(file.originalname, path.extname(file.originalname)) + '-' + Date.now() + path.extname(file.originalname)
    cb(null, file_name)
  }
})

var uploadDoc = multer({
  storage: docStorage
}).array("Files",4);

router.post('/uploads',uploadDoc, (req, res, next) =>{
//  uploadDoc(req,res,function(err)
//  {
//   if(err)
//   {

res.send("donee");





//   }
//   res.send("donee");
//  });
  
});
module.exports=router;


//, uploadDoc.single("Files")













router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
