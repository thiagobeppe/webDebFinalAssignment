const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: String,
  breed: String,
  type: String,
  shape: String,
  gender: String,
  color: String,
  age: String,
  status: String,
  obs: String,
});

module.exports = mongoose.model("Pet", PetSchema);
