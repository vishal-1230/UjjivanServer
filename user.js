import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
    user: String,
    name: String,
    phone: Number,
    email: String,
    approved:{
        type: Boolean,
        default: false
    }
})

export default mongoose.model('user', userSchema)