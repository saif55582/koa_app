const router = require('koa-router')()
const user = require('api/users/routes')

router.use('/users', user)

module.exports = router