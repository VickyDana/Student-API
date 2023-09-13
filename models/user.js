const mongoose = require('mongoose');

const signupSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  

});



module.exports = mongoose.model('User', signupSchema);