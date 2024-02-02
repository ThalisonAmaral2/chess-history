const mongoose = require("moongose")

const EventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  players: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Player",
      required: true
    }
  ],
  games: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Games",
      required: false
    }
  ]
})

module.exports = mongoose.model("Event", EventSchema)