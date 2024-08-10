import { QuestionRepository } from "../repositories/question.repository";
import { QuestionnaireRepository } from "../repositories/questionnaire.repository";
import { SectionRepository } from "../repositories/section.repository";
import { QuestionService } from "../services/question.service";
import { QuestionnaireService } from "../services/questionnaire.service";
import { SectionService } from "../services/section.service";
import { DbService } from "./db";

const dbService = new DbService();

const questionnaireRepo = new QuestionnaireRepository(dbService);
export const questionnaireService = new QuestionnaireService(questionnaireRepo);

const sectionRepo = new SectionRepository(dbService);
export const sectionService = new SectionService(sectionRepo,questionnaireRepo);

const questionRepo = new QuestionRepository(dbService);
export const questionService = new QuestionService(questionRepo,sectionRepo);