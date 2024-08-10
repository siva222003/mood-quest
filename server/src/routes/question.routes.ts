import express from "express";
import {
  createQuestion,
  deleteQuestion,
  getQuestionsBySectionId,
} from "../controllers/question.controller";

const router = express.Router();

router.get("/:sectionId", getQuestionsBySectionId);
router.post("/", createQuestion);
router.delete("/:id", deleteQuestion);

export default router;
