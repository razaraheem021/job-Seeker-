import { catchAsyncError } from "../middlewares/catchAsynError.js";
import ErrorHandler from "../middlewares/error.js";
import { checkPermission } from "../middlewares/permissionChecker.js";
import { Job } from "../models/jobSchema.js";

export const getAllJobs = catchAsyncError(async (req, res, next) => {
  const jobs = await Job.find({
    expired: false,
  });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const createJob = catchAsyncError(async (req, res, next) => {
    if (!req.user) {
      return next(new ErrorHandler("User not authenticated", 401));
    }
  
    const { role } = req.user;
  
    if (!checkPermission(role, 'createJob')) {
      return next(new ErrorHandler("You are not allowed to create jobs", 400));
    }
    const {
      title,
      description,
      category,
      country,
      city,
      location,
      fixedSalary,
      salaryFrom,
      salaryTo,
    } = req.body;
    if (!title || !description || !category || !country || !city || !location) {
      return next(new ErrorHandler("Provide all details", 400));
    }
    if ((!salaryFrom || !salaryTo) && !fixedSalary) {
      return next(
        new ErrorHandler(
          "Provide me at least fixed salary or the ranged salary",
          400
        )
      );
    }
    if (salaryFrom && salaryTo && fixedSalary) {
      return next(
        new ErrorHandler(
          "You can't enter both (fixed salary or the ranged salary)",
          400
        )
      );
    }
    const postedBy = req.user._id;
    const job = await Job.create({
      title,
      description,
      category,
      country,
      city,
      location,
      fixedSalary,
      salaryFrom,
      salaryTo,
      postedBy,
    });
    res.status(200).json({
      success: true,
      message: "Job Posted Successfully",
      job,
    });
  });

export const getMyJobs = catchAsyncError(async (req, res, next) => {
  if (!req.user) {
    return next(new ErrorHandler("User not authenticated", 401));
  }
  const { role } = req.user;
  if (role != "Employeer") {
    return next(new ErrorHandler("You are not allowed to get your jobs", 400));
  }
  const jobs = await Job.find({ postedBy: req.user._id });
  res.status(200).json({
    success: true,
    jobs,
  });
});

export const updateJob = catchAsyncError(async (req, res, next) => {
  const { id } = req.params;
  let job = await Job.findById(id);
  if (!job) {
    return next(new ErrorHandler("Job not found", 404));
  }
  job=await Job.findByIdAndUpdate(id, req.body,{
    new:true,
    runValidators:true,
    useFindAndModify:false
  });
  res.status(200).json({
    success: true,
    job,
    message: "Job updated successfully",
  });
});

export const deleteJob = catchAsyncError(async (req, res, next) => {
    const { id } = req.params;
    let job = await Job.findById(id);
    if (!job) {
      return next(new ErrorHandler("Job not found", 404));
    }
    await job.deleteOne();
    res.status(200).json({
      success: true,
      message: "Job Deleted successfully",
    });
  });