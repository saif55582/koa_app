const mongoose = require('mongoose')
const { Schema } = require('mongoose')

const todoSchema = new Schema({
    name: {
        type: String,
        required: [true, 'name is required']
    },
    is_completed: {
        type:Boolean,
        default: false
    },
    created_at: {
        type: Date,
        default: Date.now
    }
})

const Todo = mongoose.model('Todo', todoSchema)

module.exports = Todo