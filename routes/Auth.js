const router = require('express').Router();
const bcrypt = require('bcrypt');
const logger = require('../middlewares/logger');
const User = require("../model/User");
const requirePassword = require("../middlewares/requirePassword")
const jwt = require("jsonwebtoken");
const salt = 10

router.post('/login', requirePassword, async (req, res) => {
  let user = await User.findOne({username: req.body.username})
  if(user){
    const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
    if(isPasswordCorrect){
      const token = await jwt.sign({userId: user._id}, 'secret', {expiresIn: '3m'} );
      return res.status(200).json({message: "Login successful", token: token})
    }else{
      return res.status(401).json({error: "Invalid login credentials"})
    }
  }
})

router.post('/register', requirePassword, async (req, res) => {
  const clientIP = req.ip;
  try{
    req.body.password = await bcrypt.hash(req.body.password, salt);
    const newUser = new User(req.body)  
    newUser.save();
    return res.status(201).json({message: "Register successful"})
  }catch(err){
    logger.error({message: "Could not hash the password", origin: clientIP, method: req.method})
  }
})



module.exports = router
