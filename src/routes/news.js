import express from "express";
const router = express.Router();

import newsController from "../app/controllers/NewsController.js";

router.get('/:id', newsController.show);
router.get('/', newsController.index);

export default router