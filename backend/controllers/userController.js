import { catchAsyncError } from "../middlewares/catchAsynError.js";
import ErrorHandler from "../middlewares/error.js";
import { User } from "../models/userSchema.js";
import {sendToken} from "../utils/jwtToken.js"

export const register = catchAsyncError(async (req, res, next) => {
  const { name, email, phone, role, password } = req.body;

  if (!name || !email || !phone || !role || !password) {
    return next(new ErrorHandler("Please Fill all the Fields", 400));
  }
  
    const isEmail = await User.findOne({ email: email });
    if (isEmail) {
      return next(new ErrorHandler("Email Already Exists", 400));
    }

    const user = await User.create({ name, email, phone, role, password });
    // res.status(200).json({
    //   success: true,
    //   message: "User Registered successfully",
    //   user
    // });
    sendToken(user, 200, res,"User Registered successfully");
});

export const login = catchAsyncError(async(req,res,next)=>{
    const {email,password,role}=req.body;
    if(!role||!email||!password){
        return next(new ErrorHandler("Please Fill all the Fields", 400));
    }
    const user=await User.findOne({email:email}).select("+password");
    if(!user){
        return next(new ErrorHandler("Invalid Credentials", 400));
    }
    const isPasswordMatch = await user.comparePassword(password);
    if(!isPasswordMatch){
        return next(new ErrorHandler("Invalid Credentials", 400));
    }
    if(user.role!==role){
        return next(new ErrorHandler("Invalid Role", 400));
    }
    if(user.role===role){
        sendToken(user, 200, res, "User Logged in successfully");
    }
})

export const logout=catchAsyncError(async(req,res,next)=>{
    res.status(201).cookie('token',"",{
        httpOnly:true,
        expires:new Date(Date.now()),
    }).json({
        success: true,
        message: "User Logged out successfully"
    })
})

export const getUser = catchAsyncError((req,res,next)=>{
    const user=req.user;
    res.status(200).json({
        success: true,
        user
    })
});