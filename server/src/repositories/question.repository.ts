import { DbService } from "../config/db";
import { IQuestion } from "../models/question.model";

export class QuestionRepository {
  constructor(private readonly _db: DbService) {}

  async create(data: IQuestion) {
    return this._db.questionModel.create(data);
  }

  async getById(id: string) {
    return this._db.questionModel.findById(id);
  }

  async delete(id: string) {
    return this._db.questionModel.findByIdAndDelete(id);
  }
}
