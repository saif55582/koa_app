const router = require('koa-router')()
const controller = require('./controller')


router.post('/auth/register', controller.register)

router.post('/auth/login', controller.login)

router.get('/api', controller.getStudents)

router.post('/upload', controller.fileUpload)

module.exports = router.routes()