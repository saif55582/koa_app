const todoSchema = require('./model')
const config = require('configuration')
const res = require('app/response')

exports.createTodo = async (ctx) => {
    const body = ctx.request.body
    const todo = await todoSchema.create(body)
    res.responseOk(ctx, 'Todo saved succesfully', todo)
}

exports.getTodos = async (ctx) => {
    const todos = await todoSchema.find()
    res.responseOk(ctx, 'Todo list', todos)
}

exports.getTodo = async (ctx) => {
    const id = ctx.params.id
    const todo = await todoSchema.findById(id)
    res.responseOk(ctx, 'Todo', todo)
}

exports.updateTodo = async (ctx) => {
    const id = ctx.params.id
    const body = ctx.request.body
    var is_updated = false
    try {
        var todo = await todoSchema.findByIdAndUpdate(id, body, {new:true})
        if (todo)
            is_updated = true
    } catch (err) {
    }
    if (is_updated)
        res.responseOk(ctx, 'Todo updated successfully', todo)
    else
        res.responseNotAcceptable(ctx, 'No todo found for the given id')
}

exports.deleteTodo = async (ctx) => {
    const id = ctx.params.id 
    let is_deleted = false
    try {
        const deleted = await todoSchema.findByIdAndDelete(id)
        if (deleted)
            is_deleted = true
    } catch (err) {
    }
    if (is_deleted)
        res.responseOk(ctx, 'Todo deleted successfully')
    else
        res.responseNotAcceptable(ctx, 'No todo found for the given id')
}