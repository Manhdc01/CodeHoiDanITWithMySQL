const mongoose = require('mongoose')
//Định dạng hình thù database

const customerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    adreess: String,
    phone: String,
    email: String,
    image: String,
    description: String,
    },
    {timestamps: true}
    )
const Customer = mongoose.model("Customer", customerSchema)

module.exports = Customer