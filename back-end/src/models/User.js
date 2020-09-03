const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: String,
  password: String,
  name: String,
  telephone: String,
  address: String,
  number: String,
  neighborhood: String,
  city: String,
  state: String,
  cep: String,
  role: String
});

module.exports = mongoose.model("User", UserSchema);
