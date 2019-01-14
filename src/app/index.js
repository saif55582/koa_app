const Koa = require('koa')
const router = require('routing')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-morgan')
const responseTime = require('koa-response-time')
const jwt = require('koa-jwt')
const database = require('database')
const config = require('configuration')
const respond = require('koa-respond')
const res = require('app/res')


const app = new Koa()
app.use(responseTime())
app.use(logger('combined'))
app.use(bodyParser())
app.use(respond())
app.use(router.routes())
app.use(ctx => { ctx.type = 'json' })
app.use(res)


exports.start = async () => {
    try {
        await database.connect()
        console.log('Connected established with mongodb')
        const port = config.get('PORT')
        await app.listen(port)
        console.log(`Server started on port ${port}`);
    } catch(error) {
        console.log('Something went wrong with mongodb connection')
        console.log(error)
    }
}