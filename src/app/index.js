const Koa = require('koa')
const router = require('routing')
// const bodyParser = require('koa-bodyparser')
const bodyParser = require('koa-body')
const logger = require('koa-morgan')
const responseTime = require('koa-response-time')
const jwt = require('koa-jwt')
const database = require('database')
const config = require('configuration')
const respond = require('koa-respond')
const res = require('app/res')
const Koajwt = require('koa-jwt')
const cors = require('@koa/cors')



const app = new Koa()
app.use(responseTime())
app.use(logger('combined'))
app.use(bodyParser({
    multipart: true,
    formidable: {
        keepExtensions: true,
        uploadDir: 'public/images/',
        onFileBegin: renameFile
    }
}))

app.use(cors({
    // origin: ''
}))
app.use(respond())
app.use(handle401)
// app.use(Koajwt({ secret: config.get('JWT_SECRET')}).unless({ path: [/auth/]}))
app.use(router.routes())
app.use(ctx => { ctx.type = 'json' })
app.use(res)


function renameFile(name, file) {
    // console.log(name)
    const rand = Math.random().toString(36).substring(2, 8)
    const unix = new Date().getTime()
    if (name == 'avatar')
        file.path = config.get(name) + unix + rand + ".png"
}

function handle401(ctx, next) {
    return next().catch( (err) => {
        if (err.status == 401) {
            ctx.status = 401
            ctx.body = {error:'Unauthenticated'}
        } else {
            throw err
        }
    })
}


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
