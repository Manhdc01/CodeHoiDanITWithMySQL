const mongoose = require('mongoose')
//Định dạng hình thù database
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    city: String
    })
const User = mongoose.model("user", userSchema);

module.exports = User