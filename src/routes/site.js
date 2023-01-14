import express from "express";
const router = express.Router();

import siteController from "../app/controllers/SiteController.js";

// newsController.index();
router.use('/search', siteController.search);
router.use('/', siteController.home);

export default router