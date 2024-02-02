const mongoose = require("mongoose")

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  born: {
    type: Date,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  events: [
    {
      type: mongoose.Schema.Types.ObjectId, 
      ref: "Event"
    }
  ],
})

module.exports = mongoose.model('Player', PlayerSchema)