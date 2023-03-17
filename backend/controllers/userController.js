const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')

/**    
 *  @desc   Authenticate a user
 *  @route  POST /api/user/login
 *  @access Public
*/
const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'Login User' })
})

/**    
 *  @desc   Register user
 *  @route  POST /api/user
 *  @access Public
*/
const registerUser = asyncHandler(async (req, res) => {

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("add all fields")
    }

    // Check if user exists

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    // Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create user
    const user = await User.create({
        name: name,
        email: email,
        password: hashedPassword
    })

    if (user) {
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    } else {
        res.status(400)
        throw new Error("invalid user data")
    }
})

/**    
 *  @desc   Get user data
 *  @route  GET /api/user/me
 *  @access Public
*/
const getMe = asyncHandler(async (req, res) => {
    res.json({ message: 'User data display' })
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}