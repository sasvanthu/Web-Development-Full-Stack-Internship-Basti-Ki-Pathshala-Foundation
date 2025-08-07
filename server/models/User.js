const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  skills: { type: String, required: true },
  availability: { type: String, required: true },
  bio: { type: String, required: true },
  approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('User', userSchema);
