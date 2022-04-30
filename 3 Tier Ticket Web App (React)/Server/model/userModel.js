import mongoose from 'mongoose'

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    password: String
});

const User = mongoose.model('user', userSchema);

export default User