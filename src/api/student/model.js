const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const StudentSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    email: {
        type: String,
        required: [true, 'email is required']
    },
    password: {
        type: String,
        required: [true, 'password is required']
    },
    phone_number: {
        type: Number,
        required: [true, 'phone_number is required']
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Student = mongoose.model('Student', StudentSchema);

module.exports = Student
