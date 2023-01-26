const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InstitutionSchema = new Schema({
  institution: {
    type: String,
    required: true,
  },
  street: {
    type: String,
    required: true,
  },
  zip: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
});

module.exports = Institution = mongoose.model("institution", InstitutionSchema);
