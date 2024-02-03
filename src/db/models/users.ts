import mongoose, { Schema } from "mongoose";

const userSchema : Schema = new Schema({
    email: String,
    phone: Number,
    full_name: String,
},{
    timestamps: true
})

const UserModel = mongoose.models.User || mongoose.model('User', userSchema);

export default UserModel;