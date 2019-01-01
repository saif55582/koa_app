const Student = require('./model')
const jwt = require('jsonwebtoken')
const config = require('configuration')
const response = require('app/response')


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
    response.responseOk(ctx, 'Student list', students)
}