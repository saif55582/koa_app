exports.responseOk = ( ctx, msg, body) => {
    ctx.status = 200
    // ctx.message = msg
    ctx.body = {
        status: 1,
        message: msg,
        data: body
    }
}

exports.responseNotAcceptable = (ctx, msg) => {
    ctx.status = 422
    ctx.body = {
        status: 0,
        message: msg || 'Unprocessable entity',
    }
}

exports.responseBad = (ctx, msg) => {
    ctx.status = 400
    ctx.body = {
        status: 0,
        message: msg || 'Bad request',
    }
}

exports.ok = () => {
    
}
