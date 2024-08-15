import { QuestionnaireRepository } from "../repositories/questionnaire.repository";
import { ApiError } from "../utils/api-error";

export class QuestionnaireService {
  constructor(private readonly _questionnaireRepo: QuestionnaireRepository) {}

  async getAll() {
    return this._questionnaireRepo.getAll();
  }

  async getById(id: string) {
    const questionnaire = await this._questionnaireRepo.getById(id);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    return questionnaire;
  }

  async getQuestionsByQuestionnaireId(id: string) {
    const questionnaire = await this._questionnaireRepo.getQuestionsByQuestionnaireId(id);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    return questionnaire;
  }

  async getSectionsByQuestionnaireId(id: string) {
    const questionnaire = await this._questionnaireRepo.getSectionsByQuestionnaireId(id);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    return questionnaire;
  }

  async create(data: { title: string }) {
    return this._questionnaireRepo.create(data);
  }

  async update(id: string, data: { title: string }) {
    const questionnaire = await this._questionnaireRepo.update(id, data);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    return questionnaire;
  }

  async delete(id: string) {
    const questionnaire = this._questionnaireRepo.delete(id);

    if (!questionnaire) {
      throw ApiError.notFound("Questionnaire not found");
    }

    return questionnaire;
  }
}
