const mongoose = require("mongoose");

const PetSchema = new mongoose.Schema({
  name: String,
  breed: String,
  type: String,
  shape: String,
  gender: String,
  color: String,
  age: String,
  status: {
    type: String,
    default: "False",
  },
  obs: String,
  owner: String,
});

module.exports = mongoose.model("Pet", PetSchema);
