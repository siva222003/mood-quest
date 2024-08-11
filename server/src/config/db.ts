import mongoose, { Model } from "mongoose";
import { env } from "./config";
import { IQuestionnaire, QuestionnaireSchema } from "../models/questionnaire.model";
import { ISection, SectionSchema } from "../models/section.model";
import { IQuestion, QuestionSchema } from "../models/question.model";
import { RecommendationSchema, IRecommendations } from "../models/recommendations.model";

export class DbService {
  private readonly _db: mongoose.Connection;
  public readonly questionnaireModel: Model<IQuestionnaire>;
  public readonly sectionModel: Model<ISection>;
  public readonly questionModel: Model<IQuestion>;
  public readonly recommendationModel: Model<IRecommendations>;

  constructor() {
    this._db = mongoose.connection;

    this.questionnaireModel = this._db.model<IQuestionnaire>("Questionnaire", QuestionnaireSchema);
    this.sectionModel = this._db.model<ISection>("Section", SectionSchema);
    this.questionModel = this._db.model<IQuestion>("Question", QuestionSchema);
    this.recommendationModel = this._db.model<IRecommendations>(
      "Recommendation",
      RecommendationSchema
    );
  }

  async connect() {
    await mongoose.connect(env.MONGO_URI);
    console.log("🎄 Database connected");
  }
}
