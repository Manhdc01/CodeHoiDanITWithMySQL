require('dotenv').config()
const express = require("express") //comon js
const configViewEngine = require('./config/viewEngine')
const webRoutes = require('./routes/web')
const connection = require('./config/database')


const app = express() // app của express
const port = process.env.PORT || 8888//port
const hostname = process.env.HOST_NAME

//config req.body
app.use(express.json()) // for json
app.use(express.urlencoded({ extended: true })) // for form data

//Config template engine
configViewEngine(app)

//Khai báo route
app.use('/', webRoutes)

//test connection
connection();
app.listen(port, hostname, () => {
  console.log(`Backend zero app listening on port ${port}`)
})
