const jwt = require("jsonwebtoken")
const logger = require("../middlewares/logger")

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  if(!token){
    return res.status(401).json({error: "Token not provided"})
  }

  jwt.verify(token, 'secret', (err, decoded) => {
    if(err){
      logger.error({message: "Token verification failed", error: err})
      return res.status(401).json({error: "Token verification failed"})
    }
    req.userId = decoded;
  })
  next()
}

module.exports = verifyToken