const router = require("express").Router()
const User = require("../model/User")
const verifyToken = require("../middlewares/verifyToken")

//Create
router.post('/players', verifyToken, async (req, res) => {
  console.log(req.body)
  
  return res.json("Working...")
})
//update
router.put('/players:id', async (req, res) => {
  
})

//delete
router.delete('/players/:id', async (req, res) => {
  
})

//get
router.get('/players/:id', async (req, res) => {
  
})

//getAll
router.get('/players', async (req, res) => {
  
})

module.exports = router