import mongoose from "mongoose";

const jobSchema=new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: [2, "Job Title should contain at least more then 2 characters"],
        maxLength: [50, "Job Title should contain at max 50 characters"],
    },
    description: {
        type: String,
        required: [true,"Please provide job discription"],
        minLength: [5, "Job Desc. should contain at least more then 5 characters"],
        maxLength: [250, "Job Desc should contain at max 50 characters"],
    },
    category:{
        type: String,
        required: [true, "Job Category should contain at least"],
    },
    country:{
        type: String,
        required: [true, "Job country should contain at least"],
    },
    city:{
        type: String,
        required: [true, "Job city should contain at least"],
    },
    location: {
        type: String,
        required: [true, "Please provide exect location"],
        minLength: [50, "Location at least contain 50 characters"]
    },
    salary:{
        type: Number,
        minLength: [4, "Fixed salary must contain 4 digits"],
        maxLength: [9, "Fixed salary should not exceed 9 digits"],
    },
    salaryFrom:{
        type: Number,
        minLength: [4, "Salary must contain 4 digits"],
        maxLength: [9, "Salary should not exceed 9 digits"],
    },
    salaryTo:{
        type: Number,
        minLength: [4, "Salary to must contain 4 digits"],
        maxLength: [9, "Salary to should not exceed 9 digits"],
    },
    expired:{
        type: Boolean,
        default: false,
    },
    jobPostedOn:{
        type: Date,
        default: Date.now,
    },
    postedBy:{
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    }
});

export const Job =mongoose.model("Job",jobSchema);