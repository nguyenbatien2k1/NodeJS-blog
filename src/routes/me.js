import express from "express";
const router = express.Router();

import meController from "../app/controllers/MeController.js";

router.get('/stored/courses', meController.storedCourses);

export default router