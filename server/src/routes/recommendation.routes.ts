import express from "express";
import {
  createManyRecommendations,
  createRecommendation,
  deleteRecommendation,
  getAllRecommendations,
  getRecommendations,
  updateRecommendation,
} from "../controllers/recommendation.controller";

const router = express.Router();

router.post("/tags", getRecommendations);
router.get("/", getAllRecommendations);
router.post("/", createRecommendation);
router.post("/many", createManyRecommendations);
router.patch("/:id", updateRecommendation);
router.delete("/:id", deleteRecommendation);

export default router;
