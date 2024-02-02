const mongoose = require("moongose")

const validResults = ['0-1', '1-0', '1/2-1/2'];

const GameSchema = new mongoose.Schema({
  white: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  black: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  location: {
    type: String, 
    required: false
  },
  result: {
    type: mongoose.Schema.Types.ObjectId,
    enum: validResults,
    required: true
  }
})


module.exports = mongoose.model("Game", GameSchema)