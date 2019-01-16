const router = require('koa-router')()
const user = require('api/users/routes')
const student = require('api/student/routes')
const todos = require('api/todos/routes')
const Koa = require('koa')


router.use('/users', user)
router.use('/student', student)
router.use('/todos', todos)

module.exports = router