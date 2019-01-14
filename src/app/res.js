const compose = require('koa-compose')

async function responseOk(ctx, next) {
    ctx.message = 'Saif'
    ctx.status = 200
    await next()
}

async function responseError(ctx, next) {
    ctx.message = 'Ali'
    ctx.status = 400
    ctx.body = "Sdsd"
    // await next()
}

module.exports = compose([responseOk, responseError])
