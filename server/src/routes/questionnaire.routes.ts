import express from "express";
import {
  createQuestionnaire,
  deleteQuestionnaire,
  getAllQuestionnaires,
  getQuestionnaire,
  updateQuestionnaire,
} from "../controllers/questionnaire.controller";

const router = express.Router();

router.get("/", getAllQuestionnaires);
router.get("/:id", getQuestionnaire);
router.post("/", createQuestionnaire);
router.patch("/:id", updateQuestionnaire);
router.delete("/:id", deleteQuestionnaire);

export default router;
