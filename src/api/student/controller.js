const Student = require('./model')
const jwt = require('jsonwebtoken')
const config = require('configuration')
const response = require('app/response')
const fs = require('fs')
const path = require('path')
const os = require('os')

exports.register = async (ctx) => {
    const req = ctx.request.body
    const student = await Student.create(req)
    const token = jwt.sign(student.toJSON(), config.get('JWT_SECRET'))
    const body = {
        student: student,
        access_token: token
    }
    response.responseOk(ctx, 'Student registered successfully', body)
}


exports.login = async (ctx) => {
    
}

exports.getStudents = async (ctx) => {
    const students = await Student.find()
    response.responseOk(ctx, 'Student list', ctx.state.user)
}

exports.fileUpload = async (ctx) => {
    // console.log(file)
    // const reader = fs.createReadStream(file.path)
    // const stream = fs.createWriteStream(path.join('./uploads', Math.random().toString()))
    // reader.pipe(stream)
    // console.log('uploading %s -> %s', file.name, stream.path)
    ctx.request.body.avatar = ctx.request.files.avatar.path
    response.responseOk(ctx, 'Request', ctx.request.body)
}