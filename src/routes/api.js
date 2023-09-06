const express = require('express')

const routerAPI = express.Router()

const {getUsersAPI, postCreateUserAPI, postUpdateUserAPI, postHandleRemoveUserAPI, postUploadSingleFileAPI, postUploadMultipleFilesAPI} = require('../controllers/apiController')
const {postCreateCustomer, postCreateArrayCustomer} = require("../controllers/customerController")
routerAPI.get('/users', getUsersAPI)

routerAPI.post('/users', postCreateUserAPI)

routerAPI.put('/users', postUpdateUserAPI)

routerAPI.delete('/users', postHandleRemoveUserAPI)

routerAPI.post('/file', postUploadSingleFileAPI)

routerAPI.post('/files', postUploadMultipleFilesAPI)

routerAPI.post('/customers', postCreateCustomer)

routerAPI.post('/customers-many', postCreateArrayCustomer)





module.exports = routerAPI //export default
  