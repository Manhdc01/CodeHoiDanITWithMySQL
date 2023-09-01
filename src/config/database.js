require('dotenv').config()
const mongoose = require('mongoose');// get the client
// create the connection to database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT, //deault: 3306
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   });
const connection = async() => {
  const option = {
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME
  }
    await mongoose.connect(process.env.DB_HOST, option);  
}

  module.exports = connection;