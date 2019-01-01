const router = require('koa-router')()
const controller = require('./controller')
const response = require('app/response')


router.post('/register', controller.register)

router.post('/login', controller.login)

router.get('/', controller.getStudents)

module.exports = router.routes()