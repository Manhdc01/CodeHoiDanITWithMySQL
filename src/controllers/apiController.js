const User = require('../models/user')

const getUsersAPI = async (req, res) => { 
    let results = await User.find({})

    return res.status(200).json(
        {
            erroCode: 0,
            data: results
        }
    )
}
const postCreateUserAPI = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    let user = await User.create({
            email: email,
            name: name,
            city: city
        })
    return res.status(200).json(
            {
                erroCode: 0,
                data: user
            }
        )
}

const postUpdateUserAPI = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    let userId = req.body.userId

    let user = await User.updateOne({_id: userId}, {name: name, email: email,city: city});
    return res.status(200).json(
        {
            erroCode: 0,
            data: user
        }
    )  
}

const postHandleRemoveUserAPI = async (req, res) => {
    const id = req.body.userId

    // await deleteUserById(id)
    let results = await User.deleteOne({_id: id})

    return res.status(200).json(
        {
            erroCode: 0,
            data: results
        }
    )  
}

module.exports = {
    getUsersAPI, postCreateUserAPI, postUpdateUserAPI, postHandleRemoveUserAPI
}