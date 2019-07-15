const mongoose = require('../setting')

const Schema = mongoose.Schema;

let studentSchema = new Schema({
    name: {
        type:String,
        required: true
    },
    gender: {
        type:Number,
        enum: [-1, 0, 1],
        default: -1
    },
    age: {
        type:Number,
    },
    score: {
        type:Object,
        default: []
    },
    hobbies: {
        type:Array,
        default: []
    },
    creat_time: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Student', studentSchema)