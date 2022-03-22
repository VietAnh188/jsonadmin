const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            unique: true,
            min: 3,
            max: 20,
        },
        password: {
            type: String,
            require: true,
            min: 5,
            max: 20,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            max: 50,
        },
        age: {
            type: Number,
            default: 0,
        },
        gender: {
            type: String,
            default: 'Unknown',
        },
        birthday: {
            type: String,
            default: '',
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
