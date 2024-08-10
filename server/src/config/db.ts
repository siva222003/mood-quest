import mongoose, { Model } from "mongoose";
import { env } from "./config";
import { IQuestionnaire, QuestionnaireSchema } from "../models/questionnaire.model";
import { ISection, SectionSchema } from "../models/section.model";
import { IQuestion, QuestionSchema } from "../models/question.model";

export class DbService {
  private readonly _db: mongoose.Connection;
  public readonly questionnaireModel: Model<IQuestionnaire>;
  public readonly sectionModel: Model<ISection>;
  public readonly questionModel: Model<IQuestion>;

  constructor() {
    this._db = mongoose.connection;

    this.questionnaireModel = this._db.model<IQuestionnaire>("Questionnaire", QuestionnaireSchema);
    this.sectionModel = this._db.model<ISection>("Section", SectionSchema);
    this.questionModel = this._db.model<IQuestion>("Question", QuestionSchema);
  }

  async connect() {
    await mongoose.connect(env.MONGO_URI);
    console.log("🎄 Database connected");
  }
}
