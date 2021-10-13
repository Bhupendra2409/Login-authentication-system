var express = require('express');
var router = express.Router();

let users =[{
  email: 'abc@gmail.com',
  password:'password'
}]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('server is running chutiye bdsk');
});

router.post('/login',function(req,res){
  let result = users.find(user=> user.email===req.body.email);
  if(result){
      if(result.password == req.body.password){
        res.status(200).send({
        message: "Login successfull!!",
        success: true
        })
      }
      else{
        res.status(200).send({
          message: "Password Incorrect!!",
          success: false
          })
      }
  }else{
    res.status(200).send({
      message:"User not found!!",
      success: false
    })
  }
   

});
 

module.exports = router;
