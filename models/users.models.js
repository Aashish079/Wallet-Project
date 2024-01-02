import mongoose from 'mongoose';


const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Name is required'],   
    },
    email:{
        type:String,
        required:[true, 'Email is required'],
        unique:true,   
    },
    password:{
        type:String,
        required:[true, 'Password is required'],   
    },
    address:{
        type:String,
    },
    balance:{
        type:Number,
        required:[true, 'Balance is required'],
        default:0,
    },
});

export const User = mongoose.model("user",userSchema);
