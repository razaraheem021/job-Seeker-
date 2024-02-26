import express from "express";
import { isAuthorized } from "../middlewares/auth.js";
import { employerGetAllApplications, jobSeekerDeleteApplication, jobSekeerGetAllApplications, postApplication } from "../controllers/applicationController.js";

const router = express.Router();

router.get('/getAllapplicationsForEmployer',isAuthorized,employerGetAllApplications);
router.get('/getAllApplicationsForJobSeeker',isAuthorized, jobSekeerGetAllApplications);
router.delete('/delete/:id',isAuthorized, jobSeekerDeleteApplication);
router.post('/post', isAuthorized, postApplication)


export default router;