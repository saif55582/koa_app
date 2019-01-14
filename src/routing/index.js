const router = require('koa-router')()
const user = require('api/users/routes')
const student = require('api/student/routes')

router.use('/users', user)
router.use('/student', student)

module.exports = router