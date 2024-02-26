import express from "express";
import { createJob, deleteJob, getAllJobs, getMyJobs, updateJob } from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get('/getAllJobs',getAllJobs);
router.post('/post',isAuthorized, createJob);
router.get('/myJobs',isAuthorized, getMyJobs);
router.put('/updateJob/:id',isAuthorized, updateJob);
router.delete('/deleteJob/:id',isAuthorized, deleteJob);


export default router;