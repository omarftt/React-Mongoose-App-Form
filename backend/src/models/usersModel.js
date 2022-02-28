const {Schema , model} = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: String
})

module.exports = model('User', userSchema)