const mongoose = require('../setting')

const Schema = mongoose.Schema;

let userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    nickName1: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    gender: {
        type: Number,
        enum: [-1, 0, 1],
        default: -1
    },
    avatar: {
        type: String,
        default: '/public/images/avatar-default.png'
    },
    createTime: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', userSchema)