import { Router } from "express";
import { getImageOptions, launchImage } from "../controllers/imageController";

const router = Router();

router.get("/images", getImageOptions);
router.post("/launch", launchImage);

export default router;
