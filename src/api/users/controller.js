const User = require('./model')

exports.read = async () => {
    return users = await User.find()

    return {
        'status': 1,
        'message': 'Users list',
        'data': users
    }
}

exports.create = async ( { data = {} } = {} ) => {
    return  User.create(data)
}