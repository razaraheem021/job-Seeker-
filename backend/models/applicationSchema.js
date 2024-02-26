import mongoose from "mongoose";
import validator from "validator";

const ApplicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide the name"],
    minLength: [3, "At least 3 characters required"],
    maxLength: [30, "Maximum 30 characters allowed"],
  },
  email: {
    type: String,
    required: [true, "Please provide an email address"],
    validate: [validator.isEmail, "Please enter a valid email"],
  },
  coverLetter: {
    type: String,
    required: [true, "Please provide a cover letter"],
  },
  phone: {
    type: Number,
    required: [true, "Please provide a phone number"],
  },
  address: {
    type: String,
    required: [true, "Please provide an address"],
    minLength: [50, "Address should contain at least 50 characters"],
  },
  resume: {
    public_id: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
  },
  applicantID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    role: {
      type: String,
      required: true,
      enum: ["Job Seeker"],
    },
  },
  employerID: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    role: {
      type: String,
      required: true,
      enum: ["Employer"],
    },
  },
});

export const Application = mongoose.model("Application", ApplicationSchema);
