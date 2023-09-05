const mongoose = require('mongoose')
//Định dạng hình thù database
const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    adreess: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    },
    {timestamps: true}
    )
const Customer = mongoose.model("Customer", userSchema);

module.exports = Customer