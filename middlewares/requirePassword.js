const logger = require("./logger")

const requirePassword = (req, res, next) => {
  const clientIP = req.ip;
  if(!req.body.password){
    logger.error({message: "Invalid Request", origin: clientIP, method: req.method, path: req.route.path})
    return res.status(500).json("Invalid Request")
  }
  next()
}

module.exports = requirePassword