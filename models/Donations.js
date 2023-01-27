const mongoose = require("mongoose");

const donationsSchema = new mongoose.Schema({
  article_name: {
    type: String,
    required: true,
  },
  expiration_date: {
    type: String,
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
  institution: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institution",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Donations = mongoose.model("Donations", donationsSchema, "donations");

module.exports = Donations;
