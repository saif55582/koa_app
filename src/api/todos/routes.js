const router = require('koa-router')()
const controller = require('./controller')


router.post('/', controller.createTodo)
router.get('/', controller.getTodos)
router.get('/:id', controller.getTodo)
router.patch('/:id', controller.updateTodo)
router.delete('/:id', controller.deleteTodo)

module.exports = router.routes()