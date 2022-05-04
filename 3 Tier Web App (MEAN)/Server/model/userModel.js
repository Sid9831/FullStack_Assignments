import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: {
        type: Number,
        default: 9173460055
    },
    password: String
});

const User = mongoose.model('user', userSchema);

export default User