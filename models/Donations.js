const mongoose = require("mongoose");

const donationsSchema = new mongoose.Schema({
  article_name: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: Date,
    required: true,
  },
  weight: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Donations = mongoose.model("Donations", donationsSchema);

module.exports = Donations;
