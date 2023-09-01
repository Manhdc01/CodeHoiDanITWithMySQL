const connection = require('../config/database')
const {getAllUsers,updateUserById, getUserByID, deleteUserById}= require('../services/CRUDService')

const User = require('../models/user')

const getHomePage = async (req, res) => { 
    let results = []
    return res.render('home.ejs', {listUsers: results})
}

const getABC = (req, res) => {
    res.render('sample.ejs')
}

const postCreateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city

    // connection.query(
    //     'INSERT INTO Users (email, name, city)  VAlUES (?, ?, ?)',
    //     [email, name, city],
    //         function(err, results) {

    //             console.log(results);

    //             res.send('Created user success !')
    //         }
    //     )

        // let [results, fields] = await connection.query( 'INSERT INTO Users (email, name, city)  VAlUES (?, ?, ?)', [email, name, city],)
        // console.log('>>> check results', results)
        await User.create({
            email: email,
            name: name,
            city: city
        })
        res.send('Created user success !')
        // const [rows, fields] = await connection.query(SELECT * FROM `Users')

    
        
}

const postUpdateUser = async (req, res) => {
    let email = req.body.email
    let name = req.body.myname
    let city = req.body.city
    let userId = req.body.userId

    let [results, fields] = await connection.query( 
        `
        UPDATE Users
        SET email = ?, city = ?, name = ?
        WHERE id = ?
        `, [email, city, name, userId]
    )

    res.send('Updated user success !')

    
        
}

const getCreatePage = (req, res) => {
    res.render('create.ejs')
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id 

    let user = await getUserByID(userId)
    // let [results, fields] = await connection.query('Select * from Users where id = ?', [userId])
    
    // let user = results && results.length > 0 ? results[0] : {}
      
    res.render('edit.ejs', {userEdit : user})
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id
    let user = await getUserByID(userId)


    res.render('delete.ejs', {userEdit : user})
}

const postHandleRemoveUser = async (req, res) => {
    const id = req.body.userId

    await deleteUserById(id)

    res.redirect('/')
}

module.exports = {
    getHomePage,
    getABC,
    postCreateUser,
    getCreatePage,
    getUpdatePage,
    postUpdateUser,
    updateUserById,
    getUserByID,
    postDeleteUser,
    postHandleRemoveUser,
    deleteUserById
    
}