import { catchAsyncError } from "../middlewares/catchAsynError.js";
import ErrorHandler from "../middlewares/error.js";
import { Application } from "../models/applicationSchema.js";
import cloudinary from "cloudinary";
import { Job } from "../models/jobSchema.js";

export const employerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job Seeker") {
      return next(new ErrorHandler("You are not allowed to get this", 400));
    }
    const { _id } = req.user;
    const application = await Application.find({
      "employerID.user": req.user._id,
    });

    res.status(200).json({
      success: true,
      application,
    });
  }
);

export const jobSekeerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(new ErrorHandler("You are not allowed to get this", 400));
    }
    const { _id } = req.user;
    const application = await Application.find({
      "applicantID.user": req.user._id,
    });

    res.status(200).json({
      success: true,
      application,
    });
  }
);

export const jobSeekerDeleteApplication = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(new ErrorHandler("You are not allowed to do this", 400));
    }
    const { id } = req.params;
    const application = await Application.findById(id);
    if (!application) {
      return next(new ErrorHandler("Application not found", 404));
    }
    await application.deleteOne();
    res.status(200).json({
      success: true,
      message: "Application Deleted successfully",
    });
  }
);

export const postApplication = catchAsyncError(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorHandler("User not authenticated", 401));
  }
  const { role } = req.user;
  if (role === "Employer") {
    return next(new ErrorHandler("You are not allowed to do this", 400));
  }

  if (!req.files || Object.keys(req.files).length === 0) {
    return next(new ErrorHandler("Resume File is Required"));
  }
  const { resume } = req.files;

  const allowedFormats = ["image/png", "image/jpg", "image/webp", "image/jpeg"];

  if (!allowedFormats.includes(resume.mimetype)) {
    return next(new ErrorHandler("Invalid File Format", 400));
  }
  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.log(
      "cloudinary_error",
      cloudinaryResponse.error || "unknown Cloudinary Error"
    );
    return next(new ErrorHandler("File to upload the resume", 400));
  }

  const { name, email, coverLetter, phone, address, jobId } = req.body;

  const applicantID = {
    user: req.user._id,
    role: "Job Seeker",
  };
  if (!jobId) {
    return next(new ErrorHandler("job not Found", 404));
  }
  const jobDetails = await Job.findById(jobId);

  if (!jobDetails) {
    return next(new ErrorHandler("job not Found", 404));
  }
  const employerID = {
    user: jobDetails.postedBy,
    role: "Employer",
  };

  if (
    !name ||
    !email ||
    !coverLetter ||
    !phone ||
    !address ||
    !applicantID ||
    !employerID ||
    !resume
  ) {
    return next(new ErrorHandler("Please Fill all the Fields", 400));
  }

  const application = await Application.create({
    name,
    email,
    coverLetter,
    phone,
    address,
    applicantID,
    employerID,
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });

  res.status(200).json({
    success: true,
    message: "Application posted successfully",
    application,
  });
});
