import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: boolean,
        required: true,
        default: false
    }
}, {
    // for createdAt and updatedAt fields
    timestamps: true
})

const User = mongoose.model('User', userSchema)

export default User;