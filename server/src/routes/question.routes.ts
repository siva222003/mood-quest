import express from "express";
import {
  createQuestion,
  deleteQuestion,
  getQuestionsByQuestionnaireId,
  getQuestionsBySectionId,
} from "../controllers/question.controller";

const router = express.Router();

router.get("/section/:sectionId", getQuestionsBySectionId);
router.get("/questionnaire/:questionnaireId", getQuestionsByQuestionnaireId);
router.post("/", createQuestion);
router.delete("/:id", deleteQuestion);

export default router;
