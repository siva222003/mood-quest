import { IQuestion } from "../models/question.model";
import { QuestionRepository } from "../repositories/question.repository";
import { SectionRepository } from "../repositories/section.repository";
import { ApiError } from "../utils/api-error";

export class QuestionService {
  constructor(
    private readonly _questionRepo: QuestionRepository,
    private readonly _sectionRepo: SectionRepository
  ) {}

  async create(data: IQuestion, sectionId: string) {
    const section = await this._sectionRepo.getById(sectionId);

    if (!section) {
      throw ApiError.notFound("Section not found");
    }

    console.log(data);

    const question = await this._questionRepo.create(data);

    section.questions.push(question._id);

    await section.save();

    return question;
  }

  async update(id: string, data: IQuestion) {
    const question = await this._questionRepo.update(id, data);

    if (!question) {
      throw ApiError.notFound("Question not found");
    }

    return question;
  }

  async delete(id: string, sectionId: string) {
    const question = await this._questionRepo.delete(id);

    if (!question) {
      throw ApiError.notFound("Question not found");
    }

    const section = await this._sectionRepo.getById(sectionId);

    if (!section) {
      throw ApiError.notFound("Section not found");
    }

    section.questions = section.questions.filter((q) => q.toString() !== id);

    await section.save();

    return question;
  }
}
