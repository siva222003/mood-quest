import express from "express";
import {
  createManyRecommendations,
  createRecommendation,
  getRecommendations,
} from "../controllers/recommendation.controller";

const router = express.Router();

router.post("/tags", getRecommendations);
router.post("/", createRecommendation);
router.post("/many", createManyRecommendations);

export default router;
