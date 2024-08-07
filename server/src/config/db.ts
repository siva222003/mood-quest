import mongoose from "mongoose";
import { env } from "./config";
import { IQuestionnaire, QuestionnaireSchema } from "../models/questionnaire.model";
import { ISection, SectionSchema } from "../models/section.model";
import { IQuestion, QuestionSchema } from "../models/question.model";

export class DbService {
  private readonly _db: mongoose.Connection;

  constructor() {
    this._db = mongoose.connection;
  }

  async connect() {
    await mongoose.connect(env.MONGO_URI);
    console.log("🎄 Database connected");
  }

  get questionnaireModel() {
    return this._db.model<IQuestionnaire>("Questionnaire", QuestionnaireSchema);
  }

  get sectionModel() {
    return this._db.model<ISection>("Section", SectionSchema);
  }

  get questionModel() {
    return this._db.model<IQuestion>("Question", QuestionSchema);
  }
}
