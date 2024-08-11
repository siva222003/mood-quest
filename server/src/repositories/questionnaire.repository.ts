import { DbService } from "../config/db";
import { IQuestion } from "../models/question.model";

export class QuestionnaireRepository {
  constructor(private readonly _db: DbService) {}
  async getAll() {
    return this._db.questionnaireModel.find();
  }
  async getById(id: string) {
    return this._db.questionnaireModel.findById(id);
  }

  async getQuestionsByQuestionnaireId(id: string) {
    return this._db.questionnaireModel.findById(id).populate({
      path: "sections",
      populate: {
        path: "questions",
        model: "Question",
      },
    });
  }

  async create(data: { title: string }) {
    return this._db.questionnaireModel.create(data);
  }
  async update(id: string, data: { title: string }) {
    return this._db.questionnaireModel.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id: string) {
    return this._db.questionnaireModel.findByIdAndDelete(id);
  }
}
