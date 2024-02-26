import mongoose from "mongoose";
import validator from "validator";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: "string",
    required: true,
    minLength: [5, "at least more then 5 characters"],
    maxLength: [30, "at max 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Please provide me email address"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide me phone number"],
  },
  password: {
    type: String,
    required: true,
    minLength: [6, "Password must contain at least more then 6 characters"],
    maxLength: [30, "at max 30 characters"],
    //password won't show in response
    select:false,
  },
  role: {
    type: String,
    required: [true, "Please provide your Role"],
    enum: ["Job Seeker", "Employer"],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

//Hash password
userSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    this.password=await bcrypt.hash(this.password,10);
})

//compare the password

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

//jwt token generation for authorization

userSchema.methods.getJWTToken= function(){
    const token= jwt.sign({_id:this._id},process.env.JWT_SECRET_KEY,{
      expiresIn:process.env.JWT_EXPIRE,
    });
    return token;
}



export const User = mongoose.model("User", userSchema);