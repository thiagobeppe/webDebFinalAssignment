const mongoose = require('mongoose');

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
});

module.exports = mongoose.model('User', UserSchema);