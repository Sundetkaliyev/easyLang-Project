const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  surname: String,
  username: String,
  role: String,
  rate: Number,
  password: String,
  status: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
