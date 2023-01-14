import express from "express";
const router = express.Router();

import newsController from "../app/controllers/NewsController.js";

router.use('/:id', newsController.show);
router.use('/', newsController.index);

export default router