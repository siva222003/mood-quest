import { QuestionnaireRepository } from "../repositories/questionnaire.repository";
import { SectionRepository } from "../repositories/section.repository";
import { ApiError } from "../utils/api-error";

export class SectionService {
  constructor(
    private readonly _sectionRepo: SectionRepository,
    private readonly _questionnaireRepo: QuestionnaireRepository
  ) {}

  async getAll() {
    return this._sectionRepo.getAll();
  }

  async getById(id: string) {
    const section = await this._sectionRepo.getById(id);

    if (!section) {
      throw ApiError.notFound("Section not found");
    }

    return section;
  }

  async getQuestionsBySectionId(id: string) {
    const section = await this._sectionRepo.getQuestionsBySectionId(id);

    if (!section) {
      throw ApiError.notFound("Section not found");
    }

    return section.questions;
  }

  async create(data: { name: string }, questionnaireId: string) {
    const section = await this._sectionRepo.create(data);

    if (!section) {
      throw ApiError.badRequest("Section not created");
    }

    const questionnaire = await this._questionnaireRepo.getById(questionnaireId);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    questionnaire.sections.push(section._id);

    await questionnaire.save();

    return section;
  }

  async update(id: string, data: { name: string }) {
    const section = await this._sectionRepo.update(id, data);

    if (!section) {
      throw ApiError.notFound("Section not found");
    }

    return section;
  }

  async delete(id: string, questionnaireId: string) {
    const section = await this._sectionRepo.delete(id);
    if (!section) {
      throw ApiError.notFound("Section not found");
    }

    const questionnaire = await this._questionnaireRepo.getById(questionnaireId);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    questionnaire.sections = questionnaire.sections.filter((section) => section.toString() !== id);

    await questionnaire.save();

    return section;
  }
}
