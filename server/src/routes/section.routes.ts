import express from "express";

import {
  createSection,
  deleteSection,
  getSection,
  updateSection,
  getAllSections,
} from "../controllers/section.controller";

const router = express.Router();

router.get("/", getAllSections);

router.get("/:id", getSection);

router.post("/:questionnaireId", createSection);

router.patch("/:id", updateSection);

router.delete("/:id", deleteSection);

export default router;
