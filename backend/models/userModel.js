const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "add a name"]
    },
    email: {
        type: String,
        required: [true, "add an email"],
        unique: true
    },
    password: {
        type: String,
        required: [true, "add a password"]
    },
})

module.exports = mongoose.model("User", userSchema)