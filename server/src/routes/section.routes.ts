import express from "express";

import {
  createSection,
  deleteSection,
  getSection,
  updateSection,
  getAllSections,
  getSectionsByQuestionnaireId,
} from "../controllers/section.controller";

const router = express.Router();

router.get("/", getAllSections);

router.get("/:id", getSection);

router.get("/questionnaire/:questionnaireId", getSectionsByQuestionnaireId);

router.post("/:questionnaireId", createSection);

router.patch("/:id", updateSection);

router.delete("/:id", deleteSection);

export default router;
